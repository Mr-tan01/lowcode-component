import { defineComponent as S, mergeModels as f, ref as V, useModel as A, computed as E, onMounted as F, openBlock as o, createElementBlock as l, createElementVNode as e, renderSlot as w, createVNode as b, unref as x, withCtx as p, normalizeClass as C, toDisplayString as h, Fragment as k, renderList as y, createCommentVNode as H } from "vue";
import L from "./images/right-arrow.png.js";
import { NPopover as z } from "naive-ui/es/popover";
import I from "./carouseBox/index.js";
const P = { class: "lcc-header" }, U = { class: "lcc-header__prefix-slot" }, q = { class: "lcc-header__wrapper" }, G = { class: "lcc-header__wrapper__navs" }, J = ["onClick"], K = {
  key: 0,
  class: "lcc-header__wrapper__navs__drop"
}, O = { class: "lcc-header__wrapper__navs__drop__group__label" }, Q = ["title"], R = { class: "lcc-header__wrapper__navs__drop__group__item__group" }, T = ["onClick"], W = { class: "lcc-header__suffix-slot" }, re = /* @__PURE__ */ S({
  __name: "header",
  props: /* @__PURE__ */ f({
    navDatas: {},
    hideArrow: { type: Boolean },
    highlightHandler: { type: Function }
  }, {
    index: { default: 0 },
    indexModifiers: {}
  }),
  emits: /* @__PURE__ */ f(["jump", "scroll"], ["update:index"]),
  setup(t, { emit: $ }) {
    const i = V(), v = A(t, "index"), B = E(() => t.navDatas === void 0 ? [] : t.navDatas);
    F(() => {
      i.value = window.location.hash.substring(1);
    });
    const m = $;
    function g({ parent: a, item: r, index: s, handleClick: _ }) {
      var n;
      i.value = ((n = t.highlightHandler) == null ? void 0 : n.call(t, r)) ?? r.path, a && !t.hideArrow && (_ == null || _(a, s)), m("jump", { parent: a, item: r, index: s });
    }
    function D(a) {
      m("scroll", a);
    }
    return (a, r) => (o(), l("div", P, [
      e("div", U, [
        w(a.$slots, "prefix", {}, void 0, !0)
      ]),
      e("div", q, [
        e("div", G, [
          b(x(I), {
            disabled: a.hideArrow,
            list: B.value,
            "show-track": !1,
            index: v.value,
            "onUpdate:index": r[0] || (r[0] = (s) => v.value = s),
            onChange: D
          }, {
            default: p(({ index: s, record: _, isActive: n, handleClick: M }) => [
              e(
                "div",
                {
                  class: C(["lcc-header__wrapper__navs__item", {
                    active: n
                  }])
                },
                [
                  b(
                    x(z),
                    {
                      trigger: "hover",
                      "arrow-class": "header-arrow-class",
                      class: "header-popover-class"
                    },
                    {
                      trigger: p(() => [
                        e("a", {
                          class: "lcc-header__wrapper__navs__item__link",
                          onClick: (u) => g({
                            item: _,
                            index: s
                          })
                        }, h(_.label), 9, J)
                      ]),
                      default: p(() => {
                        var u;
                        return [
                          (u = _.list) != null && u.length ? (o(), l("div", K, [
                            (o(!0), l(
                              k,
                              null,
                              y(_.list, (d, N) => (o(), l("div", {
                                class: "lcc-header__wrapper__navs__drop__group",
                                key: N
                              }, [
                                e("div", O, [
                                  r[1] || (r[1] = e(
                                    "div",
                                    { class: "lcc-header__wrapper__navs__drop__group__label--icon" },
                                    [
                                      e("img", {
                                        class: "lcc-header__wrapper__navs__drop__group__label--icon--image",
                                        src: L,
                                        alt: ""
                                      })
                                    ],
                                    -1
                                    /* HOISTED */
                                  )),
                                  e("div", {
                                    class: "lcc-header__wrapper__navs__drop__group__label--text",
                                    title: d.label
                                  }, h(d.label), 9, Q)
                                ]),
                                e("div", R, [
                                  (o(!0), l(
                                    k,
                                    null,
                                    y(d.children, (c, j) => (o(), l("div", {
                                      class: C(["lcc-header__wrapper__navs__drop__group__item__group__nav", { highlight: n && i.value === c.path || i.value === c.label }]),
                                      key: j,
                                      onClick: (X) => g({ parent: d, item: c, index: s, handleClick: M })
                                    }, h(c.label), 11, T))),
                                    128
                                    /* KEYED_FRAGMENT */
                                  ))
                                ])
                              ]))),
                              128
                              /* KEYED_FRAGMENT */
                            ))
                          ])) : H("v-if", !0)
                        ];
                      }),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  )
                ],
                2
                /* CLASS */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled", "list", "index"])
        ])
      ]),
      e("div", W, [
        w(a.$slots, "suffix", {}, void 0, !0)
      ])
    ]));
  }
});
export {
  re as default
};
