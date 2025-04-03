import { defineComponent as a, computed as l, openBlock as o, createElementBlock as s, renderSlot as i, createBlock as c, unref as d, normalizeProps as m, mergeProps as p, createElementVNode as u, toDisplayString as f } from "vue";
import h from "./icon/index.js";
import { overflowStr as _ } from "lowcode-share/es/share";
const k = { class: "lc-radiohead" }, g = ["title"], L = /* @__PURE__ */ a({
  __name: "radiohead",
  props: {
    text: { default: "" },
    maxLength: { default: 15 }
  },
  setup(r) {
    const t = r, n = l(() => _(t.text, t.maxLength));
    return (e, v) => (o(), s("div", k, [
      e.$slots.icon ? i(e.$slots, "icon", { key: 0 }, void 0, !0) : (o(), c(
        d(h),
        m(p({ key: 1 }, e.$attrs)),
        null,
        16
        /* FULL_PROPS */
      )),
      u("div", {
        class: "lc-radiohead__title",
        title: e.text
      }, f(n.value), 9, g)
    ]));
  }
});
export {
  L as default
};
