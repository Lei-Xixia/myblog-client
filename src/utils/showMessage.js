import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/Icon";
import styles from "./showMessage.module.less";

/**
 * 弹出消息
 * @param {String} content 消息内容
 * @param {String} type 消息类型 info success warn error
 * @param {Number} duration 消失时间，多久后消失
 * @param {HTMLElement} container 容器，消息会显示到该容器的正中，如果不传，消息会显示到页面正中
 */
export default function(options = {}) {
  const content = options.content || "";
  const type = options.type || "info";
  const duration = options.duration || 2000;
  const container = options.container || document.body;
  // 创建消息元素
  const div = document.createElement("div");
  const iconDom = getComponentRootDom(Icon, {
    type,
  });
  // 拿到整个html--> outerHTML
  div.innerHTML = `<span class="${styles.icon}">${iconDom.outerHTML}</span><div>${content}</div>`;
  // 设置样式
  const typeClassName = styles[`message-${type}`]; // 类型样式名
  div.className = `${styles.message} ${typeClassName}`;

  // 将div加入到容器里面去
  // 容器的position 是否改动过
  if(options.container){
  //从getComputedStyle返回的对象是只读的，可以用于检查元素的样式（包括由一个<style>元素或一个外部样式表设置的那些样式）
    if (getComputedStyle(container).position === "static") {
      container.style.position = "relative";
    }
  }

  container.appendChild(div);

  // 浏览器强行渲染一遍
  div.clientHeight; // 导致reflow

  // 回归到正常位置
  div.style.opacity = 1;
  div.style.transform = `translate(-50%,-50%)`;

  // 等一段时间消失
  setTimeout(() => {
    div.style.opacity = 0;
    div.style.transform = `translate(-50%,-50%) translateY(-15px)`;
    // 过渡结束触发的事件  {once:true}表示的是事件只触发一次
    div.addEventListener(
      "transitionend",
      function() {
        div.remove();
        // 运行回调
        options.callback && options.callback();
      },
      { once: true }
    );
  }, duration);
}
