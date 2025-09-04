import { defineComponent, createBlock, openBlock, unref, mergeProps, withCtx, createElementVNode, createElementBlock, Fragment, renderList, renderSlot, createCommentVNode, toDisplayString } from "vue";
import { NCheckboxGroup, NCheckbox } from "naive-ui/es/checkbox";
import { samplingStaticIcons } from "./const.js";
const _hoisted_1 = { class: "Lc-boder" };
const _hoisted_2 = ["src"];
const _hoisted_3 = { class: "Lc-boder-box-text" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sampling",
  props: {
    list: { default: () => [] },
    showCheckbox: { type: Boolean, default: false }
  },
  emits: ["handleChange"],
  setup(__props, { emit: __emit }) {
    function getIcon(p) {
      if (!p) return;
      return samplingStaticIcons[p] ?? p;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(
        unref(NCheckboxGroup),
        mergeProps({ class: "lc-checkbox-group" }, _ctx.$attrs),
        {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_1, [
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
                      _ctx.showCheckbox ? (openBlock(), createBlock(unref(NCheckbox), {
                        key: 0,
                        value: item.name,
                        class: "lc-checkbox"
                      }, null, 8, ["value"])) : createCommentVNode("v-if", true),
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
            ])
          ]),
          _: 3
          /* FORWARDED */
        },
        16
        /* FULL_PROPS */
      );
    };
  }
});
export {
  _sfc_main as default
};
