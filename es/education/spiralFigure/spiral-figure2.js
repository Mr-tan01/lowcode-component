import { defineComponent as x, computed as p, openBlock as n, createElementBlock as r, createElementVNode as m, Fragment as h, renderList as S, normalizeClass as y, normalizeStyle as v, toDisplayString as I } from "vue";
import P from "./images/spiral-figure.png.js";
const M = { class: "symmetric-layout" }, k = { class: "center-image-container" }, C = ["src"], B = /* @__PURE__ */ x({
  __name: "spiral-figure",
  props: {
    texts: { default: () => [] },
    radius: { default: 150 },
    maxPerSide: { default: 5 },
    centerImage: { default: () => P }
  },
  setup(a) {
    const l = p(() => {
      const e = a.maxPerSide * 2;
      return a.texts.slice(0, e);
    }), d = (e) => e % 2 === 0 ? "right-side" : "left-side", u = (e) => {
      l.value.length;
      const c = e % 2 === 0, s = Math.floor(e / 2), t = 120, i = t / (a.maxPerSide - 1) * s - t / 2, o = (c ? 180 + i : -i) * Math.PI / 180, g = a.radius * Math.cos(o), f = a.radius * Math.sin(o);
      return {
        left: `calc(50% + ${g}px)`,
        top: `calc(50% + ${f}px)`,
        transform: "translate(-50%, -50%)"
      };
    };
    return (e, c) => (n(), r("div", M, [
      m("div", k, [
        m("img", {
          src: e.centerImage,
          alt: "Center image",
          class: "center-image"
        }, null, 8, C)
      ]),
      (n(!0), r(
        h,
        null,
        S(l.value, (s, t) => (n(), r(
          "div",
          {
            key: t,
            class: y(["text-item", d(t)]),
            style: v(u(t))
          },
          I(s),
          7
          /* TEXT, CLASS, STYLE */
        ))),
        128
        /* KEYED_FRAGMENT */
      ))
    ]));
  }
});
export {
  B as default
};
