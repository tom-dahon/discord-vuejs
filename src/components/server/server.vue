<template>
  <div class="server d-flex">
    <div class="logo">
      <img class="image" src="../../assets/logo.jpg" alt="Discord" />
    </div>
  </div>
</template>

<script>

export default {
name:'server',
}
</script>

<style>
  .image{
    height: 45px;
    width: 50px;
    border-radius: 50%;
    margin-top: 10px;
    cursor: pointer;
  }
  .server {
    position: relative;
    flex-direction: column;
    align-items: center;
    background-color: #23272a;
    overflow-y: scroll;
    height: 100vh;
    width: 70px;
  }
  .logo{
    height: 45px;
    width: 50px;
    border-radius: 30%;
    cursor: pointer;
    border: none;
    display:block;
  }
  .logo::before {
    content: "";
    top: 8%;
    left: 25%;
    height: 3px;
    width: 35px;
    background-color: #323538;
    position: absolute;
  }
  .logo > img {
    height: 45px;
    width: 50px;
    border-radius: 30%;
    cursor: pointer;
    border: none;
  }



</style>