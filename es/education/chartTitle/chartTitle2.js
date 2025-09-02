import { defineComponent, mergeDefaults, computed, createElementBlock, openBlock, normalizeClass, createElementVNode, toDisplayString } from "vue";
import _imports_0 from "./images/ltr-bz.png.js";
import { overflowStr } from "lowcode-share/es/share";
const _hoisted_1 = { class: "lc-chart-title__wrapper" };
const _hoisted_2 = ["title"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "chartTitle",
  props: /* @__PURE__ */ mergeDefaults({
    text: {
      type: String
    },
    maxLength: {
      type: Number
    },
    dir: {
      type: String
    }
  }, {
    text: "",
    maxLength: 6,
    dir: "ltr"
  }),
  setup(__props) {
    const formatedText = computed(() => {
      return overflowStr(__props.text, __props.maxLength);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(["lc-chart-title", [`lc-chart-title--${__props.dir}`]])
        },
        [
          createElementVNode("div", _hoisted_1, [
            createElementVNode("div", {
              class: "lc-chart-title__wrapper__text",
              title: __props.text
            }, toDisplayString(formatedText.value), 9, _hoisted_2),
            _cache[0] || (_cache[0] = createElementVNode(
              "div",
              { class: "lc-chart-title__wrapper__icon" },
              [
                createElementVNode("img", {
                  src: _imports_0,
                  alt: "icon"
                })
              ],
              -1
              /* CACHED */
            ))
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
