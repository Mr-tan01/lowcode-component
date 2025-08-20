import { defineComponent, useCssVars, computed, ref, openBlock, createElementBlock, createCommentVNode, createVNode, unref } from "vue";
import { NTime } from "naive-ui/es/time";
import defaultImage from "./images/time.png.js";
const _hoisted_1 = { class: "lctime" };
const _hoisted_2 = ["src"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "time",
  props: {
    icon: { default: "" },
    color: { default: "#fff" },
    fontSize: { default: "20px" },
    isShowIcon: { type: Boolean, default: true },
    timeFormat: { default: "yyyy-MM-dd hh:mm" }
  },
  setup(__props) {
    useCssVars((_ctx) => ({
      "56711967": _ctx.color,
      "e27b6f28": _ctx.fontSize
    }));
    const imageIconSrc = computed(() => __props.icon || defaultImage);
    const currentTime = ref();
    function readCurrentTime() {
      currentTime.value = Date.now();
      setTimeout(readCurrentTime, 1e3);
    }
    readCurrentTime();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _ctx.isShowIcon ? (openBlock(), createElementBlock("img", {
          key: 0,
          class: "img",
          src: imageIconSrc.value,
          draggable: "false"
        }, null, 8, _hoisted_2)) : createCommentVNode("v-if", true),
        createVNode(unref(NTime), {
          time: currentTime.value,
          format: _ctx.timeFormat,
          class: "n-time-class"
        }, null, 8, ["time", "format"])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
