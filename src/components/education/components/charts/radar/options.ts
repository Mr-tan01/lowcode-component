import { type RadarComponentOption, type EChartsCoreOption, type EChartsOption } from "echarts";
import merge from "lodash-es/merge";
import { radarColors, radarGridOptions, radarItemOptions, radarLegendOptions, radarSeriesOptions, radarTitleOptions, radarTooltipOptions } from "./const";
import { deepMergeArrayOptions } from "@mmj-code-lib/lowcode/es/components";

const commonRadarOptions: EChartsOption = {
    grid: radarGridOptions,
    tooltip: radarTooltipOptions,
    title: radarTitleOptions,
    legend: radarLegendOptions,
    radar: radarItemOptions,
    series: radarSeriesOptions,
    color: radarColors,
}

function mergeRadarRecord(index: number, record: EChartsOption['series']) {
    const innerRadarSeriesRecord = {
        itemStyle: {
            
        }
    };
    return merge(innerRadarSeriesRecord, commonRadarOptions.series, record);
}
export function useCommonRadarSeries(series: EChartsOption['series']): EChartsOption['series'] {
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

export function useCommonRadarOptions(opts: EChartsOption | EChartsCoreOption): EChartsOption {
    deepMergeArrayOptions(opts, Object.keys(commonRadarOptions), Object.values(commonRadarOptions));
    // @ts-ignore
   const indicator = (opts?.radar?.indicator ?? []) as RadarComponentOption[];
    return merge({
        tooltip: {
            formatter: (params) => {
                return `
                    <div class="tooltip-title" style="${tooltipItemStyle}">${params.seriesName}：${params.name}</div>
                    <div class="tooltip-item" style="${tooltipItemStyle}">${indicator.map((item, i) => `<div>${params.marker} ${item.name}：${params.value[i]}</div>`).join('')}</div>
                `;
            }
        }
    }, commonRadarOptions, opts);
}