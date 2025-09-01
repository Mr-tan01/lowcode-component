import { defineComponent, useCssVars, computed, toRefs, ref, createElementBlock, openBlock, normalizeStyle, normalizeClass, unref, createElementVNode, renderSlot } from "vue";
import { useImage } from "./icons.js";
const _hoisted_1 = ["src"];
const _hoisted_2 = { class: "lc-icon-card__span" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "iconCard",
  props: {
    bagName: { default: "pedestal" },
    domain: { default: "func" },
    name: { default: "add" },
    size: { default: 74 },
    iconSize: { default: 46 },
    gap: { default: 16 },
    ext: { default: ".png" },
    selected: { type: Boolean, default: void 0 }
  },
  setup(__props) {
    useCssVars((_ctx) => ({
      "87c79cd6": imageWidth.value,
      "6b32b323": iconWidth.value,
      "68bc711a": iconGap.value
    }));
    const props = __props;
    const { bagName, domain, name, size, iconSize, gap, ext } = toRefs(props);
    const bagImg = ref("baseSupport");
    const bgSrcData = useImage(bagImg, bagName, ext);
    const srcData = useImage(domain, name, ext);
    const { src: bgSrc, selectedSrc: bgSelectedSrc } = bgSrcData;
    const { src: iconSrc } = srcData;
    const imageWidth = computed(() => typeof size.value === "number" ? `${size.value}px` : size.value);
    const iconWidth = computed(() => typeof iconSize.value === "number" ? `${iconSize.value}%` : iconSize.value + "%");
    const iconGap = computed(() => {
      const baseGap = typeof gap.value === "number" ? gap.value : Number(gap.value);
      return bagName.value === "booth" ? `${baseGap + 16}%` : `${baseGap}%`;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(["lc-icon-card", {
            "lc-icon-card--selected": _ctx.selected
          }]),
          style: normalizeStyle({
            "--img-src": `url(${unref(bgSrc)})`,
            "--img-selected-src": `url(${unref(bgSelectedSrc)})`
          })
        },
        [
          createElementVNode(
            "div",
            {
              class: normalizeClass(["lc-icon-card__image", {
                "lc-icon-card__image--enhover": !!unref(bgSelectedSrc)
              }])
            },
            [
              createElementVNode("img", {
                class: "lc-icon-card__img",
                src: unref(iconSrc),
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
