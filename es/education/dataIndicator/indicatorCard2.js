import { defineComponent as b, useCssVars as w, computed as r, openBlock as d, createElementBlock as u, normalizeClass as N, createElementVNode as a, createVNode as c, unref as s, withCtx as V, createTextVNode as g, toDisplayString as i, createCommentVNode as x, renderSlot as f } from "vue";
import { NNumberAnimation as y } from "naive-ui/es/number-animation";
import { bigNumber as n } from "lowcode-share/es/share";
import S from "./tooltip/index.js";
const $ = { class: "lc-indicator-card__wrapper" }, k = { class: "lc-indicator-card__wrapper--content" }, z = {
  key: 0,
  class: "lc-indicator-card__wrapper--tooltip"
}, B = { class: "lc-indicator-card__wrapper--result" }, E = ["title"], F = { class: "lc-indicator-card__wrapper--result--unit" }, _ = { class: "lc-indicator-card__wrapper--text" }, L = /* @__PURE__ */ b({
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
    w((t) => ({
      "6285fc34": h.value,
      "78b667ba": t.valueColor,
      "2f594e58": t.hintColor
    }));
    const l = {
      small: "small",
      medium: "medium",
      large: "large"
    }, m = r(() => e.fixed ? n(e.value, e.decimal).result : e.value), v = r(() => {
      const { unit: t } = n(e.value);
      return Number.isInteger(e.value) && !t ? 0 : e.decimal;
    }), p = {
      [l.small]: "22px 32px 0",
      [l.medium]: "22px 54px 0",
      [l.large]: "22px 116px 0"
    }, h = r(() => p[e.size]), C = r(() => e.fixed ? `${n(e.value, e.decimal).unit}${e.unit}` : e.unit);
    return (t, o) => (d(), u(
      "div",
      {
        class: N(["lc-indicator-card", {
          "lc-indicator-card--noborder": t.type === "noborder"
        }])
      },
      [
        a("div", $, [
          a("div", k, [
            t.tip ? (d(), u("div", z, [
              c(s(S), null, {
                default: V(() => [
                  g(
                    i(t.tip),
                    1
                    /* TEXT */
                  )
                ]),
                _: 1
                /* STABLE */
              })
            ])) : x("v-if", !0),
            a("div", B, [
              a("span", {
                class: "lc-indicator-card__wrapper--result--value",
                title: t.value.toString()
              }, [
                f(t.$slots, "value", {}, () => [
                  c(s(y), {
                    "show-separator": "",
                    from: 0,
                    to: m.value,
                    active: "",
                    precision: v.value
                  }, null, 8, ["to", "precision"])
                ], !0)
              ], 8, E),
              a(
                "span",
                F,
                i(C.value),
                1
                /* TEXT */
              )
            ]),
            a(
              "div",
              _,
              i(t.hint),
              1
              /* TEXT */
            )
          ]),
          f(t.$slots, "footer", {}, () => [
            o[0] || (o[0] = a(
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
