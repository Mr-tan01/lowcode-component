import { defineComponent, useCssVars, computed, createElementBlock, openBlock, normalizeClass, createElementVNode, renderSlot, createCommentVNode, createVNode, unref, withCtx, createTextVNode, toDisplayString } from "vue";
import { NNumberAnimation } from "naive-ui/es/number-animation";
import { bigNumber } from "lowcode-share/es/share";
import LcTooltip from "./tooltip/index.js";
import { scale } from "mmjs-core";
const _hoisted_1 = { class: "lc-indicator-card__wrapper" };
const _hoisted_2 = { class: "lc-indicator-card__wrapper--content" };
const _hoisted_3 = {
  key: 0,
  class: "lc-indicator-card__wrapper--tooltip"
};
const _hoisted_4 = { class: "lc-indicator-card__wrapper--result" };
const _hoisted_5 = ["title"];
const _hoisted_6 = { class: "lc-indicator-card__wrapper--result--unit" };
const _hoisted_7 = { class: "lc-indicator-card__wrapper--text" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "indicatorCard",
  props: {
    value: { default: 0 },
    hint: { default: "" },
    unit: { default: "" },
    size: { default: "small" },
    fixed: { type: Boolean, default: false },
    decimal: { default: 0 },
    type: { default: "border" },
    tip: { default: "" },
    valueColor: { default: "#ffffff" },
    hintColor: { default: "#F2F3F4" },
    notCheckInteger: { type: Boolean, default: false }
  },
  setup(__props) {
    useCssVars((_ctx) => ({
      "v711e7860": padValue.value,
      "v13815724": _ctx.valueColor,
      "v0617d42a": _ctx.hintColor
    }));
    const SIZE = {
      small: "small",
      medium: "medium",
      large: "large"
    };
    const renderValue = computed(() => {
      if (__props.fixed) {
        return bigNumber(__props.value, __props.decimal).result;
      }
      return __props.value;
    });
    const decimals = computed(() => {
      const { unit: numUnit } = bigNumber(__props.value);
      if (Number.isInteger(__props.value) && !numUnit && !__props.notCheckInteger) {
        return 0;
      }
      return __props.decimal;
    });
    const innerPad = {
      [SIZE.small]: `${scale("22px")} ${scale("32px")} 0`,
      [SIZE.medium]: `${scale("22px")} ${scale("54px")} 0`,
      [SIZE.large]: `${scale("22px")} ${scale("116px")} 0`
    };
    const padValue = computed(() => {
      return innerPad[__props.size];
    });
    const unitValue = computed(() => {
      if (__props.fixed) {
        return `${bigNumber(__props.value, __props.decimal).unit}${__props.unit}`;
      }
      return __props.unit;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(["lc-indicator-card", {
            "lc-indicator-card--noborder": __props.type === "noborder"
          }])
        },
        [
          createElementVNode("div", _hoisted_1, [
            createElementVNode("div", _hoisted_2, [
              __props.tip ? (openBlock(), createElementBlock("div", _hoisted_3, [
                renderSlot(_ctx.$slots, "tooltip", {}, () => [
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
                ], true)
              ])) : createCommentVNode("v-if", true),
              createElementVNode("div", _hoisted_4, [
                createElementVNode("span", {
                  class: "lc-indicator-card__wrapper--result--value",
                  title: __props.value.toString()
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
                ], 8, _hoisted_5),
                createElementVNode(
                  "span",
                  _hoisted_6,
                  toDisplayString(unitValue.value),
                  1
                  /* TEXT */
                )
              ]),
              createElementVNode(
                "div",
                _hoisted_7,
                toDisplayString(__props.hint),
                1
                /* TEXT */
              )
            ]),
            renderSlot(_ctx.$slots, "footer", {}, () => [
              _cache[0] || (_cache[0] = createElementVNode(
                "div",
                { class: "lc-indicator-card__footer" },
                null,
                -1
                /* CACHED */
              ))
            ], true)
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
