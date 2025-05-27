import { defineComponent as p, mergeDefaults as v, openBlock as o, createElementBlock as l, createElementVNode as i, Fragment as b, renderList as w, renderSlot as N, createVNode as y, unref as a, toDisplayString as _, createCommentVNode as h } from "vue";
import { bigNumber as c } from "lowcode-share/es/share";
import { NNumberAnimation as x } from "naive-ui/es/number-animation";
import s from "lodash-es/memoize";
const S = { class: "lc-range-indicator" }, $ = { class: "lc-range-indicator__wrapper" }, V = { class: "lc-range-indicator__wrapper__info-range" }, k = { class: "lc-range-indicator__wrapper__info--result" }, B = ["title"], U = {
  key: 0,
  class: "lc-range-indicator__wrapper__info--result--unit"
}, C = { class: "lc-range-indicator__wrapper__info--label" }, z = /* @__PURE__ */ p({
  __name: "rangeIndicator",
  props: /* @__PURE__ */ v({
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
  setup(n) {
    const f = s((t) => {
      const { unit: e } = c(t);
      return Number.isInteger(t) && !e ? 0 : n.decimal;
    }), m = s((t) => {
      if (n.fixed) {
        const { result: e } = c(t, n.decimal);
        return e;
      }
      return t;
    }), d = s(
      (t, e) => {
        if (n.fixed) {
          const { unit: r } = c(t, n.decimal);
          return `${r}${e || n.unit}`;
        }
        return e || n.unit;
      },
      (t, e) => `${t}_${e || n.unit}`
    );
    return (t, e) => (o(), l("div", S, [
      i("div", $, [
        e[1] || (e[1] = i(
          "div",
          { class: "lc-range-indicator__wrapper__table--bg" },
          null,
          -1
          /* HOISTED */
        )),
        i("div", V, [
          (o(!0), l(
            b,
            null,
            w(n.data, (r, g) => (o(), l("div", {
              class: "lc-range-indicator__wrapper__info",
              key: g
            }, [
              e[0] || (e[0] = i(
                "div",
                { class: "lc-range-indicator__wrapper__info__decorator--bg" },
                null,
                -1
                /* HOISTED */
              )),
              i("div", k, [
                N(t.$slots, r.customSlot, { item: r }, () => {
                  var u;
                  return [
                    i("div", {
                      class: "lc-range-indicator__wrapper__info--result--value",
                      title: (u = r.value) == null ? void 0 : u.toString()
                    }, [
                      y(a(x), {
                        "show-separator": "",
                        from: 0,
                        to: a(m)(r.value),
                        active: "",
                        precision: a(f)(r.value)
                      }, null, 8, ["to", "precision"])
                    ], 8, B),
                    a(d)(r.value, r.unit) ? (o(), l(
                      "div",
                      U,
                      _(a(d)(r.value, r.unit)),
                      1
                      /* TEXT */
                    )) : h("v-if", !0)
                  ];
                }, !0)
              ]),
              i(
                "div",
                C,
                _(r.label),
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
  z as default
};
