import { EChartsOption } from 'echarts'
import { funnelThemeConfig } from '~/src/components/education/components/charts'

export function useOptions(): {
    options: EChartsOption
} {
    return {
        options: {
            series: [
                {
                    data: [
                        { value: 60, name: 'Visit' },
                        { value: 40, name: 'Inquiry' },
                        { value: 20, name: 'Order' },
                        { value: 80, name: 'Click' },
                        { value: 100, name: 'Show' },
                    ].sort((a, b) => b.value - a.value),
                },
            ],
        },
    }
}

const tierData = [
    { value: 117, name: '类目名称' },
    { value: 163, name: 'Inquiry' },
    { value: 103, name: 'Order' },
    { value: 230, name: 'Click' },
    { value: 343, name: 'Show' },
].sort((a, b) => a.value - b.value)
export function useTierOptions(): {
    options: funnelThemeConfig.TierOptions
} {
    return {
        options: {
            series: [
                {
                    max: 350,
                    data: tierData,
                },
            ],
        },
    }
}
