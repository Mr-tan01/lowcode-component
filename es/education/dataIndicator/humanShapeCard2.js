import { defineComponent, createElementBlock, openBlock, createElementVNode, Fragment, renderList, toDisplayString, createVNode, createTextVNode, unref, renderSlot } from "vue";
import _imports_0 from "./images/card/bg-human.png.js";
import { NNumberAnimation } from "naive-ui/es/number-animation";
import memoize from "lodash-es/memoize";
import { bigNumber } from "lowcode-share/es/share";
const _hoisted_1 = { class: "lc-human-shapeCard" };
const _hoisted_2 = { class: "lc-human-shapeCard__wrapper" };
const _hoisted_3 = { class: "lc-human-shapeCard__wrapper__item__title tiele-left" };
const _hoisted_4 = { class: "lc-human-shapeCard__wrapper__item__content content-left" };
const _hoisted_5 = ["data-tooltip"];
const _hoisted_6 = ["data-tooltip"];
const _hoisted_7 = { class: "lc-human-shapeCard__img" };
const _hoisted_8 = { class: "lc-human-shapeCard__wrapper" };
const _hoisted_9 = { class: "lc-human-shapeCard__wrapper__item__title tiele-right" };
const _hoisted_10 = { class: "lc-human-shapeCard__wrapper__item__content" };
const _hoisted_11 = ["data-tooltip"];
const _hoisted_12 = ["data-tooltip"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "humanShapeCard",
  props: {
    letData: { default: () => [] },
    rigData: { default: () => [] },
    lefUnit: { default: "" },
    rigUnit: { default: "" },
    decimal: { default: 2 },
    fixed: { type: Boolean, default: true },
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
    const createUnitRenderer = (defaultUnit) => memoize(
      (value, _unit) => {
        if (__props.fixed) {
          const { unit: numUnit } = bigNumber(value, __props.decimal);
          return `${numUnit}${_unit || defaultUnit}`;
        }
        return _unit || defaultUnit;
      },
      (value, _unit) => `${value}_${_unit || defaultUnit}`
    );
    const renderLeftUnit = createUnitRenderer(__props.lefUnit);
    const renderRightUnit = createUnitRenderer(__props.rigUnit);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(__props.letData, (item, key) => {
              return openBlock(), createElementBlock("div", {
                key,
                class: "lc-human-shapeCard__wrapper__item"
              }, [
                createElementVNode(
                  "span",
                  _hoisted_3,
                  toDisplayString(item.title),
                  1
                  /* TEXT */
                ),
                createElementVNode("div", _hoisted_4, [
                  createElementVNode("div", {
                    class: "lc-human-shapeCard__wrapper__item__content__val tooltip-container",
                    "data-tooltip": `${item.lefValue}${item.lefUnit || __props.lefUnit}`
                  }, [
                    createVNode(unref(NNumberAnimation), {
                      "show-separator": "",
                      from: 0,
                      to: unref(renderValue)(item.lefValue),
                      active: "",
                      precision: unref(renderdecimals)(item.lefValue)
                    }, null, 8, ["to", "precision"]),
                    createTextVNode(
                      toDisplayString(unref(renderLeftUnit)(item.lefValue, item.lefUnit)),
                      1
                      /* TEXT */
                    )
                  ], 8, _hoisted_5),
                  _cache[0] || (_cache[0] = createElementVNode(
                    "div",
                    { class: "lc-human-shapeCard__wrapper__item__content__val" },
                    "|",
                    -1
                    /* CACHED */
                  )),
                  createElementVNode("div", {
                    class: "lc-human-shapeCard__wrapper__item__content__val tooltip-container",
                    "data-tooltip": `${item.rigValue}${item.rigUnit || __props.rigUnit}`
                  }, [
                    createVNode(unref(NNumberAnimation), {
                      "show-separator": "",
                      from: 0,
                      to: unref(renderValue)(item.rigValue),
                      active: "",
                      precision: unref(renderdecimals)(item.rigValue)
                    }, null, 8, ["to", "precision"]),
                    createTextVNode(
                      toDisplayString(unref(renderRightUnit)(item.rigValue, item.rigUnit)),
                      1
                      /* TEXT */
                    )
                  ], 8, _hoisted_6)
                ])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        createElementVNode("div", _hoisted_7, [
          renderSlot(_ctx.$slots, "image", {}, () => [
            _cache[1] || (_cache[1] = createElementVNode(
              "img",
              {
                src: _imports_0,
                alt: ""
              },
              null,
              -1
              /* CACHED */
            ))
          ], true)
        ]),
        createElementVNode("div", _hoisted_8, [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(__props.rigData, (item, key) => {
              return openBlock(), createElementBlock("div", {
                key,
                class: "lc-human-shapeCard__wrapper__item"
              }, [
                createElementVNode(
                  "span",
                  _hoisted_9,
                  toDisplayString(item.title),
                  1
                  /* TEXT */
                ),
                createElementVNode("div", _hoisted_10, [
                  createElementVNode("div", {
                    class: "lc-human-shapeCard__wrapper__item__content__val tooltip-container",
                    "data-tooltip": `${item.lefValue}${item.lefUnit || __props.lefUnit}`
                  }, [
                    createVNode(unref(NNumberAnimation), {
                      "show-separator": "",
                      from: 0,
                      to: unref(renderValue)(item.lefValue),
                      active: "",
                      precision: unref(renderdecimals)(item.lefValue)
                    }, null, 8, ["to", "precision"]),
                    createTextVNode(
                      toDisplayString(unref(renderLeftUnit)(item.lefValue, item.lefUnit)),
                      1
                      /* TEXT */
                    )
                  ], 8, _hoisted_11),
                  _cache[2] || (_cache[2] = createElementVNode(
                    "div",
                    { class: "lc-human-shapeCard__wrapper__item__content__val" },
                    "|",
                    -1
                    /* CACHED */
                  )),
                  createElementVNode("div", {
                    class: "lc-human-shapeCard__wrapper__item__content__val tooltip-container",
                    "data-tooltip": `${item.rigValue}${item.rigUnit || __props.rigUnit}`
                  }, [
                    createVNode(unref(NNumberAnimation), {
                      "show-separator": "",
                      from: 0,
                      to: unref(renderValue)(item.rigValue),
                      active: "",
                      precision: unref(renderdecimals)(item.rigValue)
                    }, null, 8, ["to", "precision"]),
                    createTextVNode(
                      toDisplayString(unref(renderRightUnit)(item.rigValue, item.rigUnit)),
                      1
                      /* TEXT */
                    )
                  ], 8, _hoisted_12)
                ])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
