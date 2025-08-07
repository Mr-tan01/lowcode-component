import { defineComponent as G, openBlock as H, createElementBlock as J, createElementVNode as e, createVNode as r, unref as n, toDisplayString as o } from "vue";
import { NNumberAnimation as j } from "naive-ui/es/number-animation";
import q from "lodash-es/memoize";
import { bigNumber as F, overflowStr as K } from "lowcode-share/es/share";
import './assets/headline/radiohead.css';import './assets/icon/iconCard.css';import './assets/icon/icon.css';import './assets/headline/headline.css';/* empty css               */
import M from "./headline/subhead.js";
/* empty css           */
/* empty css              */
/* empty css                   */
const O = { class: "lc-planning-indicators" }, P = { class: "lc-planning-indicators__header" }, Q = { class: "lc-planning-indicators__item" }, R = { class: "lc-planning-indicators__item__left" }, W = { class: "lc-planning-indicators__item__title" }, X = { class: "lc-planning-indicators__item__left--value" }, Y = { class: "lc-number-value" }, Z = { class: "lc-number-unit" }, x = { class: "lc-planning-indicators__item__center" }, tt = ["src"], et = { class: "lc-planning-indicators__item__right" }, it = { class: "lc-planning-indicators__item__right" }, at = { class: "lc-planning-indicators__item__right--value" }, nt = { class: "lc-number-value" }, st = { class: "lc-number-unit" }, ht = /* @__PURE__ */ G({
  __name: "planningIndicatorsCard",
  props: {
    unit: {},
    fixed: { type: Boolean, default: !0 },
    data: {}
  },
  setup(l) {
    const d = q(
      (t, i = 0) => {
        if (l.fixed) {
          const { result: a } = F(t ?? 0, i);
          return a;
        }
        return t;
      },
      (t, i) => `${t}_${i}`
    ), c = q(
      (t, i, a = 0) => {
        if (l.fixed) {
          const { unit: s } = F(t ?? 0, a);
          return `${s}${i ?? ""}`;
        }
        return i ?? "";
      },
      (t, i, a) => `${t}_${i}_${a}`
    ), m = (t, i) => t ? K(t, i) : "-";
    return (t, i) => {
      var a, s, _, p, u, h, f, g, I, v, b, $, N, w, y, B, L, S, V, k, z, C, E, U, A, D, T;
      return H(), J("div", O, [
        e("div", P, [
          r(n(M), {
            text: (a = t.data) == null ? void 0 : a.header,
            type: "center",
            "font-size": "12px",
            "max-length": 4
          }, null, 8, ["text"])
        ]),
        e("div", Q, [
          e("div", R, [
            e(
              "span",
              W,
              o(m((_ = (s = t.data) == null ? void 0 : s.leftItem) == null ? void 0 : _.title, (u = (p = t.data) == null ? void 0 : p.leftItem) == null ? void 0 : u.maxLength)),
              1
              /* TEXT */
            ),
            e("span", X, [
              e("span", Y, [
                r(n(j), {
                  "show-separator": "",
                  from: 0,
                  to: n(d)((h = t.data) == null ? void 0 : h.leftItem.value, (f = t.data) == null ? void 0 : f.leftItem.decimal),
                  active: "",
                  precision: (g = t.data) == null ? void 0 : g.leftItem.decimal
                }, null, 8, ["to", "precision"])
              ]),
              e(
                "span",
                Z,
                o(n(c)((I = t.data) == null ? void 0 : I.leftItem.value, (v = t.data) == null ? void 0 : v.leftItem.unit, ($ = (b = t.data) == null ? void 0 : b.leftItem) == null ? void 0 : $.decimal)),
                1
                /* TEXT */
              )
            ])
          ]),
          e("div", x, [
            e("img", {
              src: (N = t.data) == null ? void 0 : N.icon,
              alt: ""
            }, null, 8, tt)
          ]),
          e("div", et, [
            e(
              "span",
              it,
              o(m((y = (w = t.data) == null ? void 0 : w.rightItem) == null ? void 0 : y.title, (L = (B = t.data) == null ? void 0 : B.rightItem) == null ? void 0 : L.maxLength)),
              1
              /* TEXT */
            ),
            e("span", at, [
              e("span", nt, [
                r(n(j), {
                  "show-separator": "",
                  from: 0,
                  to: n(d)((S = t.data) == null ? void 0 : S.rightItem.value, (k = (V = t.data) == null ? void 0 : V.rightItem) == null ? void 0 : k.decimal),
                  active: "",
                  precision: (z = t.data) == null ? void 0 : z.rightItem.decimal
                }, null, 8, ["to", "precision"])
              ]),
              e(
                "span",
                st,
                o(n(c)((E = (C = t.data) == null ? void 0 : C.rightItem) == null ? void 0 : E.value, (A = (U = t.data) == null ? void 0 : U.rightItem) == null ? void 0 : A.unit, (T = (D = t.data) == null ? void 0 : D.rightItem) == null ? void 0 : T.decimal)),
                1
                /* TEXT */
              )
            ])
          ])
        ])
      ]);
    };
  }
});
export {
  ht as default
};
