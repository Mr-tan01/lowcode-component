import { defineComponent, mergeModels, useModel, createBlock, openBlock, unref, withCtx, createElementVNode, normalizeClass, createVNode, createTextVNode, toDisplayString } from "vue";
import { NSpin, NButton } from "naive-ui";
import LcModal from "../modal/index.js";
import { useCesiumModel } from "./hooks/useCesiumModel.js";
const _hoisted_1 = { class: "lc-cesium-model__viewer-wrap" };
const _hoisted_2 = { class: "lc-cesium-model__panel" };
const _hoisted_3 = { class: "lc-cesium-model__toolbar" };
const _hoisted_4 = { class: "lc-cesium-model__controls" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "modelDialog",
  props: /* @__PURE__ */ mergeModels({
    title: { default: "模型预览" },
    width: { default: "1200px" },
    height: { default: "720px" },
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
    const emit = __emit;
    const {
      rootRef,
      containerRef,
      tileset,
      loading,
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
              class: normalizeClass(["lc-cesium-model", { "is-fullscreen": unref(fullscreen) }])
            },
            [
              createVNode(unref(NSpin), {
                show: unref(loading),
                class: "lc-cesium-model__spin"
              }, {
                default: withCtx(() => [
                  createElementVNode("div", _hoisted_1, [
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
                    createElementVNode("div", _hoisted_2, [
                      createElementVNode("div", _hoisted_3, [
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
                      createElementVNode("div", _hoisted_4, [
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
                      ])
                    ])
                  ])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["show"])
            ],
            2
            /* CLASS */
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
