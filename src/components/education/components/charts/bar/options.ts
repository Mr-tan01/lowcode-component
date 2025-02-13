import { type EChartsOption, type BarSeriesOption } from "echarts";
import { YAXisOption } from "echarts/types/src/coord/cartesian/AxisModel";
import merge from 'lodash-es/merge';

export const barColors = ['rgba(54, 115, 245, 1)', 'rgba(1, 158, 43, 1)', 'rgba(222, 56, 4, 1)'];
export const yAxisOptions: YAXisOption = {
    nameLocation: 'end',
    nameTextStyle: {
        padding: [0, 20, 0, 0],
        color: '#fff',
        fontSize: 14,
        lineHeight: 20,
    },
    splitLine: {
        lineStyle: {
            color: 'rgba(255, 255, 255, 0.2)',
         
        }
    },
    axisLabel: {
        color: '#fff',
        fontSize: 14,
        lineHeight: 20,
        margin: 13,
    },
}
export const commonBarOptions: EChartsOption = {
    tooltip: {
        backgroundColor: 'rgba(0, 32, 61, 1)',
        borderColor: 'rgba(15, 251, 248, 1)',
        textStyle: {
            color: '#fff',
            fontSize: 14,
            lineHeight: 20,
        }
    },
    legend: {
        show: true,
        top: 'bottom',
        left: 'center',
        icon: 'rect',
        textStyle: {
            fontSize: 14,
            color: '#fff',
            lineHeight: 24,
        },
        itemGap: 20,
        type: 'scroll',
        pageIconColor: 'rgba(15, 251, 248, 1)',
        pageIconInactiveColor: '#e5e5e5',
        pageTextStyle: {
            fontSize: 12,
            color: '#fff',
        }
    },
    grid: {
        top: 50,
        bottom: 40
    },
    xAxis: {
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
        axisLabel: {
            color: '#fff',
            fontSize: 14,
            lineHeight: 20,
        }
    },
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

export const horizontalBarOptions: EChartsOption = merge<EChartsOption>({}, commonBarOptions, defHorizontalBarOptions);

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

export const smallBarSeries = merge({}, commonBarSeries, {
    barWidth: 12,
    backgroundStyle: {
        borderWidth: 12,
    },
    markPoint: {
        symbolSize: [12, 6],
    },
});

export function useCommonBarOptions(opt: EChartsOption, props: { isHorizontal: Boolean }) {
    const dynaicOptions = props.isHorizontal ? horizontalBarOptions : commonBarOptions;
    return merge({}, dynaicOptions, opt);
}

export function useCommonBarSeries(series: EChartsOption['series'], props: { stack: Boolean }) {

    if (Array.isArray(series)) {
        if (series.length > 1) {
            // 两条以上数据时，使用小尺寸的柱状图
            if(props.stack) {
                // 堆叠柱状图，背景透明度为1/n，防止堆叠时背景颜色太重影响视觉效果
                smallBarSeries.backgroundStyle.opacity = 1 / series.length;
            } else {
                smallBarSeries.backgroundStyle.opacity = 1;
            }
            return series.map((item) => merge({}, smallBarSeries, item));
        }
        return series.map((item) => merge({}, commonBarSeries, item));
    }
    return merge({}, commonBarSeries, series);
}