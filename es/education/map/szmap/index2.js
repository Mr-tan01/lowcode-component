import { defineComponent as d, openBlock as p, createElementBlock as i, createVNode as a, mergeProps as l, withCtx as n, renderSlot as m } from "vue";
import { propsRaw as v } from "./props.js";
import s from "./rawMap.js";
const u = { class: "lc-szmap" }, X = /* @__PURE__ */ d({
  __name: "szmap",
  props: v,
  setup(b) {
    return (e, f) => (p(), i("div", u, [
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
        mapLabel: n(({ blockList: r, labelClass: o, getVlaue: t }) => [
          m(e.$slots, "mapLabel", {
            blockList: r,
            labelClass: o,
            getVlaue: t
          }, void 0, !0)
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["disabledGradient", "rotateX", "levels", "values"])
    ]));
  }
});
export {
  X as default
};
