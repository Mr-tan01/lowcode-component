import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
const base = import.meta.env.VITE_ROUTER_BASE;
const routerRaws = import.meta.glob('../demo/**/index.vue', {
    import: 'default',
    eager: true,
});

const routes = createRoutes(routerRaws, 'demo', 'education');

const router = createRouter({
    history: createWebHashHistory(base),
    routes: [
        ...routes,
    ],
});
const deomMenu = [
    {
        name: '教育治理平台',
        path: '/demo-education',
        children: [...routes],
    },
];
export {
    deomMenu,
}
export default router;

function createRoutes(globPage: Record<string, unknown>, domain: string, packageName: string): RouteRecordRaw[] {
    const routes: RouteRecordRaw[] = [];
    Object.entries(globPage).forEach(([key, value]) => {
        const matchs = key.match(`../${packageName}/(.*?)/index.vue`);
        if (!matchs?.[1] || !value) return;
        const path = matchs[1] || '';
        const name = path.replace(/\//ig, ':');
        const raw = {
            component: () => import(`../${domain}/${packageName}/${path}/index.vue`),
            name: `${packageName}-${name}`,
            path: `/${packageName}/` + path,
        };
        routes.push(raw);
    });
    return routes;
}