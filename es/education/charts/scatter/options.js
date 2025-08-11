import merge from "lodash-es/merge";
import { deepMergeArrayOptions } from "@mmj-code-lib/lowcode/es/components";
import { tooltipOptions, legendOptions, gridOptions, xAxisOptions, yAxisOptions, scatterColors, commonScatterSeries } from "./const.js";
import { setRgbaAlpha } from "lowcode-share/es/share";
const commonScatterOptions = {
  tooltip: tooltipOptions,
  legend: legendOptions,
  grid: gridOptions,
  xAxis: xAxisOptions,
  yAxis: yAxisOptions,
  color: scatterColors,
  series: commonScatterSeries
};
function useCommonScatterOptions(opts) {
  deepMergeArrayOptions(opts, Object.keys(commonScatterOptions), Object.values(commonScatterOptions));
  return merge({}, commonScatterOptions, opts);
}
function mregeSeriesRecord(newSeries, seriesIndex, colors) {
  const color = colors[seriesIndex % scatterColors.length];
  return merge(
    {},
    commonScatterSeries,
    {
      itemStyle: {
        color: () => setRgbaAlpha(color, 0.2),
        borderColor: color
      }
    },
    newSeries
  );
}
function useCommonScatterSeries(series, colors) {
  if (Array.isArray(series)) {
    return series.map((item, index) => {
      return mregeSeriesRecord(item, index, colors);
    });
  }
  return mregeSeriesRecord(series ?? {}, 0, colors);
}
export {
  commonScatterOptions,
  useCommonScatterOptions,
  useCommonScatterSeries
};
