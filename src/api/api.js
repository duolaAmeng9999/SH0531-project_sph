import mockAxios from "api/mockAxios";
import apiAxios from "api/apiAxios.js";

//暴露所有发送请求的函数
export const getBanners = () => mockAxios.get("/banners")
export const getFloors = () => mockAxios.get("/floors")
export const getBaseCategoryList = () => apiAxios.get("/product/getBaseCategoryList")

