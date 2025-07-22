import { defineComponent as w, useCssVars as b, computed as r, openBlock as u, createElementBlock as c, normalizeClass as N, createElementVNode as a, renderSlot as i, createVNode as s, unref as m, withCtx as V, createTextVNode as g, toDisplayString as o, createCommentVNode as x } from "vue";
import { NNumberAnimation as y } from "naive-ui/es/number-animation";
import { bigNumber as n } from "lowcode-share/es/share";
import $ from "./tooltip/index.js";
const S = { class: "lc-indicator-card__wrapper" }, k = { class: "lc-indicator-card__wrapper--content" }, z = {
  key: 0,
  class: "lc-indicator-card__wrapper--tooltip"
}, B = { class: "lc-indicator-card__wrapper--result" }, E = ["title"], F = { class: "lc-indicator-card__wrapper--result--unit" }, I = { class: "lc-indicator-card__wrapper--text" }, L = /* @__PURE__ */ w({
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
    hintColor: { default: "#F2F3F4" }
  },
  setup(e) {
    b((t) => ({
      af9eadb8: h.value,
      78459110: t.valueColor,
      "3d549956": t.hintColor
    }));
    const l = {
      small: "small",
      medium: "medium",
      large: "large"
    }, f = r(() => e.fixed ? n(e.value, e.decimal).result : e.value), v = r(() => {
      const { unit: t } = n(e.value);
      return Number.isInteger(e.value) && !t ? 0 : e.decimal;
    }), p = {
      [l.small]: "22px 32px 0",
      [l.medium]: "22px 54px 0",
      [l.large]: "22px 116px 0"
    }, h = r(() => p[e.size]), C = r(() => e.fixed ? `${n(e.value, e.decimal).unit}${e.unit}` : e.unit);
    return (t, d) => (u(), c(
      "div",
      {
        class: N(["lc-indicator-card", {
          "lc-indicator-card--noborder": t.type === "noborder"
        }])
      },
      [
        a("div", S, [
          a("div", k, [
            t.tip ? (u(), c("div", z, [
              i(t.$slots, "tooltip", {}, () => [
                s(m($), null, {
                  default: V(() => [
                    g(
                      o(t.tip),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })
              ], !0)
            ])) : x("v-if", !0),
            a("div", B, [
              a("span", {
                class: "lc-indicator-card__wrapper--result--value",
                title: t.value.toString()
              }, [
                i(t.$slots, "value", {}, () => [
                  s(m(y), {
                    "show-separator": "",
                    from: 0,
                    to: f.value,
                    active: "",
                    precision: v.value
                  }, null, 8, ["to", "precision"])
                ], !0)
              ], 8, E),
              a(
                "span",
                F,
                o(C.value),
                1
                /* TEXT */
              )
            ]),
            a(
              "div",
              I,
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
  L as default
};
