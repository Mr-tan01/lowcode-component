import { defineComponent as g, mergeModels as a, useModel as v, ref as w, watch as h, computed as b, onMounted as S, onBeforeUnmount as k, openBlock as C, createBlock as E, unref as O, normalizeStyle as z, withCtx as s, createTextVNode as B, createElementVNode as x } from "vue";
import { useInitPlanet as D, EchartsLayer as L } from "./hooks.js";
import M from "./images/default.jpeg.js";
import { NSpin as N } from "naive-ui";
import { Cartesian3 as V } from "@cesium/engine";
const I = /* @__PURE__ */ g({
  __name: "cesiumEarth",
  props: /* @__PURE__ */ a({
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
    spinDescriptionColor: { type: String, default: "#046ab1" },
    // spin文字颜色
    // 中心点
    centerPosition: {
      type: Object,
      default: () => V.fromDegrees(116.4551, 40.2539, 2e7)
    },
    // 自动旋转速度
    rotateSpeed: {
      type: Number,
      default: 0.3
    },
    // 默认是否开启自动旋转
    defaultRotate: {
      type: Boolean,
      default: !0
    },
    // 地图拼命曲率图地址
    baseUrl: {
      type: String,
      default: M,
      require: !0
    }
  }, {
    loading: { default: !1 },
    loadingModifiers: {}
  }),
  emits: /* @__PURE__ */ a(["handle-click"], ["update:loading"]),
  setup(n, { emit: l }) {
    const u = l, i = n, d = v(n, "loading"), r = w(), { initViewer: c, destroyViewer: p, viewer: f, startRotation: o } = D(i), m = () => {
      var e;
      r.value = new L(f.value, i.echartsOptions), (e = r.value) == null || e._overlay.on("click", (t) => u("handle-click", t));
    };
    h(
      () => i.echartsOptions,
      (e) => {
        var t;
        if (e) {
          if (!r.value) {
            m(), o();
            return;
          }
          (t = r.value) == null || t.updateOverlay(e), o();
        }
      }
    );
    const y = b(() => ({
      "--spin-container-bg": i.spinContainerBg ?? "#6C7E93",
      "--n-spin-description-color": i.spinDescriptionColor ?? "#046ab1"
    }));
    return S(async () => {
      await c(), window.addEventListener("resize", () => {
        var e;
        return (e = r.value) == null ? void 0 : e.resize();
      });
    }), k(() => {
      p(), window.removeEventListener("resize", () => {
        var e;
        return (e = r.value) == null ? void 0 : e.resize();
      });
    }), (e, t) => (C(), E(O(N), {
      show: d.value,
      stroke: n.spinStroke,
      style: z(y.value),
      size: "large"
    }, {
      description: s(() => t[0] || (t[0] = [
        B(" 地图加载中... ")
      ])),
      default: s(() => [
        t[1] || (t[1] = x(
          "div",
          {
            class: "lc-cesium-earth",
            id: "cesium3D-box"
          },
          null,
          -1
          /* HOISTED */
        ))
      ]),
      _: 1
      /* STABLE */
    }, 8, ["show", "stroke", "style"]));
  }
});
export {
  I as default
};
