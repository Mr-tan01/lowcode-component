var u = Object.defineProperty;
var w = (l, e, i) => e in l ? u(l, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : l[e] = i;
var c = (l, e, i) => w(l, typeof e != "symbol" ? e + "" : e, i);
import { areaData as m } from "./type.js";
import { createInfoCanvas as p } from "./tools.js";
import { Viewer as y } from "@cesium/widgets";
import { ScreenSpaceEventType as g, ScreenSpaceEventHandler as C, defined as E, Cartesian3 as h, Cartesian2 as v, NearFarScalar as D, PolylineDashMaterialProperty as I, Color as f, Math as d } from "@cesium/engine";
class H {
  constructor(e, i) {
    c(this, "viewer", null);
    c(this, "pointData", []);
    c(this, "pointEntities", []);
    c(this, "polygonEntities", []);
    c(this, "screenSpaceEventHandler", null);
    this.containerId = e, this.options = i;
  }
  // 初始化Cesium Viewer
  async initViewer(e) {
    var i;
    this.viewer && this.destroy();
    try {
      return this.viewer = new y(this.containerId, e), this.viewer.cesiumWidget.creditContainer.style.display = "none", this.viewer.scene.debugShowFramesPerSecond = !1, this.viewer.scene.screenSpaceCameraController.enableTranslate = !0, this.viewer.scene.screenSpaceCameraController.minimumZoomDistance = this.options.config.minZoom, this.viewer.scene.screenSpaceCameraController.maximumZoomDistance = this.options.config.maxZoom, this.viewer.scene.globe.baseColor = this.options.config.baseColor, this.viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(g.LEFT_DOUBLE_CLICK), this.viewer.scene.canvas.addEventListener(
        "dblclick",
        (t) => {
          t.preventDefault(), t.stopPropagation(), this.setCameraHeight("ZoomIn");
        },
        !1
      ), this.screenSpaceEventHandler = new C((i = this.viewer) == null ? void 0 : i.scene.canvas).setInputAction(
        (t) => {
          if (this.viewer) {
            this.viewer.selectedEntity = void 0;
            const n = this.viewer.scene.pick(t.position), o = this.viewer.scene.pickPosition(t.position);
            E(n) && n.id && this.pointClickHandler(n == null ? void 0 : n.id);
          }
        },
        g.LEFT_CLICK
      ), !0;
    } catch (t) {
      return console.error("初始化Cesium失败:", t), !1;
    }
  }
  // 加载瓦片图层
  async loadTileLayer(e) {
    const i = await Zondy.WebMapTileServiceImageryProvider.fromUrl(e);
    this.viewer && i && (this.viewer.imageryLayers.addImageryProvider(i), this.viewer.scene.globe.tileLoadProgressEvent.addEventListener((t) => {
      var n;
      t === 0 && (console.log(this.options.config.areaName), this.addPolygon(this.options.config.areaName), (n = this.pointData) == null || n.forEach((o) => this.addPoint(o, "value")), this.options.loadTileLayerHandler(!1));
    }));
  }
  // 添加点标记
  async addPoint(e, i, t) {
    if (!this.viewer) return null;
    const n = await p(e, i, t), o = this.viewer.entities.add({
      position: h.fromDegrees(e.lng, e.lat),
      name: i ? e.name : `${e.name}Label`,
      value: e == null ? void 0 : e.value,
      text: e == null ? void 0 : e.text,
      billboard: {
        image: n.canvas,
        disableDepthTestDistance: Number.POSITIVE_INFINITY,
        pixelOffset: i ? new v(0, 0) : new v(n.canvas.width / 2.2, 19),
        scale: i ? 1 : 0.9,
        translucencyByDistance: new D(1e3, 1, 2e3, i ? 0.9 : 1)
      }
    });
    return o && this.pointEntities && this.pointEntities.push(o), o;
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
    const i = m[e].position.geometry.coordinates.flat(2).map(([n, o]) => h.fromDegrees(n, o)), t = this.viewer.entities.add({
      name: e,
      polyline: {
        positions: i,
        material: new I({
          color: f.fromCssColorString("#1E9EFA").withAlpha(0.7)
        }),
        width: 2
      },
      polygon: {
        hierarchy: i,
        material: f.fromCssColorString("#A2D8FF").withAlpha(0.3),
        outline: !0,
        outlineColor: f.fromCssColorString("#4694CD")
      }
    });
    return t && this.polygonEntities && this.polygonEntities.push(t), t;
  }
  // 获取当前地图经纬度、高度
  getPositionCartographic() {
    if (this.viewer) {
      const e = this.viewer.camera.positionCartographic, i = d.toDegrees(e.longitude), t = d.toDegrees(e.latitude);
      return [i, t, e.height];
    }
  }
  // 设置地图高度
  setCameraHeight(e) {
    var i;
    if (e === "ZoomIn" || e === "ZoomOut") {
      const t = this.getPositionCartographic(), { maxZoom: n, minZoom: o } = this.options.config, a = t && t[2] ? t[2] >= 3e4 ? 2e4 : t[2] >= 2e4 ? 1e4 : t[2] >= 1e4 ? 8e3 : 1e3 : 1e3, s = t[2] - (e === "ZoomIn" ? a : -a), r = s <= n && s >= o ? s : e === "ZoomIn" ? o : n;
      (i = this.viewer) == null || i.camera.flyTo({
        destination: h.fromDegrees(t[0], t[1], r),
        duration: 0.3
      });
    }
  }
  // 转换笛卡尔坐标到经纬度
  convertCartographic(e) {
    var o;
    const i = (o = this.viewer) == null ? void 0 : o.scene.globe.ellipsoid.cartesianToCartographic(e);
    if (!i) return new h();
    const t = d.toDegrees(i.longitude), n = d.toDegrees(i.latitude);
    return h.fromDegrees(t, n, 3e4);
  }
  // 控制窗体
  pointClickHandler(e) {
    var n, o, a;
    const i = (n = this.pointData) == null ? void 0 : n.findIndex((s) => s.name === e.name), t = (o = this.pointEntities) == null ? void 0 : o.findIndex((s) => s.name === e.name + "Label");
    i != -1 && i !== void 0 && t == -1 && this.pointData && this.addPoint(this.pointData[i]), (a = this.pointEntities) == null || a.forEach((s) => {
      const r = s.name;
      (r == null ? void 0 : r.slice(-5)) === "Label" && (s.show = e.name + "Label" === r && !s.show);
    }), this.options.pointHandler(e);
  }
  //控制polygon
  polygonClickHandler(e) {
    var i, t, n;
    if (e in m) {
      ((i = this.polygonEntities) == null ? void 0 : i.find((r) => r.name === e)) || setTimeout(() => {
        this.addPolygon(e);
      }, 300);
      const { lng: a, lat: s } = m[e];
      (t = this.polygonEntities) == null || t.forEach((r) => {
        r.show = r.name === e;
      }), (n = this.viewer) == null || n.camera.flyTo({
        destination: h.fromDegrees(a, s, 3e4),
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
    var i;
    (i = this.viewer) == null || i.entities.removeAll();
  }
  destroy() {
    this.viewer && (this.viewer.destroy(), this.viewer = null, this.pointEntities = null, this.polygonEntities = null, this.screenSpaceEventHandler = null);
  }
}
export {
  H as cesiumService
};
