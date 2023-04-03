<template>
  <body class="bg-image">
    <div class="container w-50 position-absolute top-50 start-50 translate-middle">
      <div id="form_frame" class="p-4">
        <h2 class="text-white">Connexion</h2>
   

            <div class="form-outline mb-4">
              <label class="form-label text-light" for="username">Nom d'utilisateur</label>
              <input v-model="username" name="username" type="text" id="username" class="text-white form-control" />
            </div>
          
            <div class="form-outline mb-4">
              <label class="form-label text-light" for="password">Mot de passe</label>
              <input v-model="password" name="password" type="password" id="password" class="text-white form-control" />
            </div>

            <button @click="signIn()" class="btn text-light btn-block mb-1">Connexion</button>
            <h6 class="text-white pt-2">Pas de compte ? <a href="/signup">Inscription</a></h6>
    
          <div id="form_error" class="alert alert-danger d-none" role="alert">
            Les informations saisies sont incorrectes
          </div>  
        </div>  
      </div>

</body>
</template>

<script setup>
  import { useStore } from 'vuex'

  const store = useStore()
  let token = 'dsdsqdq';
  store.commit('setToken', token)

  async function signIn() {
    const data = { "username": username.value,"password": password.value };
    var headers = new Headers();
    headers.append("Content-Type","application/json");
    var requestOptions = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
      };
      
    let res = await fetch('http://localhost:8080/api/auth/signin',requestOptions)
        .catch(err =>{
          console.log(err);
        });
        if(res.status == 200) {
          let infos = await res.json();
        console.log(infos.accessToken)
        //window.location.replace('../home/index.html');
        }
        
  }

  console.log(store.state.token)

</script>

<style>
body {
    background-image: url("../../assets/signin-background.png");
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