<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :default-active="onRoutes"
            :collapse="sidebar.collapse"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            unique-opened
            router
        >
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-sub-menu :index="item.index" :key="item.index" v-permiss="item.permiss">
                        <template #title>
                            <el-icon>
                                <component :is="item.icon"></component>
                            </el-icon>
                            <span>{{ item.title }}</span>
                        </template>
                        <!-- <template v-for="subItem in item.subs">
                            <el-sub-menu
                                v-if="subItem.subs"
                                :index="subItem.index"
                                :key="subItem.index"
                                v-permiss="item.permiss"
                            >
                                <template #title>{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-sub-menu>
                            <el-menu-item v-else :index="subItem.index" v-permiss="item.permiss">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template> -->
                    </el-sub-menu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index" v-permiss="item.permiss">
                        <el-icon>
                            <component :is="item.icon"></component>
                        </el-icon>
                        <template #title>{{ item.title }}</template>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useSidebarStore } from '../store/sidebar';
import { useRoute } from 'vue-router';

const items = [
    {
        icon: 'Odometer',
        index: '/dashboard',
        title: '系统首页',
        permiss: '1',
    },
    {
        icon: 'Calendar',
        index: '/lf14',
        title: '伸缩裂缝计（14号桩）',
        permiss: '2',
    },
    {
        icon: 'DocumentCopy',
        index: '/lf18',
        title: '伸缩裂缝计（18号桩）',
        permiss: '11',
    },
    {
        icon: 'Edit',
        index: '/zs14',
        title: '噪声传感器（14号桩）',
        permiss: '2',
        // subs: [
        //     {
        //         index: '/form',
        //         title: '基本表单',
        //         permiss: '5',
        //     },
        //     {
        //         index: '/upload',
        //         title: '文件上传',
        //         permiss: '6',
        //     },
        //     {
        //         index: '4',
        //         title: '三级菜单',
        //         permiss: '7',
        //         subs: [
        //             {
        //                 index: '/editor',
        //                 title: '富文本编辑器',
        //                 permiss: '8',
        //             },
        //             {
        //                 index: '/markdown',
        //                 title: 'markdown编辑器',
        //                 permiss: '9',
        //             },
        //         ],
        //     },
        // ],
    },
    {
        icon: 'Setting',
        index: '/zs18',
        title: '噪声传感器（18号桩）',
        permiss: '2',
    },
    {
        icon: 'PieChart',
        index: '/zd14',
        title: '振动传感器（14号桩）',
        permiss: '2',
    },
    {
        icon: 'PieChart',
        index: '/zd18',
        title: '振动传感器（18号桩）',
        permiss: '2',
    },
    {
        icon: 'Setting',
        index: '/szyz',
        title: '阈值设置',
        permiss: '2',
    },
];

const route = useRoute();
const onRoutes = computed(() => {
    return route.path;
});

const sidebar = useSidebarStore();
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
</style>
