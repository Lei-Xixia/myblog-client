<template>
  <!-- ref是附着在dom元素上的， dom元素渲染出来的话才可以获取得到 -->
  <!-- @wheel鼠标滚轮事件 -->
  <div v-loading="loading" class="home-container" ref="container" @wheel="handleWheel">
    <!-- 轮播图 -->
    <ul
      class="carousel-container"
      :style="{ marginTop }"
      @transitionend="handleTransitionEnd"
    >
      <li v-for="item in data" :key="item.id">
        <CarouselItem :carousel="item" />
      </li>
    </ul>
    <!-- 上箭头 -->
    <div @click="switchTo(index - 1)" v-show="index >= 1" class="icon icon-up">
      <Icon type="arrowUp" />
    </div>
    <!-- 下箭头 -->
    <div
      @click="switchTo(index + 1)"
      v-show="index < data.length - 1"
      class="icon icon-down"
    >
      <Icon type="arrowDown" />
    </div>
    <!-- 小圆点指示器 -->
    <ul class="indicator">
      <li
        @click="switchTo(i)"
        :class="{ active: i === index }"
        v-for="(item, i) in data"
        :key="item.id"
      ></li>
    </ul>

  <!-- <Loading v-if="isLoading" /> -->
  </div>
</template>

<script>
import {mapState} from "vuex";
import CarouselItem from "./Carouselitem.vue";
import Icon from "@/components/Icon";
export default {
  components: {
    CarouselItem,
    Icon,
  },
  data() {
    return {
      index: 0, // 表示的是当前显示的是第几张轮播图
      containerHeight: 0, //表示整个容器的高度
      switching: false, //是否正在翻页切换中
    };
  },
  // created获取不到dom元素
  // async created() {
  //   //拿到数据
  //   this.banners = await getBanners();
  //   this.isLoading = false;
  // },
  // 首页加载的时候去拿到仓库的数据
  created(){
    this.$store.dispatch("banner/fetchBanner")
  },
  // 获取到dom元素的时候
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    // 监听浏览器尺寸的变化，浏览器尺寸变化的时候重新设置高度
    // addEventListener注册事件不会干扰别的组件
    // 注册事件，同时最好还要移除事件
    window.addEventListener("resize", this.handleResize);
  },
  // 使用生命周期函数将注册的事件移除
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
    ...mapState("banner",["loading","data"]),
  },
  methods: {
    // 切换轮播图
    switchTo(i) {
      this.index = i;
    },
    // 鼠标滚轮事件
    handleWheel(e) {
      if (this.switching) {
        return;
      }
      if (e.deltaY < -5 && this.index > 0) {
        // 向上滚动
        this.switching = true;
        this.index--;
      } else if (e.deltaY > 5 && this.index < this.data.length - 1) {
        // 向下滚动
        this.switching = true;
        this.index++;
      }
    },
    // 过渡效果结束
    handleTransitionEnd() {
      this.switching = false;
    },
    // 监听浏览器尺寸的变化
    handleResize() {
      this.containerHeight = this.$refs.container.clientHeight;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden; // 避免外边距合并
  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }
}

.carousel-container {
  width: 100%;
  height: 100%;
  transition: 500ms;
  li {
    width: 100%;
    height: 100%;
  }
}

.icon {
  .self-center();
  font-size: 30px;
  color: @gray;
  cursor: pointer;
  transform: translateX(-50%);
  @gap: 25px;
  &.icon-up {
    top: @gap;
    animation: jump-up 2s infinite;
  }
  &.icon-down {
    top: auto;
    bottom: @gap;
    animation: jump-down 2s infinite;
  }
  @jump: 5px;
  @keyframes jump-up {
    0% {
      transform: translate(-50%, @jump);
    }
    50% {
      transform: translate(-50%, -@jump);
    }
    100% {
      transform: translate(-50%, @jump);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translate(-50%, -@jump);
    }
    50% {
      transform: translate(-50%, @jump);
    }
    100% {
      transform: translate(-50%, -@jump);
    }
  }
}

.indicator {
  .self-center();
  transform: translateY(-50%);
  left: auto;
  right: 25px;
  li {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgb(182, 125, 125);
    cursor: pointer;
    margin-bottom: 10px;
    border: 1px solid #fff;
    box-sizing: border-box;
    &.active {
      background: rgb(149, 223, 81);
    }
  }
}
</style>
