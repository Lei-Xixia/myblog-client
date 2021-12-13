<template>
  <div class="test-container">
    <Menu />
  </div>
</template>

<script>
import Menu from "./";
import "@/styles/global.less";
export default {
components: {
  Menu,
}
}
</script>

<style scoped lang="less">
.test-container{
  width: 400px;
  height: 400px;
  border: 2px solid rgb(87, 96, 179);
  background-color: rgb(229, 223, 128);
  margin: 30px auto;
}
</style>