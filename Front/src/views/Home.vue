<template>
  <body class="d-flex bd-highlight">
    <server class=""></server>
    <sidebar class=""></sidebar>
    <chat class=""></chat>
  </body>
</template>

<script>
import chat from '../components/chat/chat.vue'
import server from '../components/server/server.vue'
import sidebar from '../components/sidebar/sidebar.vue'

export default {
  name: 'Home',
  components: {
    server,
    sidebar,
    chat,
  }
}
</script>

<style>
body{
  font-family: sans-serif;
  overflow: hidden;
}
</style>