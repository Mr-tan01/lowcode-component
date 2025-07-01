import {
    defineComponent as h,
    ref as w,
    watch as L,
    computed as M,
    openBlock as c,
    createElementBlock as i,
    createElementVNode as a,
    Fragment as S,
    renderList as y,
    normalizeStyle as b,
    renderSlot as k,
    createVNode as C,
    unref as T,
    withCtx as g,
} from 'vue'
import { NTooltip as $ } from 'naive-ui/es/tooltip'
const H = { class: 'lc-common-legend' },
    A = { class: 'lc-common-legend__wrapper__legend' },
    B = ['onClick', 'onMouseenter', 'onMouseleave'],
    E = { class: 'lc-common-legend__trigger' },
    N = ['innerHTML'],
    F = ['innerHTML'],
    z = /* @__PURE__ */ h({
        __name: 'legend',
        props: {
            options: { default: () => ({}) },
            legendLabel: { type: Function, default: (t) => t },
            disabled: { type: Boolean, default: !1 },
        },
        emits: ['legend:click', 'legend:toggleSelect'],
        setup(t, { emit: m }) {
            const s = w(/* @__PURE__ */ new Map())
            L(
                () => t.options.series,
                () => {
                    var e, n
                    ;(s.value.clear(),
                        Array.isArray(t.options.series) &&
                            ((n =
                                (e = t.options.series[0]) == null
                                    ? void 0
                                    : e.data) == null ||
                                n.forEach((l) => {
                                    if (!l.name)
                                        return window.console.warn(
                                            'item.name is required',
                                        )
                                    s.value.set(l.name, {
                                        selected: !0,
                                        ...l,
                                    })
                                })))
                },
                {
                    deep: 2,
                    immediate: !0,
                },
            )
            const r = m
            function d(e, n) {
                r('legend:toggleSelect', {
                    type: e,
                    name: n,
                })
            }
            function _(e) {
                if (!s.value.has(e) || t.disabled) return
                const n = s.value.get(e)
                ;(d(
                    n != null && n.selected ? 'legendUnSelect' : 'legendSelect',
                    e,
                ),
                    s.value.set(e, {
                        ...n,
                        selected: !(n != null && n.selected),
                    }))
            }
            function p(e) {
                ;(_(e.name), r('legend:click', e))
            }
            function f(e, n) {
                var o
                const { color: l = [] } = t.options ?? {}
                return {
                    '--item-color': l[e],
                    '--unselect-color':
                        (o = s.value.get(n.name)) != null && o.selected
                            ? 1
                            : 0.5,
                }
            }
            const v = M(() => {
                var e, n, l, o
                return (
                    ((n = (e = t.options) == null ? void 0 : e.series) == null
                        ? void 0
                        : n[0].data) ??
                    ((o = (l = t.options) == null ? void 0 : l.series) == null
                        ? void 0
                        : o.data) ??
                    []
                )
            })
            return (e, n) => (
                c(),
                i('div', H, [
                    a('div', A, [
                        (c(!0),
                        i(
                            S,
                            null,
                            y(
                                v.value,
                                (l, o) => (
                                    c(),
                                    i(
                                        'div',
                                        {
                                            class: 'lc-common-legend__wrapper__legend__item',
                                            key: o,
                                            style: b(f(o, l)),
                                            onClick: (u) => p(l),
                                            onMouseenter: (u) =>
                                                d('highlight', l.name),
                                            onMouseleave: (u) =>
                                                d('downplay', l.name),
                                        },
                                        [
                                            k(
                                                e.$slots,
                                                'legend',
                                                { record: l },
                                                () => [
                                                    C(
                                                        T($),
                                                        { delay: 800 },
                                                        {
                                                            trigger: g(() => [
                                                                a('div', E, [
                                                                    n[0] ||
                                                                        (n[0] =
                                                                            a(
                                                                                'div',
                                                                                {
                                                                                    class: 'lc-common-legend__wrapper__legend__item__icon',
                                                                                },
                                                                                null,
                                                                                -1,
                                                                                /* HOISTED */
                                                                            )),
                                                                    a(
                                                                        'div',
                                                                        {
                                                                            class: 'lc-common-legend__wrapper__legend__item__label',
                                                                            innerHTML:
                                                                                e.legendLabel(
                                                                                    l.name,
                                                                                    l.value,
                                                                                ),
                                                                        },
                                                                        null,
                                                                        8,
                                                                        N,
                                                                    ),
                                                                ]),
                                                            ]),
                                                            default: g(() => [
                                                                a(
                                                                    'span',
                                                                    {
                                                                        innerHTML:
                                                                            e.legendLabel(
                                                                                l.name,
                                                                                l.value,
                                                                            ),
                                                                    },
                                                                    null,
                                                                    8,
                                                                    F,
                                                                ),
                                                            ]),
                                                            _: 2,
                                                            /* DYNAMIC */
                                                        },
                                                        1024,
                                                        /* DYNAMIC_SLOTS */
                                                    ),
                                                ],
                                                !0,
                                            ),
                                        ],
                                        44,
                                        B,
                                    )
                                ),
                            ),
                            128,
                            /* KEYED_FRAGMENT */
                        )),
                    ]),
                ])
            )
        },
    })
export { z as default }
