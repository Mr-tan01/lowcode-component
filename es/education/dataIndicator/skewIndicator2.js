import { defineComponent, computed, createElementBlock, openBlock, normalizeClass, createElementVNode, renderSlot, toDisplayString, createCommentVNode, createVNode, unref, withCtx, createTextVNode } from "vue";
import personIcon from "./images/skew/icon/person.png.js";
import { bigNumber } from "lowcode-share/es/share";
import { NNumberAnimation } from "naive-ui/es/number-animation";
import LcTooltip from "./tooltip/index.js";
const _hoisted_1 = { class: "lc-skew-indicator__wrapper" };
const _hoisted_2 = { class: "lc-skew-indicator__wrapper__table--bg" };
const _hoisted_3 = { class: "lc-skew-indicator__wrapper__table--bg--icon" };
const _hoisted_4 = ["src"];
const _hoisted_5 = { class: "lc-skew-indicator__wrapper__info" };
const _hoisted_6 = { class: "lc-skew-indicator__wrapper__info--label" };
const _hoisted_7 = { class: "lc-skew-indicator__wrapper__info--result" };
const _hoisted_8 = ["title"];
const _hoisted_9 = {
  key: 0,
  class: "lc-skew-indicator__wrapper__info--result--unit"
};
const _hoisted_10 = {
  key: 1,
  class: "lc-skew-indicator__wrapper__info--result--altericon"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "skewIndicator",
  props: {
    label: { default: "" },
    value: { default: 0 },
    unit: { default: "" },
    fixed: { type: Boolean, default: true },
    decimal: { default: 0 },
    icon: { default: () => personIcon },
    tip: { default: "" },
    type: { default: "skew" },
    notCheckInteger: { type: Boolean, default: false }
  },
  setup(__props) {
    const decimals = computed(() => {
      const { unit: numUnit } = bigNumber(__props.value);
      if (Number.isInteger(__props.value) && !numUnit && !__props.notCheckInteger) {
        return 0;
      }
      return __props.decimal;
    });
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
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(["lc-skew-indicator", [`lc-skew-indicator--${_ctx.type}`]])
        },
        [
          createElementVNode("div", _hoisted_1, [
            createElementVNode("div", _hoisted_2, [
              createElementVNode("div", _hoisted_3, [
                renderSlot(_ctx.$slots, "icon", {}, () => [
                  createElementVNode("img", {
                    src: _ctx.icon,
                    alt: ""
                  }, null, 8, _hoisted_4)
                ], true)
              ])
            ]),
            createElementVNode("div", _hoisted_5, [
              createElementVNode(
                "div",
                _hoisted_6,
                toDisplayString(_ctx.label),
                1
                /* TEXT */
              ),
              createElementVNode("div", _hoisted_7, [
                createElementVNode("div", {
                  class: "lc-skew-indicator__wrapper__info--result--value",
                  title: _ctx.value.toString()
                }, [
                  renderSlot(_ctx.$slots, "value", {}, () => [
                    createVNode(unref(NNumberAnimation), {
                      "show-separator": "",
                      from: 0,
                      to: renderValue.value,
                      active: "",
                      precision: decimals.value
                    }, null, 8, ["to", "precision"])
                  ], true)
                ], 8, _hoisted_8),
                renderUnit.value ? (openBlock(), createElementBlock(
                  "div",
                  _hoisted_9,
                  toDisplayString(renderUnit.value),
                  1
                  /* TEXT */
                )) : createCommentVNode("v-if", true),
                _ctx.tip ? (openBlock(), createElementBlock("div", _hoisted_10, [
                  createVNode(unref(LcTooltip), null, {
                    default: withCtx(() => [
                      createTextVNode(
                        toDisplayString(_ctx.tip),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ])) : createCommentVNode("v-if", true)
              ])
            ])
          ])
        ],
        2
        /* CLASS */
      );
    };
  }
});
export {
  _sfc_main as default
};
