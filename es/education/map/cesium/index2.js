import { defineComponent as y, mergeDefaults as h, ref as w, computed as H, watch as r, onMounted as v, onBeforeUnmount as T, openBlock as D, createElementBlock as b, createVNode as k, unref as C, normalizeStyle as P, withCtx as d, createTextVNode as E, createElementVNode as U } from "vue";
import { cesiumService as I } from "./modules/cesiumUtils.js";
import { cesiumProps as L } from "./modules/props.js";
import { NSpin as N } from "naive-ui";
import { Cartesian3 as x } from "@cesium/engine";
const B = { class: "lc-cesium" }, V = /* @__PURE__ */ y({
  __name: "cesium",
  props: /* @__PURE__ */ h(L, {
    clientId: "74109f7095974ab1a5e930c8e998580d",
    centerPosition: () => x.fromDegrees(114.187446, 22.674131, 13e4),
    pointData: () => []
  }),
  emits: ["pointHandler", "limitHeightHandler", "loadHandler"],
  setup(e, { expose: u, emit: f }) {
    const s = w(!0), n = f;
    function l(t) {
      s.value = t, n("loadHandler", !t);
    }
    const i = new I("cesium-3d-viewer", {
      config: e.basicConfig,
      defaultShowState: e.defaultShowState,
      flyToHeight: e.flyToHeight,
      pointHandler: (t) => {
        n("pointHandler", t);
      },
      limitHeightHandler: (t) => {
        n("limitHeightHandler", t);
      },
      loadTileLayerHandler: (t) => {
        l(t);
      }
    });
    function m(t, a) {
      i[t] ? i[t](a) : console.log("未匹配cesiumUtils的方法");
    }
    async function o() {
      var t;
      try {
        if (!e.accessToken)
          return { status: !1 };
        if (i.pointData = e.pointData, i.options.config = e.basicConfig, i.options.defaultShowState = e.defaultShowState, i.options.flyToHeight = e.flyToHeight, !await i.initViewer(e.controlStatus))
          throw new Error("Viewer 初始化失败");
        i.updateViewerAttribute(), i.setInitialView({ destination: e.centerPosition });
        const S = e.imageryLayersUrl ?? `${e.baseUrl}/service/api/e99b765798d1412b9c2b458a1473396e/igs/rest/services/SZMAP/SZDZDT_2024_Yingji_T1_4490/WMTSServer?client_id=${e.clientId}&access_token=${e.accessToken}`;
        return await i.loadTileLayer(S), e.areaName && i.addPolygon(e.areaName), (t = e.pointData) == null || t.forEach((c) => {
          e.defaultShowState && i.addPoint(c), i.addPoint(c, "value");
        }), { status: !0 };
      } catch (a) {
        return console.log(`地图初始化失败: ${a}`), l(!1), { status: !1 };
      }
    }
    const g = H(() => ({
      "--spin-container-bg": e.spinContainerBg ?? "#6C7E93",
      "--n-spin-description-color": e.spinDescriptionColor ?? "#046ab1"
    }));
    return u({
      changeModel: m
    }), r(
      () => e.pointData,
      (t) => {
        i.clearEntity("pointEntities"), i.pointData = t, t == null || t.forEach((a) => {
          i.addPoint(a, "value"), e.defaultShowState && i.addPoint(a);
        });
      }
    ), r(
      () => e.accessToken,
      () => {
        o();
      }
    ), r(
      () => e.imageryLayersUrl,
      () => {
        i.destroy(), o();
      }
    ), v(async () => {
      await o();
    }), T(() => {
      i.destroy();
    }), (t, a) => (D(), b("div", B, [
      k(C(N), {
        show: s.value,
        stroke: t.spinStroke,
        style: P(g.value),
        size: "large"
      }, {
        description: d(() => a[0] || (a[0] = [
          E(" 地图加载中... ")
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
  V as default
};
