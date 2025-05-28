import { defineComponent as u, mergeDefaults as m, openBlock as o, createElementBlock as n, createVNode as f, unref as i, withCtx as g, createElementVNode as r, Fragment as b, renderList as h, normalizeStyle as v, toDisplayString as a } from "vue";
import x from "./elasticScrollbar/index.js";
import { bigNumber as c } from "lowcode-share/es/share";
import y from "lodash-es/memoize";
const w = { class: "lc-progress" }, L = { class: "lc-progress__wrapper" }, N = { class: "lc-progress__wrapper__item__left__label" }, S = ["title"], V = /* @__PURE__ */ u({
  __name: "progress",
  props: /* @__PURE__ */ m({
    fixed: {
      type: Boolean
    },
    decimal: {
      type: Number
    },
    dataList: {
      type: Array
    }
  }, {
    fixed: !0,
    decimal: 2,
    dataList: () => []
  }),
  setup(s) {
    const _ = (t) => {
      if (s.fixed) {
        const { result: l } = c(t, s.decimal);
        return l;
      }
      return t;
    }, p = y(
      (t, l) => {
        if (s.fixed) {
          const { unit: e } = c(t, s.decimal);
          return `${e}${l}`;
        }
        return l;
      },
      (t, l) => `${t}_${l}`
    );
    return (t, l) => (o(), n("div", w, [
      f(i(x), null, {
        default: g(() => [
          r("div", L, [
            (o(!0), n(
              b,
              null,
              h(s.dataList, (e, d) => (o(), n("div", {
                class: "lc-progress__wrapper__item",
                key: d
              }, [
                r(
                  "div",
                  {
                    class: "lc-progress__wrapper__item__left",
                    style: v({
                      "--progress": e.value,
                      "--bgColor": e.color
                    })
                  },
                  [
                    r("span", N, [
                      r(
                        "span",
                        null,
                        a(e.label),
                        1
                        /* TEXT */
                      ),
                      r(
                        "span",
                        null,
                        a(e.value) + "%",
                        1
                        /* TEXT */
                      )
                    ])
                  ],
                  4
                  /* STYLE */
                ),
                r("div", {
                  class: "lc-progress__wrapper__item__right",
                  title: e.tootal.toString()
                }, [
                  r(
                    "span",
                    null,
                    a(_(e.tootal)),
                    1
                    /* TEXT */
                  ),
                  r(
                    "span",
                    null,
                    a(i(p)(e.tootal, e.unit)),
                    1
                    /* TEXT */
                  )
                ], 8, S)
              ]))),
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
  V as default
};
