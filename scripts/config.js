import { resolve } from 'path'

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
                /mmjs-core*/,
                /lodash-es*/,
                /naive-ui*/,
                /localforage*/,
                /@vueuse\/core*/,
                /echarts*/,
                /lowcode-share*/,
                'resize-observer-polyfill',
                /@mmj-code-lib\/lowcode*/,
                /@cesium*/,
                'cesium-heatmap-es6',
            ],
            output: {
                globals: {
                    'vue': 'Vue',
                    'vue-router': 'VueRouter',
                    'lodash-es': 'LodashEs',
                    'naive-ui': 'NaiveUi',
                    '@vueuse/core': 'VueuseCore',
                    'echarts': 'Echarts',
                    'localforage': 'Localforage',
                },
            },
        },
    },
}
