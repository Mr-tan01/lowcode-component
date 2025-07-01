import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { pathResolve } from 'lowcode-share/es/cli'
import Cesium from 'vite-plugin-cesium'
// https://vite.dev/config/
export default defineConfig({
    base: './',
    plugins: [vue(), Cesium()],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: pathResolve('src'),
            },
            {
                find: '~',
                replacement: pathResolve('.'),
            },
        ],
    },
    css: {
        preprocessorOptions: {
            scss: {
                implementation: 'sass',
                api: 'modern-compiler',
            },
        },
    },
    server: {
        host: '0.0.0.0',
        open: true,
        proxy: {
            '/jysl': {
                target: 'https://jysl.sz.edu.cn:8314',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/jysl/, ''),
                secure: true,
            },
        },
    },
    optimizeDeps: {
        exclude: ['@vue/repl'],
    },
    build: {
        outDir: 'lowcode-docx',
        rollupOptions: {
            output: {
                assetFileNames() {
                    return `[ext]/[name].[ext]`
                },
            },
        },
    },
})
