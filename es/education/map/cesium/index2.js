import { defineComponent, mergeDefaults, ref, useTemplateRef, nextTick, computed, watch, onMounted, onBeforeUnmount, createElementBlock, openBlock, createVNode, createCommentVNode, withDirectives, unref, normalizeStyle, withCtx, createElementVNode, createTextVNode, toDisplayString, vShow, Fragment, renderList } from "vue";
import { cesiumService } from "./modules/cesiumUtils.js";
import { cesiumProps } from "./modules/props.js";
import { NSpin } from "naive-ui";
import { JulianDate, SceneTransforms, Cartesian3, Matrix4, Cartesian4 } from "@cesium/engine";
const _hoisted_1 = { class: "lc-cesium" };
const _hoisted_2 = {
  ref: "tooltipRef",
  class: "lc-cesium__tooltip"
};
const _hoisted_3 = { class: "lc-cesium__tooltip--content" };
const _hoisted_4 = { class: "lc-cesium__multi-tooltip" };
const _hoisted_5 = { class: "lc-cesium__tooltip--content" };
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
    popoverOffset: () => ({ popoverOffsetX: 0, popoverOffsetY: 0 }),
    enableAllTooltips: false,
    allTooltipsHeight: 1e3
  }),
  emits: ["pointHandler", "limitHeightHandler", "loadHandler"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const initImageryLayersStatus = ref(true);
    const initPointDataStatus = ref(true);
    const isTooltipVisible = ref(false);
    const lastPickedEntity = ref(null);
    const lastPickedPointOptions = ref(null);
    const viewerInitialized = ref(false);
    const tooltipContent = ref("");
    const tooltip = useTemplateRef("tooltipRef");
    const entityTooltipRefs = ref([]);
    const showAllEntitiesTooltips = ref(false);
    const lowHeightTooltips = ref([]);
    const lowHeightTooltipUpdateId = ref();
    const emit = __emit;
    const isPositionInView = (position, viewer) => {
      try {
        const camera = viewer.camera;
        const viewMatrix = camera.viewMatrix;
        const projectionMatrix = camera.frustum.projectionMatrix;
        const viewProjectionMatrix = Matrix4.multiply(projectionMatrix, viewMatrix, new Matrix4());
        const positionClone = Cartesian3.clone(position);
        const positionHomogeneous = new Cartesian4(positionClone.x, positionClone.y, positionClone.z, 1);
        Matrix4.multiplyByVector(viewProjectionMatrix, positionHomogeneous, positionHomogeneous);
        const w = positionHomogeneous.w;
        if (Math.abs(w) < 1e-6) {
          return false;
        }
        const x = positionHomogeneous.x / w;
        const y = positionHomogeneous.y / w;
        const z = positionHomogeneous.z / w;
        return x >= -1 && x <= 1 && y >= -1 && y <= 1 && z >= -1 && z <= 1;
      } catch (error) {
        console.warn("检查位置可见性失败:", error);
        return true;
      }
    };
    const getEntityContent = (entity, currentTime) => {
      try {
        if (entity.properties) {
          const properties = entity.properties.getValue(currentTime);
          if (properties) {
            return properties.options.popoverLabel;
          }
        }
        return "未知实体";
      } catch (e) {
        console.warn("获取实体内容失败:", e);
        return "未知实体";
      }
    };
    const getAllVisibleEntities = () => {
      var _a;
      try {
        const viewer = cesiumUtils.viewer;
        if (!viewer) return [];
        const dataSourceEntities = ((_a = cesiumUtils.dataSource) == null ? void 0 : _a.entities.values) || [];
        const allEntities = [...dataSourceEntities];
        const visibleEntities = [];
        const currentTime = viewer.clock.currentTime;
        for (const entity of allEntities) {
          try {
            let position;
            if (entity.position) {
              if (typeof entity.position.getValue === "function") {
                position = entity.position.getValue(currentTime);
              } else if (entity.position.x !== void 0) {
                position = entity.position;
              }
            }
            if (!position) {
              continue;
            }
            if (isPositionInView(position, viewer)) {
              visibleEntities.push(entity);
            }
          } catch (e) {
            console.warn("获取实体信息失败:", e, entity);
          }
        }
        return visibleEntities;
      } catch (error) {
        console.error("获取可视实体失败:", error);
        return [];
      }
    };
    const updateAllEntitiesTooltips = () => {
      var _a;
      const viewer = cesiumUtils.viewer;
      if (!viewer || !showAllEntitiesTooltips.value) return;
      const scene = viewer.scene;
      const canvas = scene.canvas;
      const currentTime = viewer.clock.currentTime;
      const height = viewer.camera.positionCartographic.height;
      const scale = Math.max(0.3, Math.min(2, 1 - height / 1e5));
      const visibleEntities = getAllVisibleEntities();
      const tooltips = [];
      for (const entity of visibleEntities) {
        const options = (_a = entity.properties) == null ? void 0 : _a.getValue(currentTime);
        try {
          let position;
          if (entity.position) {
            if (typeof entity.position.getValue === "function") {
              position = entity.position.getValue(currentTime);
            } else if (entity.position.x !== void 0) {
              position = entity.position;
            }
          }
          if (!position) {
            continue;
          }
          const canvasPosition = SceneTransforms.worldToWindowCoordinates(scene, position);
          if (!canvasPosition || isNaN(canvasPosition.x) || isNaN(canvasPosition.y)) {
            continue;
          }
          const content = getEntityContent(entity, currentTime);
          if (canvasPosition.x < 0 || canvasPosition.x > canvas.width || canvasPosition.y < 0 || canvasPosition.y > canvas.height) {
            continue;
          }
          if (tooltips.length < 100) {
            const estimatedWidth = Math.min(Math.max(content.length * 10, 80), 300);
            const estimatedHeight = 40;
            const offsetX = (estimatedWidth - 40) / 2 + (__props.popoverOffset.popoverOffsetX || 0);
            const offsetY = (estimatedHeight + 8) / 2 + (__props.popoverOffset.popoverOffsetY || 0);
            tooltips.push({
              id: entity.id || `entity_${Math.random()}_${Date.now()}`,
              content,
              style: {
                top: `${canvasPosition.y - options.valueInfo.height * scale - offsetY}px`,
                left: `${canvasPosition.x - offsetX}px`,
                transform: `scale(${scale})`,
                transformOrigin: "center center"
              }
            });
          }
        } catch (e) {
          console.warn("更新实体tooltip失败:", e, entity);
        }
      }
      lowHeightTooltips.value = tooltips;
      nextTick(() => {
        if (!showAllEntitiesTooltips.value || !entityTooltipRefs.value.length) return;
        const tooltipElements = entityTooltipRefs.value;
        const updatedTooltips = [...lowHeightTooltips.value];
        tooltipElements.forEach((tooltipEl, index) => {
          var _a2;
          if (!tooltipEl || index >= updatedTooltips.length) return;
          const tooltipWidth = tooltipEl.offsetWidth;
          const tooltipHeight = tooltipEl.offsetHeight;
          const offsetX = (tooltipWidth - 40) / 2 + (__props.popoverOffset.popoverOffsetX || 0);
          const offsetY = (tooltipHeight + 8) / 2 + (__props.popoverOffset.popoverOffsetY || 0);
          const viewer2 = cesiumUtils.viewer;
          if (!viewer2) return;
          const entity = visibleEntities[index];
          const options = (_a2 = entity.properties) == null ? void 0 : _a2.getValue(currentTime);
          if (!entity) return;
          try {
            let position;
            if (entity.position) {
              if (typeof entity.position.getValue === "function") {
                position = entity.position.getValue(viewer2.clock.currentTime);
              } else if (entity.position.x !== void 0) {
                position = entity.position;
              }
            }
            if (!position) return;
            const canvasPosition = SceneTransforms.worldToWindowCoordinates(viewer2.scene, position);
            if (!canvasPosition || isNaN(canvasPosition.x) || isNaN(canvasPosition.y)) {
              return;
            }
            updatedTooltips[index].style = {
              ...updatedTooltips[index].style,
              left: `${canvasPosition.x - offsetX}px`,
              top: `${canvasPosition.y - options.valueInfo.height * scale - offsetY}px`
            };
          } catch (e) {
            console.warn("精确调整tooltip位置失败:", e);
          }
        });
        lowHeightTooltips.value = updatedTooltips;
      });
    };
    const clearLowHeightUpdate = () => {
      if (lowHeightTooltipUpdateId.value) {
        clearInterval(lowHeightTooltipUpdateId.value);
        lowHeightTooltipUpdateId.value = null;
      }
    };
    const startLowHeightTooltipUpdate = () => {
      clearLowHeightUpdate();
      updateAllEntitiesTooltips();
      lowHeightTooltipUpdateId.value = setInterval(() => {
        if (showAllEntitiesTooltips.value && cesiumUtils.viewer) {
          updateAllEntitiesTooltips();
        }
      }, 200);
    };
    const limitHeightHandler = (value) => {
      if (!__props.enableAllTooltips) {
        emit("limitHeightHandler", value);
        return;
      }
      if (value <= __props.allTooltipsHeight) {
        showAllEntitiesTooltips.value = true;
        isTooltipVisible.value = false;
        startLowHeightTooltipUpdate();
        updateAllEntitiesTooltips();
      } else {
        showAllEntitiesTooltips.value = false;
        lowHeightTooltips.value = [];
        clearLowHeightUpdate();
      }
      emit("limitHeightHandler", value);
    };
    const reloadPointData = async () => {
      await clearEntity();
      const offsetPointData = cesiumUtils.offsetDuplicateCoordinates(__props.pointData, "lng", "lat", __props.openOffset.offset);
      if (__props.openOffset.flag) {
        cesiumUtils.pointData = offsetPointData;
      } else {
        cesiumUtils.pointData = __props.pointData;
      }
      await cesiumUtils.batchRenderPoints(cesiumUtils.pointData || [], __props.defaultShowState, __props.pointBatchRender);
      cesiumUtils.handleCameraHeightChange();
    };
    const loadedTileLayer = (status) => {
      initPointDataStatus.value = status;
    };
    const loadImageryLayers = (status) => {
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
      limitHeightHandler,
      loadTileLayerHandler: (status) => {
        loadImageryLayers(status);
      },
      createdTooltip: (data, point) => {
        var _a;
        if (showAllEntitiesTooltips.value) return;
        const height = ((_a = cesiumUtils.viewer) == null ? void 0 : _a.camera.positionCartographic.height) || 0;
        if (height > __props.showPopoverHeight) return;
        lastPickedEntity.value = data;
        lastPickedPointOptions.value = point.options;
        updateTooltipPosition(cesiumUtils.viewer);
      },
      pointHoverExitHandler: () => {
        if (!showAllEntitiesTooltips.value) {
          isTooltipVisible.value = false;
        }
      }
    });
    function updateTooltipPosition(viewer) {
      var _a, _b, _c;
      try {
        if (!lastPickedEntity.value) return;
        const cartesian = (_a = lastPickedEntity.value.position) == null ? void 0 : _a.getValue(viewer.clock.currentTime);
        const options = (_b = lastPickedEntity.value.properties) == null ? void 0 : _b.getValue(viewer.clock.currentTime);
        if (!cartesian) {
          isTooltipVisible.value = false;
          return;
        }
        const canvasPosition = SceneTransforms.worldToWindowCoordinates(viewer.scene, cartesian);
        if (canvasPosition && !isNaN(canvasPosition.x) && !isNaN(canvasPosition.y)) {
          isTooltipVisible.value = true;
          if ((_c = lastPickedPointOptions.value) == null ? void 0 : _c.popoverLabel) {
            tooltipContent.value = lastPickedPointOptions.value.popoverLabel;
          } else {
            tooltipContent.value = getEntityContent(lastPickedEntity.value, viewer.clock.currentTime);
          }
          nextTick(() => {
            var _a2, _b2;
            if (!tooltip.value) return;
            const height = viewer.camera.positionCartographic.height;
            const scale = Math.max(0.3, Math.min(2, 1 - height / 1e5));
            tooltip.value.style.transform = `scale(${scale})`;
            tooltip.value.style.transformOrigin = `center center`;
            const tooltipWidth = (_a2 = tooltip.value) == null ? void 0 : _a2.offsetWidth;
            const tooltipHeight = (_b2 = tooltip.value) == null ? void 0 : _b2.offsetHeight;
            const offsetX = (tooltipWidth - 40) / 2 + (__props.popoverOffset.popoverOffsetX || 0);
            const offsetY = (tooltipHeight + 8) / 2 + (__props.popoverOffset.popoverOffsetY || 0);
            tooltip.value.style.top = canvasPosition.y - options.valueInfo.height * scale - offsetY + "px";
            tooltip.value.style.left = canvasPosition.x - offsetX + "px";
          });
        }
      } catch (e) {
        console.error("Error updating tooltip position:", e);
        isTooltipVisible.value = false;
      }
    }
    const clearEntity = async () => {
      await cesiumUtils.clearEntity("pointEntities", "dataSource");
      await cesiumUtils.clearEntity("pointEntities", "viewer");
    };
    const changeModel = (type, value) => {
      if (cesiumUtils[type]) {
        cesiumUtils[type](value);
      } else {
        console.log("未匹配cesiumUtils的方法");
      }
    };
    const initCesium = async () => {
      var _a;
      try {
        if (!__props.accessToken) {
          loadedTileLayer(false);
          return;
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
        viewerInitialized.value = true;
        const viewer = cesiumUtils.viewer;
        (_a = viewer == null ? void 0 : viewer.scene) == null ? void 0 : _a.postRender.addEventListener(function() {
          const height = (viewer == null ? void 0 : viewer.camera.positionCartographic.height) || 0;
          if (showAllEntitiesTooltips.value && height <= 1e3) {
            updateAllEntitiesTooltips();
            return;
          }
          if (height > __props.showPopoverHeight) {
            isTooltipVisible.value = false;
            return;
          }
          if (isTooltipVisible.value && lastPickedEntity.value) {
            updateTooltipPosition(viewer);
          }
        });
        cesiumUtils.updateViewerAttribute();
        cesiumUtils.setInitialView({ destination: __props.centerPosition }, false);
        const titleUrl = __props.imageryLayersUrl ?? `${__props.baseUrl}/service/api/a466c72ef1ea4f93aae5af7f6ab5b56e/igs/rest/services/SZMAP_Blue_DT_ZW_2024_Q2_4490/WMTSServer?client_id=${__props.clientId}&access_token=${__props.accessToken}`;
        await cesiumUtils.loadTileLayer(titleUrl);
        if (__props.areaName) {
          cesiumUtils.polygonClickHandler(__props.areaName);
        }
        loadedTileLayer(false);
      } catch {
        loadedTileLayer(false);
      }
    };
    const spinStyle = computed(() => {
      return {
        "--spin-container-bg": __props.spinContainerBg ?? "#6C7E93",
        "--n-spin-description-color": __props.spinDescriptionColor ?? "#046ab1"
      };
    });
    const initCesiumDebounced = async () => {
      clearLowHeightUpdate();
      showAllEntitiesTooltips.value = false;
      lowHeightTooltips.value = [];
      cesiumUtils.destroy();
      await initCesium();
    };
    __expose({
      reloadPointData,
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
      [initPointDataStatus, () => __props.pointData, () => __props.areaName, viewerInitialized],
      async () => {
        if (!viewerInitialized.value || initPointDataStatus.value) {
          return;
        }
        await reloadPointData();
      },
      { deep: true }
    );
    onMounted(async () => {
      await initCesium();
    });
    onBeforeUnmount(() => {
      clearLowHeightUpdate();
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
        createCommentVNode(" 悬浮tooltip（原功能） "),
        withDirectives(createElementVNode(
          "div",
          _hoisted_2,
          [
            createElementVNode(
              "div",
              _hoisted_3,
              toDisplayString(tooltipContent.value),
              1
              /* TEXT */
            )
          ],
          512
          /* NEED_PATCH */
        ), [
          [vShow, isTooltipVisible.value && tooltipContent.value && !showAllEntitiesTooltips.value]
        ]),
        createCommentVNode(" 多实体tooltip容器（新功能） "),
        withDirectives(createElementVNode(
          "div",
          _hoisted_4,
          [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(lowHeightTooltips.value, (item) => {
                return openBlock(), createElementBlock(
                  "div",
                  {
                    ref_for: true,
                    ref_key: "entityTooltipRefs",
                    ref: entityTooltipRefs,
                    key: item.id,
                    class: "lc-cesium__tooltip lc-cesium__tooltip--entity",
                    style: normalizeStyle(item.style)
                  },
                  [
                    createElementVNode(
                      "div",
                      _hoisted_5,
                      toDisplayString(item.content),
                      1
                      /* TEXT */
                    )
                  ],
                  4
                  /* STYLE */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          512
          /* NEED_PATCH */
        ), [
          [vShow, showAllEntitiesTooltips.value && lowHeightTooltips.value.length > 0]
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
