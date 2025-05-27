import { defineComponent as p, mergeDefaults as k, computed as l, openBlock as r, createElementBlock as a, normalizeClass as _, createElementVNode as t, renderSlot as b, toDisplayString as n, createVNode as c, unref as o, createCommentVNode as m, createTextVNode as w, withCtx as h } from "vue";
import g from "./images/skew/icon/person.png.js";
import { bigNumber as s } from "lowcode-share/es/share";
import { NNumberAnimation as f } from "naive-ui/es/number-animation";
import N from "./tooltip/index.js";
const V = { class: "lc-skew-indicator__wrapper" }, S = { class: "lc-skew-indicator__wrapper__table--bg" }, x = { class: "lc-skew-indicator__wrapper__table--bg--icon" }, L = ["src"], C = { class: "lc-skew-indicator__wrapper__info" }, $ = { class: "lc-skew-indicator__wrapper__info--label" }, B = { class: "lc-skew-indicator__wrapper__info--result" }, I = { class: "lc-skew-indicator__wrapper__info--result--value" }, U = {
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
}, H = /* @__PURE__ */ p({
  __name: "LargesKewIndicator",
  props: /* @__PURE__ */ k({
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
    icon: g,
    __skip_icon: !0,
    tip: "",
    type: "skew"
  }),
  setup(e) {
    const v = l(() => {
      const { unit: i } = s(e.value);
      return Number.isInteger(e.value) && !i ? 0 : e.decimal;
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
              $,
              n(e.label),
              1
              /* TEXT */
            ),
            t("div", B, [
              t("div", I, [
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
                  default: h(() => [
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
