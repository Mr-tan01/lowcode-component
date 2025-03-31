import { defineComponent as d, mergeModels as u, useCssVars as r, useModel as c, openBlock as f, createElementBlock as g, createElementVNode as t, toDisplayString as a, createTextVNode as p } from "vue";
const m = { class: "pagination-container" }, _ = { class: "pagination-left" }, v = ["disabled"], b = { class: "page-info" }, h = { class: "page-info" }, P = ["disabled"], V = { class: "pagination-right total-pages" }, F = /* @__PURE__ */ d({
  __name: "paging",
  props: /* @__PURE__ */ u({
    totalPages: { default: 1 },
    modelValue: {},
    fontSize: { default: "16px" },
    fontColor: { default: "#FFFFFF" }
  }, {
    modelValue: { default: 1 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(l) {
    r((o) => ({
      "023c5c0b": o.fontSize,
      44703499: o.fontColor
    }));
    const e = c(l, "modelValue"), n = () => {
      e.value > 1 && e.value--;
    }, i = () => {
      e.value < l.totalPages && e.value++;
    };
    return (o, s) => (f(), g("div", m, [
      t("div", _, [
        t("button", {
          onClick: n,
          disabled: e.value === 1,
          class: "arrow-button left-arrow"
        }, null, 8, v),
        t(
          "span",
          b,
          a(e.value),
          1
          /* TEXT */
        ),
        s[0] || (s[0] = p(" / ")),
        t(
          "span",
          h,
          a(o.totalPages),
          1
          /* TEXT */
        ),
        t("button", {
          onClick: i,
          disabled: e.value === o.totalPages,
          class: "arrow-button right-arrow"
        }, null, 8, P)
      ]),
      t("div", V, [
        t(
          "span",
          null,
          "共 " + a(o.totalPages) + " 页",
          1
          /* TEXT */
        )
      ])
    ]));
  }
});
export {
  F as default
};
