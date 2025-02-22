import { defineComponent as r, openBlock as e, createElementBlock as t, createVNode as p, unref as m, normalizeProps as a, guardReactiveProps as i } from "vue";
import n from "./szmap/index.js";
import "lodash-es/merge";
import "./szmap/const.js";
import './assets/szmap/rawMap.css';import './assets/mark/mark.css';import './assets/szmap/comp/labels.css';/* empty css                  */
import "naive-ui/es/number-animation";
/* empty css           */
/* empty css              */
const c = { class: "lc-map" }, B = /* @__PURE__ */ r({
  __name: "map",
  setup(s) {
    return (o, l) => (e(), t("div", c, [
      p(
        m(n),
        a(i(o.$attrs)),
        null,
        16
        /* FULL_PROPS */
      )
    ]));
  }
});
export {
  B as default
};
