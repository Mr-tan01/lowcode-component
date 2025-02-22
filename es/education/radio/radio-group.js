import { defineComponent as o, openBlock as e, createBlock as t, unref as a, mergeProps as p, withCtx as n, renderSlot as s } from "vue";
import { NRadioGroup as u } from "naive-ui/es/radio";
const i = /* @__PURE__ */ o({
  __name: "radio-group",
  setup(l) {
    return (r, c) => (e(), t(
      a(u),
      p({ class: "lc-radio-group" }, r.$attrs),
      {
        default: n(() => [
          s(r.$slots, "default")
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
  i as default
};
