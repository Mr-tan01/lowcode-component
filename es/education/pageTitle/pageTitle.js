import { createElementBlock, openBlock, createElementVNode, renderSlot } from "vue";
import './assets/pageTitle.css';/* empty css           */
import _export_sfc from "./_virtual/_plugin-vue_export-helper.js";
const _sfc_main = {};
const _hoisted_1 = { class: "lc-page_title" };
const _hoisted_2 = { class: "lc-page_title__text" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", _hoisted_2, [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ])
  ]);
}
const pageTitle = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-78b865fc"]]);
export {
  pageTitle as default
};
