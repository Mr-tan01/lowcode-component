import { defineComponent as l, mergeDefaults as n, openBlock as a, createElementBlock as s, normalizeClass as i, createVNode as p, unref as c, mergeProps as m, withCtx as d, createElementVNode as o } from "vue";
import { NSelect as w } from "naive-ui/es/select";
const u = /* @__PURE__ */ l({
  __name: "select",
  props: /* @__PURE__ */ n({
    options: {
      type: Array
    },
    gradient: {
      type: Boolean
    }
  }, {
    options: () => [],
    gradient: !1
  }),
  setup(e) {
    return (r, t) => (a(), s(
      "div",
      {
        class: i(["lc-select", {
          "lc-select--gradient": e.gradient
        }])
      },
      [
        p(c(w), m({
          placeholder: "下拉选择",
          options: e.options,
          clearable: "",
          to: !1
        }, r.$attrs), {
          arrow: d(() => t[0] || (t[0] = [
            o(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                viewBox: "0 0 512 512"
              },
              [
                o("path", {
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
        }, 16, ["options"])
      ],
      2
      /* CLASS */
    ));
  }
});
export {
  u as default
};
