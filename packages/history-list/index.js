
// 导入组件，组件必须声明 name
import SdHistoryList from './src/history-list'

// 为组件提供 install 安装方法，供按需引入
SdHistoryList.install = function (Vue) {
    Vue.component(SdHistoryList.name, SdHistoryList)
}

// 默认导出组件
export default SdHistoryList