<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left">
          左边区域
        </div>
      </template>
      <template #default>
        <div class="main">
          中间区域中间区域中间区域中间区域
        </div>
      </template>
      <template #right>
        <div class="right">
          右边区域
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./";
export default {
  components: {
    Layout,
  },
};
</script>

<style scoped lang="less">
.test-container {
  width: 1000px;
  height: 600px;
  border: 2px solid;
  margin: 0 auto;
  white-space: nowrap;
}
.left {
  width: 200px;
  height: 100%;
  background-color: rgb(202, 120, 120);
}
.main {
  width: 100%;
  height: 100%;
  background-color: rgb(189, 137, 77);
}
.right {
  width: 150px;
  height: 100%;
  background-color: rgb(219, 217, 89);
}
</style>
