import { graphic } from "echarts";

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