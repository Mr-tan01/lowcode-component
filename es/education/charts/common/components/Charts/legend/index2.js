import { defineComponent as f, ref as h, watch as w, computed as S, openBlock as d, createElementBlock as c, createElementVNode as i, Fragment as y, renderList as L, normalizeStyle as b, renderSlot as k, toDisplayString as M } from "vue";
const $ = { class: "lc-common-legend" }, C = { class: "lc-common-legend__wrapper__legend" }, A = ["title", "onClick", "onMouseenter", "onMouseleave"], B = { class: "lc-common-legend__wrapper__legend__item__label" }, D = /* @__PURE__ */ f({
  __name: "legend",
  props: {
    options: { default: () => ({}) },
    legendLabel: { type: Function, default: (t) => t },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["legend:click", "legend:toggleSelect"],
  setup(t, { emit: g }) {
    const s = h(/* @__PURE__ */ new Map());
    w(() => t.options.series, () => {
      var e, n;
      s.value.clear(), Array.isArray(t.options.series) && ((n = (e = t.options.series[0]) == null ? void 0 : e.data) == null || n.forEach((l) => {
        if (!l.name)
          return window.console.warn("item.name is required");
        s.value.set(l.name, {
          selected: !0,
          ...l
        });
      }));
    }, {
      deep: 2,
      immediate: !0
    });
    const r = g;
    function a(e, n) {
      r("legend:toggleSelect", {
        type: e,
        name: n
      });
    }
    function m(e) {
      if (!s.value.has(e) || t.disabled) return;
      const n = s.value.get(e);
      a(n != null && n.selected ? "legendUnSelect" : "legendSelect", e), s.value.set(e, {
        ...n,
        selected: !(n != null && n.selected)
      });
    }
    function _(e) {
      m(e.name), r("legend:click", e);
    }
    function p(e, n) {
      var o;
      const { color: l = [] } = t.options ?? {};
      return {
        "--item-color": l[e],
        "--unselect-color": (o = s.value.get(n.name)) != null && o.selected ? 1 : 0.5
      };
    }
    const v = S(() => {
      var e, n, l, o;
      return ((n = (e = t.options) == null ? void 0 : e.series) == null ? void 0 : n[0].data) ?? ((o = (l = t.options) == null ? void 0 : l.series) == null ? void 0 : o.data) ?? [];
    });
    return (e, n) => (d(), c("div", $, [
      i("div", C, [
        (d(!0), c(
          y,
          null,
          L(v.value, (l, o) => (d(), c("div", {
            class: "lc-common-legend__wrapper__legend__item",
            key: o,
            style: b(p(o, l)),
            title: e.legendLabel(l.name, l.value),
            onClick: (u) => _(l),
            onMouseenter: (u) => a("highlight", l.name),
            onMouseleave: (u) => a("downplay", l.name)
          }, [
            k(e.$slots, "legend", {}, () => [
              n[0] || (n[0] = i(
                "div",
                { class: "lc-common-legend__wrapper__legend__item__icon" },
                null,
                -1
                /* HOISTED */
              )),
              i(
                "div",
                B,
                M(e.legendLabel(l.name, l.value)),
                1
                /* TEXT */
              )
            ], !0)
          ], 44, A))),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]));
  }
});
export {
  D as default
};
