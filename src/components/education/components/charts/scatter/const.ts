import { type ScatterSeriesOption, type EChartsOption } from 'echarts'

export const scatterColors = [
    'rgba(15, 251, 248, 1)',
    'rgba(254, 210, 77, 1)',
    'rgba(34, 252, 158, 1)',
    'rgba(255, 132, 83, 1)',
    'rgba(173, 210, 255, 1)',
    'rgba(222, 56, 4, 1)',
]
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
        },
    },
    axisLabel: {
        color: '#fff',
        fontSize: 14,
        lineHeight: 20,
        margin: 13,
        formatter: (value) => {
            return value
        },
    },
    axisLine: {
        lineStyle: {
            color: 'rgba(255, 255, 255, 0.2)',
        },
    },
}
export const tooltipOptions: EChartsOption['tooltip'] = {
    backgroundColor: 'rgba(0, 32, 61, 1)',
    borderColor: 'rgba(15, 251, 248, 1)',
    textStyle: {
        color: '#fff',
        fontSize: 14,
        lineHeight: 20,
    },
}
export const legendOptions: EChartsOption['legend'] = {
    show: false,
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
    },
}

export const gridOptions: EChartsOption['grid'] = {
    top: 50,
    bottom: 40,
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
        },
    },
    axisTick: {
        show: false,
    },
    axisLine: {
        lineStyle: {
            color: 'rgba(255, 255, 255, 0.2)',
        },
    },
    axisLabel: {
        color: '#fff',
        fontSize: 14,
        lineHeight: 20,
    },
}

export const commonScatterSeries: ScatterSeriesOption = {
    type: 'scatter',
    symbolSize: function (data) {
        return Math.max(Math.sqrt(data), 10)
    },
    itemStyle: {
        color: (data) => scatterColors[data.componentIndex],
        borderColor: '#fff',
        borderWidth: 1.2,
        opacity: 1,
    },
}
