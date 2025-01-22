import { pathResolve } from 'lowcode-share';
import { build } from 'vite';
import vue from '@vitejs/plugin-vue';
import merge from 'lodash-es/merge.js';
import cloneDeep from 'lodash-es/cloneDeep.js';

const baseConfig = {
    plugins: [vue()],
    define: {
        'process.env': process.env,
    },
    resolve: {
        alias: [
            {
                find: '@',
                replacement: pathResolve('src')
            },
            {
                find: 'vue',
                replacement: 'vue/dist/vue.runtime.esm-browser.js',
            },
            {
                find: 'naive-ui$',
                replacement: 'naive-ui/es/index.mjs',
            }
        ],
    },
}
export class EsmComBuilder {
    options = cloneDeep(baseConfig);
    /**
     * @param {import('vite').InlineConfig} options 
     */
    constructor(options) {
        this.base = '../src/components/education/components';
        this.setOptions(options);
    }
     /**
     * @param {import('vite').InlineConfig} options 
     */
    setOptions(options) {
        this.options = merge({}, this.options, options || {});
    }
    executeBuild(comAppName) {
        /**
         * @type {import('vite').InlineConfig}
         */
        const config = {
            build: {
                cssCodeSplit: true,
                outDir: '../es',
                emptyOutDir: false,
                lib: {
                    entry: `${this.base}/${comAppName}/index.ts`,
                    name: comAppName,
                    fileName: `${comAppName}/[name]`,
                    formats: ['es'],
                },
                rollupOptions: {
                    external: [
                        'vue',
                        'vue-router',
                    ],
                    output: {
                        globals: {
                            vue: 'Vue', // 打包时，不打包vue
                            'vue-router': 'vue-router',
                        },
                        assetFileNames() {
                            return `${comAppName}/[ext]/[name].[ext]`;
                        },
                        manualChunks(id) {
                            if (id.endsWith('.png')) {
                                return `${comAppName}/assets/` + id.split('/').slice(-1).join('');
                            }
                        }
                    }
                },
            },
            clearScreen: false,
            logLevel: 'info',
        };
        build(merge({}, this.options, config));
    }
}