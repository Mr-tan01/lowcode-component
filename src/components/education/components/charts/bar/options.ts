import { type EChartsOption, type BarSeriesOption, type SeriesOption, type EChartsCoreOption } from "echarts";
import merge from 'lodash-es/merge';
import { mergeLineRecord } from "@/components/education/components/charts/line/options";
import { barColors, gridOptions, legendOptions, tooltipOptions, xAxisOptions, yAxisOptions } from "./const";
import { deepMergeArrayOptions } from "~/@mmj-code-lib/lowcode/es/components";


export const commonBarOptions: EChartsOption = {
    tooltip: tooltipOptions,
    legend: legendOptions,
    grid: gridOptions,
    xAxis: xAxisOptions,
    yAxis: yAxisOptions,
    color: barColors,
};

const defHorizontalBarOptions: EChartsOption = {
    grid: {
        top: 40,
        right: 80,
        bottom: 40,
        left: 20,
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0],
        nameLocation: 'end',
        nameTextStyle: {
            padding: [0, 0, 0, 5],
            color: '#fff',
            fontSize: 14,
            lineHeight: 20,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.2)',
                type: 'dotted',
            }
        },
    },
    yAxis: {
        type: 'category',
        boundaryGap: true,
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.2)',
            }
        },
    }
}

export const horizontalBarOptions: EChartsOption = merge({}, commonBarOptions, defHorizontalBarOptions);

export const commonBarSeries: BarSeriesOption = {
    barWidth: 20,
    showBackground: true,
    backgroundStyle: {
        borderWidth: 20,
        borderColor: 'rgba(0, 148, 255, 0.1)',
        borderRadius: 0,
        color: 'transparent',
        opacity: 1,
    },
    markPoint: {
        symbolSize: [20, 10],
    },
}

export const smallBarSeries: BarSeriesOption = merge({}, commonBarSeries, {
    barWidth: 12,
    backgroundStyle: {
        borderWidth: 12,
        opacity: 1,
    },
    markPoint: {
        symbolSize: [12, 6],
    },
});

export function useCommonBarOptions(opts: EChartsOption | EChartsCoreOption, props: { isHorizontal: Boolean }) {
    const dynaicOptions = props.isHorizontal ? horizontalBarOptions : commonBarOptions;
    deepMergeArrayOptions(opts, Object.keys(dynaicOptions), Object.values(dynaicOptions));
    return merge({}, dynaicOptions, opts);
}

function mergeSeriesRecord(series1: SeriesOption, series2: SeriesOption, index: number) {
    if (series2.type === 'bar' || !series2.type) {
        return merge({}, series1, series2);
    } else if (series2.type === 'line') {
        return mergeLineRecord(index, series2);
    }
    return series2;
}

export function useCommonBarSeries(series: EChartsOption['series'], props: { stack: Boolean }): EChartsOption['series'] {

    if (Array.isArray(series)) {
        if (series.length > 1) {
            // 两条以上数据时，使用小尺寸的柱状图
            if (props.stack) {
                // 堆叠柱状图，背景透明度为1/n，防止堆叠时背景颜色太重影响视觉效果
                smallBarSeries.backgroundStyle!.opacity = 1 / series.length;
            } else {
                smallBarSeries.backgroundStyle!.opacity = 1;
            }
            return series.map((item, index) => mergeSeriesRecord(smallBarSeries, item, index));
        }
        return series.map((item, index) => mergeSeriesRecord(commonBarSeries, item, index));
    }
    return merge({}, commonBarSeries, series);
}