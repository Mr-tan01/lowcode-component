import {
    defineComponent as l,
    openBlock as r,
    createElementBlock as n,
    Fragment as a,
    renderList as i,
    renderSlot as d,
    createElementVNode as s,
    toDisplayString as u,
} from 'vue'
import { samplingStaticIcons as m } from './const.js'
const p = { class: 'Lc-boder' },
    _ = ['src'],
    f = { class: 'Lc-boder-box-text' },
    L = /* @__PURE__ */ l({
        __name: 'sampling',
        props: {
            list: { default: () => [] },
        },
        setup(g) {
            function c(e) {
                if (e) return m[e] ?? e
            }
            return (e, b) => (
                r(),
                n('div', p, [
                    (r(!0),
                    n(
                        a,
                        null,
                        i(
                            e.list,
                            (t, o) => (
                                r(),
                                n(
                                    'div',
                                    {
                                        class: 'Lc-boder-box',
                                        key: o,
                                    },
                                    [
                                        d(
                                            e.$slots,
                                            'default',
                                            {
                                                record: t,
                                                index: o,
                                            },
                                            () => [
                                                s(
                                                    'img',
                                                    {
                                                        src: c(t.icon),
                                                        alt: '',
                                                    },
                                                    null,
                                                    8,
                                                    _,
                                                ),
                                                s(
                                                    'span',
                                                    f,
                                                    u(t.name),
                                                    1,
                                                    /* TEXT */
                                                ),
                                            ],
                                            !0,
                                        ),
                                    ],
                                )
                            ),
                        ),
                        128,
                        /* KEYED_FRAGMENT */
                    )),
                ])
            )
        },
    })
export { L as default }
