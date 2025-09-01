import { defineComponent, createBlock, openBlock, unref, mergeProps, withCtx, renderSlot } from "vue";
import { NCheckbox } from "naive-ui/es/checkbox";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "checkbox",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(
        unref(NCheckbox),
        mergeProps({ class: "lc-checkbox" }, _ctx.$attrs),
        {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ]),
          _: 3
          /* FORWARDED */
        },
        16
        /* FULL_PROPS */
      );
    };
  }
});
export {
  _sfc_main as default
};
