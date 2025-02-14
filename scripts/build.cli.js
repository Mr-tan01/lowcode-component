import { pathResolve } from 'lowcode-share';
import { build } from 'vite';
import vue from '@vitejs/plugin-vue';
import merge from 'lodash-es/merge.js';
import cloneDeep from 'lodash-es/cloneDeep.js';
import child_process from 'child_process';
import { join, basename, extname } from 'path';
import { readFileSync, writeFileSync } from 'fs';

const assetFileNames = ['.png', '.jpg', '.jpeg', '.svg', '.gif', '.mp4', '.mp3', '.webp'];

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
                assetsInlineLimit: 0,
                lib: {
                    entry: runEntryPath,
                    name: comAppName,
                    fileName: `${comAppName}/[name]`,
                    formats: ['es'],
                },
                rollupOptions: {
                    output: {
                        assetFileNames() {
                            return `${comAppName}/[ext]/[name].[ext]`;
                        },
                        manualChunks(id) {
                            if (assetFileNames.some(end => id.endsWith(end))) {
                                return `${comAppName}/assets/${basename(id).replace(extname(id), '')}`;
                            }
                        },
                        inlineDynamicImports: false,
                    }
                },
            },
            clearScreen: false,
            logLevel: 'info',
        };
        const inlineConfig = merge({}, config, this.options);
        const declaraDirPath = `${inlineConfig.build.outDir}/${comAppName}`;
        const dtsExecCode = `npx vue-tsc ${runEntryPath} --declaration --emitDeclarationOnly --outDir ${declaraDirPath}`;
        console.log("exec => ", dtsExecCode);
        try {
            child_process.exec(dtsExecCode);
        } catch {
        }
        build(inlineConfig).then(() => {
            // 把css 写入index.js文件
            const indexPath = join(inlineConfig.build.outDir, `${comAppName}/index.js`);
            // 插入前面
            const indexContent = readFileSync(indexPath, 'utf-8');
            const cssContent = `// css \n import './css/index.css';\n // # end css mapping css/index.css \n`
            writeFileSync(indexPath, cssContent + '\n' + indexContent);

        });
    }
}