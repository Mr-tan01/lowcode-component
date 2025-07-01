import {
    defineComponent as _,
    useCssVars as p,
    toRefs as g,
    computed as v,
    openBlock as h,
    createElementBlock as x,
    normalizeClass as o,
    unref as e,
    normalizeStyle as y,
    createElementVNode as c,
    renderSlot as z,
} from 'vue'
import { useImage as $ } from './icons.js'
const B = ['src'],
    C = { class: 'lc-icon__span' },
    E = /* @__PURE__ */ _({
        __name: 'icon',
        props: {
            domain: { default: 'func' },
            name: { default: 'add' },
            size: { default: 32 },
            ext: { default: '.png' },
            selected: { type: Boolean, default: void 0 },
        },
        setup(a) {
            p((n) => ({
                '1e239530': f.value,
            }))
            const i = a,
                { domain: r, name: d, size: s, ext: u, selected: m } = g(i),
                { src: t, selectedSrc: l } = $(r, d, u),
                f = v(() =>
                    typeof s.value == 'number' ? `${s.value}px` : s.value,
                )
            return (n, S) => (
                h(),
                x(
                    'div',
                    {
                        class: o([
                            'lc-icon',
                            {
                                'lc-icon--selected': e(m),
                            },
                        ]),
                        style: y({
                            '--img-src': `url(${e(t)})`,
                            '--img-selected-src': `url(${e(l)})`,
                        }),
                    },
                    [
                        c(
                            'div',
                            {
                                class: o([
                                    'lc-icon__image',
                                    {
                                        'lc-icon__image--enhover': !!e(l),
                                    },
                                ]),
                            },
                            [
                                c(
                                    'img',
                                    {
                                        class: 'lc-icon__img',
                                        src: e(t),
                                        draggable: 'false',
                                        alt: '',
                                    },
                                    null,
                                    8,
                                    B,
                                ),
                            ],
                            2,
                            /* CLASS */
                        ),
                        c('span', C, [z(n.$slots, 'default', {}, void 0, !0)]),
                    ],
                    6,
                    /* CLASS, STYLE */
                )
            )
        },
    })
export { E as default }
