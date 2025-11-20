import { defineComponent, useCssVars, unref, createElementBlock, openBlock, createVNode, mergeProps, withCtx, createElementVNode, renderSlot, toDisplayString } from "vue";
import { NTooltip } from "naive-ui/es/tooltip";
const _hoisted_1 = { class: "lc-tooltip" };
const _hoisted_2 = { class: "lc-tooltip__trigger" };
const _hoisted_3 = { class: "lc-tooltip__trigger_icon" };
const _hoisted_4 = ["width", "height"];
const _hoisted_5 = { class: "lc-tooltip__trigger--text" };
const _hoisted_6 = { class: "lc-tooltip__content" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tooltip",
  props: {
    title: { default: "" },
    size: { default: 18 }
  },
  setup(__props) {
    useCssVars((_ctx) => ({
      "3f9a9582": unref(iconSize)
    }));
    const iconSize = typeof __props.size === "number" ? `${__props.size}px` : __props.size;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(
          unref(NTooltip),
          mergeProps({
            trigger: "hover",
            class: "lc-n-tooltip",
            "arrow-class": "lc-tooltip-arrow-class"
          }, _ctx.$attrs),
          {
            trigger: withCtx(() => [
              renderSlot(_ctx.$slots, "trigger", {}, () => [
                createElementVNode("div", _hoisted_2, [
                  createElementVNode("div", _hoisted_3, [
                    (openBlock(), createElementBlock("svg", {
                      version: "1.1",
                      xmlns: "http://www.w3.org/2000/svg",
                      "xmlns:xlink": "http://www.w3.org/1999/xlink",
                      x: "0px",
                      y: "0px",
                      viewBox: "0 0 512 512",
                      width: unref(iconSize),
                      height: unref(iconSize),
                      role: "img",
                      "aria-hidden": "true"
                    }, [..._cache[0] || (_cache[0] = [
                      createElementVNode(
                        "path",
                        {
                          fill: "currentColor",
                          d: "M256,90c44.3,0,86,17.3,117.4,48.6C404.7,170,422,211.7,422,256s-17.3,86-48.6,117.4C342,404.7,300.3,422,256,422\n	s-86-17.3-117.4-48.6C107.3,342,90,300.3,90,256s17.3-86,48.6-117.4C170,107.3,211.7,90,256,90 M256,48C141.1,48,48,141.1,48,256\n	s93.1,208,208,208s208-93.1,208-208S370.9,48,256,48L256,48z"
                        },
                        null,
                        -1
                        /* CACHED */
                      ),
                      createElementVNode(
                        "g",
                        null,
                        [
                          createElementVNode("path", {
                            fill: "currentColor",
                            d: "M277,360h-42V235h42V360z M277,194h-42v-42h42V194z"
                          })
                        ],
                        -1
                        /* CACHED */
                      )
                    ])], 8, _hoisted_4))
                  ]),
                  createElementVNode(
                    "div",
                    _hoisted_5,
                    toDisplayString(_ctx.title),
                    1
                    /* TEXT */
                  )
                ])
              ], true)
            ]),
            default: withCtx(() => [
              createElementVNode("div", _hoisted_6, [
                renderSlot(_ctx.$slots, "default", {}, void 0, true)
              ])
            ]),
            _: 3
            /* FORWARDED */
          },
          16
          /* FULL_PROPS */
        )
      ]);
    };
  }
});
export {
  _sfc_main as default
};
