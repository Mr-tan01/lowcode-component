import {
    defineComponent as i,
    mergeDefaults as u,
    inject as c,
    computed as d,
    openBlock as a,
    createElementBlock as s,
    normalizeClass as _,
    createElementVNode as n,
    renderSlot as f,
    createCommentVNode as m,
    toDisplayString as p,
} from 'vue'
import { radioButtonGroupProvideKey as v } from './-group/const.js'
const b = { class: 'lc-radio-button__wrapper' },
    x = {
        key: 0,
        class: 'lc-radio-button__wrapper__button--suffix',
    },
    g = { class: 'lc-radio-button__wrapper__button--text' },
    w = /* @__PURE__ */ i({
        __name: 'radio-button',
        props: /* @__PURE__ */ u(
            {
                text: {
                    type: String,
                },
                value: {
                    type: [String, Number],
                },
            },
            {
                text: '',
                value: '',
            },
        ),
        setup(o) {
            const t = c(v),
                l = d(() => (t == null ? void 0 : t.value.value) === o.value)
            function r() {
                var e
                ;(e = t == null ? void 0 : t.value) == null || e.change(o.value)
            }
            return (e, h) => (
                a(),
                s(
                    'div',
                    {
                        class: _([
                            'lc-radio-button',
                            {
                                'lc-radio-button--focus': l.value,
                            },
                        ]),
                    },
                    [
                        n('div', b, [
                            n(
                                'button',
                                {
                                    class: 'lc-radio-button__wrapper__button',
                                    onClick: r,
                                },
                                [
                                    e.$slots.suffix
                                        ? (a(),
                                          s('div', x, [
                                              f(
                                                  e.$slots,
                                                  'suffix',
                                                  {},
                                                  void 0,
                                                  !0,
                                              ),
                                          ]))
                                        : m('v-if', !0),
                                    n(
                                        'div',
                                        g,
                                        p(o.text),
                                        1,
                                        /* TEXT */
                                    ),
                                ],
                            ),
                        ]),
                    ],
                    2,
                    /* CLASS */
                )
            )
        },
    })
export { w as default }
