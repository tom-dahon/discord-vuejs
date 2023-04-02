<template>
  <div class="chat d-flex flex-column justify-content-between">

      <div class="chatHeader d-flex justify-content-between flex-row h-1">
        <div class="chatHeader__left d-flex">
          <font-awesome-icon class="color fa-xl ms-3 mt-3" size="lg" color="grey"  icon="fa-solid fa-at" />
          <h3 id="channelName" class="m-2 ms-3 text-light">ttt</h3>
        </div>
        <div class="endDiv">
          <button id="newChannel" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <font-awesome-icon class="color fa-ms m-1" size="lg" icon="fa-solid fa-user-plus" />
          </button>
          <button id="logout" type="button" class="btn btn-dark btn-sm mr-5">Déconnexion</button>
        </div>
      </div>

      <div class="chat__messages d-flex">
      </div>

      <div class="chat__input d-flex">
        <font-awesome-icon class="plusInput fa-2xl p-1" size="lg" icon="fa-solid fa-circle-plus" />
        <input type="text" class="d-flex ms-2" placeholder="Envoyer un message à " >
      </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: "chat",
  components: { 
    FontAwesomeIcon,
  }
}
</script>


<style>
.chat {
    background-color: #313338;
    height: 100vh;
    flex: 1;
}

textarea:focus, input:focus{
    outline: none;
}


.chatHeader{
  background-color: 313338;
}

.chatHeader{
  border-bottom: black;
}

.chat__messages{
  border-top:2px solid #26282c;
  flex:1;
}

.color{
  color: lightgray;
}

.endDiv{
  margin-right: 1%;
}

.chat__input {
    align-items: center;
    padding: 10px;
    margin: 20px;
    border-radius: 15px;
    background-color: #383A40;
    color: lightgray;
}

input{
  width:100%;
  border:none;
  outline-width: 0;
  background-color : #383A40!important; 
  cursor: pointer;
}

</style>