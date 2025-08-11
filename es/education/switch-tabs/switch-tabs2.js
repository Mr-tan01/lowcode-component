import { defineComponent, mergeDefaults, computed, openBlock, createElementBlock, createVNode, unref, mergeProps, withCtx, createElementVNode, normalizeClass, toDisplayString } from "vue";
import LcCarouseBox from "./carouseBox/index.js";
import { propsRaw } from "./carouseBox/props.js";
import { defSwitchTabList } from "./const.js";
const _hoisted_1 = { class: "lc-switch-tabs" };
const _hoisted_2 = ["title"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "switch-tabs",
  props: /* @__PURE__ */ mergeDefaults(propsRaw, {
    backCenter: true
  }),
  setup(__props) {
    const listSource = computed(() => {
      return __props.list ?? defSwitchTabList;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(LcCarouseBox), mergeProps({
          list: listSource.value,
          "back-center": _ctx.backCenter,
          "offset-animation-time": _ctx.offsetAnimationTime,
          "row-key": _ctx.rowKey
        }, _ctx.$attrs), {
          default: withCtx(({ isActive, isEven, record: { label } }) => [
            createElementVNode(
              "button",
              {
                class: normalizeClass(["lc-switch-tabs__wrapper__tabs--train__button", { "active": isActive, "is-even": isEven }])
              },
              [
                createElementVNode("div", {
                  class: "lc-switch-tabs__wrapper__tabs--train__button--text",
                  title: label
                }, toDisplayString(label), 9, _hoisted_2)
              ],
              2
              /* CLASS */
            )
          ]),
          _: 1
          /* STABLE */
        }, 16, ["list", "back-center", "offset-animation-time", "row-key"])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
