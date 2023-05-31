<template>
  <div class="selectbox-container">
    <div class="input-container">
      <Input
        @focus="showMenu = true"
        size="large"
        width="400px"
        :selectedItem="selectedItem"
        @clearInput="selectedItem = []"
        readonly
        placeholder="name"
      />
      <span class="open-icon" @click="showMenu = !showMenu">
        <OpenIcon width="20px" height="14px" />
      </span>
    </div>
    <div class="select-menu" v-if="showMenu">
      <ul class="items">
        <li class="item" v-for="(item, index) in data" :key="index">
          <input
            :value="item.username"
            v-model="selectedItem"
            type="checkbox"
            :id="item.id"
            class="checkbox"
          />
          <label :for="item.id"> {{ item.username }} </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Input from "../Input/index.vue";
import OpenIcon from "../Icons/OpenIcon.vue";
import store from "@/store";
export default {
  name: "GSelectBox",
  components: {
    Input,
    OpenIcon,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      showMenu: false,
      selectedItem: [],
      usersId: []
    };
  },
  methods: {
    close(event) {
      if (!this.$el.contains(event.target)) this.showMenu = false;
      if(this.data) {
        this.data.forEach((user) => {
          this.selectedItem.forEach((username) => {
            if(username == user.username && !this.usersId.includes(user.id))
              this.usersId.push(user.id)
          })
        })
        store.commit("setSelectedItem", this.usersId)
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.close);
  },
};
</script>

<style lang="scss">
@import "../styles/selectbox.scss";
</style>