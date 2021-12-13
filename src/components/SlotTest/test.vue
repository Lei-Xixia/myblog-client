<template>
  <div class="test-container">
    <SlotTest>
      中间区域
      <!-- #为v-slot的简写 -->
      <template #header>头部区域</template>
      <template v-slot:footer>页脚区域</template>
    </SlotTest>
  </div>
</template>

<script>
import SlotTest from "./";
export default {
  components:{
    SlotTest,
  }
}
</script>

<style>

</style>