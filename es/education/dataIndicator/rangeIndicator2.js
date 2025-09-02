import { defineComponent, createElementBlock, openBlock, createElementVNode, Fragment, renderList, createCommentVNode, renderSlot, createVNode, unref, toDisplayString } from "vue";
import { bigNumber } from "lowcode-share/es/share";
import { NNumberAnimation } from "naive-ui/es/number-animation";
import memoize from "lodash-es/memoize";
const _hoisted_1 = { class: "lc-range-indicator" };
const _hoisted_2 = { class: "lc-range-indicator__wrapper" };
const _hoisted_3 = { class: "lc-range-indicator__wrapper__info-range" };
const _hoisted_4 = { class: "lc-range-indicator__wrapper__info--result" };
const _hoisted_5 = ["title"];
const _hoisted_6 = {
  key: 0,
  class: "lc-range-indicator__wrapper__info--result--unit"
};
const _hoisted_7 = { class: "lc-range-indicator__wrapper__info--label" };
const _hoisted_8 = {
  key: 0,
  class: "lc-range-indicator__wrapper__info--label-bottom"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "rangeIndicator",
  props: {
    data: { default: () => [] },
    unit: { default: "" },
    fixed: { type: Boolean, default: true },
    decimal: { default: 0 },
    notCheckInteger: { type: Boolean, default: false }
  },
  setup(__props) {
    const renderdecimals = memoize((value) => {
      const { unit: numUnit } = bigNumber(value);
      if (Number.isInteger(value) && !numUnit && !__props.notCheckInteger) {
        return 0;
      }
      return __props.decimal;
    });
    const renderValue = memoize((value) => {
      if (__props.fixed) {
        const { result } = bigNumber(value, __props.decimal);
        return result;
      }
      return value;
    });
    const renderUnit = memoize(
      (value, _unit) => {
        if (__props.fixed) {
          const { unit: numUnit } = bigNumber(value, __props.decimal);
          return `${numUnit}${_unit || __props.unit}`;
        }
        return _unit || __props.unit;
      },
      (value, _unit) => `${value}_${_unit || __props.unit}`
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          _cache[1] || (_cache[1] = createElementVNode(
            "div",
            { class: "lc-range-indicator__wrapper__table--bg" },
            null,
            -1
            /* CACHED */
          )),
          createElementVNode("div", _hoisted_3, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(_ctx.data, (item, key) => {
                return openBlock(), createElementBlock("div", {
                  key,
                  class: "lc-range-indicator__wrapper__info"
                }, [
                  _cache[0] || (_cache[0] = createElementVNode(
                    "div",
                    { class: "lc-range-indicator__wrapper__info__decorator--bg" },
                    null,
                    -1
                    /* CACHED */
                  )),
                  createElementVNode("div", _hoisted_4, [
                    renderSlot(_ctx.$slots, item.customSlot, { item }, () => {
                      var _a;
                      return [
                        createElementVNode("div", {
                          class: "lc-range-indicator__wrapper__info--result--value",
                          title: (_a = item.value) == null ? void 0 : _a.toString()
                        }, [
                          createVNode(unref(NNumberAnimation), {
                            "show-separator": "",
                            from: 0,
                            to: unref(renderValue)(item.value),
                            active: "",
                            precision: unref(renderdecimals)(item.value)
                          }, null, 8, ["to", "precision"])
                        ], 8, _hoisted_5),
                        unref(renderUnit)(item.value, item.unit) ? (openBlock(), createElementBlock(
                          "div",
                          _hoisted_6,
                          toDisplayString(unref(renderUnit)(item.value, item.unit)),
                          1
                          /* TEXT */
                        )) : createCommentVNode("v-if", true)
                      ];
                    }, true)
                  ]),
                  createElementVNode(
                    "div",
                    _hoisted_7,
                    toDisplayString(item.label),
                    1
                    /* TEXT */
                  ),
                  _ctx.$slots["label-bottom"] ? (openBlock(), createElementBlock("div", _hoisted_8, [
                    renderSlot(_ctx.$slots, "label-bottom", { item }, void 0, true)
                  ])) : createCommentVNode("v-if", true)
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
