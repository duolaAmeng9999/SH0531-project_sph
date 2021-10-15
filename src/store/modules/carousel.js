import { getMockBanners, getMockFloor } from "api/api";

const carousel = {
  namespaced: true,
  actions: {
    async getMockBanners(context) {
      const { code, data: banners } = await getMockBanners();
      if (code === 200) {
        context.commit("GETMOCKBANNERS", banners);
      }
    },
    async getMockFloor(context) {
      const { code, data: floors } = await getMockFloor();
      if (code === 200) {
        context.commit("GETMOCKFLOOR", floors);
      }
    }
  },
  mutations: {
    GETMOCKBANNERS(state, banners) {
      state.banners = banners;
    },
    GETMOCKFLOOR(state, floors) {
      state.floors = floors;
    }
  },
  state: {
    banners: [],
    floors: [],
    name: "wenjing"
  },
  getters: {
    
  }
};
export default carousel;
