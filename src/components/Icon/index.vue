<template>
  <i class="icon-container iconfont" :class="fontClass"></i>
</template>

<script>
// 映射iconfont图标名称
const classMap = {
  home: "iconzhuye",
  success: "iconzhengque",
  error: "iconcuowu",
  close: "iconguanbi",
  warn: "iconjinggao",
  info: "iconxinxi",
  blog: "iconblog",
  code: "iconcode",
  about: "iconset_about_hov",
  weixin: "iconweixin",
  mail: "iconemail",
  github: "icongithub",
  qq: "iconsign_qq",
  arrowUp: "iconiconfonticonfonti2copy",
  arrowDown: "iconiconfonticonfonti2",
  empty: "iconempty",
  chat: "iconliuyan",
};
export const types = Object.keys(classMap);
export default {
  props: {
    // 此处的属性名是type，
    type: {
      // 此时表示的是属性的类型为字符串
      type: String,
      required: true,
    }
  },
  computed: {
    // 图标类样式
    fontClass(){
      // 得到属性名
      // 根据父组件传的属性，得到子组件正常类型对应的类样式
      return classMap[this.type];
    }
  }
}
</script>

<style scoped>
/* 导入iconfont图像文件 */
@import "//at.alicdn.com/t/font_2164449_nalfgtq7il.css";
/* 继承父组件的样式 */
.iconfont{
  color: inherit;
  font-size: inherit;
}
</style>