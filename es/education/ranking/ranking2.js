import { defineComponent as g, computed as p, ref as w, onMounted as k, openBlock as i, createElementBlock as o, createVNode as h, unref as b, withCtx as x, createElementVNode as t, Fragment as y, renderList as B, normalizeClass as C, normalizeStyle as V, toDisplayString as s, createCommentVNode as E } from "vue";
import L from "./elasticScrollbar/index.js";
const N = { class: "lc-ranking" }, P = { class: "lc-ranking__wrapper" }, S = { class: "lc-ranking__wrapper__item__top" }, z = { class: "lc-ranking__wrapper__item__top__start" }, F = { class: "lc-ranking__wrapper__item__top__start__index" }, I = { class: "lc-ranking__wrapper__item__top__start__label" }, $ = { class: "lc-ranking__wrapper__item__top__end" }, A = { class: "lc-ranking__wrapper__item__top__end__value" }, D = { class: "lc-ranking__wrapper__item__top__end__unit" }, M = { class: "lc-ranking__wrapper__item__inner" }, T = {
  key: 0,
  class: "lc-ranking__wrapper__item__inner__ball"
}, G = /* @__PURE__ */ g({
  __name: "ranking",
  props: {
    list: { default: () => [] },
    sort: { default: "order" },
    animateIndex: { default: 0 },
    type: { default: "ranking" },
    showBall: { type: Boolean, default: !0 }
  },
  setup(n) {
    function u(e) {
      return e.reduce((r, a) => r += a.value, 0);
    }
    const _ = p(() => u(n.list)), c = w(n.animateIndex);
    function v(e) {
      return e ? e / _.value * 100 * c.value : 0;
    }
    function f(e) {
      return u(d.value.slice(0, e)) / _.value * 100 * c.value;
    }
    function m(e) {
      if (typeof e.formatter == "function")
        return e.formatter(e);
      switch (e.formatter) {
        case "{b}":
          return (e.value / _.value * 100).toFixed(2);
        case "{a}":
          return e.value * _.value;
        default:
          return e.value;
      }
    }
    const d = p(() => {
      switch (n.sort) {
        case "none":
          return n.list;
        case "order":
          return n.list.sort((e, r) => r.value - e.value);
        case "reverse":
          return n.list.sort((e, r) => e.value - r.value);
        default:
          return n.list;
      }
    });
    return k(() => {
      c.value = 1;
    }), (e, r) => (i(), o("div", N, [
      h(b(L), null, {
        default: x(() => [
          t("div", P, [
            (i(!0), o(
              y,
              null,
              B(d.value, (a, l) => (i(), o(
                "div",
                {
                  class: C(["lc-ranking__wrapper__item", [`lc-ranking__wrapper__item--${e.type}`]]),
                  key: l,
                  style: V({
                    "--proportion": v(a.value),
                    "--ranking-num": l,
                    "--pre-proportion": f(l)
                  })
                },
                [
                  t("div", S, [
                    t("div", z, [
                      t(
                        "div",
                        F,
                        s(l + 1),
                        1
                        /* TEXT */
                      ),
                      t(
                        "div",
                        I,
                        s(a.label),
                        1
                        /* TEXT */
                      )
                    ]),
                    t("div", $, [
                      t(
                        "div",
                        A,
                        s(m(a)),
                        1
                        /* TEXT */
                      ),
                      t(
                        "div",
                        D,
                        s(a.unit),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  t("div", M, [
                    r[0] || (r[0] = t(
                      "div",
                      { class: "lc-ranking__wrapper__item__inner__bar" },
                      null,
                      -1
                      /* HOISTED */
                    )),
                    e.showBall ? (i(), o("div", T)) : E("v-if", !0)
                  ])
                ],
                6
                /* CLASS, STYLE */
              ))),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ]));
  }
});
export {
  G as default
};
