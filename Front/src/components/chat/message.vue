<template>
  <div class="message">
    <img class="picture" src="../../assets/avatar.png" alt="Gher slices">
    <div class="message__info">
      <h4 class="text-light"><span>{{ text }}</span></h4>
      <p class="text-light">tt</p>
    </div>
  </div>
</template>

<script>
import store from '../../store/index.js';
export default {
  props: {
    'text':String
},
  name:"message",
}
</script>

<style>

</style>