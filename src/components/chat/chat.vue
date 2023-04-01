<template>
  <div class="chat d-flex justify-content-between">
    <div class="chat__input d-flex">
      <font-awesome-icon class="plusInput fa-2xl p-1" size="lg" icon="fa-solid fa-circle-plus" />
      <input type="text" class="d-flex ms-2" placeholder="Envoyer un message à " >
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: "chat",
  components: { 
    FontAwesomeIcon,
  }
}
</script>


<style>
.chat {
    flex-direction: column;
    background-color: #313338;
    height: 100vh;
    flex: 1;
}

.chat__input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin: 20px;
    border-radius: 15px;
    background-color: #383A40;
    color: lightgray;
}

textarea:focus, input:focus{
    outline: none;
}

input{
  width:100%;
  border:none;
  outline-width: 0;
  background-color : #383A40!important; 
  cursor: pointer;
}

</style>