import {
    defineComponent as k,
    mergeDefaults as p,
    computed as l,
    openBlock as a,
    createElementBlock as r,
    normalizeClass as w,
    createElementVNode as t,
    renderSlot as h,
    toDisplayString as n,
    createVNode as c,
    unref as o,
    createCommentVNode as s,
    createTextVNode as f,
    withCtx as g,
} from 'vue'
import V from './images/skew/icon/person.png.js'
import { bigNumber as u } from 'lowcode-share/es/share'
import { NNumberAnimation as v } from 'naive-ui/es/number-animation'
import S from './tooltip/index.js'
const N = { class: 'lc-skew-indicator__wrapper' },
    x = { class: 'lc-skew-indicator__wrapper__table--bg' },
    C = { class: 'lc-skew-indicator__wrapper__table--bg--icon' },
    H = ['src'],
    I = { class: 'lc-skew-indicator__wrapper__info' },
    L = { class: 'lc-skew-indicator__wrapper__info--label' },
    U = { class: 'lc-skew-indicator__wrapper__info--result' },
    B = { class: 'lc-skew-indicator__wrapper__info--result--value' },
    $ = {
        key: 0,
        class: 'lc-skew-indicator__wrapper__info--result--unit',
    },
    D = { class: 'lc-skew-indicator__wrapper__info--result--year--label' },
    E = { class: 'lc-skew-indicator__wrapper__info--result--year--value' },
    T = {
        key: 0,
        class: 'lc-skew-indicator__wrapper__info--result--year--up',
    },
    z = {
        key: 2,
        class: 'lc-skew-indicator__wrapper__info--result--altericon',
    },
    A = {
        key: 0,
        class: 'lc-skew-indicator__wrapper__info--sub',
    },
    K = { class: 'lc-skew-indicator__wrapper__info--sub-wrapper' },
    j = { class: 'lc-skew-indicator__wrapper__info--sub-content' },
    q = {
        key: 0,
        class: 'lc-skew-indicator__wrapper__info--sub-head',
    },
    P = /* @__PURE__ */ k({
        __name: 'LargesKewIndicator',
        props: /* @__PURE__ */ p(
            {
                label: {
                    type: String,
                },
                value: {
                    type: Number,
                },
                unit: {
                    type: String,
                },
                yearLabel: {
                    type: String,
                },
                yearValue: {
                    type: Number,
                },
                fixed: {
                    type: Boolean,
                },
                decimal: {
                    type: Number,
                },
                icon: {
                    type: String,
                },
                tip: {
                    type: String,
                },
                type: {
                    type: String,
                },
                subHead: {
                    type: String,
                },
                subContent: {
                    type: String,
                },
                subUnit: {
                    type: String,
                },
                isShowIcon: {
                    type: Boolean,
                },
            },
            {
                label: '',
                value: 0,
                yearLabel: '同比去年',
                yearValue: 0,
                fixed: !0,
                decimal: 0,
                icon: V,
                __skip_icon: !0,
                tip: '',
                type: 'skew',
                subHead: '',
                subContent: '',
                subUnit: '',
            },
        ),
        setup(e) {
            const m = l(() => {
                    const { unit: i } = u(e.value)
                    return Number.isInteger(e.value) && !i ? 0 : e.decimal
                }),
                y = l(() => {
                    if (e.fixed) {
                        const { result: i } = u(e.value, e.decimal)
                        return i
                    }
                    return e.value
                }),
                d = l(() => {
                    if (e.fixed) {
                        const { unit: i } = u(e.value, e.decimal)
                        return `${i}${e.unit}`
                    }
                    return e.unit
                }),
                b = l(() => (e.yearValue > 0 ? '↑' : '↓'))
            return (i, _) => (
                a(),
                r(
                    'div',
                    {
                        class: w([
                            'lc-skew-indicator',
                            [`lc-skew-indicator--${e.type}`],
                        ]),
                    },
                    [
                        t('div', N, [
                            t('div', x, [
                                t('div', C, [
                                    h(
                                        i.$slots,
                                        'default',
                                        {},
                                        () => [
                                            t(
                                                'img',
                                                {
                                                    src: e.icon,
                                                    alt: '',
                                                },
                                                null,
                                                8,
                                                H,
                                            ),
                                        ],
                                        !0,
                                    ),
                                ]),
                            ]),
                            t('div', I, [
                                t(
                                    'div',
                                    L,
                                    n(e.label),
                                    1,
                                    /* TEXT */
                                ),
                                t('div', U, [
                                    t('div', B, [
                                        c(
                                            o(v),
                                            {
                                                'show-separator': '',
                                                'from': 0,
                                                'to': y.value,
                                                'active': '',
                                                'precision': m.value,
                                            },
                                            null,
                                            8,
                                            ['to', 'precision'],
                                        ),
                                    ]),
                                    d.value
                                        ? (a(),
                                          r(
                                              'div',
                                              $,
                                              n(d.value),
                                              1,
                                              /* TEXT */
                                          ))
                                        : s('v-if', !0),
                                    e.yearValue
                                        ? (a(),
                                          r(
                                              'div',
                                              {
                                                  key: 1,
                                                  class: w([
                                                      'lc-skew-indicator__wrapper__info--result--year',
                                                      {
                                                          down: e.yearValue < 0,
                                                          up: e.yearValue > 0,
                                                      },
                                                  ]),
                                              },
                                              [
                                                  t(
                                                      'div',
                                                      D,
                                                      n(e.yearLabel),
                                                      1,
                                                      /* TEXT */
                                                  ),
                                                  t('div', E, [
                                                      c(
                                                          o(v),
                                                          {
                                                              'show-separator':
                                                                  '',
                                                              'from': 0,
                                                              'to': e.yearValue,
                                                              'active': '',
                                                              'precision':
                                                                  e.decimal,
                                                          },
                                                          null,
                                                          8,
                                                          ['to', 'precision'],
                                                      ),
                                                      _[0] || (_[0] = f('% ')),
                                                  ]),
                                                  e.yearValue
                                                      ? (a(),
                                                        r(
                                                            'div',
                                                            T,
                                                            n(b.value),
                                                            1,
                                                            /* TEXT */
                                                        ))
                                                      : s('v-if', !0),
                                              ],
                                              2,
                                              /* CLASS */
                                          ))
                                        : s('v-if', !0),
                                    e.tip
                                        ? (a(),
                                          r('div', z, [
                                              c(o(S), null, {
                                                  default: g(() => [
                                                      f(
                                                          n(e.tip),
                                                          1,
                                                          /* TEXT */
                                                      ),
                                                  ]),
                                                  _: 1,
                                                  /* STABLE */
                                              }),
                                          ]))
                                        : s('v-if', !0),
                                ]),
                                e.subHead
                                    ? (a(),
                                      r('div', A, [
                                          t('div', K, [
                                              t(
                                                  'div',
                                                  j,
                                                  n(e.subContent),
                                                  1,
                                                  /* TEXT */
                                              ),
                                              e.subHead
                                                  ? (a(),
                                                    r(
                                                        'div',
                                                        q,
                                                        n(e.subHead),
                                                        1,
                                                        /* TEXT */
                                                    ))
                                                  : s('v-if', !0),
                                          ]),
                                      ]))
                                    : s('v-if', !0),
                            ]),
                        ]),
                    ],
                    2,
                    /* CLASS */
                )
            )
        },
    })
export { P as default }
