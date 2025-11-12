import { defineComponent, createElementBlock, openBlock, Fragment, renderList, unref, normalizeClass, createElementVNode, toDisplayString } from "vue";
import { MapType, MapImagesMap } from "./const.js";
const _hoisted_1 = { class: "map-block" };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = { class: "section" };
const _hoisted_4 = ["src"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "mapBlock",
  emits: ["itemClick"],
  setup(__props, { emit: __emit }) {
    const mapBlockName = Object.values(MapType);
    const emit = __emit;
    const handleClick = (item) => {
      emit("itemClick", item);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(unref(mapBlockName), (item, index) => {
            return openBlock(), createElementBlock("div", {
              key: item,
              class: normalizeClass(["map-block__item", index === 0 ? "city-menu-item" : "district-menu-item"]),
              onClick: ($event) => handleClick(item)
            }, [
              createElementVNode("section", _hoisted_3, [
                createElementVNode("img", {
                  src: unref(MapImagesMap)[item],
                  alt: ""
                }, null, 8, _hoisted_4)
              ]),
              createElementVNode(
                "div",
                null,
                toDisplayString(item),
                1
                /* TEXT */
              )
            ], 10, _hoisted_2);
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
