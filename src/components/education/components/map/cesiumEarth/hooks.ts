import { ref, type Ref } from "vue";
import * as Cesium from "cesium";
import type { Viewer } from "cesium";
import * as echarts from "echarts";

/**
 * 检查图片是否加载完成
 * @param url 图片URL
 * @returns Promise 返回一个Promise，resolve时表示加载成功，reject时表示加载失败
 */
export const checkImageLoaded = (url: string): Promise<boolean> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => reject(false);
        img.src = url;
    });
};

/**
 * 初始化Cesium地球视图
 * @param props 组件属性，包含是否开启旋转(openRotate)和旋转速度(rotateSpeed)等配置
 */
export const useInitPlanet = (props) => {
    const imageLoading = ref(false);
    const viewer: Ref<Viewer | null> = ref(null);
    let rotateHandler: Cesium.Event.RemoveCallback | null = null;
    let handler: Cesium.ScreenSpaceEventHandler | null = null; // 存储整个事件处理器对象
    // 旋转方法
    const startRotation = () => {
        if (viewer.value && !rotateHandler) {
            rotateHandler = viewer.value.clock.onTick.addEventListener(() => {
                viewer.value?.camera.rotate(Cesium.Cartesian3.UNIT_Z, Cesium.Math.toRadians(props.rotateSpeed));
            });
        }
    };

    // 停止旋转方法
    const stopRotation = () => {
        if (rotateHandler) {
            rotateHandler();
            rotateHandler = null;
        }
    };
    const initViewer = async () => {
        viewer.value = new Cesium.Viewer("cesium3D-box", {
            animation: false, //是否创建动画小器件，左下角仪表
            baseLayerPicker: false, //是否显示图层选择器，右上角图层选择按钮
            fullscreenButton: false, //是否显示全屏按钮，右下角全屏选择按钮
            timeline: false, //是否显示时间轴
            infoBox: false, //是否显示信息框
            navigationHelpButton: false, //是否显示右上角的导航帮助按钮
            sceneModePicker: false, //是否显示右上角的场景模式切换按钮
            homeButton: false, // 隐藏Home按钮
            geocoder: false, // 隐藏搜索框
            scene3DOnly: true,
            // @ts-ignore
            imageryProvider: false,
            terrainProvider: new Cesium.EllipsoidTerrainProvider(),
            // 添加WebGL上下文配置
            contextOptions: {
                webgl: {
                    alpha: true, // 启用alpha通道
                    preserveDrawingBuffer: true, // 保留绘图缓冲区
                },
            },
            ...props.cesiumOptions,
        });

        const scene = viewer.value.scene;
        handler = new Cesium.ScreenSpaceEventHandler(scene.canvas); // 修改：直接赋值给handler

        handler.setInputAction((movement) => {
            const ray = viewer.value?.camera.getPickRay(movement.endPosition);
            const globe = viewer.value?.scene.globe;
            let isOnGlobe = false;

            if (ray && globe) {
                const cartesian = globe.pick(ray, scene);
                isOnGlobe = !!cartesian;
            }

            if (isOnGlobe) {
                // 鼠标在地球上时停止旋转
                stopRotation();
            } else if (props.defaultRotate && !rotateHandler) {
                // 鼠标不在球体上时恢复旋转
                startRotation();
            }
        }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
        viewer.value.scene.screenSpaceCameraController.minimumZoomDistance = 10;
        viewer.value.scene.screenSpaceCameraController.maximumZoomDistance = 50000000;
        // 移除默认星空背景
        viewer.value.scene.skyBox.show = false;
        viewer.value.scene.sun.show = false; // 隐藏太阳
        viewer.value.scene.moon.show = false; // 隐藏月亮
        viewer.value.scene.skyAtmosphere.show = false; // 隐藏大气层效果

        // 设置场景背景为透明
        viewer.value.scene.backgroundColor = Cesium.Color.TRANSPARENT;
        let imagelayer = new Cesium.SingleTileImageryProvider({
            url: props.baseUrl,
            tileWidth: 256,
            tileHeight: 256,
        });
        viewer.value.imageryLayers.addImageryProvider(imagelayer);

        // @ts-ignore
        viewer.value.cesiumWidget.creditContainer.style.display = "none";
        // 移除双击事件
        viewer.value.cesiumWidget.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
        // 视角设置
        viewer.value.camera.flyTo({ destination: props.centerPosition });
        imageLoading.value = await checkImageLoaded(props.baseUrl);
    };

    // 销毁函数
    const destroyViewer = () => {
        if (viewer.value) {
            // 移除旋转处理器
            if (rotateHandler) {
                rotateHandler();
                rotateHandler = null;
            }

            // 销毁整个事件处理器
            if (handler) {
                handler.destroy();
                handler = null;
            }

            // 销毁viewer
            viewer.value.destroy();
            viewer.value = null;
        }
    };
    return {
        destroyViewer,
        initViewer,
        startRotation,
        stopRotation,
        viewer,
        imageLoading,
    };
};

/**
 * ECharts坐标系统注册类，用于在Cesium地图上渲染ECharts图表
 */
class RegisterCoordinateSystem {
    static dimensions = ["lng", "lat"];
    private _GLMap: Cesium.Scene;
    private _mapOffset: [number, number] = [0, 0];
    constructor(glMap) {
        this._GLMap = glMap;
        this._mapOffset = [0, 0];
        // @ts-ignore
        this.dimensions = ["lng", "lat"];
    }

    /**
     * 设置地图偏移量
     * @param mapOffset 偏移量数组[x, y]
     */
    setMapOffset(mapOffset) {
        this._mapOffset = mapOffset;
    }
    /**
     * 获取地图实例
     * @returns 返回Cesium场景对象
     */
    getBMap() {
        return this._GLMap;
    }
    /**
     * 修正纬度值，防止超出有效范围
     * @param lat 纬度值
     * @returns 修正后的纬度值
     */
    fixLat(lat) {
        return lat >= 90 ? 89.99999999999999 : lat <= -90 ? -89.99999999999999 : lat;
    }
    /**
     * 将地理坐标转换为屏幕像素坐标
     * @param coords 地理坐标数组[lng, lat]
     * @returns 屏幕像素坐标数组[x, y]
     */
    dataToPoint(coords) {
        let lonlat = [99999, 99999];
        coords[1] = this.fixLat(coords[1]);
        let position = Cesium.Cartesian3.fromDegrees(coords[0], coords[1]);
        if (!position) return lonlat;
        let coordinates = this._GLMap.cartesianToCanvasCoordinates(position);
        if (!coordinates) return lonlat;
        if (this._GLMap.mode === Cesium.SceneMode.SCENE3D) {
            if (Cesium.Cartesian3.angleBetween(this._GLMap.camera.position, position) > Cesium.Math.toRadians(75)) return [];
        }
        return [coordinates.x - this._mapOffset[0], coordinates.y - this._mapOffset[1]];
    }
    /**
     * 静态方法，创建并注册坐标系统
     * @param echartModel ECharts模型
     * @param api ECharts API
     * @returns 空数组
     */

    static create(echartModel, api) {
        let registerCoordinateSystem;
        echartModel.eachComponent("GLMap", function (seriesModel) {
            let painter = api.getZr().painter;
            if (painter) {
                let glMap = (window as any).glMap;
                registerCoordinateSystem = new RegisterCoordinateSystem(glMap);
                registerCoordinateSystem.setMapOffset(seriesModel.__mapOffset || [0, 0]);
                seriesModel.coordinateSystem = registerCoordinateSystem;
            }
        });
        echartModel.eachSeries(function (series) {
            "GLMap" === series.get("coordinateSystem") && (series.coordinateSystem = registerCoordinateSystem);
        });
        return [];
    }
}

/**
 * 模拟图表点击事件
 * @param event 原始事件对象
 * @param chart ECharts实例
 */
const mockClickChart = (event, chart) => {
    const evmousedown = new MouseEvent("mousedown", { bubbles: true, cancelable: true });
    const evmouseup = new MouseEvent("mouseup", { bubbles: true, cancelable: true });
    const evmouseclick = new MouseEvent("click", { bubbles: true, cancelable: true });
    for (const key in event) {
        try {
            Object.defineProperty(evmousedown, key, { value: event[key] });
            Object.defineProperty(evmouseup, key, { value: event[key] });
            Object.defineProperty(evmouseclick, key, { value: event[key] });
        } catch (err) {
            /* event 对象中部分属性是只读，忽略即可 */
        }
    }

    // 事件触发的容器，即不是 #app 也不是 canvas，而是中间这个 div
    const container = chart._dom.firstElementChild;
    container.dispatchEvent(evmousedown);
    container.dispatchEvent(evmouseup);
    container.dispatchEvent(evmouseclick);
};

/**
 * ECharts图层类，用于在Cesium地图上叠加ECharts图表
 */
export class EchartsLayer {
    private _map: Cesium.Viewer;
    private _overlay: echarts.ECharts | null;
    private _echartsContainer: HTMLDivElement | null = null;
    private _isRegistered = false;
    constructor(map, options) {
        this._map = map;
        this._overlay = this._createChartOverlay();
        if (options) this._registerMap();
        this._overlay?.setOption(options || {});
    }
    /**
     * 注册地图到ECharts坐标系统
     */
    _registerMap() {
        if (!this._isRegistered) {
            echarts.registerCoordinateSystem("GLMap", RegisterCoordinateSystem);
            echarts.registerAction({ type: "GLMapRoam", event: "GLMapRoam", update: "updateLayout" }, function (t, e) {});
            echarts.extendComponentModel({
                type: "GLMap",
                getBMap() {
                    return this.__GLMap;
                },
                defaultOption: { roam: false },
            });
            echarts.extendComponentView({
                type: "GLMap",
                init(_, e) {
                    this.api = e;
                    (window as any).glMap.postRender.addEventListener(this.moveHandler, this);
                },
                moveHandler() {
                    this.api.dispatchAction({ type: "GLMapRoam" });
                },
                dispose() {
                    (window as any).glMap.postRender.removeEventListener(this.moveHandler, this);
                },
            });
            this._isRegistered = true;
        }
    }
    /**
     * 创建图表覆盖层
     * @returns 初始化的ECharts实例
     */
    _createChartOverlay() {
        var scene = this._map.scene;
        scene.canvas.setAttribute("tabIndex", "0");
        const ele = document.createElement("div");
        ele.style.position = "absolute";
        ele.style.top = "0px";
        ele.style.left = "0px";
        ele.style.width = scene.canvas.width + "px";
        ele.style.height = scene.canvas.height + "px";
        ele.style.pointerEvents = "none";
        ele.setAttribute("id", "echarts");
        ele.setAttribute("class", "echartMap");
        this._map.container.appendChild(ele);
        this._echartsContainer = ele;
        (window as any).glMap = scene;
        const chart = echarts.init(ele);
        const handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
        handler.setInputAction((click) => mockClickChart(event, chart), Cesium.ScreenSpaceEventType.LEFT_CLICK);
        return chart;
    }
    /**
     * 销毁图层，清理资源
     */
    dispose() {
        if (this._echartsContainer) {
            this._map.container.removeChild(this._echartsContainer);
            this._echartsContainer = null;
        }
        if (this._overlay) {
            this._overlay.dispose();
            this._overlay = null;
        }
    }

    /**
     * 更新图表配置
     * @param t 新的ECharts配置选项
     */
    updateOverlay(t) {
        if (this._overlay) {
            this._overlay.setOption(t);
        }
    }
    /**
     * 调整图表大小以适应地图容器
     */
    resize() {
        if (!this._echartsContainer || !this._overlay) return;
        const container = this._map.container;
        this._echartsContainer.style.width = `${container.clientWidth}px`;
        this._echartsContainer.style.height = `${container.clientHeight}px`;
        this._overlay.resize();
    }
}
