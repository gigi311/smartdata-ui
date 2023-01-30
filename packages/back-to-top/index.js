
// 导入组件，组件必须声明 name
import SdBackToTop from './src/BackToTop'

// 为组件提供 install 安装方法，供按需引入
SdBackToTop.install = function (Vue) {
    Vue.component(SdBackToTop.name, SdBackToTop)
}

// 默认导出组件
export default SdBackToTop