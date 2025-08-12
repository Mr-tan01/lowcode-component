import { defineComponent, openBlock, createElementBlock, createElementVNode, Fragment, renderList } from "vue";
import _imports_0 from "./images/map.png.js";
import layer from "./images/layer.png.js";
import originalPpoint from "./images/original-point.png.js";
import zoomin from "./images/zoom-in.png.js";
import zoomOut from "./images/zoom-out.png.js";
const _hoisted_1 = { class: "lcmapbutton" };
const _hoisted_2 = { class: "lcmapbutton-upside" };
const _hoisted_3 = ["src", "alt", "onClick"];
const _hoisted_4 = { class: "lcmapbutton-underside" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "mapButton",
  emits: ["iconClicked"],
  setup(__props, { emit: __emit }) {
    const images = [
      { src: layer, alt: "Layer" },
      { src: originalPpoint, alt: "OriginalPoint" },
      { src: zoomin, alt: "ZoomIn" },
      { src: zoomOut, alt: "ZoomOut" }
    ];
    const emit = __emit;
    const handleClick = (alt) => {
      emit("iconClicked", alt);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
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
              }, null, 8, _hoisted_3);
            }),
            64
            /* STABLE_FRAGMENT */
          ))
        ]),
        createElementVNode("div", _hoisted_4, [
          createElementVNode("img", {
            class: "lcmapbutton-underside-map",
            src: _imports_0,
            alt: "Map",
            onClick: _cache[0] || (_cache[0] = ($event) => handleClick("Map"))
          })
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
