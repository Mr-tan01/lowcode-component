import {
    Viewer,
    Cartesian2,
    Cartesian3,
    Color,
    defined,
    Entity,
    Math as cesiumMath,
    PolylineDashMaterialProperty,
    ScreenSpaceEventHandler,
    ScreenSpaceEventType,
    WebMapTileServiceImageryProvider,
    ArcGisMapServerImageryProvider,
    JulianDate,
    CustomDataSource,
    VerticalOrigin,
    HorizontalOrigin,
    Rectangle,
    Cartographic,
    PolygonHierarchy,
} from "cesium";
import localforage from "localforage";
import { CesiumHeatmap } from "cesium-heatmap-es6";
import { areaData, type controlStatusType, type optionType, type pointType, type changeModelParamType } from "./type";
import { createInfoCanvas, createClusterBillboard, updateViewerEntityInfo, createEntityConfig } from "./tools";
import { useMessage } from "naive-ui";
class TileCacheHelper {
    private storeName = "WMTS_Tiles";
    private maxAge = 7 * 24 * 60 * 60 * 1000; // 缓存有效期7天

    constructor() {
        // 配置localforage
        localforage.config({
            driver: [localforage.INDEXEDDB, localforage.WEBSQL, localforage.LOCALSTORAGE],
            name: "CesiumTileCache",
            storeName: this.storeName,
        });
    }

    async getTile(key: { url: string; level: number; x: number; y: number }): Promise<Blob | null> {
        try {
            const cacheKey = `${key.url}_${key.level}_${key.x}_${key.y}`;
            const result = await localforage.getItem<{ data: Blob; timestamp: number }>(cacheKey);

            if (result && Date.now() - result.timestamp < this.maxAge) {
                return result.data;
            }
            // 自动清理过期缓存
            if (result) await localforage.removeItem(cacheKey);
            return null;
        } catch (error) {
            console.error("读取缓存失败:", error);
            return null;
        }
    }

    async putTile(key: { url: string; level: number; x: number; y: number }, blob: Blob): Promise<boolean> {
        try {
            const cacheKey = `${key.url}_${key.level}_${key.x}_${key.y}`;
            await localforage.setItem(cacheKey, {
                data: blob,
                timestamp: Date.now(),
            });
            return true;
        } catch (error) {
            console.error("存储缓存失败:", error);
            return false;
        }
    }
}

export class cesiumService {
    public viewer: Viewer | null = null;
    public pointData: pointType[] | null = [];
    public pointEntities: Entity[] | null = [];
    public polygonEntities: Entity[] | null = [];
    public screenSpaceEventHandler: void | null = null;
    public screenMouseMoveHandler: void | null = null;
    private imageLayerState: boolean | null = true;
    private imageLayerUrl: string | null = null;
    private tileLoadCallback: OmitThisParameter<(remaining: number) => void> | null = null;
    private dataSource: CustomDataSource | null = null;
    private centerPosition: Cartesian3 | null = null;
    private defaultCenterKey: string = "深圳市";
    private defaultConfig = {
        minZoom: 200,
        maxZoom: 130000,
        baseColor: Color.TRANSPARENT,
        clusteringEnabled: true,
        clusteringPixelRange: 30,
        clusteringMinimumClusterSize: 2,
        flyToHeight: 26000,
        cameraLimitsEnabled: true,
        hoverState: true,
        defaultUrl: "https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer",
    };
    private lastValidCameraPosition: Cartesian3 | null = null;
    private isCheckingBounds = false;
    private removePreUpdateListener: Function | null = null;
    private lastHoveredEntity: Entity | null = null;
    private lastThrottleTime: number = 0;
    private throttleDelay: number = 100;
    private rretryCount: number = 3;

    // 深圳市地理边界（根据瓦片定义经纬度范围）
    private shenzhenBounds = Rectangle.fromDegrees(
        113.8, // 西边界 - 经度
        22.36, // 南边界 - 纬度
        114.6, // 东边界 - 经度
        22.7 // 北边界 - 纬度
    );

