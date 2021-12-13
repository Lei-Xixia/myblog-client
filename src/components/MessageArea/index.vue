<template>
  <div class="message-area-container">
    <!-- 可以通过v-on一次性传递多个事件注册函数 -->
    <!-- $listeners事件原封不动，没有什么额外的处理，子组件传递过来的事件需要原封不动的往外抛出 -->
    <DataForm v-on="$listeners"/>
    <h3>
      {{title}}
      <span>{{subTitle}}</span>
    </h3>
    <DataList :list="list"/>
    <div class="loading" v-loading="isListLoading"></div>
  </div>
</template>

<script>
import DataForm from "./DataForm.vue";
import DataList from "./DataList.vue";
export default {
  components:{
    DataForm,
    DataList
  },
  props:{
    title:{
      type:String,
      default: "",
    },
    subTitle:{
      type:String,
      default: "",
    },
    list:{
      type: Array,
      default: ()=>[],
    },
    isListLoading:{
      type:Boolean,
      default: false,
    },
  },
  // methods:{
  //   handleSubmit(formData,callback){
  //     this.$emit("submit",formData,callback);
  //   }
  // }

}
</script>

<style scoped lang="less">
.loading{
  position: relative;
  height: 100px;
}

</style>