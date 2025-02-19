import { type EChartsOption } from "echarts";

export const commonTooltipOptions: EChartsOption['tooltip'] = {
    backgroundColor: 'rgba(0, 32, 61, 1)',
    borderColor: 'rgba(15, 251, 248, 1)',
    textStyle: {
        color: '#fff',
        fontSize: 14,
        lineHeight: 20,
    }
}