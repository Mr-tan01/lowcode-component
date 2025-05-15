import { defineComponent as m, mergeDefaults as u, useCssVars as f, computed as g, openBlock as l, createElementBlock as o, createElementVNode as i, createCommentVNode as n, renderSlot as r, toDisplayString as h } from "vue";
import c from "./images/subhead-lft.png.js";
import _ from "./images/subhead-rgt.png.js";
import y from "./images/subhead-lgt.png.js";
import { overflowStr as b } from "lowcode-share/es/share";
const v = { class: "lc-subhead" }, x = {
  key: 0,
  class: "lc-subhead__imglft lc-subhead__img"
}, S = {
  key: 1,
  class: "lc-subhead__imglgt lc-subhead__img"
}, p = { class: "lc-subhead__icon-left" }, k = ["title"], I = { class: "lc-subhead__icon-right" }, R = {
  key: 2,
  class: "lc-subhead__imgrft lc-subhead__img"
}, z = {
  key: 3,
  class: "lc-subhead__imgrgt lc-subhead__img"
}, D = /* @__PURE__ */ m({
  __name: "subhead",
  props: /* @__PURE__ */ u({
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
    f((d) => ({
      "48251db4": t.fontSize
    }));
    const s = {
      right: "right",
      center: "center",
      left: "left"
    }, a = g(() => b(t.text, t.maxLength));
    return (d, e) => (l(), o("div", v, [
      t.type === s.left && !t.hideRadioIcon ? (l(), o("div", x, e[0] || (e[0] = [
        i(
          "img",
          {
            src: c,
            alt: ""
          },
          null,
          -1
          /* HOISTED */
        )
      ]))) : n("v-if", !0),
      t.type === s.right || t.type === s.center ? (l(), o("div", S, e[1] || (e[1] = [
        i(
          "img",
          {
            src: _,
            alt: ""
          },
          null,
          -1
          /* HOISTED */
        )
      ]))) : n("v-if", !0),
      i("div", p, [
        r(d.$slots, "icon-left", {}, void 0, !0)
      ]),
      i("div", {
        class: "lc-subhead__text",
        title: t.text
      }, h(a.value), 9, k),
      i("div", I, [
        r(d.$slots, "icon-right", {}, void 0, !0)
      ]),
      t.type === s.right && !t.hideRadioIcon ? (l(), o("div", R, e[2] || (e[2] = [
        i(
          "img",
          {
            src: c,
            alt: ""
          },
          null,
          -1
          /* HOISTED */
        )
      ]))) : n("v-if", !0),
      t.type === s.left || t.type === s.center ? (l(), o("div", z, e[3] || (e[3] = [
        i(
          "img",
          {
            src: y,
            alt: ""
          },
          null,
          -1
          /* HOISTED */
        )
      ]))) : n("v-if", !0)
    ]));
  }
});
export {
  D as default
};
