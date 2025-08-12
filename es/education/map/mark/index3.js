import __vite_glob_0_0 from "./images/mark-rect.png.js";
import __vite_glob_0_1 from "./images/mark.png.js";
import __vite_glob_0_2 from "./images/mark2-rect.png.js";
import __vite_glob_0_3 from "./images/mark2.png.js";
import normalMarker from "./images/normal.png.js";
import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, toDisplayString, renderSlot, createVNode, unref, createCommentVNode } from "vue";
import { NNumberAnimation } from "naive-ui/es/number-animation";
const _hoisted_1 = { class: "lc-mark__wrapper__image" };
const _hoisted_2 = ["src"];
const _hoisted_3 = { class: "lc-mark__wrapper__image__label" };
const _hoisted_4 = { class: "lc-mark__wrapper__rect" };
const _hoisted_5 = { class: "lc-mark__wrapper__rect--value" };
const _hoisted_6 = { class: "lc-mark__wrapper__rect--unit" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "mark",
  props: {
    value: { default: 0 },
    unit: {},
    model: { default: "default" },
    meta: { default: () => ({}) },
    size: { default: "medium" },
    iconName: { default: "mark" },
    iconSrc: { default: "" },
    label: { default: "" },
    show: { type: Boolean, default: true },
    precision: { default: 0 }
  },
  emits: ["mark:click"],
  setup(__props, { emit: __emit }) {
    const icons = /* @__PURE__ */ Object.assign({
      "./images/mark-rect.png": __vite_glob_0_0,
      "./images/mark.png": __vite_glob_0_1,
      "./images/mark2-rect.png": __vite_glob_0_2,
      "./images/mark2.png": __vite_glob_0_3,
      "./images/normal.png": normalMarker
    });
    const $emit = __emit;
    const imageIconSrc = computed(() => __props.iconSrc || icons[`./images/${__props.iconName}.png`]);
    const customProperts = computed(() => {
      return {
        "--mark-icon": `url(${icons[`./images/${__props.iconName}.png`]})`,
        "--mark-icon-rect": `url(${icons[`./images/${__props.iconName === "normal" ? "mark2" : __props.iconName}-rect.png`]})`
      };
    });
    function clickMark() {
      $emit("mark:click", {
        value: __props.value,
        meta: __props.meta
      });
    }
    return (_ctx, _cache) => {
      return _ctx.show ? (openBlock(), createElementBlock(
        "div",
        {
          key: 0,
          class: normalizeClass(["lc-mark", [`lc-mark--${_ctx.model}`, `lc-mark--${_ctx.size}`, `lc-mark--icon-${_ctx.iconName}`]]),
          tabindex: -1,
          style: normalizeStyle(customProperts.value)
        },
        [
          createElementVNode("div", {
            class: "lc-mark__wrapper",
            onClick: clickMark
          }, [
            createElementVNode("div", _hoisted_1, [
              createElementVNode("img", {
                class: "lc-mark__wrapper__image__img",
                src: imageIconSrc.value,
                alt: " ",
                draggable: "false"
              }, null, 8, _hoisted_2),
              createElementVNode(
                "span",
                _hoisted_3,
                toDisplayString(_ctx.label),
                1
                /* TEXT */
              )
            ]),
            createElementVNode("div", _hoisted_4, [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createElementVNode("span", _hoisted_5, [
                  createVNode(unref(NNumberAnimation), {
                    from: 0,
                    to: _ctx.value,
                    precision: _ctx.precision
                  }, null, 8, ["to", "precision"])
                ]),
                createElementVNode(
                  "span",
                  _hoisted_6,
                  toDisplayString(_ctx.unit),
                  1
                  /* TEXT */
                )
              ], true)
            ])
          ])
        ],
        6
        /* CLASS, STYLE */
      )) : createCommentVNode("v-if", true);
    };
  }
});
export {
  _sfc_main as default
};
