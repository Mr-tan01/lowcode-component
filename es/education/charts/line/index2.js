import { defineComponent as s, mergeDefaults as r, computed as i, resolveComponent as p, openBlock as m, createElementBlock as c, createVNode as a, mergeProps as l } from "vue";
import { useCommonLineOptions as u, useCommonLineSeries as _ } from "./options.js";
import d from "lodash-es/merge";
const f = { class: "lc-line-chart" }, g = /* @__PURE__ */ s({
  __name: "line",
  props: /* @__PURE__ */ r({
    options: Object
  }, {
    options: () => ({})
  }),
  setup(o) {
    const t = i(() => {
      const e = u(o.options);
      return e.series = _(e.series), d({}, e);
    });
    return (e, C) => {
      const n = p("SChartsLine");
      return m(), c("div", f, [
        a(n, l({ opts: t.value }, e.$attrs), null, 16, ["opts"])
      ]);
    };
  }
});
export {
  g as default
};
