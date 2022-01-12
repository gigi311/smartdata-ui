import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
    routes: [{
        path: '/setup',
        component: resolve => require(['../components/defaults/安装.md'], resolve)
    },{
        path: '/quickstart',
        component: resolve => require(['../components/defaults/快速上手.md'], resolve)
    }, {
        path: '/comps/history-list',
        component: resolve => require(['../components/history-list/index.md'], resolve)
    },{
        path: '/comps/json-menu',
        component: resolve => require(['../components/json-menu/index.md'], resolve)
    },{
        path: '/comps/space-select',
        component: resolve => require(['../components/space-select/index.md'], resolve)
    },]
});

export default router;