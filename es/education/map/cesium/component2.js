import { defineComponent as P, mergeDefaults as h, ref as m, watch as k, onMounted as b, onBeforeUnmount as C, openBlock as c, createElementBlock as r, createElementVNode as I, createCommentVNode as u, toDisplayString as L } from "vue";
import { getToken as T } from "../src/request/index.js";
import { cesiumService as M } from "./modules/cesiumUtils.js";
import { cesiumProps as N } from "./modules/props.js";
import U from "../node_modules/.pnpm/@cesium_engine@16.0.0/node_modules/@cesium/engine/Source/Core/Cartesian3.js";
const x = { class: "lc-cesium" }, B = {
  key: 0,
  class: "initImageryLayersStatus-indicator"
}, H = {
  key: 1,
  class: "error-message"
}, W = /* @__PURE__ */ P({
  __name: "component",
  props: /* @__PURE__ */ h(N, {
    centerPosition: () => U.fromDegrees(114.155799, 22.617691, 9e4),
    pointData: () => []
  }),
  emits: ["pointHandler"],
  setup(i, { expose: f, emit: v }) {
    const a = m(!0), n = m(null), g = v, e = new M("cesium-3d-viewer", {
      config: i.basicConfig,
      pointHandler: (t) => {
        g("pointHandler", t);
      }
    });
    function y(t, o) {
      e[t] ? e[t](o) : console.log("未匹配cesiumUtils的方法");
    }
    async function D() {
      var t, o;
      try {
        if (e.pointData = i.pointData, !await e.initViewer(i.controlStatus))
          throw new Error("Viewer 初始化失败");
        e.setInitialView(i.centerPosition);
        const s = void 0, S = localStorage.getItem("access_token") || void 0, p = `jysl/service/api/e99b765798d1412b9c2b458a1473396e/igs/rest/services/SZMAP/SZDZDT_2024_Yingji_T1_4490/WMTSServer?client_id=${s}&access_token=${S}`;
        await e.loadTileLayer(p), (t = e.viewer) == null || t.scene.globe.tileLoadProgressEvent.addEventListener(function(w) {
          var d;
          w === 0 && a.value && (e.addPolygon(i.basicConfig.areaName), (d = i.pointData) == null || d.forEach((E) => e.addPoint(E, "value")), a.value = !1);
        });
      } catch (l) {
        e.addPolygon(i.basicConfig.areaName), (o = i.pointData) == null || o.forEach((s) => e.addPoint(s, "value")), a.value = !1, n.value = `地图初始化失败: ${l.message}`;
      }
    }
    return f({
      changeModel: y
    }), k(
      () => i.pointData,
      (t) => {
        e.clearEntity("pointEntities"), e.pointData = t, t == null || t.forEach((o) => e.addPoint(o, "value"));
      }
    ), b(async () => {
      await T, await D();
    }), C(() => {
      e.destroy();
    }), (t, o) => (c(), r("div", x, [
      o[0] || (o[0] = I(
        "div",
        {
          class: "lc-cesium_map",
          id: "cesium-3d-viewer"
        },
        null,
        -1
        /* HOISTED */
      )),
      a.value ? (c(), r("div", B, "地图加载中...")) : u("v-if", !0),
      n.value ? (c(), r(
        "div",
        H,
        "地图加载失败: " + L(n.value),
        1
        /* TEXT */
      )) : u("v-if", !0)
    ]));
  }
});
export {
  W as default
};
