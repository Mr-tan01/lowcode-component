var v = Object.defineProperty;
var w = (l, e, i) => e in l ? v(l, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : l[e] = i;
var c = (l, e, i) => w(l, typeof e != "symbol" ? e + "" : e, i);
import { areaData as d } from "./type.js";
import { createInfoCanvas as p } from "./tools.js";
import C from "../../node_modules/.pnpm/@cesium_widgets@11.1.0/node_modules/@cesium/widgets/Source/Viewer/index.js";
import u from "../../node_modules/.pnpm/@cesium_engine@16.0.0/node_modules/@cesium/engine/Source/Core/ScreenSpaceEventType.js";
import y from "../../node_modules/.pnpm/@cesium_engine@16.0.0/node_modules/@cesium/engine/Source/Core/ScreenSpaceEventHandler.js";
import E from "../../node_modules/.pnpm/@cesium_engine@16.0.0/node_modules/@cesium/engine/Source/Core/defined.js";
import h from "../../node_modules/.pnpm/@cesium_engine@16.0.0/node_modules/@cesium/engine/Source/Core/Cartesian3.js";
import g from "../../node_modules/.pnpm/@cesium_engine@16.0.0/node_modules/@cesium/engine/Source/Core/Cartesian2.js";
import D from "../../node_modules/.pnpm/@cesium_engine@16.0.0/node_modules/@cesium/engine/Source/Core/NearFarScalar.js";
import I from "../../node_modules/.pnpm/@cesium_engine@16.0.0/node_modules/@cesium/engine/Source/DataSources/PolylineDashMaterialProperty.js";
import f from "../../node_modules/.pnpm/@cesium_engine@16.0.0/node_modules/@cesium/engine/Source/Core/Color.js";
import m from "../../node_modules/.pnpm/@cesium_engine@16.0.0/node_modules/@cesium/engine/Source/Core/Math.js";
class M {
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
      return this.viewer = new C(this.containerId, e), this.viewer.scene.debugShowFramesPerSecond = !1, this.viewer.scene.screenSpaceCameraController.enableTranslate = !0, this.viewer.scene.screenSpaceCameraController.minimumZoomDistance = this.options.config.minZoom, this.viewer.scene.screenSpaceCameraController.maximumZoomDistance = this.options.config.maxZoom, this.viewer.scene.globe.baseColor = this.options.config.baseColor, this.viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(u.LEFT_DOUBLE_CLICK), this.viewer.scene.canvas.addEventListener(
        "dblclick",
        (t) => {
          t.preventDefault(), t.stopPropagation(), this.setCameraHeight("ZoomIn");
        },
        !1
      ), this.screenSpaceEventHandler = new y((i = this.viewer) == null ? void 0 : i.scene.canvas).setInputAction(
        (t) => {
          if (this.viewer) {
            this.viewer.selectedEntity = void 0;
            const o = this.viewer.scene.pick(t.position), n = this.viewer.scene.pickPosition(t.position);
            E(o) && o.id && this.pointClickHandler(o == null ? void 0 : o.id);
          }
        },
        u.LEFT_CLICK
      ), !0;
    } catch (t) {
      return console.error("初始化Cesium失败:", t), !1;
    }
  }
  // 加载瓦片图层
  async loadTileLayer(e) {
    const i = await Zondy.WebMapTileServiceImageryProvider.fromUrl(e);
    return !this.viewer || !i ? null : this.viewer.imageryLayers.addImageryProvider(i);
  }
  // 添加点标记
  async addPoint(e, i, t) {
    if (!this.viewer) return null;
    const o = await p(e, i, t), n = this.viewer.entities.add({
      position: h.fromDegrees(e.lng, e.lat),
      name: i ? e.name : `${e.name}Label`,
      value: e == null ? void 0 : e.value,
      changeIcon: e == null ? void 0 : e.changeIconType,
      changeType: t,
      text: e == null ? void 0 : e.text,
      billboard: {
        image: o.canvas,
        disableDepthTestDistance: Number.POSITIVE_INFINITY,
        pixelOffset: i ? new g(0, 0) : new g(o.canvas.width / 2.2, 19),
        scale: i ? 1 : 0.9,
        translucencyByDistance: new D(1e3, 1, 2e3, i ? 0.9 : 1)
      }
    });
    return n && this.pointEntities && this.pointEntities.push(n), n;
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
    const i = d[e].position.geometry.coordinates.flat(2).map(([o, n]) => h.fromDegrees(o, n)), t = this.viewer.entities.add({
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
      const e = this.viewer.camera.positionCartographic, i = m.toDegrees(e.longitude), t = m.toDegrees(e.latitude);
      return [i, t, e.height];
    }
  }
  // 设置地图高度
  setCameraHeight(e) {
    var i;
    if (e === "ZoomIn" || e === "ZoomOut") {
      const t = this.getPositionCartographic(), { maxZoom: o, minZoom: n } = this.options.config, a = t && t[2] ? t[2] >= 3e4 ? 2e4 : t[2] >= 2e4 ? 1e4 : t[2] >= 1e4 ? 8e3 : 1e3 : 1e3, r = t[2] - (e === "ZoomIn" ? a : -a), s = r <= o && r >= n ? r : e === "ZoomIn" ? n : o;
      (i = this.viewer) == null || i.camera.flyTo({
        destination: h.fromDegrees(t[0], t[1], s),
        duration: 0.3
      });
    }
  }
  // 转换笛卡尔坐标到经纬度
  convertCartographic(e) {
    var n;
    const i = (n = this.viewer) == null ? void 0 : n.scene.globe.ellipsoid.cartesianToCartographic(e);
    if (!i) return new h();
    const t = m.toDegrees(i.longitude), o = m.toDegrees(i.latitude);
    return h.fromDegrees(t, o, 3e4);
  }
  // 控制窗体
  pointClickHandler(e) {
    var o, n, a;
    const i = (o = this.pointData) == null ? void 0 : o.findIndex((r) => r.name === e.name), t = (n = this.pointEntities) == null ? void 0 : n.findIndex((r) => r.name === e.name + "Label");
    i != -1 && i !== void 0 && t == -1 && this.pointData && this.addPoint(this.pointData[i]), (a = this.pointEntities) == null || a.forEach((r) => {
      const s = r.name;
      (s == null ? void 0 : s.slice(-5)) === "Label" && (r.show = e.name + "Label" === s && !r.show);
    }), this.options.pointHandler(e);
  }
  //控制polygon
  polygonClickHandler(e) {
    var i, t, o;
    if (e in d) {
      ((i = this.polygonEntities) == null ? void 0 : i.find((s) => s.name === e)) || setTimeout(() => {
        this.addPolygon(e);
      }, 300);
      const { lng: a, lat: r } = d[e];
      (t = this.polygonEntities) == null || t.forEach((s) => {
        s.show = s.name === e;
      }), (o = this.viewer) == null || o.camera.flyTo({
        destination: h.fromDegrees(a, r, 3e4),
        duration: 1
      });
    } else
      console.log("未找到匹配的数据");
  }
  // 设置初始视角
  setInitialView(e) {
    this.viewer && this.viewer.camera.flyTo({ destination: e, duration: 1 });
  }
  destroy() {
    this.viewer && (this.viewer.destroy(), this.viewer = null, this.pointEntities = null, this.polygonEntities = null, this.screenSpaceEventHandler = null);
  }
}
export {
  M as cesiumService
};
