import { defineComponent as o, openBlock as r, createElementBlock as p, createVNode as i, unref as n, mergeProps as s, withCtx as m, createElementVNode as c } from "vue";
import d from "./empty_image.svg.js";
import { NEmpty as l } from "naive-ui/es/empty";
const a = { class: "lc-empty" }, E = /* @__PURE__ */ o({
  __name: "empty",
  props: {
    description: { default: "暂无数据" }
  },
  setup(_) {
    return (e, t) => (r(), p("div", a, [
      i(n(l), s(e.$attrs, { description: e.description }), {
        icon: m(() => t[0] || (t[0] = [
          c(
            "img",
            {
              src: d,
              alt: ""
            },
            null,
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      }, 16, ["description"])
    ]));
  }
});
export {
  E as default
};
