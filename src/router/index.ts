import { createRouter, createWebHashHistory, RouteRecordRaw, Router } from 'vue-router'
import { createMetaGlobRoutes } from 'lowcode-share/es/share'
const base = import.meta.env.VITE_ROUTER_BASE
const routerRaws = import.meta.glob<RouteRecordRaw['component']>('../demo/**/index.vue', {
    import: 'default',
    eager: false,
})

const routes = createMetaGlobRoutes(routerRaws, ['demo', 'education'])
const routes2 = createMetaGlobRoutes(routerRaws, ['demo', 'edit'])

const router: Router = createRouter({
    history: createWebHashHistory(base),
    routes: [
        {
            path: '/',
            redirect: routes[0].path,
            meta: {
                title: '首页',
            },
        },
        ...routes,
        ...routes2,
    ],
})

export const deomMenu: RouteRecordRaw[] = [
    {
        name: 'education',
        path: '/demo-education',
        meta: {
            title: '教育治理平台',
        },
        children: [...routes],
    },
]
export default router
