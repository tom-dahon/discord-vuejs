<template>
  <div class="message">
    <img class="picture" src="../../assets/avatar.png" alt="Gher slices">
    <div class="message__info">
      <h4 class="text-light"><span>{{(text.userId)}}</span></h4>
      <p class="text-light">{{(text.text)}}</p>
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