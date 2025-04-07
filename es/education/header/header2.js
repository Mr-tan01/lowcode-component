import { defineComponent as j, mergeModels as f, useModel as y, computed as M, openBlock as s, createElementBlock as a, createElementVNode as e, renderSlot as g, createVNode as w, unref as x, withCtx as i, normalizeClass as S, toDisplayString as c, Fragment as C, renderList as b, createCommentVNode as V } from "vue";
import A from "./images/right-arrow.png.js";
import { NPopover as E } from "naive-ui/es/popover";
import L from "./carouseBox/index.js";
const z = { class: "lcc-header" }, F = { class: "lcc-header__prefix-slot" }, I = { class: "lcc-header__wrapper" }, P = { class: "lcc-header__wrapper__navs" }, U = ["onClick"], q = {
  key: 0,
  class: "lcc-header__wrapper__navs__drop"
}, G = { class: "lcc-header__wrapper__navs__drop__group__label" }, H = { class: "lcc-header__wrapper__navs__drop__group__label--text" }, J = { class: "lcc-header__wrapper__navs__drop__group__item__group" }, K = ["onClick"], O = { class: "lcc-header__suffix-slot" }, Y = /* @__PURE__ */ j({
  __name: "header",
  props: /* @__PURE__ */ f({
    navDatas: {},
    hideArrow: { type: Boolean }
  }, {
    index: { default: 0 },
    indexModifiers: {}
  }),
  emits: /* @__PURE__ */ f(["jump", "scroll"], ["update:index"]),
  setup(l, { emit: k }) {
    const p = y(l, "index"), $ = M(() => l.navDatas === void 0 ? [] : l.navDatas), u = k;
    function v(_, r, o) {
      u("jump", { parent: _, item: r, index: o });
    }
    function B(_) {
      u("scroll", _);
    }
    return (_, r) => (s(), a("div", z, [
      e("div", F, [
        g(_.$slots, "prefix", {}, void 0, !0)
      ]),
      e("div", I, [
        e("div", P, [
          w(x(L), {
            disabled: _.hideArrow,
            list: $.value,
            "show-track": !1,
            index: p.value,
            "onUpdate:index": r[0] || (r[0] = (o) => p.value = o),
            onChange: B
          }, {
            default: i(({ index: o, record: t, isActive: D }) => [
              e(
                "div",
                {
                  class: S(["lcc-header__wrapper__navs__item", {
                    active: D
                  }])
                },
                [
                  w(
                    x(E),
                    {
                      trigger: "hover",
                      "arrow-class": "header-arrow-class",
                      class: "header-popover-class"
                    },
                    {
                      trigger: i(() => [
                        e("a", {
                          class: "lcc-header__wrapper__navs__item__link",
                          onClick: (n) => v(null, t, o)
                        }, c(t.label), 9, U)
                      ]),
                      default: i(() => {
                        var n;
                        return [
                          (n = t.list) != null && n.length ? (s(), a("div", q, [
                            (s(!0), a(
                              C,
                              null,
                              b(t.list, (d, N) => (s(), a("div", {
                                class: "lcc-header__wrapper__navs__drop__group",
                                key: N
                              }, [
                                e("div", G, [
                                  r[1] || (r[1] = e(
                                    "div",
                                    { class: "lcc-header__wrapper__navs__drop__group__label--icon" },
                                    [
                                      e("img", {
                                        class: "lcc-header__wrapper__navs__drop__group__label--icon--image",
                                        src: A,
                                        alt: ""
                                      })
                                    ],
                                    -1
                                    /* HOISTED */
                                  )),
                                  e(
                                    "div",
                                    H,
                                    c(d.label),
                                    1
                                    /* TEXT */
                                  )
                                ]),
                                e("div", J, [
                                  (s(!0), a(
                                    C,
                                    null,
                                    b(d.children, (h, m) => (s(), a("div", {
                                      class: "lcc-header__wrapper__navs__drop__group__item__group__nav",
                                      key: m,
                                      onClick: (Q) => v(d, h, m)
                                    }, c(h.label), 9, K))),
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
      e("div", O, [
        g(_.$slots, "suffix", {}, void 0, !0)
      ])
    ]));
  }
});
export {
  Y as default
};
