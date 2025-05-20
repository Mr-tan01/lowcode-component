import { defineComponent as f, mergeDefaults as p, openBlock as a, createElementBlock as o, createElementVNode as n, Fragment as g, renderList as v, createVNode as b, unref as c, toDisplayString as d, createCommentVNode as w } from "vue";
import { bigNumber as s } from "lowcode-share/es/share";
import { NNumberAnimation as N } from "naive-ui/es/number-animation";
import u from "lodash-es/memoize";
const x = { class: "lc-range-indicator" }, y = { class: "lc-range-indicator__wrapper" }, h = { class: "lc-range-indicator__wrapper__info-range" }, V = { class: "lc-range-indicator__wrapper__info--result" }, k = { class: "lc-range-indicator__wrapper__info--result--value" }, B = {
  key: 0,
  class: "lc-range-indicator__wrapper__info--result--unit"
}, C = { class: "lc-range-indicator__wrapper__info--label" }, $ = /* @__PURE__ */ f({
  __name: "rangeIndicator",
  props: /* @__PURE__ */ p({
    data: {
      type: Object
    },
    unit: {
      type: String
    },
    fixed: {
      type: Boolean
    },
    decimal: {
      type: Number
    }
  }, {
    data: () => [],
    fixed: !0,
    decimal: 0,
    unit: ""
  }),
  setup(r) {
    const _ = u((i) => {
      if (r.fixed) {
        const { result: e } = s(i, r.decimal);
        return e;
      }
      return i;
    }), l = u((i, e) => {
      if (r.fixed) {
        const { unit: t } = s(i, r.decimal);
        return `${t}${e || r.unit}`;
      }
      return e || r.unit;
    });
    return (i, e) => (a(), o("div", x, [
      n("div", y, [
        e[1] || (e[1] = n(
          "div",
          { class: "lc-range-indicator__wrapper__table--bg" },
          null,
          -1
          /* HOISTED */
        )),
        n("div", h, [
          (a(!0), o(
            g,
            null,
            v(r.data, (t, m) => (a(), o("div", {
              class: "lc-range-indicator__wrapper__info",
              key: m
            }, [
              e[0] || (e[0] = n(
                "div",
                { class: "lc-range-indicator__wrapper__info__decorator--bg" },
                null,
                -1
                /* HOISTED */
              )),
              n("div", V, [
                n("div", k, [
                  b(c(N), {
                    "show-separator": "",
                    from: 0,
                    to: c(_)(t.value),
                    active: "",
                    precision: r.decimal
                  }, null, 8, ["to", "precision"])
                ]),
                c(l)(t.value, t.unit) ? (a(), o(
                  "div",
                  B,
                  d(c(l)(t.value, t.unit)),
                  1
                  /* TEXT */
                )) : w("v-if", !0)
              ]),
              n(
                "div",
                C,
                d(t.label),
                1
                /* TEXT */
              )
            ]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ])
    ]));
  }
});
export {
  $ as default
};
