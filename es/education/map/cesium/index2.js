import { defineComponent, mergeDefaults, ref, useTemplateRef, computed, watch, onMounted, onBeforeUnmount, createElementBlock, openBlock, createVNode, withDirectives, unref, normalizeStyle, withCtx, createElementVNode, createTextVNode, toDisplayString, vShow } from "vue";
import { cesiumService } from "./modules/cesiumUtils.js";
import { cesiumProps } from "./modules/props.js";
import { NSpin } from "naive-ui";
import { JulianDate, SceneTransforms, Cartesian3 } from "@cesium/engine";
const _hoisted_1 = { class: "lc-cesium" };
const _hoisted_2 = {
  ref: "tooltipRef",
  class: "lc-cesium__tooltip"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "cesium",
  props: /* @__PURE__ */ mergeDefaults(cesiumProps, {
    clientId: "74109f7095974ab1a5e930c8e998580d",
    defaultCenterKey: "深圳市",
    centerPosition: () => Cartesian3.fromDegrees(114.187446, 22.674131, 13e4),
    pointData: () => [],
    pointBatchRender: () => ({ batchRenderSize: 50, batchRenderDelay: 100 }),
    openIndexDB: false,
    openOffset: () => ({ flag: false, offset: 0 }),
    popoverOffset: () => ({ popoverOffsetX: 0, popoverOffsetY: 0 })
  }),
  emits: ["pointHandler", "limitHeightHandler", "loadHandler"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const initImageryLayersStatus = ref(true);
    const initPointDataStatus = ref(true);
    const isTooltipVisible = ref(false);
    const lastPickedEntity = ref();
    const lastPickedPointOptions = ref();
    const tooltipContent = ref();
    const tooltip = useTemplateRef("tooltipRef");
    const emit = __emit;
    const reloadPointData = async () => {
      clearEntity();
      const offsetPointData = cesiumUtils.offsetDuplicateCoordinates(__props.pointData, "lng", "lat", __props.openOffset.offset);
      if (__props.openOffset.flag) {
        cesiumUtils.pointData = offsetPointData;
      } else {
        cesiumUtils.pointData = __props.pointData;
      }
      await cesiumUtils.batchRenderPoints(cesiumUtils.pointData || [], __props.defaultShowState, __props.pointBatchRender);
      cesiumUtils.handleCameraHeightChange();
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
        const valueOption = (_a = data.properties) == null ? void 0 : _a.getValue(currentTime);
        if (!valueOption) return;
        emit("pointHandler", valueOption);
      },
      limitHeightHandler: (value) => {
        emit("limitHeightHandler", value);
      },
      loadTileLayerHandler: (status) => {
        loadImageryLayers(status);
      },
      createdTooltip: (data, point) => {
        var _a;
        const height = ((_a = cesiumUtils.viewer) == null ? void 0 : _a.camera.positionCartographic.height) || 0;
        if (height > __props.showPopoverHeight) return;
        lastPickedEntity.value = data;
        lastPickedPointOptions.value = point.options;
        updateTooltipPosition(cesiumUtils.viewer);
      },
      pointHoverExitHandler: () => {
        isTooltipVisible.value = false;
      }
    });
    function updateTooltipPosition(viewer) {
      var _a, _b, _c;
      try {
        const cartesian = lastPickedEntity.value.position.getValue(viewer.clock.currentTime);
        const options = lastPickedEntity.value.properties.getValue(viewer.clock.currentTime);
        const canvasPosition = SceneTransforms.worldToWindowCoordinates(viewer.scene, cartesian);
        if (canvasPosition && !isNaN(canvasPosition.x) && !isNaN(canvasPosition.y)) {
          isTooltipVisible.value = true;
          if (!tooltip.value) return;
          const height = viewer.camera.positionCartographic.height;
          const scale = Math.max(0.3, Math.min(2, 1 - height / 1e5));
          tooltip.value.style.transform = `scale(${scale})`;
          tooltip.value.style.transformOrigin = `center center`;
          const tooltipWidth = (_a = tooltip.value) == null ? void 0 : _a.offsetWidth;
          const tooltipHeight = (_b = tooltip.value) == null ? void 0 : _b.offsetHeight;
          const offsetX = (tooltipWidth - 40) / 2 + (__props.popoverOffset.popoverOffsetX || 0);
          const offsetY = (tooltipHeight + 8) / 2 + (__props.popoverOffset.popoverOffsetY || 0);
          tooltip.value.style.top = canvasPosition.y - (options.valueInfo.height + offsetY) * scale + "px";
          tooltip.value.style.left = canvasPosition.x - offsetX + "px";
          tooltipContent.value = (_c = lastPickedPointOptions.value) == null ? void 0 : _c.popoverLabel;
        }
      } catch (e) {
        console.error("Error updating tooltip position:", e);
        isTooltipVisible.value = false;
      }
    }
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
      var _a, _b;
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
        (_b = (_a = cesiumUtils.viewer) == null ? void 0 : _a.scene) == null ? void 0 : _b.postRender.addEventListener(function() {
          var _a2;
          const height = ((_a2 = cesiumUtils.viewer) == null ? void 0 : _a2.camera.positionCartographic.height) || 0;
          if (height > __props.showPopoverHeight) {
            isTooltipVisible.value = false;
            return;
          }
          if (isTooltipVisible.value && lastPickedEntity) {
            updateTooltipPosition(cesiumUtils.viewer);
          }
        });
        cesiumUtils.updateViewerAttribute();
        cesiumUtils.setInitialView({ destination: __props.centerPosition }, false);
        const titleUrl = __props.imageryLayersUrl ?? `${__props.baseUrl}/service/api/a466c72ef1ea4f93aae5af7f6ab5b56e/igs/rest/services/SZMAP_Blue_DT_ZW_2024_Q2_4490/WMTSServer?client_id=${__props.clientId}&access_token=${__props.accessToken}`;
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
    const initPointDataChange = watch(
      [initPointDataStatus, () => __props.pointData, () => __props.areaName],
      () => {
        if (!initPointDataStatus.value) {
          clearEntity();
          reloadPointData();
        }
      },
      { deep: true }
    );
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
        }, 8, ["show", "stroke", "style"]),
        withDirectives(createElementVNode(
          "div",
          _hoisted_2,
          [
            createElementVNode(
              "div",
              {
                ref: "tooltipContentRef",
                class: "lc-cesium__tooltip--content"
              },
              toDisplayString(tooltipContent.value),
              513
              /* TEXT, NEED_PATCH */
            )
          ],
          512
          /* NEED_PATCH */
        ), [
          [vShow, isTooltipVisible.value && tooltipContent.value]
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
