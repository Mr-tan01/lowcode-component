// tsup.config.ts
import { defineConfig } from 'tsup'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  entry: ['src/**/*.ts', 'src/**/*.vue'],  // 包含 Vue 文件入口
  splitting: true,
  clean: true,
  dts: true,
  format: ['esm', 'cjs'],
  target: 'es2020',
  shims: true,
  esbuildPlugins: [
    // 转换 Vue SFC
    {
      name: 'vue-loader',
      setup(build) {
        build.onLoad({ filter: /\.vue$/ }, async (args) => {
          const result = await require('@vue/compiler-sfc').compileTemplate({
            source: await require('fs').promises.readFile(args.path, 'utf8'),
            filename: args.path
          })
          return {
            contents: result.code,
            loader: 'js'
          }
        })
      }
    },
    // Vue 插件
    vue()
  ],
  loader: {
    '.vue': 'js' // 将 Vue 文件作为 JS 处理
  }
})
