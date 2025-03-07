import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { pathResolve } from 'lowcode-share/es/cli'
import { resolve } from 'path';

const dtsRoot = resolve('./src/components/education/components');
// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: pathResolve('src')
      },
      {
        find: '~',
        replacement: pathResolve('.')
      },

    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: 'sass',
        api: 'modern-compiler'
      },
    },
  },
  server: {
    host: '0.0.0.0',
    open: true,
  },
  optimizeDeps: {
    exclude: ['@vue/repl'],
  },
  build: {
    copyPublicDir: false,
    cssCodeSplit: true,
    outDir: 'public/cdn/lowcode-component',
    lib: {
      entry: dtsRoot,
      name: 'LowcodeComponent',
      formats: ['es'],
      fileName: `[name]`,
    },
    rollupOptions: {
      output: {
        assetFileNames() {
          return `assets/[name][extname]`;
        },
      },
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
      ],
    },
  }
})
