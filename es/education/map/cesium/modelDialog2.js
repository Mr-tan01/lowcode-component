import { defineComponent, mergeModels, useModel, computed, createBlock, openBlock, unref, withCtx, createElementVNode, normalizeStyle, normalizeClass, createVNode, createElementBlock, createCommentVNode, createTextVNode, toDisplayString } from "vue";
import { NSpin, NResult, NSpace, NButton } from "naive-ui";
import LcModal from "../modal/index.js";
import { useCesiumModel } from "./hooks/useCesiumModel.js";
const _hoisted_1 = {
  key: 0,
  class: "lc-cesium-model__state"
};
const _hoisted_2 = {
  key: 1,
  class: "lc-cesium-model__viewer-wrap"
};
const _hoisted_3 = {
  key: 0,
  class: "lc-cesium-model__panel"
};
const _hoisted_4 = { class: "lc-cesium-model__toolbar" };
const _hoisted_5 = {
  key: 0,
  class: "lc-cesium-model__controls"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "modelDialog",
  props: /* @__PURE__ */ mergeModels({
    title: { default: "模型预览" },
    width: { default: "1200px" },
    height: { default: "720px" },
    display: { default: () => ({
      viewerBackground: "rgba(1, 17, 39, 0.86)",
      panelBackground: "rgba(5, 25, 51, 0.68)",
      panelBorderColor: "rgba(77, 172, 255, 0.42)",
      panelTextColor: "#ffffff",
      sceneBackgroundColor: "#ffffff",
      loadingDescription: "模型加载中，请稍候",
      loadingStroke: "#4dafff",
      errorTitle: "模型加载失败",
      errorDescription: "请检查模型服务或稍后重试",
      retryText: "重试",
      showToolbar: true,
      showControls: true,
      showRetryButton: true
    }) },
    version: { default: "v2" },
    layerId: {},
    appId: { default: void 0 },
    token: { default: null },
    baseUrl: { default: "https://jysl.sz.edu.cn:8314/service/api/gzj/igs/rest/services/xxtc" },
    tilesetFile: { default: "tileset.json" },
    longitudeOffset: { default: 0 },
    latitudeOffset: { default: 0 },
    heightOffset: { default: 0 },
    fitToGround: { type: Boolean, default: false },
    groundHeight: { default: void 0 },
    modelBaseHeight: { default: void 0 },
    heading: { default: 0 },
    pitch: { default: 0 },
    roll: { default: 0 },
    scale: { default: 1 },
    enhance3D: { type: Boolean, default: true },
    enableShadows: { type: Boolean, default: true },
    operationSpeed: { default: "normal" },
    rotateStep: { default: void 0 },
    autoRotateInterval: { default: 200 },
    tokenLoader: {},
    options: { default: void 0 },
    modelOptions: { default: void 0 },
    terrainProvider: { default: void 0 }
  }, {
    "show": { type: Boolean, ...{ default: false } },
    "showModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["loaded", "loadError"], ["update:show"]),
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const visible = useModel(__props, "show");
    const defaultDisplay = {
      viewerBackground: "rgba(1, 17, 39, 0.86)",
      panelBackground: "rgba(5, 25, 51, 0.68)",
      panelBorderColor: "rgba(77, 172, 255, 0.42)",
      panelTextColor: "#ffffff",
      sceneBackgroundColor: "#ffffff",
      loadingDescription: "模型加载中，请稍候",
      loadingStroke: "#4dafff",
      errorTitle: "模型加载失败",
      errorDescription: "请检查模型服务或稍后重试",
      retryText: "重试",
      showToolbar: true,
      showControls: true,
      showRetryButton: true
    };
    const display = computed(() => ({ ...defaultDisplay, ...props.display ?? {} }));
    const emit = __emit;
    const {
      rootRef,
      containerRef,
      tileset,
      loading,
      retrying,
      loadError,
      loadStatusText,
      autoRotating,
      fullscreen,
      reloadModel,
      locateModel,
      resetView,
      zoomIn,
      zoomOut,
      rotateLeft,
      rotateRight,
      raiseModel,
      lowerModel,
      resetTransform,
      toggleAutoRotate,
      toggleFullscreen
    } = useCesiumModel(props, visible, emit);
    const rootStyle = computed(() => ({
      "--lc-cesium-model-viewer-bg": display.value.viewerBackground,
      "--lc-cesium-model-panel-bg": display.value.panelBackground,
      "--lc-cesium-model-panel-border": display.value.panelBorderColor,
      "--lc-cesium-model-panel-text": display.value.panelTextColor,
      "--n-spin-description-color": display.value.panelTextColor,
      "--lc-cesium-model-retry-text-color": display.value.panelTextColor
    }));
    __expose({
      reloadModel,
      locateModel,
      resetView,
      resetTransform,
      raiseModel,
      lowerModel,
      toggleAutoRotate,
      toggleFullscreen
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(LcModal), {
        show: visible.value,
        "onUpdate:show": _cache[1] || (_cache[1] = ($event) => visible.value = $event),
        title: _ctx.title,
        width: _ctx.width,
        height: _ctx.height,
        "size-mode": "large"
      }, {
        default: withCtx(() => [
          createElementVNode(
            "div",
            {
              ref_key: "rootRef",
              ref: rootRef,
              class: normalizeClass(["lc-cesium-model", { "is-fullscreen": unref(fullscreen), "is-loading": unref(loading), "is-error": !!unref(loadError) }]),
              style: normalizeStyle(rootStyle.value)
            },
            [
              createVNode(unref(NSpin), {
                show: unref(loading),
                description: display.value.loadingDescription || unref(loadStatusText),
                stroke: display.value.loadingStroke || "#18a058",
                size: "large",
                class: "lc-cesium-model__spin"
              }, {
                default: withCtx(() => [
                  unref(loadError) ? (openBlock(), createElementBlock("div", _hoisted_1, [
                    createVNode(unref(NResult), {
                      status: "error",
                      title: display.value.errorTitle || "模型加载失败",
                      description: unref(retrying) ? display.value.retryDescription || "正在重新加载，请稍候" : display.value.errorDescription || "模型加载异常，请点击重试"
                    }, {
                      footer: withCtx(() => [
                        display.value.showRetryButton !== false ? (openBlock(), createBlock(unref(NSpace), {
                          key: 0,
                          justify: "center"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(NButton), {
                              type: "primary",
                              loading: unref(loading) || unref(retrying),
                              onClick: unref(reloadModel)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(
                                  toDisplayString(display.value.retryText || "重试"),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              _: 1
                              /* STABLE */
                            }, 8, ["loading", "onClick"])
                          ]),
                          _: 1
                          /* STABLE */
                        })) : createCommentVNode("v-if", true)
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["title", "description"])
                  ])) : (openBlock(), createElementBlock("div", _hoisted_2, [
                    createElementVNode(
                      "div",
                      {
                        ref_key: "containerRef",
                        ref: containerRef,
                        class: "lc-cesium-model__viewer"
                      },
                      null,
                      512
                      /* NEED_PATCH */
                    ),
                    display.value.showToolbar !== false ? (openBlock(), createElementBlock("div", _hoisted_3, [
                      createElementVNode("div", _hoisted_4, [
                        createVNode(unref(NButton), {
                          size: "small",
                          disabled: !unref(tileset),
                          onClick: _cache[0] || (_cache[0] = ($event) => unref(locateModel)())
                        }, {
                          default: withCtx(() => [..._cache[2] || (_cache[2] = [
                            createTextVNode(
                              "定位",
                              -1
                              /* CACHED */
                            )
                          ])]),
                          _: 1
                          /* STABLE */
                        }, 8, ["disabled"]),
                        createVNode(unref(NButton), {
                          size: "small",
                          type: "primary",
                          loading: unref(loading),
                          onClick: unref(reloadModel)
                        }, {
                          default: withCtx(() => [..._cache[3] || (_cache[3] = [
                            createTextVNode(
                              "重载",
                              -1
                              /* CACHED */
                            )
                          ])]),
                          _: 1
                          /* STABLE */
                        }, 8, ["loading", "onClick"]),
                        createVNode(unref(NButton), {
                          size: "small",
                          disabled: !unref(tileset),
                          onClick: unref(toggleFullscreen)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(
                              toDisplayString(unref(fullscreen) ? "退出全屏" : "全屏"),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["disabled", "onClick"])
                      ]),
                      display.value.showControls !== false ? (openBlock(), createElementBlock("div", _hoisted_5, [
                        createVNode(unref(NButton), {
                          size: "small",
                          disabled: !unref(tileset),
                          onClick: unref(rotateLeft)
                        }, {
                          default: withCtx(() => [..._cache[4] || (_cache[4] = [
                            createTextVNode(
                              "左转",
                              -1
                              /* CACHED */
                            )
                          ])]),
                          _: 1
                          /* STABLE */
                        }, 8, ["disabled", "onClick"]),
                        createVNode(unref(NButton), {
                          size: "small",
                          disabled: !unref(tileset),
                          onClick: unref(rotateRight)
                        }, {
                          default: withCtx(() => [..._cache[5] || (_cache[5] = [
                            createTextVNode(
                              "右转",
                              -1
                              /* CACHED */
                            )
                          ])]),
                          _: 1
                          /* STABLE */
                        }, 8, ["disabled", "onClick"]),
                        createVNode(unref(NButton), {
                          size: "small",
                          disabled: !unref(tileset),
                          onClick: unref(raiseModel)
                        }, {
                          default: withCtx(() => [..._cache[6] || (_cache[6] = [
                            createTextVNode(
                              "抬高",
                              -1
                              /* CACHED */
                            )
                          ])]),
                          _: 1
                          /* STABLE */
                        }, 8, ["disabled", "onClick"]),
                        createVNode(unref(NButton), {
                          size: "small",
                          disabled: !unref(tileset),
                          onClick: unref(lowerModel)
                        }, {
                          default: withCtx(() => [..._cache[7] || (_cache[7] = [
                            createTextVNode(
                              "降低",
                              -1
                              /* CACHED */
                            )
                          ])]),
                          _: 1
                          /* STABLE */
                        }, 8, ["disabled", "onClick"]),
                        createVNode(unref(NButton), {
                          size: "small",
                          disabled: !unref(tileset),
                          onClick: unref(zoomIn)
                        }, {
                          default: withCtx(() => [..._cache[8] || (_cache[8] = [
                            createTextVNode(
                              "拉近",
                              -1
                              /* CACHED */
                            )
                          ])]),
                          _: 1
                          /* STABLE */
                        }, 8, ["disabled", "onClick"]),
                        createVNode(unref(NButton), {
                          size: "small",
                          disabled: !unref(tileset),
                          onClick: unref(zoomOut)
                        }, {
                          default: withCtx(() => [..._cache[9] || (_cache[9] = [
                            createTextVNode(
                              "拉远",
                              -1
                              /* CACHED */
                            )
                          ])]),
                          _: 1
                          /* STABLE */
                        }, 8, ["disabled", "onClick"]),
                        createVNode(unref(NButton), {
                          size: "small",
                          disabled: !unref(tileset),
                          onClick: unref(resetTransform)
                        }, {
                          default: withCtx(() => [..._cache[10] || (_cache[10] = [
                            createTextVNode(
                              "重置",
                              -1
                              /* CACHED */
                            )
                          ])]),
                          _: 1
                          /* STABLE */
                        }, 8, ["disabled", "onClick"]),
                        createVNode(unref(NButton), {
                          size: "small",
                          disabled: !unref(tileset),
                          onClick: unref(toggleAutoRotate)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(
                              toDisplayString(unref(autoRotating) ? "停止" : "旋转"),
                              1
                              /* TEXT */
                            )
                          ]),
                          _: 1
                          /* STABLE */
                        }, 8, ["disabled", "onClick"])
                      ])) : createCommentVNode("v-if", true)
                    ])) : createCommentVNode("v-if", true)
                  ]))
                ]),
                _: 1
                /* STABLE */
              }, 8, ["show", "description", "stroke"])
            ],
            6
            /* CLASS, STYLE */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["show", "title", "width", "height"]);
    };
  }
});
export {
  _sfc_main as default
};
