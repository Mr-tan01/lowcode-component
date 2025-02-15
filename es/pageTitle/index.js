// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { openBlock as a, createElementBlock as o, createElementVNode as s, renderSlot as r, defineComponent as i, mergeDefaults as d, computed as x, toDisplayString as u } from "vue";
const _ = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [c, l] of e)
    n[c] = l;
  return n;
}, g = {}, p = { class: "lc-page_title" }, m = { class: "lc-page_title__text" };
function f(t, e) {
  return a(), o("div", p, [
    s("div", m, [
      r(t.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const y = /* @__PURE__ */ _(g, [["render", f], ["__scopeId", "data-v-bcef506a"]]);
function h(t, e) {
  let n = t ?? "-";
  return n.length > e ? n.substring(0, e) + "..." : n;
}
const v = { class: "lc-page__texthead" }, T = ["title"], L = /* @__PURE__ */ i({
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
    const e = x(() => h(t.text, t.maxLength));
    return (n, c) => (a(), o("div", v, [
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
      }, u(e.value), 9, T)
    ]));
  }
}), $ = /* @__PURE__ */ _(L, [["__scopeId", "data-v-dc5725c7"]]);
export {
  y as LcPageTitle,
  $ as LcTextTitle
};
