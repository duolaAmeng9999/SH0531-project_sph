<template>
  <div class="swiper-container" id="mySwiper" ref="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="banners in banners" :key="banners.id">
        <img :src="banners.url" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
// 引入 swiper 样式文件 
import "swiper/swiper-bundle.min.css";
import Swiper from "swiper/swiper-bundle.min.js";

export default {
  name: "Carousel",
  props: ["options", "banners"],
  watch: {
    banners: {
      handler() {
        this.$nextTick(() => {
          new Swiper(this.$refs.swiper, {
            ...this.options,
          });
        });
      },
    },
  },
};
</script>

<style scoped lang="less">
</style>