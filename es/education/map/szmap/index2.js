import { defineComponent as o, openBlock as r, createElementBlock as t, createVNode as l, mergeProps as a } from "vue";
import { propsRaw as p } from "./props.js";
import s from "./rawMap.js";
const m = { class: "lc-szmap" }, i = /* @__PURE__ */ o({
  __name: "szmap",
  props: p,
  setup(v) {
    return (e, n) => (r(), t("div", m, [
      l(s, a({
        class: "back-block-map level-map",
        "show-label": !1,
        rotateX: e.rotateX,
        levels: e.levels,
        values: e.values
      }, e.$attrs), null, 16, ["rotateX", "levels", "values"]),
      l(s, a({
        class: "float-block-map level-map",
        "fill-model": "hover",
        rotateX: e.rotateX,
        "show-label": !0,
        levels: e.levels,
        values: e.values
      }, e.$attrs), null, 16, ["rotateX", "levels", "values"])
    ]));
  }
});
export {
  i as default
};
