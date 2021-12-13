<template>
<!-- 绑定style的时候绑定的是一个对象 -->
  <img
    class="avatar-container"
    :src="url"
    :style="{
      width: `${size}px`,
      height: `${size}px`,
    }"
  />
</template>

<script>
export default {
  // props: ["url"],
  // props: {
  //   url: String // 此时表示的是url属性必须是一个字符串
  // },
  props: {
    url: {
      type: String, // 此处表示的是url属性必须是一个字符串
      required: true, // 此处表示的是属性必传
    },
    size: {
      type: Number,
      // 没有填size的话使用的是默认值
      default: 150,
    },
  },
};
</script>

<style scoped>
.avatar-container {
  border-radius: 50%;
  /* 避免图片拉伸 */
  object-fit: cover;
  /* 为了防止行元素使得图片产生白边，将其设置为块元素 */
  display: block;
}
</style>
