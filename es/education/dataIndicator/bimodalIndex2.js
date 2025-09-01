import { defineComponent, mergeDefaults, computed, createElementBlock, openBlock, createElementVNode, Fragment, renderList, toDisplayString } from "vue";
const _hoisted_1 = { class: "bimodal-index" };
const _hoisted_2 = { class: "bimodal-index__indicator" };
const _hoisted_3 = { class: "bimodal-index__indicator__lable" };
const _hoisted_4 = { class: "bimodal-index__indicator__value" };
const _hoisted_5 = ["title"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "bimodalIndex",
  props: /* @__PURE__ */ mergeDefaults({
    data: {
      type: Array
    },
    empty: {
      type: String
    }
  }, {
    data: () => [],
    empty: "-"
  }),
  setup(__props) {
    const list = computed(() => {
      return __props.data.slice(0, 2);
    });
    const label = computed(() => {
      return list.value.map((item) => item.label);
    });
    const value = computed(() => {
      return list.value.map((item) => item.value || __props.empty);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          createElementVNode("div", _hoisted_3, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(label.value, (item, index) => {
                return openBlock(), createElementBlock(
                  "span",
                  { key: index },
                  toDisplayString(item),
                  1
                  /* TEXT */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          createElementVNode("div", _hoisted_4, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(value.value, (item, index) => {
                return openBlock(), createElementBlock("span", {
                  key: index,
                  title: value.value.toString()
                }, toDisplayString(item), 9, _hoisted_5);
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
