<template>
  <div class="slot-test-container">
    <!-- 插槽，内置组件，占位，需要伏组件传递内容的区域 -->
    <header style="background: #f40 ">
      <!-- 具名插槽 -->
      <slot name="header"></slot>
    </header>
    <main style="background: lightblue">
      <!-- 匿名插槽 -->
      <slot></slot>
    </main>
    <footer style="background: yellow ">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
