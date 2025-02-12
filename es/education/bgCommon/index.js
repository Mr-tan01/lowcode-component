// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { defineComponent as s, useCssVars as l, computed as m, openBlock as _, createElementBlock as a, createElementVNode as c, renderSlot as d } from "vue";
import { b as u } from "./assets/bg-ByhNX8B7.js";
const b = {
  url: `url(${u})`
}, g = { class: "lcc-bg__common" }, p = /* @__PURE__ */ s({
  __name: "bgCommon",
  setup(e) {
    l((t) => ({
      "10c5baf0": n.value
    }));
    const n = m(() => b.url);
    return (t, o) => (_(), a("div", g, [
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
      d(t.$slots, "default", {}, void 0, !0)
    ]));
  }
}), f = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, r] of n)
    t[o] = r;
  return t;
}, C = /* @__PURE__ */ f(p, [["__scopeId", "data-v-d257c117"]]);
export {
  C as LcBgCommon
};
