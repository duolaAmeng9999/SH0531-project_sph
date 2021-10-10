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
export default {
  name: "App",
  components: {
    "sph-header": Header,
    "sph-footer": Footer,
  },
};
</script>

<style scoped>
</style>
