import { defineComponent as f, mergeDefaults as v, computed as n, openBlock as r, createElementBlock as c, normalizeClass as w, createElementVNode as t, renderSlot as k, toDisplayString as l, createVNode as s, unref as u, createCommentVNode as d, withCtx as p, createTextVNode as b } from "vue";
import y from "./images/skew/icon/person.png.js";
import { bigNumber as a } from "lowcode-share/es/share";
import { NNumberAnimation as g } from "naive-ui/es/number-animation";
import h from "./tooltip/index.js";
const N = { class: "lc-skew-indicator__wrapper" }, S = { class: "lc-skew-indicator__wrapper__table--bg" }, x = { class: "lc-skew-indicator__wrapper__table--bg--icon" }, V = ["src"], C = { class: "lc-skew-indicator__wrapper__info" }, $ = { class: "lc-skew-indicator__wrapper__info--label" }, B = { class: "lc-skew-indicator__wrapper__info--result" }, I = ["title"], U = {
  key: 0,
  class: "lc-skew-indicator__wrapper__info--result--unit"
}, D = {
  key: 1,
  class: "lc-skew-indicator__wrapper__info--result--altericon"
}, q = /* @__PURE__ */ f({
  __name: "skewIndicator",
  props: /* @__PURE__ */ v({
    label: {
      type: String
    },
    value: {
      type: Number
    },
    unit: {
      type: String
    },
    fixed: {
      type: Boolean
    },
    decimal: {
      type: Number
    },
    icon: {
      type: String
    },
    tip: {
      type: String
    },
    type: {
      type: String
    }
  }, {
    label: "",
    value: 0,
    fixed: !0,
    decimal: 0,
    icon: y,
    __skip_icon: !0,
    tip: "",
    type: "skew"
  }),
  setup(e) {
    const m = n(() => {
      const { unit: i } = a(e.value);
      return Number.isInteger(e.value) && !i ? 0 : e.decimal;
    }), _ = n(() => {
      if (e.fixed) {
        const { result: i } = a(e.value, e.decimal);
        return i;
      }
      return e.value;
    }), o = n(() => {
      if (e.fixed) {
        const { unit: i } = a(e.value, e.decimal);
        return `${i}${e.unit}`;
      }
      return e.unit;
    });
    return (i, E) => (r(), c(
      "div",
      {
        class: w(["lc-skew-indicator", [`lc-skew-indicator--${e.type}`]])
      },
      [
        t("div", N, [
          t("div", S, [
            t("div", x, [
              k(i.$slots, "icon", {}, () => [
                t("img", {
                  src: e.icon,
                  alt: ""
                }, null, 8, V)
              ], !0)
            ])
          ]),
          t("div", C, [
            t(
              "div",
              $,
              l(e.label),
              1
              /* TEXT */
            ),
            t("div", B, [
              t("div", {
                class: "lc-skew-indicator__wrapper__info--result--value",
                title: e.value.toString()
              }, [
                s(u(g), {
                  "show-separator": "",
                  from: 0,
                  to: _.value,
                  active: "",
                  precision: m.value
                }, null, 8, ["to", "precision"])
              ], 8, I),
              o.value ? (r(), c(
                "div",
                U,
                l(o.value),
                1
                /* TEXT */
              )) : d("v-if", !0),
              e.tip ? (r(), c("div", D, [
                s(u(h), null, {
                  default: p(() => [
                    b(
                      l(e.tip),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])) : d("v-if", !0)
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
