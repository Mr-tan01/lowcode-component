import { defineComponent, mergeDefaults, ref, onBeforeUnmount, onUnmounted, createElementBlock, openBlock, createVNode, mergeProps, withCtx, renderSlot } from "vue";
import { propsRaw } from "./props.js";
import RawMap from "./rawMap.js";
import { LabelModelEnum } from "./const.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "szmap",
  props: /* @__PURE__ */ mergeDefaults(propsRaw, {
    labelModel: () => LabelModelEnum.DEFAULT
  }),
  setup(__props) {
    const containerRef = ref();
    function cleanup() {
      if (containerRef.value) {
        const allElements = containerRef.value.querySelectorAll("*");
        allElements.forEach((el) => {
          var _a;
          if (el instanceof HTMLElement || el instanceof SVGElement) {
            el.style.transition = "";
            el.style.transform = "";
            el.style.perspective = "";
            const animations = (_a = el.getAnimations) == null ? void 0 : _a.call(el);
            if (animations) {
              animations.forEach((anim) => anim.cancel());
            }
          }
        });
      }
    }
    onBeforeUnmount(() => {
      cleanup();
    });
    onUnmounted(() => {
      cleanup();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          ref_key: "containerRef",
          ref: containerRef,
          class: "lc-szmap"
        },
        [
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
            mapLabel: withCtx(({ blockList, labelClass, getValue, currentMapKey }) => [
              renderSlot(_ctx.$slots, "mapLabel", {
                blockList,
                labelClass,
                getValue,
                currentMapKey
              }, void 0, true)
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["disabled-gradient", "rotate-x", "label-model", "levels", "values"])
        ],
        512
        /* NEED_PATCH */
      );
    };
  }
});
export {
  _sfc_main as default
};
