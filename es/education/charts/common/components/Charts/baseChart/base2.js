import { defineComponent, mergeDefaults, useTemplateRef, shallowRef, onMounted, watchEffect, openBlock, createElementBlock, createElementVNode } from "vue";
import { useResizeObserver } from "@vueuse/core";
import { init } from "echarts";
import debounce from "lodash-es/debounce";
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
      var _a;
      (_a = chartInstance.value) == null ? void 0 : _a.setOption(options, deep, lazyUpdate);
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
