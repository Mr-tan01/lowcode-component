import {
    defineComponent as l,
    mergeDefaults as a,
    computed as c,
    openBlock as o,
    createElementBlock as n,
    normalizeClass as m,
    createElementVNode as e,
    toDisplayString as s,
} from 'vue'
import p from './images/ltr-bz.png.js'
import { overflowStr as d } from 'lowcode-share/es/share'
const _ = { class: 'lc-chart-title__wrapper' },
    x = ['title'],
    v = /* @__PURE__ */ l({
        __name: 'chartTitle',
        props: /* @__PURE__ */ a(
            {
                text: {
                    type: String,
                },
                maxLength: {
                    type: Number,
                },
                dir: {
                    type: String,
                },
            },
            {
                text: '',
                maxLength: 6,
                dir: 'ltr',
            },
        ),
        setup(t) {
            const i = c(() => d(t.text, t.maxLength))
            return (h, r) => (
                o(),
                n(
                    'div',
                    {
                        class: m([
                            'lc-chart-title',
                            [`lc-chart-title--${t.dir}`],
                        ]),
                    },
                    [
                        e('div', _, [
                            e(
                                'div',
                                {
                                    class: 'lc-chart-title__wrapper__text',
                                    title: t.text,
                                },
                                s(i.value),
                                9,
                                x,
                            ),
                            r[0] ||
                                (r[0] = e(
                                    'div',
                                    { class: 'lc-chart-title__wrapper__icon' },
                                    [
                                        e('img', {
                                            src: p,
                                            alt: 'icon',
                                        }),
                                    ],
                                    -1,
                                    /* HOISTED */
                                )),
                        ]),
                    ],
                    2,
                    /* CLASS */
                )
            )
        },
    })
export { v as default }
