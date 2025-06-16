import { defineComponent as x, useCssVars as C, toRefs as N, ref as B, computed as l, openBlock as k, createElementBlock as D, normalizeClass as u, normalizeStyle as E, unref as a, createElementVNode as n, renderSlot as G } from "vue";
import { useImage as i } from "./icons.js";
const I = ["src"], V = { class: "lc-icon-card__span" }, q = /* @__PURE__ */ x({
  __name: "iconCard",
  props: {
    bagName: { default: "pedestal" },
    domain: { default: "func" },
    name: { default: "add" },
    size: { default: 74 },
    iconSize: { default: 46 },
    gap: { default: 16 },
    ext: { default: ".png" },
    selected: { type: Boolean, default: void 0 }
  },
  setup(m) {
    C((e) => ({
      a5b5201c: $.value,
      "95ec95b4": y.value,
      af712394: z.value
    }));
    const p = m, { bagName: o, domain: f, name: g, size: c, iconSize: t, gap: s, ext: r } = N(p), _ = B("baseSupport"), b = i(_, o, r), v = i(f, g, r), { src: S, selectedSrc: d } = b, { src: h } = v, $ = l(() => typeof c.value == "number" ? `${c.value}px` : c.value), y = l(() => typeof t.value == "number" ? `${t.value}%` : t.value + "%"), z = l(() => {
      const e = typeof s.value == "number" ? s.value : Number(s.value);
      return o.value === "booth" ? `${e + 16}%` : `${e}%`;
    });
    return (e, W) => (k(), D(
      "div",
      {
        class: u(["lc-icon-card", {
          "lc-icon-card--selected": e.selected
        }]),
        style: E({
          "--img-src": `url(${a(S)})`,
          "--img-selected-src": `url(${a(d)})`
        })
      },
      [
        n(
          "div",
          {
            class: u(["lc-icon-card__image", {
              "lc-icon-card__image--enhover": !!a(d)
            }])
          },
          [
            n("img", {
              class: "lc-icon-card__img",
              src: a(h),
              draggable: "false",
              alt: ""
            }, null, 8, I)
          ],
          2
          /* CLASS */
        ),
        n("span", V, [
          G(e.$slots, "default", {}, void 0, !0)
        ])
      ],
      6
      /* CLASS, STYLE */
    ));
  }
});
export {
  q as default
};
