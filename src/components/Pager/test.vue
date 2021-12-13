<template>
  <div>
    <!-- 页码组件的使用 -->
    <Pager
      :total="total"
      :current="current"
      @pageChange="handlePageChange($event)"
    />
  </div>
</template>

<script>
import Pager from "./";
export default {
  components: {
    Pager,
  },
  data() {
    return {
      // 页码数据
      current: 5,
      total: 222,
    };
  },
  methods: {
    // 父组件注册事件
    // 当页码改变的时候触发事件：获取到新的页码
    handlePageChange(newPage) {
      // console.log("页码改动了", newPage);
      this.current = newPage;
      // console.log("数据加载");
    },
  },
};
</script>

<style scoped>
</style>
