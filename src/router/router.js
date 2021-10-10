import VueRouter from "vue-router";

// 引组件
const notFound = () =>
  import(/* webpackChunkName: "login" */ "pages/notFound/notFound");
const Home = () => import(/* webpackChunkName: "home" */ "pages/home/Home");
const Login = () => import(/* webpackChunkName: "login" */ "pages/login/Login");
const Register = () => import(/* webpackChunkName: "register" */ "pages/register/Register")

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
      path: "/home",
      component: Home
    },

    {
      path: "/login",
      component: Login,
      meta: { isShowFooter: true }
    },
    {
      path: "/register",
      component: Register,
      meta: { isShowFooter: true }

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
