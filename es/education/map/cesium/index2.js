import { defineComponent as T, mergeDefaults as w, ref as m, watch as c, onMounted as h, onBeforeUnmount as k, openBlock as l, createElementBlock as u, createElementVNode as E, createCommentVNode as d, toDisplayString as I } from "vue";
import { cesiumService as L } from "./modules/cesiumUtils.js";
import { cesiumProps as P } from "./modules/props.js";
import { Cartesian3 as b } from "@cesium/engine";
const C = { class: "lc-cesium" }, U = {
  key: 0,
  class: "initImageryLayersStatus-indicator"
}, M = {
  key: 1,
  class: "error-message"
}, Z = /* @__PURE__ */ T({
  __name: "cesium",
  props: /* @__PURE__ */ w(P, {
    clientId: "74109f7095974ab1a5e930c8e998580d",
    centerPosition: () => b.fromDegrees(114.155799, 22.617691, 9e4),
    pointData: () => []
  }),
  emits: ["pointHandler"],
  setup(t, { expose: f, emit: v }) {
    const s = m(!0), n = m(null), y = v;
    function g(e) {
      s.value = e;
    }
    const i = new L("cesium-3d-viewer", {
      config: t.basicConfig,
      pointHandler: (e) => {
        y("pointHandler", e);
      },
      loadTileLayerHandler: (e) => {
        g(e);
      }
    });
    function D(e, a) {
      i[e] ? i[e](a) : console.log("未匹配cesiumUtils的方法");
    }
    function S(e) {
      s.value = !1, n.value = `地图初始化失败: ${e}`, setTimeout(() => {
        n.value = null;
      }, 600);
    }
    async function r() {
      var e;
      try {
        if (!t.accessToken)
          return { status: !1 };
        if (i.pointData = t.pointData, !await i.initViewer(t.controlStatus))
          throw new Error("Viewer 初始化失败");
        i.setInitialView(t.centerPosition);
        const o = t.imageryLayersUrl || `jysl/service/api/e99b765798d1412b9c2b458a1473396e/igs/rest/services/SZMAP/SZDZDT_2024_Yingji_T1_4490/WMTSServer?client_id=${t.clientId}&access_token=${t.accessToken}`;
        return await i.loadTileLayer(o), { status: !0 };
      } catch (a) {
        return i.addPolygon(t.basicConfig.areaName), (e = t.pointData) == null || e.forEach((o) => i.addPoint(o, "value")), S(a.message), { status: !1 };
      }
    }
    return f({
      changeModel: D
    }), c(
      () => t.pointData,
      (e) => {
        i.clearEntity("pointEntities"), i.pointData = e, e == null || e.forEach((a) => i.addPoint(a, "value"));
      }
    ), c(
      () => t.accessToken,
      () => {
        r();
      }
    ), c(
      () => t.imageryLayersUrl,
      () => {
        i.destroy(), r();
      }
    ), h(async () => {
      await r();
    }), k(() => {
      i.destroy();
    }), (e, a) => (l(), u("div", C, [
      a[0] || (a[0] = E(
        "div",
        {
          class: "lc-cesium_map",
          id: "cesium-3d-viewer"
        },
        null,
        -1
        /* HOISTED */
      )),
      s.value ? (l(), u("div", U, "地图加载中...")) : d("v-if", !0),
      n.value ? (l(), u(
        "div",
        M,
        "地图加载失败: " + I(n.value),
        1
        /* TEXT */
      )) : d("v-if", !0)
    ]));
  }
});
export {
  Z as default
};
