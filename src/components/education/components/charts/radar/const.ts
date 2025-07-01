import { type SeriesOption, type EChartsOption } from 'echarts'
import { type ZRColor } from 'echarts/types/src/util/types'

export const radarTitleOptions: EChartsOption['title'] = {
    show: false,
}

export const radarColors: ZRColor[] = ['rgba(15, 251, 248, 1)', 'rgba(225, 188, 75, 1)', 'rgba(0, 148, 255, 1)']
export const radarTooltipOptions: EChartsOption['tooltip'] = {
    backgroundColor: 'rgba(0, 32, 61, 1)',
    borderColor: 'rgba(15, 251, 248, 1)',
    textStyle: {
        color: '#fff',
        fontSize: 14,
        lineHeight: 20,
    },
    appendTo: 'body',
}
export const radarLegendOptions: EChartsOption['legend'] = {
    show: true,
    top: 'bottom',
    left: 'center',
    icon: 'roundRect',
    itemWidth: 12,
    itemHeight: 12,
    itemGap: 20,
    textStyle: {
        color: '#fff',
        fontSize: 14,
        lineHeight: 20,
    },
    type: 'scroll',
}

export const radarGridOptions: EChartsOption['grid'] = {
    containLabel: true,
}

export const radarItemOptions: EChartsOption['radar'] = {
    splitArea: {
        show: false,
    },
    center: ['50%', '50%'],
    radius: '50%',
    axisLine: {
        lineStyle: {
            color: 'rgba(255, 255, 255, 0.4)',
        },
    },
    splitLine: {
        lineStyle: {
            color: 'rgba(255, 255, 255, 0.5)',
        },
    },
    axisName: {
        color: '#fff',
        fontSize: 14,
        lineHeight: 20,
        formatter(name, indicatorOpt) {
            return `{max|${indicatorOpt?.max}}\n{name|${name}}`
        },
        rich: {
            max: {
                color: '#fff',
                fontSize: 18,
                padding: [2, 4],
                align: 'center',
                borderRadius: 4,
            },
        },
    },
    indicator: [],
}

export const radarSeriesOptions: EChartsOption['series'] = {
    type: 'radar',
    itemStyle: {
        // @ts-ignore
        color(params) {
            return radarColors[params.dataIndex % radarColors.length]!
        },
    },
    symbol: 'none',
    areaStyle: {
        opacity: 0.2,
    },
    lineStyle: {
        width: 1.5,
        opacity: 1,
    },
}

export const radarSeriesDataRecordOptions: SeriesOption['data'] = {
    label: {
        show: true,
        formatter: function (params) {
            return params.value
        },
    },
}
