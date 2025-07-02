import { defineComponent as p, openBlock as o, createElementBlock as l, createElementVNode as i, Fragment as v, renderList as w, renderSlot as b, createVNode as N, unref as a, toDisplayString as _, createCommentVNode as h } from "vue";
import { bigNumber as c } from "lowcode-share/es/share";
import { NNumberAnimation as $ } from "naive-ui/es/number-animation";
import d from "lodash-es/memoize";
const S = { class: "lc-range-indicator" }, V = { class: "lc-range-indicator__wrapper" }, k = { class: "lc-range-indicator__wrapper__info-range" }, x = { class: "lc-range-indicator__wrapper__info--result" }, y = ["title"], B = {
  key: 0,
  class: "lc-range-indicator__wrapper__info--result--unit"
}, U = { class: "lc-range-indicator__wrapper__info--label" }, A = /* @__PURE__ */ p({
  __name: "rangeIndicator",
  props: {
    data: { default: () => [] },
    unit: { default: "" },
    fixed: { type: Boolean, default: !0 },
    decimal: { default: 0 }
  },
  setup(t) {
    const f = d((r) => {
      const { unit: e } = c(r);
      return Number.isInteger(r) && !e ? 0 : t.decimal;
    }), m = d((r) => {
      if (t.fixed) {
        const { result: e } = c(r, t.decimal);
        return e;
      }
      return r;
    }), s = d(
      (r, e) => {
        if (t.fixed) {
          const { unit: n } = c(r, t.decimal);
          return `${n}${e || t.unit}`;
        }
        return e || t.unit;
      },
      (r, e) => `${r}_${e || t.unit}`
    );
    return (r, e) => (o(), l("div", S, [
      i("div", V, [
        e[1] || (e[1] = i(
          "div",
          { class: "lc-range-indicator__wrapper__table--bg" },
          null,
          -1
          /* HOISTED */
        )),
        i("div", k, [
          (o(!0), l(
            v,
            null,
            w(r.data, (n, g) => (o(), l("div", {
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
              i("div", x, [
                b(r.$slots, n.customSlot, { item: n }, () => {
                  var u;
                  return [
                    i("div", {
                      class: "lc-range-indicator__wrapper__info--result--value",
                      title: (u = n.value) == null ? void 0 : u.toString()
                    }, [
                      N(a($), {
                        "show-separator": "",
                        from: 0,
                        to: a(m)(n.value),
                        active: "",
                        precision: a(f)(n.value)
                      }, null, 8, ["to", "precision"])
                    ], 8, y),
                    a(s)(n.value, n.unit) ? (o(), l(
                      "div",
                      B,
                      _(a(s)(n.value, n.unit)),
                      1
                      /* TEXT */
                    )) : h("v-if", !0)
                  ];
                }, !0)
              ]),
              i(
                "div",
                U,
                _(n.label),
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
