
// 导入组件，组件必须声明 name
import SdJsonMenu from './src/MenuPanel'

// 为组件提供 install 安装方法，供按需引入
SdJsonMenu.install = function (Vue) {
    Vue.component(SdJsonMenu.name, SdJsonMenu)
}

// 默认导出组件
export default SdJsonMenu