import { defineComponent as n, mergeDefaults as m, computed as i, openBlock as p, createElementBlock as a, createVNode as c, unref as u, mergeProps as f } from "vue";
import l from "../src/components/education/common/components/Charts/baseChart/base.js";
import { useCommonChartExpose as d } from "../src/components/education/common/components/Charts/utils/index.js";
import { useCommonScatterSeries as C, useCommonScatterOptions as h } from "./options.js";
import x from "lodash-es/merge";
const O = { class: "lc-scatter-chart" }, v = /* @__PURE__ */ n({
  __name: "funnel",
  props: /* @__PURE__ */ m({
    options: Object
  }, {
    options: () => ({})
  }),
  setup(e, { expose: t }) {
    const s = i(() => {
      e.options.series = C(e.options.series || []);
      const o = h(e.options);
      return x({}, o);
    }), {
      exposes: r
    } = d("baseChart");
    return t(r), (o, g) => (p(), a("div", O, [
      c(u(l), f({ options: s.value }, o.$attrs), null, 16, ["options"])
    ]));
  }
});
export {
  v as default
};
