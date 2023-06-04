<template>
  <div class="message">
    <img class="picture" src="../../assets/avatar.png" alt="Gher slices">
    <div class="message__info w-25">
      <h4 class="text-light"><span>{{ user.username }}</span></h4>
      <p class="text-light">{{ props.text.text }}</p>
      <img v-if="props.text.image != ''" class="img-fluid" :src="props.text.image" alt="Chat Image">
    </div>
  </div>
</template>

<script setup>
import { getUser } from '@/api/caller.service';
import { onMounted } from 'vue';

const props = defineProps({
  text: Object
})

let user = {}
onMounted(() => {
  
getUser(props.text.userId)
  .then(userGet => {
    console.log(userGet)
    user = userGet
  })
  console.log(user)
})





</script>

<style></style>