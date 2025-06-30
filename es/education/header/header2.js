import { defineComponent as S, mergeModels as g, useModel as w, computed as V, openBlock as l, createElementBlock as o, createElementVNode as e, renderSlot as x, createVNode as b, unref as y, withCtx as p, normalizeClass as C, toDisplayString as h, Fragment as k, renderList as K, createCommentVNode as A } from "vue";
import E from "./images/right-arrow.png.js";
import { NPopover as F } from "naive-ui/es/popover";
import H from "./carouseBox/index.js";
const L = { class: "lcc-header" }, z = { class: "lcc-header__prefix-slot" }, I = { class: "lcc-header__wrapper" }, P = { class: "lcc-header__wrapper__navs" }, U = ["onClick"], q = {
  key: 0,
  class: "lcc-header__wrapper__navs__drop"
}, G = { class: "lcc-header__wrapper__navs__drop__group__label" }, J = ["title"], O = { class: "lcc-header__wrapper__navs__drop__group__item__group" }, Q = ["onClick"], R = { class: "lcc-header__suffix-slot" }, ee = /* @__PURE__ */ S({
  __name: "header",
  props: /* @__PURE__ */ g({
    navDatas: {},
    hideArrow: { type: Boolean },
    highlightHandler: { type: Function }
  }, {
    selectedKey: { default: "" },
    selectedKeyModifiers: {},
    index: { default: 0 },
    indexModifiers: {}
  }),
  emits: /* @__PURE__ */ g(["jump", "scroll"], ["update:selectedKey", "update:index"]),
  setup(r, { emit: $ }) {
    const c = w(r, "selectedKey"), v = w(r, "index"), B = V(() => r.navDatas === void 0 ? [] : r.navDatas), m = $;
    function f({ parent: a, item: t, index: s, handleClick: _ }) {
      var d;
      c.value = ((d = r.highlightHandler) == null ? void 0 : d.call(r, t)) ?? t.path, a && !r.hideArrow && (_ == null || _(a, s)), m("jump", { parent: a, item: t, index: s });
    }
    function D(a) {
      m("scroll", a);
    }
    return (a, t) => (l(), o("div", L, [
      e("div", z, [
        x(a.$slots, "prefix", {}, void 0, !0)
      ]),
      e("div", I, [
        e("div", P, [
          b(y(H), {
            disabled: a.hideArrow,
            list: B.value,
            "show-track": !1,
            index: v.value,
            "onUpdate:index": t[0] || (t[0] = (s) => v.value = s),
            onChange: D
          }, {
            default: p(({ index: s, record: _, isActive: d, handleClick: M }) => [
              e(
                "div",
                {
                  class: C(["lcc-header__wrapper__navs__item", {
                    active: d
                  }])
                },
                [
                  b(
                    y(F),
                    {
                      trigger: "hover",
                      "arrow-class": "header-arrow-class",
                      class: "header-popover-class"
                    },
                    {
                      trigger: p(() => [
                        e("a", {
                          class: "lcc-header__wrapper__navs__item__link",
                          onClick: (u) => f({
                            item: _,
                            index: s
                          })
                        }, h(_.label), 9, U)
                      ]),
                      default: p(() => {
                        var u;
                        return [
                          (u = _.list) != null && u.length ? (l(), o("div", q, [
                            (l(!0), o(
                              k,
                              null,
                              K(_.list, (i, N) => (l(), o("div", {
                                class: "lcc-header__wrapper__navs__drop__group",
                                key: N
                              }, [
                                e("div", G, [
                                  t[1] || (t[1] = e(
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
                                  e("div", {
                                    class: "lcc-header__wrapper__navs__drop__group__label--text",
                                    title: i.label
                                  }, h(i.label), 9, J)
                                ]),
                                e("div", O, [
                                  (l(!0), o(
                                    k,
                                    null,
                                    K(i.children, (n, j) => (l(), o("div", {
                                      class: C(["lcc-header__wrapper__navs__drop__group__item__group__nav", { highlight: d && c.value === n.path || c.value === n.label }]),
                                      key: j,
                                      onClick: (T) => f({ parent: i, item: n, index: s, handleClick: M })
                                    }, h(n.label), 11, Q))),
                                    128
                                    /* KEYED_FRAGMENT */
                                  ))
                                ])
                              ]))),
                              128
                              /* KEYED_FRAGMENT */
                            ))
                          ])) : A("v-if", !0)
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
      e("div", R, [
        x(a.$slots, "suffix", {}, void 0, !0)
      ])
    ]));
  }
});
export {
  ee as default
};
