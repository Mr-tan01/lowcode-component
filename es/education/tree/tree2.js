import { defineComponent, toRefs, openBlock, createElementBlock, createVNode, unref, mergeProps, h } from "vue";
import { NTree } from "naive-ui/es/tree";
import LcIcon from "./icon/index.js";
import './assets/icon/iconCard.css';/* empty css              */
const _hoisted_1 = { class: "lc-tree" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "tree",
  props: {
    expandedIcon: { default: "expand" },
    collapsedIcon: { default: "retract" }
  },
  setup(__props) {
    const props = __props;
    const { expandedIcon, collapsedIcon } = toRefs(props);
    const renderSwitcherIconWithExpaned = ({ expanded }) => {
      return h(LcIcon, {
        name: expanded ? collapsedIcon.value : expandedIcon.value
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(
          unref(NTree),
          mergeProps(_ctx.$attrs, { "render-switcher-icon": renderSwitcherIconWithExpaned }),
          null,
          16
          /* FULL_PROPS */
        )
      ]);
    };
  }
});
export {
  _sfc_main as default
};
