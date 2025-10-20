import { defineComponent, mergeModels, useCssVars, ref, useModel, computed, watch, createElementBlock, openBlock, createElementVNode, createVNode, createCommentVNode, unref, withCtx, normalizeClass, createStaticVNode, toDisplayString, Fragment, renderList, createBlock, renderSlot, mergeProps, createTextVNode, mergeDefaults } from "vue";
import LcCheckbox from "./checkbox/index.js";
import _sfc_main$1 from "./checkbox/checkbox-group.js";
import './assets/headline/radiohead.css';import './assets/icon/iconCard.css';import './assets/icon/icon.css';import './assets/headline/headline.css';/* empty css               */
import LcSubhead from "./headline/subhead.js";
/* empty css           */
/* empty css              */
import "lowcode-share/es/share";
/* empty css                   */
const _hoisted_1 = { class: "lc-checkbox-filter" };
const _hoisted_2 = { class: "lc-checkbox-filter__check__all lc-checkbox-gaid" };
const _hoisted_3 = { class: "lc-checkbox-gaid" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "checkoutbox-filter",
  props: /* @__PURE__ */ mergeModels(/* @__PURE__ */ mergeDefaults({
    row: {
      type: Number
    },
    dataList: {
      type: Array
    },
    isCheckAll: {
      type: Boolean
    },
    resetText: {
      type: String,
      default: "重置"
    },
    showReset: {
      type: Boolean,
      default: true
    }
  }, {
    row: 2,
    dataList: () => [],
    isCheckAll: false
  }), {
    "value": {
      default: []
    },
    "valueModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["check"], ["update:value"]),
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "2ed8f70a": __props.row
    }));
    const $emit = __emit;
    const checkAll = ref(false);
    const checkboxAllValue = useModel(__props, "value");
    const checkAllVlaue = computed(() => {
      return __props.dataList.reduce(
        (acc, item) => {
          if (item.children) {
            acc.push(...item.children.map((child) => child.value));
          }
          return acc;
        },
        []
      );
    });
    const handleCheckAll = (checked) => {
      if (!checked) {
        handleReset();
        return;
      }
      checkboxAllValue.value = checkAllVlaue.value;
    };
    const handleReset = () => {
      checkboxAllValue.value = [];
      checkAll.value = false;
    };
    const updateCheckAllStatus = () => {
      const allValues = checkAllVlaue.value;
      const selectedValues = checkboxAllValue.value;
      checkAll.value = allValues.every((value) => selectedValues.includes(value));
    };
    if (__props.isCheckAll) {
      checkAll.value = true;
      handleCheckAll(checkAll.value);
    }
    watch(checkboxAllValue, (value) => {
      updateCheckAllStatus();
      $emit("check", value);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          createVNode(unref(LcCheckbox), {
            checked: checkAll.value,
            "onUpdate:checked": [
              _cache[0] || (_cache[0] = ($event) => checkAll.value = $event),
              handleCheckAll
            ],
            class: "lc-checkbox-gaid__row"
          }, {
            default: withCtx(() => [
              createElementVNode(
                "span",
                {
                  class: normalizeClass(["lc-checkbox-filter__check__label", {
                    "lc-checkbox-filter__check__label--selected": checkAll.value
                  }])
                },
                "全选",
                2
                /* CLASS */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["checked"]),
          __props.showReset ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: "check-reset lc-checkbox-gaid__row",
            onClick: handleReset
          }, [
            _cache[2] || (_cache[2] = createStaticVNode('<div class="check-reset__icon" data-v-cdecfcd1><svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-v-cdecfcd1><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" data-v-cdecfcd1><g transform="translate(-344, -220)" data-v-cdecfcd1><g id="编组-2" transform="translate(344, 218)" data-v-cdecfcd1><g id="refresh" transform="translate(0, 2)" data-v-cdecfcd1><path id="refresh-(Background)" d="M0,0 L15.9565679,0 L15.9565679,16 L0,16 Z" data-v-cdecfcd1></path><path d="M13.2174605,7.99868345 L14.1761871,7.99868345 C14.176188,4.54763269 11.4013631,1.75 7.97844137,1.75 C5.7481695,1.75 3.79304044,2.93771338 2.70135186,4.72001243 L2.70135174,2.64251906 L1.74524962,2.64251906 L1.74524955,5.74893761 C1.74524955,6.02507998 1.96910717,6.24893761 2.24524955,6.24893761 C2.24524957,6.24893761 2.24524959,6.24893761 2.24524962,6.24893761 L5.32227219,6.24893713 L5.32227219,6.24893713 L5.32227219,5.28497791 L3.48097946,5.28497815 C4.39709313,3.74210536 6.07039562,2.71133503 7.97844137,2.7113356 C10.8669382,2.7113364 13.2174614,5.07360196 13.2174605,7.99868345 Z M2.73941745,7.998631 C2.73941665,10.9237127 5.08993982,13.286026 7.97843804,13.286027 C9.88648247,13.286027 11.5597845,12.2552587 12.4758982,10.7123852 L10.634296,10.7123852 L10.634296,9.74842548 L13.7113183,9.74842548 C13.9874607,9.74842548 14.2113183,9.97228311 14.2113183,10.2484255 L14.2113183,13.3548441 L14.2113183,13.3548441 L13.2552167,13.3548441 L13.2552167,11.2778559 C12.1634682,13.0598733 10.2084988,14.2473631 7.97843756,14.2473631 C4.55551581,14.2473631 1.78068946,11.449683 1.78069137,7.998631 L2.73941745,7.998631 Z" fill="#0FFBF8" data-v-cdecfcd1></path></g></g></g></g></svg></div>', 1)),
            createElementVNode(
              "span",
              null,
              toDisplayString(__props.resetText),
              1
              /* TEXT */
            )
          ])) : createCommentVNode("v-if", true)
        ]),
        createVNode(unref(_sfc_main$1), {
          value: checkboxAllValue.value,
          "onUpdate:value": _cache[1] || (_cache[1] = ($event) => checkboxAllValue.value = $event)
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(__props.dataList, (item, index) => {
                return openBlock(), createElementBlock(
                  Fragment,
                  { key: index },
                  [
                    createVNode(unref(LcSubhead), {
                      class: "lc-checkbox-filter__check__title",
                      "hide-radio-icon": true,
                      text: item.label
                    }, null, 8, ["text"]),
                    createElementVNode("div", _hoisted_3, [
                      (openBlock(true), createElementBlock(
                        Fragment,
                        null,
                        renderList(item.children, (check) => {
                          return openBlock(), createBlock(unref(LcCheckbox), {
                            key: check.value,
                            class: "lc-checkbox-gaid__row",
                            value: check.value,
                            disabled: check.disabled
                          }, {
                            default: withCtx(() => [
                              createElementVNode(
                                "span",
                                {
                                  class: normalizeClass(["lc-checkbox-filter__check__label", {
                                    "lc-checkbox-filter__check__label--selected": checkboxAllValue.value.includes(check.value)
                                  }])
                                },
                                [
                                  renderSlot(_ctx.$slots, "check-box-label", mergeProps({ ref_for: true }, check), () => [
                                    createTextVNode(
                                      toDisplayString(check.label),
                                      1
                                      /* TEXT */
                                    )
                                  ], true)
                                ],
                                2
                                /* CLASS */
                              )
                            ]),
                            _: 2
                            /* DYNAMIC */
                          }, 1032, ["value", "disabled"]);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ])
                  ],
                  64
                  /* STABLE_FRAGMENT */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["value"])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
