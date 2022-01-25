import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/github-markdown.css'
import './assets/css/demo.css'
import './assets/css/scroll.css'
import 'highlight.js/styles/github.css'

// 导入组件库
import sd from '../packages/index';
// 注册组件库
Vue.use(sd)


//引入所有演示组件
const path = require("path");
const files = require.context(
  "./components",
  true,
  /.*\.vue$/
);
const modules = {};
files.keys().forEach((key) => {
  const name = path.basename(key, ".vue");
  modules[name] = files(key).default || files(key);
});
Object.values(modules).forEach(component => {
  Vue.component(component.name, component)
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
