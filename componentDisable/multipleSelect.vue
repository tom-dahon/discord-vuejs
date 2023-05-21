<template>
  <div>
    <multiselect v-model="value" :options="options"></multiselect>
</div>
</template>

<script>
import Multiselect from 'vue-multiselect'
export default {
  name:'multipleSelector',
  components: { Multiselect },
  data () {
    return {
      value: null,
      options: ['Select option', 'options', 'selected', 'multiple', 'label', 'searchable', 'clearOnSelect', 'hideSelected', 'maxHeight', 'allowEmpty', 'showLabels', 'onChange', 'touched']
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>

</style>
