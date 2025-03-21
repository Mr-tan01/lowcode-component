import { type EChartsOption } from "echarts";
import { merge } from "lodash-es";

const data = [
    { value: 1048, name: '类目' },
    { value: 735, name: '类目二' },
    { value: 580, name: '类目三' },
    { value: 484, name: '类目四' },
    { value: 300, name: '类目五' }
];
const baeOptions = {
    title: {
        text: data.reduce((pre, cur) => (pre + cur.value), 0).toString(),
        subtext: '类别总数',
    },
    series: [
        {
            name: '学校类别',
            data,
        }
    ]
}
export function usePieOptions(): { options: EChartsOption } {

    return {
        options: merge({}, baeOptions)
    };

}
export function useLabelPieOptions(): {
    options: EChartsOption;
    showCustomLegend: boolean;
    layout: 'innerLabel';
} {
    return {
        showCustomLegend: false,
        layout: 'innerLabel',
        options: merge({}, baeOptions)
    };
}

export function useProperctionPieOptions() {
    return {
        showCustomLegend: false,
        options: {
            title: {
                text: '59.4%',
                subtext: '占比',
            },
            series: [
                {
                    name: '类别',
                    data: [
                        { value: 55, name: '已完成' },
                        {
                            value: 45, name: '未完成',
                            itemStyle: {
                                color: 'rgba(15, 251, 248, 0.05)',
                            },
                        },
                    ],
                }
            ]
        }
    };
}