import { defineComponent, mergeDefaults, computed, openBlock, createElementBlock, createVNode, unref } from "vue";
import BaseChart from "../../../common/components/Charts/baseChart/base.js";
import { useCommonChartExpose } from "../../../common/components/Charts/utils/index.js";
import merge from "lodash-es/merge";
import { useCommonRadarOptions, useCommonRadarSeries } from "./options.js";
const _hoisted_1 = { class: "lc-radar" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "radar",
  props: /* @__PURE__ */ mergeDefaults({
    options: Object
  }, {
    options: () => ({})
  }),
  setup(__props, { expose: __expose }) {
    const renderOptions = computed(() => {
      const newOptions = useCommonRadarOptions(__props.options);
      newOptions.series = useCommonRadarSeries(newOptions.series);
      return merge({}, newOptions);
    });
    const { exposes } = useCommonChartExpose("baseChart");
    __expose(exposes);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(BaseChart), {
          ref: "baseChart",
          options: renderOptions.value
        }, null, 8, ["options"])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
