<template>
  <div class="test-container">
    <Contact />
  </div>
</template>

<script>
import Contact from "./";
import "@/styles/global.less";
export default {
  components: {
    Contact,
  }
}
</script>

<style scoped>
.test-container{
  width: 400px;
  height: 400px;
  margin: 20px auto;
  padding-top: 200px;
  background-color: rgb(233, 225, 122);
  border: 3px solid rgb(167, 197, 127);
}
</style>