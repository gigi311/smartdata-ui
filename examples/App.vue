<template>
<div id="app">
    <div class="header">
        smartdata-ui <span>v:{{version}}</span>
    </div>
    <div class="content">
        <div class="menu">
            <ul>
                <li v-for="(item,idx) in menuArr" :key="idx" :class="activeMenu==item.text?'active '+item.class:item.class" :path="item.path" @click="go(item)" :style="item.path?'':'cursor:text'">{{item.text}}</li>
            </ul>
        </div>
        <div class="body_content markdown-body">
            <transition>
                <router-view :key="$route.query.code" />
            </transition>
        </div>
    </div>
</div>
</template>

<script>
import config from '../package.json'
export default {
    name: "App",
    data() {
        return {
            version: config.version,
            activeMenu: '',
            menuArr: [{
                class: 'menu_title',
                text: '开发指南',
                path: ''
            }, {
                text: '安装',
                path: '/setup'
            }, {
                text: '快速上手',
                path: '/quickstart'
            }, {
                class: 'menu_title',
                text: '组件',
                path: ''
            }, {
                text: 'HistoryList 回退前进组件',
                path: '/comps/history-list'
            }, {
                text: 'JsonMenu 数据菜单组件',
                path: '/comps/json-menu'
            }, {
                text: 'SpaceSelect 空间选择组件',
                path: '/comps/space-select'
            }, {
                text: 'DataInput 输入框组件',
                path: '/comps/data-input'
            }, {
                text: 'RelationInput 关联组件',
                path: '/comps/relation-input'
            }, {
                text: 'RelationInputGroup 关联组件组',
                path: '/comps/relation-input-group'
            }, {
                text: 'BackToTop 返回顶部',
                path: '/comps/back-to-top'
            }, {
                text: 'ScrollView 滚动容器',
                path: '/comps/scroll-view'
            }, {
                class: 'menu_title',
                text: '指令',
                path: ''
            }, {
                text: 'v-keywords',
                path: '/comps/v-keywords'
            }],
        }
    },
    mounted() {
        this.activeMenu = '安装';
        this.$router.push('/setup');
    },
    methods: {
        go({
            text,
            path
        }) {
            if (path) {
                this.activeMenu = text;
                this.$router.push(path)
            }
        }
    }
};
</script>

<style lang="less">
body {
    padding: 0;
    margin: 0;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding: 0;

    .header {
        height: 50px;
        border-bottom: 1px solid #dcdfe6;
        box-sizing: border-box;
        margin: 0 auto;
        max-width: 1140px;
        line-height: 50px;
        text-align: center;
        font-size: 28px;
        text-shadow: 0px 0px 17px #1f06f2;
        color: white;

        &>span {
            font-size: 12px;
            color: #888888;
            text-shadow: none;
            margin-left: 10px;
            font-style: italic;
        }
    }

    .content {
        height: calc(100vh - 50px);
        // display: grid;
        // grid-template-columns: 240px auto;
        display: flex;

        &>div {
            overflow: auto;
            height: 100%;
            padding: 10px;
            box-sizing: border-box;
            display: inline-block;
        }

        .menu {
            width: 240px;
            margin-left: calc(50% - 570px);

            ul {
                padding: 0;
                margin: 0;

                li {
                    list-style: none;
                    margin: 20px 0;
                    font-size: 14px;
                    color: #444;
                    cursor: pointer;

                    &.menu_title {
                        font-size: 16px;
                        font-weight: bold;
                        color: #333;
                    }

                    &.active,
                    &[path *='/']:hover {
                        color: #409eff;
                    }
                }
            }
        }

        .body_content {
            flex: 1;
            padding-right: calc(50% - 570px);
        }
    }
}

#app {
    .markdown-body {

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            border: none;
            font-weight: initial;
        }
    }
}
</style>
