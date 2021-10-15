import Mock from "mockjs";

// 使用 Mock
Mock.mock("/mock/banners", "get", {
  code: 200,
  "data|6": [
    {
      "id|+1": 0,
      url: "@image('730x454','@color', '#FFF', 'png', '@csentence')"
    }
  ]
});
