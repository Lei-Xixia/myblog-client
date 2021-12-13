// 自定义指令

// 导出指令的配置对象
// export default{
//   // el: 被绑定元素对应的真实的dom
//   // binding:是一个对象，描述了指令中提供的信息
//   bind(el,binding){
//     // 创建一个img元素，放到el元素内部
//     console.log("bind",el,binding);
//   },
//  // 指令被绑定元素插入其父元素时被触发
//   // inserted(el,binding){
//   //   console.log("inserted",el,binding);
//   // },
//   // 数据被更新过后的情况
//   update(el,binding){
//     // 根据binding.value的值决定创建或者删除img元素
//     console.log("update",el,binding);
//   }
// }

import loadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";

// 得到el中loadig效果的img元素
function getLoadingImage(el) {
  return el.querySelector("img[data-role=loading]");
}

function createLoadingImage() {
  const img = document.createElement("img");
  img.dataset.role = "loading";
  img.src = loadingUrl;
  img.className = styles.loading;
  return img;
}


export default function(el, binding) {
  // 根据binding.value的值决定创建或者删除img元素
  const curImg = getLoadingImage(el);
  if (binding.value) {
    if (!curImg) {
      const img = createLoadingImage();
      el.appendChild(img);
    }
  } else {
    if(curImg){
      curImg.remove();
    }
  }
}
