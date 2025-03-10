import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { pathResolve } from 'lowcode-share/es/cli'

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
    outDir: 'lowcode-docx',
    rollupOptions: {
      output: {
        assetFileNames() {
          return `[ext]/[name].[ext]`;
        },
      }
    },
  }
})
