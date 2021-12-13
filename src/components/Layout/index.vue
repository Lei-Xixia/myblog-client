<template>
  <div class="layout-container">
    <!-- 左边区域 -->
    <div class="left">
      <slot name="left"></slot>
    </div>
    <!-- 中间区域 -->
    <div class="main">
      <slot></slot>
    </div>
    <!-- 右边区域 -->
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;
  .left,
  .right {
    flex: 0 0 auto; // 弹性盒的基本布局: 此时为0表示的是不可增长和压缩，必须保持自己的宽度
    overflow: hidden;
  }
  .main {
    flex: 1 1 auto; // 此处为1 表示可以增长和压缩
    overflow: hidden;
  }
}
</style>
