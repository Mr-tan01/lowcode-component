import { type EChartsOption } from 'echarts'

export function useRadarOptions(
    shape: 'circle' | 'polygon' = 'polygon',
    start = 0,
    len = 1,
    indicatorStart = 0,
    indicatorLen = 6,
    axisNameJoinMax = false,
): {
    options: EChartsOption
} {
    return {
        options: {
            radar: {
                shape,
                indicator: [
                    { name: '类目一', max: 6500 },
                    { name: '类目二', max: 1600 },
                    { name: '类目三', max: 3000 },
                    { name: '类目四', max: 3800 },
                    { name: '类目五', max: 5200 },
                    { name: '类目六', max: 2500 },
                ].slice(indicatorStart, indicatorLen),
                axisName: {
                    formatter: axisNameJoinMax ? void 0 : '{value}',
                },
            },
            legend: {
                show: true,
            },
            series: [
                {
                    name: '雷达图',
                    data: [
                        {
                            value: [420, 300, 2000, 3500, 5000, 1800],
                            name: '类型一',
                        },
                        {
                            value: [500, 1400, 2800, 2600, 4200, 2100],
                            name: '类型二',
                        },
                        {
                            value: [200, 400, 2020, 602, 220, 102],
                            name: '类型三',
                        },
                    ].slice(start, len),
                },
            ],
        },
    }
}
