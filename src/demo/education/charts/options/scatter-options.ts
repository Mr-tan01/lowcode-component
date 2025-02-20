import { EChartsOption } from "echarts";

export function useScatterOptions(len = 2, start = 0): {
    options: EChartsOption
} {
    return {
        options: {
            yAxis: {
                name: '单位/人',
            },
            xAxis: {
                data: Array.from(Array(5)).map((_, i) => `${i + 1}月`),
            },
            series: [
                {
                    name: '待审核',
                    data: Array.from(Array(5)).map((_, i) => Math.round(Math.random() * 1200 + i)),
                    areaStyle: null,
                },
                {
                    name: '已通过',
                    data: Array.from(Array(5)).map((_, i) => Math.round(Math.random() * 1020 + i)),
                    areaStyle: null,
                },
                {
                    name: '已通过3',
                    data: Array.from(Array(5)).map((_, i) => Math.round(Math.random() * 1020 + i)),
                    areaStyle: null,
                },
            ].slice(start, len),
        }
    };
}