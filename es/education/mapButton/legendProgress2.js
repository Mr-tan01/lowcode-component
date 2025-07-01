import {
    defineComponent as I,
    ref as b,
    computed as n,
    watch as J,
    openBlock as M,
    createElementBlock as f,
    createElementVNode as a,
    toDisplayString as h,
    Fragment as K,
    renderList as O,
    normalizeStyle as S,
    withDirectives as Q,
    vShow as U,
} from 'vue'
const Y = { class: 'legend-progress' },
    Z = { class: 'legend-progress__label' },
    ee = { class: 'legend-progress__center' },
    te = { class: 'legend-progress__center__min-value sample-text' },
    oe = ['onMouseenter'],
    se = { class: 'legend-progress__center__max-value sample-text' },
    ae = /* @__PURE__ */ I({
        __name: 'legendProgress',
        props: {
            label: {
                type: String,
                default: '预警人数占比',
            },
            data: {
                type: Array,
                required: !0,
                validator: (r) => r.every((l) => l >= 0 && l <= 1),
            },
        },
        emits: ['update-stops'],
        setup(r, { emit: l }) {
            const k = r,
                w = l,
                u = b({
                    value: null,
                    x: 0,
                }),
                $ = n(() => {
                    var e
                    return {
                        left: `${Math.min(
                            Math.max(u.value.x, 0),
                            ((e = c.value) == null ? void 0 : e.clientWidth) ||
                                0,
                        )}px`,
                    }
                }),
                B = (e, t) => {
                    if (!c.value) return
                    const o = c.value.getBoundingClientRect()
                    u.value = {
                        value: e,
                        x: t.clientX - o.left,
                    }
                },
                E = () => {
                    u.value = { value: null, x: 0 }
                },
                F = (e) =>
                    (e * 100) % 10 < 1
                        ? Math.floor(e * 1e3) / 10
                        : Math.ceil(e * 1e3) / 10,
                T = (e) => Math.round(e * 100),
                s = n(() => [...new Set(k.data)].sort((t, o) => t - o)),
                q = n(() => (s.value.length > 0 ? F(s.value[0]) : 0)),
                C = n(() =>
                    s.value.length > 0 ? T(s.value[s.value.length - 1]) : 0,
                ),
                D = n(() => q.value.toFixed(1)),
                R = n(() => C.value.toFixed(1)),
                W = (e) => {
                    if (e === 0) return []
                    const t = [],
                        o = 240,
                        g = (60 - o) / Math.max(1, e - 1)
                    for (let _ = 0; _ < e - 1; _++) {
                        const A = o + _ * g,
                            L = 80 + Math.random() * 15,
                            N = 45 + Math.random() * 15,
                            P = (V, x, d) => {
                                ;((x /= 100), (d /= 100))
                                const y = (p) => (p + V / 30) % 12,
                                    X = x * Math.min(d, 1 - d),
                                    m = (p) =>
                                        d -
                                        X *
                                            Math.max(
                                                Math.min(y(p) - 3, 9 - y(p), 1),
                                                -1,
                                            ),
                                    j = Math.round(m(0) * 255),
                                    G = Math.round(m(8) * 255),
                                    H = Math.round(m(4) * 255)
                                return `rgba(${j}, ${G}, ${H}, 1)`
                            }
                        t.push(P(A, L, N))
                    }
                    return (e > 0 && t.push('rgba(255, 80, 80, 1)'), t)
                },
                v = n(() => {
                    if (s.value.length === 0) return []
                    const e = W(s.value.length),
                        t = 100 / s.value.length
                    return s.value.map((o, i) => ({
                        value: o,
                        style: {
                            width: `${t}%`,
                            background: e[i],
                        },
                    }))
                }),
                z = n(() =>
                    v.value.map((e, t) => ({
                        range: [e.value],
                        stop: [
                            {
                                'stop-color': e.style.background,
                                'stop-opacity': 1,
                                'offset': `${(t / v.value.length) * 100}%`,
                            },
                        ],
                    })),
                )
            J(
                z,
                (e) => {
                    w('update-stops', e)
                },
                { immediate: !0, deep: !0 },
            )
            const c = b(null)
            return (e, t) => (
                M(),
                f('div', Y, [
                    a(
                        'div',
                        Z,
                        h(r.label),
                        1,
                        /* TEXT */
                    ),
                    a('div', ee, [
                        a(
                            'div',
                            te,
                            h(D.value) + '% ',
                            1,
                            /* TEXT */
                        ),
                        a(
                            'div',
                            {
                                class: 'legend-progress__center__progress-bar',
                                ref_key: 'progressBar',
                                ref: c,
                            },
                            [
                                (M(!0),
                                f(
                                    K,
                                    null,
                                    O(
                                        v.value,
                                        (o, i) => (
                                            M(),
                                            f(
                                                'div',
                                                {
                                                    key: i,
                                                    class: 'progress-segment',
                                                    style: S(o.style),
                                                    onMouseenter: (g) =>
                                                        B(o.value, g),
                                                    onMouseleave: E,
                                                },
                                                [
                                                    Q(
                                                        a(
                                                            'div',
                                                            {
                                                                class: 'segment-tooltip',
                                                                style: S(
                                                                    $.value,
                                                                ),
                                                            },
                                                            h(
                                                                (
                                                                    o.value *
                                                                    100
                                                                ).toFixed(1),
                                                            ) + '% ',
                                                            5,
                                                            /* TEXT, STYLE */
                                                        ),
                                                        [
                                                            [
                                                                U,
                                                                u.value
                                                                    .value ===
                                                                    o.value,
                                                            ],
                                                        ],
                                                    ),
                                                ],
                                                44,
                                                oe,
                                            )
                                        ),
                                    ),
                                    128,
                                    /* KEYED_FRAGMENT */
                                )),
                            ],
                            512,
                            /* NEED_PATCH */
                        ),
                        a(
                            'div',
                            se,
                            h(R.value) + '% ',
                            1,
                            /* TEXT */
                        ),
                    ]),
                ])
            )
        },
    })
export { ae as default }
