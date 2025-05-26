import { defineComponent as b, openBlock as d, createElementBlock as s, normalizeClass as m, createVNode as c, unref as r, withCtx as i, Fragment as x, renderList as w, createBlock as k, normalizeStyle as n, createElementVNode as y, toDisplayString as f } from "vue";
import { NGrid as p, NGi as v } from "naive-ui";
import A from "./elasticScrollbar/index.js";
const N = /* @__PURE__ */ b({
  __name: "listBox",
  props: {
    rows: { default: () => [] },
    rowStyle: { default: () => ({}) },
    bordered: { type: Boolean, default: !1 },
    keyStyle: { default: () => ({}) },
    valueStyle: { default: () => ({}) },
    cellPadding: { default: "12px 15px" },
    defaultAlign: { default: "left" },
    gap: { default: 0 },
    cols: { default: 2 }
  },
  setup(l) {
    const u = (t) => {
      var a;
      const e = {
        whiteSpace: "pre",
        flex: 3,
        backgroundColor: "#063B6B",
        ...l.keyStyle,
        padding: l.cellPadding || "12px 15px",
        textAlign: l.keyStyle.textAlign || "left",
        ...((a = l.rows[t]) == null ? void 0 : a.keyStyle) || {}
      };
      return l.bordered && (e.borderLeft = "1px solid #07467a", e.borderTop = "1px solid #07467a", e.borderBottom = "1px solid #07467a", t === l.rows.length - 1 && (e.borderRight = "1px solid #07467a")), e;
    }, g = (t) => {
      var a;
      const e = {
        whiteSpace: "pre",
        flex: 6,
        backgroundColor: "#063661",
        ...l.valueStyle,
        padding: l.cellPadding || "12px 15px",
        textAlign: l.valueStyle.textAlign || "left",
        ...((a = l.rows[t]) == null ? void 0 : a.valueStyle) || {}
      };
      return l.bordered && (e.borderTop = "1px solid #07467A", e.borderBottom = "1px solid #07467A", e.borderRight = "1px solid #07467A", e.borderLeft = "1px solid #07467A"), e;
    }, S = (t) => {
      const e = {
        display: "flex",
        width: "100%"
      };
      return t % 2 === 0 && l.rowStyle.even ? Object.assign(e, l.rowStyle.even) : t % 2 !== 0 && l.rowStyle.odd && Object.assign(e, l.rowStyle.odd), e;
    };
    return (t, e) => (d(), s(
      "div",
      {
        class: m(["dynamic-data-list", { "is-bordered": t.bordered }])
      },
      [
        c(r(A), null, {
          default: i(() => [
            c(r(p), {
              "x-gap": t.gap,
              cols: t.cols
            }, {
              default: i(() => [
                (d(!0), s(
                  x,
                  null,
                  w(t.rows, (a, o) => (d(), k(r(v), {
                    key: `row-${o}`,
                    class: "list-row",
                    style: n(S(o))
                  }, {
                    default: i(() => [
                      y(
                        "div",
                        {
                          class: "key-cell",
                          style: n(u(o))
                        },
                        f(a.indicatorName),
                        5
                        /* TEXT, STYLE */
                      ),
                      y(
                        "div",
                        {
                          class: "value-cell",
                          style: n(g(o))
                        },
                        f(a.indicatorValue),
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
          ]),
          _: 1
          /* STABLE */
        })
      ],
      2
      /* CLASS */
    ));
  }
});
export {
  N as default
};
