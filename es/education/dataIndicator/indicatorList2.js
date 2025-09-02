import { defineComponent, mergeDefaults, createElementBlock, openBlock, createElementVNode, toDisplayString, Fragment, renderList } from "vue";
const _hoisted_1 = { class: "lc-indicator-list" };
const _hoisted_2 = { class: "lc-indicator-list__wrapper" };
const _hoisted_3 = { class: "lc-indicator-list__wrapper__image" };
const _hoisted_4 = ["src"];
const _hoisted_5 = { class: "lc-indicator-list__wrapper__info" };
const _hoisted_6 = { class: "lc-indicator-list__wrapper__info--nickname" };
const _hoisted_7 = { class: "lc-indicator-list__wrapper__info--msg" };
const _hoisted_8 = { class: "lc-indicator-list__wrapper__info--msg__item--label" };
const _hoisted_9 = { class: "lc-indicator-list__wrapper__info--msg__item--value" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "indicatorList",
  props: /* @__PURE__ */ mergeDefaults({
    icon: {
      type: String
    },
    name: {
      type: String
    },
    msg: {
      type: Array
    }
  }, {
    icon: "",
    name: "-",
    msg: () => []
  }),
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          createElementVNode("div", _hoisted_3, [
            createElementVNode("img", {
              class: "lc-indicator-list__wrapper__image--img",
              src: __props.icon,
              alt: ""
            }, null, 8, _hoisted_4)
          ]),
          createElementVNode("div", _hoisted_5, [
            createElementVNode(
              "div",
              _hoisted_6,
              toDisplayString(__props.name),
              1
              /* TEXT */
            ),
            createElementVNode("div", _hoisted_7, [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(__props.msg, (item, key) => {
                  return openBlock(), createElementBlock("div", {
                    key,
                    class: "lc-indicator-list__wrapper__info--msg__item"
                  }, [
                    createElementVNode(
                      "div",
                      _hoisted_8,
                      toDisplayString(item.label),
                      1
                      /* TEXT */
                    ),
                    createElementVNode(
                      "div",
                      _hoisted_9,
                      toDisplayString(item.value),
                      1
                      /* TEXT */
                    )
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ])
        ])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
