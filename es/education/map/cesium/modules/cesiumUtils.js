var R = Object.defineProperty;
var U = (m, e, t) => e in m ? R(m, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : m[e] = t;
var l = (m, e, t) => U(m, typeof e != "symbol" ? e + "" : e, t);
import { CesiumHeatmap as N } from "cesium-heatmap-es6";
import { areaData as g } from "./type.js";
import { createClusterBillboard as M, createInfoCanvas as B, updateViewerEntityInfo as y } from "./tools.js";
import { Color as v, Rectangle as O, CustomDataSource as F, JulianDate as x, VerticalOrigin as K, HorizontalOrigin as W, ScreenSpaceEventType as V, ScreenSpaceEventHandler as _, defined as $, Cartesian3 as f, Cartesian2 as w, PolylineDashMaterialProperty as Y, PolygonHierarchy as G, Math as u, Cartographic as k, ArcGisMapServerImageryProvider as A } from "@cesium/engine";
import { Viewer as J } from "@cesium/widgets";
class se {
  constructor(e, t) {
    l(this, "viewer", null);
    l(this, "pointData", []);
    l(this, "pointEntities", []);
    l(this, "polygonEntities", []);
    l(this, "screenSpaceEventHandler", null);
    l(this, "imageLayerState", !0);
    l(this, "imageLayerUrl", null);
    l(this, "tileLoadCallback", null);
    l(this, "dataSource", null);
    l(this, "centerPosition", null);
    l(this, "defaultCenterKey", "深圳市");
    l(this, "defaultConfig", {
      minZoom: 200,
      maxZoom: 13e4,
      baseColor: v.TRANSPARENT,
      clusteringEnabled: !1,
      clusteringPixelRange: 30,
      clusteringMinimumClusterSize: 2,
      flyToHeight: 26e3,
      cameraLimitsEnabled: !1
    });
    l(this, "lastValidCameraPosition", null);
    l(this, "isCheckingBounds", !1);
    l(this, "removePreUpdateListener", null);
    // 深圳市地理边界（根据瓦片定义经纬度范围）
    l(this, "shenzhenBounds", O.fromDegrees(
      113.8,
      // 西边界 - 经度
      22.36,
      // 南边界 - 纬度
      114.6,
      // 东边界 - 经度
      22.7
      // 北边界 - 纬度
    ));
    l(this, "doubleClickHandler", (e) => {
      e.preventDefault(), e.stopPropagation(), this.setCameraHeight("ZoomIn");
    });
    this.containerId = e, this.options = t, this.options.config = {
      ...this.defaultConfig,
      ...this.options.config || {}
    }, this.centerPosition = t.centerPosition, this.defaultCenterKey = t.defaultCenterKey, this.tileLoadCallback = this.handleTileLoadProgress.bind(this);
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
    this.dataSource = new F("clusterSource"), this.viewer.dataSources.add(this.dataSource);
    const e = this.options.config;
    this.dataSource.clustering.enabled = (e == null ? void 0 : e.clusteringEnabled) ?? this.defaultConfig.clusteringEnabled, this.dataSource.clustering.pixelRange = (e == null ? void 0 : e.clusteringPixelRange) ?? this.defaultConfig.clusteringPixelRange, this.dataSource.clustering.minimumClusterSize = (e == null ? void 0 : e.clusteringMinimumClusterSize) ?? this.defaultConfig.clusteringMinimumClusterSize, this.dataSource.clustering.enabled && this.dataSource.clustering.clusterEvent.addEventListener((t, i) => {
      i.billboard.show = !0, i.label.show = !1;
      const s = {};
      let a = "", r = 0;
      t.forEach((c) => {
        var o;
        if (c.properties) {
          const h = (o = c.properties.type) == null ? void 0 : o.getValue(x.now());
          h && (s[h] = (s[h] || 0) + 1, s[h] > r && (r = s[h], a = h));
        }
      }), a || (a = "primary");
      const n = M(t.length, a);
      i.billboard.image = n.toDataURL(), i.billboard.width = 50, i.billboard.height = 50, i.billboard.verticalOrigin = K.CENTER, i.billboard.horizontalOrigin = W.CENTER, i.billboard.disableDepthTestDistance = Number.POSITIVE_INFINITY;
    });
  }
  // 初始化Cesium Viewer
  async initViewer(e) {
    var t, i;
    this.viewer && this.destroy();
    try {
      return this.viewer = new J(this.containerId, e), this.viewer.cesiumWidget.creditContainer.style.display = "none", this.viewer.scene.debugShowFramesPerSecond = !1, this.viewer.scene.globe.depthTestAgainstTerrain = !0, this.viewer.scene.screenSpaceCameraController.enableTranslate = !0, this.updateViewerAttribute(), this.viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(V.LEFT_DOUBLE_CLICK), this.viewer.scene.canvas.addEventListener("dblclick", this.doubleClickHandler, !1), this.setupClustering(), (((t = this.options.config) == null ? void 0 : t.cameraLimitsEnabled) ?? this.defaultConfig.cameraLimitsEnabled) && this.setupCameraLimits(), this.screenSpaceEventHandler = new _((i = this.viewer) == null ? void 0 : i.scene.canvas).setInputAction((s) => {
        var a;
        if (this.viewer) {
          this.viewer.selectedEntity = void 0, (a = this.options) != null && a.offsetState && (s.position.x *= 1.18, s.position.y *= 1.18);
          const r = this.viewer.scene.pick(s.position), n = this.viewer.scene.pickPosition(s.position);
          $(r) && r.id && this.pointClickHandler(r == null ? void 0 : r.id);
        }
      }, V.LEFT_CLICK), this.viewer.scene && this.viewer.scene.camera && this.viewer.scene.camera.changed.addEventListener(() => {
        const s = Math.ceil(this.viewer.camera.positionCartographic.height);
      }), !0;
    } catch (s) {
      return console.error("初始化Cesium失败:", s), !1;
    }
  }
  // 瓦片加载状完成（首次添加point、polygon）
  handleTileLoadProgress(e) {
    var t, i;
    e === 0 && (this.options.loadTileLayerHandler(!1), this.tileLoadCallback && ((i = (t = this.viewer) == null ? void 0 : t.scene) == null || i.globe.tileLoadProgressEvent.removeEventListener(this.tileLoadCallback)));
  }
  // 加载瓦片图层
  async loadTileLayer(e) {
    this.options.loadTileLayerHandler(!0);
    let t;
    const { viewer: i, imageLayerState: s, imageLayerUrl: a } = this;
    this.tileLoadCallback && (i == null || i.scene.globe.tileLoadProgressEvent.removeEventListener(this.tileLoadCallback)), a || (this.imageLayerUrl = e), this.imageLayerState = !s, await (async () => {
      var n, c;
      try {
        if (s) {
          const o = new Promise((C, p) => {
            setTimeout(() => p(new Error("瓦片加载超时")), 1e4);
          }), h = Zondy.WebMapTileServiceImageryProvider.fromUrl(a || e);
          t = await Promise.race([h, o]);
        } else
          t = await A.fromUrl(e);
      } catch (o) {
        console.error("瓦片加载失败:", o);
        try {
          t = await A.fromUrl(e);
        } catch (h) {
          console.error("默认瓦片加载失败:", h), this.options.loadTileLayerHandler(!1);
          return;
        }
      }
      if (i && t)
        try {
          i.imageryLayers.addImageryProvider(t), this.tileLoadCallback && ((c = (n = i.scene) == null ? void 0 : n.globe) == null || c.tileLoadProgressEvent.addEventListener(this.tileLoadCallback));
        } catch (o) {
          console.error("添加图层失败:", o), this.options.loadTileLayerHandler(!1);
        }
      else
        console.error("viewer 或 provider 未初始化"), this.options.loadTileLayerHandler(!1);
    })();
  }
  // 添加点标记
  async addPoint(e, t, i) {
    if (!this.viewer && !this.dataSource) return null;
    if (this.dataSource) {
      const s = await B(e, t, i), a = this.dataSource.entities.add({
        position: f.fromDegrees(e.lng, e.lat),
        name: t ? e.name : `${e.name}Label`,
        properties: {
          value: e == null ? void 0 : e.value,
          text: e == null ? void 0 : e.text,
          changeState: !1,
          type: (e == null ? void 0 : e.iconType) ?? "primary"
        },
        billboard: {
          image: s.canvas,
          disableDepthTestDistance: Number.POSITIVE_INFINITY,
          pixelOffset: t ? new w(0, 0) : new w(s.canvas.width / 2.1, 4)
        }
      });
      return a && this.pointEntities ? this.pointEntities.push(a) : (this.pointEntities = [], this.pointEntities.push(a)), a;
    }
  }
  // 清除指定entity
  async clearEntity(e, t) {
    var i;
    if (this[t] && this[e]) {
      for (let s of this[e])
        (i = this[t]) == null || i.entities.remove(s);
      this[e] = [];
    }
  }
  addPolygon(e) {
    if (!this.viewer || !(e in g)) return;
    const i = ((a) => a.position.geometry.coordinates.flat(2).map(([r, n]) => f.fromDegrees(r, n)))(g[e]), s = this.viewer.entities.add({
      name: e,
      polyline: {
        positions: i,
        material: new Y({
          color: v.fromCssColorString("#1E9EFA").withAlpha(0.7)
        }),
        width: 2
      },
      polygon: {
        hierarchy: new G(i),
        material: v.fromCssColorString("#A2D8FF").withAlpha(0.3),
        outline: !0,
        outlineColor: v.fromCssColorString("#4694CD")
      }
    });
    this.polygonEntities = this.polygonEntities || [], this.polygonEntities.push(s);
  }
  // 深圳全市添加Polygon
  addAllDistricts() {
    this.clearEntity("polygonEntities", "viewer"), Object.keys(g).filter((e) => e !== this.defaultCenterKey).forEach((e) => {
      this.addPolygon(e);
    });
  }
  // 获取当前地图经纬度、高度
  getPositionCartographic() {
    if (this.viewer) {
      const e = this.viewer.camera.positionCartographic, t = u.toDegrees(e.longitude), i = u.toDegrees(e.latitude);
      return [t, i, e.height];
    }
  }
  // 设置地图高度
  setCameraHeight(e) {
    var t;
    if (e === "ZoomIn" || e === "ZoomOut") {
      const i = this.getPositionCartographic(), { maxZoom: s = this.defaultConfig.maxZoom, minZoom: a = this.defaultConfig.minZoom } = this.options.config ?? {}, r = i && i[2] ? i[2] >= 3e4 ? 2e4 : i[2] >= 2e4 ? 1e4 : i[2] >= 1e4 ? 8e3 : 1e3 : 1e3, n = i[2] - (e === "ZoomIn" ? r : -r), c = n <= s && n >= a ? n : e === "ZoomIn" ? a : s;
      (t = this.viewer) == null || t.camera.flyTo({
        destination: f.fromDegrees(i[0], i[1], c),
        duration: 0.3
      });
    }
  }
  // 转换笛卡尔坐标到经纬度
  convertCartographic(e) {
    var a;
    const t = (a = this.viewer) == null ? void 0 : a.scene.globe.ellipsoid.cartesianToCartographic(e);
    if (!t) return new f();
    const i = u.toDegrees(t.longitude), s = u.toDegrees(t.latitude);
    return f.fromDegrees(i, s, 3e4);
  }
  // 控制窗体
  pointClickHandler(e) {
    var o, h, C, p, E, b, S, L;
    const { name: t } = e, i = t != null && t.endsWith("Label") ? t == null ? void 0 : t.replace("Label", "") : t, s = `${i}Label`, a = ((o = this.pointData) == null ? void 0 : o.findIndex((d) => d.name === i)) ?? -1, r = ((h = this.pointEntities) == null ? void 0 : h.findIndex((d) => d.name === i)) ?? -1, n = ((C = this.pointEntities) == null ? void 0 : C.findIndex((d) => d.name === s)) ?? -1;
    a !== -1 && n === -1 && !this.options.defaultShowState && this.pointData && this.addPoint(this.pointData[a], void 0, "Label"), y((p = this.pointData) == null ? void 0 : p[a], (E = this.pointEntities) == null ? void 0 : E[r], "value"), n !== -1 && this.options.defaultShowState && y((b = this.pointData) == null ? void 0 : b[a], (S = this.pointEntities) == null ? void 0 : S[n]), this.options.defaultShowState || (L = this.pointEntities) == null || L.forEach((d) => {
      var P, D, T, I;
      if ((P = d.name) != null && P.endsWith("Label"))
        d.show = d.name === s && !d.show;
      else {
        const Z = x.now();
        if ((D = d.properties) == null ? void 0 : D.getValue(Z).changeState) {
          const H = ((T = this.pointData) == null ? void 0 : T.findIndex((z) => z.name === d.name)) ?? -1;
          H !== -1 && y((I = this.pointData) == null ? void 0 : I[H], d, "value");
        }
      }
    }), this.options.pointHandler(e);
  }
  //controlpolygon
  polygonClickHandler(e) {
    var t, i, s, a;
    if (e === this.defaultCenterKey && this.centerPosition) {
      this.addAllDistricts(), this.setInitialView({ destination: this.centerPosition });
      return;
    }
    if (e in g) {
      ((t = this.polygonEntities) == null ? void 0 : t.find((o) => o.name === e)) || this.addPolygon(e);
      const { lng: n, lat: c } = g[e];
      (i = this.polygonEntities) == null || i.forEach((o) => {
        o.show = o.name === e;
      }), (a = this.viewer) == null || a.camera.flyTo({
        destination: f.fromDegrees(n, c, ((s = this.options) == null ? void 0 : s.flyToHeight) ?? this.defaultConfig.flyToHeight),
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
    (t = this.viewer) == null || t.imageryLayers.removeAll(), (i = this.viewer) == null || i.entities.removeAll(), this.dataSource && (this.dataSource.entities.removeAll(), this.viewer && (this.viewer.dataSources.remove(this.dataSource), this.setupClustering())), this.pointEntities = null, this.polygonEntities = null, this.loadTileLayer(e);
  }
  // 热力图
  addHeatmap() {
    const e = g.宝安区.position.geometry.coordinates.flat(2).map(([t, i]) => ({
      x: t,
      y: i,
      value: Number((Math.random() * 1.9 + 0.1).toFixed(1))
    }));
    new N(this.viewer, {
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
  // 检查是否在深圳边界内
  isPointInShenzhen(e, t) {
    return e >= u.toDegrees(this.shenzhenBounds.west) && e <= u.toDegrees(this.shenzhenBounds.east) && t >= u.toDegrees(this.shenzhenBounds.south) && t <= u.toDegrees(this.shenzhenBounds.north);
  }
  // 设置视角移动限制
  setupCameraLimits() {
    if (!this.viewer) return;
    const e = this.viewer.scene;
    e.screenSpaceCameraController.enableRotate = !0, e.screenSpaceCameraController.enableTranslate = !0, e.screenSpaceCameraController.enableZoom = !0, e.screenSpaceCameraController.enableTilt = !0, e.screenSpaceCameraController.enableLook = !0, this.removePreUpdateListener = e.preUpdate.addEventListener(() => {
      if (!(this.isCheckingBounds || !this.viewer))
        try {
          this.isCheckingBounds = !0;
          const t = new w(Math.floor(this.viewer.canvas.clientWidth / 2), Math.floor(this.viewer.canvas.clientHeight / 2)), i = this.viewer.camera.getPickRay(t);
          if (!i) return;
          const s = this.viewer.scene.globe.pick(i, this.viewer.scene);
          if (!s) {
            const c = this.getCameraViewCenter();
            if (!c) return;
            const o = u.toDegrees(c.longitude), h = u.toDegrees(c.latitude);
            this.isPointInShenzhen(o, h) ? this.lastValidCameraPosition = this.viewer.camera.position.clone() : this.lastValidCameraPosition && (this.viewer.camera.position = this.lastValidCameraPosition.clone());
            return;
          }
          const a = k.fromCartesian(s), r = u.toDegrees(a.longitude), n = u.toDegrees(a.latitude);
          this.isPointInShenzhen(r, n) ? this.lastValidCameraPosition = this.viewer.camera.position.clone() : this.lastValidCameraPosition && (this.viewer.camera.position = this.lastValidCameraPosition.clone(), this.viewer.camera.direction = this.viewer.scene.camera.direction.clone());
        } finally {
          this.isCheckingBounds = !1;
        }
    });
  }
  // 获取相机视角中心
  getCameraViewCenter() {
    if (this.viewer)
      try {
        const e = new w(this.viewer.canvas.clientWidth / 2, this.viewer.canvas.clientHeight / 2), t = this.viewer.camera.getPickRay(e);
        if (!t) return;
        const i = this.viewer.scene.globe.pick(t, this.viewer.scene);
        return i ? k.fromCartesian(i) : this.viewer.camera.positionCartographic;
      } catch (e) {
        return console.warn("获取相机视角中心失败", e), this.viewer.camera.positionCartographic;
      }
  }
  destroy() {
    this.viewer && (this.viewer.scene.canvas.removeEventListener("dblclick", this.doubleClickHandler, !1), this.viewer.scene && this.viewer.scene.camera && this.removePreUpdateListener && (this.removePreUpdateListener(), this.removePreUpdateListener = null), this.screenSpaceEventHandler && (this.screenSpaceEventHandler.destroy(), this.screenSpaceEventHandler = null), this.dataSource && (this.viewer.dataSources.remove(this.dataSource), this.dataSource = null), this.lastValidCameraPosition = null, this.viewer.destroy(), this.viewer = null, this.pointEntities = null, this.polygonEntities = null, this.imageLayerState = null, this.imageLayerUrl = null, this.tileLoadCallback = null);
  }
}
export {
  se as cesiumService
};
