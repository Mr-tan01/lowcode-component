import { defineComponent as $, mergeDefaults as D, ref as w, onMounted as L, watch as z, nextTick as A, openBlock as n, createElementBlock as r, createElementVNode as o, normalizeStyle as m, Fragment as f, renderList as y, unref as a, toDisplayString as C, withDirectives as T, createVNode as N, withCtx as B, renderSlot as x, vShow as E } from "vue";
import p from "lodash-es/memoize";
import M from "./elasticScrollbar/index.js";
import V from "./empty/index.js";
const F = { class: "lc-desc-list" }, j = { class: "lc-desc-list__wrapper" }, q = ["title"], G = { class: "lc-desc-list__tbody" }, J = ["title"], K = { class: "lc-desc-list--empty" }, W = /* @__PURE__ */ $({
  __name: "descTable",
  props: /* @__PURE__ */ D({
    columns: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    }
  }, {
    data: () => []
  }),
  setup(i) {
    const v = {
      index: (e, c, t, l) => t + 1,
      default: (e, c, t, l) => {
        const s = e[c.dataIndex];
        return typeof s == "number" ? s : s || "-";
      }
    }, g = w(!1), u = w();
    function b() {
      u.value && (g.value = u.value.$el.scrollHeight > u.value.$el.clientHeight);
    }
    L(() => {
      b();
    }), z(
      () => i.data,
      () => {
        A(() => {
          b();
        });
      },
      { deep: !0 }
    );
    const h = p((e, c) => e.title);
    function S(e, c, t, l) {
      return (c.type ? v[c.type] : v.default)(e, c, t, l);
    }
    const _ = p(S, S), k = p((e) => ({
      "--text-align": e.align ?? "left",
      "--cell-flex": e.flex ?? 1,
      "--cell-width": e.width ?? "auto"
    }));
    function H(e) {
      return e.dataIndex ?? "default";
    }
    return (e, c) => (n(), r("div", F, [
      o("div", j, [
        o(
          "div",
          {
            class: "lc-desc-list__head",
            style: m({ paddingRight: g.value ? "6px" : "0" })
          },
          [
            (n(!0), r(
              f,
              null,
              y(i.columns, (t, l) => (n(), r(
                "div",
                {
                  key: l,
                  style: m(a(k)(t)),
                  class: "lc-desc-list__head--item"
                },
                [
                  o("div", {
                    class: "lc-desc-list__head--item__cell",
                    title: a(h)(t, l)
                  }, C(a(h)(t, l)), 9, q)
                ],
                4
                /* STYLE */
              ))),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          4
          /* STYLE */
        ),
        T(N(
          a(M),
          {
            ref_key: "scrollbarRef",
            ref: u
          },
          {
            default: B(() => [
              o("div", G, [
                (n(!0), r(
                  f,
                  null,
                  y(i.data, (t, l) => (n(), r("div", {
                    class: "lc-desc-list__tbody__tr",
                    key: l
                  }, [
                    (n(!0), r(
                      f,
                      null,
                      y(i.columns, (s, d) => (n(), r(
                        "div",
                        {
                          class: "lc-desc-list__tbody__tr__cell",
                          key: d,
                          style: m(a(k)(s))
                        },
                        [
                          x(e.$slots, H(s), {
                            record: t,
                            index: l,
                            column: s,
                            colIndex: d,
                            value: a(_)(t, s, l, d)
                          }, () => [
                            o("span", {
                              class: "lc-desc-list__tbody__tr__cell__span",
                              title: a(_)(t, s, l, d)
                            }, C(a(_)(t, s, l, d)), 9, J)
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
          [E, i.data.length]
        ]),
        T(o(
          "div",
          K,
          [
            x(e.$slots, "empty", {}, () => [
              N(a(V))
            ], !0)
          ],
          512
          /* NEED_PATCH */
        ), [
          [E, !i.data.length]
        ])
      ])
    ]));
  }
});
export {
  W as default
};
