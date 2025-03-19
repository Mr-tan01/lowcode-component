import { defineComponent as a, mergeDefaults as c, useTemplateRef as i, computed as o, openBlock as m, createElementBlock as p, createVNode as u, unref as f, mergeProps as l } from "vue";
import d from "../common/components/Charts/baseChart/base.js";
import { useCommonScatterSeries as h, useCommonScatterOptions as C } from "./options.js";
import b from "lodash-es/merge";
const O = { class: "lc-scatter-chart" }, k = /* @__PURE__ */ a({
  __name: "scatter",
  props: /* @__PURE__ */ c({
    options: Object
  }, {
    options: () => ({})
  }),
  setup(e, { expose: s }) {
    const r = i("baseChart"), n = o(() => {
      e.options.series = h(e.options.series || []);
      const t = C(e.options);
      return b({}, t);
    });
    return s({
      instance: o(() => r.value)
    }), (t, g) => (m(), p("div", O, [
      u(f(d), l({ options: n.value }, t.$attrs, { ref: "baseChart" }), null, 16, ["options"])
    ]));
  }
});
export {
  k as default
};
