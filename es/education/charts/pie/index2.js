import { defineComponent, useCssVars, useTemplateRef, shallowRef, ref, computed, onMounted, watchPostEffect, onBeforeUnmount, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, createVNode, unref, createCommentVNode } from "vue";
import { init } from "echarts";
import { useCommonPieOptions, usePieCommonSeries } from "./options.js";
import merge from "lodash-es/merge";
import { useResizeObserver } from "@vueuse/core";
import { cloneDeep, debounce } from "lodash-es";
import { innerGraphicColors } from "./const.js";
import CommonLegend from "../common/components/Charts/legend/index.js";
import { transformEChartsConfig } from "@mmj-code-lib/lowcode/es/shared";
import { scale } from "mmjs-core";
const _hoisted_1 = { class: "lc-pie__wrapper" };
const _hoisted_2 = {
  key: 0,
  class: "lc-pie__wrapper__legend"
};
const _hoisted_3 = { class: "lc-pie__wrapper__chart" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "pie",
  props: {
    options: {},
    debounceTime: { default: 300 },
    legendLabel: { type: Function, default: (name) => name },
    graphicColors: { default: () => innerGraphicColors },
    flexDirection: { default: "row" },
    showCustomLegend: { type: Boolean, default: true },
    layout: { default: "default" },
    legendLeft: { default: "20%" },
    legendTop: { default: "50%" },
    legendPosition: { default: "relative" },
    legendWidth: { default: () => scale("128px") }
  },
  emits: ["legend:click", "legend:toggleSelect"],
  setup(__props, { expose: __expose, emit: __emit }) {
    useCssVars((_ctx) => ({
      "7f2b5b58": _ctx.flexDirection,
      "466f7cb4": wrapperPading.value,
      "86685a78": _ctx.legendPosition,
      "9db241bc": _ctx.legendLeft,
      "584bb2da": _ctx.legendTop,
      "a41ba54e": cssBlockSize.value
    }));
    const chartDomRef = useTemplateRef("chartDom");
    const chartInstance = shallowRef();
    const cloneDeepOptions = ref();
    const renderOptions = computed(() => {
      const newOptions = useCommonPieOptions(__props.options);
      newOptions.series = usePieCommonSeries(newOptions.series, __props.graphicColors, newOptions.color, __props.layout);
      if (newOptions.series && !Array.isArray(newOptions.series)) {
        newOptions.series = [newOptions.series];
      }
      return merge({}, newOptions);
    });
    function dispatchAction(type, name) {
      var _a;
      (_a = chartInstance.value) == null ? void 0 : _a.dispatchAction({
        type,
        name
      });
    }
    const $emit = __emit;
    function legendClick(record) {
      $emit("legend:click", record);
    }
    function legendToggleSelect(record) {
      dispatchAction(record.type, record.name);
      $emit("legend:toggleSelect", record);
    }
    onMounted(initChart);
    watchPostEffect(() => {
      setOptions(renderOptions.value, true);
    });
    const notHasTitle = computed(() => {
      const { title } = renderOptions.value;
      if (Array.isArray(title)) {
        return title.every((item) => (item == null ? void 0 : item.show) === false);
      }
      return (title == null ? void 0 : title.show) === false;
    });
    function initChart() {
      var _a, _b, _c;
      chartInstance.value = init(chartDomRef.value, renderOptions.value);
      (_a = chartInstance.value) == null ? void 0 : _a.setOption(renderOptions.value);
      cloneDeepOptions.value = cloneDeep(merge((_b = chartInstance.value) == null ? void 0 : _b.getOption(), renderOptions.value));
      const adaptOptions = transformEChartsConfig(cloneDeepOptions.value);
      (_c = chartInstance.value) == null ? void 0 : _c.setOption(adaptOptions);
    }
    function setOptions(option, notMerge, lazyUpdate) {
      var _a;
      const adaptOptions = transformEChartsConfig({ ...cloneDeepOptions.value, ...option });
      console.log(adaptOptions, "===。");
      (_a = chartInstance.value) == null ? void 0 : _a.setOption(adaptOptions, notMerge, lazyUpdate);
    }
    const cssBlockSize = ref("100%");
    function resizeChart(entries) {
      var _a;
      const entry = entries[0];
      const { width, height } = entry.contentRect;
      cssBlockSize.value = scale(Math.min(width, height)) + "px";
      (_a = chartInstance.value) == null ? void 0 : _a.resize();
    }
    const { stop } = useResizeObserver(chartDomRef, debounce(resizeChart, __props.debounceTime));
    const wrapperPading = computed(() => __props.legendPosition === "absolute" ? `0 ${scale(__props.legendWidth)}` : "0");
    onBeforeUnmount(stop);
    __expose({
      chartInstance,
      stop,
      setOptions,
      dispatchAction
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(["lc-pie", [`lc-pie--${_ctx.layout}`]]),
          style: normalizeStyle({
            "--legendWidth": _ctx.legendWidth
          })
        },
        [
          createElementVNode("div", _hoisted_1, [
            _ctx.showCustomLegend ? (openBlock(), createElementBlock("div", _hoisted_2, [
              createVNode(unref(CommonLegend), {
                "legend-label": _ctx.legendLabel,
                options: renderOptions.value,
                "onLegend:click": legendClick,
                "onLegend:toggleSelect": legendToggleSelect
              }, null, 8, ["legend-label", "options"])
            ])) : createCommentVNode("v-if", true),
            createElementVNode("div", _hoisted_3, [
              createElementVNode(
                "div",
                {
                  ref: "chartDom",
                  class: normalizeClass(["lc-pie__wrapper__chart__inner", [notHasTitle.value ? "lc-pie__wrapper__chart__inner--not--title" : "lc-pie__wrapper__chart__inner--title"]])
                },
                null,
                2
                /* CLASS */
              )
            ])
          ])
        ],
        6
        /* CLASS, STYLE */
      );
    };
  }
});
export {
  _sfc_main as default
};
