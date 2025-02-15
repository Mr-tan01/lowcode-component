// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { defineComponent as s, mergeDefaults as l, useCssVars as m, computed as _, openBlock as g, createElementBlock as a, createElementVNode as r, renderSlot as b } from "vue";
import { b as d } from "./assets/bg-ByhNX8B7.js";
const u = {
  url: d
}, p = { class: "lcc-bg__common" }, i = { class: "lcc-bg__common__wrapper" }, f = /* @__PURE__ */ s({
  __name: "bgCommon",
  props: /* @__PURE__ */ l({
    bgSrc: String
  }, {
    bgSrc: ""
  }),
  setup(t) {
    m((e) => ({
      "00d4669c": c.value
    }));
    const c = _(() => `url(${t.bgSrc || u.url})`);
    return (e, o) => (g(), a("div", p, [
      o[0] || (o[0] = r(
        "div",
        { class: "lcc-bg__common__bl-decoartor-bg" },
        null,
        -1
        /* HOISTED */
      )),
      o[1] || (o[1] = r(
        "div",
        { class: "lcc-bg__common__br-decoartor-bg" },
        null,
        -1
        /* HOISTED */
      )),
      r("div", i, [
        b(e.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), v = (t, c) => {
  const e = t.__vccOpts || t;
  for (const [o, n] of c)
    e[o] = n;
  return e;
}, k = /* @__PURE__ */ v(f, [["__scopeId", "data-v-08ff68b0"]]);
export {
  k as LcBgCommon
};
