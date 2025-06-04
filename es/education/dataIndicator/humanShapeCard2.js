import { defineComponent as C, mergeDefaults as $, openBlock as s, createElementBlock as _, createElementVNode as r, Fragment as V, renderList as w, toDisplayString as l, createVNode as p, unref as t, createTextVNode as u, renderSlot as D } from "vue";
import N from "./images/card/bg-human.png.js";
import { NNumberAnimation as h } from "naive-ui/es/number-animation";
import m from "lodash-es/memoize";
import { bigNumber as f } from "lowcode-share/es/share";
const b = { class: "lc-human-shapeCard" }, y = { class: "lc-human-shapeCard__wrapper" }, x = { class: "lc-human-shapeCard__wrapper__item__title tiele-left" }, S = { class: "lc-human-shapeCard__wrapper__item__content content-left" }, B = ["data-tooltip"], j = ["data-tooltip"], k = { class: "lc-human-shapeCard__img" }, E = { class: "lc-human-shapeCard__wrapper" }, L = { class: "lc-human-shapeCard__wrapper__item__title tiele-right" }, O = { class: "lc-human-shapeCard__wrapper__item__content" }, R = ["data-tooltip"], z = ["data-tooltip"], G = /* @__PURE__ */ C({
  __name: "humanShapeCard",
  props: /* @__PURE__ */ $({
    letData: {
      type: Object
    },
    rigData: {
      type: Object
    },
    lefUnit: {
      type: String
    },
    rigUnit: {
      type: String
    },
    decimal: {
      type: Number
    },
    fixed: {
      type: Boolean
    }
  }, {
    letData: () => [],
    rigData: () => [],
    lefUnit: "",
    rigUnit: "",
    decimal: 2,
    fixed: !0
  }),
  setup(n) {
    const c = m((i) => {
      const { unit: a } = f(i);
      return Number.isInteger(i) && !a ? 0 : n.decimal;
    }), d = m((i) => {
      if (n.fixed) {
        const { result: a } = f(i, n.decimal);
        return a;
      }
      return i;
    }), g = (i) => m(
      (a, e) => {
        if (n.fixed) {
          const { unit: o } = f(a, n.decimal);
          return `${o}${e || i}`;
        }
        return e || i;
      },
      (a, e) => `${a}_${e || i}`
    ), v = g(n.lefUnit), U = g(n.rigUnit);
    return (i, a) => (s(), _("div", b, [
      r("div", y, [
        (s(!0), _(
          V,
          null,
          w(n.letData, (e, o) => (s(), _("div", {
            class: "lc-human-shapeCard__wrapper__item",
            key: o
          }, [
            r(
              "span",
              x,
              l(e.title),
              1
              /* TEXT */
            ),
            r("div", S, [
              r("div", {
                class: "lc-human-shapeCard__wrapper__item__content__val tooltip-container",
                "data-tooltip": `${e.lefValue}${e.lefUnit || n.lefUnit}`
              }, [
                p(t(h), {
                  "show-separator": "",
                  from: 0,
                  to: t(d)(e.lefValue),
                  active: "",
                  precision: t(c)(e.lefValue)
                }, null, 8, ["to", "precision"]),
                u(
                  l(t(v)(e.lefValue, e.lefUnit)),
                  1
                  /* TEXT */
                )
              ], 8, B),
              a[0] || (a[0] = r(
                "div",
                { class: "lc-human-shapeCard__wrapper__item__content__val" },
                " | ",
                -1
                /* HOISTED */
              )),
              r("div", {
                class: "lc-human-shapeCard__wrapper__item__content__val tooltip-container",
                "data-tooltip": `${e.rigValue}${e.rigUnit || n.rigUnit}`
              }, [
                p(t(h), {
                  "show-separator": "",
                  from: 0,
                  to: t(d)(e.rigValue),
                  active: "",
                  precision: t(c)(e.rigValue)
                }, null, 8, ["to", "precision"]),
                u(
                  l(t(U)(e.rigValue, e.rigUnit)),
                  1
                  /* TEXT */
                )
              ], 8, j)
            ])
          ]))),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      r("div", k, [
        D(i.$slots, "image", {}, () => [
          a[1] || (a[1] = r(
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
      r("div", E, [
        (s(!0), _(
          V,
          null,
          w(n.rigData, (e, o) => (s(), _("div", {
            class: "lc-human-shapeCard__wrapper__item",
            key: o
          }, [
            r(
              "span",
              L,
              l(e.title),
              1
              /* TEXT */
            ),
            r("div", O, [
              r("div", {
                class: "lc-human-shapeCard__wrapper__item__content__val tooltip-container",
                "data-tooltip": `${e.lefValue}${e.lefUnit || n.lefUnit}`
              }, [
                p(t(h), {
                  "show-separator": "",
                  from: 0,
                  to: t(d)(e.lefValue),
                  active: "",
                  precision: t(c)(e.lefValue)
                }, null, 8, ["to", "precision"]),
                u(
                  l(t(v)(e.lefValue, e.lefUnit)),
                  1
                  /* TEXT */
                )
              ], 8, R),
              a[2] || (a[2] = r(
                "div",
                { class: "lc-human-shapeCard__wrapper__item__content__val" },
                " | ",
                -1
                /* HOISTED */
              )),
              r("div", {
                class: "lc-human-shapeCard__wrapper__item__content__val tooltip-container",
                "data-tooltip": `${e.rigValue}${e.rigUnit || n.rigUnit}`
              }, [
                p(t(h), {
                  "show-separator": "",
                  from: 0,
                  to: t(d)(e.rigValue),
                  active: "",
                  precision: t(c)(e.rigValue)
                }, null, 8, ["to", "precision"]),
                u(
                  l(t(U)(e.rigValue, e.rigUnit)),
                  1
                  /* TEXT */
                )
              ], 8, z)
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
  G as default
};
