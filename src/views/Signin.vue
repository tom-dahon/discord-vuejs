<template>
  <body class="bg-image">
    <div class="container w-50 position-absolute top-50 start-50 translate-middle">
      <div id="form_frame" class="p-4">
        <h2 class="text-white">Connexion</h2>
          <form>

            <div class="form-outline mb-4">
              <label class="form-label text-light" for="username">Nom d'utilisateur</label>
              <input name="username" type="text" id="username" class="text-white form-control" />
            </div>
          
            <div class="form-outline mb-4">
              <label class="form-label text-light" for="password">Mot de passe</label>
              <input name="password" type="password" id="password" class="text-white form-control" />
            </div>

            <button type="submit" class="btn text-light btn-block mb-1">Connexion</button>
            <h6 class="text-white pt-2">Pas de compte ? <a href="/signup">Inscription</a></h6>
          </form>
          <div id="form_error" class="alert alert-danger d-none" role="alert">
            Les informations saisies sont incorrectes
          </div>  
        </div>  
      </div>

</body>
</template>

<script>


export default {
  name: 'Signin',
}
</script>

<style>
body {
    background-image: url("../assets/signin-background.png");
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