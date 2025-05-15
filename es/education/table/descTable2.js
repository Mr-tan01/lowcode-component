import { defineComponent as w, openBlock as c, createElementBlock as i, createElementVNode as r, Fragment as u, renderList as m, normalizeStyle as g, unref as a, toDisplayString as C, createVNode as N, withCtx as T, renderSlot as k, withDirectives as x, vShow as E } from "vue";
import y from "lodash-es/memoize";
import h from "./elasticScrollbar/index.js";
const z = { class: "lc-desc-list" }, A = { class: "lc-desc-list__wrapper" }, B = { class: "lc-desc-list__head" }, D = ["title"], H = { class: "lc-desc-list__tbody" }, L = ["title"], V = { class: "lc-desc-table--empty" }, j = /* @__PURE__ */ w({
  __name: "descTable",
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  setup(o) {
    const f = {
      index: (e, n, t, l) => t + 1,
      default: (e, n, t, l) => {
        const s = e[n.dataIndex];
        return typeof s == "number" ? s : s || "-";
      }
    }, p = y(
      (e, n) => e.title
    );
    function v(e, n, t, l) {
      return (n.type ? f[n.type] : f.default)(e, n, t, l);
    }
    const _ = y(
      v,
      v
    ), b = y(
      (e) => ({
        "--text-align": e.align ?? "left",
        "--cell-flex": e.flex ?? 1,
        "--cell-width": e.width ?? "auto"
      })
    );
    function S(e) {
      return e.dataIndex ?? "default";
    }
    return (e, n) => (c(), i("div", z, [
      r("div", A, [
        r("div", B, [
          (c(!0), i(
            u,
            null,
            m(o.columns, (t, l) => (c(), i(
              "div",
              {
                key: l,
                style: g(a(b)(t)),
                class: "lc-desc-list__head--item"
              },
              [
                r("div", {
                  class: "lc-desc-list__head--item__cell",
                  title: a(p)(t, l)
                }, C(a(p)(t, l)), 9, D)
              ],
              4
              /* STYLE */
            ))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        N(a(h), null, {
          default: T(() => [
            r("div", H, [
              (c(!0), i(
                u,
                null,
                m(o.data, (t, l) => (c(), i("div", {
                  class: "lc-desc-list__tbody__tr",
                  key: l
                }, [
                  (c(!0), i(
                    u,
                    null,
                    m(o.columns, (s, d) => (c(), i(
                      "div",
                      {
                        class: "lc-desc-list__tbody__tr__cell",
                        key: d,
                        style: g(a(b)(s))
                      },
                      [
                        k(e.$slots, S(s), {
                          record: t,
                          index: l,
                          column: s,
                          colIndex: d,
                          value: a(_)(
                            t,
                            s,
                            l,
                            d
                          )
                        }, () => [
                          r("span", {
                            class: "lc-desc-list__tbody__tr__cell__span",
                            title: a(_)(
                              t,
                              s,
                              l,
                              d
                            )
                          }, C(a(_)(
                            t,
                            s,
                            l,
                            d
                          )), 9, L)
                        ], !0)
                      ],
                      4
                      /* STYLE */
                    ))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]))),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ]),
          _: 3
          /* FORWARDED */
        }),
        x(r(
          "div",
          V,
          n[0] || (n[0] = [
            r(
              "span",
              null,
              "暂无数据...",
              -1
              /* HOISTED */
            )
          ]),
          512
          /* NEED_PATCH */
        ), [
          [E, !o.data.length]
        ])
      ])
    ]));
  }
});
export {
  j as default
};
