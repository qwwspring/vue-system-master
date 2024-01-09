import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { usePermissStore } from '../store/permiss';
import Home from '../views/home.vue';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/dashboard',
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                meta: {
                    title: '系统首页',
                    permiss: '1',
                },
                component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard.vue'),
            },
            {
                path: '/table',
                name: 'basetable',
                meta: {
                    title: '表格',
                    permiss: '2',
                },
                component: () => import(/* webpackChunkName: "table" */ '../views/table.vue'),
            },
            {
                path: '/charts',
                name: 'basecharts',
                meta: {
                    title: '图表',
                    permiss: '11',
                },
                component: () => import(/* webpackChunkName: "charts" */ '../views/charts.vue'),
            },
            {
                path: '/form',
                name: 'baseform',
                meta: {
                    title: '表单',
                    permiss: '5',
                },
                component: () => import(/* webpackChunkName: "form" */ '../views/form.vue'),
            },
            {
                path: '/lf14',
                name: 'lf14',
                meta: {
                    title: '裂缝伸缩（14）',
                    permiss: '3',
                },
                component: () => import(/* webpackChunkName: "tabs" */ '../views/lf14.vue'),
            },
            {
                path: '/lf18',
                name: 'lf18',
                meta: {
                    title: '裂缝伸缩（18）',
                    permiss: '11',
                },
                component: () => import(/* webpackChunkName: "tabs" */ '../views/lf18.vue'),
            },
            {
                path: '/donate',
                name: 'donate',
                meta: {
                    title: '鼓励作者',
                    permiss: '14',
                },
                component: () => import(/* webpackChunkName: "donate" */ '../views/donate.vue'),
            },
            {
                path: '/permission',
                name: 'permission',
                meta: {
                    title: '权限管理',
                    permiss: '13',
                },
                component: () => import(/* webpackChunkName: "permission" */ '../views/permission.vue'),
            },
            {
                path: '/zs18',
                name: 'zs18',
                meta: {
                    title: '噪声18',
                    permiss: '2',
                },
                component: () => import(/* webpackChunkName: "upload" */ '../views/zs18.vue'),
            },
            {
                path: '/zs18',
                name: 'zs18',
                meta: {
                    title: '噪声18',
                    permiss: '2',
                },
                component: () => import(/* webpackChunkName: "upload" */ '../views/zs18.vue'),
            },
            {
                path: '/zd14',
                name: 'zd14',
                meta: {
                    title: '振动14',
                    permiss: '2',
                },
                component: () => import(/* webpackChunkName: "upload" */ '../views/zd14.vue'),
            },
            {
                path: '/zd18',
                name: 'zd18',
                meta: {
                    title: '振动18',
                    permiss: '2',
                },
                component: () => import(/* webpackChunkName: "icon" */ '../views/zd18.vue'),
            },
            {
                path: '/user',
                name: 'user',
                meta: {
                    title: '个人中心',
                },
                component: () => import(/* webpackChunkName: "user" */ '../views/user.vue'),
            },
            {
                path: '/editor',
                name: 'editor',
                meta: {
                    title: '富文本编辑器',
                    permiss: '8',
                },
                component: () => import(/* webpackChunkName: "editor" */ '../views/editor.vue'),
            },
            {
                path: '/szyz',
                name: 'szyz',
                meta: {
                    title: '阈值设置',
                    permiss: '2',
                },
                component: () => import( '../views/yuzhi.vue'),
            },
            {
                path: '/export',
                name: 'export',
                meta: {
                    title: '导出Excel',
                    permiss: '2',
                },
                component: () => import(/* webpackChunkName: "export" */ '../views/export.vue'),
            },
            {
                path: '/zs14',
                name: 'zs14',
                meta: {
                    title: '噪声14',
                    permiss: '2',
                },
                component: () => import(/* webpackChunkName: "import" */ '../views/zs14.vue'),
            },
        ],
    },
    {
        path: '/login',
        name: 'Login',
        meta: {
            title: '登录',
        },
        component: () => import(/* webpackChunkName: "login" */ '../views/login.vue'),
    },
    {
        path: '/403',
        name: '403',
        meta: {
            title: '没有权限',
        },
        component: () => import(/* webpackChunkName: "403" */ '../views/403.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    NProgress.start();
    const role = localStorage.getItem('ms_username');
    const permiss = usePermissStore();
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permiss && !permiss.key.includes(to.meta.permiss)) {
        // 如果没有权限，则进入403
        next('/403');
    } else {
        next();
    }
});

router.afterEach(() => {
    NProgress.done()
})

export default router;
