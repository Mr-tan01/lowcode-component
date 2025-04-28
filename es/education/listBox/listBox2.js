import { defineComponent as x, openBlock as i, createElementBlock as n, normalizeClass as S, createVNode as b, unref as r, withCtx as s, Fragment as m, renderList as w, createBlock as A, normalizeStyle as o, createElementVNode as y, toDisplayString as c } from "vue";
import { NGrid as k, NGi as v } from "naive-ui";
const C = /* @__PURE__ */ x({
  __name: "listBox",
  props: {
    rows: { default: () => [] },
    rowStyle: { default: () => ({}) },
    bordered: { type: Boolean, default: !1 },
    keyStyle: { default: () => ({
      width: "150px",
      backgroundColor: "#063B6B",
      padding: "12px 15px",
      textAlign: "left"
    }) },
    valueStyle: { default: () => ({
      width: "300px",
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
    const u = (t) => {
      var a, d;
      const l = {
        ...e.keyStyle,
        padding: e.cellPadding || ((a = e.keyStyle) == null ? void 0 : a.padding),
        textAlign: e.keyStyle.textAlign || e.defaultAlign,
        ...((d = e.rows[t]) == null ? void 0 : d.keyStyle) || {}
      };
      return e.bordered && (l.borderLeft = "1px solid #07467a", l.borderTop = "1px solid #07467a", l.borderBottom = "1px solid #07467a", t === e.rows.length - 1 && (l.borderRight = "1px solid #07467a")), l;
    }, g = (t) => {
      var a, d;
      const l = {
        ...e.valueStyle,
        padding: e.cellPadding || ((a = e.valueStyle) == null ? void 0 : a.padding),
        textAlign: e.valueStyle.textAlign || e.defaultAlign,
        ...((d = e.rows[t]) == null ? void 0 : d.valueStyle) || {}
      };
      return e.bordered && (l.borderTop = "1px solid #07467A", l.borderBottom = "1px solid #07467A", l.borderRight = "1px solid #07467A", l.borderLeft = "1px solid #07467A"), l;
    }, f = (t) => {
      const l = {
        display: "flex",
        width: "100%",
        minWidth: "fit-content"
      };
      return t % 2 === 0 && e.rowStyle.even ? Object.assign(l, e.rowStyle.even) : t % 2 !== 0 && e.rowStyle.odd && Object.assign(l, e.rowStyle.odd), l;
    };
    return (t, l) => (i(), n(
      "div",
      {
        class: S(["dynamic-data-list", { "is-bordered": t.bordered }])
      },
      [
        b(r(k), {
          "x-gap": t.gap,
          cols: t.cols
        }, {
          default: s(() => [
            (i(!0), n(
              m,
              null,
              w(t.rows, (a, d) => (i(), A(r(v), {
                key: `row-${d}`,
                class: "list-row",
                style: o(f(d))
              }, {
                default: s(() => [
                  y(
                    "div",
                    {
                      class: "key-cell",
                      style: o(u(d))
                    },
                    c(a.indicatorName),
                    5
                    /* TEXT, STYLE */
                  ),
                  y(
                    "div",
                    {
                      class: "value-cell",
                      style: o(g(d))
                    },
                    c(a.indicatorValue),
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
  C as default
};
