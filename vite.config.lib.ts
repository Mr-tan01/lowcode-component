import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { pathResolve } from 'lowcode-share/es/cli'
import { resolve } from 'path';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import dtsPlugin from 'vite-plugin-dts';

const dtsRoot = resolve('./src/components/education/components');
// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue(), libInjectCss(), dtsPlugin({
    root: dtsRoot,
    entryRoot: dtsRoot,
    outDir: resolve('dist', 'types'),
    declarationOnly: false,
    cleanVueFileName: true,
    compilerOptions: {
      incremental: true,
      declaration: true,
      emitDeclarationOnly: true,
    },
    include: [
      `${dtsRoot}/**/*.ts`,
      `${dtsRoot}/**/*d.ts`,
      `${dtsRoot}/**/*.vue`,
    ]
  })],
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
    outDir: 'dist',
    lib: {
      entry: dtsRoot,
      name: 'LowcodeComponent',
      formats: ['es'],
      fileName: () => `index.prod.mjs`,
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
        /@cesium*/,
      ],
    },
  }
})
