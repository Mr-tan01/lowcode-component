import { Color, ArcGisMapServerImageryProvider } from "@cesium/engine";
const cesiumProps = {
  clientId: { type: String },
  accessToken: { type: String },
  baseUrl: { type: String, default: "/jysl" },
  imageryLayersUrl: { type: String },
  areaName: { type: String },
  // 初始化区域
  defaultShowState: { type: Boolean, default: false },
  // 默认展示状态
  flyToHeight: { type: Number, default: 26e3 },
  // 相机飞行高度
  offsetState: { type: Boolean, default: false },
  // 启用/禁用 缩放偏移
  spinStroke: { type: String, default: "#046ab1" },
  // spin图标颜色
  spinContainerBg: { type: String, default: "#6C7E93" },
  // spin遮挡背景
  spinDescriptionColor: {
    type: String,
    default: "#046ab1"
  },
  // spin文字颜色
  showPopoverHeight: {
    type: Number,
    default: 1e4
  },
  centerPosition: {
    type: Object
  },
  defaultCenterKey: {
    type: String
  },
  controlStatus: {
    type: Object,
    default: {
      timeline: false,
      animation: false,
      geocoder: false,
      homeButton: false,
      sceneModePicker: false,
      baseLayerPicker: false,
      imageryProvider: ArcGisMapServerImageryProvider.fromUrl("https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"),
      // 避免使用cesium ions资源
      navigationHelpButton: false,
      fullscreenButton: false,
      scene3DOnly: true,
      orderIndependentTranslucency: true,
      selectionIndicator: false,
      useDefaultRenderLoop: true,
      // 保持默认渲染循环
      requestRenderMode: true,
      // 启用请求渲染模式
      maximumRenderTimeChange: 1,
      // 最大渲染时间变化
      contextOptions: {
        allowTextureFilterAnisotropic: true,
        webgl: {
          alpha: true,
          antialias: true,
          preserveDrawingBuffer: true
        }
      }
    }
  },
  basicConfig: {
    type: Object,
    default: {
      minZoom: 200,
      maxZoom: 13e4,
      baseColor: Color.TRANSPARENT,
      clusteringEnabled: false,
      clusteringPixelRange: 30,
      clusteringMinimumClusterSize: 2,
      labelShowHeightThreshold: 5e3
    }
  },
  pointData: {
    type: Array
  },
  openIndexDB: {
    type: Boolean
  },
  openOffset: {
    type: Object,
    default: { flag: false, offset: 0 }
  },
  popoverOffset: {
    type: Object,
    default: { popoverOffsetX: 0, popoverOffsetY: 0 }
  },
  pointBatchRender: {
    type: Object,
    default: { batchRenderSize: 50, batchRenderDelay: 0 }
  }
};
export {
  cesiumProps
};
