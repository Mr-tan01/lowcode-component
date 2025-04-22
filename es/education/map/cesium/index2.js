import { defineComponent as h, mergeDefaults as k, ref as m, watch as f, onMounted as b, onBeforeUnmount as T, openBlock as r, createElementBlock as c, createElementVNode as C, createCommentVNode as v, toDisplayString as I } from "vue";
import { cesiumService as L } from "./modules/cesiumUtils.js";
import { cesiumProps as M } from "./modules/props.js";
import U from "../node_modules/.pnpm/@cesium_engine@16.0.0/node_modules/@cesium/engine/Source/Core/Cartesian3.js";
const N = { class: "lc-cesium" }, x = {
  key: 0,
  class: "initImageryLayersStatus-indicator"
}, B = {
  key: 1,
  class: "error-message"
}, A = /* @__PURE__ */ h({
  __name: "cesium",
  props: /* @__PURE__ */ k(M, {
    clientId: "74109f7095974ab1a5e930c8e998580d",
    centerPosition: () => U.fromDegrees(114.155799, 22.617691, 9e4),
    pointData: () => []
  }),
  emits: ["pointHandler"],
  setup(i, { expose: g, emit: y }) {
    const n = m(!0), s = m(null), D = y, e = new L("cesium-3d-viewer", {
      config: i.basicConfig,
      pointHandler: (t) => {
        D("pointHandler", t);
      }
    });
    function S(t, a) {
      e[t] ? e[t](a) : console.log("未匹配cesiumUtils的方法");
    }
    function w(t) {
      n.value = !1, s.value = `地图初始化失败: ${t}`, setTimeout(() => {
        s.value = null;
      }, 600);
    }
    async function l() {
      var t, a;
      try {
        if (!i.accessToken)
          return console.log("请先获取token"), { status: !1 };
        if (e.pointData = i.pointData, !await e.initViewer(i.controlStatus))
          throw new Error("Viewer 初始化失败");
        e.setInitialView(i.centerPosition);
        const o = i.imageryLayersUrl || `jysl/service/api/e99b765798d1412b9c2b458a1473396e/igs/rest/services/SZMAP/SZDZDT_2024_Yingji_T1_4490/WMTSServer?client_id=${i.clientId}&access_token=${i.accessToken}`;
        return await e.loadTileLayer(o), (t = e.viewer) == null || t.scene.globe.tileLoadProgressEvent.addEventListener(function(E) {
          var d;
          E === 0 && n.value && (e.addPolygon(i.basicConfig.areaName), (d = i.pointData) == null || d.forEach((P) => e.addPoint(P, "value")), n.value = !1);
        }), { status: !0 };
      } catch (u) {
        return e.addPolygon(i.basicConfig.areaName), (a = i.pointData) == null || a.forEach((o) => e.addPoint(o, "value")), w(u.message), { status: !1 };
      }
    }
    return g({
      changeModel: S
    }), f(
      () => i.pointData,
      (t) => {
        e.clearEntity("pointEntities"), e.pointData = t, t == null || t.forEach((a) => e.addPoint(a, "value"));
      }
    ), f(
      () => i.accessToken,
      () => {
        l();
      }
    ), b(async () => {
      await l();
    }), T(() => {
      e.destroy();
    }), (t, a) => (r(), c("div", N, [
      a[0] || (a[0] = C(
        "div",
        {
          class: "lc-cesium_map",
          id: "cesium-3d-viewer"
        },
        null,
        -1
        /* HOISTED */
      )),
      n.value ? (r(), c("div", x, "地图加载中...")) : v("v-if", !0),
      s.value ? (r(), c(
        "div",
        B,
        "地图加载失败: " + I(s.value),
        1
        /* TEXT */
      )) : v("v-if", !0)
    ]));
  }
});
export {
  A as default
};
