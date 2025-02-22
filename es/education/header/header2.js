import { defineComponent as j, mergeModels as g, useModel as y, computed as M, openBlock as r, createElementBlock as a, createElementVNode as e, createVNode as w, unref as f, withCtx as i, normalizeClass as V, toDisplayString as c, Fragment as x, renderList as C, createCommentVNode as $ } from "vue";
import A from "./images/right-arrow.png.js";
import { NPopover as E } from "naive-ui/es/popover";
import L from "./carouseBox/index.js";
const S = { class: "lcc-header" }, z = { class: "lcc-header__wrapper" }, F = { class: "lcc-header__wrapper__navs" }, I = ["onClick"], P = {
  key: 0,
  class: "lcc-header__wrapper__navs__drop"
}, U = { class: "lcc-header__wrapper__navs__drop__group__label" }, q = { class: "lcc-header__wrapper__navs__drop__group__label--text" }, G = { class: "lcc-header__wrapper__navs__drop__group__item__group" }, H = ["onClick"], T = /* @__PURE__ */ j({
  __name: "header",
  props: /* @__PURE__ */ g({
    navDatas: {},
    hideArrow: { type: Boolean }
  }, {
    index: { default: 0 },
    indexModifiers: {}
  }),
  emits: /* @__PURE__ */ g(["jump", "scroll"], ["update:index"]),
  setup(l, { emit: b }) {
    const p = y(l, "index"), k = M(() => l.navDatas === void 0 ? [] : l.navDatas), u = b;
    function v(s, _, o) {
      u("jump", s, _, o);
    }
    function B(s) {
      u("scroll", s);
    }
    return (s, _) => (r(), a("div", S, [
      e("div", z, [
        e("div", F, [
          w(f(L), {
            disabled: s.hideArrow,
            list: k.value,
            "show-track": !1,
            index: p.value,
            "onUpdate:index": _[0] || (_[0] = (o) => p.value = o),
            onChange: B
          }, {
            default: i(({ index: o, record: t, isActive: D }) => [
              e(
                "div",
                {
                  class: V(["lcc-header__wrapper__navs__item", {
                    active: D
                  }])
                },
                [
                  w(
                    f(E),
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
                        }, c(t.label), 9, I)
                      ]),
                      default: i(() => {
                        var n;
                        return [
                          (n = t.list) != null && n.length ? (r(), a("div", P, [
                            (r(!0), a(
                              x,
                              null,
                              C(t.list, (d, N) => (r(), a("div", {
                                class: "lcc-header__wrapper__navs__drop__group",
                                key: N
                              }, [
                                e("div", U, [
                                  _[1] || (_[1] = e(
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
                                    q,
                                    c(d.label),
                                    1
                                    /* TEXT */
                                  )
                                ]),
                                e("div", G, [
                                  (r(!0), a(
                                    x,
                                    null,
                                    C(d.children, (m, h) => (r(), a("div", {
                                      class: "lcc-header__wrapper__navs__drop__group__item__group__nav",
                                      key: h,
                                      onClick: (J) => v(d, m, h)
                                    }, c(m.label), 9, H))),
                                    128
                                    /* KEYED_FRAGMENT */
                                  ))
                                ])
                              ]))),
                              128
                              /* KEYED_FRAGMENT */
                            ))
                          ])) : $("v-if", !0)
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
      ])
    ]));
  }
});
export {
  T as default
};
