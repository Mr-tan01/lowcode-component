import { defineComponent, mergeDefaults, computed, createElementBlock, openBlock, createElementVNode, createVNode, unref, toDisplayString, renderSlot } from "vue";
import LcIcon from "./icon/index2.js";
import './assets/icon/iconCard.css';/* empty css              */
import { NNumberAnimation } from "naive-ui/es/number-animation";
import { bigNumber } from "lowcode-share/es/share";
const _hoisted_1 = { class: "lc-arrow-indicators" };
const _hoisted_2 = { class: "lc-arrow-indicators__icon" };
const _hoisted_3 = { class: "lc-arrow-indicators__center" };
const _hoisted_4 = { class: "lc-arrow-indicators__center__lable" };
const _hoisted_5 = { class: "lc-arrow-indicators__center__value" };
const _hoisted_6 = { class: "lc-arrow-indicators__center__value__unit" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "arrowIndicators",
  props: /* @__PURE__ */ mergeDefaults({
    label: {
      type: String
    },
    value: {
      type: Number
    },
    fixed: {
      type: Boolean
    },
    decimal: {
      type: Number
    },
    icon: {
      type: String
    },
    unit: {
      type: String
    }
  }, {
    label: "",
    value: 0,
    fixed: true,
    decimal: 0,
    icon: "person2",
    unit: ""
  }),
  setup(__props) {
    const renderValue = computed(() => {
      if (__props.fixed) {
        const { result } = bigNumber(__props.value, __props.decimal);
        return result;
      }
      return __props.value;
    });
    const renderUnit = computed(() => {
      if (__props.fixed) {
        const { unit: numUnit } = bigNumber(__props.value, __props.decimal);
        return `${numUnit}${__props.unit}`;
      }
      return __props.unit;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          createVNode(unref(LcIcon), {
            domain: "event",
            name: __props.icon,
            size: 70
          }, null, 8, ["name"])
        ]),
        createElementVNode("div", _hoisted_3, [
          createElementVNode(
            "div",
            _hoisted_4,
            toDisplayString(__props.label),
            1
            /* TEXT */
          ),
          createElementVNode("div", _hoisted_5, [
            renderSlot(_ctx.$slots, "value", {}, () => [
              createVNode(unref(NNumberAnimation), {
                "show-separator": "",
                from: 0,
                to: renderValue.value,
                active: "",
                precision: __props.decimal
              }, null, 8, ["to", "precision"]),
              createElementVNode(
                "span",
                _hoisted_6,
                toDisplayString(renderUnit.value),
                1
                /* TEXT */
              )
            ], true)
          ])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
