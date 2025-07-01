import {
    defineComponent as o,
    openBlock as r,
    createBlock as t,
    unref as c,
    mergeProps as p,
    withCtx as n,
    renderSlot as s,
} from 'vue'
import { NCheckboxGroup as a } from 'naive-ui/es/checkbox'
const _ = /* @__PURE__ */ o({
    __name: 'checkbox-group',
    setup(u) {
        return (e, l) => (
            r(),
            t(
                c(a),
                p({ class: 'lc-checkbox-group' }, e.$attrs),
                {
                    default: n(() => [s(e.$slots, 'default')]),
                    _: 3,
                    /* FORWARDED */
                },
                16,
                /* FULL_PROPS */
            )
        )
    },
})
export { _ as default }
