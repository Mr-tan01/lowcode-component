import { deepMergeArrayOptions as l } from '@mmj-code-lib/lowcode/es/components'
import {
    pieTitleOptions as d,
    pieTooltipOptions as f,
    pieLegend as O,
    pieColors as S,
    innerLabelSeries1 as g,
    pieSeriesRecord as y,
} from './const.js'
import o from 'lodash-es/merge'
const a = {
    title: d,
    tooltip: f,
    legend: O,
    color: S,
}
function L(e, t, r, n) {
    const p = n === 'innerLabel' ? g : y,
        u = Array.isArray(r) ? r : r ? [r] : []
    return Array.isArray(e)
        ? e.map((i) => ((i.data = c(i.data, u)), o(m(t), p, i)))
        : ((e.data = c(e.data, u)), o(m(t), p, e))
}
function m(e) {
    return {
        itemStyle: {
            color: function (t) {
                return e[t.dataIndex % e.length]
            },
        },
    }
}
function c(e, t) {
    return (e ?? []).map((r, n) =>
        o(
            {
                label: {
                    rich: {
                        prop: {
                            color: t[n],
                        },
                        unit: {
                            color: t[n],
                        },
                        value: {
                            color: t[n],
                        },
                    },
                },
            },
            r,
        ),
    )
}
function P(e) {
    return (l(e, Object.keys(a), Object.values(a)), o({}, a, e))
}
export {
    a as pieCommonOptions,
    P as useCommonPieOptions,
    L as usePieCommonSeries,
}
