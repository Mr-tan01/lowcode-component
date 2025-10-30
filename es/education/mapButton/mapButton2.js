import { defineComponent, createElementBlock, openBlock, createElementVNode, createVNode, unref, mergeProps, withCtx, renderSlot, Fragment, renderList } from "vue";
import _imports_0 from "./images/layer.png.js";
import { NPopover } from "naive-ui";
import zoomin from "./images/zoom-in.png.js";
import zoomOut from "./images/zoom-out.png.js";
import MapBlock from "./comp/mapBlock.js";
const _hoisted_1 = { class: "lcmapbutton" };
const _hoisted_2 = { class: "Lcswitch-map__tabs" };
const _hoisted_3 = { class: "popover-content" };
const _hoisted_4 = { class: "lcmapbutton-upside" };
const _hoisted_5 = ["src", "alt", "onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "mapButton",
  props: {
    placement: { default: "left-start" }
  },
  emits: ["iconClicked"],
  setup(__props, { emit: __emit }) {
    const images = [
      { src: zoomin, alt: "ZoomIn" },
      { src: zoomOut, alt: "ZoomOut" }
    ];
    const emit = __emit;
    const handleClick = (alt) => {
      emit("iconClicked", alt);
    };
    const handleMapBlockItemClick = (item) => {
      emit("iconClicked", item);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          createVNode(unref(NPopover), mergeProps(_ctx.$attrs, {
            placement: _ctx.placement,
            "show-arrow": false
          }), {
            trigger: withCtx(() => [
              renderSlot(_ctx.$slots, "trigger", {}, () => [
                _cache[0] || (_cache[0] = createElementVNode(
                  "img",
                  {
                    src: _imports_0,
                    alt: ""
                  },
                  null,
                  -1
                  /* CACHED */
                ))
              ], true)
            ]),
            default: withCtx(() => [
              createElementVNode("div", _hoisted_3, [
                renderSlot(_ctx.$slots, "content", {}, () => [
                  createVNode(MapBlock, { onItemClick: handleMapBlockItemClick })
                ], true)
              ])
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["placement"])
        ]),
        createElementVNode("div", _hoisted_4, [
          (openBlock(), createElementBlock(
            Fragment,
            null,
            renderList(images, (image, index) => {
              return createElementVNode("img", {
                key: index,
                class: "lcmapbutton-upside-icon",
                src: image.src,
                alt: image.alt,
                onClick: ($event) => handleClick(image.alt)
              }, null, 8, _hoisted_5);
            }),
            64
            /* STABLE_FRAGMENT */
          ))
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
