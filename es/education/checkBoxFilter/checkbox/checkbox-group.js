import { defineComponent, openBlock, createBlock, unref, mergeProps, withCtx, renderSlot } from "vue";
import { NCheckboxGroup } from "naive-ui/es/checkbox";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "checkbox-group",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(
        unref(NCheckboxGroup),
        mergeProps({ class: "lc-checkbox-group" }, _ctx.$attrs),
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
