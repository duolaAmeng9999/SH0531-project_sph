import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 引入分仓库
import product from "./modules/product";

export default new Vuex.Store({
  modules: {
    product
  }
});
