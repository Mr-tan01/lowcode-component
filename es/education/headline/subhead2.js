import { defineComponent as n, mergeDefaults as a, useCssVars as u, computed as g, openBlock as s, createElementBlock as r, Fragment as c, createElementVNode as i, createCommentVNode as f, toDisplayString as _ } from "vue";
import l from "./images/subhead-lft.png.js";
import m from "./images/subhead-rgt.png.js";
import { overflowStr as h } from "lowcode-share/es/share";
const b = { class: "lc-subhead" }, v = {
  key: 0,
  class: "lc-subhead__imglft lc-subhead__img"
}, x = {
  key: 1,
  class: "lc-subhead__imgrgt lc-subhead__img"
}, y = ["title"], p = {
  key: 1,
  class: "lc-subhead__imglft lc-subhead__img"
}, k = {
  key: 2,
  class: "lc-subhead__imgrgt lc-subhead__img"
}, z = /* @__PURE__ */ n({
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
    },
    hideLeftImg: {
      type: Boolean
    }
  }, {
    text: "",
    maxLength: 15,
    fontSize: "16px",
    reverseOrder: !1,
    hideLeftImg: !0
  }),
  setup(t) {
    u((d) => ({
      f6bfd678: t.fontSize
    }));
    const o = g(() => h(t.text, t.maxLength));
    return (d, e) => (s(), r("div", b, [
      t.hideLeftImg ? (s(), r(
        c,
        { key: 0 },
        [
          t.reverseOrder ? (s(), r("div", x, e[1] || (e[1] = [
            i(
              "img",
              {
                src: m,
                alt: ""
              },
              null,
              -1
              /* HOISTED */
            )
          ]))) : (s(), r("div", v, e[0] || (e[0] = [
            i(
              "img",
              {
                src: l,
                alt: ""
              },
              null,
              -1
              /* HOISTED */
            )
          ])))
        ],
        64
        /* STABLE_FRAGMENT */
      )) : f("v-if", !0),
      i("div", {
        class: "lc-subhead__text",
        title: t.text
      }, _(o.value), 9, y),
      t.reverseOrder ? (s(), r("div", p, e[2] || (e[2] = [
        i(
          "img",
          {
            src: l,
            alt: ""
          },
          null,
          -1
          /* HOISTED */
        )
      ]))) : (s(), r("div", k, e[3] || (e[3] = [
        i(
          "img",
          {
            src: m,
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
