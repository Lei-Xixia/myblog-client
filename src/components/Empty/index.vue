<template>
  <div class="empty-container">
    <Icon type="empty" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from "../Icon";
export default {
  components: {
    Icon,
  },
  props: {
    text: {
      type: String,
      default: "无数据",
    },
  },
};
</script>

<style scoped lang="less">
// 在css样式中~@表示的是src目录
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.empty-container{
  .self-center();
  color: @gray;
  text-align: center;
}
.icon-container{
  font-size: 80px;
}
</style>
