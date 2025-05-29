import { defineComponent as y, mergeDefaults as w, ref as h, computed as H, watch as l, onMounted as v, onBeforeUnmount as T, openBlock as D, createElementBlock as b, createVNode as C, unref as k, normalizeStyle as P, withCtx as c, createTextVNode as E, createElementVNode as N } from "vue";
import { cesiumService as U } from "./modules/cesiumUtils.js";
import { cesiumProps as V } from "./modules/props.js";
import { NSpin as I } from "naive-ui";
import { Cartesian3 as L } from "@cesium/engine";
const x = { class: "lc-cesium" }, A = /* @__PURE__ */ y({
  __name: "cesium",
  props: /* @__PURE__ */ w(V, {
    clientId: "74109f7095974ab1a5e930c8e998580d",
    centerPosition: () => L.fromDegrees(114.187446, 22.674131, 13e4),
    pointData: () => []
  }),
  emits: ["pointHandler", "limitHeightHandler", "loadHandler"],
  setup(e, { expose: d, emit: f }) {
    const s = h(!0), n = f, u = () => {
      var i;
      t.clearEntity("pointEntities", "dataSource"), t.pointData = e.pointData, (i = e.pointData) == null || i.forEach((a) => {
        t.addPoint(a, "value"), e.defaultShowState && t.addPoint(a);
      });
    }, o = (i) => {
      s.value = i, n("loadHandler", !i), i || u();
    }, t = new U("cesium-3d-viewer", {
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
    }), m = (i, a) => {
      t[i] ? t[i](a) : console.log("未匹配cesiumUtils的方法");
    }, r = async () => {
      try {
        if (!e.accessToken)
          return { status: !1 };
        if (t.pointData = e.pointData, t.options.config = e.basicConfig, t.options.defaultShowState = e.defaultShowState, t.options.flyToHeight = e.flyToHeight, t.options.offsetState = e.offsetState, !await t.initViewer(e.controlStatus))
          throw new Error("Viewer 初始化失败");
        t.updateViewerAttribute(), t.setInitialView({ destination: e.centerPosition });
        const a = e.imageryLayersUrl ?? `${e.baseUrl}/service/api/e99b765798d1412b9c2b458a1473396e/igs/rest/services/SZMAP/SZDZDT_2024_Yingji_T1_4490/WMTSServer?client_id=${e.clientId}&access_token=${e.accessToken}`;
        return await t.loadTileLayer(a), e.areaName && (t.addPolygon(e.areaName), t.polygonClickHandler(e.areaName)), { status: !0 };
      } catch {
        return o(!1), { status: !1 };
      }
    }, S = H(() => ({
      "--spin-container-bg": e.spinContainerBg ?? "#6C7E93",
      "--n-spin-description-color": e.spinDescriptionColor ?? "#046ab1"
    })), g = () => {
      t.destroy(), r();
    };
    return d({
      changeModel: m,
      loadedTileLayer: o
    }), l([() => e.accessToken, () => e.imageryLayersUrl], g), l(
      () => e.offsetState,
      (i) => {
        t.options = {
          ...t.options,
          offsetState: i
        };
      },
      { deep: !0 }
    ), v(async () => {
      await r();
    }), T(() => {
      t.destroy();
    }), (i, a) => (D(), b("div", x, [
      C(k(I), {
        show: s.value,
        stroke: i.spinStroke,
        style: P(S.value),
        size: "large"
      }, {
        description: c(() => a[0] || (a[0] = [
          E(" 地图加载中... ")
        ])),
        default: c(() => [
          a[1] || (a[1] = N(
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
