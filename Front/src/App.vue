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
    // localStorage.setItem('token', "..2XP6L6NTMnzUA--F7CiXzdn");
    // const storedToken = localStorage.getItem('token');
  },
}


</script>

<style>

</style>
