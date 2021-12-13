<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="tocWithSelect" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList.vue";
// 导入防抖函数
import {debounce} from "@/utils";
export default {
  components: {
    RightList,
  },
  props: {
    toc: {
      type: Array,
    },
  },
  data() {
    return {
      // 给到目前激活的锚点
      activeAnchor: "",
    };
  },
  computed: {
    // 根据toc属性以及activeAnchor得到带有isSelect属性的toc数组
    tocWithSelect() {
      const getTOC = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          isSelect: t.anchor === this.activeAnchor,
          children: getTOC(t.children),  // 进行递归处理
        }));
      };
      return getTOC(this.toc);
    },
    // 根据toc的到他们对应的元素数组
    doms() {
      const doms = [];
      // 循环得到每一个anchor的值
      const addToDoms = (toc) => {
        for (const t of toc) {
          // 得到每一个anchor对应的元素
          doms.push(document.getElementById(t.anchor));
          if (t.children && t.children.length) {
            addToDoms(t.children);
          }
        }
      };
      addToDoms(this.toc);
      return doms;
    },
  },
  created(){
    this.setSelectDebounce = debounce(this.setSelect,50);
    // 监听滚动事件
    this.$bus.$on("mainScroll",this.setSelectDebounce);
  },
  destoryed(){
    this.$bus.$off("mainScroll",this.setSelectDebounce);
  },
  methods: {
    // 改变hash 实现页面内容跳转
    handleSelect(item) {
      location.hash = item.anchor;
    },
    // 设置activeAnchor为正确的值
    setSelect(scrollDom) {
      if(!scrollDom){
        return;
      }
      this.activeAnchor = ''; // 由于后续要重新设置，先清空之前的状态
      const range = 200;
      for (const dom of this.doms) {
        // 看一下当前这个dom元素是不是应该被选中
        if (!dom) {
          continue; // 如果没有dom元素，则进入下一个循环
        }
        // 得到元素离视口顶端的距离
        // 元素在视口里面的矩形区域，得到他的top,则拿到元素的top值
        const top = dom.getBoundingClientRect().top
        if(top >= 0 && top <= range){
          // 在规定的范围内
          this.activeAnchor = dom.id;
          return;
        }else if(top > range){
          // 在规定的范围下方
          return;
        }else{
          // 在规定的范围上方
          this.activeAnchor = dom.id; // 先假设自己是激活的，然后继续看后面
        }
      }
    },
  },
};
</script>

<style scoped lang="less">
.blog-toc-container {
  h2 {
    font-weight: blod;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0%;
  }
}
</style>
