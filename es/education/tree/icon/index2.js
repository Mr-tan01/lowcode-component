import { defineComponent, useCssVars, toRefs, computed, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, createElementVNode, renderSlot } from "vue";
import { useImage } from "./icons.js";
const _hoisted_1 = ["src"];
const _hoisted_2 = { class: "lc-icon__span" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "icon",
  props: {
    domain: { default: "func" },
    name: { default: "add" },
    size: { default: 32 },
    ext: { default: ".png" },
    selected: { type: Boolean, default: void 0 }
  },
  setup(__props) {
    useCssVars((_ctx) => ({
      "2f24b870": iconWidth.value
    }));
    const props = __props;
    const { domain, name, size, ext, selected } = toRefs(props);
    const { src, selectedSrc } = useImage(domain, name, ext);
    const iconWidth = computed(() => typeof size.value === "number" ? `${size.value}px` : size.value);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(["lc-icon", {
            "lc-icon--selected": unref(selected)
          }]),
          style: normalizeStyle({
            "--img-src": `url(${unref(src)})`,
            "--img-selected-src": `url(${unref(selectedSrc)})`
          })
        },
        [
          createElementVNode(
            "div",
            {
              class: normalizeClass(["lc-icon__image", {
                "lc-icon__image--enhover": !!unref(selectedSrc)
              }])
            },
            [
              createElementVNode("img", {
                class: "lc-icon__img",
                src: unref(src),
                draggable: "false",
                alt: ""
              }, null, 8, _hoisted_1)
            ],
            2
            /* CLASS */
          ),
          createElementVNode("span", _hoisted_2, [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ])
        ],
        6
        /* CLASS, STYLE */
      );
    };
  }
});
export {
  _sfc_main as default
};
