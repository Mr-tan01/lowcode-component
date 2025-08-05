import { defineComponent as p, openBlock as o, createElementBlock as l, createElementVNode as i, Fragment as v, renderList as w, renderSlot as b, createVNode as h, unref as a, toDisplayString as _, createCommentVNode as N } from "vue";
import { bigNumber as c } from "lowcode-share/es/share";
import { NNumberAnimation as k } from "naive-ui/es/number-animation";
import d from "lodash-es/memoize";
const $ = { class: "lc-range-indicator" }, y = { class: "lc-range-indicator__wrapper" }, B = { class: "lc-range-indicator__wrapper__info-range" }, C = { class: "lc-range-indicator__wrapper__info--result" }, I = ["title"], S = {
  key: 0,
  class: "lc-range-indicator__wrapper__info--result--unit"
}, V = { class: "lc-range-indicator__wrapper__info--label" }, A = /* @__PURE__ */ p({
  __name: "rangeIndicator",
  props: {
    data: { default: () => [] },
    unit: { default: "" },
    fixed: { type: Boolean, default: !0 },
    decimal: { default: 0 },
    notCheckInteger: { type: Boolean, default: !1 }
  },
  setup(n) {
    const f = d((r) => {
      const { unit: e } = c(r);
      return Number.isInteger(r) && !e && !n.notCheckInteger ? 0 : n.decimal;
    }), m = d((r) => {
      if (n.fixed) {
        const { result: e } = c(r, n.decimal);
        return e;
      }
      return r;
    }), s = d(
      (r, e) => {
        if (n.fixed) {
          const { unit: t } = c(r, n.decimal);
          return `${t}${e || n.unit}`;
        }
        return e || n.unit;
      },
      (r, e) => `${r}_${e || n.unit}`
    );
    return (r, e) => (o(), l("div", $, [
      i("div", y, [
        e[1] || (e[1] = i(
          "div",
          { class: "lc-range-indicator__wrapper__table--bg" },
          null,
          -1
          /* HOISTED */
        )),
        i("div", B, [
          (o(!0), l(
            v,
            null,
            w(r.data, (t, g) => (o(), l("div", {
              key: g,
              class: "lc-range-indicator__wrapper__info"
            }, [
              e[0] || (e[0] = i(
                "div",
                { class: "lc-range-indicator__wrapper__info__decorator--bg" },
                null,
                -1
                /* HOISTED */
              )),
              i("div", C, [
                b(r.$slots, t.customSlot, { item: t }, () => {
                  var u;
                  return [
                    i("div", {
                      class: "lc-range-indicator__wrapper__info--result--value",
                      title: (u = t.value) == null ? void 0 : u.toString()
                    }, [
                      h(a(k), {
                        "show-separator": "",
                        from: 0,
                        to: a(m)(t.value),
                        active: "",
                        precision: a(f)(t.value)
                      }, null, 8, ["to", "precision"])
                    ], 8, I),
                    a(s)(t.value, t.unit) ? (o(), l(
                      "div",
                      S,
                      _(a(s)(t.value, t.unit)),
                      1
                      /* TEXT */
                    )) : N("v-if", !0)
                  ];
                }, !0)
              ]),
              i(
                "div",
                V,
                _(t.label),
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
  A as default
};
