import { defineComponent as m, openBlock as a, createElementBlock as n, normalizeClass as x, createElementVNode as r, Fragment as s, renderList as g, normalizeStyle as y, toDisplayString as c } from "vue";
const v = { class: "list-body" }, A = /* @__PURE__ */ m({
  __name: "listBox",
  props: {
    items: { default: () => [] },
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
    defaultAlign: { default: "left" }
  },
  setup(e) {
    const f = (l) => {
      var d, i;
      const t = {
        ...e.keyStyle,
        padding: e.cellPadding || ((d = e.keyStyle) == null ? void 0 : d.padding),
        textAlign: e.keyStyle.textAlign || e.defaultAlign,
        ...((i = e.items[l]) == null ? void 0 : i.keyStyle) || {}
      };
      return e.bordered && (t.borderLeft = "1px solid #07467a", t.borderTop = "1px solid #07467a", t.borderBottom = "1px solid #07467a", l === e.items.length - 1 && (t.borderRight = "1px solid #07467a")), t;
    }, S = (l) => {
      var d, i;
      const t = {
        ...e.valueStyle,
        padding: e.cellPadding || ((d = e.valueStyle) == null ? void 0 : d.padding),
        textAlign: e.valueStyle.textAlign || e.defaultAlign,
        ...((i = e.items[l]) == null ? void 0 : i.valueStyle) || {}
      };
      return e.bordered && (t.borderTop = "1px solid #07467A", t.borderBottom = "1px solid #07467A", t.borderRight = "1px solid #07467A", t.borderLeft = "1px solid #07467A"), t;
    }, b = (l) => {
      const t = {
        display: "flex",
        width: "100%",
        minWidth: "fit-content"
      };
      return l % 2 === 0 && e.rowStyle.even ? Object.assign(t, e.rowStyle.even) : l % 2 !== 0 && e.rowStyle.odd && Object.assign(t, e.rowStyle.odd), t;
    };
    return (l, t) => (a(), n(
      "div",
      {
        class: x(["dynamic-data-list", { "is-bordered": l.bordered }])
      },
      [
        r("div", v, [
          (a(!0), n(
            s,
            null,
            g(l.rows, (d, i) => (a(), n(
              "div",
              {
                key: `row-${i}`,
                class: "list-row",
                style: y(b(i))
              },
              [
                (a(!0), n(
                  s,
                  null,
                  g(l.items, (u, o) => (a(), n(
                    s,
                    {
                      key: `col-${o}`
                    },
                    [
                      r(
                        "div",
                        {
                          class: "key-cell",
                          style: y(f(o))
                        },
                        c(d[u.key]),
                        5
                        /* TEXT, STYLE */
                      ),
                      r(
                        "div",
                        {
                          class: "value-cell",
                          style: y(S(o))
                        },
                        c(d[u.value]),
                        5
                        /* TEXT, STYLE */
                      )
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  ))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ],
              4
              /* STYLE */
            ))),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ],
      2
      /* CLASS */
    ));
  }
});
export {
  A as default
};
