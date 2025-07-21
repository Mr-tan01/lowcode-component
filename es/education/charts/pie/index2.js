import { defineComponent as T, useCssVars as z, useTemplateRef as A, shallowRef as O, computed as s, onMounted as B, watchPostEffect as D, ref as R, onBeforeUnmount as V, openBlock as h, createElementBlock as _, normalizeClass as v, normalizeStyle as W, createElementVNode as a, createVNode as E, unref as N, createCommentVNode as $ } from "vue";
import { init as M } from "echarts";
import { useCommonPieOptions as F, usePieCommonSeries as G } from "./options.js";
import H from "lodash-es/merge";
import { useResizeObserver as I } from "@vueuse/core";
import { debounce as U } from "lodash-es";
import { innerGraphicColors as j } from "./const.js";
import q from "../common/components/Charts/legend/index.js";
const x = { class: "lc-pie__wrapper" }, J = {
  key: 0,
  class: "lc-pie__wrapper__legend"
}, K = { class: "lc-pie__wrapper__chart" }, le = /* @__PURE__ */ T({
  __name: "pie",
  props: {
    options: {},
    debounceTime: { default: 300 },
    legendLabel: { type: Function, default: (n) => n },
    graphicColors: { default: () => j },
    flexDirection: { default: "row" },
    showCustomLegend: { type: Boolean, default: !0 },
    layout: { default: "default" },
    legendLeft: { default: "20%" },
    legendTop: { default: "50%" },
    legendPosition: { default: "relative" },
    legendWidth: { default: "128px" }
  },
  emits: ["legend:click", "legend:toggleSelect"],
  setup(n, { expose: w, emit: y }) {
    z((e) => ({
      "3a5169d4": e.flexDirection,
      "01958b30": S.value,
      "666793c8": e.legendPosition,
      "01b3c226": e.legendLeft,
      "18d45f56": e.legendTop,
      "0ed25f5d": f.value
    }));
    const c = A("chartDom"), l = O(), i = s(() => {
      const e = F(n.options);
      return e.series = G(e.series, n.graphicColors, e.color, n.layout), e.series && !Array.isArray(e.series) && (e.series = [e.series]), H({}, e);
    });
    function d(e, t) {
      var o;
      (o = l.value) == null || o.dispatchAction({
        type: e,
        name: t
      });
    }
    const u = y;
    function C(e) {
      u("legend:click", e);
    }
    function b(e) {
      d(e.type, e.name), u("legend:toggleSelect", e);
    }
    B(k), D(() => {
      p(i.value, !0);
    });
    const L = s(() => {
      const { title: e } = i.value;
      return Array.isArray(e) ? e.every((t) => (t == null ? void 0 : t.show) === !1) : (e == null ? void 0 : e.show) === !1;
    });
    function k() {
      l.value = M(c.value, i.value);
    }
    function p(e, t, o) {
      var r;
      (r = l.value) == null || r.setOption(e, t, o);
    }
    const f = R("100%");
    function P(e) {
      var g;
      const t = e[0], { width: o, height: r } = t.contentRect;
      f.value = Math.min(o, r) + "px", (g = l.value) == null || g.resize();
    }
    const { stop: m } = I(c, U(P, n.debounceTime)), S = s(() => n.legendPosition === "absolute" ? `0 ${n.legendWidth}` : "0");
    return V(m), w({
      chartInstance: l,
      stop: m,
      setOptions: p,
      dispatchAction: d
    }), (e, t) => (h(), _(
      "div",
      {
        class: v(["lc-pie", [`lc-pie--${e.layout}`]]),
        style: W({
          "--legendWidth": e.legendWidth
        })
      },
      [
        a("div", x, [
          e.showCustomLegend ? (h(), _("div", J, [
            E(N(q), {
              "legend-label": e.legendLabel,
              options: i.value,
              "onLegend:click": C,
              "onLegend:toggleSelect": b
            }, null, 8, ["legend-label", "options"])
          ])) : $("v-if", !0),
          a("div", K, [
            a(
              "div",
              {
                ref: "chartDom",
                class: v(["lc-pie__wrapper__chart__inner", [L.value ? "lc-pie__wrapper__chart__inner--not--title" : "lc-pie__wrapper__chart__inner--title"]])
              },
              null,
              2
              /* CLASS */
            )
          ])
        ])
      ],
      6
      /* CLASS, STYLE */
    ));
  }
});
export {
  le as default
};
