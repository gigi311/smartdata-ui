
// 导入组件，组件必须声明 name
import historyList from './src/history-list'
 
// 为组件提供 install 安装方法，供按需引入
historyList.install = function (Vue) {
 Vue.component('sd-'+historyList.name, historyList)
}

// 默认导出组件
export default historyList