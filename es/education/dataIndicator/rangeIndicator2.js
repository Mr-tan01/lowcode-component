import { defineComponent as b, openBlock as a, createElementBlock as o, createElementVNode as i, Fragment as w, renderList as h, renderSlot as _, createVNode as N, unref as l, toDisplayString as f, createCommentVNode as m } from "vue";
import { bigNumber as s } from "lowcode-share/es/share";
import { NNumberAnimation as $ } from "naive-ui/es/number-animation";
import c from "lodash-es/memoize";
const k = { class: "lc-range-indicator" }, y = { class: "lc-range-indicator__wrapper" }, B = { class: "lc-range-indicator__wrapper__info-range" }, C = { class: "lc-range-indicator__wrapper__info--result" }, I = ["title"], S = {
  key: 0,
  class: "lc-range-indicator__wrapper__info--result--unit"
}, V = { class: "lc-range-indicator__wrapper__info--label" }, U = {
  key: 0,
  class: "lc-range-indicator__wrapper__info--label-bottom"
}, D = /* @__PURE__ */ b({
  __name: "rangeIndicator",
  props: {
    data: { default: () => [] },
    unit: { default: "" },
    fixed: { type: Boolean, default: !0 },
    decimal: { default: 0 },
    notCheckInteger: { type: Boolean, default: !1 }
  },
  setup(n) {
    const g = c((e) => {
      const { unit: t } = s(e);
      return Number.isInteger(e) && !t && !n.notCheckInteger ? 0 : n.decimal;
    }), p = c((e) => {
      if (n.fixed) {
        const { result: t } = s(e, n.decimal);
        return t;
      }
      return e;
    }), d = c(
      (e, t) => {
        if (n.fixed) {
          const { unit: r } = s(e, n.decimal);
          return `${r}${t || n.unit}`;
        }
        return t || n.unit;
      },
      (e, t) => `${e}_${t || n.unit}`
    );
    return (e, t) => (a(), o("div", k, [
      i("div", y, [
        t[1] || (t[1] = i(
          "div",
          { class: "lc-range-indicator__wrapper__table--bg" },
          null,
          -1
          /* HOISTED */
        )),
        i("div", B, [
          (a(!0), o(
            w,
            null,
            h(e.data, (r, v) => (a(), o("div", {
              key: v,
              class: "lc-range-indicator__wrapper__info"
            }, [
              t[0] || (t[0] = i(
                "div",
                { class: "lc-range-indicator__wrapper__info__decorator--bg" },
                null,
                -1
                /* HOISTED */
              )),
              i("div", C, [
                _(e.$slots, r.customSlot, { item: r }, () => {
                  var u;
                  return [
                    i("div", {
                      class: "lc-range-indicator__wrapper__info--result--value",
                      title: (u = r.value) == null ? void 0 : u.toString()
                    }, [
                      N(l($), {
                        "show-separator": "",
                        from: 0,
                        to: l(p)(r.value),
                        active: "",
                        precision: l(g)(r.value)
                      }, null, 8, ["to", "precision"])
                    ], 8, I),
                    l(d)(r.value, r.unit) ? (a(), o(
                      "div",
                      S,
                      f(l(d)(r.value, r.unit)),
                      1
                      /* TEXT */
                    )) : m("v-if", !0)
                  ];
                }, !0)
              ]),
              i(
                "div",
                V,
                f(r.label),
                1
                /* TEXT */
              ),
              e.$slots["label-bottom"] ? (a(), o("div", U, [
                _(e.$slots, "label-bottom", { item: r }, void 0, !0)
              ])) : m("v-if", !0)
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
  D as default
};
