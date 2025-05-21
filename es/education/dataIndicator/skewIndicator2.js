import { defineComponent as _, mergeDefaults as f, computed as l, openBlock as n, createElementBlock as r, normalizeClass as w, createElementVNode as t, renderSlot as v, toDisplayString as c, createVNode as a, unref as s, createCommentVNode as d, withCtx as p, createTextVNode as k } from "vue";
import y from "./images/skew/icon/person.png.js";
import { bigNumber as u } from "lowcode-share/es/share";
import { NNumberAnimation as b } from "naive-ui/es/number-animation";
import h from "./tooltip/index.js";
const g = { class: "lc-skew-indicator__wrapper" }, N = { class: "lc-skew-indicator__wrapper__table--bg" }, S = { class: "lc-skew-indicator__wrapper__table--bg--icon" }, x = ["src"], V = { class: "lc-skew-indicator__wrapper__info" }, C = { class: "lc-skew-indicator__wrapper__info--label" }, $ = { class: "lc-skew-indicator__wrapper__info--result" }, B = ["title"], D = {
  key: 0,
  class: "lc-skew-indicator__wrapper__info--result--unit"
}, E = {
  key: 1,
  class: "lc-skew-indicator__wrapper__info--result--altericon"
}, j = /* @__PURE__ */ _({
  __name: "skewIndicator",
  props: /* @__PURE__ */ f({
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
    const m = l(() => {
      if (e.fixed) {
        const { result: i } = u(e.value, e.decimal);
        return i;
      }
      return e.value;
    }), o = l(() => {
      if (e.fixed) {
        const { unit: i } = u(e.value, e.decimal);
        return `${i}${e.unit}`;
      }
      return e.unit;
    });
    return (i, I) => (n(), r(
      "div",
      {
        class: w(["lc-skew-indicator", [`lc-skew-indicator--${e.type}`]])
      },
      [
        t("div", g, [
          t("div", N, [
            t("div", S, [
              v(i.$slots, "icon", {}, () => [
                t("img", {
                  src: e.icon,
                  alt: ""
                }, null, 8, x)
              ], !0)
            ])
          ]),
          t("div", V, [
            t(
              "div",
              C,
              c(e.label),
              1
              /* TEXT */
            ),
            t("div", $, [
              t("div", {
                class: "lc-skew-indicator__wrapper__info--result--value",
                title: e.value.toString()
              }, [
                a(s(b), {
                  "show-separator": "",
                  from: 0,
                  to: m.value,
                  active: "",
                  precision: e.decimal
                }, null, 8, ["to", "precision"])
              ], 8, B),
              o.value ? (n(), r(
                "div",
                D,
                c(o.value),
                1
                /* TEXT */
              )) : d("v-if", !0),
              e.tip ? (n(), r("div", E, [
                a(s(h), null, {
                  default: p(() => [
                    k(
                      c(e.tip),
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
  j as default
};
