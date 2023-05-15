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
    localStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJvYm8iLCJpYXQiOjE2ODQxNjI4MDEsImV4cCI6MTY4NDI0OTIwMX0.8MpDng55UQmaqkeJ4IeGCTy9aXm7c06nJhtB6n77jY4");
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
