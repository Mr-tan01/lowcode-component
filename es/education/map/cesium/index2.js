import { defineComponent as o, openBlock as r, createElementBlock as t, createVNode as c, normalizeProps as s, guardReactiveProps as n } from "vue";
import a from "./component.js";
const m = { class: "lc-cesium" }, _ = /* @__PURE__ */ o({
  __name: "cesium",
  setup(i) {
    return (e, p) => (r(), t("div", m, [
      c(
        a,
        s(n(e.$attrs)),
        null,
        16
        /* FULL_PROPS */
      )
    ]));
  }
});
export {
  _ as default
};
