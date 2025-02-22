import { defineComponent as o, mergeDefaults as a, computed as l, openBlock as c, createElementBlock as i, normalizeClass as n, createElementVNode as e, toDisplayString as d } from "vue";
import { overflowStr as m } from "lowcode-share/es/share";
const s = { class: "lc-decorator-title__wrapper" }, p = ["title"], g = /* @__PURE__ */ o({
  __name: "decoratorTitle",
  props: /* @__PURE__ */ a({
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
    const r = l(() => m(t.text, t.maxLength));
    return (x, _) => (c(), i(
      "div",
      {
        class: n(["lc-decorator-title", [`lc-decorator-title--${t.dir}`]])
      },
      [
        e("div", s, [
          e("div", {
            class: "lc-decorator-title__wrapper__text",
            title: t.text
          }, d(r.value), 9, p)
        ])
      ],
      2
      /* CLASS */
    ));
  }
});
export {
  g as default
};
