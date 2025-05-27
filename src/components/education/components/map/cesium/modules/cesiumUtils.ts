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
    LabelStyle,
    VerticalOrigin,
} from "cesium";

import { CesiumHeatmap } from "cesium-heatmap-es6";

import { areaData, type controlStatusType, type optionType, type pointType, type changeModelParamType } from "./type";
import { createInfoCanvas, updateViewerEntityInfo } from "./tools";

export class cesiumService {
    public viewer: Viewer | null = null;
    public pointData: pointType[] | null = [];
    public pointEntities: Entity[] | null = [];
    public polygonEntities: Entity[] | null = [];
    public screenSpaceEventHandler: void | null = null;
    private imageLayerState: boolean | null = true;
    private imageLayerUrl: String | null = null;
    private tileLoadCallback: OmitThisParameter<(remaining: number) => void> | null = null;
    private dataSource: CustomDataSource | null = null;
    private defaultConfig = {
        minZoom: 200,
        maxZoom: 130000,
        baseColor: Color.TRANSPARENT,
        clusteringEnabled: false,
        clusteringPixelRange: 30,
        clusteringMinimumClusterSize: 2,
        flyToHeight: 26000,
    };

    constructor(public containerId: string, public options: optionType) {
        // 合并配置
        this.options.config = {
            ...this.defaultConfig,
            ...(this.options.config || {}),
        };
        // 图层加载监听器
        this.tileLoadCallback = this.handleTileLoadProgress.bind(this);
    }

    // Cesium属性更新
    updateViewerAttribute(): void {
        if (this.viewer) {
            const config = this.options.config;
            this.viewer.scene.screenSpaceCameraController.minimumZoomDistance = config?.minZoom ?? this.defaultConfig.minZoom;
            this.viewer.scene.screenSpaceCameraController.maximumZoomDistance = config?.maxZoom ?? this.defaultConfig.maxZoom;
            this.viewer.scene.globe.baseColor = config?.baseColor ?? this.defaultConfig.baseColor;
        }
    }

    // 添加点聚合配置方法
    private setupClustering(): void {
        if (!this.viewer) return;

        // 创建自定义数据源并启用聚类
        this.dataSource = new CustomDataSource("clusterSource");
        this.viewer.dataSources.add(this.dataSource);

        const config = this.options.config;
        this.dataSource.clustering.enabled = config?.clusteringEnabled ?? this.defaultConfig.clusteringEnabled;
        this.dataSource.clustering.pixelRange = config?.clusteringPixelRange ?? this.defaultConfig.clusteringPixelRange;
        this.dataSource.clustering.minimumClusterSize = config?.clusteringMinimumClusterSize ?? this.defaultConfig.clusteringMinimumClusterSize;

        if (this.dataSource.clustering.enabled) {
            this.dataSource.clustering.clusterEvent.addEventListener((_, cluster) => {
                // 设置聚合点的样式
                cluster.billboard.show = true;
                cluster.label.show = true;
                cluster.label.scale = 1.0;
                cluster.label.fillColor = Color.WHITE;
                cluster.label.style = LabelStyle.FILL_AND_OUTLINE;
                cluster.label.outlineColor = Color.BLACK;
                cluster.label.outlineWidth = 2;
                cluster.label.font = "24px sans-serif";
                cluster.label.verticalOrigin = VerticalOrigin.CENTER;
                cluster.label.pixelOffset = new Cartesian2(0, 0);
            });
        }
    }

    doubleClickHandler = (event: MouseEvent): void => {
        event.preventDefault();
        event.stopPropagation();
        this.setCameraHeight("ZoomIn");
    };

    changeHeightHandler = (): void => {
        const height = Math.ceil(this.viewer!.camera.positionCartographic.height);
        if (height === (this.options.config?.maxZoom ?? 130000)) {
            this.options.limitHeightHandler(height);
        }
    };

