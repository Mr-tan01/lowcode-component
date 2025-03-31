import { defineComponent as r, mergeDefaults as m, useCssVars as a, computed as l, openBlock as n, createElementBlock as c, createElementVNode as t, toDisplayString as d } from "vue";
import u from "./images/subhead-lft.png.js";
import f from "./images/subhead-rgt.png.js";
import { overflowStr as _ } from "lowcode-share/es/share";
const g = { class: "lc-subhead" }, x = ["title"], v = /* @__PURE__ */ r({
  __name: "subhead",
  props: /* @__PURE__ */ m({
    text: {
      type: String
    },
    maxLength: {
      type: Number
    },
    fontSize: {
      type: String
    }
  }, {
    text: "",
    maxLength: 15,
    fontSize: "16px"
  }),
  setup(e) {
    a((o) => ({
      "7cfa825b": e.fontSize
    }));
    const i = l(() => _(e.text, e.maxLength));
    return (o, s) => (n(), c("div", g, [
      s[0] || (s[0] = t(
        "div",
        { class: "lc-subhead__imglft lc-subhead__img" },
        [
          t("img", {
            src: u,
            alt: ""
          })
        ],
        -1
        /* HOISTED */
      )),
      t("div", {
        class: "lc-subhead__text",
        title: e.text
      }, d(i.value), 9, x),
      s[1] || (s[1] = t(
        "div",
        { class: "lc-subhead__imgrgt lc-subhead__img" },
        [
          t("img", {
            src: f,
            alt: ""
          })
        ],
        -1
        /* HOISTED */
      ))
    ]));
  }
});
export {
  v as default
};
