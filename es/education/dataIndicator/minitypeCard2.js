import { defineComponent, mergeDefaults, computed, createElementBlock, openBlock, createElementVNode, toDisplayString, createVNode, unref } from "vue";
import { NNumberAnimation } from "naive-ui/es/number-animation";
import defaultImage from "./images/card/small-substrate-bg.png.js";
const _hoisted_1 = { class: "minitype-card" };
const _hoisted_2 = { class: "minitype-card__label" };
const _hoisted_3 = { class: "minitype-card__value" };
const _hoisted_4 = { class: "minitype-card__value__num" };
const _hoisted_5 = { class: "minitype-card__img" };
const _hoisted_6 = ["src"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "minitypeCard",
  props: /* @__PURE__ */ mergeDefaults({
    label: {
      type: String
    },
    value: {
      type: Number
    },
    bgIcon: {
      type: String
    },
    decimal: {
      type: Number
    },
    isRoundOff: {
      type: Boolean
    }
  }, {
    label: "已建成并投入运行设施(个)",
    value: 0,
    bgIcon: defaultImage,
    __skip_bgIcon: true,
    decimal: 0,
    isRoundOff: false
  }),
  setup(__props) {
    const displayValue = computed(() => {
      if (__props.decimal === 0) return __props.value;
      if (__props.isRoundOff) {
        const factor = Math.pow(10, __props.decimal);
        return Math.floor(__props.value * factor) / factor;
      }
      return __props.value;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode(
          "div",
          _hoisted_2,
          toDisplayString(__props.label),
          1
          /* TEXT */
        ),
        createElementVNode("div", _hoisted_3, [
          createElementVNode("span", _hoisted_4, [
            createVNode(unref(NNumberAnimation), {
              "show-separator": "",
              from: 0,
              to: displayValue.value,
              active: "",
              precision: __props.decimal
            }, null, 8, ["to", "precision"])
          ])
        ]),
        createElementVNode("div", _hoisted_5, [
          createElementVNode("img", {
            src: __props.bgIcon,
            alt: ""
          }, null, 8, _hoisted_6)
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
