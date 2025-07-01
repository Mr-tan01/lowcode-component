import s from 'lodash-es/merge'
import { deepMergeArrayOptions as p } from '@mmj-code-lib/lowcode/es/components'
import {
    tooltipOptions as a,
    legendOptions as l,
    gridOptions as u,
    xAxisOptions as O,
    yAxisOptions as g,
    scatterColors as m,
    commonScatterSeries as c,
} from './const.js'
import { setRgbaAlpha as f } from 'lowcode-share/es/share'
const i = {
    tooltip: a,
    legend: l,
    grid: u,
    xAxis: O,
    yAxis: g,
    color: m,
    series: c,
}
function y(r) {
    return (p(r, Object.keys(i), Object.values(i)), s({}, i, r))
}
function n(r, o, e) {
    const t = e[o % m.length]
    return s(
        {},
        c,
        {
            itemStyle: {
                color: () => f(t, 0.2),
                borderColor: t,
            },
        },
        r,
    )
}
function b(r, o) {
    return Array.isArray(r) ? r.map((e, t) => n(e, t, o)) : n(r ?? {}, 0, o)
}
export {
    i as commonScatterOptions,
    y as useCommonScatterOptions,
    b as useCommonScatterSeries,
}
