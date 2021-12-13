<template>
  <div class="blog-detail-contaier">
    <h1>{{ blog.title }}</h1>
    <div class="aside">
      <span>日期:{{ formatDate(blog.createDate) }}</span>
      <span>浏览:{{ blog.scanNumber }}</span>
      <a href="#data-form-container">评论:{{ blog.commentNumber }}</a>
      <RouterLink
        :to="{
          name: 'CategoryBlog',
          params: {
            categoryId: blog.category.id,
          },
        }"
        >{{ blog.category.name }}</RouterLink
      >
    </div>
    <!-- v-html="blog.htmlContent" 相当于是将blog.htmlContent里面的内容作为div的innerHTML进行展示 -->
    <!-- 同时使用了v-html指令以后，div里面再写内容则无效 -->
    <!-- 使用了markdown的css样式 -->
    <div v-html="blog.htmlContent" class="markdown-body"></div>
  </div>
</template>

<script>
import { formatDate } from "@/utils";
// 使得引入的markdown文档里面的代码部分有高亮代码着色
import "highlight.js/styles/github.css";
import "@/styles/markdown.css";

export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.aside {
  font-size: 12px;
  color: @gray;
  span,
  a {
    margin-right: 15px;
  }
}
.markdown-body {
  margin: 2em 0;
}
</style>
