import { getBaseCategoryList } from "api/api";
const product = {
  namespaced: true,
  actions: {
    async getBaseCategoryList(context) {
      const { code, data } = await getBaseCategoryList();
      if (code === 200) {
        context.commit("GETBASECATEGORYLIST", data);
      }
    }
  },
  mutations: {
    GETBASECATEGORYLIST(state, data) {
      state.baseCategoryList = data;
    }
  },
  state: {
    baseCategoryList: [],
    name: "wenjing"
  },
  getters: {}
};
export default product;
