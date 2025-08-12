import { defineComponent, useCssVars, toRefs, computed, openBlock, createElementBlock, renderSlot, createBlock, unref, normalizeProps, mergeProps, createElementVNode, toDisplayString } from "vue";
import './assets/icon/icon.css';/* empty css           */
import LcIconCard from "./icon/iconCard.js";
import { overflowStr } from "lowcode-share/es/share";
const _hoisted_1 = { class: "lc-radiohead" };
const _hoisted_2 = ["title"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "radiohead",
  props: {
    text: { default: "" },
    maxLength: { default: 15 },
    fontSize: { default: 16 }
  },
  setup(__props) {
    useCssVars((_ctx) => ({
      "5ac1e965": resultFontSize.value
    }));
    const props = __props;
    const { text, maxLength, fontSize } = toRefs(props);
    const formatedText = computed(() => {
      return overflowStr(text.value, maxLength.value);
    });
    const resultFontSize = computed(() => typeof fontSize.value === "number" ? `${fontSize.value}px` : fontSize.value);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _ctx.$slots.icon ? renderSlot(_ctx.$slots, "icon", { key: 0 }, void 0, true) : (openBlock(), createBlock(
          unref(LcIconCard),
          normalizeProps(mergeProps({ key: 1 }, _ctx.$attrs)),
          null,
          16
          /* FULL_PROPS */
        )),
        createElementVNode("div", {
          class: "lc-radiohead__title",
          title: unref(text)
        }, toDisplayString(formatedText.value), 9, _hoisted_2)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
