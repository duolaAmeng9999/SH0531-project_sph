import apiAxios from "./apiAxios";
import mockAxios from "./mockAxios";

//暴露所有发送请求的函数
/* export const getBanners = () => mockAxios.get("/banners")
export const getFloors = () => mockAxios.get("/floors") */
export const getBaseCategoryList = () => apiAxios.get("/product/getBaseCategoryList")
// 获取轮播数据
export const getMockBanners = () => mockAxios.get("/banners")