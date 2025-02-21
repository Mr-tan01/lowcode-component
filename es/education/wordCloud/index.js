// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { openBlock as B, createElementBlock as F, defineComponent as K, ref as A, useTemplateRef as Q, computed as z, normalizeClass as Z, createElementVNode as W, unref as H, toDisplayString as P, Fragment as ee, renderList as te, normalizeStyle as ne } from "vue";
import { useResizeObserver as re } from "@vueuse/core";
const U = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [i, s] of t)
    o[i] = s;
  return o;
}, ae = {}, oe = { class: "lc-word-cloud" };
function ie(e, t) {
  return B(), F("div", oe, " word cloud ");
}
const De = /* @__PURE__ */ U(ae, [["render", ie]]);
function D(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var le = typeof global == "object" && global && global.Object === Object && global, ce = typeof self == "object" && self && self.Object === Object && self, V = le || ce || Function("return this")(), N = function() {
  return V.Date.now();
}, ue = /\s/;
function se(e) {
  for (var t = e.length; t-- && ue.test(e.charAt(t)); )
    ;
  return t;
}
var de = /^\s+/;
function fe(e) {
  return e && e.slice(0, se(e) + 1).replace(de, "");
}
var E = V.Symbol, J = Object.prototype, me = J.hasOwnProperty, pe = J.toString, k = E ? E.toStringTag : void 0;
function ve(e) {
  var t = me.call(e, k), o = e[k];
  try {
    e[k] = void 0;
    var i = !0;
  } catch {
  }
  var s = pe.call(e);
  return i && (t ? e[k] = o : delete e[k]), s;
}
var ge = Object.prototype, be = ge.toString;
function he(e) {
  return be.call(e);
}
var _e = "[object Null]", ye = "[object Undefined]", Y = E ? E.toStringTag : void 0;
function we(e) {
  return e == null ? e === void 0 ? ye : _e : Y && Y in Object(e) ? ve(e) : he(e);
}
function Se(e) {
  return e != null && typeof e == "object";
}
var Te = "[object Symbol]";
function Me(e) {
  return typeof e == "symbol" || Se(e) && we(e) == Te;
}
var q = NaN, Ce = /^[-+]0x[0-9a-f]+$/i, xe = /^0b[01]+$/i, je = /^0o[0-7]+$/i, Oe = parseInt;
function G(e) {
  if (typeof e == "number")
    return e;
  if (Me(e))
    return q;
  if (D(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = D(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = fe(e);
  var o = xe.test(e);
  return o || je.test(e) ? Oe(e.slice(2), o ? 2 : 8) : Ce.test(e) ? q : +e;
}
var We = "Expected a function", ke = Math.max, $e = Math.min;
function Ie(e, t, o) {
  var i, s, h, _, l, m, y = 0, v = !1, p = !1, w = !0;
  if (typeof e != "function")
    throw new TypeError(We);
  t = G(t) || 0, D(o) && (v = !!o.leading, p = "maxWait" in o, h = p ? ke(G(o.maxWait) || 0, t) : h, w = "trailing" in o ? !!o.trailing : w);
  function S(n) {
    var c = i, T = s;
    return i = s = void 0, y = n, _ = e.apply(T, c), _;
  }
  function M(n) {
    return y = n, l = setTimeout(f, t), v ? S(n) : _;
  }
  function C(n) {
    var c = n - m, T = n - y, $ = t - c;
    return p ? $e($, h - T) : $;
  }
  function d(n) {
    var c = n - m, T = n - y;
    return m === void 0 || c >= t || c < 0 || p && T >= h;
  }
  function f() {
    var n = N();
    if (d(n))
      return g(n);
    l = setTimeout(f, C(n));
  }
  function g(n) {
    return l = void 0, w && i ? S(n) : (i = s = void 0, _);
  }
  function L() {
    l !== void 0 && clearTimeout(l), y = 0, i = m = s = l = void 0;
  }
  function R() {
    return l === void 0 ? _ : g(N());
  }
  function j() {
    var n = N(), c = d(n);
    if (i = arguments, s = this, m = n, c) {
      if (l === void 0)
        return M(m);
      if (p)
        return clearTimeout(l), l = setTimeout(f, t), S(m);
    }
    return l === void 0 && (l = setTimeout(f, t)), _;
  }
  return j.cancel = L, j.flush = R, j;
}
const Ae = { class: "lc-word-cloud__wrapper__title" }, Be = ["onClick"], Fe = { class: "lc-word-cloud__wrapper__item__text" }, Ee = { class: "lc-word-cloud__wrapper__item__tooltip" }, Le = { class: "lc-word-cloud__wrapper__item__tooltip__text" }, Re = /* @__PURE__ */ K({
  __name: "bubbleWordCloud",
  props: {
    gridSize: {},
    maxWord: { default: 50 },
    data: { default: () => [] },
    ballSize: { default: 30 },
    title: { default: "中心词汇" },
    tooltip: { default: () => ({
      formatter: (e) => e.name + " " + e.value
    }) },
    word: { default: () => ({
      formatter: (e) => e.name
    }) },
    enableAnimate: { type: Boolean, default: !0 },
    animateSpeed: { default: 100 },
    animateStep: { default: 0.05 },
    type: { default: "circle" }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const o = A(0), i = A(0), s = Q("wordCloudWrapper");
    re(s, () => {
      o.value++;
    });
    const h = z(() => e.data.sort((r, u) => r.value - u.value)), _ = t;
    function l(r, u) {
      _("click", r, u);
    }
    const m = z(() => {
      var a;
      o.value;
      const {
        width: r = 0,
        height: u = 0
      } = ((a = s.value) == null ? void 0 : a.getBoundingClientRect()) ?? {};
      return {
        width: r,
        height: u,
        radiusWidth: r / 2,
        radiusHeight: u / 2
      };
    }), y = z(() => h.value.length), v = Math.PI / 360;
    let p = 1;
    const w = A(p * v), S = A(-1 * v);
    let M, C, d, f, g = 0;
    function L() {
      f = Math.cos(w.value), g = Math.sin(w.value), C = C * f - d * g, d = d * f + C * g;
    }
    function R() {
      f = Math.cos(S.value), g = Math.sin(S.value), M = M * f - d * g, d = d * f + M * g;
    }
    function j(r, u) {
      const { radiusHeight: a, radiusWidth: x } = m.value ?? {};
      if (!a || !x) return {};
      let b = Math.acos((2 * (u + 1) - 1) / y.value - 1), O = b * Math.sqrt(y.value * Math.PI);
      return d = a * Math.cos(b), C = a * Math.sin(b - i.value) * Math.sin(O - i.value), M = a * Math.sin(b - i.value) * Math.cos(O - i.value), L(), R(), {
        left: `${M + x}px`,
        top: `${C + a}px`,
        transform: `translate(-50%, -50%, ${d}px)`,
        transformOrigin: "50% 50%",
        "--word-ball-size": `${Math.max(r.value / e.maxWord * e.ballSize, 30)}px`,
        "--word-font-size": `${Math.max(r.value / e.maxWord * 10, 12)}px`,
        "--word-opacity": 1,
        "---inset-shadow-color": d > 0 ? "#0FFBF8" : "transparent",
        "---background-color": "rgba(34, 118, 252, 0.2)",
        "--word-color": r.color ?? "#DBFAFF"
      };
    }
    const n = () => {
      i.value += e.animateStep, setTimeout(() => {
        requestAnimationFrame(c);
      }, e.animateSpeed);
    };
    let c = n;
    e.enableAnimate && c();
    const T = Ie((r) => {
      const { width: u, height: a } = m.value ?? {};
      S.value = r.offsetX / u * 100 * p * v, w.value = r.offsetY / a * 100 * p * v, i.value = 0, c = () => {
      };
    }, 10);
    function $() {
      w.value = p * v, S.value = -1 * v, e.enableAnimate && (c = n, c());
    }
    return (r, u) => (B(), F(
      "div",
      {
        class: Z(["lc-word-cloud", [`lc-word-cloud--${r.type}`]])
      },
      [
        W(
          "div",
          {
            class: "lc-word-cloud__wrapper",
            ref: "wordCloudWrapper",
            onMousemoveCapture: u[0] || (u[0] = //@ts-ignore
            (...a) => H(T) && H(T)(...a)),
            onMouseleaveCapture: $
          },
          [
            W(
              "div",
              Ae,
              P(r.title),
              1
              /* TEXT */
            ),
            (B(!0), F(
              ee,
              null,
              te(h.value, (a, x) => {
                var b, O, I, X;
                return B(), F("div", {
                  key: a.name,
                  class: "lc-word-cloud__wrapper__item",
                  style: ne(j(a, x)),
                  onClick: (ze) => l(a, x)
                }, [
                  W(
                    "div",
                    Fe,
                    P((O = (b = r.word) == null ? void 0 : b.formatter) == null ? void 0 : O.call(b, a, x)),
                    1
                    /* TEXT */
                  ),
                  W("div", Ee, [
                    W(
                      "div",
                      Le,
                      P((X = (I = r.tooltip) == null ? void 0 : I.formatter) == null ? void 0 : X.call(I, a, x)),
                      1
                      /* TEXT */
                    )
                  ])
                ], 12, Be);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          544
          /* NEED_HYDRATION, NEED_PATCH */
        )
      ],
      2
      /* CLASS */
    ));
  }
}), Xe = /* @__PURE__ */ U(Re, [["__scopeId", "data-v-a825c482"]]);
export {
  Xe as LcBubbleWordColud,
  De as LcSatterWordColud
};
