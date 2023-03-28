<template>
  <div class="sidebar__user"></div>
</template>

<script>
export default {
name:"conversation",
}
</script>

<style>
.sidebar__user {
    display: flex;
    padding: 5px;
    align-items: center;
    background-color: #2f3135;
    color: gray;
    cursor: pointer;
}

.sidebar__user:hover {
    color: #fff;
    background-color: #40464b;
}

.sidebar__user > div {
    position: relative;
}

.sidebar__user > div > img {
    height: 35px;
    width: 35px;
    margin: 0;
}

.sidebar__user > h4 {
    margin-left: 15px;
}
</style>