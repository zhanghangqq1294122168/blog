import Vue from "vue";
import VueRouter from "vue-router";

//使用路由
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: () => import("./../modules/index/Index"),
        hidden: true
    },
    {
        path: "/article",
        component: () => import("../modules/index/view/Article"),
        hidden: true
    }, {
        path: "/book",
        component: () => import("../modules/index/view/Book"),
        hidden: true
    }, {
        path: "/home",
        component: () => import("../modules/index/view/Home"),
        hidden: true
    }, {
        path: "/me",
        component: () => import("../modules/index/view/Me"),
        hidden: true
    }, {
        path: "/other",
        component: () => import("../modules/index/view/Other"),
        hidden: true
    }
];

const router = new VueRouter({
    routes: routes
});

export default router;
