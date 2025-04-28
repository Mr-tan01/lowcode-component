var u = Object.defineProperty;
var p = (h, e, i) => e in h ? u(h, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : h[e] = i;
var l = (h, e, i) => p(h, typeof e != "symbol" ? e + "" : e, i);
import { CesiumHeatmap as w } from "cesium-heatmap-es6";
import { areaData as d } from "./type.js";
import { createInfoCanvas as y } from "./tools.js";
import { Viewer as C } from "@cesium/widgets";
import { ScreenSpaceEventType as v, ScreenSpaceEventHandler as L, defined as E, ArcGisMapServerImageryProvider as b, Cartesian3 as c, Cartesian2 as f, NearFarScalar as D, PolylineDashMaterialProperty as S, Color as g, Math as m } from "@cesium/engine";
class Z {
  constructor(e, i) {
    l(this, "viewer", null);
    l(this, "pointData", []);
    l(this, "pointEntities", []);
    l(this, "polygonEntities", []);
    l(this, "screenSpaceEventHandler", null);
    l(this, "imageLayerState", !0);
    l(this, "imageLayerUrl", null);
    l(this, "tileLoadCallback", null);
    this.containerId = e, this.options = i, this.tileLoadCallback = this.handleTileLoadProgress.bind(this);
  }
  // 初始化Cesium Viewer
  async initViewer(e) {
    var i;
    this.viewer && this.destroy();
    try {
      return this.viewer = new C(this.containerId, e), this.viewer.cesiumWidget.creditContainer.style.display = "none", this.viewer.scene.debugShowFramesPerSecond = !1, this.viewer.scene.globe.depthTestAgainstTerrain = !0, this.viewer.scene.screenSpaceCameraController.enableTranslate = !0, this.viewer.scene.screenSpaceCameraController.minimumZoomDistance = this.options.config.minZoom, this.viewer.scene.screenSpaceCameraController.maximumZoomDistance = this.options.config.maxZoom, this.viewer.scene.globe.baseColor = this.options.config.baseColor, this.viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(v.LEFT_DOUBLE_CLICK), this.viewer.scene.canvas.addEventListener(
        "dblclick",
        (t) => {
          t.preventDefault(), t.stopPropagation(), this.setCameraHeight("ZoomIn");
        },
        !1
      ), this.screenSpaceEventHandler = new L((i = this.viewer) == null ? void 0 : i.scene.canvas).setInputAction(
        (t) => {
          if (this.viewer) {
            this.viewer.selectedEntity = void 0;
            const a = this.viewer.scene.pick(t.position), s = this.viewer.scene.pickPosition(t.position);
            E(a) && a.id && this.pointClickHandler(a == null ? void 0 : a.id);
          }
        },
        v.LEFT_CLICK
      ), !0;
    } catch (t) {
      return console.error("初始化Cesium失败:", t), !1;
    }
  }
  // 瓦片加载状完成（首次添加point、polygon）
  handleTileLoadProgress(e) {
    var i, t, a;
    e === 0 && (this.addPolygon(this.options.config.areaName), (i = this.pointData) == null || i.forEach((s) => this.addPoint(s, "value")), this.options.loadTileLayerHandler(!1), this.tileLoadCallback && ((a = (t = this.viewer) == null ? void 0 : t.scene) == null || a.globe.tileLoadProgressEvent.removeEventListener(this.tileLoadCallback)));
  }
  // 加载瓦片图层
  async loadTileLayer(e) {
    var r, o;
    this.options.loadTileLayerHandler(!0);
    let i;
    const { viewer: t, imageLayerState: a, imageLayerUrl: s } = this;
    this.tileLoadCallback && (t == null || t.scene.globe.tileLoadProgressEvent.removeEventListener(this.tileLoadCallback)), s || (this.imageLayerUrl = e), this.imageLayerState = !a, a ? i = await Zondy.WebMapTileServiceImageryProvider.fromUrl(s || e) : i = await b.fromUrl(e), t && i && (t.imageryLayers.addImageryProvider(i), this.tileLoadCallback && ((o = (r = t.scene) == null ? void 0 : r.globe) == null || o.tileLoadProgressEvent.addEventListener(this.tileLoadCallback)));
  }
  // 添加点标记
  async addPoint(e, i, t) {
    if (!this.viewer) return null;
    const a = await y(e, i, t), s = this.viewer.entities.add({
      position: c.fromDegrees(e.lng, e.lat),
      name: i ? e.name : `${e.name}Label`,
      id: i ? e.name : `${e.name}Label`,
      value: e == null ? void 0 : e.value,
      text: e == null ? void 0 : e.text,
      billboard: {
        image: a.canvas,
        disableDepthTestDistance: Number.POSITIVE_INFINITY,
        pixelOffset: i ? new f(0, 0) : new f(a.canvas.width / 2.2, 19),
        scale: i ? 1 : 0.9,
        translucencyByDistance: new D(1e3, 1, 2e3, i ? 0.9 : 1)
      }
    });
    return s && this.pointEntities && this.pointEntities.push(s), s;
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
    if (!this.viewer) return null;
    const i = d[e].position.geometry.coordinates.flat(2).map(([a, s]) => c.fromDegrees(a, s)), t = this.viewer.entities.add({
      name: e,
      polyline: {
        positions: i,
        material: new S({
          color: g.fromCssColorString("#1E9EFA").withAlpha(0.7)
        }),
        width: 2
      },
      polygon: {
        hierarchy: i,
        material: g.fromCssColorString("#A2D8FF").withAlpha(0.3),
        outline: !0,
        outlineColor: g.fromCssColorString("#4694CD")
      }
    });
    return t && this.polygonEntities && this.polygonEntities.push(t), t;
  }
  // 获取当前地图经纬度、高度
  getPositionCartographic() {
    if (this.viewer) {
      const e = this.viewer.camera.positionCartographic, i = m.toDegrees(e.longitude), t = m.toDegrees(e.latitude);
      return [i, t, e.height];
    }
  }
  // 设置地图高度
  setCameraHeight(e) {
    var i;
    if (e === "ZoomIn" || e === "ZoomOut") {
      const t = this.getPositionCartographic(), { maxZoom: a, minZoom: s } = this.options.config, r = t && t[2] ? t[2] >= 3e4 ? 2e4 : t[2] >= 2e4 ? 1e4 : t[2] >= 1e4 ? 8e3 : 1e3 : 1e3, o = t[2] - (e === "ZoomIn" ? r : -r), n = o <= a && o >= s ? o : e === "ZoomIn" ? s : a;
      (i = this.viewer) == null || i.camera.flyTo({
        destination: c.fromDegrees(t[0], t[1], n),
        duration: 0.3
      });
    }
  }
  // 转换笛卡尔坐标到经纬度
  convertCartographic(e) {
    var s;
    const i = (s = this.viewer) == null ? void 0 : s.scene.globe.ellipsoid.cartesianToCartographic(e);
    if (!i) return new c();
    const t = m.toDegrees(i.longitude), a = m.toDegrees(i.latitude);
    return c.fromDegrees(t, a, 3e4);
  }
  // 控制窗体
  pointClickHandler(e) {
    var a, s, r;
    const i = (a = this.pointData) == null ? void 0 : a.findIndex((o) => o.name === e.name), t = (s = this.pointEntities) == null ? void 0 : s.findIndex((o) => o.name === e.name + "Label");
    i != -1 && i !== void 0 && t == -1 && this.pointData && this.addPoint(this.pointData[i]), (r = this.pointEntities) == null || r.forEach((o) => {
      const n = o.name;
      (n == null ? void 0 : n.slice(-5)) === "Label" && (o.show = e.name + "Label" === n && !o.show);
    }), this.options.pointHandler(e);
  }
  //控制polygon
  polygonClickHandler(e) {
    var i, t, a;
    if (e in d) {
      ((i = this.polygonEntities) == null ? void 0 : i.find((n) => n.name === e)) || setTimeout(() => {
        this.addPolygon(e);
      }, 300);
      const { lng: r, lat: o } = d[e];
      (t = this.polygonEntities) == null || t.forEach((n) => {
        n.show = n.name === e;
      }), (a = this.viewer) == null || a.camera.flyTo({
        destination: c.fromDegrees(r, o, 3e4),
        duration: 1
      });
    } else
      console.log("未找到匹配的数据");
  }
  // 设置初始视角
  setInitialView(e) {
    this.viewer && this.viewer.camera.flyTo({ destination: e, duration: 1 });
  }
  // 切换图层
  setViewerLayer(e) {
    var i, t;
    (i = this.viewer) == null || i.imageryLayers.removeAll(), (t = this.viewer) == null || t.entities.removeAll(), this.loadTileLayer(e);
  }
  // 热力图
  addHeatmap() {
    const e = d.宝安区.position.geometry.coordinates.flat(2).map(([i, t]) => ({
      x: i,
      y: t,
      value: Number((Math.random() * 1.9 + 0.1).toFixed(1))
    }));
    new w(this.viewer, {
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
    this.viewer && (this.viewer.destroy(), this.viewer = null, this.pointEntities = null, this.polygonEntities = null, this.screenSpaceEventHandler = null, this.imageLayerState = null, this.imageLayerUrl = null, this.tileLoadCallback = null);
  }
}
export {
  Z as cesiumService
};
