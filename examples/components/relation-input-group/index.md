## RelationInputGroup组件
>一个关联选择框组，支持点击添加/删除关联条件，可用在多条件SQL拼接及其他类似场景。


### 基本用法
<div class="code_div">
<demo-relation-input-group demo="1"></demo-relation-input-group>

---
* 初始化方法

``` html
<sd-relation-input-group v-model="value" :left-data="leftData" :mid-data="midData" :right-data="rightData"></sd-relation-input-group>
```


``` js
export default {
    data(){
        return {
            value: [],
            leftData: [{
                label: '字段A',
                value: 'col_a'
            }],
            midData: [{
                label: '等于',
                value: '=='
            }],
            rightData: [{
                label: '字段A',
                value: 'col_a'
            }],
        }
    }

}
```

</div>

### 限制最少行数
<div class="code_div">
<demo-relation-input-group demo="2"></demo-relation-input-group>

---
* 初始化方法

``` html
<sd-relation-input-group v-model="value" :left-data="leftData" :mid-data="midData" :right-data="rightData" :rowLimit="3"></sd-relation-input-group>
```

``` js
export default {
    data(){
        return {
            value: [],
            leftData: [{
                label: '字段A',
                value: 'col_a'
            }],
            midData: [{
                label: '等于',
                value: '=='
            }],
            rightData: [{
                label: '字段A',
                value: 'col_a'
            }],
        }
    }

}
```
</div>

### 组件大小
<div class="code_div">
<demo-relation-input-group demo="3"></demo-relation-input-group>

---
* 初始化方法

``` html
<sd-relation-input-group v-model="value" :left-data="leftData" :mid-data="midData" :right-data="rightData"></sd-relation-input-group>
<sd-relation-input-group v-model="value" :left-data="leftData" :mid-data="midData" :right-data="rightData" size="small"></sd-relation-input-group>
<sd-relation-input-group v-model="value" :left-data="leftData" :mid-data="midData" :right-data="rightData" size="mini"></sd-relation-input-group>
```

``` js
export default {
    data() {
        return {
            value: [],
            leftData: [{
                label: '字段A',
                value: 'col_a'
            }],
            midData: [{
                label: '等于',
                value: '=='
            }],
            rightData: [{
                label: '字段A',
                value: 'col_a'
            }],
        }
    }

}
```
</div>


### 自定义组件内容
<div class="code_div">
<demo-relation-input-group demo="4"></demo-relation-input-group>

---
* 初始化方法

``` html
<!-- 按钮自定义 -->
<sd-relation-input-group v-model="value" :left-data="leftData" :mid-data="midData" :right-data="rightData">
    <template #tools="{scope,idx}">
        <el-button type="text" @click="scope.removeRow(idx)">--</el-button>
        <el-button type="text" @click="scope.addRow">++</el-button>
    </template>
</sd-relation-input-group>

<!-- 值自定义 -->
<sd-relation-input-group v-model="value" :left-data="leftData" :mid-data="midData" :right-data="rightData">
    <template #right="{rowscope}">
        <el-radio-group v-model="rowscope.valRight" @change="rowscope.changeVal">
            <el-radio :label="3">备选项</el-radio>
            <el-radio :label="6">备选项</el-radio>
            <el-radio :label="9">备选项</el-radio>
        </el-radio-group>
    </template>
</sd-relation-input-group>
```

``` js

export default {
    data() {
        return {
            value: [],
            leftData: [{
                label: '字段A',
                value: 'col_a'
            }],
            midData: [{
                label: '等于',
                value: '=='
            }],
            rightData: [{
                label: '字段A',
                value: 'col_a'
            }],
        }
    }

}
```


</div>

### Attributes
参数|说明|类型|可选|默认
:---|:---|:---|:---|:---
value/v-model|绑定值|array|-|-
columns|三列的占比，按数字大小进行排版|array|-|[4,2,4]
row-gap|行间隙|number|-|5
row-limit|最少保留行数|number|-|1
gap|列间隙|number|-|10
size|组件大小设置|string|medium / small / mini  |medium
left-data|最左侧数据List<br>内部对象需要包含label,value两个属性|array|-|[]
mid-data|中间数据List<br>内部对象需要包含label,value两个属性|array|-|[]
right-data|最右侧数据List<br>内部对象需要包含label,value两个属性|array|-|[]
one-data-show-text|针对中间关联关系列<br>当只有一个选项时是否显示为字符串|boolean|true/false|false


### Event
事件名称|说明|回调参数
:---|:---|:---



### Slots
name|说明
:---|:---
tools|按钮显示部分内容自定义，通过形参{scope, rowscope, idx}解构的方式，获取组件内部作用域，可以获取组件内各种属性和方法<br>@scope<br>方法：addRow、removeRow<br>@rowscope:<br>变量：valueLeft:左侧、valRelation:中间、valRight:右侧<br>方法：changeVal:重组value方法<br>@idx：索引，主要用在删除函数中
right|使用方法，同上