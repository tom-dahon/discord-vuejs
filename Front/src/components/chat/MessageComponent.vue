<template>
  <div class="d-flex justify-content-start">
    <p class="small mb-1 text-white text-capitalize">{{ user.username }} <span class="text-danger">[{{ role.name }}]</span></p>
    <p class="small mb-1 text-muted px-2">{{  new Date(props.text.createdAt).toLocaleDateString("fr") + " " + new Date(props.text.createdAt).toLocaleTimeString("fr") }} </p>
  </div>
  <div class="d-flex flex-row justify-content-start mb-2 pt-1">
    <img class="justify content-start rounded-circle" :src="user.profile_picture" alt="avatar 1" style="width: 50px; height: 50px"/>
    <div>
      <p class="small p-2 ms-3 pt-6 rounded-3 text-white">
        {{ props.text.text }}
        <img v-if="props.text.image != ''" class="img-fluid" style="width: 50px" :src="props.text.image" alt="Chat Image"/>
      </p>
    </div>
        
      

  </div>



</template>

<script setup>
import { getUser, getUserRole } from '@/api/caller.service';
import { onMounted, ref } from 'vue';

const props = defineProps({
  text: Object
})

const user = ref({})
const role = ref({})
onMounted(() => {

  getUser(props.text.userId)
    .then(userGet => {
      user.value = userGet
      getUserRole(userGet.roleId)
      .then(roleGet => {
        role.value = roleGet
      })
    })

  
})





</script>

<style></style>