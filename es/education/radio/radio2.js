import { defineComponent as r, openBlock as o, createBlock as t, unref as a, mergeProps as n, withCtx as s, renderSlot as d } from "vue";
import { NRadio as f } from "naive-ui/es/radio";
const c = /* @__PURE__ */ r({
  __name: "radio",
  setup(i) {
    return (e, l) => (o(), t(
      a(f),
      n({ class: "lc-radio" }, e.$attrs),
      {
        default: s(() => [
          d(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
        /* FORWARDED */
      },
      16
      /* FULL_PROPS */
    ));
  }
});
export {
  c as default
};
