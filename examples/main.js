import Vue from 'vue'
import App from './App.vue'
import router from './router'


// 导入组件库
import demo from '../packages/index';
// 注册组件库
Vue.use(demo)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')