import { defineComponent as d, useTemplateRef as p, computed as u, watch as y, openBlock as g, createElementBlock as x, createVNode as C, unref as S } from "vue";
import k from "../../scatter/index.js";
import R from "lodash-es/merge";
import "@mmj-code-lib/lowcode/es/components";
import "lowcode-share/es/share";
import { useCommonScatterSeries as v, useCommonScatterOptions as I } from "./options.js";
const w = { class: "lc-fourscatter" }, D = /* @__PURE__ */ d({
  __name: "fourScatter",
  props: {
    options: { default: () => ({}) },
    isPushAxis: { type: Boolean, default: !0 },
    isDefaultTooltip: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(r, { expose: l, emit: a }) {
    const n = p("lcScatterChartCom"), m = u(() => {
      r.options.series = v(r.options.series || []);
      const e = I(r.options, r.isDefaultTooltip);
      return h(e), R({}, e);
    }), f = a;
    y(
      () => {
        var e;
        return (e = n.value) == null ? void 0 : e.instance;
      },
      (e) => {
        e != null && e.chartInstance && (e == null || e.chartInstance.off("click"), e == null || e.chartInstance.on("click", function(t) {
          f("click", t);
        }));
      },
      {
        deep: !0
      }
    );
    function h(e) {
      r.isPushAxis && e.series.push(
        {
          type: "custom",
          coordinateSystem: "cartesian2d",
          silent: !0,
          renderItem: function(t, o) {
            if (t.isRenderer) return;
            t.isRenderer = !0;
            const s = o.getWidth() - 100, i = o.getHeight() / 2 - 20;
            return {
              type: "line",
              shape: {
                x1: 100,
                y1: i,
                x2: s,
                y2: i
              },
              style: {
                lineWidth: 0.5,
                stroke: "rgba(255, 255, 255, 1)"
              }
            };
          },
          z: 10,
          level: 10,
          data: [1]
        },
        {
          type: "custom",
          silent: !0,
          renderItem: function(t, o) {
            if (t.isRenderer) return;
            t.isRenderer = !0;
            const s = o.getWidth(), c = o.getHeight() - 70, i = s / 2;
            return {
              type: "line",
              shape: {
                x1: i,
                y1: 30,
                x2: i,
                y2: c
              },
              style: {
                lineWidth: 0.5,
                stroke: "rgba(255, 255, 255, 1)"
              }
            };
          },
          data: [1]
        }
      );
    }
    return l({
      instance: u(() => {
        var e;
        return (e = n.value) == null ? void 0 : e.instance;
      })
    }), (e, t) => (g(), x("div", w, [
      C(S(k), {
        options: m.value,
        ref: "lcScatterChartCom"
      }, null, 8, ["options"])
    ]));
  }
});
export {
  D as default
};
