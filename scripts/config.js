import { pathResolve } from 'lowcode-share';
import { join } from 'path';

/**
 * @type {import('vite').InlineConfig}
 */
export default {
    resolve: {
        alias: [
            {
                find: '@',
                replacement: pathResolve('src', join(process.cwd(), '../')),
            },
        ],
    },
    build: {
        rollupOptions: {
            external: [
                'vue',
                'vue-router',
                'lodash-es',
                'naive-ui',
                '@vueuse/core',
                'echarts',
                'lowcode-share',
                'mmj-code-lib',
            ],
            output: {
                globals: {
                    vue: 'Vue',
                    'vue-router': 'VueRouter',
                    'lodash-es': 'LodashEs',
                    'naive-ui': 'NaiveUi',
                    '@vueuse/core': 'VueuseCore',
                    'echarts': 'Echarts',
                },
            }
        }

    }

}