import { defineComponent as P, mergeDefaults as k, ref as f, computed as E, watch as s, onMounted as V, onBeforeUnmount as I, openBlock as L, createElementBlock as U, createVNode as N, unref as x, normalizeStyle as B, withCtx as m, createTextVNode as M, createElementVNode as K } from "vue";
import { cesiumService as Z } from "./modules/cesiumUtils.js";
import { cesiumProps as $ } from "./modules/props.js";
import { NSpin as z } from "naive-ui";
import { Cartesian3 as A, JulianDate as j } from "@cesium/engine";
const J = { class: "lc-cesium" }, O = /* @__PURE__ */ P({
  __name: "cesium",
  props: /* @__PURE__ */ k($, {
    clientId: "74109f7095974ab1a5e930c8e998580d",
    defaultCenterKey: "深圳市",
    centerPosition: () => A.fromDegrees(114.187446, 22.674131, 13e4),
    pointData: () => []
  }),
  emits: ["pointHandler", "limitHeightHandler", "loadHandler"],
  setup(e, { expose: y, emit: S }) {
    const r = f(!0), a = f(!0), o = S, g = async () => {
      var t;
      c(), i.pointData = e.pointData, (t = e.pointData) == null || t.forEach((n) => {
        i.addPoint(n, "value"), e.defaultShowState && i.addPoint(n);
      });
    }, l = async (t) => {
      a.value = t;
    }, w = async (t) => {
      o("loadHandler", !t), r.value = t, a.value && (a.value = t);
    }, i = new Z("cesium-3d-viewer", {
      config: e.basicConfig,
      defaultShowState: e.defaultShowState,
      flyToHeight: e.flyToHeight,
      offsetState: e.offsetState,
      centerPosition: e.centerPosition,
      defaultCenterKey: e.defaultCenterKey,
      pointHandler: (t) => {
        var d;
        const n = j.now(), b = (d = t.properties) == null ? void 0 : d.getValue(n);
        o("pointHandler", b);
      },
      limitHeightHandler: (t) => {
        o("limitHeightHandler", t);
      },
      loadTileLayerHandler: (t) => {
        w(t);
      }
    }), c = () => {
      i.clearEntity("pointEntities", "dataSource"), i.clearEntity("pointEntities", "viewer");
    }, h = (t, n) => {
      i[t] ? i[t](n) : console.log("未匹配cesiumUtils的方法");
    }, u = async () => {
      try {
        if (!e.accessToken)
          return { status: !1 };
        if (i.pointData = e.pointData, i.options.config = e.basicConfig, i.options.defaultShowState = e.defaultShowState, i.options.flyToHeight = e.flyToHeight, i.options.offsetState = e.offsetState, !await i.initViewer(e.controlStatus))
          throw new Error("Viewer 初始化失败");
        i.updateViewerAttribute(), i.setInitialView({ destination: e.centerPosition });
        const n = e.imageryLayersUrl ?? `${e.baseUrl}/service/api/e99b765798d1412b9c2b458a1473396e/igs/rest/services/SZMAP/SZDZDT_2024_Yingji_T1_4490/WMTSServer?client_id=${e.clientId}&access_token=${e.accessToken}`;
        return await i.loadTileLayer(n), e.areaName && i.polygonClickHandler(e.areaName), { status: !0 };
      } catch {
        return l(!1), { status: !1 };
      }
    }, v = E(() => ({
      "--spin-container-bg": e.spinContainerBg ?? "#6C7E93",
      "--n-spin-description-color": e.spinDescriptionColor ?? "#046ab1"
    })), C = () => {
      i.destroy(), u();
    };
    y({
      changeModel: h,
      loadedTileLayer: l,
      clearEntity: c,
      cesiumUtils: i
    });
    const D = s([() => e.accessToken, () => e.imageryLayersUrl], C), H = s(
      () => e.offsetState,
      (t) => {
        i.options = {
          ...i.options,
          offsetState: t
        };
      },
      { deep: !0 }
    ), T = s([a, e.pointData], () => {
      a.value || g();
    });
    return V(async () => {
      await u();
    }), I(() => {
      D(), H(), T(), i.destroy();
    }), (t, n) => (L(), U("div", J, [
      N(x(z), {
        show: r.value || a.value,
        stroke: t.spinStroke,
        style: B(v.value),
        size: "large"
      }, {
        description: m(() => n[0] || (n[0] = [
          M(" 地图加载中... ")
        ])),
        default: m(() => [
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
