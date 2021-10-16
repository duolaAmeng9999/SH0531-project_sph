<template>
  <div>
    <sph-header v-if="!$route.meta.isShowHeader"></sph-header>
    <router-view></router-view>
    <sph-footer v-if="!$route.meta.isShowFooter"></sph-footer>
  </div>
</template>

<script>
import Header from "components/header/Header.vue";
import Footer from "components/footer/Footer.vue";

import { mapActions } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions("product",["getBaseCategoryList"]),
    ...mapActions("carousel",["getMockBanners", "getMockFloors"]),
  },
  components: {
    "sph-header": Header,
    "sph-footer": Footer,
  },
  async mounted() {
    // 获取三级分数据并入仓库
    await this.getBaseCategoryList();
    // 获取轮播图数据并入仓库
    await this.getMockBanners();
    // 获取楼层数据并入仓库
    await this.getMockFloors();
  },
};
</script>

<style scoped>
</style>
