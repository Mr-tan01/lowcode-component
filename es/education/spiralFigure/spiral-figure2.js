import { defineComponent, computed, openBlock, createElementBlock, createElementVNode, Fragment, renderList, normalizeClass, normalizeStyle, toDisplayString } from "vue";
import spiralFigure from "./images/spiral-figure.png.js";
import { scale } from "mmjs-core";
const _hoisted_1 = { class: "symmetric-layout" };
const _hoisted_2 = { class: "center-image-container" };
const _hoisted_3 = ["src"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "spiral-figure",
  props: {
    texts: { default: () => [] },
    radius: { default: 150 },
    maxPerSide: { default: 5 },
    centerImage: { default: () => spiralFigure }
  },
  setup(__props) {
    const displayedTexts = computed(() => {
      const maxItems = __props.maxPerSide * 2;
      return __props.texts.slice(0, maxItems);
    });
    const getTextSide = (index) => {
      return index % 2 === 0 ? "right-side" : "left-side";
    };
    const getTextPosition = (index) => {
      const isLeftSide = index % 2 === 0;
      const positionIndex = Math.floor(index / 2);
      const angleRange = 120;
      const angleStep = angleRange / (__props.maxPerSide - 1);
      const angle = angleStep * positionIndex - angleRange / 2;
      const angleRad = (isLeftSide ? 180 + angle : -angle) * Math.PI / 180;
      const x = __props.radius * Math.cos(angleRad);
      const y = __props.radius * Math.sin(angleRad);
      return {
        left: `calc(50% + ${scale(x)}px)`,
        top: `calc(50% + ${scale(y)}px)`,
        transform: "translate(-50%, -50%)"
      };
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          createElementVNode("img", {
            src: _ctx.centerImage,
            alt: "Center image",
            class: "center-image"
          }, null, 8, _hoisted_3)
        ]),
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(displayedTexts.value, (text, index) => {
            return openBlock(), createElementBlock(
              "div",
              {
                key: index,
                class: normalizeClass(["text-item", getTextSide(index)]),
                style: normalizeStyle(getTextPosition(index))
              },
              toDisplayString(text),
              7
              /* TEXT, CLASS, STYLE */
            );
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]);
    };
  }
});
export {
  _sfc_main as default
};
