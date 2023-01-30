## BackToTop组件
>浮动的返回顶部组件，通过点击可使带有滚动条的页面，滚动到顶端。


### 基本用法
<div class="code_div">
<demo-back-to-top demo="1"></demo-back-to-top>

---
* 初始化方法

``` html
<sd-back-to-top></sd-back-to-top>
```
</div>


### Attributes
参数|说明|类型|可选|默认
:---|:---|:---|:---|:---
selector|监听的DOM的滚动条对象过滤条件|string|css的选择器:'#a' 或 '.b' 等|'.pages'
pos|出现的位置|object|使用{top:"10px",left:"20px"}或{bottom:"10px",right:"20px"}来控制位置|{right: "20px",bottom: "100px",}

### Event
事件名称|说明|回调参数
:---|:---|:---
scroll-change|被监听容器滚动条滑动触发事件，可提供时机给用户做其他处理|浏览器事件对象event