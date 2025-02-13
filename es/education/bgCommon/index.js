// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { defineComponent as s, mergeDefaults as l, useCssVars as m, computed as _, openBlock as a, createElementBlock as g, createElementVNode as n, renderSlot as b } from "vue";
import { b as u } from "./assets/bg-ByhNX8B7.js";
const d = {
  url: u
}, p = { class: "lcc-bg__common" }, i = /* @__PURE__ */ s({
  __name: "bgCommon",
  props: /* @__PURE__ */ l({
    bgSrc: String
  }, {
    bgSrc: ""
  }),
  setup(t) {
    m((e) => ({
      "1751c024": r.value
    }));
    const r = _(() => `url(${t.bgSrc || d.url})`);
    return (e, o) => (a(), g("div", p, [
      o[0] || (o[0] = n(
        "div",
        { class: "lcc-bg__common__bl-decoartor-bg" },
        null,
        -1
        /* HOISTED */
      )),
      o[1] || (o[1] = n(
        "div",
        { class: "lcc-bg__common__br-decoartor-bg" },
        null,
        -1
        /* HOISTED */
      )),
      b(e.$slots, "default", {}, void 0, !0)
    ]));
  }
}), f = (t, r) => {
  const e = t.__vccOpts || t;
  for (const [o, c] of r)
    e[o] = c;
  return e;
}, S = /* @__PURE__ */ f(i, [["__scopeId", "data-v-3900aa44"]]);
export {
  S as LcBgCommon
};
