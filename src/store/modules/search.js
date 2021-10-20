import { getSearchList } from "api/api";

const search = {
  namespaced: true,
  actions: {
    async getSearchList(context, options) {
      const { code, data: searchData } = await getSearchList(options);
      if (code === 200) {
        context.commit("GETSEARCHLIST", searchData);
      }
    }
  },
  mutations: {
    GETSEARCHLIST(state, searchData) {
      state.searchData = searchData;
    }
  },
  state: {
    searchData: [],
    // name: 
  },
  grtters: {}
};
export default search;
