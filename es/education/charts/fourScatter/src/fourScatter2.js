import { defineComponent as p, useTemplateRef as f, computed as u, watch as y, openBlock as g, createElementBlock as x, createVNode as C, unref as S } from "vue";
import k from "../../scatter/index.js";
import R from "lodash-es/merge";
import "@mmj-code-lib/lowcode/es/components";
import "lowcode-share/es/share";
import { useCommonScatterSeries as v, useCommonScatterOptions as I } from "./options.js";
const w = { class: "lc-fourscatter" }, P = /* @__PURE__ */ p({
  __name: "fourScatter",
  props: {
    options: { default: () => ({}) },
    isPushAxis: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(i, { expose: l, emit: m }) {
    const n = f("lcScatterChartCom"), a = u(() => {
      i.options.series = v(i.options.series || []);
      const e = I(i.options);
      return d(e), R({}, e);
    }), h = m;
    y(() => {
      var e;
      return (e = n.value) == null ? void 0 : e.instance;
    }, (e) => {
      e != null && e.chartInstance && (e == null || e.chartInstance.off("click"), e == null || e.chartInstance.on("click", function(t) {
        h("click", t);
      }));
    }, {
      deep: !0
    });
    function d(e) {
      i.isPushAxis && e.series.push({
        type: "custom",
        coordinateSystem: "cartesian2d",
        renderItem: function(t, r) {
          if (t.isRenderer) return;
          t.isRenderer = !0;
          const s = r.getWidth(), o = r.getHeight() / 2 - 20;
          return {
            type: "line",
            shape: {
              x1: 0,
              y1: o,
              x2: s,
              y2: o
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
      }, {
        type: "custom",
        renderItem: function(t, r) {
          if (t.isRenderer) return;
          t.isRenderer = !0;
          const s = r.getWidth(), c = r.getHeight(), o = s / 2;
          return {
            type: "line",
            shape: {
              x1: o,
              y1: 0,
              x2: o,
              y2: c
            },
            style: {
              lineWidth: 0.5,
              stroke: "rgba(255, 255, 255, 1)"
            }
          };
        },
        data: [1]
      });
    }
    return l({
      instance: u(() => {
        var e;
        return (e = n.value) == null ? void 0 : e.instance;
      })
    }), (e, t) => (g(), x("div", w, [
      C(S(k), {
        options: a.value,
        ref: "lcScatterChartCom"
      }, null, 8, ["options"])
    ]));
  }
});
export {
  P as default
};
