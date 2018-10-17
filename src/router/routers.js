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
        component: () => import("./../modules/index/view/article"),
        hidden: true
    }, {
        path: "/book",
        component: () => import("./../modules/index/view/book"),
        hidden: true
    }, {
        path: "/home",
        component: () => import("./../modules/index/view/home"),
        hidden: true
    }, {
        path: "/me",
        component: () => import("./../modules/index/view/me"),
        hidden: true
    }, {
        path: "/other",
        component: () => import("./../modules/index/view/other"),
        hidden: true
    }
];

const router = new VueRouter({
    routes: routes
});

export default router;
