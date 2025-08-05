import { defineComponent as w, openBlock as o, createElementBlock as i, createElementVNode as n, toDisplayString as u, Fragment as h, renderList as b, renderSlot as v, createVNode as g, unref as l, createCommentVNode as y } from "vue";
import { bigNumber as c } from "lowcode-share/es/share";
import { NNumberAnimation as N } from "naive-ui/es/number-animation";
import d from "lodash-es/memoize";
const C = { class: "lc-bothway-card" }, $ = { class: "lc-bothway-card__wrapper" }, k = { class: "lc-bothway-card__wrapper__info-range" }, x = { class: "lc-bothway-card__wrapper__info-range__label flex-center" }, B = { class: "lc-bothway-card__wrapper__info-range__wrapper" }, S = ["title"], V = { class: "flex-end" }, I = {
  key: 0,
  class: "lc-bothway-card__wrapper__info-range__wrapper__info__division flex-center"
}, D = /* @__PURE__ */ w({
  __name: "bothwayCard",
  props: {
    label: { default: "" },
    data: { default: () => [] },
    unit: { default: "" },
    fixed: { type: Boolean, default: !0 },
    decimal: { default: 0 },
    notCheckInteger: { type: Boolean, default: !1 }
  },
  setup(r) {
    const f = d((e) => {
      const { unit: t } = c(e);
      return Number.isInteger(e) && !t && !r.notCheckInteger ? 0 : r.decimal;
    }), m = d((e) => {
      if (r.fixed) {
        const { result: t } = c(e, r.decimal);
        return t;
      }
      return e;
    }), p = d(
      (e, t) => {
        if (r.fixed) {
          const { unit: a } = c(e, r.decimal);
          return `${a}${t || r.unit}`;
        }
        return t || r.unit;
      },
      (e, t) => `${e}_${t || r.unit}`
    );
    return (e, t) => (o(), i("div", C, [
      n("div", $, [
        n("div", k, [
          n(
            "div",
            x,
            u(e.label),
            1
            /* TEXT */
          ),
          n("div", B, [
            (o(!0), i(
              h,
              null,
              b(e.data, (a, s) => (o(), i("div", {
                key: s,
                class: "lc-bothway-card__wrapper__info-range__wrapper__info"
              }, [
                v(e.$slots, a.customSlot, { item: a }, () => {
                  var _;
                  return [
                    n("div", {
                      class: "lc-bothway-card__wrapper__info-range__wrapper__info__value",
                      title: (_ = a.value) == null ? void 0 : _.toString()
                    }, [
                      g(l(N), {
                        "show-separator": "",
                        from: 0,
                        to: l(m)(a.value),
                        active: "",
                        precision: l(f)(a.value)
                      }, null, 8, ["to", "precision"])
                    ], 8, S),
                    n(
                      "div",
                      V,
                      u(l(p)(a.value, a.unit)),
                      1
                      /* TEXT */
                    ),
                    s !== e.data.length - 1 ? (o(), i("div", I, " | ")) : y("v-if", !0)
                  ];
                }, !0)
              ]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ]),
        t[0] || (t[0] = n(
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
  D as default
};
