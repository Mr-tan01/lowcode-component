import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { pathResolve } from 'lowcode-share';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
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
  define: {
    'process.env': process.env,
  },
  build: {
    cssCodeSplit: true,
    lib: {
      entry: [
        './src/components/education/education.ts',
      ],
      name: 'lowcodeComponent',
      formats: ['es'],
      fileName: (format, entryName) => `${format}/${entryName}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue', // 打包时，不打包vue
        },
      },
    },
  }
})
