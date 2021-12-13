<template>
  <!-- "@/assets/loading.svg" 这个路径并不是最终的路径，最终的路径会根据打包结果进行展示 -->
  <!-- 但是此静态路径最终会被打包展示出来 -->
  <!-- 如果是动态路径的话，不会被转换成真的路径；因为使用动态路径，分析模版的时候是分析不出来的，
  分析模版打包的时候还不会运行到动态路径，并不知道对应的变量是来自于哪里的 -->
  <!-- 如果需要使用动态资源的话，可以直接import引入 -->
  <img class="loading-container" src="@/assets/loading.svg" alt="" />
</template>

<script>
export default {};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.loading-container {
  .self-center();
}
</style>
