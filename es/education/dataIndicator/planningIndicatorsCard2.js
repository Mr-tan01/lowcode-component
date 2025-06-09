import { defineComponent as q, mergeDefaults as F, openBlock as G, createElementBlock as H, createElementVNode as e, createVNode as o, unref as a, toDisplayString as s } from "vue";
import { NNumberAnimation as A } from "naive-ui/es/number-animation";
import O from "lodash-es/memoize";
import { bigNumber as T, overflowStr as J } from "lowcode-share/es/share";
import './assets/headline/radiohead.css';import './assets/icon/icon.css';import './assets/headline/headline.css';/* empty css               */
import K from "./headline/subhead.js";
/* empty css            */
/* empty css                   */
const M = { class: "lc-planning-indicators" }, P = { class: "lc-planning-indicators__header" }, Q = { class: "lc-planning-indicators__item" }, R = { class: "lc-planning-indicators__item__left" }, W = { class: "lc-planning-indicators__item__title" }, X = { class: "lc-planning-indicators__item__left--value" }, Y = { class: "lc-number-value" }, Z = { class: "lc-number-unit" }, tt = { class: "lc-planning-indicators__item__center" }, et = ["src"], it = { class: "lc-planning-indicators__item__right" }, nt = { class: "lc-planning-indicators__item__right" }, at = { class: "lc-planning-indicators__item__right--value" }, ct = { class: "lc-number-value" }, lt = { class: "lc-number-unit" }, gt = /* @__PURE__ */ q({
  __name: "planningIndicatorsCard",
  props: /* @__PURE__ */ F({
    unit: {
      type: String
    },
    fixed: {
      type: Boolean
    },
    data: {
      type: Object
    }
  }, {
    fixed: !0
  }),
  setup(t) {
    const r = O((i, n = 0) => {
      if (t.fixed) {
        const { result: c } = T(i ?? 0, n);
        return c;
      }
      return i;
    }), d = O((i, n, c = 0) => {
      if (t.fixed) {
        const { unit: l } = T(i ?? 0, c);
        return `${l}${n ?? ""}`;
      }
      return n ?? "";
    }), m = (i, n) => i ? J(i, n) : "-";
    return (i, n) => {
      var c, l, u, h, f, g, _, I, v, x, b, p, y, N, S, w, B, L, V, k, z, C, D, E, U, $, j;
      return G(), H("div", M, [
        e("div", P, [
          o(a(K), {
            text: (c = t.data) == null ? void 0 : c.header,
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
              s(m((u = (l = t.data) == null ? void 0 : l.leftItem) == null ? void 0 : u.title, (f = (h = t.data) == null ? void 0 : h.leftItem) == null ? void 0 : f.maxLength)),
              1
              /* TEXT */
            ),
            e("span", X, [
              e("span", Y, [
                o(a(A), {
                  "show-separator": "",
                  from: 0,
                  to: a(r)((g = t.data) == null ? void 0 : g.leftItem.value, (_ = t.data) == null ? void 0 : _.leftItem.decimal),
                  active: "",
                  precision: (I = t.data) == null ? void 0 : I.leftItem.decimal
                }, null, 8, ["to", "precision"])
              ]),
              e(
                "span",
                Z,
                s(a(d)((v = t.data) == null ? void 0 : v.leftItem.value, (x = t.data) == null ? void 0 : x.leftItem.unit, (p = (b = t.data) == null ? void 0 : b.leftItem) == null ? void 0 : p.decimal)),
                1
                /* TEXT */
              )
            ])
          ]),
          e("div", tt, [
            e("img", {
              src: (y = t.data) == null ? void 0 : y.icon,
              alt: ""
            }, null, 8, et)
          ]),
          e("div", it, [
            e(
              "span",
              nt,
              s(m((S = (N = t.data) == null ? void 0 : N.rightItem) == null ? void 0 : S.title, (B = (w = t.data) == null ? void 0 : w.rightItem) == null ? void 0 : B.maxLength)),
              1
              /* TEXT */
            ),
            e("span", at, [
              e("span", ct, [
                o(a(A), {
                  "show-separator": "",
                  from: 0,
                  to: a(r)((L = t.data) == null ? void 0 : L.rightItem.value, (k = (V = t.data) == null ? void 0 : V.rightItem) == null ? void 0 : k.decimal),
                  active: "",
                  precision: (z = t.data) == null ? void 0 : z.rightItem.decimal
                }, null, 8, ["to", "precision"])
              ]),
              e(
                "span",
                lt,
                s(a(d)((D = (C = t.data) == null ? void 0 : C.rightItem) == null ? void 0 : D.value, (U = (E = t.data) == null ? void 0 : E.rightItem) == null ? void 0 : U.unit, (j = ($ = t.data) == null ? void 0 : $.rightItem) == null ? void 0 : j.decimal)),
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
  gt as default
};
