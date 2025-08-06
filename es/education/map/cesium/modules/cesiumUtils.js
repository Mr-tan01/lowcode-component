var x = Object.defineProperty;
var M = (m, e, t) => e in m ? x(m, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : m[e] = t;
var l = (m, e, t) => M(m, typeof e != "symbol" ? e + "" : e, t);
import w from "localforage";
import { CesiumHeatmap as k } from "cesium-heatmap-es6";
import { areaData as y } from "./type.js";
import { createClusterBillboard as V, createInfoCanvas as U, createEntityConfig as A, updateViewerEntityInfo as p, heatmapGradient as R } from "./tools.js";
import { useMessage as B } from "naive-ui";
import { Color as b, Rectangle as N, CustomDataSource as O, JulianDate as E, VerticalOrigin as Z, HorizontalOrigin as z, ScreenSpaceEventType as L, ScreenSpaceEventHandler as S, Cartographic as C, Cartesian3 as g, Math as u, BoundingSphere as P, defined as D, ArcGisMapServerImageryProvider as H, PolylineDashMaterialProperty as F, PolygonHierarchy as _, ImageryLayer as W, Primitive as $, Entity as K, Cartesian2 as I } from "@cesium/engine";
import { Viewer as j } from "@cesium/widgets";
class q {
  // 缓存有效期7天
  constructor() {
    l(this, "storeName", "WMTS_Tiles");
    l(this, "maxAge", 7 * 24 * 60 * 60 * 1e3);
    w.config({
      driver: [w.INDEXEDDB, w.WEBSQL, w.LOCALSTORAGE],
      name: "CesiumTileCache",
      storeName: this.storeName
    });
  }
  async getTile(e) {
    try {
      const t = `${e.url}_${e.level}_${e.x}_${e.y}`, i = await w.getItem(t);
      return i && Date.now() - i.timestamp < this.maxAge ? i.data : (i && await w.removeItem(t), null);
    } catch (t) {
      return console.error("读取缓存失败:", t), null;
    }
  }
  async putTile(e, t) {
    try {
      const i = `${e.url}_${e.level}_${e.x}_${e.y}`;
      return await w.setItem(i, {
        data: t,
        timestamp: Date.now()
      }), !0;
    } catch (i) {
      return console.error("存储缓存失败:", i), !1;
    }
  }
}
class ne {
  constructor(e, t) {
    l(this, "viewer", null);
    l(this, "pointData", []);
    l(this, "pointEntities", []);
    l(this, "polygonEntities", []);
    l(this, "screenSpaceEventHandler", null);
    l(this, "screenMouseMoveHandler", null);
    l(this, "imageLayerState", !0);
    l(this, "imageLayerUrl", null);
    l(this, "tileLoadCallback", null);
    l(this, "dataSource", null);
    l(this, "centerPosition", null);
    l(this, "defaultCenterKey", "深圳市");
    l(this, "defaultConfig", {
      minZoom: 200,
      maxZoom: 13e4,
      baseColor: b.TRANSPARENT,
      clusteringEnabled: !0,
      clusteringPixelRange: 30,
      clusteringMinimumClusterSize: 2,
      flyToHeight: 26e3,
      cameraLimitsEnabled: !0,
      hoverState: !0,
      defaultUrl: "https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer"
    });
    l(this, "lastValidCameraPosition", null);
    l(this, "isCheckingBounds", !1);
    l(this, "removePreUpdateListener", null);
    // 修改为函数类型
    l(this, "lastHoveredEntity", null);
    l(this, "lastThrottleTime", 0);
    l(this, "throttleDelay", 100);
    l(this, "rretryCount", 3);
    l(this, "openIndexDB", !1);
    // 深圳市地理边界（根据瓦片定义经纬度范围）
    l(this, "shenzhenBounds", N.fromDegrees(
      113.8,
      // 西边界 - 经度
      22.36,
      // 南边界 - 纬度
      114.6,
      // 东边界 - 经度
      22.7
      // 北边界 - 纬度
    ));
    l(this, "message", B());
    l(this, "tileCache", new q());
    l(this, "doubleClickHandler", (e) => {
      e.preventDefault(), e.stopPropagation(), this.setCameraHeight("ZoomIn");
    });
    this.containerId = e, this.options = t, this.options.config = {
      ...this.defaultConfig,
      ...this.options.config || {}
    }, this.centerPosition = t.centerPosition, this.defaultCenterKey = t.defaultCenterKey, this.openIndexDB = t.openIndexDB, this.tileLoadCallback = this.handleTileLoadProgress.bind(this);
  }
  /**
   * 对经纬度完全相同的数据点进行均匀环形偏移
   * @param list      原始数据数组
   * @param lngKey    经度字段名
   * @param latKey    纬度字段名
   * @param distance  偏移距离（米），默认 200
   * @returns         已做偏移的新数组
   */
  offsetDuplicateCoordinates(e, t, i, r = 200) {
    const n = /* @__PURE__ */ new Map();
    return e.forEach((a) => {
      const o = `${a[t]},${a[i]}`;
      n.has(o) || n.set(o, []), n.get(o).push(a);
    }), Array.from(n.values()).flatMap((a) => a.length === 1 ? a : a.map((o, d) => {
      const h = d * 2 * Math.PI / a.length, c = Number(o[t]), f = Number(o[i]), v = r * Math.cos(h) / (6371e3 * Math.cos(f * (Math.PI / 180))), T = r * Math.sin(h) / 6371e3;
      return {
        ...o,
        [t]: Number((c + v * (180 / Math.PI)).toFixed(6)),
        [i]: Number((f + T * (180 / Math.PI)).toFixed(6))
      };
    }));
  }
  // Cesium属性更新
  updateViewerAttribute() {
    if (!this.viewer) return;
    const e = this.options.config, { scene: t } = this.viewer;
    t.screenSpaceCameraController.minimumZoomDistance = (e == null ? void 0 : e.minZoom) ?? this.defaultConfig.minZoom, t.screenSpaceCameraController.maximumZoomDistance = (e == null ? void 0 : e.maxZoom) ?? this.defaultConfig.maxZoom, t.globe.baseColor = (e == null ? void 0 : e.baseColor) ?? this.defaultConfig.baseColor;
  }
  // 添加点聚合配置方法
  getTypeColor(e) {
    const t = {
      primary: "#1E9EFA",
      success: "#67C23A",
      warning: "#E6A23C",
      danger: "#E41F1F",
      default: "#1E9EFA"
    };
    return t[e] || t.default;
  }
  setupClustering() {
    if (!this.viewer) return;
    this.dataSource = new O("clusterSource"), this.viewer.dataSources.add(this.dataSource);
    const e = this.options.config, t = this.dataSource.clustering;
    t.enabled = (e == null ? void 0 : e.clusteringEnabled) ?? this.defaultConfig.clusteringEnabled, t.pixelRange = (e == null ? void 0 : e.clusteringPixelRange) ?? this.defaultConfig.clusteringPixelRange, t.minimumClusterSize = (e == null ? void 0 : e.clusteringMinimumClusterSize) ?? this.defaultConfig.clusteringMinimumClusterSize, t.enabled && t.clusterEvent.addEventListener((i, r) => {
      r.billboard.show = !0, r.label.show = !1;
      const s = {}, n = {};
      let a = "", o = 0;
      i.forEach((h) => {
        var v;
        if (!h.properties) return;
        const c = (v = h.properties.type) == null ? void 0 : v.getValue(E.now());
        if (!c) return;
        const f = this.getTypeColor(c);
        s[c] = (s[c] || 0) + 1, n[c] = f, s[c] > o && (o = s[c], a = c);
      });
      const d = V(i.length, a || "primary", s, n);
      Object.assign(r.billboard, {
        id: {
          type: "cluster",
          entities: i,
          // 保存所有被聚合的实体
          count: i.length,
          // 存数量
          types: s,
          // 保存类型统计信息
          colors: n
          // 保存类型颜色信息
        },
        image: d.toDataURL(),
        width: 50,
        height: 50,
        verticalOrigin: Z.CENTER,
        horizontalOrigin: z.CENTER,
        disableDepthTestDistance: void 0
      });
    });
  }
  // 初始化Cesium Viewer
  async initViewer(e) {
    var t;
    this.viewer && this.destroy();
    try {
      this.viewer = new j(this.containerId, e), this.viewer.cesiumWidget.creditContainer.style.display = "none";
      const { scene: i } = this.viewer;
      return i.debugShowFramesPerSecond = !1, i.globe.depthTestAgainstTerrain = !0, i.screenSpaceCameraController.enableTranslate = !0, this.updateViewerAttribute(), this.viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(L.LEFT_DOUBLE_CLICK), this.viewer.scene.canvas.addEventListener("dblclick", this.doubleClickHandler, !1), this.setupClustering(), (((t = this.options.config) == null ? void 0 : t.cameraLimitsEnabled) ?? this.defaultConfig.cameraLimitsEnabled) && this.setupCameraLimits(), this.setupEventHandlers(), !0;
    } catch (i) {
      return console.error("初始化Cesium失败:", i), !1;
    }
  }
  // 设置事件处理器
  setupEventHandlers() {
    if (!this.viewer) return;
    const e = this.viewer.scene.canvas;
    this.screenSpaceEventHandler = new S(e).setInputAction(
      this.handleLeftClick.bind(this),
      L.LEFT_CLICK
    ), this.screenMouseMoveHandler = new S(e).setInputAction(
      this.handleMouseMove.bind(this),
      L.MOUSE_MOVE
    );
  }
  /**
   * 根据点位集合计算最佳飞行高度
   * @param entities 聚合实体数组
   * @param scale 视野系数（>1 留边）
   */
  calcHeightByExtent(e, t = 2.8) {
    const i = e.map((n) => {
      var a;
      return (a = n.position) == null ? void 0 : a.getValue(E.now());
    }).filter((n) => n);
    if (i.length < 2) return { longitude: 0, latitude: 0, height: 500 };
    if (i.length === 2) {
      const [n, a] = i, o = C.fromCartesian(n), d = C.fromCartesian(a), h = g.distance(
        g.fromDegrees(u.toDegrees(o.longitude), u.toDegrees(o.latitude)),
        g.fromDegrees(u.toDegrees(d.longitude), u.toDegrees(d.latitude))
      ), c = P.fromPoints(i).center, f = C.fromCartesian(c);
      return {
        longitude: u.toDegrees(f.longitude),
        latitude: u.toDegrees(f.latitude),
        height: h * t
        // 距离越近高度越低
      };
    }
    const r = P.fromPoints(i), s = C.fromCartesian(r.center);
    return {
      longitude: u.toDegrees(s.longitude),
      latitude: u.toDegrees(s.latitude),
      height: r.radius * t
    };
  }
  // 处理左键点击
  handleLeftClick(e) {
    var i;
    if (!this.viewer) return;
    this.viewer.selectedEntity = void 0, (i = this.options) != null && i.offsetState && (e.position.x *= 1.18, e.position.y *= 1.18);
    const t = this.viewer.scene.pick(e.position);
    if (D(t) && t.id) {
      if (t.id.type === "cluster") {
        const r = t.id.entities, { longitude: s, latitude: n, height: a } = this.calcHeightByExtent(r, 4);
        this.viewer.camera.flyTo({
          destination: g.fromDegrees(s, n, a),
          duration: 0.5
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
    if (!D(i) || !i.id || i.id.name in y) {
      this.lastHoveredEntity && (this.pointHoverExitHandler(this.lastHoveredEntity), this.lastHoveredEntity = null);
      return;
    }
    (s = i.id.name) != null && s.includes("Label") || i.id !== this.lastHoveredEntity && (this.lastHoveredEntity && this.pointHoverExitHandler(this.lastHoveredEntity), this.pointHoverHandler(i.id), this.lastHoveredEntity = i.id);
  }
  // 瓦片加载状完成（首次添加point、polygon）
  handleTileLoadProgress(e) {
    e === 0 && (this.options.loadTileLayerHandler(!1), this.cleanupTileLoadListener());
  }
  // 加载瓦片
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
      await this.retryLoadProvider(s || e, r), this.handleLoadError(n);
    }
  }
  // 重试
  async retryLoadProvider(e, t) {
    let i = 0;
    for (; i < this.rretryCount; )
      try {
        await new Promise((s) => setTimeout(s, 1e3));
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
        const i = t.requestImage.bind(t), r = async (s) => {
          try {
            const n = await this.tileCache.getTile(s);
            return n ? await createImageBitmap(n) : null;
          } catch (n) {
            return console.warn("读取缓存失败:", n), null;
          }
        };
        t.requestImage = async (s, n, a) => {
          const o = {
            url: e.targetUrl,
            x: s,
            y: n,
            level: a
          }, d = await r(o);
          if (d)
            return d;
          try {
            const h = await i(s, n, a);
            if (!h || h.width === 0 || h.height === 0)
              throw new Error("Invalid image dimensions");
            return setTimeout(async () => {
              try {
                const c = document.createElement("canvas");
                c.width = h.width, c.height = h.height;
                const f = c.getContext("2d");
                f && (f.drawImage(h, 0, 0), c.toBlob(async (v) => {
                  v && await this.tileCache.putTile(o, v);
                }));
              } catch (c) {
                console.warn("异步缓存失败:", c);
              }
            }, 0), h;
          } catch (h) {
            return console.warn("获取瓦片失败:", h), await r(o) || i(s, n, a);
          }
        };
      }
      return t;
    } catch {
      try {
        return await H.fromUrl(e.fallbackUrl);
      } catch (t) {
        throw this.options.loadTileLayerHandler(!1), t;
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
    var a;
    if (!this.viewer && !this.dataSource) return null;
    const r = await U(e, t, i), s = await A(e, r.canvas, t), n = ((a = this[i === "Label" ? "viewer" : "dataSource"]) == null ? void 0 : a.entities.add(s)) ?? null;
    return this.pointEntities || (this.pointEntities = []), n && this.pointEntities.push(n), n;
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
    if (!this.viewer || !(e in y)) return;
    const i = ((s) => s.position.geometry.coordinates.flat(2).map(([n, a]) => g.fromDegrees(n, a)))(y[e]), r = this.viewer.entities.add({
      name: e,
      polyline: {
        positions: i,
        material: new F({
          color: b.fromCssColorString("#1E9EFA").withAlpha(0.7)
        }),
        width: 2
      },
      polygon: {
        hierarchy: new _(i),
        material: b.fromCssColorString("#A2D8FF").withAlpha(0.3),
        outline: !0,
        outlineColor: b.fromCssColorString("#4694CD")
      }
    });
    this.polygonEntities = this.polygonEntities || [], this.polygonEntities.push(r);
  }
  // 深圳全市添加Polygon
  addAllDistricts() {
    this.clearEntity("polygonEntities", "viewer"), Object.keys(y).filter((e) => e !== "深圳市").forEach(this.addPolygon.bind(this));
  }
  getClickPosition(e) {
    if (!this.viewer) return;
    const t = this.viewer.scene.pickPosition(e), i = this.getPositionCartographic();
    if (t && i) {
      const r = C.fromCartesian(t);
      return r.height = i[2] < 2e3 ? 200 : 2e3, g.fromRadians(r.longitude, r.latitude, r.height);
    }
    Object.keys(y).filter((r) => r !== this.defaultCenterKey).forEach((r) => {
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
    const { maxZoom: i = this.defaultConfig.maxZoom, minZoom: r = this.defaultConfig.minZoom } = this.options.config ?? {}, s = t[2] >= 3e4 ? 2e4 : t[2] >= 2e4 ? 1e4 : t[2] >= 1e4 ? 8e3 : 1e3, n = t[2] - (e === "ZoomIn" ? s : -s), a = n <= i && n >= r ? n : e === "ZoomIn" ? r : i;
    this.viewer.camera.flyTo({
      destination: g.fromDegrees(t[0], t[1], a),
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
    var o, d, h, c;
    const { name: t } = e, { labelName: i, dataIndex: r, entityIndex: s, labelEntityIndex: n } = this.getEntityNameInfo(t), a = r !== -1 && n === -1 && !this.options.defaultShowState;
    p((o = this.pointData) == null ? void 0 : o[r], (d = this.pointEntities) == null ? void 0 : d[s], "value"), n !== -1 && this.options.defaultShowState && p((h = this.pointData) == null ? void 0 : h[r], (c = this.pointEntities) == null ? void 0 : c[n]), a && this.pointData && this.addPoint(this.pointData[r], void 0, "Label"), this.handleLabelsVisibility(i), this.options.pointHandler(e);
  }
  // 处理标签显示/隐藏
  handleLabelsVisibility(e) {
    if (this.options.defaultShowState || !this.pointEntities) return;
    const t = E.now();
    this.pointEntities.forEach((i) => {
      var r, s, n, a;
      if ((r = i.name) != null && r.endsWith("Label"))
        i.show = i.name === e && !i.show;
      else {
        if (!((s = i.properties) == null ? void 0 : s.getValue(t).changeState)) return;
        const d = ((n = this.pointData) == null ? void 0 : n.findIndex((h) => h.name === i.name)) ?? -1;
        d !== -1 && p((a = this.pointData) == null ? void 0 : a[d], i, "value");
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
    e === -1 || this.options.defaultShowState || (i === -1 && this.pointData ? this.addPoint(this.pointData[e], void 0, "Label") : i !== -1 && this.pointEntities && (this.pointEntities[i].show = !0));
  }
  // 应用悬浮效果
  applyHoverEffect(e, t) {
    var n;
    if (t === -1 || !this.pointEntities) return;
    const i = this.pointEntities[t];
    if (!i || !i.properties) return;
    const r = E.now();
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
    const r = E.now(), s = i.properties.getValue(r);
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
    var s, n, a, o;
    if (e === this.defaultCenterKey && this.centerPosition) {
      this.addAllDistricts(), this.setInitialView({ destination: this.centerPosition });
      return;
    }
    if (!(e in y)) {
      console.log("未找到匹配的数据");
      return;
    }
    ((s = this.polygonEntities) == null ? void 0 : s.find((d) => d.name === e)) || this.addPolygon(e), (n = this.polygonEntities) == null || n.forEach((d) => {
      d.show = d.name === e;
    });
    const { lng: i, lat: r } = y[e];
    (o = this.viewer) == null || o.camera.flyTo({
      destination: g.fromDegrees(i, r, ((a = this.options) == null ? void 0 : a.flyToHeight) ?? this.defaultConfig.flyToHeight),
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
  buildHeatMap(e, t = R) {
    return this.viewer ? new k(this.viewer, {
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
  // 删除
  removeHeatMap(e) {
    !this.viewer || !e || e.element && (document.body.removeChild(e.element), e.element = void 0, e.provider instanceof W ? (e.provider && this.viewer.imageryLayers.remove(e.provider), e.createSingleTileImageryLayer()) : e.provider instanceof $ ? this.viewer.scene.primitives.remove(e.provider) : e.provider instanceof K && this.viewer.entities.remove(e.provider), e.cameraMoveEnd && (this.viewer.camera.moveEnd.removeEventListener(e.cameraMoveEnd), e.cameraMoveEnd = void 0));
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
          const t = new I(Math.floor(this.viewer.canvas.clientWidth / 2), Math.floor(this.viewer.canvas.clientHeight / 2)), i = this.viewer.camera.getPickRay(t);
          if (!i) return;
          const r = this.viewer.scene.globe.pick(i, this.viewer.scene);
          if (!r) {
            const o = this.getCameraViewCenter();
            if (!o) return;
            const d = u.toDegrees(o.longitude), h = u.toDegrees(o.latitude);
            this.isPointInShenzhen(d, h) ? this.lastValidCameraPosition = this.viewer.camera.position.clone() : this.lastValidCameraPosition && (this.viewer.camera.position = this.lastValidCameraPosition.clone());
            return;
          }
          const s = C.fromCartesian(r), n = u.toDegrees(s.longitude), a = u.toDegrees(s.latitude);
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
        const e = new I(this.viewer.canvas.clientWidth / 2, this.viewer.canvas.clientHeight / 2), t = this.viewer.camera.getPickRay(e);
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
  ne as cesiumService
};
