import { defineComponent, mergeDefaults, ref, computed, watch, onMounted, onBeforeUnmount, createElementBlock, openBlock, createVNode, unref, normalizeStyle, withCtx, createElementVNode, createTextVNode } from "vue";
import { cesiumService } from "./modules/cesiumUtils.js";
import { cesiumProps } from "./modules/props.js";
import { NSpin } from "naive-ui";
import { JulianDate, Cartesian3 } from "@cesium/engine";
const _hoisted_1 = { class: "lc-cesium" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "cesium",
  props: /* @__PURE__ */ mergeDefaults(cesiumProps, {
    clientId: "74109f7095974ab1a5e930c8e998580d",
    defaultCenterKey: "深圳市",
    centerPosition: () => Cartesian3.fromDegrees(114.187446, 22.674131, 13e4),
    pointData: () => [],
    openIndexDB: false,
    openOffset: () => ({ flag: false, offset: 0 })
  }),
  emits: ["pointHandler", "limitHeightHandler", "loadHandler"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const initImageryLayersStatus = ref(true);
    const initPointDataStatus = ref(true);
    const emit = __emit;
    const reloadPointData = async () => {
      var _a;
      clearEntity();
      const offsetPointData = cesiumUtils.offsetDuplicateCoordinates(__props.pointData, "lng", "lat", __props.openOffset.offset);
      if (__props.openOffset.flag) {
        cesiumUtils.pointData = offsetPointData;
      } else {
        cesiumUtils.pointData = __props.pointData;
      }
      (_a = cesiumUtils.pointData) == null ? void 0 : _a.forEach((point) => {
        cesiumUtils.addPoint(point, "value");
        if (__props.defaultShowState) {
          cesiumUtils.addPoint(point);
        }
      });
    };
    const loadedTileLayer = async (status) => {
      initPointDataStatus.value = status;
    };
    const loadImageryLayers = async (status) => {
      emit("loadHandler", !status);
      initImageryLayersStatus.value = status;
      if (initPointDataStatus.value) {
        initPointDataStatus.value = status;
      }
    };
    const cesiumUtils = new cesiumService("cesium-3d-viewer", {
      config: __props.basicConfig,
      defaultShowState: __props.defaultShowState,
      flyToHeight: __props.flyToHeight,
      offsetState: __props.offsetState,
      centerPosition: __props.centerPosition,
      defaultCenterKey: __props.defaultCenterKey,
      openIndexDB: __props.openIndexDB,
      pointHandler: (data) => {
        var _a;
        const currentTime = JulianDate.now();
        const value0ption = (_a = data.properties) == null ? void 0 : _a.getValue(currentTime);
        if (!value0ption) return;
        emit("pointHandler", value0ption);
      },
      limitHeightHandler: (value) => {
        emit("limitHeightHandler", value);
      },
      loadTileLayerHandler: (status) => {
        loadImageryLayers(status);
      }
    });
    const clearEntity = () => {
      cesiumUtils.clearEntity("pointEntities", "dataSource");
      cesiumUtils.clearEntity("pointEntities", "viewer");
    };
    const changeModel = (type, value) => {
      if (cesiumUtils[type]) {
        cesiumUtils[type](value);
      } else {
        console.log("未匹配cesiumUtils的方法");
      }
    };
    const initCesium = async () => {
      try {
        if (!__props.accessToken) {
          return { status: false };
        }
        cesiumUtils.pointData = __props.pointData;
        cesiumUtils.options.config = __props.basicConfig;
        cesiumUtils.options.defaultShowState = __props.defaultShowState;
        cesiumUtils.options.flyToHeight = __props.flyToHeight;
        cesiumUtils.options.offsetState = __props.offsetState;
        const viewerInitSuccess = await cesiumUtils.initViewer(__props.controlStatus);
        if (!viewerInitSuccess) {
          throw new Error("Viewer 初始化失败");
        }
        cesiumUtils.updateViewerAttribute();
        cesiumUtils.setInitialView({ destination: __props.centerPosition }, false);
        const titleUrl = __props.imageryLayersUrl ?? `${__props.baseUrl}/service/api/e99b765798d1412b9c2b458a1473396e/igs/rest/services/SZMAP/SZDZDT_2024_Yingji_T1_4490/WMTSServer?client_id=${__props.clientId}&access_token=${__props.accessToken}`;
        await cesiumUtils.loadTileLayer(titleUrl);
        if (__props.areaName) {
          cesiumUtils.polygonClickHandler(__props.areaName);
        }
        return { status: true };
      } catch {
        loadedTileLayer(false);
        return { status: false };
      }
    };
    const spinStyle = computed(() => {
      return {
        "--spin-container-bg": __props.spinContainerBg ?? "#6C7E93",
        "--n-spin-description-color": __props.spinDescriptionColor ?? "#046ab1"
      };
    });
    const initCesiumDebounced = () => {
      cesiumUtils.destroy();
      initCesium();
    };
    __expose({
      changeModel,
      loadedTileLayer,
      clearEntity,
      cesiumUtils
    });
    const initCesiumDebouncedChange = watch([() => __props.accessToken, () => __props.imageryLayersUrl], initCesiumDebounced);
    const offsetStateChange = watch(
      () => __props.offsetState,
      (newValue) => {
        cesiumUtils.options = {
          ...cesiumUtils.options,
          offsetState: newValue
        };
      },
      { deep: true }
    );
    const initPointDataChange = watch([initPointDataStatus, __props.pointData], () => {
      if (!initPointDataStatus.value) {
        reloadPointData();
      }
    });
    onMounted(async () => {
      await initCesium();
    });
    onBeforeUnmount(() => {
      initCesiumDebouncedChange();
      offsetStateChange();
      initPointDataChange();
      cesiumUtils.destroy();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(NSpin), {
          show: initImageryLayersStatus.value || initPointDataStatus.value,
          stroke: _ctx.spinStroke,
          style: normalizeStyle(spinStyle.value),
          size: "large"
        }, {
          description: withCtx(() => [..._cache[0] || (_cache[0] = [
            createTextVNode(
              " 地图加载中... ",
              -1
              /* CACHED */
            )
          ])]),
          default: withCtx(() => [
            _cache[1] || (_cache[1] = createElementVNode(
              "div",
              {
                id: "cesium-3d-viewer",
                class: "lc-cesium_map"
              },
              null,
              -1
              /* CACHED */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["show", "stroke", "style"])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
