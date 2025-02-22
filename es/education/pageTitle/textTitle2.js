import { defineComponent as o, mergeDefaults as l, computed as r, openBlock as m, createElementBlock as s, createElementVNode as a, toDisplayString as c } from "vue";
import { overflowStr as i } from "lowcode-share/es/share";
const x = { class: "lc-page__texthead" }, _ = ["title"], u = /* @__PURE__ */ o({
  __name: "textTitle",
  props: /* @__PURE__ */ l({
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
    const n = r(() => i(t.text, t.maxLength));
    return (d, e) => (m(), s("div", x, [
      e[0] || (e[0] = a(
        "div",
        { class: "lc-page__texthead__bg" },
        null,
        -1
        /* HOISTED */
      )),
      a("div", {
        class: "lc-page__texthead__text",
        title: t.text
      }, c(n.value), 9, _)
    ]));
  }
});
export {
  u as default
};
