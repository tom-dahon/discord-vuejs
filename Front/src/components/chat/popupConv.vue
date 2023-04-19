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

            <form class="was-validated mb-3">
              <select class="form-select" data-placeholder="Utilisateurs" id="valid-was-validated-multiple-field" multiple>
              </select>
            </form>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
            <button id="createChannelButton" type="button" class="btn btn-primary" data-bs-dismiss="modal">Créer</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  
</template>

<script>
export default {
  name: "popupConv",
}

</script>

<style>

</style>