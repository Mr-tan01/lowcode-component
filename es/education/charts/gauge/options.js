import merge from "lodash-es/merge";
import { deepMergeArrayOptions } from "@mmj-code-lib/lowcode/es/components";
import { gaugeColors, gaugeSeriesRecordOptions, gaugeTitleOptions, gaugeInnerGraphicColors } from "./const.js";
import { commonTooltipOptions } from "../common/components/Charts/options/index.js";
const commonGaugeOptions = {
  tooltip: commonTooltipOptions,
  title: gaugeTitleOptions,
  series: gaugeSeriesRecordOptions,
  color: gaugeColors
};
function getInnerSeries(index) {
  return {
    itemStyle: {
      color: gaugeInnerGraphicColors[index % gaugeInnerGraphicColors.length]
    }
  };
}
function mergeSeriesData(newData) {
  const tempData = newData == null ? void 0 : newData.data;
  return merge(
    {
      data: (tempData == null ? void 0 : tempData.map((item, index) => merge(getInnerSeries(index), item))) ?? []
    },
    newData
  );
}
function useGaugeSeriesOptions(series) {
  if (Array.isArray(series)) {
    return series.map((item) => mergeSeriesData(item));
  }
  return mergeSeriesData(series);
}
function useCommonGaugeOptions(opts) {
  deepMergeArrayOptions(opts, Object.keys(commonGaugeOptions), Object.values(commonGaugeOptions));
  return merge({}, commonGaugeOptions, opts);
}
export {
  useCommonGaugeOptions,
  useGaugeSeriesOptions
};
