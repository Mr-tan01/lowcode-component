import { defineComponent, ref, watch, onUnmounted, computed, createElementBlock, openBlock, normalizeStyle, createCommentVNode, toDisplayString } from "vue";
const _hoisted_1 = { key: 0 };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "watermark",
  props: {
    text: { default: "Watermark" },
    fontSize: { default: 20 },
    color: { default: "#fff" },
    rotate: { default: () => -45 },
    zIndex: { default: 1e3 },
    opacity: { default: 0.1 },
    mode: { default: "single" },
    gap: { default: 20 }
  },
  setup(__props) {
    const backgroundUrl = ref("");
    const generateWatermark = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.font = `${__props.fontSize}px Arial`;
      const textWidth = ctx.measureText(__props.text).width;
      const textHeight = __props.fontSize;
      const rad = __props.rotate * Math.PI / 180;
      const rotatedWidth = Math.abs(textWidth * Math.cos(rad)) + Math.abs(textHeight * Math.sin(rad)) + __props.gap;
      const rotatedHeight = Math.abs(textWidth * Math.sin(rad)) + Math.abs(textHeight * Math.cos(rad)) + __props.gap;
      canvas.width = rotatedWidth;
      canvas.height = rotatedHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${__props.fontSize}px Arial`;
      ctx.fillStyle = __props.color;
      ctx.globalAlpha = __props.opacity;
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(rad);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(__props.text, 0, 0);
      backgroundUrl.value = canvas.toDataURL("image/png");
    };
    const changeWatermark = watch([() => __props.text, () => __props.fontSize, () => __props.color, () => __props.rotate, () => __props.opacity, () => __props.gap], generateWatermark, {
      immediate: true
    });
    onUnmounted(changeWatermark);
    const watermarkStyle = computed(() => {
      const baseStyle = {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        zIndex: __props.zIndex,
        pointerEvents: "none"
      };
      if (__props.mode === "multiple") {
        return {
          ...baseStyle,
          backgroundImage: `url(${backgroundUrl.value})`,
          backgroundRepeat: "repeat"
        };
      } else {
        return {
          ...baseStyle,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: `${__props.fontSize}px`,
          color: __props.color,
          transform: `rotate(${__props.rotate}deg)`,
          opacity: __props.opacity
        };
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: "watermark",
          style: normalizeStyle(watermarkStyle.value)
        },
        [
          _ctx.mode === "single" ? (openBlock(), createElementBlock(
            "span",
            _hoisted_1,
            toDisplayString(_ctx.text),
            1
            /* TEXT */
          )) : createCommentVNode("v-if", true)
        ],
        4
        /* STYLE */
      );
    };
  }
});
export {
  _sfc_main as default
};
