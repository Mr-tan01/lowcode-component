import { type EChartsOption } from "echarts";

export function usePieOptions(): { options: EChartsOption } {
    const data = [
        { value: 1048, name: '类目一' },
        { value: 735, name: '类目二' },
        { value: 580, name: '类目三' },
        { value: 484, name: '类目四' },
        { value: 300, name: '类目五' }
    ];
    return {
        options: {
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
        },
    }

}