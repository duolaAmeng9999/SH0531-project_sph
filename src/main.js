import Vue from "vue";
import App from "./App.vue";

import store from "store/store";
import VueRouter from "vue-router";
import router from "router/router";

import "mock/mock"
import "api/api.js"
// 全局公共组组件
import "./effect/css/transition.css"
import "nprogress/nprogress.css"
import "util/commonComponent.js"


Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  router
}).$mount("#app");
