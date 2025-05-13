var V = Object.defineProperty;
var F = (c, e, t) => e in c ? V(c, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : c[e] = t;
var r = (c, e, t) => F(c, typeof e != "symbol" ? e + "" : e, t);
import { CesiumHeatmap as U } from "cesium-heatmap-es6";
import { areaData as p } from "./type.js";
import { createInfoCanvas as M, updateViewerEntityInfo as v } from "./tools.js";
import { Viewer as N } from "@cesium/widgets";
import { ScreenSpaceEventType as P, ScreenSpaceEventHandler as O, defined as W, ArcGisMapServerImageryProvider as x, Cartesian3 as d, Cartesian2 as A, PolylineDashMaterialProperty as _, Color as f, Math as g, JulianDate as $ } from "@cesium/engine";
class q {
  constructor(e, t) {
    r(this, "viewer", null);
    r(this, "pointData", []);
    r(this, "pointEntities", []);
    r(this, "polygonEntities", []);
    r(this, "screenSpaceEventHandler", null);
    r(this, "imageLayerState", !0);
    r(this, "imageLayerUrl", null);
    r(this, "tileLoadCallback", null);
    r(this, "doubleClickHandler", (e) => {
      e.preventDefault(), e.stopPropagation(), this.setCameraHeight("ZoomIn");
    });
    r(this, "changeHeightHandler", () => {
      var t;
      const e = Math.ceil(this.viewer.camera.positionCartographic.height);
      e === (((t = this.options.config) == null ? void 0 : t.maxZoom) ?? 13e4) && this.options.limitHeightHandler(e);
    });
    this.containerId = e, this.options = t, this.tileLoadCallback = this.handleTileLoadProgress.bind(this);
  }
  // Cesium属性更新
  updateViewerAttribute() {
    var e, t;
    this.viewer && (this.viewer.scene.screenSpaceCameraController.minimumZoomDistance = ((e = this.options.config) == null ? void 0 : e.minZoom) ?? 200, this.viewer.scene.screenSpaceCameraController.maximumZoomDistance = ((t = this.options.config) == null ? void 0 : t.maxZoom) ?? 13e4, this.viewer.scene.globe.baseColor = this.options.config.baseColor);
  }
  // 初始化Cesium Viewer
  async initViewer(e) {
    var t;
    this.viewer && this.destroy();
    try {
      return this.viewer = new N(this.containerId, e), this.viewer.cesiumWidget.creditContainer.style.display = "none", this.viewer.scene.debugShowFramesPerSecond = !1, this.viewer.scene.globe.depthTestAgainstTerrain = !0, this.viewer.scene.screenSpaceCameraController.enableTranslate = !0, this.updateViewerAttribute(), this.viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(P.LEFT_DOUBLE_CLICK), this.viewer.scene.canvas.addEventListener("dblclick", this.doubleClickHandler, !1), this.screenSpaceEventHandler = new O((t = this.viewer) == null ? void 0 : t.scene.canvas).setInputAction(
        (i) => {
          var s;
          if (this.viewer) {
            this.viewer.selectedEntity = void 0, (s = this.options) != null && s.offsetState && (i.position.x *= 1.18, i.position.y *= 1.18);
            const n = this.viewer.scene.pick(i.position), l = this.viewer.scene.pickPosition(i.position);
            W(n) && n.id && this.pointClickHandler(n == null ? void 0 : n.id);
          }
        },
        P.LEFT_CLICK
      ), this.viewer.scene.camera.moveEnd.addEventListener(this.changeHeightHandler), !0;
    } catch (i) {
      return console.error("初始化Cesium失败:", i), !1;
    }
  }
  // 瓦片加载状完成（首次添加point、polygon）
  handleTileLoadProgress(e) {
    var t, i;
    e === 0 && (this.options.loadTileLayerHandler(!1), this.tileLoadCallback && ((i = (t = this.viewer) == null ? void 0 : t.scene) == null || i.globe.tileLoadProgressEvent.removeEventListener(this.tileLoadCallback)));
  }
  // 加载瓦片图层
  async loadTileLayer(e) {
    var l, a;
    this.options.loadTileLayerHandler(!0);
    let t;
    const { viewer: i, imageLayerState: s, imageLayerUrl: n } = this;
    if (this.tileLoadCallback && (i == null || i.scene.globe.tileLoadProgressEvent.removeEventListener(this.tileLoadCallback)), n || (this.imageLayerUrl = e), this.imageLayerState = !s, s)
      try {
        t = await Zondy.WebMapTileServiceImageryProvider.fromUrl(n || e);
      } catch {
        console.error("瓦片加载失败, 切换默认瓦片"), t = await x.fromUrl(e);
      }
    else
      t = await x.fromUrl(e);
    i && t && (i.imageryLayers.addImageryProvider(t), this.tileLoadCallback && ((a = (l = i.scene) == null ? void 0 : l.globe) == null || a.tileLoadProgressEvent.addEventListener(this.tileLoadCallback)));
  }
  // 添加点标记
  async addPoint(e, t, i) {
    if (!this.viewer) return null;
    const s = await M(e, t, i), n = this.viewer.entities.add({
      position: d.fromDegrees(e.lng, e.lat),
      name: t ? e.name : `${e.name}Label`,
      // 自定义属性
      properties: {
        value: e == null ? void 0 : e.value,
        text: e == null ? void 0 : e.text,
        changeState: !1
      },
      billboard: {
        image: s.canvas,
        disableDepthTestDistance: Number.POSITIVE_INFINITY,
        pixelOffset: t ? new A(0, 0) : new A(s.canvas.width / 2.1, 4)
      }
    });
    return n && this.pointEntities ? this.pointEntities.push(n) : (this.pointEntities = [], this.pointEntities.push(n)), n;
  }
  // 清除指定entity
  async clearEntity(e) {
    if (this.viewer && this[e]) {
      for (let t of this[e])
        this.viewer.entities.remove(t);
      this[e] = [];
    }
  }
  addPolygon(e) {
    if (this.viewer && e in p) {
      const t = p[e].position.geometry.coordinates.flat(2).map(([s, n]) => d.fromDegrees(s, n)), i = this.viewer.entities.add({
        name: e,
        polyline: {
          positions: t,
          material: new _({
            color: f.fromCssColorString("#1E9EFA").withAlpha(0.7)
          }),
          width: 2
        },
        polygon: {
          hierarchy: t,
          material: f.fromCssColorString("#A2D8FF").withAlpha(0.3),
          outline: !0,
          outlineColor: f.fromCssColorString("#4694CD")
        }
      });
      i && this.polygonEntities ? this.polygonEntities.push(i) : (this.polygonEntities = [], this.polygonEntities.push(i));
    }
  }
  // 获取当前地图经纬度、高度
  getPositionCartographic() {
    if (this.viewer) {
      const e = this.viewer.camera.positionCartographic, t = g.toDegrees(e.longitude), i = g.toDegrees(e.latitude);
      return [t, i, e.height];
    }
  }
  // 设置地图高度
  setCameraHeight(e) {
    var t;
    if (e === "ZoomIn" || e === "ZoomOut") {
      const i = this.getPositionCartographic(), { maxZoom: s, minZoom: n } = this.options.config, l = i && i[2] ? i[2] >= 3e4 ? 2e4 : i[2] >= 2e4 ? 1e4 : i[2] >= 1e4 ? 8e3 : 1e3 : 1e3, a = i[2] - (e === "ZoomIn" ? l : -l), m = a <= s && a >= n ? a : e === "ZoomIn" ? n : s;
      (t = this.viewer) == null || t.camera.flyTo({
        destination: d.fromDegrees(i[0], i[1], m),
        duration: 0.3
      });
    }
  }
  // 转换笛卡尔坐标到经纬度
  convertCartographic(e) {
    var n;
    const t = (n = this.viewer) == null ? void 0 : n.scene.globe.ellipsoid.cartesianToCartographic(e);
    if (!t) return new d();
    const i = g.toDegrees(t.longitude), s = g.toDegrees(t.latitude);
    return d.fromDegrees(i, s, 3e4);
  }
  // 控制窗体
  pointClickHandler(e) {
    var h, u, w, y, E, C, L, b;
    const { name: t } = e, i = t != null && t.endsWith("Label") ? t == null ? void 0 : t.replace("Label", "") : t, s = `${i}Label`, n = ((h = this.pointData) == null ? void 0 : h.findIndex((o) => o.name === i)) ?? -1, l = ((u = this.pointEntities) == null ? void 0 : u.findIndex((o) => o.name === i)) ?? -1, a = ((w = this.pointEntities) == null ? void 0 : w.findIndex((o) => o.name === s)) ?? -1;
    n !== -1 && a === -1 && !this.options.defaultShowState && this.pointData && this.addPoint(this.pointData[n], void 0, "Label"), v((y = this.pointData) == null ? void 0 : y[n], (E = this.pointEntities) == null ? void 0 : E[l], "value"), a !== -1 && this.options.defaultShowState && v((C = this.pointData) == null ? void 0 : C[n], (L = this.pointEntities) == null ? void 0 : L[a]), this.options.defaultShowState || (b = this.pointEntities) == null || b.forEach((o) => {
      var S, D, I, H;
      if ((S = o.name) != null && S.endsWith("Label"))
        o.show = o.name === s && !o.show;
      else {
        const Z = $.now();
        if ((D = o.properties) == null ? void 0 : D.getValue(Z).changeState) {
          const T = ((I = this.pointData) == null ? void 0 : I.findIndex((k) => k.name === o.name)) ?? -1;
          T !== -1 && v((H = this.pointData) == null ? void 0 : H[T], o, "value");
        }
      }
    }), this.options.pointHandler(e);
  }
  //控制polygon
  polygonClickHandler(e) {
    var t, i, s, n;
    if (e in p) {
      ((t = this.polygonEntities) == null ? void 0 : t.find((h) => h.name === e)) || this.addPolygon(e);
      const { lng: a, lat: m } = p[e];
      (i = this.polygonEntities) == null || i.forEach((h) => {
        h.show = h.name === e;
      }), (n = this.viewer) == null || n.camera.flyTo({
        destination: d.fromDegrees(a, m, ((s = this.options) == null ? void 0 : s.flyToHeight) || 28e3),
        duration: 1
      });
    } else
      console.log("未找到匹配的数据");
  }
  // 设置初始视角
  setInitialView(e) {
    this.viewer && this.viewer.camera.flyTo({ destination: e.destination, duration: e.duration || 1 });
  }
  // 切换图层
  setViewerLayer(e) {
    var t, i;
    (t = this.viewer) == null || t.imageryLayers.removeAll(), (i = this.viewer) == null || i.entities.removeAll(), this.pointEntities = null, this.polygonEntities = null, this.loadTileLayer(e);
  }
  // 热力图
  addHeatmap() {
    const e = p.宝安区.position.geometry.coordinates.flat(2).map(([t, i]) => ({
      x: t,
      y: i,
      value: Number((Math.random() * 1.9 + 0.1).toFixed(1))
    }));
    new U(this.viewer, {
      zoomToLayer: !0,
      points: e,
      heatmapOptions: {
        maxOpacity: 0,
        minOpacity: 1,
        gradient: {
          "0.00": "#A3E76A",
          "0.25": "#E7D35E",
          "0.50": "#E2EE66",
          "0.75": "#DF684D",
          "1.00": "#EE5442"
        }
      }
    });
  }
  destroy() {
    this.viewer && (this.viewer.scene.canvas.removeEventListener("dblclick", this.doubleClickHandler, !1), this.viewer.scene.camera.moveEnd.removeEventListener(this.changeHeightHandler), this.viewer.destroy(), this.viewer = null, this.pointEntities = null, this.polygonEntities = null, this.screenSpaceEventHandler = null, this.imageLayerState = null, this.imageLayerUrl = null, this.tileLoadCallback = null);
  }
}
export {
  q as cesiumService
};
