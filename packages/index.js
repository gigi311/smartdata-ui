
import 'element-ui/lib/theme-chalk/index.css'; // 原主题样式
import './assets/font/iconfont.css'//字体
import './assets/font/iconfont'//字体
import ElementUI from 'element-ui';
// 导入组件
import HistoryList from "./history-list";
import JsonMenu from './json-menu';
import SpaceSelect from './space-select'
import DataInput from './data-input'
import RelationInput from './relation-input'
import RelationInputGroup from './relation-input-group';
import BackToTop from './back-to-top';
import ScrollView from './scroll-view';

 
// 存储组件列表
const components = [HistoryList, JsonMenu, SpaceSelect, DataInput, RelationInput, RelationInputGroup, BackToTop, ScrollView];
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function(Vue) {
    Vue.use(ElementUI);
  // 判断是否安装
  if (install.installed) return;
  // 遍历注册全局组件
  components.forEach(component => {
    Vue.component(component.name, component)
  });
};
// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  ...components,
}