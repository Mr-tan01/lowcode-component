import { defineComponent as x, mergeDefaults as h, useCssVars as y, computed as a, openBlock as r, createElementBlock as l, normalizeClass as g, createElementVNode as t, createVNode as n, unref as o, withCtx as C, createTextVNode as b, toDisplayString as c, createCommentVNode as d } from "vue";
import { NNumberAnimation as N } from "naive-ui/es/number-animation";
import { bigNumber as s } from "lowcode-share/es/share";
import w from "./tooltip/index.js";
const S = { class: "lc-indicator-card__wrapper" }, V = {
  key: 0,
  class: "lc-indicator-card__wrapper--tooltip"
}, k = { class: "lc-indicator-card__wrapper--result" }, z = { class: "lc-indicator-card__wrapper--result--value" }, B = {
  key: 0,
  class: "lc-indicator-card__wrapper--result--unit"
}, E = { class: "lc-indicator-card__wrapper--text" }, I = /* @__PURE__ */ x({
  __name: "indicatorCard",
  props: /* @__PURE__ */ h({
    value: {
      type: Number
    },
    hint: {
      type: String
    },
    size: {
      type: String
    },
    fixed: {
      type: Boolean
    },
    decimal: {
      type: Number
    },
    type: {
      type: String
    },
    tip: {
      type: String
    },
    valueColor: {
      type: String
    },
    hintColor: {
      type: String
    }
  }, {
    value: 0,
    hint: "",
    size: "small",
    fixed: !1,
    decimal: 0,
    valueColor: "#ffffff",
    hintColor: "#F2F3F4"
  }),
  setup(e) {
    y((v) => ({
      "1e863b00": f.value,
      "09d47b58": e.valueColor,
      dc9d7a0c: e.hintColor
    }));
    const i = {
      small: "small",
      medium: "medium",
      large: "large"
    }, u = a(() => e.fixed ? s(e.value, e.decimal).result : e.value), m = {
      [i.small]: "22px 32px 24px",
      [i.medium]: "22px 54px 24px",
      [i.large]: "22px 116px 24px"
    }, f = a(() => m[e.size]), p = a(() => {
      if (e.fixed)
        return s(e.value, e.decimal).unit;
    });
    return (v, F) => (r(), l(
      "div",
      {
        class: g(["lc-indicator-card", {
          "lc-indicator-card--noborder": e.type === "noborder"
        }])
      },
      [
        t("div", S, [
          e.tip ? (r(), l("div", V, [
            n(o(w), null, {
              default: C(() => [
                b(
                  c(e.tip),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            })
          ])) : d("v-if", !0),
          t("div", k, [
            t("span", z, [
              n(o(N), {
                "show-separator": "",
                from: 0,
                to: u.value,
                active: "",
                precision: e.decimal
              }, null, 8, ["to", "precision"])
            ]),
            e.fixed ? (r(), l(
              "span",
              B,
              c(p.value),
              1
              /* TEXT */
            )) : d("v-if", !0)
          ]),
          t(
            "div",
            E,
            c(e.hint),
            1
            /* TEXT */
          )
        ])
      ],
      2
      /* CLASS */
    ));
  }
});
export {
  I as default
};
