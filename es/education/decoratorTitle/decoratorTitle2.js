import { defineComponent as s, mergeDefaults as c, computed as n, openBlock as r, createElementBlock as o, normalizeClass as d, createElementVNode as l, renderSlot as i, toDisplayString as m, createCommentVNode as p } from "vue";
import { overflowStr as u } from "lowcode-share/es/share";
const _ = { class: "lc-decorator-title__wrapper" }, f = ["title"], h = {
  key: 0,
  class: "lc-decortator-title__slot"
}, y = /* @__PURE__ */ s({
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
  setup(t) {
    const a = n(() => u(t.text, t.maxLength));
    return (e, x) => (r(), o(
      "div",
      {
        class: d(["lc-decorator-title", [`lc-decorator-title--${t.dir}`]])
      },
      [
        l("div", _, [
          i(e.$slots, "title", {}, () => [
            l("div", {
              class: "lc-decorator-title__wrapper__text",
              title: t.text
            }, m(a.value), 9, f)
          ], !0),
          e.$slots.helper ? (r(), o("div", h, [
            i(e.$slots, "helper", {}, void 0, !0)
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
