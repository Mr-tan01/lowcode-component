import { defineComponent as w, mergeDefaults as h, ref as H, computed as v, watch as l, onMounted as C, onBeforeUnmount as T, openBlock as D, createElementBlock as b, createVNode as k, unref as E, normalizeStyle as P, withCtx as c, createTextVNode as U, createElementVNode as V } from "vue";
import { cesiumService as I } from "./modules/cesiumUtils.js";
import { cesiumProps as L } from "./modules/props.js";
import { NSpin as N } from "naive-ui";
import { Cartesian3 as x } from "@cesium/engine";
const B = { class: "lc-cesium" }, A = /* @__PURE__ */ w({
  __name: "cesium",
  props: /* @__PURE__ */ h(L, {
    clientId: "74109f7095974ab1a5e930c8e998580d",
    defaultCenterKey: "深圳市",
    centerPosition: () => x.fromDegrees(114.187446, 22.674131, 13e4),
    pointData: () => []
  }),
  emits: ["pointHandler", "limitHeightHandler", "loadHandler"],
  setup(e, { expose: d, emit: f }) {
    const r = H(!0), a = f, u = () => {
      var i;
      t.clearEntity("pointEntities", "dataSource"), t.pointData = e.pointData, (i = e.pointData) == null || i.forEach((n) => {
        t.addPoint(n, "value"), e.defaultShowState && t.addPoint(n);
      });
    }, o = (i) => {
      r.value = i, a("loadHandler", !i), i || u();
    }, t = new I("cesium-3d-viewer", {
      config: e.basicConfig,
      defaultShowState: e.defaultShowState,
      flyToHeight: e.flyToHeight,
      offsetState: e.offsetState,
      centerPosition: e.centerPosition,
      defaultCenterKey: e.defaultCenterKey,
      pointHandler: (i) => {
        a("pointHandler", i);
      },
      limitHeightHandler: (i) => {
        a("limitHeightHandler", i);
      },
      loadTileLayerHandler: (i) => {
        o(i);
      }
    }), m = () => {
      t.clearEntity("polygonEntities", "viewer");
    }, S = (i, n) => {
      t[i] ? t[i](n) : console.log("未匹配cesiumUtils的方法");
    }, s = async () => {
      try {
        if (!e.accessToken)
          return { status: !1 };
        if (t.pointData = e.pointData, t.options.config = e.basicConfig, t.options.defaultShowState = e.defaultShowState, t.options.flyToHeight = e.flyToHeight, t.options.offsetState = e.offsetState, !await t.initViewer(e.controlStatus))
          throw new Error("Viewer 初始化失败");
        t.updateViewerAttribute(), t.setInitialView({ destination: e.centerPosition });
        const n = e.imageryLayersUrl ?? `${e.baseUrl}/service/api/e99b765798d1412b9c2b458a1473396e/igs/rest/services/SZMAP/SZDZDT_2024_Yingji_T1_4490/WMTSServer?client_id=${e.clientId}&access_token=${e.accessToken}`;
        return await t.loadTileLayer(n), e.areaName && t.polygonClickHandler(e.areaName), { status: !0 };
      } catch {
        return o(!1), { status: !1 };
      }
    }, y = v(() => ({
      "--spin-container-bg": e.spinContainerBg ?? "#6C7E93",
      "--n-spin-description-color": e.spinDescriptionColor ?? "#046ab1"
    })), g = () => {
      t.destroy(), s();
    };
    return d({
      changeModel: S,
      loadedTileLayer: o,
      clearEntity: m,
      cesiumUtils: t
    }), l([() => e.accessToken, () => e.imageryLayersUrl], g), l(
      () => e.offsetState,
      (i) => {
        t.options = {
          ...t.options,
          offsetState: i
        };
      },
      { deep: !0 }
    ), C(async () => {
      await s();
    }), T(() => {
      t.destroy();
    }), (i, n) => (D(), b("div", B, [
      k(E(N), {
        show: r.value,
        stroke: i.spinStroke,
        style: P(y.value),
        size: "large"
      }, {
        description: c(() => n[0] || (n[0] = [
          U(" 地图加载中... ")
        ])),
        default: c(() => [
          n[1] || (n[1] = V(
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
  A as default
};
