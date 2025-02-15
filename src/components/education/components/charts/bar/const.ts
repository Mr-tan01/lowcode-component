import { graphic,  type EChartsOption, } from "echarts"; 

export const barBuiltInStyle: {
    color: graphic.LinearGradient[];
    symbols: [];
} = {
    color: [
        new graphic.LinearGradient(1, 0, 0, 1, [
            { offset: 0, color: 'rgba(15, 249, 246, 1)' },
            { offset: 1, color: 'rgba(4, 91, 111, 1)' }
        ]),
        new graphic.LinearGradient(1, 0, 0, 1, [
            { offset: 0, color: 'rgba(225, 188, 75, 1)' },
            { offset: 1, color: 'rgba(53, 69, 64, 1)' }
        ]),
        new graphic.LinearGradient(1, 0, 0, 1, [
            { offset: 0, color: 'rgba(0, 146, 251, 1)' },
            { offset: 1, color: 'rgba(0, 125, 216, 1)' }
        ]),
        new graphic.LinearGradient(1, 0, 0, 1, [
            { offset: 1, color: 'rgba(166, 207, 255, 0)' },
            { offset: 0, color: 'rgba(166, 207, 255, 1)' }
        ]),
        new graphic.LinearGradient(1, 0, 0, 1, [
            { offset: 1, color: 'rgba(119, 73, 255, 0)' },
            { offset: 0, color: 'rgba(119, 73, 255, 1)' }
        ])
    ],
    symbols: [

    ]
}

export const barColors = ['rgba(54, 115, 245, 1)', 'rgba(1, 158, 43, 1)', 'rgba(222, 56, 4, 1)'];
export const yAxisOptions: EChartsOption['yAxis'] = {
    nameLocation: 'end',
    nameTextStyle: {
        padding: [0, 20, 0, 0],
        color: '#fff',
        fontSize: 14,
        lineHeight: 20,
    },
    splitLine: {
        lineStyle: {
            color: 'rgba(255, 255, 255, 0.2)',

        }
    },
    axisLabel: {
        color: '#fff',
        fontSize: 14,
        lineHeight: 20,
        margin: 13,
    },
}

export const tooltipOptions: EChartsOption['tooltip'] = {
    backgroundColor: 'rgba(0, 32, 61, 1)',
    borderColor: 'rgba(15, 251, 248, 1)',
    textStyle: {
        color: '#fff',
        fontSize: 14,
        lineHeight: 20,
    }
}

export const legendOptions: EChartsOption['legend'] = {
    show: true,
    top: 'bottom',
    left: 'center',
    icon: 'roundRect',
    textStyle: {
        fontSize: 14,
        color: '#fff',
        lineHeight: 24,
    },
    itemGap: 20,
    itemWidth: 12,
    itemHeight: 12,
    type: 'scroll',
    pageIconColor: 'rgba(15, 251, 248, 1)',
    pageIconInactiveColor: '#e5e5e5',
    pageTextStyle: {
        fontSize: 12,
        color: '#fff',
    }
}

export const gridOptions: EChartsOption['grid'] = {
    top: 50,
    bottom: 40
}

export const xAxisOptions: EChartsOption['xAxis'] = {
    type: 'category',
    boundaryGap: true,
    splitLine: {
        show: false,
    },
    axisTick: {
        show: false,
    },
    axisLine: {
        lineStyle: {
            color: 'rgba(255, 255, 255, 0.2)',
        }
    },
    axisLabel: {
        color: '#fff',
        fontSize: 14,
        lineHeight: 20,
    }
}