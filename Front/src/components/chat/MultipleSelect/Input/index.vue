<template>
  <div>
    <div class="input-container" :class="classSize">
      <input
        type="text"
        class="input"
        :class="classList"
        :placeholder="placeholder"
        :disabled="disabled"
        :value="(modelValue = selectedItem)"
        @input="$emit('inputValue')"
        @focus="$emit('focus')"
        v-bind="$attrs"
        :readonly="readonly"
        :style="[{ width }]"
      />

      <div class="icon">
        <span @click="$emit('clearInput')" v-if="this.modelValue.length > 0">
          <ClearIcon width="20px" height="14px" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import ClearIcon from "../Icons/ClearIcon.vue";
export default {
  name: "GInput",
  components: {
    ClearIcon,
  },
  props: {
    placeholder: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "small",
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
    },
    selectedItem: {
      type: Array,
    },
  },
  data() {
    return {
      modelValue: "",
    };
  },
  methods: {
    inputValue(event) {
      this.$emit("inputValue", (this.modelValue = event.target.value));
    },
  },
  computed: {
    classList() {
      const vm = this;
      return {
        ["disabled"]: vm.disabled,
      };
    },
    classSize() {
      const vm = this;
      return {
        [`input-${vm.size}`]: vm.size,
      };
    },
  },
};
</script>

<style lang="scss">
@import "../styles/input.scss";
</style>