var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import localforage from "localforage";
import { CesiumHeatmap } from "cesium-heatmap-es6";
import { areaData } from "./type.js";
import { createClusterBillboard, createInfoCanvas, createEntityConfig, updateViewerEntityInfo, heatmapGradient } from "./tools.js";
import { useMessage } from "naive-ui";
import { Color, Rectangle, CustomDataSource, JulianDate, VerticalOrigin, HorizontalOrigin, ScreenSpaceEventType, ScreenSpaceEventHandler, Cartographic, Cartesian3, Math as Math$1, BoundingSphere, defined, ArcGisMapServerImageryProvider, PolylineDashMaterialProperty, PolygonHierarchy, ImageryLayer, Primitive, Entity, Cartesian2 } from "@cesium/engine";
import { Viewer } from "@cesium/widgets";
class TileCacheHelper {
  // 缓存有效期7天
  constructor() {
    __publicField(this, "storeName", "WMTS_Tiles");
    __publicField(this, "maxAge", 7 * 24 * 60 * 60 * 1e3);
    localforage.config({
      driver: [localforage.INDEXEDDB, localforage.WEBSQL, localforage.LOCALSTORAGE],
      name: "CesiumTileCache",
      storeName: this.storeName
    });
  }
  async getTile(key) {
    try {
      const cacheKey = `${key.url}_${key.level}_${key.x}_${key.y}`;
      const result = await localforage.getItem(cacheKey);
      if (result && Date.now() - result.timestamp < this.maxAge) {
        return result.data;
      }
      if (result) await localforage.removeItem(cacheKey);
      return null;
    } catch (error) {
      console.error("读取缓存失败:", error);
      return null;
    }
  }
  async putTile(key, blob) {
    try {
      const cacheKey = `${key.url}_${key.level}_${key.x}_${key.y}`;
      await localforage.setItem(cacheKey, {
        data: blob,
        timestamp: Date.now()
      });
      return true;
    } catch (error) {
      console.error("存储缓存失败:", error);
      return false;
    }
  }
}
class cesiumService {
  constructor(containerId, options) {
    __publicField(this, "viewer", null);
    __publicField(this, "pointData", []);
    __publicField(this, "pointEntities", []);
    __publicField(this, "polygonEntities", []);
    __publicField(this, "screenSpaceEventHandler", null);
    __publicField(this, "screenMouseMoveHandler", null);
    __publicField(this, "imageLayerState", true);
    __publicField(this, "imageLayerUrl", null);
    __publicField(this, "tileLoadCallback", null);
    __publicField(this, "dataSource", null);
    __publicField(this, "centerPosition", null);
    __publicField(this, "defaultCenterKey", "深圳市");
    __publicField(this, "defaultConfig", {
      minZoom: 200,
      maxZoom: 13e4,
      baseColor: Color.TRANSPARENT,
      clusteringEnabled: true,
      clusteringPixelRange: 30,
      clusteringMinimumClusterSize: 2,
      flyToHeight: 26e3,
      cameraLimitsEnabled: true,
      hoverState: true,
      defaultUrl: "https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer"
    });
    __publicField(this, "lastValidCameraPosition", null);
    __publicField(this, "isCheckingBounds", false);
    __publicField(this, "removePreUpdateListener", null);
    // 修改为函数类型
    __publicField(this, "lastHoveredEntity", null);
    __publicField(this, "lastThrottleTime", 0);
    __publicField(this, "throttleDelay", 100);
    __publicField(this, "rretryCount", 3);
    __publicField(this, "openIndexDB", false);
    // 深圳市地理边界（根据瓦片定义经纬度范围）
    __publicField(this, "shenzhenBounds", Rectangle.fromDegrees(
      113.8,
      // 西边界 - 经度
      22.36,
      // 南边界 - 纬度
      114.6,
      // 东边界 - 经度
      22.7
      // 北边界 - 纬度
    ));
    __publicField(this, "message", useMessage());
    __publicField(this, "tileCache", new TileCacheHelper());
    __publicField(this, "doubleClickHandler", (event) => {
      event.preventDefault();
      event.stopPropagation();
      this.setCameraHeight("ZoomIn");
    });
    this.containerId = containerId;
    this.options = options;
    this.options.config = {
      ...this.defaultConfig,
      ...this.options.config || {}
    };
    this.centerPosition = options.centerPosition;
    this.defaultCenterKey = options.defaultCenterKey;
    this.openIndexDB = options.openIndexDB;
    this.tileLoadCallback = this.handleTileLoadProgress.bind(this);
  }
  /**
   * 对经纬度完全相同的数据点进行均匀环形偏移
   * @param list      原始数据数组
   * @param lngKey    经度字段名
   * @param latKey    纬度字段名
   * @param distance  偏移距离（米），默认 200
   * @returns         已做偏移的新数组
   */
  offsetDuplicateCoordinates(list, lngKey, latKey, distance = 200) {
    const EARTH_RADIUS = 6371e3;
    const map = /* @__PURE__ */ new Map();
    list.forEach((item) => {
      const key = `${item[lngKey]},${item[latKey]}`;
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(item);
    });
    return Array.from(map.values()).flatMap((group) => {
      if (group.length === 1) return group;
      return group.map((item, idx) => {
        const angle = idx * 2 * Math.PI / group.length;
        const lng = Number(item[lngKey]);
        const lat = Number(item[latKey]);
        const deltaLng = distance * Math.cos(angle) / (EARTH_RADIUS * Math.cos(lat * (Math.PI / 180)));
        const deltaLat = distance * Math.sin(angle) / EARTH_RADIUS;
        const r = {
          ...item,
          [lngKey]: Number((lng + deltaLng * (180 / Math.PI)).toFixed(6)),
          [latKey]: Number((lat + deltaLat * (180 / Math.PI)).toFixed(6))
        };
        return r;
      });
    });
  }
  // Cesium属性更新
  updateViewerAttribute() {
    if (!this.viewer) return;
    const config = this.options.config;
    const { scene } = this.viewer;
    scene.screenSpaceCameraController.minimumZoomDistance = (config == null ? void 0 : config.minZoom) ?? this.defaultConfig.minZoom;
    scene.screenSpaceCameraController.maximumZoomDistance = (config == null ? void 0 : config.maxZoom) ?? this.defaultConfig.maxZoom;
    scene.globe.baseColor = (config == null ? void 0 : config.baseColor) ?? this.defaultConfig.baseColor;
  }
  // 添加点聚合配置方法
  getTypeColor(type) {
    const colorMap = {
      primary: "#1E9EFA",
      success: "#67C23A",
      warning: "#E6A23C",
      danger: "#E41F1F",
      default: "#1E9EFA"
    };
    return colorMap[type] || colorMap.default;
  }
  setupClustering() {
    if (!this.viewer) return;
    this.dataSource = new CustomDataSource("clusterSource");
    this.viewer.dataSources.add(this.dataSource);
    const config = this.options.config;
    const clustering = this.dataSource.clustering;
    clustering.enabled = (config == null ? void 0 : config.clusteringEnabled) ?? this.defaultConfig.clusteringEnabled;
    clustering.pixelRange = (config == null ? void 0 : config.clusteringPixelRange) ?? this.defaultConfig.clusteringPixelRange;
    clustering.minimumClusterSize = (config == null ? void 0 : config.clusteringMinimumClusterSize) ?? this.defaultConfig.clusteringMinimumClusterSize;
    if (!clustering.enabled) return;
    clustering.clusterEvent.addEventListener((clusteredEntities, cluster) => {
      cluster.billboard.show = true;
      cluster.label.show = false;
      const typeCount = {};
      const typeColors = {};
      let primaryType = "";
      let maxCount = 0;
      clusteredEntities.forEach((entity) => {
        var _a;
        if (!entity.properties) return;
        const entityType = (_a = entity.properties.type) == null ? void 0 : _a.getValue(JulianDate.now());
        if (!entityType) return;
        const color = this.getTypeColor(entityType);
        typeCount[entityType] = (typeCount[entityType] || 0) + 1;
        typeColors[entityType] = color;
        if (typeCount[entityType] > maxCount) {
          maxCount = typeCount[entityType];
          primaryType = entityType;
        }
      });
      const canvas = createClusterBillboard(clusteredEntities.length, primaryType || "primary", typeCount, typeColors);
      Object.assign(cluster.billboard, {
        id: {
          type: "cluster",
          entities: clusteredEntities,
          // 保存所有被聚合的实体
          count: clusteredEntities.length,
          // 存数量
          types: typeCount,
          // 保存类型统计信息
          colors: typeColors
          // 保存类型颜色信息
        },
        image: canvas.toDataURL(),
        width: 50,
        height: 50,
        verticalOrigin: VerticalOrigin.CENTER,
        horizontalOrigin: HorizontalOrigin.CENTER,
        disableDepthTestDistance: void 0
      });
    });
  }
  async initViewer(controlStatus) {
    var _a;
    if (this.viewer) this.destroy();
    try {
      this.viewer = new Viewer(this.containerId, controlStatus);
      this.viewer.cesiumWidget.creditContainer.style.display = "none";
      const { scene } = this.viewer;
      scene.debugShowFramesPerSecond = false;
      scene.globe.depthTestAgainstTerrain = true;
      scene.screenSpaceCameraController.enableTranslate = true;
      this.viewer.scene.skyBox.show = false;
      this.viewer.scene.sun.show = false;
      this.viewer.scene.moon.show = false;
      this.viewer.scene.skyAtmosphere.show = false;
      this.viewer.scene.globe.showGroundAtmosphere = false;
      this.viewer.scene.globe.atmosphereBrightnessShift = 0.25;
      this.viewer.scene.globe.baseColor = Color.TRANSPARENT;
      this.viewer.useBrowserRecommendedResolution = true;
      this.viewer.scene.backgroundColor = Color.TRANSPARENT;
      this.viewer.imageryLayers.removeAll();
      this.updateViewerAttribute();
      this.viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
      this.viewer.scene.canvas.addEventListener("dblclick", this.doubleClickHandler, false);
      this.setupClustering();
      if (((_a = this.options.config) == null ? void 0 : _a.cameraLimitsEnabled) ?? this.defaultConfig.cameraLimitsEnabled) {
        this.setupCameraLimits();
      }
      this.setupEventHandlers();
      return true;
    } catch (error) {
      console.error("初始化Cesium失败:", error);
      return false;
    }
  }
  // 设置事件处理器
  setupEventHandlers() {
    if (!this.viewer) return;
    const canvas = this.viewer.scene.canvas;
    this.screenSpaceEventHandler = new ScreenSpaceEventHandler(canvas).setInputAction(
      this.handleLeftClick.bind(this),
      ScreenSpaceEventType.LEFT_CLICK
    );
    this.screenMouseMoveHandler = new ScreenSpaceEventHandler(canvas).setInputAction(
      this.handleMouseMove.bind(this),
      ScreenSpaceEventType.MOUSE_MOVE
    );
  }
  /**
   * 根据点位集合计算最佳飞行高度
   * @param entities 聚合实体数组
   * @param scale 视野系数（>1 留边）
   */
  calcHeightByExtent(entities, scale = 2.8) {
    const positions = entities.map((e) => {
      var _a;
      return (_a = e.position) == null ? void 0 : _a.getValue(JulianDate.now());
    }).filter((p) => p);
    if (positions.length < 2) return { longitude: 0, latitude: 0, height: 500 };
    if (positions.length === 2) {
      const [p1, p2] = positions;
      const c1 = Cartographic.fromCartesian(p1);
      const c2 = Cartographic.fromCartesian(p2);
      const dist = Cartesian3.distance(
        Cartesian3.fromDegrees(Math$1.toDegrees(c1.longitude), Math$1.toDegrees(c1.latitude)),
        Cartesian3.fromDegrees(Math$1.toDegrees(c2.longitude), Math$1.toDegrees(c2.latitude))
      );
      const center = BoundingSphere.fromPoints(positions).center;
      const cart2 = Cartographic.fromCartesian(center);
      return {
        longitude: Math$1.toDegrees(cart2.longitude),
        latitude: Math$1.toDegrees(cart2.latitude),
        height: dist * scale
        // 距离越近高度越低
      };
    }
    const sphere = BoundingSphere.fromPoints(positions);
    const cart = Cartographic.fromCartesian(sphere.center);
    return {
      longitude: Math$1.toDegrees(cart.longitude),
      latitude: Math$1.toDegrees(cart.latitude),
      height: sphere.radius * scale
    };
  }
  // 处理左键点击
  handleLeftClick(click) {
    var _a;
    if (!this.viewer) return;
    this.viewer.selectedEntity = void 0;
    if ((_a = this.options) == null ? void 0 : _a.offsetState) {
      click.position.x *= 1.18;
      click.position.y *= 1.18;
    }
    const pickedObject = this.viewer.scene.pick(click.position);
    if (defined(pickedObject) && pickedObject.id) {
      if (pickedObject.id.type === "cluster") {
        const entities = pickedObject.id.entities;
        const { longitude, latitude, height } = this.calcHeightByExtent(entities, 4);
        this.viewer.camera.flyTo({
          destination: Cartesian3.fromDegrees(longitude, latitude, height),
          duration: 0.5
        });
      }
      this.options.config.hoverState ? this.pointClickHandler(pickedObject.id) : this.options.pointHandler(pickedObject.id);
    }
  }
  // 处理鼠标移动
  handleMouseMove(movement) {
    var _a, _b;
    if (!this.viewer) return;
    const now = Date.now();
    if (now - this.lastThrottleTime < this.throttleDelay) return;
    this.lastThrottleTime = now;
    if ((_a = this.options) == null ? void 0 : _a.offsetState) {
      movement.endPosition.x *= 1.18;
      movement.endPosition.y *= 1.18;
    }
    const pickedObject = this.viewer.scene.pick(movement.endPosition);
    if (!defined(pickedObject) || !pickedObject.id || pickedObject.id.name in areaData) {
      if (this.lastHoveredEntity) {
        this.pointHoverExitHandler(this.lastHoveredEntity);
        this.lastHoveredEntity = null;
      }
      return;
    }
    if ((_b = pickedObject.id.name) == null ? void 0 : _b.includes("Label")) {
      return;
    }
    if (pickedObject.id !== this.lastHoveredEntity) {
      if (this.lastHoveredEntity) {
        this.pointHoverExitHandler(this.lastHoveredEntity);
      }
      this.pointHoverHandler(pickedObject.id);
      this.lastHoveredEntity = pickedObject.id;
    }
  }
  // 瓦片加载状完成（首次添加point、polygon）
  handleTileLoadProgress(remaining) {
    if (remaining === 0) {
      this.options.loadTileLayerHandler(false);
      this.cleanupTileLoadListener();
    }
  }
  // 加载瓦片
  async loadTileLayer(url) {
    let provider;
    this.options.loadTileLayerHandler(true);
    const { viewer, imageLayerState, imageLayerUrl } = this;
    this.cleanupTileLoadListener();
    this.updateLayerState(url);
    try {
      provider = await this.loadProviderWithFallback({
        targetUrl: imageLayerUrl || url,
        useZondy: imageLayerState,
        fallbackUrl: this.options.config.defaultUrl ?? this.defaultConfig.defaultUrl
      });
      if (viewer && provider) {
        await this.addProviderToViewer(viewer, provider);
      }
    } catch (error) {
      await this.retryLoadProvider(imageLayerUrl || url, imageLayerState);
      this.handleLoadError(error);
    }
  }
  // 重试
  async retryLoadProvider(url, useZondy) {
    let attempts = 0;
    while (attempts < this.rretryCount) {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1e3));
        const provider = await this.loadProviderWithFallback({
          targetUrl: url,
          useZondy,
          fallbackUrl: this.options.config.defaultUrl ?? this.defaultConfig.defaultUrl
        });
        if (this.viewer && provider) {
          await this.addProviderToViewer(this.viewer, provider);
          return;
        }
      } catch {
        attempts++;
        this.message.error("瓦片加载失败,请刷新重试");
      }
    }
  }
  cleanupTileLoadListener() {
    var _a, _b;
    if (this.tileLoadCallback && ((_b = (_a = this.viewer) == null ? void 0 : _a.scene) == null ? void 0 : _b.globe)) {
      this.viewer.scene.globe.tileLoadProgressEvent.removeEventListener(this.tileLoadCallback);
    }
  }
  updateLayerState(url) {
    if (!this.imageLayerUrl) {
      this.imageLayerUrl = url;
    }
    this.imageLayerState = !this.imageLayerState;
  }
  async loadProviderWithFallback(options) {
    try {
      let provider;
      if (options.useZondy) {
        provider = await Zondy.WebMapTileServiceImageryProvider.fromUrl(options.targetUrl);
      } else {
        provider = await ArcGisMapServerImageryProvider.fromUrl(options.targetUrl);
      }
      if (this.openIndexDB) {
        const originalRequestImage = provider.requestImage.bind(provider);
        const getCachedImage = async (cacheKey) => {
          try {
            const cached = await this.tileCache.getTile(cacheKey);
            if (cached) {
              return await createImageBitmap(cached);
            }
            return null;
          } catch (e) {
            console.warn("读取缓存失败:", e);
            return null;
          }
        };
        provider.requestImage = async (x, y, level) => {
          const cacheKey = {
            url: options.targetUrl,
            x,
            y,
            level
          };
          const cachedImage = await getCachedImage(cacheKey);
          if (cachedImage) {
            return cachedImage;
          }
          try {
            const image = await originalRequestImage(x, y, level);
            if (!image || image.width === 0 || image.height === 0) {
              throw new Error("Invalid image dimensions");
            }
            setTimeout(async () => {
              try {
                const canvas = document.createElement("canvas");
                canvas.width = image.width;
                canvas.height = image.height;
                const ctx = canvas.getContext("2d");
                if (ctx) {
                  ctx.drawImage(image, 0, 0);
                  canvas.toBlob(async (blob) => {
                    if (blob) {
                      await this.tileCache.putTile(cacheKey, blob);
                    }
                  });
                }
              } catch (e) {
                console.warn("异步缓存失败:", e);
              }
            }, 0);
            return image;
          } catch (error) {
            console.warn("获取瓦片失败:", error);
            const fallbackImage = await getCachedImage(cacheKey);
            return fallbackImage || originalRequestImage(x, y, level);
          }
        };
      }
      return provider;
    } catch {
      try {
        return await ArcGisMapServerImageryProvider.fromUrl(options.fallbackUrl);
      } catch (fallbackError) {
        this.options.loadTileLayerHandler(false);
        throw fallbackError;
      }
    }
  }
  async addProviderToViewer(viewer, provider) {
    var _a, _b;
    try {
      viewer.imageryLayers.addImageryProvider(provider);
      if (this.tileLoadCallback) {
        (_b = (_a = viewer.scene) == null ? void 0 : _a.globe) == null ? void 0 : _b.tileLoadProgressEvent.addEventListener(this.tileLoadCallback);
      }
    } catch (error) {
      console.error("添加图层失败:", error);
      throw error;
    }
  }
  handleLoadError(error) {
    console.error("图层加载流程失败:", error);
  }
  // 添加点标记
  async addPoint(point, type, labelType) {
    var _a;
    if (!this.viewer && !this.dataSource) return null;
    const valueInfo = await createInfoCanvas(point, type, labelType);
    const entityConfig = await createEntityConfig(point, valueInfo.canvas, type);
    const entity = ((_a = this[labelType === "Label" ? "viewer" : "dataSource"]) == null ? void 0 : _a.entities.add(entityConfig)) ?? null;
    if (!this.pointEntities) {
      this.pointEntities = [];
    }
    if (entity) {
      this.pointEntities.push(entity);
    }
    return entity;
  }
  // 清除指定entity
  async clearEntity(key, type) {
    var _a;
    if (!this[type] || !this[key]) return;
    for (const entity of this[key]) {
      (_a = this[type]) == null ? void 0 : _a.entities.remove(entity);
    }
    this[key] = [];
  }
  addPolygon(name) {
    if (!this.viewer || !(name in areaData)) return;
    const getPositions = (data) => data.position.geometry.coordinates.flat(2).map(([lng, lat]) => Cartesian3.fromDegrees(lng, lat));
    const positions = getPositions(areaData[name]);
    const entity = this.viewer.entities.add({
      name,
      polyline: {
        positions,
        material: new PolylineDashMaterialProperty({
          color: Color.fromCssColorString("#1E9EFA").withAlpha(0.7)
        }),
        width: 2
      },
      polygon: {
        hierarchy: new PolygonHierarchy(positions),
        material: Color.fromCssColorString("#A2D8FF").withAlpha(0.3),
        outline: true,
        outlineColor: Color.fromCssColorString("#4694CD")
      }
    });
    this.polygonEntities = this.polygonEntities || [];
    this.polygonEntities.push(entity);
  }
  // 深圳全市添加Polygon
  addAllDistricts() {
    this.clearEntity("polygonEntities", "viewer");
    Object.keys(areaData).filter((key) => key !== "深圳市").forEach(this.addPolygon.bind(this));
  }
  getClickPosition(position) {
    if (!this.viewer) return;
    const cartesian = this.viewer.scene.pickPosition(position);
    const resultPosition = this.getPositionCartographic();
    if (cartesian && resultPosition) {
      const cartographic = Cartographic.fromCartesian(cartesian);
      cartographic.height = resultPosition[2] < 2e3 ? 200 : 2e3;
      return Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, cartographic.height);
    }
    Object.keys(areaData).filter((key) => key !== this.defaultCenterKey).forEach((districtName) => {
      this.addPolygon(districtName);
    });
  }
  // 获取当前地图经纬度、高度
  getPositionCartographic() {
    if (!this.viewer) return;
    const position = this.viewer.camera.positionCartographic;
    const longitude = Math$1.toDegrees(position.longitude);
    const latitude = Math$1.toDegrees(position.latitude);
    return [longitude, latitude, position.height];
  }
  // 设置地图高度
  setCameraHeight(type) {
    if (type !== "ZoomIn" && type !== "ZoomOut") return;
    const value = this.getPositionCartographic();
    if (!value || !this.viewer) return;
    const { maxZoom = this.defaultConfig.maxZoom, minZoom = this.defaultConfig.minZoom } = this.options.config ?? {};
    const heightLimit = value[2] >= 3e4 ? 2e4 : value[2] >= 2e4 ? 1e4 : value[2] >= 1e4 ? 8e3 : 1e3;
    const height = value[2] - (type === "ZoomIn" ? heightLimit : -heightLimit);
    const heightResult = height <= maxZoom && height >= minZoom ? height : type === "ZoomIn" ? minZoom : maxZoom;
    this.viewer.camera.flyTo({
      destination: Cartesian3.fromDegrees(value[0], value[1], heightResult),
      duration: 0.3
    });
  }
  // 获取实体名称相关信息
  getEntityNameInfo(name) {
    var _a, _b, _c;
    const baseName = (name == null ? void 0 : name.endsWith("Label")) ? name == null ? void 0 : name.replace("Label", "") : name;
    const labelName = `${baseName}Label`;
    return {
      baseName,
      labelName,
      dataIndex: ((_a = this.pointData) == null ? void 0 : _a.findIndex((item) => item.name === baseName)) ?? -1,
      entityIndex: ((_b = this.pointEntities) == null ? void 0 : _b.findIndex((item) => item.name === baseName)) ?? -1,
      labelEntityIndex: ((_c = this.pointEntities) == null ? void 0 : _c.findIndex((item) => item.name === labelName)) ?? -1
    };
  }
  // 控制窗体
  pointClickHandler(pickedObject) {
    var _a, _b, _c, _d;
    const { name } = pickedObject;
    const { labelName, dataIndex, entityIndex, labelEntityIndex } = this.getEntityNameInfo(name);
    const shouldAddPoint = dataIndex !== -1 && labelEntityIndex === -1 && !this.options.defaultShowState;
    updateViewerEntityInfo((_a = this.pointData) == null ? void 0 : _a[dataIndex], (_b = this.pointEntities) == null ? void 0 : _b[entityIndex], "value");
    if (labelEntityIndex !== -1 && this.options.defaultShowState) {
      updateViewerEntityInfo((_c = this.pointData) == null ? void 0 : _c[dataIndex], (_d = this.pointEntities) == null ? void 0 : _d[labelEntityIndex]);
    }
    if (shouldAddPoint && this.pointData) {
      this.addPoint(this.pointData[dataIndex], void 0, "Label");
    }
    this.handleLabelsVisibility(labelName);
    this.options.pointHandler(pickedObject);
  }
  // 处理标签显示/隐藏
  handleLabelsVisibility(currentLabelName) {
    if (this.options.defaultShowState || !this.pointEntities) return;
    const currentTime = JulianDate.now();
    this.pointEntities.forEach((item) => {
      var _a, _b, _c, _d;
      if ((_a = item.name) == null ? void 0 : _a.endsWith("Label")) {
        item.show = item.name === currentLabelName && !item.show;
      } else {
        const changeState = (_b = item.properties) == null ? void 0 : _b.getValue(currentTime).changeState;
        if (!changeState) return;
        const valueIndex = ((_c = this.pointData) == null ? void 0 : _c.findIndex((option) => option.name === item.name)) ?? -1;
        if (valueIndex !== -1) {
          updateViewerEntityInfo((_d = this.pointData) == null ? void 0 : _d[valueIndex], item, "value");
        }
      }
    });
  }
  // 鼠标悬浮处理
  pointHoverHandler(pickedObject) {
    const { name } = pickedObject;
    if (name == null ? void 0 : name.includes("Label")) return;
    const { labelName, dataIndex, entityIndex, labelEntityIndex } = this.getEntityNameInfo(name);
    this.handleHoverLabelDisplay(dataIndex, labelName, labelEntityIndex);
    this.applyHoverEffect(dataIndex, entityIndex);
    this.hideOtherLabels(labelName);
  }
  // 处理悬浮时标签显示
  handleHoverLabelDisplay(dataIndex, labelName, labelEntityIndex) {
    if (dataIndex === -1 || this.options.defaultShowState) return;
    if (labelEntityIndex === -1 && this.pointData) {
      this.addPoint(this.pointData[dataIndex], void 0, "Label");
    } else if (labelEntityIndex !== -1 && this.pointEntities) {
      this.pointEntities[labelEntityIndex].show = true;
    }
  }
  // 应用悬浮效果
  applyHoverEffect(dataIndex, entityIndex) {
    var _a;
    if (entityIndex === -1 || !this.pointEntities) return;
    const entity = this.pointEntities[entityIndex];
    if (!entity || !entity.properties) return;
    const currentTime = JulianDate.now();
    const properties = entity.properties.getValue(currentTime);
    if (!properties.hoverState) {
      entity.properties.addProperty("hoverState", true);
    }
    updateViewerEntityInfo((_a = this.pointData) == null ? void 0 : _a[dataIndex], entity, "value");
  }
  // 隐藏其他标签
  hideOtherLabels(currentLabelName) {
    if (this.options.defaultShowState || !this.pointEntities) return;
    this.pointEntities.forEach((item) => {
      var _a;
      if (((_a = item.name) == null ? void 0 : _a.endsWith("Label")) && item.name !== currentLabelName) {
        item.show = false;
      }
    });
  }
  // 鼠标离开悬浮元素处理
  pointHoverExitHandler(entity) {
    const { name } = entity;
    if (name == null ? void 0 : name.includes("Label")) return;
    const { dataIndex, entityIndex, labelEntityIndex } = this.getEntityNameInfo(name);
    this.restoreEntityState(dataIndex, entityIndex);
    this.handleLabelVisibilityOnExit(dataIndex, labelEntityIndex);
    if (this.options.pointHoverExitHandler) {
      this.options.pointHoverExitHandler(entity);
    }
  }
  // 恢复实体状态
  restoreEntityState(dataIndex, entityIndex) {
    var _a;
    if (entityIndex === -1 || !this.pointEntities) return;
    const entity = this.pointEntities[entityIndex];
    if (!entity || !entity.properties) return;
    const currentTime = JulianDate.now();
    const properties = entity.properties.getValue(currentTime);
    if (properties.hoverState) {
      entity.properties.removeProperty("hoverState");
    }
    const point = (_a = this.pointData) == null ? void 0 : _a[dataIndex];
    if (!point) return;
    if (properties.changeState) {
      point.changeIconType ? updateViewerEntityInfo(point, entity, "change") : updateViewerEntityInfo(point, entity, "value");
    } else {
      updateViewerEntityInfo(point, entity, "value");
    }
  }
  // 处理鼠标离开时标签可见性
  handleLabelVisibilityOnExit(dataIndex, labelEntityIndex) {
    var _a;
    if (labelEntityIndex === -1 || !this.pointEntities) return;
    if (this.options.defaultShowState) {
      updateViewerEntityInfo((_a = this.pointData) == null ? void 0 : _a[dataIndex], this.pointEntities[labelEntityIndex]);
    } else {
      this.pointEntities[labelEntityIndex].show = false;
    }
  }
  // 控制多边形
  polygonClickHandler(name) {
    var _a, _b, _c, _d;
    if (name === this.defaultCenterKey && this.centerPosition) {
      this.addAllDistricts();
      this.setInitialView({ destination: this.centerPosition });
      return;
    }
    if (!(name in areaData)) {
      console.log("未找到匹配的数据");
      return;
    }
    const findValue = (_a = this.polygonEntities) == null ? void 0 : _a.find((item) => item.name === name);
    if (!findValue) {
      this.addPolygon(name);
    }
    (_b = this.polygonEntities) == null ? void 0 : _b.forEach((item) => {
      item.show = item.name === name;
    });
    const { lng, lat } = areaData[name];
    (_d = this.viewer) == null ? void 0 : _d.camera.flyTo({
      destination: Cartesian3.fromDegrees(lng, lat, ((_c = this.options) == null ? void 0 : _c.flyToHeight) ?? this.defaultConfig.flyToHeight),
      duration: 1
    });
  }
  // 设置初始视角
  setInitialView(option) {
    if (!this.viewer) return;
    this.viewer.camera.flyTo({
      destination: option.destination,
      duration: option.duration || 1
    });
  }
  // 切换图层
  setViewerLayer(imageryLayersUrl) {
    if (!this.viewer) return;
    this.viewer.imageryLayers.removeAll();
    this.loadTileLayer(imageryLayersUrl);
  }
  // 热力图
  buildHeatMap(points, gradient = heatmapGradient) {
    if (!this.viewer) return;
    const heatmap = new CesiumHeatmap(this.viewer, {
      zoomToLayer: false,
      points,
      heatmapOptions: {
        radius: 5,
        maxOpacity: 0,
        minOpacity: 0.5,
        gradient
      }
    });
    return heatmap;
  }
  // 删除
  removeHeatMap(heatmap) {
    if (!this.viewer || !heatmap) return;
    if (heatmap.element) {
      document.body.removeChild(heatmap.element);
      heatmap.element = void 0;
      if (heatmap.provider instanceof ImageryLayer) {
        if (heatmap.provider) this.viewer.imageryLayers.remove(heatmap.provider);
        heatmap.createSingleTileImageryLayer();
      } else if (heatmap.provider instanceof Primitive) {
        this.viewer.scene.primitives.remove(heatmap.provider);
      } else if (heatmap.provider instanceof Entity) {
        this.viewer.entities.remove(heatmap.provider);
      }
      if (heatmap.cameraMoveEnd) {
        this.viewer.camera.moveEnd.removeEventListener(heatmap.cameraMoveEnd);
        heatmap.cameraMoveEnd = void 0;
      }
    }
  }
  // 检查是否在深圳边界内
  isPointInShenzhen(longitude, latitude) {
    return longitude >= Math$1.toDegrees(this.shenzhenBounds.west) && longitude <= Math$1.toDegrees(this.shenzhenBounds.east) && latitude >= Math$1.toDegrees(this.shenzhenBounds.south) && latitude <= Math$1.toDegrees(this.shenzhenBounds.north);
  }
  // 设置视角移动限制
  setupCameraLimits() {
    if (!this.viewer) return;
    const scene = this.viewer.scene;
    scene.screenSpaceCameraController.enableRotate = true;
    scene.screenSpaceCameraController.enableTranslate = true;
    scene.screenSpaceCameraController.enableZoom = true;
    scene.screenSpaceCameraController.enableTilt = true;
    scene.screenSpaceCameraController.enableLook = true;
    this.removePreUpdateListener = scene.preUpdate.addEventListener(() => {
      if (this.isCheckingBounds || !this.viewer) return;
      try {
        this.isCheckingBounds = true;
        const centerPosition = new Cartesian2(Math.floor(this.viewer.canvas.clientWidth / 2), Math.floor(this.viewer.canvas.clientHeight / 2));
        const pickRay = this.viewer.camera.getPickRay(centerPosition);
        if (!pickRay) return;
        const worldPosition = this.viewer.scene.globe.pick(pickRay, this.viewer.scene);
        if (!worldPosition) {
          const viewCenter = this.getCameraViewCenter();
          if (!viewCenter) return;
          const centerLon = Math$1.toDegrees(viewCenter.longitude);
          const centerLat = Math$1.toDegrees(viewCenter.latitude);
          if (!this.isPointInShenzhen(centerLon, centerLat)) {
            if (this.lastValidCameraPosition) {
              this.viewer.camera.position = this.lastValidCameraPosition.clone();
            }
          } else {
            this.lastValidCameraPosition = this.viewer.camera.position.clone();
          }
          return;
        }
        const cartographic = Cartographic.fromCartesian(worldPosition);
        const longitude = Math$1.toDegrees(cartographic.longitude);
        const latitude = Math$1.toDegrees(cartographic.latitude);
        if (!this.isPointInShenzhen(longitude, latitude)) {
          if (this.lastValidCameraPosition) {
            this.viewer.camera.position = this.lastValidCameraPosition.clone();
            this.viewer.camera.direction = this.viewer.scene.camera.direction.clone();
          }
        } else {
          this.lastValidCameraPosition = this.viewer.camera.position.clone();
        }
      } finally {
        this.isCheckingBounds = false;
      }
    });
  }
  // 获取相机视角中心
  getCameraViewCenter() {
    if (!this.viewer) return void 0;
    try {
      const windowCenter = new Cartesian2(this.viewer.canvas.clientWidth / 2, this.viewer.canvas.clientHeight / 2);
      const ray = this.viewer.camera.getPickRay(windowCenter);
      if (!ray) return void 0;
      const cartesian = this.viewer.scene.globe.pick(ray, this.viewer.scene);
      if (cartesian) {
        return Cartographic.fromCartesian(cartesian);
      }
      return this.viewer.camera.positionCartographic;
    } catch (e) {
      console.warn("获取相机视角中心失败", e);
      return this.viewer.camera.positionCartographic;
    }
  }
  destroy() {
    if (this.viewer) {
      this.viewer.scene.canvas.removeEventListener("dblclick", this.doubleClickHandler, false);
      if (this.viewer.scene && this.viewer.scene.camera) {
        if (this.removePreUpdateListener) {
          this.removePreUpdateListener();
          this.removePreUpdateListener = null;
        }
      }
      this.screenSpaceEventHandler = null;
      this.screenMouseMoveHandler = null;
      if (this.dataSource) {
        this.viewer.dataSources.remove(this.dataSource);
        this.dataSource = null;
      }
      this.lastValidCameraPosition = null;
      this.lastHoveredEntity = null;
      this.viewer.destroy();
      this.viewer = null;
      this.pointEntities = null;
      this.polygonEntities = null;
      this.imageLayerState = null;
      this.imageLayerUrl = null;
      this.tileLoadCallback = null;
    }
  }
}
export {
  cesiumService
};
