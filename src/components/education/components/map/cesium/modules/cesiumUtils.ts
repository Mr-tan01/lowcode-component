import {
    Cartesian2,
    Cartesian3,
    Color,
    defined,
    Entity,
    ImageryLayer,
    Math as cesiumMath,
    NearFarScalar,
    PolylineDashMaterialProperty,
    ScreenSpaceEventHandler,
    ScreenSpaceEventType,
    Viewer,
} from "cesium";
import { areaData, type controlStatusType, type optionType, type pointType } from "./type";
import { createInfoCanvas } from "./tools";
export class cesiumService {
    public viewer: Viewer | null = null;
    public pointData: pointType[] | null = [];
    public pointEntities: Entity[] | null = [];
    public polygonEntities: Entity[] | null = [];
    public screenSpaceEventHandler: void | null = null;

    constructor(public containerId: string, public options: optionType) {}
    
    // 初始化Cesium Viewer
    async initViewer(controlStatus: controlStatusType): Promise<boolean> {
        if (this.viewer) this.destroy();
        try {
            this.viewer = new Viewer(this.containerId, controlStatus);
            this.viewer.scene.debugShowFramesPerSecond = false;
            this.viewer.scene.screenSpaceCameraController.enableTranslate = true;
            this.viewer.scene.screenSpaceCameraController.minimumZoomDistance = this.options.config.minZoom;
            this.viewer.scene.screenSpaceCameraController.maximumZoomDistance = this.options.config.maxZoom;
            this.viewer.scene.globe.baseColor = this.options.config.baseColor;

            this.viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(ScreenSpaceEventType.LEFT_DOUBLE_CLICK);

            this.viewer.scene.canvas.addEventListener(
                "dblclick",
                (event) => {
                    // 阻止默认行为
                    event.preventDefault();
                    event.stopPropagation();
                    this.setCameraHeight("ZoomIn");
                },
                false
            );

            // 注册单击事件
            this.screenSpaceEventHandler = new ScreenSpaceEventHandler(this.viewer?.scene.canvas).setInputAction(
                (click: { position: Cartesian2 }) => {
                    if (this.viewer) {
                        this.viewer.selectedEntity = undefined; // 取消选中，阻止默认弹窗
                        const pickedObject: any = this.viewer.scene.pick(click.position);
                        const cartesian: Cartesian3 = this.viewer.scene.pickPosition(click.position); // 点击位置的经纬度、高度
                        if (defined(pickedObject) && pickedObject.id) {
                            this.pointClickHandler(pickedObject?.id); // point
                        }
                    }
                },
                ScreenSpaceEventType.LEFT_CLICK
            );

            return true;
        } catch (error) {
            console.error("初始化Cesium失败:", error);
            return false;
        }
    }
    // 加载瓦片图层
    async loadTileLayer(url: string): Promise<ImageryLayer | null> {
        const provider = await Zondy.WebMapTileServiceImageryProvider.fromUrl(url);
        if (!this.viewer || !provider) return null;
        return this.viewer.imageryLayers.addImageryProvider(provider);
    }

    // 添加点标记
    async addPoint(point: pointType, type?: string): Promise<Entity | null> {
        if (!this.viewer) return null;
        const valueInfo = await createInfoCanvas(point, type);
        const entity: Entity = this.viewer.entities.add({
            position: Cartesian3.fromDegrees(point.lng, point.lat),
            name: type ? point.name : `${point.name}Label`,
            value: point?.value,
            text: point?.text,
            billboard: {
                image: valueInfo.canvas,
                disableDepthTestDistance: Number.POSITIVE_INFINITY,
                pixelOffset: type ? new Cartesian2(0, 0) : new Cartesian2(valueInfo.canvas.width / 2.2, 19),
                scale: type ? 1 : 0.9,
                translucencyByDistance: new NearFarScalar(1.0e3, 1.0, 2.0e3, type ? 0.9 : 1),
            },
        });

        if (entity && this.pointEntities) {
            this.pointEntities.push(entity);
        }
        return entity;
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

    addPolygon(name: string): Entity | null {
        if (!this.viewer) return null;
        const positions = areaData[name].position.geometry.coordinates.flat(2).map(([lng, lat]) => Cartesian3.fromDegrees(lng, lat));

        const entity = this.viewer.entities.add({
            name,
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
        }
        return entity;
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
            const { maxZoom, minZoom } = this.options.config;
            const heightLimit =
                value && value[2] ? (value[2] >= 30000 ? 20000 : value[2] >= 20000 ? 10000 : value[2] >= 10000 ? 8000 : 1000) : 1000;
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
        const findValue = this.pointData?.findIndex((item) => item.name === pickedObject.name);
        const findLabelValue = this.pointEntities?.findIndex((item) => item.name === pickedObject.name + "Label");
        if (findValue != -1 && findValue !== undefined && findLabelValue == -1 && this.pointData) {
            this.addPoint(this.pointData[findValue]);
        }
        this.pointEntities?.forEach((item) => {
            const nameValue = item.name;
            if (nameValue?.slice(-5) === "Label") item.show = pickedObject.name + "Label" === nameValue && !item.show;
        });
        this.options.pointHandler(pickedObject);
    }

    //控制polygon
    polygonClickHandler(name: string) {
        if (name in areaData) {
            const findValue = this.polygonEntities?.find((item) => item.name === name);
            if (!findValue) {
                setTimeout(() => {
                    this.addPolygon(name);
                }, 300);
            }
            const { lng, lat } = areaData[name];
            this.polygonEntities?.forEach((item) => {
                item.show = item.name === name;
            });
            this.viewer?.camera.flyTo({
                destination: Cartesian3.fromDegrees(lng, lat, 30000),
                duration: 1,
            });
        } else {
            console.log("未找到匹配的数据");
        }
    }

    // 设置初始视角
    setInitialView(centerPosition: Cartesian3): void {
        if (this.viewer) {
            this.viewer.camera.flyTo({ destination: centerPosition, duration: 1 });
        }
    }

    destroy(): void {
        if (this.viewer) {
            this.viewer.destroy();
            this.viewer = null;
            this.pointEntities = null;
            this.polygonEntities = null;
            this.screenSpaceEventHandler = null;
        }
    }
}
