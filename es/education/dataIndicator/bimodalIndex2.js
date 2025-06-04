import { defineComponent as m, mergeDefaults as p, computed as l, openBlock as e, createElementBlock as t, createElementVNode as i, Fragment as s, renderList as d, toDisplayString as c } from "vue";
const v = { class: "bimodal-index" }, b = { class: "bimodal-index__indicator" }, x = { class: "bimodal-index__indicator__lable" }, y = { class: "bimodal-index__indicator__value" }, h = ["title"], S = /* @__PURE__ */ m({
  __name: "bimodalIndex",
  props: /* @__PURE__ */ p({
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
  setup(o) {
    const r = l(() => o.data.slice(0, 2)), _ = l(() => r.value.map((a) => a.label)), u = l(() => r.value.map((a) => a.value || o.empty));
    return (a, f) => (e(), t("div", v, [
      i("div", b, [
        i("div", x, [
          (e(!0), t(
            s,
            null,
            d(_.value, (n) => (e(), t(
              "span",
              null,
              c(n),
              1
              /* TEXT */
            ))),
            256
            /* UNKEYED_FRAGMENT */
          ))
        ]),
        i("div", y, [
          (e(!0), t(
            s,
            null,
            d(u.value, (n) => (e(), t("span", {
              title: n.toString()
            }, c(n), 9, h))),
            256
            /* UNKEYED_FRAGMENT */
          ))
        ])
      ])
    ]));
  }
});
export {
  S as default
};
