import {
    defineComponent as a,
    mergeDefaults as r,
    openBlock as s,
    createElementBlock as e,
    createElementVNode as i,
    toDisplayString as _,
    Fragment as l,
    renderList as o,
} from 'vue'
const d = { class: 'lc-indicator-list' },
    m = { class: 'lc-indicator-list__wrapper' },
    p = { class: 'lc-indicator-list__wrapper__image' },
    g = ['src'],
    f = { class: 'lc-indicator-list__wrapper__info' },
    u = { class: 'lc-indicator-list__wrapper__info--nickname' },
    v = { class: 'lc-indicator-list__wrapper__info--msg' },
    h = { class: 'lc-indicator-list__wrapper__info--msg__item--label' },
    w = { class: 'lc-indicator-list__wrapper__info--msg__item--value' },
    b = /* @__PURE__ */ a({
        __name: 'indicatorList',
        props: /* @__PURE__ */ r(
            {
                icon: {
                    type: String,
                },
                name: {
                    type: String,
                },
                msg: {
                    type: Array,
                },
            },
            {
                icon: '',
                name: '-',
                msg: () => [],
            },
        ),
        setup(t) {
            return (y, k) => (
                s(),
                e('div', d, [
                    i('div', m, [
                        i('div', p, [
                            i(
                                'img',
                                {
                                    class: 'lc-indicator-list__wrapper__image--img',
                                    src: t.icon,
                                    alt: '',
                                },
                                null,
                                8,
                                g,
                            ),
                        ]),
                        i('div', f, [
                            i(
                                'div',
                                u,
                                _(t.name),
                                1,
                                /* TEXT */
                            ),
                            i('div', v, [
                                (s(!0),
                                e(
                                    l,
                                    null,
                                    o(
                                        t.msg,
                                        (c, n) => (
                                            s(),
                                            e(
                                                'div',
                                                {
                                                    class: 'lc-indicator-list__wrapper__info--msg__item',
                                                    key: n,
                                                },
                                                [
                                                    i(
                                                        'div',
                                                        h,
                                                        _(c.label),
                                                        1,
                                                        /* TEXT */
                                                    ),
                                                    i(
                                                        'div',
                                                        w,
                                                        _(c.value),
                                                        1,
                                                        /* TEXT */
                                                    ),
                                                ],
                                            )
                                        ),
                                    ),
                                    128,
                                    /* KEYED_FRAGMENT */
                                )),
                            ]),
                        ]),
                    ]),
                ])
            )
        },
    })
export { b as default }
