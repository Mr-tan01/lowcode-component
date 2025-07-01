import { type EChartsOption } from 'echarts'

export const progressSeries: EChartsOption['series'] = {
    startAngle: -180,
    endAngle: 0,
    min: 0,
    max: 240,
    splitNumber: 10,
    clockwise: true,
    itemStyle: {},
    progress: {
        show: true,
        roundCap: false,
        width: 18,
        itemStyle: {
            borderWidth: 0,
        },
    },
    pointer: {
        show: true,
        length: '100%',
        width: 4,
        offsetCenter: [0, '0%'],
        itemStyle: {
            color: 'rgba(255, 255, 255, 1)',
            borderColor: '#fff',
        },
    },
    axisLine: {
        show: true,
        roundCap: false,
        lineStyle: {
            width: 18,
        },
    },
    axisTick: {
        show: false,
    },
    splitLine: {
        show: false,
    },
    anchor: {
        show: true,
        showAbove: true,
        size: 25,
        itemStyle: {
            color: '#fff',
            opacity: 0.4,
            borderWidth: 0,
        },
    },
    axisLabel: {
        show: true,
        distance: -40,
        color: '#fff',
        fontSize: 14,
        formatter: function (value) {
            return value.toFixed(0)
        },
    },
    title: {
        show: false,
    },
    detail: {
        show: true,
        offsetCenter: [0, '30%'],
        valueAnimation: true,
        formatter: function (value) {
            return '{value|' + value.toFixed(0) + '}'
        },
        rich: {
            value: {
                fontSize: 40,
                color: '#fff',
            },
        },
    },
}
