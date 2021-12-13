import axios from "axios";
import showMessage from "../utils/showMessage";

const ins = axios.create(); // 创建axios实例
 // 拦截响应
//  实例加了一个拦截器，拦截器传入了一个函数，凡是用这个实例得到的响应他会先运行传入的函数，然后将函数的运行结果返回
// 如果数据正确的话会直接返回数据，数据错误的话会拦截并返回错误，这样设置拦截器就不需要每次请求数据的时候都进行判断了
ins.interceptors.response.use(function(resp){
  if(resp.data.code !== 0){
    showMessage({
      content: resp.data.msg,
      type: "error",
      duration: 1500
    })
    return null;
  }
  return resp.data.data;
});

export default ins;