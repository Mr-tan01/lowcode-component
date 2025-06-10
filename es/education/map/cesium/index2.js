import { defineComponent as E, mergeDefaults as P, ref as d, computed as k, watch as s, onMounted as V, onBeforeUnmount as I, openBlock as L, createElementBlock as U, createVNode as N, unref as x, normalizeStyle as B, withCtx as f, createTextVNode as M, createElementVNode as K } from "vue";
import { cesiumService as Z } from "./modules/cesiumUtils.js";
import { cesiumProps as $ } from "./modules/props.js";
import { NSpin as z } from "naive-ui";
import { Cartesian3 as A, JulianDate as j } from "@cesium/engine";
const J = { class: "lc-cesium" }, O = /* @__PURE__ */ E({
  __name: "cesium",
  props: /* @__PURE__ */ P($, {
    clientId: "74109f7095974ab1a5e930c8e998580d",
    defaultCenterKey: "深圳市",
    centerPosition: () => A.fromDegrees(114.187446, 22.674131, 13e4),
    pointData: () => []
  }),
  emits: ["pointHandler", "limitHeightHandler", "loadHandler"],
  setup(e, { expose: m, emit: y }) {
    const r = d(!0), a = d(!0), o = y, S = async () => {
      var i;
      t.clearEntity("pointEntities", "dataSource"), t.clearEntity("pointEntities", "viewer"), t.pointData = e.pointData, (i = e.pointData) == null || i.forEach((n) => {
        t.addPoint(n, "value"), e.defaultShowState && t.addPoint(n);
      });
    }, l = async (i) => {
      a.value = i;
    }, g = async (i) => {
      o("loadHandler", !i), r.value = i, a.value && (a.value = i);
    }, t = new Z("cesium-3d-viewer", {
      config: e.basicConfig,
      defaultShowState: e.defaultShowState,
      flyToHeight: e.flyToHeight,
      offsetState: e.offsetState,
      centerPosition: e.centerPosition,
      defaultCenterKey: e.defaultCenterKey,
      pointHandler: (i) => {
        var u;
        const n = j.now(), b = (u = i.properties) == null ? void 0 : u.getValue(n);
        o("pointHandler", b);
      },
      limitHeightHandler: (i) => {
        o("limitHeightHandler", i);
      },
      loadTileLayerHandler: (i) => {
        g(i);
      }
    }), w = () => {
      t.clearEntity("polygonEntities", "viewer");
    }, v = (i, n) => {
      t[i] ? t[i](n) : console.log("未匹配cesiumUtils的方法");
    }, c = async () => {
      try {
        if (!e.accessToken)
          return { status: !1 };
        if (t.pointData = e.pointData, t.options.config = e.basicConfig, t.options.defaultShowState = e.defaultShowState, t.options.flyToHeight = e.flyToHeight, t.options.offsetState = e.offsetState, !await t.initViewer(e.controlStatus))
          throw new Error("Viewer 初始化失败");
        t.updateViewerAttribute(), t.setInitialView({ destination: e.centerPosition });
        const n = e.imageryLayersUrl ?? `${e.baseUrl}/service/api/e99b765798d1412b9c2b458a1473396e/igs/rest/services/SZMAP/SZDZDT_2024_Yingji_T1_4490/WMTSServer?client_id=${e.clientId}&access_token=${e.accessToken}`;
        return await t.loadTileLayer(n), e.areaName && t.polygonClickHandler(e.areaName), { status: !0 };
      } catch {
        return l(!1), { status: !1 };
      }
    }, h = k(() => ({
      "--spin-container-bg": e.spinContainerBg ?? "#6C7E93",
      "--n-spin-description-color": e.spinDescriptionColor ?? "#046ab1"
    })), C = () => {
      t.destroy(), c();
    };
    m({
      changeModel: v,
      loadedTileLayer: l,
      clearEntity: w,
      cesiumUtils: t
    });
    const D = s([() => e.accessToken, () => e.imageryLayersUrl], C), H = s(
      () => e.offsetState,
      (i) => {
        t.options = {
          ...t.options,
          offsetState: i
        };
      },
      { deep: !0 }
    ), T = s([a, e.pointData], () => {
      a.value || S();
    });
    return V(async () => {
      await c();
    }), I(() => {
      D(), H(), T(), t.destroy();
    }), (i, n) => (L(), U("div", J, [
      N(x(z), {
        show: r.value || a.value,
        stroke: i.spinStroke,
        style: B(h.value),
        size: "large"
      }, {
        description: f(() => n[0] || (n[0] = [
          M(" 地图加载中... ")
        ])),
        default: f(() => [
          n[1] || (n[1] = K(
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
  O as default
};
