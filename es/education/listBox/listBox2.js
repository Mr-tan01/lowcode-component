import { defineComponent as x, openBlock as i, createElementBlock as r, normalizeClass as S, createVNode as b, unref as n, withCtx as s, Fragment as m, renderList as A, createBlock as k, normalizeStyle as o, createElementVNode as y, toDisplayString as u } from "vue";
import { NGrid as v, NGi as w } from "naive-ui";
const h = /* @__PURE__ */ x({
  __name: "listBox",
  props: {
    rows: { default: () => [] },
    rowStyle: { default: () => ({}) },
    bordered: { type: Boolean, default: !1 },
    keyStyle: { default: () => ({
      flex: 3,
      backgroundColor: "#063B6B",
      padding: "12px 15px",
      textAlign: "left"
    }) },
    valueStyle: { default: () => ({
      flex: 6,
      backgroundColor: "#063661",
      padding: "12px 15px",
      textAlign: "left"
    }) },
    cellPadding: { default: "12px 15px" },
    defaultAlign: { default: "left" },
    gap: { default: 0 },
    cols: { default: 2 }
  },
  setup(e) {
    const c = (t) => {
      var a, d;
      const l = {
        ...e.keyStyle,
        padding: e.cellPadding || ((a = e.keyStyle) == null ? void 0 : a.padding),
        textAlign: e.keyStyle.textAlign || e.defaultAlign,
        ...((d = e.rows[t]) == null ? void 0 : d.keyStyle) || {}
      };
      return e.bordered && (l.borderLeft = "1px solid #07467a", l.borderTop = "1px solid #07467a", l.borderBottom = "1px solid #07467a", t === e.rows.length - 1 && (l.borderRight = "1px solid #07467a")), l;
    }, f = (t) => {
      var a, d;
      const l = {
        ...e.valueStyle,
        padding: e.cellPadding || ((a = e.valueStyle) == null ? void 0 : a.padding),
        textAlign: e.valueStyle.textAlign || e.defaultAlign,
        ...((d = e.rows[t]) == null ? void 0 : d.valueStyle) || {}
      };
      return e.bordered && (l.borderTop = "1px solid #07467A", l.borderBottom = "1px solid #07467A", l.borderRight = "1px solid #07467A", l.borderLeft = "1px solid #07467A"), l;
    }, g = (t) => {
      const l = {
        display: "flex",
        width: "100%"
      };
      return t % 2 === 0 && e.rowStyle.even ? Object.assign(l, e.rowStyle.even) : t % 2 !== 0 && e.rowStyle.odd && Object.assign(l, e.rowStyle.odd), l;
    };
    return (t, l) => (i(), r(
      "div",
      {
        class: S(["dynamic-data-list", { "is-bordered": t.bordered }])
      },
      [
        b(n(v), {
          "x-gap": t.gap,
          cols: t.cols
        }, {
          default: s(() => [
            (i(!0), r(
              m,
              null,
              A(t.rows, (a, d) => (i(), k(n(w), {
                key: `row-${d}`,
                class: "list-row",
                style: o(g(d))
              }, {
                default: s(() => [
                  y(
                    "div",
                    {
                      class: "key-cell",
                      style: o(c(d))
                    },
                    u(a.indicatorName),
                    5
                    /* TEXT, STYLE */
                  ),
                  y(
                    "div",
                    {
                      class: "value-cell",
                      style: o(f(d))
                    },
                    u(a.indicatorValue),
                    5
                    /* TEXT, STYLE */
                  )
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["style"]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["x-gap", "cols"])
      ],
      2
      /* CLASS */
    ));
  }
});
export {
  h as default
};
