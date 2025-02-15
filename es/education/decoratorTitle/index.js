// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { defineComponent as a, mergeDefaults as l, computed as i, openBlock as s, createElementBlock as d, normalizeClass as _, createElementVNode as c, toDisplayString as m } from "vue";
function p(t, r) {
  let e = t ?? "-";
  return e.length > r ? e.substring(0, r) + "..." : e;
}
const u = { class: "lc-decorator-title__wrapper" }, x = ["title"], g = /* @__PURE__ */ a({
  __name: "decoratorTitle",
  props: /* @__PURE__ */ l({
    text: {
      type: String
    },
    maxLength: {
      type: Number
    },
    dir: {
      type: String
    }
  }, {
    text: "",
    maxLength: 12,
    dir: "ltr"
  }),
  setup(t) {
    const r = i(() => p(t.text, t.maxLength));
    return (e, o) => (s(), d(
      "div",
      {
        class: _(["lc-decorator-title", [`lc-decorator-title--${t.dir}`]])
      },
      [
        c("div", u, [
          c("div", {
            class: "lc-decorator-title__wrapper__text",
            title: t.text
          }, m(r.value), 9, x)
        ])
      ],
      2
      /* CLASS */
    ));
  }
}), f = (t, r) => {
  const e = t.__vccOpts || t;
  for (const [o, n] of r)
    e[o] = n;
  return e;
}, v = /* @__PURE__ */ f(g, [["__scopeId", "data-v-fde1c37c"]]);
export {
  v as LcDecoratorTitle
};
