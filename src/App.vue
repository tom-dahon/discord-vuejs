<template>
    <div class="row align-items-start">
      <navbar></navbar>
      <conversation></conversation>
      <chat></chat>
      <statut></statut>
    </div>
</template>

<script>
//import chat from './components/chat/chat.vue'
//import navbar from './components/navbar/navbar.vue'
//import conversation from './components/conversation/conversation.vue'
//import statut from './components/statut/statut.vue'

export default {
  name: 'App',
  components: {
    navbar,
    conversation,
    chat,
    statut,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1F1F1F;
  margin-top: 60px;
}
</style>
