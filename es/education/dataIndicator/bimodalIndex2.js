import { defineComponent as p, mergeDefaults as v, computed as i, openBlock as e, createElementBlock as t, createElementVNode as o, Fragment as c, renderList as _, toDisplayString as u } from "vue";
const y = { class: "bimodal-index" }, b = { class: "bimodal-index__indicator" }, x = { class: "bimodal-index__indicator__lable" }, h = { class: "bimodal-index__indicator__value" }, f = ["title"], S = /* @__PURE__ */ p({
  __name: "bimodalIndex",
  props: /* @__PURE__ */ v({
    data: {
      type: Array
    },
    empty: {
      type: String
    }
  }, {
    data: () => [],
    empty: "-"
  }),
  setup(r) {
    const s = i(() => r.data.slice(0, 2)), m = i(() => s.value.map((a) => a.label)), d = i(() => s.value.map((a) => a.value || r.empty));
    return (a, g) => (e(), t("div", y, [
      o("div", b, [
        o("div", x, [
          (e(!0), t(
            c,
            null,
            _(m.value, (n, l) => (e(), t(
              "span",
              { key: l },
              u(n),
              1
              /* TEXT */
            ))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        o("div", h, [
          (e(!0), t(
            c,
            null,
            _(d.value, (n, l) => (e(), t("span", {
              key: l,
              title: d.value.toString()
            }, u(n), 9, f))),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ])
    ]));
  }
});
export {
  S as default
};
