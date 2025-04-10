import { defineComponent as a, mergeDefaults as c, useCssVars as u, computed as f, openBlock as l, createElementBlock as o, createElementVNode as n, createCommentVNode as s, toDisplayString as g } from "vue";
import r from "./images/subhead-lft.png.js";
import h from "./images/subhead-rgt.png.js";
import y from "./images/subhead-lgt.png.js";
import { overflowStr as b } from "lowcode-share/es/share";
const x = { class: "lc-subhead" }, _ = {
  key: 0,
  class: "lc-subhead__imglft lc-subhead__img"
}, v = {
  key: 1,
  class: "lc-subhead__imglgt lc-subhead__img"
}, p = ["title"], S = {
  key: 2,
  class: "lc-subhead__imgrft lc-subhead__img"
}, k = {
  key: 3,
  class: "lc-subhead__imgrgt lc-subhead__img"
}, L = /* @__PURE__ */ a({
  __name: "subhead",
  props: /* @__PURE__ */ c({
    text: {
      type: String
    },
    maxLength: {
      type: Number
    },
    fontSize: {
      type: String
    },
    type: {
      type: String
    },
    hideRadioIcon: {
      type: Boolean
    }
  }, {
    text: "",
    maxLength: 15,
    fontSize: "16px",
    type: "left",
    hideRadioIcon: !1
  }),
  setup(t) {
    u((d) => ({
      "48b25678": t.fontSize
    }));
    const i = {
      right: "right",
      center: "center",
      left: "left"
    }, m = f(() => b(t.text, t.maxLength));
    return (d, e) => (l(), o("div", x, [
      t.type === i.left && !t.hideRadioIcon ? (l(), o("div", _, e[0] || (e[0] = [
        n(
          "img",
          {
            src: r,
            alt: ""
          },
          null,
          -1
          /* HOISTED */
        )
      ]))) : s("v-if", !0),
      t.type === i.right || t.type === i.center ? (l(), o("div", v, e[1] || (e[1] = [
        n(
          "img",
          {
            src: h,
            alt: ""
          },
          null,
          -1
          /* HOISTED */
        )
      ]))) : s("v-if", !0),
      n("div", {
        class: "lc-subhead__text",
        title: t.text
      }, g(m.value), 9, p),
      t.type === i.right && !t.hideRadioIcon ? (l(), o("div", S, e[2] || (e[2] = [
        n(
          "img",
          {
            src: r,
            alt: ""
          },
          null,
          -1
          /* HOISTED */
        )
      ]))) : s("v-if", !0),
      t.type === i.left || t.type === i.center ? (l(), o("div", k, e[3] || (e[3] = [
        n(
          "img",
          {
            src: y,
            alt: ""
          },
          null,
          -1
          /* HOISTED */
        )
      ]))) : s("v-if", !0)
    ]));
  }
});
export {
  L as default
};
