import {
    defineComponent as y,
    computed as O,
    openBlock as l,
    createElementBlock as _,
    Fragment as m,
    renderList as d,
    createElementVNode as n,
    toDisplayString as s,
    normalizeStyle as f,
} from 'vue'
import {
    defaultFunnelTierOptions as g,
    defaultFunnelTierSeriesOptions as k,
} from './themeConfig/funnelTier/index.js'
import p from 'lodash-es/merge'
const x = { class: 'lc-funnel-tier' },
    F = { class: 'lc-funnel-tier__serie__item__label' },
    S = { class: 'lc-funnel-tier__serie__item__bar__inner--text' },
    T = { class: 'lc-funnel-tier__serie__item__value' },
    E = /* @__PURE__ */ y({
        __name: 'funnelTier',
        props: {
            options: Object,
        },
        setup(v) {
            const o = O(() => {
                const r = p({}, g, v.options)
                return ((r.series = r.series.map((t) => p({}, k, t))), r)
            })
            return (r, t) => {
                var u
                return (
                    l(),
                    _('div', x, [
                        (l(!0),
                        _(
                            m,
                            null,
                            d(
                                (u = o.value) == null ? void 0 : u.series,
                                (e, b) => (
                                    l(),
                                    _(
                                        'div',
                                        {
                                            class: 'lc-funnel-tier__serie',
                                            key: b,
                                        },
                                        [
                                            (l(!0),
                                            _(
                                                m,
                                                null,
                                                d(
                                                    e == null ? void 0 : e.data,
                                                    (i, a) => {
                                                        var c
                                                        return (
                                                            l(),
                                                            _(
                                                                'div',
                                                                {
                                                                    key: a,
                                                                    class: 'lc-funnel-tier__serie__item',
                                                                },
                                                                [
                                                                    n(
                                                                        'div',
                                                                        F,
                                                                        s(
                                                                            i.name,
                                                                        ),
                                                                        1,
                                                                        /* TEXT */
                                                                    ),
                                                                    n(
                                                                        'div',
                                                                        {
                                                                            class: 'lc-funnel-tier__serie__item__bar',
                                                                            style: f(
                                                                                {
                                                                                    '--inner-color':
                                                                                        o
                                                                                            .value
                                                                                            .color[
                                                                                            a
                                                                                        ],
                                                                                },
                                                                            ),
                                                                        },
                                                                        [
                                                                            t[0] ||
                                                                                (t[0] =
                                                                                    n(
                                                                                        'div',
                                                                                        {
                                                                                            class: 'lc-funnel-tier__serie__item__bar__line',
                                                                                        },
                                                                                        null,
                                                                                        -1,
                                                                                        /* HOISTED */
                                                                                    )),
                                                                            n(
                                                                                'div',
                                                                                {
                                                                                    class: 'lc-funnel-tier__serie__item__bar__inner',
                                                                                    style: f(
                                                                                        {
                                                                                            '--inner-width': `${(i.value / e.max) * 100}%`,
                                                                                        },
                                                                                    ),
                                                                                },
                                                                                [
                                                                                    n(
                                                                                        'div',
                                                                                        S,
                                                                                        s(
                                                                                            (c =
                                                                                                e ==
                                                                                                null
                                                                                                    ? void 0
                                                                                                    : e.label) ==
                                                                                                null
                                                                                                ? void 0
                                                                                                : c.call(
                                                                                                      e,
                                                                                                      i,
                                                                                                      e,
                                                                                                  ),
                                                                                        ),
                                                                                        1,
                                                                                        /* TEXT */
                                                                                    ),
                                                                                ],
                                                                                4,
                                                                                /* STYLE */
                                                                            ),
                                                                            t[1] ||
                                                                                (t[1] =
                                                                                    n(
                                                                                        'div',
                                                                                        {
                                                                                            class: 'lc-funnel-tier__serie__item__bar__line',
                                                                                        },
                                                                                        null,
                                                                                        -1,
                                                                                        /* HOISTED */
                                                                                    )),
                                                                        ],
                                                                        4,
                                                                        /* STYLE */
                                                                    ),
                                                                    n(
                                                                        'div',
                                                                        T,
                                                                        s(
                                                                            i.value,
                                                                        ),
                                                                        1,
                                                                        /* TEXT */
                                                                    ),
                                                                ],
                                                            )
                                                        )
                                                    },
                                                ),
                                                128,
                                                /* KEYED_FRAGMENT */
                                            )),
                                        ],
                                    )
                                ),
                            ),
                            128,
                            /* KEYED_FRAGMENT */
                        )),
                    ])
                )
            }
        },
    })
export { E as default }
