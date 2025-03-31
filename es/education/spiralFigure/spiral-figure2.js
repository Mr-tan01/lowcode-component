import { defineComponent as x, computed as p, openBlock as n, createElementBlock as r, createElementVNode as m, unref as h, Fragment as S, renderList as y, normalizeClass as v, normalizeStyle as P, toDisplayString as M } from "vue";
import _ from "./images/spiral-figure.png.js";
const k = { class: "symmetric-layout" }, C = { class: "center-image-container" }, I = ["src"], E = /* @__PURE__ */ x({
  __name: "spiral-figure",
  props: {
    texts: { default: () => [] },
    radius: { default: 150 },
    maxPerSide: { default: 5 }
  },
  setup(s) {
    const i = p(() => {
      const e = s.maxPerSide * 2;
      return s.texts.slice(0, e);
    }), d = (e) => e % 2 === 0 ? "right-side" : "left-side", u = (e) => {
      i.value.length;
      const l = e % 2 === 0, a = Math.floor(e / 2), t = 120, o = t / (s.maxPerSide - 1) * a - t / 2, c = (l ? 180 + o : -o) * Math.PI / 180, g = s.radius * Math.cos(c), f = s.radius * Math.sin(c);
      return {
        left: `calc(50% + ${g}px)`,
        top: `calc(50% + ${f}px)`,
        transform: "translate(-50%, -50%)"
      };
    };
    return (e, l) => (n(), r("div", k, [
      m("div", C, [
        m("img", {
          src: h(_),
          alt: "Center image",
          class: "center-image"
        }, null, 8, I)
      ]),
      (n(!0), r(
        S,
        null,
        y(i.value, (a, t) => (n(), r(
          "div",
          {
            key: t,
            class: v(["text-item", d(t)]),
            style: P(u(t))
          },
          M(a),
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
  E as default
};
