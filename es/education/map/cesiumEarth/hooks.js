var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { ref } from "vue";
import * as echarts from "echarts";
import { Cartesian3, Math as Math2, EllipsoidTerrainProvider, ScreenSpaceEventHandler, ScreenSpaceEventType, Color, SingleTileImageryProvider, SceneMode } from "@cesium/engine";
import { Viewer } from "@cesium/widgets";
const checkImageLoaded = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => reject(false);
    img.src = url;
  });
};
const useInitPlanet = (props) => {
  const imageLoading = ref(false);
  const viewer = ref(null);
  let rotateHandler = null;
  let handler = null;
  const startRotation = () => {
    if (viewer.value && !rotateHandler && props.defaultRotate) {
      rotateHandler = viewer.value.clock.onTick.addEventListener(() => {
        var _a;
        (_a = viewer.value) == null ? void 0 : _a.camera.rotate(Cartesian3.UNIT_Z, Math2.toRadians(props.rotateSpeed));
      });
    }
  };
  const stopRotation = () => {
    if (rotateHandler) {
      rotateHandler();
      rotateHandler = null;
    }
  };
  const initViewer = async () => {
    viewer.value = new Viewer("cesium3D-box", {
      animation: false,
      // 是否创建动画小器件，左下角仪表
      baseLayerPicker: false,
      // 是否显示图层选择器，右上角图层选择按钮
      fullscreenButton: false,
      // 是否显示全屏按钮，右下角全屏选择按钮
      timeline: false,
      // 是否显示时间轴
      infoBox: false,
      // 是否显示信息框
      navigationHelpButton: false,
      // 是否显示右上角的导航帮助按钮
      sceneModePicker: false,
      // 是否显示右上角的场景模式切换按钮
      homeButton: false,
      // 隐藏Home按钮
      geocoder: false,
      // 隐藏搜索框
      scene3DOnly: true,
      // @ts-ignore
      imageryProvider: false,
      terrainProvider: new EllipsoidTerrainProvider(),
      // 添加WebGL上下文配置
      contextOptions: {
        webgl: {
          alpha: true,
          // 启用alpha通道
          preserveDrawingBuffer: true
          // 保留绘图缓冲区
        }
      },
      ...props.cesiumOptions
    });
    const scene = viewer.value.scene;
    handler = new ScreenSpaceEventHandler(scene.canvas);
    handler.setInputAction((movement) => {
      var _a, _b;
      const ray = (_a = viewer.value) == null ? void 0 : _a.camera.getPickRay(movement.endPosition);
      const globe = (_b = viewer.value) == null ? void 0 : _b.scene.globe;
      let isOnGlobe = false;
      if (ray && globe) {
        const cartesian = globe.pick(ray, scene);
        isOnGlobe = !!cartesian;
      }
      if (isOnGlobe) {
        stopRotation();
      } else if (props.defaultRotate && !rotateHandler) {
        startRotation();
      }
    }, ScreenSpaceEventType.MOUSE_MOVE);
    viewer.value.scene.screenSpaceCameraController.minimumZoomDistance = 10;
    viewer.value.scene.screenSpaceCameraController.maximumZoomDistance = 5e7;
    viewer.value.scene.skyBox.show = false;
    viewer.value.scene.sun.show = false;
    viewer.value.scene.moon.show = false;
    viewer.value.scene.skyAtmosphere.show = false;
    viewer.value.scene.globe.showGroundAtmosphere = true;
    viewer.value.scene.globe.atmosphereBrightnessShift = -1;
    viewer.value.scene.backgroundColor = Color.TRANSPARENT;
    const imagelayer = new SingleTileImageryProvider({
      url: props.baseUrl,
      tileWidth: 256,
      tileHeight: 256
    });
    viewer.value.imageryLayers.addImageryProvider(imagelayer);
    viewer.value.cesiumWidget.creditContainer.style.display = "none";
    viewer.value.cesiumWidget.screenSpaceEventHandler.removeInputAction(ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
    viewer.value.camera.flyTo({ destination: props.centerPosition });
    imageLoading.value = await checkImageLoaded(props.baseUrl);
  };
  const destroyViewer = () => {
    if (viewer.value) {
      if (rotateHandler) {
        rotateHandler();
        rotateHandler = null;
      }
      if (handler) {
        handler.destroy();
        handler = null;
      }
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
    imageLoading
  };
};
const _RegisterCoordinateSystem = class _RegisterCoordinateSystem {
  constructor(glMap) {
    __publicField(this, "_GLMap");
    __publicField(this, "_mapOffset", [0, 0]);
    this._GLMap = glMap;
    this._mapOffset = [0, 0];
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
    const lonlat = [99999, 99999];
    coords[1] = this.fixLat(coords[1]);
    const position = Cartesian3.fromDegrees(coords[0], coords[1]);
    if (!position) return lonlat;
    const coordinates = this._GLMap.cartesianToCanvasCoordinates(position);
    if (!coordinates) return lonlat;
    if (this._GLMap.mode === SceneMode.SCENE3D) {
      if (Cartesian3.angleBetween(this._GLMap.camera.position, position) > Math2.toRadians(75)) return [];
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
    echartModel.eachComponent("GLMap", function(seriesModel) {
      const painter = api.getZr().painter;
      if (painter) {
        const glMap = window.glMap;
        registerCoordinateSystem = new _RegisterCoordinateSystem(glMap);
        registerCoordinateSystem.setMapOffset(seriesModel.__mapOffset || [0, 0]);
        seriesModel.coordinateSystem = registerCoordinateSystem;
      }
    });
    echartModel.eachSeries(function(series) {
      if ("GLMap" === series.get("coordinateSystem")) {
        series.coordinateSystem = registerCoordinateSystem;
      }
    });
    return [];
  }
};
__publicField(_RegisterCoordinateSystem, "dimensions", ["lng", "lat"]);
let RegisterCoordinateSystem = _RegisterCoordinateSystem;
const mockClickChart = (event2, chart) => {
  const evmousedown = new MouseEvent("mousedown", {
    bubbles: true,
    cancelable: true
  });
  const evmouseup = new MouseEvent("mouseup", {
    bubbles: true,
    cancelable: true
  });
  const evmouseclick = new MouseEvent("click", {
    bubbles: true,
    cancelable: true
  });
  for (const key in event2) {
    try {
      Object.defineProperty(evmousedown, key, { value: event2[key] });
      Object.defineProperty(evmouseup, key, { value: event2[key] });
      Object.defineProperty(evmouseclick, key, { value: event2[key] });
    } catch {
    }
  }
  const container = chart._dom.firstElementChild;
  container.dispatchEvent(evmousedown);
  container.dispatchEvent(evmouseup);
  container.dispatchEvent(evmouseclick);
};
class EchartsLayer {
  constructor(map, options) {
    __publicField(this, "_map");
    __publicField(this, "_overlay");
    __publicField(this, "_echartsContainer", null);
    __publicField(this, "_isRegistered", false);
    var _a;
    this._map = map;
    this._overlay = this._createChartOverlay();
    if (options) this._registerMap();
    (_a = this._overlay) == null ? void 0 : _a.setOption(options || {});
  }
  /**
   * 注册地图到ECharts坐标系统
   */
  _registerMap() {
    if (!this._isRegistered) {
      echarts.registerCoordinateSystem("GLMap", RegisterCoordinateSystem);
      echarts.registerAction(
        {
          type: "GLMapRoam",
          event: "GLMapRoam",
          update: "updateLayout"
        },
        function() {
        }
      );
      echarts.extendComponentModel({
        type: "GLMap",
        getBMap() {
          return this.__GLMap;
        },
        defaultOption: { roam: false }
      });
      echarts.extendComponentView({
        type: "GLMap",
        init(_, e) {
          this.api = e;
          window.glMap.postRender.addEventListener(this.moveHandler, this);
        },
        moveHandler() {
          this.api.dispatchAction({ type: "GLMapRoam" });
        },
        dispose() {
          window.glMap.postRender.removeEventListener(this.moveHandler, this);
        }
      });
      this._isRegistered = true;
    }
  }
  /**
   * 创建图表覆盖层
   * @returns 初始化的ECharts实例
   */
  _createChartOverlay() {
    const scene = this._map.scene;
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
    window.glMap = scene;
    const chart = echarts.init(ele);
    const handler = new ScreenSpaceEventHandler(scene.canvas);
    handler.setInputAction(() => mockClickChart(event, chart), ScreenSpaceEventType.LEFT_CLICK);
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
export {
  EchartsLayer,
  checkImageLoaded,
  useInitPlanet
};
