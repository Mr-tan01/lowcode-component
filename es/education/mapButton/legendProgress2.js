import { defineComponent as n, mergeDefaults as o, useCssVars as a, openBlock as d, createElementBlock as i, createElementVNode as t, toDisplayString as s } from "vue";
const g = { class: "legend-progress" }, _ = { class: "legend-progress__lable" }, c = { class: "legend-progress__center" }, m = { class: "legend-progress__center__min-value sample-text" }, u = { class: "legend-progress__center__max-value sample-text" }, x = /* @__PURE__ */ n({
  __name: "legendProgress",
  props: /* @__PURE__ */ o({
    lable: {
      type: String
    },
    minValue: {
      type: String
    },
    maxValue: {
      type: String
    },
    startColor: {
      type: String
    },
    endColor: {
      type: String
    }
  }, {
    lable: "预警人数占比",
    minValue: "0%",
    maxValue: "20%",
    startColor: "rgba(34, 253, 252, 0)",
    endColor: "#FF4545"
  }),
  setup(e) {
    return a((r) => ({
      "14b05bd2": e.startColor,
      c7781284: e.endColor
    })), (r, l) => (d(), i("div", g, [
      t(
        "div",
        _,
        s(e.lable),
        1
        /* TEXT */
      ),
      t("div", c, [
        t(
          "div",
          m,
          s(e.minValue),
          1
          /* TEXT */
        ),
        l[0] || (l[0] = t(
          "div",
          { class: "legend-progress__center__progress-bar" },
          null,
          -1
          /* HOISTED */
        )),
        t(
          "div",
          u,
          s(e.maxValue),
          1
          /* TEXT */
        )
      ])
    ]));
  }
});
export {
  x as default
};
