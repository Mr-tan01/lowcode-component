import { defineComponent as u, mergeDefaults as d, computed as i, openBlock as m, createElementBlock as v, createElementVNode as n, createVNode as r, unref as a, toDisplayString as o, renderSlot as f } from "vue";
import _ from "./icon/index.js";
import { NNumberAnimation as b } from "naive-ui/es/number-animation";
import { bigNumber as c } from "lowcode-share/es/share";
const h = { class: "lc-arrow-indicators" }, w = { class: "lc-arrow-indicators__icon" }, y = { class: "lc-arrow-indicators__center" }, N = { class: "lc-arrow-indicators__center__lable" }, g = { class: "lc-arrow-indicators__center__value" }, x = { class: "lc-arrow-indicators__center__value__unit" }, D = /* @__PURE__ */ u({
  __name: "arrowIndicators",
  props: /* @__PURE__ */ d({
    label: {
      type: String
    },
    value: {
      type: Number
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
    unit: {
      type: String
    }
  }, {
    label: "",
    value: 0,
    fixed: !0,
    decimal: 0,
    icon: "person2",
    unit: ""
  }),
  setup(e) {
    const l = i(() => {
      if (e.fixed) {
        const { result: t } = c(e.value, e.decimal);
        return t;
      }
      return e.value;
    }), s = i(() => {
      if (e.fixed) {
        const { unit: t } = c(e.value, e.decimal);
        return `${t}${e.unit}`;
      }
      return e.unit;
    });
    return (t, S) => (m(), v("div", h, [
      n("div", w, [
        r(a(_), {
          domain: "event",
          name: e.icon,
          size: 70
        }, null, 8, ["name"])
      ]),
      n("div", y, [
        n(
          "div",
          N,
          o(e.label),
          1
          /* TEXT */
        ),
        n("div", g, [
          f(t.$slots, "value", {}, () => [
            r(a(b), {
              "show-separator": "",
              from: 0,
              to: l.value,
              active: "",
              precision: e.decimal
            }, null, 8, ["to", "precision"]),
            n(
              "span",
              x,
              o(s.value),
              1
              /* TEXT */
            )
          ], !0)
        ])
      ])
    ]));
  }
});
export {
  D as default
};
