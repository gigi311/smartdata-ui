(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2228ef"],{ceb9:function(t,s,a){"use strict";a.r(s);var l=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h2",[t._v("RelationInput组件")]),t._m(0),a("h3",[t._v("基本用法")]),a("div",{staticClass:"code_div"},[a("demo-relation-input",{attrs:{demo:"1"}}),a("hr"),t._m(1),t._m(2),t._m(3)],1),a("h3",[t._v("组件大小")]),a("div",{staticClass:"code_div"},[a("demo-relation-input",{attrs:{demo:"2"}}),a("hr"),t._m(4),t._m(5),t._m(6)],1),a("h3",[t._v("自定义工具")]),a("div",{staticClass:"code_div"},[a("demo-relation-input",{attrs:{demo:"3"}}),a("hr"),t._m(7),t._m(8),t._m(9)],1),a("h3",[t._v("Attributes")]),t._m(10),a("h3",[t._v("Event")]),t._m(11),a("h3",[t._v("Slots")]),t._m(12)])},e=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("blockquote",[a("p",[t._v("一个三列选择组件，用于设置关联关系，多用于SQL条件拼接，表关联等。 此为一个单条组件单元，如果需要按组使用，请查看RelationInputGroup组件。")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("初始化方法")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("sd-relation-input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"val1"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":left-data")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"leftData"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":mid-data")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"midData"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":right-data")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"rightData"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@remove")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"clickRemove"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@add")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"clickAdd"')]),t._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("sd-relation-input")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("val1")]),t._v(": {},\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("leftData")]),t._v(": [{\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'字段A'")]),t._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'col_a'")]),t._v("\n            },{\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'字段B'")]),t._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'col_b'")]),t._v("\n            }],\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("midData")]),t._v(": [{\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'等于'")]),t._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'=='")]),t._v("\n            }],\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("rightData")]),t._v(": [{\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'值A'")]),t._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'val_a'")]),t._v("\n            },{\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'值B'")]),t._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'val_b'")]),t._v("\n            }],\n        }\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n        clickRemove(busid) {\n            "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$message({\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("message")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'你点击了删除按钮，回传busid为=>'")]),t._v(" + busid,\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'warning'")]),t._v("\n            });\n        },\n        clickAdd() {\n            "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$message({\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("message")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'你点击了新增按钮'")]),t._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'success'")]),t._v("\n            });\n        }\n    }\n}\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("初始化方法")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("sd-relation-input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"val2"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":left-data")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"leftData"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":mid-data")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"midData"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":right-data")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"rightData"')]),t._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("sd-relation-input")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("sd-relation-input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"val3"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":left-data")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"leftData"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":mid-data")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"midData"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":right-data")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"rightData"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"small"')]),t._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("sd-relation-input")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("sd-relation-input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"val4"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":left-data")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"leftData"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":mid-data")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"midData"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":right-data")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"rightData"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"mini"')]),t._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("sd-relation-input")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("val1")]),t._v(": {},\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("val2")]),t._v(": {},\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("val3")]),t._v(": {},\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("val4")]),t._v(": {},\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("leftData")]),t._v(": [{\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'字段A'")]),t._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'col_a'")]),t._v("\n            },{\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'字段B'")]),t._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'col_b'")]),t._v("\n            }],\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("midData")]),t._v(": [{\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'等于'")]),t._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'=='")]),t._v("\n            }],\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("rightData")]),t._v(": [{\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'值A'")]),t._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'val_a'")]),t._v("\n            },{\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'值B'")]),t._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'val_b'")]),t._v("\n            }],\n        }\n    }\n}\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("初始化方法")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("sd-relation-input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"val1"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":left-data")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"leftData"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":mid-data")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"midData"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":right-data")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"rightData"')]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-slot:tools")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"slotProps"')]),t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("el-button")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"text"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("@click")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"clickRemove(slotProps.busid)"')]),t._v(">")]),t._v("哈哈"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("el-button")]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("template")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("sd-relation-input")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n    data() {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("val1")]),t._v(": {},\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("leftData")]),t._v(": [{\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'字段A'")]),t._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'col_a'")]),t._v("\n            },{\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'字段B'")]),t._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'col_b'")]),t._v("\n            }],\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("midData")]),t._v(": [{\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'等于'")]),t._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'=='")]),t._v("\n            }],\n            "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("rightData")]),t._v(": [{\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'值A'")]),t._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'val_a'")]),t._v("\n            },{\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("label")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'值B'")]),t._v(",\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("value")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'val_b'")]),t._v("\n            }],\n        }\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n        clickRemove(busid) {\n            "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$message({\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("message")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'你点击了删除按钮，回传busid为=>'")]),t._v(" + busid,\n                "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("type")]),t._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v("'warning'")]),t._v("\n            });\n        }\n    }\n}\n")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("可选")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认")])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("value/v-model")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("绑定值")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("object")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("busid")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("组件业务ID，"),a("br"),t._v("在删除按钮点击时作为参数回传")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("string, number, object")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("时间戳的字符串")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("columns")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("三列的占比，按数字大小进行排版")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("array")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("[4,2,4]")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("gap")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("列间隙")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("number")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("10")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("size")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("组件大小设置")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("medium / small / mini")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("medium")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("show-remove")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示移除按钮")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("show-add")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否显示添加按钮")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("left-data")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("最左侧数据List"),a("br"),t._v("内部对象需要包含label,value两个属性")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("array")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("[]")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("mid-data")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("中间数据List"),a("br"),t._v("内部对象需要包含label,value两个属性")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("array")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("[]")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("right-data")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("最右侧数据List"),a("br"),t._v("内部对象需要包含label,value两个属性")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("array")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("[]")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("one-data-show-text")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("针对中间关联关系列"),a("br"),t._v("当只有一个选项时是否显示为字符串")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("true/false")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("事件名称")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("回调参数")])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("remove")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("在点击删除按钮时时触发")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("(busid: String/Number/Object)")])]),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("add")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("在点击新增按钮时时触发")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("name")]),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("tools")]),a("td",{staticStyle:{"text-align":"left"}},[t._v("按钮显示部分内容自定义，通过形参slotProps（可自行修改名称）获取数据进行处理，目前只支持busid属性获取")])])])])}],r=a("2877"),n={},v=Object(r["a"])(n,l,e,!1,null,null,null);s["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d2228ef.5081ffc9.js.map