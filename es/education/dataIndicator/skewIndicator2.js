import { defineComponent as _, computed as n, openBlock as a, createElementBlock as l, normalizeClass as v, createElementVNode as i, renderSlot as w, toDisplayString as r, createVNode as s, unref as d, createCommentVNode as u, withCtx as k, createTextVNode as p } from "vue";
import h from "./images/skew/icon/person.png.js";
import { bigNumber as o } from "lowcode-share/es/share";
import { NNumberAnimation as b } from "naive-ui/es/number-animation";
import g from "./tooltip/index.js";
const N = { class: "lc-skew-indicator__wrapper" }, y = { class: "lc-skew-indicator__wrapper__table--bg" }, C = { class: "lc-skew-indicator__wrapper__table--bg--icon" }, I = ["src"], V = { class: "lc-skew-indicator__wrapper__info" }, B = { class: "lc-skew-indicator__wrapper__info--label" }, $ = { class: "lc-skew-indicator__wrapper__info--result" }, S = ["title"], U = {
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
    type: { default: "skew" },
    notCheckInteger: { type: Boolean, default: !1 }
  },
  setup(e) {
    const f = n(() => {
      const { unit: t } = o(e.value);
      return Number.isInteger(e.value) && !t && !e.notCheckInteger ? 0 : e.decimal;
    }), m = n(() => {
      if (e.fixed) {
        const { result: t } = o(e.value, e.decimal);
        return t;
      }
      return e.value;
    }), c = n(() => {
      if (e.fixed) {
        const { unit: t } = o(e.value, e.decimal);
        return `${t}${e.unit}`;
      }
      return e.unit;
    });
    return (t, T) => (a(), l(
      "div",
      {
        class: v(["lc-skew-indicator", [`lc-skew-indicator--${t.type}`]])
      },
      [
        i("div", N, [
          i("div", y, [
            i("div", C, [
              w(t.$slots, "icon", {}, () => [
                i("img", {
                  src: t.icon,
                  alt: ""
                }, null, 8, I)
              ], !0)
            ])
          ]),
          i("div", V, [
            i(
              "div",
              B,
              r(t.label),
              1
              /* TEXT */
            ),
            i("div", $, [
              i("div", {
                class: "lc-skew-indicator__wrapper__info--result--value",
                title: t.value.toString()
              }, [
                s(d(b), {
                  "show-separator": "",
                  from: 0,
                  to: m.value,
                  active: "",
                  precision: f.value
                }, null, 8, ["to", "precision"])
              ], 8, S),
              c.value ? (a(), l(
                "div",
                U,
                r(c.value),
                1
                /* TEXT */
              )) : u("v-if", !0),
              t.tip ? (a(), l("div", E, [
                s(d(g), null, {
                  default: k(() => [
                    p(
                      r(t.tip),
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
