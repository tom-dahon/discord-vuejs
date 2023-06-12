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
  data() {
    return {

    }
  },
  created() {

  }
}


</script>

<style>

</style>
