import { defineComponent as f, mergeDefaults as p, openBlock as a, createElementBlock as o, createElementVNode as i, Fragment as g, renderList as v, createVNode as b, unref as c, toDisplayString as d, createCommentVNode as w } from "vue";
import { bigNumber as s } from "lowcode-share/es/share";
import { NNumberAnimation as N } from "naive-ui/es/number-animation";
import u from "lodash-es/memoize";
const x = { class: "lc-range-indicator" }, y = { class: "lc-range-indicator__wrapper" }, h = { class: "lc-range-indicator__wrapper__info-range" }, V = { class: "lc-range-indicator__wrapper__info--result" }, $ = { class: "lc-range-indicator__wrapper__info--result--value" }, k = {
  key: 0,
  class: "lc-range-indicator__wrapper__info--result--unit"
}, B = { class: "lc-range-indicator__wrapper__info--label" }, U = /* @__PURE__ */ f({
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
    const _ = u((n) => {
      if (r.fixed) {
        const { result: e } = s(n, r.decimal);
        return e;
      }
      return n;
    }), l = u(
      (n, e) => {
        if (r.fixed) {
          const { unit: t } = s(n, r.decimal);
          return `${t}${e || r.unit}`;
        }
        return e || r.unit;
      },
      (n, e) => `${n}_${e || r.unit}`
    );
    return (n, e) => (a(), o("div", x, [
      i("div", y, [
        e[1] || (e[1] = i(
          "div",
          { class: "lc-range-indicator__wrapper__table--bg" },
          null,
          -1
          /* HOISTED */
        )),
        i("div", h, [
          (a(!0), o(
            g,
            null,
            v(r.data, (t, m) => (a(), o("div", {
              class: "lc-range-indicator__wrapper__info",
              key: m
            }, [
              e[0] || (e[0] = i(
                "div",
                { class: "lc-range-indicator__wrapper__info__decorator--bg" },
                null,
                -1
                /* HOISTED */
              )),
              i("div", V, [
                i("div", $, [
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
                  k,
                  d(c(l)(t.value, t.unit)),
                  1
                  /* TEXT */
                )) : w("v-if", !0)
              ]),
              i(
                "div",
                B,
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
  U as default
};
