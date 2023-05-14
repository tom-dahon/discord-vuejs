<template>
  <body class="d-flex">
  <router-view/>
  </body>
</template>

<script>
import router from '@/router/index.js';
import {getConnexion} from '../src/api/caller.service';

export default {
  name: 'App',
  created() {
    
    //const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJlbmJlbiIsImlhdCI6MTY4MzM1NTMzMiwiZXhwIjoxNjgzNDQxNzMyfQ.wwB1Krwer14n_eoQTLQdnsdOjLYKLjIVwrWxiQc2dsQ';
    localStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJlbmJlbiIsImlhdCI6MTY4NDA3NDM5MCwiZXhwIjoxNjg0MTYwNzkwfQ.RWEH-3iB4T2lC-VuoTFkkVM4GRxGH5aOnnhinQUQ4fw");
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
