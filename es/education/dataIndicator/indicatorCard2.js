import { defineComponent as b, useCssVars as g, computed as l, openBlock as u, createElementBlock as c, normalizeClass as w, createElementVNode as a, renderSlot as i, createVNode as s, unref as f, withCtx as N, createTextVNode as V, toDisplayString as o, createCommentVNode as y } from "vue";
import { NNumberAnimation as k } from "naive-ui/es/number-animation";
import { bigNumber as n } from "lowcode-share/es/share";
import x from "./tooltip/index.js";
const $ = { class: "lc-indicator-card__wrapper" }, B = { class: "lc-indicator-card__wrapper--content" }, I = {
  key: 0,
  class: "lc-indicator-card__wrapper--tooltip"
}, S = { class: "lc-indicator-card__wrapper--result" }, z = ["title"], E = { class: "lc-indicator-card__wrapper--result--unit" }, F = { class: "lc-indicator-card__wrapper--text" }, P = /* @__PURE__ */ b({
  __name: "indicatorCard",
  props: {
    value: { default: 0 },
    hint: { default: "" },
    unit: { default: "" },
    size: { default: "small" },
    fixed: { type: Boolean, default: !1 },
    decimal: { default: 0 },
    type: { default: "border" },
    tip: { default: "" },
    valueColor: { default: "#ffffff" },
    hintColor: { default: "#F2F3F4" },
    notCheckInteger: { type: Boolean, default: !1 }
  },
  setup(e) {
    g((t) => ({
      "050f4b83": h.value,
      "639cbe17": t.valueColor,
      "7c4a42d7": t.hintColor
    }));
    const r = {
      small: "small",
      medium: "medium",
      large: "large"
    }, m = l(() => e.fixed ? n(e.value, e.decimal).result : e.value), v = l(() => {
      const { unit: t } = n(e.value);
      return Number.isInteger(e.value) && !t && !e.notCheckInteger ? 0 : e.decimal;
    }), p = {
      [r.small]: "22px 32px 0",
      [r.medium]: "22px 54px 0",
      [r.large]: "22px 116px 0"
    }, h = l(() => p[e.size]), C = l(() => e.fixed ? `${n(e.value, e.decimal).unit}${e.unit}` : e.unit);
    return (t, d) => (u(), c(
      "div",
      {
        class: w(["lc-indicator-card", {
          "lc-indicator-card--noborder": t.type === "noborder"
        }])
      },
      [
        a("div", $, [
          a("div", B, [
            t.tip ? (u(), c("div", I, [
              i(t.$slots, "tooltip", {}, () => [
                s(f(x), null, {
                  default: N(() => [
                    V(
                      o(t.tip),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })
              ], !0)
            ])) : y("v-if", !0),
            a("div", S, [
              a("span", {
                class: "lc-indicator-card__wrapper--result--value",
                title: t.value.toString()
              }, [
                i(t.$slots, "value", {}, () => [
                  s(f(k), {
                    "show-separator": "",
                    from: 0,
                    to: m.value,
                    active: "",
                    precision: v.value
                  }, null, 8, ["to", "precision"])
                ], !0)
              ], 8, z),
              a(
                "span",
                E,
                o(C.value),
                1
                /* TEXT */
              )
            ]),
            a(
              "div",
              F,
              o(t.hint),
              1
              /* TEXT */
            )
          ]),
          i(t.$slots, "footer", {}, () => [
            d[0] || (d[0] = a(
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
