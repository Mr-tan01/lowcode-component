// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { openBlock as o, createElementBlock as i, createElementVNode as r, renderSlot as k, defineComponent as w, computed as v, ref as h, onMounted as b, createVNode as x, unref as y, withCtx as $, Fragment as B, renderList as C, normalizeClass as I, normalizeStyle as L, toDisplayString as u, createCommentVNode as S } from "vue";
const f = (t, l) => {
  const a = t.__vccOpts || t;
  for (const [s, d] of l)
    a[s] = d;
  return a;
}, V = {}, E = { class: "lc-elastic-scrollbar" }, N = { class: "lc-elastic-scrollbar__wrapper" };
function P(t, l) {
  return o(), i("div", E, [
    r("div", N, [
      k(t.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const z = /* @__PURE__ */ f(V, [["render", P], ["__scopeId", "data-v-5a702158"]]), F = { class: "lc-ranking" }, A = { class: "lc-ranking__wrapper" }, D = { class: "lc-ranking__wrapper__item__top" }, M = { class: "lc-ranking__wrapper__item__top__start" }, O = { class: "lc-ranking__wrapper__item__top__start__index" }, R = { class: "lc-ranking__wrapper__item__top__start__label" }, T = { class: "lc-ranking__wrapper__item__top__end" }, j = { class: "lc-ranking__wrapper__item__top__end__value" }, q = { class: "lc-ranking__wrapper__item__top__end__unit" }, G = { class: "lc-ranking__wrapper__item__inner" }, H = {
  key: 0,
  class: "lc-ranking__wrapper__item__inner__ball"
}, J = /* @__PURE__ */ w({
  __name: "ranking",
  props: {
    list: { default: () => [] },
    sort: { default: "order" },
    animateIndex: { default: 0 },
    type: { default: "ranking" },
    showBall: { type: Boolean, default: !0 }
  },
  setup(t) {
    function l(e) {
      return e.reduce((n, _) => n += _.value, 0);
    }
    const a = v(() => l(t.list)), s = h(t.animateIndex);
    function d(e) {
      return e ? e / a.value * 100 * s.value : 0;
    }
    function m(e) {
      return l(p.value.slice(0, e)) / a.value * 100 * s.value;
    }
    function g(e) {
      if (typeof e.formatter == "function")
        return e.formatter(e);
      switch (e.formatter) {
        case "{b}":
          return (e.value / a.value * 100).toFixed(2);
        case "{a}":
          return e.value * a.value;
        default:
          return e.value;
      }
    }
    const p = v(() => {
      switch (t.sort) {
        case "none":
          return t.list;
        case "order":
          return t.list.sort((e, n) => n.value - e.value);
        case "reverse":
          return t.list.sort((e, n) => e.value - n.value);
        default:
          return t.list;
      }
    });
    return b(() => {
      s.value = 1;
    }), (e, n) => (o(), i("div", F, [
      x(y(z), null, {
        default: $(() => [
          r("div", A, [
            (o(!0), i(
              B,
              null,
              C(p.value, (_, c) => (o(), i(
                "div",
                {
                  class: I(["lc-ranking__wrapper__item", [`lc-ranking__wrapper__item--${e.type}`]]),
                  key: c,
                  style: L({
                    "--proportion": d(_.value),
                    "--ranking-num": c,
                    "--pre-proportion": m(c)
                  })
                },
                [
                  r("div", D, [
                    r("div", M, [
                      r(
                        "div",
                        O,
                        u(c + 1),
                        1
                        /* TEXT */
                      ),
                      r(
                        "div",
                        R,
                        u(_.label),
                        1
                        /* TEXT */
                      )
                    ]),
                    r("div", T, [
                      r(
                        "div",
                        j,
                        u(g(_)),
                        1
                        /* TEXT */
                      ),
                      r(
                        "div",
                        q,
                        u(_.unit),
                        1
                        /* TEXT */
                      )
                    ])
                  ]),
                  r("div", G, [
                    n[0] || (n[0] = r(
                      "div",
                      { class: "lc-ranking__wrapper__item__inner__bar" },
                      null,
                      -1
                      /* HOISTED */
                    )),
                    e.showBall ? (o(), i("div", H)) : S("v-if", !0)
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
}), Q = /* @__PURE__ */ f(J, [["__scopeId", "data-v-edc6ee53"]]);
export {
  Q as LcRanking
};
