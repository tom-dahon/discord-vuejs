<template>
  <div class="chat d-flex flex-column justify-content-between">

      <div class="chatHeader d-flex justify-content-between flex-row h-1">
        <div class="chatHeader__left d-flex">
          <font-awesome-icon class="color fa-xl ms-3 mt-3" size="lg" color="grey"  icon="fa-solid fa-at" />
          <h3 id="channelName" class="m-2 ms-3 text-light">ttt</h3>
        </div>
        <div class="endDiv">
          <button @click="visible = !visible" id="newChannel" type="button" class="btn m-2 btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <font-awesome-icon class="color" size="sm" icon="fa-solid fa-user-plus" />
          </button>
          <button id="logout" type="button" class="btn btn-dark btn-sm mr-5">Déconnexion</button>
        </div>
      </div>
      
        <div class="chat__messages d-flex">
          <div class="message">
            <img class="picture" src="../../assets/avatar.png" alt="Gher slices">
            <div class="message__info">
              <h4>tt <span>tt</span></h4>
              <p>tt</p>
            </div>
          </div>
        </div>

      <div class="chat__input d-flex">
        <font-awesome-icon class="plusInput fa-2xl p-1" size="lg" icon="fa-solid fa-circle-plus" />
        <input type="text" class="d-flex ms-2" v-model="message" placeholder="Envoyer un message à "/>
      </div>
  </div>


  <popupConv v-if="!visible" key="convPopup"/>

</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import popupConv from './popupConv.vue';

export default {
  name: "chat",
  components: { 
    FontAwesomeIcon,
    popupConv,
  },
  data(){
  return {
            visible: false,
        }
      },
  methods:{}
}


</script>


<style>
.chat {
    height: 100vh;
    flex: 1;
    flex-direction: column;
    background-color: #313338;
}

/* Message */
.chat__messages {
    flex: 1;
    overflow: scroll;
}
.message {
    display: flex;
    padding-left: 20px;
    padding-top: 15px;
}
.picture{
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-top: 10px;
}
.message__info {
    margin-left: 20px;
}
.message__timestamp {
    color: grey;
    margin-left: 10px;
    font-size: x-small;
}
.message__info > p {
    width: 300px;
    word-wrap: break-word;
}
textarea:focus, input:focus{
    outline: none;
}

/* Header */
.chatHeader{
  background-color: 313338;
}

.chatHeader{
  border-bottom: black;
}

/* .btn:hover{
  border:none;
} */

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