import { type EChartsOption, graphic } from "echarts"
import { type LinearGradient } from "echarts/types/src/util/graphic";
import merge from "lodash-es/merge";

export const pieColors = ['#0FFBF8', '#E1BC4B', '#2276FC', '#A6CFFF', '#7749FF', '#64D677', '#EE6F7C'];
export const pieTitleOptions: EChartsOption['title'] = {
    text: '0',
    subtext: '总数',
    left: 'center',
    top: 'center',
    itemGap: 0,
    textVerticalAlign: 'top',
    textStyle: {
        color: '#fff',
        fontSize: 30,
        width: 106,
        height: 42,
        lineHeight: 42,
        padding: 0,
        overflow: 'truncate',

    },
    subtextStyle: {
        color: '#F2F3F4',
        fontSize: 16,
        padding: 0,
        lineHeight: 16,
        overflow: 'truncate',
    }
}

export const pieTooltipOptions: EChartsOption['tooltip'] = {
    trigger: 'item',
    backgroundColor: 'rgba(0, 32, 61, 1)',
    borderColor: 'rgba(15, 251, 248, 1)',
    textStyle: {
        color: '#fff',
        fontSize: 14,
        lineHeight: 20,
    }
}

export const pieLegend: EChartsOption['legend'] = {
    show: false,
    orient: 'vertical',
    left: 'left',
    top: 'center',
    textStyle: {
        color: '#fff',
    },
}
// 为每个扇形设置不同的渐变颜色
export const innerGraphicColors: LinearGradient[] = [
    new graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: 'rgba(15, 251, 248, 0.20)' }, // 渐变色起始颜色
        { offset: 1, color: '#0FFBF8' }  // 渐变色结束颜色
    ]),
    new graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: 'rgba(225, 188, 75, 0.20)' },
        { offset: 1, color: 'rgba(225, 188, 75, 1)' }
    ]),
    new graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: 'rgba(0, 148, 255, 0.20)' },
        { offset: 1, color: 'rgba(0, 148, 255, 1)' }
    ]),
    new graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: 'rgba(166, 207, 255, 0.20)' },
        { offset: 1, color: 'rgba(166, 207, 255, 1)' }
    ]),
    new graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: 'rgba(119, 73, 255, 0.20)' },
        { offset: 1, color: 'rgba(119, 73, 255, 1)' }
    ]),
];

export const pieSeriesRecord: EChartsOption['series'] = {
    name: 'pie',
    type: 'pie',
    radius: ['62%', '92%'],
    center: ['50%', '50%'],
    label: {
        show: false,
    },
    emphasis: {
        itemStyle: {

        }
    }
}

const innerLableOption: EChartsOption['series'] = {
    radius: ['42%', '62%'],
    label: {
        show: true,
        alignTo: 'edge',
        formatter: '{prop|{d}}{unit|%}\n{name|{b}}',
        minMargin: 5,
        edgeDistance: 10,
        rich: {
            prop: {
                fontSize: 20,
                lineHeight: 0,
                padding: [-20, 0, 0, 0],
            },
            unit: {
                fontSize: 14,
                lineHeight: 0,
                padding: [-17, 0, 0, 0],
            },
            name: {
                fontSize: 14,
                lineHeight: 20,
                color: '#ffffff'
            }
        }
    },
    labelLine: {
        length: 15,
        length2: 0,
        maxSurfaceAngle: 0
    },
}
export const innerLabelSeries1: EChartsOption['series'] = merge({}, pieSeriesRecord, innerLableOption);