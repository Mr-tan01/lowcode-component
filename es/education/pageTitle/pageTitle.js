import {
    openBlock as t,
    createElementBlock as o,
    createElementVNode as c,
    renderSlot as r,
} from 'vue'
import './assets/pageTitle.css' /* empty css           */
import s from './_virtual/_plugin-vue_export-helper.js'
const _ = {},
    n = { class: 'lc-page_title' },
    a = { class: 'lc-page_title__text' }
function l(e, d) {
    return (
        t(),
        o('div', n, [c('div', a, [r(e.$slots, 'default', {}, void 0, !0)])])
    )
}
const m = /* @__PURE__ */ s(_, [
    ['render', l],
    ['__scopeId', 'data-v-bcef506a'],
])
export { m as default }
