import { defineComponent as a, openBlock as n, createElementBlock as s, createVNode as t, withCtx as r, unref as c, mergeProps as p, createElementVNode as i } from "vue";
import { NDatePicker as l } from "naive-ui/es/date-picker";
import m from "./common/components/ConfigProvider/index.js";
const _ = { class: "lc-date-picker" }, N = /* @__PURE__ */ a({
  __name: "datePicker",
  setup(d) {
    return (o, e) => (n(), s("div", _, [
      t(m, null, {
        default: r(() => [
          t(
            c(l),
            p({
              type: "daterange",
              to: !1
            }, o.$attrs),
            {
              separator: r(() => e[0] || (e[0] = [
                i(
                  "span",
                  { class: "color-white" },
                  "-",
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
        ]),
        _: 1
        /* STABLE */
      })
    ]));
  }
});
export {
  N as default
};
