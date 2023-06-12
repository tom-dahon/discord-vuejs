<template>
  <body class="bg-image">
    <div class="container w-50 position-absolute top-50 start-50 translate-middle">
      <div id="form_frame" class="p-4">
        <h2 class="text-white">Créer un compte</h2>


        <div class="form-outline mb-4">
          <label class="form-label text-light" for="email">Email</label>
          <input v-model="email" name="email" type="email" id="email" class="text-white form-control" />
        </div>

        <div class="form-outline mb-4">
          <label class="form-label text-light" for="username">Nom d'utilisateur</label>
          <input v-model="username" name="username" type="text" id="username" class="text-white form-control" />
        </div>

        <div class="form-outline mb-4">
          <label class="form-label text-light" for="password">Mot de passe</label>
          <input v-model="password" name="password" type="password" id="password" class="text-white form-control" />
        </div>

        <button @click="signUp()" class="btn text-white mb-1">Inscription</button>


        <div id="form_error" class="alert alert-danger d-none" role="alert">
          Les informations saisies sont incorrectes/vides
        </div>

        <a href="/signin" class="text-secondary">Tu as déjà un compte ?</a>
      </div>
    </div>

  </body>
</template>

<script setup>
import { ref } from 'vue';
import router from '../../router'
import { register } from '@/api/caller.service';

const username = ref("")
const email = ref("")
const password = ref("")

function signUp() {
  let userData = { "username": username.value, "email": email.value, "password": password.value };
  register(userData)
  .then(data => {
    if (data.status == 200) {
      localStorage.setItem('token', data.data.accessToken);
      localStorage.setItem('username', data.data.username);
      localStorage.setItem('userId', data.data.id);
      router.push('/chat');
    }
  })
  .catch(error => {
    console.log(error);
  });
}

</script>

<style>
body {
  background-image: url("../../assets/signup-background.jpg");
  height: 100vh;
}

#form_frame {
  background-color: #343A3F;
}

button {
  background-color: #5865F2 !important;
}

.bg-image {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>