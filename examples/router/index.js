import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
    routes: [{
        path: '/',
        redirect: '/demo-one',
    }, {
        path: '/demo-one',
        component: resolve => require(['../components/demo-one'], resolve)
    }]
});

export default router;