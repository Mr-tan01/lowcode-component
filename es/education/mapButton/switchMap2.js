import { defineComponent, onMounted, onUnmounted, createElementBlock, openBlock, createElementVNode, createVNode, unref, mergeProps, withCtx, Fragment, renderList } from "vue";
import _imports_0 from "./images/layer.png.js";
import { NDropdown } from "naive-ui";
import zoomin from "./images/zoom-in.png.js";
import zoomOut from "./images/zoom-out.png.js";
import { defaultOptions } from "./const.js";
const _hoisted_1 = { class: "Lcswitch-map" };
const _hoisted_2 = { class: "Lcswitch-map__tabs" };
const _hoisted_3 = { class: "Lcswitch-map__buttons" };
const _hoisted_4 = ["src", "alt", "onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "switchMap",
  props: {
    options: { default: () => defaultOptions },
    placement: { default: "left-start" }
  },
  emits: ["dropdownSelected"],
  setup(__props, { emit: __emit }) {
    const images = [
      { src: zoomin, alt: "ZoomIn" },
      { src: zoomOut, alt: "ZoomOut" }
    ];
    const emit = __emit;
    const handleClick = (alt) => {
      emit("dropdownSelected", alt);
    };
    const handleSelect = (key) => {
      emit("dropdownSelected", key);
    };
    const handleCustomSelect = (event) => {
      const customEvent = event;
      emit("dropdownSelected", customEvent.detail);
    };
    onMounted(() => {
      document.addEventListener("custom-select", handleCustomSelect);
    });
    onUnmounted(() => {
      document.removeEventListener("custom-select", handleCustomSelect);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          createVNode(unref(NDropdown), mergeProps(_ctx.$attrs, {
            trigger: "hover",
            placement: _ctx.placement,
            options: _ctx.options,
            onSelect: handleSelect
          }), {
            default: withCtx(() => [..._cache[0] || (_cache[0] = [
              createElementVNode(
                "img",
                {
                  src: _imports_0,
                  alt: ""
                },
                null,
                -1
                /* CACHED */
              )
            ])]),
            _: 1
            /* STABLE */
          }, 16, ["placement", "options"])
        ]),
        createElementVNode("div", _hoisted_3, [
          (openBlock(), createElementBlock(
            Fragment,
            null,
            renderList(images, (image, index) => {
              return createElementVNode("img", {
                key: index,
                class: "icon",
                src: image.src,
                alt: image.alt,
                onClick: ($event) => handleClick(image.alt)
              }, null, 8, _hoisted_4);
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
