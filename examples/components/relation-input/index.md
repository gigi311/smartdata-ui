## RelationInput组件
>一个三列选择组件，用于设置关联关系，多用于SQL条件拼接，表关联等。
>此为一个单条组件单元，如果需要按组使用，请查看RelationInputGroup组件。

### 基本用法
<div class="code_div">
<demo-relation-input demo="1"></demo-relation-input>

---
* 初始化方法

``` html
<sd-relation-input v-model="val1" :left-data="leftData" :mid-data="midData" :right-data="rightData" @remove="clickRemove" @add="clickAdd"></sd-relation-input>
```

``` js
export default {
    data() {
        return {
            val1: {},
            leftData: [{
                label: '字段A',
                value: 'col_a'
            },{
                label: '字段B',
                value: 'col_b'
            }],
            midData: [{
                label: '等于',
                value: '=='
            }],
            rightData: [{
                label: '值A',
                value: 'val_a'
            },{
                label: '值B',
                value: 'val_b'
            }],
        }
    },
    methods: {
        clickRemove(busid) {
            this.$message({
                message: '你点击了删除按钮，回传busid为=>' + busid,
                type: 'warning'
            });
        },
        clickAdd() {
            this.$message({
                message: '你点击了新增按钮',
                type: 'success'
            });
        }
    }
}
```
</div>


### 组件大小
<div class="code_div">
<demo-relation-input demo="2"></demo-relation-input>

---
* 初始化方法

``` html
<sd-relation-input v-model="val2" :left-data="leftData" :mid-data="midData" :right-data="rightData"></sd-relation-input>
<sd-relation-input v-model="val3" :left-data="leftData" :mid-data="midData" :right-data="rightData" size="small"></sd-relation-input>
<sd-relation-input v-model="val4" :left-data="leftData" :mid-data="midData" :right-data="rightData" size="mini"></sd-relation-input>
```

``` js
export default {
    data() {
        return {
            val1: {},
            val2: {},
            val3: {},
            val4: {},
            leftData: [{
                label: '字段A',
                value: 'col_a'
            },{
                label: '字段B',
                value: 'col_b'
            }],
            midData: [{
                label: '等于',
                value: '=='
            }],
            rightData: [{
                label: '值A',
                value: 'val_a'
            },{
                label: '值B',
                value: 'val_b'
            }],
        }
    }
}
```
</div>

### 自定义组件内容
<div class="code_div">
<demo-relation-input demo="3"></demo-relation-input>

---
* 初始化方法

``` html
<sd-relation-input v-model="val1" :left-data="leftData" :mid-data="midData" :right-data="rightData">
    <template #tools="{scope}">
        <el-button type="text" @click="clickRemove(scope.busid)">哈哈</el-button>
    </template>
</sd-relation-input>
```

``` js
export default {
    data() {
        return {
            val1: {},
            leftData: [{
                label: '字段A',
                value: 'col_a'
            },{
                label: '字段B',
                value: 'col_b'
            }],
            midData: [{
                label: '等于',
                value: '=='
            }],
            rightData: [{
                label: '值A',
                value: 'val_a'
            },{
                label: '值B',
                value: 'val_b'
            }],
        }
    },
    methods: {
        clickRemove(busid) {
            this.$message({
                message: '你点击了删除按钮，回传busid为=>' + busid,
                type: 'warning'
            });
        }
    }
}
```
</div>


### Attributes
参数|说明|类型|可选|默认
:---|:---|:---|:---|:---
value/v-model|绑定值|object|-|-
busid|组件业务ID，<br>在删除按钮点击时作为参数回传|string, number, object|-|时间戳的字符串
columns|三列的占比，按数字大小进行排版|array|-|[4,2,4]
gap|列间隙|number|-|10
size|组件大小设置|string|medium / small / mini  |medium
show-remove|是否显示移除按钮|boolean|true/false|true
show-add|是否显示添加按钮|boolean|true/false|true
left-data|最左侧数据List<br>内部对象需要包含label,value两个属性|array|-|[]
mid-data|中间数据List<br>内部对象需要包含label,value两个属性|array|-|[]
right-data|最右侧数据List<br>内部对象需要包含label,value两个属性|array|-|[]
one-data-show-text|针对中间关联关系列<br>当只有一个选项时是否显示为字符串|boolean|true/false|false

### Event
事件名称|说明|回调参数
:---|:---|:---
remove	|在点击删除按钮时时触发	|(busid: String/Number/Object)
add |在点击新增按钮时时触发|-


### Slots
name|说明
:---|:---
tools|按钮显示部分内容自定义，通过形参{scope}解构的方式，获取组件内部作用域，可以获取组件内各种属性和方法<br><br>变量：valueLeft:左侧、valRelation:中间、valRight:右侧<br>方法：changeVal:重组value方法
right|使用方法，同上

##### <font color="#DEB887">注意： 使用插槽后，内部组件大小需要自己控制。无法通过配置size属性进行大小修改</font>