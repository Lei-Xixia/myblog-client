<template>
  <ul class="contact-container">
    <li>
      <a target="_blank" :href="data.github">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>{{ data.githubName }}</span>
      </a>
    </li>

    <li>
      <!-- 实现点击弹出发送邮件 -->
      <a :href="`mailto:${data.mail}`">
        <div class="icon">
          <Icon type="mail" />
        </div>
        <span>{{ data.mail }}</span>
      </a>
    </li>

    <li>
      <a
        :href="
          `tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`
        "
      >
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>{{ data.qq }}</span>
      </a>
      <div class="pop">
        <img :src="data.qqQrCode" alt="" />
      </div>
    </li>

    <li>
      <a href="">
        <div class="icon weixin">
          <Icon type="weixin" />
        </div>
        <span>{{ data.weixin }}</span>
      </a>
      <div class="pop">
        <img :src="data.weixinQrCode" alt="" />
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
import { mapState } from "vuex";
export default {
  components: {
    Icon,
  },
  computed: mapState("setting", ["data"]),
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.contact-container {
  list-style: none; // 去掉li小圆点
  padding: 10px;
  margin: 0;
  color: @gray;
  @itemHeight: 30px;
  li {
    height: @itemHeight;
    line-height: 30px;
    margin: 14px 0;
    position: relative;
    &:hover {
      .pop {
        transform: scaleY(1); // 鼠标放上去的时候让图片显示出来
      }
    }
  }
  a {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  .icon {
    font-size: 26px;
    width: 36px;
    &.weixin {
      font-size: 32px;
      // 将文字向左移动2px
      text-indent: -2px;
    }
  }
  .pop {
    position: absolute;
    left: 0;
    bottom: @itemHeight+5px;
    background-color: #fff;
    padding: 15px;
    border-radius: 5px;
    transform: scaleY(0); // 本身不显示出来
    transform-origin: center bottom; // 设置图片变形的原点
    transition: 0.3s;
    img {
      width: 100px;
      height: 100px;
    }
    &::after {
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: #fff;
      left: 50%;
      bottom: -5px;
      transform: translate(-50%) rotate(45deg);
    }
  }
}
</style>
