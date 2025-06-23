import { defineComponent as y, mergeDefaults as b, useCssVars as C, computed as r, openBlock as l, createElementBlock as n, normalizeClass as N, createElementVNode as t, createVNode as s, unref as u, withCtx as S, createTextVNode as w, toDisplayString as o, createCommentVNode as m, renderSlot as f } from "vue";
import { NNumberAnimation as V } from "naive-ui/es/number-animation";
import { bigNumber as c } from "lowcode-share/es/share";
import k from "./tooltip/index.js";
const z = { class: "lc-indicator-card__wrapper" }, B = { class: "lc-indicator-card__wrapper--content" }, E = {
  key: 0,
  class: "lc-indicator-card__wrapper--tooltip"
}, F = { class: "lc-indicator-card__wrapper--result" }, D = ["title"], I = {
  key: 0,
  class: "lc-indicator-card__wrapper--result--unit"
}, T = { class: "lc-indicator-card__wrapper--text" }, U = /* @__PURE__ */ y({
  __name: "indicatorCard",
  props: /* @__PURE__ */ b({
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
      c6bbba0a: g.value,
      "61d7978f": e.valueColor,
      "51db4b42": e.hintColor
    }));
    const a = {
      small: "small",
      medium: "medium",
      large: "large"
    }, v = r(() => e.fixed ? c(e.value, e.decimal).result : e.value), p = r(() => {
      const { unit: i } = c(e.value);
      return Number.isInteger(e.value) && !i ? 0 : e.decimal;
    }), x = {
      [a.small]: "22px 32px 0",
      [a.medium]: "22px 54px 0",
      [a.large]: "22px 116px 0"
    }, g = r(() => x[e.size]), h = r(() => {
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
                  w(
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
                f(i.$slots, "value", {}, () => [
                  s(u(V), {
                    "show-separator": "",
                    from: 0,
                    to: v.value,
                    active: "",
                    precision: p.value
                  }, null, 8, ["to", "precision"])
                ], !0)
              ], 8, D),
              e.fixed ? (l(), n(
                "span",
                I,
                o(h.value),
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
          f(i.$slots, "footer", {}, () => [
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
  U as default
};
