import { defineComponent as r, mergeDefaults as a, openBlock as n, createElementBlock as s, normalizeClass as c, createVNode as i, unref as p, mergeProps as d, withCtx as m, createElementVNode as l } from "vue";
import { NSelect as g } from "naive-ui/es/select";
const h = /* @__PURE__ */ r({
  __name: "select",
  props: /* @__PURE__ */ a({
    options: {
      type: Array
    },
    gradient: {
      type: Boolean
    },
    placeholder: {
      type: String
    }
  }, {
    options: () => [],
    gradient: !1,
    placeholder: "请选择"
  }),
  setup(e) {
    return (o, t) => (n(), s(
      "div",
      {
        class: c(["lc-select", {
          "lc-select--gradient": e.gradient
        }])
      },
      [
        i(p(g), d({
          placeholder: e.placeholder,
          options: e.options,
          clearable: "",
          to: !1
        }, o.$attrs), {
          arrow: m(() => t[0] || (t[0] = [
            l(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                viewBox: "0 0 512 512"
              },
              [
                l("path", {
                  d: "M98 190.06l139.78 163.12a24 24 0 0 0 36.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z",
                  fill: "currentColor"
                })
              ],
              -1
              /* HOISTED */
            )
          ])),
          _: 1
          /* STABLE */
        }, 16, ["placeholder", "options"])
      ],
      2
      /* CLASS */
    ));
  }
});
export {
  h as default
};
