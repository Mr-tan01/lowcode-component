import { defineComponent, computed, openBlock, createElementBlock, createElementVNode, toDisplayString, unref } from "vue";
import merge from "lodash-es/merge";
import { defBlockLableMap, szBlockNames } from "../const.js";
const _hoisted_1 = {
  id: "编组-17",
  class: "lables-group",
  transform: "translate(100.4352, 99.2194)",
  "font-family": "HarmonyOS_Sans_SC, HarmonyOS Sans SC",
  "font-size": "16",
  "font-weight": "normal",
  "line-spacing": "28"
};
const _hoisted_2 = {
  id: "南山",
  class: "text",
  fill: "url(#linearGradient-46)"
};
const _hoisted_3 = {
  x: "94",
  y: "235"
};
const _hoisted_4 = {
  id: "福田",
  class: "text",
  fill: "url(#linearGradient-46)"
};
const _hoisted_5 = {
  x: "188.56944",
  y: "268.4872"
};
const _hoisted_6 = {
  id: "罗湖",
  class: "text",
  fill: "url(#linearGradient-46)"
};
const _hoisted_7 = {
  x: "285",
  y: "240"
};
const _hoisted_8 = {
  id: "盐田",
  class: "text",
  fill: "url(#linearGradient-46)"
};
const _hoisted_9 = {
  x: "415",
  y: "210"
};
const _hoisted_10 = {
  id: "宝安",
  class: "text",
  fill: "url(#linearGradient-46)"
};
const _hoisted_11 = {
  x: "0",
  y: "151.7938"
};
const _hoisted_12 = {
  id: "光明",
  class: "text",
  fill: "url(#linearGradient-46)"
};
const _hoisted_13 = {
  x: "55",
  y: "25"
};
const _hoisted_14 = {
  id: "龙岗",
  class: "text",
  fill: "url(#linearGradient-46)"
};
const _hoisted_15 = {
  x: "418.27104",
  y: "66.9946"
};
const _hoisted_16 = {
  id: "坪山",
  class: "text",
  fill: "url(#linearGradient-46)"
};
const _hoisted_17 = {
  x: "521.8768",
  y: "116.5672"
};
const _hoisted_18 = {
  id: "大鹏新区",
  class: "text",
  fill: "url(#linearGradient-47)"
};
const _hoisted_19 = {
  x: "612.31892",
  y: "190"
};
const _hoisted_20 = {
  id: "龙华",
  class: "text",
  fill: "url(#linearGradient-48)"
};
const _hoisted_21 = {
  x: "166",
  y: "105"
};
const _hoisted_22 = {
  id: "深汕合作区",
  class: "text",
  fill: "url(#linearGradient-48)"
};
const _hoisted_23 = {
  x: "690",
  y: "-48"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "labels",
  props: {
    labels: { default: () => ({}) }
  },
  setup(__props) {
    const mergedLabels = computed(() => merge({}, defBlockLableMap, __props.labels));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("g", _hoisted_1, [
        createElementVNode("text", _hoisted_2, [
          createElementVNode(
            "tspan",
            _hoisted_3,
            toDisplayString(mergedLabels.value[unref(szBlockNames)["南山"]]),
            1
            /* TEXT */
          )
        ]),
        createElementVNode("text", _hoisted_4, [
          createElementVNode(
            "tspan",
            _hoisted_5,
            toDisplayString(mergedLabels.value[unref(szBlockNames)["福田"]]),
            1
            /* TEXT */
          )
        ]),
        createElementVNode("text", _hoisted_6, [
          createElementVNode(
            "tspan",
            _hoisted_7,
            toDisplayString(mergedLabels.value[unref(szBlockNames)["罗湖"]]),
            1
            /* TEXT */
          )
        ]),
        createElementVNode("text", _hoisted_8, [
          createElementVNode(
            "tspan",
            _hoisted_9,
            toDisplayString(mergedLabels.value[unref(szBlockNames)["盐田"]]),
            1
            /* TEXT */
          )
        ]),
        createElementVNode("text", _hoisted_10, [
          createElementVNode(
            "tspan",
            _hoisted_11,
            toDisplayString(mergedLabels.value[unref(szBlockNames)["宝安"]]),
            1
            /* TEXT */
          )
        ]),
        createElementVNode("text", _hoisted_12, [
          createElementVNode(
            "tspan",
            _hoisted_13,
            toDisplayString(mergedLabels.value[unref(szBlockNames)["光明"]]),
            1
            /* TEXT */
          )
        ]),
        createElementVNode("text", _hoisted_14, [
          createElementVNode(
            "tspan",
            _hoisted_15,
            toDisplayString(mergedLabels.value[unref(szBlockNames)["龙岗"]]),
            1
            /* TEXT */
          )
        ]),
        createElementVNode("text", _hoisted_16, [
          createElementVNode(
            "tspan",
            _hoisted_17,
            toDisplayString(mergedLabels.value[unref(szBlockNames)["坪山"]]),
            1
            /* TEXT */
          )
        ]),
        createElementVNode("text", _hoisted_18, [
          createElementVNode(
            "tspan",
            _hoisted_19,
            toDisplayString(mergedLabels.value[unref(szBlockNames)["大鹏新区"]]),
            1
            /* TEXT */
          )
        ]),
        createElementVNode("text", _hoisted_20, [
          createElementVNode(
            "tspan",
            _hoisted_21,
            toDisplayString(mergedLabels.value[unref(szBlockNames)["龙华"]]),
            1
            /* TEXT */
          )
        ]),
        createElementVNode("text", _hoisted_22, [
          createElementVNode(
            "tspan",
            _hoisted_23,
            toDisplayString(mergedLabels.value[unref(szBlockNames)["深汕合作区"]]),
            1
            /* TEXT */
          )
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
