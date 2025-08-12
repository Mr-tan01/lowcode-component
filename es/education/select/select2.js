import { defineComponent, mergeDefaults, openBlock, createElementBlock, normalizeClass, createVNode, unref, mergeProps, withCtx, createElementVNode } from "vue";
import { NSelect } from "naive-ui/es/select";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "select",
  props: /* @__PURE__ */ mergeDefaults({
    options: {
      type: Array
    },
    gradient: {
      type: Boolean
    },
    placeholder: {
      type: String
    }
  }, {
    options: () => [],
    gradient: false,
    placeholder: "请选择"
  }),
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(["lc-select", {
            "lc-select--gradient": __props.gradient
          }])
        },
        [
          createVNode(unref(NSelect), mergeProps({
            placeholder: __props.placeholder,
            options: __props.options,
            clearable: "",
            to: false
          }, _ctx.$attrs), {
            arrow: withCtx(() => _cache[0] || (_cache[0] = [
              createElementVNode(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  "xmlns:xlink": "http://www.w3.org/1999/xlink",
                  viewBox: "0 0 512 512"
                },
                [
                  createElementVNode("path", {
                    d: "M98 190.06l139.78 163.12a24 24 0 0 0 36.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z",
                    fill: "currentColor"
                  })
                ],
                -1
                /* HOISTED */
              )
            ])),
            _: 1
            /* STABLE */
          }, 16, ["placeholder", "options"])
        ],
        2
        /* CLASS */
      );
    };
  }
});
export {
  _sfc_main as default
};
