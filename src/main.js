// 入口文件
// import "./mock";
import Vue from "vue";
import App from "./App.vue";
// 导入全局样式文件
import "./styles/global.less";
import router from "./router";

import showMessage from "./utils/showMessage";
Vue.prototype.$showMessage = showMessage;
// 导入事件总线
import "./eventBus";
import store from "./store";
// 数据需要在一开始就加载出来的时候就在全局先触发一次
store.dispatch("setting/fetchSetting")

// 注册全局指令
import vLoading from "./directives/loading";
import vLazy from "./directives/lazy";
// 此处"loading" 表示的是指令的名字 vLoading表示的是指令的配置对象
Vue.directive("loading", vLoading);
Vue.directive("lazy", vLazy);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

// import { getSetting } from "./api/setting";

// getSetting().then((resp) => {
//   console.log(resp);
// });
