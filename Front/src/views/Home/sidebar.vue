<template>
  <div class="sidebar d-flex h-1 justify-content-between">
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
        
            <!-- <font-awesome-icon class="ms-5" size="md" icon="fa-solid fa-plus"/> -->
          </div>
          
          <div @click="getMessage(data.name,data.id)" class="sidebar__icon_conv" v-for="data of channels" :key=data>
            <router-link  style="text-decoration: none; color: inherit;" :to="'/chat/'+data.id">
            <font-awesome-icon size="lg" icon="awesomeFake fa-solid fa-users" />
            <span class="ms-3">{{ data.name }}</span>
            </router-link>
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
  <!--<popupErreur mess="" v-if="alerte"/>-->
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { getChannels,getMessages } from '@/api/caller.service';
import popupErreur from '@/components/chat/popupErreur.vue';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import store from '../../store/index.js'
import chat from '../../components/chat/chat.vue';
//import settingPopup from './settingPopup.vue';

export default {
    name: "sidebar",
    components: { 
      FontAwesomeIcon,
      popupErreur,
    },
    data(){
    return {
      isHidden: false,
      alerte: false,
      message: "",
      channels:null,
        }
      },
    methods:{
      getMessage : function(name,id) {
        store.commit('setIdChannel', id)
        store.commit('setNameChannel', name)
        this.setStoreMessage(id)
        // console.log(store.state.idChannel)
        // console.log(store.state.nameChannel)


        // this.$chat.$emit(getMessages(store.state.idChannel))
        // this.$refs.chat.getMessages(store.state.idChannel);
        // this.$root.$emit('component1') //like this
        // this.$root.$refs.Chat.foo();
        // component('Chat').c1method()//like this


        // }
        //   showAlerte(mess){
        //     this.popupErreur.showAlerte()
        //     document.getElementById("alerte").innerHTML = mess;
        //     setTimeout(() => {
        //       this.alerte = true;
        //     }, 1000);
        // },
    },
    setStoreMessage : function(id) {
      getMessages(id)
      .then(data => {
        store.commit('setMessage', data);
      })
      .catch(error => {
            //this.alerte = true;
            //this.popupErreur.changeProps("tatata")
            //this.message = "Erreur lors de la récupération des channels";
            console.log(error);
          });
    },
  },
    mounted(){
      getChannels()
      .then(data => {
        this.channels = data;
        store.commit('setIdChannel', data[0].id);
        store.commit('setNameChannel', data[0].name);
        this.setStoreMessage(data[0].id);
      })
      .catch(error => {
            //this.alerte = true;
            //this.popupErreur.changeProps("tatata")
            //this.message = "Erreur lors de la récupération des channels";
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

  /* menu */
  .sidebar__icon {
    padding: 10px;
  }
  input {
    color: #1c87c9;
    opacity: 1;
  }
  .sidebar__icon > span {
    font-weight: 600;
  }
  .sidebar__icon_conv{
    padding:10px;
  }
  .sidebar__icon_conv > span {
    font-weight: 600;
  }
  .sidebar__icon_conv:hover {
    padding: 10px;
    color: #fff;
    background-color: #40464b;
    cursor: pointer;
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