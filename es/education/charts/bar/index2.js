import { defineComponent as t, computed as a, openBlock as n, createElementBlock as s, createVNode as i, unref as l, mergeProps as m } from "vue";
import { SChartsBar as c } from "../@mmj-code-lib/lowcode/es/components/index.js";
import { useCommonBarOptions as d, useCommonBarSeries as f, commonBarOptions as p } from "./options.js";
import u from "lodash-es/merge";
import { barBuiltInStyle as k } from "./const.js";
const B = { class: "lc-bar-chart" }, z = /* @__PURE__ */ t({
  __name: "bar",
  props: {
    options: { default: () => ({}) },
    linearGradientColor: { default: () => k.color },
    isHorizontal: { type: Boolean, default: !1 },
    stack: { type: Boolean, default: !1 },
    fake3d: { type: Boolean, default: !0 }
  },
  setup(o) {
    const r = a(() => {
      const e = d(o.options, { isHorizontal: o.isHorizontal });
      return e.series = f(e.series, { stack: o.stack }), u({}, p, e);
    });
    return (e, C) => (n(), s("div", B, [
      i(l(c), m({
        opts: r.value,
        linearGradientColor: e.linearGradientColor,
        stack: e.stack,
        fake3d: e.fake3d
      }, e.$attrs), null, 16, ["opts", "linearGradientColor", "stack", "fake3d"])
    ]));
  }
});
export {
  z as default
};
