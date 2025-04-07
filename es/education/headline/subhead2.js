import { defineComponent as d, mergeDefaults as a, useCssVars as u, computed as _, openBlock as s, createElementBlock as r, createElementVNode as l, toDisplayString as c } from "vue";
import i from "./images/subhead-lft.png.js";
import o from "./images/subhead-rgt.png.js";
import { overflowStr as g } from "lowcode-share/es/share";
const f = { class: "lc-subhead" }, h = {
  key: 0,
  class: "lc-subhead__imglft lc-subhead__img"
}, x = {
  key: 1,
  class: "lc-subhead__imgrgt lc-subhead__img"
}, b = ["title"], v = {
  key: 2,
  class: "lc-subhead__imglft lc-subhead__img"
}, p = {
  key: 3,
  class: "lc-subhead__imgrgt lc-subhead__img"
}, z = /* @__PURE__ */ d({
  __name: "subhead",
  props: /* @__PURE__ */ a({
    text: {
      type: String
    },
    maxLength: {
      type: Number
    },
    fontSize: {
      type: String
    },
    reverseOrder: {
      type: Boolean
    }
  }, {
    text: "",
    maxLength: 15,
    fontSize: "16px",
    reverseOrder: !1
  }),
  setup(t) {
    u((n) => ({
      46952955: t.fontSize
    }));
    const m = _(() => g(t.text, t.maxLength));
    return (n, e) => (s(), r("div", f, [
      t.reverseOrder ? (s(), r("div", x, e[1] || (e[1] = [
        l(
          "img",
          {
            src: o,
            alt: ""
          },
          null,
          -1
          /* HOISTED */
        )
      ]))) : (s(), r("div", h, e[0] || (e[0] = [
        l(
          "img",
          {
            src: i,
            alt: ""
          },
          null,
          -1
          /* HOISTED */
        )
      ]))),
      l("div", {
        class: "lc-subhead__text",
        title: t.text
      }, c(m.value), 9, b),
      t.reverseOrder ? (s(), r("div", v, e[2] || (e[2] = [
        l(
          "img",
          {
            src: i,
            alt: ""
          },
          null,
          -1
          /* HOISTED */
        )
      ]))) : (s(), r("div", p, e[3] || (e[3] = [
        l(
          "img",
          {
            src: o,
            alt: ""
          },
          null,
          -1
          /* HOISTED */
        )
      ])))
    ]));
  }
});
export {
  z as default
};
