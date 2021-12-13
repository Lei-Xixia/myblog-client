<template>
  <div
    class="carousel-item-container"
    ref="container"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div class="carousel-img" ref="image" :style="imagePosition">
      <ImageLoader
        @load="this.showWords"
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"
      />
    </div>
    <!-- 文字标题 -->
    <div class="title" ref="title">{{ carousel.title }}</div>
    <!-- 文字描述 -->
    <div class="description" ref="description">
      {{ carousel.description }}
    </div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props: ["carousel"],
  components: {
    ImageLoader,
  },
  data() {
    return {
      titleWidth: 0,
      descriptioncWidth: 0,
      containerSize: null, // 外层容器的尺寸
      innerSize: null, // 里层图片的尺寸
      mouseX: 0, //鼠标的横坐标
      mouseY: 0, //鼠标的纵坐标
    };
  },
  computed: {
    // 得到图片坐标 left top
    imagePosition() {
      if (!this.innerSize || !this.containerSize) {
        return;
      }
       // 多出的宽度
      const extraWidth = this.innerSize.width - this.containerSize.width;
       // 多出的高度
      const extraHeight = this.innerSize.height - this.containerSize.height;

      const left = (-extraWidth / this.containerSize.width) * this.mouseX;
      const top = (-extraHeight / this.containerSize.height) * this.mouseY;
      // console.log(extraWidth, extraHeight);
      return {
        transform: `translate(${left}px,${top}px)`,
      };
    },
    center() {
      return {
        // 中间位置的坐标
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2,
      };
    },
  },
  mounted() {
    // 获取到文字的宽度
    this.titleWidth = this.$refs.title.clientWidth;
    this.descriptioncWidth = this.$refs.description.clientWidth;
    this.setSize();
    // 拿到容器和图片尺寸后设置鼠标的位置为最中间，使得图片的位置是在最中间
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    window.addEventListener("resize", this.setSize);
  },
  destroyed() {
    window.removeEventListener("resize", this.setSize);
  },
  methods: {
    // 调用该方法显示文字
    showWords() {
      // 标题部分
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      // 强制让浏览器渲染一次
      this.$refs.title.clientWidth; // reflow
      this.$refs.title.style.transition = "1s";
      this.$refs.title.style.width = this.titleWidth + "px";

      // 描述部分
      this.$refs.description.style.opacity = 1;
      this.$refs.description.style.width = 0;
      // 强制让浏览器渲染一次
      this.$refs.description.clientWidth; // reflow
      // 描述两秒显示，并且延迟一秒
      this.$refs.description.style.transition = "2s 1s";
      this.$refs.description.style.width = this.descriptioncWidth + "px";
    },
    // 设置各种尺寸
    setSize() {
      //获取到dom元素后设置外层容器的尺寸
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight,
      };
      // 获取到dom元素后设置里层图片的尺寸
      this.innerSize = {
        width: this.$refs.image.clientWidth,
        height: this.$refs.image.clientHeight,
      };
      // console.log(this.containerSize, this.innerSize);
    },
    handleMouseMove(e) {
      // 矩形
      const rect = this.$refs.container.getBoundingClientRect();
      // 鼠标在容器内的位置
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
    handleMouseLeave() {
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.carousel-item-container {
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
  overflow: hidden;
}
.carousel-img {
  width: 110%;
  height: 110%;
  position: absolute;
  left: 0;
  top: 0;
  transition: 0.3s;
}
.title,
.description {
  position: absolute;
  letter-spacing: 3px; // 文字之间的间隙
  left: 30px;
  text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
    0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5); // 给文字描边阴影，避免图片背景太暗看不清文字
  white-space: nowrap;
  overflow: hidden;
  opacity: 0;
}
.title {
  top: calc(50% - 40px);
  font-size: 2em;
}
.description {
  top: calc(50% + 20px);
  font-size: 1.2em;
  color: lighten(@gray, 20%); // 改变颜色的明暗度
}
</style>
