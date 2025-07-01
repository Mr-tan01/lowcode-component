import { type EChartsOption, EffectScatterSeriesOption } from 'echarts'
import tooltipContentBg from './images/tooltip-content-bg.png'
import tooltipContentBlueBg from './images/tooltip-content-blue-bg.png'

export const scatterColors = ['rgba(15, 251, 248, 1)', 'rgba(225, 188, 75, 1)', 'rgba(34, 118, 252, 1)', 'rgba(222, 56, 4, 1)']
const tooltipContentImageList = [tooltipContentBlueBg, tooltipContentBg]
const tooltipContentStyler = `
width: 107px;
height: 32px;
display: flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
padding: 7px 14p;
z-index: 100;
backdrop-filter: blur(5px);
transform: translate(-6px, 0px);
`
export const tooltipOptions: EChartsOption['tooltip'] = [
    {
        trigger: 'item',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderWidth: 0,
        position: 'right',
        padding: 0,
        appendTo: 'body',
        formatter(params) {
            const meta = params.data?.meta ?? {}
            const bg = meta?.bg ?? tooltipContentImageList[params.seriesIndex]
            return `<div class="tooltip-content" style="${tooltipContentStyler}background: url(${bg}) no-repeat center center / 100% 100%;">
                <div style="width: 100%;white-space: nowrap; overflow: hidden;  text-overflow: ellipsis; color: ${meta.color}; font-size: 16px;">${params.name}</div>
            </div>`
        },
        axisPointer: {
            type: 'none',
            label: {
                backgroundColor: '#6a7985',
                formatter(params) {
                    const value = Number(params.value)?.toFixed(2)
                    if (params.axisDimension === 'y') {
                        return `${value}%`
                    }
                    return value
                },
            },
        },
    },
]
export const legendOptions: EChartsOption['legend'] = {
    show: true,
    icon: 'roundRect',
    top: '65%',
    left: null as any,
    right: 15,
    orient: 'vertical',
    align: 'left',
    padding: 0,
    itemGap: 6,
    itemWidth: 12,
    itemHeight: 12,
    textStyle: {
        align: 'left',
        verticalAlign: 'middle',
        fontSize: 14,
        padding: [0, 0, 0, 0],
    },
}

export const gridOptions: EChartsOption['grid'] = {
    bottom: 70,
    left: 100,
    right: 100,
    top: 30,
}
export const yAxisOptions: EChartsOption['yAxis'] = [
    {
        type: 'value',
        axisLabel: {
            show: false,
        },
        min: 40,
        max: 110,
        interval: 10,
        position: 'right',
    },
    {
        boundaryGap: false,
        axisLabel: {
            formatter(value) {
                return `${value}%`
            },
            color(_value, index) {
                return index === 4 ? 'rgba(225, 75, 75, 1)' : '#ffffff'
            },
        },

        type: 'category',
        position: 'left',
        data: [40, 50, 60, 70, 75, 80, 90, 100, 110],
        axisTick: {
            show: false,
        },
        name: '平\n均\n达\n成\n率\n︵\n优\n质\n︶',
        nameLocation: 'middle',
        nameRotate: 0,
        nameTextStyle: {
            padding: [0, 105, 0, 0],
            verticalAlign: 'middle',
            align: 'center',
        },
    },
]
export const xAxisOptions: EChartsOption['xAxis'] = [
    {
        show: false,
        position: 'top',
    },
    {
        position: 'bottom',
        boundaryGap: false,
        data: ['(0.05)', '0.00', '0.05', '0.10', '0.15', '0.20', '0.25', '0.30', '0.35'],
        axisLabel: {
            color(_value, index) {
                return index === 0 ? 'rgba(225, 75, 75, 1)' : '#ffffff'
            },
        },
        name: '标准差(均衡)',
        nameLocation: 'middle',
        nameTextStyle: {
            padding: [20, 0, 0, 0],
            color: '#ffffff',
            fontSize: 14,
            lineHeight: 20,
        },
    },
]

export const commonScatterSeries: EffectScatterSeriesOption = {
    type: 'effectScatter',
    symbolSize: function (data) {
        return Math.max(Math.sqrt(data), 25)
    },
    itemStyle: {
        color: data => scatterColors[data.componentIndex],
        borderColor: '#fff',
        borderWidth: 2.5,
        opacity: 1,
    },
    animation: true,
    markPoint: {
        symbol: 'circle',
        silent: false,
        itemStyle: {
            borderType: 'dotted',
            borderWidth: 2,
            borderColor: 'transparent',
            opacity: 1,
            color: 'transparent',
        },
        tooltip: {
            show: true,
            trigger: 'item',
        },
        label: {
            show: false,
            silent: true,
            formatter(params) {
                // @ts-ignore
                return params.data?.coord?.[1].toFixed(2)
            },
            color: '#ffffff',
            fontSize: 14,
            fontWeight: 'bold',
            position: 'inside',
            align: 'center',
            verticalAlign: 'middle',
            textBorderColor: '#000000',
            textBorderType: 'solid',
            textBorderWidth: 2,
        },
        emphasis: {
            label: {
                show: true,
            },
        },
        data: [],
    },
}
