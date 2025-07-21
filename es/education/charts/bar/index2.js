import { defineComponent as h, useTemplateRef as g, computed as B, onMounted as k, openBlock as y, createElementBlock as v, createVNode as O, unref as C, mergeProps as A } from "vue";
import { SChartsBar as I } from "@mmj-code-lib/lowcode/es/components";
import { useCommonBarOptions as b, useCommonBarSeries as w, commonBarOptions as z } from "./options.js";
import R from "lodash-es/merge";
import { barBuiltInStyle as S } from "./const.js";
const E = { class: "lc-bar-chart" }, N = /* @__PURE__ */ h({
  __name: "bar",
  props: {
    options: { default: () => ({}) },
    linearGradientColor: { default: () => S.color },
    isHorizontal: { type: Boolean, default: !1 },
    stack: { type: Boolean, default: !1 },
    fake3d: { type: Boolean, default: !0 },
    events: { default: () => ({}) }
  },
  setup(t) {
    const n = g("chartBarRef"), p = B(() => {
      const e = b(t.options, { isHorizontal: t.isHorizontal });
      return e.series = w(e.series, { stack: t.stack }), R({}, z, e);
    });
    return k(() => {
      var e, l;
      n.value && n.value.chartInstance && (Object.entries(t.events).forEach(([r, o]) => {
        var c, s;
        typeof o == "function" && ((s = (c = n.value) == null ? void 0 : c.chartInstance) == null || s.on(r, o(n)));
      }), typeof t.events.legendselectchanged != "function" && t.events.legendselectchanged !== null && ((l = (e = n.value) == null ? void 0 : e.chartInstance) == null || l.on("legendselectchanged", function() {
        var f, u, d, m;
        const r = (f = n.value) == null ? void 0 : f.chartInstance;
        if (!r) return;
        const o = r.getOption(), s = ((u = o.legend) == null ? void 0 : u[0]).selected || {}, a = o.series, i = o.yAxis;
        !Array.isArray(i) || i.length <= 1 || r.setOption({
          yAxis: [{ show: s[(d = a == null ? void 0 : a[0]) == null ? void 0 : d.name] !== !1 }, { show: s[(m = a == null ? void 0 : a[1]) == null ? void 0 : m.name] !== !1 }]
        });
      })));
    }), (e, l) => (y(), v("div", E, [
      O(C(I), A(e.$attrs, {
        ref: "chartBarRef",
        opts: p.value,
        "linear-gradient-color": e.linearGradientColor,
        stack: e.stack,
        fake3d: e.fake3d
      }), null, 16, ["opts", "linear-gradient-color", "stack", "fake3d"])
    ]));
  }
});
export {
  N as default
};
