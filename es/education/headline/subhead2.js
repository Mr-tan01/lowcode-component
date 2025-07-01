import {
    defineComponent as m,
    mergeDefaults as u,
    useCssVars as f,
    computed as g,
    openBlock as i,
    createElementBlock as s,
    createElementVNode as r,
    createCommentVNode as l,
    renderSlot as d,
    toDisplayString as h,
} from 'vue'
import c from './images/subhead-lft.png.js'
import y from './images/subhead-rgt.png.js'
import _ from './images/subhead-lgt.png.js'
import { overflowStr as v } from 'lowcode-share/es/share'
const b = { class: 'lc-subhead' },
    x = {
        key: 0,
        class: 'lc-subhead__imglft lc-subhead__img',
    },
    S = {
        key: 1,
        class: 'lc-subhead__imglgt lc-subhead__img',
    },
    k = {
        key: 2,
        class: 'lc-subhead__icon-left',
    },
    p = ['title'],
    I = {
        key: 3,
        class: 'lc-subhead__icon-right',
    },
    R = {
        key: 4,
        class: 'lc-subhead__imgrft lc-subhead__img',
    },
    $ = {
        key: 5,
        class: 'lc-subhead__imgrgt lc-subhead__img',
    },
    V = /* @__PURE__ */ m({
        __name: 'subhead',
        props: /* @__PURE__ */ u(
            {
                text: {
                    type: String,
                },
                maxLength: {
                    type: Number,
                },
                fontSize: {
                    type: String,
                },
                type: {
                    type: String,
                },
                hideRadioIcon: {
                    type: Boolean,
                },
            },
            {
                text: '',
                maxLength: 15,
                fontSize: '18px',
                type: 'left',
                hideRadioIcon: !1,
            },
        ),
        setup(t) {
            f((n) => ({
                '5f4dc6ac': t.fontSize,
            }))
            const o = {
                    right: 'right',
                    center: 'center',
                    left: 'left',
                },
                a = g(() => v(t.text, t.maxLength))
            return (n, e) => (
                i(),
                s('div', b, [
                    t.type === o.left && !t.hideRadioIcon
                        ? (i(),
                          s(
                              'div',
                              x,
                              e[0] ||
                                  (e[0] = [
                                      r(
                                          'img',
                                          {
                                              src: c,
                                              alt: '',
                                          },
                                          null,
                                          -1,
                                          /* HOISTED */
                                      ),
                                  ]),
                          ))
                        : l('v-if', !0),
                    t.type === o.right || t.type === o.center
                        ? (i(),
                          s(
                              'div',
                              S,
                              e[1] ||
                                  (e[1] = [
                                      r(
                                          'img',
                                          {
                                              src: y,
                                              alt: '',
                                          },
                                          null,
                                          -1,
                                          /* HOISTED */
                                      ),
                                  ]),
                          ))
                        : l('v-if', !0),
                    n.$slots['icon-left']
                        ? (i(),
                          s('div', k, [
                              d(n.$slots, 'icon-left', {}, void 0, !0),
                          ]))
                        : l('v-if', !0),
                    r(
                        'div',
                        {
                            class: 'lc-subhead__text',
                            title: t.text,
                        },
                        h(a.value),
                        9,
                        p,
                    ),
                    n.$slots['icon-right']
                        ? (i(),
                          s('div', I, [
                              d(n.$slots, 'icon-right', {}, void 0, !0),
                          ]))
                        : l('v-if', !0),
                    t.type === o.right && !t.hideRadioIcon
                        ? (i(),
                          s(
                              'div',
                              R,
                              e[2] ||
                                  (e[2] = [
                                      r(
                                          'img',
                                          {
                                              src: c,
                                              alt: '',
                                          },
                                          null,
                                          -1,
                                          /* HOISTED */
                                      ),
                                  ]),
                          ))
                        : l('v-if', !0),
                    t.type === o.left || t.type === o.center
                        ? (i(),
                          s(
                              'div',
                              $,
                              e[3] ||
                                  (e[3] = [
                                      r(
                                          'img',
                                          {
                                              src: _,
                                              alt: '',
                                          },
                                          null,
                                          -1,
                                          /* HOISTED */
                                      ),
                                  ]),
                          ))
                        : l('v-if', !0),
                ])
            )
        },
    })
export { V as default }
