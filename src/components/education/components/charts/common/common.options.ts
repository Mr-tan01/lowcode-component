import { EChartsOption, SeriesOption } from 'echarts'
import merge from 'lodash-es/merge'

const baseDifferenceSerie: EChartsOption['series'] = {
    type: 'bar',
    data: [],
    showBackground: false,
    markPoint: {
        symbol: 'none',
        label: {
            show: false,
        },
    },
    markLine: {
        symbol: ['rect', 'rect'],
        symbolSize: [10, 1],
        lineStyle: {
            type: 'solid',
        },
        label: {
            show: false,
        },
    },
    itemStyle: {
        opacity: 0,
        color: 'rgba(225, 188, 75, 1)',
    },
}
export function useDifferenceSeries(data: any[][], serie?: EChartsOption['series']): SeriesOption {
    return merge(
        {},
        baseDifferenceSerie,
        {
            markLine: {
                data: data.map((item, index) => {
                    return item.map(el => {
                        return {
                            coord: [index, el],
                            name: index,
                        }
                    })
                }),
            },
            data: data.map(item => item[1]),
        },
        serie,
    ) as SeriesOption
}
