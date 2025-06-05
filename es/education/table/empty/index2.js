import { defineComponent as o, openBlock as r, createElementBlock as p, createVNode as i, unref as s, mergeProps as m, withCtx as n, createElementVNode as c } from "vue";
import l from "./empty_image.svg.js";
import { NEmpty as a } from "naive-ui/es/empty";
const d = { class: "lc-empty" }, g = /* @__PURE__ */ o({
  __name: "empty",
  props: {
    description: { default: "暂无数据" }
  },
  setup(_) {
    return (e, t) => (r(), p("div", d, [
      i(s(a), m(e.$attrs, { description: e.description }), {
        icon: n(() => t[0] || (t[0] = [
          c(
            "img",
            {
              class: "lc-empty__iamge",
              src: l,
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
  g as default
};
