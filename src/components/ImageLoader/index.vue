<template>
  <div class="image-loader-container">
    <img v-if="!everythingDone" class="placeholder" :src="placeholder" alt="" />
    <!-- 此load事件为img元素本身自带的load事件   onload 加载完成的事件 -->
    <img
      @load="handleLoad"
      :src="src"
      alt=""
      :style="{ opacity: originOpacity, transition: `${duration}ms` }"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      originLoaded: false, // 原图是否加载完成
      everythingDone: false, // 是否一切事情都完成了
    };
  },
  computed: {
    // 判断原图是否加载完成，加载完成为1，未加载完成为0;根据是否加载完成设置原图的透明度
    originOpacity() {
      return this.originLoaded ? 1 : 0;
    },
  },
  methods: {
    handleLoad() {
      //原图加载完成将其设置为true
      this.originLoaded = true;
      setTimeout(()=>{
        this.everythingDone = true;
        // 当一切都完成以后，通知父组件，向父组件抛出一个事件
        this.$emit("load");
      },this.duration)
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
  }
  .placeholder {
    filter: blur(2vw);
  }
}
</style>
