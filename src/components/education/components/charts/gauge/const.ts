import { graphic, type EChartsOption } from 'echarts'
import { type LinearGradient } from 'echarts/types/src/util/graphic'

export const gaugeColors: EChartsOption['color'] = [
    'rgba(15, 251, 248, 1)',
    'rgba(225, 188, 75, 1)',
    'rgba(34, 118, 252, 1)',
    'rgba(166, 207, 255, 1)',
    'rgba(119, 73, 255, 1)',
    'rgba(100, 214, 119, 1)',
]

// 为每个扇形设置不同的渐变颜色
export const gaugeInnerGraphicColors: LinearGradient[] = [
    new graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: 'rgba(15, 251, 248, 0.20)' }, // 渐变色起始颜色
        { offset: 1, color: '#0FFBF8' }, // 渐变色结束颜色
    ]),
    new graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: 'rgba(225, 188, 75, 0.20)' },
        { offset: 1, color: 'rgba(225, 188, 75, 1)' },
    ]),
    new graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: 'rgba(0, 148, 255, 0.20)' },
        { offset: 1, color: 'rgba(0, 148, 255, 1)' },
    ]),
    new graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: 'rgba(166, 207, 255, 0.20)' },
        { offset: 1, color: 'rgba(166, 207, 255, 1)' },
    ]),
    new graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: 'rgba(119, 73, 255, 0.20)' },
        { offset: 1, color: 'rgba(119, 73, 255, 1)' },
    ]),
]

export const gaugeTitleOptions: EChartsOption['title'] = {
    text: '0',
    subtext: '',
    left: 'center',
    top: 'center',
    itemGap: 0,
    textVerticalAlign: 'top',
    textStyle: {
        color: '#fff',
        fontSize: 28,
        width: 106,
        height: 42,
        lineHeight: 42,
        padding: 0,
        overflow: 'truncate',
    },
    subtextStyle: {
        color: '#F2F3F4',
        fontSize: 14,
        padding: 0,
        lineHeight: 16,
        overflow: 'truncate',
    },
}
export const gaugeSeriesRecordOptions: EChartsOption['series'] = {
    type: 'gauge',
    startAngle: 90,
    endAngle: -270,
    pointer: {
        show: false,
    },
    progress: {
        show: true,
        overlap: false,
        roundCap: false,
        clip: false,
        itemStyle: {
            borderColor: 'rgba(3, 29, 61, 1)',
            borderWidth: 5,
        },
    },
    axisLine: {
        lineStyle: {
            width: 15,
            color: [[1, 'rgba(3, 29, 61, 1)']],
        },
    },
    splitLine: {
        show: false,
        distance: 0,
        length: 10,
    },
    axisTick: {
        show: false,
    },
    axisLabel: {
        show: false,
        distance: 50,
    },
    title: {
        fontSize: 14,
        show: false,
    },
    detail: {
        show: false,
        height: 14,
        fontSize: 14,
        formatter: '{value}%',
    },
}

export const gaugeSeriesDataItemOptions = {}
