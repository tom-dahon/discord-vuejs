<template>
  <sidebar v-if="sidebarVisible" />
    
  <div class="chat d-flex flex-column flex-grow-1 bd-highlight">
    <div class="chatHeader d-flex justify-content-between">
      <div class="chatHeader__left d-flex">
        <font-awesome-icon class="color fa-xl ms-3 mt-3" size="lg"  icon="fa-solid fa-chevron-left" @click="toggleSidebar()"/>
        <font-awesome-icon class="color fa-xl ms-3 mt-3" size="lg" color="grey" icon="fa-solid fa-at" />
        <h3 id="channelName" class="m-2 ms-3 text-light">{{ store.state.nameChannel }}</h3>
      </div>
      <div class="endDiv">
        <button id="newChannel" v-on:click="toggleModale" type="button" class="btn m-2 btn-sm" data-bs-toggle="modal"
          data-bs-target="#exampleModal">
          <font-awesome-icon class="color" size="sm" icon="fa-solid fa-user-plus" />
        </button>
        <button @click="logout()" id="logout" type="button" class="btn btn-dark btn-sm mr-5">Déconnexion</button>
      </div>
    </div>


    <div class="d-flex flex-grow-1 bd-highlight">
      <section class="w-100 chat-container">

        <div ref="chatbox" class="overflow-auto mx-4 chat-body" data-mdb-perfect-scrollbar="true">
          <MessageComponent v-if="messages.length" v-for="mess in messages" :key="mess" v-bind:text="mess" />
         
        </div>
        <div class="text-muted chat-foot d-flex justify-content-start align-items-center p-3">
          <input v-on:change="onImageChange" type="file" class="d-none" id="pictureMessage">
          <label for="pictureMessage">
            <font-awesome-icon class="plusInput fa-2xl" size="lg" icon="fa-solid fa-circle-plus" />
          </label>
          <input type="text" class="d-flex ms-2 bg-gradient-primary text-white" v-on:keyup.enter="envoieMessage"
            v-model="messagePlaceHolder" placeholder="Envoyer un message" />
          <div class="cover-bar"></div>
        </div>
       
      </section>


   
    </div>
  </div>

  <popupConv v-if="!visible" key="convPopup" />
</template>
<script setup>
import { ref, onMounted, computed } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import popupConv from './popupConv.vue'
import sidebar from '../../views/Home/sidebar.vue'
import store from '../../store/index.js'
import { getMessages, getChannels, sendMessage, getPrivateChannels, getGroups } from '../../api/caller.service';
import MessageComponent from './MessageComponent.vue'
import { getDownloadURL, getStorage, uploadBytes, ref as fbRef } from 'firebase/storage'
import router from '@/router'

onMounted(() => {
  if (store.state.idChannel) {
    setInterval(() => {
      requestMessage(store.state.idChannel)
    }, 6000)
  }
})

const visible = ref(false)
const sidebarVisible = ref(true)
const channelListe = ref(null)
const alerte = ref(false)
const timer = ref(null)
const messagePlaceHolder = ref(null)
let channels = ref(null)
let imageMessage = ""
const chatbox = ref(null)

const toggleSidebar = () => {
  sidebarVisible.value = !sidebarVisible.value
}

const logout = () => {
  localStorage.clear()
  router.push('/signin')
}

const onImageChange = (e) => {
  const files = e.target.files || e.dataTransfer.files
  if (!files.length)
    return

  imageMessage = files[0]
  //imageName = files[0].name
}


const getChannel = () => {
  getChannels()
    .then(data => {
      this.channels = data;
      store.commit('setIdChannel', data[0].id)
      store.commit('setNameChannel', data[0].name)
    })
    .catch(error => {
      //this.alerte = true;
      //this.popupErreur.changeProps("tatata")
      //this.message = "Erreur lors de la récupération des channels";
      console.log(error)
    });
}

const requestMessage = (id) => {
  getMessages(id)
    .then(data => {
      // console.log(data);
      if(data != messages)
        store.commit('setMessage', data)
    })
    .catch(error => {
      console.log(error)
    });
};

const envoieMessage = () => {
  if (imageMessage) {
    const uniqueName = Date.now()
    const storage = getStorage()
    const storageRef = fbRef(storage, 'messages/' + uniqueName)
    uploadBytes(storageRef, imageMessage).then((snapshot) => {
      console.log('Image envoyée !');
    })
      .then(() => {
        getDownloadURL(fbRef(storage, 'messages/' + uniqueName))
          .then((url) => {
            sendMessage(store.state.idChannel, messagePlaceHolder.value, localStorage.getItem("userId"), url)
              .then(data => {
                requestMessage(store.state.idChannel)
                messagePlaceHolder.value = ''
              })
          })
          .catch((error) => {
            console.log(error)
          });
      })
  } else {
    sendMessage(store.state.idChannel, messagePlaceHolder.value, localStorage.getItem("userId"), "")
      .then(data => {
        requestMessage(store.state.idChannel)
        messagePlaceHolder.value = ''
      })
  }



};

const messages = computed(() => {
  return store.state.message
});

</script>

<style>
/* Servers */
.servers {
  background-color: #23272a;
}

.logo {
  margin: 7px;
  margin-top: 15px;
  position: relative;
  /* display: inline-block; */
  border: none;
}

.logo>img {
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

div.logo::before {
  content: none;
}

/**/
.chat {
  background-color: #313338;
}

.chat-container {
  position: relative;
  width: 100%;
  height: 100vh;
  padding-top: 5vh;
  padding-bottom: 5vh;
  box-sizing: border-box;
}

.chat-head {
  background: red;
  position: fixed;
  top: 0;
  width: 100%;
  height: 5vh;
}

.chat-body {
  position: relative;
  overflow-y: scroll;
  padding-bottom: 50px;
  height: 90vh;
}

.chat-foot {
  background-color: #313338;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 5vh;
}


/* Message */
.chat__messages {
  display: block;
  flex-direction: column;
  border-top: 2px solid #26282c;
  flex: 1;
}

/* .chat_message_scroll{
  overflow-y: scroll;
} */
.message {
  display: flex;
  padding-left: 20px;
  padding-top: 15px;
}

.picture {
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

.message__info>p {
  width: 300px;
  word-wrap: break-word;
}

textarea:focus,
input:focus {
  outline: none;
}

/* Header */
.chatHeader {
  background-color: 313338;
}

.chatHeader {
  border-bottom: black;
}

/* .btn:hover{
  border:none;
} */

.color {
  color: lightgray;
}

.endDiv {
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

input {
  width: 100%;
  border: none;
  outline-width: 0;
  background-color: #383A40 !important;
  cursor: pointer;
}

/* Online Part */
.onlineTable {
  border-top: 2px solid #26282c;
  background-color: #2B2D31;
}

.onlineText {
  color: #F1C40F;
  text-align: center;
}

.pictureOnline {
  margin-top: 9%;
  margin-left: 8%;
  height: 33px;
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
</style>