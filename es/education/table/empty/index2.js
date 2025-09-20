import { defineComponent, openBlock, createElementBlock, createVNode, unref, mergeProps, withCtx, createElementVNode } from "vue";
import _imports_0 from "./empty_image.svg.js";
import { NEmpty } from "naive-ui/es/empty";
const _hoisted_1 = { class: "lc-empty" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "empty",
  props: {
    description: { default: "暂无数据" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(NEmpty), mergeProps(_ctx.$attrs, { description: _ctx.description }), {
          icon: withCtx(() => _cache[0] || (_cache[0] = [
            createElementVNode(
              "img",
              {
                class: "lc-empty__iamge",
                src: _imports_0,
                alt: ""
              },
              null,
              -1
              /* HOISTED */
            )
          ])),
          _: 1
          /* STABLE */
        }, 16, ["description"])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
