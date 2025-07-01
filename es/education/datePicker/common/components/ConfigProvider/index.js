import {
    defineComponent as t,
    openBlock as r,
    createBlock as a,
    unref as e,
    withCtx as l,
    renderSlot as m,
} from 'vue'
import { NConfigProvider as n } from 'naive-ui/es/config-provider'
import { darkTheme as c } from 'naive-ui/es/themes'
import { dateZhCN as d, zhCN as f } from 'naive-ui/es/locales'
const C = /* @__PURE__ */ t({
    __name: 'index',
    setup(i) {
        return (o, p) => (
            r(),
            a(
                e(n),
                {
                    'date-locale': e(d),
                    'locale': e(f),
                    'theme': e(c),
                },
                {
                    default: l(() => [m(o.$slots, 'default')]),
                    _: 3,
                    /* FORWARDED */
                },
                8,
                ['date-locale', 'locale', 'theme'],
            )
        )
    },
})
export { C as default }
