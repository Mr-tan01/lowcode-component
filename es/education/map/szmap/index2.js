import {
    defineComponent as m,
    mergeDefaults as p,
    openBlock as i,
    createElementBlock as n,
    createVNode as l,
    mergeProps as a,
    withCtx as b,
    renderSlot as u,
} from 'vue'
import { propsRaw as v } from './props.js'
import o from './rawMap.js'
import { LabelModelEnum as f } from './const.js'
const M = { class: 'lc-szmap' },
    L = /* @__PURE__ */ m({
        __name: 'szmap',
        props: /* @__PURE__ */ p(v, {
            labelModel: () => f.DEFAULT,
        }),
        setup(h) {
            return (e, w) => (
                i(),
                n('div', M, [
                    l(
                        o,
                        a(
                            {
                                'class': 'back-block-map level-map',
                                'show-label': !1,
                                'disabledGradient': e.disabledGradient,
                                'rotateX': e.rotateX,
                                'labelModel': e.labelModel,
                                'levels': e.levels,
                                'values': e.values,
                            },
                            e.$attrs,
                        ),
                        null,
                        16,
                        [
                            'disabledGradient',
                            'rotateX',
                            'labelModel',
                            'levels',
                            'values',
                        ],
                    ),
                    l(
                        o,
                        a(
                            {
                                'class': 'float-block-map level-map',
                                'fill-model': 'hover',
                                'disabledGradient': e.disabledGradient,
                                'rotateX': e.rotateX,
                                'labelModel': e.labelModel,
                                'show-label': !0,
                                'levels': e.levels,
                                'values': e.values,
                            },
                            e.$attrs,
                            { showBorder: !1 },
                        ),
                        {
                            mapLabel: b(
                                ({
                                    blockList: s,
                                    labelClass: r,
                                    getVlaue: d,
                                    currentMapKey: t,
                                }) => [
                                    u(
                                        e.$slots,
                                        'mapLabel',
                                        {
                                            blockList: s,
                                            labelClass: r,
                                            getVlaue: d,
                                            currentMapKey: t,
                                        },
                                        void 0,
                                        !0,
                                    ),
                                ],
                            ),
                            _: 3,
                            /* FORWARDED */
                        },
                        16,
                        [
                            'disabledGradient',
                            'rotateX',
                            'labelModel',
                            'levels',
                            'values',
                        ],
                    ),
                ])
            )
        },
    })
export { L as default }
