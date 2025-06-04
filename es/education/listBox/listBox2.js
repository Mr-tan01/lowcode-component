import { defineComponent as x, openBlock as i, createElementBlock as s, normalizeClass as m, createVNode as c, unref as d, withCtx as r, Fragment as w, renderList as b, createBlock as p, normalizeStyle as n, createElementVNode as f, toDisplayString as y } from "vue";
import { NGrid as h, NGi as v } from "naive-ui";
import k from "./elasticScrollbar/index.js";
const A = ["title"], B = ["title"], L = /* @__PURE__ */ x({
  __name: "listBox",
  props: {
    rows: { default: () => [] },
    rowStyle: { default: () => ({}) },
    bordered: { type: Boolean, default: !1 },
    keyStyle: { default: () => ({
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }) },
    valueStyle: { default: () => ({
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }) },
    cellPadding: { default: "12px 15px" },
    defaultAlign: {},
    gap: { default: 0 },
    cols: { default: 2 }
  },
  setup(l) {
    const u = (t) => {
      var o;
      const e = {
        whiteSpace: "pre",
        flex: "4 1 0%",
        backgroundColor: "#063B6B",
        ...l.keyStyle,
        padding: l.cellPadding || "12px 15px",
        textAlign: l.keyStyle.textAlign || "left",
        ...((o = l.rows[t]) == null ? void 0 : o.keyStyle) || {}
      };
      return l.bordered && (e.borderLeft = "1px solid #07467a", e.borderTop = "1px solid #07467a", e.borderBottom = "1px solid #07467a", t === l.rows.length - 1 && (e.borderRight = "1px solid #07467a")), e;
    }, g = (t) => {
      var o;
      const e = {
        whiteSpace: "pre",
        flex: "6 1 0%",
        backgroundColor: "#063661",
        ...l.valueStyle,
        padding: l.cellPadding || "12px 15px",
        textAlign: l.valueStyle.textAlign || "left",
        ...((o = l.rows[t]) == null ? void 0 : o.valueStyle) || {}
      };
      return l.bordered && (e.borderTop = "1px solid #07467A", e.borderBottom = "1px solid #07467A", e.borderRight = "1px solid #07467A", e.borderLeft = "1px solid #07467A"), e;
    }, S = (t) => {
      const e = {
        display: "flex",
        width: "100%"
      };
      return t % 2 === 0 && l.rowStyle.even ? Object.assign(e, l.rowStyle.even) : t % 2 !== 0 && l.rowStyle.odd && Object.assign(e, l.rowStyle.odd), e;
    };
    return (t, e) => (i(), s(
      "div",
      {
        class: m(["dynamic-data-list", { "is-bordered": t.bordered }])
      },
      [
        c(d(k), null, {
          default: r(() => [
            c(d(h), {
              "x-gap": t.gap,
              cols: t.cols
            }, {
              default: r(() => [
                (i(!0), s(
                  w,
                  null,
                  b(t.rows, (o, a) => (i(), p(d(v), {
                    key: `row-${a}`,
                    class: "list-row",
                    style: n(S(a))
                  }, {
                    default: r(() => [
                      f("div", {
                        class: "key-cell",
                        style: n(u(a)),
                        title: o.indicatorName
                      }, y(o.indicatorName), 13, A),
                      f("div", {
                        class: "value-cell",
                        style: n(g(a)),
                        title: o.indicatorValue
                      }, y(o.indicatorValue), 13, B)
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
  L as default
};
