import { openBlock as t, createElementBlock as o, createElementVNode as c, renderSlot as n } from "vue";
import './assets/headline.css';/* empty css          */
import d from "./_virtual/_plugin-vue_export-helper.js";
const r = {}, s = { class: "lc-headline" }, l = { class: "lc-headline__text" };
function _(e, a) {
  return t(), o("div", s, [
    c("div", l, [
      n(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const p = /* @__PURE__ */ d(r, [["render", _], ["__scopeId", "data-v-fff24db2"]]);
export {
  p as default
};
