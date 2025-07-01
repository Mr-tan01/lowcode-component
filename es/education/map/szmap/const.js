const o = {
    光明: 'guangming',
    宝安: 'baoan',
    龙华: 'longhua',
    南山: 'nanshan',
    福田: 'futian',
    罗湖: 'luohu',
    盐田: 'yantian',
    坪山: 'pingshan',
    龙岗: 'longgang',
    大鹏新区: 'dapeng',
    深汕合作区: 'shenshan',
}
var a = /* @__PURE__ */ ((t) => (
    (t.HOVER = 'hover'),
    (t.DEFAULT = 'default'),
    t
))(a || {})
const n = {
        [o.光明]: '光明区',
        [o.宝安]: '宝安区',
        [o.龙华]: '龙华区',
        [o.南山]: '南山区',
        [o.福田]: '福田区',
        [o.罗湖]: '罗湖区',
        [o.盐田]: '盐田区',
        [o.坪山]: '坪山区',
        [o.龙岗]: '龙岗区',
        [o.大鹏新区]: '大鹏新区',
        [o.深汕合作区]: '深汕合作区',
    },
    s = {
        warning: {
            range: [0, 100],
            scale: 1.1,
            stop: [
                {
                    'stop-color': 'rgb(225, 188, 75)',
                    'stop-opacity': 1,
                    'offset': '0%',
                },
                {
                    'stop-color': 'rgb(225, 188, 75)',
                    'stop-opacity': 0,
                    'offset': '100%',
                },
            ],
        },
        series: {
            range: [101, 1 / 0],
            scale: 1.2,
            stop: [
                {
                    'stop-color': 'rgb(238, 111, 124)',
                    'stop-opacity': 1,
                    'offset': '0%',
                },
                {
                    'stop-color': 'rgb(238, 111, 124)',
                    'stop-opacity': 0,
                    'offset': '100%',
                },
            ],
        },
    }
export {
    a as LabelModelEnum,
    n as defBlockLableMap,
    s as defFloatLevelConfig,
    o as szBlockNames,
}
