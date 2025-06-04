var P = Object.defineProperty;
var H = (f, e, t) => e in f ? P(f, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : f[e] = t;
var o = (f, e, t) => H(f, typeof e != "symbol" ? e + "" : e, t);
import { CesiumHeatmap as D } from "cesium-heatmap-es6";
import { areaData as u } from "./type.js";
import { createClusterBillboard as T, createInfoCanvas as I, createEntityConfig as x, updateViewerEntityInfo as p } from "./tools.js";
import { useMessage as k } from "naive-ui";
import { Color as m, Rectangle as V, CustomDataSource as M, JulianDate as v, VerticalOrigin as U, HorizontalOrigin as Z, ScreenSpaceEventType as w, ScreenSpaceEventHandler as E, defined as b, ArcGisMapServerImageryProvider as L, PolylineDashMaterialProperty as A, PolygonHierarchy as O, Cartographic as C, Cartesian3 as y, Math as d, Cartesian2 as S } from "@cesium/engine";
import { Viewer as N } from "@cesium/widgets";
class j {
  constructor(e, t) {
    o(this, "viewer", null);
    o(this, "pointData", []);
    o(this, "pointEntities", []);
    o(this, "polygonEntities", []);
    o(this, "screenSpaceEventHandler", null);
    o(this, "screenMouseMoveHandler", null);
    o(this, "imageLayerState", !0);
    o(this, "imageLayerUrl", null);
    o(this, "tileLoadCallback", null);
    o(this, "dataSource", null);
    o(this, "centerPosition", null);
    o(this, "defaultCenterKey", "深圳市");
    o(this, "defaultConfig", {
      minZoom: 200,
      maxZoom: 13e4,
      baseColor: m.TRANSPARENT,
      clusteringEnabled: !1,
      clusteringPixelRange: 30,
      clusteringMinimumClusterSize: 2,
      flyToHeight: 26e3,
      cameraLimitsEnabled: !1,
      hoverState: !0,
      defaultUrl: "https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer"
    });
    o(this, "lastValidCameraPosition", null);
    o(this, "isCheckingBounds", !1);
    o(this, "removePreUpdateListener", null);
    o(this, "lastHoveredEntity", null);
    o(this, "lastThrottleTime", 0);
    o(this, "throttleDelay", 100);
    // 深圳市地理边界（根据瓦片定义经纬度范围）
    o(this, "shenzhenBounds", V.fromDegrees(
      113.8,
      // 西边界 - 经度
      22.36,
      // 南边界 - 纬度
      114.6,
      // 东边界 - 经度
      22.7
      // 北边界 - 纬度
    ));
    o(this, "message", k());
    o(this, "doubleClickHandler", (e) => {
      e.preventDefault(), e.stopPropagation(), this.setCameraHeight("ZoomIn");
    });
    this.containerId = e, this.options = t, this.options.config = {
      ...this.defaultConfig,
      ...this.options.config || {}
    }, this.centerPosition = t.centerPosition, this.defaultCenterKey = t.defaultCenterKey, this.tileLoadCallback = this.handleTileLoadProgress.bind(this);
  }
  // Cesium属性更新
  updateViewerAttribute() {
    if (!this.viewer) return;
    const e = this.options.config, { scene: t } = this.viewer;
    t.screenSpaceCameraController.minimumZoomDistance = (e == null ? void 0 : e.minZoom) ?? this.defaultConfig.minZoom, t.screenSpaceCameraController.maximumZoomDistance = (e == null ? void 0 : e.maxZoom) ?? this.defaultConfig.maxZoom, t.globe.baseColor = (e == null ? void 0 : e.baseColor) ?? this.defaultConfig.baseColor;
  }
  // 添加点聚合配置方法
  setupClustering() {
    if (!this.viewer) return;
    this.dataSource = new M("clusterSource"), this.viewer.dataSources.add(this.dataSource);
    const e = this.options.config, t = this.dataSource.clustering;
    t.enabled = (e == null ? void 0 : e.clusteringEnabled) ?? this.defaultConfig.clusteringEnabled, t.pixelRange = (e == null ? void 0 : e.clusteringPixelRange) ?? this.defaultConfig.clusteringPixelRange, t.minimumClusterSize = (e == null ? void 0 : e.clusteringMinimumClusterSize) ?? this.defaultConfig.clusteringMinimumClusterSize, t.enabled && t.clusterEvent.addEventListener((i, s) => {
      s.billboard.show = !0, s.label.show = !1;
      const n = {};
      let r = "", a = 0;
      i.forEach((l) => {
        var g;
        if (!l.properties) return;
        const h = (g = l.properties.type) == null ? void 0 : g.getValue(v.now());
        h && (n[h] = (n[h] || 0) + 1, n[h] > a && (a = n[h], r = h));
      });
      const c = T(i.length, r || "primary");
      Object.assign(s.billboard, {
        id: "cluster",
        image: c.toDataURL(),
        width: 50,
        height: 50,
        verticalOrigin: U.CENTER,
        horizontalOrigin: Z.CENTER,
        disableDepthTestDistance: Number.POSITIVE_INFINITY
      });
    });
  }
  // 初始化Cesium Viewer
  async initViewer(e) {
    var t;
    this.viewer && this.destroy();
    try {
      this.viewer = new N(this.containerId, e), this.viewer.cesiumWidget.creditContainer.style.display = "none";
      const { scene: i } = this.viewer;
      return i.debugShowFramesPerSecond = !1, i.globe.depthTestAgainstTerrain = !0, i.screenSpaceCameraController.enableTranslate = !0, this.updateViewerAttribute(), this.viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(w.LEFT_DOUBLE_CLICK), this.viewer.scene.canvas.addEventListener("dblclick", this.doubleClickHandler, !1), this.setupClustering(), (((t = this.options.config) == null ? void 0 : t.cameraLimitsEnabled) ?? this.defaultConfig.cameraLimitsEnabled) && this.setupCameraLimits(), this.setupEventHandlers(), !0;
    } catch (i) {
      return console.error("初始化Cesium失败:", i), !1;
    }
  }
  // 设置事件处理器
  setupEventHandlers() {
    if (!this.viewer) return;
    const e = this.viewer.scene.canvas;
    this.screenSpaceEventHandler = new E(e).setInputAction(
      this.handleLeftClick.bind(this),
      w.LEFT_CLICK
    ), this.screenMouseMoveHandler = new E(e).setInputAction(
      this.handleMouseMove.bind(this),
      w.MOUSE_MOVE
    ), this.viewer.scene && this.viewer.scene.camera && this.viewer.scene.camera.changed.addEventListener(() => {
      Math.ceil(this.viewer.camera.positionCartographic.height);
    });
  }
  // 处理左键点击
  handleLeftClick(e) {
    var i;
    if (!this.viewer) return;
    this.viewer.selectedEntity = void 0, (i = this.options) != null && i.offsetState && (e.position.x *= 1.18, e.position.y *= 1.18);
    const t = this.viewer.scene.pick(e.position);
    if (b(t) && t.id) {
      if (t.id === "cluster") {
        const s = this.getClickPosition(e.position);
        s && this.viewer.camera.flyTo({
          destination: s,
          duration: 0.3
        });
      }
      this.options.config.hoverState ? this.pointClickHandler(t.id) : this.options.pointHandler(t.id);
    }
  }
  // 处理鼠标移动
  handleMouseMove(e) {
    var s, n;
    if (!this.viewer) return;
    const t = Date.now();
    if (t - this.lastThrottleTime < this.throttleDelay) return;
    this.lastThrottleTime = t, (s = this.options) != null && s.offsetState && (e.endPosition.x *= 1.18, e.endPosition.y *= 1.18);
    const i = this.viewer.scene.pick(e.endPosition);
    if (!b(i) || !i.id || i.id.name in u) {
      this.lastHoveredEntity && (this.pointHoverExitHandler(this.lastHoveredEntity), this.lastHoveredEntity = null);
      return;
    }
    (n = i.id.name) != null && n.includes("Label") || i.id !== this.lastHoveredEntity && (this.lastHoveredEntity && this.pointHoverExitHandler(this.lastHoveredEntity), this.pointHoverHandler(i.id), this.lastHoveredEntity = i.id);
  }
  // 瓦片加载状完成（首次添加point、polygon）
  handleTileLoadProgress(e) {
    e === 0 && (this.options.loadTileLayerHandler(!1), this.cleanupTileLoadListener());
  }
  // 加载瓦片图层
  async loadTileLayer(e) {
    this.options.loadTileLayerHandler(!0);
    const { viewer: t, imageLayerState: i, imageLayerUrl: s } = this;
    this.cleanupTileLoadListener(), this.updateLayerState(e);
    try {
      const n = await this.loadProviderWithFallback({
        targetUrl: s || e,
        useZondy: i,
        fallbackUrl: this.options.config.defaultUrl ?? this.defaultConfig.defaultUrl
      });
      t && n && await this.addProviderToViewer(t, n);
    } catch (n) {
      this.handleLoadError(n);
    }
  }
  cleanupTileLoadListener() {
    var e, t;
    this.tileLoadCallback && ((t = (e = this.viewer) == null ? void 0 : e.scene) != null && t.globe) && this.viewer.scene.globe.tileLoadProgressEvent.removeEventListener(this.tileLoadCallback);
  }
  updateLayerState(e) {
    this.imageLayerUrl || (this.imageLayerUrl = e), this.imageLayerState = !this.imageLayerState;
  }
  async loadProviderWithFallback(e) {
    try {
      return e.useZondy ? await Zondy.WebMapTileServiceImageryProvider.fromUrl(e.targetUrl) : await L.fromUrl(e.targetUrl);
    } catch {
      e.useZondy && this.message.error("(Zondy)瓦片加载失败, 请刷新重试");
      try {
        return await L.fromUrl(e.fallbackUrl);
      } catch (i) {
        throw this.message.error("默认瓦片加载失败，请刷新重试"), this.options.loadTileLayerHandler(!1), i;
      }
    }
  }
  async addProviderToViewer(e, t) {
    var i, s;
    try {
      e.imageryLayers.addImageryProvider(t), this.tileLoadCallback && ((s = (i = e.scene) == null ? void 0 : i.globe) == null || s.tileLoadProgressEvent.addEventListener(this.tileLoadCallback));
    } catch (n) {
      throw console.error("添加图层失败:", n), n;
    }
  }
  handleLoadError(e) {
    console.error("图层加载流程失败:", e);
  }
  // 添加点标记
  async addPoint(e, t, i) {
    if (!this.viewer && !this.dataSource || !this.dataSource) return null;
    const s = await I(e, t, i), n = await x(e, s.canvas, t), r = this.dataSource.entities.add(n);
    return this.pointEntities || (this.pointEntities = []), this.pointEntities.push(r), r;
  }
  // 清除指定entity
  async clearEntity(e, t) {
    var i;
    if (!(!this[t] || !this[e])) {
      for (const s of this[e])
        (i = this[t]) == null || i.entities.remove(s);
      this[e] = [];
    }
  }
  addPolygon(e) {
    if (!this.viewer || !(e in u)) return;
    const i = ((n) => n.position.geometry.coordinates.flat(2).map(([r, a]) => y.fromDegrees(r, a)))(u[e]), s = this.viewer.entities.add({
      name: e,
      polyline: {
        positions: i,
        material: new A({
          color: m.fromCssColorString("#1E9EFA").withAlpha(0.7)
        }),
        width: 2
      },
      polygon: {
        hierarchy: new O(i),
        material: m.fromCssColorString("#A2D8FF").withAlpha(0.3),
        outline: !0,
        outlineColor: m.fromCssColorString("#4694CD")
      }
    });
    this.polygonEntities = this.polygonEntities || [], this.polygonEntities.push(s);
  }
  // 深圳全市添加Polygon
  addAllDistricts() {
    this.clearEntity("polygonEntities", "viewer"), Object.keys(u).filter((e) => e !== "深圳市").forEach(this.addPolygon.bind(this));
  }
  getClickPosition(e) {
    if (!this.viewer) return;
    const t = this.viewer.scene.pickPosition(e), i = this.getPositionCartographic();
    if (t && i) {
      const s = C.fromCartesian(t);
      return s.height = i[2] < 2e3 ? 200 : 2e3, y.fromRadians(s.longitude, s.latitude, s.height);
    }
    Object.keys(u).filter((s) => s !== this.defaultCenterKey).forEach((s) => {
      this.addPolygon(s);
    });
  }
  // 获取当前地图经纬度、高度
  getPositionCartographic() {
    if (!this.viewer) return;
    const e = this.viewer.camera.positionCartographic, t = d.toDegrees(e.longitude), i = d.toDegrees(e.latitude);
    return [t, i, e.height];
  }
  // 设置地图高度
  setCameraHeight(e) {
    if (e !== "ZoomIn" && e !== "ZoomOut") return;
    const t = this.getPositionCartographic();
    if (!t || !this.viewer) return;
    const { maxZoom: i = this.defaultConfig.maxZoom, minZoom: s = this.defaultConfig.minZoom } = this.options.config ?? {}, n = t[2] >= 3e4 ? 2e4 : t[2] >= 2e4 ? 1e4 : t[2] >= 1e4 ? 8e3 : 1e3, r = t[2] - (e === "ZoomIn" ? n : -n), a = r <= i && r >= s ? r : e === "ZoomIn" ? s : i;
    this.viewer.camera.flyTo({
      destination: y.fromDegrees(t[0], t[1], a),
      duration: 0.3
    });
  }
  // 获取实体名称相关信息
  getEntityNameInfo(e) {
    var s, n, r;
    const t = e != null && e.endsWith("Label") ? e == null ? void 0 : e.replace("Label", "") : e, i = `${t}Label`;
    return {
      baseName: t,
      labelName: i,
      dataIndex: ((s = this.pointData) == null ? void 0 : s.findIndex((a) => a.name === t)) ?? -1,
      entityIndex: ((n = this.pointEntities) == null ? void 0 : n.findIndex((a) => a.name === t)) ?? -1,
      labelEntityIndex: ((r = this.pointEntities) == null ? void 0 : r.findIndex((a) => a.name === i)) ?? -1
    };
  }
  // 控制窗体
  pointClickHandler(e) {
    var c, l, h, g;
    const { name: t } = e, { labelName: i, dataIndex: s, entityIndex: n, labelEntityIndex: r } = this.getEntityNameInfo(t);
    s !== -1 && r === -1 && !this.options.defaultShowState && this.pointData && this.addPoint(this.pointData[s], void 0, "Label"), p((c = this.pointData) == null ? void 0 : c[s], (l = this.pointEntities) == null ? void 0 : l[n], "value"), r !== -1 && this.options.defaultShowState && p((h = this.pointData) == null ? void 0 : h[s], (g = this.pointEntities) == null ? void 0 : g[r]), this.handleLabelsVisibility(i), this.options.pointHandler(e);
  }
  // 处理标签显示/隐藏
  handleLabelsVisibility(e) {
    if (this.options.defaultShowState || !this.pointEntities) return;
    const t = v.now();
    this.pointEntities.forEach((i) => {
      var s, n, r, a;
      if ((s = i.name) != null && s.endsWith("Label"))
        i.show = i.name === e && !i.show;
      else {
        if (!((n = i.properties) == null ? void 0 : n.getValue(t).changeState)) return;
        const l = ((r = this.pointData) == null ? void 0 : r.findIndex((h) => h.name === i.name)) ?? -1;
        l !== -1 && p((a = this.pointData) == null ? void 0 : a[l], i, "value");
      }
    });
  }
  // 鼠标悬浮处理
  pointHoverHandler(e) {
    const { name: t } = e;
    if (t != null && t.includes("Label")) return;
    const { labelName: i, dataIndex: s, entityIndex: n, labelEntityIndex: r } = this.getEntityNameInfo(t);
    this.handleHoverLabelDisplay(s, i, r), this.applyHoverEffect(s, n), this.hideOtherLabels(i);
  }
  // 处理悬浮时标签显示
  handleHoverLabelDisplay(e, t, i) {
    e === -1 || this.options.defaultShowState || (i === -1 && this.pointData ? this.addPoint(this.pointData[e], void 0, "Label").then(() => {
      var n;
      const s = ((n = this.pointEntities) == null ? void 0 : n.findIndex((r) => r.name === t)) ?? -1;
      s !== -1 && this.pointEntities && (this.pointEntities[s].show = !0);
    }) : i !== -1 && this.pointEntities && (this.pointEntities[i].show = !0));
  }
  // 应用悬浮效果
  applyHoverEffect(e, t) {
    var r;
    if (t === -1 || !this.pointEntities) return;
    const i = this.pointEntities[t];
    if (!i || !i.properties) return;
    const s = v.now();
    i.properties.getValue(s).hoverState || i.properties.addProperty("hoverState", !0), p((r = this.pointData) == null ? void 0 : r[e], i, "value");
  }
  // 隐藏其他标签
  hideOtherLabels(e) {
    this.options.defaultShowState || !this.pointEntities || this.pointEntities.forEach((t) => {
      var i;
      (i = t.name) != null && i.endsWith("Label") && t.name !== e && (t.show = !1);
    });
  }
  // 鼠标离开悬浮元素处理
  pointHoverExitHandler(e) {
    const { name: t } = e;
    if (t != null && t.includes("Label")) return;
    const { dataIndex: i, entityIndex: s, labelEntityIndex: n } = this.getEntityNameInfo(t);
    this.restoreEntityState(i, s), this.handleLabelVisibilityOnExit(i, n), this.options.pointHoverExitHandler && this.options.pointHoverExitHandler(e);
  }
  // 恢复实体状态
  restoreEntityState(e, t) {
    var a;
    if (t === -1 || !this.pointEntities) return;
    const i = this.pointEntities[t];
    if (!i || !i.properties) return;
    const s = v.now(), n = i.properties.getValue(s);
    n.hoverState && i.properties.removeProperty("hoverState");
    const r = (a = this.pointData) == null ? void 0 : a[e];
    r && (n.changeState ? r.changeIconType ? p(r, i, "change") : p(r, i, "value") : p(r, i, "value"));
  }
  // 处理鼠标离开时标签可见性
  handleLabelVisibilityOnExit(e, t) {
    var i;
    t === -1 || !this.pointEntities || (this.options.defaultShowState ? p((i = this.pointData) == null ? void 0 : i[e], this.pointEntities[t]) : this.pointEntities[t].show = !1);
  }
  // 控制多边形
  polygonClickHandler(e) {
    var n, r, a, c;
    if (e === this.defaultCenterKey && this.centerPosition) {
      this.addAllDistricts(), this.setInitialView({ destination: this.centerPosition });
      return;
    }
    if (!(e in u)) {
      console.log("未找到匹配的数据");
      return;
    }
    ((n = this.polygonEntities) == null ? void 0 : n.find((l) => l.name === e)) || this.addPolygon(e), (r = this.polygonEntities) == null || r.forEach((l) => {
      l.show = l.name === e;
    });
    const { lng: i, lat: s } = u[e];
    (c = this.viewer) == null || c.camera.flyTo({
      destination: y.fromDegrees(i, s, ((a = this.options) == null ? void 0 : a.flyToHeight) ?? this.defaultConfig.flyToHeight),
      duration: 1
    });
  }
  // 设置初始视角
  setInitialView(e) {
    this.viewer && this.viewer.camera.flyTo({
      destination: e.destination,
      duration: e.duration || 1
    });
  }
  // 切换图层
  setViewerLayer(e) {
    this.viewer && (this.viewer.imageryLayers.removeAll(), this.viewer.entities.removeAll(), this.dataSource && this.viewer && (this.dataSource.entities.removeAll(), this.viewer.dataSources.remove(this.dataSource), this.setupClustering()), this.pointEntities = null, this.polygonEntities = null, this.loadTileLayer(e));
  }
  // 热力图
  addHeatmap() {
    if (!this.viewer) return;
    const e = u.宝安区.position.geometry.coordinates.flat(2).map(([t, i]) => ({
      x: t,
      y: i,
      value: Number((Math.random() * (2 - 0.1) + 0.1).toFixed(1))
    }));
    new D(this.viewer, {
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
    return e >= d.toDegrees(this.shenzhenBounds.west) && e <= d.toDegrees(this.shenzhenBounds.east) && t >= d.toDegrees(this.shenzhenBounds.south) && t <= d.toDegrees(this.shenzhenBounds.north);
  }
  // 设置视角移动限制
  setupCameraLimits() {
    if (!this.viewer) return;
    const e = this.viewer.scene;
    e.screenSpaceCameraController.enableRotate = !0, e.screenSpaceCameraController.enableTranslate = !0, e.screenSpaceCameraController.enableZoom = !0, e.screenSpaceCameraController.enableTilt = !0, e.screenSpaceCameraController.enableLook = !0, this.removePreUpdateListener = e.preUpdate.addEventListener(() => {
      if (!(this.isCheckingBounds || !this.viewer))
        try {
          this.isCheckingBounds = !0;
          const t = new S(
            Math.floor(this.viewer.canvas.clientWidth / 2),
            Math.floor(this.viewer.canvas.clientHeight / 2)
          ), i = this.viewer.camera.getPickRay(t);
          if (!i) return;
          const s = this.viewer.scene.globe.pick(i, this.viewer.scene);
          if (!s) {
            const c = this.getCameraViewCenter();
            if (!c) return;
            const l = d.toDegrees(c.longitude), h = d.toDegrees(c.latitude);
            this.isPointInShenzhen(l, h) ? this.lastValidCameraPosition = this.viewer.camera.position.clone() : this.lastValidCameraPosition && (this.viewer.camera.position = this.lastValidCameraPosition.clone());
            return;
          }
          const n = C.fromCartesian(s), r = d.toDegrees(n.longitude), a = d.toDegrees(n.latitude);
          this.isPointInShenzhen(r, a) ? this.lastValidCameraPosition = this.viewer.camera.position.clone() : this.lastValidCameraPosition && (this.viewer.camera.position = this.lastValidCameraPosition.clone(), this.viewer.camera.direction = this.viewer.scene.camera.direction.clone());
        } finally {
          this.isCheckingBounds = !1;
        }
    });
  }
  // 获取相机视角中心
  getCameraViewCenter() {
    if (this.viewer)
      try {
        const e = new S(this.viewer.canvas.clientWidth / 2, this.viewer.canvas.clientHeight / 2), t = this.viewer.camera.getPickRay(e);
        if (!t) return;
        const i = this.viewer.scene.globe.pick(t, this.viewer.scene);
        return i ? C.fromCartesian(i) : this.viewer.camera.positionCartographic;
      } catch (e) {
        return console.warn("获取相机视角中心失败", e), this.viewer.camera.positionCartographic;
      }
  }
  destroy() {
    this.viewer && (this.viewer.scene.canvas.removeEventListener("dblclick", this.doubleClickHandler, !1), this.viewer.scene && this.viewer.scene.camera && this.removePreUpdateListener && (this.removePreUpdateListener(), this.removePreUpdateListener = null), this.screenSpaceEventHandler = null, this.screenMouseMoveHandler = null, this.dataSource && (this.viewer.dataSources.remove(this.dataSource), this.dataSource = null), this.lastValidCameraPosition = null, this.lastHoveredEntity = null, this.viewer.destroy(), this.viewer = null, this.pointEntities = null, this.polygonEntities = null, this.imageLayerState = null, this.imageLayerUrl = null, this.tileLoadCallback = null);
  }
}
export {
  j as cesiumService
};
