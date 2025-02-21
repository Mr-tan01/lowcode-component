// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { defineComponent as ve, mergeModels as J, mergeDefaults as me, useCssVars as be, ref as P, useModel as Q, computed as A, shallowRef as q, watch as ge, nextTick as Y, onMounted as Z, openBlock as j, createElementBlock as R, createElementVNode as C, unref as W, createCommentVNode as z, normalizeClass as ee, normalizeStyle as pe, Fragment as ye, renderList as Te, renderSlot as te, mergeProps as _e, toDisplayString as xe } from "vue";
import { _ as he } from "./assets/lt-arrow-DiWswSiL.js";
import { _ as we } from "./assets/rt-arrow-CQwSTGHi.js";
import { _ as Ce } from "./assets/top-arrow-bBxwU0FN.js";
function F(e) {
  var a = typeof e;
  return e != null && (a == "object" || a == "function");
}
var ke = typeof global == "object" && global && global.Object === Object && global, Se = typeof self == "object" && self && self.Object === Object && self, ie = ke || Se || Function("return this")(), H = function() {
  return ie.Date.now();
}, Be = /\s/;
function Oe(e) {
  for (var a = e.length; a-- && Be.test(e.charAt(a)); )
    ;
  return a;
}
var Ae = /^\s+/;
function je(e) {
  return e && e.slice(0, Oe(e) + 1).replace(Ae, "");
}
var D = ie.Symbol, le = Object.prototype, Re = le.hasOwnProperty, Ee = le.toString, $ = D ? D.toStringTag : void 0;
function We(e) {
  var a = Re.call(e, $), r = e[$];
  try {
    e[$] = void 0;
    var l = !0;
  } catch {
  }
  var s = Ee.call(e);
  return l && (a ? e[$] = r : delete e[$]), s;
}
var $e = Object.prototype, Ie = $e.toString;
function Me(e) {
  return Ie.call(e);
}
var Le = "[object Null]", Ne = "[object Undefined]", ne = D ? D.toStringTag : void 0;
function Pe(e) {
  return e == null ? e === void 0 ? Ne : Le : ne && ne in Object(e) ? We(e) : Me(e);
}
function Fe(e) {
  return e != null && typeof e == "object";
}
var De = "[object Symbol]";
function Ke(e) {
  return typeof e == "symbol" || Fe(e) && Pe(e) == De;
}
var re = NaN, qe = /^[-+]0x[0-9a-f]+$/i, ze = /^0b[01]+$/i, He = /^0o[0-7]+$/i, Ve = parseInt;
function ae(e) {
  if (typeof e == "number")
    return e;
  if (Ke(e))
    return re;
  if (F(e)) {
    var a = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = F(a) ? a + "" : a;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = je(e);
  var r = ze.test(e);
  return r || He.test(e) ? Ve(e.slice(2), r ? 2 : 8) : qe.test(e) ? re : +e;
}
var Ue = "Expected a function", Xe = Math.max, Ge = Math.min;
function se(e, a, r) {
  var l, s, T, d, c, p, v = 0, x = !1, _ = !1, k = !0;
  if (typeof e != "function")
    throw new TypeError(Ue);
  a = ae(a) || 0, F(r) && (x = !!r.leading, _ = "maxWait" in r, T = _ ? Xe(ae(r.maxWait) || 0, a) : T, k = "trailing" in r ? !!r.trailing : k);
  function S(o) {
    var b = l, g = s;
    return l = s = void 0, v = o, d = e.apply(g, b), d;
  }
  function I(o) {
    return v = o, c = setTimeout(m, a), x ? S(o) : d;
  }
  function M(o) {
    var b = o - p, g = o - v, N = a - b;
    return _ ? Ge(N, T - g) : N;
  }
  function h(o) {
    var b = o - p, g = o - v;
    return p === void 0 || b >= a || b < 0 || _ && g >= T;
  }
  function m() {
    var o = H();
    if (h(o))
      return B(o);
    c = setTimeout(m, M(o));
  }
  function B(o) {
    return c = void 0, k && l ? S(o) : (l = s = void 0, d);
  }
  function L() {
    c !== void 0 && clearTimeout(c), v = 0, l = p = s = c = void 0;
  }
  function E() {
    return c === void 0 ? d : B(H());
  }
  function O() {
    var o = H(), b = h(o);
    if (l = arguments, s = this, p = o, b) {
      if (c === void 0)
        return I(p);
      if (_)
        return clearTimeout(c), c = setTimeout(m, a), S(p);
    }
    return c === void 0 && (c = setTimeout(m, a)), d;
  }
  return O.cancel = L, O.flush = E, O;
}
var Je = "Expected a function";
function oe(e, a, r) {
  var l = !0, s = !0;
  if (typeof e != "function")
    throw new TypeError(Je);
  return F(r) && (l = "leading" in r ? !!r.leading : l, s = "trailing" in r ? !!r.trailing : s), se(e, a, {
    leading: l,
    maxWait: a,
    trailing: s
  });
}
const Qe = {
  list: {
    type: Array,
    required: !1
  },
  offsetAnimationTime: {
    type: Number
  },
  gap: {
    type: Number
  },
  rowKey: {
    type: Function,
    required: !1
  },
  showTrack: {
    type: Boolean,
    required: !1
  },
  disabled: {
    type: Boolean
  }
}, Ye = { class: "lc-carouse-box" }, Ze = { class: "lc-carouse-box__wrapper" }, et = ["onClick"], tt = ["title"], nt = {
  key: 0,
  class: "lc-carouse-box__track"
}, rt = /* @__PURE__ */ ve({
  __name: "carouseBox",
  props: /* @__PURE__ */ J(/* @__PURE__ */ me(Qe, {
    offsetAnimationTime: 250,
    rowKey: (e) => e.value ?? Math.random(),
    __skip_rowKey: !0,
    showTrack: !0,
    gap: 10,
    disabled: !1
  }), {
    index: { default: -1 },
    indexModifiers: {},
    value: { default: "" },
    valueModifiers: {}
  }),
  emits: /* @__PURE__ */ J(["change"], ["update:index", "update:value"]),
  setup(e, { emit: a }) {
    var X;
    be((n) => ({
      "24ca7a73": n.gap,
      "67b6a43b": n.offsetAnimationTime
    }));
    const r = P(0), l = P(!0), s = Q(e, "index"), T = Q(e, "value"), d = A(() => e.list ?? []), c = A(() => !e.disabled);
    s.value === -1 && (s.value = ((X = d.value) == null ? void 0 : X.findIndex((n) => e.rowKey(n) === T.value)) ?? 0);
    const p = a, v = P({
      before: [],
      after: [],
      appendCount: 0
    }), x = A(() => {
      const n = d.value ?? [];
      return [...v.value.before, ...n, ...v.value.after];
    }), _ = A(() => r.value % 2 === 0);
    function k() {
      r.value = s.value;
    }
    k();
    function S(n) {
      return oe(() => {
        let t = r.value + n;
        t < 0 ? t = x.value.length - 1 : t >= x.value.length && (t = 0), U(x.value[t], t);
      }, e.offsetAnimationTime);
    }
    const I = S(-1), M = S(1), h = q([]), m = q(), B = q(), L = P(0);
    ge(() => e.list, () => {
      o(), Y(E);
    }, {
      deep: 1
    }), Z(E);
    function E() {
      if (!g.value) return;
      const { maxAppendCount: n } = g.value, t = n;
      if (t === 0) return;
      if (v.value.appendCount = t, k(), r.value += t, e.disabled) {
        v.value.before = [], v.value.after = [];
        return;
      }
      const i = d.value ?? [];
      v.value.before = i.slice(-t).map(O), v.value.after = i.slice(0, t).map(O);
    }
    function O(n, t) {
      return {
        ...n,
        value: e.rowKey(n) + "_clone_" + t + "_" + Date.now()
      };
    }
    function o() {
      L.value++;
    }
    function b() {
      if (!window.ResizeObserver || !m.value) return;
      new ResizeObserver(se(() => {
        o(), E();
      }, e.offsetAnimationTime)).observe(m.value);
    }
    Z(b);
    const g = A(() => {
      var G;
      if (L.value++, !m.value || !h.value || !B.value) return;
      const { width: n } = m.value.getBoundingClientRect(), t = {
        normal: 0,
        active: 0
      };
      for (let K = 0; K <= h.value.length; K++) {
        const w = h.value[K];
        if ((G = w == null ? void 0 : w.classList) != null && G.contains("active") ? t.active = w.offsetWidth : t.normal = w == null ? void 0 : w.offsetWidth, t.active && t.normal)
          break;
      }
      const i = t.normal, u = t.active, f = n / i, y = f, ce = e.disabled ? 0 : Math.ceil(f), de = B.value.offsetWidth;
      return {
        normalButtonWidth: i,
        maxButtonCount: y,
        carouselWidth: de,
        maxAppendCount: ce,
        offset: u / 2
        // 加上选中的按钮宽度一半, 让选中的按钮在中心点
      };
    }), N = A(() => {
      if (g.value) {
        const { normalButtonWidth: n, maxButtonCount: t, offset: i, carouselWidth: u } = g.value, f = t / 2;
        let y = (n * (r.value - f) + i) * -1;
        return y >= 0 ? y = 0 : y <= -u + n * t && (y = -u + n * t), y;
      }
      return 0;
    });
    function ue(n) {
      window.requestAnimationFrame ? window.requestAnimationFrame(n) : n();
    }
    function fe(n, t = !0) {
      ue(() => {
        t ? Y(setTimeout.bind(null, n, e.offsetAnimationTime)) : setTimeout(n, e.offsetAnimationTime);
      });
    }
    function V(n) {
      fe(() => {
        l.value = !1, r.value = n;
      }, !1);
    }
    const U = oe((n, t) => {
      if (e.disabled) return;
      l.value || (l.value = !0);
      const i = v.value.appendCount;
      let u = t - i;
      if (s.value == u) return;
      r.value = t, u < 0 ? (V(d.value.length + u + i), u = d.value.length - 1) : u >= d.value.length && (V(i), u = 0), s.value = u;
      const f = d.value[u];
      T.value = f == null ? void 0 : f.value;
      const y = {
        index: u,
        label: f == null ? void 0 : f.label,
        value: f == null ? void 0 : f.value,
        data: f
      };
      p("change", y);
    }, e.offsetAnimationTime);
    return (n, t) => (j(), R("div", Ye, [
      C("div", Ze, [
        c.value ? (j(), R("div", {
          key: 0,
          class: "lc-carouse-box__wrapper__arrow arrow--left",
          onClick: t[0] || (t[0] = //@ts-ignore
          (...i) => W(I) && W(I)(...i))
        }, t[2] || (t[2] = [
          C(
            "img",
            {
              class: "lc-carouse-box__wrapper__arrow--image",
              src: he,
              draggable: "false",
              alt: ""
            },
            null,
            -1
            /* HOISTED */
          )
        ]))) : z("v-if", !0),
        C(
          "div",
          {
            class: "lc-carouse-box__wrapper__tabs",
            ref_key: "tabButtonParentElRef",
            ref: m
          },
          [
            C(
              "div",
              {
                class: ee(["lc-carouse-box__wrapper__tabs--train", { "is-transition": l.value }]),
                style: pe({ "--carousel-offset": `translateX(${N.value}px)` }),
                ref_key: "carouselTrainElRef",
                ref: B
              },
              [
                (j(!0), R(
                  ye,
                  null,
                  Te(x.value, (i, u) => (j(), R("button", {
                    class: ee(["lc-carouse-box__wrapper__tabs--train__button", { active: r.value === u, "is-even": _.value }]),
                    key: n.rowKey(i),
                    onClick: (f) => W(U)(i, u),
                    ref_for: !0,
                    ref_key: "tabButtonRef",
                    ref: h
                  }, [
                    te(n.$slots, "default", _e({ ref_for: !0 }, { record: i, isActive: r.value === u, isEven: _.value, isTransition: l.value, index: u }), () => [
                      C("div", {
                        class: "lc-carouse-box__wrapper__tabs--train__button--text",
                        title: i.label
                      }, xe(i.label), 9, tt)
                    ], !0)
                  ], 10, et))),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ],
              6
              /* CLASS, STYLE */
            )
          ],
          512
          /* NEED_PATCH */
        ),
        c.value ? (j(), R("div", {
          key: 1,
          class: "lc-carouse-box__wrapper__arrow arrow--right",
          onClick: t[1] || (t[1] = //@ts-ignore
          (...i) => W(M) && W(M)(...i))
        }, t[3] || (t[3] = [
          C(
            "img",
            {
              class: "lc-carouse-box__wrapper__arrow--image",
              src: we,
              draggable: "false",
              alt: ""
            },
            null,
            -1
            /* HOISTED */
          )
        ]))) : z("v-if", !0)
      ]),
      n.showTrack ? (j(), R("div", nt, [
        te(n.$slots, "track", {}, () => [
          t[4] || (t[4] = C(
            "img",
            {
              class: "lc-carouse-box__track__image--pointer",
              src: Ce,
              draggable: "false",
              alt: ""
            },
            null,
            -1
            /* HOISTED */
          ))
        ], !0)
      ])) : z("v-if", !0)
    ]));
  }
}), at = (e, a) => {
  const r = e.__vccOpts || e;
  for (const [l, s] of a)
    r[l] = s;
  return r;
}, ut = /* @__PURE__ */ at(rt, [["__scopeId", "data-v-3bf1662e"]]);
export {
  ut as LcCarouseBox,
  Qe as LcCarouseBoxProps
};
