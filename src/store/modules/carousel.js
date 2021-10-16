import { getMockBanners, getMockFloors } from "api/api";

const carousel = {
  namespaced: true,
  actions: {
    async getMockBanners(context) {
      const { code, data: banners } = await getMockBanners();
      if (code === 200) {
        context.commit("GETMOCKBANNERS", banners);
      }
    },
    async getMockFloors(context) {
      const { code, data: floors } = await getMockFloors();
      if (code === 200) {
        context.commit("GETMOCKFLOORS", floors);
      }
    }
  },
  mutations: {
    GETMOCKBANNERS(state, banners) {
      state.banners = banners;
    },
    GETMOCKFLOORS(state, floors) {
      state.floors = floors;
    }
  },
  state: {
    banners: [],
    floors: [],
    name: "wenjing"
  },
  getters: {
    handleFloors(state) {
      return state.floors.map(item => ({
        ...item,
        carouselList: item.carouselList.map(({ id, imgUrl }) => ({
          id,
          url: imgUrl
        }))
      }));
    },
  }
};
export default carousel;
