import { defineComponent as d, useCssVars as m, toRefs as f, computed as r, openBlock as a, createElementBlock as p, renderSlot as v, createBlock as _, unref as n, normalizeProps as h, mergeProps as x, createElementVNode as S, toDisplayString as k } from "vue";
import './assets/icon/icon.css';/* empty css           */
import g from "./icon/iconCard.js";
import { overflowStr as y } from "lowcode-share/es/share";
const z = { class: "lc-radiohead" }, $ = ["title"], V = /* @__PURE__ */ d({
  __name: "radiohead",
  props: {
    text: { default: "" },
    maxLength: { default: 15 },
    fontSize: { default: 16 }
  },
  setup(l) {
    m((e) => ({
      f9c9a1e4: u.value
    }));
    const s = l, { text: o, maxLength: c, fontSize: t } = f(s), i = r(() => y(o.value, c.value)), u = r(() => typeof t.value == "number" ? `${t.value}px` : t.value);
    return (e, B) => (a(), p("div", z, [
      e.$slots.icon ? v(e.$slots, "icon", { key: 0 }, void 0, !0) : (a(), _(
        n(g),
        h(x({ key: 1 }, e.$attrs)),
        null,
        16
        /* FULL_PROPS */
      )),
      S("div", {
        class: "lc-radiohead__title",
        title: n(o)
      }, k(i.value), 9, $)
    ]));
  }
});
export {
  V as default
};
