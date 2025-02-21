// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { openBlock as s, createElementBlock as l, createElementVNode as a, renderSlot as n } from "vue";
const _ = (e, c) => {
  const t = e.__vccOpts || e;
  for (const [r, o] of c)
    t[r] = o;
  return t;
}, d = {}, i = { class: "lc-elastic-scrollbar" }, f = { class: "lc-elastic-scrollbar__wrapper" };
function p(e, c) {
  return s(), l("div", i, [
    a("div", f, [
      n(e.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const m = /* @__PURE__ */ _(d, [["render", p], ["__scopeId", "data-v-5a702158"]]);
export {
  m as LcElasticScrollbar
};
