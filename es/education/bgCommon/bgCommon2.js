import { defineComponent, mergeDefaults, useCssVars, computed, createElementBlock, openBlock, createElementVNode, renderSlot } from "vue";
import { bgImage } from "./const.js";
const _hoisted_1 = { class: "lcc-bg__common" };
const _hoisted_2 = { class: "lcc-bg__common__wrapper" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "bgCommon",
  props: /* @__PURE__ */ mergeDefaults({
    bgSrc: String
  }, {
    bgSrc: ""
  }),
  setup(__props) {
    useCssVars((_ctx) => ({
      "5da8506c": bgURL.value
    }));
    const bgURL = computed(() => `url(${__props.bgSrc || bgImage.url})`);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[0] || (_cache[0] = createElementVNode(
          "div",
          { class: "lcc-bg__common__bl-decoartor-bg" },
          null,
          -1
          /* CACHED */
        )),
        _cache[1] || (_cache[1] = createElementVNode(
          "div",
          { class: "lcc-bg__common__br-decoartor-bg" },
          null,
          -1
          /* CACHED */
        )),
        createElementVNode("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