    // 初始化Cesium Viewer
    async initViewer(controlStatus: controlStatusType): Promise<boolean> {
        if (this.viewer) this.destroy();
        try {
            this.viewer = new Viewer(this.containerId, controlStatus);
            // @ts-ignore
            this.viewer.cesiumWidget.creditContainer.style.display = "none";
            this.viewer.scene.debugShowFramesPerSecond = false;
            this.viewer.scene.globe.depthTestAgainstTerrain = true;
            this.viewer.scene.screenSpaceCameraController.enableTranslate = true;

            this.updateViewerAttribute();

            this.viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(ScreenSpaceEventType.LEFT_DOUBLE_CLICK);

            this.viewer.scene.canvas.addEventListener("dblclick", this.doubleClickHandler, false);

            // 初始化完成后设置聚类
            this.setupClustering();

            // 注册单击事件
            this.screenSpaceEventHandler = new ScreenSpaceEventHandler(this.viewer?.scene.canvas).setInputAction(
                (click: { position: Cartesian2 }) => {
                    if (this.viewer) {
                        this.viewer.selectedEntity = undefined; // 取消选中，阻止默认弹窗
                        if (this.options?.offsetState) {
                            // 处理缩放偏移
                            click.position.x *= 1.18;
                            click.position.y *= 1.18;
                        }

                        const pickedObject: any = this.viewer.scene.pick(click.position);
                        const cartesian: Cartesian3 = this.viewer.scene.pickPosition(click.position); // 点击位置的经纬度、高度
                        if (defined(pickedObject) && pickedObject.id) {
                            this.pointClickHandler(pickedObject?.id); // point
                        }
                    }
                },
                ScreenSpaceEventType.LEFT_CLICK
            );

            // 监听相机停止移动后的高度变化
            this.viewer.scene.camera.moveEnd.addEventListener(this.changeHeightHandler);
            return true;
        } catch (error) {
            console.error("初始化Cesium失败:", error);
            return false;
        }
    }

    // 瓦片加载状完成（首次添加point、polygon）
    handleTileLoadProgress(remaining: number) {
        // 预留100个请求 图片瓦片基本加载完成 减少等待时间
        if (remaining <= 100) {
            this.options.loadTileLayerHandler(false);
            // 移除监听器
            if (this.tileLoadCallback) {
                this.viewer?.scene?.globe.tileLoadProgressEvent.removeEventListener(this.tileLoadCallback);
            }
        }
    }

    // 加载瓦片图层
    async loadTileLayer(url: string): Promise<void> {
        // 加载动画
        this.options.loadTileLayerHandler(true);
        let provider: WebMapTileServiceImageryProvider | ArcGisMapServerImageryProvider | undefined;
        const { viewer, imageLayerState, imageLayerUrl } = this;

        // 移除现有监听器
        if (this.tileLoadCallback) {
            viewer?.scene.globe.tileLoadProgressEvent.removeEventListener(this.tileLoadCallback);
        }

        // 更新图层URL
        if (!imageLayerUrl) {
            this.imageLayerUrl = url;
        }

        // 切换图层状态并获取新的provider
        this.imageLayerState = !imageLayerState;

        const loadProvider = async () => {
            try {
                if (imageLayerState) {
                    // 超时处理
                    const timeoutPromise = new Promise((_, reject) => {
                        setTimeout(() => reject(new Error("瓦片加载超时")), 10000); // 10秒超时
                    });

                    // @ts-ignore
                    const providerPromise = Zondy.WebMapTileServiceImageryProvider.fromUrl(imageLayerUrl ? imageLayerUrl : url);

                    // 超时控制
                    provider = await Promise.race([providerPromise, timeoutPromise]);
                } else {
                    provider = await ArcGisMapServerImageryProvider.fromUrl(url);
                }
            } catch (error) {
                console.error("瓦片加载失败:", error);
                // 切换到默认瓦片
                try {
                    provider = await ArcGisMapServerImageryProvider.fromUrl(url);
                } catch (fallbackError) {
                    console.error("默认瓦片加载失败:", fallbackError);
                    this.options.loadTileLayerHandler(false);
                    return;
                }
            }

            if (viewer && provider) {
                try {
                    viewer.imageryLayers.addImageryProvider(provider);

                    // 重新添加监听器
                    if (this.tileLoadCallback) {
                        viewer.scene?.globe?.tileLoadProgressEvent.addEventListener(this.tileLoadCallback);
                    }
                } catch (error) {
                    console.error("添加图层失败:", error);
                    this.options.loadTileLayerHandler(false);
                }
            } else {
                console.error("viewer 或 provider 未初始化");
                this.options.loadTileLayerHandler(false);
            }
        };

        // 执行加载
        await loadProvider();
    }

