// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { ref as B, readonly as jt, watch as he, computed as z, onMounted as me, onBeforeUnmount as xe, createTextVNode as er, Fragment as be, Comment as rn, defineComponent as ue, provide as Je, getCurrentInstance as tr, inject as re, withDirectives as _t, toRef as ye, h as A, Teleport as mo, nextTick as Vt, renderSlot as Ut, onActivated as bo, onDeactivated as go, isVNode as wo, shallowRef as ht, watchEffect as He, onBeforeMount as nr, Transition as Xt, mergeProps as on, vShow as yo, cloneVNode as xo, Text as So, mergeModels as gt, mergeDefaults as _o, useCssVars as Co, useModel as Yt, openBlock as le, createElementBlock as se, createElementVNode as Z, unref as Ce, createCommentVNode as pt, normalizeClass as Kt, normalizeStyle as Eo, renderList as Gt, toDisplayString as vt, createVNode as bn, withCtx as Pt } from "vue";
import { _ as $o } from "./assets/right-arrow-B90nBv-r.js";
import { _ as To } from "./assets/lt-arrow-DiWswSiL.js";
import { _ as Oo } from "./assets/rt-arrow-CQwSTGHi.js";
import { _ as Mo } from "./assets/top-arrow-bBxwU0FN.js";
import { merge as ot, map as Po } from "lodash-es";
function mt(e) {
  return e.composedPath()[0];
}
const Ro = {
  mousemoveoutside: /* @__PURE__ */ new WeakMap(),
  clickoutside: /* @__PURE__ */ new WeakMap()
};
function Bo(e, t, n) {
  if (e === "mousemoveoutside") {
    const r = (o) => {
      t.contains(mt(o)) || n(o);
    };
    return {
      mousemove: r,
      touchstart: r
    };
  } else if (e === "clickoutside") {
    let r = !1;
    const o = (l) => {
      r = !t.contains(mt(l));
    }, i = (l) => {
      r && (t.contains(mt(l)) || n(l));
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
function rr(e, t, n) {
  const r = Ro[e];
  let o = r.get(t);
  o === void 0 && r.set(t, o = /* @__PURE__ */ new WeakMap());
  let i = o.get(n);
  return i === void 0 && o.set(n, i = Bo(e, t, n)), i;
}
function Ao(e, t, n, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const o = rr(e, t, n);
    return Object.keys(o).forEach((i) => {
      Q(i, document, o[i], r);
    }), !0;
  }
  return !1;
}
function zo(e, t, n, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const o = rr(e, t, n);
    return Object.keys(o).forEach((i) => {
      G(i, document, o[i], r);
    }), !0;
  }
  return !1;
}
function Io() {
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
  function o(c, v, _) {
    const C = c[v];
    return c[v] = function() {
      return _.apply(c, arguments), C.apply(c, arguments);
    }, c;
  }
  function i(c, v) {
    c[v] = Event.prototype[v];
  }
  const l = /* @__PURE__ */ new WeakMap(), a = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
  function u() {
    var c;
    return (c = l.get(this)) !== null && c !== void 0 ? c : null;
  }
  function d(c, v) {
    a !== void 0 && Object.defineProperty(c, "currentTarget", {
      configurable: !0,
      enumerable: !0,
      get: v ?? a.get
    });
  }
  const w = {
    bubble: {},
    capture: {}
  }, S = {};
  function b() {
    const c = function(v) {
      const { type: _, eventPhase: C, bubbles: D } = v, H = mt(v);
      if (C === 2)
        return;
      const W = C === 1 ? "capture" : "bubble";
      let N = H;
      const p = [];
      for (; N === null && (N = window), p.push(N), N !== window; )
        N = N.parentNode || null;
      const x = w.capture[_], M = w.bubble[_];
      if (o(v, "stopPropagation", n), o(v, "stopImmediatePropagation", r), d(v, u), W === "capture") {
        if (x === void 0)
          return;
        for (let R = p.length - 1; R >= 0 && !e.has(v); --R) {
          const F = p[R], j = x.get(F);
          if (j !== void 0) {
            l.set(v, F);
            for (const oe of j) {
              if (t.has(v))
                break;
              oe(v);
            }
          }
          if (R === 0 && !D && M !== void 0) {
            const oe = M.get(F);
            if (oe !== void 0)
              for (const Re of oe) {
                if (t.has(v))
                  break;
                Re(v);
              }
          }
        }
      } else if (W === "bubble") {
        if (M === void 0)
          return;
        for (let R = 0; R < p.length && !e.has(v); ++R) {
          const F = p[R], j = M.get(F);
          if (j !== void 0) {
            l.set(v, F);
            for (const oe of j) {
              if (t.has(v))
                break;
              oe(v);
            }
          }
        }
      }
      i(v, "stopPropagation"), i(v, "stopImmediatePropagation"), d(v);
    };
    return c.displayName = "evtdUnifiedHandler", c;
  }
  function y() {
    const c = function(v) {
      const { type: _, eventPhase: C } = v;
      if (C !== 2)
        return;
      const D = S[_];
      D !== void 0 && D.forEach((H) => H(v));
    };
    return c.displayName = "evtdUnifiedWindowEventHandler", c;
  }
  const f = b(), g = y();
  function h(c, v) {
    const _ = w[c];
    return _[v] === void 0 && (_[v] = /* @__PURE__ */ new Map(), window.addEventListener(v, f, c === "capture")), _[v];
  }
  function s(c) {
    return S[c] === void 0 && (S[c] = /* @__PURE__ */ new Set(), window.addEventListener(c, g)), S[c];
  }
  function E(c, v) {
    let _ = c.get(v);
    return _ === void 0 && c.set(v, _ = /* @__PURE__ */ new Set()), _;
  }
  function I(c, v, _, C) {
    const D = w[v][_];
    if (D !== void 0) {
      const H = D.get(c);
      if (H !== void 0 && H.has(C))
        return !0;
    }
    return !1;
  }
  function k(c, v) {
    const _ = S[c];
    return !!(_ !== void 0 && _.has(v));
  }
  function L(c, v, _, C) {
    let D;
    if (typeof C == "object" && C.once === !0 ? D = (x) => {
      O(c, v, D, C), _(x);
    } : D = _, Ao(c, v, D, C))
      return;
    const W = C === !0 || typeof C == "object" && C.capture === !0 ? "capture" : "bubble", N = h(W, c), p = E(N, v);
    if (p.has(D) || p.add(D), v === window) {
      const x = s(c);
      x.has(D) || x.add(D);
    }
  }
  function O(c, v, _, C) {
    if (zo(c, v, _, C))
      return;
    const H = C === !0 || typeof C == "object" && C.capture === !0, W = H ? "capture" : "bubble", N = h(W, c), p = E(N, v);
    if (v === window && !I(v, H ? "bubble" : "capture", c, _) && k(c, _)) {
      const M = S[c];
      M.delete(_), M.size === 0 && (window.removeEventListener(c, g), S[c] = void 0);
    }
    p.has(_) && p.delete(_), p.size === 0 && N.delete(v), N.size === 0 && (window.removeEventListener(c, f, W === "capture"), w[W][c] = void 0);
  }
  return {
    on: L,
    off: O
  };
}
const { on: Q, off: G } = Io(), ze = "@@mmoContext", Do = {
  mounted(e, { value: t }) {
    e[ze] = {
      handler: void 0
    }, typeof t == "function" && (e[ze].handler = t, Q("mousemoveoutside", e, t));
  },
  updated(e, { value: t }) {
    const n = e[ze];
    typeof t == "function" ? n.handler ? n.handler !== t && (G("mousemoveoutside", e, n.handler), n.handler = t, Q("mousemoveoutside", e, t)) : (e[ze].handler = t, Q("mousemoveoutside", e, t)) : n.handler && (G("mousemoveoutside", e, n.handler), n.handler = void 0);
  },
  unmounted(e) {
    const { handler: t } = e[ze];
    t && G("mousemoveoutside", e, t), e[ze].handler = void 0;
  }
}, Ie = "@@coContext", gn = {
  mounted(e, { value: t, modifiers: n }) {
    e[Ie] = {
      handler: void 0
    }, typeof t == "function" && (e[Ie].handler = t, Q("clickoutside", e, t, {
      capture: n.capture
    }));
  },
  updated(e, { value: t, modifiers: n }) {
    const r = e[Ie];
    typeof t == "function" ? r.handler ? r.handler !== t && (G("clickoutside", e, r.handler, {
      capture: n.capture
    }), r.handler = t, Q("clickoutside", e, t, {
      capture: n.capture
    })) : (e[Ie].handler = t, Q("clickoutside", e, t, {
      capture: n.capture
    })) : r.handler && (G("clickoutside", e, r.handler, {
      capture: n.capture
    }), r.handler = void 0);
  },
  unmounted(e, { modifiers: t }) {
    const { handler: n } = e[Ie];
    n && G("clickoutside", e, n, {
      capture: t.capture
    }), e[Ie].handler = void 0;
  }
};
function Fo(e, t) {
  console.error(`[vdirs/${e}]: ${t}`);
}
class ko {
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
    r.has(t) ? r.delete(t) : n === void 0 && Fo("z-index-manager/unregister-element", "Element not found when unregistering."), this.squashState();
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
const Rt = new ko(), De = "@@ziContext", or = {
  mounted(e, t) {
    const { value: n = {} } = t, { zIndex: r, enabled: o } = n;
    e[De] = {
      enabled: !!o,
      initialized: !1
    }, o && (Rt.ensureZIndex(e, r), e[De].initialized = !0);
  },
  updated(e, t) {
    const { value: n = {} } = t, { zIndex: r, enabled: o } = n, i = e[De].enabled;
    o && !i && (Rt.ensureZIndex(e, r), e[De].initialized = !0), e[De].enabled = !!o;
  },
  unmounted(e, t) {
    if (!e[De].initialized)
      return;
    const { value: n = {} } = t, { zIndex: r } = n;
    Rt.unregister(e, r);
  }
};
function Ho(e) {
  const t = B(!!e.value);
  if (t.value)
    return jt(t);
  const n = he(e, (r) => {
    r && (t.value = !0, n());
  });
  return jt(t);
}
function nt(e) {
  const t = z(e), n = B(t.value);
  return he(t, (r) => {
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
const Lo = typeof window < "u";
let Fe, Qe;
const Wo = () => {
  var e, t;
  Fe = Lo ? (t = (e = document) === null || e === void 0 ? void 0 : e.fonts) === null || t === void 0 ? void 0 : t.ready : void 0, Qe = !1, Fe !== void 0 ? Fe.then(() => {
    Qe = !0;
  }) : Qe = !0;
};
Wo();
function No(e) {
  if (Qe)
    return;
  let t = !1;
  me(() => {
    Qe || Fe == null || Fe.then(() => {
      t || e();
    });
  }), xe(() => {
    t = !0;
  });
}
function jo(e, t) {
  return he(e, (n) => {
    n !== void 0 && (t.value = n);
  }), z(() => e.value === void 0 ? t.value : e.value);
}
function ir() {
  const e = B(!1);
  return me(() => {
    e.value = !0;
  }), jt(e);
}
function Vo(e, t) {
  return z(() => {
    for (const n of t)
      if (e[n] !== void 0)
        return e[n];
    return e[t[t.length - 1]];
  });
}
const Uo = (typeof window > "u" ? !1 : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
!window.MSStream;
function Xo() {
  return Uo;
}
let wt = [];
const ar = /* @__PURE__ */ new WeakMap();
function Yo() {
  wt.forEach((e) => e(...ar.get(e))), wt = [];
}
function Ko(e, ...t) {
  ar.set(e, t), !wt.includes(e) && wt.push(e) === 1 && requestAnimationFrame(Yo);
}
function yt(e) {
  return e.composedPath()[0] || null;
}
function wn(e) {
  return typeof e == "string" ? e.endsWith("px") ? Number(e.slice(0, e.length - 2)) : Number(e) : e;
}
function qe(e, t) {
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
const yn = {
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
}, Ne = "^\\s*", je = "\\s*$", Ee = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", $e = "([0-9A-Fa-f])", Te = "([0-9A-Fa-f]{2})", Go = new RegExp(`${Ne}rgb\\s*\\(${Ee},${Ee},${Ee}\\)${je}`), qo = new RegExp(`${Ne}rgba\\s*\\(${Ee},${Ee},${Ee},${Ee}\\)${je}`), Zo = new RegExp(`${Ne}#${$e}${$e}${$e}${je}`), Jo = new RegExp(`${Ne}#${Te}${Te}${Te}${je}`), Qo = new RegExp(`${Ne}#${$e}${$e}${$e}${$e}${je}`), ei = new RegExp(`${Ne}#${Te}${Te}${Te}${Te}${je}`);
function te(e) {
  return parseInt(e, 16);
}
function Le(e) {
  try {
    let t;
    if (t = Jo.exec(e))
      return [te(t[1]), te(t[2]), te(t[3]), 1];
    if (t = Go.exec(e))
      return [J(t[1]), J(t[5]), J(t[9]), 1];
    if (t = qo.exec(e))
      return [
        J(t[1]),
        J(t[5]),
        J(t[9]),
        et(t[13])
      ];
    if (t = Zo.exec(e))
      return [
        te(t[1] + t[1]),
        te(t[2] + t[2]),
        te(t[3] + t[3]),
        1
      ];
    if (t = ei.exec(e))
      return [
        te(t[1]),
        te(t[2]),
        te(t[3]),
        et(te(t[4]) / 255)
      ];
    if (t = Qo.exec(e))
      return [
        te(t[1] + t[1]),
        te(t[2] + t[2]),
        te(t[3] + t[3]),
        et(te(t[4] + t[4]) / 255)
      ];
    if (e in yn)
      return Le(yn[e]);
    throw new Error(`[seemly/rgba]: Invalid color value ${e}.`);
  } catch (t) {
    throw t;
  }
}
function ti(e) {
  return e > 1 ? 1 : e < 0 ? 0 : e;
}
function ni(e, t, n, r) {
  return `rgba(${J(e)}, ${J(t)}, ${J(n)}, ${ti(r)})`;
}
function Bt(e, t, n, r, o) {
  return J((e * t * (1 - r) + n * r) / o);
}
function ri(e, t) {
  Array.isArray(e) || (e = Le(e)), Array.isArray(t) || (t = Le(t));
  const n = e[3], r = t[3], o = et(n + r - n * r);
  return ni(Bt(e[0], n, t[0], r, o), Bt(e[1], n, t[1], r, o), Bt(e[2], n, t[2], r, o), o);
}
function it(e, t) {
  const [n, r, o, i = 1] = Array.isArray(e) ? e : Le(e), { lightness: l = 1, alpha: a = 1 } = t;
  return oi([n * l, r * l, o * l, i * a]);
}
function et(e) {
  const t = Math.round(Number(e) * 100) / 100;
  return t > 1 ? 1 : t < 0 ? 0 : t;
}
function J(e) {
  const t = Math.round(Number(e));
  return t > 255 ? 255 : t < 0 ? 0 : t;
}
function oi(e) {
  const [t, n, r] = e;
  return 3 in e ? `rgba(${J(t)}, ${J(n)}, ${J(r)}, ${et(e[3])})` : `rgba(${J(t)}, ${J(n)}, ${J(r)}, 1)`;
}
function ii(e = 8) {
  return Math.random().toString(16).slice(2, 2 + e);
}
function qt(e, t, n = "default") {
  const r = t[n];
  if (r === void 0)
    throw new Error(`[vueuc/${e}]: slot[${n}] is empty.`);
  return r();
}
function Zt(e, t = !0, n = []) {
  return e.forEach((r) => {
    if (r !== null) {
      if (typeof r != "object") {
        (typeof r == "string" || typeof r == "number") && n.push(er(String(r)));
        return;
      }
      if (Array.isArray(r)) {
        Zt(r, t, n);
        return;
      }
      if (r.type === be) {
        if (r.children === null)
          return;
        Array.isArray(r.children) && Zt(r.children, t, n);
      } else r.type !== rn && n.push(r);
    }
  }), n;
}
function xn(e, t, n = "default") {
  const r = t[n];
  if (r === void 0)
    throw new Error(`[vueuc/${e}]: slot[${n}] is empty.`);
  const o = Zt(r());
  if (o.length === 1)
    return o[0];
  throw new Error(`[vueuc/${e}]: slot[${n}] should have exactly one child.`);
}
let we = null;
function lr() {
  if (we === null && (we = document.getElementById("v-binder-view-measurer"), we === null)) {
    we = document.createElement("div"), we.id = "v-binder-view-measurer";
    const { style: e } = we;
    e.position = "fixed", e.left = "0", e.right = "0", e.top = "0", e.bottom = "0", e.pointerEvents = "none", e.visibility = "hidden", document.body.appendChild(we);
  }
  return we.getBoundingClientRect();
}
function ai(e, t) {
  const n = lr();
  return {
    top: t,
    left: e,
    height: 0,
    width: 0,
    right: n.width - e,
    bottom: n.height - t
  };
}
function At(e) {
  const t = e.getBoundingClientRect(), n = lr();
  return {
    left: t.left - n.left,
    top: t.top - n.top,
    bottom: n.height + n.top - t.bottom,
    right: n.width + n.left - t.right,
    width: t.width,
    height: t.height
  };
}
function li(e) {
  return e.nodeType === 9 ? null : e.parentNode;
}
function sr(e) {
  if (e === null)
    return null;
  const t = li(e);
  if (t === null)
    return null;
  if (t.nodeType === 9)
    return document;
  if (t.nodeType === 1) {
    const { overflow: n, overflowX: r, overflowY: o } = getComputedStyle(t);
    if (/(auto|scroll|overlay)/.test(n + o + r))
      return t;
  }
  return sr(t);
}
const si = ue({
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
    Je("VBinder", (t = tr()) === null || t === void 0 ? void 0 : t.proxy);
    const n = re("VBinder", null), r = B(null), o = (s) => {
      r.value = s, n && e.syncTargetWithParent && n.setTargetRef(s);
    };
    let i = [];
    const l = () => {
      let s = r.value;
      for (; s = sr(s), s !== null; )
        i.push(s);
      for (const E of i)
        Q("scroll", E, S, !0);
    }, a = () => {
      for (const s of i)
        G("scroll", s, S, !0);
      i = [];
    }, u = /* @__PURE__ */ new Set(), d = (s) => {
      u.size === 0 && l(), u.has(s) || u.add(s);
    }, w = (s) => {
      u.has(s) && u.delete(s), u.size === 0 && a();
    }, S = () => {
      Ko(b);
    }, b = () => {
      u.forEach((s) => s());
    }, y = /* @__PURE__ */ new Set(), f = (s) => {
      y.size === 0 && Q("resize", window, h), y.has(s) || y.add(s);
    }, g = (s) => {
      y.has(s) && y.delete(s), y.size === 0 && G("resize", window, h);
    }, h = () => {
      y.forEach((s) => s());
    };
    return xe(() => {
      G("resize", window, h), a();
    }), {
      targetRef: r,
      setTargetRef: o,
      addScrollListener: d,
      removeScrollListener: w,
      addResizeListener: f,
      removeResizeListener: g
    };
  },
  render() {
    return qt("binder", this.$slots);
  }
}), ui = ue({
  name: "Target",
  setup() {
    const { setTargetRef: e, syncTarget: t } = re("VBinder");
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
    return e ? _t(xn("follower", this.$slots), [
      [t]
    ]) : xn("follower", this.$slots);
  }
}), di = "@css-render/vue3-ssr";
function ci(e, t) {
  return `<style cssr-id="${e}">
${t}
</style>`;
}
function fi(e, t, n) {
  const { styles: r, ids: o } = n;
  o.has(e) || r !== null && (o.add(e), r.push(ci(e, t)));
}
const hi = typeof document < "u";
function Ct() {
  if (hi)
    return;
  const e = re(di, null);
  if (e !== null)
    return {
      adapter: (t, n) => fi(t, n, e),
      context: e
    };
}
function Sn(e, t) {
  console.error(`[vueuc/${e}]: ${t}`);
}
function pi(e) {
  let t = 0;
  for (let n = 0; n < e.length; ++n)
    e[n] === "&" && ++t;
  return t;
}
const ur = /\s*,(?![^(]*\))\s*/g, vi = /\s+/g;
function mi(e, t) {
  const n = [];
  return t.split(ur).forEach((r) => {
    let o = pi(r);
    if (o) {
      if (o === 1) {
        e.forEach((l) => {
          n.push(r.replace("&", l));
        });
        return;
      }
    } else {
      e.forEach((l) => {
        n.push(
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          (l && l + " ") + r
        );
      });
      return;
    }
    let i = [
      r
    ];
    for (; o--; ) {
      const l = [];
      i.forEach((a) => {
        e.forEach((u) => {
          l.push(a.replace("&", u));
        });
      }), i = l;
    }
    i.forEach((l) => n.push(l));
  }), n;
}
function bi(e, t) {
  const n = [];
  return t.split(ur).forEach((r) => {
    e.forEach((o) => {
      n.push((o && o + " ") + r);
    });
  }), n;
}
function gi(e) {
  let t = [""];
  return e.forEach((n) => {
    n = n && n.trim(), // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    n && (n.includes("&") ? t = mi(t, n) : t = bi(t, n));
  }), t.join(", ").replace(vi, " ");
}
function _n(e) {
  if (!e)
    return;
  const t = e.parentElement;
  t && t.removeChild(e);
}
function Et(e, t) {
  return (t ?? document.head).querySelector(`style[cssr-id="${e}"]`);
}
function wi(e) {
  const t = document.createElement("style");
  return t.setAttribute("cssr-id", e), t;
}
function at(e) {
  return e ? /^\s*@(s|m)/.test(e) : !1;
}
const yi = /[A-Z]/g;
function dr(e) {
  return e.replace(yi, (t) => "-" + t.toLowerCase());
}
function xi(e, t = "  ") {
  return typeof e == "object" && e !== null ? ` {
` + Object.entries(e).map((n) => t + `  ${dr(n[0])}: ${n[1]};`).join(`
`) + `
` + t + "}" : `: ${e};`;
}
function Si(e, t, n) {
  return typeof e == "function" ? e({
    context: t.context,
    props: n
  }) : e;
}
function Cn(e, t, n, r) {
  if (!t)
    return "";
  const o = Si(t, n, r);
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
  const l = e ? [
    e + " {"
  ] : [];
  return i.forEach((a) => {
    const u = o[a];
    if (a === "raw") {
      l.push(`
` + u + `
`);
      return;
    }
    a = dr(a), u != null && l.push(`  ${a}${xi(u)}`);
  }), e && l.push("}"), l.join(`
`);
}
function Jt(e, t, n) {
  e && e.forEach((r) => {
    if (Array.isArray(r))
      Jt(r, t, n);
    else if (typeof r == "function") {
      const o = r(t);
      Array.isArray(o) ? Jt(o, t, n) : o && n(o);
    } else r && n(r);
  });
}
function cr(e, t, n, r, o) {
  const i = e.$;
  let l = "";
  if (!i || typeof i == "string")
    at(i) ? l = i : t.push(i);
  else if (typeof i == "function") {
    const d = i({
      context: r.context,
      props: o
    });
    at(d) ? l = d : t.push(d);
  } else if (i.before && i.before(r.context), !i.$ || typeof i.$ == "string")
    at(i.$) ? l = i.$ : t.push(i.$);
  else if (i.$) {
    const d = i.$({
      context: r.context,
      props: o
    });
    at(d) ? l = d : t.push(d);
  }
  const a = gi(t), u = Cn(a, e.props, r, o);
  l ? n.push(`${l} {`) : u.length && n.push(u), e.children && Jt(e.children, {
    context: r.context,
    props: o
  }, (d) => {
    if (typeof d == "string") {
      const w = Cn(a, { raw: d }, r, o);
      n.push(w);
    } else
      cr(d, t, n, r, o);
  }), t.pop(), l && n.push("}"), i && i.after && i.after(r.context);
}
function _i(e, t, n) {
  const r = [];
  return cr(e, [], r, t, n), r.join(`

`);
}
function Qt(e) {
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
function Ci(e, t, n, r) {
  const { els: o } = t;
  if (n === void 0)
    o.forEach(_n), t.els = [];
  else {
    const i = Et(n, r);
    i && o.includes(i) && (_n(i), t.els = o.filter((l) => l !== i));
  }
}
function En(e, t) {
  e.push(t);
}
function Ei(e, t, n, r, o, i, l, a, u) {
  let d;
  if (n === void 0 && (d = t.render(r), n = Qt(d)), u) {
    u.adapter(n, d ?? t.render(r));
    return;
  }
  a === void 0 && (a = document.head);
  const w = Et(n, a);
  if (w !== null && !i)
    return w;
  const S = w ?? wi(n);
  if (d === void 0 && (d = t.render(r)), S.textContent = d, w !== null)
    return w;
  if (l) {
    const b = a.querySelector(`meta[name="${l}"]`);
    if (b)
      return a.insertBefore(S, b), En(t.els, S), S;
  }
  return o ? a.insertBefore(S, a.querySelector("style, link")) : a.appendChild(S), En(t.els, S), S;
}
function $i(e) {
  return _i(this, this.instance, e);
}
function Ti(e = {}) {
  const { id: t, ssr: n, props: r, head: o = !1, force: i = !1, anchorMetaName: l, parent: a } = e;
  return Ei(this.instance, this, t, r, o, i, l, a, n);
}
function Oi(e = {}) {
  const { id: t, parent: n } = e;
  Ci(this.instance, this, t, n);
}
const lt = function(e, t, n, r) {
  return {
    instance: e,
    $: t,
    props: n,
    children: r,
    els: [],
    render: $i,
    mount: Ti,
    unmount: Oi
  };
}, Mi = function(e, t, n, r) {
  return Array.isArray(t) ? lt(e, { $: null }, null, t) : Array.isArray(n) ? lt(e, t, null, n) : Array.isArray(r) ? lt(e, t, n, r) : lt(e, t, n, null);
};
function fr(e = {}) {
  const t = {
    c: (...n) => Mi(t, ...n),
    use: (n, ...r) => n.install(t, ...r),
    find: Et,
    context: {},
    config: e
  };
  return t;
}
function Pi(e, t) {
  if (e === void 0)
    return !1;
  if (t) {
    const { context: { ids: n } } = t;
    return n.has(e);
  }
  return Et(e) !== null;
}
const { c: st } = fr(), Ri = "vueuc-style";
function $n(e) {
  return typeof e == "string" ? document.querySelector(e) : e();
}
const Bi = ue({
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
      showTeleport: Ho(ye(e, "show")),
      mergedTo: z(() => {
        const { to: t } = e;
        return t ?? "body";
      })
    };
  },
  render() {
    return this.showTeleport ? this.disabled ? qt("lazy-teleport", this.$slots) : A(mo, {
      disabled: this.disabled,
      to: this.mergedTo
    }, qt("lazy-teleport", this.$slots)) : null;
  }
}), ut = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Tn = {
  start: "end",
  center: "center",
  end: "start"
}, zt = {
  top: "height",
  bottom: "height",
  left: "width",
  right: "width"
}, Ai = {
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
}, zi = {
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
}, Ii = {
  "bottom-start": "right",
  "bottom-end": "left",
  "top-start": "right",
  "top-end": "left",
  "right-start": "bottom",
  "right-end": "top",
  "left-start": "bottom",
  "left-end": "top"
}, On = {
  top: !0,
  bottom: !1,
  left: !0,
  right: !1
  // left--
}, Mn = {
  top: "end",
  bottom: "start",
  left: "end",
  right: "start"
};
function Di(e, t, n, r, o, i) {
  if (!o || i)
    return { placement: e, top: 0, left: 0 };
  const [l, a] = e.split("-");
  let u = a ?? "center", d = {
    top: 0,
    left: 0
  };
  const w = (y, f, g) => {
    let h = 0, s = 0;
    const E = n[y] - t[f] - t[y];
    return E > 0 && r && (g ? s = On[f] ? E : -E : h = On[f] ? E : -E), {
      left: h,
      top: s
    };
  }, S = l === "left" || l === "right";
  if (u !== "center") {
    const y = Ii[e], f = ut[y], g = zt[y];
    if (n[g] > t[g]) {
      if (
        // current space is not enough
        // ----------[ target ]---------|
        // -------[     follower        ]
        t[y] + t[g] < n[g]
      ) {
        const h = (n[g] - t[g]) / 2;
        t[y] < h || t[f] < h ? t[y] < t[f] ? (u = Tn[a], d = w(g, f, S)) : d = w(g, y, S) : u = "center";
      }
    } else n[g] < t[g] && t[f] < 0 && // opposite align has larger space
    // ------------[   target   ]
    // ----------------[follower]
    t[y] > t[f] && (u = Tn[a]);
  } else {
    const y = l === "bottom" || l === "top" ? "left" : "top", f = ut[y], g = zt[y], h = (n[g] - t[g]) / 2;
    // center is not enough
    // ----------- [ target ]--|
    // -------[     follower     ]
    (t[y] < h || t[f] < h) && (t[y] > t[f] ? (u = Mn[y], d = w(g, y, S)) : (u = Mn[f], d = w(g, f, S)));
  }
  let b = l;
  return (
    // space is not enough
    t[l] < n[zt[l]] && // opposite position's space is larger
    t[l] < t[ut[l]] && (b = ut[l]), {
      placement: u !== "center" ? `${b}-${u}` : b,
      left: d.left,
      top: d.top
    }
  );
}
function Fi(e, t) {
  return t ? zi[e] : Ai[e];
}
function ki(e, t, n, r, o, i) {
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
const Hi = st([
  st(".v-binder-follower-container", {
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    height: "0",
    pointerEvents: "none",
    zIndex: "auto"
  }),
  st(".v-binder-follower-content", {
    position: "absolute",
    zIndex: "auto"
  }, [
    st("> *", {
      pointerEvents: "all"
    })
  ])
]), Li = ue({
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
    const t = re("VBinder"), n = nt(() => e.enabled !== void 0 ? e.enabled : e.show), r = B(null), o = B(null), i = () => {
      const { syncTrigger: b } = e;
      b.includes("scroll") && t.addScrollListener(u), b.includes("resize") && t.addResizeListener(u);
    }, l = () => {
      t.removeScrollListener(u), t.removeResizeListener(u);
    };
    me(() => {
      n.value && (u(), i());
    });
    const a = Ct();
    Hi.mount({
      id: "vueuc/binder",
      head: !0,
      anchorMetaName: Ri,
      ssr: a
    }), xe(() => {
      l();
    }), No(() => {
      n.value && u();
    });
    const u = () => {
      if (!n.value)
        return;
      const b = r.value;
      if (b === null)
        return;
      const y = t.targetRef, { x: f, y: g, overlap: h } = e, s = f !== void 0 && g !== void 0 ? ai(f, g) : At(y);
      b.style.setProperty("--v-target-width", `${Math.round(s.width)}px`), b.style.setProperty("--v-target-height", `${Math.round(s.height)}px`);
      const { width: E, minWidth: I, placement: k, internalShift: L, flip: O } = e;
      b.setAttribute("v-placement", k), h ? b.setAttribute("v-overlap", "") : b.removeAttribute("v-overlap");
      const { style: c } = b;
      E === "target" ? c.width = `${s.width}px` : E !== void 0 ? c.width = E : c.width = "", I === "target" ? c.minWidth = `${s.width}px` : I !== void 0 ? c.minWidth = I : c.minWidth = "";
      const v = At(b), _ = At(o.value), { left: C, top: D, placement: H } = Di(k, s, v, L, O, h), W = Fi(H, h), { left: N, top: p, transform: x } = ki(H, _, s, D, C, h);
      b.setAttribute("v-placement", H), b.style.setProperty("--v-offset-left", `${Math.round(C)}px`), b.style.setProperty("--v-offset-top", `${Math.round(D)}px`), b.style.transform = `translateX(${N}) translateY(${p}) ${x}`, b.style.setProperty("--v-transform-origin", W), b.style.transformOrigin = W;
    };
    he(n, (b) => {
      b ? (i(), d()) : l();
    });
    const d = () => {
      Vt().then(u).catch((b) => console.error(b));
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
    ].forEach((b) => {
      he(ye(e, b), u);
    }), ["teleportDisabled"].forEach((b) => {
      he(ye(e, b), d);
    }), he(ye(e, "syncTrigger"), (b) => {
      b.includes("resize") ? t.addResizeListener(u) : t.removeResizeListener(u), b.includes("scroll") ? t.addScrollListener(u) : t.removeScrollListener(u);
    });
    const w = ir(), S = nt(() => {
      const { to: b } = e;
      if (b !== void 0)
        return b;
      w.value;
    });
    return {
      VBinder: t,
      mergedEnabled: n,
      offsetContainerRef: o,
      followerRef: r,
      mergedTo: S,
      syncPosition: u
    };
  },
  render() {
    return A(Bi, {
      show: this.show,
      to: this.mergedTo,
      disabled: this.teleportDisabled
    }, {
      default: () => {
        var e, t;
        const n = A("div", {
          class: ["v-binder-follower-container", this.containerClass],
          ref: "offsetContainerRef"
        }, [
          A("div", {
            class: "v-binder-follower-content",
            ref: "followerRef"
          }, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e))
        ]);
        return this.zindexable ? _t(n, [
          [
            or,
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
var Me = [], Wi = function() {
  return Me.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, Ni = function() {
  return Me.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, Pn = "ResizeObserver loop completed with undelivered notifications.", ji = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: Pn
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = Pn), window.dispatchEvent(e);
}, rt;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(rt || (rt = {}));
var Pe = function(e) {
  return Object.freeze(e);
}, Vi = /* @__PURE__ */ function() {
  function e(t, n) {
    this.inlineSize = t, this.blockSize = n, Pe(this);
  }
  return e;
}(), hr = function() {
  function e(t, n, r, o) {
    return this.x = t, this.y = n, this.width = r, this.height = o, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Pe(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, n = t.x, r = t.y, o = t.top, i = t.right, l = t.bottom, a = t.left, u = t.width, d = t.height;
    return { x: n, y: r, top: o, right: i, bottom: l, left: a, width: u, height: d };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), an = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, pr = function(e) {
  if (an(e)) {
    var t = e.getBBox(), n = t.width, r = t.height;
    return !n && !r;
  }
  var o = e, i = o.offsetWidth, l = o.offsetHeight;
  return !(i || l || e.getClientRects().length);
}, Rn = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var n = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(n && e instanceof n.Element);
}, Ui = function(e) {
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
}, tt = typeof window < "u" ? window : {}, dt = /* @__PURE__ */ new WeakMap(), Bn = /auto|scroll/, Xi = /^tb|vertical/, Yi = /msie|trident/i.test(tt.navigator && tt.navigator.userAgent), fe = function(e) {
  return parseFloat(e || "0");
}, ke = function(e, t, n) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = !1), new Vi((n ? t : e) || 0, (n ? e : t) || 0);
}, An = Pe({
  devicePixelContentBoxSize: ke(),
  borderBoxSize: ke(),
  contentBoxSize: ke(),
  contentRect: new hr(0, 0, 0, 0)
}), vr = function(e, t) {
  if (t === void 0 && (t = !1), dt.has(e) && !t)
    return dt.get(e);
  if (pr(e))
    return dt.set(e, An), An;
  var n = getComputedStyle(e), r = an(e) && e.ownerSVGElement && e.getBBox(), o = !Yi && n.boxSizing === "border-box", i = Xi.test(n.writingMode || ""), l = !r && Bn.test(n.overflowY || ""), a = !r && Bn.test(n.overflowX || ""), u = r ? 0 : fe(n.paddingTop), d = r ? 0 : fe(n.paddingRight), w = r ? 0 : fe(n.paddingBottom), S = r ? 0 : fe(n.paddingLeft), b = r ? 0 : fe(n.borderTopWidth), y = r ? 0 : fe(n.borderRightWidth), f = r ? 0 : fe(n.borderBottomWidth), g = r ? 0 : fe(n.borderLeftWidth), h = S + d, s = u + w, E = g + y, I = b + f, k = a ? e.offsetHeight - I - e.clientHeight : 0, L = l ? e.offsetWidth - E - e.clientWidth : 0, O = o ? h + E : 0, c = o ? s + I : 0, v = r ? r.width : fe(n.width) - O - L, _ = r ? r.height : fe(n.height) - c - k, C = v + h + L + E, D = _ + s + k + I, H = Pe({
    devicePixelContentBoxSize: ke(Math.round(v * devicePixelRatio), Math.round(_ * devicePixelRatio), i),
    borderBoxSize: ke(C, D, i),
    contentBoxSize: ke(v, _, i),
    contentRect: new hr(S, u, v, _)
  });
  return dt.set(e, H), H;
}, mr = function(e, t, n) {
  var r = vr(e, n), o = r.borderBoxSize, i = r.contentBoxSize, l = r.devicePixelContentBoxSize;
  switch (t) {
    case rt.DEVICE_PIXEL_CONTENT_BOX:
      return l;
    case rt.BORDER_BOX:
      return o;
    default:
      return i;
  }
}, Ki = /* @__PURE__ */ function() {
  function e(t) {
    var n = vr(t);
    this.target = t, this.contentRect = n.contentRect, this.borderBoxSize = Pe([n.borderBoxSize]), this.contentBoxSize = Pe([n.contentBoxSize]), this.devicePixelContentBoxSize = Pe([n.devicePixelContentBoxSize]);
  }
  return e;
}(), br = function(e) {
  if (pr(e))
    return 1 / 0;
  for (var t = 0, n = e.parentNode; n; )
    t += 1, n = n.parentNode;
  return t;
}, Gi = function() {
  var e = 1 / 0, t = [];
  Me.forEach(function(l) {
    if (l.activeTargets.length !== 0) {
      var a = [];
      l.activeTargets.forEach(function(d) {
        var w = new Ki(d.target), S = br(d.target);
        a.push(w), d.lastReportedSize = mr(d.target, d.observedBox), S < e && (e = S);
      }), t.push(function() {
        l.callback.call(l.observer, a, l.observer);
      }), l.activeTargets.splice(0, l.activeTargets.length);
    }
  });
  for (var n = 0, r = t; n < r.length; n++) {
    var o = r[n];
    o();
  }
  return e;
}, zn = function(e) {
  Me.forEach(function(n) {
    n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(o) {
      o.isActive() && (br(o.target) > e ? n.activeTargets.push(o) : n.skippedTargets.push(o));
    });
  });
}, qi = function() {
  var e = 0;
  for (zn(e); Wi(); )
    e = Gi(), zn(e);
  return Ni() && ji(), e > 0;
}, It, gr = [], Zi = function() {
  return gr.splice(0).forEach(function(e) {
    return e();
  });
}, Ji = function(e) {
  if (!It) {
    var t = 0, n = document.createTextNode(""), r = { characterData: !0 };
    new MutationObserver(function() {
      return Zi();
    }).observe(n, r), It = function() {
      n.textContent = "".concat(t ? t-- : t++);
    };
  }
  gr.push(e), It();
}, Qi = function(e) {
  Ji(function() {
    requestAnimationFrame(e);
  });
}, bt = 0, ea = function() {
  return !!bt;
}, ta = 250, na = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, In = [
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
], Dn = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, Dt = !1, ra = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var n = this;
    if (t === void 0 && (t = ta), !Dt) {
      Dt = !0;
      var r = Dn(t);
      Qi(function() {
        var o = !1;
        try {
          o = qi();
        } finally {
          if (Dt = !1, t = r - Dn(), !ea())
            return;
          o ? n.run(1e3) : t > 0 ? n.run(t) : n.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, n = function() {
      return t.observer && t.observer.observe(document.body, na);
    };
    document.body ? n() : tt.addEventListener("DOMContentLoaded", n);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), In.forEach(function(n) {
      return tt.addEventListener(n, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), In.forEach(function(n) {
      return tt.removeEventListener(n, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), en = new ra(), Fn = function(e) {
  !bt && e > 0 && en.start(), bt += e, !bt && en.stop();
}, oa = function(e) {
  return !an(e) && !Ui(e) && getComputedStyle(e).display === "inline";
}, ia = function() {
  function e(t, n) {
    this.target = t, this.observedBox = n || rt.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = mr(this.target, this.observedBox, !0);
    return oa(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), aa = /* @__PURE__ */ function() {
  function e(t, n) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = n;
  }
  return e;
}(), ct = /* @__PURE__ */ new WeakMap(), kn = function(e, t) {
  for (var n = 0; n < e.length; n += 1)
    if (e[n].target === t)
      return n;
  return -1;
}, ft = function() {
  function e() {
  }
  return e.connect = function(t, n) {
    var r = new aa(t, n);
    ct.set(t, r);
  }, e.observe = function(t, n, r) {
    var o = ct.get(t), i = o.observationTargets.length === 0;
    kn(o.observationTargets, n) < 0 && (i && Me.push(o), o.observationTargets.push(new ia(n, r && r.box)), Fn(1), en.schedule());
  }, e.unobserve = function(t, n) {
    var r = ct.get(t), o = kn(r.observationTargets, n), i = r.observationTargets.length === 1;
    o >= 0 && (i && Me.splice(Me.indexOf(r), 1), r.observationTargets.splice(o, 1), Fn(-1));
  }, e.disconnect = function(t) {
    var n = this, r = ct.get(t);
    r.observationTargets.slice().forEach(function(o) {
      return n.unobserve(t, o.target);
    }), r.activeTargets.splice(0, r.activeTargets.length);
  }, e;
}(), la = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    ft.connect(this, t);
  }
  return e.prototype.observe = function(t, n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Rn(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    ft.observe(this, t, n);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Rn(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    ft.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    ft.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
class sa {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || la)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
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
const Hn = new sa(), Ln = ue({
  name: "ResizeObserver",
  props: {
    onResize: Function
  },
  setup(e) {
    let t = !1;
    const n = tr().proxy;
    function r(o) {
      const { onResize: i } = e;
      i !== void 0 && i(o);
    }
    me(() => {
      const o = n.$el;
      if (o === void 0) {
        Sn("resize-observer", "$el does not exist.");
        return;
      }
      if (o.nextElementSibling !== o.nextSibling && o.nodeType === 3 && o.nodeValue !== "") {
        Sn("resize-observer", "$el can not be observed (it may be a text node).");
        return;
      }
      o.nextElementSibling !== null && (Hn.registerHandler(o.nextElementSibling, r), t = !0);
    }), xe(() => {
      t && Hn.unregisterHandler(n.$el.nextElementSibling);
    });
  },
  render() {
    return Ut(this.$slots, "default");
  }
});
function wr(e) {
  return e instanceof HTMLElement;
}
function yr(e) {
  for (let t = 0; t < e.childNodes.length; t++) {
    const n = e.childNodes[t];
    if (wr(n) && (Sr(n) || yr(n)))
      return !0;
  }
  return !1;
}
function xr(e) {
  for (let t = e.childNodes.length - 1; t >= 0; t--) {
    const n = e.childNodes[t];
    if (wr(n) && (Sr(n) || xr(n)))
      return !0;
  }
  return !1;
}
function Sr(e) {
  if (!ua(e))
    return !1;
  try {
    e.focus({ preventScroll: !0 });
  } catch {
  }
  return document.activeElement === e;
}
function ua(e) {
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
let Ye = [];
const da = ue({
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
    const t = ii(), n = B(null), r = B(null);
    let o = !1, i = !1;
    const l = typeof document > "u" ? null : document.activeElement;
    function a() {
      return Ye[Ye.length - 1] === t;
    }
    function u(h) {
      var s;
      h.code === "Escape" && a() && ((s = e.onEsc) === null || s === void 0 || s.call(e, h));
    }
    me(() => {
      he(() => e.active, (h) => {
        h ? (S(), Q("keydown", document, u)) : (G("keydown", document, u), o && b());
      }, {
        immediate: !0
      });
    }), xe(() => {
      G("keydown", document, u), o && b();
    });
    function d(h) {
      if (!i && a()) {
        const s = w();
        if (s === null || s.contains(yt(h)))
          return;
        y("first");
      }
    }
    function w() {
      const h = n.value;
      if (h === null)
        return null;
      let s = h;
      for (; s = s.nextSibling, !(s === null || s instanceof Element && s.tagName === "DIV"); )
        ;
      return s;
    }
    function S() {
      var h;
      if (!e.disabled) {
        if (Ye.push(t), e.autoFocus) {
          const { initialFocusTo: s } = e;
          s === void 0 ? y("first") : (h = $n(s)) === null || h === void 0 || h.focus({ preventScroll: !0 });
        }
        o = !0, document.addEventListener("focus", d, !0);
      }
    }
    function b() {
      var h;
      if (e.disabled || (document.removeEventListener("focus", d, !0), Ye = Ye.filter((E) => E !== t), a()))
        return;
      const { finalFocusTo: s } = e;
      s !== void 0 ? (h = $n(s)) === null || h === void 0 || h.focus({ preventScroll: !0 }) : e.returnFocusOnDeactivated && l instanceof HTMLElement && (i = !0, l.focus({ preventScroll: !0 }), i = !1);
    }
    function y(h) {
      if (a() && e.active) {
        const s = n.value, E = r.value;
        if (s !== null && E !== null) {
          const I = w();
          if (I == null || I === E) {
            i = !0, s.focus({ preventScroll: !0 }), i = !1;
            return;
          }
          i = !0;
          const k = h === "first" ? yr(I) : xr(I);
          i = !1, k || (i = !0, s.focus({ preventScroll: !0 }), i = !1);
        }
      }
    }
    function f(h) {
      if (i)
        return;
      const s = w();
      s !== null && (h.relatedTarget !== null && s.contains(h.relatedTarget) ? y("last") : y("first"));
    }
    function g(h) {
      i || (h.relatedTarget !== null && h.relatedTarget === n.value ? y("last") : y("first"));
    }
    return {
      focusableStartRef: n,
      focusableEndRef: r,
      focusableStyle: "position: absolute; height: 0; width: 0;",
      handleStartFocus: f,
      handleEndFocus: g
    };
  },
  render() {
    const { default: e } = this.$slots;
    if (e === void 0)
      return null;
    if (this.disabled)
      return e();
    const { active: t, focusableStyle: n } = this;
    return A(be, null, [
      A("div", {
        "aria-hidden": "true",
        tabindex: t ? "0" : "-1",
        ref: "focusableStartRef",
        style: n,
        onFocus: this.handleStartFocus
      }),
      e(),
      A("div", {
        "aria-hidden": "true",
        style: n,
        ref: "focusableEndRef",
        tabindex: t ? "0" : "-1",
        onFocus: this.handleEndFocus
      })
    ]);
  }
});
const ca = "n-internal-select-menu-body", _r = "n-drawer-body", Cr = "n-modal-body", Er = "n-popover-body", $r = "__disabled__";
function We(e) {
  const t = re(Cr, null), n = re(_r, null), r = re(Er, null), o = re(ca, null), i = B();
  if (typeof document < "u") {
    i.value = document.fullscreenElement;
    const l = () => {
      i.value = document.fullscreenElement;
    };
    me(() => {
      Q("fullscreenchange", document, l);
    }), xe(() => {
      G("fullscreenchange", document, l);
    });
  }
  return nt(() => {
    var l;
    const {
      to: a
    } = e;
    return a !== void 0 ? a === !1 ? $r : a === !0 ? i.value || "body" : a : t != null && t.value ? (l = t.value.$el) !== null && l !== void 0 ? l : t.value : n != null && n.value ? n.value : r != null && r.value ? r.value : o != null && o.value ? o.value : a ?? (i.value || "body");
  });
}
We.tdkey = $r;
We.propTo = {
  type: [String, Object, Boolean],
  default: void 0
};
function fa(e) {
  const t = {
    isDeactivated: !1
  };
  let n = !1;
  return bo(() => {
    if (t.isDeactivated = !1, !n) {
      n = !0;
      return;
    }
    e();
  }), go(() => {
    t.isDeactivated = !0, n || (n = !0);
  }), t;
}
const ha = /^(\d|\.)+$/, Wn = /(\d|\.)+/;
function Ft(e, {
  c: t = 1,
  offset: n = 0,
  attachPx: r = !0
} = {}) {
  if (typeof e == "number") {
    const o = (e + n) * t;
    return o === 0 ? "0" : `${o}px`;
  } else if (typeof e == "string")
    if (ha.test(e)) {
      const o = (Number(e) + n) * t;
      return r ? o === 0 ? "0" : `${o}px` : `${o}`;
    } else {
      const o = Wn.exec(e);
      return o ? e.replace(Wn, String((Number(o[0]) + n) * t)) : e;
    }
  return e;
}
function Nn(e) {
  const {
    left: t,
    right: n,
    top: r,
    bottom: o
  } = qe(e);
  return `${r} ${t} ${o} ${n}`;
}
var jn = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_11684_UKXSMLHMUWFBWKVP", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.97.2", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-5a8078c568-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
function pa(e) {
  let t = ".", n = "__", r = "--", o;
  {
    let f = e.blockPrefix;
    f && (t = f), f = e.elementPrefix, f && (n = f), f = e.modifierPrefix, f && (r = f);
  }
  const i = {
    install(f) {
      o = f.c;
      const g = f.context;
      g.bem = {}, g.bem.b = null, g.bem.els = null;
    }
  };
  function l(f) {
    let g, h;
    return {
      before(s) {
        g = s.bem.b, h = s.bem.els, s.bem.els = null;
      },
      after(s) {
        s.bem.b = g, s.bem.els = h;
      },
      $({ context: s, props: E }) {
        return f = typeof f == "string" ? f : f({ context: s, props: E }), s.bem.b = f, `${(E == null ? void 0 : E.bPrefix) || t}${s.bem.b}`;
      }
    };
  }
  function a(f) {
    let g;
    return {
      before(h) {
        g = h.bem.els;
      },
      after(h) {
        h.bem.els = g;
      },
      $({ context: h, props: s }) {
        return f = typeof f == "string" ? f : f({ context: h, props: s }), h.bem.els = f.split(",").map((E) => E.trim()), h.bem.els.map((E) => `${(s == null ? void 0 : s.bPrefix) || t}${h.bem.b}${n}${E}`).join(", ");
      }
    };
  }
  function u(f) {
    return {
      $({ context: g, props: h }) {
        f = typeof f == "string" ? f : f({ context: g, props: h });
        const s = f.split(",").map((k) => k.trim());
        function E(k) {
          return s.map((L) => `&${(h == null ? void 0 : h.bPrefix) || t}${g.bem.b}${k !== void 0 ? `${n}${k}` : ""}${r}${L}`).join(", ");
        }
        const I = g.bem.els;
        if (I !== null) {
          if (jn.NODE_ENV !== "production" && I.length >= 2)
            throw Error(`[css-render/plugin-bem]: m(${f}) is invalid, using modifier inside multiple elements is not allowed`);
          return E(I[0]);
        } else
          return E();
      }
    };
  }
  function d(f) {
    return {
      $({ context: g, props: h }) {
        f = typeof f == "string" ? f : f({ context: g, props: h });
        const s = g.bem.els;
        if (jn.NODE_ENV !== "production" && s !== null && s.length >= 2)
          throw Error(`[css-render/plugin-bem]: notM(${f}) is invalid, using modifier inside multiple elements is not allowed`);
        return `&:not(${(h == null ? void 0 : h.bPrefix) || t}${g.bem.b}${s !== null && s.length > 0 ? `${n}${s[0]}` : ""}${r}${f})`;
      }
    };
  }
  return Object.assign(i, {
    cB: (...f) => o(l(f[0]), f[1], f[2]),
    cE: (...f) => o(a(f[0]), f[1], f[2]),
    cM: (...f) => o(u(f[0]), f[1], f[2]),
    cNotM: (...f) => o(d(f[0]), f[1], f[2])
  }), i;
}
const va = "n", ma = `.${va}-`, ba = "__", ga = "--", Tr = fr(), Or = pa({
  blockPrefix: ma,
  elementPrefix: ba,
  modifierPrefix: ga
});
Tr.use(Or);
const {
  c: U,
  find: ql
} = Tr, {
  cB: ne,
  cE: Oe,
  cM: ce,
  cNotM: kt
} = Or, wa = (...e) => U(">", [ne(...e)]);
let Ht;
function ya() {
  return Ht === void 0 && (Ht = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")), Ht;
}
const Vn = /* @__PURE__ */ new Set();
function Ke(e, t) {
  const n = `[naive/${e}]: ${t}`;
  Vn.has(n) || (Vn.add(n), console.error(n));
}
function Un(e, t) {
  console.error(`[naive/${e}]: ${t}`);
}
function xa(e, t) {
  throw new Error(`[naive/${e}]: ${t}`);
}
function Ze(e, ...t) {
  if (Array.isArray(e))
    e.forEach((n) => Ze(n, ...t));
  else
    return e(...t);
}
function tn(e, t = !0, n = []) {
  return e.forEach((r) => {
    if (r !== null) {
      if (typeof r != "object") {
        (typeof r == "string" || typeof r == "number") && n.push(er(String(r)));
        return;
      }
      if (Array.isArray(r)) {
        tn(r, t, n);
        return;
      }
      if (r.type === be) {
        if (r.children === null) return;
        Array.isArray(r.children) && tn(r.children, t, n);
      } else {
        if (r.type === rn && t) return;
        n.push(r);
      }
    }
  }), n;
}
function Sa(e, t = "default", n = void 0) {
  const r = e[t];
  if (!r)
    return Un("getFirstSlotVNode", `slot[${t}] is empty`), null;
  const o = tn(r(n));
  return o.length === 1 ? o[0] : (Un("getFirstSlotVNode", `slot[${t}] should have exactly one child`), null);
}
function _a(e, t = [], n) {
  const r = {};
  return t.forEach((o) => {
    r[o] = e[o];
  }), Object.assign(r, n);
}
function ln(e) {
  return e.some((t) => wo(t) ? !(t.type === rn || t.type === be && !ln(t.children)) : !0) ? e : null;
}
function Lt(e, t) {
  const n = e && ln(e());
  return t(n || null);
}
function Xn(e) {
  return !(e && ln(e()));
}
const Yn = ue({
  render() {
    var e, t;
    return (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e);
  }
}), $t = "n-config-provider", Ca = "n";
function Mr(e = {}, t = {
  defaultBordered: !0
}) {
  const n = re($t, null);
  return {
    // NConfigProvider,
    inlineThemeDisabled: n == null ? void 0 : n.inlineThemeDisabled,
    mergedRtlRef: n == null ? void 0 : n.mergedRtlRef,
    mergedComponentPropsRef: n == null ? void 0 : n.mergedComponentPropsRef,
    mergedBreakpointsRef: n == null ? void 0 : n.mergedBreakpointsRef,
    mergedBorderedRef: z(() => {
      var r, o;
      const {
        bordered: i
      } = e;
      return i !== void 0 ? i : (o = (r = n == null ? void 0 : n.mergedBorderedRef.value) !== null && r !== void 0 ? r : t.defaultBordered) !== null && o !== void 0 ? o : !0;
    }),
    mergedClsPrefixRef: n ? n.mergedClsPrefixRef : ht(Ca),
    namespaceRef: z(() => n == null ? void 0 : n.mergedNamespaceRef.value)
  };
}
function Pr(e, t, n, r) {
  n || xa("useThemeClass", "cssVarsRef is not passed");
  const o = re($t, null), i = o == null ? void 0 : o.mergedThemeHashRef, l = o == null ? void 0 : o.styleMountTarget, a = B(""), u = Ct();
  let d;
  const w = `__${e}`, S = () => {
    let b = w;
    const y = i == null ? void 0 : i.value;
    y && (b += `-${y}`);
    const {
      themeOverrides: f,
      builtinThemeOverrides: g
    } = r;
    f && (b += `-${Qt(JSON.stringify(f))}`), g && (b += `-${Qt(JSON.stringify(g))}`), a.value = b, d = () => {
      const h = n.value;
      let s = "";
      for (const E in h)
        s += `${E}: ${h[E]};`;
      U(`.${b}`, s).mount({
        id: b,
        ssr: u,
        parent: l
      }), d = void 0;
    };
  };
  return He(() => {
    S();
  }), {
    themeClass: a,
    onRender: () => {
      d == null || d();
    }
  };
}
const nn = "naive-ui-style";
function Ea(e, t, n) {
  if (!t) return;
  const r = Ct(), o = z(() => {
    const {
      value: a
    } = t;
    if (!a)
      return;
    const u = a[e];
    if (u)
      return u;
  }), i = re($t, null), l = () => {
    He(() => {
      const {
        value: a
      } = n, u = `${a}${e}Rtl`;
      if (Pi(u, r)) return;
      const {
        value: d
      } = o;
      d && d.style.mount({
        id: u,
        head: !0,
        anchorMetaName: nn,
        props: {
          bPrefix: a ? `.${a}-` : void 0
        },
        ssr: r,
        parent: i == null ? void 0 : i.styleMountTarget
      });
    });
  };
  return r ? l() : nr(l), o;
}
const sn = {
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
  fontSize: $a,
  fontFamily: Ta,
  lineHeight: Oa
} = sn, Ma = U("body", `
 margin: 0;
 font-size: ${$a};
 font-family: ${Ta};
 line-height: ${Oa};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [U("input", `
 font-family: inherit;
 font-size: inherit;
 `)]);
function Ve(e, t, n, r, o, i) {
  const l = Ct(), a = re($t, null);
  if (n) {
    const d = () => {
      const w = i == null ? void 0 : i.value;
      n.mount({
        id: w === void 0 ? t : w + t,
        head: !0,
        props: {
          bPrefix: w ? `.${w}-` : void 0
        },
        anchorMetaName: nn,
        ssr: l,
        parent: a == null ? void 0 : a.styleMountTarget
      }), a != null && a.preflightStyleDisabled || Ma.mount({
        id: "n-global",
        head: !0,
        anchorMetaName: nn,
        ssr: l,
        parent: a == null ? void 0 : a.styleMountTarget
      });
    };
    l ? d() : nr(d);
  }
  return z(() => {
    var d;
    const {
      theme: {
        common: w,
        self: S,
        peers: b = {}
      } = {},
      themeOverrides: y = {},
      builtinThemeOverrides: f = {}
    } = o, {
      common: g,
      peers: h
    } = y, {
      common: s = void 0,
      [e]: {
        common: E = void 0,
        self: I = void 0,
        peers: k = {}
      } = {}
    } = (a == null ? void 0 : a.mergedThemeRef.value) || {}, {
      common: L = void 0,
      [e]: O = {}
    } = (a == null ? void 0 : a.mergedThemeOverridesRef.value) || {}, {
      common: c,
      peers: v = {}
    } = O, _ = ot({}, w || E || s || r.common, L, c, g), C = ot(
      // {}, executed every time, no need for empty obj
      (d = S || I || r.self) === null || d === void 0 ? void 0 : d(_),
      f,
      O,
      y
    );
    return {
      common: _,
      self: C,
      peers: ot({}, r.peers, k, b),
      peerOverrides: ot({}, f.peers, v, h)
    };
  });
}
Ve.props = {
  theme: Object,
  themeOverrides: Object,
  builtinThemeOverrides: Object
};
const T = {
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
}, Pa = Le(T.neutralBase), Rr = Le(T.neutralInvertBase), Ra = `rgba(${Rr.slice(0, 3).join(", ")}, `;
function Kn(e) {
  return `${Ra + String(e)})`;
}
function q(e) {
  const t = Array.from(Rr);
  return t[3] = Number(e), ri(Pa, t);
}
const Br = Object.assign(Object.assign({
  name: "common"
}, sn), {
  baseColor: T.neutralBase,
  // primary color
  primaryColor: T.primaryDefault,
  primaryColorHover: T.primaryHover,
  primaryColorPressed: T.primaryActive,
  primaryColorSuppl: T.primarySuppl,
  // info color
  infoColor: T.infoDefault,
  infoColorHover: T.infoHover,
  infoColorPressed: T.infoActive,
  infoColorSuppl: T.infoSuppl,
  // success color
  successColor: T.successDefault,
  successColorHover: T.successHover,
  successColorPressed: T.successActive,
  successColorSuppl: T.successSuppl,
  // warning color
  warningColor: T.warningDefault,
  warningColorHover: T.warningHover,
  warningColorPressed: T.warningActive,
  warningColorSuppl: T.warningSuppl,
  // error color
  errorColor: T.errorDefault,
  errorColorHover: T.errorHover,
  errorColorPressed: T.errorActive,
  errorColorSuppl: T.errorSuppl,
  // text color
  textColorBase: T.neutralTextBase,
  textColor1: "rgb(31, 34, 37)",
  textColor2: "rgb(51, 54, 57)",
  textColor3: "rgb(118, 124, 130)",
  // textColor4: neutral(base.alpha4), // disabled, placeholder, icon
  // textColor5: neutral(base.alpha5),
  textColorDisabled: q(T.alpha4),
  placeholderColor: q(T.alpha4),
  placeholderColorDisabled: q(T.alpha5),
  iconColor: q(T.alpha4),
  iconColorHover: it(q(T.alpha4), {
    lightness: 0.75
  }),
  iconColorPressed: it(q(T.alpha4), {
    lightness: 0.9
  }),
  iconColorDisabled: q(T.alpha5),
  opacity1: T.alpha1,
  opacity2: T.alpha2,
  opacity3: T.alpha3,
  opacity4: T.alpha4,
  opacity5: T.alpha5,
  dividerColor: "rgb(239, 239, 245)",
  borderColor: "rgb(224, 224, 230)",
  // close
  closeIconColor: q(Number(T.alphaClose)),
  closeIconColorHover: q(Number(T.alphaClose)),
  closeIconColorPressed: q(Number(T.alphaClose)),
  closeColorHover: "rgba(0, 0, 0, .09)",
  closeColorPressed: "rgba(0, 0, 0, .13)",
  // clear
  clearColor: q(T.alpha4),
  clearColorHover: it(q(T.alpha4), {
    lightness: 0.75
  }),
  clearColorPressed: it(q(T.alpha4), {
    lightness: 0.9
  }),
  scrollbarColor: Kn(T.alphaScrollbar),
  scrollbarColorHover: Kn(T.alphaScrollbarHover),
  scrollbarWidth: "5px",
  scrollbarHeight: "5px",
  scrollbarBorderRadius: "5px",
  progressRailColor: q(T.alphaProgressRail),
  railColor: "rgb(219, 219, 223)",
  popoverColor: T.neutralPopover,
  tableColor: T.neutralCard,
  cardColor: T.neutralCard,
  modalColor: T.neutralModal,
  bodyColor: T.neutralBody,
  tagColor: "#eee",
  avatarColor: q(T.alphaAvatar),
  invertedColor: "rgb(0, 20, 40)",
  inputColor: q(T.alphaInput),
  codeColor: "rgb(244, 244, 248)",
  tabColor: "rgb(247, 247, 250)",
  actionColor: "rgb(250, 250, 252)",
  tableHeaderColor: "rgb(250, 250, 252)",
  hoverColor: "rgb(243, 243, 245)",
  // use color with alpha since it can be nested with header filter & sorter effect
  tableColorHover: "rgba(0, 0, 100, 0.03)",
  tableColorStriped: "rgba(0, 0, 100, 0.02)",
  pressedColor: "rgb(237, 237, 239)",
  opacityDisabled: T.alphaDisabled,
  inputColorDisabled: "rgb(250, 250, 252)",
  // secondary button color
  // can also be used in tertiary button & quaternary button
  buttonColor2: "rgba(46, 51, 56, .05)",
  buttonColor2Hover: "rgba(46, 51, 56, .09)",
  buttonColor2Pressed: "rgba(46, 51, 56, .13)",
  boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",
  boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",
  boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"
}), Ba = {
  railInsetHorizontalBottom: "auto 2px 4px 2px",
  railInsetHorizontalTop: "4px 2px auto 2px",
  railInsetVerticalRight: "2px 4px 2px auto",
  railInsetVerticalLeft: "2px auto 2px 4px",
  railColor: "transparent"
};
function Aa(e) {
  const {
    scrollbarColor: t,
    scrollbarColorHover: n,
    scrollbarHeight: r,
    scrollbarWidth: o,
    scrollbarBorderRadius: i
  } = e;
  return Object.assign(Object.assign({}, Ba), {
    height: r,
    width: o,
    borderRadius: i,
    color: t,
    colorHover: n
  });
}
const za = {
  name: "Scrollbar",
  common: Br,
  self: Aa
}, {
  cubicBezierEaseInOut: Gn
} = sn;
function Ia({
  name: e = "fade-in",
  enterDuration: t = "0.2s",
  leaveDuration: n = "0.2s",
  enterCubicBezier: r = Gn,
  leaveCubicBezier: o = Gn
} = {}) {
  return [U(`&.${e}-transition-enter-active`, {
    transition: `all ${t} ${r}!important`
  }), U(`&.${e}-transition-leave-active`, {
    transition: `all ${n} ${o}!important`
  }), U(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`, {
    opacity: 0
  }), U(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`, {
    opacity: 1
  })];
}
const Da = ne("scrollbar", `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [U(">", [ne("scrollbar-container", `
 width: 100%;
 overflow: scroll;
 height: 100%;
 min-height: inherit;
 max-height: inherit;
 scrollbar-width: none;
 `, [U("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), U(">", [
  // We can't set overflow hidden since it affects positioning.
  ne("scrollbar-content", `
 box-sizing: border-box;
 min-width: 100%;
 `)
])])]), U(">, +", [ne("scrollbar-rail", `
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `, [ce("horizontal", `
 height: var(--n-scrollbar-height);
 `, [U(">", [Oe("scrollbar", `
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
 `, [U(">", [Oe("scrollbar", `
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
 `), ce("disabled", [U(">", [Oe("scrollbar", "pointer-events: none;")])]), U(">", [Oe("scrollbar", `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [Ia(), U("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), Fa = Object.assign(Object.assign({}, Ve.props), {
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
}), ka = ue({
  name: "Scrollbar",
  props: Fa,
  inheritAttrs: !1,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: n,
      mergedRtlRef: r
    } = Mr(e), o = Ea("Scrollbar", r, t), i = B(null), l = B(null), a = B(null), u = B(null), d = B(null), w = B(null), S = B(null), b = B(null), y = B(null), f = B(null), g = B(null), h = B(0), s = B(0), E = B(!1), I = B(!1);
    let k = !1, L = !1, O, c, v = 0, _ = 0, C = 0, D = 0;
    const H = Xo(), W = Ve("Scrollbar", "-scrollbar", Da, za, e, t), N = z(() => {
      const {
        value: m
      } = b, {
        value: $
      } = w, {
        value: P
      } = f;
      return m === null || $ === null || P === null ? 0 : Math.min(m, P * m / $ + wn(W.value.self.width) * 1.5);
    }), p = z(() => `${N.value}px`), x = z(() => {
      const {
        value: m
      } = y, {
        value: $
      } = S, {
        value: P
      } = g;
      return m === null || $ === null || P === null ? 0 : P * m / $ + wn(W.value.self.height) * 1.5;
    }), M = z(() => `${x.value}px`), R = z(() => {
      const {
        value: m
      } = b, {
        value: $
      } = h, {
        value: P
      } = w, {
        value: V
      } = f;
      if (m === null || P === null || V === null)
        return 0;
      {
        const Y = P - m;
        return Y ? $ / Y * (V - N.value) : 0;
      }
    }), F = z(() => `${R.value}px`), j = z(() => {
      const {
        value: m
      } = y, {
        value: $
      } = s, {
        value: P
      } = S, {
        value: V
      } = g;
      if (m === null || P === null || V === null)
        return 0;
      {
        const Y = P - m;
        return Y ? $ / Y * (V - x.value) : 0;
      }
    }), oe = z(() => `${j.value}px`), Re = z(() => {
      const {
        value: m
      } = b, {
        value: $
      } = w;
      return m !== null && $ !== null && $ > m;
    }), Ue = z(() => {
      const {
        value: m
      } = y, {
        value: $
      } = S;
      return m !== null && $ !== null && $ > m;
    }), Xe = z(() => {
      const {
        trigger: m
      } = e;
      return m === "none" || E.value;
    }), pe = z(() => {
      const {
        trigger: m
      } = e;
      return m === "none" || I.value;
    }), Se = z(() => {
      const {
        container: m
      } = e;
      return m ? m() : l.value;
    }), kr = z(() => {
      const {
        content: m
      } = e;
      return m ? m() : a.value;
    }), un = (m, $) => {
      if (!e.scrollable) return;
      if (typeof m == "number") {
        Be(m, $ ?? 0, 0, !1, "auto");
        return;
      }
      const {
        left: P,
        top: V,
        index: Y,
        elSize: ee,
        position: de,
        behavior: X,
        el: ie,
        debounce: ge = !0
      } = m;
      (P !== void 0 || V !== void 0) && Be(P ?? 0, V ?? 0, 0, !1, X), ie !== void 0 ? Be(0, ie.offsetTop, ie.offsetHeight, ge, X) : Y !== void 0 && ee !== void 0 ? Be(0, Y * ee, ee, ge, X) : de === "bottom" ? Be(0, Number.MAX_SAFE_INTEGER, 0, !1, X) : de === "top" && Be(0, 0, 0, !1, X);
    }, dn = fa(() => {
      e.container || un({
        top: h.value,
        left: s.value
      });
    }), Hr = () => {
      dn.isDeactivated || _e();
    }, Lr = (m) => {
      if (dn.isDeactivated) return;
      const {
        onResize: $
      } = e;
      $ && $(m), _e();
    }, Wr = (m, $) => {
      if (!e.scrollable) return;
      const {
        value: P
      } = Se;
      P && (typeof m == "object" ? P.scrollBy(m) : P.scrollBy(m, $ || 0));
    };
    function Be(m, $, P, V, Y) {
      const {
        value: ee
      } = Se;
      if (ee) {
        if (V) {
          const {
            scrollTop: de,
            offsetHeight: X
          } = ee;
          if ($ > de) {
            $ + P <= de + X || ee.scrollTo({
              left: m,
              top: $ + P - X,
              behavior: Y
            });
            return;
          }
        }
        ee.scrollTo({
          left: m,
          top: $,
          behavior: Y
        });
      }
    }
    function Nr() {
      Xr(), Yr(), _e();
    }
    function jr() {
      Tt();
    }
    function Tt() {
      Vr(), Ur();
    }
    function Vr() {
      c !== void 0 && window.clearTimeout(c), c = window.setTimeout(() => {
        I.value = !1;
      }, e.duration);
    }
    function Ur() {
      O !== void 0 && window.clearTimeout(O), O = window.setTimeout(() => {
        E.value = !1;
      }, e.duration);
    }
    function Xr() {
      O !== void 0 && window.clearTimeout(O), E.value = !0;
    }
    function Yr() {
      c !== void 0 && window.clearTimeout(c), I.value = !0;
    }
    function Kr(m) {
      const {
        onScroll: $
      } = e;
      $ && $(m), cn();
    }
    function cn() {
      const {
        value: m
      } = Se;
      m && (h.value = m.scrollTop, s.value = m.scrollLeft * (o != null && o.value ? -1 : 1));
    }
    function Gr() {
      const {
        value: m
      } = kr;
      m && (w.value = m.offsetHeight, S.value = m.offsetWidth);
      const {
        value: $
      } = Se;
      $ && (b.value = $.offsetHeight, y.value = $.offsetWidth);
      const {
        value: P
      } = d, {
        value: V
      } = u;
      P && (g.value = P.offsetWidth), V && (f.value = V.offsetHeight);
    }
    function fn() {
      const {
        value: m
      } = Se;
      m && (h.value = m.scrollTop, s.value = m.scrollLeft * (o != null && o.value ? -1 : 1), b.value = m.offsetHeight, y.value = m.offsetWidth, w.value = m.scrollHeight, S.value = m.scrollWidth);
      const {
        value: $
      } = d, {
        value: P
      } = u;
      $ && (g.value = $.offsetWidth), P && (f.value = P.offsetHeight);
    }
    function _e() {
      e.scrollable && (e.useUnifiedContainer ? fn() : (Gr(), cn()));
    }
    function hn(m) {
      var $;
      return !(!(($ = i.value) === null || $ === void 0) && $.contains(yt(m)));
    }
    function qr(m) {
      m.preventDefault(), m.stopPropagation(), L = !0, Q("mousemove", window, pn, !0), Q("mouseup", window, vn, !0), _ = s.value, C = o != null && o.value ? window.innerWidth - m.clientX : m.clientX;
    }
    function pn(m) {
      if (!L) return;
      O !== void 0 && window.clearTimeout(O), c !== void 0 && window.clearTimeout(c);
      const {
        value: $
      } = y, {
        value: P
      } = S, {
        value: V
      } = x;
      if ($ === null || P === null) return;
      const ee = (o != null && o.value ? window.innerWidth - m.clientX - C : m.clientX - C) * (P - $) / ($ - V), de = P - $;
      let X = _ + ee;
      X = Math.min(de, X), X = Math.max(X, 0);
      const {
        value: ie
      } = Se;
      if (ie) {
        ie.scrollLeft = X * (o != null && o.value ? -1 : 1);
        const {
          internalOnUpdateScrollLeft: ge
        } = e;
        ge && ge(X);
      }
    }
    function vn(m) {
      m.preventDefault(), m.stopPropagation(), G("mousemove", window, pn, !0), G("mouseup", window, vn, !0), L = !1, _e(), hn(m) && Tt();
    }
    function Zr(m) {
      m.preventDefault(), m.stopPropagation(), k = !0, Q("mousemove", window, Ot, !0), Q("mouseup", window, Mt, !0), v = h.value, D = m.clientY;
    }
    function Ot(m) {
      if (!k) return;
      O !== void 0 && window.clearTimeout(O), c !== void 0 && window.clearTimeout(c);
      const {
        value: $
      } = b, {
        value: P
      } = w, {
        value: V
      } = N;
      if ($ === null || P === null) return;
      const ee = (m.clientY - D) * (P - $) / ($ - V), de = P - $;
      let X = v + ee;
      X = Math.min(de, X), X = Math.max(X, 0);
      const {
        value: ie
      } = Se;
      ie && (ie.scrollTop = X);
    }
    function Mt(m) {
      m.preventDefault(), m.stopPropagation(), G("mousemove", window, Ot, !0), G("mouseup", window, Mt, !0), k = !1, _e(), hn(m) && Tt();
    }
    He(() => {
      const {
        value: m
      } = Ue, {
        value: $
      } = Re, {
        value: P
      } = t, {
        value: V
      } = d, {
        value: Y
      } = u;
      V && (m ? V.classList.remove(`${P}-scrollbar-rail--disabled`) : V.classList.add(`${P}-scrollbar-rail--disabled`)), Y && ($ ? Y.classList.remove(`${P}-scrollbar-rail--disabled`) : Y.classList.add(`${P}-scrollbar-rail--disabled`));
    }), me(() => {
      e.container || _e();
    }), xe(() => {
      O !== void 0 && window.clearTimeout(O), c !== void 0 && window.clearTimeout(c), G("mousemove", window, Ot, !0), G("mouseup", window, Mt, !0);
    });
    const mn = z(() => {
      const {
        common: {
          cubicBezierEaseInOut: m
        },
        self: {
          color: $,
          colorHover: P,
          height: V,
          width: Y,
          borderRadius: ee,
          railInsetHorizontalTop: de,
          railInsetHorizontalBottom: X,
          railInsetVerticalRight: ie,
          railInsetVerticalLeft: ge,
          railColor: Jr
        }
      } = W.value, {
        top: Qr,
        right: eo,
        bottom: to,
        left: no
      } = qe(de), {
        top: ro,
        right: oo,
        bottom: io,
        left: ao
      } = qe(X), {
        top: lo,
        right: so,
        bottom: uo,
        left: co
      } = qe(o != null && o.value ? Nn(ie) : ie), {
        top: fo,
        right: ho,
        bottom: po,
        left: vo
      } = qe(o != null && o.value ? Nn(ge) : ge);
      return {
        "--n-scrollbar-bezier": m,
        "--n-scrollbar-color": $,
        "--n-scrollbar-color-hover": P,
        "--n-scrollbar-border-radius": ee,
        "--n-scrollbar-width": Y,
        "--n-scrollbar-height": V,
        "--n-scrollbar-rail-top-horizontal-top": Qr,
        "--n-scrollbar-rail-right-horizontal-top": eo,
        "--n-scrollbar-rail-bottom-horizontal-top": to,
        "--n-scrollbar-rail-left-horizontal-top": no,
        "--n-scrollbar-rail-top-horizontal-bottom": ro,
        "--n-scrollbar-rail-right-horizontal-bottom": oo,
        "--n-scrollbar-rail-bottom-horizontal-bottom": io,
        "--n-scrollbar-rail-left-horizontal-bottom": ao,
        "--n-scrollbar-rail-top-vertical-right": lo,
        "--n-scrollbar-rail-right-vertical-right": so,
        "--n-scrollbar-rail-bottom-vertical-right": uo,
        "--n-scrollbar-rail-left-vertical-right": co,
        "--n-scrollbar-rail-top-vertical-left": fo,
        "--n-scrollbar-rail-right-vertical-left": ho,
        "--n-scrollbar-rail-bottom-vertical-left": po,
        "--n-scrollbar-rail-left-vertical-left": vo,
        "--n-scrollbar-rail-color": Jr
      };
    }), Ae = n ? Pr("scrollbar", void 0, mn, e) : void 0;
    return Object.assign(Object.assign({}, {
      scrollTo: un,
      scrollBy: Wr,
      sync: _e,
      syncUnifiedContainer: fn,
      handleMouseEnterWrapper: Nr,
      handleMouseLeaveWrapper: jr
    }), {
      mergedClsPrefix: t,
      rtlEnabled: o,
      containerScrollTop: h,
      wrapperRef: i,
      containerRef: l,
      contentRef: a,
      yRailRef: u,
      xRailRef: d,
      needYBar: Re,
      needXBar: Ue,
      yBarSizePx: p,
      xBarSizePx: M,
      yBarTopPx: F,
      xBarLeftPx: oe,
      isShowXBar: Xe,
      isShowYBar: pe,
      isIos: H,
      handleScroll: Kr,
      handleContentResize: Hr,
      handleContainerResize: Lr,
      handleYScrollMouseDown: Zr,
      handleXScrollMouseDown: qr,
      cssVars: n ? void 0 : mn,
      themeClass: Ae == null ? void 0 : Ae.themeClass,
      onRender: Ae == null ? void 0 : Ae.onRender
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
      yPlacement: l,
      xPlacement: a,
      xScrollable: u
    } = this;
    if (!this.scrollable) return (e = t.default) === null || e === void 0 ? void 0 : e.call(t);
    const d = this.trigger === "none", w = (y, f) => A("div", {
      ref: "yRailRef",
      class: [`${n}-scrollbar-rail`, `${n}-scrollbar-rail--vertical`, `${n}-scrollbar-rail--vertical--${l}`, y],
      "data-scrollbar-rail": !0,
      style: [f || "", this.verticalRailStyle],
      "aria-hidden": !0
    }, A(d ? Yn : Xt, d ? null : {
      name: "fade-in-transition"
    }, {
      default: () => this.needYBar && this.isShowYBar && !this.isIos ? A("div", {
        class: `${n}-scrollbar-rail__scrollbar`,
        style: {
          height: this.yBarSizePx,
          top: this.yBarTopPx
        },
        onMousedown: this.handleYScrollMouseDown
      }) : null
    })), S = () => {
      var y, f;
      return (y = this.onRender) === null || y === void 0 || y.call(this), A("div", on(this.$attrs, {
        role: "none",
        ref: "wrapperRef",
        class: [`${n}-scrollbar`, this.themeClass, o && `${n}-scrollbar--rtl`],
        style: this.cssVars,
        onMouseenter: r ? void 0 : this.handleMouseEnterWrapper,
        onMouseleave: r ? void 0 : this.handleMouseLeaveWrapper
      }), [this.container ? (f = t.default) === null || f === void 0 ? void 0 : f.call(t) : A("div", {
        role: "none",
        ref: "containerRef",
        class: [`${n}-scrollbar-container`, this.containerClass],
        style: this.containerStyle,
        onScroll: this.handleScroll,
        onWheel: this.onWheel
      }, A(Ln, {
        onResize: this.handleContentResize
      }, {
        default: () => A("div", {
          ref: "contentRef",
          role: "none",
          style: [{
            width: this.xScrollable ? "fit-content" : null
          }, this.contentStyle],
          class: [`${n}-scrollbar-content`, this.contentClass]
        }, t)
      })), i ? null : w(void 0, void 0), u && A("div", {
        ref: "xRailRef",
        class: [`${n}-scrollbar-rail`, `${n}-scrollbar-rail--horizontal`, `${n}-scrollbar-rail--horizontal--${a}`],
        style: this.horizontalRailStyle,
        "data-scrollbar-rail": !0,
        "aria-hidden": !0
      }, A(d ? Yn : Xt, d ? null : {
        name: "fade-in-transition"
      }, {
        default: () => this.needXBar && this.isShowXBar && !this.isIos ? A("div", {
          class: `${n}-scrollbar-rail__scrollbar`,
          style: {
            width: this.xBarSizePx,
            right: o ? this.xBarLeftPx : void 0,
            left: o ? void 0 : this.xBarLeftPx
          },
          onMousedown: this.handleXScrollMouseDown
        }) : null
      }))]);
    }, b = this.container ? S() : A(Ln, {
      onResize: this.handleContainerResize
    }, {
      default: S
    });
    return i ? A(be, null, b, w(this.themeClass, this.cssVars)) : b;
  }
}), Ha = ka, La = {
  space: "6px",
  spaceArrow: "10px",
  arrowOffset: "10px",
  arrowOffsetVertical: "10px",
  arrowHeight: "6px",
  padding: "8px 14px"
};
function Wa(e) {
  const {
    boxShadow2: t,
    popoverColor: n,
    textColor2: r,
    borderRadius: o,
    fontSize: i,
    dividerColor: l
  } = e;
  return Object.assign(Object.assign({}, La), {
    fontSize: i,
    borderRadius: o,
    color: n,
    dividerColor: l,
    textColor: r,
    boxShadow: t
  });
}
const Na = {
  name: "Popover",
  common: Br,
  self: Wa
}, Wt = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, K = "var(--n-arrow-height) * 1.414", ja = U([ne("popover", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `, [U(">", [ne("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), kt("raw", `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [kt("scrollable", [kt("show-header-or-footer", "padding: var(--n-padding);")])]), Oe("header", `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), Oe("footer", `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), ce("scrollable, show-header-or-footer", [Oe("content", `
 padding: var(--n-padding);
 `)])]), ne("popover-shared", `
 transform-origin: inherit;
 `, [
  ne("popover-arrow-wrapper", `
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `, [ne("popover-arrow", `
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${K});
 height: calc(${K});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),
  // body transition
  U("&.popover-transition-enter-from, &.popover-transition-leave-to", `
 opacity: 0;
 transform: scale(.85);
 `),
  U("&.popover-transition-enter-to, &.popover-transition-leave-from", `
 transform: scale(1);
 opacity: 1;
 `),
  U("&.popover-transition-enter-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),
  U("&.popover-transition-leave-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)
]), ae("top-start", `
 top: calc(${K} / -2);
 left: calc(${ve("top-start")} - var(--v-offset-left));
 `), ae("top", `
 top: calc(${K} / -2);
 transform: translateX(calc(${K} / -2)) rotate(45deg);
 left: 50%;
 `), ae("top-end", `
 top: calc(${K} / -2);
 right: calc(${ve("top-end")} + var(--v-offset-left));
 `), ae("bottom-start", `
 bottom: calc(${K} / -2);
 left: calc(${ve("bottom-start")} - var(--v-offset-left));
 `), ae("bottom", `
 bottom: calc(${K} / -2);
 transform: translateX(calc(${K} / -2)) rotate(45deg);
 left: 50%;
 `), ae("bottom-end", `
 bottom: calc(${K} / -2);
 right: calc(${ve("bottom-end")} + var(--v-offset-left));
 `), ae("left-start", `
 left: calc(${K} / -2);
 top: calc(${ve("left-start")} - var(--v-offset-top));
 `), ae("left", `
 left: calc(${K} / -2);
 transform: translateY(calc(${K} / -2)) rotate(45deg);
 top: 50%;
 `), ae("left-end", `
 left: calc(${K} / -2);
 bottom: calc(${ve("left-end")} + var(--v-offset-top));
 `), ae("right-start", `
 right: calc(${K} / -2);
 top: calc(${ve("right-start")} - var(--v-offset-top));
 `), ae("right", `
 right: calc(${K} / -2);
 transform: translateY(calc(${K} / -2)) rotate(45deg);
 top: 50%;
 `), ae("right-end", `
 right: calc(${K} / -2);
 bottom: calc(${ve("right-end")} + var(--v-offset-top));
 `), ...Po({
  top: ["right-start", "left-start"],
  right: ["top-end", "bottom-end"],
  bottom: ["right-end", "left-end"],
  left: ["top-start", "bottom-start"]
}, (e, t) => {
  const n = ["right", "left"].includes(t), r = n ? "width" : "height";
  return e.map((o) => {
    const i = o.split("-")[1] === "end", a = `calc((${`var(--v-target-${r}, 0px)`} - ${K}) / 2)`, u = ve(o);
    return U(`[v-placement="${o}"] >`, [ne("popover-shared", [ce("center-arrow", [ne("popover-arrow", `${t}: calc(max(${a}, ${u}) ${i ? "+" : "-"} var(--v-offset-${n ? "left" : "top"}));`)])])]);
  });
})]);
function ve(e) {
  return ["top", "bottom"].includes(e.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)";
}
function ae(e, t) {
  const n = e.split("-")[0], r = ["top", "bottom"].includes(n) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
  return U(`[v-placement="${e}"] >`, [ne("popover-shared", `
 margin-${Wt[n]}: var(--n-space);
 `, [ce("show-arrow", `
 margin-${Wt[n]}: var(--n-space-arrow);
 `), ce("overlap", `
 margin: 0;
 `), wa("popover-arrow-wrapper", `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${Wt[n]}: auto;
 ${r}
 `, [ne("popover-arrow", t)])])]);
}
const Ar = Object.assign(Object.assign({}, Ve.props), {
  to: We.propTo,
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
function Va({
  arrowClass: e,
  arrowStyle: t,
  arrowWrapperClass: n,
  arrowWrapperStyle: r,
  clsPrefix: o
}) {
  return A("div", {
    key: "__popover-arrow__",
    style: r,
    class: [`${o}-popover-arrow-wrapper`, n]
  }, A("div", {
    class: [`${o}-popover-arrow`, e],
    style: t
  }));
}
const Ua = ue({
  name: "PopoverBody",
  inheritAttrs: !1,
  props: Ar,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    const {
      namespaceRef: r,
      mergedClsPrefixRef: o,
      inlineThemeDisabled: i
    } = Mr(e), l = Ve("Popover", "-popover", ja, Na, e, o), a = B(null), u = re("NPopover"), d = B(null), w = B(e.show), S = B(!1);
    He(() => {
      const {
        show: c
      } = e;
      c && !ya() && !e.internalDeactivateImmediately && (S.value = !0);
    });
    const b = z(() => {
      const {
        trigger: c,
        onClickoutside: v
      } = e, _ = [], {
        positionManuallyRef: {
          value: C
        }
      } = u;
      return C || (c === "click" && !v && _.push([gn, k, void 0, {
        capture: !0
      }]), c === "hover" && _.push([Do, I])), v && _.push([gn, k, void 0, {
        capture: !0
      }]), (e.displayDirective === "show" || e.animated && S.value) && _.push([yo, e.show]), _;
    }), y = z(() => {
      const {
        common: {
          cubicBezierEaseInOut: c,
          cubicBezierEaseIn: v,
          cubicBezierEaseOut: _
        },
        self: {
          space: C,
          spaceArrow: D,
          padding: H,
          fontSize: W,
          textColor: N,
          dividerColor: p,
          color: x,
          boxShadow: M,
          borderRadius: R,
          arrowHeight: F,
          arrowOffset: j,
          arrowOffsetVertical: oe
        }
      } = l.value;
      return {
        "--n-box-shadow": M,
        "--n-bezier": c,
        "--n-bezier-ease-in": v,
        "--n-bezier-ease-out": _,
        "--n-font-size": W,
        "--n-text-color": N,
        "--n-color": x,
        "--n-divider-color": p,
        "--n-border-radius": R,
        "--n-arrow-height": F,
        "--n-arrow-offset": j,
        "--n-arrow-offset-vertical": oe,
        "--n-padding": H,
        "--n-space": C,
        "--n-space-arrow": D
      };
    }), f = z(() => {
      const c = e.width === "trigger" ? void 0 : Ft(e.width), v = [];
      c && v.push({
        width: c
      });
      const {
        maxWidth: _,
        minWidth: C
      } = e;
      return _ && v.push({
        maxWidth: Ft(_)
      }), C && v.push({
        maxWidth: Ft(C)
      }), i || v.push(y.value), v;
    }), g = i ? Pr("popover", void 0, y, e) : void 0;
    u.setBodyInstance({
      syncPosition: h
    }), xe(() => {
      u.setBodyInstance(null);
    }), he(ye(e, "show"), (c) => {
      e.animated || (c ? w.value = !0 : w.value = !1);
    });
    function h() {
      var c;
      (c = a.value) === null || c === void 0 || c.syncPosition();
    }
    function s(c) {
      e.trigger === "hover" && e.keepAliveOnHover && e.show && u.handleMouseEnter(c);
    }
    function E(c) {
      e.trigger === "hover" && e.keepAliveOnHover && u.handleMouseLeave(c);
    }
    function I(c) {
      e.trigger === "hover" && !L().contains(yt(c)) && u.handleMouseMoveOutside(c);
    }
    function k(c) {
      (e.trigger === "click" && !L().contains(yt(c)) || e.onClickoutside) && u.handleClickOutside(c);
    }
    function L() {
      return u.getTriggerElement();
    }
    Je(Er, d), Je(_r, null), Je(Cr, null);
    function O() {
      if (g == null || g.onRender(), !(e.displayDirective === "show" || e.show || e.animated && S.value))
        return null;
      let v;
      const _ = u.internalRenderBodyRef.value, {
        value: C
      } = o;
      if (_)
        v = _(
          // The popover class and overlap class must exists, they will be used
          // to place the body & transition animation.
          // Shadow class exists for reuse box-shadow.
          [`${C}-popover-shared`, g == null ? void 0 : g.themeClass.value, e.overlap && `${C}-popover-shared--overlap`, e.showArrow && `${C}-popover-shared--show-arrow`, e.arrowPointToCenter && `${C}-popover-shared--center-arrow`],
          d,
          f.value,
          s,
          E
        );
      else {
        const {
          value: D
        } = u.extraClassRef, {
          internalTrapFocus: H
        } = e, W = !Xn(t.header) || !Xn(t.footer), N = () => {
          var p, x;
          const M = W ? A(be, null, Lt(t.header, (j) => j ? A("div", {
            class: [`${C}-popover__header`, e.headerClass],
            style: e.headerStyle
          }, j) : null), Lt(t.default, (j) => j ? A("div", {
            class: [`${C}-popover__content`, e.contentClass],
            style: e.contentStyle
          }, t) : null), Lt(t.footer, (j) => j ? A("div", {
            class: [`${C}-popover__footer`, e.footerClass],
            style: e.footerStyle
          }, j) : null)) : e.scrollable ? (p = t.default) === null || p === void 0 ? void 0 : p.call(t) : A("div", {
            class: [`${C}-popover__content`, e.contentClass],
            style: e.contentStyle
          }, t), R = e.scrollable ? A(Ha, {
            contentClass: W ? void 0 : `${C}-popover__content ${(x = e.contentClass) !== null && x !== void 0 ? x : ""}`,
            contentStyle: W ? void 0 : e.contentStyle
          }, {
            default: () => M
          }) : M, F = e.showArrow ? Va({
            arrowClass: e.arrowClass,
            arrowStyle: e.arrowStyle,
            arrowWrapperClass: e.arrowWrapperClass,
            arrowWrapperStyle: e.arrowWrapperStyle,
            clsPrefix: C
          }) : null;
          return [R, F];
        };
        v = A("div", on({
          class: [`${C}-popover`, `${C}-popover-shared`, g == null ? void 0 : g.themeClass.value, D.map((p) => `${C}-${p}`), {
            [`${C}-popover--scrollable`]: e.scrollable,
            [`${C}-popover--show-header-or-footer`]: W,
            [`${C}-popover--raw`]: e.raw,
            [`${C}-popover-shared--overlap`]: e.overlap,
            [`${C}-popover-shared--show-arrow`]: e.showArrow,
            [`${C}-popover-shared--center-arrow`]: e.arrowPointToCenter
          }],
          ref: d,
          style: f.value,
          onKeydown: u.handleKeydown,
          onMouseenter: s,
          onMouseleave: E
        }, n), H ? A(da, {
          active: e.show,
          autoFocus: !0
        }, {
          default: N
        }) : N());
      }
      return _t(v, b.value);
    }
    return {
      displayed: S,
      namespace: r,
      isMounted: u.isMountedRef,
      zIndex: u.zIndexRef,
      followerRef: a,
      adjustedTo: We(e),
      followerEnabled: w,
      renderContentNode: O
    };
  },
  render() {
    return A(Li, {
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
      teleportDisabled: this.adjustedTo === We.tdkey
    }, {
      default: () => this.animated ? A(Xt, {
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
var Xa = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_11684_UKXSMLHMUWFBWKVP", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.97.2", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-5a8078c568-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
const Ya = Object.keys(Ar), Ka = {
  focus: ["onFocus", "onBlur"],
  click: ["onClick"],
  hover: ["onMouseenter", "onMouseleave"],
  manual: [],
  nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"]
};
function Ga(e, t, n) {
  Ka[t].forEach((r) => {
    e.props ? e.props = Object.assign({}, e.props) : e.props = {};
    const o = e.props[r], i = n[r];
    o ? e.props[r] = (...l) => {
      o(...l), i(...l);
    } : e.props[r] = i;
  });
}
const qa = {
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
  to: We.propTo,
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
}, Za = Object.assign(Object.assign(Object.assign({}, Ve.props), qa), {
  internalOnAfterLeave: Function,
  internalRenderBody: Function
}), Ja = ue({
  name: "Popover",
  inheritAttrs: !1,
  props: Za,
  slots: Object,
  __popover__: !0,
  setup(e) {
    Xa.NODE_ENV !== "production" && He(() => {
      e.maxWidth !== void 0 && Ke("popover", "`max-width` is deprecated, please use `style` instead."), e.minWidth !== void 0 && Ke("popover", "`min-width` is deprecated, please use `style` instead."), e.arrow !== void 0 && Ke("popover", "`arrow` is deprecated, please use `showArrow` instead."), e.onHide !== void 0 && Ke("popover", "`on-hide` is deprecated, please use `on-update:show` instead."), e.onShow !== void 0 && Ke("popover", "`on-show` is deprecated, please use `on-update:show` instead.");
    });
    const t = ir(), n = B(null), r = z(() => e.show), o = B(e.defaultShow), i = jo(r, o), l = nt(() => e.disabled ? !1 : i.value), a = () => {
      if (e.disabled) return !0;
      const {
        getDisabled: p
      } = e;
      return !!(p != null && p());
    }, u = () => a() ? !1 : i.value, d = Vo(e, ["arrow", "showArrow"]), w = z(() => e.overlap ? !1 : d.value);
    let S = null;
    const b = B(null), y = B(null), f = nt(() => e.x !== void 0 && e.y !== void 0);
    function g(p) {
      const {
        "onUpdate:show": x,
        onUpdateShow: M,
        onShow: R,
        onHide: F
      } = e;
      o.value = p, x && Ze(x, p), M && Ze(M, p), p && R && Ze(R, !0), p && F && Ze(F, !1);
    }
    function h() {
      S && S.syncPosition();
    }
    function s() {
      const {
        value: p
      } = b;
      p && (window.clearTimeout(p), b.value = null);
    }
    function E() {
      const {
        value: p
      } = y;
      p && (window.clearTimeout(p), y.value = null);
    }
    function I() {
      const p = a();
      if (e.trigger === "focus" && !p) {
        if (u()) return;
        g(!0);
      }
    }
    function k() {
      const p = a();
      if (e.trigger === "focus" && !p) {
        if (!u()) return;
        g(!1);
      }
    }
    function L() {
      const p = a();
      if (e.trigger === "hover" && !p) {
        if (E(), b.value !== null || u()) return;
        const x = () => {
          g(!0), b.value = null;
        }, {
          delay: M
        } = e;
        M === 0 ? x() : b.value = window.setTimeout(x, M);
      }
    }
    function O() {
      const p = a();
      if (e.trigger === "hover" && !p) {
        if (s(), y.value !== null || !u()) return;
        const x = () => {
          g(!1), y.value = null;
        }, {
          duration: M
        } = e;
        M === 0 ? x() : y.value = window.setTimeout(x, M);
      }
    }
    function c() {
      O();
    }
    function v(p) {
      var x;
      u() && (e.trigger === "click" && (s(), E(), g(!1)), (x = e.onClickoutside) === null || x === void 0 || x.call(e, p));
    }
    function _() {
      if (e.trigger === "click" && !a()) {
        s(), E();
        const p = !u();
        g(p);
      }
    }
    function C(p) {
      e.internalTrapFocus && p.key === "Escape" && (s(), E(), g(!1));
    }
    function D(p) {
      o.value = p;
    }
    function H() {
      var p;
      return (p = n.value) === null || p === void 0 ? void 0 : p.targetRef;
    }
    function W(p) {
      S = p;
    }
    return Je("NPopover", {
      getTriggerElement: H,
      handleKeydown: C,
      handleMouseEnter: L,
      handleMouseLeave: O,
      handleClickOutside: v,
      handleMouseMoveOutside: c,
      setBodyInstance: W,
      positionManuallyRef: f,
      isMountedRef: t,
      zIndexRef: ye(e, "zIndex"),
      extraClassRef: ye(e, "internalExtraClass"),
      internalRenderBodyRef: ye(e, "internalRenderBody")
    }), He(() => {
      i.value && a() && g(!1);
    }), {
      binderInstRef: n,
      positionManually: f,
      mergedShowConsideringDisabledProp: l,
      // if to show popover body
      uncontrolledShow: o,
      mergedShowArrow: w,
      getMergedShow: u,
      setShow: D,
      handleClick: _,
      handleMouseEnter: L,
      handleMouseLeave: O,
      handleFocus: I,
      handleBlur: k,
      syncPosition: h
    };
  },
  render() {
    var e;
    const {
      positionManually: t,
      $slots: n
    } = this;
    let r, o = !1;
    if (!t && (r = Sa(n, "trigger"), r)) {
      r = xo(r), r = r.type === So ? A("span", [r]) : r;
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
          internalInheritedEventHandlers: l
        } = this, a = [i, ...l], u = {
          onBlur: (d) => {
            a.forEach((w) => {
              w.onBlur(d);
            });
          },
          onFocus: (d) => {
            a.forEach((w) => {
              w.onFocus(d);
            });
          },
          onClick: (d) => {
            a.forEach((w) => {
              w.onClick(d);
            });
          },
          onMouseenter: (d) => {
            a.forEach((w) => {
              w.onMouseenter(d);
            });
          },
          onMouseleave: (d) => {
            a.forEach((w) => {
              w.onMouseleave(d);
            });
          }
        };
        Ga(r, l ? "nested" : t ? "manual" : this.trigger, u);
      }
    }
    return A(si, {
      ref: "binderInstRef",
      syncTarget: !o,
      syncTargetWithParent: this.internalSyncTargetWithParent
    }, {
      default: () => {
        this.mergedShowConsideringDisabledProp;
        const i = this.getMergedShow();
        return [this.internalTrapFocus && i ? _t(A("div", {
          style: {
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }), [[or, {
          enabled: i,
          zIndex: this.zIndex
        }]]) : null, t ? null : A(ui, null, {
          default: () => r
        }), A(Ua, _a(this.$props, Ya, Object.assign(Object.assign({}, this.$attrs), {
          showArrow: this.mergedShowArrow,
          show: i
        })), {
          default: () => {
            var l, a;
            return (a = (l = this.$slots).default) === null || a === void 0 ? void 0 : a.call(l);
          },
          header: () => {
            var l, a;
            return (a = (l = this.$slots).header) === null || a === void 0 ? void 0 : a.call(l);
          },
          footer: () => {
            var l, a;
            return (a = (l = this.$slots).footer) === null || a === void 0 ? void 0 : a.call(l);
          }
        })];
      }
    });
  }
});
function xt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Qa = typeof global == "object" && global && global.Object === Object && global, el = typeof self == "object" && self && self.Object === Object && self, zr = Qa || el || Function("return this")(), Nt = function() {
  return zr.Date.now();
}, tl = /\s/;
function nl(e) {
  for (var t = e.length; t-- && tl.test(e.charAt(t)); )
    ;
  return t;
}
var rl = /^\s+/;
function ol(e) {
  return e && e.slice(0, nl(e) + 1).replace(rl, "");
}
var St = zr.Symbol, Ir = Object.prototype, il = Ir.hasOwnProperty, al = Ir.toString, Ge = St ? St.toStringTag : void 0;
function ll(e) {
  var t = il.call(e, Ge), n = e[Ge];
  try {
    e[Ge] = void 0;
    var r = !0;
  } catch {
  }
  var o = al.call(e);
  return r && (t ? e[Ge] = n : delete e[Ge]), o;
}
var sl = Object.prototype, ul = sl.toString;
function dl(e) {
  return ul.call(e);
}
var cl = "[object Null]", fl = "[object Undefined]", qn = St ? St.toStringTag : void 0;
function hl(e) {
  return e == null ? e === void 0 ? fl : cl : qn && qn in Object(e) ? ll(e) : dl(e);
}
function pl(e) {
  return e != null && typeof e == "object";
}
var vl = "[object Symbol]";
function ml(e) {
  return typeof e == "symbol" || pl(e) && hl(e) == vl;
}
var Zn = NaN, bl = /^[-+]0x[0-9a-f]+$/i, gl = /^0b[01]+$/i, wl = /^0o[0-7]+$/i, yl = parseInt;
function Jn(e) {
  if (typeof e == "number")
    return e;
  if (ml(e))
    return Zn;
  if (xt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = xt(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = ol(e);
  var n = gl.test(e);
  return n || wl.test(e) ? yl(e.slice(2), n ? 2 : 8) : bl.test(e) ? Zn : +e;
}
var xl = "Expected a function", Sl = Math.max, _l = Math.min;
function Dr(e, t, n) {
  var r, o, i, l, a, u, d = 0, w = !1, S = !1, b = !0;
  if (typeof e != "function")
    throw new TypeError(xl);
  t = Jn(t) || 0, xt(n) && (w = !!n.leading, S = "maxWait" in n, i = S ? Sl(Jn(n.maxWait) || 0, t) : i, b = "trailing" in n ? !!n.trailing : b);
  function y(O) {
    var c = r, v = o;
    return r = o = void 0, d = O, l = e.apply(v, c), l;
  }
  function f(O) {
    return d = O, a = setTimeout(s, t), w ? y(O) : l;
  }
  function g(O) {
    var c = O - u, v = O - d, _ = t - c;
    return S ? _l(_, i - v) : _;
  }
  function h(O) {
    var c = O - u, v = O - d;
    return u === void 0 || c >= t || c < 0 || S && v >= i;
  }
  function s() {
    var O = Nt();
    if (h(O))
      return E(O);
    a = setTimeout(s, g(O));
  }
  function E(O) {
    return a = void 0, b && r ? y(O) : (r = o = void 0, l);
  }
  function I() {
    a !== void 0 && clearTimeout(a), d = 0, r = u = o = a = void 0;
  }
  function k() {
    return a === void 0 ? l : E(Nt());
  }
  function L() {
    var O = Nt(), c = h(O);
    if (r = arguments, o = this, u = O, c) {
      if (a === void 0)
        return f(u);
      if (S)
        return clearTimeout(a), a = setTimeout(s, t), y(u);
    }
    return a === void 0 && (a = setTimeout(s, t)), l;
  }
  return L.cancel = I, L.flush = k, L;
}
var Cl = "Expected a function";
function Qn(e, t, n) {
  var r = !0, o = !0;
  if (typeof e != "function")
    throw new TypeError(Cl);
  return xt(n) && (r = "leading" in n ? !!n.leading : r, o = "trailing" in n ? !!n.trailing : o), Dr(e, t, {
    leading: r,
    maxWait: t,
    trailing: o
  });
}
const El = {
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
}, $l = { class: "lc-carouse-box" }, Tl = { class: "lc-carouse-box__wrapper" }, Ol = ["onClick"], Ml = ["title"], Pl = {
  key: 0,
  class: "lc-carouse-box__track"
}, Rl = /* @__PURE__ */ ue({
  __name: "carouseBox",
  props: /* @__PURE__ */ gt(/* @__PURE__ */ _o(El, {
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
  emits: /* @__PURE__ */ gt(["change"], ["update:index", "update:value"]),
  setup(e, { emit: t }) {
    var N;
    Co((p) => ({
      "24ca7a73": p.gap,
      "67b6a43b": p.offsetAnimationTime
    }));
    const n = B(0), r = B(!0), o = Yt(e, "index"), i = Yt(e, "value"), l = z(() => e.list ?? []), a = z(() => !e.disabled);
    o.value === -1 && (o.value = ((N = l.value) == null ? void 0 : N.findIndex((p) => e.rowKey(p) === i.value)) ?? 0);
    const u = t, d = B({
      before: [],
      after: [],
      appendCount: 0
    }), w = z(() => {
      const p = l.value ?? [];
      return [...d.value.before, ...p, ...d.value.after];
    }), S = z(() => n.value % 2 === 0);
    function b() {
      n.value = o.value;
    }
    b();
    function y(p) {
      return Qn(() => {
        let x = n.value + p;
        x < 0 ? x = w.value.length - 1 : x >= w.value.length && (x = 0), W(w.value[x], x);
      }, e.offsetAnimationTime);
    }
    const f = y(-1), g = y(1), h = ht([]), s = ht(), E = ht(), I = B(0);
    he(() => e.list, () => {
      O(), Vt(k);
    }, {
      deep: 1
    }), me(k);
    function k() {
      if (!v.value) return;
      const { maxAppendCount: p } = v.value, x = p;
      if (x === 0) return;
      if (d.value.appendCount = x, b(), n.value += x, e.disabled) {
        d.value.before = [], d.value.after = [];
        return;
      }
      const M = l.value ?? [];
      d.value.before = M.slice(-x).map(L), d.value.after = M.slice(0, x).map(L);
    }
    function L(p, x) {
      return {
        ...p,
        value: e.rowKey(p) + "_clone_" + x + "_" + Date.now()
      };
    }
    function O() {
      I.value++;
    }
    function c() {
      if (!window.ResizeObserver || !s.value) return;
      new ResizeObserver(Dr(() => {
        O(), k();
      }, e.offsetAnimationTime)).observe(s.value);
    }
    me(c);
    const v = z(() => {
      var Ue;
      if (I.value++, !s.value || !h.value || !E.value) return;
      const { width: p } = s.value.getBoundingClientRect(), x = {
        normal: 0,
        active: 0
      };
      for (let Xe = 0; Xe <= h.value.length; Xe++) {
        const pe = h.value[Xe];
        if ((Ue = pe == null ? void 0 : pe.classList) != null && Ue.contains("active") ? x.active = pe.offsetWidth : x.normal = pe == null ? void 0 : pe.offsetWidth, x.active && x.normal)
          break;
      }
      const M = x.normal, R = x.active, F = p / M, j = F, oe = e.disabled ? 0 : Math.ceil(F), Re = E.value.offsetWidth;
      return {
        normalButtonWidth: M,
        maxButtonCount: j,
        carouselWidth: Re,
        maxAppendCount: oe,
        offset: R / 2
        // 加上选中的按钮宽度一半, 让选中的按钮在中心点
      };
    }), _ = z(() => {
      if (v.value) {
        const { normalButtonWidth: p, maxButtonCount: x, offset: M, carouselWidth: R } = v.value, F = x / 2;
        let j = (p * (n.value - F) + M) * -1;
        return j >= 0 ? j = 0 : j <= -R + p * x && (j = -R + p * x), j;
      }
      return 0;
    });
    function C(p) {
      window.requestAnimationFrame ? window.requestAnimationFrame(p) : p();
    }
    function D(p, x = !0) {
      C(() => {
        x ? Vt(setTimeout.bind(null, p, e.offsetAnimationTime)) : setTimeout(p, e.offsetAnimationTime);
      });
    }
    function H(p) {
      D(() => {
        r.value = !1, n.value = p;
      }, !1);
    }
    const W = Qn((p, x) => {
      if (e.disabled) return;
      r.value || (r.value = !0);
      const M = d.value.appendCount;
      let R = x - M;
      if (o.value == R) return;
      n.value = x, R < 0 ? (H(l.value.length + R + M), R = l.value.length - 1) : R >= l.value.length && (H(M), R = 0), o.value = R;
      const F = l.value[R];
      i.value = F == null ? void 0 : F.value;
      const j = {
        index: R,
        label: F == null ? void 0 : F.label,
        value: F == null ? void 0 : F.value,
        data: F
      };
      u("change", j);
    }, e.offsetAnimationTime);
    return (p, x) => (le(), se("div", $l, [
      Z("div", Tl, [
        a.value ? (le(), se("div", {
          key: 0,
          class: "lc-carouse-box__wrapper__arrow arrow--left",
          onClick: x[0] || (x[0] = //@ts-ignore
          (...M) => Ce(f) && Ce(f)(...M))
        }, x[2] || (x[2] = [
          Z(
            "img",
            {
              class: "lc-carouse-box__wrapper__arrow--image",
              src: To,
              draggable: "false",
              alt: ""
            },
            null,
            -1
            /* HOISTED */
          )
        ]))) : pt("v-if", !0),
        Z(
          "div",
          {
            class: "lc-carouse-box__wrapper__tabs",
            ref_key: "tabButtonParentElRef",
            ref: s
          },
          [
            Z(
              "div",
              {
                class: Kt(["lc-carouse-box__wrapper__tabs--train", { "is-transition": r.value }]),
                style: Eo({ "--carousel-offset": `translateX(${_.value}px)` }),
                ref_key: "carouselTrainElRef",
                ref: E
              },
              [
                (le(!0), se(
                  be,
                  null,
                  Gt(w.value, (M, R) => (le(), se("button", {
                    class: Kt(["lc-carouse-box__wrapper__tabs--train__button", { active: n.value === R, "is-even": S.value }]),
                    key: p.rowKey(M),
                    onClick: (F) => Ce(W)(M, R),
                    ref_for: !0,
                    ref_key: "tabButtonRef",
                    ref: h
                  }, [
                    Ut(p.$slots, "default", on({ ref_for: !0 }, { record: M, isActive: n.value === R, isEven: S.value, isTransition: r.value, index: R }), () => [
                      Z("div", {
                        class: "lc-carouse-box__wrapper__tabs--train__button--text",
                        title: M.label
                      }, vt(M.label), 9, Ml)
                    ], !0)
                  ], 10, Ol))),
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
        a.value ? (le(), se("div", {
          key: 1,
          class: "lc-carouse-box__wrapper__arrow arrow--right",
          onClick: x[1] || (x[1] = //@ts-ignore
          (...M) => Ce(g) && Ce(g)(...M))
        }, x[3] || (x[3] = [
          Z(
            "img",
            {
              class: "lc-carouse-box__wrapper__arrow--image",
              src: Oo,
              draggable: "false",
              alt: ""
            },
            null,
            -1
            /* HOISTED */
          )
        ]))) : pt("v-if", !0)
      ]),
      p.showTrack ? (le(), se("div", Pl, [
        Ut(p.$slots, "track", {}, () => [
          x[4] || (x[4] = Z(
            "img",
            {
              class: "lc-carouse-box__track__image--pointer",
              src: Mo,
              draggable: "false",
              alt: ""
            },
            null,
            -1
            /* HOISTED */
          ))
        ], !0)
      ])) : pt("v-if", !0)
    ]));
  }
}), Fr = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Bl = /* @__PURE__ */ Fr(Rl, [["__scopeId", "data-v-3bf1662e"]]), Al = { class: "lcc-header" }, zl = { class: "lcc-header__wrapper" }, Il = { class: "lcc-header__wrapper__navs" }, Dl = ["onClick"], Fl = {
  key: 0,
  class: "lcc-header__wrapper__navs__drop"
}, kl = { class: "lcc-header__wrapper__navs__drop__group__label" }, Hl = { class: "lcc-header__wrapper__navs__drop__group__label--text" }, Ll = { class: "lcc-header__wrapper__navs__drop__group__item__group" }, Wl = ["onClick"], Nl = /* @__PURE__ */ ue({
  __name: "header",
  props: /* @__PURE__ */ gt({
    navDatas: {},
    hideArrow: { type: Boolean }
  }, {
    index: { default: 0 },
    indexModifiers: {}
  }),
  emits: /* @__PURE__ */ gt(["jump", "scroll"], ["update:index"]),
  setup(e, { emit: t }) {
    const n = Yt(e, "index"), r = z(() => e.navDatas === void 0 ? [] : e.navDatas), o = t;
    function i(a, u, d) {
      o("jump", a, u, d);
    }
    function l(a) {
      o("scroll", a);
    }
    return (a, u) => (le(), se("div", Al, [
      Z("div", zl, [
        Z("div", Il, [
          bn(Ce(Bl), {
            disabled: a.hideArrow,
            list: r.value,
            "show-track": !1,
            index: n.value,
            "onUpdate:index": u[0] || (u[0] = (d) => n.value = d),
            onChange: l
          }, {
            default: Pt(({ index: d, record: w, isActive: S }) => [
              Z(
                "div",
                {
                  class: Kt(["lcc-header__wrapper__navs__item", {
                    active: S
                  }])
                },
                [
                  bn(
                    Ce(Ja),
                    {
                      trigger: "hover",
                      "arrow-class": "header-arrow-class",
                      class: "header-popover-class"
                    },
                    {
                      trigger: Pt(() => [
                        Z("a", {
                          class: "lcc-header__wrapper__navs__item__link",
                          onClick: (b) => i(null, w, d)
                        }, vt(w.label), 9, Dl)
                      ]),
                      default: Pt(() => {
                        var b;
                        return [
                          (b = w.list) != null && b.length ? (le(), se("div", Fl, [
                            (le(!0), se(
                              be,
                              null,
                              Gt(w.list, (y, f) => (le(), se("div", {
                                class: "lcc-header__wrapper__navs__drop__group",
                                key: f
                              }, [
                                Z("div", kl, [
                                  u[1] || (u[1] = Z(
                                    "div",
                                    { class: "lcc-header__wrapper__navs__drop__group__label--icon" },
                                    [
                                      Z("img", {
                                        class: "lcc-header__wrapper__navs__drop__group__label--icon--image",
                                        src: $o,
                                        alt: ""
                                      })
                                    ],
                                    -1
                                    /* HOISTED */
                                  )),
                                  Z(
                                    "div",
                                    Hl,
                                    vt(y.label),
                                    1
                                    /* TEXT */
                                  )
                                ]),
                                Z("div", Ll, [
                                  (le(!0), se(
                                    be,
                                    null,
                                    Gt(y.children, (g, h) => (le(), se("div", {
                                      class: "lcc-header__wrapper__navs__drop__group__item__group__nav",
                                      key: h,
                                      onClick: (s) => i(y, g, h)
                                    }, vt(g.label), 9, Wl))),
                                    128
                                    /* KEYED_FRAGMENT */
                                  ))
                                ])
                              ]))),
                              128
                              /* KEYED_FRAGMENT */
                            ))
                          ])) : pt("v-if", !0)
                        ];
                      }),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  )
                ],
                2
                /* CLASS */
              )
            ]),
            _: 1
            /* STABLE */
          }, 8, ["disabled", "list", "index"])
        ])
      ])
    ]));
  }
}), Zl = /* @__PURE__ */ Fr(Nl, [["__scopeId", "data-v-7227f61d"]]);
export {
  Zl as LcHeader
};
