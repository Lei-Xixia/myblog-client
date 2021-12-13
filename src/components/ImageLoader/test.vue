<template>
  <div class="test-container">
    <!-- 此处的load事件为监听子组件什么时候事件处理完毕 -->
    <ImageLoader 
    src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2340"
    placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
    @load="handleLoaded"
    />
  </div>
</template>

<script>
import ImageLoader from "./";
export default {
  components: {
    ImageLoader,
  },
  methods:{
    handleLoaded(){
      console.log("ImageLoader组件load事件触发，图片加载完成");
    }
  }
}
</script>

<style scoped>
.test-container{
  width: 500px;
  height: 400px;
  margin: 30px auto;
  border: 3px solid rgb(192, 82, 82);
}
</style>