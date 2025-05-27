import { Color as e } from "@cesium/engine";
const a = {
  clientId: { type: String },
  accessToken: { type: String },
  baseUrl: { type: String, default: "/jysl" },
  imageryLayersUrl: { type: String },
  areaName: { type: String },
  // 初始化区域
  defaultShowState: { type: Boolean, default: !1 },
  // 默认展示状态
  flyToHeight: { type: Number, default: 26e3 },
  // 相机飞行高度
  offsetState: { type: Boolean, default: !1 },
  // 启用/禁用 缩放偏移
  spinStroke: { type: String, default: "#046ab1" },
  // spin图标颜色
  spinContainerBg: { type: String, default: "#6C7E93" },
  // spin遮挡背景
  spinDescriptionColor: { type: String, default: "#046ab1" },
  // spin文字颜色
  centerPosition: {
    type: Object
  },
  controlStatus: {
    type: Object,
    default: {
      timeline: !1,
      animation: !1,
      geocoder: !1,
      homeButton: !1,
      sceneModePicker: !1,
      baseLayerPicker: !1,
      navigationHelpButton: !1,
      fullscreenButton: !1,
      scene3DOnly: !0,
      orderIndependentTranslucency: !0,
      selectionIndicator: !1,
      contextOptions: {
        allowTextureFilterAnisotropic: !0,
        webgl: {
          alpha: !0,
          antialias: !0,
          preserveDrawingBuffer: !0
        }
      }
    }
  },
  basicConfig: {
    type: Object,
    default: {
      minZoom: 200,
      maxZoom: 13e4,
      baseColor: e.TRANSPARENT,
      clusteringEnabled: !1,
      clusteringPixelRange: 30,
      clusteringMinimumClusterSize: 2
    }
  },
  pointData: {
    type: Array
  }
};
export {
  a as cesiumProps
};
