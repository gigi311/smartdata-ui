## ScrollView组件
>从TAB组件中抽取的滚动组件容器，可在内容超出容器宽度时，自动出现左右滚动箭头。可点击箭头进行内容可视范围移动。 
>
>例如：系统头部有菜单的，菜单宽度固定，但菜单个数不固定。导致菜单长度超过最大宽度，可使用本组件处理。

### 基本用法
<div class="code_div">
<demo-scroll-view :type="1"></demo-scroll-view>

---
* 初始化方法

``` html
<sd-scroll-view :width="menuWidth">
    <el-tag v-for="item in tags" :key="item" type="info">
        {{ item }}
    </el-tag>
</sd-scroll-view>
```

``` js
export default {
    data() {
        return {
            menuWidth: "300px",
            tags: [1, 2, 3, 4, 5],
        };
    },
}
```

</div>

### Attributes
参数|说明|类型|可选|默认
:---|:---|:---|:---|:---
width|容器宽度|string|100px / 20vw / calc(100% - 200px)|100%

### Slots
name|说明
:---|:---
default|显示内容部分