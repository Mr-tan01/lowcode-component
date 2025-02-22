import { defineComponent as v, mergeDefaults as h, useCssVars as y, computed as a, openBlock as r, createElementBlock as c, normalizeClass as g, createElementVNode as t, createVNode as n, unref as d, withCtx as N, createTextVNode as b, toDisplayString as l, createCommentVNode as o } from "vue";
import { NNumberAnimation as w } from "naive-ui/es/number-animation";
import { bigNumber as s } from "lowcode-share/es/share";
import V from "./tooltip/index.js";
const C = { class: "lc-indicator-card__wrapper" }, S = {
  key: 0,
  class: "lc-indicator-card__wrapper--tooltip"
}, _ = { class: "lc-indicator-card__wrapper--result" }, k = { class: "lc-indicator-card__wrapper--result--value" }, z = {
  key: 0,
  class: "lc-indicator-card__wrapper--result--unit"
}, B = { class: "lc-indicator-card__wrapper--text" }, L = /* @__PURE__ */ v({
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
    }
  }, {
    value: 0,
    hint: "",
    size: "small",
    fixed: !1,
    decimal: 0
  }),
  setup(e) {
    y((x) => ({
      "0644f8ba": p.value
    }));
    const i = {
      small: "small",
      medium: "medium",
      large: "large"
    }, u = a(() => e.fixed ? s(e.value, e.decimal).result : e.value), m = {
      [i.small]: "22px 32px 24px",
      [i.medium]: "22px 54px 24px",
      [i.large]: "22px 116px 24px"
    }, p = a(() => m[e.size]), f = a(() => {
      if (e.fixed)
        return s(e.value, e.decimal).unit;
    });
    return (x, E) => (r(), c(
      "div",
      {
        class: g(["lc-indicator-card", {
          "lc-indicator-card--noborder": e.type === "noborder"
        }])
      },
      [
        t("div", C, [
          e.tip ? (r(), c("div", S, [
            n(d(V), null, {
              default: N(() => [
                b(
                  l(e.tip),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            })
          ])) : o("v-if", !0),
          t("div", _, [
            t("span", k, [
              n(d(w), {
                "show-separator": "",
                from: 0,
                to: u.value,
                active: "",
                precision: e.decimal
              }, null, 8, ["to", "precision"])
            ]),
            e.fixed ? (r(), c(
              "span",
              z,
              l(f.value),
              1
              /* TEXT */
            )) : o("v-if", !0)
          ]),
          t(
            "div",
            B,
            l(e.hint),
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
  L as default
};
