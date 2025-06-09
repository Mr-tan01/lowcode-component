var E = Object.defineProperty;
var O = (n, t, e) => t in n ? E(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var o = (n, t, e) => O(n, typeof t != "symbol" ? t + "" : t, e);
import { ref as g } from "vue";
import * as c from "echarts";
import { Cartesian3 as p, Math as w, EllipsoidTerrainProvider as x, ScreenSpaceEventHandler as M, ScreenSpaceEventType as h, Color as P, SingleTileImageryProvider as S, SceneMode as k } from "@cesium/engine";
import { Viewer as G } from "@cesium/widgets";
const R = (n) => new Promise((t, e) => {
  const a = new Image();
  a.onload = () => t(!0), a.onerror = () => e(!1), a.src = n;
}), U = (n) => {
  const t = g(!1), e = g(null);
  let a = null, i = null;
  const r = () => {
    e.value && !a && (a = e.value.clock.onTick.addEventListener(() => {
      var l;
      (l = e.value) == null || l.camera.rotate(p.UNIT_Z, w.toRadians(n.rotateSpeed));
    }));
  }, s = () => {
    a && (a(), a = null);
  };
  return {
    destroyViewer: () => {
      e.value && (a && (a(), a = null), i && (i.destroy(), i = null), e.value.destroy(), e.value = null);
    },
    initViewer: async () => {
      e.value = new G("cesium3D-box", {
        animation: !1,
        //是否创建动画小器件，左下角仪表
        baseLayerPicker: !1,
        //是否显示图层选择器，右上角图层选择按钮
        fullscreenButton: !1,
        //是否显示全屏按钮，右下角全屏选择按钮
        timeline: !1,
        //是否显示时间轴
        infoBox: !1,
        //是否显示信息框
        navigationHelpButton: !1,
        //是否显示右上角的导航帮助按钮
        sceneModePicker: !1,
        //是否显示右上角的场景模式切换按钮
        homeButton: !1,
        // 隐藏Home按钮
        geocoder: !1,
        // 隐藏搜索框
        scene3DOnly: !0,
        // @ts-ignore
        imageryProvider: !1,
        terrainProvider: new x(),
        // 添加WebGL上下文配置
        contextOptions: {
          webgl: {
            alpha: !0,
            // 启用alpha通道
            preserveDrawingBuffer: !0
            // 保留绘图缓冲区
          }
        },
        ...n.cesiumOptions
      });
      const l = e.value.scene;
      i = new M(l.canvas), i.setInputAction((b) => {
        var y, _;
        const m = (y = e.value) == null ? void 0 : y.camera.getPickRay(b.endPosition), f = (_ = e.value) == null ? void 0 : _.scene.globe;
        let v = !1;
        m && f && (v = !!f.pick(m, l)), v ? s() : n.defaultRotate && !a && r();
      }, h.MOUSE_MOVE), e.value.scene.screenSpaceCameraController.minimumZoomDistance = 10, e.value.scene.screenSpaceCameraController.maximumZoomDistance = 5e7, e.value.scene.skyBox.show = !1, e.value.scene.sun.show = !1, e.value.scene.moon.show = !1, e.value.scene.skyAtmosphere.show = !1, e.value.scene.backgroundColor = P.TRANSPARENT;
      let L = new S({
        url: n.baseUrl,
        tileWidth: 256,
        tileHeight: 256
      });
      e.value.imageryLayers.addImageryProvider(L), e.value.cesiumWidget.creditContainer.style.display = "none", e.value.cesiumWidget.screenSpaceEventHandler.removeInputAction(h.LEFT_DOUBLE_CLICK), e.value.camera.flyTo({ destination: n.centerPosition }), t.value = await R(n.baseUrl);
    },
    startRotation: r,
    stopRotation: s,
    viewer: e,
    imageLoading: t
  };
}, u = class u {
  constructor(t) {
    o(this, "_GLMap");
    o(this, "_mapOffset", [0, 0]);
    this._GLMap = t, this._mapOffset = [0, 0], this.dimensions = ["lng", "lat"];
  }
  /**
   * 设置地图偏移量
   * @param mapOffset 偏移量数组[x, y]
   */
  setMapOffset(t) {
    this._mapOffset = t;
  }
  /**
   * 获取地图实例
   * @returns 返回Cesium场景对象
   */
  getBMap() {
    return this._GLMap;
  }
  /**
   * 修正纬度值，防止超出有效范围
   * @param lat 纬度值
   * @returns 修正后的纬度值
   */
  fixLat(t) {
    return t >= 90 ? 89.99999999999999 : t <= -90 ? -89.99999999999999 : t;
  }
  /**
   * 将地理坐标转换为屏幕像素坐标
   * @param coords 地理坐标数组[lng, lat]
   * @returns 屏幕像素坐标数组[x, y]
   */
  dataToPoint(t) {
    let e = [99999, 99999];
    t[1] = this.fixLat(t[1]);
    let a = p.fromDegrees(t[0], t[1]);
    if (!a) return e;
    let i = this._GLMap.cartesianToCanvasCoordinates(a);
    return i ? this._GLMap.mode === k.SCENE3D && p.angleBetween(this._GLMap.camera.position, a) > w.toRadians(75) ? [] : [i.x - this._mapOffset[0], i.y - this._mapOffset[1]] : e;
  }
  /**
   * 静态方法，创建并注册坐标系统
   * @param echartModel ECharts模型
   * @param api ECharts API
   * @returns 空数组
   */
  static create(t, e) {
    let a;
    return t.eachComponent("GLMap", function(i) {
      if (e.getZr().painter) {
        let s = window.glMap;
        a = new u(s), a.setMapOffset(i.__mapOffset || [0, 0]), i.coordinateSystem = a;
      }
    }), t.eachSeries(function(i) {
      i.get("coordinateSystem") === "GLMap" && (i.coordinateSystem = a);
    }), [];
  }
};
o(u, "dimensions", ["lng", "lat"]);
let d = u;
const I = (n, t) => {
  const e = new MouseEvent("mousedown", { bubbles: !0, cancelable: !0 }), a = new MouseEvent("mouseup", { bubbles: !0, cancelable: !0 }), i = new MouseEvent("click", { bubbles: !0, cancelable: !0 });
  for (const s in n)
    try {
      Object.defineProperty(e, s, { value: n[s] }), Object.defineProperty(a, s, { value: n[s] }), Object.defineProperty(i, s, { value: n[s] });
    } catch {
    }
  const r = t._dom.firstElementChild;
  r.dispatchEvent(e), r.dispatchEvent(a), r.dispatchEvent(i);
};
class N {
  constructor(t, e) {
    o(this, "_map");
    o(this, "_overlay");
    o(this, "_echartsContainer", null);
    o(this, "_isRegistered", !1);
    var a;
    this._map = t, this._overlay = this._createChartOverlay(), e && this._registerMap(), (a = this._overlay) == null || a.setOption(e || {});
  }
  /**
   * 注册地图到ECharts坐标系统
   */
  _registerMap() {
    this._isRegistered || (c.registerCoordinateSystem("GLMap", d), c.registerAction({ type: "GLMapRoam", event: "GLMapRoam", update: "updateLayout" }, function(t, e) {
    }), c.extendComponentModel({
      type: "GLMap",
      getBMap() {
        return this.__GLMap;
      },
      defaultOption: { roam: !1 }
    }), c.extendComponentView({
      type: "GLMap",
      init(t, e) {
        this.api = e, window.glMap.postRender.addEventListener(this.moveHandler, this);
      },
      moveHandler() {
        this.api.dispatchAction({ type: "GLMapRoam" });
      },
      dispose() {
        window.glMap.postRender.removeEventListener(this.moveHandler, this);
      }
    }), this._isRegistered = !0);
  }
  /**
   * 创建图表覆盖层
   * @returns 初始化的ECharts实例
   */
  _createChartOverlay() {
    var t = this._map.scene;
    t.canvas.setAttribute("tabIndex", "0");
    const e = document.createElement("div");
    e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.style.width = t.canvas.width + "px", e.style.height = t.canvas.height + "px", e.style.pointerEvents = "none", e.setAttribute("id", "echarts"), e.setAttribute("class", "echartMap"), this._map.container.appendChild(e), this._echartsContainer = e, window.glMap = t;
    const a = c.init(e);
    return new M(t.canvas).setInputAction((r) => I(event, a), h.LEFT_CLICK), a;
  }
  /**
   * 销毁图层，清理资源
   */
  dispose() {
    this._echartsContainer && (this._map.container.removeChild(this._echartsContainer), this._echartsContainer = null), this._overlay && (this._overlay.dispose(), this._overlay = null);
  }
  /**
   * 更新图表配置
   * @param t 新的ECharts配置选项
   */
  updateOverlay(t) {
    this._overlay && this._overlay.setOption(t);
  }
  /**
   * 调整图表大小以适应地图容器
   */
  resize() {
    if (!this._echartsContainer || !this._overlay) return;
    const t = this._map.container;
    this._echartsContainer.style.width = `${t.clientWidth}px`, this._echartsContainer.style.height = `${t.clientHeight}px`, this._overlay.resize();
  }
}
export {
  N as EchartsLayer,
  R as checkImageLoaded,
  U as useInitPlanet
};
