import { defineComponent as h, mergeDefaults as w, ref as H, computed as v, watch as s, onMounted as T, onBeforeUnmount as D, openBlock as b, createElementBlock as C, createVNode as k, unref as P, normalizeStyle as E, withCtx as d, createTextVNode as U, createElementVNode as I } from "vue";
import { cesiumService as L } from "./modules/cesiumUtils.js";
import { cesiumProps as N } from "./modules/props.js";
import { NSpin as x } from "naive-ui";
import { Cartesian3 as B } from "@cesium/engine";
const M = { class: "lc-cesium" }, j = /* @__PURE__ */ h({
  __name: "cesium",
  props: /* @__PURE__ */ w(N, {
    clientId: "74109f7095974ab1a5e930c8e998580d",
    centerPosition: () => B.fromDegrees(114.187446, 22.674131, 13e4),
    pointData: () => []
  }),
  emits: ["pointHandler", "limitHeightHandler", "loadHandler"],
  setup(e, { expose: f, emit: u }) {
    const r = H(!0), n = u;
    function o(t) {
      r.value = t, n("loadHandler", !t);
    }
    const i = new L("cesium-3d-viewer", {
      config: e.basicConfig,
      defaultShowState: e.defaultShowState,
      flyToHeight: e.flyToHeight,
      offsetState: e.offsetState,
      pointHandler: (t) => {
        n("pointHandler", t);
      },
      limitHeightHandler: (t) => {
        n("limitHeightHandler", t);
      },
      loadTileLayerHandler: (t) => {
        o(t);
      }
    });
    function m(t, a) {
      i[t] ? i[t](a) : console.log("未匹配cesiumUtils的方法");
    }
    async function l() {
      var t;
      try {
        if (!e.accessToken)
          return { status: !1 };
        if (i.pointData = e.pointData, i.options.config = e.basicConfig, i.options.defaultShowState = e.defaultShowState, i.options.flyToHeight = e.flyToHeight, i.options.offsetState = e.offsetState, !await i.initViewer(e.controlStatus))
          throw new Error("Viewer 初始化失败");
        i.updateViewerAttribute(), i.setInitialView({ destination: e.centerPosition });
        const y = e.imageryLayersUrl ?? `${e.baseUrl}/service/api/e99b765798d1412b9c2b458a1473396e/igs/rest/services/SZMAP/SZDZDT_2024_Yingji_T1_4490/WMTSServer?client_id=${e.clientId}&access_token=${e.accessToken}`;
        return await i.loadTileLayer(y), e.areaName && i.addPolygon(e.areaName), (t = e.pointData) == null || t.forEach((c) => {
          e.defaultShowState && i.addPoint(c), i.addPoint(c, "value");
        }), { status: !0 };
      } catch {
        return o(!1), { status: !1 };
      }
    }
    const S = v(() => ({
      "--spin-container-bg": e.spinContainerBg ?? "#6C7E93",
      "--n-spin-description-color": e.spinDescriptionColor ?? "#046ab1"
    })), g = () => {
      i.destroy(), l();
    };
    return f({
      changeModel: m,
      loadedTileLayer: o
    }), s(
      () => e.pointData,
      (t) => {
        i.clearEntity("pointEntities"), i.pointData = t, t == null || t.forEach((a) => {
          i.addPoint(a, "value"), e.defaultShowState && i.addPoint(a);
        });
      }
    ), s([() => e.accessToken, () => e.imageryLayersUrl], g), s(
      () => e.offsetState,
      (t) => {
        i.options = {
          ...i.options,
          offsetState: t
        };
      },
      { deep: !0 }
    ), T(async () => {
      await l();
    }), D(() => {
      i.destroy();
    }), (t, a) => (b(), C("div", M, [
      k(P(x), {
        show: r.value,
        stroke: t.spinStroke,
        style: E(S.value),
        size: "large"
      }, {
        description: d(() => a[0] || (a[0] = [
          U(" 地图加载中... ")
        ])),
        default: d(() => [
          a[1] || (a[1] = I(
            "div",
            {
              class: "lc-cesium_map",
              id: "cesium-3d-viewer"
            },
            null,
            -1
            /* HOISTED */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["show", "stroke", "style"])
    ]));
  }
});
export {
  j as default
};
