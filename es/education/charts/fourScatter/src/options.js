import merge from "lodash-es/merge";
import { deepMergeArrayOptions } from "@mmj-code-lib/lowcode/es/components";
import { commonScatterSeries, scatterColors, yAxisOptions, xAxisOptions, gridOptions, legendOptions, tooltipOptions } from "./const.js";
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
function useCommonScatterOptions(opts, isDefaultTooltip) {
  if (isDefaultTooltip) {
    Reflect.deleteProperty(commonScatterOptions, "tooltip");
  }
  deepMergeArrayOptions(opts, Object.keys(commonScatterOptions), Object.values(commonScatterOptions));
  return merge({}, commonScatterOptions, opts);
}
function mregeSeriesRecord(newSeries, seriesIndex) {
  var _a, _b;
  const color = scatterColors[seriesIndex % scatterColors.length];
  return merge(
    {},
    commonScatterSeries,
    {
      itemStyle: {
        color: setRgbaAlpha(color, 0.51),
        borderColor: color,
        shadowBlur: 10,
        shadowColor: "rgba(0,0,0,0.5)"
      },
      markPoint: {
        emphasis: {
          itemStyle: {
            // @ts-ignore
            borderColor: ((_a = newSeries == null ? void 0 : newSeries.itemStyle) == null ? void 0 : _a.borderColor) ?? color
          }
        },
        data: ((_b = newSeries.data) == null ? void 0 : _b.map((item, index) => {
          return {
            name: item.name,
            coord: [index, item.value, item],
            meta: {
              color,
              ...item.meta ?? {}
            },
            item
          };
        })) ?? []
      }
    },
    newSeries
  );
}
function useCommonScatterSeries(series) {
  if (Array.isArray(series)) {
    return series.map((item, index) => {
      return mregeSeriesRecord(item, index);
    });
  }
  return mregeSeriesRecord(series ?? {}, 0);
}
export {
  commonScatterOptions,
  useCommonScatterOptions,
  useCommonScatterSeries
};
