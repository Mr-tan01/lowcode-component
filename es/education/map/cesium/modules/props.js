import e from "../../node_modules/.pnpm/@cesium_engine@16.0.0/node_modules/@cesium/engine/Source/Core/Color.js";
const a = {
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
      maxZoom: 9e4,
      baseColor: e.TRANSPARENT,
      areaName: "龙华区"
    }
  },
  pointData: {
    type: Array
  }
};
export {
  a as cesiumProps
};
