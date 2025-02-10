import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { pathResolve } from 'lowcode-share'

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
        find: '~',
        replacement: pathResolve('.')
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  }
})
