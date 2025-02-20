import { type FunnelSeriesOption, type EChartsOption, } from "echarts";

export const funnelColors = [
    'rgba(15, 251, 248, 1)',
    'rgba(225, 188, 75, 1)',
    'rgba(34, 118, 252, 1)',
    'rgba(166, 207, 255, 1)',
    'rgba(119, 73, 255, 1)',
];
export const yAxisOptions: EChartsOption['yAxis'] = {
    nameLocation: 'end',
    show: false,
    nameTextStyle: {
        padding: [0, 20, 0, 0],
        color: '#fff',
        fontSize: 14,
        lineHeight: 20,
    },
    splitLine: {
        lineStyle: {
            color: 'rgba(255, 255, 255, 0.2)',
            type: 'dotted',
        }
    },
    axisLabel: {
        color: '#fff',
        fontSize: 14,
        lineHeight: 20,
        margin: 13,
        formatter: (value) => {
            return value;
        },
    },
    axisLine: {
        lineStyle: {
            color: 'rgba(255, 255, 255, 0.2)',
        }
    },
}
export const tooltipOptions: EChartsOption['tooltip'] = {
    backgroundColor: 'rgba(0, 32, 61, 1)',
    borderColor: 'rgba(15, 251, 248, 1)',
    textStyle: {
        color: '#fff',
        fontSize: 14,
        lineHeight: 20,
    },
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c}%'
}
export const legendOptions: EChartsOption['legend'] = [
    {
        show: true,
        top: 'bottom',
        left: 'center',
        textStyle: {
            fontSize: 14,
            color: '#fff',
            lineHeight: 24,
        },
        itemWidth: 12,
        itemHeight: 12,
        itemGap: 20,
        type: 'scroll',
        pageIconColor: 'rgba(15, 251, 248, 1)',
        pageIconInactiveColor: '#e5e5e5',
        pageTextStyle: {
            fontSize: 12,
            color: '#fff',
        },
        borderWidth: 0,
    },
    {
       
        left: '70%',
        top: 'center',
        orient:'vertical',
        icon: 'none',
        type: 'scroll',
        formatter(name) {
            return name;
        },
        align: 'right',
        padding: [0, 0, 0, 10],
        textStyle: {
            fontSize: 14,
            color: '#fff',
            lineHeight: 20,
            padding: [0, 0, 0, 0],
        },
    }
];

export const gridOptions: EChartsOption['grid'] = {
    top: 50,
    bottom: 40,
}

export const xAxisOptions: EChartsOption['xAxis'] = {
    type: 'category',
    show: false,
    boundaryGap: true,
    splitLine: {
        show: true,
        lineStyle: {
            color: 'rgba(255, 255, 255, 0.2)',
            type: 'dotted',
            width: 1,
        }
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

export const commonScatterSeries: FunnelSeriesOption = {
    type: 'funnel',
    name: 'Funnel',
    left: '10%',
    top: 60,
    bottom: 60,
    width: '60%',
    min: 0,
    max: 100,
    minSize: '0%',
    maxSize: '100%',
    sort: 'descending',
    gap: 2,
    label: {
        show: true,
        position: 'inside',
        color: '#fff',
        fontSize: 12,
        lineHeight: 16,
        formatter: '{c}%'
    },
    labelLine: {
        length: 10,
        lineStyle: {
            width: 1,
            type: 'solid'
        }
    },
    itemStyle: {
        borderColor: 'transparent',
        borderWidth: 1
    },
    emphasis: {
        label: {
            fontSize: 20
        }
    },
}