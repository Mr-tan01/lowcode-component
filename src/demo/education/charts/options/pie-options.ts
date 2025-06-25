import { type EChartsOption } from "echarts";
import { merge } from "lodash-es";

const data = [
    { value: 1048, name: "类目类目二3123123sdfasd adasdas " },
    { value: 735, name: "类目二" },
    { value: 580, name: "类目三" },
    { value: 484, name: "类目四" },
    { value: 300, name: "类目五" },
];
const baeOptions = {
    title: {
        text: data.reduce((pre, cur) => pre + cur.value, 0).toString(),
        subtext: "类别总数",
    },
    series: [
        {
            name: "学校类别",
            data,
        },
    ],
};
export function usePieOptions(): { options: EChartsOption } {
    return {
        options: merge({}, baeOptions),
    };
}

export function usePieNotTileOptions(): { options: EChartsOption; showCustomLegend: boolean } {
    return {
        showCustomLegend: false,
        options: merge(
            {},
            {
                title: {
                    show: false,
                },
                series: [
                    {
                        name: "学校类别",
                        data,
                    },
                ],
            }
        ),
    };
}
export function useLabelPieOptions(): {
    options: EChartsOption;
    showCustomLegend: boolean;
    layout: "innerLabel";
} {
    return {
        showCustomLegend: false,
        layout: "innerLabel",
        options: merge({}, baeOptions),
    };
}

export function useProperctionPieOptions() {
    return {
        showCustomLegend: false,
        options: {
            title: {
                text: "59.4%",
                subtext: "占比",
            },
            series: [
                {
                    name: "类别",
                    data: [
                        { value: 55, name: "已完成" },
                        {
                            value: 45,
                            name: "未完成",
                            itemStyle: {
                                color: "rgba(15, 251, 248, 0.05)",
                            },
                        },
                    ],
                },
            ],
        },
    };
}

export const useFlorenceNightingaleRoseChartPieOption = (): {
    options: EChartsOption;
    showCustomLegend: boolean;
    layout: "innerLabel";
} => {
    return {
        showCustomLegend: false,
        layout: "innerLabel",
        options: {
            legend: {
                top: "bottom",
            },
            title: {
                show: false,
            },

            series: [
                {
                    radius: ["0%", "100%"],
                    name: "测试",
                    type: "pie",
                    roseType: "area",
                    data: [
                        { value: 40, name: "rose 1" },
                        { value: 38, name: "rose 2" },
                        { value: 32, name: "rose 3" },
                        { value: 30, name: "rose 4" },
                        { value: 28, name: "rose 5" },
                        { value: 26, name: "rose 6" },
                        { value: 22, name: "rose 7" },
                        { value: 18, name: "rose 8" },
                        { value: 18, name: "rose 9" },
                        { value: 58, name: "rose 10" },
                        { value: 78, name: "rose 11" },
                        { value: 12, name: "rose 12" },
                        { value: 13, name: "rose 13" },
                        { value: 8, name: "rose 14" },
                        { value: 58, name: "rose 15" },
                    ],
                },
            ],
        },
    };
};
