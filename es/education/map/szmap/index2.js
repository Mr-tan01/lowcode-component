import { defineComponent, mergeDefaults, openBlock, createElementBlock, createVNode, mergeProps, withCtx, renderSlot } from "vue";
import { propsRaw } from "./props.js";
import RawMap from "./rawMap.js";
import { LabelModelEnum } from "./const.js";
const _hoisted_1 = { class: "lc-szmap" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "szmap",
  props: /* @__PURE__ */ mergeDefaults(propsRaw, {
    labelModel: () => LabelModelEnum.DEFAULT
  }),
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(RawMap, mergeProps({
          class: "back-block-map level-map",
          "show-label": false,
          "disabled-gradient": _ctx.disabledGradient,
          "rotate-x": _ctx.rotateX,
          "label-model": _ctx.labelModel,
          levels: _ctx.levels,
          values: _ctx.values
        }, _ctx.$attrs), null, 16, ["disabled-gradient", "rotate-x", "label-model", "levels", "values"]),
        createVNode(RawMap, mergeProps({
          class: "float-block-map level-map",
          "fill-model": "hover",
          "disabled-gradient": _ctx.disabledGradient,
          "rotate-x": _ctx.rotateX,
          "label-model": _ctx.labelModel,
          "show-label": true,
          levels: _ctx.levels,
          values: _ctx.values
        }, _ctx.$attrs, { "show-border": false }), {
          mapLabel: withCtx(({ blockList, labelClass, getVlaue, currentMapKey }) => [
            renderSlot(_ctx.$slots, "mapLabel", {
              blockList,
              labelClass,
              getVlaue,
              currentMapKey
            }, void 0, true)
          ]),
          _: 3
          /* FORWARDED */
        }, 16, ["disabled-gradient", "rotate-x", "label-model", "levels", "values"])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
