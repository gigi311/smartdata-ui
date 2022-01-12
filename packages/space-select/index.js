
// 导入组件，组件必须声明 name
import SdSpaceSelect from './src/SpaceSelect'

// 为组件提供 install 安装方法，供按需引入
SdSpaceSelect.install = function (Vue) {
    Vue.component(SdSpaceSelect.name, SdSpaceSelect)
}

// 默认导出组件
export default SdSpaceSelect