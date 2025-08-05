import { defineComponent as w, openBlock as s, createElementBlock as _, createElementVNode as n, Fragment as V, renderList as U, toDisplayString as i, createVNode as p, unref as a, createTextVNode as u, renderSlot as $ } from "vue";
import N from "./images/card/bg-human.png.js";
import { NNumberAnimation as h } from "naive-ui/es/number-animation";
import f from "lodash-es/memoize";
import { bigNumber as m } from "lowcode-share/es/share";
const D = { class: "lc-human-shapeCard" }, b = { class: "lc-human-shapeCard__wrapper" }, k = { class: "lc-human-shapeCard__wrapper__item__title tiele-left" }, B = { class: "lc-human-shapeCard__wrapper__item__content content-left" }, y = ["data-tooltip"], I = ["data-tooltip"], S = { class: "lc-human-shapeCard__img" }, E = { class: "lc-human-shapeCard__wrapper" }, L = { class: "lc-human-shapeCard__wrapper__item__title tiele-right" }, R = { class: "lc-human-shapeCard__wrapper__item__content" }, z = ["data-tooltip"], A = ["data-tooltip"], H = /* @__PURE__ */ w({
  __name: "humanShapeCard",
  props: {
    letData: { default: () => [] },
    rigData: { default: () => [] },
    lefUnit: { default: "" },
    rigUnit: { default: "" },
    decimal: { default: 2 },
    fixed: { type: Boolean, default: !0 },
    notCheckInteger: { type: Boolean, default: !1 }
  },
  setup(l) {
    const c = f((t) => {
      const { unit: r } = m(t);
      return Number.isInteger(t) && !r && !l.notCheckInteger ? 0 : l.decimal;
    }), d = f((t) => {
      if (l.fixed) {
        const { result: r } = m(t, l.decimal);
        return r;
      }
      return t;
    }), g = (t) => f(
      (r, e) => {
        if (l.fixed) {
          const { unit: o } = m(r, l.decimal);
          return `${o}${e || t}`;
        }
        return e || t;
      },
      (r, e) => `${r}_${e || t}`
    ), v = g(l.lefUnit), C = g(l.rigUnit);
    return (t, r) => (s(), _("div", D, [
      n("div", b, [
        (s(!0), _(
          V,
          null,
          U(t.letData, (e, o) => (s(), _("div", {
            key: o,
            class: "lc-human-shapeCard__wrapper__item"
          }, [
            n(
              "span",
              k,
              i(e.title),
              1
              /* TEXT */
            ),
            n("div", B, [
              n("div", {
                class: "lc-human-shapeCard__wrapper__item__content__val tooltip-container",
                "data-tooltip": `${e.lefValue}${e.lefUnit || t.lefUnit}`
              }, [
                p(a(h), {
                  "show-separator": "",
                  from: 0,
                  to: a(d)(e.lefValue),
                  active: "",
                  precision: a(c)(e.lefValue)
                }, null, 8, ["to", "precision"]),
                u(
                  i(a(v)(e.lefValue, e.lefUnit)),
                  1
                  /* TEXT */
                )
              ], 8, y),
              r[0] || (r[0] = n(
                "div",
                { class: "lc-human-shapeCard__wrapper__item__content__val" },
                "|",
                -1
                /* HOISTED */
              )),
              n("div", {
                class: "lc-human-shapeCard__wrapper__item__content__val tooltip-container",
                "data-tooltip": `${e.rigValue}${e.rigUnit || t.rigUnit}`
              }, [
                p(a(h), {
                  "show-separator": "",
                  from: 0,
                  to: a(d)(e.rigValue),
                  active: "",
                  precision: a(c)(e.rigValue)
                }, null, 8, ["to", "precision"]),
                u(
                  i(a(C)(e.rigValue, e.rigUnit)),
                  1
                  /* TEXT */
                )
              ], 8, I)
            ])
          ]))),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      n("div", S, [
        $(t.$slots, "image", {}, () => [
          r[1] || (r[1] = n(
            "img",
            {
              src: N,
              alt: ""
            },
            null,
            -1
            /* HOISTED */
          ))
        ], !0)
      ]),
      n("div", E, [
        (s(!0), _(
          V,
          null,
          U(t.rigData, (e, o) => (s(), _("div", {
            key: o,
            class: "lc-human-shapeCard__wrapper__item"
          }, [
            n(
              "span",
              L,
              i(e.title),
              1
              /* TEXT */
            ),
            n("div", R, [
              n("div", {
                class: "lc-human-shapeCard__wrapper__item__content__val tooltip-container",
                "data-tooltip": `${e.lefValue}${e.lefUnit || t.lefUnit}`
              }, [
                p(a(h), {
                  "show-separator": "",
                  from: 0,
                  to: a(d)(e.lefValue),
                  active: "",
                  precision: a(c)(e.lefValue)
                }, null, 8, ["to", "precision"]),
                u(
                  i(a(v)(e.lefValue, e.lefUnit)),
                  1
                  /* TEXT */
                )
              ], 8, z),
              r[2] || (r[2] = n(
                "div",
                { class: "lc-human-shapeCard__wrapper__item__content__val" },
                "|",
                -1
                /* HOISTED */
              )),
              n("div", {
                class: "lc-human-shapeCard__wrapper__item__content__val tooltip-container",
                "data-tooltip": `${e.rigValue}${e.rigUnit || t.rigUnit}`
              }, [
                p(a(h), {
                  "show-separator": "",
                  from: 0,
                  to: a(d)(e.rigValue),
                  active: "",
                  precision: a(c)(e.rigValue)
                }, null, 8, ["to", "precision"]),
                u(
                  i(a(C)(e.rigValue, e.rigUnit)),
                  1
                  /* TEXT */
                )
              ], 8, A)
            ])
          ]))),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]));
  }
});
export {
  H as default
};
