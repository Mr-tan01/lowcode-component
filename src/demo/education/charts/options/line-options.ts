import { EChartsCoreOption, EChartsOption, graphic } from 'echarts'
import { LcLineOptions } from '@/components/education/components/charts'

export function combinationOpts(
    len = 2,
    start = 0,
): EChartsCoreOption | EChartsOption {
    return {
        legend: [
            {
                ...LcLineOptions.commonLineOptions.legend,
                icon: null,
            },
        ],
        yAxis: {
            name: '单位/人',
        },
        xAxis: {
            data: Array.from(Array(5)).map((_, i) => `${i + 1}月`),
        },
        series: [
            {
                name: '待审核',
                data: Array.from(Array(5)).map((_, i) =>
                    Math.round(Math.random() * 100 + i),
                ),
                areaStyle: null,
            },
            {
                type: 'bar',
                name: '已通过',
                data: Array.from(Array(5)).map((_, i) =>
                    Math.round(Math.random() * 100 + i),
                ),
                areaStyle: null,
            },
            {
                type: 'line',
                name: '已通过2',
                data: Array.from(Array(5)).map((_, i) =>
                    Math.round(Math.random() * 100 + i),
                ),
                areaStyle: null,
            },
            {
                name: '已通过3',
                data: Array.from(Array(5)).map((_, i) =>
                    Math.round(Math.random() * 100 + i),
                ),
                areaStyle: null,
                smooth: true,
            },
            {
                name: '已通过4',
                data: Array.from(Array(5)).map((_, i) =>
                    Math.round(Math.random() * 100 + i),
                ),
                itemStyle: {
                    color: new graphic.LinearGradient(0, 1, 0, 0, [
                        { offset: 0, color: 'rgba(87, 151, 238, 1)' },
                        { offset: 1, color: 'rgba(45, 109, 245, 1)' },
                    ]),
                },
                areaStyle: null,
                smooth: true,
            },
            {
                name: '已通过5',
                data: Array.from(Array(5)).map((_, i) =>
                    Math.round(Math.random() * 100 + i),
                ),
                areaStyle: null,
                smooth: true,
            },
            {
                name: '已通过6',
                data: Array.from(Array(5)).map((_, i) =>
                    Math.round(Math.random() * 100 + i),
                ),
                smooth: true,
            },
            {
                name: '已通过7',
                data: Array.from(Array(5)).map((_, i) =>
                    Math.round(Math.random() * 100 + i),
                ),
                smooth: true,
            },
        ].slice(start, len),
    }
}
