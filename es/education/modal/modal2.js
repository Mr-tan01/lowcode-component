import { defineComponent, computed, createBlock, openBlock, unref, normalizeProps, guardReactiveProps, withCtx, createElementVNode, normalizeStyle, renderSlot, createVNode, normalizeClass } from "vue";
import { NModal } from "naive-ui/es/modal";
import { options } from "./config.js";
import LcDecoratorTitle from "./decoratorTitle/index.js";
const _hoisted_1 = { class: "lc-modal__header" };
const _hoisted_2 = { class: "lc-modal__wrapper" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "modal",
  props: {
    width: { default: "1500px" },
    height: { default: "685px" },
    sizeMode: { default: "large" },
    title: { default: "" },
    maxLength: { default: 12 }
  },
  emits: ["update:show"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    function getModalSize(mode) {
      return computed(() => {
        return options.size[mode];
      });
    }
    const backgroundImage = computed(() => {
      return `url(${options.bgImgs[__props.sizeMode]}) no-repeat`;
    });
    const layoutStyle = computed(() => {
      return {
        "--modal-width": __props.width || getModalSize(__props.sizeMode).value.width,
        "--modal-height": __props.height || getModalSize(__props.sizeMode).value.height,
        "--modal-bg": backgroundImage.value,
        "--header-width": getModalSize(__props.sizeMode).value.headerWidth
      };
    });
    function close() {
      emit("update:show", false);
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(
        unref(NModal),
        normalizeProps(guardReactiveProps(_ctx.$attrs)),
        {
          default: withCtx(() => [
            createElementVNode(
              "div",
              {
                class: "lc-modal",
                style: normalizeStyle(layoutStyle.value)
              },
              [
                createElementVNode("div", _hoisted_1, [
                  renderSlot(_ctx.$slots, "header", {}, () => [
                    createVNode(unref(LcDecoratorTitle), {
                      "max-length": _ctx.maxLength,
                      text: _ctx.title
                    }, null, 8, ["max-length", "text"])
                  ], true)
                ]),
                createElementVNode("div", _hoisted_2, [
                  createElementVNode(
                    "div",
                    {
                      class: normalizeClass(["lc-modal__wrapper__closeable", {
                        [_ctx.sizeMode]: true
                      }])
                    },
                    [
                      renderSlot(_ctx.$slots, "closeable", {}, () => [
                        createElementVNode("button", {
                          class: "lc-modal__wrapper__closeable__button",
                          onClick: close
                        }, [..._cache[0] || (_cache[0] = [
                          createElementVNode(
                            "svg",
                            {
                              version: "1.1",
                              xmlns: "http://www.w3.org/2000/svg",
                              "xmlns:xlink": "http://www.w3.org/1999/xlink",
                              x: "0px",
                              y: "0px",
                              viewBox: "0 0 512 512",
                              "enable-background": "new 0 0 512 512",
                              "xml:space": "preserve"
                            },
                            [
                              createElementVNode("g", null, [
                                createElementVNode("g", null, [
                                  createElementVNode("polygon", { points: "405,136.798 375.202,107 256,226.202 136.798,107 107,136.798 226.202,256 107,375.202 136.798,405 256,285.798 \n                                375.202,405 405,375.202 285.798,256" })
                                ])
                              ])
                            ],
                            -1
                            /* CACHED */
                          )
                        ])])
                      ], true)
                    ],
                    2
                    /* CLASS */
                  ),
                  renderSlot(_ctx.$slots, "default", {}, void 0, true)
                ])
              ],
              4
              /* STYLE */
            )
          ]),
          _: 3
          /* FORWARDED */
        },
        16
        /* FULL_PROPS */
      );
    };
  }
});
export {
  _sfc_main as default
};
