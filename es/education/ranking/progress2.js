import { defineComponent as i, mergeDefaults as p, openBlock as a, createElementBlock as o, createVNode as u, unref as d, withCtx as m, createElementVNode as r, Fragment as f, renderList as g, normalizeStyle as b, toDisplayString as t } from "vue";
import h from "./elasticScrollbar/index.js";
import { bigNumber as v } from "lowcode-share/es/share";
const y = { class: "lc-progress" }, w = { class: "lc-progress__wrapper" }, x = { class: "lc-progress__wrapper__item__left__label" }, L = ["title"], C = /* @__PURE__ */ i({
  __name: "progress",
  props: /* @__PURE__ */ p({
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
  setup(l) {
    const _ = (s) => {
      if (l.fixed) {
        const { result: n, unit: e } = v(s, l.decimal);
        return `${n}${e}`;
      }
      return s;
    };
    return (s, n) => (a(), o("div", y, [
      u(d(h), null, {
        default: m(() => [
          r("div", w, [
            (a(!0), o(
              f,
              null,
              g(l.dataList, (e, c) => (a(), o("div", {
                class: "lc-progress__wrapper__item",
                key: c
              }, [
                r(
                  "div",
                  {
                    class: "lc-progress__wrapper__item__left",
                    style: b({
                      "--progress": e.value,
                      "--bgColor": e.color
                    })
                  },
                  [
                    r("span", x, [
                      r(
                        "span",
                        null,
                        t(e.label),
                        1
                        /* TEXT */
                      ),
                      r(
                        "span",
                        null,
                        t(e.value) + "%",
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
                    t(_(e.tootal)),
                    1
                    /* TEXT */
                  ),
                  r(
                    "span",
                    null,
                    t(e.unit),
                    1
                    /* TEXT */
                  )
                ], 8, L)
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
  C as default
};
