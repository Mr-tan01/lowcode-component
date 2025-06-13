import { defineComponent as _, useCssVars as p, toRefs as g, computed as h, openBlock as x, createElementBlock as v, normalizeClass as o, unref as e, normalizeStyle as y, createElementVNode as c, renderSlot as z } from "vue";
import { useImage as $ } from "./icons.js";
const B = ["src"], C = { class: "lc-icon__span" }, E = /* @__PURE__ */ _({
  __name: "icon",
  props: {
    domain: { default: "func" },
    name: { default: "add" },
    size: { default: 16 },
    ext: { default: ".png" },
    selected: { type: Boolean, default: void 0 }
  },
  setup(a) {
    p((l) => ({
      "31542a44": f.value
    }));
    const i = a, { domain: r, name: d, size: s, ext: m, selected: u } = g(i), { src: t, selectedSrc: n } = $(
      r,
      d,
      m
    ), f = h(
      () => typeof s == "number" ? `${s}px` : s
    );
    return (l, S) => (x(), v(
      "div",
      {
        class: o(["lc-icon", {
          "lc-icon--selected": e(u)
        }]),
        style: y({
          "--img-src": `url(${e(t)})`,
          "--img-selected-src": `url(${e(n)})`
        })
      },
      [
        c(
          "div",
          {
            class: o(["lc-icon__image", {
              "lc-icon__image--enhover": !!e(n)
            }])
          },
          [
            c("img", {
              class: "lc-icon__img",
              src: e(t),
              draggable: "false",
              alt: ""
            }, null, 8, B)
          ],
          2
          /* CLASS */
        ),
        c("span", C, [
          z(l.$slots, "default", {}, void 0, !0)
        ])
      ],
      6
      /* CLASS, STYLE */
    ));
  }
});
export {
  E as default
};
