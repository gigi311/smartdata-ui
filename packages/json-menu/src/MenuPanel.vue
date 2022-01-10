<template>
<div :class="parentCls">
    <el-menu :default-active="activeMenu" :class="className" :mode="mode" 
    :collapse="collapseStatus" :unique-opened="true" :collapse-transition="false" 
    @select="menuSel">
        <component v-for="(n,i) in menuList" :key="i" :is="n.children && n.children.length>0 ? 'menu-sub-panel':'el-menu-item'" :index="n.code" :data="n">
            <template v-if="(n.children || []).length==0">
                <i :class="n.iconClass"></i>
                <span>{{n.name}}</span>
            </template>
        </component>
    </el-menu>
    <div v-if="pos == 'left' && collapse===true" class="toggle-button" @click="_openCloseFn">
        <i class="el-icon-arrow-left" v-show="!collapsed"></i>
        <i class="el-icon-arrow-right" v-show="collapsed"></i>
    </div>
</div>
</template>

<script>
import MenuSubPanel from './MenuSubPanel.vue';
export default {
    name: 'SdJsonMenu',
    components: {
        MenuSubPanel
    },
    props: [
        "activeMenu" /**当前选中菜单 */ ,
        "pos" /**菜单方式top为横向left为纵向 */ ,
        "collapse" /**是否可收缩 */ ,
        "menuList" /**菜单数据 */ ,
    ],
    mounted() {
        //处理样式
        if (this.pos == "left") {
            this.parentCls = "menu_panel_content maxwidth";
            this.className = "left-menu";
            this.mode = "vertical";
        }
    },
    data() {
        return {
            parentCls: "menu_panel_content",
            className: "top-menu",
            mode: "horizontal",
            collapsed: false,
        };
    },
    methods: {
        menuSel(code) {
            const menu = this._filterMenuByCode(this.menuList, code);
            this.$emit('select', code, menu);

        },
        //递归找寻选中的菜单对象
        _filterMenuByCode(list, code) {
            let menu = null;
            for (let i = 0; i < list.length && menu == null; i++) {
                if (list[i].code == code) {
                    menu = list[i];
                    break;
                } else if (list[i].children) {
                    menu = this._filterMenuByCode(list[i].children, code);
                }
            }
            return menu;
        },
        _openCloseFn() {
            this.collapsed = !this.collapsed;
            this.$emit('menu-collapse', this.collapsed);
        }
    },
    computed: {
        collapseStatus() {
            return (this.pos == "left" && this.collapse===true) ? this.collapsed : false;
        },
    },
};
</script>

<style lang="less">
.menu_panel_content {
    height: 100%;
    position: relative;
    border-right: solid 1px #e6e6e6;
    li {
        margin-top: 0;
    }

    &.maxwidth {
        width: 100%;
    }

    .left_aside {
        transition: .5s ease all;
    }

    .left-menu{
      height: calc(100% - 30px);
    //   overflow: auto;
      border-right:none;
      padding-left: 0;
    }

    .toggle-button {
        transition: .5s ease all;
        width: 100%;
        background-color: white;
        height: 30px;
        line-height: 30px;
        position: absolute;
        bottom: 0px;
        cursor: pointer;
        text-align: center;
    }

}
</style>
