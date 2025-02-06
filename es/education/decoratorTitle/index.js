// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { defineComponent as _, openBlock as a, createElementBlock as n, createElementVNode as c, toDisplayString as i } from "vue";
const l = { class: "lc-decorator-title" }, p = { class: "lc-decorator-title__wrapper" }, d = { class: "lc-decorator-title__wrapper__text" }, m = /* @__PURE__ */ _({
  __name: "decoratorTitle",
  props: {
    title: {
      type: String
    }
  },
  setup(t) {
    return (o, e) => (a(), n("div", l, [
      c("div", p, [
        c(
          "div",
          d,
          i(t.title),
          1
          /* TEXT */
        )
      ])
    ]));
  }
}), v = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [r, s] of o)
    e[r] = s;
  return e;
}, h = /* @__PURE__ */ v(m, [["__scopeId", "data-v-511ce74c"]]);
export {
  h as LcDecoratorTitle
};
