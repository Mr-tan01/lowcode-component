var T = Object.defineProperty;
var D = (m, e, t) => e in m ? T(m, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : m[e] = t;
var o = (m, e, t) => D(m, typeof e != "symbol" ? e + "" : e, t);
import g from "localforage";
import { CesiumHeatmap as I } from "cesium-heatmap-es6";
import { areaData as f } from "./type.js";
import { createClusterBillboard as x, createInfoCanvas as V, createEntityConfig as k, updateViewerEntityInfo as p } from "./tools.js";
import { useMessage as U } from "naive-ui";
import { Color as v, Rectangle as M, CustomDataSource as A, JulianDate as w, VerticalOrigin as Z, HorizontalOrigin as O, ScreenSpaceEventType as C, ScreenSpaceEventHandler as L, defined as S, ArcGisMapServerImageryProvider as P, PolylineDashMaterialProperty as N, PolygonHierarchy as R, Cartographic as E, Cartesian3 as y, Math as d, Cartesian2 as H } from "@cesium/engine";
import { Viewer as B } from "@cesium/widgets";
class z {
  // 缓存有效期7天
  constructor() {
    o(this, "storeName", "WMTS_Tiles");
    o(this, "maxAge", 7 * 24 * 60 * 60 * 1e3);
    g.config({
      driver: [g.INDEXEDDB, g.WEBSQL, g.LOCALSTORAGE],
      name: "CesiumTileCache",
      storeName: this.storeName
    });
  }
  async getTile(e) {
    try {
      const t = `${e.url}_${e.level}_${e.x}_${e.y}`, i = await g.getItem(t);
      return i && Date.now() - i.timestamp < this.maxAge ? i.data : (i && await g.removeItem(t), null);
    } catch (t) {
      return console.error("读取缓存失败:", t), null;
    }
  }
  async putTile(e, t) {
    try {
      const i = `${e.url}_${e.level}_${e.x}_${e.y}`;
      return await g.setItem(i, {
        data: t,
        timestamp: Date.now()
      }), !0;
    } catch (i) {
      return console.error("存储缓存失败:", i), !1;
    }
  }
}
class J {
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
      baseColor: v.TRANSPARENT,
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
    o(this, "rretryCount", 3);
    // 深圳市地理边界（根据瓦片定义经纬度范围）
    o(this, "shenzhenBounds", M.fromDegrees(
      113.8,
      // 西边界 - 经度
      22.36,
      // 南边界 - 纬度
      114.6,
      // 东边界 - 经度
      22.7
      // 北边界 - 纬度
    ));
    o(this, "message", U());
    o(this, "tileCache", new z());
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
    this.dataSource = new A("clusterSource"), this.viewer.dataSources.add(this.dataSource);
    const e = this.options.config, t = this.dataSource.clustering;
    t.enabled = (e == null ? void 0 : e.clusteringEnabled) ?? this.defaultConfig.clusteringEnabled, t.pixelRange = (e == null ? void 0 : e.clusteringPixelRange) ?? this.defaultConfig.clusteringPixelRange, t.minimumClusterSize = (e == null ? void 0 : e.clusteringMinimumClusterSize) ?? this.defaultConfig.clusteringMinimumClusterSize, t.enabled && t.clusterEvent.addEventListener((i, r) => {
      r.billboard.show = !0, r.label.show = !1;
      const s = {};
      let n = "", a = 0;
      i.forEach((l) => {
        var u;
        if (!l.properties) return;
        const h = (u = l.properties.type) == null ? void 0 : u.getValue(w.now());
        h && (s[h] = (s[h] || 0) + 1, s[h] > a && (a = s[h], n = h));
      });
      const c = x(i.length, n || "primary");
      Object.assign(r.billboard, {
        id: "cluster",
        image: c.toDataURL(),
        width: 50,
        height: 50,
        verticalOrigin: Z.CENTER,
        horizontalOrigin: O.CENTER,
        disableDepthTestDistance: Number.POSITIVE_INFINITY
      });
    });
  }
  // 初始化Cesium Viewer
  async initViewer(e) {
    var t;
    this.viewer && this.destroy();
    try {
      this.viewer = new B(this.containerId, e), this.viewer.cesiumWidget.creditContainer.style.display = "none";
      const { scene: i } = this.viewer;
      return i.debugShowFramesPerSecond = !1, i.globe.depthTestAgainstTerrain = !0, i.screenSpaceCameraController.enableTranslate = !0, this.updateViewerAttribute(), this.viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(C.LEFT_DOUBLE_CLICK), this.viewer.scene.canvas.addEventListener("dblclick", this.doubleClickHandler, !1), this.setupClustering(), (((t = this.options.config) == null ? void 0 : t.cameraLimitsEnabled) ?? this.defaultConfig.cameraLimitsEnabled) && this.setupCameraLimits(), this.setupEventHandlers(), !0;
    } catch (i) {
      return console.error("初始化Cesium失败:", i), !1;
    }
  }
  // 设置事件处理器
  setupEventHandlers() {
    if (!this.viewer) return;
    const e = this.viewer.scene.canvas;
    this.screenSpaceEventHandler = new L(e).setInputAction(this.handleLeftClick.bind(this), C.LEFT_CLICK), this.screenMouseMoveHandler = new L(e).setInputAction(this.handleMouseMove.bind(this), C.MOUSE_MOVE), this.viewer.scene && this.viewer.scene.camera && this.viewer.scene.camera.changed.addEventListener(() => {
      Math.ceil(this.viewer.camera.positionCartographic.height);
    });
  }
  // 处理左键点击
  handleLeftClick(e) {
    var i;
    if (!this.viewer) return;
    this.viewer.selectedEntity = void 0, (i = this.options) != null && i.offsetState && (e.position.x *= 1.18, e.position.y *= 1.18);
    const t = this.viewer.scene.pick(e.position);
    if (S(t) && t.id) {
      if (t.id === "cluster") {
        const r = this.getClickPosition(e.position);
        r && this.viewer.camera.flyTo({
          destination: r,
          duration: 0.3
        });
      }
      this.options.config.hoverState ? this.pointClickHandler(t.id) : this.options.pointHandler(t.id);
    }
  }
  // 处理鼠标移动
  handleMouseMove(e) {
    var r, s;
    if (!this.viewer) return;
    const t = Date.now();
    if (t - this.lastThrottleTime < this.throttleDelay) return;
    this.lastThrottleTime = t, (r = this.options) != null && r.offsetState && (e.endPosition.x *= 1.18, e.endPosition.y *= 1.18);
    const i = this.viewer.scene.pick(e.endPosition);
    if (!S(i) || !i.id || i.id.name in f) {
      this.lastHoveredEntity && (this.pointHoverExitHandler(this.lastHoveredEntity), this.lastHoveredEntity = null);
      return;
    }
    (s = i.id.name) != null && s.includes("Label") || i.id !== this.lastHoveredEntity && (this.lastHoveredEntity && this.pointHoverExitHandler(this.lastHoveredEntity), this.pointHoverHandler(i.id), this.lastHoveredEntity = i.id);
  }
  // 瓦片加载状完成（首次添加point、polygon）
  handleTileLoadProgress(e) {
    e === 0 && (this.options.loadTileLayerHandler(!1), this.cleanupTileLoadListener());
  }
  // 加载瓦片图层
  async loadTileLayer(e) {
    let t;
    this.options.loadTileLayerHandler(!0);
    const { viewer: i, imageLayerState: r, imageLayerUrl: s } = this;
    this.cleanupTileLoadListener(), this.updateLayerState(e);
    try {
      t = await this.loadProviderWithFallback({
        targetUrl: s || e,
        useZondy: r,
        fallbackUrl: this.options.config.defaultUrl ?? this.defaultConfig.defaultUrl
      }), i && t && await this.addProviderToViewer(i, t);
    } catch (n) {
      this.rretryCount > 0 && (new Promise((a) => a(setTimeout(a, 1e3))), t = await this.loadProviderWithFallback({
        targetUrl: s || e,
        useZondy: r,
        fallbackUrl: this.options.config.defaultUrl ?? this.defaultConfig.defaultUrl
      })), this.handleLoadError(n);
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
      let t;
      e.useZondy ? t = await Zondy.WebMapTileServiceImageryProvider.fromUrl(e.targetUrl) : t = await P.fromUrl(e.targetUrl);
      const i = t.requestImage.bind(t);
      return t.requestImage = async (r, s, n) => {
        try {
          const a = {
            url: e.targetUrl,
            x: r,
            y: s,
            level: n
          }, c = await this.tileCache.getTile(a);
          if (c)
            return createImageBitmap(c);
          const l = await i(r, s, n);
          if (l instanceof ImageBitmap) {
            const h = document.createElement("canvas");
            h.width = l.width, h.height = l.height;
            const u = h.getContext("2d");
            u && (u.drawImage(l, 0, 0), h.toBlob(async (b) => {
              b && await this.tileCache.putTile(a, b), l.close();
            }));
          }
          return l;
        } catch (a) {
          return console.error("Tile load failed:", a), i(r, s, n);
        }
      }, t;
    } catch {
      e.useZondy && this.message.error("(Zondy)瓦片加载失败, 请刷新重试");
      try {
        return await P.fromUrl(e.fallbackUrl);
      } catch (i) {
        throw this.message.error("默认瓦片加载失败，请刷新重试"), this.options.loadTileLayerHandler(!1), i;
      }
    }
  }
  async addProviderToViewer(e, t) {
    var i, r;
    try {
      e.imageryLayers.addImageryProvider(t), this.tileLoadCallback && ((r = (i = e.scene) == null ? void 0 : i.globe) == null || r.tileLoadProgressEvent.addEventListener(this.tileLoadCallback));
    } catch (s) {
      throw console.error("添加图层失败:", s), s;
    }
  }
  handleLoadError(e) {
    console.error("图层加载流程失败:", e);
  }
  // 添加点标记
  async addPoint(e, t, i) {
    if (!this.viewer && !this.dataSource || !this.dataSource) return null;
    const r = await V(e, t, i), s = await k(e, r.canvas, t), n = this.dataSource.entities.add(s);
    return this.pointEntities || (this.pointEntities = []), this.pointEntities.push(n), n;
  }
  // 清除指定entity
  async clearEntity(e, t) {
    var i;
    if (!(!this[t] || !this[e])) {
      for (const r of this[e])
        (i = this[t]) == null || i.entities.remove(r);
      this[e] = [];
    }
  }
  addPolygon(e) {
    if (!this.viewer || !(e in f)) return;
    const i = ((s) => s.position.geometry.coordinates.flat(2).map(([n, a]) => y.fromDegrees(n, a)))(f[e]), r = this.viewer.entities.add({
      name: e,
      polyline: {
        positions: i,
        material: new N({
          color: v.fromCssColorString("#1E9EFA").withAlpha(0.7)
        }),
        width: 2
      },
      polygon: {
        hierarchy: new R(i),
        material: v.fromCssColorString("#A2D8FF").withAlpha(0.3),
        outline: !0,
        outlineColor: v.fromCssColorString("#4694CD")
      }
    });
    this.polygonEntities = this.polygonEntities || [], this.polygonEntities.push(r);
  }
  // 深圳全市添加Polygon
  addAllDistricts() {
    this.clearEntity("polygonEntities", "viewer"), Object.keys(f).filter((e) => e !== "深圳市").forEach(this.addPolygon.bind(this));
  }
  getClickPosition(e) {
    if (!this.viewer) return;
    const t = this.viewer.scene.pickPosition(e), i = this.getPositionCartographic();
    if (t && i) {
      const r = E.fromCartesian(t);
      return r.height = i[2] < 2e3 ? 200 : 2e3, y.fromRadians(r.longitude, r.latitude, r.height);
    }
    Object.keys(f).filter((r) => r !== this.defaultCenterKey).forEach((r) => {
      this.addPolygon(r);
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
    const { maxZoom: i = this.defaultConfig.maxZoom, minZoom: r = this.defaultConfig.minZoom } = this.options.config ?? {}, s = t[2] >= 3e4 ? 2e4 : t[2] >= 2e4 ? 1e4 : t[2] >= 1e4 ? 8e3 : 1e3, n = t[2] - (e === "ZoomIn" ? s : -s), a = n <= i && n >= r ? n : e === "ZoomIn" ? r : i;
    this.viewer.camera.flyTo({
      destination: y.fromDegrees(t[0], t[1], a),
      duration: 0.3
    });
  }
  // 获取实体名称相关信息
  getEntityNameInfo(e) {
    var r, s, n;
    const t = e != null && e.endsWith("Label") ? e == null ? void 0 : e.replace("Label", "") : e, i = `${t}Label`;
    return {
      baseName: t,
      labelName: i,
      dataIndex: ((r = this.pointData) == null ? void 0 : r.findIndex((a) => a.name === t)) ?? -1,
      entityIndex: ((s = this.pointEntities) == null ? void 0 : s.findIndex((a) => a.name === t)) ?? -1,
      labelEntityIndex: ((n = this.pointEntities) == null ? void 0 : n.findIndex((a) => a.name === i)) ?? -1
    };
  }
  // 控制窗体
  pointClickHandler(e) {
    var c, l, h, u;
    const { name: t } = e, { labelName: i, dataIndex: r, entityIndex: s, labelEntityIndex: n } = this.getEntityNameInfo(t);
    r !== -1 && n === -1 && !this.options.defaultShowState && this.pointData && this.addPoint(this.pointData[r], void 0, "Label"), p((c = this.pointData) == null ? void 0 : c[r], (l = this.pointEntities) == null ? void 0 : l[s], "value"), n !== -1 && this.options.defaultShowState && p((h = this.pointData) == null ? void 0 : h[r], (u = this.pointEntities) == null ? void 0 : u[n]), this.handleLabelsVisibility(i), this.options.pointHandler(e);
  }
  // 处理标签显示/隐藏
  handleLabelsVisibility(e) {
    if (this.options.defaultShowState || !this.pointEntities) return;
    const t = w.now();
    this.pointEntities.forEach((i) => {
      var r, s, n, a;
      if ((r = i.name) != null && r.endsWith("Label"))
        i.show = i.name === e && !i.show;
      else {
        if (!((s = i.properties) == null ? void 0 : s.getValue(t).changeState)) return;
        const l = ((n = this.pointData) == null ? void 0 : n.findIndex((h) => h.name === i.name)) ?? -1;
        l !== -1 && p((a = this.pointData) == null ? void 0 : a[l], i, "value");
      }
    });
  }
  // 鼠标悬浮处理
  pointHoverHandler(e) {
    const { name: t } = e;
    if (t != null && t.includes("Label")) return;
    const { labelName: i, dataIndex: r, entityIndex: s, labelEntityIndex: n } = this.getEntityNameInfo(t);
    this.handleHoverLabelDisplay(r, i, n), this.applyHoverEffect(r, s), this.hideOtherLabels(i);
  }
  // 处理悬浮时标签显示
  handleHoverLabelDisplay(e, t, i) {
    e === -1 || this.options.defaultShowState || (i === -1 && this.pointData ? this.addPoint(this.pointData[e], void 0, "Label").then(() => {
      var s;
      const r = ((s = this.pointEntities) == null ? void 0 : s.findIndex((n) => n.name === t)) ?? -1;
      r !== -1 && this.pointEntities && (this.pointEntities[r].show = !0);
    }) : i !== -1 && this.pointEntities && (this.pointEntities[i].show = !0));
  }
  // 应用悬浮效果
  applyHoverEffect(e, t) {
    var n;
    if (t === -1 || !this.pointEntities) return;
    const i = this.pointEntities[t];
    if (!i || !i.properties) return;
    const r = w.now();
    i.properties.getValue(r).hoverState || i.properties.addProperty("hoverState", !0), p((n = this.pointData) == null ? void 0 : n[e], i, "value");
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
    const { dataIndex: i, entityIndex: r, labelEntityIndex: s } = this.getEntityNameInfo(t);
    this.restoreEntityState(i, r), this.handleLabelVisibilityOnExit(i, s), this.options.pointHoverExitHandler && this.options.pointHoverExitHandler(e);
  }
  // 恢复实体状态
  restoreEntityState(e, t) {
    var a;
    if (t === -1 || !this.pointEntities) return;
    const i = this.pointEntities[t];
    if (!i || !i.properties) return;
    const r = w.now(), s = i.properties.getValue(r);
    s.hoverState && i.properties.removeProperty("hoverState");
    const n = (a = this.pointData) == null ? void 0 : a[e];
    n && (s.changeState ? n.changeIconType ? p(n, i, "change") : p(n, i, "value") : p(n, i, "value"));
  }
  // 处理鼠标离开时标签可见性
  handleLabelVisibilityOnExit(e, t) {
    var i;
    t === -1 || !this.pointEntities || (this.options.defaultShowState ? p((i = this.pointData) == null ? void 0 : i[e], this.pointEntities[t]) : this.pointEntities[t].show = !1);
  }
  // 控制多边形
  polygonClickHandler(e) {
    var s, n, a, c;
    if (e === this.defaultCenterKey && this.centerPosition) {
      this.addAllDistricts(), this.setInitialView({ destination: this.centerPosition });
      return;
    }
    if (!(e in f)) {
      console.log("未找到匹配的数据");
      return;
    }
    ((s = this.polygonEntities) == null ? void 0 : s.find((l) => l.name === e)) || this.addPolygon(e), (n = this.polygonEntities) == null || n.forEach((l) => {
      l.show = l.name === e;
    });
    const { lng: i, lat: r } = f[e];
    (c = this.viewer) == null || c.camera.flyTo({
      destination: y.fromDegrees(i, r, ((a = this.options) == null ? void 0 : a.flyToHeight) ?? this.defaultConfig.flyToHeight),
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
    const e = f.宝安区.position.geometry.coordinates.flat(2).map(([t, i]) => ({
      x: t,
      y: i,
      value: Number((Math.random() * (2 - 0.1) + 0.1).toFixed(1))
    }));
    new I(this.viewer, {
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
          const t = new H(Math.floor(this.viewer.canvas.clientWidth / 2), Math.floor(this.viewer.canvas.clientHeight / 2)), i = this.viewer.camera.getPickRay(t);
          if (!i) return;
          const r = this.viewer.scene.globe.pick(i, this.viewer.scene);
          if (!r) {
            const c = this.getCameraViewCenter();
            if (!c) return;
            const l = d.toDegrees(c.longitude), h = d.toDegrees(c.latitude);
            this.isPointInShenzhen(l, h) ? this.lastValidCameraPosition = this.viewer.camera.position.clone() : this.lastValidCameraPosition && (this.viewer.camera.position = this.lastValidCameraPosition.clone());
            return;
          }
          const s = E.fromCartesian(r), n = d.toDegrees(s.longitude), a = d.toDegrees(s.latitude);
          this.isPointInShenzhen(n, a) ? this.lastValidCameraPosition = this.viewer.camera.position.clone() : this.lastValidCameraPosition && (this.viewer.camera.position = this.lastValidCameraPosition.clone(), this.viewer.camera.direction = this.viewer.scene.camera.direction.clone());
        } finally {
          this.isCheckingBounds = !1;
        }
    });
  }
  // 获取相机视角中心
  getCameraViewCenter() {
    if (this.viewer)
      try {
        const e = new H(this.viewer.canvas.clientWidth / 2, this.viewer.canvas.clientHeight / 2), t = this.viewer.camera.getPickRay(e);
        if (!t) return;
        const i = this.viewer.scene.globe.pick(t, this.viewer.scene);
        return i ? E.fromCartesian(i) : this.viewer.camera.positionCartographic;
      } catch (e) {
        return console.warn("获取相机视角中心失败", e), this.viewer.camera.positionCartographic;
      }
  }
  destroy() {
    this.viewer && (this.viewer.scene.canvas.removeEventListener("dblclick", this.doubleClickHandler, !1), this.viewer.scene && this.viewer.scene.camera && this.removePreUpdateListener && (this.removePreUpdateListener(), this.removePreUpdateListener = null), this.screenSpaceEventHandler = null, this.screenMouseMoveHandler = null, this.dataSource && (this.viewer.dataSources.remove(this.dataSource), this.dataSource = null), this.lastValidCameraPosition = null, this.lastHoveredEntity = null, this.viewer.destroy(), this.viewer = null, this.pointEntities = null, this.polygonEntities = null, this.imageLayerState = null, this.imageLayerUrl = null, this.tileLoadCallback = null);
  }
}
export {
  J as cesiumService
};
