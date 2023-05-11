## v-keywords指令
>v-keywords指令，是自定义的一款可以把文本中关键字找出来变色的指令。  
>支持多关键字匹配，采用em标签包裹的形式，替换原有标签中html代码呈现效果。

### 基本用法
<div class="code_div">
    <demo-keywords type="1"></demo-keywords>

---
* 初始化方法
``` js
// 在vue项目的main.js主文件中引入指定
import 'smartdata-ui/packages/directive/keywords';
```

``` html
<!--在使用的文本标签上添加指令和关键字参数 --> 
<div v-keywords="['班干部','村长']">班干部管班干部，别拿村长不当干部。</div>
```

* 修改命中文字样式
``` css
/* 只需要在特定的范围内修改标签的属性即可 */
  em {
    font-style: normal;
    color: #F85B46;
  }
```
</div>
