import {
    defineComponent as l,
    mergeDefaults as n,
    useCssVars as d,
    computed as m,
    openBlock as t,
    createElementBlock as r,
    Fragment as _,
    createElementVNode as s,
    toDisplayString as u,
    normalizeClass as w,
    createVNode as p,
    unref as h,
} from 'vue'
import a from './images/card/spot-bg.png.js'
import v from './images/card/big-substrate-bg.png.js'
import f from './images/card/small-substrate-bg.png.js'
import { NNumberAnimation as g } from 'naive-ui/es/number-animation'
const S = {
        key: 0,
        class: 'lc-indicator-arrows',
    },
    y = {
        key: 1,
        class: 'lc-indicator-card-vicec',
    },
    A = { class: 'lc-indicator-card' },
    b = { class: 'lc-indicator-card__lable' },
    k = { class: 'lc-indicator-card__value' },
    x = { class: 'lc-indicator-card__img' },
    N = {
        key: 0,
        src: v,
        alt: '',
    },
    C = {
        key: 1,
        src: f,
        alt: '',
    },
    F = /* @__PURE__ */ l({
        __name: 'indicatorCardVice',
        props: /* @__PURE__ */ n(
            {
                isShowArrows: {
                    type: Boolean,
                },
                label: {
                    type: String,
                },
                value: {
                    type: Number,
                },
            },
            {
                isShowArrows: !0,
                label: '已建成并投入运行设施(个)',
                value: 0,
            },
        ),
        setup(o) {
            d((c) => ({
                '22dbf80d': e.value,
            }))
            const e = m(() => (o.isShowArrows ? '-90px' : '-65px'))
            return (c, i) => (
                t(),
                r(
                    _,
                    null,
                    [
                        o.isShowArrows
                            ? (t(),
                              r(
                                  'div',
                                  S,
                                  i[0] ||
                                      (i[0] = [
                                          s(
                                              'img',
                                              {
                                                  class: 'lc-indicator-arrows__top-spot spot',
                                                  src: a,
                                                  alt: '',
                                              },
                                              null,
                                              -1,
                                              /* HOISTED */
                                          ),
                                          s(
                                              'img',
                                              {
                                                  class: 'lc-indicator-arrows__down-spot spot',
                                                  src: a,
                                                  alt: '',
                                              },
                                              null,
                                              -1,
                                              /* HOISTED */
                                          ),
                                      ]),
                              ))
                            : (t(), r('div', y)),
                        s('div', A, [
                            s(
                                'div',
                                b,
                                u(o.label),
                                1,
                                /* TEXT */
                            ),
                            s('div', k, [
                                s(
                                    'span',
                                    {
                                        class: w({
                                            'lc-indicator-card__value__num':
                                                o.isShowArrows,
                                            'lc-indicator-card__value__num--small':
                                                !o.isShowArrows,
                                        }),
                                    },
                                    [
                                        p(
                                            h(g),
                                            {
                                                'show-separator': '',
                                                'from': 0,
                                                'to': o.value,
                                                'active': '',
                                                'precision': 0,
                                            },
                                            null,
                                            8,
                                            ['to'],
                                        ),
                                    ],
                                    2,
                                    /* CLASS */
                                ),
                            ]),
                            s('div', x, [
                                o.isShowArrows
                                    ? (t(), r('img', N))
                                    : (t(), r('img', C)),
                            ]),
                        ]),
                    ],
                    64,
                    /* STABLE_FRAGMENT */
                )
            )
        },
    })
export { F as default }
