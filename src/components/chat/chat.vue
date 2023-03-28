<template>
  <div class="chat">
    <div class="chat__input d-flex">

      <font-awesome-icon class="plusInput fa-2xl p-2" size="lg" icon="fa-solid fa-circle-plus" />
      <input type="text" class="form-control" placeholder="Envoyer un message à " >


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
.form-control{
  background-color : #383A40!important; 
  cursor: pointer;
  border: 0px solid;

}
textarea:focus, input:focus{
    outline: none;
}


</style>