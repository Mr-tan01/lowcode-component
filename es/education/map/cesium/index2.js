import { defineComponent as h, mergeDefaults as w, ref as H, computed as v, watch as s, onMounted as T, onBeforeUnmount as D, openBlock as b, createElementBlock as C, createVNode as k, unref as P, normalizeStyle as E, withCtx as d, createTextVNode as N, createElementVNode as U } from "vue";
import { cesiumService as I } from "./modules/cesiumUtils.js";
import { cesiumProps as L } from "./modules/props.js";
import { NSpin as x } from "naive-ui";
import { Cartesian3 as B } from "@cesium/engine";
const M = { class: "lc-cesium" }, j = /* @__PURE__ */ h({
  __name: "cesium",
  props: /* @__PURE__ */ w(L, {
    clientId: "74109f7095974ab1a5e930c8e998580d",
    centerPosition: () => B.fromDegrees(114.187446, 22.674131, 13e4),
    pointData: () => []
  }),
  emits: ["pointHandler", "limitHeightHandler", "loadHandler"],
  setup(e, { expose: f, emit: u }) {
    const r = H(!0), n = u;
    function o(i) {
      r.value = i, n("loadHandler", !i);
    }
    const t = new I("cesium-3d-viewer", {
      config: e.basicConfig,
      defaultShowState: e.defaultShowState,
      flyToHeight: e.flyToHeight,
      offsetState: e.offsetState,
      pointHandler: (i) => {
        n("pointHandler", i);
      },
      limitHeightHandler: (i) => {
        n("limitHeightHandler", i);
      },
      loadTileLayerHandler: (i) => {
        o(i);
      }
    });
    function m(i, a) {
      t[i] ? t[i](a) : console.log("未匹配cesiumUtils的方法");
    }
    async function l() {
      var i;
      try {
        if (!e.accessToken)
          return { status: !1 };
        if (t.pointData = e.pointData, t.options.config = e.basicConfig, t.options.defaultShowState = e.defaultShowState, t.options.flyToHeight = e.flyToHeight, t.options.offsetState = e.offsetState, !await t.initViewer(e.controlStatus))
          throw new Error("Viewer 初始化失败");
        t.updateViewerAttribute(), t.setInitialView({ destination: e.centerPosition });
        const y = e.imageryLayersUrl ?? `${e.baseUrl}/service/api/e99b765798d1412b9c2b458a1473396e/igs/rest/services/SZMAP/SZDZDT_2024_Yingji_T1_4490/WMTSServer?client_id=${e.clientId}&access_token=${e.accessToken}`;
        return await t.loadTileLayer(y), e.areaName && (t.addPolygon(e.areaName), t.polygonClickHandler(e.areaName)), (i = e.pointData) == null || i.forEach((c) => {
          e.defaultShowState && t.addPoint(c), t.addPoint(c, "value");
        }), { status: !0 };
      } catch {
        return o(!1), { status: !1 };
      }
    }
    const S = v(() => ({
      "--spin-container-bg": e.spinContainerBg ?? "#6C7E93",
      "--n-spin-description-color": e.spinDescriptionColor ?? "#046ab1"
    })), g = () => {
      t.destroy(), l();
    };
    return f({
      changeModel: m,
      loadedTileLayer: o
    }), s(
      () => e.pointData,
      (i) => {
        t.clearEntity("pointEntities"), t.pointData = i, i == null || i.forEach((a) => {
          t.addPoint(a, "value"), e.defaultShowState && t.addPoint(a);
        });
      }
    ), s([() => e.accessToken, () => e.imageryLayersUrl], g), s(
      () => e.offsetState,
      (i) => {
        t.options = {
          ...t.options,
          offsetState: i
        };
      },
      { deep: !0 }
    ), T(async () => {
      await l();
    }), D(() => {
      t.destroy();
    }), (i, a) => (b(), C("div", M, [
      k(P(x), {
        show: r.value,
        stroke: i.spinStroke,
        style: E(S.value),
        size: "large"
      }, {
        description: d(() => a[0] || (a[0] = [
          N(" 地图加载中... ")
        ])),
        default: d(() => [
          a[1] || (a[1] = U(
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
