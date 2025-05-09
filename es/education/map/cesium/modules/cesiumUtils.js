var H = Object.defineProperty;
var P = (d, e, i) => e in d ? H(d, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : d[e] = i;
var o = (d, e, i) => P(d, typeof e != "symbol" ? e + "" : e, i);
import { CesiumHeatmap as T } from "cesium-heatmap-es6";
import { areaData as g } from "./type.js";
import { createInfoCanvas as x, updateViewerEntityInfo as b } from "./tools.js";
import { Viewer as A } from "@cesium/widgets";
import { ScreenSpaceEventType as S, ScreenSpaceEventHandler as k, defined as Z, ArcGisMapServerImageryProvider as D, Cartesian3 as m, Cartesian2 as I, NearFarScalar as F, PolylineDashMaterialProperty as V, Color as v, Math as p } from "@cesium/engine";
class $ {
  constructor(e, i) {
    o(this, "viewer", null);
    o(this, "pointData", []);
    o(this, "pointEntities", []);
    o(this, "polygonEntities", []);
    o(this, "screenSpaceEventHandler", null);
    o(this, "imageLayerState", !0);
    o(this, "imageLayerUrl", null);
    o(this, "tileLoadCallback", null);
    o(this, "doubleClickHandler", (e) => {
      e.preventDefault(), e.stopPropagation(), this.setCameraHeight("ZoomIn");
    });
    o(this, "changeHeightHandler", () => {
      var i;
      const e = Math.ceil(this.viewer.camera.positionCartographic.height);
      e === (((i = this.options.config) == null ? void 0 : i.maxZoom) ?? 13e4) && this.options.limitHeightHandler(e);
    });
    this.containerId = e, this.options = i, this.tileLoadCallback = this.handleTileLoadProgress.bind(this);
  }
  // Cesium属性更新
  updateViewerAttribute() {
    var e, i;
    this.viewer && (this.viewer.scene.screenSpaceCameraController.minimumZoomDistance = ((e = this.options.config) == null ? void 0 : e.minZoom) ?? 200, this.viewer.scene.screenSpaceCameraController.maximumZoomDistance = ((i = this.options.config) == null ? void 0 : i.maxZoom) ?? 13e4, this.viewer.scene.globe.baseColor = this.options.config.baseColor);
  }
  // 初始化Cesium Viewer
  async initViewer(e) {
    var i;
    this.viewer && this.destroy();
    try {
      return this.viewer = new A(this.containerId, e), this.viewer.cesiumWidget.creditContainer.style.display = "none", this.viewer.scene.debugShowFramesPerSecond = !1, this.viewer.scene.globe.depthTestAgainstTerrain = !0, this.viewer.scene.screenSpaceCameraController.enableTranslate = !0, this.updateViewerAttribute(), this.viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(S.LEFT_DOUBLE_CLICK), this.viewer.scene.canvas.addEventListener("dblclick", this.doubleClickHandler, !1), this.screenSpaceEventHandler = new k((i = this.viewer) == null ? void 0 : i.scene.canvas).setInputAction(
        (t) => {
          if (this.viewer) {
            this.viewer.selectedEntity = void 0;
            const s = this.viewer.scene.pick(t.position), n = this.viewer.scene.pickPosition(t.position);
            Z(s) && s.id && this.pointClickHandler(s == null ? void 0 : s.id);
          }
        },
        S.LEFT_CLICK
      ), this.viewer.scene.camera.moveEnd.addEventListener(this.changeHeightHandler), !0;
    } catch (t) {
      return console.error("初始化Cesium失败:", t), !1;
    }
  }
  // 瓦片加载状完成（首次添加point、polygon）
  handleTileLoadProgress(e) {
    var i, t;
    e === 0 && (this.options.loadTileLayerHandler(!1), this.tileLoadCallback && ((t = (i = this.viewer) == null ? void 0 : i.scene) == null || t.globe.tileLoadProgressEvent.removeEventListener(this.tileLoadCallback)));
  }
  // 加载瓦片图层
  async loadTileLayer(e) {
    var a, l;
    this.options.loadTileLayerHandler(!0);
    let i;
    const { viewer: t, imageLayerState: s, imageLayerUrl: n } = this;
    if (this.tileLoadCallback && (t == null || t.scene.globe.tileLoadProgressEvent.removeEventListener(this.tileLoadCallback)), n || (this.imageLayerUrl = e), this.imageLayerState = !s, s)
      try {
        i = await Zondy.WebMapTileServiceImageryProvider.fromUrl(n || e);
      } catch {
        console.error("瓦片加载失败, 切换默认瓦片"), i = await D.fromUrl(e);
      }
    else
      i = await D.fromUrl(e);
    t && i && (t.imageryLayers.addImageryProvider(i), this.tileLoadCallback && ((l = (a = t.scene) == null ? void 0 : a.globe) == null || l.tileLoadProgressEvent.addEventListener(this.tileLoadCallback)));
  }
  // 添加点标记
  async addPoint(e, i) {
    if (!this.viewer) return null;
    const t = await x(e, i), s = this.viewer.entities.add({
      position: m.fromDegrees(e.lng, e.lat),
      name: i ? e.name : `${e.name}Label`,
      // 自定义属性
      properties: {
        value: e == null ? void 0 : e.value,
        text: e == null ? void 0 : e.text,
        changeState: !1
      },
      billboard: {
        image: t.canvas,
        disableDepthTestDistance: Number.POSITIVE_INFINITY,
        pixelOffset: i ? new I(0, 0) : new I(t.canvas.width / 2.2, 19),
        scale: i ? 1 : 0.9,
        translucencyByDistance: new F(1e3, 1, 2e3, i ? 0.9 : 1)
      }
    });
    return s && this.pointEntities ? this.pointEntities.push(s) : (this.pointEntities = [], this.pointEntities.push(s)), s;
  }
  // 清除指定entity
  async clearEntity(e) {
    if (this.viewer && this[e]) {
      for (let i of this[e])
        this.viewer.entities.remove(i);
      this[e] = [];
    }
  }
  addPolygon(e) {
    if (this.viewer && e in g) {
      const i = g[e].position.geometry.coordinates.flat(2).map(([s, n]) => m.fromDegrees(s, n)), t = this.viewer.entities.add({
        name: e,
        polyline: {
          positions: i,
          material: new V({
            color: v.fromCssColorString("#1E9EFA").withAlpha(0.7)
          }),
          width: 2
        },
        polygon: {
          hierarchy: i,
          material: v.fromCssColorString("#A2D8FF").withAlpha(0.3),
          outline: !0,
          outlineColor: v.fromCssColorString("#4694CD")
        }
      });
      t && this.polygonEntities ? this.polygonEntities.push(t) : (this.polygonEntities = [], this.polygonEntities.push(t));
    }
  }
  // 获取当前地图经纬度、高度
  getPositionCartographic() {
    if (this.viewer) {
      const e = this.viewer.camera.positionCartographic, i = p.toDegrees(e.longitude), t = p.toDegrees(e.latitude);
      return [i, t, e.height];
    }
  }
  // 设置地图高度
  setCameraHeight(e) {
    var i;
    if (e === "ZoomIn" || e === "ZoomOut") {
      const t = this.getPositionCartographic(), { maxZoom: s, minZoom: n } = this.options.config, a = t && t[2] ? t[2] >= 3e4 ? 2e4 : t[2] >= 2e4 ? 1e4 : t[2] >= 1e4 ? 8e3 : 1e3 : 1e3, l = t[2] - (e === "ZoomIn" ? a : -a), h = l <= s && l >= n ? l : e === "ZoomIn" ? n : s;
      (i = this.viewer) == null || i.camera.flyTo({
        destination: m.fromDegrees(t[0], t[1], h),
        duration: 0.3
      });
    }
  }
  // 转换笛卡尔坐标到经纬度
  convertCartographic(e) {
    var n;
    const i = (n = this.viewer) == null ? void 0 : n.scene.globe.ellipsoid.cartesianToCartographic(e);
    if (!i) return new m();
    const t = p.toDegrees(i.longitude), s = p.toDegrees(i.latitude);
    return m.fromDegrees(t, s, 3e4);
  }
  // 控制窗体
  pointClickHandler(e) {
    var h, c, u, f, w, y, E, C;
    const { name: i } = e, t = `${i}Label`, s = ((h = this.pointData) == null ? void 0 : h.findIndex((r) => r.name === i)) ?? -1, n = ((c = this.pointEntities) == null ? void 0 : c.findIndex((r) => r.name === i)) ?? -1, a = ((u = this.pointEntities) == null ? void 0 : u.findIndex((r) => r.name === t)) ?? -1;
    s !== -1 && a === -1 && !this.options.defaultShowState && this.pointData && this.addPoint(this.pointData[s]), b((f = this.pointData) == null ? void 0 : f[s], (w = this.pointEntities) == null ? void 0 : w[n], "value"), a !== -1 && this.options.defaultShowState && b((y = this.pointData) == null ? void 0 : y[s], (E = this.pointEntities) == null ? void 0 : E[a]), this.options.defaultShowState || (C = this.pointEntities) == null || C.forEach((r) => {
      var L;
      (L = r.name) != null && L.endsWith("Label") && (r.show = r.name === t && !r.show);
    }), this.options.pointHandler(e);
  }
  //控制polygon
  polygonClickHandler(e) {
    var i, t, s, n;
    if (e in g) {
      ((i = this.polygonEntities) == null ? void 0 : i.find((c) => c.name === e)) || this.addPolygon(e);
      const { lng: l, lat: h } = g[e];
      (t = this.polygonEntities) == null || t.forEach((c) => {
        c.show = c.name === e;
      }), (n = this.viewer) == null || n.camera.flyTo({
        destination: m.fromDegrees(l, h, ((s = this.options) == null ? void 0 : s.flyToHeight) || 28e3),
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
    var i, t;
    (i = this.viewer) == null || i.imageryLayers.removeAll(), (t = this.viewer) == null || t.entities.removeAll(), this.pointEntities = null, this.polygonEntities = null, this.loadTileLayer(e);
  }
  // 热力图
  addHeatmap() {
    const e = g.宝安区.position.geometry.coordinates.flat(2).map(([i, t]) => ({
      x: i,
      y: t,
      value: Number((Math.random() * 1.9 + 0.1).toFixed(1))
    }));
    new T(this.viewer, {
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
  $ as cesiumService
};
