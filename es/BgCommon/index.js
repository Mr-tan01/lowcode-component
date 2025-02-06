// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { defineComponent as s, useCssVars as l, computed as m, openBlock as _, createElementBlock as a, createElementVNode as c, renderSlot as d } from "vue";
import { b as u } from "./assets/bg-ByhNX8B7.js";
const g = {
  url: `url(${u})`
}, p = { class: "lcc-bg__common" }, b = /* @__PURE__ */ s({
  __name: "BgCommon",
  setup(t) {
    l((e) => ({
      "1ee1a61c": n.value
    }));
    const n = m(() => g.url);
    return (e, o) => (_(), a("div", p, [
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
      d(e.$slots, "default", {}, void 0, !0)
    ]));
  }
}), f = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [o, r] of n)
    e[o] = r;
  return e;
}, B = /* @__PURE__ */ f(b, [["__scopeId", "data-v-e901cddf"]]);
export {
  B as LcBgCommon
};
