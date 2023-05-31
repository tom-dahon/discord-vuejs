<template>
  
    <!-- Modal Boostrap -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Création d'une conversation</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body text-center">

            <h2>Nom du groupe</h2>
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="groupName" placeholder="Nom du groupe" v-model="groupName">
              <label for="groupName"></label>
            </div>

            <h2>Ajout d'un Utilisateur</h2>
            <div>
              <SelectBox :data="users"/>
            </div>   
            
            <div>
              <button data-bs-dismiss="modal" @click="addChannel">Créer un channel</button>
            </div>
        </div>
      </div>
    </div>
    </div>
  
</template>

<script>
import data from './data.json'
import SelectBox from './MultipleSelect/Selectbox/index.vue'
import { getUsers, createChannel } from '@/api/caller.service';
import store from '../../store/index.js';
  export default {
  methods: {
    addChannel: function () {
      createChannel(this.groupName, store.state.selectedItem, localStorage.getItem("userId"))
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
    },
  },
  props: {
  },
    name: "popupConv",
    components: {  SelectBox },
    data () {
      return {
        selected: null,
        options: ['list', 'of', 'options'],
        users: null,
        groupName: ""
      };
    },
    mounted() {
      getUsers(localStorage.getItem("userId"))
      .then(data => {
        this.users = data;
      })
      .catch(error => {
        console.log(error);
      });
  }
  }
</script>

<style>
#groupName{
  color:white;
}
</style>
