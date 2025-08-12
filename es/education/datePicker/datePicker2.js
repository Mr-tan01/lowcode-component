import { defineComponent, openBlock, createElementBlock, createVNode, withCtx, unref, mergeProps, createElementVNode } from "vue";
import { NDatePicker } from "naive-ui/es/date-picker";
import _sfc_main$1 from "./common/components/ConfigProvider/index.js";
const _hoisted_1 = { class: "lc-date-picker" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "datePicker",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_sfc_main$1, null, {
          default: withCtx(() => [
            createVNode(
              unref(NDatePicker),
              mergeProps({
                type: "daterange",
                to: false
              }, _ctx.$attrs),
              {
                separator: withCtx(() => _cache[0] || (_cache[0] = [
                  createElementVNode(
                    "span",
                    { class: "color-white" },
                    "-",
                    -1
                    /* HOISTED */
                  )
                ])),
                _: 1
                /* STABLE */
              },
              16
              /* FULL_PROPS */
            )
          ]),
          _: 1
          /* STABLE */
        })
      ]);
    };
  }
});
export {
  _sfc_main as default
};
