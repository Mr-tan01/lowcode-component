import {
    defineComponent as i,
    mergeDefaults as a,
    openBlock as n,
    createElementBlock as o,
    createElementVNode as e,
    toDisplayString as c,
    createVNode as s,
    unref as r,
} from 'vue'
import { NNumberAnimation as l } from 'naive-ui/es/number-animation'
import _ from './images/card/small-substrate-bg.png.js'
const m = { class: 'minitype-card' },
    d = { class: 'minitype-card__label' },
    p = { class: 'minitype-card__value' },
    u = { class: 'minitype-card__value__num' },
    g = { class: 'minitype-card__img' },
    b = ['src'],
    N = /* @__PURE__ */ i({
        __name: 'minitypeCard',
        props: /* @__PURE__ */ a(
            {
                label: {
                    type: String,
                },
                value: {
                    type: Number,
                },
                bgIcon: {
                    type: String,
                },
            },
            {
                label: '已建成并投入运行设施(个)',
                value: 0,
                bgIcon: _,
                __skip_bgIcon: !0,
            },
        ),
        setup(t) {
            return (f, v) => (
                n(),
                o('div', m, [
                    e(
                        'div',
                        d,
                        c(t.label),
                        1,
                        /* TEXT */
                    ),
                    e('div', p, [
                        e('span', u, [
                            s(
                                r(l),
                                {
                                    'show-separator': '',
                                    'from': 0,
                                    'to': t.value,
                                    'active': '',
                                    'precision': 0,
                                },
                                null,
                                8,
                                ['to'],
                            ),
                        ]),
                    ]),
                    e('div', g, [
                        e(
                            'img',
                            {
                                src: t.bgIcon,
                                alt: '',
                            },
                            null,
                            8,
                            b,
                        ),
                    ]),
                ])
            )
        },
    })
export { N as default }
