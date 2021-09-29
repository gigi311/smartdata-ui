# 组件库说明
本组件是基于Element-ui的基础上，根据自己公司部分的一些业务需求，对组件库进行封装。开发了一些具有一定业务含义的Vue组件，需要的朋友可以自取使用。

## 安装
### npm安装
推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

```node
npm i smartdata-ui -S
```

## 快速上手
### 引入SD组件库

在 main.js 中写入以下内容：
``` js
// 导入组件库
import sd from 'smartdata-ui';
// 导入组件库样式
import 'smartdata-ui/lib/smartdataui.css';
// 注册组件库
Vue.use(sd)
```
### 开始使用
一个基于 Vue 和 Smartdata-ui 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。
[文档教程地址](https://gigi311.github.io/smartdata-ui/)