const t = {
    startAngle: -180,
    endAngle: 0,
    min: 0,
    max: 240,
    splitNumber: 10,
    clockwise: !0,
    itemStyle: {},
    progress: {
        show: !0,
        roundCap: !1,
        width: 18,
        itemStyle: {
            borderWidth: 0,
        },
    },
    pointer: {
        show: !0,
        length: '100%',
        width: 4,
        offsetCenter: [0, '0%'],
        itemStyle: {
            color: 'rgba(255, 255, 255, 1)',
            borderColor: '#fff',
        },
    },
    axisLine: {
        show: !0,
        roundCap: !1,
        lineStyle: {
            width: 18,
        },
    },
    axisTick: {
        show: !1,
    },
    splitLine: {
        show: !1,
    },
    anchor: {
        show: !0,
        showAbove: !0,
        size: 25,
        itemStyle: {
            color: '#fff',
            opacity: 0.4,
            borderWidth: 0,
        },
    },
    axisLabel: {
        show: !0,
        distance: -40,
        color: '#fff',
        fontSize: 14,
        formatter: function (e) {
            return e.toFixed(0)
        },
    },
    title: {
        show: !1,
    },
    detail: {
        show: !0,
        offsetCenter: [0, '30%'],
        valueAnimation: !0,
        formatter: function (e) {
            return '{value|' + e.toFixed(0) + '}'
        },
        rich: {
            value: {
                fontSize: 40,
                color: '#fff',
            },
        },
    },
}
export { t as progressSeries }
