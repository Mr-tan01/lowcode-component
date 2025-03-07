import { defineComponent as p, openBlock as n, createElementBlock as r, normalizeClass as u, createElementVNode as s, renderSlot as c, createCommentVNode as _ } from "vue";
const d = { class: "lc-button__wrapper" }, i = {
  key: 0,
  class: "lc-button__wrapper--icon"
}, m = { class: "lc-button__wrapper--content" }, f = /* @__PURE__ */ p({
  __name: "button",
  props: {
    type: { default: "normal" }
  },
  setup(e) {
    return (t, o) => (n(), r("button", {
      class: u(["lc-button", { "lc-button--primary": t.type === "primary", "lc-button--normal": t.type === "normal" }])
    }, [
      s("div", d, [
        t.$slots.icon ? (n(), r("div", i, [
          c(t.$slots, "icon", {}, void 0, !0)
        ])) : _("", !0),
        s("div", m, [
          c(t.$slots, "default", {}, void 0, !0)
        ])
      ])
    ], 2));
  }
}), b = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [a, l] of t)
    o[a] = l;
  return o;
}, v = /* @__PURE__ */ b(f, [["__scopeId", "data-v-2695d7f1"]]);
export {
  v as LcButton
};
