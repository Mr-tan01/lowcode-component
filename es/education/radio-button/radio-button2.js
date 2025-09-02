import { defineComponent, mergeDefaults, inject, computed, createElementBlock, openBlock, normalizeClass, createElementVNode, createCommentVNode, renderSlot, toDisplayString } from "vue";
import { radioButtonGroupProvideKey } from "./-group/const.js";
const _hoisted_1 = { class: "lc-radio-button__wrapper" };
const _hoisted_2 = {
  key: 0,
  class: "lc-radio-button__wrapper__button--suffix"
};
const _hoisted_3 = { class: "lc-radio-button__wrapper__button--text" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "radio-button",
  props: /* @__PURE__ */ mergeDefaults({
    text: {
      type: String
    },
    value: {
      type: [String, Number]
    }
  }, {
    text: "",
    value: ""
  }),
  setup(__props) {
    const radioButtonGroupInject = inject(radioButtonGroupProvideKey);
    const isFocus = computed(() => (radioButtonGroupInject == null ? void 0 : radioButtonGroupInject.value.value) === __props.value);
    function clickButton() {
      var _a;
      (_a = radioButtonGroupInject == null ? void 0 : radioButtonGroupInject.value) == null ? void 0 : _a.change(__props.value);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(["lc-radio-button", {
            "lc-radio-button--focus": isFocus.value
          }])
        },
        [
          createElementVNode("div", _hoisted_1, [
            createElementVNode("button", {
              class: "lc-radio-button__wrapper__button",
              onClick: clickButton
            }, [
              _ctx.$slots.suffix ? (openBlock(), createElementBlock("div", _hoisted_2, [
                renderSlot(_ctx.$slots, "suffix", {}, void 0, true)
              ])) : createCommentVNode("v-if", true),
              createElementVNode(
                "div",
                _hoisted_3,
                toDisplayString(__props.text),
                1
                /* TEXT */
              )
            ])
          ])
        ],
        2
        /* CLASS */
      );
    };
  }
});
export {
  _sfc_main as default
};
