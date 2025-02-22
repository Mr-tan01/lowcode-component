import { defineComponent as o, openBlock as s, createElementBlock as r, createVNode as l } from "vue";
import { propsRaw as t } from "./props.js";
import a from "./rawMap.js";
const p = { class: "lc-szmap" }, f = /* @__PURE__ */ o({
  __name: "szmap",
  props: t,
  setup(m) {
    return (e, v) => (s(), r("div", p, [
      l(a, {
        class: "back-block-map level-map",
        "show-label": !1,
        rotateX: e.rotateX,
        levels: e.levels,
        values: e.values
      }, null, 8, ["rotateX", "levels", "values"]),
      l(a, {
        class: "float-block-map level-map",
        "fill-model": "hover",
        rotateX: e.rotateX,
        "show-label": !0,
        levels: e.levels,
        values: e.values
      }, null, 8, ["rotateX", "levels", "values"])
    ]));
  }
});
export {
  f as default
};
