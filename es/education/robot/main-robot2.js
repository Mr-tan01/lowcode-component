import { defineComponent, mergeModels, watchEffect, computed, ref, useModel, onUnmounted, createElementBlock, openBlock, createElementVNode, withDirectives, createTextVNode, toDisplayString, unref, vShow, vModelText, renderSlot, Fragment, renderList, normalizeStyle, createVNode, mergeDefaults } from "vue";
import _imports_0 from "./images/main-robot.png.js";
import _imports_1 from "./images/voice.png.js";
import _imports_2 from "./images/microphone.png.js";
import { useSpeech } from "./speech.js";
import LcIcon from "./icon/index.js";
import './assets/icon/iconCard.css';/* empty css              */
import { defStarData } from "./const.js";
import { useStarRotate } from "./main-robot-hook.js";
import memoize from "lodash-es/memoize";
import { useMessage } from "naive-ui";
const _hoisted_1 = { class: "lc-main-robot" };
const _hoisted_2 = { class: "lc-main-robot__wrapper" };
const _hoisted_3 = { class: "lc-main-robot__wrapper__inner-input" };
const _hoisted_4 = { class: "lc-main-robot__wrapper__inner-input--content" };
const _hoisted_5 = { class: "lc-main-robot__wrapper__inner-input--help" };
const _hoisted_6 = ["placeholder", "disabled"];
const _hoisted_7 = { class: "lc-main-robot__wrapper__inner-input--content__suffix" };
const _hoisted_8 = { class: "lc-main-robot-icon" };
const _hoisted_9 = { class: "lc-main-robot__wrapper__star-wrap--star__meta" };
const _hoisted_10 = ["title", "onClick"];
const _hoisted_11 = ["title", "onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "main-robot",
  props: /* @__PURE__ */ mergeModels(/* @__PURE__ */ mergeDefaults({
    placeholder: String,
    stars: Array,
    duration: Number,
    animate: Boolean,
    startAngle: Number,
    maxShowCount: Number,
    fullAngle: Number,
    forbidden: Boolean,
    counterClockwise: Boolean,
    flip: { type: Boolean, default: false },
    hideWhenBack: { type: Boolean, default: false }
  }, {
    placeholder: "AI 智能问数",
    stars: () => void 0,
    duration: 1e3,
    animate: true,
    startAngle: 90,
    maxShowCount: 7,
    fullAngle: 360,
    forbidden: false,
    counterClockwise: false,
    flip: false,
    hideWhenBack: false
  }), {
    "value": { default: "" },
    "valueModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["click", "itemClick"], ["update:value"]),
  setup(__props, { emit: __emit }) {
    const message = useMessage();
    const { start, stop, output, on } = useSpeech();
    function handleMouseDown() {
      if (__props.forbidden) {
        message.warning("此功能敬请期待");
      } else {
        start();
      }
    }
    function handleMouseUp() {
      if (!__props.forbidden) {
        stop();
      }
    }
    const {
      starWrapperRef,
      customRotateStyle,
      getTextStyle,
      starLneght,
      starElRefs,
      angleOffset,
      averageAngle,
      startAngle: circleStartAngle,
      starMaxShowCount,
      displayAlternately,
      fullAngle: circleFullAngle,
      cleanup: cleanupStarRotate,
      // 新增清理函数
      enableFlip: hookFlip,
      // 翻转开关
      hideWhenBack: hookHideBack
      // 隐藏星星
    } = useStarRotate();
    watchEffect(() => {
      hookFlip.value = __props.flip;
      hookHideBack.value = __props.hideWhenBack;
    });
    const reverseIndex = memoize(
      (len, index) => {
        return len - (index + 1);
      },
      (len, index) => `${len}-${index}`
    );
    const renderStartData = computed(() => {
      var _a;
      return ((_a = __props.stars) == null ? void 0 : _a.length) ? __props.stars : defStarData;
    });
    watchEffect(() => {
      var _a;
      starLneght.value = ((_a = renderStartData.value) == null ? void 0 : _a.length) || 0;
      circleStartAngle.value = __props.startAngle;
      starMaxShowCount.value = __props.maxShowCount;
      circleFullAngle.value = __props.fullAngle;
      const yc = renderStartData.value.length - __props.maxShowCount;
      yc < 0 ? [] : defStarData.slice(yc * -1).forEach((_, index) => {
        const newIndex = renderStartData.value.length - yc + index;
        displayAlternately.value.push(newIndex);
      });
    });
    const step = computed(() => 360 / __props.duration);
    const time = computed(() => 1e3 / __props.duration);
    const isAnimate = ref(__props.animate);
    let animationFrameId = null;
    let timerId = null;
    function autoRotate() {
      if (!isAnimate.value) return;
      timerId = window.setTimeout(() => {
        if (!isAnimate.value) return;
        animationFrameId = window.requestAnimationFrame(() => {
          if (__props.counterClockwise) {
            angleOffset.value -= step.value;
            if (angleOffset.value <= 0) {
              angleOffset.value = 360;
            }
          } else {
            angleOffset.value += step.value;
            if (angleOffset.value >= 360) {
              angleOffset.value = 0;
            }
          }
          autoRotate();
        });
      }, time.value);
    }
    watchEffect(() => {
      if (isAnimate.value) {
        autoRotate();
      } else {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
        if (timerId) {
          clearTimeout(timerId);
          timerId = null;
        }
      }
    });
    const $emit = __emit;
    function starClick(item, index) {
      angleOffset.value = averageAngle.value * index * -1;
      $emit("click", item, index);
    }
    function starItemClick(item, index) {
      angleOffset.value = averageAngle.value * index * -1;
      $emit("itemClick", item, index);
    }
    const mouseLeaveTimer = ref(null);
    function mouseenter() {
      if (mouseLeaveTimer.value) {
        clearTimeout(mouseLeaveTimer.value);
        mouseLeaveTimer.value = null;
      }
      isAnimate.value = false;
    }
    function mouseleave() {
      mouseLeaveTimer.value = window.setTimeout(() => {
        if (isAnimate.value) return;
        isAnimate.value = __props.animate;
        autoRotate();
      }, 2e3);
    }
    const modelContext = useModel(__props, "value");
    onUnmounted(() => {
      isAnimate.value = false;
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (timerId) {
        clearTimeout(timerId);
      }
      stop();
      if (cleanupStarRotate) {
        cleanupStarRotate();
      }
      if (mouseLeaveTimer.value) {
        clearTimeout(mouseLeaveTimer.value);
      }
    });
    on("result", () => {
      var _a;
      modelContext.value = ((_a = output.value) == null ? void 0 : _a.textContent) || "";
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          _cache[2] || (_cache[2] = createElementVNode(
            "img",
            {
              class: "lc-main-robot__img",
              src: _imports_0,
              draggable: "false",
              alt: ""
            },
            null,
            -1
            /* CACHED */
          )),
          createElementVNode("div", _hoisted_3, [
            createElementVNode("div", _hoisted_4, [
              withDirectives(createElementVNode(
                "div",
                _hoisted_5,
                [
                  _cache[1] || (_cache[1] = createElementVNode(
                    "img",
                    {
                      class: "lc-main-robot__wrapper__inner-input--help--voice",
                      src: _imports_1,
                      draggable: "false",
                      alt: ""
                    },
                    null,
                    -1
                    /* CACHED */
                  )),
                  createTextVNode(
                    " " + toDisplayString(unref(output).helpText),
                    1
                    /* TEXT */
                  )
                ],
                512
                /* NEED_PATCH */
              ), [
                [vShow, unref(output).helpText]
              ]),
              withDirectives(createElementVNode("input", {
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelContext.value = $event),
                type: "text",
                placeholder: __props.placeholder,
                disabled: __props.forbidden,
                class: "lc-main-robot__wrapper__inner-input--content__input"
              }, null, 8, _hoisted_6), [
                [vModelText, modelContext.value]
              ]),
              createElementVNode("div", _hoisted_7, [
                renderSlot(_ctx.$slots, "input-suffix", {}, () => [
                  createElementVNode(
                    "img",
                    {
                      class: "lc-main-robot__wrapper__inner-input--content__suffix--img",
                      src: _imports_2,
                      draggable: "false",
                      alt: "",
                      onMousedown: handleMouseDown,
                      onMouseup: handleMouseUp
                    },
                    null,
                    32
                    /* NEED_HYDRATION */
                  )
                ], true)
              ])
            ])
          ]),
          createElementVNode(
            "div",
            {
              ref_key: "starWrapperRef",
              ref: starWrapperRef,
              class: "lc-main-robot__wrapper__star-wrap"
            },
            [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(renderStartData.value, (item, key) => {
                  return openBlock(), createElementBlock(
                    "div",
                    {
                      key: item.key ?? key,
                      ref_for: true,
                      ref_key: "starElRefs",
                      ref: starElRefs,
                      class: "lc-main-robot__wrapper__star-wrap--star",
                      style: normalizeStyle(unref(customRotateStyle)(key)),
                      onMouseenter: mouseenter,
                      onMouseleave: mouseleave
                    },
                    [
                      createElementVNode("div", _hoisted_8, [
                        createVNode(unref(LcIcon), {
                          class: "lc-main-robot-icon-center",
                          domain: item.domain,
                          name: item.name,
                          size: item.size,
                          onClick: ($event) => starClick(item, key)
                        }, null, 8, ["domain", "name", "size", "onClick"])
                      ]),
                      createElementVNode("div", _hoisted_9, [
                        (openBlock(true), createElementBlock(
                          Fragment,
                          null,
                          renderList(item.meta, (el, ckey) => {
                            return openBlock(), createElementBlock(
                              "div",
                              {
                                key: ckey,
                                class: "lc-main-robot__wrapper__star-wrap--star__meta--item",
                                style: normalizeStyle({
                                  "--left-offset-number": ckey,
                                  "--left-reverse-offset-number": unref(reverseIndex)(item.meta.length, ckey)
                                })
                              },
                              [
                                ckey === 0 ? (openBlock(), createElementBlock("div", {
                                  key: 0,
                                  class: "lc-main-robot__wrapper__star-wrap--star__meta--item--text",
                                  title: el.label,
                                  style: normalizeStyle(unref(getTextStyle)(key)),
                                  onClick: ($event) => starClick(item, key)
                                }, toDisplayString(el.label), 13, _hoisted_10)) : (openBlock(), createElementBlock("div", {
                                  key: 1,
                                  class: "lc-main-robot__wrapper__star-wrap--star__meta--item--text",
                                  title: el.label,
                                  style: normalizeStyle(unref(getTextStyle)(key)),
                                  onClick: ($event) => starItemClick(el, ckey)
                                }, toDisplayString(el.label), 13, _hoisted_11))
                              ],
                              4
                              /* STYLE */
                            );
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ])
                    ],
                    36
                    /* STYLE, NEED_HYDRATION */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ],
            512
            /* NEED_PATCH */
          )
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
