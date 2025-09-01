import { defineComponent, mergeModels, useCssVars, unref, toRefs, useModel, computed, createElementBlock, openBlock, normalizeClass, createElementVNode, createBlock, createCommentVNode, mergeProps } from "vue";
import { robotBQMap, imageShowTrigger, imageHideDir } from "./const.js";
import robotChatPopup from "./robot-chat-popup.js";
import { useDragRobotPosition } from "./drag.js";
const _hoisted_1 = ["draggable"];
const _hoisted_2 = ["src"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "robot",
  props: /* @__PURE__ */ mergeModels({
    src: { default: "" },
    value: { default: "s1" },
    width: { default: "219px" },
    height: { default: "233px" },
    trigger: { default: "none" },
    hidDir: { default: "lt" },
    showPopup: { type: Boolean, default: false },
    aiConfig: { default: () => ({
      sayHello: "Hi，我是小教！ 您可以试着说",
      quick: [
        {
          text: "部门汇报模式"
        },
        {
          text: "任务查看模式"
        },
        {
          text: "1974年，第一次在东南亚打自由搏击就得了冠军；1980年打赢了日本重炮手雷龙，接着连续三年打败所有日本空手道高手，赢得全日本自由搏击冠军……"
        },
        {
          text: "智能问答模式"
        }
      ]
    }) },
    popupContextMaxH: { default: () => void 0 },
    draggable: { type: Boolean, default: false },
    position: { default: "fixed" }
  }, {
    "isShow": { type: Boolean, ...{ default: false } },
    "isShowModifiers": {}
  }),
  emits: ["update:isShow"],
  setup(__props) {
    useCssVars((_ctx) => ({
      "533baf34": _ctx.position,
      "0825eb3e": unref(robotPositionBottom),
      "224a2fa9": _ctx.width,
      "0d2ccba4": _ctx.height
    }));
    const isFocus = useModel(__props, "isShow");
    const robotSrc = computed(() => __props.src || robotBQMap[__props.value]);
    const { isDraging, startDrag, stopDrag, robotOffset, xAdsorptionDir } = useDragRobotPosition();
    const robotHideDir = computed(() => {
      return !__props.draggable ? __props.hidDir : xAdsorptionDir.value;
    });
    const imageLayoutClass = computed(() => {
      return {
        [`lc-robot__wrapper__image--status-${robotHideDir.value}`]: __props.trigger !== imageShowTrigger.none
      };
    });
    function useShowPopup(dir) {
      return computed(() => __props.showPopup && robotHideDir.value === dir).value;
    }
    const { y: robotPositionBottom } = toRefs(robotOffset);
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
              "max-height": _ctx.popupContextMaxH,
              "ai-config": _ctx.aiConfig,
              "is-focus": isFocus.value,
              "hid-dir": robotHideDir.value
            }, _ctx.$attrs), null, 16, ["max-height", "ai-config", "is-focus", "hid-dir"])) : createCommentVNode("v-if", true),
            createElementVNode("img", {
              class: normalizeClass(["lc-robot__wrapper__image", [imageLayoutClass.value]]),
              src: robotSrc.value,
              draggable: "false",
              alt: ""
            }, null, 10, _hoisted_2),
            useShowPopup(unref(imageHideDir).lt) ? (openBlock(), createBlock(robotChatPopup, mergeProps({
              key: 1,
              "max-height": _ctx.popupContextMaxH,
              "ai-config": _ctx.aiConfig,
              "is-focus": isFocus.value,
              "hid-dir": robotHideDir.value
            }, _ctx.$attrs), null, 16, ["max-height", "ai-config", "is-focus", "hid-dir"])) : createCommentVNode("v-if", true)
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
