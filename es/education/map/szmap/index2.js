import { defineComponent as m, mergeDefaults as p, openBlock as i, createElementBlock as b, createVNode as l, mergeProps as a, withCtx as n, renderSlot as u } from "vue";
import { propsRaw as v } from "./props.js";
import o from "./rawMap.js";
import { LabelModelEnum as f } from "./const.js";
const h = { class: "lc-szmap" }, E = /* @__PURE__ */ m({
  __name: "szmap",
  props: /* @__PURE__ */ p(v, {
    labelModel: () => f.DEFAULT
  }),
  setup(g) {
    return (e, w) => (i(), b("div", h, [
      l(o, a({
        class: "back-block-map level-map",
        "show-label": !1,
        "disabled-gradient": e.disabledGradient,
        "rotate-x": e.rotateX,
        "label-model": e.labelModel,
        levels: e.levels,
        values: e.values
      }, e.$attrs), null, 16, ["disabled-gradient", "rotate-x", "label-model", "levels", "values"]),
      l(o, a({
        class: "float-block-map level-map",
        "fill-model": "hover",
        "disabled-gradient": e.disabledGradient,
        "rotate-x": e.rotateX,
        "label-model": e.labelModel,
        "show-label": !0,
        levels: e.levels,
        values: e.values
      }, e.$attrs, { "show-border": !1 }), {
        mapLabel: n(({ blockList: s, labelClass: r, getVlaue: d, currentMapKey: t }) => [
          u(e.$slots, "mapLabel", {
            blockList: s,
            labelClass: r,
            getVlaue: d,
            currentMapKey: t
          }, void 0, !0)
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["disabled-gradient", "rotate-x", "label-model", "levels", "values"])
    ]));
  }
});
export {
  E as default
};
