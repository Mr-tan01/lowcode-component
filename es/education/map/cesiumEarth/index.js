import { defineComponent, mergeModels, useModel, ref, watch, computed, onMounted, onBeforeUnmount, openBlock, createBlock, unref, normalizeStyle, withCtx, createTextVNode, createElementVNode } from "vue";
import { useInitPlanet, EchartsLayer } from "./hooks.js";
import defaultEarth from "./images/default.jpeg.js";
import { NSpin } from "naive-ui";
import { Cartesian3 } from "@cesium/engine";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "cesiumEarth",
  props: /* @__PURE__ */ mergeModels({
    echartsOptions: {
      type: Object,
      default: () => {
      }
    },
    cesiumOptions: {
      type: Object,
      default: () => {
      }
    },
    spinStroke: { type: String, default: "#046ab1" },
    // spin图标颜色
    spinContainerBg: { type: String, default: "#6C7E93" },
    // spin遮挡背景
    spinDescriptionColor: {
      type: String,
      default: "#046ab1"
    },
    // spin文字颜色
    // 中心点
    centerPosition: {
      type: Object,
      default: () => Cartesian3.fromDegrees(116.4551, 40.2539, 2e7)
    },
    // 自动旋转速度
    rotateSpeed: {
      type: Number,
      default: 0.3
    },
    // 默认是否开启自动旋转
    defaultRotate: {
      type: Boolean,
      default: true
    },
    // 地图拼命曲率图地址
    baseUrl: {
      type: String,
      default: defaultEarth,
      require: true
    }
  }, {
    "loading": { type: Boolean, ...{ default: false } },
    "loadingModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["handle-click"], ["update:loading"]),
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const loading = useModel(__props, "loading");
    const echartsLayer = ref();
    const { initViewer, destroyViewer, viewer, startRotation } = useInitPlanet(props);
    const initEcharts = () => {
      var _a;
      echartsLayer.value = new EchartsLayer(viewer.value, props.echartsOptions);
      (_a = echartsLayer.value) == null ? void 0 : _a._overlay.on("click", (params) => emit("handle-click", params));
    };
    watch(
      () => props.echartsOptions,
      (val) => {
        var _a;
        if (val) {
          if (!echartsLayer.value) {
            initEcharts();
            startRotation();
            return;
          }
          (_a = echartsLayer.value) == null ? void 0 : _a.updateOverlay(val);
          startRotation();
        }
      }
    );
    const spinStyle = computed(() => {
      return {
        "--spin-container-bg": props.spinContainerBg ?? "#6C7E93",
        "--n-spin-description-color": props.spinDescriptionColor ?? "#046ab1"
      };
    });
    onMounted(async () => {
      await initViewer();
      window.addEventListener("resize", () => {
        var _a;
        return (_a = echartsLayer.value) == null ? void 0 : _a.resize();
      });
    });
    onBeforeUnmount(() => {
      destroyViewer();
      window.removeEventListener("resize", () => {
        var _a;
        return (_a = echartsLayer.value) == null ? void 0 : _a.resize();
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(NSpin), {
        show: loading.value,
        stroke: __props.spinStroke,
        style: normalizeStyle(spinStyle.value),
        size: "large"
      }, {
        description: withCtx(() => _cache[0] || (_cache[0] = [
          createTextVNode(" 地图加载中... ")
        ])),
        default: withCtx(() => [
          _cache[1] || (_cache[1] = createElementVNode(
            "div",
            {
              id: "cesium3D-box",
              class: "lc-cesium-earth"
            },
            null,
            -1
            /* HOISTED */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["show", "stroke", "style"]);
    };
  }
});
export {
  _sfc_main as default
};
