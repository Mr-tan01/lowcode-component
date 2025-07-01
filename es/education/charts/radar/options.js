import d from 'lodash-es/merge'
import {
    radarGridOptions as m,
    radarTooltipOptions as c,
    radarTitleOptions as p,
    radarLegendOptions as u,
    radarItemOptions as f,
    radarSeriesOptions as O,
    radarColors as R,
} from './const.js'
import { deepMergeArrayOptions as v } from '@mmj-code-lib/lowcode/es/components'
const o = {
    grid: m,
    tooltip: c,
    title: p,
    legend: u,
    radar: f,
    series: O,
    color: R,
}
function n(r, e) {
    return d(
        {
            itemStyle: {},
        },
        o.series,
        e,
    )
}
function S(r) {
    return Array.isArray(r) ? r.map((e, i) => n(i, e)) : n(0, r)
}
const a = `
    font-size: 16px;
    color: #fff;
    line-height: 30px;
`
function x(r) {
    var i
    v(r, Object.keys(o), Object.values(o))
    const e =
        ((i = r == null ? void 0 : r.radar) == null ? void 0 : i.indicator) ??
        []
    return d(
        {
            tooltip: {
                formatter: (t) => `
                    <div class="tooltip-title" style="${a}">${t.seriesName}：${t.name}</div>
                    <div class="tooltip-item" style="${a}">${e.map((s, l) => `<div>${t.marker} ${s.name}：${t.value[l]}</div>`).join('')}</div>
                `,
            },
        },
        o,
        r,
    )
}
export { x as useCommonRadarOptions, S as useCommonRadarSeries }
