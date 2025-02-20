import { EChartsOption } from "echarts";

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
                        { value: 100, name: 'Show' }
                    ].sort((a, b) => b.value - a.value),
                }
            ],
        }
    };
}