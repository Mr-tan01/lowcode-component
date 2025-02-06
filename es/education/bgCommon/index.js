// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { defineComponent as c, useCssVars as l, computed as m, openBlock as _, createElementBlock as a, createElementVNode as r, renderSlot as d } from "vue";
import { b as u } from "./assets/bg-ByhNX8B7.js";
const b = {
  url: `url(${u})`
}, g = { class: "lcc-bg__common" }, p = /* @__PURE__ */ c({
  __name: "bgCommon",
  setup(e) {
    l((t) => ({
      "24073f44": n.value
    }));
    const n = m(() => b.url);
    return (t, o) => (_(), a("div", g, [
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
      d(t.$slots, "default", {}, void 0, !0)
    ]));
  }
}), f = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, s] of n)
    t[o] = s;
  return t;
}, C = /* @__PURE__ */ f(p, [["__scopeId", "data-v-f009ba31"]]);
export {
  C as LcBgCommon
};
