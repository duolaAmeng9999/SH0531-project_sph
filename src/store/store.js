import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 引入分仓库
import product from "./modules/product";
import carousel from "./modules/carousel";
import search from "./modules/search";

export default new Vuex.Store({
  modules: {
    product,
    carousel,
    search
  }
});
