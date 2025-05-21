import { defineComponent as k, openBlock as a, createElementBlock as i, createElementVNode as r, Fragment as u, renderList as m, normalizeStyle as b, unref as c, toDisplayString as C, withDirectives as S, createVNode as w, withCtx as E, renderSlot as N, vShow as T } from "vue";
import y from "lodash-es/memoize";
import x from "./elasticScrollbar/index.js";
import L from "./empty/index.js";
const z = { class: "lc-desc-list" }, A = { class: "lc-desc-list__wrapper" }, B = { class: "lc-desc-list__head" }, D = ["title"], H = { class: "lc-desc-list__tbody" }, V = ["title"], $ = { class: "lc-desc-list--empty" }, G = /* @__PURE__ */ k({
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
    }, p = y((e, n) => e.title);
    function v(e, n, t, l) {
      return (n.type ? f[n.type] : f.default)(e, n, t, l);
    }
    const _ = y(v, v), g = y((e) => ({
      "--text-align": e.align ?? "left",
      "--cell-flex": e.flex ?? 1,
      "--cell-width": e.width ?? "auto"
    }));
    function h(e) {
      return e.dataIndex ?? "default";
    }
    return (e, n) => (a(), i("div", z, [
      r("div", A, [
        r("div", B, [
          (a(!0), i(
            u,
            null,
            m(o.columns, (t, l) => (a(), i(
              "div",
              {
                key: l,
                style: b(c(g)(t)),
                class: "lc-desc-list__head--item"
              },
              [
                r("div", {
                  class: "lc-desc-list__head--item__cell",
                  title: c(p)(t, l)
                }, C(c(p)(t, l)), 9, D)
              ],
              4
              /* STYLE */
            ))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        S(w(
          c(x),
          null,
          {
            default: E(() => [
              r("div", H, [
                (a(!0), i(
                  u,
                  null,
                  m(o.data, (t, l) => (a(), i("div", {
                    class: "lc-desc-list__tbody__tr",
                    key: l
                  }, [
                    (a(!0), i(
                      u,
                      null,
                      m(o.columns, (s, d) => (a(), i(
                        "div",
                        {
                          class: "lc-desc-list__tbody__tr__cell",
                          key: d,
                          style: b(c(g)(s))
                        },
                        [
                          N(e.$slots, h(s), {
                            record: t,
                            index: l,
                            column: s,
                            colIndex: d,
                            value: c(_)(t, s, l, d)
                          }, () => [
                            r("span", {
                              class: "lc-desc-list__tbody__tr__cell__span",
                              title: c(_)(t, s, l, d)
                            }, C(c(_)(t, s, l, d)), 9, V)
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
          },
          512
          /* NEED_PATCH */
        ), [
          [T, o.data.length]
        ]),
        S(r(
          "div",
          $,
          [
            N(e.$slots, "empty", {}, () => [
              w(c(L))
            ], !0)
          ],
          512
          /* NEED_PATCH */
        ), [
          [T, !o.data.length]
        ])
      ])
    ]));
  }
});
export {
  G as default
};
