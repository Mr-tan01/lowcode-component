import { defineComponent, mergeDefaults, computed, createElementBlock, openBlock, createVNode, unref, mergeProps } from "vue";
import { SChartsLine } from "@mmj-code-lib/lowcode/es/components";
import { useCommonLineOptions, useCommonLineSeries } from "./options.js";
import merge from "lodash-es/merge";
const _hoisted_1 = { class: "lc-line-chart" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "line",
  props: /* @__PURE__ */ mergeDefaults({
    options: Object
  }, {
    options: () => ({})
  }),
  setup(__props) {
    const renderOptions = computed(() => {
      const newOptions = useCommonLineOptions(__props.options);
      newOptions.series = useCommonLineSeries(newOptions.series);
      return merge({}, newOptions);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(SChartsLine), mergeProps({ opts: renderOptions.value }, _ctx.$attrs), null, 16, ["opts"])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
