const path = require("path");
const banners = require("./src/mock/banners.json")
const floors = require("./src/mock/floors.json")
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: false, // 关闭语法检查
  configureWebpack: {
    resolve: {
      alias: {
        components: resolve("src/components"),
        pages: resolve("src/pages"),
        router: resolve("src/router"),
        store: resolve("src/store"),
        api: resolve("src/api"),
        mock: resolve("src/mock")
      }
    }
  },
  devServer: {
    port: 326,
    proxy: {
      "/wenjing": {
        // 匹配所有以 "./wenjing" 开头请求的路径
        target: "http://localhost:5000", // 代理目标的基础路径
        pathRewrite: { "^/wenjing": "" },
        ws: true, // 用于支持 websocket
        changeOrigin: true // 用于控制请求中的 host 值
      },
      "/liuwenjing": {
        // 匹配所有以 "./wenjing" 开头请求的路径
        target: "http://localhost:5001", // 代理目标的基础路径
        pathRewrite: { "^/liuwenjing": "" },
        ws: true, // 用于支持 websocket
        changeOrigin: true // 用于控制请求中的 host 值
      }
    }
  }
};
