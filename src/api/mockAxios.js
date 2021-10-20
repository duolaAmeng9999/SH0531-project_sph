import axios from "axios";
import NProgress from "nprogress";

const mockAxios = axios.create({
  baseURL: "/mock",
  timeout: 3000
});

// 添加请求拦截器
mockAxios.interceptors.request.use(function(config) {
  // 在发送请求之前做些什么
  NProgress.start(); //开启进度条
  return config;
});

// 添加响应拦截器
mockAxios.interceptors.response.use(
  function(response) {
    NProgress.done(); // 关闭精度条
    // 对响应数据做点什么
    return response.data;
  },
  function(error) {
    NProgress.done(); // 关闭精度条
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default mockAxios;
