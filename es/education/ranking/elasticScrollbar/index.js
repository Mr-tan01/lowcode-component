import { openBlock, createElementBlock, createElementVNode, renderSlot } from "vue";
import '../assets/elasticScrollbar/elasticScrollbar.css';/* empty css       */
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _sfc_main = {};
const _hoisted_1 = { class: "lc-elastic-scrollbar" };
const _hoisted_2 = { class: "lc-elastic-scrollbar__wrapper" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", _hoisted_2, [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ])
  ]);
}
const LcElasticScrollbar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-eaa775e2"]]);
export {
  LcElasticScrollbar as default
};
