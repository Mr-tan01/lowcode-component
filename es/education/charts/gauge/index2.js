import { defineComponent as p, computed as m, openBlock as t, createElementBlock as i, createElementVNode as l, createVNode as u, unref as n, createBlock as c, createCommentVNode as d } from "vue";
import g from "../src/components/education/common/components/Charts/baseChart/base.js";
import { useCommonChartExpose as f } from "../src/components/education/common/components/Charts/utils/index.js";
import C from "lodash-es/merge";
import { useCommonGaugeOptions as _, useGaugeSeriesOptions as h } from "./options.js";
import b from "../src/components/education/common/components/Charts/legend/index.js";
const L = { class: "lc-gauge" }, v = { class: "lc-gauge__wrapper" }, N = /* @__PURE__ */ p({
  __name: "gauge",
  props: {
    legendLabel: { type: Function },
    options: { default: () => ({}) },
    showCustomLegend: { type: Boolean, default: !0 }
  },
  setup(s, { expose: r }) {
    const {
      exposes: a
    } = f("baseChart"), o = m(() => {
      const e = _(s.options);
      return e.series = h(e.series), C({}, e);
    });
    return r(a), (e, B) => (t(), i("div", L, [
      l("div", v, [
        u(n(g), {
          options: o.value,
          ref: "baseChart"
        }, null, 8, ["options"]),
        e.showCustomLegend ? (t(), c(n(b), {
          key: 0,
          disabled: "",
          legendLabel: e.legendLabel,
          options: o.value
        }, null, 8, ["legendLabel", "options"])) : d("v-if", !0)
      ])
    ]));
  }
});
export {
  N as default
};
