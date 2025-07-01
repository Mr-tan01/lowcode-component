import {
    defineComponent as I,
    ref as g,
    useTemplateRef as O,
    computed as C,
    openBlock as b,
    createElementBlock as W,
    normalizeClass as P,
    createElementVNode as v,
    unref as R,
    toDisplayString as y,
    Fragment as T,
    renderList as N,
    normalizeStyle as V,
} from 'vue'
import { useResizeObserver as j } from '@vueuse/core'
import G from 'lodash-es/debounce'
const J = { class: 'lc-word-cloud__wrapper__title' },
    K = ['onClick'],
    Q = { class: 'lc-word-cloud__wrapper__item__text' },
    U = { class: 'lc-word-cloud__wrapper__item__tooltip' },
    Z = { class: 'lc-word-cloud__wrapper__item__tooltip__text' },
    le = /* @__PURE__ */ I({
        __name: 'bubbleWordCloud',
        props: {
            gridSize: {},
            maxWord: { default: 50 },
            data: { default: () => [] },
            ballSize: { default: 30 },
            title: { default: '中心词汇' },
            tooltip: {
                default: () => ({
                    formatter: (a) => a.name + ' ' + a.value,
                }),
            },
            word: {
                default: () => ({
                    formatter: (a) => a.name,
                }),
            },
            enableAnimate: { type: Boolean, default: !0 },
            animateSpeed: { default: 100 },
            animateStep: { default: 0.05 },
            type: { default: 'circle' },
        },
        emits: ['click'],
        setup(a, { emit: D }) {
            const S = g(0),
                u = g(0),
                k = O('wordCloudWrapper')
            j(k, () => {
                S.value++
            })
            const z = C(() => a.data.sort((e, o) => e.value - o.value)),
                L = D
            function X(e, o) {
                L('click', e, o)
            }
            const x = C(() => {
                    var t
                    S.value
                    const { width: e = 0, height: o = 0 } =
                        ((t = k.value) == null
                            ? void 0
                            : t.getBoundingClientRect()) ?? {}
                    return {
                        width: e,
                        height: o,
                        radiusWidth: e / 2,
                        radiusHeight: o / 2,
                    }
                }),
                A = C(() => z.value.length),
                s = Math.PI / 360
            let h = 1
            const w = g(h * s),
                _ = g(-1 * s)
            let c,
                m,
                l,
                i,
                d = 0
            function Y() {
                ;((i = Math.cos(w.value)),
                    (d = Math.sin(w.value)),
                    (m = m * i - l * d),
                    (l = l * i + m * d))
            }
            function q() {
                ;((i = Math.cos(_.value)),
                    (d = Math.sin(_.value)),
                    (c = c * i - l * d),
                    (l = l * i + c * d))
            }
            function E(e, o) {
                const { radiusHeight: t, radiusWidth: n } = x.value ?? {}
                if (!t || !n) return {}
                let r = Math.acos((2 * (o + 1) - 1) / A.value - 1),
                    f = r * Math.sqrt(A.value * Math.PI)
                return (
                    (l = t * Math.cos(r)),
                    (m = t * Math.sin(r - u.value) * Math.sin(f - u.value)),
                    (c = t * Math.sin(r - u.value) * Math.cos(f - u.value)),
                    Y(),
                    q(),
                    {
                        'left': `${c + n}px`,
                        'top': `${m + t}px`,
                        'transform': `translate(-50%, -50%, ${l}px)`,
                        'transformOrigin': '50% 50%',
                        '--word-ball-size': `${Math.max((e.value / a.maxWord) * a.ballSize, 30)}px`,
                        '--word-font-size': `${Math.max((e.value / a.maxWord) * 10, 12)}px`,
                        '--word-opacity': 1,
                        '---inset-shadow-color':
                            l > 0 ? '#0FFBF8' : 'transparent',
                        '---background-color': 'rgba(34, 118, 252, 0.2)',
                        '--word-color': e.color ?? '#DBFAFF',
                    }
                )
            }
            const B = () => {
                ;((u.value += a.animateStep),
                    setTimeout(() => {
                        requestAnimationFrame(p)
                    }, a.animateSpeed))
            }
            let p = B
            a.enableAnimate && p()
            const F = G((e) => {
                const { width: o, height: t } = x.value ?? {}
                ;((_.value = (e.offsetX / o) * 100 * h * s),
                    (w.value = (e.offsetY / t) * 100 * h * s),
                    (u.value = 0),
                    (p = () => {}))
            }, 10)
            function H() {
                ;((w.value = h * s),
                    (_.value = -1 * s),
                    a.enableAnimate && ((p = B), p()))
            }
            return (e, o) => (
                b(),
                W(
                    'div',
                    {
                        class: P([
                            'lc-word-cloud',
                            [`lc-word-cloud--${e.type}`],
                        ]),
                    },
                    [
                        v(
                            'div',
                            {
                                class: 'lc-word-cloud__wrapper',
                                ref: 'wordCloudWrapper',
                                onMousemoveCapture:
                                    o[0] ||
                                    (o[0] = //@ts-ignore
                                        (...t) => R(F) && R(F)(...t)),
                                onMouseleaveCapture: H,
                            },
                            [
                                v(
                                    'div',
                                    J,
                                    y(e.title),
                                    1,
                                    /* TEXT */
                                ),
                                (b(!0),
                                W(
                                    T,
                                    null,
                                    N(z.value, (t, n) => {
                                        var r, f, M, $
                                        return (
                                            b(),
                                            W(
                                                'div',
                                                {
                                                    key: t.name,
                                                    class: 'lc-word-cloud__wrapper__item',
                                                    style: V(E(t, n)),
                                                    onClick: (ee) => X(t, n),
                                                },
                                                [
                                                    v(
                                                        'div',
                                                        Q,
                                                        y(
                                                            (f =
                                                                (r = e.word) ==
                                                                null
                                                                    ? void 0
                                                                    : r.formatter) ==
                                                                null
                                                                ? void 0
                                                                : f.call(
                                                                      r,
                                                                      t,
                                                                      n,
                                                                  ),
                                                        ),
                                                        1,
                                                        /* TEXT */
                                                    ),
                                                    v('div', U, [
                                                        v(
                                                            'div',
                                                            Z,
                                                            y(
                                                                ($ =
                                                                    (M =
                                                                        e.tooltip) ==
                                                                    null
                                                                        ? void 0
                                                                        : M.formatter) ==
                                                                    null
                                                                    ? void 0
                                                                    : $.call(
                                                                          M,
                                                                          t,
                                                                          n,
                                                                      ),
                                                            ),
                                                            1,
                                                            /* TEXT */
                                                        ),
                                                    ]),
                                                ],
                                                12,
                                                K,
                                            )
                                        )
                                    }),
                                    128,
                                    /* KEYED_FRAGMENT */
                                )),
                            ],
                            544,
                            /* NEED_HYDRATION, NEED_PATCH */
                        ),
                    ],
                    2,
                    /* CLASS */
                )
            )
        },
    })
export { le as default }
