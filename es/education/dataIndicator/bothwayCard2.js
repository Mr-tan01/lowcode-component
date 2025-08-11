import { defineComponent, openBlock, createElementBlock, createElementVNode, toDisplayString, Fragment, renderList, renderSlot, createVNode, unref, createCommentVNode } from "vue";
import { bigNumber } from "lowcode-share/es/share";
import { NNumberAnimation } from "naive-ui/es/number-animation";
import memoize from "lodash-es/memoize";
const _hoisted_1 = { class: "lc-bothway-card" };
const _hoisted_2 = { class: "lc-bothway-card__wrapper" };
const _hoisted_3 = { class: "lc-bothway-card__wrapper__info-range" };
const _hoisted_4 = { class: "lc-bothway-card__wrapper__info-range__label flex-center" };
const _hoisted_5 = { class: "lc-bothway-card__wrapper__info-range__wrapper" };
const _hoisted_6 = ["title"];
const _hoisted_7 = { class: "flex-end" };
const _hoisted_8 = {
  key: 0,
  class: "lc-bothway-card__wrapper__info-range__wrapper__info__division flex-center"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "bothwayCard",
  props: {
    label: { default: "" },
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
          createElementVNode("div", _hoisted_3, [
            createElementVNode(
              "div",
              _hoisted_4,
              toDisplayString(_ctx.label),
              1
              /* TEXT */
            ),
            createElementVNode("div", _hoisted_5, [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(_ctx.data, (item, key) => {
                  return openBlock(), createElementBlock("div", {
                    key,
                    class: "lc-bothway-card__wrapper__info-range__wrapper__info"
                  }, [
                    renderSlot(_ctx.$slots, item.customSlot, { item }, () => {
                      var _a;
                      return [
                        createElementVNode("div", {
                          class: "lc-bothway-card__wrapper__info-range__wrapper__info__value",
                          title: (_a = item.value) == null ? void 0 : _a.toString()
                        }, [
                          createVNode(unref(NNumberAnimation), {
                            "show-separator": "",
                            from: 0,
                            to: unref(renderValue)(item.value),
                            active: "",
                            precision: unref(renderdecimals)(item.value)
                          }, null, 8, ["to", "precision"])
                        ], 8, _hoisted_6),
                        createElementVNode(
                          "div",
                          _hoisted_7,
                          toDisplayString(unref(renderUnit)(item.value, item.unit)),
                          1
                          /* TEXT */
                        ),
                        key !== _ctx.data.length - 1 ? (openBlock(), createElementBlock("div", _hoisted_8, " | ")) : createCommentVNode("v-if", true)
                      ];
                    }, true)
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ]),
          _cache[0] || (_cache[0] = createElementVNode(
            "div",
            { class: "lc-bothway-card__wrapper__table--bg" },
            null,
            -1
            /* HOISTED */
          ))
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
