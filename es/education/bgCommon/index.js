// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { defineComponent as s, mergeDefaults as l, useCssVars as m, computed as _, openBlock as a, createElementBlock as g, createElementVNode as c, renderSlot as d } from "vue";
import { b } from "./assets/bg-ByhNX8B7.js";
const u = {
  url: b
}, p = { class: "lcc-bg__common" }, i = { class: "lcc-bg__common__wrapper" }, f = /* @__PURE__ */ s({
  __name: "bgCommon",
  props: /* @__PURE__ */ l({
    bgSrc: String
  }, {
    bgSrc: ""
  }),
  setup(t) {
    m((e) => ({
      "24d8b3fe": r.value
    }));
    const r = _(() => `url(${t.bgSrc || u.url})`);
    return (e, o) => (a(), g("div", p, [
      o[0] || (o[0] = c(
        "div",
        { class: "lcc-bg__common__bl-decoartor-bg" },
        null,
        -1
        /* HOISTED */
      )),
      o[1] || (o[1] = c(
        "div",
        { class: "lcc-bg__common__br-decoartor-bg" },
        null,
        -1
        /* HOISTED */
      )),
      c("div", i, [
        d(e.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), v = (t, r) => {
  const e = t.__vccOpts || t;
  for (const [o, n] of r)
    e[o] = n;
  return e;
}, k = /* @__PURE__ */ v(f, [["__scopeId", "data-v-25de233a"]]);
export {
  k as LcBgCommon
};
