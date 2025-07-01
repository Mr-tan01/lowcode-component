import {
    defineComponent as d,
    ref as m,
    watch as p,
    onMounted as f,
    onBeforeUnmount as v,
    openBlock as h,
    createElementBlock as w,
} from 'vue'
import { useInitPlanet as y, EchartsLayer as _ } from './hooks.js'
import k from './images/default.jpeg.js'
const E = {
        class: 'lc-cesium-earth',
        id: 'cesium3D-box',
    },
    B = /* @__PURE__ */ d({
        __name: 'index',
        props: {
            options: {
                type: Object,
                default: () => {},
            },
            // 自动旋转速度
            rotateSpeed: {
                type: Number,
                default: 0.3,
            },
            // 默认是否开启自动旋转
            defaultRotate: {
                type: Boolean,
                default: !0,
            },
            baseUrl: {
                type: String,
                default: k,
                require: !0,
            },
        },
        emits: ['handle-click'],
        setup(i, { emit: n }) {
            const a = n,
                r = i,
                t = m(),
                { initViewer: s, destroyViewer: c, viewer: l } = y(r),
                u = () => {
                    var e
                    ;((t.value = new _(l.value, r.options)),
                        (e = t.value) == null ||
                            e._overlay.on('click', (o) => a('handle-click', o)))
                }
            return (
                p(
                    () => r.options,
                    (e) => {
                        var o
                        e && ((o = t.value) == null || o.updateOverlay(e))
                    },
                    {
                        immediate: !0,
                    },
                ),
                f(() => {
                    ;(s(),
                        u(),
                        window.addEventListener('resize', () => {
                            var e
                            return (e = t.value) == null ? void 0 : e.resize()
                        }))
                }),
                v(() => {
                    ;(c(),
                        window.removeEventListener('resize', () => {
                            var e
                            return (e = t.value) == null ? void 0 : e.resize()
                        }))
                }),
                (e, o) => (h(), w('div', E))
            )
        },
    })
export { B as default }
