// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { openBlock as s, createElementBlock as r, createElementVNode as _, renderSlot as a } from "vue";
const l = (e, t) => {
  const c = e.__vccOpts || e;
  for (const [o, n] of t)
    c[o] = n;
  return c;
}, d = {}, i = { class: "lc-page_title" }, f = { class: "lc-page_title__text" };
function p(e, t) {
  return s(), r("div", i, [
    _("div", f, [
      a(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const g = /* @__PURE__ */ l(d, [["render", p], ["__scopeId", "data-v-ae87fa44"]]);
export {
  g as LcPageTitle
};
