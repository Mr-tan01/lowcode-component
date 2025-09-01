import { defineComponent, createElementBlock, openBlock, normalizeClass, createElementVNode, createCommentVNode, renderSlot } from "vue";
const _hoisted_1 = { class: "lc-button__wrapper" };
const _hoisted_2 = {
  key: 0,
  class: "lc-button__wrapper--icon"
};
const _hoisted_3 = { class: "lc-button__wrapper--content" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "button",
  props: {
    type: { default: "normal" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "button",
        {
          class: normalizeClass(["lc-button", {
            "lc-button--primary": _ctx.type === "primary",
            "lc-button--normal": _ctx.type === "normal"
          }])
        },
        [
          createElementVNode("div", _hoisted_1, [
            _ctx.$slots.icon ? (openBlock(), createElementBlock("div", _hoisted_2, [
              renderSlot(_ctx.$slots, "icon", {}, void 0, true)
            ])) : createCommentVNode("v-if", true),
            createElementVNode("div", _hoisted_3, [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
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
