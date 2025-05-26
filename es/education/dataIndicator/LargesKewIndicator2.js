import { defineComponent as k, mergeDefaults as p, computed as l, openBlock as r, createElementBlock as a, normalizeClass as _, createElementVNode as t, renderSlot as b, toDisplayString as n, createVNode as c, unref as o, createCommentVNode as m, createTextVNode as w, withCtx as g } from "vue";
import h from "./images/skew/icon/person.png.js";
import { bigNumber as s } from "lowcode-share/es/share";
import { NNumberAnimation as f } from "naive-ui/es/number-animation";
import N from "./tooltip/index.js";
const V = { class: "lc-skew-indicator__wrapper" }, S = { class: "lc-skew-indicator__wrapper__table--bg" }, x = { class: "lc-skew-indicator__wrapper__table--bg--icon" }, L = ["src"], C = { class: "lc-skew-indicator__wrapper__info" }, I = { class: "lc-skew-indicator__wrapper__info--label" }, $ = { class: "lc-skew-indicator__wrapper__info--result" }, B = { class: "lc-skew-indicator__wrapper__info--result--value" }, U = {
  key: 0,
  class: "lc-skew-indicator__wrapper__info--result--unit"
}, D = { class: "lc-skew-indicator__wrapper__info--result--year--label" }, E = { class: "lc-skew-indicator__wrapper__info--result--year--value" }, T = {
  key: 0,
  class: "lc-skew-indicator__wrapper__info--result--year--up"
}, z = {
  key: 1,
  class: "lc-skew-indicator__wrapper__info--result--year--down"
}, A = {
  key: 1,
  class: "lc-skew-indicator__wrapper__info--result--altericon"
}, H = /* @__PURE__ */ k({
  __name: "LargesKewIndicator",
  props: /* @__PURE__ */ p({
    label: {
      type: String
    },
    value: {
      type: Number
    },
    unit: {
      type: String
    },
    yearLabel: {
      type: String
    },
    yearValue: {
      type: Number
    },
    fixed: {
      type: Boolean
    },
    decimal: {
      type: Number
    },
    icon: {
      type: String
    },
    tip: {
      type: String
    },
    type: {
      type: String
    }
  }, {
    label: "",
    value: 0,
    yearLabel: "同比去年",
    yearValue: 0,
    fixed: !0,
    decimal: 0,
    icon: h,
    __skip_icon: !0,
    tip: "",
    type: "skew"
  }),
  setup(e) {
    const v = l(() => {
      const { unit: i } = s(e.value, e.decimal);
      return console.log(Number.isInteger(e.value) && !i), Number.isInteger(e.value) && !i ? 0 : e.decimal;
    }), y = l(() => {
      if (e.fixed) {
        const { result: i } = s(e.value, e.decimal);
        return i;
      }
      return e.value;
    }), d = l(() => {
      if (e.fixed) {
        const { unit: i } = s(e.value, e.decimal);
        return `${i}${e.unit}`;
      }
      return e.unit;
    });
    return (i, u) => (r(), a(
      "div",
      {
        class: _(["lc-skew-indicator", [`lc-skew-indicator--${e.type}`]])
      },
      [
        t("div", V, [
          t("div", S, [
            t("div", x, [
              b(i.$slots, "default", {}, () => [
                t("img", {
                  src: e.icon,
                  alt: ""
                }, null, 8, L)
              ], !0)
            ])
          ]),
          t("div", C, [
            t(
              "div",
              I,
              n(e.label),
              1
              /* TEXT */
            ),
            t("div", $, [
              t("div", B, [
                c(o(f), {
                  "show-separator": "",
                  from: 0,
                  to: y.value,
                  active: "",
                  precision: v.value
                }, null, 8, ["to", "precision"])
              ]),
              d.value ? (r(), a(
                "div",
                U,
                n(d.value),
                1
                /* TEXT */
              )) : m("v-if", !0),
              t(
                "div",
                {
                  class: _(["lc-skew-indicator__wrapper__info--result--year", {
                    down: e.yearValue < 0
                  }])
                },
                [
                  t(
                    "div",
                    D,
                    n(e.yearLabel),
                    1
                    /* TEXT */
                  ),
                  t("div", E, [
                    c(o(f), {
                      "show-separator": "",
                      from: 0,
                      to: e.yearValue,
                      active: "",
                      precision: e.decimal
                    }, null, 8, ["to", "precision"]),
                    u[0] || (u[0] = w("% "))
                  ]),
                  e.yearValue > 0 ? (r(), a("div", T, "↑")) : (r(), a("div", z, "↓"))
                ],
                2
                /* CLASS */
              ),
              e.tip ? (r(), a("div", A, [
                c(o(N), null, {
                  default: g(() => [
                    w(
                      n(e.tip),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])) : m("v-if", !0)
            ])
          ])
        ])
      ],
      2
      /* CLASS */
    ));
  }
});
export {
  H as default
};
