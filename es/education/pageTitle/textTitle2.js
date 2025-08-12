import { defineComponent, mergeDefaults, computed, openBlock, createElementBlock, createElementVNode, toDisplayString } from "vue";
import { overflowStr } from "lowcode-share/es/share";
const _hoisted_1 = { class: "lc-page__texthead" };
const _hoisted_2 = ["title"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "textTitle",
  props: /* @__PURE__ */ mergeDefaults({
    text: {
      type: String
    },
    maxLength: {
      type: Number
    }
  }, {
    text: "",
    maxLength: 15
  }),
  setup(__props) {
    const formatedText = computed(() => {
      return overflowStr(__props.text, __props.maxLength);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[0] || (_cache[0] = createElementVNode(
          "div",
          { class: "lc-page__texthead__bg" },
          null,
          -1
          /* HOISTED */
        )),
        createElementVNode("div", {
          class: "lc-page__texthead__text",
          title: __props.text
        }, toDisplayString(formatedText.value), 9, _hoisted_2)
      ]);
    };
  }
});
export {
  _sfc_main as default
};
