import { pathResolve } from 'lowcode-share/es/cli/index.js';
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
            {
                find: '~',
                replacement: pathResolve('.', join(process.cwd(), '../'))
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