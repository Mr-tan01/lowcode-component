// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { defineComponent as oe, mergeModels as Q, mergeDefaults as _e, useCssVars as ye, ref as K, useModel as Y, computed as k, shallowRef as q, watch as Te, nextTick as Z, onMounted as ee, openBlock as S, createElementBlock as A, createElementVNode as T, unref as E, createCommentVNode as V, normalizeClass as H, normalizeStyle as he, Fragment as we, renderList as xe, renderSlot as te, mergeProps as le, toDisplayString as se, createVNode as Ce, withCtx as ke } from "vue";
import { _ as Se } from "./assets/lt-arrow-DiWswSiL.js";
import { _ as Ae } from "./assets/rt-arrow-CQwSTGHi.js";
import { _ as Oe } from "./assets/top-arrow-bBxwU0FN.js";
function F(e) {
  var r = typeof e;
  return e != null && (r == "object" || r == "function");
}
var je = typeof global == "object" && global && global.Object === Object && global, Be = typeof self == "object" && self && self.Object === Object && self, ue = je || Be || Function("return this")(), z = function() {
  return ue.Date.now();
}, Re = /\s/;
function Ee(e) {
  for (var r = e.length; r-- && Re.test(e.charAt(r)); )
    ;
  return r;
}
var $e = /^\s+/;
function We(e) {
  return e && e.slice(0, Ee(e) + 1).replace($e, "");
}
var P = ue.Symbol, ce = Object.prototype, Ie = ce.hasOwnProperty, Le = ce.toString, W = P ? P.toStringTag : void 0;
function Me(e) {
  var r = Ie.call(e, W), n = e[W];
  try {
    e[W] = void 0;
    var o = !0;
  } catch {
  }
  var l = Le.call(e);
  return o && (r ? e[W] = n : delete e[W]), l;
}
var Ne = Object.prototype, Ke = Ne.toString;
function Fe(e) {
  return Ke.call(e);
}
var Pe = "[object Null]", De = "[object Undefined]", ne = P ? P.toStringTag : void 0;
function qe(e) {
  return e == null ? e === void 0 ? De : Pe : ne && ne in Object(e) ? Me(e) : Fe(e);
}
function Ve(e) {
  return e != null && typeof e == "object";
}
var ze = "[object Symbol]";
function He(e) {
  return typeof e == "symbol" || Ve(e) && qe(e) == ze;
}
var ae = NaN, Ue = /^[-+]0x[0-9a-f]+$/i, Xe = /^0b[01]+$/i, Ge = /^0o[0-7]+$/i, Je = parseInt;
function re(e) {
  if (typeof e == "number")
    return e;
  if (He(e))
    return ae;
  if (F(e)) {
    var r = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = F(r) ? r + "" : r;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = We(e);
  var n = Xe.test(e);
  return n || Ge.test(e) ? Je(e.slice(2), n ? 2 : 8) : Ue.test(e) ? ae : +e;
}
var Qe = "Expected a function", Ye = Math.max, Ze = Math.min;
function fe(e, r, n) {
  var o, l, m, c, d, _, v = 0, w = !1, h = !1, O = !0;
  if (typeof e != "function")
    throw new TypeError(Qe);
  r = re(r) || 0, F(n) && (w = !!n.leading, h = "maxWait" in n, m = h ? Ye(re(n.maxWait) || 0, r) : m, O = "trailing" in n ? !!n.trailing : O);
  function j(i) {
    var g = o, p = l;
    return o = l = void 0, v = i, c = e.apply(p, g), c;
  }
  function I(i) {
    return v = i, d = setTimeout(b, r), w ? j(i) : c;
  }
  function L(i) {
    var g = i - _, p = i - v, N = r - g;
    return h ? Ze(N, m - p) : N;
  }
  function x(i) {
    var g = i - _, p = i - v;
    return _ === void 0 || g >= r || g < 0 || h && p >= m;
  }
  function b() {
    var i = z();
    if (x(i))
      return B(i);
    d = setTimeout(b, L(i));
  }
  function B(i) {
    return d = void 0, O && o ? j(i) : (o = l = void 0, c);
  }
  function M() {
    d !== void 0 && clearTimeout(d), v = 0, o = _ = l = d = void 0;
  }
  function $() {
    return d === void 0 ? c : B(z());
  }
  function R() {
    var i = z(), g = x(i);
    if (o = arguments, l = this, _ = i, g) {
      if (d === void 0)
        return I(_);
      if (h)
        return clearTimeout(d), d = setTimeout(b, r), j(_);
    }
    return d === void 0 && (d = setTimeout(b, r)), c;
  }
  return R.cancel = M, R.flush = $, R;
}
var et = "Expected a function";
function ie(e, r, n) {
  var o = !0, l = !0;
  if (typeof e != "function")
    throw new TypeError(et);
  return F(n) && (o = "leading" in n ? !!n.leading : o, l = "trailing" in n ? !!n.trailing : l), fe(e, r, {
    leading: o,
    maxWait: r,
    trailing: l
  });
}
const de = {
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
}, tt = { class: "lc-carouse-box" }, nt = { class: "lc-carouse-box__wrapper" }, at = ["onClick"], rt = ["title"], it = {
  key: 0,
  class: "lc-carouse-box__track"
}, ot = /* @__PURE__ */ oe({
  __name: "carouseBox",
  props: /* @__PURE__ */ Q(/* @__PURE__ */ _e(de, {
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
  emits: /* @__PURE__ */ Q(["change"], ["update:index", "update:value"]),
  setup(e, { emit: r }) {
    var G;
    ye((a) => ({
      "24ca7a73": a.gap,
      "67b6a43b": a.offsetAnimationTime
    }));
    const n = K(0), o = K(!0), l = Y(e, "index"), m = Y(e, "value"), c = k(() => e.list ?? []), d = k(() => !e.disabled);
    l.value === -1 && (l.value = ((G = c.value) == null ? void 0 : G.findIndex((a) => e.rowKey(a) === m.value)) ?? 0);
    const _ = r, v = K({
      before: [],
      after: [],
      appendCount: 0
    }), w = k(() => {
      const a = c.value ?? [];
      return [...v.value.before, ...a, ...v.value.after];
    }), h = k(() => n.value % 2 === 0);
    function O() {
      n.value = l.value;
    }
    O();
    function j(a) {
      return ie(() => {
        let t = n.value + a;
        t < 0 ? t = w.value.length - 1 : t >= w.value.length && (t = 0), X(w.value[t], t);
      }, e.offsetAnimationTime);
    }
    const I = j(-1), L = j(1), x = q([]), b = q(), B = q(), M = K(0);
    Te(() => e.list, () => {
      i(), Z($);
    }, {
      deep: 1
    }), ee($);
    function $() {
      if (!p.value) return;
      const { maxAppendCount: a } = p.value, t = a;
      if (t === 0) return;
      if (v.value.appendCount = t, O(), n.value += t, e.disabled) {
        v.value.before = [], v.value.after = [];
        return;
      }
      const s = c.value ?? [];
      v.value.before = s.slice(-t).map(R), v.value.after = s.slice(0, t).map(R);
    }
    function R(a, t) {
      return {
        ...a,
        value: e.rowKey(a) + "_clone_" + t + "_" + Date.now()
      };
    }
    function i() {
      M.value++;
    }
    function g() {
      if (!window.ResizeObserver || !b.value) return;
      new ResizeObserver(fe(() => {
        i(), $();
      }, e.offsetAnimationTime)).observe(b.value);
    }
    ee(g);
    const p = k(() => {
      var J;
      if (M.value++, !b.value || !x.value || !B.value) return;
      const { width: a } = b.value.getBoundingClientRect(), t = {
        normal: 0,
        active: 0
      };
      for (let D = 0; D <= x.value.length; D++) {
        const C = x.value[D];
        if ((J = C == null ? void 0 : C.classList) != null && J.contains("active") ? t.active = C.offsetWidth : t.normal = C == null ? void 0 : C.offsetWidth, t.active && t.normal)
          break;
      }
      const s = t.normal, u = t.active, f = a / s, y = f, ge = e.disabled ? 0 : Math.ceil(f), pe = B.value.offsetWidth;
      return {
        normalButtonWidth: s,
        maxButtonCount: y,
        carouselWidth: pe,
        maxAppendCount: ge,
        offset: u / 2
        // 加上选中的按钮宽度一半, 让选中的按钮在中心点
      };
    }), N = k(() => {
      if (p.value) {
        const { normalButtonWidth: a, maxButtonCount: t, offset: s, carouselWidth: u } = p.value, f = t / 2;
        let y = (a * (n.value - f) + s) * -1;
        return y >= 0 ? y = 0 : y <= -u + a * t && (y = -u + a * t), y;
      }
      return 0;
    });
    function me(a) {
      window.requestAnimationFrame ? window.requestAnimationFrame(a) : a();
    }
    function be(a, t = !0) {
      me(() => {
        t ? Z(setTimeout.bind(null, a, e.offsetAnimationTime)) : setTimeout(a, e.offsetAnimationTime);
      });
    }
    function U(a) {
      be(() => {
        o.value = !1, n.value = a;
      }, !1);
    }
    const X = ie((a, t) => {
      if (e.disabled) return;
      o.value || (o.value = !0);
      const s = v.value.appendCount;
      let u = t - s;
      if (l.value == u) return;
      n.value = t, u < 0 ? (U(c.value.length + u + s), u = c.value.length - 1) : u >= c.value.length && (U(s), u = 0), l.value = u;
      const f = c.value[u];
      m.value = f == null ? void 0 : f.value;
      const y = {
        index: u,
        label: f == null ? void 0 : f.label,
        value: f == null ? void 0 : f.value,
        data: f
      };
      _("change", y);
    }, e.offsetAnimationTime);
    return (a, t) => (S(), A("div", tt, [
      T("div", nt, [
        d.value ? (S(), A("div", {
          key: 0,
          class: "lc-carouse-box__wrapper__arrow arrow--left",
          onClick: t[0] || (t[0] = //@ts-ignore
          (...s) => E(I) && E(I)(...s))
        }, t[2] || (t[2] = [
          T(
            "img",
            {
              class: "lc-carouse-box__wrapper__arrow--image",
              src: Se,
              draggable: "false",
              alt: ""
            },
            null,
            -1
            /* HOISTED */
          )
        ]))) : V("v-if", !0),
        T(
          "div",
          {
            class: "lc-carouse-box__wrapper__tabs",
            ref_key: "tabButtonParentElRef",
            ref: b
          },
          [
            T(
              "div",
              {
                class: H(["lc-carouse-box__wrapper__tabs--train", { "is-transition": o.value }]),
                style: he({ "--carousel-offset": `translateX(${N.value}px)` }),
                ref_key: "carouselTrainElRef",
                ref: B
              },
              [
                (S(!0), A(
                  we,
                  null,
                  xe(w.value, (s, u) => (S(), A("button", {
                    class: H(["lc-carouse-box__wrapper__tabs--train__button", { active: n.value === u, "is-even": h.value }]),
                    key: a.rowKey(s),
                    onClick: (f) => E(X)(s, u),
                    ref_for: !0,
                    ref_key: "tabButtonRef",
                    ref: x
                  }, [
                    te(a.$slots, "default", le({ ref_for: !0 }, { record: s, isActive: n.value === u, isEven: h.value, isTransition: o.value, index: u }), () => [
                      T("div", {
                        class: "lc-carouse-box__wrapper__tabs--train__button--text",
                        title: s.label
                      }, se(s.label), 9, rt)
                    ], !0)
                  ], 10, at))),
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
        d.value ? (S(), A("div", {
          key: 1,
          class: "lc-carouse-box__wrapper__arrow arrow--right",
          onClick: t[1] || (t[1] = //@ts-ignore
          (...s) => E(L) && E(L)(...s))
        }, t[3] || (t[3] = [
          T(
            "img",
            {
              class: "lc-carouse-box__wrapper__arrow--image",
              src: Ae,
              draggable: "false",
              alt: ""
            },
            null,
            -1
            /* HOISTED */
          )
        ]))) : V("v-if", !0)
      ]),
      a.showTrack ? (S(), A("div", it, [
        te(a.$slots, "track", {}, () => [
          t[4] || (t[4] = T(
            "img",
            {
              class: "lc-carouse-box__track__image--pointer",
              src: Oe,
              draggable: "false",
              alt: ""
            },
            null,
            -1
            /* HOISTED */
          ))
        ], !0)
      ])) : V("v-if", !0)
    ]));
  }
}), ve = (e, r) => {
  const n = e.__vccOpts || e;
  for (const [o, l] of r)
    n[o] = l;
  return n;
}, lt = /* @__PURE__ */ ve(ot, [["__scopeId", "data-v-3bf1662e"]]), st = [
  {
    label: "龙华区",
    value: "龙华区"
  },
  {
    label: "南山区",
    value: "南山区"
  },
  {
    label: "宝安区",
    value: "宝安区"
  },
  {
    label: "福田区",
    value: "福田区"
  },
  {
    label: "罗湖区",
    value: "罗湖区"
  },
  {
    label: "盐田区",
    value: "盐田区"
  },
  {
    label: "龙岗区",
    value: "龙岗区"
  },
  {
    label: "坪山区",
    value: "坪山区"
  },
  {
    label: "光明区",
    value: "光明区"
  },
  {
    label: "大鹏新区",
    value: "大鹏新区"
  },
  {
    label: "深汕特别合作区",
    value: "深汕特别合作区"
  }
], ut = { class: "lc-switch-tabs" }, ct = ["title"], ft = /* @__PURE__ */ oe({
  __name: "switch-tabs",
  props: de,
  setup(e) {
    const r = k(() => e.list ?? st);
    return (n, o) => (S(), A("div", ut, [
      Ce(E(lt), le({
        list: r.value,
        offsetAnimationTime: n.offsetAnimationTime,
        rowKey: n.rowKey
      }, n.$attrs), {
        default: ke(({ isActive: l, isEven: m, record: { label: c } }) => [
          T(
            "button",
            {
              class: H(["lc-switch-tabs__wrapper__tabs--train__button", { active: l, "is-even": m }])
            },
            [
              T("div", {
                class: "lc-switch-tabs__wrapper__tabs--train__button--text",
                title: c
              }, se(c), 9, ct)
            ],
            2
            /* CLASS */
          )
        ]),
        _: 1
        /* STABLE */
      }, 16, ["list", "offsetAnimationTime", "rowKey"])
    ]));
  }
}), gt = /* @__PURE__ */ ve(ft, [["__scopeId", "data-v-f146b1eb"]]);
export {
  gt as LcSwitchTabs
};
