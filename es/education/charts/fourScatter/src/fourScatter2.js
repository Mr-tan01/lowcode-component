import { defineComponent, useTemplateRef, computed, watch, createElementBlock, openBlock, createVNode, unref } from "vue";
import LcScatterChart from "../../scatter/index.js";
import merge from "lodash-es/merge";
import "@mmj-code-lib/lowcode/es/components";
import "lowcode-share/es/share";
import { useCommonScatterSeries, useCommonScatterOptions } from "./options.js";
const _hoisted_1 = { class: "lc-fourscatter" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "fourScatter",
  props: {
    options: { default: () => ({}) },
    isPushAxis: { type: Boolean, default: true },
    isDefaultTooltip: { type: Boolean, default: false }
  },
  emits: ["click"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const lcScatterChartComRef = useTemplateRef("lcScatterChartCom");
    const renderOptions = computed(() => {
      __props.options.series = useCommonScatterSeries(__props.options.series || []);
      const newOptions = useCommonScatterOptions(__props.options, __props.isDefaultTooltip);
      appendSplitAxis(newOptions);
      return merge({}, newOptions);
    });
    const $emits = __emit;
    watch(
      () => {
        var _a;
        return (_a = lcScatterChartComRef.value) == null ? void 0 : _a.instance;
      },
      (instance) => {
        if (!(instance == null ? void 0 : instance.chartInstance)) return;
        instance == null ? void 0 : instance.chartInstance.off("click");
        instance == null ? void 0 : instance.chartInstance.on("click", function(params) {
          $emits("click", params);
        });
      },
      {
        deep: true
      }
    );
    function appendSplitAxis(newOptions) {
      if (__props.isPushAxis) {
        newOptions.series.push(
          {
            type: "custom",
            coordinateSystem: "cartesian2d",
            silent: true,
            renderItem: function(params, api) {
              if (params.isRenderer) return;
              params.isRenderer = true;
              const width = api.getWidth() - 100;
              const height = api.getHeight();
              const y = height / 2 - 20;
              return {
                type: "line",
                shape: {
                  x1: 100,
                  y1: y,
                  x2: width,
                  y2: y
                },
                style: {
                  lineWidth: 0.5,
                  stroke: "rgba(255, 255, 255, 1)"
                }
              };
            },
            z: 10,
            level: 10,
            data: [1]
          },
          {
            type: "custom",
            silent: true,
            renderItem: function(params, api) {
              if (params.isRenderer) return;
              params.isRenderer = true;
              const width = api.getWidth();
              const height = api.getHeight() - 70;
              const x = width / 2;
              return {
                type: "line",
                shape: {
                  x1: x,
                  y1: 30,
                  x2: x,
                  y2: height
                },
                style: {
                  lineWidth: 0.5,
                  stroke: "rgba(255, 255, 255, 1)"
                }
              };
            },
            data: [1]
          }
        );
      }
    }
    __expose({
      instance: computed(() => {
        var _a;
        return (_a = lcScatterChartComRef.value) == null ? void 0 : _a.instance;
      })
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(LcScatterChart), {
          ref: "lcScatterChartCom",
          options: renderOptions.value
        }, null, 8, ["options"])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
