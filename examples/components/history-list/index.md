## HistoryList组件
>用于历史操作的记录展示，可以进行前进、回退操作。  
>有两种展现方式：一种类似PS的操作历史记录，可以看见每一步的操作描述；另一种是只有回退、重做按钮。根据自己需求进行配置显示。
### 基本用法
<div class="code_div">

<demo-history-list></demo-history-list>

---
* 初始化方法
``` html
<sd-history-list ref="his" @load-history="fn"></sd-history-list>
<sd-history-list ref="his" :showType=2 @load-history="fn"></sd-history-list>
```
* 灌入数据方法
``` js
const code = new Date().getTime();
this.$refs.his.setHistory(code, {
    data: code
},'el-icon-star-off');
```
* 响应回退前进事件
``` js
//通过监听loadHistory事件来完成
...
metheds:{
    fn(elements){
        //todo sth
    }
}
```
</div>

### 组件大小
<div class="code_div">

组件支持大小设置 buttonSize ： medium / small / mini    
<sd-history-list buttonSize="medium"></sd-history-list>
<sd-history-list buttonSize="small" style="margin:10px 10px 0;"></sd-history-list>
<sd-history-list buttonSize="mini"></sd-history-list>   

<sd-history-list :showType=2 buttonSize="medium"></sd-history-list>
<sd-history-list :showType=2 buttonSize="small" style="margin:0 10px;"></sd-history-list>
<sd-history-list :showType=2 buttonSize="mini"></sd-history-list>


``` html
<sd-history-list buttonSize="medium"></sd-history-list>
<sd-history-list buttonSize="small"></sd-history-list>
<sd-history-list buttonSize="mini"></sd-history-list>  

<sd-history-list :showType=2 buttonSize="medium"></sd-history-list>
<sd-history-list :showType=2 buttonSize="small"></sd-history-list>
<sd-history-list :showType=2 buttonSize="mini"></sd-history-list>
```

</div>

### Attributes
参数|说明|类型|可选|默认
:---|:---|:---|:---|:---
showType|展示方式|number|1：列表2：按钮|1
max|历史记录最大条数|number|-|15
noHistoryText|无操作历史时显示内容，只有showType=1时有效|string|-|无操作历史
buttonText|触发按钮的文字内容，只有showType=1时有效|string|-|操作历史
buttonSize|按钮大小设置|string|medium / small / mini  |small


### Event
事件名称|说明|回调参数
:---|:---|:---
load-history|在下拉菜单中点击某一历史记录或点击前进、后退按钮时触发|步骤存储的对象

### Methods
方法名|说明|参数
:---|:---|:---
setHistory|向组件添加一条记录。name:列表显示名称;elements:存储对象;icon:可选的图标class，支持element-ui的所有icon图表类|(name, elements, icon = '')
clearAll|清除组件中的所有历史记录数据。|无