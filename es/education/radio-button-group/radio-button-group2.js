import { defineComponent, useModel, computed, provide, openBlock, createElementBlock, createElementVNode, renderSlot } from "vue";
import { radioButtonGroupProvideKey } from "./const.js";
const _hoisted_1 = { class: "lc-radio-button-group" };
const _hoisted_2 = { class: "lc-radio-button-group__wrapper" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "radio-button-group",
  props: {
    "modelValue": { default: "" },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const vmodelValue = useModel(__props, "modelValue");
    const buttonGroupProvide = computed(() => {
      return {
        value: vmodelValue.value,
        change(_value) {
          vmodelValue.value = _value;
        }
      };
    });
    provide(radioButtonGroupProvideKey, buttonGroupProvide);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
