import { defineComponent as P, useCssVars as S, useTemplateRef as z, shallowRef as O, computed as g, onMounted as T, watchPostEffect as B, ref as D, onBeforeUnmount as R, openBlock as h, createElementBlock as v, normalizeClass as A, normalizeStyle as V, createElementVNode as a, createVNode as W, unref as E, createCommentVNode as N } from "vue";
import { init as $ } from "echarts";
import { useCommonPieOptions as M, usePieCommonSeries as F } from "./options.js";
import G from "lodash-es/merge";
import { useResizeObserver as I } from "@vueuse/core";
import { debounce as U } from "lodash-es";
import { innerGraphicColors as j } from "./const.js";
import q from "../common/components/Charts/legend/index.js";
const x = { class: "lc-pie__wrapper" }, H = {
  key: 0,
  class: "lc-pie__wrapper__legend"
}, J = { class: "lc-pie__wrapper__chart" }, K = {
  class: "lc-pie__wrapper__chart__inner",
  ref: "chartDom"
}, le = /* @__PURE__ */ P({
  __name: "pie",
  props: {
    options: {},
    debounceTime: { default: 300 },
    legendLabel: { type: Function, default: (t) => t },
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
  setup(t, { expose: C, emit: _ }) {
    S((e) => ({
      f1a872dc: e.flexDirection,
      "4e6fe7ee": k.value,
      "964e626c": e.legendPosition,
      "7c6ece28": e.legendLeft,
      df3269d8: e.legendTop,
      "720b1a42": m.value
    }));
    const r = z("chartDom"), l = O(), s = g(() => {
      const e = M(t.options);
      return e.series = F(
        e.series,
        t.graphicColors,
        e.color,
        t.layout
      ), e.series && !Array.isArray(e.series) && (e.series = [e.series]), G({}, e);
    });
    function c(e, o) {
      var n;
      (n = l.value) == null || n.dispatchAction({
        type: e,
        name: o
      });
    }
    const d = _;
    function w(e) {
      d("legend:click", e);
    }
    function y(e) {
      c(e.type, e.name), d("legend:toggleSelect", e);
    }
    T(b), B(() => {
      u(s.value, !0);
    });
    function b() {
      l.value = $(r.value, s.value);
    }
    function u(e, o, n) {
      var i;
      (i = l.value) == null || i.setOption(e, o, n);
    }
    const m = D("100%");
    function L(e) {
      var p;
      const o = e[0], { width: n, height: i } = o.contentRect;
      m.value = Math.min(n, i) + "px", (p = l.value) == null || p.resize();
    }
    const { stop: f } = I(r, U(L, t.debounceTime)), k = g(() => t.legendPosition === "absolute" ? `0 ${t.legendWidth}` : "0");
    return R(f), C({
      chartInstance: l,
      stop: f,
      setOptions: u,
      dispatchAction: c
    }), (e, o) => (h(), v(
      "div",
      {
        class: A(["lc-pie", [`lc-pie--${e.layout}`]]),
        style: V({
          "--legendWidth": e.legendWidth
        })
      },
      [
        a("div", x, [
          e.showCustomLegend ? (h(), v("div", H, [
            W(E(q), {
              "legend-label": e.legendLabel,
              options: s.value,
              "onLegend:click": w,
              "onLegend:toggleSelect": y
            }, null, 8, ["legend-label", "options"])
          ])) : N("v-if", !0),
          a("div", J, [
            a(
              "div",
              K,
              null,
              512
              /* NEED_PATCH */
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
