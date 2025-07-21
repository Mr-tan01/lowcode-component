import { openBlock as r, createElementBlock as s, Fragment as e, createElementVNode as o } from "vue";
import p from "../../_virtual/_plugin-vue_export-helper.js";
const i = {};
function n(a, t) {
  return r(), s(
    e,
    null,
    [
      t[0] || (t[0] = o(
        "linearGradient",
        { id: "linearGradient-hover" },
        [
          o("stop", {
            "stop-color": "rgb(34, 253, 252)",
            "stop-opacity": "0.34",
            offset: "0%"
          }),
          o("stop", {
            "stop-color": "rgba(15, 251, 248)",
            "stop-opacity": "1",
            offset: "100%"
          })
        ],
        -1
        /* HOISTED */
      )),
      t[1] || (t[1] = o(
        "linearGradient",
        { id: "linearGradient-normal" },
        [
          o("stop", {
            "stop-color": "rgb(0, 148, 255)",
            "stop-opacity": "1",
            offset: "0%"
          }),
          o("stop", {
            "stop-color": "rgb(0, 148, 255)",
            "stop-opacity": "0",
            offset: "100%"
          })
        ],
        -1
        /* HOISTED */
      )),
      t[2] || (t[2] = o(
        "linearGradient",
        { id: "linearGradient-warning" },
        [
          o("stop", {
            "stop-color": "rgb(225, 188, 75)",
            "stop-opacity": "1",
            offset: "0%"
          }),
          o("stop", {
            "stop-color": "rgb(225, 188, 75)",
            "stop-opacity": "0",
            offset: "100%"
          })
        ],
        -1
        /* HOISTED */
      )),
      t[3] || (t[3] = o(
        "linearGradient",
        { id: "linearGradient-series" },
        [
          o("stop", {
            "stop-color": "rgb(238, 111, 124)",
            "stop-opacity": "1",
            offset: "0%"
          }),
          o("stop", {
            "stop-color": "rgb(238, 111, 124)",
            "stop-opacity": "0",
            offset: "100%"
          })
        ],
        -1
        /* HOISTED */
      ))
    ],
    64
    /* STABLE_FRAGMENT */
  );
}
const d = /* @__PURE__ */ p(i, [["render", n]]);
export {
  d as default
};
