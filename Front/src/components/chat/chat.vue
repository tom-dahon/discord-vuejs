<template>
  <div class="servers">
    <div class="logo">
      <span class="tooltiptext">Messages privés</span>
      <img src="../../assets/discord2.png" alt="Discord" />
    </div>
    <div class="logo">
      <span class="tooltiptext">Groupe</span>
      <img src="../../assets/discord3.png" alt="Discord" />
    </div>
  </div>
  <sidebar/>
  <div class="chat d-flex flex-column flex-grow-1 bd-highlight">
      <div class="chatHeader d-flex justify-content-between">
        <div class="chatHeader__left d-flex">
          <font-awesome-icon class="color fa-xl ms-3 mt-3" size="lg" color="grey"  icon="fa-solid fa-at" />
          <h3 id="channelName" class="m-2 ms-3 text-light">{{store.state.nameChannel}}</h3>
        </div>
        <div class="endDiv">
          <button  id="newChannel" v-on:click="toggleModale" type="button" class="btn m-2 btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <font-awesome-icon class="color" size="sm" icon="fa-solid fa-user-plus" />
          </button>
          <button @click="logout()" id="logout" type="button" class="btn btn-dark btn-sm mr-5">Déconnexion</button>
        </div>
      </div>
      
      <div class="d-flex flex-grow-1 bd-highlight">
        <div class="chat d-flex flex-grow-1 flex-column">

          <div class="chat_message_scroll d-flex">
          <div class="chat__messages d-flex justify-content-start">
            <MessageComponent v-for="mess in messages" :key="mess" v-bind:text="mess"/>
          </div>
          </div>

          <div class="chat__input d-flex justify-content-end">
            <font-awesome-icon class="plusInput fa-2xl" size="lg" icon="fa-solid fa-circle-plus" />
            <input type="text" class="d-flex ms-2 bg-gradient-primary text-white" v-on:keyup.enter="envoieMessage" v-model="messagePlaceHolder" placeholder="Envoyer un message"/>
          </div>
          <div class="cover-bar"></div>

        </div>
        
        <div class="onlineTable d-flex flex-column">
          <span class="ms-2 text-light">En Ligne</span>
          <div class="enLigne">
            <div class="online d-flex bd-highlight">
              <img class="pictureOnline" src="../../assets/avatar.png" alt="Gher slices">
              <p class="onlineText m-3">rsedtfyguhijok</p>>
            </div>
          </div>
          <span class="ms-2 text-light text-sm">Hors Ligne</span>
          <div class="horsLigne">
            <div class="online d-flex bd-highlight">
              <img class="pictureOnline" src="../../assets/avatar.png" alt="Gher slices">
              <p class="onlineText m-3">rsedtfyguhijok</p>>
            </div>
          </div>
        </div>
      </div>
  </div>
  
  <!-- <PopupConversation :revele="revele" :toggleModale="toggleModale"></PopupConversation> -->


  <popupConv v-if="!visible" key="convPopup"/>

</template>
<script setup>
// import PopupConversation from '../../../../component/PopupConversation.vue'
import data from './data.json'
import SelectBox from './MultipleSelect/Selectbox/index.vue';
import { ref, onMounted, computed } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import popupConv from './popupConv.vue';
import sidebar from '../../views/Home/sidebar.vue';
import store from '../../store/index.js';
import { getMessages,getChannels,sendMessage } from '../../api/caller.service';
import MessageComponent from './MessageComponent.vue'

onMounted(() => {
  if(store.state.idChannel) {
    setInterval(() => {
      requestMessage(store.state.idChannel)
    }, 6000)
  }
})

const visible = ref(false);
const channelListe = ref(null);
const alerte = ref(false);
const timer = ref(null);
const messagePlaceHolder = ref(null)

// const showAlerte = (mess) => {
//   alerte.value = true;
//   document.getElementById("alerte").innerHTML = mess;
// };

const getChannel= () => {  
  getChannels()
      .then(data => {
        this.channels = data;
        store.commit('setIdChannel', data[0].id);
        store.commit('setNameChannel', data[0].name);
      })
      .catch(error => {
            //this.alerte = true;
            //this.popupErreur.changeProps("tatata")
            //this.message = "Erreur lors de la récupération des channels";
            console.log(error);
          });
        }

const requestMessage = (id) => {
  getMessages(id)
    .then(data => {
      // console.log(data);
      store.commit('setMessage', data);
    })
    .catch(error => {
      console.log(error);
    });
};

const envoieMessage=() => {
  sendMessage(store.state.idChannel, messagePlaceHolder.value, store.state.idUser)
    .then(data => {
      console.log(data);
      requestMessage(store.state.idChannel);
      this.messagePlaceHolder.value = '';
    })
    .catch(error => {
      console.log(error);
    });
};

const messages = computed(() => {
  return store.state.message;
});

// const toggleModale= function() {
//       this.revele = !this.revele;
//     }

</script>

<style>
/* Servers */
.servers{ 
  background-color: #23272a;
  }
.logo{
  margin: 7px;
  margin-top:15px;
  position: relative;
  /* display: inline-block; */
  border:none;
}
.logo > img {
  cursor: pointer;
  border: none;
}
.tooltiptext {
  visibility: hidden;
  width: 160px;
  background-color: rgb(0, 0, 0);
  opacity: .7;
  color: #ebe8e8;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  top: 5px;
  left: 110%;
}

.logo:hover .tooltiptext {
  visibility: visible;
}

div.logo::before{
  content:none;
}
/**/
.chat {
    background-color: #313338;
}
/* scroll */
/* 
.chat__messages::-webkit-scrollbar,
.chat__messages::-webkit-scrollbar-thumb {
  overflow:visible;
  border-radius: 4px;
}
.chat__messages::-webkit-scrollbar-thumb {
  background: rgba(0,0,0,.2); 
}
.cover-bar {
  position: absolute;
  background: #fff;;
  height: 100%;  
  top: 0;
  right: 0;
  width: .4em;
  -webkit-transition: all .5s;
  opacity: 1;
}
/* MAGIC HAPPENS HERE */

/* Message */
.chat__messages {
  display: block;
  flex-direction: column;
  border-top:2px solid #26282c;
  flex:1;
}
/* .chat_message_scroll{
  overflow-y: scroll;
} */
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

/* Online Part */
.onlineTable{
  border-top:2px solid #26282c;
  background-color:#2B2D31;
}
.onlineText{
  color:#F1C40F;
  text-align: center;
}

.pictureOnline{
  margin-top:9%;
  margin-left: 8%;
  height:33px;
}

</style>