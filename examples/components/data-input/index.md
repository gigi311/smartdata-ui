## DataInput组件
>一个数据输入及选择组件，支持INPUT方式的输入，也支持弹开窗口选择式的输入。
### 基本用法
<div class="code_div">
<demo-data-input></demo-data-input>

---
* 初始化方法

``` html
<sd-data-input :query-fn="searchFn" v-model="ipv"></sd-data-input>
```

``` js
export default {
    data(){
        return {
            ipv: 'abc'
        }
    },

    methods: {
        // 获取数据的方法
        // @param: pageInfo = {pageNum:1,pageSize:20,q:''}
        // @param: cb 回调函数参数为翻页数据信息
        searchFn(pageInfo, cb){
            setTimeout(()=>cb({total:100, data:[1,2,3]}),1000);
        }
    }
}
```

</div>

### 组件大小
<div class="code_div">
<demo-data-input type="size"></demo-data-input>

---
* 初始化方法

``` html
<sd-data-input :query-fn="searchFn" v-model="ipv"></sd-data-input>
<sd-data-input :query-fn="searchFn" v-model="ipv" size="small"></sd-data-input>
<sd-data-input :query-fn="searchFn" v-model="ipv" size="mini"></sd-data-input>
```

``` js
export default {
    data(){
        return {
            ipv: 'abc'
        }
    },

    methods: {
        // 获取数据的方法
        // @param: pageInfo = {pageNum:1,pageSize:20,q:''}
        // @param: cb 回调函数参数为翻页数据信息
        searchFn(pageInfo, cb){
            setTimeout(()=>cb({total:100, data:[1,2,3]}),1000);
        }
    }
}
```
</div>

### 禁用状态
<div class="code_div">
<demo-data-input type="disabled" :disabled="true"></demo-data-input>

---
* 初始化方法

``` html
<sd-data-input :query-fn="searchFn" v-model="ipv" :disabled="true"></sd-data-input>
```
</div>

### 自定义图标
<div class="code_div">
<demo-data-input type="icon"></demo-data-input>

---
* 初始化方法

``` html
<sd-data-input :query-fn="searchFn" v-model="ipv" icon-class="el-icon-edit" :multiple-limit="2"></sd-data-input>
<sd-data-input :query-fn="searchFn" v-model="ipv" icon-class="el-icon-share"></sd-data-input>
```
</div>


### 单选
<div class="code_div">
<demo-data-input type="simple"></demo-data-input>

---
* 初始化方法

``` html
<sd-data-input :query-fn="searchFn" v-model="ipv" :multiple="false"></sd-data-input>
```
</div>

### 时间日期区间
<div class="code_div">
<demo-data-input type="daterange"></demo-data-input>

---
* 初始化方法

``` html
<!-- 日期区间 -->
<sd-data-input v-model="ipv" type="daterange" @input="test"></sd-data-input>
<!-- 日期时间区间 -->
<sd-data-input v-model="ipv" type="datetimerange" @input="test"></sd-data-input>
<!-- 日期时间 -->
<sd-data-input v-model="ipv" type="datetime" win-width="600px" @input="test"></sd-data-input>
```
</div>


### 弹框嵌套(append-to-body默认为true，防止模态层遮挡问题)
<div class="code_div">
<demo-data-input type="win"></demo-data-input>

---
* 初始化方法

``` html
<el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
<el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
    <span>这是一级打开页面</span>
    <sd-data-input :query-fn="searchFn" v-model="ipv"></sd-data-input>
</el-dialog>
```
</div>


### Attributes
参数|说明|类型|可选|默认
:---|:---|:---|:---|:---
value/v-model|绑定值|string|-|-
query-fn|获取弹开窗口列表数据的方法|function|-|fn(pageInfo, cb)<br>pageInfo:{pageNum,pageSize,q}<br>q是查询输入内容<br><br>cb:回调函数<br>参数对象中至少包含：total,data属性<br>例如：cb({total:10,data:['a','b','c']})
size|组件大小设置|string|medium / small / mini  |medium
disabled|禁用|boolean|-|false
placeholder|文本框占位符|string|-|-
icon-class|自定义按钮图标|string|element-ui图标库|el-icon-s-operation
editable|是否可手工录入|boolean|-|true
multiple|是否多选|boolean|-|true
multiple-limit|在允许多选时，配置可选择项数量，<br>0则不限制|number|-|0
separator|链接分隔符，针对多选，日期区间使用|string|-|列表默认逗号(,)<br>日期默认波浪(~)
type|弹开窗口类型，主要涉及列表和日期|string|list/daterange/datetimerange/datetime|list
format|日期格式|string|-|yyyy-MM-dd HH:mm:ss
win-width|弹开窗口宽度，支持像素和百分比|string|300px或者50%格式|null
append-to-body|Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true|boolean|-|true


### Event
事件名称|说明|回调参数
:---|:---|:---
blur	|在 Input 失去焦点时触发	|(event: Event)
focus	|在 Input 获得焦点时触发	|(event: Event)
change	|仅在输入框失去焦点或用户按下回车时触发	|(value: string \| number)
input	|在 Input 值改变时触发	|(value: string \| number)
