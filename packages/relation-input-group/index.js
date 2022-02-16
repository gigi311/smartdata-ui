
// 导入组件，组件必须声明 name
import SdRelationInputGroup from './src/RelationInputGroup'

// 为组件提供 install 安装方法，供按需引入
SdRelationInputGroup.install = function (Vue) {
    Vue.component(SdRelationInputGroup.name, SdRelationInputGroup)
}

// 默认导出组件
export default SdRelationInputGroup