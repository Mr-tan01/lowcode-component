import { defineComponent as p, openBlock as i, createElementBlock as n, createVNode as a, mergeProps as l, withCtx as m, renderSlot as v } from "vue";
import { propsRaw as u } from "./props.js";
import s from "./rawMap.js";
const b = { class: "lc-szmap" }, k = /* @__PURE__ */ p({
  __name: "szmap",
  props: u,
  setup(f) {
    return (e, c) => (i(), n("div", b, [
      a(s, l({
        class: "back-block-map level-map",
        "show-label": !1,
        disabledGradient: e.disabledGradient,
        rotateX: e.rotateX,
        levels: e.levels,
        values: e.values
      }, e.$attrs), null, 16, ["disabledGradient", "rotateX", "levels", "values"]),
      a(s, l({
        class: "float-block-map level-map",
        "fill-model": "hover",
        disabledGradient: e.disabledGradient,
        rotateX: e.rotateX,
        "show-label": !0,
        levels: e.levels,
        values: e.values
      }, e.$attrs), {
        mapLabel: m(({ blockList: r, labelClass: o, getVlaue: t, currentMapKey: d }) => [
          v(e.$slots, "mapLabel", {
            blockList: r,
            labelClass: o,
            getVlaue: t,
            currentMapKey: d
          }, void 0, !0)
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["disabledGradient", "rotateX", "levels", "values"])
    ]));
  }
});
export {
  k as default
};
