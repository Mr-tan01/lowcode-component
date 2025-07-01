import {
    defineComponent as K,
    mergeDefaults as R,
    useCssVars as T,
    ref as N,
    onMounted as j,
    computed as d,
    openBlock as u,
    createElementBlock as c,
    createVNode as w,
    createElementVNode as v,
    Fragment as p,
    renderList as g,
    mergeProps as C,
    resolveDynamicComponent as x,
    createBlock as H,
    createCommentVNode as V,
    renderSlot as O,
    unref as Y,
} from 'vue'
import S from './comp/sshzq.js'
import U from './comp/baoan.js'
import W from './comp/dapeng.js'
import q from './comp/futian.js'
import J from './comp/guangming.js'
import Q from './comp/longgang.js'
import Z from './comp/luohu.js'
import ee from './comp/pingshan.js'
import re from './comp/yantian.js'
import ae from './comp/nanshan.js'
import oe from './comp/longhua.js'
import le from './comp/defines.js'
import te from './comp/labels2.js'
import ne from '../mark/index2.js'
import { propsRaw as se } from './props.js'
import {
    LabelModelEnum as G,
    defFloatLevelConfig as ue,
    szBlockNames as n,
    defBlockLableMap as ie,
} from './const.js'
import ce from 'lodash-es/merge'
const fe = { class: 'lc-szmap-raw' },
    me = {
        class: 'lc-szmap-raw__svg',
        viewBox: '0 0 922 527',
        version: '1.1',
    },
    de = ['id'],
    ve = {
        'id': '页面-2',
        'stroke': 'none',
        'stroke-width': '1',
        'fill': 'none',
        'fill-rule': 'evenodd',
    },
    pe = {
        id: '编组-76',
        transform: 'translate(4, 0)',
    },
    ge = {
        'id': '编组',
        'transform': 'translate(0, 35)',
        'fill-rule': 'nonzero',
    },
    ke = {
        key: 0,
        class: 'lc-szmap-raw__mark-group',
    },
    Ae = /* @__PURE__ */ K({
        __name: 'rawMap',
        props: /* @__PURE__ */ R(se, {
            showLabel: !0,
            showBorder: !0,
            levels: () => ({}),
            values: () => ({}),
            fillModel: 'default',
            rotateX: 0,
            disabledGradient: !1,
            labelModel: () => G.DEFAULT,
        }),
        emits: ['markClick', 'markMouseover', 'markMouseleave'],
        setup(f, { emit: E }) {
            T((e) => ({
                '4b88f950': X.value,
                'e9918b7a': A.value,
            }))
            const k = {
                    [n.光明]: J,
                    [n.宝安]: U,
                    [n.龙华]: oe,
                    [n.南山]: ae,
                    [n.福田]: q,
                    [n.罗湖]: Z,
                    [n.盐田]: re,
                    [n.坪山]: ee,
                    [n.龙岗]: Q,
                    [n.大鹏新区]: W,
                    [n.深汕合作区]: S,
                },
                b = N(0),
                h = E,
                M = N('')
            function _(e) {
                const s = f.values[e] ?? { value: 0 },
                    l = m.value.findIndex(([t, o]) => {
                        var L, i
                        return (
                            s.value >=
                                ((L = o == null ? void 0 : o.range) == null
                                    ? void 0
                                    : L[0]) &&
                            s.value <=
                                ((i = o == null ? void 0 : o.range) == null
                                    ? void 0
                                    : i[1])
                        )
                    }),
                    [r, a] = m.value[l] ?? []
                return {
                    ...s,
                    mapLabel: ie[e],
                    style: {
                        '--level-scale': b.value
                            ? ((a == null ? void 0 : a.scale) ?? 1)
                            : b.value,
                    },
                }
            }
            function B(e) {
                h('markClick', _(e))
            }
            j(() => {
                setTimeout(() => {
                    b.value = 1
                }, 300)
            })
            const I = d(() => [
                    'lc-szmap-raw__block',
                    `visible--${f.fillModel}`,
                ]),
                m = d(() => Object.entries(ce({}, ue, f.levels)))
            function P(e) {
                const s = f.values[e]
                if (!s || f.disabledGradient) return
                const l = m.value.findIndex(([L, i]) => {
                        var y, z
                        return (
                            s.value >=
                                ((y = i == null ? void 0 : i.range) == null
                                    ? void 0
                                    : y[0]) &&
                            s.value <=
                                ((z = i == null ? void 0 : i.range) == null
                                    ? void 0
                                    : z[1])
                        )
                    }),
                    [r, a] = m.value[l] ?? []
                let t = [],
                    o = {}
                return (
                    a &&
                        r &&
                        (t.push('float-active'),
                        typeof a.stop == 'string'
                            ? (o['--linear-gradient-fill'] = a.stop)
                            : (o['--linear-gradient-fill'] =
                                  `url(#linearGradient-float-${r})`)),
                    {
                        class: t,
                        style: o,
                    }
                )
            }
            const X = d(() => `rotateX(${f.rotateX}deg)`),
                A = d(() => Math.abs(f.rotateX)),
                $ = (e) => ['lc-szmap-raw__mark-group--item', `mark-${e}`]
            function D(e) {
                f.labelModel === G.HOVER &&
                    ((M.value = e), h('markMouseover', e))
            }
            const F = (e, s) => {
                const l = e.relatedTarget
                ;(l && l.closest('.lc-szmap-raw__mark-group')) ||
                    ((M.value = ''), h('markMouseleave', s))
            }
            return (e, s) => (
                u(),
                c('div', fe, [
                    (u(),
                    c('svg', me, [
                        w(le),
                        v('defs', null, [
                            (u(!0),
                            c(
                                p,
                                null,
                                g(
                                    m.value,
                                    ([l, r], a) => (
                                        u(),
                                        c(
                                            'linearGradient',
                                            {
                                                key: a,
                                                id: `linearGradient-float-${l}`,
                                            },
                                            [
                                                (u(!0),
                                                c(
                                                    p,
                                                    null,
                                                    g(
                                                        r == null
                                                            ? void 0
                                                            : r.stop,
                                                        (t, o) => (
                                                            u(),
                                                            c(
                                                                'stop',
                                                                C(
                                                                    {
                                                                        ref_for:
                                                                            !0,
                                                                    },
                                                                    typeof t ==
                                                                        'object' &&
                                                                        !Array.isArray(
                                                                            t,
                                                                        )
                                                                        ? t
                                                                        : {},
                                                                    { key: o },
                                                                ),
                                                                null,
                                                                16,
                                                                /* FULL_PROPS */
                                                            )
                                                        ),
                                                    ),
                                                    128,
                                                    /* KEYED_FRAGMENT */
                                                )),
                                            ],
                                            8,
                                            de,
                                        )
                                    ),
                                ),
                                128,
                                /* KEYED_FRAGMENT */
                            )),
                        ]),
                        v('g', ve, [
                            v('g', pe, [
                                v('g', ge, [
                                    (u(),
                                    c(
                                        p,
                                        null,
                                        g(k, (l, r, a) =>
                                            w(
                                                x(l),
                                                C(
                                                    {
                                                        class: I.value,
                                                        key: a,
                                                        ref_for: !0,
                                                    },
                                                    P(r),
                                                    {
                                                        showBorder:
                                                            e.showBorder,
                                                        onMouseover: (t) =>
                                                            D(r),
                                                        onMouseleave: (t) =>
                                                            F(t, r),
                                                        onClick: (t) => B(r),
                                                    },
                                                ),
                                                null,
                                                16,
                                                [
                                                    'class',
                                                    'showBorder',
                                                    'onMouseover',
                                                    'onMouseleave',
                                                    'onClick',
                                                ],
                                            ),
                                        ),
                                        64,
                                        /* STABLE_FRAGMENT */
                                    )),
                                    e.showLabel
                                        ? (u(),
                                          H(
                                              te,
                                              {
                                                  key: 0,
                                                  labels: e.labels,
                                                  values: e.values,
                                              },
                                              null,
                                              8,
                                              ['labels', 'values'],
                                          ))
                                        : V('v-if', !0),
                                ]),
                            ]),
                        ]),
                    ])),
                    e.showLabel
                        ? (u(),
                          c('div', ke, [
                              O(
                                  e.$slots,
                                  'mapLabel',
                                  {
                                      blockList: k,
                                      labelClass: $,
                                      getVlaue: _,
                                      currentMapKey: M.value,
                                  },
                                  () => [
                                      (u(),
                                      c(
                                          p,
                                          null,
                                          g(k, (l, r) =>
                                              w(
                                                  Y(ne),
                                                  C(
                                                      {
                                                          key: r,
                                                          class: $(r),
                                                          ref_for: !0,
                                                      },
                                                      _(r),
                                                      {
                                                          size: 'small',
                                                          onClick: (a) => B(r),
                                                      },
                                                  ),
                                                  null,
                                                  16,
                                                  ['class', 'onClick'],
                                              ),
                                          ),
                                          64,
                                          /* STABLE_FRAGMENT */
                                      )),
                                  ],
                                  !0,
                              ),
                          ]))
                        : V('v-if', !0),
                ])
            )
        },
    })
export { Ae as default }
