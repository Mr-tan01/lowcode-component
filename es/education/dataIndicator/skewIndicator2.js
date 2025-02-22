import { defineComponent as m, mergeDefaults as f, computed as a, openBlock as n, createElementBlock as r, normalizeClass as p, createElementVNode as t, renderSlot as w, toDisplayString as c, createVNode as l, unref as s, createCommentVNode as d, withCtx as v, createTextVNode as k } from "vue";
import y from "./images/skew/icon/person.png.js";
import { bigNumber as u } from "lowcode-share/es/share";
import { NNumberAnimation as b } from "naive-ui/es/number-animation";
import h from "./tooltip/index.js";
const g = { class: "lc-skew-indicator__wrapper" }, N = { class: "lc-skew-indicator__wrapper__table--bg" }, x = { class: "lc-skew-indicator__wrapper__table--bg--icon" }, S = ["src"], V = { class: "lc-skew-indicator__wrapper__info" }, C = { class: "lc-skew-indicator__wrapper__info--label" }, $ = { class: "lc-skew-indicator__wrapper__info--result" }, B = { class: "lc-skew-indicator__wrapper__info--result--value" }, D = {
  key: 0,
  class: "lc-skew-indicator__wrapper__info--result--unit"
}, E = {
  key: 1,
  class: "lc-skew-indicator__wrapper__info--result--altericon"
}, j = /* @__PURE__ */ m({
  __name: "skewIndicator",
  props: /* @__PURE__ */ f({
    label: {
      type: String
    },
    value: {
      type: Number
    },
    unit: {
      type: String
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
    fixed: !0,
    decimal: 0,
    icon: y,
    __skip_icon: !0,
    tip: "",
    type: "skew"
  }),
  setup(e) {
    const _ = a(() => {
      if (e.fixed) {
        const { result: i } = u(e.value, e.decimal);
        return i;
      }
      return e.value;
    }), o = a(() => {
      if (e.fixed) {
        const { unit: i } = u(e.value, e.decimal);
        return `${i}${e.unit}`;
      }
      return e.unit;
    });
    return (i, I) => (n(), r(
      "div",
      {
        class: p(["lc-skew-indicator", [`lc-skew-indicator--${e.type}`]])
      },
      [
        t("div", g, [
          t("div", N, [
            t("div", x, [
              w(i.$slots, "default", {}, () => [
                t("img", {
                  src: e.icon,
                  alt: ""
                }, null, 8, S)
              ], !0)
            ])
          ]),
          t("div", V, [
            t(
              "div",
              C,
              c(e.label),
              1
              /* TEXT */
            ),
            t("div", $, [
              t("div", B, [
                l(s(b), {
                  "show-separator": "",
                  from: 0,
                  to: _.value,
                  active: "",
                  precision: e.decimal
                }, null, 8, ["to", "precision"])
              ]),
              o.value ? (n(), r(
                "div",
                D,
                c(o.value),
                1
                /* TEXT */
              )) : d("v-if", !0),
              e.tip ? (n(), r("div", E, [
                l(s(h), null, {
                  default: v(() => [
                    k(
                      c(e.tip),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])) : d("v-if", !0)
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
  j as default
};
