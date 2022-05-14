import Vue from "vue";
// 导入路由文件
import VueRouter from "vue-router";
import routes from "./routes";
import { titleController } from "@/utils";

if (!window.VueRouter) {
  Vue.use(VueRouter); // 使用一个vue插件
}

// 创建VueRouter构造函数
const router = new VueRouter({
  // 路由配置
  routes, // 路由匹配规则
  mode: "hash", // 配置路由的模式，默认值是hash，hash最容易做无刷新跳转
});

router.afterEach((to, from) => {
  if (to.meta.title) {
    titleController.setRouteTitle(to.meta.title);
  }
});

router.onError((error) => {
  console.error(error)
  const pattern = /Loading chunk/g
  // const pattern = /Loading chunk (\d)+ failed/g
  const isChunkLoadFailed = error.message.match(pattern)
  const targetPath = router.history.pending.fullPath
  if (isChunkLoadFailed && error.type === 'missing') {
    // const targetPath = $router.history.pending.fullPath
    router.push(targetPath)
  }
})


export default router;
