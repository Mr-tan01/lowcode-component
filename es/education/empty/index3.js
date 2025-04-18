import { defineComponent as o, openBlock as r, createElementBlock as n, createVNode as m, unref as i, normalizeProps as p, guardReactiveProps as s, withCtx as a, createElementVNode as c } from "vue";
import l from "./empty_image.svg.js";
import { NEmpty as _ } from "naive-ui/es/empty";
const d = { class: "lc-empty" }, N = /* @__PURE__ */ o({
  __name: "index",
  setup(f) {
    return (t, e) => (r(), n("div", d, [
      m(
        i(_),
        p(s(t.$attrs)),
        {
          icon: a(() => e[0] || (e[0] = [
            c(
              "img",
              {
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
        },
        16
        /* FULL_PROPS */
      )
    ]));
  }
});
export {
  N as default
};
