<template>
<div>
    <sd-json-menu v-if="pos != 'left'" :menuList="jsonData" :activeMenu="activeMenu" @select="menuChange"></sd-json-menu>
    <div v-else :style="divStyle">
        <sd-json-menu pos="left" :menuList="jsonData" :activeMenu="activeMenu" :collapse="true" @select="menuChange" @menu-collapse="changeWidth"></sd-json-menu>
    </div>
</div>
</template>

<script>
export default {
    name: 'DemoJsonMenu',
    props:{
        pos:String,
    },
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
                        "access": true,
                        "iconClass": "el-icon-receiving",
                        "type": "1"
                    }, {
                        "code": "menu2_2",
                        "name": "子菜单二",
                        "url": "/#/interface/cockpitaview",
                        "access": true,
                        "iconClass": "el-icon-receiving",
                        "type": "1",
                        "children": [{
                            "code": "menu2_1_1",
                            "name": "子子菜单一",
                            "url": "/#/interface/cockpitaview",
                            "access": true,
                            "iconClass": "el-icon-receiving",
                            "type": "1"
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
            width:300,
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
    },
    computed: {
        divStyle() {
            return {
                width:`${this.width}px`,
                height:`600px`
            }
        }
    }
}
</script>

<style>

</style>
