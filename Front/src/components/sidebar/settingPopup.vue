<template>
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
                <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01">
                <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
              </div>
            </div>
            
            <div class="modal-footer d-flex">
              <button type="button" class="button btn">Supprimer le compte</button>
              <button id="createChannelButton" type="button" class="btn btn-primary" data-bs-dismiss="modal">Valider</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "settingPopup",
}
</script>

<style>
.button{
  background-color:red;
}
</style>