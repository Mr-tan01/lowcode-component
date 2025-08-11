import { defineComponent, mergeDefaults, computed, openBlock, createElementBlock, normalizeClass, createElementVNode, renderSlot, toDisplayString, createCommentVNode } from "vue";
import { overflowStr } from "lowcode-share/es/share";
const _hoisted_1 = { class: "lc-decorator-title__wrapper" };
const _hoisted_2 = ["title"];
const _hoisted_3 = {
  key: 0,
  class: "lc-decortator-title__slot"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "decoratorTitle",
  props: /* @__PURE__ */ mergeDefaults({
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
  setup(__props) {
    const formatedText = computed(() => {
      return overflowStr(__props.text, __props.maxLength);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(["lc-decorator-title", [`lc-decorator-title--${__props.dir}`]])
        },
        [
          createElementVNode("div", _hoisted_1, [
            renderSlot(_ctx.$slots, "title", {}, () => [
              createElementVNode("div", {
                class: "lc-decorator-title__wrapper__text",
                title: __props.text
              }, toDisplayString(formatedText.value), 9, _hoisted_2)
            ], true),
            _ctx.$slots.helper ? (openBlock(), createElementBlock("div", _hoisted_3, [
              renderSlot(_ctx.$slots, "helper", {}, void 0, true)
            ])) : createCommentVNode("v-if", true)
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
