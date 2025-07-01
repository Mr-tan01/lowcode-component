import {
    defineComponent as s,
    openBlock as t,
    createElementBlock as o,
    normalizeClass as l,
    createElementVNode as n,
    renderSlot as r,
    createCommentVNode as a,
} from 'vue'
const c = { class: 'lc-button__wrapper' },
    p = {
        key: 0,
        class: 'lc-button__wrapper--icon',
    },
    u = { class: 'lc-button__wrapper--content' },
    _ = /* @__PURE__ */ s({
        __name: 'button',
        props: {
            type: { default: 'normal' },
        },
        setup(i) {
            return (e, d) => (
                t(),
                o(
                    'button',
                    {
                        class: l([
                            'lc-button',
                            {
                                'lc-button--primary': e.type === 'primary',
                                'lc-button--normal': e.type === 'normal',
                            },
                        ]),
                    },
                    [
                        n('div', c, [
                            e.$slots.icon
                                ? (t(),
                                  o('div', p, [
                                      r(e.$slots, 'icon', {}, void 0, !0),
                                  ]))
                                : a('v-if', !0),
                            n('div', u, [
                                r(e.$slots, 'default', {}, void 0, !0),
                            ]),
                        ]),
                    ],
                    2,
                    /* CLASS */
                )
            )
        },
    })
export { _ as default }
