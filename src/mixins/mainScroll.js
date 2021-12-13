export default function (refValue){
  return {
    mounted(){
      // 向事件总线里面注册一个事件，监听一个事件，当这个事件发生的时候，说明一定是被触发了，触发以后就去做相应的事情
      this.$bus.$on("setMainScroll", this.handleSetMainScroll);
      this.$refs[refValue].addEventListener("scroll",this.handleMainScroll);
    },
    // 组件销毁的话就不再监听
    beforeDestroy(){
      this.$bus.$emit("mainScroll");
      this.$refs[refValue].removeEventListener("scroll",this.handleMainScroll);
      this.$bus.$off("setMainScroll", this.handleSetMainScroll);
    },
    methods: {
      handleMainScroll(){
      // 触发滚动事件，用事件总线的方式，跨越了总线，后面谁都可以监听
        this.$bus.$emit("mainScroll", this.$refs[refValue]);
      },
      handleSetMainScroll(scrollTop){
        // 此时设置动态属性
        this.$refs[refValue].scrollTop = scrollTop;
      },
    }
  }
}