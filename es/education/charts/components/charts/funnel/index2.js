import { defineComponent, mergeDefaults, computed, openBlock, createElementBlock, createVNode, unref, mergeProps } from "vue";
import BaseChart from "../../../common/components/Charts/baseChart/base.js";
import { useCommonChartExpose } from "../../../common/components/Charts/utils/index.js";
import { useCommonScatterSeries, useCommonScatterOptions } from "./options.js";
import merge from "lodash-es/merge";
const _hoisted_1 = { class: "lc-scatter-chart" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "funnel",
  props: /* @__PURE__ */ mergeDefaults({
    options: Object
  }, {
    options: () => ({})
  }),
  setup(__props, { expose: __expose }) {
    const renderOptions = computed(() => {
      __props.options.series = useCommonScatterSeries(__props.options.series || []);
      const newOptions = useCommonScatterOptions(__props.options);
      return merge({}, newOptions);
    });
    const { exposes } = useCommonChartExpose("baseChart");
    __expose(exposes);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(BaseChart), mergeProps({ options: renderOptions.value }, _ctx.$attrs), null, 16, ["options"])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
