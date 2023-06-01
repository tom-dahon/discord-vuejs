<template>
  <div class="servers">
    <div class="logo" @click="switchToPrivateChannels">
      <span class="tooltiptext">Messages privés</span>
      <img src="../../assets/discord2.png" alt="Discord" />
    </div>
    <div class="logo" @click="switchToGroups">
      <span class="tooltiptext">Groupe</span>
      <img src="../../assets/discord3.png" alt="Discord" />
    </div>
  </div>
  <div class="sidebar d-flex h-1 justify-content-between">
    <div class="input-group input-group-sm mt-1 p-2 ">
      <input type="text" class="form-control border-0 text-bg-dark" placeholder="Rechercher/Lancer une conversation"
        aria-describedby="inputGroup-sizing-sm">
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

        <div @click="getMessage(data.name, data.id)" class="sidebar__icon_conv" v-for="data of channels" :key=data>
          <router-link style="text-decoration: none; color: inherit;" :to="'/chat/' + data.id">
            <font-awesome-icon size="lg" icon="awesomeFake fa-solid fa-users" />
            <span class="ms-3">{{ data.name }}</span>
          </router-link>
        </div>

      </div>
    </div>

    <div class="sidebar__profile d-flex">
      <div>
        <span class="status"></span>
        <img class="img-fluid rounded-circle" ref="avatar" id="avatar" :src="user?.profile_picture" alt="avatar" />
      </div>
      <div class="sidebar__profileInfo flex-fill position-relative px-3">
        <p class="text-white h6" id="currentUsername">{{ user?.username }}</p>
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
          <div class="custom-file">
            <input accept="image/*" v-on:change="onFileChange" type="file" id="inputGroupFile01"
              aria-describedby="inputGroupFileAddon01">
            <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
            <button @click="upload">Sauvegarder</button>
          </div>
        </div>
        <div class="modal-footer d-flex">
          <button type="button" class="btn btn-danger">Supprimer le compte</button>
          <button id="createChannelButton" type="button" class="btn btn-primary" data-bs-dismiss="modal">Valider</button>
          <img id="myimg" src="" alt="">
        </div>
      </div>
    </div>
  </div>
  <!--<popupErreur mess="" v-if="alerte"/>-->
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { getChannels, getGroups, getMessages, getPrivateChannels, setProfilePicture, getUser } from '@/api/caller.service';
import popupErreur from '@/components/chat/popupErreur.vue';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import store from '../../store/index.js'
import chat from '../../components/chat/chat.vue';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
//import settingPopup from './settingPopup.vue';

export default {
  name: "sidebar",
  components: {
    FontAwesomeIcon,
    popupErreur,
  },
  data() {
    return {
      isHidden: false,
      alerte: false,
      message: "",
      channels: null,
      profilePicture: "",
      pictureName: "",
      user: null,
      actualProfilePicture: ""
    }
  },
  methods: {

    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length)
        return
      this.profilePicture = files[0]
      this.pictureName = files[0].name
    },

    upload: function () {
      const storage = getStorage()
      let actualPath = ""
      const storageRef = ref(storage, localStorage.getItem("userId"));
      uploadBytes(storageRef, this.profilePicture).then((snapshot) => {
        console.log('Image envoyée !');
      });
      this.$refs.avatar.src = URL.createObjectURL(this.profilePicture)

      getDownloadURL(ref(storage, localStorage.getItem("userId")))
        .then((url) => {
          setProfilePicture(localStorage.getItem("userId"), url)
            .then((path) => {
              console.log("dqsd")
            })
        })
        .catch((error) => {
          console.log(error)
        });

    },

    switchToPrivateChannels: function () {
      getPrivateChannels()
        .then(privateChannels => {
          this.channels = privateChannels
          store.commit('setIdChannel', privateChannels[0].id)
          store.commit('setNameChannel', privateChannels[0].name)
        })
      store.commit("setChannelType", "private")
    },

    switchToGroups: function () {
      getGroups()
        .then(groups => {
          console.log(groups)
          this.channels = groups
          store.commit('setIdChannel', groups[0].id)
          store.commit('setNameChannel', groups[0].name)
        })
      store.commit("setChannelType", "group")
    },

    getMessage: function (name, id) {
      store.commit('setIdChannel', id)
      store.commit('setNameChannel', name)
      this.setStoreMessage(id)
    },
    setStoreMessage: function (id) {
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
  mounted() {
    getUser(localStorage.getItem("userId"))
      .then(user => {
        console.log(user)
        this.user = user
      })
      .catch(error => {
        console.log(error)
      });

    getChannels(localStorage.getItem('username'))
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
  computed: {
    actualProfilePictureCompited() {
      console.log(this.actualProfilePicture)
      return this.actualProfilePicture;
    },
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

.sidebar__icon>span {
  font-weight: 600;
}

.sidebar__icon_conv {
  padding: 10px;
}

.sidebar__icon_conv>span {
  font-weight: 600;
}

.sidebar__icon_conv:hover {
  padding: 10px;
  color: #fff;
  background-color: #40464b;
  cursor: pointer;
}

.sidebar_users {
  flex: auto;
}

/* Profile */
.sidebar__profile {
  align-items: center;
  background-color: #292a2d;
  padding-left: 10px;
}

.sidebar__profile>div>img {
  height: 45px;
  width: 45px;
  margin: 5px;
}

/* Popup */
.button {
  background-color: red;
}
</style>