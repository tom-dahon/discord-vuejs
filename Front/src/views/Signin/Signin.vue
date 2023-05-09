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

            <button @click="handleSubmit" class="btn text-light btn-block mb-1">Connexion</button>
            <h6 class="text-white pt-2">Pas de compte ? <a href="/signup">Inscription</a></h6>
    
          <div id="form_error" class="alert alert-danger d-none" role="alert">
            Les informations saisies sont incorrectes
          </div>  
        </div>  
      </div>

</body>
</template>

<script>
  import store from '../../store'
  import router from '../../router'
  import { getConnexion} from '../../api/caller.service'
  export default {
  methods: {
      handleSubmit() {
        const userData = { "username": username.value,"password": password.value };
        console.log(userData.password,userData.username);

        getConnexion(userData)
        .then(data => {
          if (data.status == 200) {
          localStorage.setItem('token', data.data.token);
          router.push('/chat');
            }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
  // handleSubmit() {
  //     const userData = { "username": username.value,"password": password.value };
  //   },
  //   getConnnexion(userData)
  //     .then(data => {
  //       if (data.status == 200) {
  //         localStorage.setItem('token', "data");
  //         router.push('/chat');
  //       }
  //     }),
  //     .catch(error => {
  //       console.log(error);
  //     }),
  //   },
  // }
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
    background-color: #5865F2 !important;
}
.bg-image{
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>