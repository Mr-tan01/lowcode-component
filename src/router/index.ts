import { createRouter, createWebHashHistory } from 'vue-router';

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/demo/dialog',
            component: () => import('@/demo/dialog/index.vue')
        }
    ]
});