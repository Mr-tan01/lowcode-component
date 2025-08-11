import { defineComponent, openBlock, createElementBlock, Fragment, renderList, renderSlot, createElementVNode, toDisplayString } from "vue";
import { samplingStaticIcons } from "./const.js";
const _hoisted_1 = { class: "Lc-boder" };
const _hoisted_2 = ["src"];
const _hoisted_3 = { class: "Lc-boder-box-text" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sampling",
  props: {
    list: { default: () => [] }
  },
  setup(__props) {
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
              class: "Lc-boder-box"
            }, [
              renderSlot(_ctx.$slots, "default", {
                record: item,
                index: key
              }, () => [
                createElementVNode("img", {
                  src: getIcon(item.icon),
                  alt: ""
                }, null, 8, _hoisted_2),
                createElementVNode(
                  "span",
                  _hoisted_3,
                  toDisplayString(item.name),
                  1
                  /* TEXT */
                )
              ], true)
            ]);
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
