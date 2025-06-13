var b = Object.defineProperty;
var E = (n, e, t) => e in n ? b(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var r = (n, e, t) => E(n, typeof e != "symbol" ? e + "" : e, t);
import { ref as O } from "vue";
import * as l from "echarts";
import { Viewer as x } from "@cesium/widgets";
import { EllipsoidTerrainProvider as S, ScreenSpaceEventHandler as M, Cartesian3 as c, Math as C, ScreenSpaceEventType as h, Color as G, SingleTileImageryProvider as k, SceneMode as P } from "@cesium/engine";
const D = (n) => {
  const e = O(null);
  let t = null, a = null;
  return {
    destroyViewer: () => {
      e.value && (t && (t(), t = null), a && (a.destroy(), a = null), e.value.destroy(), e.value = null);
    },
    initViewer: () => {
      e.value = new x("cesium3D-box", {
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
        terrainProvider: new S(),
        // 添加WebGL上下文配置
        contextOptions: {
          webgl: {
            alpha: !0,
            // 启用alpha通道
            preserveDrawingBuffer: !0
            // 保留绘图缓冲区
          }
        }
      });
      const s = e.value.scene;
      a = new M(s.canvas), a.setInputAction((L) => {
        var _, g, w;
        const f = (_ = e.value) == null ? void 0 : _.camera.getPickRay(L.endPosition), v = (g = e.value) == null ? void 0 : g.scene.globe;
        let y = !1;
        f && v && (y = !!v.pick(f, s)), y ? t && (t(), t = null) : n.defaultRotate && !t && (t = ((w = e.value) == null ? void 0 : w.clock.onTick.addEventListener(() => {
          var u;
          (u = e.value) == null || u.camera.rotate(c.UNIT_Z, C.toRadians(n.rotateSpeed));
        })) || null);
      }, h.MOUSE_MOVE), e.value.scene.screenSpaceCameraController.minimumZoomDistance = 10, e.value.scene.screenSpaceCameraController.maximumZoomDistance = 5e7, e.value.scene.skyBox.show = !1, e.value.scene.sun.show = !1, e.value.scene.moon.show = !1, e.value.scene.skyAtmosphere.show = !1, e.value.scene.backgroundColor = G.TRANSPARENT;
      let m = new k({
        url: n.baseUrl,
        tileWidth: 256,
        tileHeight: 256
      });
      e.value.imageryLayers.addImageryProvider(m), e.value.cesiumWidget.creditContainer.style.display = "none", e.value.cesiumWidget.screenSpaceEventHandler.removeInputAction(h.LEFT_DOUBLE_CLICK), e.value.camera.flyTo({ destination: c.fromDegrees(116.4551, 40.2539, 1e7) });
    },
    viewer: e
  };
}, p = class p {
  constructor(e) {
    r(this, "_GLMap");
    r(this, "_mapOffset", [0, 0]);
    this._GLMap = e, this._mapOffset = [0, 0], this.dimensions = ["lng", "lat"];
  }
  /**
   * 设置地图偏移量
   * @param mapOffset 偏移量数组[x, y]
   */
  setMapOffset(e) {
    this._mapOffset = e;
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
  fixLat(e) {
    return e >= 90 ? 89.99999999999999 : e <= -90 ? -89.99999999999999 : e;
  }
  /**
   * 将地理坐标转换为屏幕像素坐标
   * @param coords 地理坐标数组[lng, lat]
   * @returns 屏幕像素坐标数组[x, y]
   */
  dataToPoint(e) {
    let t = [99999, 99999];
    e[1] = this.fixLat(e[1]);
    let a = c.fromDegrees(e[0], e[1]);
    if (!a) return t;
    let i = this._GLMap.cartesianToCanvasCoordinates(a);
    return i ? this._GLMap.mode === P.SCENE3D && c.angleBetween(this._GLMap.camera.position, a) > C.toRadians(75) ? [] : [i.x - this._mapOffset[0], i.y - this._mapOffset[1]] : t;
  }
  /**
   * 静态方法，创建并注册坐标系统
   * @param echartModel ECharts模型
   * @param api ECharts API
   * @returns 空数组
   */
  static create(e, t) {
    let a;
    return e.eachComponent("GLMap", function(i) {
      if (t.getZr().painter) {
        let s = window.glMap;
        a = new p(s), a.setMapOffset(i.__mapOffset || [0, 0]), i.coordinateSystem = a;
      }
    }), e.eachSeries(function(i) {
      i.get("coordinateSystem") === "GLMap" && (i.coordinateSystem = a);
    }), [];
  }
};
r(p, "dimensions", ["lng", "lat"]);
let d = p;
const R = (n, e) => {
  const t = new MouseEvent("mousedown", { bubbles: !0, cancelable: !0 }), a = new MouseEvent("mouseup", { bubbles: !0, cancelable: !0 }), i = new MouseEvent("click", { bubbles: !0, cancelable: !0 });
  for (const s in n)
    try {
      Object.defineProperty(t, s, { value: n[s] }), Object.defineProperty(a, s, { value: n[s] }), Object.defineProperty(i, s, { value: n[s] });
    } catch {
    }
  const o = e._dom.firstElementChild;
  o.dispatchEvent(t), o.dispatchEvent(a), o.dispatchEvent(i);
};
class H {
  constructor(e, t) {
    r(this, "_map");
    r(this, "_overlay");
    r(this, "_echartsContainer", null);
    r(this, "_isRegistered", !1);
    var a;
    this._map = e, this._overlay = this._createChartOverlay(), t && this._registerMap(), (a = this._overlay) == null || a.setOption(t || {});
  }
  /**
   * 注册地图到ECharts坐标系统
   */
  _registerMap() {
    this._isRegistered || (l.registerCoordinateSystem("GLMap", d), l.registerAction({ type: "GLMapRoam", event: "GLMapRoam", update: "updateLayout" }, function(e, t) {
    }), l.extendComponentModel({
      type: "GLMap",
      getBMap() {
        return this.__GLMap;
      },
      defaultOption: { roam: !1 }
    }), l.extendComponentView({
      type: "GLMap",
      init(e, t) {
        this.api = t, window.glMap.postRender.addEventListener(this.moveHandler, this);
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
    var e = this._map.scene;
    e.canvas.setAttribute("tabIndex", "0");
    const t = document.createElement("div");
    t.style.position = "absolute", t.style.top = "0px", t.style.left = "0px", t.style.width = e.canvas.width + "px", t.style.height = e.canvas.height + "px", t.style.pointerEvents = "none", t.setAttribute("id", "echarts"), t.setAttribute("class", "echartMap"), this._map.container.appendChild(t), this._echartsContainer = t, window.glMap = e;
    const a = l.init(t);
    return new M(e.canvas).setInputAction((o) => R(event, a), h.LEFT_CLICK), a;
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
  updateOverlay(e) {
    this._overlay && this._overlay.setOption(e);
  }
  /**
   * 调整图表大小以适应地图容器
   */
  resize() {
    if (!this._echartsContainer || !this._overlay) return;
    const e = this._map.container;
    this._echartsContainer.style.width = `${e.clientWidth}px`, this._echartsContainer.style.height = `${e.clientHeight}px`, this._overlay.resize();
  }
}
export {
  H as EchartsLayer,
  D as useInitPlanet
};
