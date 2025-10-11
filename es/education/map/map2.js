import { defineComponent, createElementBlock, openBlock, createVNode, unref, normalizeProps, guardReactiveProps } from "vue";
import Szmap from "./szmap/index.js";
import "lodash-es/merge";
import "./szmap/const.js";
import './assets/szmap/rawMap2.css';import './assets/szmap/rawMap.css';import './assets/mark/mark.css';import './assets/szmap/comp/labels.css';/* empty css                  */
import "naive-ui/es/number-animation";
/* empty css           */
/* empty css              */
/* empty css              */
const _hoisted_1 = { class: "lc-map" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "map",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(
          unref(Szmap),
          normalizeProps(guardReactiveProps(_ctx.$attrs)),
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
