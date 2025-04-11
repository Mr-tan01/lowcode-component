import { defineComponent as r, mergeDefaults as c, watch as s, openBlock as a, createElementBlock as t, Fragment as _, renderList as m, createElementVNode as n, toDisplayString as l } from "vue";
const u = { class: "bimodal-index" }, b = { class: "bimodal-index__indicator__lable" }, p = { class: "bimodal-index__indicator__value" }, h = /* @__PURE__ */ r({
  __name: "bimodalIndex",
  props: /* @__PURE__ */ c({
    data: {
      type: Array
    }
  }, {
    data: () => []
  }),
  setup(e) {
    return s(() => e.data, (d) => {
      d.length > 2 && e.data.splice(2);
    }, { immediate: !0, deep: !0 }), (d, x) => (a(), t("div", u, [
      (a(!0), t(
        _,
        null,
        m(e.data, (i, o) => (a(), t("div", {
          class: "bimodal-index__indicator",
          key: o
        }, [
          n(
            "div",
            b,
            l(i.label),
            1
            /* TEXT */
          ),
          n(
            "div",
            p,
            l(i.value),
            1
            /* TEXT */
          )
        ]))),
        128
        /* KEYED_FRAGMENT */
      ))
    ]));
  }
});
export {
  h as default
};
