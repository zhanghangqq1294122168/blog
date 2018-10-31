import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import http from './http/http'
//富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

//注入路由
import router from "./router/routers";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueQuillEditor);

Vue.prototype.$http = http;
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});