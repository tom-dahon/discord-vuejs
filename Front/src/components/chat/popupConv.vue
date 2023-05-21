<template>
  
    <!-- Modal Boostrap -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Conversation</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body text-center">

            <h2>Nom du groupe</h2>
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="groupName" placeholder="Nom du groupe">
              <label for="groupName"></label>
            </div>

            <h2>Ajout d'un Utilisateur</h2>
            <div>
              <SelectBox :data="data"/>
            </div>         
        </div>
      </div>
    </div>
    </div>
  
</template>

<script>
import data from './data.json'
import SelectBox from './MultipleSelect/Selectbox/index.vue'
  export default {
    name: "popupConv",
    components: {  SelectBox },
    data () {
      return {
        selected: null,
        options: ['list', 'of', 'options'],
        data: data,
      };
    }
  }
</script>

<style>
</style>
