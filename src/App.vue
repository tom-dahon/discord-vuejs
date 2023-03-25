<template>
  <body class="d-flex">
    <server></server>
    <sidebar></sidebar>
    <chat></chat>
  </body>
</template>

<script>
import chat from './components/chat/chat.vue'
import server from './components/server/server.vue'
import sidebar from './components/sidebar/sidebar.vue'

export default {
  name: 'App',
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
