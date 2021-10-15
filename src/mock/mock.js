import Mock from "mockjs";

// 使用 Mock, 轮播图数据 Carousel
Mock.mock("/mock/banners", "get", {
  code: 200,
  "data|6": [
    {
      "id|+1": 0,
      url: "@image('730x454','@color', '#FFF', 'png', '@csentence')"
    }
  ]
});
// 使用 Mock, 楼层数据 Floor
import floor from "./json/floors.json";
Mock.mock("/mock/floor", "get", {
  code: 200,
  "data|2": [
    {
      "id|+1": 0,
      url: floor
    }
  ]
});
