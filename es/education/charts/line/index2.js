import { defineComponent, computed, useTemplateRef, onMounted, onUnmounted, createElementBlock, openBlock, createVNode, unref, mergeProps } from "vue";
import { SChartsLine } from "@mmj-code-lib/lowcode/es/components";
import { useCommonLineOptions, useCommonLineSeries } from "./options.js";
import merge from "lodash-es/merge";
const _hoisted_1 = { class: "lc-line-chart" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "line",
  props: {
    options: { default: () => ({}) },
    events: { default: () => ({}) }
  },
  setup(__props) {
    const renderOptions = computed(() => {
      const newOptions = useCommonLineOptions(__props.options);
      newOptions.series = useCommonLineSeries(newOptions.series);
      return merge({}, newOptions);
    });
    const chartLine = useTemplateRef("chartLineRef");
    onMounted(() => {
      var _a, _b;
      if (chartLine.value && chartLine.value.chartInstance) {
        Object.entries(__props.events).forEach(([eventName, eventHandler]) => {
          var _a2, _b2;
          if (typeof eventHandler !== "function") return;
          (_b2 = (_a2 = chartLine.value) == null ? void 0 : _a2.chartInstance) == null ? void 0 : _b2.on(eventName, eventHandler(chartLine));
        });
        if (typeof __props.events.legendselectchanged !== "function" && __props.events.legendselectchanged !== null)
          (_b = (_a = chartLine.value) == null ? void 0 : _a.chartInstance) == null ? void 0 : _b.on("legendselectchanged", function() {
            var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
            const chart = (_a2 = chartLine.value) == null ? void 0 : _a2.chartInstance;
            if (!chart) return;
            const option = chart.getOption();
            const legend = (_b2 = option.legend) == null ? void 0 : _b2[0];
            const selected = legend.selected || {};
            const seriesData = option.series;
            const yAxis = option.yAxis;
            if (!Array.isArray(yAxis)) return;
            if (yAxis.length <= 1) {
              const allHidden = Object.values(selected).every((show) => show === false);
              chart.setOption({
                yAxis: [
                  {
                    show: !allHidden,
                    axisLabel: {
                      formatter: !allHidden ? ((_d = (_c = yAxis[0]) == null ? void 0 : _c.axisLabel) == null ? void 0 : _d.formatter) || "{value}" : ""
                    }
                  }
                ]
              });
              return;
            }
            chart.setOption({
              yAxis: [
                {
                  show: selected[(_e = seriesData == null ? void 0 : seriesData[0]) == null ? void 0 : _e.name] !== false,
                  axisLabel: {
                    formatter: selected[(_f = seriesData == null ? void 0 : seriesData[0]) == null ? void 0 : _f.name] !== false ? ((_h = (_g = yAxis[0]) == null ? void 0 : _g.axisLabel) == null ? void 0 : _h.formatter) || "{value}" : ""
                    // 隐藏标签
                  }
                },
                {
                  show: selected[(_i = seriesData == null ? void 0 : seriesData[1]) == null ? void 0 : _i.name] !== false,
                  axisLabel: {
                    formatter: selected[(_j = seriesData == null ? void 0 : seriesData[1]) == null ? void 0 : _j.name] !== false ? ((_l = (_k = yAxis[1]) == null ? void 0 : _k.axisLabel) == null ? void 0 : _l.formatter) || "{value}" : ""
                    // 隐藏标签
                  }
                }
              ]
            });
          });
      }
    });
    onUnmounted(() => {
      if (chartLine.value && chartLine.value.chartInstance) {
        Object.entries(__props.events).forEach(([eventName, eventHandler]) => {
          var _a, _b;
          if (typeof eventHandler !== "function") return;
          (_b = (_a = chartLine.value) == null ? void 0 : _a.chartInstance) == null ? void 0 : _b.off(eventName, eventHandler(chartLine));
        });
        chartLine.value.chartInstance.dispose();
        chartLine.value.chartInstance = void 0;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(SChartsLine), mergeProps(_ctx.$attrs, {
          ref: "chartLineRef",
          opts: renderOptions.value
        }), null, 16, ["opts"])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
