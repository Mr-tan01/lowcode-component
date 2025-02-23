import orgImage from '../images/org.svg';
import blueImage from '../images/blue.svg';
import { type YAXisOption } from 'echarts/types/src/coord/cartesian/AxisModel';
import {
    LcBarChartOptions,
} from '~/es/education/charts';
import { type EChartsOption } from 'echarts';
export function chartsBarOpts(len: number): EChartsOption {
    return {
        yAxis: {
            name: '单位/人',
        },
        xAxis: {
            data: Array.from(Array(5)).map((_, i) => `${i + 1}月`),
        },
        series: [
            {
                name: '待审核',
                data: Array.from(Array(5)).map((_, i) => Math.round(Math.random() * 100 + i)),
                backgroundStyle: {

                },
            },
            {
                name: '已通过',
                data: Array.from(Array(5)).map((_, i) => Math.round(Math.random() * 100 + i)),
                backgroundStyle: {

                },
            },
            {
                name: '已通过2',
                data: Array.from(Array(5)).map((_, i) => Math.round(Math.random() * 100 + i)),
                backgroundStyle: {

                },
            },
            {
                name: '已通过3',
                data: Array.from(Array(5)).map((_, i) => Math.round(Math.random() * 100 + i)),
                backgroundStyle: {

                },
            },
            {
                name: '已通过4',
                data: Array.from(Array(5)).map((_, i) => Math.round(Math.random() * 100 + i)),
                backgroundStyle: {

                },
            },
            {
                name: '已通过5',
                data: Array.from(Array(5)).map((_, i) => Math.round(Math.random() * 100 + i)),
                backgroundStyle: {

                },
            },
        ].slice(0, len),
    }
};
export function chartsHorizontalBarOpts(len: number): EChartsOption {
    return {
        yAxis: {
            data: Array.from(Array(4)).map((_, i) => `类目${i + 1}`),
        },
        xAxis: {
            name: '',
        },
        series: [
            {
                name: '待审核',
                data: Array.from(Array(4)).map((_, i) => Math.round(Math.random() * 100 + i)),
            },
            {
                name: '已通过',
                data: Array.from(Array(4)).map((_, i) => Math.round(Math.random() * 100 + i)),
            },
        ].slice(0, len),
    }
};

export function chartNegativeBarOptions(): EChartsOption {
    return {
        grid: {
            right: 20,
        },
        yAxis: {
            data: Array.from(Array(4)).map((_, i) => `类目${i + 1}`),
        },
        series: [
            {
                name: '待审核',
                data: Array.from(Array(4)).map((_, i) => Math.round(Math.random() * -100 + i)),
            },
            {
                name: '已通过',
                data: Array.from(Array(4)).map((_, i) => Math.round(Math.random() * 100 + i)),
            },
        ],
    }
}

export function evenYaixsChartsBarOpts(len: number): EChartsOption {
    return {
        xAxis: {
            data: Array.from(Array(4)).map((_, i) => `类目${i + 1}`),
        },
        yAxis: [
            LcBarChartOptions.commonBarOptions.yAxis as YAXisOption,
            LcBarChartOptions.commonBarOptions.yAxis as YAXisOption,
        ],
        series: [
            {
                name: '待审核',
                data: Array.from(Array(4)).map((_, i) => Math.round(Math.random() * 100 + i)),
            },
            {
                name: '已通过',
                yAxisIndex: 1,
                data: Array.from(Array(4)).map((_, i) => Math.round(Math.random() * 100 + i)),
            },
        ].slice(0, len),
    }
}

export function pictorialBarOpts(start, len): EChartsOption | { series: {}[] } {
    return {
        xAxis: {
            data: Array.from(Array(4)).map((_, i) => `类目${i + 1}`),
        },
        yAxis: {

        },
        series: [
            {
                name: '类型名称',
                barWidth: 'auto',
                type: 'pictorialBar',
                barGap: 0,
                symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
                data: [123, 60, 25, 18],
            },
            {
                name: '类型名称1',
                barWidth: 'auto',
                type: 'pictorialBar',
                barGap: 0,
                symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
                data: [123, 60, 25, 18],
            },
            {
                name: '类型名称2',
                barWidth: 'auto',
                type: 'pictorialBar',
                barGap: '-50%',
                symbol: `image://${blueImage}`,
                itemStyle: {
                    opacity: 0.9
                },
                data: [23, 60, 125, 118],
            },
            {
                name: '类型名称3',
                barWidth: 'auto',
                type: 'pictorialBar',
                barGap: '-50%',
                symbol: `image://${orgImage}`,
                itemStyle: {
                    opacity: 0.9
                },
                data: [23, 160, 45, 108],
            },
        ].slice(start, len),
    }
} 