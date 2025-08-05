import { defineComponent as b, mergeDefaults as h, computed as c, openBlock as a, createElementBlock as n, normalizeClass as w, createElementVNode as t, renderSlot as p, toDisplayString as r, createVNode as s, unref as o, createCommentVNode as l, createTextVNode as f, withCtx as g } from "vue";
import V from "./images/skew/icon/person.png.js";
import { bigNumber as u } from "lowcode-share/es/share";
import { NNumberAnimation as v } from "naive-ui/es/number-animation";
import N from "./tooltip/index.js";
const S = { class: "lc-skew-indicator__wrapper" }, C = { class: "lc-skew-indicator__wrapper__table--bg" }, x = { class: "lc-skew-indicator__wrapper__table--bg--icon" }, I = ["src"], B = { class: "lc-skew-indicator__wrapper__info" }, H = { class: "lc-skew-indicator__wrapper__info--label" }, L = { class: "lc-skew-indicator__wrapper__info--result" }, $ = { class: "lc-skew-indicator__wrapper__info--result--value" }, U = {
  key: 0,
  class: "lc-skew-indicator__wrapper__info--result--unit"
}, D = { class: "lc-skew-indicator__wrapper__info--result--year--label" }, E = { class: "lc-skew-indicator__wrapper__info--result--year--value" }, T = {
  key: 0,
  class: "lc-skew-indicator__wrapper__info--result--year--up"
}, z = {
  key: 2,
  class: "lc-skew-indicator__wrapper__info--result--altericon"
}, A = {
  key: 0,
  class: "lc-skew-indicator__wrapper__info--sub"
}, K = { class: "lc-skew-indicator__wrapper__info--sub-wrapper" }, j = { class: "lc-skew-indicator__wrapper__info--sub-content" }, q = {
  key: 0,
  class: "lc-skew-indicator__wrapper__info--sub-head"
}, P = /* @__PURE__ */ b({
  __name: "LargesKewIndicator",
  props: /* @__PURE__ */ h({
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
    },
    subHead: {
      type: String
    },
    subContent: {
      type: String
    },
    isShowIcon: {
      type: Boolean
    },
    notCheckInteger: {
      type: Boolean
    }
  }, {
    label: "",
    value: 0,
    unit: "",
    yearLabel: "同比去年",
    yearValue: 0,
    fixed: !0,
    decimal: 0,
    icon: V,
    __skip_icon: !0,
    tip: "",
    type: "skew",
    subHead: "",
    subContent: "",
    notCheckInteger: !1
  }),
  setup(e) {
    const m = c(() => {
      const { unit: i } = u(e.value);
      return Number.isInteger(e.value) && !i && !e.notCheckInteger ? 0 : e.decimal;
    }), y = c(() => {
      if (e.fixed) {
        const { result: i } = u(e.value, e.decimal);
        return i;
      }
      return e.value;
    }), d = c(() => {
      if (e.fixed) {
        const { unit: i } = u(e.value, e.decimal);
        return `${i}${e.unit}`;
      }
      return e.unit;
    }), k = c(() => e.yearValue > 0 ? "↑" : "↓");
    return (i, _) => (a(), n(
      "div",
      {
        class: w(["lc-skew-indicator", [`lc-skew-indicator--${e.type}`]])
      },
      [
        t("div", S, [
          t("div", C, [
            t("div", x, [
              p(i.$slots, "default", {}, () => [
                t("img", {
                  src: e.icon,
                  alt: ""
                }, null, 8, I)
              ], !0)
            ])
          ]),
          t("div", B, [
            t(
              "div",
              H,
              r(e.label),
              1
              /* TEXT */
            ),
            t("div", L, [
              t("div", $, [
                s(o(v), {
                  "show-separator": "",
                  from: 0,
                  to: y.value,
                  active: "",
                  precision: m.value
                }, null, 8, ["to", "precision"])
              ]),
              d.value ? (a(), n(
                "div",
                U,
                r(d.value),
                1
                /* TEXT */
              )) : l("v-if", !0),
              e.yearValue ? (a(), n(
                "div",
                {
                  key: 1,
                  class: w(["lc-skew-indicator__wrapper__info--result--year", {
                    down: e.yearValue < 0,
                    up: e.yearValue > 0
                  }])
                },
                [
                  t(
                    "div",
                    D,
                    r(e.yearLabel),
                    1
                    /* TEXT */
                  ),
                  t("div", E, [
                    s(o(v), {
                      "show-separator": "",
                      from: 0,
                      to: e.yearValue,
                      active: "",
                      precision: e.decimal
                    }, null, 8, ["to", "precision"]),
                    _[0] || (_[0] = f("% "))
                  ]),
                  e.yearValue ? (a(), n(
                    "div",
                    T,
                    r(k.value),
                    1
                    /* TEXT */
                  )) : l("v-if", !0)
                ],
                2
                /* CLASS */
              )) : l("v-if", !0),
              e.tip ? (a(), n("div", z, [
                s(o(N), null, {
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
              ])) : l("v-if", !0)
            ]),
            e.subHead ? (a(), n("div", A, [
              t("div", K, [
                t(
                  "div",
                  j,
                  r(e.subContent),
                  1
                  /* TEXT */
                ),
                e.subHead ? (a(), n(
                  "div",
                  q,
                  r(e.subHead),
                  1
                  /* TEXT */
                )) : l("v-if", !0)
              ])
            ])) : l("v-if", !0)
          ])
        ])
      ],
      2
      /* CLASS */
    ));
  }
});
export {
  P as default
};
