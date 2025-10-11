import { defineComponent, computed, onMounted, onBeforeUnmount, createElementBlock, openBlock } from "vue";
import * as mars2d from "mars2d";
import { defaultMapOptions } from "./const.js";
const _hoisted_1 = ["id"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "marsMap",
  props: {
    mapKey: { default: "default" },
    options: { default: () => ({
      ...defaultMapOptions
    }) }
  },
  emits: ["onload"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    let map;
    const withKeyId = computed(() => `mars2d-container-${props.mapKey}`);
    onMounted(() => {
      initMars3d({
        ...defaultMapOptions
        // ...props.options,
      });
    });
    const emit = __emit;
    const initMars3d = (option) => {
      map = new mars2d.Map(withKeyId.value, option);
      emit("onload", map);
    };
    onBeforeUnmount(() => {
      if (map) {
        map.destroy();
        map = null;
      }
      console.log("map销毁完成", map);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: withKeyId.value,
        class: "mars2d-container"
      }, null, 8, _hoisted_1);
    };
  }
});
export {
  _sfc_main as default
};
