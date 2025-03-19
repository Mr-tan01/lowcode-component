import { defineComponent as o, mergeDefaults as r, useCssVars as m, computed as d, openBlock as u, createElementBlock as g, normalizeClass as l, normalizeStyle as f, unref as n, createElementVNode as t, renderSlot as y } from "vue";
import { useImage as p } from "./icons.js";
const z = ["src"], S = { class: "lc-icon__span" }, b = /* @__PURE__ */ o({
  __name: "icon",
  props: /* @__PURE__ */ r({
    domain: {
      type: String
    },
    name: {
      type: String
    },
    size: {
      type: [Number, String]
    },
    ext: {
      type: String
    },
    selected: {
      type: Boolean
    }
  }, {
    domain: "func",
    name: "add",
    size: 16,
    ext: ".png",
    selected: () => {
    }
  }),
  setup(e) {
    m((i) => ({
      b8ee5aa4: a.value
    }));
    const { src: c, selectedSrc: s } = p(e.domain, e.name, e.ext), a = d(() => typeof e.size == "number" ? `${e.size}px` : e.size);
    return (i, x) => (u(), g(
      "div",
      {
        class: l(["lc-icon", {
          "lc-icon--selected": e.selected
        }]),
        style: f({
          "--img-src": `url(${n(c)})`,
          "--img-selected-src": `url(${n(s)})`
        })
      },
      [
        t(
          "div",
          {
            class: l(["lc-icon__image", {
              "lc-icon__image--enhover": !!n(s)
            }])
          },
          [
            t("img", {
              class: "lc-icon__img",
              src: n(c),
              draggable: "false",
              alt: ""
            }, null, 8, z)
          ],
          2
          /* CLASS */
        ),
        t("span", S, [
          y(i.$slots, "default", {}, void 0, !0)
        ])
      ],
      6
      /* CLASS, STYLE */
    ));
  }
});
export {
  b as default
};
