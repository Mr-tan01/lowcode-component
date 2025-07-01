import {
    defineComponent as O,
    ref as l,
    computed as c,
    onMounted as h,
    onBeforeUnmount as y,
    openBlock as z,
    createElementBlock as D,
} from 'vue'
import b from './images/default.png.js'
import k from './images/hover_image.png.js'
import { useResizeObserver as B } from '@vueuse/core'
import { merge as C, debounce as I } from 'lodash-es'
import { baseOptions as R } from './options.js'
import { init as T } from 'echarts'
const U = /* @__PURE__ */ O({
    __name: 'bubble',
    props: {
        data: { default: () => [] },
        options: {},
        debounceTime: { default: 300 },
        chartOptions: {},
    },
    setup(a) {
        const r = l(),
            t = l(),
            u = c(() =>
                a.data.map((e) => ({
                    name: e.label,
                    symbolSize: [180, 129],
                    draggable: !0,
                    symbol: `image://${b}`,
                    ...e,
                })),
            ),
            f = c(() =>
                C(
                    {},
                    R,
                    {
                        series: [
                            {
                                data: u.value,
                            },
                        ],
                    },
                    a.chartOptions,
                ),
            ),
            d = () => {
                var e, m
                ;((t.value = T(r.value)),
                    t.value.setOption(f.value, !0),
                    (e = t.value) == null ||
                        e.on('mouseover', function (o) {
                            var n
                            if (o.dataType === 'node') {
                                const g = u.value.map((i) => {
                                    var s
                                    return {
                                        ...i,
                                        symbol:
                                            i.name ===
                                            ((s =
                                                o == null ? void 0 : o.data) ==
                                            null
                                                ? void 0
                                                : s.name)
                                                ? `image://${k}`
                                                : `image://${b}`,
                                        symbolSize:
                                            i.name === o.data.name
                                                ? [200, 150]
                                                : [180, 129],
                                    }
                                })
                                ;(n = t.value) == null ||
                                    n.setOption({
                                        series: [
                                            {
                                                data: g,
                                            },
                                        ],
                                    })
                            }
                        }),
                    (m = t.value) == null ||
                        m.on('mouseout', function (o) {
                            var n
                            ;(n = t.value) == null ||
                                n.setOption({
                                    series: [
                                        {
                                            data: u.value,
                                        },
                                    ],
                                })
                        }))
            },
            p = () => {
                var e
                ;(e = t.value) == null || e.resize()
            },
            { stop: v } = B(r, I(p, a.debounceTime))
        return (
            h(d),
            y(v),
            (e, m) => (
                z(),
                D(
                    'div',
                    {
                        ref_key: 'bubbleDomRef',
                        ref: r,
                        class: 'bubble',
                    },
                    null,
                    512,
                    /* NEED_PATCH */
                )
            )
        )
    },
})
export { U as default }
