import VueRouter from "vue-router";

// 引组件
const notFound = () =>
  import(/* webpackChunkName: "login" */ "pages/notFound/notFound");
const Home = () => import(/* webpackChunkName: "home" */ "pages/home/Home");
const Login = () => import(/* webpackChunkName: "login" */ "pages/login/Login");
const Register = () =>
  import(/* webpackChunkName: "register" */ "pages/register/Register");
const Search = () =>
  import(/* webpackChunkName: "register" */ "pages/search/Search");
const Order = () =>
  import(/* webpackChunkName: "register" */ "pages/order/Order");
const ShoppCart = () =>
  import(/* webpackChunkName: "register" */ "pages/shoppCart/ShoppCart");

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "*",
      component: notFound,
      meta: { isShowHeader: true, isShowFooter: true }
    },
    {
      path: "/",
      redirect: "/home"
    },
    {
      name: "home",
      path: "/home",
      component: Home
    },

    {
      name: "login",
      path: "/login",
      component: Login,
      meta: { isShowFooter: true }
    },
    {
      name: "register",
      path: "/register",
      component: Register,
      meta: { isShowFooter: true }
    },
    {
      name: "search",
      path: "/search/:keyWords?",
      component: Search,
      props($router) {
        return {
          keyWords: $router.params.keyWords,
          category1id: $router.query.category1id,
          category2id: $router.query.category2id,
          category3id: $router.query.category3id,
          categoryname: $router.query.categoryname
        };
      }
      // meta: {hideTypeof: false}
    },
    {
      name: "order",
      path: "/order",
      component: Order
    },
    {
      name: "shoppCart",
      path: "/shoppCart",
      component: ShoppCart
    }
  ]
});
//处理重复点击编程式路由出错的问题
const VueRouterPush = VueRouter.prototype.push;
const VueRouterReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function(to) {
  return VueRouterPush.call(this, to).catch(err => err);
};
VueRouter.prototype.replace = function(to) {
  return VueRouterReplace.call(this, to).catch(err => err);
};
export default router;
