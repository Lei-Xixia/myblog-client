<template>
  <div class="test-container">
    <Empty />
  </div>
</template>

<script>
import Empty from "./";
export default {
  components: {
    Empty,
  }
}
</script>

<style scoped>
  .test-container{
    width: 500px;
    height: 400px;
    margin: 30px auto;
    border: 3px solid rgb(160, 72, 72);
    position: relative;
  }
</style>