var k = Object.defineProperty;
var V = (c, e, i) => e in c ? k(c, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : c[e] = i;
var r = (c, e, i) => V(c, typeof e != "symbol" ? e + "" : e, i);
import { CesiumHeatmap as F } from "cesium-heatmap-es6";
import { areaData as f } from "./type.js";
import { createInfoCanvas as M, updateViewerEntityInfo as C } from "./tools.js";
import { Color as m, CustomDataSource as O, LabelStyle as U, VerticalOrigin as _, Cartesian2 as y, ScreenSpaceEventType as x, ScreenSpaceEventHandler as R, defined as W, Cartesian3 as g, PolylineDashMaterialProperty as z, Math as v, JulianDate as K, ArcGisMapServerImageryProvider as A } from "@cesium/engine";
import { Viewer as $ } from "@cesium/widgets";
class j {
  constructor(e, i) {
    r(this, "viewer", null);
    r(this, "pointData", []);
    r(this, "pointEntities", []);
    r(this, "polygonEntities", []);
    r(this, "screenSpaceEventHandler", null);
    r(this, "imageLayerState", !0);
    r(this, "imageLayerUrl", null);
    r(this, "tileLoadCallback", null);
    r(this, "dataSource", null);
    r(this, "defaultConfig", {
      minZoom: 200,
      maxZoom: 13e4,
      baseColor: m.TRANSPARENT,
      clusteringEnabled: !1,
      clusteringPixelRange: 30,
      clusteringMinimumClusterSize: 2,
      flyToHeight: 26e3
    });
    r(this, "doubleClickHandler", (e) => {
      e.preventDefault(), e.stopPropagation(), this.setCameraHeight("ZoomIn");
    });
    r(this, "changeHeightHandler", () => {
      var i;
      const e = Math.ceil(this.viewer.camera.positionCartographic.height);
      e === (((i = this.options.config) == null ? void 0 : i.maxZoom) ?? 13e4) && this.options.limitHeightHandler(e);
    });
    this.containerId = e, this.options = i, this.options.config = {
      ...this.defaultConfig,
      ...this.options.config || {}
    }, this.tileLoadCallback = this.handleTileLoadProgress.bind(this);
  }
  // Cesium属性更新
  updateViewerAttribute() {
    if (this.viewer) {
      const e = this.options.config;
      this.viewer.scene.screenSpaceCameraController.minimumZoomDistance = (e == null ? void 0 : e.minZoom) ?? this.defaultConfig.minZoom, this.viewer.scene.screenSpaceCameraController.maximumZoomDistance = (e == null ? void 0 : e.maxZoom) ?? this.defaultConfig.maxZoom, this.viewer.scene.globe.baseColor = (e == null ? void 0 : e.baseColor) ?? this.defaultConfig.baseColor;
    }
  }
  // 添加点聚合配置方法
  setupClustering() {
    if (!this.viewer) return;
    this.dataSource = new O("clusterSource"), this.viewer.dataSources.add(this.dataSource);
    const e = this.options.config;
    this.dataSource.clustering.enabled = (e == null ? void 0 : e.clusteringEnabled) ?? this.defaultConfig.clusteringEnabled, this.dataSource.clustering.pixelRange = (e == null ? void 0 : e.clusteringPixelRange) ?? this.defaultConfig.clusteringPixelRange, this.dataSource.clustering.minimumClusterSize = (e == null ? void 0 : e.clusteringMinimumClusterSize) ?? this.defaultConfig.clusteringMinimumClusterSize, this.dataSource.clustering.enabled && this.dataSource.clustering.clusterEvent.addEventListener((i, t) => {
      t.billboard.show = !0, t.label.show = !0, t.label.scale = 1, t.label.fillColor = m.WHITE, t.label.style = U.FILL_AND_OUTLINE, t.label.outlineColor = m.BLACK, t.label.outlineWidth = 2, t.label.font = "24px sans-serif", t.label.verticalOrigin = _.CENTER, t.label.pixelOffset = new y(0, 0), t.label.disableDepthTestDistance = Number.POSITIVE_INFINITY;
    });
  }
  // 初始化Cesium Viewer
  async initViewer(e) {
    var i;
    this.viewer && this.destroy();
    try {
      return this.viewer = new $(this.containerId, e), this.viewer.cesiumWidget.creditContainer.style.display = "none", this.viewer.scene.debugShowFramesPerSecond = !1, this.viewer.scene.globe.depthTestAgainstTerrain = !0, this.viewer.scene.screenSpaceCameraController.enableTranslate = !0, this.updateViewerAttribute(), this.viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(x.LEFT_DOUBLE_CLICK), this.viewer.scene.canvas.addEventListener("dblclick", this.doubleClickHandler, !1), this.setupClustering(), this.screenSpaceEventHandler = new R((i = this.viewer) == null ? void 0 : i.scene.canvas).setInputAction(
        (t) => {
          var o;
          if (this.viewer) {
            this.viewer.selectedEntity = void 0, (o = this.options) != null && o.offsetState && (t.position.x *= 1.18, t.position.y *= 1.18);
            const a = this.viewer.scene.pick(t.position), h = this.viewer.scene.pickPosition(t.position);
            W(a) && a.id && this.pointClickHandler(a == null ? void 0 : a.id);
          }
        },
        x.LEFT_CLICK
      ), this.viewer.scene.camera.moveEnd.addEventListener(this.changeHeightHandler), !0;
    } catch (t) {
      return console.error("初始化Cesium失败:", t), !1;
    }
  }
  // 瓦片加载状完成（首次添加point、polygon）
  handleTileLoadProgress(e) {
    var i, t;
    e <= 100 && (this.options.loadTileLayerHandler(!1), this.tileLoadCallback && ((t = (i = this.viewer) == null ? void 0 : i.scene) == null || t.globe.tileLoadProgressEvent.removeEventListener(this.tileLoadCallback)));
  }
  // 加载瓦片图层
  async loadTileLayer(e) {
    this.options.loadTileLayerHandler(!0);
    let i;
    const { viewer: t, imageLayerState: o, imageLayerUrl: a } = this;
    this.tileLoadCallback && (t == null || t.scene.globe.tileLoadProgressEvent.removeEventListener(this.tileLoadCallback)), a || (this.imageLayerUrl = e), this.imageLayerState = !o, await (async () => {
      var l, d;
      try {
        if (o) {
          const s = new Promise((w, p) => {
            setTimeout(() => p(new Error("瓦片加载超时")), 1e4);
          }), u = Zondy.WebMapTileServiceImageryProvider.fromUrl(a || e);
          i = await Promise.race([u, s]);
        } else
          i = await A.fromUrl(e);
      } catch (s) {
        console.error("瓦片加载失败:", s);
        try {
          i = await A.fromUrl(e);
        } catch (u) {
          console.error("默认瓦片加载失败:", u), this.options.loadTileLayerHandler(!1);
          return;
        }
      }
      if (t && i)
        try {
          t.imageryLayers.addImageryProvider(i), this.tileLoadCallback && ((d = (l = t.scene) == null ? void 0 : l.globe) == null || d.tileLoadProgressEvent.addEventListener(this.tileLoadCallback));
        } catch (s) {
          console.error("添加图层失败:", s), this.options.loadTileLayerHandler(!1);
        }
      else
        console.error("viewer 或 provider 未初始化"), this.options.loadTileLayerHandler(!1);
    })();
  }
  // 添加点标记
  async addPoint(e, i, t) {
    if (!this.viewer && !this.dataSource) return null;
    if (this.dataSource) {
      const o = await M(e, i, t), a = this.dataSource.entities.add({
        position: g.fromDegrees(e.lng, e.lat),
        name: i ? e.name : `${e.name}Label`,
        // 自定义属性
        properties: {
          value: e == null ? void 0 : e.value,
          text: e == null ? void 0 : e.text,
          changeState: !1
        },
        billboard: {
          image: o.canvas,
          disableDepthTestDistance: Number.POSITIVE_INFINITY,
          pixelOffset: i ? new y(0, 0) : new y(o.canvas.width / 2.1, 4)
        }
      });
      return a && this.pointEntities ? this.pointEntities.push(a) : (this.pointEntities = [], this.pointEntities.push(a)), a;
    }
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
    if (this.viewer && e in f) {
      const i = f[e].position.geometry.coordinates.flat(2).map(([o, a]) => g.fromDegrees(o, a)), t = this.viewer.entities.add({
        name: e,
        polyline: {
          positions: i,
          material: new z({
            color: m.fromCssColorString("#1E9EFA").withAlpha(0.7)
          }),
          width: 2
        },
        polygon: {
          hierarchy: i,
          material: m.fromCssColorString("#A2D8FF").withAlpha(0.3),
          outline: !0,
          outlineColor: m.fromCssColorString("#4694CD")
        }
      });
      t && this.polygonEntities ? this.polygonEntities.push(t) : (this.polygonEntities = [], this.polygonEntities.push(t));
    }
  }
  // 获取当前地图经纬度、高度
  getPositionCartographic() {
    if (this.viewer) {
      const e = this.viewer.camera.positionCartographic, i = v.toDegrees(e.longitude), t = v.toDegrees(e.latitude);
      return [i, t, e.height];
    }
  }
  // 设置地图高度
  setCameraHeight(e) {
    var i;
    if (e === "ZoomIn" || e === "ZoomOut") {
      const t = this.getPositionCartographic(), { maxZoom: o = this.defaultConfig.maxZoom, minZoom: a = this.defaultConfig.minZoom } = this.options.config ?? {}, h = t && t[2] ? t[2] >= 3e4 ? 2e4 : t[2] >= 2e4 ? 1e4 : t[2] >= 1e4 ? 8e3 : 1e3 : 1e3, l = t[2] - (e === "ZoomIn" ? h : -h), d = l <= o && l >= a ? l : e === "ZoomIn" ? a : o;
      (i = this.viewer) == null || i.camera.flyTo({
        destination: g.fromDegrees(t[0], t[1], d),
        duration: 0.3
      });
    }
  }
  // 转换笛卡尔坐标到经纬度
  convertCartographic(e) {
    var a;
    const i = (a = this.viewer) == null ? void 0 : a.scene.globe.ellipsoid.cartesianToCartographic(e);
    if (!i) return new g();
    const t = v.toDegrees(i.longitude), o = v.toDegrees(i.latitude);
    return g.fromDegrees(t, o, 3e4);
  }
  // 控制窗体
  pointClickHandler(e) {
    var s, u, w, p, E, b, L, S;
    const { name: i } = e, t = i != null && i.endsWith("Label") ? i == null ? void 0 : i.replace("Label", "") : i, o = `${t}Label`, a = ((s = this.pointData) == null ? void 0 : s.findIndex((n) => n.name === t)) ?? -1, h = ((u = this.pointEntities) == null ? void 0 : u.findIndex((n) => n.name === t)) ?? -1, l = ((w = this.pointEntities) == null ? void 0 : w.findIndex((n) => n.name === o)) ?? -1;
    a !== -1 && l === -1 && !this.options.defaultShowState && this.pointData && this.addPoint(this.pointData[a], void 0, "Label"), C((p = this.pointData) == null ? void 0 : p[a], (E = this.pointEntities) == null ? void 0 : E[h], "value"), l !== -1 && this.options.defaultShowState && C((b = this.pointData) == null ? void 0 : b[a], (L = this.pointEntities) == null ? void 0 : L[l]), this.options.defaultShowState || (S = this.pointEntities) == null || S.forEach((n) => {
      var I, T, D, H;
      if ((I = n.name) != null && I.endsWith("Label"))
        n.show = n.name === o && !n.show;
      else {
        const Z = K.now();
        if ((T = n.properties) == null ? void 0 : T.getValue(Z).changeState) {
          const P = ((D = this.pointData) == null ? void 0 : D.findIndex((N) => N.name === n.name)) ?? -1;
          P !== -1 && C((H = this.pointData) == null ? void 0 : H[P], n, "value");
        }
      }
    }), this.options.pointHandler(e);
  }
  //controlpolygon
  polygonClickHandler(e) {
    var i, t, o, a;
    if (e in f) {
      ((i = this.polygonEntities) == null ? void 0 : i.find((s) => s.name === e)) || this.addPolygon(e);
      const { lng: l, lat: d } = f[e];
      (t = this.polygonEntities) == null || t.forEach((s) => {
        s.show = s.name === e;
      }), (a = this.viewer) == null || a.camera.flyTo({
        destination: g.fromDegrees(l, d, ((o = this.options) == null ? void 0 : o.flyToHeight) ?? this.defaultConfig.flyToHeight),
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
    const e = f.宝安区.position.geometry.coordinates.flat(2).map(([i, t]) => ({
      x: i,
      y: t,
      value: Number((Math.random() * 1.9 + 0.1).toFixed(1))
    }));
    new F(this.viewer, {
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
  j as cesiumService
};
