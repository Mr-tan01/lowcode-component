import merge from "lodash-es/merge";
import { deepMergeArrayOptions } from "@mmj-code-lib/lowcode/es/components";
import { commonScatterSeries, funnelColors, yAxisOptions, xAxisOptions, gridOptions, legendOptions, tooltipOptions } from "./const.js";
const commonScatterOptions = {
  tooltip: tooltipOptions,
  legend: legendOptions,
  grid: gridOptions,
  xAxis: xAxisOptions,
  yAxis: yAxisOptions,
  color: funnelColors,
  series: commonScatterSeries
};
function useCommonScatterOptions(opts) {
  var _a;
  deepMergeArrayOptions(opts, Object.keys(commonScatterOptions), Object.values(commonScatterOptions));
  const legendValues = {};
  (((_a = opts == null ? void 0 : opts.series[0]) == null ? void 0 : _a.data) ?? []).forEach((item) => {
    legendValues[item.name] = item.value;
  });
  return merge(
    {},
    commonScatterOptions,
    {
      legend: [
        {},
        {
          formatter(name) {
            return name + "：" + legendValues[name] + "%";
          }
        }
      ]
    },
    opts
  );
}
function mregeSeriesRecord(newSeries) {
  return merge({}, commonScatterSeries, newSeries);
}
function useCommonScatterSeries(series) {
  if (Array.isArray(series)) {
    return series.map((item) => {
      return mregeSeriesRecord(item);
    });
  }
  return mregeSeriesRecord(series ?? {});
}
export {
  commonScatterOptions,
  useCommonScatterOptions,
  useCommonScatterSeries
};