    private message = useMessage();
    private tileCache = new TileCacheHelper();
    constructor(public containerId: string, public options: optionType) {
        // 合并配置
        this.options.config = {
            ...this.defaultConfig,
            ...(this.options.config || {}),
        };
        this.centerPosition = options.centerPosition;
        this.defaultCenterKey = options.defaultCenterKey;
        // 图层加载监听器
        this.tileLoadCallback = this.handleTileLoadProgress.bind(this);
    }

    // Cesium属性更新
    updateViewerAttribute(): void {
        if (!this.viewer) return;

        const config = this.options.config;
        const { scene } = this.viewer;

        scene.screenSpaceCameraController.minimumZoomDistance = config?.minZoom ?? this.defaultConfig.minZoom;
        scene.screenSpaceCameraController.maximumZoomDistance = config?.maxZoom ?? this.defaultConfig.maxZoom;
        scene.globe.baseColor = config?.baseColor ?? this.defaultConfig.baseColor;
    }

    // 添加点聚合配置方法
    private setupClustering(): void {
        if (!this.viewer) return;

        this.dataSource = new CustomDataSource("clusterSource");
        this.viewer.dataSources.add(this.dataSource);

        const config = this.options.config;
        const clustering = this.dataSource.clustering;

        clustering.enabled = config?.clusteringEnabled ?? this.defaultConfig.clusteringEnabled;
        clustering.pixelRange = config?.clusteringPixelRange ?? this.defaultConfig.clusteringPixelRange;
        clustering.minimumClusterSize = config?.clusteringMinimumClusterSize ?? this.defaultConfig.clusteringMinimumClusterSize;

        if (!clustering.enabled) return;

        clustering.clusterEvent.addEventListener((clusteredEntities, cluster) => {
            // 设置聚合点的基本样式
            cluster.billboard.show = true;
            cluster.label.show = false;

            // 统计各类型点位数量
            const typeCount = {};
            let primaryType = "";
            let maxCount = 0;

            clusteredEntities.forEach((entity) => {
                if (!entity.properties) return;

                const entityType = entity.properties.type?.getValue(JulianDate.now());
                if (!entityType) return;

                typeCount[entityType] = (typeCount[entityType] || 0) + 1;

                if (typeCount[entityType] > maxCount) {
                    maxCount = typeCount[entityType];
                    primaryType = entityType;
                }
            });

            // 创建自定义聚合点图标
            const canvas = createClusterBillboard(clusteredEntities.length, primaryType || "primary");

            Object.assign(cluster.billboard, {
                id: "cluster",
                image: canvas.toDataURL(),
                width: 50,
                height: 50,
                verticalOrigin: VerticalOrigin.CENTER,
                horizontalOrigin: HorizontalOrigin.CENTER,
                disableDepthTestDistance: Number.POSITIVE_INFINITY,
            });
        });
    }

    private doubleClickHandler = (event: MouseEvent): void => {
        event.preventDefault();
        event.stopPropagation();
        this.setCameraHeight("ZoomIn");
    };

