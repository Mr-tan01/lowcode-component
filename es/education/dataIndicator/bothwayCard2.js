import { defineComponent as w, mergeDefaults as b, openBlock as i, createElementBlock as o, createElementVNode as n, toDisplayString as u, Fragment as h, renderList as g, renderSlot as v, createVNode as y, unref as l, createCommentVNode as x } from "vue";
import { bigNumber as c } from "lowcode-share/es/share";
import { NNumberAnimation as N } from "naive-ui/es/number-animation";
import d from "lodash-es/memoize";
const S = { class: "lc-bothway-card" }, $ = { class: "lc-bothway-card__wrapper" }, V = { class: "lc-bothway-card__wrapper__info-range" }, B = { class: "lc-bothway-card__wrapper__info-range__label flex-center" }, C = { class: "lc-bothway-card__wrapper__info-range__wrapper" }, U = ["title"], k = { class: "flex-end" }, D = {
  key: 0,
  class: "lc-bothway-card__wrapper__info-range__wrapper__info__division flex-center"
}, F = /* @__PURE__ */ w({
  __name: "bothwayCard",
  props: /* @__PURE__ */ b({
    label: {
      type: String
    },
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
    label: "",
    data: () => [],
    fixed: !0,
    decimal: 0,
    unit: ""
  }),
  setup(e) {
    const f = d((t) => {
      const { unit: r } = c(t);
      return Number.isInteger(t) && !r ? 0 : e.decimal;
    }), m = d((t) => {
      if (e.fixed) {
        const { result: r } = c(t, e.decimal);
        return r;
      }
      return t;
    }), p = d(
      (t, r) => {
        if (e.fixed) {
          const { unit: a } = c(t, e.decimal);
          return `${a}${r || e.unit}`;
        }
        return r || e.unit;
      },
      (t, r) => `${t}_${r || e.unit}`
    );
    return (t, r) => (i(), o("div", S, [
      n("div", $, [
        n("div", V, [
          n(
            "div",
            B,
            u(e.label),
            1
            /* TEXT */
          ),
          n("div", C, [
            (i(!0), o(
              h,
              null,
              g(e.data, (a, s) => (i(), o("div", {
                class: "lc-bothway-card__wrapper__info-range__wrapper__info",
                key: s
              }, [
                v(t.$slots, a.customSlot, { item: a }, () => {
                  var _;
                  return [
                    n("div", {
                      class: "lc-bothway-card__wrapper__info-range__wrapper__info__value",
                      title: (_ = a.value) == null ? void 0 : _.toString()
                    }, [
                      y(l(N), {
                        "show-separator": "",
                        from: 0,
                        to: l(m)(a.value),
                        active: "",
                        precision: l(f)(a.value)
                      }, null, 8, ["to", "precision"])
                    ], 8, U),
                    n(
                      "div",
                      k,
                      u(l(p)(a.value, a.unit)),
                      1
                      /* TEXT */
                    ),
                    s !== e.data.length - 1 ? (i(), o("div", D, " | ")) : x("v-if", !0)
                  ];
                }, !0)
              ]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]),
        r[0] || (r[0] = n(
          "div",
          { class: "lc-bothway-card__wrapper__table--bg" },
          null,
          -1
          /* HOISTED */
        ))
      ])
    ]));
  }
});
export {
  F as default
};
