const path = require("path");
// const banners = require("./src/mock/banners.json")
// const floors = require("./src/mock/floors.json")
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
  }
};
