<template>
  <div class="sidebar d-flex h-1 justify-content-between">
    <div class="input-group input-group-sm mt-1 p-2 ">
      <input type="text" class="form-control border-0  text-bg-dark" placeholder="Rechercher/Lancer une conversation" aria-describedby="inputGroup-sizing-sm">
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
            <font-awesome-icon class="p-2" size="lg" icon="fa-solid fa-gear" />
          </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {conversation} from './conversation.vue';

export default {
    name: "sidebar",
    components: { 
      FontAwesomeIcon,
      conversation,
    }
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
    cursor: pointer;
  }
  .sidebar__icon:hover {
    color: #fff;
    background-color: #40464b;
    cursor: pointer;
  }
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
      height: 40px;
      width: 40px;
      margin: 0;
  }




</style>