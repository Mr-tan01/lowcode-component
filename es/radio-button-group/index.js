// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { defineComponent as u, useModel as d, computed as a, provide as c, openBlock as l, createElementBlock as s, createElementVNode as p, renderSlot as i } from "vue";
const _ = Symbol("radioButtonGroupInject"), m = { class: "lc-radio-button-group" }, v = { class: "lc-radio-button-group__wrapper" }, f = /* @__PURE__ */ u({
  __name: "radio-button-group",
  props: {
    modelValue: { default: "" },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = d(e, "modelValue"), r = a(() => ({
      value: t.value,
      change(o) {
        t.value = o;
      }
    }));
    return c(_, r), (o, n) => (l(), s("div", m, [
      p("div", v, [
        i(o.$slots, "default", {}, void 0, !0)
      ])
    ]));
  }
}), B = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [o, n] of t)
    r[o] = n;
  return r;
}, g = /* @__PURE__ */ B(f, [["__scopeId", "data-v-f74930c0"]]);
export {
  g as LcRadioButtonGroup
};
