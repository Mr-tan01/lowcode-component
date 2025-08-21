import merge from "lodash-es/merge";
import { mergeLineRecord } from "../line/options.js";
import { tooltipOptions, legendOptions, gridOptions, xAxisOptions, yAxisOptions, barColors } from "./const.js";
import { deepMergeArrayOptions } from "@mmj-code-lib/lowcode/es/components";
const commonBarOptions = {
  tooltip: tooltipOptions,
  legend: legendOptions,
  grid: gridOptions,
  xAxis: xAxisOptions,
  yAxis: yAxisOptions,
  color: barColors
};
const defHorizontalBarOptions = {
  grid: {
    top: 40,
    right: 80,
    bottom: 40,
    left: 20
  },
  xAxis: {
    type: "value",
    boundaryGap: [0, 0],
    nameLocation: "end",
    nameTextStyle: {
      padding: [0, 0, 0, 5],
      color: "#fff",
      fontSize: 14,
      lineHeight: 20
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: "rgba(255, 255, 255, 0.2)",
        type: "dotted"
      }
    }
  },
  yAxis: {
    type: "category",
    boundaryGap: true,
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: "rgba(255, 255, 255, 0.2)"
      }
    }
  }
};
const horizontalBarOptions = merge({}, commonBarOptions, defHorizontalBarOptions);
const commonBarSeries = {
  barWidth: 20,
  showBackground: true,
  z: 1,
  // 混合情况在折线图下方
  itemStyle: {
    shadowBlur: 0,
    shadowColor: "transparent"
  },
  backgroundStyle: {
    borderWidth: 20,
    borderColor: "rgba(0, 148, 255, 0.1)",
    borderRadius: 0,
    color: "transparent",
    opacity: 1
  },
  markPoint: {
    symbolSize: [20, 10]
  }
};
const smallBarSeries = merge({}, commonBarSeries, {
  barWidth: 12,
  backgroundStyle: {
    borderWidth: 12,
    opacity: 1
  },
  markPoint: {
    symbolSize: [12, 6]
  },
  z: 1
});
function useCommonBarOptions(opts, props) {
  const dynaicOptions = props.isHorizontal ? horizontalBarOptions : commonBarOptions;
  deepMergeArrayOptions(opts, Object.keys(dynaicOptions), Object.values(dynaicOptions));
  return merge({}, dynaicOptions, opts);
}
function mergeSeriesRecord(series1, series2, index) {
  if (series2.type === "bar" || !series2.type) {
    return merge({}, series1, series2);
  } else if (series2.type === "line") {
    return mergeLineRecord(index, series2);
  }
  return series2;
}
function useCommonBarSeries(series, props) {
  if (Array.isArray(series)) {
    if (series.length > 1) {
      if (props.stack) {
        smallBarSeries.backgroundStyle.opacity = 1 / series.length;
      } else {
        smallBarSeries.backgroundStyle.opacity = 1;
      }
      return series.map((item, index) => mergeSeriesRecord(smallBarSeries, item, index));
    }
    return series.map((item, index) => mergeSeriesRecord(commonBarSeries, item, index));
  }
  return merge({}, commonBarSeries, series);
}
export {
  commonBarOptions,
  commonBarSeries,
  horizontalBarOptions,
  smallBarSeries,
  useCommonBarOptions,
  useCommonBarSeries
};
