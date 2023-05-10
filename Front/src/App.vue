<template>
  <body class="d-flex">
  <router-view/>
  </body>
</template>

<script>
import router from '@/router/index.js';

export default {
  name: 'App',
  created() {
    //const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJlbmJlbiIsImlhdCI6MTY4MzM1NTMzMiwiZXhwIjoxNjgzNDQxNzMyfQ.wwB1Krwer14n_eoQTLQdnsdOjLYKLjIVwrWxiQc2dsQ';
    localStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJlbmJlbiIsImlhdCI6MTY4MzcwOTc4MiwiZXhwIjoxNjgzNzk2MTgyfQ.L_UqKPPvM6r_Y06qpCddJDKV0Sy9rDbxDzBCIJeaHHA");
    const storedToken = localStorage.getItem('token');
    if (storedToken == "") {
      router.push('/signin');
    }
    else{
      router.push('/chat');
    }
  },
}
</script>

<style>

</style>
