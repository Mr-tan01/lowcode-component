import { defineComponent, shallowRef, useTemplateRef, openBlock, createElementBlock, createElementVNode } from "vue";
import { useScriptTag } from "@vueuse/core";
import normalMarker from "../mark/images/normal.png.js";
const _hoisted_1 = { class: "lc-tianditu" };
const _hoisted_2 = {
  ref: "tiandituCanvasEl",
  class: "lc-tianditu__map"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tianditu",
  props: {
    tk: { default: "" },
    apiSrc: { default: "http://api.tianditu.gov.cn/api?v=4.0&tk=" }
  },
  setup(__props) {
    const tiandituApi = shallowRef();
    const tiandituInstance = shallowRef();
    const tiandituCanvasElRef = useTemplateRef("tiandituCanvasEl");
    const { load } = useScriptTag(`${__props.apiSrc}${__props.tk}`, void 0, {
      async: false,
      defer: true,
      noModule: false
    });
    function initTianditu() {
      tiandituInstance.value = new tiandituApi.value.Map(tiandituCanvasElRef.value);
      tiandituInstance.value.centerAndZoom(new tiandituApi.value.LngLat(116.40769, 39.89945), 12);
    }
    function addMark() {
      const T = tiandituApi.value;
      const icon = new T.Icon({
        iconUrl: normalMarker,
        iconSize: new T.Point(50, 75),
        iconAnchor: new T.Point(10, 25)
      });
      const marker = new T.Marker(new T.LngLat(116.411794, 39.9068), { icon });
      tiandituInstance.value.addOverLay(marker);
    }
    async function init() {
      await load();
      tiandituApi.value = window.T;
      initTianditu();
      addMark();
    }
    init();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode(
          "div",
          _hoisted_2,
          null,
          512
          /* NEED_PATCH */
        )
      ]);
    };
  }
});
export {
  _sfc_main as default
};
