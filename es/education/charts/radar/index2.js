import { defineComponent as n, mergeDefaults as a, computed as m, openBlock as p, createElementBlock as i, createVNode as c, unref as u } from "vue";
import d from "../common/components/Charts/baseChart/base.js";
import { useCommonChartExpose as f } from "../common/components/Charts/utils/index.js";
import l from "lodash-es/merge";
import { useCommonRadarOptions as C, useCommonRadarSeries as _ } from "./options.js";
const h = { class: "lc-radar" }, v = /* @__PURE__ */ n({
  __name: "radar",
  props: /* @__PURE__ */ a({
    options: Object
  }, {
    options: () => ({})
  }),
  setup(o, { expose: r }) {
    const t = m(() => {
      const e = C(o.options);
      return e.series = _(e.series), l({}, e);
    }), {
      exposes: s
    } = f("baseChart");
    return r(s), (e, x) => (p(), i("div", h, [
      c(u(d), {
        options: t.value,
        ref: "baseChart"
      }, null, 8, ["options"])
    ]));
  }
});
export {
  v as default
};
