import { defineComponent as g, mergeDefaults as h, useTemplateRef as v, computed as x, openBlock as n, createElementBlock as i, createVNode as y, unref as c, withCtx as w, createElementVNode as l, Fragment as b, renderList as L, normalizeStyle as u, toDisplayString as s } from "vue";
import S from "./elasticScrollbar/index.js";
import { bigNumber as d } from "lowcode-share/es/share";
import V from "lodash-es/memoize";
const $ = { class: "lc-progress" }, N = { class: "lc-progress__wrapper" }, R = { class: "lc-progress__wrapper__item__left__label" }, W = ["title"], k = /* @__PURE__ */ g({
  __name: "progress",
  props: /* @__PURE__ */ h({
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
  setup(a) {
    const o = v("valueRef"), _ = x(() => {
      if (o.value && Array.isArray(o.value)) {
        const t = o.value.map((e) => Math.floor(e.offsetWidth));
        return `${Math.max(...t)}px`;
      }
    }), p = (t) => {
      if (a.fixed) {
        const { result: r } = d(t, a.decimal);
        return r;
      }
      return t;
    }, f = V(
      (t, r) => {
        if (a.fixed) {
          const { unit: e } = d(t, a.decimal);
          return `${e}${r}`;
        }
        return r;
      },
      (t, r) => `${t}_${r}`
    );
    return (t, r) => (n(), i("div", $, [
      y(c(S), null, {
        default: w(() => [
          l("div", N, [
            (n(!0), i(
              b,
              null,
              L(a.dataList, (e, m) => (n(), i("div", {
                class: "lc-progress__wrapper__item",
                key: m
              }, [
                l(
                  "div",
                  {
                    class: "lc-progress__wrapper__item__left",
                    style: u({
                      "--progress": e.value,
                      "--bgColor": e.color
                    })
                  },
                  [
                    l("span", R, [
                      l(
                        "span",
                        null,
                        s(e.label),
                        1
                        /* TEXT */
                      ),
                      l(
                        "span",
                        null,
                        s(e.value) + "%",
                        1
                        /* TEXT */
                      )
                    ])
                  ],
                  4
                  /* STYLE */
                ),
                l("div", {
                  class: "lc-progress__wrapper__item__right",
                  style: u({ width: _.value }),
                  ref_for: !0,
                  ref: "valueRef",
                  title: e.tootal.toString()
                }, [
                  l(
                    "span",
                    null,
                    s(p(e.tootal)),
                    1
                    /* TEXT */
                  ),
                  l(
                    "span",
                    null,
                    s(c(f)(e.tootal, e.unit)),
                    1
                    /* TEXT */
                  )
                ], 12, W)
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
  k as default
};
