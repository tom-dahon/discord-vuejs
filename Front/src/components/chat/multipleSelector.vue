// import Select2Component

<template>
  <div class="selector">
    <label>
    <Select2 class="js-example-basic-single js-states form-control" id="id_label_single" v-model="myValue" :options="myOptions" :settings="{ settingOption: value, settingOption: value }" @change="myChangeEvent($event)" @select="mySelectEvent($event)" />
    </label>
  </div>
</template>
<script>
import Select2 from 'vue3-select2-component';

export default {
  name:'multipleSelector',
    // declare Select2Component
    components: {Select2},
    data() {
        return {
            myValue: '',
            myOptions: ['op1', 'op2', 'op3'] // or [{id: key, text: value}, {id: key, text: value}]
        }
    },
    methods: {
        myChangeEvent(val){
            console.log(val);
        },
        mySelectEvent({id, text}){
            console.log({id, text})
        }
    }
}
</script>

<style scoped>
.selector {
  width: 300px;
  margin: 0 auto;
}
</style>