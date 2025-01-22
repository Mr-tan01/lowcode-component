import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
const base = import.meta.env.VITE_ROUTER_BASE;
const routerRaws = import.meta.glob('../demo/**/index.vue', {
    import: 'default',
    eager: true,
});

const routes = createRoutes(routerRaws);
const router = createRouter({
    history: createWebHashHistory(base),
    routes,
});
export default router;

function createRoutes(globPage: Record<string, unknown>, packageName = 'demo'): RouteRecordRaw[] {
    const routes: RouteRecordRaw[] = [];
    Object.entries(globPage).forEach(([key, value]) => {
        const matchs = key.match(`../${packageName}/(.*?)/index.vue`);
        if (!matchs?.[1] || !value) return;
        const name = matchs[1]?.replace(/\//ig, '-') || '';
        routes.push({
            component: () => import(`../${packageName}/${name}/index.vue`),
            name: name,
            path: `/${packageName}/` + name,
        });
    });
    return routes;
}