import { defineComponent, useTemplateRef, computed, onMounted, onUnmounted, createElementBlock, openBlock, createVNode, unref, mergeProps } from "vue";
import { SChartsBar } from "@mmj-code-lib/lowcode/es/components";
import { useCommonBarOptions, useCommonBarSeries, commonBarOptions } from "./options.js";
import merge from "lodash-es/merge";
import { barBuiltInStyle } from "./const.js";
const _hoisted_1 = { class: "lc-bar-chart" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "bar",
  props: {
    options: { default: () => ({}) },
    linearGradientColor: { default: () => barBuiltInStyle.color },
    isHorizontal: { type: Boolean, default: false },
    stack: { type: Boolean, default: false },
    fake3d: { type: Boolean, default: true },
    events: { default: () => ({}) }
  },
  setup(__props) {
    const chartBar = useTemplateRef("chartBarRef");
    const renderOptions = computed(() => {
      const newOptions = useCommonBarOptions(__props.options, { isHorizontal: __props.isHorizontal });
      newOptions.series = useCommonBarSeries(newOptions.series, { stack: __props.stack });
      return merge({}, commonBarOptions, newOptions);
    });
    onMounted(() => {
      var _a, _b;
      if (chartBar.value && chartBar.value.chartInstance) {
        Object.entries(__props.events).forEach(([eventName, eventHandler]) => {
          var _a2, _b2;
          if (typeof eventHandler !== "function") return;
          (_b2 = (_a2 = chartBar.value) == null ? void 0 : _a2.chartInstance) == null ? void 0 : _b2.on(eventName, eventHandler(chartBar));
        });
        if (typeof __props.events.legendselectchanged !== "function" && __props.events.legendselectchanged !== null)
          (_b = (_a = chartBar.value) == null ? void 0 : _a.chartInstance) == null ? void 0 : _b.on("legendselectchanged", function() {
            var _a2, _b2, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
            const chart = (_a2 = chartBar.value) == null ? void 0 : _a2.chartInstance;
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
      if (chartBar.value && chartBar.value.chartInstance) {
        Object.entries(__props.events).forEach(([eventName, eventHandler]) => {
          var _a, _b;
          if (typeof eventHandler !== "function") return;
          (_b = (_a = chartBar.value) == null ? void 0 : _a.chartInstance) == null ? void 0 : _b.off(eventName, eventHandler(chartBar));
        });
        chartBar.value.chartInstance.dispose();
        chartBar.value.chartInstance = void 0;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(SChartsBar), mergeProps(_ctx.$attrs, {
          ref: "chartBarRef",
          opts: renderOptions.value,
          "linear-gradient-color": _ctx.linearGradientColor,
          stack: _ctx.stack,
          fake3d: _ctx.fake3d
        }), null, 16, ["opts", "linear-gradient-color", "stack", "fake3d"])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
