import { defineComponent as l, computed as p, openBlock as t, createElementBlock as m, createElementVNode as i, createVNode as u, unref as n, createBlock as c, createCommentVNode as d } from "vue";
import g from "../common/components/Charts/baseChart/base.js";
import { useCommonChartExpose as f } from "../common/components/Charts/utils/index.js";
import C from "lodash-es/merge";
import { useCommonGaugeOptions as _, useGaugeSeriesOptions as h } from "./options.js";
import b from "../common/components/Charts/legend/index.js";
const v = { class: "lc-gauge" }, B = { class: "lc-gauge__wrapper" }, N = /* @__PURE__ */ l({
  __name: "gauge",
  props: {
    legendLabel: { type: Function },
    options: { default: () => ({}) },
    showCustomLegend: { type: Boolean, default: !0 }
  },
  setup(s, { expose: r }) {
    const { exposes: a } = f("baseChart"), o = p(() => {
      const e = _(s.options);
      return e.series = h(e.series), C({}, e);
    });
    return r(a), (e, L) => (t(), m("div", v, [
      i("div", B, [
        u(n(g), {
          ref: "baseChart",
          options: o.value
        }, null, 8, ["options"]),
        e.showCustomLegend ? (t(), c(n(b), {
          key: 0,
          disabled: "",
          "legend-label": e.legendLabel,
          options: o.value
        }, null, 8, ["legend-label", "options"])) : d("v-if", !0)
      ])
    ]));
  }
});
export {
  N as default
};
