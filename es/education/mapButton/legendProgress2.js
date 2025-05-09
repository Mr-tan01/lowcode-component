import { defineComponent as _, mergeDefaults as I, ref as M, computed as V, openBlock as v, createElementBlock as p, createElementVNode as u, toDisplayString as C, Fragment as F, renderList as S, normalizeStyle as R, createCommentVNode as k } from "vue";
const B = { class: "legend-progress" }, P = { class: "legend-progress__lable" }, w = { class: "legend-progress__center" }, z = { class: "legend-progress__center__min-value sample-text" }, A = ["onMouseenter"], D = {
  key: 0,
  class: "segment-tooltip"
}, E = { class: "legend-progress__center__max-value sample-text" }, L = /* @__PURE__ */ _({
  __name: "legendProgress",
  props: /* @__PURE__ */ I({
    lable: {
      type: String
    },
    minValue: {
      type: String
    },
    maxValue: {
      type: String
    },
    startColor: {
      type: String
    },
    endColor: {
      type: String
    }
  }, {
    lable: "预警人数占比",
    minValue: "0%",
    maxValue: "20%",
    startColor: "rgba(34, 253, 252, 0)",
    endColor: "#FF4545"
  }),
  setup(s) {
    const i = M(null), b = M(null), m = V(() => {
      const r = [], e = parseFloat(s.minValue), h = (parseFloat(s.maxValue) - e) / 5;
      for (let l = 0; l < 5; l++) {
        const t = e + l * h, o = e + (l + 1) * h, g = l / 5, d = (l + 1) / 5;
        r.push({
          range: `${t.toFixed(1)}%~${o.toFixed(1)}%`,
          style: {
            width: `${100 / 5}%`,
            background: `linear-gradient(to right, 
                    ${x(g)}, 
                    ${x(d)})`
          }
        });
      }
      return r;
    }), x = (n) => {
      if (n <= 0) return s.startColor;
      if (n >= 1) return s.endColor;
      if (s.startColor.startsWith("rgba")) {
        const t = s.startColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d+))?\)/), o = s.endColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d+))?\)/);
        if (t && o) {
          const g = Math.round(parseInt(t[1]) + (parseInt(o[1]) - parseInt(t[1])) * n), d = Math.round(parseInt(t[2]) + (parseInt(o[2]) - parseInt(t[2])) * n), f = Math.round(parseInt(t[3]) + (parseInt(o[3]) - parseInt(t[3])) * n), $ = t[4] ? parseFloat(t[4]) + (parseFloat(o[4] || "1") - parseFloat(t[4])) * n : 1;
          return `rgba(${g}, ${d}, ${f}, ${$})`;
        }
      }
      const r = (t) => {
        const o = parseInt(t.slice(1), 16), g = o >> 16 & 255, d = o >> 8 & 255, f = o & 255;
        return [g, d, f];
      }, e = r(s.startColor), a = r(s.endColor), c = Math.round(e[0] + (a[0] - e[0]) * n), h = Math.round(e[1] + (a[1] - e[1]) * n), l = Math.round(e[2] + (a[2] - e[2]) * n);
      return `rgb(${c}, ${h}, ${l})`;
    }, y = (n) => {
      if (!b.value) return;
      const r = b.value.getBoundingClientRect(), a = (n.clientX - r.left) / r.width, c = Math.floor(a * m.value.length);
      c >= 0 && c < m.value.length && (i.value = m.value[c].range);
    };
    return (n, r) => (v(), p("div", B, [
      u(
        "div",
        P,
        C(s.lable),
        1
        /* TEXT */
      ),
      u("div", w, [
        u(
          "div",
          z,
          C(s.minValue),
          1
          /* TEXT */
        ),
        u(
          "div",
          {
            class: "legend-progress__center__progress-bar",
            ref_key: "progressBar",
            ref: b,
            onMousemove: y,
            onMouseleave: r[0] || (r[0] = (e) => i.value = null)
          },
          [
            (v(!0), p(
              F,
              null,
              S(m.value, (e, a) => (v(), p("div", {
                key: a,
                class: "progress-segment",
                style: R(e.style),
                onMouseenter: (c) => i.value = e.range
              }, [
                i.value === e.range ? (v(), p(
                  "div",
                  D,
                  C(e.range),
                  1
                  /* TEXT */
                )) : k("v-if", !0)
              ], 44, A))),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          544
          /* NEED_HYDRATION, NEED_PATCH */
        ),
        u(
          "div",
          E,
          C(s.maxValue),
          1
          /* TEXT */
        )
      ])
    ]));
  }
});
export {
  L as default
};
