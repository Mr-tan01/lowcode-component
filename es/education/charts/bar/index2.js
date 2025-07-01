import {
    defineComponent as p,
    useTemplateRef as h,
    computed as B,
    onMounted as k,
    openBlock as g,
    createElementBlock as y,
    createVNode as C,
    unref as v,
    mergeProps as O,
} from 'vue'
import { SChartsBar as A } from '@mmj-code-lib/lowcode/es/components'
import {
    useCommonBarOptions as G,
    useCommonBarSeries as I,
    commonBarOptions as b,
} from './options.js'
import w from 'lodash-es/merge'
import { barBuiltInStyle as z } from './const.js'
const H = { class: 'lc-bar-chart' },
    T = /* @__PURE__ */ p({
        __name: 'bar',
        props: {
            options: { default: () => ({}) },
            linearGradientColor: { default: () => z.color },
            isHorizontal: { type: Boolean, default: !1 },
            stack: { type: Boolean, default: !1 },
            fake3d: { type: Boolean, default: !0 },
        },
        setup(n) {
            const o = h('chartBarRef'),
                u = B(() => {
                    const e = G(n.options, { isHorizontal: n.isHorizontal })
                    return (
                        (e.series = I(e.series, { stack: n.stack })),
                        w({}, b, e)
                    )
                })
            return (
                k(() => {
                    var e, r
                    o.value &&
                        o.value.chartInstance &&
                        ((r =
                            (e = o.value) == null ? void 0 : e.chartInstance) ==
                            null ||
                            r.on('legendselectchanged', function (R) {
                                var i, f, d, m
                                const a =
                                    (i = o.value) == null
                                        ? void 0
                                        : i.chartInstance
                                if (!a) return
                                const s = a.getOption(),
                                    l =
                                        ((f = s.legend) == null ? void 0 : f[0])
                                            .selected || {},
                                    t = s.series,
                                    c = s.yAxis
                                !Array.isArray(c) ||
                                    c.length <= 1 ||
                                    a.setOption({
                                        yAxis: [
                                            {
                                                show:
                                                    l[
                                                        (d =
                                                            t == null
                                                                ? void 0
                                                                : t[0]) == null
                                                            ? void 0
                                                            : d.name
                                                    ] !== !1,
                                            },
                                            {
                                                show:
                                                    l[
                                                        (m =
                                                            t == null
                                                                ? void 0
                                                                : t[1]) == null
                                                            ? void 0
                                                            : m.name
                                                    ] !== !1,
                                            },
                                        ],
                                    })
                            }))
                }),
                (e, r) => (
                    g(),
                    y('div', H, [
                        C(
                            v(A),
                            O(
                                {
                                    opts: u.value,
                                    linearGradientColor: e.linearGradientColor,
                                    stack: e.stack,
                                    fake3d: e.fake3d,
                                },
                                e.$attrs,
                                { ref: 'chartBarRef' },
                            ),
                            null,
                            16,
                            ['opts', 'linearGradientColor', 'stack', 'fake3d'],
                        ),
                    ])
                )
            )
        },
    })
export { T as default }