    // 初始化Cesium Viewer
    async initViewer(controlStatus: controlStatusType): Promise<boolean> {
        if (this.viewer) this.destroy();

        try {
            this.viewer = new Viewer(this.containerId, controlStatus);

            // @ts-ignore
            this.viewer.cesiumWidget.creditContainer.style.display = "none";

            const { scene } = this.viewer;
            scene.debugShowFramesPerSecond = false;
            scene.globe.depthTestAgainstTerrain = true;
            scene.screenSpaceCameraController.enableTranslate = true;

            this.updateViewerAttribute();

            // 移除默认双击事件并添加自定义双击事件
            this.viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
            this.viewer.scene.canvas.addEventListener("dblclick", this.doubleClickHandler, false);

            // 设置聚类
            this.setupClustering();

            // 设置相机限制
            if (this.options.config?.cameraLimitsEnabled ?? this.defaultConfig.cameraLimitsEnabled) {
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
    private setupEventHandlers(): void {
        if (!this.viewer) return;

        const canvas = this.viewer.scene.canvas;

        // 注册单击事件
        this.screenSpaceEventHandler = new ScreenSpaceEventHandler(canvas).setInputAction(
            this.handleLeftClick.bind(this),
            ScreenSpaceEventType.LEFT_CLICK
        );

        // 注册鼠标悬浮事件
        this.screenMouseMoveHandler = new ScreenSpaceEventHandler(canvas).setInputAction(
            this.handleMouseMove.bind(this),
            ScreenSpaceEventType.MOUSE_MOVE
        );

        // 监听相机高度变化
        if (this.viewer.scene && this.viewer.scene.camera) {
            this.viewer.scene.camera.changed.addEventListener(() => {
                const height = Math.ceil(this.viewer!.camera.positionCartographic.height);
            });
        }
    }

    // 处理左键点击
    private handleLeftClick(click: { position: Cartesian2 }): void {
        if (!this.viewer) return;

        this.viewer.selectedEntity = undefined; // 取消选中，阻止默认弹窗

        if (this.options?.offsetState) {
            // 处理缩放偏移
            click.position.x *= 1.18;
            click.position.y *= 1.18;
        }
        const pickedObject: any = this.viewer.scene.pick(click.position);
        if (defined(pickedObject) && pickedObject.id) {
            if (pickedObject.id === "cluster") {
                const resultPosition = this.getClickPosition(click.position);
                if (resultPosition) {
                    this.viewer.camera.flyTo({
                        destination: resultPosition,
                        duration: 0.3,
                    });
                }
            }
            this.options.config.hoverState ? this.pointClickHandler(pickedObject.id) : this.options.pointHandler(pickedObject.id);
        }
    }

    // 处理鼠标移动
    private handleMouseMove(movement: { endPosition: Cartesian2 }): void {
        if (!this.viewer) return;

        // 添加时间戳节流
        const now = Date.now();
        if (now - this.lastThrottleTime < this.throttleDelay) return;
        this.lastThrottleTime = now;

        if (this.options?.offsetState) {
            // 处理缩放偏移
            movement.endPosition.x *= 1.18;
            movement.endPosition.y *= 1.18;
        }

        const pickedObject: any = this.viewer.scene.pick(movement.endPosition);

        // 如果鼠标移出了实体或悬浮在区域上
        if (!defined(pickedObject) || !pickedObject.id || pickedObject.id.name in areaData) {
            if (this.lastHoveredEntity) {
                this.pointHoverExitHandler(this.lastHoveredEntity);
                this.lastHoveredEntity = null;
            }
            return;
        }

        // 如果悬浮的是Label元素，不做处理
        if (pickedObject.id.name?.includes("Label")) {
            return;
        }

        // 如果鼠标悬浮在一个新实体上
        if (pickedObject.id !== this.lastHoveredEntity) {
            // 恢复上一个悬浮实体的状态
            if (this.lastHoveredEntity) {
                this.pointHoverExitHandler(this.lastHoveredEntity);
            }

            // 处理新的悬浮实体
            this.pointHoverHandler(pickedObject.id);
            this.lastHoveredEntity = pickedObject.id;
        }
    }

    // 瓦片加载状完成（首次添加point、polygon）
    private handleTileLoadProgress(remaining: number) {
        // 需等待瓦片加载完成
        if (remaining === 0) {
            this.options.loadTileLayerHandler(false);
            // 移除监听器
            this.cleanupTileLoadListener();
        }
    }
    // 加载瓦片
    async loadTileLayer(url: string): Promise<void> {
        let provider;
        this.options.loadTileLayerHandler(true);
        const { viewer, imageLayerState, imageLayerUrl } = this;

        this.cleanupTileLoadListener();
        this.updateLayerState(url);

        try {
            provider = await this.loadProviderWithFallback({
                targetUrl: imageLayerUrl || url,
                useZondy: imageLayerState,
                fallbackUrl: this.options.config.defaultUrl ?? this.defaultConfig.defaultUrl,
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
    private async retryLoadProvider(url: string, useZondy: boolean | null): Promise<void> {
        let attempts = 0;
        while (attempts < this.rretryCount) {
            try {
                await new Promise((resolve) => setTimeout(resolve, 1000));
                const provider = await this.loadProviderWithFallback({
                    targetUrl: url,
                    useZondy,
                    fallbackUrl: this.options.config.defaultUrl ?? this.defaultConfig.defaultUrl,
                });
                if (this.viewer && provider) {
                    await this.addProviderToViewer(this.viewer, provider);
                    return;
                }
            } catch (retryError) {
                attempts++;
                this.message.error("瓦片加载失败,请刷新重试");
            }
        }
    }

    private cleanupTileLoadListener(): void {
        if (this.tileLoadCallback && this.viewer?.scene?.globe) {
            this.viewer.scene.globe.tileLoadProgressEvent.removeEventListener(this.tileLoadCallback);
        }
    }

    private updateLayerState(url: string): void {
        if (!this.imageLayerUrl) {
            this.imageLayerUrl = url;
        }
        this.imageLayerState = !this.imageLayerState;
    }

    private async loadProviderWithFallback(options: {
        targetUrl: string;
        useZondy: boolean | null;
        fallbackUrl: string;
    }): Promise<WebMapTileServiceImageryProvider | ArcGisMapServerImageryProvider> {
        try {
            let provider: any;
            if (options.useZondy) {
                // @ts-ignore
                provider = await Zondy.WebMapTileServiceImageryProvider.fromUrl(options.targetUrl);
            } else {
                provider = await ArcGisMapServerImageryProvider.fromUrl(options.targetUrl);
            }

            // 添加缓存拦截器
            const originalRequestImage = provider.requestImage.bind(provider);
            provider.requestImage = async (x: number, y: number, level: number) => {
                try {
                    // 生成唯一缓存键
                    const cacheKey = {
                        url: options.targetUrl,
                        x,
                        y,
                        level,
                    };

                    // 尝试从缓存获取
                    const cached = await this.tileCache.getTile(cacheKey);
                    if (cached) {
                        return createImageBitmap(cached);
                    }

                    // 缓存未命中则发起请求
                    const image = await originalRequestImage(x, y, level);

                    // 转换为Blob进行存储
                    if (image instanceof ImageBitmap) {
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
                                image.close(); // 及时释放资源
                            });
                        }
                    }
                    return image;
                } catch (error) {
                    console.error("Tile load failed:", error);
                    return originalRequestImage(x, y, level);
                }
            };

            return provider;
        } catch (primaryError) {
            if (options.useZondy) {
                // this.message.error("(Zondy)瓦片加载失败, 请刷新重试");
            }
            try {
                return await ArcGisMapServerImageryProvider.fromUrl(options.fallbackUrl);
            } catch (fallbackError) {
                // this.message.error("默认瓦片加载失败，请刷新重试");
                this.options.loadTileLayerHandler(false);
                throw fallbackError;
            }
        }
    }

    private async addProviderToViewer(viewer: Viewer, provider: WebMapTileServiceImageryProvider | ArcGisMapServerImageryProvider): Promise<void> {
        try {
            viewer.imageryLayers.addImageryProvider(provider);
            if (this.tileLoadCallback) {
                viewer.scene?.globe?.tileLoadProgressEvent.addEventListener(this.tileLoadCallback);
            }
        } catch (error) {
            console.error("添加图层失败:", error);
            throw error;
        }
    }

    private handleLoadError(error: unknown): void {
        console.error("图层加载流程失败:", error);
    }

    // 添加点标记
    async addPoint(point: pointType, type?: string, labelType?: string): Promise<Entity | null | void> {
        if (!this.viewer && !this.dataSource) return null;
        const valueInfo = await createInfoCanvas(point, type, labelType);
        const entityConfig = await createEntityConfig(point, valueInfo.canvas, type);
        const entity: Entity | null = this[labelType === "Label" ? "viewer" : "dataSource"]?.entities.add(entityConfig) ?? null;

        if (!this.pointEntities) {
            this.pointEntities = [];
        }

        if (entity) {
            this.pointEntities.push(entity);
        }

        return entity;
    }

    // 清除指定entity
    async clearEntity(key: "pointEntities" | "polygonEntities", type: "dataSource" | "viewer"): Promise<void> {
        if (!this[type] || !this[key]) return;

        for (const entity of this[key]) {
            this[type]?.entities.remove(entity);
        }
        this[key] = [];
    }

    addPolygon(name: string): void {
        if (!this.viewer || !(name in areaData)) return;

        const getPositions = (data: any) => data.position.geometry.coordinates.flat(2).map(([lng, lat]) => Cartesian3.fromDegrees(lng, lat));
        const positions = getPositions(areaData[name]);

        const entity = this.viewer.entities.add({
            name: name,
            polyline: {
                positions,
                material: new PolylineDashMaterialProperty({
                    color: Color.fromCssColorString("#1E9EFA").withAlpha(0.7),
                }),
                width: 2,
            },
            polygon: {
                hierarchy: new PolygonHierarchy(positions),
                material: Color.fromCssColorString("#A2D8FF").withAlpha(0.3),
                outline: true,
                outlineColor: Color.fromCssColorString("#4694CD"),
            },
        });

        this.polygonEntities = this.polygonEntities || [];
        this.polygonEntities.push(entity);
    }

    // 深圳全市添加Polygon
    addAllDistricts() {
        this.clearEntity("polygonEntities", "viewer");

        (Object.keys(areaData) as Array<keyof typeof areaData>).filter((key) => key !== "深圳市").forEach(this.addPolygon.bind(this));
    }

    private getClickPosition(position: Cartesian2) {
        if (!this.viewer) return;

        const cartesian: Cartesian3 = this.viewer.scene.pickPosition(position); // 点击位置的经纬度、高度
        const resultPosition = this.getPositionCartographic();
        if (cartesian && resultPosition) {
            const cartographic = Cartographic.fromCartesian(cartesian);
            cartographic.height = resultPosition[2] < 2000 ? 200 : 2000; // 设置目标高度
            return Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, cartographic.height);
        }
        (Object.keys(areaData) as Array<keyof typeof areaData>)
            .filter((key) => key !== this.defaultCenterKey)
            .forEach((districtName) => {
                this.addPolygon(districtName);
            });
    }

    // 获取当前地图经纬度、高度
    private getPositionCartographic() {
        if (!this.viewer) return;

        const position = this.viewer.camera.positionCartographic;
        const longitude = cesiumMath.toDegrees(position.longitude);
        const latitude = cesiumMath.toDegrees(position.latitude);

        return [longitude, latitude, position.height];
    }

    // 设置地图高度
    setCameraHeight(type: string) {
        if (type !== "ZoomIn" && type !== "ZoomOut") return;

        const value = this.getPositionCartographic();
        if (!value || !this.viewer) return;

        const { maxZoom = this.defaultConfig.maxZoom, minZoom = this.defaultConfig.minZoom } = this.options.config ?? {};

        // 根据当前高度确定缩放步长
        const heightLimit = value[2] >= 30000 ? 20000 : value[2] >= 20000 ? 10000 : value[2] >= 10000 ? 8000 : 1000;

        const height = value[2] - (type === "ZoomIn" ? heightLimit : -heightLimit);
        const heightResult = height <= maxZoom && height >= minZoom ? height : type === "ZoomIn" ? minZoom : maxZoom;

        this.viewer.camera.flyTo({
            destination: Cartesian3.fromDegrees(value[0], value[1], heightResult),
            duration: 0.3,
        });
    }

    // 获取实体名称相关信息
    private getEntityNameInfo(name: string | undefined) {
        const baseName = name?.endsWith("Label") ? name?.replace("Label", "") : name;
        const labelName = `${baseName}Label`;

        return {
            baseName,
            labelName,
            dataIndex: this.pointData?.findIndex((item) => item.name === baseName) ?? -1,
            entityIndex: this.pointEntities?.findIndex((item) => item.name === baseName) ?? -1,
            labelEntityIndex: this.pointEntities?.findIndex((item) => item.name === labelName) ?? -1,
        };
    }

    // 控制窗体
    pointClickHandler(pickedObject: Entity): void {
        const { name } = pickedObject;
        const { labelName, dataIndex, entityIndex, labelEntityIndex } = this.getEntityNameInfo(name);

        // 文字描述状态
        const shouldAddPoint = dataIndex !== -1 && labelEntityIndex === -1 && !this.options.defaultShowState;

        // 更新图标状态
        updateViewerEntityInfo(this.pointData?.[dataIndex], this.pointEntities?.[entityIndex], "value");

        // 更新标签状态
        if (labelEntityIndex !== -1 && this.options.defaultShowState) {
            updateViewerEntityInfo(this.pointData?.[dataIndex], this.pointEntities?.[labelEntityIndex]);
        }

        // 添加文字描述
        if (shouldAddPoint && this.pointData) {
            this.addPoint(this.pointData[dataIndex], undefined, "Label");
        }

        // 处理标签显示/隐藏逻辑
        this.handleLabelsVisibility(labelName);

        // Entity事件回调
        this.options.pointHandler(pickedObject);
    }

    // 处理标签显示/隐藏
    private handleLabelsVisibility(currentLabelName: string): void {
        if (this.options.defaultShowState || !this.pointEntities) return;

        const currentTime = JulianDate.now();

        this.pointEntities.forEach((item) => {
            if (item.name?.endsWith("Label")) {
                // 切换当前标签的显示状态，隐藏其他标签
                item.show = item.name === currentLabelName && !item.show;
            } else {
                // 处理非标签实体的状态恢复
                const changeState = item.properties?.getValue(currentTime).changeState;
                if (!changeState) return;

                const valueIndex = this.pointData?.findIndex((option) => option.name === item.name) ?? -1;
                if (valueIndex !== -1) {
                    updateViewerEntityInfo(this.pointData?.[valueIndex], item, "value");
                }
            }
        });
    }

    // 鼠标悬浮处理
    private pointHoverHandler(pickedObject: Entity): void {
        const { name } = pickedObject;

        // 如果悬浮的是Label元素，不做处理
        if (name?.includes("Label")) return;

        const { labelName, dataIndex, entityIndex, labelEntityIndex } = this.getEntityNameInfo(name);

        this.handleHoverLabelDisplay(dataIndex, labelName, labelEntityIndex);
        this.applyHoverEffect(dataIndex, entityIndex);
        this.hideOtherLabels(labelName);
    }

    // 处理悬浮时标签显示
    private handleHoverLabelDisplay(dataIndex: number, labelName: string, labelEntityIndex: number): void {
        if (dataIndex === -1 || this.options.defaultShowState) return;

        // 检查是否需要添加新标签
        if (labelEntityIndex === -1 && this.pointData) {
            // 添加文字描述
            this.addPoint(this.pointData[dataIndex], undefined, "Label");
        } else if (labelEntityIndex !== -1 && this.pointEntities) {
            // 如果标签已存在但未显示，则显示它
            this.pointEntities[labelEntityIndex].show = true;
        }
    }

    // 应用悬浮效果
    private applyHoverEffect(dataIndex: number, entityIndex: number): void {
        if (entityIndex === -1 || !this.pointEntities) return;

        const entity = this.pointEntities[entityIndex];
        if (!entity || !entity.properties) return;

        const currentTime = JulianDate.now();
        const properties = entity.properties.getValue(currentTime);

        // 设置悬浮状态标记
        if (!properties.hoverState) {
            entity.properties.addProperty("hoverState", true);
        }

        // 应用悬浮效果
        updateViewerEntityInfo(this.pointData?.[dataIndex], entity, "value");
    }

    // 隐藏其他标签
    private hideOtherLabels(currentLabelName: string): void {
        if (this.options.defaultShowState || !this.pointEntities) return;

        this.pointEntities.forEach((item) => {
            if (item.name?.endsWith("Label") && item.name !== currentLabelName) {
                item.show = false;
            }
        });
    }

    // 鼠标离开悬浮元素处理
    private pointHoverExitHandler(entity: Entity): void {
        const { name } = entity;

        // 如果离开的是Label元素，不做处理
        if (name?.includes("Label")) return;

        const { dataIndex, entityIndex, labelEntityIndex } = this.getEntityNameInfo(name);

        this.restoreEntityState(dataIndex, entityIndex);
        this.handleLabelVisibilityOnExit(dataIndex, labelEntityIndex);

        // 回调函数
        if (this.options.pointHoverExitHandler) {
            this.options.pointHoverExitHandler(entity);
        }
    }

    // 恢复实体状态
    private restoreEntityState(dataIndex: number, entityIndex: number): void {
        if (entityIndex === -1 || !this.pointEntities) return;

        const entity = this.pointEntities[entityIndex];
        if (!entity || !entity.properties) return;

        const currentTime = JulianDate.now();
        const properties = entity.properties.getValue(currentTime);

        // 清除悬浮状态标记
        if (properties.hoverState) {
            entity.properties.removeProperty("hoverState");
        }

        const point = this.pointData?.[dataIndex];
        if (!point) return;

        // 根据当前状态恢复正确的图标
        if (properties.changeState) {
            // 变更状态图标
            point.changeIconType ? updateViewerEntityInfo(point, entity, "change") : updateViewerEntityInfo(point, entity, "value");
        } else {
            // 恢复原始图标
            updateViewerEntityInfo(point, entity, "value");
        }
    }

    // 处理鼠标离开时标签可见性
    private handleLabelVisibilityOnExit(dataIndex: number, labelEntityIndex: number): void {
        if (labelEntityIndex === -1 || !this.pointEntities) return;

        if (this.options.defaultShowState) {
            // 默认显示模式下，保持标签可见，恢复原始样式
            updateViewerEntityInfo(this.pointData?.[dataIndex], this.pointEntities[labelEntityIndex]);
        } else {
            // 非默认显示模式下，隐藏标签
            this.pointEntities[labelEntityIndex].show = false;
        }
    }

    // 控制多边形
    polygonClickHandler(name: string) {
        if (name === this.defaultCenterKey && this.centerPosition) {
            this.addAllDistricts();
            this.setInitialView({ destination: this.centerPosition });
            return;
        }

        if (!(name in areaData)) {
            console.log("未找到匹配的数据");
            return;
        }

        // 确保多边形存在
        const findValue = this.polygonEntities?.find((item) => item.name === name);
        if (!findValue) {
            this.addPolygon(name);
        }

        // 只显示当前多边形
        this.polygonEntities?.forEach((item) => {
            item.show = item.name === name;
        });

        // 飞行到目标位置
        const { lng, lat } = areaData[name];
        this.viewer?.camera.flyTo({
            destination: Cartesian3.fromDegrees(lng, lat, this.options?.flyToHeight ?? this.defaultConfig.flyToHeight),
            duration: 1,
        });
    }

    // 设置初始视角
    setInitialView(option: changeModelParamType["setInitialView"]): void {
        if (!this.viewer) return;

        this.viewer.camera.flyTo({
            destination: option.destination,
            duration: option.duration || 1,
        });
    }

    // 切换图层
    setViewerLayer(imageryLayersUrl: string): void {
        if (!this.viewer) return;

        // 清除现有图层和实体
        this.viewer.imageryLayers.removeAll();

        // 加载新图层
        this.loadTileLayer(imageryLayersUrl);
    }

    // 热力图
    addHeatmap(): void {
        if (!this.viewer) return;

        const points = areaData["宝安区"].position.geometry.coordinates.flat(2).map(([lng, lat]) => ({
            x: lng,
            y: lat,
            value: Number((Math.random() * (2 - 0.1) + 0.1).toFixed(1)),
        }));

        new CesiumHeatmap(this.viewer, {
            zoomToLayer: true,
            points,
            heatmapOptions: {
                maxOpacity: 0,
                minOpacity: 1,
                gradient: {
                    "0.00": "#A3E76A",
                    "0.25": "#E7D35E",
                    "0.50": "#E2EE66",
                    "0.75": "#DF684D",
                    "1.00": "#EE5442",
                },
            },
        });
    }
    // 检查是否在深圳边界内
    private isPointInShenzhen(longitude: number, latitude: number): boolean {
        return (
            longitude >= cesiumMath.toDegrees(this.shenzhenBounds.west) &&
            longitude <= cesiumMath.toDegrees(this.shenzhenBounds.east) &&
            latitude >= cesiumMath.toDegrees(this.shenzhenBounds.south) &&
            latitude <= cesiumMath.toDegrees(this.shenzhenBounds.north)
        );
    }

    // 设置视角移动限制
    private setupCameraLimits(): void {
        if (!this.viewer) return;
        const scene = this.viewer.scene;
        scene.screenSpaceCameraController.enableRotate = true;
        scene.screenSpaceCameraController.enableTranslate = true;
        scene.screenSpaceCameraController.enableZoom = true;
        scene.screenSpaceCameraController.enableTilt = true;
        scene.screenSpaceCameraController.enableLook = true;

        // 预更新阻止相机移出边界
        this.removePreUpdateListener = scene.preUpdate.addEventListener(() => {
            if (this.isCheckingBounds || !this.viewer) return;

            try {
                this.isCheckingBounds = true;

                // 获取当前视口中心点
                const centerPosition = new Cartesian2(
                    Math.floor(this.viewer.canvas.clientWidth / 2),
                    Math.floor(this.viewer.canvas.clientHeight / 2)
                );

                // 获取视口中心点的世界坐标
                const pickRay = this.viewer.camera.getPickRay(centerPosition);
                if (!pickRay) return;

                const worldPosition = this.viewer.scene.globe.pick(pickRay, this.viewer.scene);
                if (!worldPosition) {
                    // 直接获取
                    const viewCenter = this.getCameraViewCenter();
                    if (!viewCenter) return;

                    const centerLon = cesiumMath.toDegrees(viewCenter.longitude);
                    const centerLat = cesiumMath.toDegrees(viewCenter.latitude);

                    if (!this.isPointInShenzhen(centerLon, centerLat)) {
                        // 恢复到上一个有效位置
                        if (this.lastValidCameraPosition) {
                            this.viewer.camera.position = this.lastValidCameraPosition.clone();
                        }
                    } else {
                        // 更新有效位置
                        this.lastValidCameraPosition = this.viewer.camera.position.clone();
                    }
                    return;
                }

                // 将世界坐标转换为地理坐标
                const cartographic = Cartographic.fromCartesian(worldPosition);
                const longitude = cesiumMath.toDegrees(cartographic.longitude);
                const latitude = cesiumMath.toDegrees(cartographic.latitude);

                // 判断是否在边界内
                if (!this.isPointInShenzhen(longitude, latitude)) {
                    // 恢复到上一个有效位置
                    if (this.lastValidCameraPosition) {
                        this.viewer.camera.position = this.lastValidCameraPosition.clone();
                        this.viewer.camera.direction = this.viewer.scene.camera.direction.clone();
                    }
                } else {
                    // 更新有效位置
                    this.lastValidCameraPosition = this.viewer.camera.position.clone();
                }
            } finally {
                this.isCheckingBounds = false;
            }
        });
    }

    // 获取相机视角中心
    private getCameraViewCenter(): Cartographic | undefined {
        if (!this.viewer) return undefined;

        try {
            // 获取视口中心
            const windowCenter = new Cartesian2(this.viewer.canvas.clientWidth / 2, this.viewer.canvas.clientHeight / 2);

            // 尝试拾取地球表面的点
            const ray = this.viewer.camera.getPickRay(windowCenter);
            if (!ray) return undefined;

            // 尝试获取射线与地球表面的交点
            const cartesian = this.viewer.scene.globe.pick(ray, this.viewer.scene);
            if (cartesian) {
                // 如果有交点，转换为地理坐标
                return Cartographic.fromCartesian(cartesian);
            }

            // 如果没有交点，使用相机位置
            return this.viewer.camera.positionCartographic;
        } catch (e) {
            console.warn("获取相机视角中心失败", e);
            return this.viewer.camera.positionCartographic;
        }
    }

    destroy(): void {
        if (this.viewer) {
            this.viewer.scene.canvas.removeEventListener("dblclick", this.doubleClickHandler, false);
            if (this.viewer.scene && this.viewer.scene.camera) {
                // 移除边界限制监听器
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
