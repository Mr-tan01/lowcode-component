import { defineComponent as C, openBlock as s, createElementBlock as _, createElementVNode as n, Fragment as U, renderList as w, toDisplayString as l, createVNode as p, unref as a, createTextVNode as u, renderSlot as $ } from "vue";
import N from "./images/card/bg-human.png.js";
import { NNumberAnimation as h } from "naive-ui/es/number-animation";
import f from "lodash-es/memoize";
import { bigNumber as m } from "lowcode-share/es/share";
const D = { class: "lc-human-shapeCard" }, b = { class: "lc-human-shapeCard__wrapper" }, B = { class: "lc-human-shapeCard__wrapper__item__title tiele-left" }, S = { class: "lc-human-shapeCard__wrapper__item__content content-left" }, k = ["data-tooltip"], y = ["data-tooltip"], E = { class: "lc-human-shapeCard__img" }, L = { class: "lc-human-shapeCard__wrapper" }, R = { class: "lc-human-shapeCard__wrapper__item__title tiele-right" }, z = { class: "lc-human-shapeCard__wrapper__item__content" }, A = ["data-tooltip"], F = ["data-tooltip"], H = /* @__PURE__ */ C({
  __name: "humanShapeCard",
  props: {
    letData: { default: () => [] },
    rigData: { default: () => [] },
    lefUnit: { default: "" },
    rigUnit: { default: "" },
    decimal: { default: 2 },
    fixed: { type: Boolean, default: !0 }
  },
  setup(i) {
    const c = f((t) => {
      const { unit: r } = m(t);
      return Number.isInteger(t) && !r ? 0 : i.decimal;
    }), d = f((t) => {
      if (i.fixed) {
        const { result: r } = m(t, i.decimal);
        return r;
      }
      return t;
    }), g = (t) => f(
      (r, e) => {
        if (i.fixed) {
          const { unit: o } = m(r, i.decimal);
          return `${o}${e || t}`;
        }
        return e || t;
      },
      (r, e) => `${r}_${e || t}`
    ), v = g(i.lefUnit), V = g(i.rigUnit);
    return (t, r) => (s(), _("div", D, [
      n("div", b, [
        (s(!0), _(
          U,
          null,
          w(t.letData, (e, o) => (s(), _("div", {
            key: o,
            class: "lc-human-shapeCard__wrapper__item"
          }, [
            n(
              "span",
              B,
              l(e.title),
              1
              /* TEXT */
            ),
            n("div", S, [
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
                  l(a(v)(e.lefValue, e.lefUnit)),
                  1
                  /* TEXT */
                )
              ], 8, k),
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
                  l(a(V)(e.rigValue, e.rigUnit)),
                  1
                  /* TEXT */
                )
              ], 8, y)
            ])
          ]))),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      n("div", E, [
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
      n("div", L, [
        (s(!0), _(
          U,
          null,
          w(t.rigData, (e, o) => (s(), _("div", {
            key: o,
            class: "lc-human-shapeCard__wrapper__item"
          }, [
            n(
              "span",
              R,
              l(e.title),
              1
              /* TEXT */
            ),
            n("div", z, [
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
                  l(a(v)(e.lefValue, e.lefUnit)),
                  1
                  /* TEXT */
                )
              ], 8, A),
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
                  l(a(V)(e.rigValue, e.rigUnit)),
                  1
                  /* TEXT */
                )
              ], 8, F)
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
