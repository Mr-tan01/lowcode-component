import { defineComponent, mergeDefaults, useTemplateRef, computed, createElementBlock, openBlock, createVNode, unref, withCtx, createElementVNode, Fragment, renderList, normalizeStyle, toDisplayString } from "vue";
import LcElasticScrollbar from "./elasticScrollbar/index.js";
import { bigNumber } from "lowcode-share/es/share";
import memoize from "lodash-es/memoize";
const _hoisted_1 = { class: "lc-progress" };
const _hoisted_2 = { class: "lc-progress__wrapper" };
const _hoisted_3 = { class: "lc-progress__wrapper__item__left__label" };
const _hoisted_4 = ["title"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "progress",
  props: /* @__PURE__ */ mergeDefaults({
    fixed: {
      type: Boolean
    },
    decimal: {
      type: Number
    },
    dataList: {
      type: Array
    }
  }, {
    fixed: true,
    decimal: 2,
    dataList: () => []
  }),
  setup(__props) {
    const valueRefS = useTemplateRef("valueRef");
    const maxWidth = computed(() => {
      if (valueRefS.value && Array.isArray(valueRefS.value)) {
        const widths = valueRefS.value.map((item) => Math.floor(item.offsetWidth));
        const maxWidthValue = Math.max(...widths);
        return `${maxWidthValue}px`;
      }
      return "100%";
    });
    const renderValue = (total) => {
      if (__props.fixed) {
        const { result } = bigNumber(total, __props.decimal);
        return result;
      }
      return total;
    };
    const renderUnit = memoize(
      (value, _unit) => {
        if (__props.fixed) {
          const { unit: numUnit } = bigNumber(value, __props.decimal);
          return `${numUnit}${_unit}`;
        }
        return _unit;
      },
      (value, _unit) => `${value}_${_unit}`
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(LcElasticScrollbar), null, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_2, [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(__props.dataList, (item, key) => {
                  return openBlock(), createElementBlock("div", {
                    key,
                    class: "lc-progress__wrapper__item"
                  }, [
                    createElementVNode(
                      "div",
                      {
                        class: "lc-progress__wrapper__item__left",
                        style: normalizeStyle({
                          "--progress": item.value,
                          "--bgColor": item.color
                        })
                      },
                      [
                        createElementVNode("span", _hoisted_3, [
                          createElementVNode(
                            "span",
                            null,
                            toDisplayString(item.label),
                            1
                            /* TEXT */
                          ),
                          createElementVNode(
                            "span",
                            null,
                            toDisplayString(item.value) + "%",
                            1
                            /* TEXT */
                          )
                        ])
                      ],
                      4
                      /* STYLE */
                    ),
                    createElementVNode("div", {
                      ref_for: true,
                      ref: "valueRef",
                      class: "lc-progress__wrapper__item__right",
                      style: normalizeStyle({ width: maxWidth.value }),
                      title: item.total.toString()
                    }, [
                      createElementVNode(
                        "span",
                        null,
                        toDisplayString(renderValue(item.total)),
                        1
                        /* TEXT */
                      ),
                      createElementVNode(
                        "span",
                        null,
                        toDisplayString(unref(renderUnit)(item.total, item.unit)),
                        1
                        /* TEXT */
                      )
                    ], 12, _hoisted_4)
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
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
