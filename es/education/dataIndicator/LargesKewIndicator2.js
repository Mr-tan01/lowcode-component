import { defineComponent as p, mergeDefaults as v, computed as d, openBlock as r, createElementBlock as a, normalizeClass as u, createElementVNode as t, renderSlot as k, toDisplayString as l, createVNode as n, unref as o, createCommentVNode as _, createTextVNode as w, withCtx as b } from "vue";
import h from "./images/skew/icon/person.png.js";
import { bigNumber as m } from "lowcode-share/es/share";
import { NNumberAnimation as f } from "naive-ui/es/number-animation";
import g from "./tooltip/index.js";
const N = { class: "lc-skew-indicator__wrapper" }, V = { class: "lc-skew-indicator__wrapper__table--bg" }, S = { class: "lc-skew-indicator__wrapper__table--bg--icon" }, x = ["src"], L = { class: "lc-skew-indicator__wrapper__info" }, C = { class: "lc-skew-indicator__wrapper__info--label" }, $ = { class: "lc-skew-indicator__wrapper__info--result" }, B = { class: "lc-skew-indicator__wrapper__info--result--value" }, D = {
  key: 0,
  class: "lc-skew-indicator__wrapper__info--result--unit"
}, E = { class: "lc-skew-indicator__wrapper__info--result--year--label" }, I = { class: "lc-skew-indicator__wrapper__info--result--year--value" }, T = {
  key: 0,
  class: "lc-skew-indicator__wrapper__info--result--year--up"
}, U = {
  key: 1,
  class: "lc-skew-indicator__wrapper__info--result--year--down"
}, z = {
  key: 1,
  class: "lc-skew-indicator__wrapper__info--result--altericon"
}, G = /* @__PURE__ */ p({
  __name: "LargesKewIndicator",
  props: /* @__PURE__ */ v({
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
    const y = d(() => {
      if (e.fixed) {
        const { result: i } = m(e.value, e.decimal);
        return i;
      }
      return e.value;
    }), c = d(() => {
      if (e.fixed) {
        const { unit: i } = m(e.value, e.decimal);
        return `${i}${e.unit}`;
      }
      return e.unit;
    });
    return (i, s) => (r(), a(
      "div",
      {
        class: u(["lc-skew-indicator", [`lc-skew-indicator--${e.type}`]])
      },
      [
        t("div", N, [
          t("div", V, [
            t("div", S, [
              k(i.$slots, "default", {}, () => [
                t("img", {
                  src: e.icon,
                  alt: ""
                }, null, 8, x)
              ], !0)
            ])
          ]),
          t("div", L, [
            t(
              "div",
              C,
              l(e.label),
              1
              /* TEXT */
            ),
            t("div", $, [
              t("div", B, [
                n(o(f), {
                  "show-separator": "",
                  from: 0,
                  to: y.value,
                  active: "",
                  precision: e.decimal
                }, null, 8, ["to", "precision"])
              ]),
              c.value ? (r(), a(
                "div",
                D,
                l(c.value),
                1
                /* TEXT */
              )) : _("v-if", !0),
              t(
                "div",
                {
                  class: u(["lc-skew-indicator__wrapper__info--result--year", {
                    down: e.yearValue < 0
                  }])
                },
                [
                  t(
                    "div",
                    E,
                    l(e.yearLabel),
                    1
                    /* TEXT */
                  ),
                  t("div", I, [
                    n(o(f), {
                      "show-separator": "",
                      from: 0,
                      to: e.yearValue,
                      active: "",
                      precision: e.decimal
                    }, null, 8, ["to", "precision"]),
                    s[0] || (s[0] = w("% "))
                  ]),
                  e.yearValue > 0 ? (r(), a("div", T, " ↑ ")) : (r(), a("div", U, " ↓ "))
                ],
                2
                /* CLASS */
              ),
              e.tip ? (r(), a("div", z, [
                n(o(g), null, {
                  default: b(() => [
                    w(
                      l(e.tip),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])) : _("v-if", !0)
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
  G as default
};
