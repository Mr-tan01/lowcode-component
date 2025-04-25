
import { resolve } from 'path';

/**
 * @type {import('vite').InlineConfig}
 */
export default {
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve('../src'),
            },
            {
                find: '~',
                replacement: resolve('../'),
            },
        ],
    },
    build: {
        rollupOptions: {
            external: [
                'vue',
                'vue-router',
                /lodash-es*/,
                /naive-ui*/,
                /@vueuse\/core*/,
                /echarts*/,
                /lowcode-share*/,
                'resize-observer-polyfill',
                /@mmj-code-lib\/lowcode*/,
                /@cesium*/,
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