import { deepMergeArrayOptions } from "@mmj-code-lib/lowcode/es/components";
import { pieColors, pieLegend, pieTooltipOptions, pieTitleOptions, innerLabelSeries1, pieSeriesRecord } from "./const.js";
import merge from "lodash-es/merge";
const pieCommonOptions = {
  title: pieTitleOptions,
  tooltip: pieTooltipOptions,
  legend: pieLegend,
  color: pieColors
};
function usePieCommonSeries(series, linearGradients, colors, layout) {
  const dynamicSeries = layout === "innerLabel" ? innerLabelSeries1 : pieSeriesRecord;
  const newColors = Array.isArray(colors) ? colors : colors ? [colors] : [];
  if (Array.isArray(series)) {
    return series.map((serie) => {
      serie.data = usePieSeriesData(serie.data, newColors);
      return merge(getInnerSeries(linearGradients), dynamicSeries, serie);
    });
  }
  series.data = usePieSeriesData(series.data, newColors);
  return merge(getInnerSeries(linearGradients), dynamicSeries, series);
}
function getInnerSeries(linearColors) {
  return {
    itemStyle: {
      color: function(params) {
        return linearColors[params.dataIndex % linearColors.length];
      }
    }
  };
}
function usePieSeriesData(data, newColors) {
  return (data ?? []).map(
    (item, ckey) => merge(
      {
        label: {
          rich: {
            prop: {
              color: newColors[ckey]
            },
            unit: {
              color: newColors[ckey]
            },
            value: {
              color: newColors[ckey]
            }
          }
        }
      },
      item
    )
  );
}
function useCommonPieOptions(opts) {
  deepMergeArrayOptions(opts, Object.keys(pieCommonOptions), Object.values(pieCommonOptions));
  return merge({}, pieCommonOptions, opts);
}
export {
  pieCommonOptions,
  useCommonPieOptions,
  usePieCommonSeries
};
