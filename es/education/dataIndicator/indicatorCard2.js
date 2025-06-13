import { defineComponent as h, mergeDefaults as y, useCssVars as C, computed as r, openBlock as l, createElementBlock as n, normalizeClass as N, createElementVNode as t, createVNode as s, unref as u, withCtx as S, createTextVNode as b, toDisplayString as o, createCommentVNode as m, renderSlot as w } from "vue";
import { NNumberAnimation as V } from "naive-ui/es/number-animation";
import { bigNumber as c } from "lowcode-share/es/share";
import k from "./tooltip/index.js";
const z = { class: "lc-indicator-card__wrapper" }, B = { class: "lc-indicator-card__wrapper--content" }, E = {
  key: 0,
  class: "lc-indicator-card__wrapper--tooltip"
}, F = { class: "lc-indicator-card__wrapper--result" }, D = ["title"], I = {
  key: 0,
  class: "lc-indicator-card__wrapper--result--unit"
}, T = { class: "lc-indicator-card__wrapper--text" }, Z = /* @__PURE__ */ h({
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
    C((i) => ({
      "4e9db765": x.value,
      f9808d0e: e.valueColor,
      64895335: e.hintColor
    }));
    const a = {
      small: "small",
      medium: "medium",
      large: "large"
    }, f = r(() => e.fixed ? c(e.value, e.decimal).result : e.value), v = r(() => {
      const { unit: i } = c(e.value);
      return Number.isInteger(e.value) && !i ? 0 : e.decimal;
    }), p = {
      [a.small]: "22px 32px 0",
      [a.medium]: "22px 54px 0",
      [a.large]: "22px 116px 0"
    }, x = r(() => p[e.size]), g = r(() => {
      if (e.fixed)
        return c(e.value, e.decimal).unit;
    });
    return (i, d) => (l(), n(
      "div",
      {
        class: N(["lc-indicator-card", {
          "lc-indicator-card--noborder": e.type === "noborder"
        }])
      },
      [
        t("div", z, [
          t("div", B, [
            e.tip ? (l(), n("div", E, [
              s(u(k), null, {
                default: S(() => [
                  b(
                    o(e.tip),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              })
            ])) : m("v-if", !0),
            t("div", F, [
              t("span", {
                class: "lc-indicator-card__wrapper--result--value",
                title: e.value.toString()
              }, [
                s(u(V), {
                  "show-separator": "",
                  from: 0,
                  to: f.value,
                  active: "",
                  precision: v.value
                }, null, 8, ["to", "precision"])
              ], 8, D),
              e.fixed ? (l(), n(
                "span",
                I,
                o(g.value),
                1
                /* TEXT */
              )) : m("v-if", !0)
            ]),
            t(
              "div",
              T,
              o(e.hint),
              1
              /* TEXT */
            )
          ]),
          w(i.$slots, "footer", {}, () => [
            d[0] || (d[0] = t(
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
  Z as default
};
