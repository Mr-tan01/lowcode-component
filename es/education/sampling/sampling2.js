import { defineComponent, createElementBlock, openBlock, Fragment, renderList, renderSlot, createElementVNode, toDisplayString } from "vue";
import { samplingStaticIcons } from "./const.js";
const _hoisted_1 = { class: "Lc-boder" };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = ["src"];
const _hoisted_4 = { class: "Lc-boder-box-text" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sampling",
  props: {
    list: { default: () => [] }
  },
  emits: ["handleChange"],
  setup(__props, { emit: __emit }) {
    const $emit = __emit;
    function getIcon(p) {
      if (!p) return;
      return samplingStaticIcons[p] ?? p;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(_ctx.list, (item, key) => {
            return openBlock(), createElementBlock("div", {
              key,
              class: "Lc-boder-box",
              onClick: ($event) => $emit("handleChange", item, key)
            }, [
              renderSlot(_ctx.$slots, "default", {
                record: item,
                index: key
              }, () => [
                createElementVNode("img", {
                  src: getIcon(item.icon),
                  alt: ""
                }, null, 8, _hoisted_3),
                createElementVNode(
                  "span",
                  _hoisted_4,
                  toDisplayString(item.name),
                  1
                  /* TEXT */
                )
              ], true)
            ], 8, _hoisted_2);
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