    // 添加点标记
    async addPoint(point: pointType, type?: string, labelType?: string): Promise<Entity | null | void> {
        if (!this.viewer && !this.dataSource) return null;
        if (this.dataSource) {
            const valueInfo = await createInfoCanvas(point, type, labelType);
            const entity: Entity = this.dataSource.entities.add({
                position: Cartesian3.fromDegrees(point.lng, point.lat),
                name: type ? point.name : `${point.name}Label`,
                // 自定义属性
                properties: {
                    value: point?.value,
                    text: point?.text,
                    changeState: false,
                },
                billboard: {
                    image: valueInfo.canvas,
                    disableDepthTestDistance: Number.POSITIVE_INFINITY,
                    pixelOffset: type ? new Cartesian2(0, 0) : new Cartesian2(valueInfo.canvas.width / 2.1, 4),
                },
            });

            if (entity && this.pointEntities) {
                this.pointEntities.push(entity);
            } else {
                this.pointEntities = [];
                this.pointEntities.push(entity);
            }
            return entity;
        }
    }

    // 清除指定entity
    async clearEntity(key: string): Promise<void> {
        if (this.viewer && this[key]) {
            for (let entity of this[key]) {
                this.viewer.entities.remove(entity);
            }
            this[key] = [];
        }
    }

    addPolygon(name: string): void {
        if (this.viewer && name in areaData) {
            const positions = areaData[name].position.geometry.coordinates.flat(2).map(([lng, lat]) => Cartesian3.fromDegrees(lng, lat));
            const entity: Entity = this.viewer.entities.add({
                name: name,
                polyline: {
                    positions,
                    material: new PolylineDashMaterialProperty({
                        color: Color.fromCssColorString("#1E9EFA").withAlpha(0.7),
                    }),
                    width: 2,
                },
                polygon: {
                    hierarchy: positions,
                    material: Color.fromCssColorString("#A2D8FF").withAlpha(0.3),
                    outline: true,
                    outlineColor: Color.fromCssColorString("#4694CD"),
                },
            });

            if (entity && this.polygonEntities) {
                this.polygonEntities.push(entity);
            } else {
                this.polygonEntities = [];
                this.polygonEntities.push(entity);
            }
        }
    }

    // 获取当前地图经纬度、高度
    getPositionCartographic() {
        if (this.viewer) {
            const position = this.viewer.camera.positionCartographic;
            const longitude = cesiumMath.toDegrees(position.longitude);
            const latitude = cesiumMath.toDegrees(position.latitude);
            return [longitude, latitude, position.height];
        }
    }

    // 设置地图高度
    setCameraHeight(type: string) {
        if (type === "ZoomIn" || type === "ZoomOut") {
            const value: number[] | undefined = this.getPositionCartographic();
            const { maxZoom = this.defaultConfig.maxZoom, minZoom = this.defaultConfig.minZoom } = this.options.config ?? {};
            const heightLimit = value && value[2] ? (value[2] >= 30000 ? 20000 : value[2] >= 20000 ? 10000 : value[2] >= 10000 ? 8000 : 1000) : 1000;
            const height = value![2] - (type === "ZoomIn" ? heightLimit : -heightLimit);
            const heightResult = height <= maxZoom && height >= minZoom ? height : type === "ZoomIn" ? minZoom : maxZoom;
            this.viewer?.camera.flyTo({
                destination: Cartesian3.fromDegrees(value![0], value![1], heightResult),
                duration: 0.3,
            });
        }
    }

    // 转换笛卡尔坐标到经纬度
    convertCartographic(cartesian: Cartesian3): Cartesian3 {
        const cartographic = this.viewer?.scene.globe.ellipsoid.cartesianToCartographic(cartesian);
        if (!cartographic) return new Cartesian3();

        const longitude = cesiumMath.toDegrees(cartographic.longitude);
        const latitude = cesiumMath.toDegrees(cartographic.latitude);
        return Cartesian3.fromDegrees(longitude, latitude, 30000);
    }

