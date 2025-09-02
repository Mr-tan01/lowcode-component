import { defineComponent, mergeModels, useModel, createElementBlock, openBlock, normalizeClass, createElementVNode, renderSlot, createVNode, unref, withCtx } from "vue";
import { NDatePicker } from "naive-ui/es/date-picker";
import LcIcon from "./icon/index.js";
import './assets/icon/iconCard.css';/* empty css              */
const _hoisted_1 = { class: "lc-toolbar-slot__toolbar" };
const _hoisted_2 = { class: "lc-toolbar-slot__toolbar__start" };
const _hoisted_3 = { class: "lc-toolbar-slot__toolbar__end" };
const _hoisted_4 = { class: "lc-toolbar-slot__content" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "toolbarSlot",
  props: /* @__PURE__ */ mergeModels({
    float: { type: Boolean, default: false },
    flex: { type: Boolean, default: false }
  }, {
    "formattedValue": {
      type: Number,
      default: Date.now()
    },
    "formattedValueModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["refresh"], ["update:formattedValue"]),
  setup(__props, { emit: __emit }) {
    const formattedValue = useModel(__props, "formattedValue");
    const $emit = __emit;
    function refresh() {
      const emitValue = {
        value: formattedValue.value,
        valueString: new Date(formattedValue.value).toLocaleString()
      };
      $emit("refresh", emitValue);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(["lc-toolbar-slot", [
            {
              "lc-toolbar-slot--float": _ctx.float,
              "lc-toolbar-slot--flex": _ctx.flex
            }
          ]])
        },
        [
          createElementVNode("div", _hoisted_1, [
            createElementVNode("div", _hoisted_2, [
              renderSlot(_ctx.$slots, "toolbarStart", {}, void 0, true)
            ]),
            createElementVNode("div", _hoisted_3, [
              renderSlot(_ctx.$slots, "toolbarRefresh", {}, () => [
                createVNode(unref(LcIcon), {
                  name: "refresh",
                  class: "lc-toolbar-slot__toolbar__refresh",
                  onClick: refresh
                })
              ], true),
              renderSlot(_ctx.$slots, "toolbarTimePicker", {}, () => [
                createVNode(unref(NDatePicker), {
                  value: formattedValue.value,
                  "onUpdate:value": [
                    _cache[0] || (_cache[0] = ($event) => formattedValue.value = $event),
                    refresh
                  ],
                  class: "n-date-picker",
                  placeholder: "请选择日期",
                  format: "yyyy.MM.dd",
                  type: "date"
                }, {
                  "date-icon": withCtx(() => [..._cache[1] || (_cache[1] = [
                    createElementVNode(
                      "span",
                      null,
                      null,
                      -1
                      /* CACHED */
                    )
                  ])]),
                  _: 1
                  /* STABLE */
                }, 8, ["value"])
              ], true)
            ])
          ]),
          createElementVNode("div", _hoisted_4, [
            renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ])
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
