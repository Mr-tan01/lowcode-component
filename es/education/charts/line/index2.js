import {
    defineComponent as n,
    mergeDefaults as r,
    computed as s,
    openBlock as i,
    createElementBlock as m,
    createVNode as p,
    unref as c,
    mergeProps as a,
} from 'vue'
import { SChartsLine as l } from '@mmj-code-lib/lowcode/es/components'
import {
    useCommonLineOptions as u,
    useCommonLineSeries as f,
} from './options.js'
import d from 'lodash-es/merge'
const _ = { class: 'lc-line-chart' },
    k = /* @__PURE__ */ n({
        __name: 'line',
        props: /* @__PURE__ */ r(
            {
                options: Object,
            },
            {
                options: () => ({}),
            },
        ),
        setup(o) {
            const t = s(() => {
                const e = u(o.options)
                return ((e.series = f(e.series)), d({}, e))
            })
            return (e, h) => (
                i(),
                m('div', _, [
                    p(c(l), a({ opts: t.value }, e.$attrs), null, 16, ['opts']),
                ])
            )
        },
    })
export { k as default }
