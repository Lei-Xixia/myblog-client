import "nprogress/nprogress.css";
import NotFound from "@/views/NotFound.vue";
import { start, done, configure } from "nprogress";

configure({
  trickleSpeed:20,
  showSpinner:false,
});

function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

function getPageComponent(pageCompResolver) {
  return async () => {
    start();
    if (process.env.NODE_ENV === "development") {
      await delay(2000);
    }
    const comp = await pageCompResolver();
    done();
    return comp;
  };
}

export default [
  // 规则：不同的路径匹配不同的组件
  {
    name: "Home",
    path: "/",
    component: getPageComponent(() =>
      import(/**webpackChunkName: "home" */ "@/views/Home")
    ),
    meta: { title: "首页" },
  },
  {
    name: "About",
    path: "/about",
    component: getPageComponent(() =>
      import(/**webpackChunkName: "about" */ "@/views/About")
    ),
    meta: { title: "关于我" },
  },
  {
    name: "Blog",
    path: "/article",
    component: getPageComponent(() =>
      import(/**webpackChunkName: "blog" */ "@/views/Blog")
    ),
    meta: { title: "文章" },
  },
  {
    name: "CategoryBlog",
    path: "/article/cate/:categoryId",
    component: getPageComponent(() =>
      import(/**webpackChunkName: "blog" */ "@/views/Blog")
    ),
    meta: { title: "文章" },
  },
  {
    name: "BlogDetail",
    path: "/article/:id",
    component: getPageComponent(() =>
      import(/**webpackChunkName: "blogDetail" */ "@/views/Blog/Detail")
    ),
    meta: { title: "文章详情" },
  },
  {
    name: "Message",
    path: "/message",
    component: getPageComponent(() =>
      import(/**webpackChunkName: "message" */ "@/views/Message")
    ),
    meta: { title: "留言板" },
  },
  {
    name: "Project",
    path: "/project",
    component: getPageComponent(() =>
      import(/**webpackChunkName: "project" */ "@/views/Project")
    ),
    meta: { title: "项目&效果" },
  },
  {
    name: "NotFound",
    path: "*", // 表示的是前面没有匹配上的话一定匹配的是*
    component: NotFound,
  }
];
