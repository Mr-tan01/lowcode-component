import { defineComponent as u, toRefs as p, ref as f, openBlock as g, createElementBlock as _, normalizeStyle as b, unref as e, createElementVNode as z, renderSlot as N, createVNode as S } from "vue";
import h from "./icon.js";
import { useImage as x } from "./icons.js";
import './assets/iconCard.css';/* empty css          */
const y = { class: "lc-icon-card__img" }, C = /* @__PURE__ */ u({
  __name: "iconCard",
  props: {
    bagName: { default: "pedestal" },
    domain: { default: "menus" },
    name: { default: "booth" },
    size: { default: 16 },
    ext: { default: ".png" },
    selected: { type: Boolean, default: void 0 }
  },
  setup(t) {
    const o = t, { bagName: n, domain: a, name: s, size: c, ext: r } = p(o), l = f("baseSupport"), { src: m, selectedSrc: d } = x(
      l,
      n,
      r
    );
    return (i, B) => (g(), _(
      "div",
      {
        class: "lc-icon-card",
        style: b({
          "--img-src": `url(${e(m)})`,
          "--img-selected-src": `url(${e(d)})`
        })
      },
      [
        z("div", y, [
          N(i.$slots, "icon", {}, () => [
            S(e(h), {
              size: e(c),
              domain: e(a),
              name: e(s)
            }, null, 8, ["size", "domain", "name"])
          ], !0)
        ])
      ],
      4
      /* STYLE */
    ));
  }
});
export {
  C as default
};
