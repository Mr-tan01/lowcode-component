import { defineComponent, mergeDefaults, openBlock, createElementBlock, normalizeClass, createElementVNode, toDisplayString, createVNode, unref, normalizeStyle, withCtx, Fragment, renderList, createBlock, createTextVNode } from "vue";
import _imports_1 from "./images/voice.png.js";
import { NScrollbar, NMarquee } from "naive-ui/es";
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
    }
  }, {
    isFocus: false,
    hidDir: "rt",
    aiConfig: () => ({
      sayHello: "您好，我是智能客服机器人，请问您需要什么帮助？",
      quick: []
    }),
    maxHeight: "75px"
  }),
  emits: ["clickQuick"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    function clickQuick(item) {
      emit("clickQuick", item);
    }
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
                            /* HOISTED */
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
