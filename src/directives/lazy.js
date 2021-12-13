import eventBus from "@/eventBus";
import { debounce } from "@/utils";
import defaultGif from "@/assets/default.gif";

let imgs = [];

function setImage(img) {
  img.dom.src = defaultGif;
  //处理图片
  // 该图片是否在视口范围内
  const clientHeight = document.documentElement.clientHeight;
  const rect = img.dom.getBoundingClientRect();
  const height = rect.height || 150;
  if (rect.top >= -height && rect.top <= clientHeight) {
    // 在视口范围内
    // const tempImg = new Image();
    // tempImg.onload = function(){
    //   // 当真实图片加载完成之后
    //   img.dom.src = img.src;
    // }
    // tempImg.src = img.src;

    img.dom.src = img.src;
    imgs = imgs.filter((i) => i !== img );
  }
}
// 调用该函数，就可以设置那些合适的图片
function setImages() {
  for (const img of imgs) {
    setImage(img);
  }
}

function handleScroll() {
  setImages();
}

eventBus.$on("mainScroll", debounce(handleScroll, 50));

export default {
  //钩子函数 
  inserted(el, bindings) {
    const img = {
      dom: el,
      src: bindings.value,  // 拿到指令的值，此处表示的是src最终的路径
    };
    imgs.push(img);
    // 立即处理
    setImage(img);
  },
  // 删除
  unbind(el) {
    imgs = imgs.filter((img) => img.dom != el);
  },
};
