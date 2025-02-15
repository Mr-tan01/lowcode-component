import { graphic, type EChartsOption } from "echarts";
import { LinearGradient } from "echarts/types/src/util/graphic";
export const lineColors = ['rgba(15, 250, 248, 1)', 'rgba(225, 188, 75, 1)', 'rgba(222, 56, 4, 1)'];
export const yAxisOptions: EChartsOption['yAxis'] = {
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
            type: 'dotted',
        }
    },
    axisLabel: {
        color: '#fff',
        fontSize: 14,
        lineHeight: 20,
        margin: 13,
        formatter: (value) => {
            return value;
        },
    },
    axisLine: {
        lineStyle: {
            color: 'rgba(255, 255, 255, 0.2)',
        }
    },
}
export const tooltipOptions: EChartsOption['tooltip'] = {
    backgroundColor: 'rgba(0, 32, 61, 1)',
    borderColor: 'rgba(15, 251, 248, 1)',
    textStyle: {
        color: '#fff',
        fontSize: 14,
        lineHeight: 20,
    }
}
export const legendOptions: EChartsOption['legend'] = {
    show: true,
    top: 'bottom',
    left: 'center',
    textStyle: {
        fontSize: 14,
        color: '#fff',
        lineHeight: 24,
    },
    itemWidth: 12,
    itemHeight: 12,
    itemGap: 20,
    type: 'scroll',
    pageIconColor: 'rgba(15, 251, 248, 1)',
    pageIconInactiveColor: '#e5e5e5',
    pageTextStyle: {
        fontSize: 12,
        color: '#fff',
    }
}

export const gridOptions: EChartsOption['grid'] = {
    top: 50,
    bottom: 40
}

export const xAxisOptions: EChartsOption['xAxis'] = {
    type: 'category',
    boundaryGap: true,
    splitLine: {
        show: true,
        lineStyle: {
            color: 'rgba(255, 255, 255, 0.2)',
            type: 'dotted',
            width: 1,
        }
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
}

export const defLinearGradients: LinearGradient[] = [
    new graphic.LinearGradient(0, 0, 0, 1, [
        {
            offset: 0,
            color: 'rgba(15, 251, 248, 1)'
        },
        {
            offset: 1,
            color: 'rgba(15, 251, 248, 0.05)'
        }
    ]),
    new graphic.LinearGradient(0, 0, 0, 1, [
        {
            offset: 0,
            color: 'rgba(255, 175, 103, 1)'
        },
        {
            offset: 1,
            color: 'rgba(225, 188, 75, 0)'
        }
    ]),
]