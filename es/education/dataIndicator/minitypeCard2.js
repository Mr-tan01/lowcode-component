import { defineComponent as i, mergeDefaults as a, openBlock as n, createElementBlock as c, createElementVNode as e, toDisplayString as o, createVNode as l, unref as r } from "vue";
import { NNumberAnimation as s } from "naive-ui/es/number-animation";
import m from "./images/card/small-substrate-bg.png.js";
const _ = { class: "minitype-card" }, d = { class: "minitype-card__label" }, p = { class: "minitype-card__value" }, u = { class: "minitype-card__value__num" }, b = { class: "minitype-card__img" }, g = ["src"], I = /* @__PURE__ */ i({
  __name: "minitypeCard",
  props: /* @__PURE__ */ a({
    label: {
      type: String
    },
    value: {
      type: Number
    },
    bgIcon: {
      type: String
    },
    decimal: {
      type: Number
    }
  }, {
    label: "已建成并投入运行设施(个)",
    value: 0,
    bgIcon: m,
    __skip_bgIcon: !0,
    decimal: 0
  }),
  setup(t) {
    return (y, f) => (n(), c("div", _, [
      e(
        "div",
        d,
        o(t.label),
        1
        /* TEXT */
      ),
      e("div", p, [
        e("span", u, [
          l(r(s), {
            "show-separator": "",
            from: 0,
            to: t.value,
            active: "",
            precision: t.decimal
          }, null, 8, ["to", "precision"])
        ])
      ]),
      e("div", b, [
        e("img", {
          src: t.bgIcon,
          alt: ""
        }, null, 8, g)
      ])
    ]));
  }
});
export {
  I as default
};
