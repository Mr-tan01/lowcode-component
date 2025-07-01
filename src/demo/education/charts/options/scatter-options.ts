import { EChartsCoreOption, EChartsInitOpts, EChartsOption } from 'echarts'

export function useScatterOptions(
    len = 2,
    start = 0,
): {
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
        },
    }
}

const data = [
    {
        areaName: '福田区',
        school: [
            {
                schoolName: '深圳市福田区天健天骄幼儿园',
                achvRate: '85.740',
                stdDev: '0.086',
            },
            {
                schoolName: '深圳市福田区竟智幼儿园',
                achvRate: '60.190',
                stdDev: '0.275',
            },
            {
                schoolName: '深圳市福田区华庭思博幼儿园',
                achvRate: '70.930',
                stdDev: '0.157',
            },
            {
                schoolName: '深圳市福田区新天力园中幼儿园',
                achvRate: '63.180',
                stdDev: '0.242',
            },
            {
                schoolName: '深圳市福田区第三幼儿园翠湾分园',
                achvRate: '83.600',
                stdDev: '0.108',
            },
            {
                schoolName: '深圳市福田区美懿英皇幼儿园有限公司',
                achvRate: '79.380',
                stdDev: '0.113',
            },
            {
                schoolName: '深圳市福田区第一幼儿园',
                achvRate: '84.560',
                stdDev: '0.104',
            },
            {
                schoolName: '深圳市福田区曙光私立幼儿园',
                achvRate: '48.000',
                stdDev: '0.302',
            },
            {
                schoolName: '深圳市福田区实验教育集团附属幼儿园',
                achvRate: '66.440',
                stdDev: '0.245',
            },
            {
                schoolName: '深圳市福田区铭爵幼儿园有限公司',
                achvRate: '63.290',
                stdDev: '0.236',
            },
            {
                schoolName: '深圳市福田区绿洲小学附属幼儿园',
                achvRate: '70.580',
                stdDev: '0.200',
            },
            {
                schoolName: '中国人民解放军驻香港部队幼儿园',
                achvRate: '77.620',
                stdDev: '0.132',
            },
            {
                schoolName: '深圳市福田区园岭实验小学附属幼儿园',
                achvRate: '77.930',
                stdDev: '0.131',
            },
            {
                schoolName: '深圳市福田区碧海云天幼儿园',
                achvRate: '78.160',
                stdDev: '0.111',
            },
            {
                schoolName: '深圳市福田区美莲小学附属幼儿园',
                achvRate: '81.940',
                stdDev: '0.070',
            },
            {
                schoolName: '深圳市福田区红岭中学(集团)石厦部附属幼儿园',
                achvRate: '65.490',
                stdDev: '0.238',
            },
            {
                schoolName: '深圳市景山幼儿园',
                achvRate: '67.520',
                stdDev: '0.148',
            },
        ],
    },
    {
        areaName: '南山区',
        school: [
            {
                schoolName: '深圳市南山区南光城市花园幼儿园',
                achvRate: '63.290',
                stdDev: '0.218',
            },
            {
                schoolName: '深圳市南山区锦绣花园幼儿园',
                achvRate: '78.710',
                stdDev: '0.125',
            },
            {
                schoolName: '深圳市南山区新桃源幼儿园',
                achvRate: '81.050',
                stdDev: '0.097',
            },
            {
                schoolName: '深圳市南山区蓝海幼儿园',
                achvRate: '63.960',
                stdDev: '0.235',
            },
            {
                schoolName: '深圳市南山区蛇口乔联幼儿园',
                achvRate: '71.200',
                stdDev: '0.114',
            },
            {
                schoolName: '深圳市南山区教育幼儿园(总校)',
                achvRate: '82.020',
                stdDev: '0.041',
            },
            {
                schoolName: '深圳市南山区南园幼儿园',
                achvRate: '66.860',
                stdDev: '0.202',
            },
            {
                schoolName: '深圳市南山区冠铭雅苑第一幼儿园',
                achvRate: '69.900',
                stdDev: '0.209',
            },
            {
                schoolName: '深圳市南山区瑞星幼儿园',
                achvRate: '65.360',
                stdDev: '0.248',
            },
            {
                schoolName: '深圳市南山区欢乐幼儿园',
                achvRate: '60.570',
                stdDev: '0.257',
            },
            {
                schoolName: '深圳市南山区碧榕湾幼儿园',
                achvRate: '76.480',
                stdDev: '0.122',
            },
            {
                schoolName: '深圳市南山区阅山境幼儿园',
                achvRate: '75.810',
                stdDev: '0.134',
            },
            {
                schoolName: '深圳市南山区同乐华泰幼儿园',
                achvRate: '72.750',
                stdDev: '0.153',
            },
            {
                schoolName: '深圳市南山区育才童乐幼儿园',
                achvRate: '70.440',
                stdDev: '0.105',
            },
            {
                schoolName: '深圳市南山区育林幼儿园',
                achvRate: '49.410',
                stdDev: '0.297',
            },
            {
                schoolName: '深圳市南山区蔚蓝海岸东区幼儿园',
                achvRate: '60.650',
                stdDev: '0.203',
            },
            {
                schoolName: '深圳市南山区松坪第二幼儿园',
                achvRate: '60.560',
                stdDev: '0.184',
            },
            {
                schoolName: '深圳市南山区西苑幼儿园',
                achvRate: '53.090',
                stdDev: '0.218',
            },
            {
                schoolName: '深圳市南山区天地峰景幼儿园',
                achvRate: '84.610',
                stdDev: '0.119',
            },
            {
                schoolName: '深圳市南山区童年幼儿园',
                achvRate: '63.150',
                stdDev: '0.205',
            },
        ],
    },
]

// 插值 目前逻辑只支持3位小数
const startInter = Array.from(Array(50))
    .map((_, index) => ((index + 1) / 1000) * -1)
    .reverse()
const endInter = [0, ...Array.from(Array(350)).map((_, index) => (index + 1) / 1000)]
const interpolationXData = [...startInter, ...endInter]

const dataMaps = data.map(item => {
    return item.school.reduce((pre, cur) => {
        pre[cur.stdDev] = cur
        return pre
    }, {})
})
export function useFourScatterOptions(): {
    options: EChartsOption | EChartsInitOpts | EChartsCoreOption
} {
    return {
        options: {
            xAxis: [
                {
                    data: interpolationXData,
                    show: false,
                    interval: 0.05,
                },
            ],
            series: data.map((item, index) => {
                return {
                    name: item.areaName,
                    data: interpolationXData.map(num => {
                        const record = dataMaps[index] ?? {}
                        const el = record[`${Number(num)}`] // 目前只支持3位小数
                        return el
                            ? {
                                  name: el.schoolName,
                                  value: Number(el.achvRate ?? '0'),
                                  stdDev: Number(el.stdDev ?? '0'),
                              }
                            : {}
                    }),
                }
            }),
        },
    }
}
