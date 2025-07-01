import {
    defineComponent as l,
    mergeDefaults as n,
    useCssVars as s,
    computed as m,
    openBlock as _,
    createElementBlock as d,
    createElementVNode as e,
    renderSlot as a,
} from 'vue'
import { bgImage as g } from './const.js'
const u = { class: 'lcc-bg__common' },
    b = { class: 'lcc-bg__common__wrapper' },
    f = /* @__PURE__ */ l({
        __name: 'bgCommon',
        props: /* @__PURE__ */ n(
            {
                bgSrc: String,
            },
            {
                bgSrc: '',
            },
        ),
        setup(t) {
            s((r) => ({
                '00d4669c': c.value,
            }))
            const c = m(() => `url(${t.bgSrc || g.url})`)
            return (r, o) => (
                _(),
                d('div', u, [
                    o[0] ||
                        (o[0] = e(
                            'div',
                            { class: 'lcc-bg__common__bl-decoartor-bg' },
                            null,
                            -1,
                            /* HOISTED */
                        )),
                    o[1] ||
                        (o[1] = e(
                            'div',
                            { class: 'lcc-bg__common__br-decoartor-bg' },
                            null,
                            -1,
                            /* HOISTED */
                        )),
                    e('div', b, [a(r.$slots, 'default', {}, void 0, !0)]),
                ])
            )
        },
    })
export { f as default }
