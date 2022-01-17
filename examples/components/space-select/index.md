## SpaceSelect组件
>用作工程项目的整体分类切换。  
>例如：项目的功能及数据按照某个维度进行展示和管理，则可以使用此组件作为切换维度使用。  
>也可以用作其他符合需要的地方。

### 基本用法
<div class="code_div">
    <demo-space-select type="1"></demo-space-select>

---
* 初始化方法
``` html
<sd-space-select :value.sync="value" :options="options" @set-default="setDefault"></sd-space-select>
```

``` js
export default {
    name: 'DemoSpaceSelect',
    data(){
        return {
            options: [
                {label:'space 1', value:'1', isDefault:true},
                {label:'space 2', value:'2'},
                {label:'space 3', value:'3'}],
            value: "1"
        }
    },
    methods:{
        setDefault(val, option){
            console.log('setDefault',val, option);
        }
    }

}
```
</div>


### 组件大小
<div class="code_div">
组件支持大小设置 buttonSize ： medium / small / mini    
<br/><br/>
<demo-space-select type="2"></demo-space-select>

---

``` html
<sd-space-select :value.sync="value" :options="options" size="medium" @set-default="setDefault"></sd-space-select>
<sd-space-select :value.sync="value" :options="options" size="small" @set-default="setDefault"></sd-space-select>
<sd-space-select :value.sync="value" :options="options" size="mini" @set-default="setDefault"></sd-space-select>
```

``` js
export default {
    name: 'DemoSpaceSelect',
    data(){
        return {
            options: [
                {label:'space 1', value:'1', isDefault:true},
                {label:'space 2', value:'2'},
                {label:'space 3', value:'3'}],
            value: "1"
        }
    },
    methods:{
        setDefault(val, option){
            console.log('setDefault',val, option);
        }
    }

}
```

</div>


### 自定义内容
<div class="code_div">
通过自定义插槽，个性化下拉显示内容    
<br/><br/>
<demo-space-select type="3"></demo-space-select>

---

``` html
<sd-space-select :value.sync="value" :options="options" @set-default="setDefault">
    <template v-slot="slotProps">
        <span>{{slotProps.option.label}}&lt;--<i class="el-icon-user"></i>--&gt;({{slotProps.option.value}})</span>
    </template>
</sd-space-select>
```

``` js
export default {
    name: 'DemoSpaceSelect',
    data(){
        return {
            options: [
                {label:'space 1', value:'1', isDefault:true},
                {label:'space 2', value:'2'},
                {label:'space 3', value:'3'}],
            value: "1"
        }
    },
    methods:{
        setDefault(val, option){
            console.log('setDefault',val, option);
        }
    }

}
```

</div>






### Attributes
参数|说明|类型|可选|默认
:---|:---|:---|:---|:---
value|绑定的选中数据的值<br>使用sync后缀，可以自动在下拉选择后，同步修改值|-|-
options|下拉项数组<br>(默认按对象内label属性作为展示,value属性作为值,<br>isDefault属性作为默认图标展示行)|Array|-|[]
size|组件大小|String|medium / small / mini |medium
label-prop|指定对象内显示字段属性名称|String|-|label
value-prop|指定对象内值字段属性名称|String|-|value
button-text|浮动按钮文字内容|String|-|设为默认
default-text|默认选中行标记文字|String|-|默认



### Event
事件名称|说明|回调参数
:---|:---|:---
set-default|点击单条记录上后端按钮时触发，用户可通过此事件做持久化处理|optValue:当前点击行的值;option:当前点击行对象
change|当前选中值发生变化时触发|val目前选中行的值

### Slots
name|说明
:---|:---
-|中间显示部分内容自定义，通过形参slotProps（可自行修改名称）获取数据进行处理