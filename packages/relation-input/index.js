
// 导入组件，组件必须声明 name
import SdRelationInput from './src/RelationInput'

// 为组件提供 install 安装方法，供按需引入
SdRelationInput.install = function (Vue) {
    Vue.component(SdRelationInput.name, SdRelationInput)
}

// 默认导出组件
export default SdRelationInput