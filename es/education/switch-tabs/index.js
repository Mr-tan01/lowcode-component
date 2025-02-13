// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { defineComponent as ce, mergeModels as G, mergeDefaults as fe, useCssVars as de, ref as M, useModel as J, computed as R, shallowRef as D, watch as ve, nextTick as Q, onMounted as Y, openBlock as K, createElementBlock as q, createElementVNode as g, unref as A, normalizeClass as Z, normalizeStyle as me, Fragment as be, renderList as ge, toDisplayString as pe } from "vue";
import { _ as he } from "./assets/lt-arrow-DiWswSiL.js";
import { _ as _e } from "./assets/rt-arrow-CQwSTGHi.js";
import { _ as Te } from "./assets/top-arrow-bBxwU0FN.js";
const ye = [
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
];
function F(e) {
  var a = typeof e;
  return e != null && (a == "object" || a == "function");
}
var we = typeof global == "object" && global && global.Object === Object && global, xe = typeof self == "object" && self && self.Object === Object && self, re = we || xe || Function("return this")(), z = function() {
  return re.Date.now();
}, Ce = /\s/;
function Se(e) {
  for (var a = e.length; a-- && Ce.test(e.charAt(a)); )
    ;
  return a;
}
var ke = /^\s+/;
function Oe(e) {
  return e && e.slice(0, Se(e) + 1).replace(ke, "");
}
var N = re.Symbol, ie = Object.prototype, je = ie.hasOwnProperty, Be = ie.toString, E = N ? N.toStringTag : void 0;
function Re(e) {
  var a = je.call(e, E), n = e[E];
  try {
    e[E] = void 0;
    var s = !0;
  } catch {
  }
  var u = Be.call(e);
  return s && (a ? e[E] = n : delete e[E]), u;
}
var Ae = Object.prototype, Ee = Ae.toString;
function We(e) {
  return Ee.call(e);
}
var Ie = "[object Null]", $e = "[object Undefined]", ee = N ? N.toStringTag : void 0;
function Le(e) {
  return e == null ? e === void 0 ? $e : Ie : ee && ee in Object(e) ? Re(e) : We(e);
}
function Me(e) {
  return e != null && typeof e == "object";
}
var Fe = "[object Symbol]";
function Ne(e) {
  return typeof e == "symbol" || Me(e) && Le(e) == Fe;
}
var te = NaN, Pe = /^[-+]0x[0-9a-f]+$/i, De = /^0b[01]+$/i, Ke = /^0o[0-7]+$/i, qe = parseInt;
function ne(e) {
  if (typeof e == "number")
    return e;
  if (Ne(e))
    return te;
  if (F(e)) {
    var a = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = F(a) ? a + "" : a;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Oe(e);
  var n = De.test(e);
  return n || Ke.test(e) ? qe(e.slice(2), n ? 2 : 8) : Pe.test(e) ? te : +e;
}
var ze = "Expected a function", He = Math.max, Ve = Math.min;
function le(e, a, n) {
  var s, u, h, f, d, v, b = 0, W = !1, _ = !1, C = !0;
  if (typeof e != "function")
    throw new TypeError(ze);
  a = ne(a) || 0, F(n) && (W = !!n.leading, _ = "maxWait" in n, h = _ ? He(ne(n.maxWait) || 0, a) : h, C = "trailing" in n ? !!n.trailing : C);
  function S(i) {
    var m = s, w = u;
    return s = u = void 0, b = i, f = e.apply(w, m), f;
  }
  function I(i) {
    return b = i, d = setTimeout(y, a), W ? S(i) : f;
  }
  function k(i) {
    var m = i - v, w = i - b, L = a - m;
    return _ ? Ve(L, h - w) : L;
  }
  function T(i) {
    var m = i - v, w = i - b;
    return v === void 0 || m >= a || m < 0 || _ && w >= h;
  }
  function y() {
    var i = z();
    if (T(i))
      return j(i);
    d = setTimeout(y, k(i));
  }
  function j(i) {
    return d = void 0, C && s ? S(i) : (s = u = void 0, f);
  }
  function B() {
    d !== void 0 && clearTimeout(d), b = 0, s = v = u = d = void 0;
  }
  function $() {
    return d === void 0 ? f : j(z());
  }
  function O() {
    var i = z(), m = T(i);
    if (s = arguments, u = this, v = i, m) {
      if (d === void 0)
        return I(v);
      if (_)
        return clearTimeout(d), d = setTimeout(y, a), S(v);
    }
    return d === void 0 && (d = setTimeout(y, a)), f;
  }
  return O.cancel = B, O.flush = $, O;
}
var Ue = "Expected a function";
function ae(e, a, n) {
  var s = !0, u = !0;
  if (typeof e != "function")
    throw new TypeError(Ue);
  return F(n) && (s = "leading" in n ? !!n.leading : s, u = "trailing" in n ? !!n.trailing : u), le(e, a, {
    leading: s,
    maxWait: a,
    trailing: u
  });
}
const Xe = { class: "lc-switch-tabs" }, Ge = { class: "lc-switch-tabs__wrapper" }, Je = ["onClick"], Qe = ["title"], Ye = /* @__PURE__ */ ce({
  __name: "switch-tabs",
  props: /* @__PURE__ */ G(/* @__PURE__ */ fe({
    list: {
      type: Array,
      required: !1
    },
    offsetAnimationTime: {
      type: Number
    },
    rowKey: {
      type: Function,
      required: !1
    }
  }, {
    offsetAnimationTime: 250,
    rowKey: (e) => e.value,
    __skip_rowKey: !0
  }), {
    index: { default: -1 },
    indexModifiers: {},
    value: { default: "" },
    valueModifiers: {}
  }),
  emits: /* @__PURE__ */ G(["change"], ["update:index", "update:value"]),
  setup(e, { emit: a }) {
    var U;
    de((r) => ({
      "6c1aa647": e.offsetAnimationTime
    }));
    const n = M(0), s = M(!0), u = J(e, "index"), h = J(e, "value"), f = R(() => e.list === void 0 ? ye : e.list);
    u.value === -1 && (u.value = ((U = f.value) == null ? void 0 : U.findIndex((r) => e.rowKey(r) === h.value)) ?? 0);
    const d = a, v = M({
      before: [],
      after: [],
      appendCount: 0
    }), b = R(() => {
      const r = f.value ?? [];
      return [...v.value.before, ...r, ...v.value.after];
    }), W = R(() => n.value % 2 === 0);
    function _() {
      n.value = u.value;
    }
    _();
    function C(r) {
      return ae(() => {
        let t = n.value + r;
        t < 0 ? t = b.value.length - 1 : t >= b.value.length && (t = 0), V(b.value[t], t);
      }, e.offsetAnimationTime);
    }
    const S = C(-1), I = C(1), k = D([]), T = D(), y = D(), j = M(0);
    ve(() => e.list, () => {
      O(), Q(B);
    }, {
      deep: 1
    }), Y(B);
    function B() {
      var o;
      if (!m.value) return;
      const { maxButtonCountCeil: r } = m.value, t = r;
      if (t === 0 || ((o = f.value) == null ? void 0 : o.length) < t) return;
      v.value.appendCount = t, _(), n.value += t;
      const l = f.value ?? [];
      v.value.before = l.slice(-t).map($), v.value.after = l.slice(0, t).map($);
    }
    function $(r, t) {
      return {
        ...r,
        value: e.rowKey(r) + "_clone_" + t + "_" + Date.now()
      };
    }
    function O() {
      j.value++;
    }
    function i() {
      if (!window.ResizeObserver || !T.value) return;
      new ResizeObserver(le(() => {
        O(), B();
      }, e.offsetAnimationTime)).observe(T.value);
    }
    Y(i);
    const m = R(() => {
      var X;
      if (j.value++, !T.value || !k.value || !y.value) return;
      const { width: r } = T.value.getBoundingClientRect(), t = {
        normal: 0,
        active: 0
      };
      for (let P = 0; P <= k.value.length; P++) {
        const x = k.value[P];
        if ((X = x == null ? void 0 : x.classList) != null && X.contains("active") ? t.active = x.offsetWidth : t.normal = x == null ? void 0 : x.offsetWidth, t.active && t.normal)
          break;
      }
      const l = t.normal, o = t.active, c = r / l, p = c, se = Math.ceil(c), ue = y.value.offsetWidth;
      return {
        normalButtonWidth: l,
        maxButtonCount: p,
        carouselWidth: ue,
        maxButtonCountCeil: se,
        offset: o / 2
        // 加上选中的按钮宽度一半, 让选中的按钮在中心点
      };
    }), w = R(() => {
      if (m.value) {
        const { normalButtonWidth: r, maxButtonCount: t, offset: l, carouselWidth: o } = m.value, c = t / 2;
        let p = (r * (n.value - c) + l) * -1;
        return p >= 0 ? p = 0 : p <= -o + r * t && (p = -o + r * t), p;
      }
      return 0;
    });
    function L(r) {
      window.requestAnimationFrame ? window.requestAnimationFrame(r) : r();
    }
    function oe(r, t = !0) {
      L(() => {
        t ? Q(setTimeout.bind(null, r, e.offsetAnimationTime)) : setTimeout(r, e.offsetAnimationTime);
      });
    }
    function H(r) {
      oe(() => {
        s.value = !1, n.value = r;
      }, !1);
    }
    const V = ae((r, t) => {
      s.value || (s.value = !0);
      const l = v.value.appendCount;
      let o = t - l;
      if (u.value == o) return;
      n.value = t, o < 0 ? (H(f.value.length + o + l), o = f.value.length - 1) : o >= f.value.length && (H(l), o = 0), u.value = o;
      const c = f.value[o];
      h.value = c == null ? void 0 : c.value;
      const p = {
        index: o,
        label: c == null ? void 0 : c.label,
        value: c == null ? void 0 : c.value,
        data: c
      };
      d("change", p);
    }, e.offsetAnimationTime);
    return (r, t) => (K(), q("div", Xe, [
      g("div", Ge, [
        g("div", {
          class: "lc-switch-tabs__wrapper__arrow arrow--left",
          onClick: t[0] || (t[0] = //@ts-ignore
          (...l) => A(S) && A(S)(...l))
        }, t[2] || (t[2] = [
          g(
            "img",
            {
              class: "lc-switch-tabs__wrapper__arrow--image",
              src: he,
              draggable: "false",
              alt: ""
            },
            null,
            -1
            /* HOISTED */
          )
        ])),
        g(
          "div",
          {
            class: "lc-switch-tabs__wrapper__tabs",
            ref_key: "tabButtonParentElRef",
            ref: T
          },
          [
            g(
              "div",
              {
                class: Z(["lc-switch-tabs__wrapper__tabs--train", { "is-transition": s.value }]),
                style: me({ "--carousel-offset": `translateX(${w.value}px)` }),
                ref_key: "carouselTrainElRef",
                ref: y
              },
              [
                (K(!0), q(
                  be,
                  null,
                  ge(b.value, (l, o) => (K(), q("button", {
                    class: Z(["lc-switch-tabs__wrapper__tabs--train__button", { active: n.value === o, "is-even": W.value }]),
                    key: e.rowKey(l),
                    onClick: (c) => A(V)(l, o),
                    ref_for: !0,
                    ref_key: "tabButtonRef",
                    ref: k
                  }, [
                    g("div", {
                      class: "lc-switch-tabs__wrapper__tabs--train__button--text",
                      title: l.label
                    }, pe(l.label), 9, Qe)
                  ], 10, Je))),
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
        g("div", {
          class: "lc-switch-tabs__wrapper__arrow arrow--right",
          onClick: t[1] || (t[1] = //@ts-ignore
          (...l) => A(I) && A(I)(...l))
        }, t[3] || (t[3] = [
          g(
            "img",
            {
              class: "lc-switch-tabs__wrapper__arrow--image",
              src: _e,
              draggable: "false",
              alt: ""
            },
            null,
            -1
            /* HOISTED */
          )
        ]))
      ]),
      t[4] || (t[4] = g(
        "div",
        { class: "lc-switch-tabs__track" },
        [
          g("img", {
            class: "lc-switch-tabs__track__image--pointer",
            src: Te,
            draggable: "false",
            alt: ""
          })
        ],
        -1
        /* HOISTED */
      ))
    ]));
  }
}), Ze = (e, a) => {
  const n = e.__vccOpts || e;
  for (const [s, u] of a)
    n[s] = u;
  return n;
}, rt = /* @__PURE__ */ Ze(Ye, [["__scopeId", "data-v-bc383042"]]);
export {
  rt as LcSwitchTabs
};
