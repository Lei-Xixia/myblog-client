// const listeners = {};

// // 手动完成事件总线 
// export default{
//   // 监听某一个事件
//   $on(eventName,handler){
//   if(!listeners[eventName]){
//     listeners[eventName] = new Set();
//   }
//   listeners[eventName].add(handler);
//   },
//   // 取消监听
//   $off(eventName,handler){
//     if(!listeners[eventName]){
//       return;
//     }
//     listeners[eventName].delete(handler);
//   },
//   // 触发事件
//   $emit(eventName,...args){
//     if(!listeners[eventName]){
//       return;
//     }
//     for(const handler of listeners[eventName]){
//       handler(...args);
//     }
//   }
// }


import Vue from "vue";
const app = new Vue({});
//new Vue({})本质上就是一个组件实例，vue实例本身就有三个函数: $on, $off, $emit
// export default new Vue({});


Vue.prototype.$bus = app;
export default app;

