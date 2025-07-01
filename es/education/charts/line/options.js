import r from 'lodash-es/merge'
import { deepMergeArrayOptions as p } from '@mmj-code-lib/lowcode/es/components'
import {
    tooltipOptions as y,
    legendOptions as a,
    gridOptions as c,
    xAxisOptions as f,
    yAxisOptions as u,
    lineColors as n,
    defLinearGradients as i,
} from './const.js'
import S from './images/symobl.png.js'
import b from './images/symobl2.png.js'
import { useCommonBarSeries as g } from '../bar/options.js'
const l = [S, b],
    t = {
        tooltip: y,
        legend: a,
        grid: c,
        xAxis: f,
        yAxis: u,
        color: n,
    },
    m = {
        symbol: `image://${l[0]}`,
        symbolSize: 23,
        type: 'line',
        lineStyle: {
            width: 1,
            type: 'solid',
            color: n[0],
        },
        markPoint: {
            symbolSize: [0, 0],
        },
        areaStyle: {
            opacity: 0.32,
            color: i[0],
        },
    }
function C(o) {
    return (p(o, Object.keys(t), Object.values(t)), r({}, t, o))
}
function O(o, e) {
    return r(
        {},
        r({}, m, {
            symbol: `image://${l[o]}`,
            lineStyle: {
                color: n[o] ?? n[0],
            },
            areaStyle: {
                color: i[o] ?? i[0],
            },
        }),
        e,
    )
}
function h(o) {
    return Array.isArray(o)
        ? o.map((e, s) =>
              e.type === 'line' || !e.type
                  ? O(s, e)
                  : e.type === 'bar'
                    ? g(
                          r(
                              {
                                  itemStyle: {
                                      color: i[s] ?? i[0],
                                  },
                                  showBackground: !1,
                              },
                              e,
                          ),
                          { stack: !1 },
                      )
                    : e,
          )
        : r({}, m, o)
}
export {
    t as commonLineOptions,
    m as commonLineSeries,
    O as mergeLineRecord,
    C as useCommonLineOptions,
    h as useCommonLineSeries,
}
