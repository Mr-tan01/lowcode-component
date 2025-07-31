import { defineComponent, ref, computed, onMounted, onBeforeUnmount, openBlock, createElementBlock } from "vue";
import defaultImage from "./images/default.png.js";
import hoverImg from "./images/hover_image.png.js";
import { useResizeObserver } from "@vueuse/core";
import { merge, debounce } from "lodash-es";
import { baseOptions } from "./options.js";
import { init } from "echarts";
import { scale } from "mmjs-core/utils/scale";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "bubble",
  props: {
    data: { default: () => [] },
    debounceTime: { default: 300 },
    chartOptions: { default: () => ({}) }
  },
  setup(__props) {
    const bubbleDomRef = ref();
    const chartInstance = ref();
    const formatData = computed(() => {
      return __props.data.map((item) => {
        return {
          name: item.label,
          symbolSize: [scale(180), scale(129)],
          draggable: true,
          symbol: `image://${defaultImage}`,
          ...item
        };
      });
    });
    const renderOptions = computed(() => {
      const merged = merge(
        {},
        baseOptions,
        {
          series: [
            {
              data: formatData.value
            }
          ]
        },
        __props.chartOptions
      );
      return merged;
    });
    const initChart = () => {
      var _a, _b;
      chartInstance.value = init(bubbleDomRef.value);
      chartInstance.value.setOption(renderOptions.value, true);
      (_a = chartInstance.value) == null ? void 0 : _a.on("mouseover", function(params) {
        var _a2;
        if (params.dataType === "node") {
          const newData = formatData.value.map((node) => {
            var _a3;
            return {
              ...node,
              symbol: node.name === ((_a3 = params == null ? void 0 : params.data) == null ? void 0 : _a3.name) ? `image://${hoverImg}` : `image://${defaultImage}`,
              symbolSize: node.name === params.data.name ? [scale(200), scale(150)] : [scale(180), scale(129)]
            };
          });
          (_a2 = chartInstance.value) == null ? void 0 : _a2.setOption({
            series: [
              {
                data: newData
              }
            ]
          });
        }
      });
      (_b = chartInstance.value) == null ? void 0 : _b.on("mouseout", function() {
        var _a2;
        (_a2 = chartInstance.value) == null ? void 0 : _a2.setOption({
          series: [
            {
              data: formatData.value
            }
          ]
        });
      });
    };
    const resizeChart = () => {
      var _a;
      (_a = chartInstance.value) == null ? void 0 : _a.resize();
    };
    const { stop } = useResizeObserver(bubbleDomRef, debounce(resizeChart, __props.debounceTime));
    onMounted(initChart);
    onBeforeUnmount(stop);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          ref_key: "bubbleDomRef",
          ref: bubbleDomRef,
          class: "bubble"
        },
        null,
        512
        /* NEED_PATCH */
      );
    };
  }
});
export {
  _sfc_main as default
};
