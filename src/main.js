import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
//注入路由
import router from "./router/routers";

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});