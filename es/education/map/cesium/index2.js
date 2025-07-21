import { defineComponent as P, mergeDefaults as k, ref as m, computed as E, watch as l, onMounted as I, onBeforeUnmount as V, openBlock as x, createElementBlock as B, createVNode as L, unref as U, normalizeStyle as N, withCtx as y, createTextVNode as M, createElementVNode as K } from "vue";
import { cesiumService as O } from "./modules/cesiumUtils.js";
import { cesiumProps as Z } from "./modules/props.js";
import { NSpin as $ } from "naive-ui";
import { Cartesian3 as z, JulianDate as A } from "@cesium/engine";
const j = { class: "lc-cesium" }, G = /* @__PURE__ */ P({
  __name: "cesium",
  props: /* @__PURE__ */ k(Z, {
    clientId: "74109f7095974ab1a5e930c8e998580d",
    defaultCenterKey: "深圳市",
    centerPosition: () => z.fromDegrees(114.187446, 22.674131, 13e4),
    pointData: () => [],
    openIndexDB: !1,
    openOffset: () => ({ flag: !1, offset: 0 })
  }),
  emits: ["pointHandler", "limitHeightHandler", "loadHandler"],
  setup(e, { expose: g, emit: S }) {
    const c = m(!0), a = m(!0), s = S, w = async () => {
      var n;
      f();
      const i = t.offsetDuplicateCoordinates(e.pointData, "lng", "lat", e.openOffset.offset);
      e.openOffset.flag ? t.pointData = i : t.pointData = e.pointData, (n = t.pointData) == null || n.forEach((o) => {
        t.addPoint(o, "value"), e.defaultShowState && t.addPoint(o);
      });
    }, r = async (i) => {
      a.value = i;
    }, D = async (i) => {
      s("loadHandler", !i), c.value = i, a.value && (a.value = i);
    }, t = new O("cesium-3d-viewer", {
      config: e.basicConfig,
      defaultShowState: e.defaultShowState,
      flyToHeight: e.flyToHeight,
      offsetState: e.offsetState,
      centerPosition: e.centerPosition,
      defaultCenterKey: e.defaultCenterKey,
      openIndexDB: e.openIndexDB,
      pointHandler: (i) => {
        var d;
        const n = A.now(), o = (d = i.properties) == null ? void 0 : d.getValue(n);
        o && s("pointHandler", o);
      },
      limitHeightHandler: (i) => {
        s("limitHeightHandler", i);
      },
      loadTileLayerHandler: (i) => {
        D(i);
      }
    }), f = () => {
      t.clearEntity("pointEntities", "dataSource"), t.clearEntity("pointEntities", "viewer");
    }, h = (i, n) => {
      t[i] ? t[i](n) : console.log("未匹配cesiumUtils的方法");
    }, u = async () => {
      try {
        if (!e.accessToken)
          return { status: !1 };
        if (t.pointData = e.pointData, t.options.config = e.basicConfig, t.options.defaultShowState = e.defaultShowState, t.options.flyToHeight = e.flyToHeight, t.options.offsetState = e.offsetState, !await t.initViewer(e.controlStatus))
          throw new Error("Viewer 初始化失败");
        t.updateViewerAttribute(), t.setInitialView({ destination: e.centerPosition });
        const n = e.imageryLayersUrl ?? `${e.baseUrl}/service/api/e99b765798d1412b9c2b458a1473396e/igs/rest/services/SZMAP/SZDZDT_2024_Yingji_T1_4490/WMTSServer?client_id=${e.clientId}&access_token=${e.accessToken}`;
        return await t.loadTileLayer(n), e.areaName && t.polygonClickHandler(e.areaName), { status: !0 };
      } catch {
        return r(!1), { status: !1 };
      }
    }, v = E(() => ({
      "--spin-container-bg": e.spinContainerBg ?? "#6C7E93",
      "--n-spin-description-color": e.spinDescriptionColor ?? "#046ab1"
    })), C = () => {
      t.destroy(), u();
    };
    g({
      changeModel: h,
      loadedTileLayer: r,
      clearEntity: f,
      cesiumUtils: t
    });
    const H = l([() => e.accessToken, () => e.imageryLayersUrl], C), T = l(
      () => e.offsetState,
      (i) => {
        t.options = {
          ...t.options,
          offsetState: i
        };
      },
      { deep: !0 }
    ), b = l([a, e.pointData], () => {
      a.value || w();
    });
    return I(async () => {
      await u();
    }), V(() => {
      H(), T(), b(), t.destroy();
    }), (i, n) => (x(), B("div", j, [
      L(U($), {
        show: c.value || a.value,
        stroke: i.spinStroke,
        style: N(v.value),
        size: "large"
      }, {
        description: y(() => n[0] || (n[0] = [
          M(" 地图加载中... ")
        ])),
        default: y(() => [
          n[1] || (n[1] = K(
            "div",
            {
              id: "cesium-3d-viewer",
              class: "lc-cesium_map"
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
  G as default
};
