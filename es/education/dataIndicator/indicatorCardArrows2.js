import { defineComponent as o, mergeDefaults as a, openBlock as s, createElementBlock as l, createElementVNode as r, toDisplayString as c, createVNode as n, unref as _ } from "vue";
import i from "./images/card/spot-bg.png.js";
import p from "./images/card/big-substrate-bg.png.js";
import { NNumberAnimation as d } from "naive-ui/es/number-animation";
const m = { class: "indicator-card-vice" }, u = { class: "indicator-card-vice__wrapper" }, v = { class: "indicator-card-vice__wrapper__label" }, f = { class: "indicator-card-vice__wrapper__value" }, g = { class: "indicator-card-vice__wrapper__value__num" }, x = /* @__PURE__ */ o({
  __name: "indicatorCardArrows",
  props: /* @__PURE__ */ a({
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
  setup(e) {
    return (w, t) => (s(), l("div", m, [
      t[1] || (t[1] = r(
        "img",
        {
          src: i,
          alt: "",
          class: "spot-img spot-top"
        },
        null,
        -1
        /* HOISTED */
      )),
      t[2] || (t[2] = r(
        "img",
        {
          src: i,
          alt: "",
          class: "spot-img spot-down"
        },
        null,
        -1
        /* HOISTED */
      )),
      r("div", u, [
        r(
          "div",
          v,
          c(e.label),
          1
          /* TEXT */
        ),
        r("div", f, [
          r("span", g, [
            n(_(d), {
              "show-separator": "",
              from: 0,
              to: e.value,
              active: "",
              precision: 0
            }, null, 8, ["to"])
          ])
        ]),
        t[0] || (t[0] = r(
          "div",
          { class: "indicator-card-vice__wrapper__img" },
          [
            r("img", {
              src: p,
              alt: ""
            })
          ],
          -1
          /* HOISTED */
        ))
      ])
    ]));
  }
});
export {
  x as default
};
