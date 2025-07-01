import {
    defineComponent as a,
    toRefs as s,
    openBlock as p,
    createElementBlock as d,
    createVNode as l,
    unref as m,
    mergeProps as i,
    h as u,
} from 'vue'
import { NTree as f } from 'naive-ui/es/tree'
import _ from './icon/index.js'
const h = { class: 'lc-tree' },
    w = /* @__PURE__ */ a({
        __name: 'tree',
        props: {
            expandedIcon: { default: 'expand' },
            collapsedIcon: { default: 'retract' },
        },
        setup(o) {
            const r = o,
                { expandedIcon: n, collapsedIcon: t } = s(r),
                c = ({ expanded: e }) =>
                    u(_, {
                        name: e ? t.value : n.value,
                    })
            return (e, I) => (
                p(),
                d('div', h, [
                    l(
                        m(f),
                        i(e.$attrs, { 'render-switcher-icon': c }),
                        null,
                        16,
                        /* FULL_PROPS */
                    ),
                ])
            )
        },
    })
export { w as default }
