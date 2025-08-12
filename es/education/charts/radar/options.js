import merge from "lodash-es/merge";
import { radarGridOptions, radarTooltipOptions, radarTitleOptions, radarLegendOptions, radarItemOptions, radarSeriesOptions, radarColors } from "./const.js";
import { deepMergeArrayOptions } from "@mmj-code-lib/lowcode/es/components";
const commonRadarOptions = {
  grid: radarGridOptions,
  tooltip: radarTooltipOptions,
  title: radarTitleOptions,
  legend: radarLegendOptions,
  radar: radarItemOptions,
  series: radarSeriesOptions,
  color: radarColors
};
function mergeRadarRecord(index, record) {
  const innerRadarSeriesRecord = {
    itemStyle: {}
  };
  return merge(innerRadarSeriesRecord, commonRadarOptions.series, record);
}
function useCommonRadarSeries(series) {
  if (Array.isArray(series)) {
    return series.map((item, index) => {
      return mergeRadarRecord(index, item);
    });
  }
  return mergeRadarRecord(0, series);
}
const tooltipItemStyle = `
    font-size: 16px;
    color: #fff;
    line-height: 30px;
`;
function useCommonRadarOptions(opts) {
  var _a;
  deepMergeArrayOptions(opts, Object.keys(commonRadarOptions), Object.values(commonRadarOptions));
  const indicator = ((_a = opts == null ? void 0 : opts.radar) == null ? void 0 : _a.indicator) ?? [];
  return merge(
    {
      tooltip: {
        formatter: (params) => {
          return `
                    <div class="tooltip-title" style="${tooltipItemStyle}">${params.seriesName}：${params.name}</div>
                    <div class="tooltip-item" style="${tooltipItemStyle}">${indicator.map((item, i) => `<div>${params.marker} ${item.name}：${params.value[i]}</div>`).join("")}</div>
                `;
        }
      }
    },
    commonRadarOptions,
    opts
  );
}
export {
  useCommonRadarOptions,
  useCommonRadarSeries
};
