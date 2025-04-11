import { defineComponent as u, mergeDefaults as d, computed as i, openBlock as r, createElementBlock as s, createElementVNode as n, createVNode as m, unref as a, toDisplayString as c, createBlock as f, createCommentVNode as v, renderSlot as b } from "vue";
import _ from "./icon/index.js";
import { NNumberAnimation as h } from "naive-ui/es/number-animation";
import { bigNumber as o } from "lowcode-share/es/share";
const w = { class: "lc-arrow-indicators" }, y = { class: "lc-arrow-indicators__icon" }, N = { class: "lc-arrow-indicators__center" }, g = { class: "lc-arrow-indicators__center__lable" }, x = { class: "lc-arrow-indicators__center__value" }, S = { class: "lc-arrow-indicators__center__value__unit" }, D = /* @__PURE__ */ u({
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
        const { result: t } = o(e.value, e.decimal);
        return t;
      }
      return e.value;
    });
    return i(() => {
      if (e.fixed) {
        const { unit: t } = o(e.value, e.decimal);
        return `${t}${e.unit}`;
      }
      return e.unit;
    }), (t, k) => (r(), s("div", w, [
      n("div", y, [
        m(a(_), {
          domain: "event",
          name: e.icon,
          size: 70
        }, null, 8, ["name"])
      ]),
      n("div", N, [
        n(
          "div",
          g,
          c(e.label),
          1
          /* TEXT */
        ),
        n("div", x, [
          e.value ? (r(), f(a(h), {
            key: 0,
            "show-separator": "",
            from: 0,
            to: l.value,
            active: "",
            precision: e.decimal
          }, null, 8, ["to", "precision"])) : v("v-if", !0),
          b(t.$slots, "default", {}, void 0, !0),
          n(
            "span",
            S,
            c(e.unit),
            1
            /* TEXT */
          )
        ])
      ])
    ]));
  }
});
export {
  D as default
};
