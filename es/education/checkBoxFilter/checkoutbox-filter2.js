import {
    defineComponent as A,
    mergeModels as _,
    mergeDefaults as y,
    useCssVars as V,
    ref as B,
    useModel as M,
    computed as F,
    watch as N,
    openBlock as d,
    createElementBlock as i,
    createElementVNode as o,
    createVNode as u,
    unref as n,
    withCtx as h,
    normalizeClass as m,
    createStaticVNode as S,
    Fragment as f,
    renderList as p,
    createBlock as Z,
    toDisplayString as D,
} from 'vue'
import x from './checkbox/index.js'
import E from './checkbox/checkbox-group.js'
import './assets/headline/radiohead.css'
import './assets/icon/iconCard.css'
import './assets/icon/icon.css'
import './assets/headline/headline.css' /* empty css               */
import R from './headline/subhead.js'
/* empty css           */
/* empty css              */
import 'lowcode-share/es/share'
/* empty css                   */
const U = { class: 'lc-checkbox-filter' },
    $ = { class: 'lc-checkbox-filter__check__all lc-checkbox-gaid' },
    z = { class: 'lc-checkbox-gaid' },
    Q = /* @__PURE__ */ A({
        __name: 'checkoutbox-filter',
        props: /* @__PURE__ */ _(
            /* @__PURE__ */ y(
                {
                    row: {
                        type: Number,
                    },
                    dataList: {
                        type: Array,
                    },
                    isCheckAll: {
                        type: Boolean,
                    },
                },
                {
                    row: 2,
                    dataList: () => [],
                    isCheckAll: !1,
                },
            ),
            {
                value: { default: [] },
                valueModifiers: {},
            },
        ),
        emits: /* @__PURE__ */ _(['check'], ['update:value']),
        setup(s, { emit: L }) {
            V((l) => ({
                '2fcf5b42': s.row,
            }))
            const g = L,
                t = B(!1),
                c = M(s, 'value'),
                v = F(() =>
                    s.dataList.reduce(
                        (l, e) => (
                            e.children &&
                                l.push(...e.children.map((a) => a.value)),
                            l
                        ),
                        [],
                    ),
                ),
                k = (l) => {
                    if (!l) {
                        b()
                        return
                    }
                    c.value = v.value
                },
                b = () => {
                    ;((c.value = []), (t.value = !1))
                },
                C = () => {
                    const l = v.value,
                        e = c.value
                    t.value = l.every((a) => e.includes(a))
                }
            return (
                s.isCheckAll && ((t.value = !0), k(t.value)),
                N(c, (l) => {
                    ;(C(), g('check', l))
                }),
                (l, e) => (
                    d(),
                    i('div', U, [
                        o('div', $, [
                            u(
                                n(x),
                                {
                                    'class': 'lc-checkbox-gaid__row',
                                    'checked': t.value,
                                    'onUpdate:checked': [
                                        e[0] || (e[0] = (a) => (t.value = a)),
                                        k,
                                    ],
                                },
                                {
                                    default: h(() => [
                                        o(
                                            'span',
                                            {
                                                class: m([
                                                    'lc-checkbox-filter__check__label',
                                                    {
                                                        'lc-checkbox-filter__check__label--selected':
                                                            t.value,
                                                    },
                                                ]),
                                            },
                                            '全选',
                                            2,
                                            /* CLASS */
                                        ),
                                    ]),
                                    _: 1,
                                    /* STABLE */
                                },
                                8,
                                ['checked'],
                            ),
                            o(
                                'span',
                                {
                                    class: 'check-reset lc-checkbox-gaid__row',
                                    onClick: b,
                                },
                                e[2] ||
                                    (e[2] = [
                                        S(
                                            '<div class="check-reset__icon" data-v-29b8fd29><svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-v-29b8fd29><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" data-v-29b8fd29><g transform="translate(-344, -220)" data-v-29b8fd29><g id="编组-2" transform="translate(344, 218)" data-v-29b8fd29><g id="refresh" transform="translate(0, 2)" data-v-29b8fd29><path d="M0,0 L15.9565679,0 L15.9565679,16 L0,16 Z" id="refresh-(Background)" data-v-29b8fd29></path><path d="M13.2174605,7.99868345 L14.1761871,7.99868345 C14.176188,4.54763269 11.4013631,1.75 7.97844137,1.75 C5.7481695,1.75 3.79304044,2.93771338 2.70135186,4.72001243 L2.70135174,2.64251906 L1.74524962,2.64251906 L1.74524955,5.74893761 C1.74524955,6.02507998 1.96910717,6.24893761 2.24524955,6.24893761 C2.24524957,6.24893761 2.24524959,6.24893761 2.24524962,6.24893761 L5.32227219,6.24893713 L5.32227219,6.24893713 L5.32227219,5.28497791 L3.48097946,5.28497815 C4.39709313,3.74210536 6.07039562,2.71133503 7.97844137,2.7113356 C10.8669382,2.7113364 13.2174614,5.07360196 13.2174605,7.99868345 Z M2.73941745,7.998631 C2.73941665,10.9237127 5.08993982,13.286026 7.97843804,13.286027 C9.88648247,13.286027 11.5597845,12.2552587 12.4758982,10.7123852 L10.634296,10.7123852 L10.634296,9.74842548 L13.7113183,9.74842548 C13.9874607,9.74842548 14.2113183,9.97228311 14.2113183,10.2484255 L14.2113183,13.3548441 L14.2113183,13.3548441 L13.2552167,13.3548441 L13.2552167,11.2778559 C12.1634682,13.0598733 10.2084988,14.2473631 7.97843756,14.2473631 C4.55551581,14.2473631 1.78068946,11.449683 1.78069137,7.998631 L2.73941745,7.998631 Z" fill="#0FFBF8" data-v-29b8fd29></path></g></g></g></g></svg></div><span data-v-29b8fd29>重置</span>',
                                            2,
                                        ),
                                    ]),
                            ),
                        ]),
                        u(
                            n(E),
                            {
                                'value': c.value,
                                'onUpdate:value':
                                    e[1] || (e[1] = (a) => (c.value = a)),
                            },
                            {
                                default: h(() => [
                                    (d(!0),
                                    i(
                                        f,
                                        null,
                                        p(
                                            s.dataList,
                                            (a, w) => (
                                                d(),
                                                i(
                                                    f,
                                                    { key: w },
                                                    [
                                                        u(
                                                            n(R),
                                                            {
                                                                class: 'lc-checkbox-filter__check__title',
                                                                hideRadioIcon:
                                                                    !0,
                                                                text: a.label,
                                                            },
                                                            null,
                                                            8,
                                                            ['text'],
                                                        ),
                                                        o('div', z, [
                                                            (d(!0),
                                                            i(
                                                                f,
                                                                null,
                                                                p(
                                                                    a.children,
                                                                    (r) => (
                                                                        d(),
                                                                        Z(
                                                                            n(
                                                                                x,
                                                                            ),
                                                                            {
                                                                                class: 'lc-checkbox-gaid__row',
                                                                                value: r.value,
                                                                                key: r.value,
                                                                                disabled:
                                                                                    r.disabled,
                                                                            },
                                                                            {
                                                                                default:
                                                                                    h(
                                                                                        () => [
                                                                                            o(
                                                                                                'span',
                                                                                                {
                                                                                                    class: m(
                                                                                                        [
                                                                                                            'lc-checkbox-filter__check__label',
                                                                                                            {
                                                                                                                'lc-checkbox-filter__check__label--selected':
                                                                                                                    c.value.includes(
                                                                                                                        r.value,
                                                                                                                    ),
                                                                                                            },
                                                                                                        ],
                                                                                                    ),
                                                                                                },
                                                                                                D(
                                                                                                    r.label,
                                                                                                ),
                                                                                                3,
                                                                                                /* TEXT, CLASS */
                                                                                            ),
                                                                                        ],
                                                                                    ),
                                                                                _: 2,
                                                                                /* DYNAMIC */
                                                                            },
                                                                            1032,
                                                                            [
                                                                                'value',
                                                                                'disabled',
                                                                            ],
                                                                        )
                                                                    ),
                                                                ),
                                                                128,
                                                                /* KEYED_FRAGMENT */
                                                            )),
                                                        ]),
                                                    ],
                                                    64,
                                                    /* STABLE_FRAGMENT */
                                                )
                                            ),
                                        ),
                                        128,
                                        /* KEYED_FRAGMENT */
                                    )),
                                ]),
                                _: 1,
                                /* STABLE */
                            },
                            8,
                            ['value'],
                        ),
                    ])
                )
            )
        },
    })
export { Q as default }
