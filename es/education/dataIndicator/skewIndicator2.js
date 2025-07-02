import { defineComponent as _, computed as n, openBlock as r, createElementBlock as a, normalizeClass as v, createElementVNode as i, renderSlot as w, toDisplayString as l, createVNode as s, unref as d, createCommentVNode as u, withCtx as p, createTextVNode as k } from "vue";
import h from "./images/skew/icon/person.png.js";
import { bigNumber as o } from "lowcode-share/es/share";
import { NNumberAnimation as b } from "naive-ui/es/number-animation";
import N from "./tooltip/index.js";
const g = { class: "lc-skew-indicator__wrapper" }, y = { class: "lc-skew-indicator__wrapper__table--bg" }, V = { class: "lc-skew-indicator__wrapper__table--bg--icon" }, C = ["src"], $ = { class: "lc-skew-indicator__wrapper__info" }, B = { class: "lc-skew-indicator__wrapper__info--label" }, I = { class: "lc-skew-indicator__wrapper__info--result" }, S = ["title"], U = {
  key: 0,
  class: "lc-skew-indicator__wrapper__info--result--unit"
}, E = {
  key: 1,
  class: "lc-skew-indicator__wrapper__info--result--altericon"
}, q = /* @__PURE__ */ _({
  __name: "skewIndicator",
  props: {
    label: { default: "" },
    value: { default: 0 },
    unit: {},
    fixed: { type: Boolean, default: !0 },
    decimal: { default: 0 },
    icon: { default: () => h },
    tip: { default: "" },
    type: { default: "skew" }
  },
  setup(t) {
    const f = n(() => {
      const { unit: e } = o(t.value);
      return Number.isInteger(t.value) && !e ? 0 : t.decimal;
    }), m = n(() => {
      if (t.fixed) {
        const { result: e } = o(t.value, t.decimal);
        return e;
      }
      return t.value;
    }), c = n(() => {
      if (t.fixed) {
        const { unit: e } = o(t.value, t.decimal);
        return `${e}${t.unit}`;
      }
      return t.unit;
    });
    return (e, T) => (r(), a(
      "div",
      {
        class: v(["lc-skew-indicator", [`lc-skew-indicator--${e.type}`]])
      },
      [
        i("div", g, [
          i("div", y, [
            i("div", V, [
              w(e.$slots, "icon", {}, () => [
                i("img", {
                  src: e.icon,
                  alt: ""
                }, null, 8, C)
              ], !0)
            ])
          ]),
          i("div", $, [
            i(
              "div",
              B,
              l(e.label),
              1
              /* TEXT */
            ),
            i("div", I, [
              i("div", {
                class: "lc-skew-indicator__wrapper__info--result--value",
                title: e.value.toString()
              }, [
                s(d(b), {
                  "show-separator": "",
                  from: 0,
                  to: m.value,
                  active: "",
                  precision: f.value
                }, null, 8, ["to", "precision"])
              ], 8, S),
              c.value ? (r(), a(
                "div",
                U,
                l(c.value),
                1
                /* TEXT */
              )) : u("v-if", !0),
              e.tip ? (r(), a("div", E, [
                s(d(N), null, {
                  default: p(() => [
                    k(
                      l(e.tip),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])) : u("v-if", !0)
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
  q as default
};
