import { createElementBlock, openBlock, Fragment, createElementVNode } from "vue";
import _export_sfc from "../../_virtual/_plugin-vue_export-helper.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      _cache[0] || (_cache[0] = createElementVNode(
        "linearGradient",
        { id: "linearGradient-hover" },
        [
          createElementVNode("stop", {
            "stop-color": "rgb(34, 253, 252)",
            "stop-opacity": "0.34",
            offset: "0%"
          }),
          createElementVNode("stop", {
            "stop-color": "rgba(15, 251, 248)",
            "stop-opacity": "1",
            offset: "100%"
          })
        ],
        -1
        /* CACHED */
      )),
      _cache[1] || (_cache[1] = createElementVNode(
        "linearGradient",
        { id: "linearGradient-normal" },
        [
          createElementVNode("stop", {
            "stop-color": "rgb(0, 148, 255)",
            "stop-opacity": "1",
            offset: "0%"
          }),
          createElementVNode("stop", {
            "stop-color": "rgb(0, 148, 255)",
            "stop-opacity": "0",
            offset: "100%"
          })
        ],
        -1
        /* CACHED */
      )),
      _cache[2] || (_cache[2] = createElementVNode(
        "linearGradient",
        { id: "linearGradient-warning" },
        [
          createElementVNode("stop", {
            "stop-color": "rgb(225, 188, 75)",
            "stop-opacity": "1",
            offset: "0%"
          }),
          createElementVNode("stop", {
            "stop-color": "rgb(225, 188, 75)",
            "stop-opacity": "0",
            offset: "100%"
          })
        ],
        -1
        /* CACHED */
      )),
      _cache[3] || (_cache[3] = createElementVNode(
        "linearGradient",
        { id: "linearGradient-series" },
        [
          createElementVNode("stop", {
            "stop-color": "rgb(238, 111, 124)",
            "stop-opacity": "1",
            offset: "0%"
          }),
          createElementVNode("stop", {
            "stop-color": "rgb(238, 111, 124)",
            "stop-opacity": "0",
            offset: "100%"
          })
        ],
        -1
        /* CACHED */
      ))
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
const Filters = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Filters as default
};
