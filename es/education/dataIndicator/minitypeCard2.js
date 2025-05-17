import { defineComponent as a, mergeDefaults as o, openBlock as r, createElementBlock as n, createElementVNode as e, toDisplayString as s, createVNode as l, unref as m } from "vue";
import c from "./images/card/small-substrate-bg.png.js";
import { NNumberAnimation as _ } from "naive-ui/es/number-animation";
const p = { class: "minitype-card" }, d = { class: "minitype-card__label" }, u = { class: "minitype-card__value" }, v = { class: "minitype-card__value__num" }, N = /* @__PURE__ */ a({
  __name: "minitypeCard",
  props: /* @__PURE__ */ o({
    label: {
      type: String
    },
    value: {
      type: Number
    }
  }, {
    label: "已建成并投入运行设施(个)",
    value: 0
  }),
  setup(t) {
    return (f, i) => (r(), n("div", p, [
      e(
        "div",
        d,
        s(t.label),
        1
        /* TEXT */
      ),
      e("div", u, [
        e("span", v, [
          l(m(_), {
            "show-separator": "",
            from: 0,
            to: t.value,
            active: "",
            precision: 0
          }, null, 8, ["to"])
        ])
      ]),
      i[0] || (i[0] = e(
        "div",
        { class: "minitype-card__img" },
        [
          e("img", {
            src: c,
            alt: ""
          })
        ],
        -1
        /* HOISTED */
      ))
    ]));
  }
});
export {
  N as default
};
