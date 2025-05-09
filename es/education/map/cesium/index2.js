import { defineComponent as y, mergeDefaults as h, ref as w, computed as H, watch as r, onMounted as v, onBeforeUnmount as T, openBlock as D, createElementBlock as b, createVNode as k, unref as P, normalizeStyle as C, withCtx as c, createTextVNode as E, createElementVNode as I } from "vue";
import { cesiumService as L } from "./modules/cesiumUtils.js";
import { cesiumProps as N } from "./modules/props.js";
import { NSpin as U } from "naive-ui";
import { Cartesian3 as B } from "@cesium/engine";
const x = { class: "lc-cesium" }, z = /* @__PURE__ */ y({
  __name: "cesium",
  props: /* @__PURE__ */ h(N, {
    clientId: "74109f7095974ab1a5e930c8e998580d",
    centerPosition: () => B.fromDegrees(114.187446, 22.674131, 13e4),
    pointData: () => []
  }),
  emits: ["pointHandler", "limitHeightHandler", "loadHandler"],
  setup(e, { expose: d, emit: u }) {
    const l = w(!0), a = u;
    function f(t) {
      console.log(t), l.value = t, t || a("loadHandler", t);
    }
    const i = new L("cesium-3d-viewer", {
      config: e.basicConfig,
      defaultShowState: e.defaultShowState,
      flyToHeight: e.flyToHeight,
      pointHandler: (t) => {
        a("pointHandler", t);
      },
      limitHeightHandler: (t) => {
        a("limitHeightHandler", t);
      },
      loadTileLayerHandler: (t) => {
        f(t);
      }
    });
    function m(t, n) {
      i[t] ? i[t](n) : console.log("未匹配cesiumUtils的方法");
    }
    async function o() {
      var t;
      try {
        if (!e.accessToken)
          return { status: !1 };
        if (i.pointData = e.pointData, i.options.config = e.basicConfig, i.options.defaultShowState = e.defaultShowState, i.options.flyToHeight = e.flyToHeight, !await i.initViewer(e.controlStatus))
          throw new Error("Viewer 初始化失败");
        i.updateViewerAttribute(), i.setInitialView({ destination: e.centerPosition });
        const S = e.imageryLayersUrl || `jysl/service/api/e99b765798d1412b9c2b458a1473396e/igs/rest/services/SZMAP/SZDZDT_2024_Yingji_T1_4490/WMTSServer?client_id=${e.clientId}&access_token=${e.accessToken}`;
        return await i.loadTileLayer(S), e.areaName && i.addPolygon(e.areaName), (t = e.pointData) == null || t.forEach((s) => {
          e.defaultShowState && i.addPoint(s), i.addPoint(s, "value");
        }), { status: !0 };
      } catch (n) {
        return console.log(`地图初始化失败: ${n}`), { status: !1 };
      }
    }
    const g = H(() => ({
      "--spin-container-bg": e.spinContainerBg ?? "#F6FBF8",
      "--n-spin-description-color": e.spinDescriptionColor ?? "#046ab1"
    }));
    return d({
      changeModel: m
    }), r(
      () => e.pointData,
      (t) => {
        i.clearEntity("pointEntities"), i.pointData = t, t == null || t.forEach((n) => {
          i.addPoint(n, "value"), e.defaultShowState && i.addPoint(n);
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
    }), (t, n) => (D(), b("div", x, [
      k(P(U), {
        show: l.value,
        stroke: t.spinStroke,
        style: C(g.value),
        size: "large"
      }, {
        description: c(() => n[0] || (n[0] = [
          E(" 地图加载中... ")
        ])),
        default: c(() => [
          n[1] || (n[1] = I(
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
  z as default
};
