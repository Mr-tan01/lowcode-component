import { openBlock as t, createElementBlock as o, createElementVNode as c, renderSlot as n } from "vue";
import './assets/headline.css';/* empty css          */
import r from "./_virtual/_plugin-vue_export-helper.js";
const d = {}, s = { class: "lc-headline" }, l = { class: "lc-headline__text" };
function _(e, a) {
  return t(), o("div", s, [
    c("div", l, [
      n(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const p = /* @__PURE__ */ r(d, [["render", _], ["__scopeId", "data-v-29fe5c45"]]);
export {
  p as default
};
