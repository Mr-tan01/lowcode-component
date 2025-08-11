import { defineComponent, mergeModels, useCssVars, useModel, openBlock, createElementBlock, createElementVNode, toDisplayString, createTextVNode } from "vue";
const _hoisted_1 = { class: "pagination-container" };
const _hoisted_2 = { class: "pagination-left" };
const _hoisted_3 = ["disabled"];
const _hoisted_4 = { class: "page-info" };
const _hoisted_5 = { class: "page-info" };
const _hoisted_6 = ["disabled"];
const _hoisted_7 = { class: "pagination-right total-pages" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "paging",
  props: /* @__PURE__ */ mergeModels({
    totalPages: { default: 1 },
    modelValue: {},
    fontSize: { default: "16px" },
    fontColor: { default: "#FFFFFF" }
  }, {
    "modelValue": { default: 1 },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    useCssVars((_ctx) => ({
      "572a4070": _ctx.fontSize,
      "e5824658": _ctx.fontColor
    }));
    const model = useModel(__props, "modelValue");
    const prevPage = () => {
      if (model.value > 1) {
        model.value--;
      }
    };
    const nextPage = () => {
      if (model.value < __props.totalPages) {
        model.value++;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          createElementVNode("button", {
            disabled: model.value === 1,
            class: "arrow-button left-arrow",
            onClick: prevPage
          }, null, 8, _hoisted_3),
          createElementVNode(
            "span",
            _hoisted_4,
            toDisplayString(model.value),
            1
            /* TEXT */
          ),
          _cache[0] || (_cache[0] = createTextVNode(" / ")),
          createElementVNode(
            "span",
            _hoisted_5,
            toDisplayString(_ctx.totalPages),
            1
            /* TEXT */
          ),
          createElementVNode("button", {
            disabled: model.value === _ctx.totalPages,
            class: "arrow-button right-arrow",
            onClick: nextPage
          }, null, 8, _hoisted_6)
        ]),
        createElementVNode("div", _hoisted_7, [
          createElementVNode(
            "span",
            null,
            "共 " + toDisplayString(_ctx.totalPages) + " 页",
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
