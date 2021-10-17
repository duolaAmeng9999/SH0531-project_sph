// 注册全局公共组件
import Vue from "vue";

// 注册全局 轮播图 Carousel 组件
import Carousel from "commonComponent/Carousel";
Vue.component("Carousel", Carousel);

// 注册全局 分页 Pagination 组件
import Pagination from "commonComponent/Pagination";
Vue.component("Pagination", Pagination);
