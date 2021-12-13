<template>
  <Layout>
    <BlogList />
    <template #right>
      <BlogCategory />
    </template>
  </Layout>
</template>

<script>
import Layout from "@/components/Layout";
import BlogList from "./components/BlogList";
import BlogCategory from "./components/BlogCategory";
export default {
  components:{
    Layout,
    BlogList,
    BlogCategory
  },
  created(){
    // $route: 注入的原型对象,提供路由信息
    // console.log(this.$route);
  }

}
</script>

<style>

</style>