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
  import store from '../../store'
  import router from '../../router'

  async function signUp() {
    const data = { "email": email.value, "username": username.value, "password": password.value, "roleId": 1 };
    var headers = new Headers();
    headers.append("Content-Type","application/json");
    var requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
      };
      
    let res = await fetch('http://localhost:8080/api/auth/signup',requestOptions)
        .catch(err =>{
          console.log(err);
        });
        if(res.status == 200) {
          let infos = await res.json();
          store.commit('setToken', infos.accessToken)
          router.push('/chat')
        } else if(res.status == 422) {
          form_error.classList.remove("d-none")
        }
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

.bg-image{
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>