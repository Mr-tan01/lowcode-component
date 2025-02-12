// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { openBlock as o, createElementBlock as a, createElementVNode as s, renderSlot as r, defineComponent as i, mergeDefaults as d, computed as x, toDisplayString as p } from "vue";
const l = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [c, _] of e)
    n[c] = _;
  return n;
}, u = {}, g = { class: "lc-page_title" }, f = { class: "lc-page_title__text" };
function m(t, e) {
  return o(), a("div", g, [
    s("div", f, [
      r(t.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const L = /* @__PURE__ */ l(u, [["render", m], ["__scopeId", "data-v-bcef506a"]]);
function v(t, e) {
  let n = t ?? "-";
  return n.length > e ? n.substring(0, e) + "..." : n;
}
const h = { class: "lc-page__texthead" }, T = ["title"], b = /* @__PURE__ */ i({
  __name: "textTitle",
  props: /* @__PURE__ */ d({
    text: {
      type: String
    },
    maxLength: {
      type: Number
    }
  }, {
    text: "",
    maxLength: 15
  }),
  setup(t) {
    const e = x(() => v(t.text, t.maxLength));
    return (n, c) => (o(), a("div", h, [
      c[0] || (c[0] = s(
        "div",
        { class: "lc-page__texthead__bg" },
        null,
        -1
        /* HOISTED */
      )),
      s("div", {
        class: "lc-page__texthead__text",
        title: t.text
      }, p(e.value), 9, T)
    ]));
  }
}), S = /* @__PURE__ */ l(b, [["__scopeId", "data-v-033510c2"]]);
export {
  L as LcPageTitle,
  S as LcTextTitle
};
