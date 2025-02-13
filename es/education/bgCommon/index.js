// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { defineComponent as s, mergeDefaults as l, useCssVars as m, computed as _, openBlock as g, createElementBlock as a, createElementVNode as r, renderSlot as b } from "vue";
import { b as d } from "./assets/bg-ByhNX8B7.js";
const u = {
  url: `url(${d})`
}, p = { class: "lcc-bg__common" }, i = /* @__PURE__ */ s({
  __name: "bgCommon",
  props: /* @__PURE__ */ l({
    bgSrc: String
  }, {
    bgSrc: ""
  }),
  setup(t) {
    m((e) => ({
      "88c16c0c": c.value
    }));
    const c = _(() => t.bgSrc || u.url);
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
      b(e.$slots, "default", {}, void 0, !0)
    ]));
  }
}), f = (t, c) => {
  const e = t.__vccOpts || t;
  for (const [o, n] of c)
    e[o] = n;
  return e;
}, S = /* @__PURE__ */ f(i, [["__scopeId", "data-v-c76d481e"]]);
export {
  S as LcBgCommon
};
