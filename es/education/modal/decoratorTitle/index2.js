import { defineComponent as i, mergeDefaults as c, computed as n, openBlock as r, createElementBlock as o, normalizeClass as s, createElementVNode as l, toDisplayString as d, renderSlot as m, createCommentVNode as p } from "vue";
import { overflowStr as u } from "lowcode-share/es/share";
const _ = { class: "lc-decorator-title__wrapper" }, f = ["title"], h = {
  key: 0,
  class: "lc-decortator-title__slot"
}, y = /* @__PURE__ */ i({
  __name: "decoratorTitle",
  props: /* @__PURE__ */ c({
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
  setup(e) {
    const a = n(() => u(e.text, e.maxLength));
    return (t, x) => (r(), o(
      "div",
      {
        class: s(["lc-decorator-title", [`lc-decorator-title--${e.dir}`]])
      },
      [
        l("div", _, [
          l("div", {
            class: "lc-decorator-title__wrapper__text",
            title: e.text
          }, d(a.value), 9, f),
          t.$slots.helper ? (r(), o("div", h, [
            m(t.$slots, "helper", {}, void 0, !0)
          ])) : p("v-if", !0)
        ])
      ],
      2
      /* CLASS */
    ));
  }
});
export {
  y as default
};
