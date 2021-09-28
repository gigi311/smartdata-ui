import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/demo.css'
import './assets/css/scroll.css'
import 'highlight.js/styles/github.css'
import 'github-markdown-css'


// 导入组件库
import sd from '../packages/index';
// 注册组件库
Vue.use(sd)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
