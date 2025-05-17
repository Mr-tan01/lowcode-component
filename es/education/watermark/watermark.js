import { defineComponent as m, ref as s, onMounted as g, watch as x, computed as y, openBlock as r, createElementBlock as d, normalizeStyle as S, toDisplayString as k, createCommentVNode as z } from "vue";
const b = { key: 0 }, w = /* @__PURE__ */ m({
  __name: "watermark",
  props: {
    text: { default: "Watermark" },
    fontSize: { default: 20 },
    color: { default: "#fff" },
    rotate: { default: () => -45 },
    zIndex: { default: 1e3 },
    opacity: { default: 0.1 },
    mode: { default: "single" },
    gap: { default: 20 }
  },
  setup(t) {
    const o = s(""), i = () => {
      const e = document.createElement("canvas"), a = e.getContext("2d");
      if (!a) return;
      a.font = `${t.fontSize}px Arial`;
      const l = a.measureText(t.text).width, c = t.fontSize, n = t.rotate * Math.PI / 180, h = Math.abs(l * Math.cos(n)) + Math.abs(c * Math.sin(n)) + t.gap, u = Math.abs(l * Math.sin(n)) + Math.abs(c * Math.cos(n)) + t.gap;
      e.width = h, e.height = u, a.clearRect(0, 0, e.width, e.height), a.font = `${t.fontSize}px Arial`, a.fillStyle = t.color, a.globalAlpha = t.opacity, a.translate(e.width / 2, e.height / 2), a.rotate(n), a.textAlign = "center", a.textBaseline = "middle", a.fillText(t.text, 0, 0), o.value = e.toDataURL("image/png");
    };
    g(i), x([t.text, t.fontSize, t.color, t.rotate, t.opacity, t.gap], i);
    const f = y(() => {
      const e = {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        zIndex: t.zIndex,
        pointerEvents: "none"
      };
      return t.mode === "multiple" ? {
        ...e,
        backgroundImage: `url(${o.value})`,
        backgroundRepeat: "repeat"
      } : {
        ...e,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: `${t.fontSize}px`,
        color: t.color,
        transform: `rotate(${t.rotate}deg)`,
        opacity: t.opacity
      };
    });
    return (e, a) => (r(), d(
      "div",
      {
        class: "watermark",
        style: S(f.value)
      },
      [
        e.mode === "single" ? (r(), d(
          "span",
          b,
          k(e.text),
          1
          /* TEXT */
        )) : z("v-if", !0)
      ],
      4
      /* STYLE */
    ));
  }
});
export {
  w as default
};
