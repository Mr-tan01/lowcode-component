import merge from "lodash-es/merge";
import { deepMergeArrayOptions } from "@mmj-code-lib/lowcode/es/components";
import { lineColors, yAxisOptions, xAxisOptions, gridOptions, legendOptions, tooltipOptions, defLinearGradients } from "./const.js";
import lineSymbol from "./images/symobl.png.js";
import lineSymbol2 from "./images/symobl2.png.js";
import { useCommonBarSeries } from "../bar/options.js";
const symbolList = [lineSymbol, lineSymbol2];
const commonLineOptions = {
  tooltip: tooltipOptions,
  legend: legendOptions,
  grid: gridOptions,
  xAxis: xAxisOptions,
  yAxis: yAxisOptions,
  color: lineColors
};
const commonLineSeries = {
  symbol: `image://${symbolList[0]}`,
  symbolSize: 23,
  type: "line",
  z: 99,
  // 混合情况确保在柱状图之上
  lineStyle: {
    width: 1,
    type: "solid",
    color: lineColors[0]
  },
  markPoint: {
    symbolSize: [0, 0]
  },
  areaStyle: {
    opacity: 0.32,
    color: defLinearGradients[0]
  }
};
function useCommonLineOptions(opts) {
  deepMergeArrayOptions(opts, Object.keys(commonLineOptions), Object.values(commonLineOptions));
  return merge({}, commonLineOptions, opts);
}
function mergeLineRecord(index, item) {
  return merge(
    {},
    merge({}, commonLineSeries, {
      symbol: `image://${symbolList[index]}`,
      lineStyle: {
        color: lineColors[index] ?? lineColors[0]
      },
      areaStyle: {
        color: defLinearGradients[index] ?? defLinearGradients[0]
      }
    }),
    item
  );
}
function useCommonLineSeries(series) {
  if (Array.isArray(series)) {
    return series.map((item, index) => {
      if (item.type === "line" || !item.type) {
        return mergeLineRecord(index, item);
      } else if (item.type === "bar") {
        const newBarSeries = useCommonBarSeries(
          merge(
            {
              itemStyle: {
                color: defLinearGradients[index] ?? defLinearGradients[0]
              },
              showBackground: false
            },
            item
          ),
          { stack: false }
        );
        return newBarSeries;
      }
      return item;
    });
  }
  return merge({}, commonLineSeries, series);
}
export {
  commonLineOptions,
  commonLineSeries,
  mergeLineRecord,
  useCommonLineOptions,
  useCommonLineSeries
};
