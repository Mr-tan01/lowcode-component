import { defineComponent as p, mergeDefaults as b, computed as a, openBlock as n, createElementBlock as l, normalizeClass as _, createElementVNode as t, renderSlot as h, toDisplayString as r, createVNode as c, unref as o, createCommentVNode as s, createTextVNode as f, withCtx as g } from "vue";
import V from "./images/skew/icon/person.png.js";
import { bigNumber as u } from "lowcode-share/es/share";
import { NNumberAnimation as w } from "naive-ui/es/number-animation";
import N from "./tooltip/index.js";
const x = { class: "lc-skew-indicator__wrapper" }, S = { class: "lc-skew-indicator__wrapper__table--bg" }, L = { class: "lc-skew-indicator__wrapper__table--bg--icon" }, C = ["src"], I = { class: "lc-skew-indicator__wrapper__info" }, $ = { class: "lc-skew-indicator__wrapper__info--label" }, B = { class: "lc-skew-indicator__wrapper__info--result" }, U = { class: "lc-skew-indicator__wrapper__info--result--value" }, D = {
  key: 0,
  class: "lc-skew-indicator__wrapper__info--result--unit"
}, E = { class: "lc-skew-indicator__wrapper__info--result--year--label" }, T = { class: "lc-skew-indicator__wrapper__info--result--year--value" }, z = {
  key: 0,
  class: "lc-skew-indicator__wrapper__info--result--year--up"
}, A = {
  key: 1,
  class: "lc-skew-indicator__wrapper__info--result--altericon"
}, H = /* @__PURE__ */ p({
  __name: "LargesKewIndicator",
  props: /* @__PURE__ */ b({
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
    icon: V,
    __skip_icon: !0,
    tip: "",
    type: "skew"
  }),
  setup(e) {
    const v = a(() => {
      const { unit: i } = u(e.value);
      return Number.isInteger(e.value) && !i ? 0 : e.decimal;
    }), y = a(() => {
      if (e.fixed) {
        const { result: i } = u(e.value, e.decimal);
        return i;
      }
      return e.value;
    }), d = a(() => {
      if (e.fixed) {
        const { unit: i } = u(e.value, e.decimal);
        return `${i}${e.unit}`;
      }
      return e.unit;
    }), k = a(() => e.yearValue > 0 ? "↑" : "↓");
    return (i, m) => (n(), l(
      "div",
      {
        class: _(["lc-skew-indicator", [`lc-skew-indicator--${e.type}`]])
      },
      [
        t("div", x, [
          t("div", S, [
            t("div", L, [
              h(i.$slots, "default", {}, () => [
                t("img", {
                  src: e.icon,
                  alt: ""
                }, null, 8, C)
              ], !0)
            ])
          ]),
          t("div", I, [
            t(
              "div",
              $,
              r(e.label),
              1
              /* TEXT */
            ),
            t("div", B, [
              t("div", U, [
                c(o(w), {
                  "show-separator": "",
                  from: 0,
                  to: y.value,
                  active: "",
                  precision: v.value
                }, null, 8, ["to", "precision"])
              ]),
              d.value ? (n(), l(
                "div",
                D,
                r(d.value),
                1
                /* TEXT */
              )) : s("v-if", !0),
              t(
                "div",
                {
                  class: _(["lc-skew-indicator__wrapper__info--result--year", {
                    down: e.yearValue < 0,
                    up: e.yearValue > 0
                  }])
                },
                [
                  t(
                    "div",
                    E,
                    r(e.yearLabel),
                    1
                    /* TEXT */
                  ),
                  t("div", T, [
                    c(o(w), {
                      "show-separator": "",
                      from: 0,
                      to: e.yearValue,
                      active: "",
                      precision: e.decimal
                    }, null, 8, ["to", "precision"]),
                    m[0] || (m[0] = f("% "))
                  ]),
                  e.yearValue ? (n(), l(
                    "div",
                    z,
                    r(k.value),
                    1
                    /* TEXT */
                  )) : s("v-if", !0)
                ],
                2
                /* CLASS */
              ),
              e.tip ? (n(), l("div", A, [
                c(o(N), null, {
                  default: g(() => [
                    f(
                      r(e.tip),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])) : s("v-if", !0)
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
