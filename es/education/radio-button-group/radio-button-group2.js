import { defineComponent as u, useModel as d, computed as l, provide as a, openBlock as n, createElementBlock as s, createElementVNode as i, renderSlot as c } from "vue";
import { radioButtonGroupProvideKey as p } from "./const.js";
const m = { class: "lc-radio-button-group" }, _ = { class: "lc-radio-button-group__wrapper" }, b = /* @__PURE__ */ u({
  __name: "radio-button-group",
  props: {
    modelValue: { default: "" },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(t) {
    const o = d(t, "modelValue"), r = l(() => ({
      value: o.value,
      change(e) {
        o.value = e;
      }
    }));
    return a(p, r), (e, f) => (n(), s("div", m, [
      i("div", _, [
        c(e.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
});
export {
  b as default
};
