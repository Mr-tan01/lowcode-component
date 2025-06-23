var D = Object.defineProperty;
var I = (p, e, t) => e in p ? D(p, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : p[e] = t;
var o = (p, e, t) => I(p, typeof e != "symbol" ? e + "" : e, t);
import m from "localforage";
import { CesiumHeatmap as x } from "cesium-heatmap-es6";
import { areaData as g } from "./type.js";
import { createClusterBillboard as k, createInfoCanvas as V, createEntityConfig as U, updateViewerEntityInfo as f, heatmapGradient as M } from "./tools.js";
import { useMessage as A } from "naive-ui";
import { Color as v, Rectangle as O, CustomDataSource as Z, JulianDate as w, VerticalOrigin as B, HorizontalOrigin as R, ScreenSpaceEventType as C, ScreenSpaceEventHandler as S, defined as P, ArcGisMapServerImageryProvider as H, PolylineDashMaterialProperty as N, PolygonHierarchy as z, Cartographic as E, Cartesian3 as y, Math as u, Cartesian2 as T } from "@cesium/engine";
import { Viewer as W } from "@cesium/widgets";
class _ {
  // 缓存有效期7天
  constructor() {
    o(this, "storeName", "WMTS_Tiles");
    o(this, "maxAge", 7 * 24 * 60 * 60 * 1e3);
    m.config({
      driver: [m.INDEXEDDB, m.WEBSQL, m.LOCALSTORAGE],
      name: "CesiumTileCache",
      storeName: this.storeName
    });
  }
  async getTile(e) {
    try {
      const t = `${e.url}_${e.level}_${e.x}_${e.y}`, i = await m.getItem(t);
      return i && Date.now() - i.timestamp < this.maxAge ? i.data : (i && await m.removeItem(t), null);
    } catch (t) {
      return console.error("读取缓存失败:", t), null;
    }
  }
  async putTile(e, t) {
    try {
      const i = `${e.url}_${e.level}_${e.x}_${e.y}`;
      return await m.setItem(i, {
        data: t,
        timestamp: Date.now()
      }), !0;
    } catch (i) {
      return console.error("存储缓存失败:", i), !1;
    }
  }
}
class X {
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
      clusteringEnabled: !0,
      clusteringPixelRange: 30,
      clusteringMinimumClusterSize: 2,
      flyToHeight: 26e3,
      cameraLimitsEnabled: !0,
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
    o(this, "openIndexDB", !1);
    // 深圳市地理边界（根据瓦片定义经纬度范围）
    o(this, "shenzhenBounds", O.fromDegrees(
      113.8,
      // 西边界 - 经度
      22.36,
      // 南边界 - 纬度
      114.6,
      // 东边界 - 经度
      22.7
      // 北边界 - 纬度
    ));
    o(this, "message", A());
    o(this, "tileCache", new _());
    o(this, "doubleClickHandler", (e) => {
      e.preventDefault(), e.stopPropagation(), this.setCameraHeight("ZoomIn");
    });
    this.containerId = e, this.options = t, this.options.config = {
      ...this.defaultConfig,
      ...this.options.config || {}
    }, this.centerPosition = t.centerPosition, this.defaultCenterKey = t.defaultCenterKey, this.openIndexDB = t.openIndexDB, this.tileLoadCallback = this.handleTileLoadProgress.bind(this);
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
    this.dataSource = new Z("clusterSource"), this.viewer.dataSources.add(this.dataSource);
    const e = this.options.config, t = this.dataSource.clustering;
    t.enabled = (e == null ? void 0 : e.clusteringEnabled) ?? this.defaultConfig.clusteringEnabled, t.pixelRange = (e == null ? void 0 : e.clusteringPixelRange) ?? this.defaultConfig.clusteringPixelRange, t.minimumClusterSize = (e == null ? void 0 : e.clusteringMinimumClusterSize) ?? this.defaultConfig.clusteringMinimumClusterSize, t.enabled && t.clusterEvent.addEventListener((i, r) => {
      r.billboard.show = !0, r.label.show = !1;
      const n = {};
      let s = "", a = 0;
      i.forEach((h) => {
        var d;
        if (!h.properties) return;
        const l = (d = h.properties.type) == null ? void 0 : d.getValue(w.now());
        l && (n[l] = (n[l] || 0) + 1, n[l] > a && (a = n[l], s = l));
      });
      const c = k(i.length, s || "primary");
      Object.assign(r.billboard, {
        id: "cluster",
        image: c.toDataURL(),
        width: 50,
        height: 50,
        verticalOrigin: B.CENTER,
        horizontalOrigin: R.CENTER,
        disableDepthTestDistance: void 0
      });
    });
  }
  // 初始化Cesium Viewer
  async initViewer(e) {
    var t;
    this.viewer && this.destroy();
    try {
      this.viewer = new W(this.containerId, e), this.viewer.cesiumWidget.creditContainer.style.display = "none";
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
    this.screenSpaceEventHandler = new S(e).setInputAction(this.handleLeftClick.bind(this), C.LEFT_CLICK), this.screenMouseMoveHandler = new S(e).setInputAction(this.handleMouseMove.bind(this), C.MOUSE_MOVE), this.viewer.scene && this.viewer.scene.camera && this.viewer.scene.camera.changed.addEventListener(() => {
      Math.ceil(this.viewer.camera.positionCartographic.height);
    });
  }
  // 处理左键点击
  handleLeftClick(e) {
    var i;
    if (!this.viewer) return;
    this.viewer.selectedEntity = void 0, (i = this.options) != null && i.offsetState && (e.position.x *= 1.18, e.position.y *= 1.18);
    const t = this.viewer.scene.pick(e.position);
    if (P(t) && t.id) {
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
    var r, n;
    if (!this.viewer) return;
    const t = Date.now();
    if (t - this.lastThrottleTime < this.throttleDelay) return;
    this.lastThrottleTime = t, (r = this.options) != null && r.offsetState && (e.endPosition.x *= 1.18, e.endPosition.y *= 1.18);
    const i = this.viewer.scene.pick(e.endPosition);
    if (!P(i) || !i.id || i.id.name in g) {
      this.lastHoveredEntity && (this.pointHoverExitHandler(this.lastHoveredEntity), this.lastHoveredEntity = null);
      return;
    }
    (n = i.id.name) != null && n.includes("Label") || i.id !== this.lastHoveredEntity && (this.lastHoveredEntity && this.pointHoverExitHandler(this.lastHoveredEntity), this.pointHoverHandler(i.id), this.lastHoveredEntity = i.id);
  }
  // 瓦片加载状完成（首次添加point、polygon）
  handleTileLoadProgress(e) {
    e === 0 && (this.options.loadTileLayerHandler(!1), this.cleanupTileLoadListener());
  }
  // 加载瓦片
  async loadTileLayer(e) {
    let t;
    this.options.loadTileLayerHandler(!0);
    const { viewer: i, imageLayerState: r, imageLayerUrl: n } = this;
    this.cleanupTileLoadListener(), this.updateLayerState(e);
    try {
      t = await this.loadProviderWithFallback({
        targetUrl: n || e,
        useZondy: r,
        fallbackUrl: this.options.config.defaultUrl ?? this.defaultConfig.defaultUrl
      }), i && t && await this.addProviderToViewer(i, t);
    } catch (s) {
      await this.retryLoadProvider(n || e, r), this.handleLoadError(s);
    }
  }
  // 重试
  async retryLoadProvider(e, t) {
    let i = 0;
    for (; i < this.rretryCount; )
      try {
        await new Promise((n) => setTimeout(n, 1e3));
        const r = await this.loadProviderWithFallback({
          targetUrl: e,
          useZondy: t,
          fallbackUrl: this.options.config.defaultUrl ?? this.defaultConfig.defaultUrl
        });
        if (this.viewer && r) {
          await this.addProviderToViewer(this.viewer, r);
          return;
        }
      } catch {
        i++, this.message.error("瓦片加载失败,请刷新重试");
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
      if (e.useZondy ? t = await Zondy.WebMapTileServiceImageryProvider.fromUrl(e.targetUrl) : t = await H.fromUrl(e.targetUrl), this.openIndexDB) {
        const i = t.requestImage.bind(t), r = async (n) => {
          try {
            const s = await this.tileCache.getTile(n);
            return s ? await createImageBitmap(s) : null;
          } catch (s) {
            return console.warn("读取缓存失败:", s), null;
          }
        };
        t.requestImage = async (n, s, a) => {
          const c = {
            url: e.targetUrl,
            x: n,
            y: s,
            level: a
          }, h = await r(c);
          if (h)
            return h;
          try {
            const l = await i(n, s, a);
            if (!l || l.width === 0 || l.height === 0)
              throw new Error("Invalid image dimensions");
            return setTimeout(async () => {
              try {
                const d = document.createElement("canvas");
                d.width = l.width, d.height = l.height;
                const b = d.getContext("2d");
                b && (b.drawImage(l, 0, 0), d.toBlob(async (L) => {
                  L && await this.tileCache.putTile(c, L);
                }));
              } catch (d) {
                console.warn("异步缓存失败:", d);
              }
            }, 0), l;
          } catch (l) {
            return console.warn("获取瓦片失败:", l), await r(c) || i(n, s, a);
          }
        };
      }
      return t;
    } catch {
      try {
        return await H.fromUrl(e.fallbackUrl);
      } catch (i) {
        throw this.options.loadTileLayerHandler(!1), i;
      }
    }
  }
  async addProviderToViewer(e, t) {
    var i, r;
    try {
      e.imageryLayers.addImageryProvider(t), this.tileLoadCallback && ((r = (i = e.scene) == null ? void 0 : i.globe) == null || r.tileLoadProgressEvent.addEventListener(this.tileLoadCallback));
    } catch (n) {
      throw console.error("添加图层失败:", n), n;
    }
  }
  handleLoadError(e) {
    console.error("图层加载流程失败:", e);
  }
  // 添加点标记
  async addPoint(e, t, i) {
    var a;
    if (!this.viewer && !this.dataSource) return null;
    const r = await V(e, t, i), n = await U(e, r.canvas, t), s = ((a = this[i === "Label" ? "viewer" : "dataSource"]) == null ? void 0 : a.entities.add(n)) ?? null;
    return this.pointEntities || (this.pointEntities = []), s && this.pointEntities.push(s), s;
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
    if (!this.viewer || !(e in g)) return;
    const i = ((n) => n.position.geometry.coordinates.flat(2).map(([s, a]) => y.fromDegrees(s, a)))(g[e]), r = this.viewer.entities.add({
      name: e,
      polyline: {
        positions: i,
        material: new N({
          color: v.fromCssColorString("#1E9EFA").withAlpha(0.7)
        }),
        width: 2
      },
      polygon: {
        hierarchy: new z(i),
        material: v.fromCssColorString("#A2D8FF").withAlpha(0.3),
        outline: !0,
        outlineColor: v.fromCssColorString("#4694CD")
      }
    });
    this.polygonEntities = this.polygonEntities || [], this.polygonEntities.push(r);
  }
  // 深圳全市添加Polygon
  addAllDistricts() {
    this.clearEntity("polygonEntities", "viewer"), Object.keys(g).filter((e) => e !== "深圳市").forEach(this.addPolygon.bind(this));
  }
  getClickPosition(e) {
    if (!this.viewer) return;
    const t = this.viewer.scene.pickPosition(e), i = this.getPositionCartographic();
    if (t && i) {
      const r = E.fromCartesian(t);
      return r.height = i[2] < 2e3 ? 200 : 2e3, y.fromRadians(r.longitude, r.latitude, r.height);
    }
    Object.keys(g).filter((r) => r !== this.defaultCenterKey).forEach((r) => {
      this.addPolygon(r);
    });
  }
  // 获取当前地图经纬度、高度
  getPositionCartographic() {
    if (!this.viewer) return;
    const e = this.viewer.camera.positionCartographic, t = u.toDegrees(e.longitude), i = u.toDegrees(e.latitude);
    return [t, i, e.height];
  }
  // 设置地图高度
  setCameraHeight(e) {
    if (e !== "ZoomIn" && e !== "ZoomOut") return;
    const t = this.getPositionCartographic();
    if (!t || !this.viewer) return;
    const { maxZoom: i = this.defaultConfig.maxZoom, minZoom: r = this.defaultConfig.minZoom } = this.options.config ?? {}, n = t[2] >= 3e4 ? 2e4 : t[2] >= 2e4 ? 1e4 : t[2] >= 1e4 ? 8e3 : 1e3, s = t[2] - (e === "ZoomIn" ? n : -n), a = s <= i && s >= r ? s : e === "ZoomIn" ? r : i;
    this.viewer.camera.flyTo({
      destination: y.fromDegrees(t[0], t[1], a),
      duration: 0.3
    });
  }
  // 获取实体名称相关信息
  getEntityNameInfo(e) {
    var r, n, s;
    const t = e != null && e.endsWith("Label") ? e == null ? void 0 : e.replace("Label", "") : e, i = `${t}Label`;
    return {
      baseName: t,
      labelName: i,
      dataIndex: ((r = this.pointData) == null ? void 0 : r.findIndex((a) => a.name === t)) ?? -1,
      entityIndex: ((n = this.pointEntities) == null ? void 0 : n.findIndex((a) => a.name === t)) ?? -1,
      labelEntityIndex: ((s = this.pointEntities) == null ? void 0 : s.findIndex((a) => a.name === i)) ?? -1
    };
  }
  // 控制窗体
  pointClickHandler(e) {
    var c, h, l, d;
    const { name: t } = e, { labelName: i, dataIndex: r, entityIndex: n, labelEntityIndex: s } = this.getEntityNameInfo(t), a = r !== -1 && s === -1 && !this.options.defaultShowState;
    f((c = this.pointData) == null ? void 0 : c[r], (h = this.pointEntities) == null ? void 0 : h[n], "value"), s !== -1 && this.options.defaultShowState && f((l = this.pointData) == null ? void 0 : l[r], (d = this.pointEntities) == null ? void 0 : d[s]), a && this.pointData && this.addPoint(this.pointData[r], void 0, "Label"), this.handleLabelsVisibility(i), this.options.pointHandler(e);
  }
  // 处理标签显示/隐藏
  handleLabelsVisibility(e) {
    if (this.options.defaultShowState || !this.pointEntities) return;
    const t = w.now();
    this.pointEntities.forEach((i) => {
      var r, n, s, a;
      if ((r = i.name) != null && r.endsWith("Label"))
        i.show = i.name === e && !i.show;
      else {
        if (!((n = i.properties) == null ? void 0 : n.getValue(t).changeState)) return;
        const h = ((s = this.pointData) == null ? void 0 : s.findIndex((l) => l.name === i.name)) ?? -1;
        h !== -1 && f((a = this.pointData) == null ? void 0 : a[h], i, "value");
      }
    });
  }
  // 鼠标悬浮处理
  pointHoverHandler(e) {
    const { name: t } = e;
    if (t != null && t.includes("Label")) return;
    const { labelName: i, dataIndex: r, entityIndex: n, labelEntityIndex: s } = this.getEntityNameInfo(t);
    this.handleHoverLabelDisplay(r, i, s), this.applyHoverEffect(r, n), this.hideOtherLabels(i);
  }
  // 处理悬浮时标签显示
  handleHoverLabelDisplay(e, t, i) {
    e === -1 || this.options.defaultShowState || (i === -1 && this.pointData ? this.addPoint(this.pointData[e], void 0, "Label") : i !== -1 && this.pointEntities && (this.pointEntities[i].show = !0));
  }
  // 应用悬浮效果
  applyHoverEffect(e, t) {
    var s;
    if (t === -1 || !this.pointEntities) return;
    const i = this.pointEntities[t];
    if (!i || !i.properties) return;
    const r = w.now();
    i.properties.getValue(r).hoverState || i.properties.addProperty("hoverState", !0), f((s = this.pointData) == null ? void 0 : s[e], i, "value");
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
    const { dataIndex: i, entityIndex: r, labelEntityIndex: n } = this.getEntityNameInfo(t);
    this.restoreEntityState(i, r), this.handleLabelVisibilityOnExit(i, n), this.options.pointHoverExitHandler && this.options.pointHoverExitHandler(e);
  }
  // 恢复实体状态
  restoreEntityState(e, t) {
    var a;
    if (t === -1 || !this.pointEntities) return;
    const i = this.pointEntities[t];
    if (!i || !i.properties) return;
    const r = w.now(), n = i.properties.getValue(r);
    n.hoverState && i.properties.removeProperty("hoverState");
    const s = (a = this.pointData) == null ? void 0 : a[e];
    s && (n.changeState ? s.changeIconType ? f(s, i, "change") : f(s, i, "value") : f(s, i, "value"));
  }
  // 处理鼠标离开时标签可见性
  handleLabelVisibilityOnExit(e, t) {
    var i;
    t === -1 || !this.pointEntities || (this.options.defaultShowState ? f((i = this.pointData) == null ? void 0 : i[e], this.pointEntities[t]) : this.pointEntities[t].show = !1);
  }
  // 控制多边形
  polygonClickHandler(e) {
    var n, s, a, c;
    if (e === this.defaultCenterKey && this.centerPosition) {
      this.addAllDistricts(), this.setInitialView({ destination: this.centerPosition });
      return;
    }
    if (!(e in g)) {
      console.log("未找到匹配的数据");
      return;
    }
    ((n = this.polygonEntities) == null ? void 0 : n.find((h) => h.name === e)) || this.addPolygon(e), (s = this.polygonEntities) == null || s.forEach((h) => {
      h.show = h.name === e;
    });
    const { lng: i, lat: r } = g[e];
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
    this.viewer && (this.viewer.imageryLayers.removeAll(), this.loadTileLayer(e));
  }
  // 热力图
  buildHeatMap(e, t = M) {
    return this.viewer ? new x(this.viewer, {
      zoomToLayer: !1,
      points: e,
      heatmapOptions: {
        radius: 5,
        maxOpacity: 0,
        minOpacity: 0.5,
        gradient: t
      }
    }) : void 0;
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
          const t = new T(Math.floor(this.viewer.canvas.clientWidth / 2), Math.floor(this.viewer.canvas.clientHeight / 2)), i = this.viewer.camera.getPickRay(t);
          if (!i) return;
          const r = this.viewer.scene.globe.pick(i, this.viewer.scene);
          if (!r) {
            const c = this.getCameraViewCenter();
            if (!c) return;
            const h = u.toDegrees(c.longitude), l = u.toDegrees(c.latitude);
            this.isPointInShenzhen(h, l) ? this.lastValidCameraPosition = this.viewer.camera.position.clone() : this.lastValidCameraPosition && (this.viewer.camera.position = this.lastValidCameraPosition.clone());
            return;
          }
          const n = E.fromCartesian(r), s = u.toDegrees(n.longitude), a = u.toDegrees(n.latitude);
          this.isPointInShenzhen(s, a) ? this.lastValidCameraPosition = this.viewer.camera.position.clone() : this.lastValidCameraPosition && (this.viewer.camera.position = this.lastValidCameraPosition.clone(), this.viewer.camera.direction = this.viewer.scene.camera.direction.clone());
        } finally {
          this.isCheckingBounds = !1;
        }
    });
  }
  // 获取相机视角中心
  getCameraViewCenter() {
    if (this.viewer)
      try {
        const e = new T(this.viewer.canvas.clientWidth / 2, this.viewer.canvas.clientHeight / 2), t = this.viewer.camera.getPickRay(e);
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
  X as cesiumService
};
