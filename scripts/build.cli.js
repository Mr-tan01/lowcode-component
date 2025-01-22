import { pathResolve } from 'lowcode-share';
import { build } from 'vite';
import vue from '@vitejs/plugin-vue';
import merge from 'lodash-es/merge.js';
import cloneDeep from 'lodash-es/cloneDeep.js';
import child_process from 'child_process';
import { join } from 'path';

/**
* @type {import('vite').InlineConfig}
*/
const baseConfig = {
    plugins: [vue()],
    define: {
        'process.env': process.env,
    },
    resolve: {
        alias: [
            {
                find: '@',
                replacement: pathResolve('src', join(process.cwd(), '../')),
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
    build: {
        outDir: '../es',
    }
}
export class EsmComBuilder {
    options = cloneDeep(baseConfig);
    /**
     * @param {string} base 路径

     * @param {import('vite').InlineConfig} options 
     */
    constructor(base, options = {}) {
        this.base = base;
        this.setOptions(options);
        this.cwd = process.cwd();
    }
    /**
    * @param {import('vite').InlineConfig} options 
    */
    setOptions(options) {
        this.options = merge({}, this.options, options || {});
    }
    executeBuild(comAppName) {
        const runEntryPath = `${this.base}/${comAppName}/index.ts`;
        /**
         * @type {import('vite').InlineConfig}
         */
        const config = {
            build: {
                cssCodeSplit: true,
                emptyOutDir: false,
                lib: {
                    entry: runEntryPath,
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
        const inlineConfig = merge({}, this.options, config);
        const declaraDirPath = `${inlineConfig.build.outDir}/${comAppName}`;
        const dtsExecCode = `npx vue-tsc ${runEntryPath} --declaration --emitDeclarationOnly --outDir ${declaraDirPath}`;
        console.log("exec => ", dtsExecCode);
        try {
           child_process.exec(dtsExecCode);
        } catch {
        }
        build(inlineConfig);
    }
}