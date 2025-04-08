import { defineComponent as j, mergeModels as h, useModel as A, computed as M, openBlock as o, createElementBlock as t, createElementVNode as e, renderSlot as f, createVNode as g, unref as w, withCtx as n, normalizeClass as S, toDisplayString as c, Fragment as x, renderList as b, createCommentVNode as V } from "vue";
import E from "./images/right-arrow.png.js";
import { NPopover as L } from "naive-ui/es/popover";
import z from "./carouseBox/index.js";
const F = { class: "lcc-header" }, I = { class: "lcc-header__prefix-slot" }, P = { class: "lcc-header__wrapper" }, U = { class: "lcc-header__wrapper__navs" }, q = ["onClick"], G = {
  key: 0,
  class: "lcc-header__wrapper__navs__drop"
}, H = { class: "lcc-header__wrapper__navs__drop__group__label" }, J = { class: "lcc-header__wrapper__navs__drop__group__label--text" }, K = { class: "lcc-header__wrapper__navs__drop__group__item__group" }, O = ["onClick"], Q = { class: "lcc-header__suffix-slot" }, Z = /* @__PURE__ */ j({
  __name: "header",
  props: /* @__PURE__ */ h({
    navDatas: {},
    hideArrow: { type: Boolean }
  }, {
    index: { default: 0 },
    indexModifiers: {}
  }),
  emits: /* @__PURE__ */ h(["jump", "scroll"], ["update:index"]),
  setup(l, { emit: C }) {
    const p = A(l, "index"), k = M(() => l.navDatas === void 0 ? [] : l.navDatas), u = C;
    function v({ parent: _, item: a, index: s, handleClick: r }) {
      _ && !l.hideArrow && (r == null || r(_, s)), u("jump", { parent: _, item: a, index: s });
    }
    function $(_) {
      u("scroll", _);
    }
    return (_, a) => (o(), t("div", F, [
      e("div", I, [
        f(_.$slots, "prefix", {}, void 0, !0)
      ]),
      e("div", P, [
        e("div", U, [
          g(w(z), {
            disabled: _.hideArrow,
            list: k.value,
            "show-track": !1,
            index: p.value,
            "onUpdate:index": a[0] || (a[0] = (s) => p.value = s),
            onChange: $
          }, {
            default: n(({ index: s, record: r, isActive: y, handleClick: B }) => [
              e(
                "div",
                {
                  class: S(["lcc-header__wrapper__navs__item", {
                    active: y
                  }])
                },
                [
                  g(
                    w(L),
                    {
                      trigger: "hover",
                      "arrow-class": "header-arrow-class",
                      class: "header-popover-class"
                    },
                    {
                      trigger: n(() => [
                        e("a", {
                          class: "lcc-header__wrapper__navs__item__link",
                          onClick: (i) => v({
                            item: r,
                            index: s
                          })
                        }, c(r.label), 9, q)
                      ]),
                      default: n(() => {
                        var i;
                        return [
                          (i = r.list) != null && i.length ? (o(), t("div", G, [
                            (o(!0), t(
                              x,
                              null,
                              b(r.list, (d, D) => (o(), t("div", {
                                class: "lcc-header__wrapper__navs__drop__group",
                                key: D
                              }, [
                                e("div", H, [
                                  a[1] || (a[1] = e(
                                    "div",
                                    { class: "lcc-header__wrapper__navs__drop__group__label--icon" },
                                    [
                                      e("img", {
                                        class: "lcc-header__wrapper__navs__drop__group__label--icon--image",
                                        src: E,
                                        alt: ""
                                      })
                                    ],
                                    -1
                                    /* HOISTED */
                                  )),
                                  e(
                                    "div",
                                    J,
                                    c(d.label),
                                    1
                                    /* TEXT */
                                  )
                                ]),
                                e("div", K, [
                                  (o(!0), t(
                                    x,
                                    null,
                                    b(d.children, (m, N) => (o(), t("div", {
                                      class: "lcc-header__wrapper__navs__drop__group__item__group__nav",
                                      key: N,
                                      onClick: (R) => v({ parent: d, item: m, index: s, handleClick: B })
                                    }, c(m.label), 9, O))),
                                    128
                                    /* KEYED_FRAGMENT */
                                  ))
                                ])
                              ]))),
                              128
                              /* KEYED_FRAGMENT */
                            ))
                          ])) : V("v-if", !0)
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
      e("div", Q, [
        f(_.$slots, "suffix", {}, void 0, !0)
      ])
    ]));
  }
});
export {
  Z as default
};
