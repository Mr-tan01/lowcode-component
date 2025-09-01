import { defineComponent, mergeDefaults, useTemplateRef, ref, shallowRef, onMounted, watchEffect, createElementBlock, openBlock, createElementVNode } from "vue";
import { useResizeObserver } from "@vueuse/core";
import { init } from "echarts";
import { debounce, cloneDeep, merge } from "lodash-es";
import { transformEChartsConfig } from "@mmj-code-lib/lowcode/es/shared";
const _hoisted_1 = { class: "lc-common-chart" };
const _hoisted_2 = {
  ref: "commonChart",
  class: "lc-common-chart__wrapper"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "base",
  props: /* @__PURE__ */ mergeDefaults({
    debounceTime: Number,
    options: Object,
    notMerge: Boolean
  }, {
    debounceTime: 300,
    options: () => ({}),
    notMerge: true
  }),
  setup(__props, { expose: __expose }) {
    const commonChartRef = useTemplateRef("commonChart");
    const cloneDeepOptions = ref();
    const chartInstance = shallowRef();
    useResizeObserver(
      commonChartRef,
      debounce(() => {
        var _a;
        (_a = chartInstance.value) == null ? void 0 : _a.resize();
      }, __props.debounceTime)
    );
    function initChartInstance() {
      chartInstance.value = init(commonChartRef.value, __props.options);
    }
    onMounted(() => {
      initChartInstance();
      setOptions(__props.options, __props.notMerge);
    });
    function setOptions(options, deep, lazyUpdate) {
      var _a, _b, _c;
      (_a = chartInstance.value) == null ? void 0 : _a.setOption(options, deep, lazyUpdate);
      cloneDeepOptions.value = cloneDeep(merge((_b = chartInstance.value) == null ? void 0 : _b.getOption(), options));
      const adaptOptions = transformEChartsConfig(cloneDeepOptions.value);
      (_c = chartInstance.value) == null ? void 0 : _c.setOption(adaptOptions, deep, lazyUpdate);
    }
    watchEffect(
      () => {
        setOptions(__props.options, __props.notMerge);
      },
      {
        flush: "post"
      }
    );
    __expose({
      get chartInstance() {
        return chartInstance.value;
      },
      setOptions
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode(
          "div",
          _hoisted_2,
          null,
          512
          /* NEED_PATCH */
        )
      ]);
    };
  }
});
export {
  _sfc_main as default
};
