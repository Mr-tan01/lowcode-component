import {
    defineComponent as o,
    openBlock as r,
    createBlock as t,
    unref as c,
    mergeProps as n,
    withCtx as s,
    renderSlot as a,
} from 'vue'
import { NCheckbox as f } from 'naive-ui/es/checkbox'
const d = /* @__PURE__ */ o({
    __name: 'checkbox',
    setup(l) {
        return (e, p) => (
            r(),
            t(
                c(f),
                n({ class: 'lc-checkbox' }, e.$attrs),
                {
                    default: s(() => [a(e.$slots, 'default', {}, void 0, !0)]),
                    _: 3,
                    /* FORWARDED */
                },
                16,
                /* FULL_PROPS */
            )
        )
    },
})
export { d as default }
