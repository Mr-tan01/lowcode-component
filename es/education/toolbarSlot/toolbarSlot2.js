import { defineComponent as m, mergeModels as s, useModel as _, openBlock as p, createElementBlock as b, normalizeClass as v, createElementVNode as t, renderSlot as a, createVNode as n, unref as d, withCtx as h } from "vue";
import { NDatePicker as y } from "naive-ui/es/date-picker";
import V from "./icon/index.js";
const k = { class: "lc-toolbar-slot__toolbar" }, M = { class: "lc-toolbar-slot__toolbar__start" }, S = { class: "lc-toolbar-slot__toolbar__end" }, $ = { class: "lc-toolbar-slot__content" }, g = /* @__PURE__ */ m({
  __name: "toolbarSlot",
  props: /* @__PURE__ */ s({
    float: { type: Boolean, default: !1 },
    flex: { type: Boolean, default: !1 }
  }, {
    formattedValue: { type: Number, default: Date.now() },
    formattedValueModifiers: {}
  }),
  emits: /* @__PURE__ */ s(["refresh"], ["update:formattedValue"]),
  setup(u, { emit: f }) {
    const o = _(u, "formattedValue"), i = f;
    function r() {
      const e = {
        value: o.value,
        valueString: new Date(o.value).toLocaleString()
      };
      i("refresh", e);
    }
    return (e, l) => (p(), b(
      "div",
      {
        class: v(["lc-toolbar-slot", [{
          "lc-toolbar-slot--float": e.float,
          "lc-toolbar-slot--flex": e.flex
        }]])
      },
      [
        t("div", k, [
          t("div", M, [
            a(e.$slots, "toolbarStart", {}, void 0, !0)
          ]),
          t("div", S, [
            a(e.$slots, "toolbarRefresh", {}, () => [
              n(d(V), {
                name: "refresh",
                class: "lc-toolbar-slot__toolbar__refresh",
                onClick: r
              })
            ], !0),
            a(e.$slots, "toolbarTimePicker", {}, () => [
              n(d(y), {
                class: "n-date-picker",
                value: o.value,
                "onUpdate:value": [
                  l[0] || (l[0] = (c) => o.value = c),
                  r
                ],
                placeholder: "请选择日期",
                format: "yyyy.MM.dd",
                type: "date"
              }, {
                "date-icon": h(() => l[1] || (l[1] = [
                  t(
                    "span",
                    null,
                    null,
                    -1
                    /* HOISTED */
                  )
                ])),
                _: 1
                /* STABLE */
              }, 8, ["value"])
            ], !0)
          ])
        ]),
        t("div", $, [
          a(e.$slots, "default", {}, void 0, !0)
        ])
      ],
      2
      /* CLASS */
    ));
  }
});
export {
  g as default
};
