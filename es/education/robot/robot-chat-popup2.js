import __vite_glob_0_0 from "./images/base/base.png.js";
import __vite_glob_0_1 from "./images/base/selected-base.png.js";
import __vite_glob_0_2 from "./images/icon/icon.png.js";
import __vite_glob_0_3 from "./images/icon/selected-icon.png.js";
import __vite_glob_0_4 from "./images/main-robot.png2.js";
import __vite_glob_0_5 from "./images/meat-rect-bg.png.js";
import __vite_glob_0_6 from "./images/microphone.png2.js";
import __vite_glob_0_7 from "./images/msg-popup-bg-large.png.js";
import __vite_glob_0_8 from "./images/msg-popup-bg-medium.png.js";
import __vite_glob_0_9 from "./images/msg-popup-bg-small.png.js";
import __vite_glob_0_10 from "./images/msg-popup-r-bg-large.png.js";
import __vite_glob_0_11 from "./images/msg-popup-r-bg-medium.png.js";
import __vite_glob_0_12 from "./images/msg-popup-r-bg-small.png.js";
import __vite_glob_0_13 from "./images/s1.png2.js";
import __vite_glob_0_14 from "./images/s2.png2.js";
import __vite_glob_0_15 from "./images/s3.png2.js";
import __vite_glob_0_16 from "./images/s4.png2.js";
import __vite_glob_0_17 from "./images/s5.png2.js";
import __vite_glob_0_18 from "./images/selected-meat-rect-bg.png.js";
import __vite_glob_0_19 from "./images/voice.png2.js";
import { defineComponent, mergeDefaults, useCssVars, computed, createElementBlock, openBlock, normalizeClass, createElementVNode, toDisplayString, renderSlot, createVNode, unref, normalizeStyle, withCtx, Fragment, renderList, createBlock, createTextVNode } from "vue";
import _imports_1 from "./images/voice.png.js";
import { NScrollbar, NMarquee } from "naive-ui/es";
import { scale } from "mmjs-core";
const _hoisted_1 = { class: "lc-robot-chat-popup__content" };
const _hoisted_2 = { class: "lc-robot-chat-popup__content--inner" };
const _hoisted_3 = { class: "lc-robot-chat-popup__content--inner__sayhello" };
const _hoisted_4 = { class: "lc-robot-chat-popup__content--inner__quick" };
const _hoisted_5 = ["onClick"];
const _hoisted_6 = ["title"];
const _hoisted_7 = { key: 1 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "robot-chat-popup",
  props: /* @__PURE__ */ mergeDefaults({
    isFocus: {
      type: Boolean
    },
    hidDir: {
      type: String
    },
    aiConfig: {
      type: Object
    },
    maxHeight: {
      type: String
    },
    popupSize: {
      type: String
    }
  }, {
    isFocus: false,
    hidDir: "rt",
    aiConfig: () => ({
      sayHello: "Hi，我是小教！ 您可以试着说",
      quick: []
    }),
    maxHeight: "75px",
    popupSize: "small"
  }),
  emits: ["clickQuick"],
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "740f5ea8": imgHeight.value,
      "a9fd7750": popupBackground.value,
      "59f1a7b6": imgWidth.value
    }));
    const emit = __emit;
    function clickQuick(item) {
      emit("clickQuick", item);
    }
    const imgWidth = computed(() => {
      return __props.popupSize === "small" ? `${scale(349)}px` : __props.popupSize === "medium" ? `${scale(466)}px` : `${scale(537)}px`;
    });
    const imgHeight = computed(() => {
      return __props.popupSize === "small" ? `${scale(140)}px` : __props.popupSize === "medium" ? `${scale(339)}px` : `${scale(625)}px`;
    });
    const popupBackground = computed(() => {
      const imageFileName = `msg-popup${__props.hidDir === "rt" ? "-r-" : "-"}bg-${__props.popupSize}.png`;
      const imageUrl = new URL((/* @__PURE__ */ Object.assign({ "./images/base/base.png": __vite_glob_0_0, "./images/base/selected-base.png": __vite_glob_0_1, "./images/icon/icon.png": __vite_glob_0_2, "./images/icon/selected-icon.png": __vite_glob_0_3, "./images/main-robot.png": __vite_glob_0_4, "./images/meat-rect-bg.png": __vite_glob_0_5, "./images/microphone.png": __vite_glob_0_6, "./images/msg-popup-bg-large.png": __vite_glob_0_7, "./images/msg-popup-bg-medium.png": __vite_glob_0_8, "./images/msg-popup-bg-small.png": __vite_glob_0_9, "./images/msg-popup-r-bg-large.png": __vite_glob_0_10, "./images/msg-popup-r-bg-medium.png": __vite_glob_0_11, "./images/msg-popup-r-bg-small.png": __vite_glob_0_12, "./images/s1.png": __vite_glob_0_13, "./images/s2.png": __vite_glob_0_14, "./images/s3.png": __vite_glob_0_15, "./images/s4.png": __vite_glob_0_16, "./images/s5.png": __vite_glob_0_17, "./images/selected-meat-rect-bg.png": __vite_glob_0_18, "./images/voice.png": __vite_glob_0_19 }))[`./images/${imageFileName}`], import.meta.url).href;
      return `url(${imageUrl})`;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(["lc-robot-chat-popup", [
            {
              "lc-robot-chat-popup--focus": __props.isFocus
            },
            `lc-robot-chat-popup__hide--${__props.hidDir}`
          ]])
        },
        [
          createElementVNode("div", _hoisted_1, [
            createElementVNode("div", _hoisted_2, [
              createElementVNode(
                "div",
                _hoisted_3,
                toDisplayString(__props.aiConfig.sayHello),
                1
                /* TEXT */
              ),
              createElementVNode("div", _hoisted_4, [
                renderSlot(_ctx.$slots, "center", {}, () => [
                  createVNode(unref(NScrollbar), {
                    style: normalizeStyle({ maxHeight: __props.maxHeight })
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(
                        Fragment,
                        null,
                        renderList(__props.aiConfig.quick, (item, index) => {
                          return openBlock(), createElementBlock("div", {
                            key: index,
                            class: "lc-robot-chat-popup__content--inner__quick__item",
                            onClick: ($event) => clickQuick(item)
                          }, [
                            _cache[0] || (_cache[0] = createElementVNode(
                              "img",
                              {
                                class: "lc-robot-chat-popup__content--inner__quick__item--img",
                                src: _imports_1,
                                alt: ""
                              },
                              null,
                              -1
                              /* CACHED */
                            )),
                            createElementVNode("div", {
                              class: "lc-robot-chat-popup__content--inner__quick__item--text",
                              title: item.text
                            }, [
                              item.text.length > 10 ? (openBlock(), createBlock(
                                unref(NMarquee),
                                {
                                  key: 0,
                                  speed: 25,
                                  gradient: false
                                },
                                {
                                  default: withCtx(() => [
                                    createTextVNode(
                                      toDisplayString(item.text) + "    " + toDisplayString(item.text),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  _: 2
                                  /* DYNAMIC */
                                },
                                1024
                                /* DYNAMIC_SLOTS */
                              )) : (openBlock(), createElementBlock(
                                "div",
                                _hoisted_7,
                                toDisplayString(item.text),
                                1
                                /* TEXT */
                              ))
                            ], 8, _hoisted_6)
                          ], 8, _hoisted_5);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 1
                    /* STABLE */
                  }, 8, ["style"])
                ], true)
              ])
            ])
          ])
        ],
        2
        /* CLASS */
      );
    };
  }
});
export {
  _sfc_main as default
};
