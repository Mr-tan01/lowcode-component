// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { ref as T, readonly as Qt, watch as me, computed as M, onMounted as ye, onBeforeUnmount as Se, inject as oe, onActivated as Mo, onDeactivated as Oo, createTextVNode as Tt, Fragment as xe, Comment as un, defineComponent as q, provide as nt, getCurrentInstance as sr, withDirectives as Rt, toRef as we, h as O, Teleport as To, nextTick as Ro, renderSlot as Ct, isVNode as zo, shallowRef as Ao, watchEffect as ze, onBeforeMount as ur, mergeDefaults as zt, openBlock as ie, createElementBlock as ae, createElementVNode as z, renderList as cr, createVNode as We, unref as ve, toDisplayString as de, createCommentVNode as at, Transition as en, mergeProps as cn, vShow as Bo, cloneVNode as Io, Text as Do, withCtx as Et, normalizeClass as dr, useCssVars as Fo } from "vue";
import { merge as ht, round as ko, map as No } from "lodash-es";
import { p as Ho } from "./assets/person-BF5KlBgC.js";
const Pn = 1e4;
function je(e, t = 0) {
  const n = {
    value: e,
    decimal: null,
    result: e,
    unit: ""
  };
  let r = e;
  if (typeof r != "number" && (r = +e), Number.isNaN(r))
    return n;
  if (r < Pn)
    return n.value = r, n;
  n.unit = "万";
  const o = r / Pn, [i, a] = `${o}`.split("."), l = Number(i), s = a ? Number(a.substring(0, t)) : null;
  return n.value = l, n.decimal = s, s ? n.result = +`${l}.${s}` : n.result = Number(l), n;
}
function xt(e) {
  return e.composedPath()[0];
}
const Lo = {
  mousemoveoutside: /* @__PURE__ */ new WeakMap(),
  clickoutside: /* @__PURE__ */ new WeakMap()
};
function Wo(e, t, n) {
  if (e === "mousemoveoutside") {
    const r = (o) => {
      t.contains(xt(o)) || n(o);
    };
    return {
      mousemove: r,
      touchstart: r
    };
  } else if (e === "clickoutside") {
    let r = !1;
    const o = (a) => {
      r = !t.contains(xt(a));
    }, i = (a) => {
      r && (t.contains(xt(a)) || n(a));
    };
    return {
      mousedown: o,
      mouseup: i,
      touchstart: o,
      touchend: i
    };
  }
  return console.error(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    `[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`
  ), {};
}
function fr(e, t, n) {
  const r = Lo[e];
  let o = r.get(t);
  o === void 0 && r.set(t, o = /* @__PURE__ */ new WeakMap());
  let i = o.get(n);
  return i === void 0 && o.set(n, i = Wo(e, t, n)), i;
}
function jo(e, t, n, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const o = fr(e, t, n);
    return Object.keys(o).forEach((i) => {
      ee(i, document, o[i], r);
    }), !0;
  }
  return !1;
}
function Vo(e, t, n, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const o = fr(e, t, n);
    return Object.keys(o).forEach((i) => {
      Y(i, document, o[i], r);
    }), !0;
  }
  return !1;
}
function Uo() {
  if (typeof window > "u")
    return {
      on: () => {
      },
      off: () => {
      }
    };
  const e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
  function n() {
    e.set(this, !0);
  }
  function r() {
    e.set(this, !0), t.set(this, !0);
  }
  function o(f, v, _) {
    const x = f[v];
    return f[v] = function() {
      return _.apply(f, arguments), x.apply(f, arguments);
    }, f;
  }
  function i(f, v) {
    f[v] = Event.prototype[v];
  }
  const a = /* @__PURE__ */ new WeakMap(), l = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
  function s() {
    var f;
    return (f = a.get(this)) !== null && f !== void 0 ? f : null;
  }
  function d(f, v) {
    l !== void 0 && Object.defineProperty(f, "currentTarget", {
      configurable: !0,
      enumerable: !0,
      get: v ?? l.get
    });
  }
  const g = {
    bubble: {},
    capture: {}
  }, y = {};
  function h() {
    const f = function(v) {
      const { type: _, eventPhase: x, bubbles: A } = v, F = xt(v);
      if (x === 2)
        return;
      const H = x === 1 ? "capture" : "bubble";
      let L = F;
      const S = [];
      for (; L === null && (L = window), S.push(L), L !== window; )
        L = L.parentNode || null;
      const R = g.capture[_], W = g.bubble[_];
      if (o(v, "stopPropagation", n), o(v, "stopImmediatePropagation", r), d(v, s), H === "capture") {
        if (R === void 0)
          return;
        for (let G = S.length - 1; G >= 0 && !e.has(v); --G) {
          const Q = S[G], K = R.get(Q);
          if (K !== void 0) {
            a.set(v, Q);
            for (const fe of K) {
              if (t.has(v))
                break;
              fe(v);
            }
          }
          if (G === 0 && !A && W !== void 0) {
            const fe = W.get(Q);
            if (fe !== void 0)
              for (const ft of fe) {
                if (t.has(v))
                  break;
                ft(v);
              }
          }
        }
      } else if (H === "bubble") {
        if (W === void 0)
          return;
        for (let G = 0; G < S.length && !e.has(v); ++G) {
          const Q = S[G], K = W.get(Q);
          if (K !== void 0) {
            a.set(v, Q);
            for (const fe of K) {
              if (t.has(v))
                break;
              fe(v);
            }
          }
        }
      }
      i(v, "stopPropagation"), i(v, "stopImmediatePropagation"), d(v);
    };
    return f.displayName = "evtdUnifiedHandler", f;
  }
  function w() {
    const f = function(v) {
      const { type: _, eventPhase: x } = v;
      if (x !== 2)
        return;
      const A = y[_];
      A !== void 0 && A.forEach((F) => F(v));
    };
    return f.displayName = "evtdUnifiedWindowEventHandler", f;
  }
  const c = h(), b = w();
  function p(f, v) {
    const _ = g[f];
    return _[v] === void 0 && (_[v] = /* @__PURE__ */ new Map(), window.addEventListener(v, c, f === "capture")), _[v];
  }
  function u(f) {
    return y[f] === void 0 && (y[f] = /* @__PURE__ */ new Set(), window.addEventListener(f, b)), y[f];
  }
  function E(f, v) {
    let _ = f.get(v);
    return _ === void 0 && f.set(v, _ = /* @__PURE__ */ new Set()), _;
  }
  function B(f, v, _, x) {
    const A = g[v][_];
    if (A !== void 0) {
      const F = A.get(f);
      if (F !== void 0 && F.has(x))
        return !0;
    }
    return !1;
  }
  function D(f, v) {
    const _ = y[f];
    return !!(_ !== void 0 && _.has(v));
  }
  function V(f, v, _, x) {
    let A;
    if (typeof x == "object" && x.once === !0 ? A = (R) => {
      I(f, v, A, x), _(R);
    } : A = _, jo(f, v, A, x))
      return;
    const H = x === !0 || typeof x == "object" && x.capture === !0 ? "capture" : "bubble", L = p(H, f), S = E(L, v);
    if (S.has(A) || S.add(A), v === window) {
      const R = u(f);
      R.has(A) || R.add(A);
    }
  }
  function I(f, v, _, x) {
    if (Vo(f, v, _, x))
      return;
    const F = x === !0 || typeof x == "object" && x.capture === !0, H = F ? "capture" : "bubble", L = p(H, f), S = E(L, v);
    if (v === window && !B(v, F ? "bubble" : "capture", f, _) && D(f, _)) {
      const W = y[f];
      W.delete(_), W.size === 0 && (window.removeEventListener(f, b), y[f] = void 0);
    }
    S.has(_) && S.delete(_), S.size === 0 && L.delete(v), L.size === 0 && (window.removeEventListener(f, c, H === "capture"), g[H][f] = void 0);
  }
  return {
    on: V,
    off: I
  };
}
const { on: ee, off: Y } = Uo();
function Xo(e) {
  const t = T(!!e.value);
  if (t.value)
    return Qt(t);
  const n = me(e, (r) => {
    r && (t.value = !0, n());
  });
  return Qt(t);
}
function lt(e) {
  const t = M(e), n = T(t.value);
  return me(t, (r) => {
    n.value = r;
  }), typeof e == "function" ? n : {
    __v_isRef: !0,
    get value() {
      return n.value;
    },
    set value(r) {
      e.set(r);
    }
  };
}
const Yo = typeof window < "u";
let He, rt;
const Go = () => {
  var e, t;
  He = Yo ? (t = (e = document) === null || e === void 0 ? void 0 : e.fonts) === null || t === void 0 ? void 0 : t.ready : void 0, rt = !1, He !== void 0 ? He.then(() => {
    rt = !0;
  }) : rt = !0;
};
Go();
function Ko(e) {
  if (rt)
    return;
  let t = !1;
  ye(() => {
    rt || He == null || He.then(() => {
      t || e();
    });
  }), Se(() => {
    t = !0;
  });
}
function qo(e, t) {
  return me(e, (n) => {
    n !== void 0 && (t.value = n);
  }), M(() => e.value === void 0 ? t.value : e.value);
}
function hr() {
  const e = T(!1);
  return ye(() => {
    e.value = !0;
  }), Qt(e);
}
function Zo(e, t) {
  return M(() => {
    for (const n of t)
      if (e[n] !== void 0)
        return e[n];
    return e[t[t.length - 1]];
  });
}
const Jo = (typeof window > "u" ? !1 : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
!window.MSStream;
function Qo() {
  return Jo;
}
const ei = "n-internal-select-menu-body", pr = "n-drawer-body", mr = "n-modal-body", vr = "n-popover-body", br = "__disabled__";
function Ve(e) {
  const t = oe(mr, null), n = oe(pr, null), r = oe(vr, null), o = oe(ei, null), i = T();
  if (typeof document < "u") {
    i.value = document.fullscreenElement;
    const a = () => {
      i.value = document.fullscreenElement;
    };
    ye(() => {
      ee("fullscreenchange", document, a);
    }), Se(() => {
      Y("fullscreenchange", document, a);
    });
  }
  return lt(() => {
    var a;
    const {
      to: l
    } = e;
    return l !== void 0 ? l === !1 ? br : l === !0 ? i.value || "body" : l : t != null && t.value ? (a = t.value.$el) !== null && a !== void 0 ? a : t.value : n != null && n.value ? n.value : r != null && r.value ? r.value : o != null && o.value ? o.value : l ?? (i.value || "body");
  });
}
Ve.tdkey = br;
Ve.propTo = {
  type: [String, Object, Boolean],
  default: void 0
};
function ti(e) {
  const t = {
    isDeactivated: !1
  };
  let n = !1;
  return Mo(() => {
    if (t.isDeactivated = !1, !n) {
      n = !0;
      return;
    }
    e();
  }), Oo(() => {
    t.isDeactivated = !0, n || (n = !0);
  }), t;
}
let $t = [];
const gr = /* @__PURE__ */ new WeakMap();
function ni() {
  $t.forEach((e) => e(...gr.get(e))), $t = [];
}
function ri(e, ...t) {
  gr.set(e, t), !$t.includes(e) && $t.push(e) === 1 && requestAnimationFrame(ni);
}
function Pt(e) {
  return e.composedPath()[0] || null;
}
function Mn(e) {
  return typeof e == "string" ? e.endsWith("px") ? Number(e.slice(0, e.length - 2)) : Number(e) : e;
}
function et(e, t) {
  const n = e.trim().split(/\s+/g), r = {
    top: n[0]
  };
  switch (n.length) {
    case 1:
      r.right = n[0], r.bottom = n[0], r.left = n[0];
      break;
    case 2:
      r.right = n[1], r.left = n[1], r.bottom = n[0];
      break;
    case 3:
      r.right = n[1], r.bottom = n[2], r.left = n[1];
      break;
    case 4:
      r.right = n[1], r.bottom = n[2], r.left = n[3];
      break;
    default:
      throw new Error("[seemly/getMargin]:" + e + " is not a valid value.");
  }
  return r;
}
const On = {
  black: "#000",
  silver: "#C0C0C0",
  gray: "#808080",
  white: "#FFF",
  maroon: "#800000",
  red: "#F00",
  purple: "#800080",
  fuchsia: "#F0F",
  green: "#008000",
  lime: "#0F0",
  olive: "#808000",
  yellow: "#FF0",
  navy: "#000080",
  blue: "#00F",
  teal: "#008080",
  aqua: "#0FF",
  transparent: "#0000"
}, Xe = "^\\s*", Ye = "\\s*$", $e = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", Pe = "([0-9A-Fa-f])", Me = "([0-9A-Fa-f]{2})", oi = new RegExp(`${Xe}rgb\\s*\\(${$e},${$e},${$e}\\)${Ye}`), ii = new RegExp(`${Xe}rgba\\s*\\(${$e},${$e},${$e},${$e}\\)${Ye}`), ai = new RegExp(`${Xe}#${Pe}${Pe}${Pe}${Ye}`), li = new RegExp(`${Xe}#${Me}${Me}${Me}${Ye}`), si = new RegExp(`${Xe}#${Pe}${Pe}${Pe}${Pe}${Ye}`), ui = new RegExp(`${Xe}#${Me}${Me}${Me}${Me}${Ye}`);
function ne(e) {
  return parseInt(e, 16);
}
function Ue(e) {
  try {
    let t;
    if (t = li.exec(e))
      return [ne(t[1]), ne(t[2]), ne(t[3]), 1];
    if (t = oi.exec(e))
      return [J(t[1]), J(t[5]), J(t[9]), 1];
    if (t = ii.exec(e))
      return [
        J(t[1]),
        J(t[5]),
        J(t[9]),
        ot(t[13])
      ];
    if (t = ai.exec(e))
      return [
        ne(t[1] + t[1]),
        ne(t[2] + t[2]),
        ne(t[3] + t[3]),
        1
      ];
    if (t = ui.exec(e))
      return [
        ne(t[1]),
        ne(t[2]),
        ne(t[3]),
        ot(ne(t[4]) / 255)
      ];
    if (t = si.exec(e))
      return [
        ne(t[1] + t[1]),
        ne(t[2] + t[2]),
        ne(t[3] + t[3]),
        ot(ne(t[4] + t[4]) / 255)
      ];
    if (e in On)
      return Ue(On[e]);
    throw new Error(`[seemly/rgba]: Invalid color value ${e}.`);
  } catch (t) {
    throw t;
  }
}
function ci(e) {
  return e > 1 ? 1 : e < 0 ? 0 : e;
}
function di(e, t, n, r) {
  return `rgba(${J(e)}, ${J(t)}, ${J(n)}, ${ci(r)})`;
}
function Ht(e, t, n, r, o) {
  return J((e * t * (1 - r) + n * r) / o);
}
function wr(e, t) {
  Array.isArray(e) || (e = Ue(e)), Array.isArray(t) || (t = Ue(t));
  const n = e[3], r = t[3], o = ot(n + r - n * r);
  return di(Ht(e[0], n, t[0], r, o), Ht(e[1], n, t[1], r, o), Ht(e[2], n, t[2], r, o), o);
}
function pt(e, t) {
  const [n, r, o, i = 1] = Array.isArray(e) ? e : Ue(e), { lightness: a = 1, alpha: l = 1 } = t;
  return fi([n * a, r * a, o * a, i * l]);
}
function ot(e) {
  const t = Math.round(Number(e) * 100) / 100;
  return t > 1 ? 1 : t < 0 ? 0 : t;
}
function J(e) {
  const t = Math.round(Number(e));
  return t > 255 ? 255 : t < 0 ? 0 : t;
}
function fi(e) {
  const [t, n, r] = e;
  return 3 in e ? `rgba(${J(t)}, ${J(n)}, ${J(r)}, ${ot(e[3])})` : `rgba(${J(t)}, ${J(n)}, ${J(r)}, 1)`;
}
function hi(e = 8) {
  return Math.random().toString(16).slice(2, 2 + e);
}
function tn(e, t, n = "default") {
  const r = t[n];
  if (r === void 0)
    throw new Error(`[vueuc/${e}]: slot[${n}] is empty.`);
  return r();
}
function nn(e, t = !0, n = []) {
  return e.forEach((r) => {
    if (r !== null) {
      if (typeof r != "object") {
        (typeof r == "string" || typeof r == "number") && n.push(Tt(String(r)));
        return;
      }
      if (Array.isArray(r)) {
        nn(r, t, n);
        return;
      }
      if (r.type === xe) {
        if (r.children === null)
          return;
        Array.isArray(r.children) && nn(r.children, t, n);
      } else r.type !== un && n.push(r);
    }
  }), n;
}
function Tn(e, t, n = "default") {
  const r = t[n];
  if (r === void 0)
    throw new Error(`[vueuc/${e}]: slot[${n}] is empty.`);
  const o = nn(r());
  if (o.length === 1)
    return o[0];
  throw new Error(`[vueuc/${e}]: slot[${n}] should have exactly one child.`);
}
let ge = null;
function yr() {
  if (ge === null && (ge = document.getElementById("v-binder-view-measurer"), ge === null)) {
    ge = document.createElement("div"), ge.id = "v-binder-view-measurer";
    const { style: e } = ge;
    e.position = "fixed", e.left = "0", e.right = "0", e.top = "0", e.bottom = "0", e.pointerEvents = "none", e.visibility = "hidden", document.body.appendChild(ge);
  }
  return ge.getBoundingClientRect();
}
function pi(e, t) {
  const n = yr();
  return {
    top: t,
    left: e,
    height: 0,
    width: 0,
    right: n.width - e,
    bottom: n.height - t
  };
}
function Lt(e) {
  const t = e.getBoundingClientRect(), n = yr();
  return {
    left: t.left - n.left,
    top: t.top - n.top,
    bottom: n.height + n.top - t.bottom,
    right: n.width + n.left - t.right,
    width: t.width,
    height: t.height
  };
}
function mi(e) {
  return e.nodeType === 9 ? null : e.parentNode;
}
function Sr(e) {
  if (e === null)
    return null;
  const t = mi(e);
  if (t === null)
    return null;
  if (t.nodeType === 9)
    return document;
  if (t.nodeType === 1) {
    const { overflow: n, overflowX: r, overflowY: o } = getComputedStyle(t);
    if (/(auto|scroll|overlay)/.test(n + o + r))
      return t;
  }
  return Sr(t);
}
const vi = q({
  name: "Binder",
  props: {
    syncTargetWithParent: Boolean,
    syncTarget: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    var t;
    nt("VBinder", (t = sr()) === null || t === void 0 ? void 0 : t.proxy);
    const n = oe("VBinder", null), r = T(null), o = (u) => {
      r.value = u, n && e.syncTargetWithParent && n.setTargetRef(u);
    };
    let i = [];
    const a = () => {
      let u = r.value;
      for (; u = Sr(u), u !== null; )
        i.push(u);
      for (const E of i)
        ee("scroll", E, y, !0);
    }, l = () => {
      for (const u of i)
        Y("scroll", u, y, !0);
      i = [];
    }, s = /* @__PURE__ */ new Set(), d = (u) => {
      s.size === 0 && a(), s.has(u) || s.add(u);
    }, g = (u) => {
      s.has(u) && s.delete(u), s.size === 0 && l();
    }, y = () => {
      ri(h);
    }, h = () => {
      s.forEach((u) => u());
    }, w = /* @__PURE__ */ new Set(), c = (u) => {
      w.size === 0 && ee("resize", window, p), w.has(u) || w.add(u);
    }, b = (u) => {
      w.has(u) && w.delete(u), w.size === 0 && Y("resize", window, p);
    }, p = () => {
      w.forEach((u) => u());
    };
    return Se(() => {
      Y("resize", window, p), l();
    }), {
      targetRef: r,
      setTargetRef: o,
      addScrollListener: d,
      removeScrollListener: g,
      addResizeListener: c,
      removeResizeListener: b
    };
  },
  render() {
    return tn("binder", this.$slots);
  }
}), bi = q({
  name: "Target",
  setup() {
    const { setTargetRef: e, syncTarget: t } = oe("VBinder");
    return {
      syncTarget: t,
      setTargetDirective: {
        mounted: e,
        updated: e
      }
    };
  },
  render() {
    const { syncTarget: e, setTargetDirective: t } = this;
    return e ? Rt(Tn("follower", this.$slots), [
      [t]
    ]) : Tn("follower", this.$slots);
  }
}), Fe = "@@mmoContext", gi = {
  mounted(e, { value: t }) {
    e[Fe] = {
      handler: void 0
    }, typeof t == "function" && (e[Fe].handler = t, ee("mousemoveoutside", e, t));
  },
  updated(e, { value: t }) {
    const n = e[Fe];
    typeof t == "function" ? n.handler ? n.handler !== t && (Y("mousemoveoutside", e, n.handler), n.handler = t, ee("mousemoveoutside", e, t)) : (e[Fe].handler = t, ee("mousemoveoutside", e, t)) : n.handler && (Y("mousemoveoutside", e, n.handler), n.handler = void 0);
  },
  unmounted(e) {
    const { handler: t } = e[Fe];
    t && Y("mousemoveoutside", e, t), e[Fe].handler = void 0;
  }
}, ke = "@@coContext", Rn = {
  mounted(e, { value: t, modifiers: n }) {
    e[ke] = {
      handler: void 0
    }, typeof t == "function" && (e[ke].handler = t, ee("clickoutside", e, t, {
      capture: n.capture
    }));
  },
  updated(e, { value: t, modifiers: n }) {
    const r = e[ke];
    typeof t == "function" ? r.handler ? r.handler !== t && (Y("clickoutside", e, r.handler, {
      capture: n.capture
    }), r.handler = t, ee("clickoutside", e, t, {
      capture: n.capture
    })) : (e[ke].handler = t, ee("clickoutside", e, t, {
      capture: n.capture
    })) : r.handler && (Y("clickoutside", e, r.handler, {
      capture: n.capture
    }), r.handler = void 0);
  },
  unmounted(e, { modifiers: t }) {
    const { handler: n } = e[ke];
    n && Y("clickoutside", e, n, {
      capture: t.capture
    }), e[ke].handler = void 0;
  }
};
function wi(e, t) {
  console.error(`[vdirs/${e}]: ${t}`);
}
class yi {
  constructor() {
    this.elementZIndex = /* @__PURE__ */ new Map(), this.nextZIndex = 2e3;
  }
  get elementCount() {
    return this.elementZIndex.size;
  }
  ensureZIndex(t, n) {
    const { elementZIndex: r } = this;
    if (n !== void 0) {
      t.style.zIndex = `${n}`, r.delete(t);
      return;
    }
    const { nextZIndex: o } = this;
    r.has(t) && r.get(t) + 1 === this.nextZIndex || (t.style.zIndex = `${o}`, r.set(t, o), this.nextZIndex = o + 1, this.squashState());
  }
  unregister(t, n) {
    const { elementZIndex: r } = this;
    r.has(t) ? r.delete(t) : n === void 0 && wi("z-index-manager/unregister-element", "Element not found when unregistering."), this.squashState();
  }
  squashState() {
    const { elementCount: t } = this;
    t || (this.nextZIndex = 2e3), this.nextZIndex - t > 2500 && this.rearrange();
  }
  rearrange() {
    const t = Array.from(this.elementZIndex.entries());
    t.sort((n, r) => n[1] - r[1]), this.nextZIndex = 2e3, t.forEach((n) => {
      const r = n[0], o = this.nextZIndex++;
      `${o}` !== r.style.zIndex && (r.style.zIndex = `${o}`);
    });
  }
}
const Wt = new yi(), Ne = "@@ziContext", xr = {
  mounted(e, t) {
    const { value: n = {} } = t, { zIndex: r, enabled: o } = n;
    e[Ne] = {
      enabled: !!o,
      initialized: !1
    }, o && (Wt.ensureZIndex(e, r), e[Ne].initialized = !0);
  },
  updated(e, t) {
    const { value: n = {} } = t, { zIndex: r, enabled: o } = n, i = e[Ne].enabled;
    o && !i && (Wt.ensureZIndex(e, r), e[Ne].initialized = !0), e[Ne].enabled = !!o;
  },
  unmounted(e, t) {
    if (!e[Ne].initialized)
      return;
    const { value: n = {} } = t, { zIndex: r } = n;
    Wt.unregister(e, r);
  }
}, Si = "@css-render/vue3-ssr";
function xi(e, t) {
  return `<style cssr-id="${e}">
${t}
</style>`;
}
function _i(e, t, n) {
  const { styles: r, ids: o } = n;
  o.has(e) || r !== null && (o.add(e), r.push(xi(e, t)));
}
const Ci = typeof document < "u";
function At() {
  if (Ci)
    return;
  const e = oe(Si, null);
  if (e !== null)
    return {
      adapter: (t, n) => _i(t, n, e),
      context: e
    };
}
function zn(e, t) {
  console.error(`[vueuc/${e}]: ${t}`);
}
function Ei(e) {
  let t = 0;
  for (let n = 0; n < e.length; ++n)
    e[n] === "&" && ++t;
  return t;
}
const _r = /\s*,(?![^(]*\))\s*/g, $i = /\s+/g;
function Pi(e, t) {
  const n = [];
  return t.split(_r).forEach((r) => {
    let o = Ei(r);
    if (o) {
      if (o === 1) {
        e.forEach((a) => {
          n.push(r.replace("&", a));
        });
        return;
      }
    } else {
      e.forEach((a) => {
        n.push(
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          (a && a + " ") + r
        );
      });
      return;
    }
    let i = [
      r
    ];
    for (; o--; ) {
      const a = [];
      i.forEach((l) => {
        e.forEach((s) => {
          a.push(l.replace("&", s));
        });
      }), i = a;
    }
    i.forEach((a) => n.push(a));
  }), n;
}
function Mi(e, t) {
  const n = [];
  return t.split(_r).forEach((r) => {
    e.forEach((o) => {
      n.push((o && o + " ") + r);
    });
  }), n;
}
function Oi(e) {
  let t = [""];
  return e.forEach((n) => {
    n = n && n.trim(), // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    n && (n.includes("&") ? t = Pi(t, n) : t = Mi(t, n));
  }), t.join(", ").replace($i, " ");
}
function An(e) {
  if (!e)
    return;
  const t = e.parentElement;
  t && t.removeChild(e);
}
function Bt(e, t) {
  return (t ?? document.head).querySelector(`style[cssr-id="${e}"]`);
}
function Ti(e) {
  const t = document.createElement("style");
  return t.setAttribute("cssr-id", e), t;
}
function mt(e) {
  return e ? /^\s*@(s|m)/.test(e) : !1;
}
const Ri = /[A-Z]/g;
function Cr(e) {
  return e.replace(Ri, (t) => "-" + t.toLowerCase());
}
function zi(e, t = "  ") {
  return typeof e == "object" && e !== null ? ` {
` + Object.entries(e).map((n) => t + `  ${Cr(n[0])}: ${n[1]};`).join(`
`) + `
` + t + "}" : `: ${e};`;
}
function Ai(e, t, n) {
  return typeof e == "function" ? e({
    context: t.context,
    props: n
  }) : e;
}
function Bn(e, t, n, r) {
  if (!t)
    return "";
  const o = Ai(t, n, r);
  if (!o)
    return "";
  if (typeof o == "string")
    return `${e} {
${o}
}`;
  const i = Object.keys(o);
  if (i.length === 0)
    return n.config.keepEmptyBlock ? e + ` {
}` : "";
  const a = e ? [
    e + " {"
  ] : [];
  return i.forEach((l) => {
    const s = o[l];
    if (l === "raw") {
      a.push(`
` + s + `
`);
      return;
    }
    l = Cr(l), s != null && a.push(`  ${l}${zi(s)}`);
  }), e && a.push("}"), a.join(`
`);
}
function rn(e, t, n) {
  e && e.forEach((r) => {
    if (Array.isArray(r))
      rn(r, t, n);
    else if (typeof r == "function") {
      const o = r(t);
      Array.isArray(o) ? rn(o, t, n) : o && n(o);
    } else r && n(r);
  });
}
function Er(e, t, n, r, o) {
  const i = e.$;
  let a = "";
  if (!i || typeof i == "string")
    mt(i) ? a = i : t.push(i);
  else if (typeof i == "function") {
    const d = i({
      context: r.context,
      props: o
    });
    mt(d) ? a = d : t.push(d);
  } else if (i.before && i.before(r.context), !i.$ || typeof i.$ == "string")
    mt(i.$) ? a = i.$ : t.push(i.$);
  else if (i.$) {
    const d = i.$({
      context: r.context,
      props: o
    });
    mt(d) ? a = d : t.push(d);
  }
  const l = Oi(t), s = Bn(l, e.props, r, o);
  a ? n.push(`${a} {`) : s.length && n.push(s), e.children && rn(e.children, {
    context: r.context,
    props: o
  }, (d) => {
    if (typeof d == "string") {
      const g = Bn(l, { raw: d }, r, o);
      n.push(g);
    } else
      Er(d, t, n, r, o);
  }), t.pop(), a && n.push("}"), i && i.after && i.after(r.context);
}
function Bi(e, t, n) {
  const r = [];
  return Er(e, [], r, t, n), r.join(`

`);
}
function on(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
typeof window < "u" && (window.__cssrContext = {});
function Ii(e, t, n, r) {
  const { els: o } = t;
  if (n === void 0)
    o.forEach(An), t.els = [];
  else {
    const i = Bt(n, r);
    i && o.includes(i) && (An(i), t.els = o.filter((a) => a !== i));
  }
}
function In(e, t) {
  e.push(t);
}
function Di(e, t, n, r, o, i, a, l, s) {
  let d;
  if (n === void 0 && (d = t.render(r), n = on(d)), s) {
    s.adapter(n, d ?? t.render(r));
    return;
  }
  l === void 0 && (l = document.head);
  const g = Bt(n, l);
  if (g !== null && !i)
    return g;
  const y = g ?? Ti(n);
  if (d === void 0 && (d = t.render(r)), y.textContent = d, g !== null)
    return g;
  if (a) {
    const h = l.querySelector(`meta[name="${a}"]`);
    if (h)
      return l.insertBefore(y, h), In(t.els, y), y;
  }
  return o ? l.insertBefore(y, l.querySelector("style, link")) : l.appendChild(y), In(t.els, y), y;
}
function Fi(e) {
  return Bi(this, this.instance, e);
}
function ki(e = {}) {
  const { id: t, ssr: n, props: r, head: o = !1, force: i = !1, anchorMetaName: a, parent: l } = e;
  return Di(this.instance, this, t, r, o, i, a, l, n);
}
function Ni(e = {}) {
  const { id: t, parent: n } = e;
  Ii(this.instance, this, t, n);
}
const vt = function(e, t, n, r) {
  return {
    instance: e,
    $: t,
    props: n,
    children: r,
    els: [],
    render: Fi,
    mount: ki,
    unmount: Ni
  };
}, Hi = function(e, t, n, r) {
  return Array.isArray(t) ? vt(e, { $: null }, null, t) : Array.isArray(n) ? vt(e, t, null, n) : Array.isArray(r) ? vt(e, t, n, r) : vt(e, t, n, null);
};
function $r(e = {}) {
  const t = {
    c: (...n) => Hi(t, ...n),
    use: (n, ...r) => n.install(t, ...r),
    find: Bt,
    context: {},
    config: e
  };
  return t;
}
function Li(e, t) {
  if (e === void 0)
    return !1;
  if (t) {
    const { context: { ids: n } } = t;
    return n.has(e);
  }
  return Bt(e) !== null;
}
const { c: bt } = $r(), Wi = "vueuc-style";
function Dn(e) {
  return typeof e == "string" ? document.querySelector(e) : e();
}
const ji = q({
  name: "LazyTeleport",
  props: {
    to: {
      type: [String, Object],
      default: void 0
    },
    disabled: Boolean,
    show: {
      type: Boolean,
      required: !0
    }
  },
  setup(e) {
    return {
      showTeleport: Xo(we(e, "show")),
      mergedTo: M(() => {
        const { to: t } = e;
        return t ?? "body";
      })
    };
  },
  render() {
    return this.showTeleport ? this.disabled ? tn("lazy-teleport", this.$slots) : O(To, {
      disabled: this.disabled,
      to: this.mergedTo
    }, tn("lazy-teleport", this.$slots)) : null;
  }
}), gt = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Fn = {
  start: "end",
  center: "center",
  end: "start"
}, jt = {
  top: "height",
  bottom: "height",
  left: "width",
  right: "width"
}, Vi = {
  "bottom-start": "top left",
  bottom: "top center",
  "bottom-end": "top right",
  "top-start": "bottom left",
  top: "bottom center",
  "top-end": "bottom right",
  "right-start": "top left",
  right: "center left",
  "right-end": "bottom left",
  "left-start": "top right",
  left: "center right",
  "left-end": "bottom right"
}, Ui = {
  "bottom-start": "bottom left",
  bottom: "bottom center",
  "bottom-end": "bottom right",
  "top-start": "top left",
  top: "top center",
  "top-end": "top right",
  "right-start": "top right",
  right: "center right",
  "right-end": "bottom right",
  "left-start": "top left",
  left: "center left",
  "left-end": "bottom left"
}, Xi = {
  "bottom-start": "right",
  "bottom-end": "left",
  "top-start": "right",
  "top-end": "left",
  "right-start": "bottom",
  "right-end": "top",
  "left-start": "bottom",
  "left-end": "top"
}, kn = {
  top: !0,
  bottom: !1,
  left: !0,
  right: !1
  // left--
}, Nn = {
  top: "end",
  bottom: "start",
  left: "end",
  right: "start"
};
function Yi(e, t, n, r, o, i) {
  if (!o || i)
    return { placement: e, top: 0, left: 0 };
  const [a, l] = e.split("-");
  let s = l ?? "center", d = {
    top: 0,
    left: 0
  };
  const g = (w, c, b) => {
    let p = 0, u = 0;
    const E = n[w] - t[c] - t[w];
    return E > 0 && r && (b ? u = kn[c] ? E : -E : p = kn[c] ? E : -E), {
      left: p,
      top: u
    };
  }, y = a === "left" || a === "right";
  if (s !== "center") {
    const w = Xi[e], c = gt[w], b = jt[w];
    if (n[b] > t[b]) {
      if (
        // current space is not enough
        // ----------[ target ]---------|
        // -------[     follower        ]
        t[w] + t[b] < n[b]
      ) {
        const p = (n[b] - t[b]) / 2;
        t[w] < p || t[c] < p ? t[w] < t[c] ? (s = Fn[l], d = g(b, c, y)) : d = g(b, w, y) : s = "center";
      }
    } else n[b] < t[b] && t[c] < 0 && // opposite align has larger space
    // ------------[   target   ]
    // ----------------[follower]
    t[w] > t[c] && (s = Fn[l]);
  } else {
    const w = a === "bottom" || a === "top" ? "left" : "top", c = gt[w], b = jt[w], p = (n[b] - t[b]) / 2;
    // center is not enough
    // ----------- [ target ]--|
    // -------[     follower     ]
    (t[w] < p || t[c] < p) && (t[w] > t[c] ? (s = Nn[w], d = g(b, w, y)) : (s = Nn[c], d = g(b, c, y)));
  }
  let h = a;
  return (
    // space is not enough
    t[a] < n[jt[a]] && // opposite position's space is larger
    t[a] < t[gt[a]] && (h = gt[a]), {
      placement: s !== "center" ? `${h}-${s}` : h,
      left: d.left,
      top: d.top
    }
  );
}
function Gi(e, t) {
  return t ? Ui[e] : Vi[e];
}
function Ki(e, t, n, r, o, i) {
  if (i)
    switch (e) {
      case "bottom-start":
        return {
          top: `${Math.round(n.top - t.top + n.height)}px`,
          left: `${Math.round(n.left - t.left)}px`,
          transform: "translateY(-100%)"
        };
      case "bottom-end":
        return {
          top: `${Math.round(n.top - t.top + n.height)}px`,
          left: `${Math.round(n.left - t.left + n.width)}px`,
          transform: "translateX(-100%) translateY(-100%)"
        };
      case "top-start":
        return {
          top: `${Math.round(n.top - t.top)}px`,
          left: `${Math.round(n.left - t.left)}px`,
          transform: ""
        };
      case "top-end":
        return {
          top: `${Math.round(n.top - t.top)}px`,
          left: `${Math.round(n.left - t.left + n.width)}px`,
          transform: "translateX(-100%)"
        };
      case "right-start":
        return {
          top: `${Math.round(n.top - t.top)}px`,
          left: `${Math.round(n.left - t.left + n.width)}px`,
          transform: "translateX(-100%)"
        };
      case "right-end":
        return {
          top: `${Math.round(n.top - t.top + n.height)}px`,
          left: `${Math.round(n.left - t.left + n.width)}px`,
          transform: "translateX(-100%) translateY(-100%)"
        };
      case "left-start":
        return {
          top: `${Math.round(n.top - t.top)}px`,
          left: `${Math.round(n.left - t.left)}px`,
          transform: ""
        };
      case "left-end":
        return {
          top: `${Math.round(n.top - t.top + n.height)}px`,
          left: `${Math.round(n.left - t.left)}px`,
          transform: "translateY(-100%)"
        };
      case "top":
        return {
          top: `${Math.round(n.top - t.top)}px`,
          left: `${Math.round(n.left - t.left + n.width / 2)}px`,
          transform: "translateX(-50%)"
        };
      case "right":
        return {
          top: `${Math.round(n.top - t.top + n.height / 2)}px`,
          left: `${Math.round(n.left - t.left + n.width)}px`,
          transform: "translateX(-100%) translateY(-50%)"
        };
      case "left":
        return {
          top: `${Math.round(n.top - t.top + n.height / 2)}px`,
          left: `${Math.round(n.left - t.left)}px`,
          transform: "translateY(-50%)"
        };
      case "bottom":
      default:
        return {
          top: `${Math.round(n.top - t.top + n.height)}px`,
          left: `${Math.round(n.left - t.left + n.width / 2)}px`,
          transform: "translateX(-50%) translateY(-100%)"
        };
    }
  switch (e) {
    case "bottom-start":
      return {
        top: `${Math.round(n.top - t.top + n.height + r)}px`,
        left: `${Math.round(n.left - t.left + o)}px`,
        transform: ""
      };
    case "bottom-end":
      return {
        top: `${Math.round(n.top - t.top + n.height + r)}px`,
        left: `${Math.round(n.left - t.left + n.width + o)}px`,
        transform: "translateX(-100%)"
      };
    case "top-start":
      return {
        top: `${Math.round(n.top - t.top + r)}px`,
        left: `${Math.round(n.left - t.left + o)}px`,
        transform: "translateY(-100%)"
      };
    case "top-end":
      return {
        top: `${Math.round(n.top - t.top + r)}px`,
        left: `${Math.round(n.left - t.left + n.width + o)}px`,
        transform: "translateX(-100%) translateY(-100%)"
      };
    case "right-start":
      return {
        top: `${Math.round(n.top - t.top + r)}px`,
        left: `${Math.round(n.left - t.left + n.width + o)}px`,
        transform: ""
      };
    case "right-end":
      return {
        top: `${Math.round(n.top - t.top + n.height + r)}px`,
        left: `${Math.round(n.left - t.left + n.width + o)}px`,
        transform: "translateY(-100%)"
      };
    case "left-start":
      return {
        top: `${Math.round(n.top - t.top + r)}px`,
        left: `${Math.round(n.left - t.left + o)}px`,
        transform: "translateX(-100%)"
      };
    case "left-end":
      return {
        top: `${Math.round(n.top - t.top + n.height + r)}px`,
        left: `${Math.round(n.left - t.left + o)}px`,
        transform: "translateX(-100%) translateY(-100%)"
      };
    case "top":
      return {
        top: `${Math.round(n.top - t.top + r)}px`,
        left: `${Math.round(n.left - t.left + n.width / 2 + o)}px`,
        transform: "translateY(-100%) translateX(-50%)"
      };
    case "right":
      return {
        top: `${Math.round(n.top - t.top + n.height / 2 + r)}px`,
        left: `${Math.round(n.left - t.left + n.width + o)}px`,
        transform: "translateY(-50%)"
      };
    case "left":
      return {
        top: `${Math.round(n.top - t.top + n.height / 2 + r)}px`,
        left: `${Math.round(n.left - t.left + o)}px`,
        transform: "translateY(-50%) translateX(-100%)"
      };
    case "bottom":
    default:
      return {
        top: `${Math.round(n.top - t.top + n.height + r)}px`,
        left: `${Math.round(n.left - t.left + n.width / 2 + o)}px`,
        transform: "translateX(-50%)"
      };
  }
}
const qi = bt([
  bt(".v-binder-follower-container", {
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    height: "0",
    pointerEvents: "none",
    zIndex: "auto"
  }),
  bt(".v-binder-follower-content", {
    position: "absolute",
    zIndex: "auto"
  }, [
    bt("> *", {
      pointerEvents: "all"
    })
  ])
]), Zi = q({
  name: "Follower",
  inheritAttrs: !1,
  props: {
    show: Boolean,
    enabled: {
      type: Boolean,
      default: void 0
    },
    placement: {
      type: String,
      default: "bottom"
    },
    syncTrigger: {
      type: Array,
      default: ["resize", "scroll"]
    },
    to: [String, Object],
    flip: {
      type: Boolean,
      default: !0
    },
    internalShift: Boolean,
    x: Number,
    y: Number,
    width: String,
    minWidth: String,
    containerClass: String,
    teleportDisabled: Boolean,
    zindexable: {
      type: Boolean,
      default: !0
    },
    zIndex: Number,
    overlap: Boolean
  },
  setup(e) {
    const t = oe("VBinder"), n = lt(() => e.enabled !== void 0 ? e.enabled : e.show), r = T(null), o = T(null), i = () => {
      const { syncTrigger: h } = e;
      h.includes("scroll") && t.addScrollListener(s), h.includes("resize") && t.addResizeListener(s);
    }, a = () => {
      t.removeScrollListener(s), t.removeResizeListener(s);
    };
    ye(() => {
      n.value && (s(), i());
    });
    const l = At();
    qi.mount({
      id: "vueuc/binder",
      head: !0,
      anchorMetaName: Wi,
      ssr: l
    }), Se(() => {
      a();
    }), Ko(() => {
      n.value && s();
    });
    const s = () => {
      if (!n.value)
        return;
      const h = r.value;
      if (h === null)
        return;
      const w = t.targetRef, { x: c, y: b, overlap: p } = e, u = c !== void 0 && b !== void 0 ? pi(c, b) : Lt(w);
      h.style.setProperty("--v-target-width", `${Math.round(u.width)}px`), h.style.setProperty("--v-target-height", `${Math.round(u.height)}px`);
      const { width: E, minWidth: B, placement: D, internalShift: V, flip: I } = e;
      h.setAttribute("v-placement", D), p ? h.setAttribute("v-overlap", "") : h.removeAttribute("v-overlap");
      const { style: f } = h;
      E === "target" ? f.width = `${u.width}px` : E !== void 0 ? f.width = E : f.width = "", B === "target" ? f.minWidth = `${u.width}px` : B !== void 0 ? f.minWidth = B : f.minWidth = "";
      const v = Lt(h), _ = Lt(o.value), { left: x, top: A, placement: F } = Yi(D, u, v, V, I, p), H = Gi(F, p), { left: L, top: S, transform: R } = Ki(F, _, u, A, x, p);
      h.setAttribute("v-placement", F), h.style.setProperty("--v-offset-left", `${Math.round(x)}px`), h.style.setProperty("--v-offset-top", `${Math.round(A)}px`), h.style.transform = `translateX(${L}) translateY(${S}) ${R}`, h.style.setProperty("--v-transform-origin", H), h.style.transformOrigin = H;
    };
    me(n, (h) => {
      h ? (i(), d()) : a();
    });
    const d = () => {
      Ro().then(s).catch((h) => console.error(h));
    };
    [
      "placement",
      "x",
      "y",
      "internalShift",
      "flip",
      "width",
      "overlap",
      "minWidth"
    ].forEach((h) => {
      me(we(e, h), s);
    }), ["teleportDisabled"].forEach((h) => {
      me(we(e, h), d);
    }), me(we(e, "syncTrigger"), (h) => {
      h.includes("resize") ? t.addResizeListener(s) : t.removeResizeListener(s), h.includes("scroll") ? t.addScrollListener(s) : t.removeScrollListener(s);
    });
    const g = hr(), y = lt(() => {
      const { to: h } = e;
      if (h !== void 0)
        return h;
      g.value;
    });
    return {
      VBinder: t,
      mergedEnabled: n,
      offsetContainerRef: o,
      followerRef: r,
      mergedTo: y,
      syncPosition: s
    };
  },
  render() {
    return O(ji, {
      show: this.show,
      to: this.mergedTo,
      disabled: this.teleportDisabled
    }, {
      default: () => {
        var e, t;
        const n = O("div", {
          class: ["v-binder-follower-container", this.containerClass],
          ref: "offsetContainerRef"
        }, [
          O("div", {
            class: "v-binder-follower-content",
            ref: "followerRef"
          }, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e))
        ]);
        return this.zindexable ? Rt(n, [
          [
            xr,
            {
              enabled: this.mergedEnabled,
              zIndex: this.zIndex
            }
          ]
        ]) : n;
      }
    });
  }
});
var Te = [], Ji = function() {
  return Te.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, Qi = function() {
  return Te.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, Hn = "ResizeObserver loop completed with undelivered notifications.", ea = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: Hn
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = Hn), window.dispatchEvent(e);
}, st;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(st || (st = {}));
var Re = function(e) {
  return Object.freeze(e);
}, ta = /* @__PURE__ */ function() {
  function e(t, n) {
    this.inlineSize = t, this.blockSize = n, Re(this);
  }
  return e;
}(), Pr = function() {
  function e(t, n, r, o) {
    return this.x = t, this.y = n, this.width = r, this.height = o, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Re(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, n = t.x, r = t.y, o = t.top, i = t.right, a = t.bottom, l = t.left, s = t.width, d = t.height;
    return { x: n, y: r, top: o, right: i, bottom: a, left: l, width: s, height: d };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), dn = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, Mr = function(e) {
  if (dn(e)) {
    var t = e.getBBox(), n = t.width, r = t.height;
    return !n && !r;
  }
  var o = e, i = o.offsetWidth, a = o.offsetHeight;
  return !(i || a || e.getClientRects().length);
}, Ln = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var n = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(n && e instanceof n.Element);
}, na = function(e) {
  switch (e.tagName) {
    case "INPUT":
      if (e.type !== "image")
        break;
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return !0;
  }
  return !1;
}, it = typeof window < "u" ? window : {}, wt = /* @__PURE__ */ new WeakMap(), Wn = /auto|scroll/, ra = /^tb|vertical/, oa = /msie|trident/i.test(it.navigator && it.navigator.userAgent), he = function(e) {
  return parseFloat(e || "0");
}, Le = function(e, t, n) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = !1), new ta((n ? t : e) || 0, (n ? e : t) || 0);
}, jn = Re({
  devicePixelContentBoxSize: Le(),
  borderBoxSize: Le(),
  contentBoxSize: Le(),
  contentRect: new Pr(0, 0, 0, 0)
}), Or = function(e, t) {
  if (t === void 0 && (t = !1), wt.has(e) && !t)
    return wt.get(e);
  if (Mr(e))
    return wt.set(e, jn), jn;
  var n = getComputedStyle(e), r = dn(e) && e.ownerSVGElement && e.getBBox(), o = !oa && n.boxSizing === "border-box", i = ra.test(n.writingMode || ""), a = !r && Wn.test(n.overflowY || ""), l = !r && Wn.test(n.overflowX || ""), s = r ? 0 : he(n.paddingTop), d = r ? 0 : he(n.paddingRight), g = r ? 0 : he(n.paddingBottom), y = r ? 0 : he(n.paddingLeft), h = r ? 0 : he(n.borderTopWidth), w = r ? 0 : he(n.borderRightWidth), c = r ? 0 : he(n.borderBottomWidth), b = r ? 0 : he(n.borderLeftWidth), p = y + d, u = s + g, E = b + w, B = h + c, D = l ? e.offsetHeight - B - e.clientHeight : 0, V = a ? e.offsetWidth - E - e.clientWidth : 0, I = o ? p + E : 0, f = o ? u + B : 0, v = r ? r.width : he(n.width) - I - V, _ = r ? r.height : he(n.height) - f - D, x = v + p + V + E, A = _ + u + D + B, F = Re({
    devicePixelContentBoxSize: Le(Math.round(v * devicePixelRatio), Math.round(_ * devicePixelRatio), i),
    borderBoxSize: Le(x, A, i),
    contentBoxSize: Le(v, _, i),
    contentRect: new Pr(y, s, v, _)
  });
  return wt.set(e, F), F;
}, Tr = function(e, t, n) {
  var r = Or(e, n), o = r.borderBoxSize, i = r.contentBoxSize, a = r.devicePixelContentBoxSize;
  switch (t) {
    case st.DEVICE_PIXEL_CONTENT_BOX:
      return a;
    case st.BORDER_BOX:
      return o;
    default:
      return i;
  }
}, ia = /* @__PURE__ */ function() {
  function e(t) {
    var n = Or(t);
    this.target = t, this.contentRect = n.contentRect, this.borderBoxSize = Re([n.borderBoxSize]), this.contentBoxSize = Re([n.contentBoxSize]), this.devicePixelContentBoxSize = Re([n.devicePixelContentBoxSize]);
  }
  return e;
}(), Rr = function(e) {
  if (Mr(e))
    return 1 / 0;
  for (var t = 0, n = e.parentNode; n; )
    t += 1, n = n.parentNode;
  return t;
}, aa = function() {
  var e = 1 / 0, t = [];
  Te.forEach(function(a) {
    if (a.activeTargets.length !== 0) {
      var l = [];
      a.activeTargets.forEach(function(d) {
        var g = new ia(d.target), y = Rr(d.target);
        l.push(g), d.lastReportedSize = Tr(d.target, d.observedBox), y < e && (e = y);
      }), t.push(function() {
        a.callback.call(a.observer, l, a.observer);
      }), a.activeTargets.splice(0, a.activeTargets.length);
    }
  });
  for (var n = 0, r = t; n < r.length; n++) {
    var o = r[n];
    o();
  }
  return e;
}, Vn = function(e) {
  Te.forEach(function(n) {
    n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(o) {
      o.isActive() && (Rr(o.target) > e ? n.activeTargets.push(o) : n.skippedTargets.push(o));
    });
  });
}, la = function() {
  var e = 0;
  for (Vn(e); Ji(); )
    e = aa(), Vn(e);
  return Qi() && ea(), e > 0;
}, Vt, zr = [], sa = function() {
  return zr.splice(0).forEach(function(e) {
    return e();
  });
}, ua = function(e) {
  if (!Vt) {
    var t = 0, n = document.createTextNode(""), r = { characterData: !0 };
    new MutationObserver(function() {
      return sa();
    }).observe(n, r), Vt = function() {
      n.textContent = "".concat(t ? t-- : t++);
    };
  }
  zr.push(e), Vt();
}, ca = function(e) {
  ua(function() {
    requestAnimationFrame(e);
  });
}, _t = 0, da = function() {
  return !!_t;
}, fa = 250, ha = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Un = [
  "resize",
  "load",
  "transitionend",
  "animationend",
  "animationstart",
  "animationiteration",
  "keyup",
  "keydown",
  "mouseup",
  "mousedown",
  "mouseover",
  "mouseout",
  "blur",
  "focus"
], Xn = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, Ut = !1, pa = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var n = this;
    if (t === void 0 && (t = fa), !Ut) {
      Ut = !0;
      var r = Xn(t);
      ca(function() {
        var o = !1;
        try {
          o = la();
        } finally {
          if (Ut = !1, t = r - Xn(), !da())
            return;
          o ? n.run(1e3) : t > 0 ? n.run(t) : n.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, n = function() {
      return t.observer && t.observer.observe(document.body, ha);
    };
    document.body ? n() : it.addEventListener("DOMContentLoaded", n);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Un.forEach(function(n) {
      return it.addEventListener(n, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), Un.forEach(function(n) {
      return it.removeEventListener(n, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), an = new pa(), Yn = function(e) {
  !_t && e > 0 && an.start(), _t += e, !_t && an.stop();
}, ma = function(e) {
  return !dn(e) && !na(e) && getComputedStyle(e).display === "inline";
}, va = function() {
  function e(t, n) {
    this.target = t, this.observedBox = n || st.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = Tr(this.target, this.observedBox, !0);
    return ma(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), ba = /* @__PURE__ */ function() {
  function e(t, n) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = n;
  }
  return e;
}(), yt = /* @__PURE__ */ new WeakMap(), Gn = function(e, t) {
  for (var n = 0; n < e.length; n += 1)
    if (e[n].target === t)
      return n;
  return -1;
}, St = function() {
  function e() {
  }
  return e.connect = function(t, n) {
    var r = new ba(t, n);
    yt.set(t, r);
  }, e.observe = function(t, n, r) {
    var o = yt.get(t), i = o.observationTargets.length === 0;
    Gn(o.observationTargets, n) < 0 && (i && Te.push(o), o.observationTargets.push(new va(n, r && r.box)), Yn(1), an.schedule());
  }, e.unobserve = function(t, n) {
    var r = yt.get(t), o = Gn(r.observationTargets, n), i = r.observationTargets.length === 1;
    o >= 0 && (i && Te.splice(Te.indexOf(r), 1), r.observationTargets.splice(o, 1), Yn(-1));
  }, e.disconnect = function(t) {
    var n = this, r = yt.get(t);
    r.observationTargets.slice().forEach(function(o) {
      return n.unobserve(t, o.target);
    }), r.activeTargets.splice(0, r.activeTargets.length);
  }, e;
}(), ga = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    St.connect(this, t);
  }
  return e.prototype.observe = function(t, n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Ln(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    St.observe(this, t, n);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Ln(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    St.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    St.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
class wa {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || ga)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
  }
  handleResize(t) {
    for (const n of t) {
      const r = this.elHandlersMap.get(n.target);
      r !== void 0 && r(n);
    }
  }
  registerHandler(t, n) {
    this.elHandlersMap.set(t, n), this.observer.observe(t);
  }
  unregisterHandler(t) {
    this.elHandlersMap.has(t) && (this.elHandlersMap.delete(t), this.observer.unobserve(t));
  }
}
const Kn = new wa(), qn = q({
  name: "ResizeObserver",
  props: {
    onResize: Function
  },
  setup(e) {
    let t = !1;
    const n = sr().proxy;
    function r(o) {
      const { onResize: i } = e;
      i !== void 0 && i(o);
    }
    ye(() => {
      const o = n.$el;
      if (o === void 0) {
        zn("resize-observer", "$el does not exist.");
        return;
      }
      if (o.nextElementSibling !== o.nextSibling && o.nodeType === 3 && o.nodeValue !== "") {
        zn("resize-observer", "$el can not be observed (it may be a text node).");
        return;
      }
      o.nextElementSibling !== null && (Kn.registerHandler(o.nextElementSibling, r), t = !0);
    }), Se(() => {
      t && Kn.unregisterHandler(n.$el.nextElementSibling);
    });
  },
  render() {
    return Ct(this.$slots, "default");
  }
});
function Ar(e) {
  return e instanceof HTMLElement;
}
function Br(e) {
  for (let t = 0; t < e.childNodes.length; t++) {
    const n = e.childNodes[t];
    if (Ar(n) && (Dr(n) || Br(n)))
      return !0;
  }
  return !1;
}
function Ir(e) {
  for (let t = e.childNodes.length - 1; t >= 0; t--) {
    const n = e.childNodes[t];
    if (Ar(n) && (Dr(n) || Ir(n)))
      return !0;
  }
  return !1;
}
function Dr(e) {
  if (!ya(e))
    return !1;
  try {
    e.focus({ preventScroll: !0 });
  } catch {
  }
  return document.activeElement === e;
}
function ya(e) {
  if (e.tabIndex > 0 || e.tabIndex === 0 && e.getAttribute("tabIndex") !== null)
    return !0;
  if (e.getAttribute("disabled"))
    return !1;
  switch (e.nodeName) {
    case "A":
      return !!e.href && e.rel !== "ignore";
    case "INPUT":
      return e.type !== "hidden" && e.type !== "file";
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA":
      return !0;
    default:
      return !1;
  }
}
let Ke = [];
const Sa = q({
  name: "FocusTrap",
  props: {
    disabled: Boolean,
    active: Boolean,
    autoFocus: {
      type: Boolean,
      default: !0
    },
    onEsc: Function,
    initialFocusTo: String,
    finalFocusTo: String,
    returnFocusOnDeactivated: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const t = hi(), n = T(null), r = T(null);
    let o = !1, i = !1;
    const a = typeof document > "u" ? null : document.activeElement;
    function l() {
      return Ke[Ke.length - 1] === t;
    }
    function s(p) {
      var u;
      p.code === "Escape" && l() && ((u = e.onEsc) === null || u === void 0 || u.call(e, p));
    }
    ye(() => {
      me(() => e.active, (p) => {
        p ? (y(), ee("keydown", document, s)) : (Y("keydown", document, s), o && h());
      }, {
        immediate: !0
      });
    }), Se(() => {
      Y("keydown", document, s), o && h();
    });
    function d(p) {
      if (!i && l()) {
        const u = g();
        if (u === null || u.contains(Pt(p)))
          return;
        w("first");
      }
    }
    function g() {
      const p = n.value;
      if (p === null)
        return null;
      let u = p;
      for (; u = u.nextSibling, !(u === null || u instanceof Element && u.tagName === "DIV"); )
        ;
      return u;
    }
    function y() {
      var p;
      if (!e.disabled) {
        if (Ke.push(t), e.autoFocus) {
          const { initialFocusTo: u } = e;
          u === void 0 ? w("first") : (p = Dn(u)) === null || p === void 0 || p.focus({ preventScroll: !0 });
        }
        o = !0, document.addEventListener("focus", d, !0);
      }
    }
    function h() {
      var p;
      if (e.disabled || (document.removeEventListener("focus", d, !0), Ke = Ke.filter((E) => E !== t), l()))
        return;
      const { finalFocusTo: u } = e;
      u !== void 0 ? (p = Dn(u)) === null || p === void 0 || p.focus({ preventScroll: !0 }) : e.returnFocusOnDeactivated && a instanceof HTMLElement && (i = !0, a.focus({ preventScroll: !0 }), i = !1);
    }
    function w(p) {
      if (l() && e.active) {
        const u = n.value, E = r.value;
        if (u !== null && E !== null) {
          const B = g();
          if (B == null || B === E) {
            i = !0, u.focus({ preventScroll: !0 }), i = !1;
            return;
          }
          i = !0;
          const D = p === "first" ? Br(B) : Ir(B);
          i = !1, D || (i = !0, u.focus({ preventScroll: !0 }), i = !1);
        }
      }
    }
    function c(p) {
      if (i)
        return;
      const u = g();
      u !== null && (p.relatedTarget !== null && u.contains(p.relatedTarget) ? w("last") : w("first"));
    }
    function b(p) {
      i || (p.relatedTarget !== null && p.relatedTarget === n.value ? w("last") : w("first"));
    }
    return {
      focusableStartRef: n,
      focusableEndRef: r,
      focusableStyle: "position: absolute; height: 0; width: 0;",
      handleStartFocus: c,
      handleEndFocus: b
    };
  },
  render() {
    const { default: e } = this.$slots;
    if (e === void 0)
      return null;
    if (this.disabled)
      return e();
    const { active: t, focusableStyle: n } = this;
    return O(xe, null, [
      O("div", {
        "aria-hidden": "true",
        tabindex: t ? "0" : "-1",
        ref: "focusableStartRef",
        style: n,
        onFocus: this.handleStartFocus
      }),
      e(),
      O("div", {
        "aria-hidden": "true",
        style: n,
        ref: "focusableEndRef",
        tabindex: t ? "0" : "-1",
        onFocus: this.handleEndFocus
      })
    ]);
  }
}), xa = /^(\d|\.)+$/, Zn = /(\d|\.)+/;
function Xt(e, {
  c: t = 1,
  offset: n = 0,
  attachPx: r = !0
} = {}) {
  if (typeof e == "number") {
    const o = (e + n) * t;
    return o === 0 ? "0" : `${o}px`;
  } else if (typeof e == "string")
    if (xa.test(e)) {
      const o = (Number(e) + n) * t;
      return r ? o === 0 ? "0" : `${o}px` : `${o}`;
    } else {
      const o = Zn.exec(e);
      return o ? e.replace(Zn, String((Number(o[0]) + n) * t)) : e;
    }
  return e;
}
function Jn(e) {
  const {
    left: t,
    right: n,
    top: r,
    bottom: o
  } = et(e);
  return `${r} ${t} ${o} ${n}`;
}
var Qn = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_2740_IONSRGRWNIQFNZAB", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.97.1", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-5a8078c568-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
function _a(e) {
  let t = ".", n = "__", r = "--", o;
  {
    let c = e.blockPrefix;
    c && (t = c), c = e.elementPrefix, c && (n = c), c = e.modifierPrefix, c && (r = c);
  }
  const i = {
    install(c) {
      o = c.c;
      const b = c.context;
      b.bem = {}, b.bem.b = null, b.bem.els = null;
    }
  };
  function a(c) {
    let b, p;
    return {
      before(u) {
        b = u.bem.b, p = u.bem.els, u.bem.els = null;
      },
      after(u) {
        u.bem.b = b, u.bem.els = p;
      },
      $({ context: u, props: E }) {
        return c = typeof c == "string" ? c : c({ context: u, props: E }), u.bem.b = c, `${(E == null ? void 0 : E.bPrefix) || t}${u.bem.b}`;
      }
    };
  }
  function l(c) {
    let b;
    return {
      before(p) {
        b = p.bem.els;
      },
      after(p) {
        p.bem.els = b;
      },
      $({ context: p, props: u }) {
        return c = typeof c == "string" ? c : c({ context: p, props: u }), p.bem.els = c.split(",").map((E) => E.trim()), p.bem.els.map((E) => `${(u == null ? void 0 : u.bPrefix) || t}${p.bem.b}${n}${E}`).join(", ");
      }
    };
  }
  function s(c) {
    return {
      $({ context: b, props: p }) {
        c = typeof c == "string" ? c : c({ context: b, props: p });
        const u = c.split(",").map((D) => D.trim());
        function E(D) {
          return u.map((V) => `&${(p == null ? void 0 : p.bPrefix) || t}${b.bem.b}${D !== void 0 ? `${n}${D}` : ""}${r}${V}`).join(", ");
        }
        const B = b.bem.els;
        if (B !== null) {
          if (Qn.NODE_ENV !== "production" && B.length >= 2)
            throw Error(`[css-render/plugin-bem]: m(${c}) is invalid, using modifier inside multiple elements is not allowed`);
          return E(B[0]);
        } else
          return E();
      }
    };
  }
  function d(c) {
    return {
      $({ context: b, props: p }) {
        c = typeof c == "string" ? c : c({ context: b, props: p });
        const u = b.bem.els;
        if (Qn.NODE_ENV !== "production" && u !== null && u.length >= 2)
          throw Error(`[css-render/plugin-bem]: notM(${c}) is invalid, using modifier inside multiple elements is not allowed`);
        return `&:not(${(p == null ? void 0 : p.bPrefix) || t}${b.bem.b}${u !== null && u.length > 0 ? `${n}${u[0]}` : ""}${r}${c})`;
      }
    };
  }
  return Object.assign(i, {
    cB: (...c) => o(a(c[0]), c[1], c[2]),
    cE: (...c) => o(l(c[0]), c[1], c[2]),
    cM: (...c) => o(s(c[0]), c[1], c[2]),
    cNotM: (...c) => o(d(c[0]), c[1], c[2])
  }), i;
}
const Ca = "n", Ea = `.${Ca}-`, $a = "__", Pa = "--", Fr = $r(), kr = _a({
  blockPrefix: Ea,
  elementPrefix: $a,
  modifierPrefix: Pa
});
Fr.use(kr);
const {
  c: N,
  find: Lu
} = Fr, {
  cB: re,
  cE: Oe,
  cM: ce,
  cNotM: Yt
} = kr, Ma = (...e) => N(">", [re(...e)]);
let Gt;
function Oa() {
  return Gt === void 0 && (Gt = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")), Gt;
}
const er = /* @__PURE__ */ new Set();
function qe(e, t) {
  const n = `[naive/${e}]: ${t}`;
  er.has(n) || (er.add(n), console.error(n));
}
function tr(e, t) {
  console.error(`[naive/${e}]: ${t}`);
}
function Ta(e, t) {
  throw new Error(`[naive/${e}]: ${t}`);
}
function tt(e, ...t) {
  if (Array.isArray(e))
    e.forEach((n) => tt(n, ...t));
  else
    return e(...t);
}
function ln(e, t = !0, n = []) {
  return e.forEach((r) => {
    if (r !== null) {
      if (typeof r != "object") {
        (typeof r == "string" || typeof r == "number") && n.push(Tt(String(r)));
        return;
      }
      if (Array.isArray(r)) {
        ln(r, t, n);
        return;
      }
      if (r.type === xe) {
        if (r.children === null) return;
        Array.isArray(r.children) && ln(r.children, t, n);
      } else {
        if (r.type === un && t) return;
        n.push(r);
      }
    }
  }), n;
}
function Ra(e, t = "default", n = void 0) {
  const r = e[t];
  if (!r)
    return tr("getFirstSlotVNode", `slot[${t}] is empty`), null;
  const o = ln(r(n));
  return o.length === 1 ? o[0] : (tr("getFirstSlotVNode", `slot[${t}] should have exactly one child`), null);
}
function za(e, t = [], n) {
  const r = {};
  return t.forEach((o) => {
    r[o] = e[o];
  }), Object.assign(r, n);
}
function fn(e) {
  return e.some((t) => zo(t) ? !(t.type === un || t.type === xe && !fn(t.children)) : !0) ? e : null;
}
function Kt(e, t) {
  const n = e && fn(e());
  return t(n || null);
}
function nr(e) {
  return !(e && fn(e()));
}
const rr = q({
  render() {
    var e, t;
    return (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e);
  }
}), ct = "n-config-provider", Aa = "n";
function hn(e = {}, t = {
  defaultBordered: !0
}) {
  const n = oe(ct, null);
  return {
    // NConfigProvider,
    inlineThemeDisabled: n == null ? void 0 : n.inlineThemeDisabled,
    mergedRtlRef: n == null ? void 0 : n.mergedRtlRef,
    mergedComponentPropsRef: n == null ? void 0 : n.mergedComponentPropsRef,
    mergedBreakpointsRef: n == null ? void 0 : n.mergedBreakpointsRef,
    mergedBorderedRef: M(() => {
      var r, o;
      const {
        bordered: i
      } = e;
      return i !== void 0 ? i : (o = (r = n == null ? void 0 : n.mergedBorderedRef.value) !== null && r !== void 0 ? r : t.defaultBordered) !== null && o !== void 0 ? o : !0;
    }),
    mergedClsPrefixRef: n ? n.mergedClsPrefixRef : Ao(Aa),
    namespaceRef: M(() => n == null ? void 0 : n.mergedNamespaceRef.value)
  };
}
function Nr(e, t, n, r) {
  n || Ta("useThemeClass", "cssVarsRef is not passed");
  const o = oe(ct, null), i = o == null ? void 0 : o.mergedThemeHashRef, a = o == null ? void 0 : o.styleMountTarget, l = T(""), s = At();
  let d;
  const g = `__${e}`, y = () => {
    let h = g;
    const w = i == null ? void 0 : i.value;
    w && (h += `-${w}`);
    const {
      themeOverrides: c,
      builtinThemeOverrides: b
    } = r;
    c && (h += `-${on(JSON.stringify(c))}`), b && (h += `-${on(JSON.stringify(b))}`), l.value = h, d = () => {
      const p = n.value;
      let u = "";
      for (const E in p)
        u += `${E}: ${p[E]};`;
      N(`.${h}`, u).mount({
        id: h,
        ssr: s,
        parent: a
      }), d = void 0;
    };
  };
  return ze(() => {
    y();
  }), {
    themeClass: l,
    onRender: () => {
      d == null || d();
    }
  };
}
const Ba = {
  name: "en-US",
  global: {
    undo: "Undo",
    redo: "Redo",
    confirm: "Confirm",
    clear: "Clear"
  },
  Popconfirm: {
    positiveText: "Confirm",
    negativeText: "Cancel"
  },
  Cascader: {
    placeholder: "Please Select",
    loading: "Loading",
    loadingRequiredMessage: (e) => `Please load all ${e}'s descendants before checking it.`
  },
  Time: {
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss"
  },
  DatePicker: {
    yearFormat: "yyyy",
    monthFormat: "MMM",
    dayFormat: "eeeeee",
    yearTypeFormat: "yyyy",
    monthTypeFormat: "yyyy-MM",
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
    quarterFormat: "yyyy-qqq",
    weekFormat: "YYYY-w",
    clear: "Clear",
    now: "Now",
    confirm: "Confirm",
    selectTime: "Select Time",
    selectDate: "Select Date",
    datePlaceholder: "Select Date",
    datetimePlaceholder: "Select Date and Time",
    monthPlaceholder: "Select Month",
    yearPlaceholder: "Select Year",
    quarterPlaceholder: "Select Quarter",
    weekPlaceholder: "Select Week",
    startDatePlaceholder: "Start Date",
    endDatePlaceholder: "End Date",
    startDatetimePlaceholder: "Start Date and Time",
    endDatetimePlaceholder: "End Date and Time",
    startMonthPlaceholder: "Start Month",
    endMonthPlaceholder: "End Month",
    monthBeforeYear: !0,
    firstDayOfWeek: 6,
    today: "Today"
  },
  DataTable: {
    checkTableAll: "Select all in the table",
    uncheckTableAll: "Unselect all in the table",
    confirm: "Confirm",
    clear: "Clear"
  },
  LegacyTransfer: {
    sourceTitle: "Source",
    targetTitle: "Target"
  },
  Transfer: {
    selectAll: "Select all",
    unselectAll: "Unselect all",
    clearAll: "Clear",
    total: (e) => `Total ${e} items`,
    selected: (e) => `${e} items selected`
  },
  Empty: {
    description: "No Data"
  },
  Select: {
    placeholder: "Please Select"
  },
  TimePicker: {
    placeholder: "Select Time",
    positiveText: "OK",
    negativeText: "Cancel",
    now: "Now",
    clear: "Clear"
  },
  Pagination: {
    goto: "Goto",
    selectionSuffix: "page"
  },
  DynamicTags: {
    add: "Add"
  },
  Log: {
    loading: "Loading"
  },
  Input: {
    placeholder: "Please Input"
  },
  InputNumber: {
    placeholder: "Please Input"
  },
  DynamicInput: {
    create: "Create"
  },
  ThemeEditor: {
    title: "Theme Editor",
    clearAllVars: "Clear All Variables",
    clearSearch: "Clear Search",
    filterCompName: "Filter Component Name",
    filterVarName: "Filter Variable Name",
    import: "Import",
    export: "Export",
    restore: "Reset to Default"
  },
  Image: {
    tipPrevious: "Previous picture (←)",
    tipNext: "Next picture (→)",
    tipCounterclockwise: "Counterclockwise",
    tipClockwise: "Clockwise",
    tipZoomOut: "Zoom out",
    tipZoomIn: "Zoom in",
    tipDownload: "Download",
    tipClose: "Close (Esc)",
    // TODO: translation
    tipOriginalSize: "Zoom to original size"
  }
};
function qt(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
function Ze(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const a = e.defaultFormattingWidth || e.defaultWidth, l = n != null && n.width ? String(n.width) : a;
      o = e.formattingValues[l] || e.formattingValues[a];
    } else {
      const a = e.defaultWidth, l = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[l] || e.values[a];
    }
    const i = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[i];
  };
}
function Je(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(o);
    if (!i)
      return null;
    const a = i[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], s = Array.isArray(l) ? Da(l, (y) => y.test(a)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      Ia(l, (y) => y.test(a))
    );
    let d;
    d = e.valueCallback ? e.valueCallback(s) : s, d = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(d)
    ) : d;
    const g = t.slice(a.length);
    return { value: d, rest: g };
  };
}
function Ia(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function Da(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function Fa(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], i = t.match(e.parsePattern);
    if (!i) return null;
    let a = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    a = n.valueCallback ? n.valueCallback(a) : a;
    const l = t.slice(o.length);
    return { value: a, rest: l };
  };
}
const ka = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Na = (e, t, n) => {
  let r;
  const o = ka[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
}, Ha = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, La = (e, t, n, r) => Ha[e], Wa = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, ja = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Va = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, Ua = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, Xa = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Ya = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Ga = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, Ka = {
  ordinalNumber: Ga,
  era: Ze({
    values: Wa,
    defaultWidth: "wide"
  }),
  quarter: Ze({
    values: ja,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Ze({
    values: Va,
    defaultWidth: "wide"
  }),
  day: Ze({
    values: Ua,
    defaultWidth: "wide"
  }),
  dayPeriod: Ze({
    values: Xa,
    defaultWidth: "wide",
    formattingValues: Ya,
    defaultFormattingWidth: "wide"
  })
}, qa = /^(\d+)(th|st|nd|rd)?/i, Za = /\d+/i, Ja = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Qa = {
  any: [/^b/i, /^(a|c)/i]
}, el = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, tl = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, nl = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, rl = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, ol = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, il = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, al = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, ll = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, sl = {
  ordinalNumber: Fa({
    matchPattern: qa,
    parsePattern: Za,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Je({
    matchPatterns: Ja,
    defaultMatchWidth: "wide",
    parsePatterns: Qa,
    defaultParseWidth: "any"
  }),
  quarter: Je({
    matchPatterns: el,
    defaultMatchWidth: "wide",
    parsePatterns: tl,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Je({
    matchPatterns: nl,
    defaultMatchWidth: "wide",
    parsePatterns: rl,
    defaultParseWidth: "any"
  }),
  day: Je({
    matchPatterns: ol,
    defaultMatchWidth: "wide",
    parsePatterns: il,
    defaultParseWidth: "any"
  }),
  dayPeriod: Je({
    matchPatterns: al,
    defaultMatchWidth: "any",
    parsePatterns: ll,
    defaultParseWidth: "any"
  })
}, ul = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, cl = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, dl = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, fl = {
  date: qt({
    formats: ul,
    defaultWidth: "full"
  }),
  time: qt({
    formats: cl,
    defaultWidth: "full"
  }),
  dateTime: qt({
    formats: dl,
    defaultWidth: "full"
  })
}, hl = {
  code: "en-US",
  formatDistance: Na,
  formatLong: fl,
  formatRelative: La,
  localize: Ka,
  match: sl,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, pl = {
  name: "en-US",
  locale: hl
};
function ml(e) {
  const {
    mergedLocaleRef: t,
    mergedDateLocaleRef: n
  } = oe(ct, null) || {}, r = M(() => {
    var i, a;
    return (a = (i = t == null ? void 0 : t.value) === null || i === void 0 ? void 0 : i[e]) !== null && a !== void 0 ? a : Ba[e];
  });
  return {
    dateLocaleRef: M(() => {
      var i;
      return (i = n == null ? void 0 : n.value) !== null && i !== void 0 ? i : pl;
    }),
    localeRef: r
  };
}
const sn = "naive-ui-style";
function vl(e, t, n) {
  if (!t) return;
  const r = At(), o = M(() => {
    const {
      value: l
    } = t;
    if (!l)
      return;
    const s = l[e];
    if (s)
      return s;
  }), i = oe(ct, null), a = () => {
    ze(() => {
      const {
        value: l
      } = n, s = `${l}${e}Rtl`;
      if (Li(s, r)) return;
      const {
        value: d
      } = o;
      d && d.style.mount({
        id: s,
        head: !0,
        anchorMetaName: sn,
        props: {
          bPrefix: l ? `.${l}-` : void 0
        },
        ssr: r,
        parent: i == null ? void 0 : i.styleMountTarget
      });
    });
  };
  return r ? a() : ur(a), o;
}
const pn = {
  fontFamily: 'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  fontFamilyMono: "v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",
  fontWeight: "400",
  fontWeightStrong: "500",
  cubicBezierEaseInOut: "cubic-bezier(.4, 0, .2, 1)",
  cubicBezierEaseOut: "cubic-bezier(0, 0, .2, 1)",
  cubicBezierEaseIn: "cubic-bezier(.4, 0, 1, 1)",
  borderRadius: "3px",
  borderRadiusSmall: "2px",
  fontSize: "14px",
  fontSizeMini: "12px",
  fontSizeTiny: "12px",
  fontSizeSmall: "14px",
  fontSizeMedium: "14px",
  fontSizeLarge: "15px",
  fontSizeHuge: "16px",
  lineHeight: "1.6",
  heightMini: "16px",
  // private now, it's too small
  heightTiny: "22px",
  heightSmall: "28px",
  heightMedium: "34px",
  heightLarge: "40px",
  heightHuge: "46px"
}, {
  fontSize: bl,
  fontFamily: gl,
  lineHeight: wl
} = pn, yl = N("body", `
 margin: 0;
 font-size: ${bl};
 font-family: ${gl};
 line-height: ${wl};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [N("input", `
 font-family: inherit;
 font-size: inherit;
 `)]);
function _e(e, t, n, r, o, i) {
  const a = At(), l = oe(ct, null);
  if (n) {
    const d = () => {
      const g = i == null ? void 0 : i.value;
      n.mount({
        id: g === void 0 ? t : g + t,
        head: !0,
        props: {
          bPrefix: g ? `.${g}-` : void 0
        },
        anchorMetaName: sn,
        ssr: a,
        parent: l == null ? void 0 : l.styleMountTarget
      }), l != null && l.preflightStyleDisabled || yl.mount({
        id: "n-global",
        head: !0,
        anchorMetaName: sn,
        ssr: a,
        parent: l == null ? void 0 : l.styleMountTarget
      });
    };
    a ? d() : ur(d);
  }
  return M(() => {
    var d;
    const {
      theme: {
        common: g,
        self: y,
        peers: h = {}
      } = {},
      themeOverrides: w = {},
      builtinThemeOverrides: c = {}
    } = o, {
      common: b,
      peers: p
    } = w, {
      common: u = void 0,
      [e]: {
        common: E = void 0,
        self: B = void 0,
        peers: D = {}
      } = {}
    } = (l == null ? void 0 : l.mergedThemeRef.value) || {}, {
      common: V = void 0,
      [e]: I = {}
    } = (l == null ? void 0 : l.mergedThemeOverridesRef.value) || {}, {
      common: f,
      peers: v = {}
    } = I, _ = ht({}, g || E || u || r.common, V, f, b), x = ht(
      // {}, executed every time, no need for empty obj
      (d = y || B || r.self) === null || d === void 0 ? void 0 : d(_),
      c,
      I,
      w
    );
    return {
      common: _,
      self: x,
      peers: ht({}, r.peers, D, h),
      peerOverrides: ht({}, c.peers, v, p)
    };
  });
}
_e.props = {
  theme: Object,
  themeOverrides: Object,
  builtinThemeOverrides: Object
};
const Sl = (e) => 1 - Math.pow(1 - e, 5);
function xl(e) {
  const {
    from: t,
    to: n,
    duration: r,
    onUpdate: o,
    onFinish: i
  } = e, a = performance.now(), l = () => {
    const s = performance.now(), d = Math.min(s - a, r), g = t + (n - t) * Sl(d / r);
    if (d === r) {
      i();
      return;
    }
    o(g), requestAnimationFrame(l);
  };
  l();
}
const _l = {
  to: {
    type: Number,
    default: 0
  },
  precision: {
    type: Number,
    default: 0
  },
  showSeparator: Boolean,
  locale: String,
  from: {
    type: Number,
    default: 0
  },
  active: {
    type: Boolean,
    default: !0
  },
  duration: {
    type: Number,
    default: 2e3
  },
  onFinish: Function
}, mn = q({
  name: "NumberAnimation",
  props: _l,
  setup(e) {
    const {
      localeRef: t
    } = ml("name"), {
      duration: n
    } = e, r = T(e.from), o = M(() => {
      const {
        locale: h
      } = e;
      return h !== void 0 ? h : t.value;
    });
    let i = !1;
    const a = (h) => {
      r.value = h;
    }, l = () => {
      var h;
      r.value = e.to, i = !1, (h = e.onFinish) === null || h === void 0 || h.call(e);
    }, s = (h = e.from, w = e.to) => {
      i = !0, r.value = e.from, h !== w && xl({
        from: h,
        to: w,
        duration: n,
        onUpdate: a,
        onFinish: l
      });
    }, d = M(() => {
      var h;
      const c = ko(r.value, e.precision).toFixed(e.precision).split("."), b = new Intl.NumberFormat(o.value), p = (h = b.formatToParts(0.5).find((B) => B.type === "decimal")) === null || h === void 0 ? void 0 : h.value, u = e.showSeparator ? b.format(Number(c[0])) : c[0], E = c[1];
      return {
        integer: u,
        decimal: E,
        decimalSeparator: p
      };
    });
    function g() {
      i || s();
    }
    return ye(() => {
      ze(() => {
        e.active && s();
      });
    }), Object.assign({
      formattedValue: d
    }, {
      play: g
    });
  },
  render() {
    const {
      formattedValue: {
        integer: e,
        decimal: t,
        decimalSeparator: n
      }
    } = this;
    return [e, t ? n : null, t];
  }
});
var Cl = typeof global == "object" && global && global.Object === Object && global, El = typeof self == "object" && self && self.Object === Object && self, vn = Cl || El || Function("return this")(), Mt = vn.Symbol, Hr = Object.prototype, $l = Hr.hasOwnProperty, Pl = Hr.toString, Qe = Mt ? Mt.toStringTag : void 0;
function Ml(e) {
  var t = $l.call(e, Qe), n = e[Qe];
  try {
    e[Qe] = void 0;
    var r = !0;
  } catch {
  }
  var o = Pl.call(e);
  return r && (t ? e[Qe] = n : delete e[Qe]), o;
}
var Ol = Object.prototype, Tl = Ol.toString;
function Rl(e) {
  return Tl.call(e);
}
var zl = "[object Null]", Al = "[object Undefined]", or = Mt ? Mt.toStringTag : void 0;
function Bl(e) {
  return e == null ? e === void 0 ? Al : zl : or && or in Object(e) ? Ml(e) : Rl(e);
}
function Lr(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Il = "[object AsyncFunction]", Dl = "[object Function]", Fl = "[object GeneratorFunction]", kl = "[object Proxy]";
function Nl(e) {
  if (!Lr(e))
    return !1;
  var t = Bl(e);
  return t == Dl || t == Fl || t == Il || t == kl;
}
var Zt = vn["__core-js_shared__"], ir = function() {
  var e = /[^.]+$/.exec(Zt && Zt.keys && Zt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Hl(e) {
  return !!ir && ir in e;
}
var Ll = Function.prototype, Wl = Ll.toString;
function jl(e) {
  if (e != null) {
    try {
      return Wl.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Vl = /[\\^$.*+?()[\]{}|]/g, Ul = /^\[object .+?Constructor\]$/, Xl = Function.prototype, Yl = Object.prototype, Gl = Xl.toString, Kl = Yl.hasOwnProperty, ql = RegExp(
  "^" + Gl.call(Kl).replace(Vl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Zl(e) {
  if (!Lr(e) || Hl(e))
    return !1;
  var t = Nl(e) ? ql : Ul;
  return t.test(jl(e));
}
function Jl(e, t) {
  return e == null ? void 0 : e[t];
}
function Wr(e, t) {
  var n = Jl(e, t);
  return Zl(n) ? n : void 0;
}
var ut = Wr(Object, "create");
function Ql() {
  this.__data__ = ut ? ut(null) : {}, this.size = 0;
}
function es(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var ts = "__lodash_hash_undefined__", ns = Object.prototype, rs = ns.hasOwnProperty;
function os(e) {
  var t = this.__data__;
  if (ut) {
    var n = t[e];
    return n === ts ? void 0 : n;
  }
  return rs.call(t, e) ? t[e] : void 0;
}
var is = Object.prototype, as = is.hasOwnProperty;
function ls(e) {
  var t = this.__data__;
  return ut ? t[e] !== void 0 : as.call(t, e);
}
var ss = "__lodash_hash_undefined__";
function us(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = ut && t === void 0 ? ss : t, this;
}
function Ae(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Ae.prototype.clear = Ql;
Ae.prototype.delete = es;
Ae.prototype.get = os;
Ae.prototype.has = ls;
Ae.prototype.set = us;
function cs() {
  this.__data__ = [], this.size = 0;
}
function ds(e, t) {
  return e === t || e !== e && t !== t;
}
function It(e, t) {
  for (var n = e.length; n--; )
    if (ds(e[n][0], t))
      return n;
  return -1;
}
var fs = Array.prototype, hs = fs.splice;
function ps(e) {
  var t = this.__data__, n = It(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : hs.call(t, n, 1), --this.size, !0;
}
function ms(e) {
  var t = this.__data__, n = It(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function vs(e) {
  return It(this.__data__, e) > -1;
}
function bs(e, t) {
  var n = this.__data__, r = It(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function Ge(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Ge.prototype.clear = cs;
Ge.prototype.delete = ps;
Ge.prototype.get = ms;
Ge.prototype.has = vs;
Ge.prototype.set = bs;
var gs = Wr(vn, "Map");
function ws() {
  this.size = 0, this.__data__ = {
    hash: new Ae(),
    map: new (gs || Ge)(),
    string: new Ae()
  };
}
function ys(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Dt(e, t) {
  var n = e.__data__;
  return ys(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Ss(e) {
  var t = Dt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function xs(e) {
  return Dt(this, e).get(e);
}
function _s(e) {
  return Dt(this, e).has(e);
}
function Cs(e, t) {
  var n = Dt(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function Be(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Be.prototype.clear = ws;
Be.prototype.delete = Ss;
Be.prototype.get = xs;
Be.prototype.has = _s;
Be.prototype.set = Cs;
var Es = "Expected a function";
function Ot(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Es);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], i = n.cache;
    if (i.has(o))
      return i.get(o);
    var a = e.apply(this, r);
    return n.cache = i.set(o, a) || i, a;
  };
  return n.cache = new (Ot.Cache || Be)(), n;
}
Ot.Cache = Be;
const $s = { class: "lc-range-indicator" }, Ps = { class: "lc-range-indicator__wrapper" }, Ms = { class: "lc-range-indicator__wrapper__info-range" }, Os = { class: "lc-range-indicator__wrapper__info--result" }, Ts = { class: "lc-range-indicator__wrapper__info--result--value" }, Rs = {
  key: 0,
  class: "lc-range-indicator__wrapper__info--result--unit"
}, zs = { class: "lc-range-indicator__wrapper__info--label" }, As = /* @__PURE__ */ q({
  __name: "rangeIndicator",
  props: /* @__PURE__ */ zt({
    data: {
      type: Object
    },
    unit: {
      type: String
    },
    fixed: {
      type: Boolean
    },
    decimal: {
      type: Number
    }
  }, {
    data: () => [],
    fixed: !0,
    decimal: 0,
    unit: ""
  }),
  setup(e) {
    const t = Ot((r) => {
      if (e.fixed) {
        const { result: o } = je(r, e.decimal);
        return o;
      }
      return r;
    }), n = Ot((r, o) => {
      if (e.fixed) {
        const { unit: i } = je(r, e.decimal);
        return `${i}${o || e.unit}`;
      }
      return e.unit;
    });
    return (r, o) => (ie(), ae("div", $s, [
      z("div", Ps, [
        o[1] || (o[1] = z(
          "div",
          { class: "lc-range-indicator__wrapper__table--bg" },
          null,
          -1
          /* HOISTED */
        )),
        z("div", Ms, [
          (ie(!0), ae(
            xe,
            null,
            cr(e.data, (i, a) => (ie(), ae("div", {
              class: "lc-range-indicator__wrapper__info",
              key: a
            }, [
              o[0] || (o[0] = z(
                "div",
                { class: "lc-range-indicator__wrapper__info__decorator--bg" },
                null,
                -1
                /* HOISTED */
              )),
              z("div", Os, [
                z("div", Ts, [
                  We(ve(mn), {
                    "show-separator": "",
                    from: 0,
                    to: ve(t)(i.value),
                    active: "",
                    precision: e.decimal
                  }, null, 8, ["to", "precision"])
                ]),
                ve(n)(i.value, i.unit) ? (ie(), ae(
                  "div",
                  Rs,
                  de(ve(n)(i.value, i.unit)),
                  1
                  /* TEXT */
                )) : at("v-if", !0)
              ]),
              z(
                "div",
                zs,
                de(i.label),
                1
                /* TEXT */
              )
            ]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ])
    ]));
  }
}), dt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Wu = /* @__PURE__ */ dt(As, [["__scopeId", "data-v-9d4d115d"]]), $ = {
  neutralBase: "#FFF",
  neutralInvertBase: "#000",
  neutralTextBase: "#000",
  neutralPopover: "#fff",
  neutralCard: "#fff",
  neutralModal: "#fff",
  neutralBody: "#fff",
  alpha1: "0.82",
  alpha2: "0.72",
  alpha3: "0.38",
  alpha4: "0.24",
  // disabled text, placeholder, icon
  alpha5: "0.18",
  // disabled placeholder
  alphaClose: "0.6",
  alphaDisabled: "0.5",
  alphaDisabledInput: "0.02",
  alphaPending: "0.05",
  alphaTablePending: "0.02",
  alphaPressed: "0.07",
  alphaAvatar: "0.2",
  alphaRail: "0.14",
  alphaProgressRail: ".08",
  alphaBorder: "0.12",
  alphaDivider: "0.06",
  alphaInput: "0",
  alphaAction: "0.02",
  alphaTab: "0.04",
  alphaScrollbar: "0.25",
  alphaScrollbarHover: "0.4",
  alphaCode: "0.05",
  alphaTag: "0.02",
  // primary
  primaryHover: "#36ad6a",
  primaryDefault: "#18a058",
  primaryActive: "#0c7a43",
  primarySuppl: "#36ad6a",
  // info
  infoHover: "#4098fc",
  infoDefault: "#2080f0",
  infoActive: "#1060c9",
  infoSuppl: "#4098fc",
  // error
  errorHover: "#de576d",
  errorDefault: "#d03050",
  errorActive: "#ab1f3f",
  errorSuppl: "#de576d",
  // warning
  warningHover: "#fcb040",
  warningDefault: "#f0a020",
  warningActive: "#c97c10",
  warningSuppl: "#fcb040",
  // success
  successHover: "#36ad6a",
  successDefault: "#18a058",
  successActive: "#0c7a43",
  successSuppl: "#36ad6a"
}, Bs = Ue($.neutralBase), jr = Ue($.neutralInvertBase), Is = `rgba(${jr.slice(0, 3).join(", ")}, `;
function ar(e) {
  return `${Is + String(e)})`;
}
function Z(e) {
  const t = Array.from(jr);
  return t[3] = Number(e), wr(Bs, t);
}
const bn = Object.assign(Object.assign({
  name: "common"
}, pn), {
  baseColor: $.neutralBase,
  // primary color
  primaryColor: $.primaryDefault,
  primaryColorHover: $.primaryHover,
  primaryColorPressed: $.primaryActive,
  primaryColorSuppl: $.primarySuppl,
  // info color
  infoColor: $.infoDefault,
  infoColorHover: $.infoHover,
  infoColorPressed: $.infoActive,
  infoColorSuppl: $.infoSuppl,
  // success color
  successColor: $.successDefault,
  successColorHover: $.successHover,
  successColorPressed: $.successActive,
  successColorSuppl: $.successSuppl,
  // warning color
  warningColor: $.warningDefault,
  warningColorHover: $.warningHover,
  warningColorPressed: $.warningActive,
  warningColorSuppl: $.warningSuppl,
  // error color
  errorColor: $.errorDefault,
  errorColorHover: $.errorHover,
  errorColorPressed: $.errorActive,
  errorColorSuppl: $.errorSuppl,
  // text color
  textColorBase: $.neutralTextBase,
  textColor1: "rgb(31, 34, 37)",
  textColor2: "rgb(51, 54, 57)",
  textColor3: "rgb(118, 124, 130)",
  // textColor4: neutral(base.alpha4), // disabled, placeholder, icon
  // textColor5: neutral(base.alpha5),
  textColorDisabled: Z($.alpha4),
  placeholderColor: Z($.alpha4),
  placeholderColorDisabled: Z($.alpha5),
  iconColor: Z($.alpha4),
  iconColorHover: pt(Z($.alpha4), {
    lightness: 0.75
  }),
  iconColorPressed: pt(Z($.alpha4), {
    lightness: 0.9
  }),
  iconColorDisabled: Z($.alpha5),
  opacity1: $.alpha1,
  opacity2: $.alpha2,
  opacity3: $.alpha3,
  opacity4: $.alpha4,
  opacity5: $.alpha5,
  dividerColor: "rgb(239, 239, 245)",
  borderColor: "rgb(224, 224, 230)",
  // close
  closeIconColor: Z(Number($.alphaClose)),
  closeIconColorHover: Z(Number($.alphaClose)),
  closeIconColorPressed: Z(Number($.alphaClose)),
  closeColorHover: "rgba(0, 0, 0, .09)",
  closeColorPressed: "rgba(0, 0, 0, .13)",
  // clear
  clearColor: Z($.alpha4),
  clearColorHover: pt(Z($.alpha4), {
    lightness: 0.75
  }),
  clearColorPressed: pt(Z($.alpha4), {
    lightness: 0.9
  }),
  scrollbarColor: ar($.alphaScrollbar),
  scrollbarColorHover: ar($.alphaScrollbarHover),
  scrollbarWidth: "5px",
  scrollbarHeight: "5px",
  scrollbarBorderRadius: "5px",
  progressRailColor: Z($.alphaProgressRail),
  railColor: "rgb(219, 219, 223)",
  popoverColor: $.neutralPopover,
  tableColor: $.neutralCard,
  cardColor: $.neutralCard,
  modalColor: $.neutralModal,
  bodyColor: $.neutralBody,
  tagColor: "#eee",
  avatarColor: Z($.alphaAvatar),
  invertedColor: "rgb(0, 20, 40)",
  inputColor: Z($.alphaInput),
  codeColor: "rgb(244, 244, 248)",
  tabColor: "rgb(247, 247, 250)",
  actionColor: "rgb(250, 250, 252)",
  tableHeaderColor: "rgb(250, 250, 252)",
  hoverColor: "rgb(243, 243, 245)",
  // use color with alpha since it can be nested with header filter & sorter effect
  tableColorHover: "rgba(0, 0, 100, 0.03)",
  tableColorStriped: "rgba(0, 0, 100, 0.02)",
  pressedColor: "rgb(237, 237, 239)",
  opacityDisabled: $.alphaDisabled,
  inputColorDisabled: "rgb(250, 250, 252)",
  // secondary button color
  // can also be used in tertiary button & quaternary button
  buttonColor2: "rgba(46, 51, 56, .05)",
  buttonColor2Hover: "rgba(46, 51, 56, .09)",
  buttonColor2Pressed: "rgba(46, 51, 56, .13)",
  boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",
  boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",
  boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"
}), Ds = {
  railInsetHorizontalBottom: "auto 2px 4px 2px",
  railInsetHorizontalTop: "4px 2px auto 2px",
  railInsetVerticalRight: "2px 4px 2px auto",
  railInsetVerticalLeft: "2px auto 2px 4px",
  railColor: "transparent"
};
function Fs(e) {
  const {
    scrollbarColor: t,
    scrollbarColorHover: n,
    scrollbarHeight: r,
    scrollbarWidth: o,
    scrollbarBorderRadius: i
  } = e;
  return Object.assign(Object.assign({}, Ds), {
    height: r,
    width: o,
    borderRadius: i,
    color: t,
    colorHover: n
  });
}
const ks = {
  name: "Scrollbar",
  common: bn,
  self: Fs
}, {
  cubicBezierEaseInOut: lr
} = pn;
function Ns({
  name: e = "fade-in",
  enterDuration: t = "0.2s",
  leaveDuration: n = "0.2s",
  enterCubicBezier: r = lr,
  leaveCubicBezier: o = lr
} = {}) {
  return [N(`&.${e}-transition-enter-active`, {
    transition: `all ${t} ${r}!important`
  }), N(`&.${e}-transition-leave-active`, {
    transition: `all ${n} ${o}!important`
  }), N(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`, {
    opacity: 0
  }), N(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`, {
    opacity: 1
  })];
}
const Hs = re("scrollbar", `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [N(">", [re("scrollbar-container", `
 width: 100%;
 overflow: scroll;
 height: 100%;
 min-height: inherit;
 max-height: inherit;
 scrollbar-width: none;
 `, [N("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), N(">", [
  // We can't set overflow hidden since it affects positioning.
  re("scrollbar-content", `
 box-sizing: border-box;
 min-width: 100%;
 `)
])])]), N(">, +", [re("scrollbar-rail", `
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `, [ce("horizontal", `
 height: var(--n-scrollbar-height);
 `, [N(">", [Oe("scrollbar", `
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]), ce("horizontal--top", `
 top: var(--n-scrollbar-rail-top-horizontal-top); 
 right: var(--n-scrollbar-rail-right-horizontal-top); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-top); 
 left: var(--n-scrollbar-rail-left-horizontal-top); 
 `), ce("horizontal--bottom", `
 top: var(--n-scrollbar-rail-top-horizontal-bottom); 
 right: var(--n-scrollbar-rail-right-horizontal-bottom); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-bottom); 
 left: var(--n-scrollbar-rail-left-horizontal-bottom); 
 `), ce("vertical", `
 width: var(--n-scrollbar-width);
 `, [N(">", [Oe("scrollbar", `
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]), ce("vertical--left", `
 top: var(--n-scrollbar-rail-top-vertical-left); 
 right: var(--n-scrollbar-rail-right-vertical-left); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-left); 
 left: var(--n-scrollbar-rail-left-vertical-left); 
 `), ce("vertical--right", `
 top: var(--n-scrollbar-rail-top-vertical-right); 
 right: var(--n-scrollbar-rail-right-vertical-right); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-right); 
 left: var(--n-scrollbar-rail-left-vertical-right); 
 `), ce("disabled", [N(">", [Oe("scrollbar", "pointer-events: none;")])]), N(">", [Oe("scrollbar", `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [Ns(), N("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), Ls = Object.assign(Object.assign({}, _e.props), {
  duration: {
    type: Number,
    default: 0
  },
  scrollable: {
    type: Boolean,
    default: !0
  },
  xScrollable: Boolean,
  trigger: {
    type: String,
    default: "hover"
  },
  useUnifiedContainer: Boolean,
  triggerDisplayManually: Boolean,
  // If container is set, resize observer won't not attached
  container: Function,
  content: Function,
  containerClass: String,
  containerStyle: [String, Object],
  contentClass: [String, Array],
  contentStyle: [String, Object],
  horizontalRailStyle: [String, Object],
  verticalRailStyle: [String, Object],
  onScroll: Function,
  onWheel: Function,
  onResize: Function,
  internalOnUpdateScrollLeft: Function,
  internalHoistYRail: Boolean,
  yPlacement: {
    type: String,
    default: "right"
  },
  xPlacement: {
    type: String,
    default: "bottom"
  }
}), Ws = q({
  name: "Scrollbar",
  props: Ls,
  inheritAttrs: !1,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: n,
      mergedRtlRef: r
    } = hn(e), o = vl("Scrollbar", r, t), i = T(null), a = T(null), l = T(null), s = T(null), d = T(null), g = T(null), y = T(null), h = T(null), w = T(null), c = T(null), b = T(null), p = T(0), u = T(0), E = T(!1), B = T(!1);
    let D = !1, V = !1, I, f, v = 0, _ = 0, x = 0, A = 0;
    const F = Qo(), H = _e("Scrollbar", "-scrollbar", Hs, ks, e, t), L = M(() => {
      const {
        value: m
      } = h, {
        value: C
      } = g, {
        value: P
      } = c;
      return m === null || C === null || P === null ? 0 : Math.min(m, P * m / C + Mn(H.value.self.width) * 1.5);
    }), S = M(() => `${L.value}px`), R = M(() => {
      const {
        value: m
      } = w, {
        value: C
      } = y, {
        value: P
      } = b;
      return m === null || C === null || P === null ? 0 : P * m / C + Mn(H.value.self.height) * 1.5;
    }), W = M(() => `${R.value}px`), G = M(() => {
      const {
        value: m
      } = h, {
        value: C
      } = p, {
        value: P
      } = g, {
        value: k
      } = c;
      if (m === null || P === null || k === null)
        return 0;
      {
        const U = P - m;
        return U ? C / U * (k - L.value) : 0;
      }
    }), Q = M(() => `${G.value}px`), K = M(() => {
      const {
        value: m
      } = w, {
        value: C
      } = u, {
        value: P
      } = y, {
        value: k
      } = b;
      if (m === null || P === null || k === null)
        return 0;
      {
        const U = P - m;
        return U ? C / U * (k - R.value) : 0;
      }
    }), fe = M(() => `${K.value}px`), ft = M(() => {
      const {
        value: m
      } = h, {
        value: C
      } = g;
      return m !== null && C !== null && C > m;
    }), gn = M(() => {
      const {
        value: m
      } = w, {
        value: C
      } = y;
      return m !== null && C !== null && C > m;
    }), Gr = M(() => {
      const {
        trigger: m
      } = e;
      return m === "none" || E.value;
    }), Kr = M(() => {
      const {
        trigger: m
      } = e;
      return m === "none" || B.value;
    }), Ce = M(() => {
      const {
        container: m
      } = e;
      return m ? m() : a.value;
    }), qr = M(() => {
      const {
        content: m
      } = e;
      return m ? m() : l.value;
    }), wn = (m, C) => {
      if (!e.scrollable) return;
      if (typeof m == "number") {
        Ie(m, C ?? 0, 0, !1, "auto");
        return;
      }
      const {
        left: P,
        top: k,
        index: U,
        elSize: te,
        position: ue,
        behavior: j,
        el: le,
        debounce: be = !0
      } = m;
      (P !== void 0 || k !== void 0) && Ie(P ?? 0, k ?? 0, 0, !1, j), le !== void 0 ? Ie(0, le.offsetTop, le.offsetHeight, be, j) : U !== void 0 && te !== void 0 ? Ie(0, U * te, te, be, j) : ue === "bottom" ? Ie(0, Number.MAX_SAFE_INTEGER, 0, !1, j) : ue === "top" && Ie(0, 0, 0, !1, j);
    }, yn = ti(() => {
      e.container || wn({
        top: p.value,
        left: u.value
      });
    }), Zr = () => {
      yn.isDeactivated || Ee();
    }, Jr = (m) => {
      if (yn.isDeactivated) return;
      const {
        onResize: C
      } = e;
      C && C(m), Ee();
    }, Qr = (m, C) => {
      if (!e.scrollable) return;
      const {
        value: P
      } = Ce;
      P && (typeof m == "object" ? P.scrollBy(m) : P.scrollBy(m, C || 0));
    };
    function Ie(m, C, P, k, U) {
      const {
        value: te
      } = Ce;
      if (te) {
        if (k) {
          const {
            scrollTop: ue,
            offsetHeight: j
          } = te;
          if (C > ue) {
            C + P <= ue + j || te.scrollTo({
              left: m,
              top: C + P - j,
              behavior: U
            });
            return;
          }
        }
        te.scrollTo({
          left: m,
          top: C,
          behavior: U
        });
      }
    }
    function eo() {
      oo(), io(), Ee();
    }
    function to() {
      Ft();
    }
    function Ft() {
      no(), ro();
    }
    function no() {
      f !== void 0 && window.clearTimeout(f), f = window.setTimeout(() => {
        B.value = !1;
      }, e.duration);
    }
    function ro() {
      I !== void 0 && window.clearTimeout(I), I = window.setTimeout(() => {
        E.value = !1;
      }, e.duration);
    }
    function oo() {
      I !== void 0 && window.clearTimeout(I), E.value = !0;
    }
    function io() {
      f !== void 0 && window.clearTimeout(f), B.value = !0;
    }
    function ao(m) {
      const {
        onScroll: C
      } = e;
      C && C(m), Sn();
    }
    function Sn() {
      const {
        value: m
      } = Ce;
      m && (p.value = m.scrollTop, u.value = m.scrollLeft * (o != null && o.value ? -1 : 1));
    }
    function lo() {
      const {
        value: m
      } = qr;
      m && (g.value = m.offsetHeight, y.value = m.offsetWidth);
      const {
        value: C
      } = Ce;
      C && (h.value = C.offsetHeight, w.value = C.offsetWidth);
      const {
        value: P
      } = d, {
        value: k
      } = s;
      P && (b.value = P.offsetWidth), k && (c.value = k.offsetHeight);
    }
    function xn() {
      const {
        value: m
      } = Ce;
      m && (p.value = m.scrollTop, u.value = m.scrollLeft * (o != null && o.value ? -1 : 1), h.value = m.offsetHeight, w.value = m.offsetWidth, g.value = m.scrollHeight, y.value = m.scrollWidth);
      const {
        value: C
      } = d, {
        value: P
      } = s;
      C && (b.value = C.offsetWidth), P && (c.value = P.offsetHeight);
    }
    function Ee() {
      e.scrollable && (e.useUnifiedContainer ? xn() : (lo(), Sn()));
    }
    function _n(m) {
      var C;
      return !(!((C = i.value) === null || C === void 0) && C.contains(Pt(m)));
    }
    function so(m) {
      m.preventDefault(), m.stopPropagation(), V = !0, ee("mousemove", window, Cn, !0), ee("mouseup", window, En, !0), _ = u.value, x = o != null && o.value ? window.innerWidth - m.clientX : m.clientX;
    }
    function Cn(m) {
      if (!V) return;
      I !== void 0 && window.clearTimeout(I), f !== void 0 && window.clearTimeout(f);
      const {
        value: C
      } = w, {
        value: P
      } = y, {
        value: k
      } = R;
      if (C === null || P === null) return;
      const te = (o != null && o.value ? window.innerWidth - m.clientX - x : m.clientX - x) * (P - C) / (C - k), ue = P - C;
      let j = _ + te;
      j = Math.min(ue, j), j = Math.max(j, 0);
      const {
        value: le
      } = Ce;
      if (le) {
        le.scrollLeft = j * (o != null && o.value ? -1 : 1);
        const {
          internalOnUpdateScrollLeft: be
        } = e;
        be && be(j);
      }
    }
    function En(m) {
      m.preventDefault(), m.stopPropagation(), Y("mousemove", window, Cn, !0), Y("mouseup", window, En, !0), V = !1, Ee(), _n(m) && Ft();
    }
    function uo(m) {
      m.preventDefault(), m.stopPropagation(), D = !0, ee("mousemove", window, kt, !0), ee("mouseup", window, Nt, !0), v = p.value, A = m.clientY;
    }
    function kt(m) {
      if (!D) return;
      I !== void 0 && window.clearTimeout(I), f !== void 0 && window.clearTimeout(f);
      const {
        value: C
      } = h, {
        value: P
      } = g, {
        value: k
      } = L;
      if (C === null || P === null) return;
      const te = (m.clientY - A) * (P - C) / (C - k), ue = P - C;
      let j = v + te;
      j = Math.min(ue, j), j = Math.max(j, 0);
      const {
        value: le
      } = Ce;
      le && (le.scrollTop = j);
    }
    function Nt(m) {
      m.preventDefault(), m.stopPropagation(), Y("mousemove", window, kt, !0), Y("mouseup", window, Nt, !0), D = !1, Ee(), _n(m) && Ft();
    }
    ze(() => {
      const {
        value: m
      } = gn, {
        value: C
      } = ft, {
        value: P
      } = t, {
        value: k
      } = d, {
        value: U
      } = s;
      k && (m ? k.classList.remove(`${P}-scrollbar-rail--disabled`) : k.classList.add(`${P}-scrollbar-rail--disabled`)), U && (C ? U.classList.remove(`${P}-scrollbar-rail--disabled`) : U.classList.add(`${P}-scrollbar-rail--disabled`));
    }), ye(() => {
      e.container || Ee();
    }), Se(() => {
      I !== void 0 && window.clearTimeout(I), f !== void 0 && window.clearTimeout(f), Y("mousemove", window, kt, !0), Y("mouseup", window, Nt, !0);
    });
    const $n = M(() => {
      const {
        common: {
          cubicBezierEaseInOut: m
        },
        self: {
          color: C,
          colorHover: P,
          height: k,
          width: U,
          borderRadius: te,
          railInsetHorizontalTop: ue,
          railInsetHorizontalBottom: j,
          railInsetVerticalRight: le,
          railInsetVerticalLeft: be,
          railColor: co
        }
      } = H.value, {
        top: fo,
        right: ho,
        bottom: po,
        left: mo
      } = et(ue), {
        top: vo,
        right: bo,
        bottom: go,
        left: wo
      } = et(j), {
        top: yo,
        right: So,
        bottom: xo,
        left: _o
      } = et(o != null && o.value ? Jn(le) : le), {
        top: Co,
        right: Eo,
        bottom: $o,
        left: Po
      } = et(o != null && o.value ? Jn(be) : be);
      return {
        "--n-scrollbar-bezier": m,
        "--n-scrollbar-color": C,
        "--n-scrollbar-color-hover": P,
        "--n-scrollbar-border-radius": te,
        "--n-scrollbar-width": U,
        "--n-scrollbar-height": k,
        "--n-scrollbar-rail-top-horizontal-top": fo,
        "--n-scrollbar-rail-right-horizontal-top": ho,
        "--n-scrollbar-rail-bottom-horizontal-top": po,
        "--n-scrollbar-rail-left-horizontal-top": mo,
        "--n-scrollbar-rail-top-horizontal-bottom": vo,
        "--n-scrollbar-rail-right-horizontal-bottom": bo,
        "--n-scrollbar-rail-bottom-horizontal-bottom": go,
        "--n-scrollbar-rail-left-horizontal-bottom": wo,
        "--n-scrollbar-rail-top-vertical-right": yo,
        "--n-scrollbar-rail-right-vertical-right": So,
        "--n-scrollbar-rail-bottom-vertical-right": xo,
        "--n-scrollbar-rail-left-vertical-right": _o,
        "--n-scrollbar-rail-top-vertical-left": Co,
        "--n-scrollbar-rail-right-vertical-left": Eo,
        "--n-scrollbar-rail-bottom-vertical-left": $o,
        "--n-scrollbar-rail-left-vertical-left": Po,
        "--n-scrollbar-rail-color": co
      };
    }), De = n ? Nr("scrollbar", void 0, $n, e) : void 0;
    return Object.assign(Object.assign({}, {
      scrollTo: wn,
      scrollBy: Qr,
      sync: Ee,
      syncUnifiedContainer: xn,
      handleMouseEnterWrapper: eo,
      handleMouseLeaveWrapper: to
    }), {
      mergedClsPrefix: t,
      rtlEnabled: o,
      containerScrollTop: p,
      wrapperRef: i,
      containerRef: a,
      contentRef: l,
      yRailRef: s,
      xRailRef: d,
      needYBar: ft,
      needXBar: gn,
      yBarSizePx: S,
      xBarSizePx: W,
      yBarTopPx: Q,
      xBarLeftPx: fe,
      isShowXBar: Gr,
      isShowYBar: Kr,
      isIos: F,
      handleScroll: ao,
      handleContentResize: Zr,
      handleContainerResize: Jr,
      handleYScrollMouseDown: uo,
      handleXScrollMouseDown: so,
      cssVars: n ? void 0 : $n,
      themeClass: De == null ? void 0 : De.themeClass,
      onRender: De == null ? void 0 : De.onRender
    });
  },
  render() {
    var e;
    const {
      $slots: t,
      mergedClsPrefix: n,
      triggerDisplayManually: r,
      rtlEnabled: o,
      internalHoistYRail: i,
      yPlacement: a,
      xPlacement: l,
      xScrollable: s
    } = this;
    if (!this.scrollable) return (e = t.default) === null || e === void 0 ? void 0 : e.call(t);
    const d = this.trigger === "none", g = (w, c) => O("div", {
      ref: "yRailRef",
      class: [`${n}-scrollbar-rail`, `${n}-scrollbar-rail--vertical`, `${n}-scrollbar-rail--vertical--${a}`, w],
      "data-scrollbar-rail": !0,
      style: [c || "", this.verticalRailStyle],
      "aria-hidden": !0
    }, O(d ? rr : en, d ? null : {
      name: "fade-in-transition"
    }, {
      default: () => this.needYBar && this.isShowYBar && !this.isIos ? O("div", {
        class: `${n}-scrollbar-rail__scrollbar`,
        style: {
          height: this.yBarSizePx,
          top: this.yBarTopPx
        },
        onMousedown: this.handleYScrollMouseDown
      }) : null
    })), y = () => {
      var w, c;
      return (w = this.onRender) === null || w === void 0 || w.call(this), O("div", cn(this.$attrs, {
        role: "none",
        ref: "wrapperRef",
        class: [`${n}-scrollbar`, this.themeClass, o && `${n}-scrollbar--rtl`],
        style: this.cssVars,
        onMouseenter: r ? void 0 : this.handleMouseEnterWrapper,
        onMouseleave: r ? void 0 : this.handleMouseLeaveWrapper
      }), [this.container ? (c = t.default) === null || c === void 0 ? void 0 : c.call(t) : O("div", {
        role: "none",
        ref: "containerRef",
        class: [`${n}-scrollbar-container`, this.containerClass],
        style: this.containerStyle,
        onScroll: this.handleScroll,
        onWheel: this.onWheel
      }, O(qn, {
        onResize: this.handleContentResize
      }, {
        default: () => O("div", {
          ref: "contentRef",
          role: "none",
          style: [{
            width: this.xScrollable ? "fit-content" : null
          }, this.contentStyle],
          class: [`${n}-scrollbar-content`, this.contentClass]
        }, t)
      })), i ? null : g(void 0, void 0), s && O("div", {
        ref: "xRailRef",
        class: [`${n}-scrollbar-rail`, `${n}-scrollbar-rail--horizontal`, `${n}-scrollbar-rail--horizontal--${l}`],
        style: this.horizontalRailStyle,
        "data-scrollbar-rail": !0,
        "aria-hidden": !0
      }, O(d ? rr : en, d ? null : {
        name: "fade-in-transition"
      }, {
        default: () => this.needXBar && this.isShowXBar && !this.isIos ? O("div", {
          class: `${n}-scrollbar-rail__scrollbar`,
          style: {
            width: this.xBarSizePx,
            right: o ? this.xBarLeftPx : void 0,
            left: o ? void 0 : this.xBarLeftPx
          },
          onMousedown: this.handleXScrollMouseDown
        }) : null
      }))]);
    }, h = this.container ? y() : O(qn, {
      onResize: this.handleContainerResize
    }, {
      default: y
    });
    return i ? O(xe, null, h, g(this.themeClass, this.cssVars)) : h;
  }
}), js = Ws, Vs = {
  space: "6px",
  spaceArrow: "10px",
  arrowOffset: "10px",
  arrowOffsetVertical: "10px",
  arrowHeight: "6px",
  padding: "8px 14px"
};
function Us(e) {
  const {
    boxShadow2: t,
    popoverColor: n,
    textColor2: r,
    borderRadius: o,
    fontSize: i,
    dividerColor: a
  } = e;
  return Object.assign(Object.assign({}, Vs), {
    fontSize: i,
    borderRadius: o,
    color: n,
    dividerColor: a,
    textColor: r,
    boxShadow: t
  });
}
const Vr = {
  name: "Popover",
  common: bn,
  self: Us
}, Jt = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, X = "var(--n-arrow-height) * 1.414", Xs = N([re("popover", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `, [N(">", [re("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), Yt("raw", `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [Yt("scrollable", [Yt("show-header-or-footer", "padding: var(--n-padding);")])]), Oe("header", `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), Oe("footer", `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), ce("scrollable, show-header-or-footer", [Oe("content", `
 padding: var(--n-padding);
 `)])]), re("popover-shared", `
 transform-origin: inherit;
 `, [
  re("popover-arrow-wrapper", `
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `, [re("popover-arrow", `
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${X});
 height: calc(${X});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),
  // body transition
  N("&.popover-transition-enter-from, &.popover-transition-leave-to", `
 opacity: 0;
 transform: scale(.85);
 `),
  N("&.popover-transition-enter-to, &.popover-transition-leave-from", `
 transform: scale(1);
 opacity: 1;
 `),
  N("&.popover-transition-enter-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),
  N("&.popover-transition-leave-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)
]), se("top-start", `
 top: calc(${X} / -2);
 left: calc(${pe("top-start")} - var(--v-offset-left));
 `), se("top", `
 top: calc(${X} / -2);
 transform: translateX(calc(${X} / -2)) rotate(45deg);
 left: 50%;
 `), se("top-end", `
 top: calc(${X} / -2);
 right: calc(${pe("top-end")} + var(--v-offset-left));
 `), se("bottom-start", `
 bottom: calc(${X} / -2);
 left: calc(${pe("bottom-start")} - var(--v-offset-left));
 `), se("bottom", `
 bottom: calc(${X} / -2);
 transform: translateX(calc(${X} / -2)) rotate(45deg);
 left: 50%;
 `), se("bottom-end", `
 bottom: calc(${X} / -2);
 right: calc(${pe("bottom-end")} + var(--v-offset-left));
 `), se("left-start", `
 left: calc(${X} / -2);
 top: calc(${pe("left-start")} - var(--v-offset-top));
 `), se("left", `
 left: calc(${X} / -2);
 transform: translateY(calc(${X} / -2)) rotate(45deg);
 top: 50%;
 `), se("left-end", `
 left: calc(${X} / -2);
 bottom: calc(${pe("left-end")} + var(--v-offset-top));
 `), se("right-start", `
 right: calc(${X} / -2);
 top: calc(${pe("right-start")} - var(--v-offset-top));
 `), se("right", `
 right: calc(${X} / -2);
 transform: translateY(calc(${X} / -2)) rotate(45deg);
 top: 50%;
 `), se("right-end", `
 right: calc(${X} / -2);
 bottom: calc(${pe("right-end")} + var(--v-offset-top));
 `), ...No({
  top: ["right-start", "left-start"],
  right: ["top-end", "bottom-end"],
  bottom: ["right-end", "left-end"],
  left: ["top-start", "bottom-start"]
}, (e, t) => {
  const n = ["right", "left"].includes(t), r = n ? "width" : "height";
  return e.map((o) => {
    const i = o.split("-")[1] === "end", l = `calc((${`var(--v-target-${r}, 0px)`} - ${X}) / 2)`, s = pe(o);
    return N(`[v-placement="${o}"] >`, [re("popover-shared", [ce("center-arrow", [re("popover-arrow", `${t}: calc(max(${l}, ${s}) ${i ? "+" : "-"} var(--v-offset-${n ? "left" : "top"}));`)])])]);
  });
})]);
function pe(e) {
  return ["top", "bottom"].includes(e.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)";
}
function se(e, t) {
  const n = e.split("-")[0], r = ["top", "bottom"].includes(n) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
  return N(`[v-placement="${e}"] >`, [re("popover-shared", `
 margin-${Jt[n]}: var(--n-space);
 `, [ce("show-arrow", `
 margin-${Jt[n]}: var(--n-space-arrow);
 `), ce("overlap", `
 margin: 0;
 `), Ma("popover-arrow-wrapper", `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${Jt[n]}: auto;
 ${r}
 `, [re("popover-arrow", t)])])]);
}
const Ur = Object.assign(Object.assign({}, _e.props), {
  to: Ve.propTo,
  show: Boolean,
  trigger: String,
  showArrow: Boolean,
  delay: Number,
  duration: Number,
  raw: Boolean,
  arrowPointToCenter: Boolean,
  arrowClass: String,
  arrowStyle: [String, Object],
  arrowWrapperClass: String,
  arrowWrapperStyle: [String, Object],
  displayDirective: String,
  x: Number,
  y: Number,
  flip: Boolean,
  overlap: Boolean,
  placement: String,
  width: [Number, String],
  keepAliveOnHover: Boolean,
  scrollable: Boolean,
  contentClass: String,
  contentStyle: [Object, String],
  headerClass: String,
  headerStyle: [Object, String],
  footerClass: String,
  footerStyle: [Object, String],
  // private
  internalDeactivateImmediately: Boolean,
  animated: Boolean,
  onClickoutside: Function,
  internalTrapFocus: Boolean,
  internalOnAfterLeave: Function,
  // deprecated
  minWidth: Number,
  maxWidth: Number
});
function Ys({
  arrowClass: e,
  arrowStyle: t,
  arrowWrapperClass: n,
  arrowWrapperStyle: r,
  clsPrefix: o
}) {
  return O("div", {
    key: "__popover-arrow__",
    style: r,
    class: [`${o}-popover-arrow-wrapper`, n]
  }, O("div", {
    class: [`${o}-popover-arrow`, e],
    style: t
  }));
}
const Gs = q({
  name: "PopoverBody",
  inheritAttrs: !1,
  props: Ur,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    const {
      namespaceRef: r,
      mergedClsPrefixRef: o,
      inlineThemeDisabled: i
    } = hn(e), a = _e("Popover", "-popover", Xs, Vr, e, o), l = T(null), s = oe("NPopover"), d = T(null), g = T(e.show), y = T(!1);
    ze(() => {
      const {
        show: f
      } = e;
      f && !Oa() && !e.internalDeactivateImmediately && (y.value = !0);
    });
    const h = M(() => {
      const {
        trigger: f,
        onClickoutside: v
      } = e, _ = [], {
        positionManuallyRef: {
          value: x
        }
      } = s;
      return x || (f === "click" && !v && _.push([Rn, D, void 0, {
        capture: !0
      }]), f === "hover" && _.push([gi, B])), v && _.push([Rn, D, void 0, {
        capture: !0
      }]), (e.displayDirective === "show" || e.animated && y.value) && _.push([Bo, e.show]), _;
    }), w = M(() => {
      const {
        common: {
          cubicBezierEaseInOut: f,
          cubicBezierEaseIn: v,
          cubicBezierEaseOut: _
        },
        self: {
          space: x,
          spaceArrow: A,
          padding: F,
          fontSize: H,
          textColor: L,
          dividerColor: S,
          color: R,
          boxShadow: W,
          borderRadius: G,
          arrowHeight: Q,
          arrowOffset: K,
          arrowOffsetVertical: fe
        }
      } = a.value;
      return {
        "--n-box-shadow": W,
        "--n-bezier": f,
        "--n-bezier-ease-in": v,
        "--n-bezier-ease-out": _,
        "--n-font-size": H,
        "--n-text-color": L,
        "--n-color": R,
        "--n-divider-color": S,
        "--n-border-radius": G,
        "--n-arrow-height": Q,
        "--n-arrow-offset": K,
        "--n-arrow-offset-vertical": fe,
        "--n-padding": F,
        "--n-space": x,
        "--n-space-arrow": A
      };
    }), c = M(() => {
      const f = e.width === "trigger" ? void 0 : Xt(e.width), v = [];
      f && v.push({
        width: f
      });
      const {
        maxWidth: _,
        minWidth: x
      } = e;
      return _ && v.push({
        maxWidth: Xt(_)
      }), x && v.push({
        maxWidth: Xt(x)
      }), i || v.push(w.value), v;
    }), b = i ? Nr("popover", void 0, w, e) : void 0;
    s.setBodyInstance({
      syncPosition: p
    }), Se(() => {
      s.setBodyInstance(null);
    }), me(we(e, "show"), (f) => {
      e.animated || (f ? g.value = !0 : g.value = !1);
    });
    function p() {
      var f;
      (f = l.value) === null || f === void 0 || f.syncPosition();
    }
    function u(f) {
      e.trigger === "hover" && e.keepAliveOnHover && e.show && s.handleMouseEnter(f);
    }
    function E(f) {
      e.trigger === "hover" && e.keepAliveOnHover && s.handleMouseLeave(f);
    }
    function B(f) {
      e.trigger === "hover" && !V().contains(Pt(f)) && s.handleMouseMoveOutside(f);
    }
    function D(f) {
      (e.trigger === "click" && !V().contains(Pt(f)) || e.onClickoutside) && s.handleClickOutside(f);
    }
    function V() {
      return s.getTriggerElement();
    }
    nt(vr, d), nt(pr, null), nt(mr, null);
    function I() {
      if (b == null || b.onRender(), !(e.displayDirective === "show" || e.show || e.animated && y.value))
        return null;
      let v;
      const _ = s.internalRenderBodyRef.value, {
        value: x
      } = o;
      if (_)
        v = _(
          // The popover class and overlap class must exists, they will be used
          // to place the body & transition animation.
          // Shadow class exists for reuse box-shadow.
          [`${x}-popover-shared`, b == null ? void 0 : b.themeClass.value, e.overlap && `${x}-popover-shared--overlap`, e.showArrow && `${x}-popover-shared--show-arrow`, e.arrowPointToCenter && `${x}-popover-shared--center-arrow`],
          d,
          c.value,
          u,
          E
        );
      else {
        const {
          value: A
        } = s.extraClassRef, {
          internalTrapFocus: F
        } = e, H = !nr(t.header) || !nr(t.footer), L = () => {
          var S, R;
          const W = H ? O(xe, null, Kt(t.header, (K) => K ? O("div", {
            class: [`${x}-popover__header`, e.headerClass],
            style: e.headerStyle
          }, K) : null), Kt(t.default, (K) => K ? O("div", {
            class: [`${x}-popover__content`, e.contentClass],
            style: e.contentStyle
          }, t) : null), Kt(t.footer, (K) => K ? O("div", {
            class: [`${x}-popover__footer`, e.footerClass],
            style: e.footerStyle
          }, K) : null)) : e.scrollable ? (S = t.default) === null || S === void 0 ? void 0 : S.call(t) : O("div", {
            class: [`${x}-popover__content`, e.contentClass],
            style: e.contentStyle
          }, t), G = e.scrollable ? O(js, {
            contentClass: H ? void 0 : `${x}-popover__content ${(R = e.contentClass) !== null && R !== void 0 ? R : ""}`,
            contentStyle: H ? void 0 : e.contentStyle
          }, {
            default: () => W
          }) : W, Q = e.showArrow ? Ys({
            arrowClass: e.arrowClass,
            arrowStyle: e.arrowStyle,
            arrowWrapperClass: e.arrowWrapperClass,
            arrowWrapperStyle: e.arrowWrapperStyle,
            clsPrefix: x
          }) : null;
          return [G, Q];
        };
        v = O("div", cn({
          class: [`${x}-popover`, `${x}-popover-shared`, b == null ? void 0 : b.themeClass.value, A.map((S) => `${x}-${S}`), {
            [`${x}-popover--scrollable`]: e.scrollable,
            [`${x}-popover--show-header-or-footer`]: H,
            [`${x}-popover--raw`]: e.raw,
            [`${x}-popover-shared--overlap`]: e.overlap,
            [`${x}-popover-shared--show-arrow`]: e.showArrow,
            [`${x}-popover-shared--center-arrow`]: e.arrowPointToCenter
          }],
          ref: d,
          style: c.value,
          onKeydown: s.handleKeydown,
          onMouseenter: u,
          onMouseleave: E
        }, n), F ? O(Sa, {
          active: e.show,
          autoFocus: !0
        }, {
          default: L
        }) : L());
      }
      return Rt(v, h.value);
    }
    return {
      displayed: y,
      namespace: r,
      isMounted: s.isMountedRef,
      zIndex: s.zIndexRef,
      followerRef: l,
      adjustedTo: Ve(e),
      followerEnabled: g,
      renderContentNode: I
    };
  },
  render() {
    return O(Zi, {
      ref: "followerRef",
      zIndex: this.zIndex,
      show: this.show,
      enabled: this.followerEnabled,
      to: this.adjustedTo,
      x: this.x,
      y: this.y,
      flip: this.flip,
      placement: this.placement,
      containerClass: this.namespace,
      overlap: this.overlap,
      width: this.width === "trigger" ? "target" : void 0,
      teleportDisabled: this.adjustedTo === Ve.tdkey
    }, {
      default: () => this.animated ? O(en, {
        name: "popover-transition",
        appear: this.isMounted,
        // Don't use watch to enable follower, since the transition may
        // make position sync timing very subtle and buggy.
        onEnter: () => {
          this.followerEnabled = !0;
        },
        onAfterLeave: () => {
          var e;
          (e = this.internalOnAfterLeave) === null || e === void 0 || e.call(this), this.followerEnabled = !1, this.displayed = !1;
        }
      }, {
        default: this.renderContentNode
      }) : this.renderContentNode()
    });
  }
});
var Ks = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_2740_IONSRGRWNIQFNZAB", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.97.1", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-5a8078c568-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
const qs = Object.keys(Ur), Zs = {
  focus: ["onFocus", "onBlur"],
  click: ["onClick"],
  hover: ["onMouseenter", "onMouseleave"],
  manual: [],
  nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"]
};
function Js(e, t, n) {
  Zs[t].forEach((r) => {
    e.props ? e.props = Object.assign({}, e.props) : e.props = {};
    const o = e.props[r], i = n[r];
    o ? e.props[r] = (...a) => {
      o(...a), i(...a);
    } : e.props[r] = i;
  });
}
const Xr = {
  show: {
    type: Boolean,
    default: void 0
  },
  defaultShow: Boolean,
  showArrow: {
    type: Boolean,
    default: !0
  },
  trigger: {
    type: String,
    default: "hover"
  },
  delay: {
    type: Number,
    default: 100
  },
  duration: {
    type: Number,
    default: 100
  },
  raw: Boolean,
  placement: {
    type: String,
    default: "top"
  },
  x: Number,
  y: Number,
  arrowPointToCenter: Boolean,
  disabled: Boolean,
  getDisabled: Function,
  displayDirective: {
    type: String,
    default: "if"
  },
  arrowClass: String,
  arrowStyle: [String, Object],
  arrowWrapperClass: String,
  arrowWrapperStyle: [String, Object],
  flip: {
    type: Boolean,
    default: !0
  },
  animated: {
    type: Boolean,
    default: !0
  },
  width: {
    type: [Number, String],
    default: void 0
  },
  overlap: Boolean,
  keepAliveOnHover: {
    type: Boolean,
    default: !0
  },
  zIndex: Number,
  to: Ve.propTo,
  scrollable: Boolean,
  contentClass: String,
  contentStyle: [Object, String],
  headerClass: String,
  headerStyle: [Object, String],
  footerClass: String,
  footerStyle: [Object, String],
  // events
  onClickoutside: Function,
  "onUpdate:show": [Function, Array],
  onUpdateShow: [Function, Array],
  // internal
  internalDeactivateImmediately: Boolean,
  internalSyncTargetWithParent: Boolean,
  internalInheritedEventHandlers: {
    type: Array,
    default: () => []
  },
  internalTrapFocus: Boolean,
  internalExtraClass: {
    type: Array,
    default: () => []
  },
  // deprecated
  onShow: [Function, Array],
  onHide: [Function, Array],
  arrow: {
    type: Boolean,
    default: void 0
  },
  minWidth: Number,
  maxWidth: Number
}, Qs = Object.assign(Object.assign(Object.assign({}, _e.props), Xr), {
  internalOnAfterLeave: Function,
  internalRenderBody: Function
}), eu = q({
  name: "Popover",
  inheritAttrs: !1,
  props: Qs,
  slots: Object,
  __popover__: !0,
  setup(e) {
    Ks.NODE_ENV !== "production" && ze(() => {
      e.maxWidth !== void 0 && qe("popover", "`max-width` is deprecated, please use `style` instead."), e.minWidth !== void 0 && qe("popover", "`min-width` is deprecated, please use `style` instead."), e.arrow !== void 0 && qe("popover", "`arrow` is deprecated, please use `showArrow` instead."), e.onHide !== void 0 && qe("popover", "`on-hide` is deprecated, please use `on-update:show` instead."), e.onShow !== void 0 && qe("popover", "`on-show` is deprecated, please use `on-update:show` instead.");
    });
    const t = hr(), n = T(null), r = M(() => e.show), o = T(e.defaultShow), i = qo(r, o), a = lt(() => e.disabled ? !1 : i.value), l = () => {
      if (e.disabled) return !0;
      const {
        getDisabled: S
      } = e;
      return !!(S != null && S());
    }, s = () => l() ? !1 : i.value, d = Zo(e, ["arrow", "showArrow"]), g = M(() => e.overlap ? !1 : d.value);
    let y = null;
    const h = T(null), w = T(null), c = lt(() => e.x !== void 0 && e.y !== void 0);
    function b(S) {
      const {
        "onUpdate:show": R,
        onUpdateShow: W,
        onShow: G,
        onHide: Q
      } = e;
      o.value = S, R && tt(R, S), W && tt(W, S), S && G && tt(G, !0), S && Q && tt(Q, !1);
    }
    function p() {
      y && y.syncPosition();
    }
    function u() {
      const {
        value: S
      } = h;
      S && (window.clearTimeout(S), h.value = null);
    }
    function E() {
      const {
        value: S
      } = w;
      S && (window.clearTimeout(S), w.value = null);
    }
    function B() {
      const S = l();
      if (e.trigger === "focus" && !S) {
        if (s()) return;
        b(!0);
      }
    }
    function D() {
      const S = l();
      if (e.trigger === "focus" && !S) {
        if (!s()) return;
        b(!1);
      }
    }
    function V() {
      const S = l();
      if (e.trigger === "hover" && !S) {
        if (E(), h.value !== null || s()) return;
        const R = () => {
          b(!0), h.value = null;
        }, {
          delay: W
        } = e;
        W === 0 ? R() : h.value = window.setTimeout(R, W);
      }
    }
    function I() {
      const S = l();
      if (e.trigger === "hover" && !S) {
        if (u(), w.value !== null || !s()) return;
        const R = () => {
          b(!1), w.value = null;
        }, {
          duration: W
        } = e;
        W === 0 ? R() : w.value = window.setTimeout(R, W);
      }
    }
    function f() {
      I();
    }
    function v(S) {
      var R;
      s() && (e.trigger === "click" && (u(), E(), b(!1)), (R = e.onClickoutside) === null || R === void 0 || R.call(e, S));
    }
    function _() {
      if (e.trigger === "click" && !l()) {
        u(), E();
        const S = !s();
        b(S);
      }
    }
    function x(S) {
      e.internalTrapFocus && S.key === "Escape" && (u(), E(), b(!1));
    }
    function A(S) {
      o.value = S;
    }
    function F() {
      var S;
      return (S = n.value) === null || S === void 0 ? void 0 : S.targetRef;
    }
    function H(S) {
      y = S;
    }
    return nt("NPopover", {
      getTriggerElement: F,
      handleKeydown: x,
      handleMouseEnter: V,
      handleMouseLeave: I,
      handleClickOutside: v,
      handleMouseMoveOutside: f,
      setBodyInstance: H,
      positionManuallyRef: c,
      isMountedRef: t,
      zIndexRef: we(e, "zIndex"),
      extraClassRef: we(e, "internalExtraClass"),
      internalRenderBodyRef: we(e, "internalRenderBody")
    }), ze(() => {
      i.value && l() && b(!1);
    }), {
      binderInstRef: n,
      positionManually: c,
      mergedShowConsideringDisabledProp: a,
      // if to show popover body
      uncontrolledShow: o,
      mergedShowArrow: g,
      getMergedShow: s,
      setShow: A,
      handleClick: _,
      handleMouseEnter: V,
      handleMouseLeave: I,
      handleFocus: B,
      handleBlur: D,
      syncPosition: p
    };
  },
  render() {
    var e;
    const {
      positionManually: t,
      $slots: n
    } = this;
    let r, o = !1;
    if (!t && (r = Ra(n, "trigger"), r)) {
      r = Io(r), r = r.type === Do ? O("span", [r]) : r;
      const i = {
        onClick: this.handleClick,
        onMouseenter: this.handleMouseEnter,
        onMouseleave: this.handleMouseLeave,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur
      };
      if (!((e = r.type) === null || e === void 0) && e.__popover__)
        o = !0, r.props || (r.props = {
          internalSyncTargetWithParent: !0,
          internalInheritedEventHandlers: []
        }), r.props.internalSyncTargetWithParent = !0, r.props.internalInheritedEventHandlers ? r.props.internalInheritedEventHandlers = [i, ...r.props.internalInheritedEventHandlers] : r.props.internalInheritedEventHandlers = [i];
      else {
        const {
          internalInheritedEventHandlers: a
        } = this, l = [i, ...a], s = {
          onBlur: (d) => {
            l.forEach((g) => {
              g.onBlur(d);
            });
          },
          onFocus: (d) => {
            l.forEach((g) => {
              g.onFocus(d);
            });
          },
          onClick: (d) => {
            l.forEach((g) => {
              g.onClick(d);
            });
          },
          onMouseenter: (d) => {
            l.forEach((g) => {
              g.onMouseenter(d);
            });
          },
          onMouseleave: (d) => {
            l.forEach((g) => {
              g.onMouseleave(d);
            });
          }
        };
        Js(r, a ? "nested" : t ? "manual" : this.trigger, s);
      }
    }
    return O(vi, {
      ref: "binderInstRef",
      syncTarget: !o,
      syncTargetWithParent: this.internalSyncTargetWithParent
    }, {
      default: () => {
        this.mergedShowConsideringDisabledProp;
        const i = this.getMergedShow();
        return [this.internalTrapFocus && i ? Rt(O("div", {
          style: {
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }), [[xr, {
          enabled: i,
          zIndex: this.zIndex
        }]]) : null, t ? null : O(bi, null, {
          default: () => r
        }), O(Gs, za(this.$props, qs, Object.assign(Object.assign({}, this.$attrs), {
          showArrow: this.mergedShowArrow,
          show: i
        })), {
          default: () => {
            var a, l;
            return (l = (a = this.$slots).default) === null || l === void 0 ? void 0 : l.call(a);
          },
          header: () => {
            var a, l;
            return (l = (a = this.$slots).header) === null || l === void 0 ? void 0 : l.call(a);
          },
          footer: () => {
            var a, l;
            return (l = (a = this.$slots).footer) === null || l === void 0 ? void 0 : l.call(a);
          }
        })];
      }
    });
  }
}), tu = {
  padding: "8px 14px"
};
function nu(e) {
  const {
    borderRadius: t,
    boxShadow2: n,
    baseColor: r
  } = e;
  return Object.assign(Object.assign({}, tu), {
    borderRadius: t,
    boxShadow: n,
    color: wr(r, "rgba(0, 0, 0, .85)"),
    textColor: r
  });
}
const ru = {
  name: "Tooltip",
  common: bn,
  peers: {
    Popover: Vr
  },
  self: nu
}, ou = Object.assign(Object.assign({}, Xr), _e.props), iu = q({
  name: "Tooltip",
  props: ou,
  slots: Object,
  __popover__: !0,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = hn(e), n = _e("Tooltip", "-tooltip", void 0, ru, e, t), r = T(null);
    return Object.assign(Object.assign({}, {
      syncPosition() {
        r.value.syncPosition();
      },
      setShow(i) {
        r.value.setShow(i);
      }
    }), {
      popoverRef: r,
      mergedTheme: n,
      popoverThemeOverrides: M(() => n.value.self)
    });
  },
  render() {
    const {
      mergedTheme: e,
      internalExtraClass: t
    } = this;
    return O(eu, Object.assign(Object.assign({}, this.$props), {
      theme: e.peers.Popover,
      themeOverrides: e.peerOverrides.Popover,
      builtinThemeOverrides: this.popoverThemeOverrides,
      internalExtraClass: t.concat("tooltip"),
      ref: "popoverRef"
    }), this.$slots);
  }
}), au = { class: "lc-tooltip" }, lu = { class: "lc-tooltip__content" }, su = /* @__PURE__ */ q({
  __name: "tooltip",
  setup(e) {
    return (t, n) => (ie(), ae("div", au, [
      We(
        ve(iu),
        cn({
          trigger: "hover",
          class: "lc-n-tooltip",
          "arrow-class": "lc-tooltip-arrow-class"
        }, t.$attrs),
        {
          trigger: Et(() => [
            Ct(t.$slots, "trigger", {}, () => [
              n[0] || (n[0] = z(
                "div",
                { class: "lc-tooltip__trigger_icon" },
                [
                  z("svg", {
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 512 512",
                    "enable-background": "new 0 0 512 512",
                    "xml:space": "preserve"
                  }, [
                    z("path", { d: `M256,90c44.3,0,86,17.3,117.4,48.6C404.7,170,422,211.7,422,256s-17.3,86-48.6,117.4C342,404.7,300.3,422,256,422\r
	s-86-17.3-117.4-48.6C107.3,342,90,300.3,90,256s17.3-86,48.6-117.4C170,107.3,211.7,90,256,90 M256,48C141.1,48,48,141.1,48,256\r
	s93.1,208,208,208s208-93.1,208-208S370.9,48,256,48L256,48z` }),
                    z("g", null, [
                      z("path", { d: "M277,360h-42V235h42V360z M277,194h-42v-42h42V194z" })
                    ])
                  ])
                ],
                -1
                /* HOISTED */
              ))
            ], !0)
          ]),
          default: Et(() => [
            z("div", lu, [
              Ct(t.$slots, "default", {}, void 0, !0)
            ])
          ]),
          _: 3
          /* FORWARDED */
        },
        16
        /* FULL_PROPS */
      )
    ]));
  }
}), Yr = /* @__PURE__ */ dt(su, [["__scopeId", "data-v-37c77816"]]), uu = { class: "lc-skew-indicator__wrapper" }, cu = { class: "lc-skew-indicator__wrapper__table--bg" }, du = { class: "lc-skew-indicator__wrapper__table--bg--icon" }, fu = ["src"], hu = { class: "lc-skew-indicator__wrapper__info" }, pu = { class: "lc-skew-indicator__wrapper__info--label" }, mu = { class: "lc-skew-indicator__wrapper__info--result" }, vu = { class: "lc-skew-indicator__wrapper__info--result--value" }, bu = {
  key: 0,
  class: "lc-skew-indicator__wrapper__info--result--unit"
}, gu = {
  key: 1,
  class: "lc-skew-indicator__wrapper__info--result--altericon"
}, wu = /* @__PURE__ */ q({
  __name: "skewIndicator",
  props: /* @__PURE__ */ zt({
    label: {
      type: String
    },
    value: {
      type: Number
    },
    unit: {
      type: String
    },
    fixed: {
      type: Boolean
    },
    decimal: {
      type: Number
    },
    icon: {
      type: String
    },
    tip: {
      type: String
    },
    type: {
      type: String
    }
  }, {
    label: "",
    value: 0,
    fixed: !0,
    decimal: 0,
    icon: Ho,
    __skip_icon: !0,
    tip: "",
    type: "skew"
  }),
  setup(e) {
    const t = M(() => {
      if (e.fixed) {
        const { result: r } = je(e.value, e.decimal);
        return r;
      }
      return e.value;
    }), n = M(() => {
      if (e.fixed) {
        const { unit: r } = je(e.value, e.decimal);
        return `${r}${e.unit}`;
      }
      return e.unit;
    });
    return (r, o) => (ie(), ae(
      "div",
      {
        class: dr(["lc-skew-indicator", [`lc-skew-indicator--${e.type}`]])
      },
      [
        z("div", uu, [
          z("div", cu, [
            z("div", du, [
              Ct(r.$slots, "default", {}, () => [
                z("img", {
                  src: e.icon,
                  alt: ""
                }, null, 8, fu)
              ], !0)
            ])
          ]),
          z("div", hu, [
            z(
              "div",
              pu,
              de(e.label),
              1
              /* TEXT */
            ),
            z("div", mu, [
              z("div", vu, [
                We(ve(mn), {
                  "show-separator": "",
                  from: 0,
                  to: t.value,
                  active: "",
                  precision: e.decimal
                }, null, 8, ["to", "precision"])
              ]),
              n.value ? (ie(), ae(
                "div",
                bu,
                de(n.value),
                1
                /* TEXT */
              )) : at("v-if", !0),
              e.tip ? (ie(), ae("div", gu, [
                We(ve(Yr), null, {
                  default: Et(() => [
                    Tt(
                      de(e.tip),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 1
                  /* STABLE */
                })
              ])) : at("v-if", !0)
            ])
          ])
        ])
      ],
      2
      /* CLASS */
    ));
  }
}), ju = /* @__PURE__ */ dt(wu, [["__scopeId", "data-v-2ffda4c7"]]), yu = { class: "lc-indicator-card__wrapper" }, Su = {
  key: 0,
  class: "lc-indicator-card__wrapper--tooltip"
}, xu = { class: "lc-indicator-card__wrapper--result" }, _u = { class: "lc-indicator-card__wrapper--result--value" }, Cu = {
  key: 0,
  class: "lc-indicator-card__wrapper--result--unit"
}, Eu = { class: "lc-indicator-card__wrapper--text" }, $u = /* @__PURE__ */ q({
  __name: "indicatorCard",
  props: /* @__PURE__ */ zt({
    value: {
      type: Number
    },
    hint: {
      type: String
    },
    size: {
      type: String
    },
    fixed: {
      type: Boolean
    },
    decimal: {
      type: Number
    },
    type: {
      type: String
    },
    tip: {
      type: String
    }
  }, {
    value: 0,
    hint: "",
    size: "small",
    fixed: !1,
    decimal: 0
  }),
  setup(e) {
    Fo((a) => ({
      "53068cce": o.value
    }));
    const t = {
      small: "small",
      medium: "medium",
      large: "large"
    }, n = M(() => e.fixed ? je(e.value, e.decimal).result : e.value), r = {
      [t.small]: "22px 32px 24px",
      [t.medium]: "22px 54px 24px",
      [t.large]: "22px 116px 24px"
    }, o = M(() => r[e.size]), i = M(() => {
      if (e.fixed)
        return je(e.value, e.decimal).unit;
    });
    return (a, l) => (ie(), ae(
      "div",
      {
        class: dr(["lc-indicator-card", {
          "lc-indicator-card--noborder": e.type === "noborder"
        }])
      },
      [
        z("div", yu, [
          e.tip ? (ie(), ae("div", Su, [
            We(ve(Yr), null, {
              default: Et(() => [
                Tt(
                  de(e.tip),
                  1
                  /* TEXT */
                )
              ]),
              _: 1
              /* STABLE */
            })
          ])) : at("v-if", !0),
          z("div", xu, [
            z("span", _u, [
              We(ve(mn), {
                "show-separator": "",
                from: 0,
                to: n.value,
                active: "",
                precision: e.decimal
              }, null, 8, ["to", "precision"])
            ]),
            e.fixed ? (ie(), ae(
              "span",
              Cu,
              de(i.value),
              1
              /* TEXT */
            )) : at("v-if", !0)
          ]),
          z(
            "div",
            Eu,
            de(e.hint),
            1
            /* TEXT */
          )
        ])
      ],
      2
      /* CLASS */
    ));
  }
}), Vu = /* @__PURE__ */ dt($u, [["__scopeId", "data-v-775714aa"]]), Pu = { class: "lc-indicator-list" }, Mu = { class: "lc-indicator-list__wrapper" }, Ou = { class: "lc-indicator-list__wrapper__image" }, Tu = ["src"], Ru = { class: "lc-indicator-list__wrapper__info" }, zu = { class: "lc-indicator-list__wrapper__info--nickname" }, Au = { class: "lc-indicator-list__wrapper__info--msg" }, Bu = { class: "lc-indicator-list__wrapper__info--msg__item--label" }, Iu = { class: "lc-indicator-list__wrapper__info--msg__item--value" }, Du = /* @__PURE__ */ q({
  __name: "indicatorList",
  props: /* @__PURE__ */ zt({
    icon: {
      type: String
    },
    name: {
      type: String
    },
    msg: {
      type: Array
    }
  }, {
    icon: "",
    name: "-",
    msg: () => []
  }),
  setup(e) {
    return (t, n) => (ie(), ae("div", Pu, [
      z("div", Mu, [
        z("div", Ou, [
          z("img", {
            class: "lc-indicator-list__wrapper__image--img",
            src: e.icon,
            alt: ""
          }, null, 8, Tu)
        ]),
        z("div", Ru, [
          z(
            "div",
            zu,
            de(e.name),
            1
            /* TEXT */
          ),
          z("div", Au, [
            (ie(!0), ae(
              xe,
              null,
              cr(e.msg, (r, o) => (ie(), ae("div", {
                class: "lc-indicator-list__wrapper__info--msg__item",
                key: o
              }, [
                z(
                  "div",
                  Bu,
                  de(r.label),
                  1
                  /* TEXT */
                ),
                z(
                  "div",
                  Iu,
                  de(r.value),
                  1
                  /* TEXT */
                )
              ]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ])
      ])
    ]));
  }
}), Uu = /* @__PURE__ */ dt(Du, [["__scopeId", "data-v-745c500e"]]);
export {
  Vu as LcIndicatorCard,
  Uu as LcIndicatorList,
  Wu as LcRangeIndicator,
  ju as LcSkewIndicator
};
