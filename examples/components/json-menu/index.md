## JsonMenu组件
>用数据的方式组装MENU菜单，理论支持无线子菜单嵌套。不用关注EL-MENU的组成，只传递适当的JSON数据即可自动生成菜单。

### 基本用法
#### 横向菜单
<div class="code_div">
<demo-json-menu></demo-json-menu>

* 初始化方法

``` html
<sd-json-menu :menuList="jsonData" :activeMenu="activeMenu" @select="menuChange"></sd-json-menu>
```

``` js
export default {
    name: 'DemoJsonMenu',
    data() {
        return {
            activeMenu:'menu1',
            jsonData: [{
                    "code": "menu1",
                    "name": "主菜单一",
                    "url": "http://joysight.jd.com/#/interface/datacenter?id=144",
                    "access": true,
                    "iconClass": "el-icon-s-grid",
                    "children": null,
                },
                {
                    "code": "menu2",
                    "name": "主菜单二",
                    "url": "/job",
                    "access": true,
                    "children": [{
                        "code": "menu2_1",
                        "name": "子菜单一",
                        "url": "/#/interface/cockpitaview",
                        "access": false,
                        "iconClass": "el-icon-receiving",
                    }, {
                        "code": "menu2_2",
                        "name": "子菜单二",
                        "url": "/#/interface/cockpitaview",
                        "access": true,
                        "iconClass": "el-icon-receiving",
                        "children": [{
                            "code": "menu2_1_1",
                            "name": "子子菜单一",
                            "url": "/#/interface/cockpitaview",
                            "access": true,
                            "iconClass": "el-icon-receiving",
                        }]
                    }],
                    "iconClass": "el-icon-tickets",
                },
                {
                    "code": "menu3",
                    "name": "主菜单三",
                    "url": "/exeRecords",
                    "access": true,
                    "iconClass": "el-icon-s-platform",
                    "children": null,
                },
            ]
        }
    },
    methods:{
        menuChange(code, menuObj){
            console.log('change:',code,menuObj);
        }
    }
}
```
</div>

#### 纵向菜单
<div class="code_div">
<demo-json-menu pos="left"></demo-json-menu>

---
* 初始化方法

``` html
<sd-json-menu pos="left" :menuList="jsonData" :activeMenu="activeMenu" :collapse="true" :colors="colors" @select="menuChange" @menu-collapse="changeWidth"></sd-json-menu>
```

``` js
export default {
    name: 'DemoJsonMenu',
    data() {
        return {
            activeMenu:'menu1',
            jsonData: [{
                    "code": "menu1",
                    "name": "主菜单一",
                    "url": "http://joysight.jd.com/#/interface/datacenter?id=144",
                    "access": true,
                    "iconClass": "el-icon-s-grid",
                    "children": null,
                },
                {
                    "code": "menu2",
                    "name": "主菜单二",
                    "url": "/job",
                    "access": true,
                    "children": [{
                        "code": "menu2_1",
                        "name": "子菜单一",
                        "url": "/#/interface/cockpitaview",
                        "access": false,
                        "iconClass": "el-icon-receiving",
                    }, {
                        "code": "menu2_2",
                        "name": "子菜单二",
                        "url": "/#/interface/cockpitaview",
                        "access": true,
                        "iconClass": "el-icon-receiving",
                        "children": [{
                            "code": "menu2_1_1",
                            "name": "子子菜单一",
                            "url": "/#/interface/cockpitaview",
                            "access": true,
                            "iconClass": "el-icon-receiving",
                        }]
                    }],
                    "iconClass": "el-icon-tickets",
                },
                {
                    "code": "menu3",
                    "name": "主菜单三",
                    "url": "/exeRecords",
                    "access": true,
                    "iconClass": "el-icon-s-platform",
                    "children": null,
                },
            ],
            colors:['#304156','#bfcbd9','#f4f4f5']
        }
    },
    methods:{
        menuChange(code, menuObj){
            console.log('change:',code,menuObj);
        },

        changeWidth(isCollapse){
            console.log('isCollapse',isCollapse);
            this.width = isCollapse ? 65 : 300;
        }
    }
}
```

</div>

### Attributes
参数|说明|类型|可选|默认
:---|:---|:---|:---|:---
menuList|菜单数据数组(内部属性见[json对象说明](#json))|array|-|-
activeMenu|当前选中的菜单(code)|string|-|-
pos|菜单展现形式|string|left / top|top
collapse|是折叠还是展示，只有pos='left'时有效|boolean|true / false|false
colors|菜单颜色|array|-|['#ffffff','#303133','#409EFF'] <br>按照背景色、文字颜色、选中文字颜色<br>顺序配置
showCollapse|是否显示收缩展开按钮|boolean|true / false|false

#### <span id="json">json对象说明</span>
参数|说明|类型|可选|默认
:---|:---|:---|:---|:---
code|菜单唯一标识|string|-|-
name|菜单显示名称|string|-|-
url|菜单路由或地址或其他自定义串|string|-|-
access|是否有权限，为false时，菜单不可点击|boolean|-|-
children|子菜单数组，内部对象同json象结构|array|-|-
others|其他业务数据属性，名称随意。在菜单点击时会跟随事件返回|-|-|-


### Event
事件名称|说明|回调参数
:---|:---|:---
select|某个菜单点击选中时触发|code:菜单的编码; menuObj:传入的当前菜单对象
menu-collapse|纵向菜单时，收缩和展开事件|isCollapse:布尔值(true为收缩，false为展开)
