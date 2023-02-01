
// 导入组件，组件必须声明 name
import SdScrollView from './src/ScrollView'

// 为组件提供 install 安装方法，供按需引入
SdScrollView.install = function (Vue) {
    Vue.component(SdScrollView.name, SdScrollView)
}

// 默认导出组件
export default SdScrollView