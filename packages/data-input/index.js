
// 导入组件，组件必须声明 name
import SdDataInput from './src/DataInput'

// 为组件提供 install 安装方法，供按需引入
SdDataInput.install = function (Vue) {
    Vue.component(SdDataInput.name, SdDataInput)
}

// 默认导出组件
export default SdDataInput