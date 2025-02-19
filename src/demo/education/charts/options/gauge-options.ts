import { type EChartsOption } from "echarts"

export function useCommonGaugeOptions(): {
    options: EChartsOption
} {
    return {
        options: {
            title: {
                text: "100"
            },
            series: [
                {
                    axisLine: {
                        lineStyle: {
                            width: 18 * 5,
                        }
                    },
                    data: [
                        {
                            value: 20,
                            name: '类目一',
                        },
                        {
                            value: 40,
                            name: '类目二',
                        },
                        {
                            value: 60,
                            name: '类目三',

                        },
                        {
                            value: 60,
                            name: '类目四',
                        },
                        {
                            value: 80,
                            name: '类目五',
                        },
                        {
                            value: 90,
                            name: '类目六',
                        },
                    ]
                }
            ]
        }
    }
}