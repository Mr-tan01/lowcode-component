// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { defineComponent as u, mergeDefaults as i, inject as l, computed as d, openBlock as c, createElementBlock as r, normalizeClass as _, createElementVNode as a, renderSlot as f, createCommentVNode as p, toDisplayString as v } from "vue";
const m = Symbol("radioButtonGroupInject"), b = { class: "lc-radio-button__wrapper" }, x = {
  key: 0,
  class: "lc-radio-button__wrapper__button--suffix"
}, y = { class: "lc-radio-button__wrapper__button--text" }, g = /* @__PURE__ */ u({
  __name: "radio-button",
  props: /* @__PURE__ */ i({
    text: {
      type: String
    },
    value: {
      type: [String, Number]
    }
  }, {
    text: "",
    value: ""
  }),
  setup(o) {
    const t = l(m), n = d(() => (t == null ? void 0 : t.value.value) === o.value);
    function s() {
      var e;
      (e = t == null ? void 0 : t.value) == null || e.change(o.value);
    }
    return (e, h) => (c(), r(
      "div",
      {
        class: _(["lc-radio-button", {
          "lc-radio-button--focus": n.value
        }])
      },
      [
        a("div", b, [
          a("button", {
            class: "lc-radio-button__wrapper__button",
            onClick: s
          }, [
            e.$slots.suffix ? (c(), r("div", x, [
              f(e.$slots, "suffix", {}, void 0, !0)
            ])) : p("v-if", !0),
            a(
              "div",
              y,
              v(o.text),
              1
              /* TEXT */
            )
          ])
        ])
      ],
      2
      /* CLASS */
    ));
  }
}), k = (o, t) => {
  const n = o.__vccOpts || o;
  for (const [s, e] of t)
    n[s] = e;
  return n;
}, w = /* @__PURE__ */ k(g, [["__scopeId", "data-v-408dfe52"]]);
export {
  w as LcRadioButton
};
