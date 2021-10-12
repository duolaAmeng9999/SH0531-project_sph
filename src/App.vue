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

import { mapActions } from 'vuex'

export default {
  name: "App",
  methods: {
    ...mapActions("product", ["getBaseCategoryList"])
  },
  components: {
    "sph-header": Header,
    "sph-footer": Footer,
  },
  async mounted() {
    await this.getBaseCategoryList();
  }
};
</script>

<style scoped>
</style>
