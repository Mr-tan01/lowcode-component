import { defineComponent as p, mergeDefaults as f, computed as l, openBlock as r, createElementBlock as n, normalizeClass as w, createElementVNode as t, renderSlot as v, unref as c, toDisplayString as o, createVNode as s, createCommentVNode as d, withCtx as k, createTextVNode as h } from "vue";
import u from "./images/skew/icon/person.png.js";
import { bigNumber as _ } from "lowcode-share/es/share";
import { NNumberAnimation as y } from "naive-ui/es/number-animation";
import b from "./tooltip/index.js";
const g = { class: "lc-skew-indicator__wrapper" }, N = { class: "lc-skew-indicator__wrapper__table--bg" }, x = { class: "lc-skew-indicator__wrapper__table--bg--icon" }, S = ["src"], V = { class: "lc-skew-indicator__wrapper__info" }, C = { class: "lc-skew-indicator__wrapper__info--label" }, $ = { class: "lc-skew-indicator__wrapper__info--result" }, B = { class: "lc-skew-indicator__wrapper__info--result--value" }, D = {
  key: 0,
  class: "lc-skew-indicator__wrapper__info--result--unit"
}, E = {
  key: 1,
  class: "lc-skew-indicator__wrapper__info--result--altericon"
}, j = /* @__PURE__ */ p({
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
    icon: u,
    __skip_icon: !0,
    tip: "",
    type: "skew"
  }),
  setup(e) {
    const m = l(() => {
      if (e.fixed) {
        const { result: i } = _(e.value, e.decimal);
        return i;
      }
      return e.value;
    }), a = l(() => {
      if (e.fixed) {
        const { unit: i } = _(e.value, e.decimal);
        return `${i}${e.unit}`;
      }
      return e.unit;
    });
    return (i, I) => (r(), n(
      "div",
      {
        class: w(["lc-skew-indicator", [`lc-skew-indicator--${e.type}`]])
      },
      [
        t("div", g, [
          t("div", N, [
            t("div", x, [
              v(i.$slots, "helper", {}, () => [
                t("img", {
                  src: c(u),
                  alt: ""
                }, null, 8, S)
              ], !0)
            ])
          ]),
          t("div", V, [
            t(
              "div",
              C,
              o(e.label),
              1
              /* TEXT */
            ),
            t("div", $, [
              t("div", B, [
                s(c(y), {
                  "show-separator": "",
                  from: 0,
                  to: m.value,
                  active: "",
                  precision: e.decimal
                }, null, 8, ["to", "precision"])
              ]),
              a.value ? (r(), n(
                "div",
                D,
                o(a.value),
                1
                /* TEXT */
              )) : d("v-if", !0),
              e.tip ? (r(), n("div", E, [
                s(c(b), null, {
                  default: k(() => [
                    h(
                      o(e.tip),
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
