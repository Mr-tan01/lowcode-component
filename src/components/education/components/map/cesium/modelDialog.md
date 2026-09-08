# LcCesiumModelDialog 使用文档

`LcCesiumModelDialog` 是一个基于 Cesium 的模型预览弹窗组件，用于加载并展示 3D Tiles 模型，支持定位、重载、全屏、旋转、抬高/降低、缩放等交互操作。

## 导入方式

```ts
import { LcCesiumModelDialog } from '@/components/education/components/map'
```

## 基本用法

```vue
<template>
  <LcCesiumModelDialog
    v-model:show="visible"
    :layer-id="layerId"
    :app-id="appId"
    :token="token"
    :title="title"
    :operation-speed="'normal'"
    @loaded="onLoaded"
    @loadError="onLoadError"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { LcCesiumModelDialog } from '@/components/education/components/map'

const visible = ref(false)
const layerId = ref('xxx')
const appId = ref('xxx')
const token = ref<string | null>(null)
const title = '模型预览'

function onLoaded(payload: { tileset: any; url: string }) {
  console.log('模型加载成功', payload.url)
}

function onLoadError(error: unknown) {
  console.error('模型加载失败', error)
}
</script>
```

## Props

### 基础显示

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `show` | `boolean` | `false` | 是否显示弹窗，使用 `v-model:show` 绑定 |
| `title` | `string` | `模型预览` | 弹窗标题 |
| `width` | `string` | `1200px` | 弹窗宽度 |
| `height` | `string` | `720px` | 弹窗高度 |
| `display` | `object` | 内置默认值 | 面板样式和文案配置 |

### 模型服务参数

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `version` | `'v1' \| 'v2'` | `v2` | 服务版本，影响拼接路径 |
| `layerId` | `string` | 必填 | 模型图层 ID |
| `appId` | `string` | `undefined` | 对应 `client_id` |
| `token` | `string \| null` | `null` | 对应 `access_token` |
| `baseUrl` | `string` | `https://jysl.sz.edu.cn:8314/service/api/gzj/igs/rest/services/xxtc` | 模型服务根地址 |
| `tilesetFile` | `string` | `tileset.json` | 入口文件名 |

### 模型调整参数

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `longitudeOffset` | `number` | `0` | 经度偏移，单位度 |
| `latitudeOffset` | `number` | `0` | 纬度偏移，单位度 |
| `heightOffset` | `number` | `0` | 高度偏移，单位米 |
| `fitToGround` | `boolean` | `false` | 是否贴地 |
| `groundHeight` | `number` | `undefined` | 指定地面高程 |
| `modelBaseHeight` | `number` | `undefined` | 指定模型底部高程 |
| `heading` | `number` | `0` | 初始航向角，单位度 |
| `pitch` | `number` | `0` | 初始俯仰角，单位度 |
| `roll` | `number` | `0` | 初始横滚角，单位度 |
| `scale` | `number` | `1` | 初始缩放比例 |
| `enhance3D` | `boolean` | `true` | 是否启用光照增强 |
| `enableShadows` | `boolean` | `true` | 是否启用阴影 |
| `options` | `Cesium3DTileset.ConstructorOptions` | `undefined` | tileset 初始化参数 |
| `modelOptions` | `Cesium3DTileset.ConstructorOptions` | `undefined` | 另一组 tileset 初始化参数，优先合并 |
| `terrainProvider` | `TerrainProvider` | `undefined` | 地形服务 |

### 操作参数

| 参数 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `operationSpeed` | `'slow' \| 'normal' \| 'fast'` | `normal` | 控制旋转、抬高、缩放步长 |
| `rotateStep` | `number` | `undefined` | 单次旋转步长，优先级高于 `operationSpeed` |
| `autoRotateInterval` | `number` | `200` | 自动旋转间隔，单位毫秒 |
| `tokenLoader` | `() => Promise<string \| null \| undefined>` | `undefined` | 重新加载时动态获取 token |

## display 配置

```ts
{
  viewerBackground?: string
  panelBackground?: string
  panelBorderColor?: string
  panelTextColor?: string
  sceneBackgroundColor?: string
  loadingDescription?: string
  retryDescription?: string
  loadingStroke?: string
  errorTitle?: string
  errorDescription?: string
  retryText?: string
  showToolbar?: boolean
  showControls?: boolean
  showRetryButton?: boolean
}
```

## 事件

| 事件 | 参数 | 说明 |
| --- | --- | --- |
| `loaded` | `{ tileset, url }` | 模型加载成功后触发 |
| `loadError` | `unknown` | 模型加载失败时触发 |

## 暴露方法

可通过组件 `ref` 调用：

| 方法 | 说明 |
| --- | --- |
| `reloadModel()` | 重新加载模型 |
| `locateModel()` | 定位模型到视野中心 |
| `resetView()` | 重置相机视角 |
| `resetTransform()` | 重置模型变换 |
| `raiseModel()` | 抬高模型 |
| `lowerModel()` | 降低模型 |
| `toggleAutoRotate()` | 开关自动旋转 |
| `toggleFullscreen()` | 切换全屏 |

## 行为说明

1. 弹窗打开后自动初始化 Cesium Viewer 并加载模型。
2. 模型加载成功后会触发 `loaded` 事件。
3. 加载失败时会进入错误态，并显示重试按钮。
4. 工具栏支持定位、重载、全屏。
5. 控制区支持左转、右转、抬高、降低、拉近、拉远、重置、自动旋转。
6. 关闭弹窗会销毁 Viewer，避免资源残留。

## 服务地址规则

组件会根据 `baseUrl`、`version`、`layerId`、`tilesetFile` 自动拼接模型地址，并支持以下占位符：

- `{node}`
- `{node1}`
- `{client_id}`
- `{access_token}`

如果 `baseUrl` 已经包含这些占位符，会直接替换后请求。

## 示例

```vue
<template>
  <LcCesiumModelDialog
    v-model:show="visible"
    :layer-id="model.layerId"
    :app-id="model.appId"
    :token="token"
    :title="model.name"
    :fit-to-ground="true"
    :height-offset="2"
    :operation-speed="'fast'"
    :rotate-step="15"
    :auto-rotate-interval="150"
    :display="display"
    @loaded="handleLoaded"
    @loadError="handleLoadError"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
const token = ref<string | null>(null)
const model = ref({
  layerId: 'demo-layer',
  appId: 'demo-app',
  name: '模型预览',
})

const display = {
  loadingDescription: '模型加载中，请稍候',
  errorDescription: '请检查模型服务或稍后重试',
  showToolbar: true,
  showControls: true,
}

function handleLoaded(payload: { tileset: unknown; url: string }) {
  console.log(payload.url)
}

function handleLoadError(error: unknown) {
  console.error(error)
}
</script>
```

## 注意事项

- `layerId` 必填，否则组件会进入错误态。
- `token` 和 `appId` 可直接传入，也可以通过 `tokenLoader` 在重载时刷新。
- 如果需要自定义外观，优先使用 `display`，不要直接改组件内部样式。
- 模型旋转、抬高、缩放都基于加载后的原始状态计算，适合反复操作。

