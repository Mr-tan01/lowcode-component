import p from 'lodash-es/merge'
import { deepMergeArrayOptions as d } from '@mmj-code-lib/lowcode/es/components'
import {
    tooltipOptions as u,
    legendOptions as f,
    gridOptions as g,
    xAxisOptions as y,
    yAxisOptions as O,
    scatterColors as n,
    commonScatterSeries as c,
} from './const.js'
import { setRgbaAlpha as A } from 'lowcode-share/es/share'
const a = {
    tooltip: u,
    legend: f,
    grid: g,
    xAxis: y,
    yAxis: O,
    color: n,
    series: c,
}
function S(o, t) {
    return (
        t && Reflect.deleteProperty(a, 'tooltip'),
        d(o, Object.keys(a), Object.values(a)),
        p({}, a, o)
    )
}
function l(o, t) {
    var m, i
    const r = n[t % n.length]
    return p(
        {},
        c,
        {
            itemStyle: {
                color: A(r, 0.51),
                borderColor: r,
                shadowBlur: 10,
                shadowColor: 'rgba(0,0,0,0.5)',
            },
            markPoint: {
                emphasis: {
                    itemStyle: {
                        // @ts-ignore
                        borderColor:
                            ((m = o == null ? void 0 : o.itemStyle) == null
                                ? void 0
                                : m.borderColor) ?? r,
                    },
                },
                data:
                    ((i = o.data) == null
                        ? void 0
                        : i.map((e, s) => ({
                              name: e.name,
                              coord: [s, e.value, e],
                              meta: {
                                  color: r,
                                  ...(e.meta ?? {}),
                              },
                              item: e,
                          }))) ?? [],
            },
        },
        o,
    )
}
function R(o) {
    return Array.isArray(o) ? o.map((t, r) => l(t, r)) : l(o, 0)
}
export {
    a as commonScatterOptions,
    S as useCommonScatterOptions,
    R as useCommonScatterSeries,
}
