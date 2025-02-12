
/**
 * @type {import('vite').InlineConfig}
 */
export default {
    build: {
        rollupOptions: {
            external: [
                'vue',
                'vue-router',
                'lodash-es',
                'naive-ui',
                '@vueuse/core',
                'echarts'
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