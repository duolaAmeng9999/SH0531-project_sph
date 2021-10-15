import { getMockBanners } from "api/api";

const carousel = {
  namespaced: true,
  actions: {
    async getMockBanners(context) {
      const { code, data: banners } = await getMockBanners();
      if (code === 200) {
        context.commit("GETMOCKBANNERS", banners);
      }
    }
  },
  mutations: {
    GETMOCKBANNERS(state, banners) {
      state.banners = banners;
    }
  },
  state: {
    banners: [],
    name: "wenjing"
  },
  getters: {}
};
export default carousel;
