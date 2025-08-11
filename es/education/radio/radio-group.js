import { defineComponent, openBlock, createBlock, unref, mergeProps, withCtx, renderSlot } from "vue";
import { NRadioGroup } from "naive-ui/es/radio";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "radio-group",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(
        unref(NRadioGroup),
        mergeProps({ class: "lc-radio-group" }, _ctx.$attrs),
        {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
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
