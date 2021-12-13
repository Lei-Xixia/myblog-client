<template>
  <div class="test-container">
    <!-- 字体图标组件的使用 -->
    <!-- <Icon type="home"/> -->

    <!-- 将文件里面的所有图标展示出来 -->
    <div class="item" v-for="t in types" :key="t">
      <Icon :type = "t" />
      <label>{{t}}</label>
    </div>

  </div>
</template>

<script>
// import Icon from "./";
import Icon, {types} from "./";
export default {
  components: {
    Icon,
  },
  data(){
    return {
      types,
    }
  }
};
</script>

<style scoped>
/* 字体图标的样式 */
/* .iconfont{
    color: red;
    font-size: 26px;
  } */

  .test-container{
    display: flex;
    justify-content: center;
    margin: 30px auto;
    width: 580px;
    flex-wrap: wrap;
  }
  .item{
    margin: 1em;
    text-align: center;
  }
  .icon-container{
    display: block;
  }
</style>
