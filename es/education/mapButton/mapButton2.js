import {
    defineComponent as p,
    openBlock as i,
    createElementBlock as r,
    createElementVNode as o,
    Fragment as d,
    renderList as u,
} from 'vue'
import _ from './images/map.png.js'
import f from './images/layer.png.js'
import k from './images/original-point.png.js'
import C from './images/zoom-in.png.js'
import b from './images/zoom-out.png.js'
const v = { class: 'lcmapbutton' },
    g = { class: 'lcmapbutton-upside' },
    h = ['src', 'alt', 'onClick'],
    y = { class: 'lcmapbutton-underside' },
    Z = /* @__PURE__ */ p({
        __name: 'mapButton',
        emits: ['iconClicked'],
        setup(B, { emit: c }) {
            const l = [
                    { src: f, alt: 'Layer' },
                    { src: k, alt: 'OriginalPoint' },
                    { src: C, alt: 'ZoomIn' },
                    { src: b, alt: 'ZoomOut' },
                ],
                m = c,
                n = (e) => {
                    m('iconClicked', e)
                }
            return (e, s) => (
                i(),
                r('div', v, [
                    o('div', g, [
                        (i(),
                        r(
                            d,
                            null,
                            u(l, (t, a) =>
                                o(
                                    'img',
                                    {
                                        key: a,
                                        class: 'lcmapbutton-upside-icon',
                                        src: t.src,
                                        alt: t.alt,
                                        onClick: (O) => n(t.alt),
                                    },
                                    null,
                                    8,
                                    h,
                                ),
                            ),
                            64,
                            /* STABLE_FRAGMENT */
                        )),
                    ]),
                    o('div', y, [
                        o('img', {
                            class: 'lcmapbutton-underside-map',
                            src: _,
                            alt: 'Map',
                            onClick: s[0] || (s[0] = (t) => n('Map')),
                        }),
                    ]),
                ])
            )
        },
    })
export { Z as default }
