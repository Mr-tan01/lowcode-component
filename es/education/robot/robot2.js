import { defineComponent, mergeModels, useCssVars, unref, toRefs, useModel, computed, toRef, createElementBlock, openBlock, normalizeClass, createElementVNode, createBlock, createCommentVNode, mergeProps, withCtx, renderSlot } from "vue";
import { robotBQMap, imageShowTrigger, imageHideDir } from "./const.js";
import robotChatPopup from "./robot-chat-popup.js";
import { useDragRobotPosition } from "./drag.js";
const _hoisted_1 = ["draggable"];
const _hoisted_2 = ["src"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "robot",
  props: /* @__PURE__ */ mergeModels({
    src: {},
    value: {},
    width: {},
    height: {},
    trigger: {},
    hidDir: {},
    showPopup: { type: Boolean },
    aiConfig: {},
    popupContextMaxH: {},
    draggable: { type: Boolean },
    position: {},
    popupSize: {}
  }, {
    "isShow": { type: Boolean, ...{ default: false } },
    "isShowModifiers": {}
  }),
  emits: ["update:isShow"],
  setup(__props) {
    useCssVars((_ctx) => ({
      "61ee6592": _ctx.position,
      "1d731ea0": unref(robotPositionTop),
      "45ad2478": _ctx.width,
      "562870b5": _ctx.height
    }));
    const props = __props;
    const isFocus = useModel(__props, "isShow");
    const robotSrc = computed(() => props.src || robotBQMap[props.value || "s1"]);
    const popupSizeRef = toRef(() => props.popupSize || "small");
    const { isDraging, startDrag, stopDrag, robotOffset, xAdsorptionDir } = useDragRobotPosition(popupSizeRef);
    const robotHideDir = computed(() => {
      return !props.draggable ? props.hidDir : xAdsorptionDir.value;
    });
    const imageLayoutClass = computed(() => {
      return {
        [`lc-robot__wrapper__image--status-${robotHideDir.value}`]: props.trigger !== imageShowTrigger.none
      };
    });
    function useShowPopup(dir) {
      return computed(() => props.showPopup && robotHideDir.value === dir).value;
    }
    const { y: robotPositionTop } = toRefs(robotOffset);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["lc-robot", [
          {
            "lc-robot--draggable": _ctx.draggable,
            "lc-robot--draging": unref(isDraging)
          },
          `lc-robot--dir-${unref(xAdsorptionDir)}`
        ]]),
        draggable: _ctx.draggable,
        onDragstart: _cache[2] || (_cache[2] = //@ts-ignore
        (...args) => unref(startDrag) && unref(startDrag)(...args)),
        onDragend: _cache[3] || (_cache[3] = //@ts-ignore
        (...args) => unref(stopDrag) && unref(stopDrag)(...args))
      }, [
        createElementVNode(
          "div",
          {
            class: "lc-robot__wrapper",
            tabindex: "-1",
            onFocus: _cache[0] || (_cache[0] = ($event) => isFocus.value = true),
            onBlur: _cache[1] || (_cache[1] = ($event) => isFocus.value = false)
          },
          [
            useShowPopup(unref(imageHideDir).rt) ? (openBlock(), createBlock(robotChatPopup, mergeProps({
              key: 0,
              class: { popupShow: useShowPopup(unref(imageHideDir).rt) && !isFocus.value },
              "max-height": _ctx.popupContextMaxH,
              "ai-config": _ctx.aiConfig,
              "is-focus": isFocus.value,
              "hid-dir": robotHideDir.value,
              "popup-size": _ctx.popupSize
            }, _ctx.$attrs), {
              center: withCtx(() => [
                renderSlot(_ctx.$slots, "center", {}, void 0, true)
              ]),
              _: 3
              /* FORWARDED */
            }, 16, ["class", "max-height", "ai-config", "is-focus", "hid-dir", "popup-size"])) : createCommentVNode("v-if", true),
            createElementVNode("img", {
              class: normalizeClass(["lc-robot__wrapper__image", [imageLayoutClass.value]]),
              src: robotSrc.value,
              draggable: "false",
              alt: ""
            }, null, 10, _hoisted_2),
            useShowPopup(unref(imageHideDir).lt) ? (openBlock(), createBlock(robotChatPopup, mergeProps({
              key: 1,
              class: { popupShow: useShowPopup(unref(imageHideDir).lt) && !isFocus.value },
              "max-height": _ctx.popupContextMaxH,
              "ai-config": _ctx.aiConfig,
              "is-focus": isFocus.value,
              "hid-dir": robotHideDir.value,
              "popup-size": _ctx.popupSize
            }, _ctx.$attrs), {
              center: withCtx(() => [
                renderSlot(_ctx.$slots, "center", {}, void 0, true)
              ]),
              _: 3
              /* FORWARDED */
            }, 16, ["class", "max-height", "ai-config", "is-focus", "hid-dir", "popup-size"])) : createCommentVNode("v-if", true)
          ],
          32
          /* NEED_HYDRATION */
        )
      ], 42, _hoisted_1);
    };
  }
});
export {
  _sfc_main as default
};
