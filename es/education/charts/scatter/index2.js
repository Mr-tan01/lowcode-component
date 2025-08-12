import { defineComponent, mergeDefaults, useTemplateRef, computed, openBlock, createElementBlock, createVNode, unref, mergeProps } from "vue";
import BaseChart from "../common/components/Charts/baseChart/base.js";
import { useCommonScatterSeries, useCommonScatterOptions } from "./options.js";
import merge from "lodash-es/merge";
import { scatterColors } from "./const.js";
const _hoisted_1 = { class: "lc-scatter-chart" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "scatter",
  props: /* @__PURE__ */ mergeDefaults({
    options: Object
  }, {
    options: () => ({})
  }),
  setup(__props, { expose: __expose }) {
    const baseChartRef = useTemplateRef("baseChart");
    const renderOptions = computed(() => {
      var _a;
      const colors = merge([], scatterColors, ((_a = __props.options) == null ? void 0 : _a.color) ?? []);
      __props.options.series = useCommonScatterSeries(__props.options.series || [], colors);
      const newOptions = useCommonScatterOptions(__props.options);
      return merge({}, newOptions);
    });
    __expose({
      instance: computed(() => baseChartRef.value)
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(BaseChart), mergeProps(_ctx.$attrs, {
          ref: "baseChart",
          options: renderOptions.value
        }), null, 16, ["options"])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
