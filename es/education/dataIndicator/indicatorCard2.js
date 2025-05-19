import { defineComponent as h, mergeDefaults as y, useCssVars as g, computed as r, openBlock as a, createElementBlock as l, normalizeClass as C, createElementVNode as t, createVNode as d, unref as s, withCtx as w, createTextVNode as N, toDisplayString as o, createCommentVNode as u, renderSlot as S } from "vue";
import { NNumberAnimation as b } from "naive-ui/es/number-animation";
import { bigNumber as m } from "lowcode-share/es/share";
import V from "./tooltip/index.js";
const _ = { class: "lc-indicator-card__wrapper" }, k = { class: "lc-indicator-card__wrapper--content" }, z = {
  key: 0,
  class: "lc-indicator-card__wrapper--tooltip"
}, B = { class: "lc-indicator-card__wrapper--result" }, E = { class: "lc-indicator-card__wrapper--result--value" }, F = {
  key: 0,
  class: "lc-indicator-card__wrapper--result--unit"
}, D = { class: "lc-indicator-card__wrapper--text" }, P = /* @__PURE__ */ h({
  __name: "indicatorCard",
  props: /* @__PURE__ */ y({
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
    g((n) => ({
      "66cc50f0": v.value,
      "4a2e1c44": e.valueColor,
      "522deb0a": e.hintColor
    }));
    const i = {
      small: "small",
      medium: "medium",
      large: "large"
    }, f = r(() => e.fixed ? m(e.value, e.decimal).result : e.value), p = {
      [i.small]: "22px 32px 0",
      [i.medium]: "22px 54px 0",
      [i.large]: "22px 116px 0"
    }, v = r(() => p[e.size]), x = r(() => {
      if (e.fixed)
        return m(e.value, e.decimal).unit;
    });
    return (n, c) => (a(), l(
      "div",
      {
        class: C(["lc-indicator-card", {
          "lc-indicator-card--noborder": e.type === "noborder"
        }])
      },
      [
        t("div", _, [
          t("div", k, [
            e.tip ? (a(), l("div", z, [
              d(s(V), null, {
                default: w(() => [
                  N(
                    o(e.tip),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              })
            ])) : u("v-if", !0),
            t("div", B, [
              t("span", E, [
                d(s(b), {
                  "show-separator": "",
                  from: 0,
                  to: f.value,
                  active: "",
                  precision: e.decimal
                }, null, 8, ["to", "precision"])
              ]),
              e.fixed ? (a(), l(
                "span",
                F,
                o(x.value),
                1
                /* TEXT */
              )) : u("v-if", !0)
            ]),
            t(
              "div",
              D,
              o(e.hint),
              1
              /* TEXT */
            )
          ]),
          S(n.$slots, "footer", {}, () => [
            c[0] || (c[0] = t(
              "div",
              { class: "lc-indicator-card__footer" },
              null,
              -1
              /* HOISTED */
            ))
          ], !0)
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
