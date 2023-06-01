<template>
  <div class="message">
    <img class="picture" src="../../assets/avatar.png" alt="Gher slices">
    <div class="message__info w-25">
      <h4 class="text-light"><span>{{(text.userId)}}</span></h4>
      <p class="text-light">{{(text.text)}}</p>
      <img v-if="text.image" class="img-fluid" :src="text.image" alt="Chat Image">
    </div>
  </div>
</template>

<script setup>
const props= defineProps( {
    text: Object
  })

</script>

<style>
</style>