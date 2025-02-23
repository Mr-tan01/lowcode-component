import { graphic, type EChartsOption } from "echarts"
import merge from "lodash-es/merge";
import { gaugeThemeOptions } from '~/es/education/charts';

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

export function useGaugeOptions(): {
    options: EChartsOption;
    showCustomLegend: boolean;
} {
    return {
        showCustomLegend: false,
        options: {
            title: {
                show: false,
            },
            series: merge({}, gaugeThemeOptions.progressSeries, {
                min: 0,
                max: 150,
                splitNumber: 7,
                data: [
                    {
                        value: 100,
                        itemStyle: {
                            color: new graphic.LinearGradient(0, 1, 0, 0, [
                                { offset: 0, color: 'rgba(15, 251, 248, 0.20)' }, // 渐变色起始颜色
                                { offset: 1, color: '#0FFBF8' }  // 渐变色结束颜色
                            ]),
                        }
                    }
                ]
            }),
        },
    }
}

export function useGaugeSvgOptions() {
    return {
        value: 100,
    }
}