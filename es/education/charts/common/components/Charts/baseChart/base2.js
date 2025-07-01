import {
    defineComponent as u,
    mergeDefaults as l,
    useTemplateRef as f,
    shallowRef as h,
    onMounted as d,
    watchEffect as p,
    openBlock as b,
    createElementBlock as v,
    createElementVNode as g,
} from 'vue'
import { useResizeObserver as C } from '@vueuse/core'
import { init as M } from 'echarts'
import O from 'lodash-es/debounce'
const R = { class: 'lc-common-chart' },
    T = {
        class: 'lc-common-chart__wrapper',
        ref: 'commonChart',
    },
    I = /* @__PURE__ */ u({
        __name: 'base',
        props: /* @__PURE__ */ l(
            {
                debounceTime: Number,
                options: Object,
                notMerge: Boolean,
            },
            {
                debounceTime: 300,
                options: () => ({}),
                notMerge: !0,
            },
        ),
        setup(e, { expose: s }) {
            const c = f('commonChart'),
                o = h()
            C(
                c,
                O(() => {
                    var t
                    ;(t = o.value) == null || t.resize()
                }, e.debounceTime),
            )
            function m() {
                o.value = M(c.value, e.options)
            }
            d(() => {
                ;(m(), n(e.options, e.notMerge))
            })
            function n(t, r, i) {
                var a
                ;(a = o.value) == null || a.setOption(t, r, i)
            }
            return (
                p(
                    () => {
                        n(e.options, e.notMerge)
                    },
                    {
                        flush: 'post',
                    },
                ),
                s({
                    get chartInstance() {
                        return o.value
                    },
                    setOptions: n,
                }),
                (t, r) => (
                    b(),
                    v('div', R, [
                        g(
                            'div',
                            T,
                            null,
                            512,
                            /* NEED_PATCH */
                        ),
                    ])
                )
            )
        },
    })
export { I as default }
