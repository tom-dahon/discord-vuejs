<template>
  <body class="bg-image">
    <div class="container w-50 position-absolute top-50 start-50 translate-middle">
      <div id="form_frame" class="p-4">
        <h2 class="text-white">Créer un compte</h2>
        <form>

          <div class="form-outline mb-4">
            <label class="form-label text-light" for="email">Email</label>
            <input name="email" type="email" id="email" class="text-white form-control" />
        </div>

            <div class="form-outline mb-4">
              <label class="form-label text-light" for="username">Nom d'utilisateur</label>
              <input name="username" type="text" id="username" class="text-white form-control" />
            </div>
          
            <div class="form-outline mb-4">
              <label class="form-label text-light" for="password">Mot de passe</label>
              <input name="password" type="password" id="password" class="text-white form-control" />
            </div>

            <button type="submit" class="btn text-white mb-1">Inscription</button>
           
          </form>
          <div id="email_error" class="alert alert-danger d-none" role="alert">
            Le format de l'email est incorrect
          </div>  

          <a href="/signin" class="text-secondary">Tu as déjà un compte ?</a>
      </div>
      </div>

</body>
</template>

<script>


export default {
  name: 'Signup',
}
</script>

<style>
body {
    background-image: url("../assets/signup-background.jpg");
    height: 100vh;
}

#form_frame {
    background-color: #343A3F;
}

button {
    background-color: #6E89E0 !important;
}

.bg-image{
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>