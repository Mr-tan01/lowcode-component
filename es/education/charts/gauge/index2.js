import { defineComponent, computed, openBlock, createElementBlock, createElementVNode, createVNode, unref, createBlock, createCommentVNode } from "vue";
import BaseChart from "../common/components/Charts/baseChart/base.js";
import { useCommonChartExpose } from "../common/components/Charts/utils/index.js";
import merge from "lodash-es/merge";
import { useCommonGaugeOptions, useGaugeSeriesOptions } from "./options.js";
import CommonLegend from "../common/components/Charts/legend/index.js";
const _hoisted_1 = { class: "lc-gauge" };
const _hoisted_2 = { class: "lc-gauge__wrapper" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "gauge",
  props: {
    legendLabel: { type: Function },
    options: { default: () => ({}) },
    showCustomLegend: { type: Boolean, default: true }
  },
  setup(__props, { expose: __expose }) {
    const { exposes } = useCommonChartExpose("baseChart");
    const renderOptions = computed(() => {
      const newOptions = useCommonGaugeOptions(__props.options);
      newOptions.series = useGaugeSeriesOptions(newOptions.series);
      return merge({}, newOptions);
    });
    __expose(exposes);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          createVNode(unref(BaseChart), {
            ref: "baseChart",
            options: renderOptions.value
          }, null, 8, ["options"]),
          _ctx.showCustomLegend ? (openBlock(), createBlock(unref(CommonLegend), {
            key: 0,
            disabled: "",
            "legend-label": _ctx.legendLabel,
            options: renderOptions.value
          }, null, 8, ["legend-label", "options"])) : createCommentVNode("v-if", true)
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
