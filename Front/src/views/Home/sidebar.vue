<template>
  <div class="sidebar d-flex h-1 justify-content-between">
    <div v-if="alerte" id="alerte" class="alert alert-danger position-absolute top-50 start-50 translate-middle" role="alert">
    </div>
    <div class="input-group input-group-sm mt-1 p-2 ">
      <input type="text" class="form-control border-0 text-bg-dark" placeholder="Rechercher/Lancer une conversation" aria-describedby="inputGroup-sizing-sm">
    </div>
    <div class="sidebar__icon">
      <font-awesome-icon size="lg" class="awesomeFake ms-2" icon="fa-solid fa-user" />
      <span class="ms-3">Amis</span>
    </div>
    <div class="sidebar__icon">
      <font-awesome-icon size="lg" class="awesomeFake ms-2" icon="fa-solid fa-envelope" />
      <span class="ms-3">Demandes de message</span>
    </div>
    <div class="sidebar_users d-flex ms-3">
      <div class="sidebar__usersHeader justify-content-between">
          <div class="messagePrivee justify-content-between">
            <span class="messagePrive">MESSAGES PRIVÉS</span>
        
            <font-awesome-icon class="ms-5" size="md" icon="fa-solid fa-plus"/>
          </div>

          <div class="sidebar__icon">
            <font-awesome-icon size="lg" class="awesomeFake ms-2" icon="fa-solid fa-envelope" />
            <span class="ms-3">conv message</span>
          </div>
      </div>
    </div>
    
    <div class="sidebar__profile d-flex">
          <div>
            <span class="status"></span>
            <img class="img-fluid" id="avatar" src="../../assets/avatar.png" alt="avatar" />
          </div>
          <div class="sidebar__profileInfo flex-fill position-relative p-3">
            <h3 id="currentUsername"></h3>
            <p id="userTag"></p>
          </div>
          <div class="sidebar__profileIcons position-relative">
            <font-awesome-icon class="p-2" size="lg" icon="fa-solid fa-microphone" />          
            <font-awesome-icon class="p-2" size="lg" icon="fa-solid fa-headphones" />   

            <span type="button" class="spmodal btn-primary" data-bs-toggle="modal" data-bs-target="#setting">
              <font-awesome-icon class="p-2" size="lg" icon="fa-solid fa-gear" />
            </span>
          </div>
    </div>
  </div>
  
    <!-- Modal Boostrap -->
  <div class="modal fade" id="setting" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Réglages</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h2>Renommer le compte</h2>
            <input type="text" class="form-control" aria-label="Text input with dropdown button" placeholder="Pseudo">
          </div>
          <div class="modal-body">
            <h2>Photo de profil</h2>
            <input type="text" class="form-control" aria-label="Text input with dropdown button" placeholder="Pseudo">
          </div>
          <div class="modal-footer d-flex">
            <button type="button" class="btn btn-danger">Supprimer le compte</button>
            <button id="createChannelButton" type="button" class="btn btn-primary" data-bs-dismiss="modal">Valider</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { getChannels } from '@/api/caller.service';
//import settingPopup from './settingPopup.vue';

export default {
    name: "sidebar",
    components: { 
      FontAwesomeIcon,
    },
    data(){
    return {
      isHidden: false,
      alerte: false,
        }
      },
    methods:{
      showAlerte(mess){
        document.getElementById("alerte").innerHTML = mess;
        setTimeout(() => {
          this.alerte = true;
        }, 1000);
    },
    },
    mounted(){
      getChannels()
      .then(data => {
            if (data.data.status == 200) {
              console.log(data.data)
             }
          })
          .catch(error => {
            this.showAlerte(data.data.status)
            console.log(error);
          });
    },
}
</script>

<style>
  .sidebar {
    flex-direction: column;
    row-gap: 20px;
    width: 250px;
    background-color: #2f3135;
    color: gray;
    
  }
  .input-group {
    border-bottom: 2px solid #26282c;
  }

  /* Fake menu */
  .sidebar__icon {
    padding: 10px;
    /* cursor: pointer; */
  }
  /* .sidebar__icon:hover {
    color: #fff;
    background-color: #40464b;
    cursor: pointer;
  } */
  input {
    color: #1c87c9;
    opacity: 1;
  }
  .sidebar__icon > span {
    font-weight: 600;
  }
  .sidebar_users{
    flex:auto;
  }

  /* Profile */
  .sidebar__profile {
    align-items: center;
    background-color: #292a2d;
    padding-left: 10px;
  }

  .sidebar__profile > div > img {
    height: 45px;
    width: 45px;
    margin: 5px;
  }

  /* Popup */
  .button{
  background-color:red;
}
</style>