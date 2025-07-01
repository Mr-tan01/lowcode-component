import _ from './images/mark-rect.png.js'
import u from './images/mark.png.js'
import p from './images/mark2-rect.png.js'
import d from './images/mark2.png.js'
import k from './images/normal.png.js'
import {
    defineComponent as g,
    computed as t,
    openBlock as f,
    createElementBlock as v,
    normalizeClass as b,
    normalizeStyle as N,
    createElementVNode as r,
    toDisplayString as i,
    renderSlot as $,
    createVNode as h,
    unref as w,
    createCommentVNode as S,
} from 'vue'
import { NNumberAnimation as y } from 'naive-ui/es/number-animation'
const z = { class: 'lc-mark__wrapper__image' },
    C = ['src'],
    B = { class: 'lc-mark__wrapper__image__label' },
    V = { class: 'lc-mark__wrapper__rect' },
    E = { class: 'lc-mark__wrapper__rect--value' },
    M = { class: 'lc-mark__wrapper__rect--unit' },
    G = /* @__PURE__ */ g({
        __name: 'mark',
        props: {
            value: { default: 0 },
            unit: {},
            model: { default: 'default' },
            meta: { default: () => ({}) },
            size: { default: 'medium' },
            iconName: { default: 'mark' },
            iconSrc: { default: '' },
            label: { default: '' },
            show: { type: Boolean, default: !0 },
            precision: { default: 0 },
        },
        emits: ['mark:click'],
        setup(a, { emit: o }) {
            const m = /* @__PURE__ */ Object.assign({
                    './images/mark-rect.png': _,
                    './images/mark.png': u,
                    './images/mark2-rect.png': p,
                    './images/mark2.png': d,
                    './images/normal.png': k,
                }),
                l = o,
                n = t(() => a.iconSrc || m[`./images/${a.iconName}.png`]),
                c = t(() => ({
                    '--mark-icon': `url(${m[`./images/${a.iconName}.png`]})`,
                    '--mark-icon-rect': `url(${m[`./images/${a.iconName === 'normal' ? 'mark2' : a.iconName}-rect.png`]})`,
                }))
            function s() {
                l('mark:click', {
                    value: a.value,
                    meta: a.meta,
                })
            }
            return (e, j) =>
                e.show
                    ? (f(),
                      v(
                          'div',
                          {
                              key: 0,
                              class: b([
                                  'lc-mark',
                                  [
                                      `lc-mark--${e.model}`,
                                      `lc-mark--${e.size}`,
                                      `lc-mark--icon-${e.iconName}`,
                                  ],
                              ]),
                              tabindex: -1,
                              style: N(c.value),
                          },
                          [
                              r(
                                  'div',
                                  {
                                      class: 'lc-mark__wrapper',
                                      onClick: s,
                                  },
                                  [
                                      r('div', z, [
                                          r(
                                              'img',
                                              {
                                                  class: 'lc-mark__wrapper__image__img',
                                                  src: n.value,
                                                  alt: ' ',
                                                  draggable: 'false',
                                              },
                                              null,
                                              8,
                                              C,
                                          ),
                                          r(
                                              'span',
                                              B,
                                              i(e.label),
                                              1,
                                              /* TEXT */
                                          ),
                                      ]),
                                      r('div', V, [
                                          $(
                                              e.$slots,
                                              'default',
                                              {},
                                              () => [
                                                  r('span', E, [
                                                      h(
                                                          w(y),
                                                          {
                                                              from: 0,
                                                              to: e.value,
                                                              precision:
                                                                  e.precision,
                                                          },
                                                          null,
                                                          8,
                                                          ['to', 'precision'],
                                                      ),
                                                  ]),
                                                  r(
                                                      'span',
                                                      M,
                                                      i(e.unit),
                                                      1,
                                                      /* TEXT */
                                                  ),
                                              ],
                                              !0,
                                          ),
                                      ]),
                                  ],
                              ),
                          ],
                          6,
                          /* CLASS, STYLE */
                      ))
                    : S('v-if', !0)
        },
    })
export { G as default }
