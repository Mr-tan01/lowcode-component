import { defineComponent as w, openBlock as o, createElementBlock as i, createElementVNode as n, toDisplayString as u, Fragment as b, renderList as h, renderSlot as v, createVNode as g, unref as l, createCommentVNode as y } from "vue";
import { bigNumber as c } from "lowcode-share/es/share";
import { NNumberAnimation as N } from "naive-ui/es/number-animation";
import d from "lodash-es/memoize";
const $ = { class: "lc-bothway-card" }, x = { class: "lc-bothway-card__wrapper" }, S = { class: "lc-bothway-card__wrapper__info-range" }, V = { class: "lc-bothway-card__wrapper__info-range__label flex-center" }, B = { class: "lc-bothway-card__wrapper__info-range__wrapper" }, C = ["title"], U = { class: "flex-end" }, k = {
  key: 0,
  class: "lc-bothway-card__wrapper__info-range__wrapper__info__division flex-center"
}, F = /* @__PURE__ */ w({
  __name: "bothwayCard",
  props: {
    label: { default: "" },
    data: { default: () => [] },
    unit: { default: "" },
    fixed: { type: Boolean, default: !0 },
    decimal: { default: 0 }
  },
  setup(a) {
    const f = d((e) => {
      const { unit: r } = c(e);
      return Number.isInteger(e) && !r ? 0 : a.decimal;
    }), m = d((e) => {
      if (a.fixed) {
        const { result: r } = c(e, a.decimal);
        return r;
      }
      return e;
    }), p = d(
      (e, r) => {
        if (a.fixed) {
          const { unit: t } = c(e, a.decimal);
          return `${t}${r || a.unit}`;
        }
        return r || a.unit;
      },
      (e, r) => `${e}_${r || a.unit}`
    );
    return (e, r) => (o(), i("div", $, [
      n("div", x, [
        n("div", S, [
          n(
            "div",
            V,
            u(e.label),
            1
            /* TEXT */
          ),
          n("div", B, [
            (o(!0), i(
              b,
              null,
              h(e.data, (t, s) => (o(), i("div", {
                key: s,
                class: "lc-bothway-card__wrapper__info-range__wrapper__info"
              }, [
                v(e.$slots, t.customSlot, { item: t }, () => {
                  var _;
                  return [
                    n("div", {
                      class: "lc-bothway-card__wrapper__info-range__wrapper__info__value",
                      title: (_ = t.value) == null ? void 0 : _.toString()
                    }, [
                      g(l(N), {
                        "show-separator": "",
                        from: 0,
                        to: l(m)(t.value),
                        active: "",
                        precision: l(f)(t.value)
                      }, null, 8, ["to", "precision"])
                    ], 8, C),
                    n(
                      "div",
                      U,
                      u(l(p)(t.value, t.unit)),
                      1
                      /* TEXT */
                    ),
                    s !== e.data.length - 1 ? (o(), i("div", k, " | ")) : y("v-if", !0)
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
