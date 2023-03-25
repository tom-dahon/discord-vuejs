<template>
  <div class="sidebar d-flex">
    <div class="input-group input-group-sm mt-1 p-2 ">
      <input type="text" class="form-control border-0 mt-1 text-bg-dark" placeholder="Rechercher/Lancer une conversation" aria-describedby="inputGroup-sizing-sm">
    </div>
    <div class="sidebar__icon">
      <font-awesome-icon class="awesomeFake ms-2" icon="fa-solid fa-user" />
      <span>Amis</span>
    </div>
    <div class="sidebar__icon">
      <font-awesome-icon class="awesomeFake ms-2" icon="fa-solid fa-envelope" />
      <span>Demandes de message</span>
    </div>
    <div class="sidebar_users">
      <span class="me-6">MESSAGES PRIVÉS</span>
      <font-awesome-icon class="awesome" icon="fa-solid fa-plus" />
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
    name: "sidebar",
    components: { FontAwesomeIcon }
}
</script>

<style>
  .sidebar {
    flex-direction: column;
    row-gap: 20px;
    width: 250px;
    height: 100vh;
    background-color: #2f3135;
    color: gray;
    
  }
  .input-group {
    border-bottom: 2px solid #26282c;
  }
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
    margin-left: 10px;
    font-weight: 600;
  }


</style>