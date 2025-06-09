const data = [
    {
        fromName: "北京",
        toName: "新加坡",
        coords: [
            [116.4551, 40.2539],
            [103.8198, 1.3521],
        ],
    },
];
export const options = {
    animation: false,
    GLMap: {},
    series: [
        {
            // 背景线
            type: "lines",
            coordinateSystem: "GLMap",
            zlevel: 3,
            lineStyle: {
                normal: {
                    cursor: "pointer",
                    color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [
                            {
                                offset: 0,
                                color: "rgba(96, 255, 68, 0.9)", // 起始颜色，带透明度
                            },
                            {
                                offset: 1,
                                color: "rgba(255, 68, 68, 0.3)", // 结束颜色，带透明度
                            },
                        ],
                    },
                    width: 6, // 背景线宽度
                    opacity: 1,
                    curveness: 0.2,
                },
            },
            data: data, // 使用相同的数据
        },
        {
            // 前景线
            type: "lines",
            coordinateSystem: "GLMap",
            zlevel: 2,
            lineStyle: {
                normal: {
                    cursor: "pointer",
                    color: "#fff", // 线条颜色
                    width: 1, // 前景线宽度
                    opacity: 0.8,
                    curveness: 0.2,
                    type: "dashed",
                    dashOffset: 0,
                    dashArray: [5, 5],
                },
            },
            data: data, // 使用相同的数据
        },
        {
            type: "effectScatter",
            coordinateSystem: "GLMap",
            zlevel: 2,
            rippleEffect: { brushType: "stroke" },
            label: { normal: { show: true, position: "bottom", color: "#fff", formatter: "{b}" } },
            itemStyle: { normal: { color: "#60ff44" } },
            data: [
                { name: "北京", value: [116.4551, 40.2539] },
                { name: "新加坡", value: [103.8198, 1.3521] },
            ],
        },
    ],
};
