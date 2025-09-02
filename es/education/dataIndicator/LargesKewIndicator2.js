import { defineComponent, mergeDefaults, computed, createElementBlock, openBlock, normalizeClass, createElementVNode, renderSlot, createCommentVNode, toDisplayString, createVNode, unref, createTextVNode, withCtx } from "vue";
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
const _hoisted_8 = { class: "lc-skew-indicator__wrapper__info--result--value" };
const _hoisted_9 = {
  key: 0,
  class: "lc-skew-indicator__wrapper__info--result--unit"
};
const _hoisted_10 = { class: "lc-skew-indicator__wrapper__info--result--year--label" };
const _hoisted_11 = { class: "lc-skew-indicator__wrapper__info--result--year--value" };
const _hoisted_12 = {
  key: 0,
  class: "lc-skew-indicator__wrapper__info--result--year--up"
};
const _hoisted_13 = {
  key: 2,
  class: "lc-skew-indicator__wrapper__info--result--altericon"
};
const _hoisted_14 = {
  key: 0,
  class: "lc-skew-indicator__wrapper__info--sub"
};
const _hoisted_15 = { class: "lc-skew-indicator__wrapper__info--sub-wrapper" };
const _hoisted_16 = { class: "lc-skew-indicator__wrapper__info--sub-content" };
const _hoisted_17 = {
  key: 0,
  class: "lc-skew-indicator__wrapper__info--sub-head"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LargesKewIndicator",
  props: /* @__PURE__ */ mergeDefaults({
    label: {
      type: String
    },
    value: {
      type: Number
    },
    unit: {
      type: String
    },
    yearLabel: {
      type: String
    },
    yearValue: {
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
    tip: {
      type: String
    },
    type: {
      type: String
    },
    subHead: {
      type: String
    },
    subContent: {
      type: String
    },
    isShowIcon: {
      type: Boolean
    },
    notCheckInteger: {
      type: Boolean
    }
  }, {
    label: "",
    value: 0,
    unit: "",
    yearLabel: "同比去年",
    yearValue: 0,
    fixed: true,
    decimal: 0,
    icon: personIcon,
    __skip_icon: true,
    tip: "",
    type: "skew",
    subHead: "",
    subContent: "",
    notCheckInteger: false
  }),
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
    const prefixIcon = computed(() => {
      return __props.yearValue > 0 ? "↑" : "↓";
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(["lc-skew-indicator", [`lc-skew-indicator--${__props.type}`]])
        },
        [
          createElementVNode("div", _hoisted_1, [
            createElementVNode("div", _hoisted_2, [
              createElementVNode("div", _hoisted_3, [
                renderSlot(_ctx.$slots, "default", {}, () => [
                  createElementVNode("img", {
                    src: __props.icon,
                    alt: ""
                  }, null, 8, _hoisted_4)
                ], true)
              ])
            ]),
            createElementVNode("div", _hoisted_5, [
              createElementVNode(
                "div",
                _hoisted_6,
                toDisplayString(__props.label),
                1
                /* TEXT */
              ),
              createElementVNode("div", _hoisted_7, [
                createElementVNode("div", _hoisted_8, [
                  createVNode(unref(NNumberAnimation), {
                    "show-separator": "",
                    from: 0,
                    to: renderValue.value,
                    active: "",
                    precision: decimals.value
                  }, null, 8, ["to", "precision"])
                ]),
                renderUnit.value ? (openBlock(), createElementBlock(
                  "div",
                  _hoisted_9,
                  toDisplayString(renderUnit.value),
                  1
                  /* TEXT */
                )) : createCommentVNode("v-if", true),
                __props.yearValue ? (openBlock(), createElementBlock(
                  "div",
                  {
                    key: 1,
                    class: normalizeClass(["lc-skew-indicator__wrapper__info--result--year", {
                      down: __props.yearValue < 0,
                      up: __props.yearValue > 0
                    }])
                  },
                  [
                    createElementVNode(
                      "div",
                      _hoisted_10,
                      toDisplayString(__props.yearLabel),
                      1
                      /* TEXT */
                    ),
                    createElementVNode("div", _hoisted_11, [
                      createVNode(unref(NNumberAnimation), {
                        "show-separator": "",
                        from: 0,
                        to: __props.yearValue,
                        active: "",
                        precision: __props.decimal
                      }, null, 8, ["to", "precision"]),
                      _cache[0] || (_cache[0] = createTextVNode(
                        "% ",
                        -1
                        /* CACHED */
                      ))
                    ]),
                    __props.yearValue ? (openBlock(), createElementBlock(
                      "div",
                      _hoisted_12,
                      toDisplayString(prefixIcon.value),
                      1
                      /* TEXT */
                    )) : createCommentVNode("v-if", true)
                  ],
                  2
                  /* CLASS */
                )) : createCommentVNode("v-if", true),
                __props.tip ? (openBlock(), createElementBlock("div", _hoisted_13, [
                  createVNode(unref(LcTooltip), null, {
                    default: withCtx(() => [
                      createTextVNode(
                        toDisplayString(__props.tip),
                        1
                        /* TEXT */
                      )
                    ]),
                    _: 1
                    /* STABLE */
                  })
                ])) : createCommentVNode("v-if", true)
              ]),
              __props.subHead ? (openBlock(), createElementBlock("div", _hoisted_14, [
                createElementVNode("div", _hoisted_15, [
                  createElementVNode(
                    "div",
                    _hoisted_16,
                    toDisplayString(__props.subContent),
                    1
                    /* TEXT */
                  ),
                  __props.subHead ? (openBlock(), createElementBlock(
                    "div",
                    _hoisted_17,
                    toDisplayString(__props.subHead),
                    1
                    /* TEXT */
                  )) : createCommentVNode("v-if", true)
                ])
              ])) : createCommentVNode("v-if", true)
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
