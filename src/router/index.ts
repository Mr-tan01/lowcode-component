import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
const base = import.meta.env.VITE_ROUTER_BASE;
const routerRaws = import.meta.glob<RouteRecordRaw['component']>('../demo/**/index.vue', {
    import: 'default',
    eager: false,
});

const routes = createRoutes(routerRaws, 'demo', 'education');

const router = createRouter({
    history: createWebHashHistory(base),
    routes: [
        ...routes,
    ],
});
export type MenuRecordRawType =   { name: string; path: string; children?: any[]; meta: { title: string  } }
const deomMenu: MenuRecordRawType[] = [
    {
        name: 'education',
        path: '/demo-education',
        meta: {
            title: '教育治理平台',
        },
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
        const pageKey = `../${domain}/${packageName}/${path}/index.vue`;
        const raw = {
            component: globPage[pageKey]!,
            name: `${packageName}-${name}`,
            path: `/${packageName}/` + path,
            meta: {
                title: name,
            }
        };
        routes.push(raw);
    });
    return routes;
}