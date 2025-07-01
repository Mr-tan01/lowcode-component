import {
    defineComponent as n,
    mergeDefaults as c,
    computed as m,
    openBlock as l,
    createElementBlock as p,
    createVNode as _,
    unref as f,
    mergeProps as u,
    withCtx as b,
    createElementVNode as r,
    normalizeClass as d,
    toDisplayString as w,
} from 'vue'
import h from './carouseBox/index.js'
import { propsRaw as k } from './carouseBox/props.js'
import { defSwitchTabList as C } from './const.js'
const v = { class: 'lc-switch-tabs' },
    y = ['title'],
    S = /* @__PURE__ */ n({
        __name: 'switch-tabs',
        props: /* @__PURE__ */ c(k, {
            backCenter: !0,
        }),
        setup(o) {
            const s = m(() => o.list ?? C)
            return (t, T) => (
                l(),
                p('div', v, [
                    _(
                        f(h),
                        u(
                            {
                                'list': s.value,
                                'back-center': t.backCenter,
                                'offsetAnimationTime': t.offsetAnimationTime,
                                'rowKey': t.rowKey,
                            },
                            t.$attrs,
                        ),
                        {
                            default: b(
                                ({
                                    isActive: i,
                                    isEven: a,
                                    record: { label: e },
                                }) => [
                                    r(
                                        'button',
                                        {
                                            class: d([
                                                'lc-switch-tabs__wrapper__tabs--train__button',
                                                { 'active': i, 'is-even': a },
                                            ]),
                                        },
                                        [
                                            r(
                                                'div',
                                                {
                                                    class: 'lc-switch-tabs__wrapper__tabs--train__button--text',
                                                    title: e,
                                                },
                                                w(e),
                                                9,
                                                y,
                                            ),
                                        ],
                                        2,
                                        /* CLASS */
                                    ),
                                ],
                            ),
                            _: 1,
                            /* STABLE */
                        },
                        16,
                        [
                            'list',
                            'back-center',
                            'offsetAnimationTime',
                            'rowKey',
                        ],
                    ),
                ])
            )
        },
    })
export { S as default }