    // 控制窗体
    pointClickHandler(pickedObject: Entity): void {
        const { name } = pickedObject;
        const replaceName = name?.endsWith("Label") ? name?.replace("Label", "") : name;
        const labelName = `${replaceName}Label`;

        const dataIndex = this.pointData?.findIndex((item) => item.name === replaceName) ?? -1; // 确认点位存在
        const entityIndex = this.pointEntities?.findIndex((item) => item.name === replaceName) ?? -1; // 匹配对应点位
        const labelEntityIndex = this.pointEntities?.findIndex((item) => item.name === labelName) ?? -1; // 是否已添加文字描述

        const shouldAddPoint = dataIndex !== -1 && labelEntityIndex === -1 && !this.options.defaultShowState;
        if (shouldAddPoint && this.pointData) {
            // 添加文字描述
            this.addPoint(this.pointData[dataIndex], undefined, "Label");
        }

        // 内容图标变动
        updateViewerEntityInfo(this.pointData?.[dataIndex], this.pointEntities?.[entityIndex], "value");

        // 文字描述图标变动
        if (labelEntityIndex !== -1 && this.options.defaultShowState) {
            updateViewerEntityInfo(this.pointData?.[dataIndex], this.pointEntities?.[labelEntityIndex]);
        }

        // 未全部展开时 隐藏其他文字描述
        if (!this.options.defaultShowState) {
            this.pointEntities?.forEach((item) => {
                if (item.name?.endsWith("Label")) {
                    item.show = item.name === labelName && !item.show;
                } else {
                    const currentTime = JulianDate.now(); // 获取当前时间戳
                    const changeState = item.properties?.getValue(currentTime).changeState; // 直接访问属性
                    if (changeState) {
                        const valueIndex = this.pointData?.findIndex((option) => option.name === item.name) ?? -1;
                        if (valueIndex !== -1) {
                            updateViewerEntityInfo(this.pointData?.[valueIndex], item, "value");
                        }
                    }
                }
            });
        }

        // Entity事件回调
        this.options.pointHandler(pickedObject);
    }

    //controlpolygon
    polygonClickHandler(name: string) {
        if (name in areaData) {
            const findValue = this.polygonEntities?.find((item) => item.name === name);
            if (!findValue) {
                this.addPolygon(name);
            }
            const { lng, lat } = areaData[name];
            this.polygonEntities?.forEach((item) => {
                item.show = item.name === name;
            });
            this.viewer?.camera.flyTo({
                destination: Cartesian3.fromDegrees(lng, lat, this.options?.flyToHeight ?? this.defaultConfig.flyToHeight),
                duration: 1,
            });
        } else {
            console.log("未找到匹配的数据");
        }
    }

    // 设置初始视角
    setInitialView(option: changeModelParamType["setInitialView"]): void {
        if (this.viewer) {
            this.viewer.camera.flyTo({ destination: option.destination, duration: option.duration || 1 });
        }
    }

    // 切换图层
    setViewerLayer(imageryLayersUrl: string): void {
        this.viewer?.imageryLayers.removeAll();
        this.viewer?.entities.removeAll();
        this.pointEntities = null;
        this.polygonEntities = null;
        this.loadTileLayer(imageryLayersUrl);
    }

    // 热力图
    addHeatmap(): void {
        const points = areaData["宝安区"].position.geometry.coordinates.flat(2).map(([lng, lat]) => {
            return {
                x: lng,
                y: lat,
                value: Number((Math.random() * (2 - 0.1) + 0.1).toFixed(1)),
            };
        });

        new CesiumHeatmap(this.viewer!, {
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

    destroy(): void {
        if (this.viewer) {
            this.viewer.scene.canvas.removeEventListener("dblclick", this.doubleClickHandler, false);
            this.viewer.scene.camera.moveEnd.removeEventListener(this.changeHeightHandler);
            this.viewer.destroy();
            this.viewer = null;
            this.pointEntities = null;
            this.polygonEntities = null;
            this.screenSpaceEventHandler = null;
            this.imageLayerState = null;
            this.imageLayerUrl = null;
            this.tileLoadCallback = null;
        }
    }
}
