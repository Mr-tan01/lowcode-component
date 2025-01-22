import { defineComponent as s, useCssVars as l, computed as m, openBlock as _, createElementBlock as a, createElementVNode as c, renderSlot as d } from "vue";
import { b as u } from "./assets/bg.png-ByhNX8B7.js";
const g = {
  url: `url(${u})`
}, b = { class: "lcc-bg__common" }, p = /* @__PURE__ */ s({
  __name: "BgCommon",
  setup(e) {
    l((t) => ({
      "2c2c3cab": n.value
    }));
    const n = m(() => g.url);
    return (t, o) => (_(), a("div", b, [
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
}), i = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, r] of n)
    t[o] = r;
  return t;
}, B = /* @__PURE__ */ i(p, [["__scopeId", "data-v-1919b506"]]);
export {
  B as LcBgCommon
};
