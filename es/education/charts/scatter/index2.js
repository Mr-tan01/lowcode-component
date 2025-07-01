import {
    defineComponent as m,
    mergeDefaults as p,
    useTemplateRef as l,
    computed as r,
    openBlock as u,
    createElementBlock as f,
    createVNode as C,
    unref as d,
    mergeProps as h,
} from 'vue'
import b from '../common/components/Charts/baseChart/base.js'
import {
    useCommonScatterSeries as O,
    useCommonScatterOptions as g,
} from './options.js'
import n from 'lodash-es/merge'
import { scatterColors as v } from './const.js'
const B = { class: 'lc-scatter-chart' },
    w = /* @__PURE__ */ m({
        __name: 'scatter',
        props: /* @__PURE__ */ p(
            {
                options: Object,
            },
            {
                options: () => ({}),
            },
        ),
        setup(e, { expose: a }) {
            const c = l('baseChart'),
                i = r(() => {
                    var s
                    const t = n(
                        [],
                        v,
                        ((s = e.options) == null ? void 0 : s.color) ?? [],
                    )
                    e.options.series = O(e.options.series || [], t)
                    const o = g(e.options)
                    return n({}, o)
                })
            return (
                a({
                    instance: r(() => c.value),
                }),
                (t, o) => (
                    u(),
                    f('div', B, [
                        C(
                            d(b),
                            h({ options: i.value }, t.$attrs, {
                                ref: 'baseChart',
                            }),
                            null,
                            16,
                            ['options'],
                        ),
                    ])
                )
            )
        },
    })
export { w as default }
