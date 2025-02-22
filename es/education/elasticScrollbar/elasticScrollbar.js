import { openBlock as r, createElementBlock as t, createElementVNode as c, renderSlot as o } from "vue";
import './assets/elasticScrollbar.css';/* empty css                  */
import s from "./_virtual/_plugin-vue_export-helper.js";
const l = {}, a = { class: "lc-elastic-scrollbar" }, n = { class: "lc-elastic-scrollbar__wrapper" };
function _(e, d) {
  return r(), t("div", a, [
    c("div", n, [
      o(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const m = /* @__PURE__ */ s(l, [["render", _], ["__scopeId", "data-v-5a702158"]]);
export {
  m as default
};
