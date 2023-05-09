<template>
      <div id="alerte" class="alert alert-danger position-absolute top-50 start-50 translate-middle" role="alert">
        {{mess}}
    </div>
</template>

<script>
export default {
  props: ['mess'],
  methods:{
      showAlerte(mess){
        document.getElementById("alerte").innerHTML = mess;
        setTimeout(() => {
          this.alerte = true;
        }, 1000);
    },
      changeProps(message){
        this.mess = message;
    },
  },
}
</script>

<style>

</style>