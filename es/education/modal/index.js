// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { ref as k, readonly as Ae, watch as Fe, computed as F, getCurrentInstance as Cn, onBeforeMount as Xe, onBeforeUnmount as xe, onMounted as ho, onActivated as Pr, onDeactivated as Rr, inject as ue, defineComponent as Z, toRef as Ce, h as p, Teleport as _r, renderSlot as ot, Fragment as Io, createTextVNode as tt, Comment as xn, isVNode as Or, onUnmounted as Tr, shallowRef as Mr, watchEffect as Fo, provide as so, Transition as Ge, TransitionGroup as $r, mergeProps as Sn, nextTick as nt, normalizeClass as zo, cloneVNode as zr, withDirectives as rt, vShow as _t, mergeDefaults as yn, openBlock as wn, createElementBlock as Ir, createElementVNode as pe, toDisplayString as Fr, createBlock as Br, unref as Ot, normalizeProps as Dr, guardReactiveProps as Ar, withCtx as kr, normalizeStyle as Lr, createVNode as Hr } from "vue";
import { merge as Co, upperFirst as Nr } from "lodash-es";
function Mo(e) {
  return e.composedPath()[0];
}
const Wr = {
  mousemoveoutside: /* @__PURE__ */ new WeakMap(),
  clickoutside: /* @__PURE__ */ new WeakMap()
};
function Vr(e, o, t) {
  if (e === "mousemoveoutside") {
    const n = (r) => {
      o.contains(Mo(r)) || t(r);
    };
    return {
      mousemove: n,
      touchstart: n
    };
  } else if (e === "clickoutside") {
    let n = !1;
    const r = (a) => {
      n = !o.contains(Mo(a));
    }, i = (a) => {
      n && (o.contains(Mo(a)) || t(a));
    };
    return {
      mousedown: r,
      mouseup: i,
      touchstart: r,
      touchend: i
    };
  }
  return console.error(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    `[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`
  ), {};
}
function En(e, o, t) {
  const n = Wr[e];
  let r = n.get(o);
  r === void 0 && n.set(o, r = /* @__PURE__ */ new WeakMap());
  let i = r.get(t);
  return i === void 0 && r.set(t, i = Vr(e, o, t)), i;
}
function jr(e, o, t, n) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const r = En(e, o, t);
    return Object.keys(r).forEach((i) => {
      te(i, document, r[i], n);
    }), !0;
  }
  return !1;
}
function Ur(e, o, t, n) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const r = En(e, o, t);
    return Object.keys(r).forEach((i) => {
      ie(i, document, r[i], n);
    }), !0;
  }
  return !1;
}
function Gr() {
  if (typeof window > "u")
    return {
      on: () => {
      },
      off: () => {
      }
    };
  const e = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap();
  function t() {
    e.set(this, !0);
  }
  function n() {
    e.set(this, !0), o.set(this, !0);
  }
  function r(s, c, S) {
    const z = s[c];
    return s[c] = function() {
      return S.apply(s, arguments), z.apply(s, arguments);
    }, s;
  }
  function i(s, c) {
    s[c] = Event.prototype[c];
  }
  const a = /* @__PURE__ */ new WeakMap(), l = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
  function d() {
    var s;
    return (s = a.get(this)) !== null && s !== void 0 ? s : null;
  }
  function h(s, c) {
    l !== void 0 && Object.defineProperty(s, "currentTarget", {
      configurable: !0,
      enumerable: !0,
      get: c ?? l.get
    });
  }
  const g = {
    bubble: {},
    capture: {}
  }, b = {};
  function E() {
    const s = function(c) {
      const { type: S, eventPhase: z, bubbles: B } = c, D = Mo(c);
      if (z === 2)
        return;
      const U = z === 1 ? "capture" : "bubble";
      let W = D;
      const G = [];
      for (; W === null && (W = window), G.push(W), W !== window; )
        W = W.parentNode || null;
      const V = g.capture[S], L = g.bubble[S];
      if (r(c, "stopPropagation", t), r(c, "stopImmediatePropagation", n), h(c, d), U === "capture") {
        if (V === void 0)
          return;
        for (let Q = G.length - 1; Q >= 0 && !e.has(c); --Q) {
          const ne = G[Q], J = V.get(ne);
          if (J !== void 0) {
            a.set(c, ne);
            for (const le of J) {
              if (o.has(c))
                break;
              le(c);
            }
          }
          if (Q === 0 && !B && L !== void 0) {
            const le = L.get(ne);
            if (le !== void 0)
              for (const fe of le) {
                if (o.has(c))
                  break;
                fe(c);
              }
          }
        }
      } else if (U === "bubble") {
        if (L === void 0)
          return;
        for (let Q = 0; Q < G.length && !e.has(c); ++Q) {
          const ne = G[Q], J = L.get(ne);
          if (J !== void 0) {
            a.set(c, ne);
            for (const le of J) {
              if (o.has(c))
                break;
              le(c);
            }
          }
        }
      }
      i(c, "stopPropagation"), i(c, "stopImmediatePropagation"), h(c);
    };
    return s.displayName = "evtdUnifiedHandler", s;
  }
  function x() {
    const s = function(c) {
      const { type: S, eventPhase: z } = c;
      if (z !== 2)
        return;
      const B = b[S];
      B !== void 0 && B.forEach((D) => D(c));
    };
    return s.displayName = "evtdUnifiedWindowEventHandler", s;
  }
  const u = E(), _ = x();
  function m(s, c) {
    const S = g[s];
    return S[c] === void 0 && (S[c] = /* @__PURE__ */ new Map(), window.addEventListener(c, u, s === "capture")), S[c];
  }
  function f(s) {
    return b[s] === void 0 && (b[s] = /* @__PURE__ */ new Set(), window.addEventListener(s, _)), b[s];
  }
  function y(s, c) {
    let S = s.get(c);
    return S === void 0 && s.set(c, S = /* @__PURE__ */ new Set()), S;
  }
  function T(s, c, S, z) {
    const B = g[c][S];
    if (B !== void 0) {
      const D = B.get(s);
      if (D !== void 0 && D.has(z))
        return !0;
    }
    return !1;
  }
  function w(s, c) {
    const S = b[s];
    return !!(S !== void 0 && S.has(c));
  }
  function R(s, c, S, z) {
    let B;
    if (typeof z == "object" && z.once === !0 ? B = (V) => {
      C(s, c, B, z), S(V);
    } : B = S, jr(s, c, B, z))
      return;
    const U = z === !0 || typeof z == "object" && z.capture === !0 ? "capture" : "bubble", W = m(U, s), G = y(W, c);
    if (G.has(B) || G.add(B), c === window) {
      const V = f(s);
      V.has(B) || V.add(B);
    }
  }
  function C(s, c, S, z) {
    if (Ur(s, c, S, z))
      return;
    const D = z === !0 || typeof z == "object" && z.capture === !0, U = D ? "capture" : "bubble", W = m(U, s), G = y(W, c);
    if (c === window && !T(c, D ? "bubble" : "capture", s, S) && w(s, S)) {
      const L = b[s];
      L.delete(S), L.size === 0 && (window.removeEventListener(s, _), b[s] = void 0);
    }
    G.has(S) && G.delete(S), G.size === 0 && W.delete(c), W.size === 0 && (window.removeEventListener(s, u, U === "capture"), g[U][s] = void 0);
  }
  return {
    on: R,
    off: C
  };
}
const { on: te, off: ie } = Gr();
function Xr(e) {
  const o = k(!!e.value);
  if (o.value)
    return Ae(o);
  const t = Fe(e, (n) => {
    n && (o.value = !0, t());
  });
  return Ae(o);
}
function Kr(e) {
  const o = F(e), t = k(o.value);
  return Fe(o, (n) => {
    t.value = n;
  }), typeof e == "function" ? t : {
    __v_isRef: !0,
    get value() {
      return t.value;
    },
    set value(n) {
      e.set(n);
    }
  };
}
function Pn() {
  return Cn() !== null;
}
const Rn = typeof window < "u", ro = k(null);
function Tt(e) {
  if (e.clientX > 0 || e.clientY > 0)
    ro.value = {
      x: e.clientX,
      y: e.clientY
    };
  else {
    const { target: o } = e;
    if (o instanceof Element) {
      const { left: t, top: n, width: r, height: i } = o.getBoundingClientRect();
      t > 0 || n > 0 ? ro.value = {
        x: t + r / 2,
        y: n + i / 2
      } : ro.value = { x: 0, y: 0 };
    } else
      ro.value = null;
  }
}
let xo = 0, Mt = !0;
function Yr() {
  if (!Rn)
    return Ae(k(null));
  xo === 0 && te("click", document, Tt, !0);
  const e = () => {
    xo += 1;
  };
  return Mt && (Mt = Pn()) ? (Xe(e), xe(() => {
    xo -= 1, xo === 0 && ie("click", document, Tt, !0);
  })) : e(), Ae(ro);
}
const qr = k(void 0);
let So = 0;
function $t() {
  qr.value = Date.now();
}
let zt = !0;
function Zr(e) {
  if (!Rn)
    return Ae(k(!1));
  const o = k(!1);
  let t = null;
  function n() {
    t !== null && window.clearTimeout(t);
  }
  function r() {
    n(), o.value = !0, t = window.setTimeout(() => {
      o.value = !1;
    }, e);
  }
  So === 0 && te("click", window, $t, !0);
  const i = () => {
    So += 1, te("click", window, r, !0);
  };
  return zt && (zt = Pn()) ? (Xe(i), xe(() => {
    So -= 1, So === 0 && ie("click", window, $t, !0), ie("click", window, r, !0), n();
  })) : i(), Ae(o);
}
function _n() {
  const e = k(!1);
  return ho(() => {
    e.value = !0;
  }), Ae(e);
}
const Qr = (typeof window > "u" ? !1 : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
!window.MSStream;
function Jr() {
  return Qr;
}
const ei = "n-drawer-body", oi = "n-modal-body", ti = "n-modal-provider", On = "n-modal", ni = "n-popover-body", po = typeof document < "u" && typeof window < "u", pt = k(!1);
function It() {
  pt.value = !0;
}
function Ft() {
  pt.value = !1;
}
let to = 0;
function ri() {
  return po && (Xe(() => {
    to || (window.addEventListener("compositionstart", It), window.addEventListener("compositionend", Ft)), to++;
  }), xe(() => {
    to <= 1 ? (window.removeEventListener("compositionstart", It), window.removeEventListener("compositionend", Ft), to = 0) : to--;
  })), pt;
}
let Ne = 0, Bt = "", Dt = "", At = "", kt = "";
const Lt = k("0px");
function ii(e) {
  if (typeof document > "u") return;
  const o = document.documentElement;
  let t, n = !1;
  const r = () => {
    o.style.marginRight = Bt, o.style.overflow = Dt, o.style.overflowX = At, o.style.overflowY = kt, Lt.value = "0px";
  };
  ho(() => {
    t = Fe(e, (i) => {
      if (i) {
        if (!Ne) {
          const a = window.innerWidth - o.offsetWidth;
          a > 0 && (Bt = o.style.marginRight, o.style.marginRight = `${a}px`, Lt.value = `${a}px`), Dt = o.style.overflow, At = o.style.overflowX, kt = o.style.overflowY, o.style.overflow = "hidden", o.style.overflowX = "hidden", o.style.overflowY = "hidden";
        }
        n = !0, Ne++;
      } else
        Ne--, Ne || r(), n = !1;
    }, {
      immediate: !0
    });
  }), xe(() => {
    t == null || t(), n && (Ne--, Ne || r(), n = !1);
  });
}
function si(e) {
  const o = {
    isDeactivated: !1
  };
  let t = !1;
  return Pr(() => {
    if (o.isDeactivated = !1, !t) {
      t = !0;
      return;
    }
    e();
  }), Rr(() => {
    o.isDeactivated = !0, t || (t = !0);
  }), o;
}
function mt(e) {
  return e.composedPath()[0] || null;
}
function Ht(e) {
  return typeof e == "string" ? e.endsWith("px") ? Number(e.slice(0, e.length - 2)) : Number(e) : e;
}
function Te(e, o) {
  const t = e.trim().split(/\s+/g), n = {
    top: t[0]
  };
  switch (t.length) {
    case 1:
      n.right = t[0], n.bottom = t[0], n.left = t[0];
      break;
    case 2:
      n.right = t[1], n.left = t[1], n.bottom = t[0];
      break;
    case 3:
      n.right = t[1], n.bottom = t[2], n.left = t[1];
      break;
    case 4:
      n.right = t[1], n.bottom = t[2], n.left = t[3];
      break;
    default:
      throw new Error("[seemly/getMargin]:" + e + " is not a valid value.");
  }
  return n;
}
const Nt = {
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
}, Ke = "^\\s*", Ye = "\\s*$", Me = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", $e = "([0-9A-Fa-f])", ze = "([0-9A-Fa-f]{2})", li = new RegExp(`${Ke}rgb\\s*\\(${Me},${Me},${Me}\\)${Ye}`), ai = new RegExp(`${Ke}rgba\\s*\\(${Me},${Me},${Me},${Me}\\)${Ye}`), ci = new RegExp(`${Ke}#${$e}${$e}${$e}${Ye}`), di = new RegExp(`${Ke}#${ze}${ze}${ze}${Ye}`), ui = new RegExp(`${Ke}#${$e}${$e}${$e}${$e}${Ye}`), fi = new RegExp(`${Ke}#${ze}${ze}${ze}${ze}${Ye}`);
function ce(e) {
  return parseInt(e, 16);
}
function ke(e) {
  try {
    let o;
    if (o = di.exec(e))
      return [ce(o[1]), ce(o[2]), ce(o[3]), 1];
    if (o = li.exec(e))
      return [se(o[1]), se(o[5]), se(o[9]), 1];
    if (o = ai.exec(e))
      return [
        se(o[1]),
        se(o[5]),
        se(o[9]),
        lo(o[13])
      ];
    if (o = ci.exec(e))
      return [
        ce(o[1] + o[1]),
        ce(o[2] + o[2]),
        ce(o[3] + o[3]),
        1
      ];
    if (o = fi.exec(e))
      return [
        ce(o[1]),
        ce(o[2]),
        ce(o[3]),
        lo(ce(o[4]) / 255)
      ];
    if (o = ui.exec(e))
      return [
        ce(o[1] + o[1]),
        ce(o[2] + o[2]),
        ce(o[3] + o[3]),
        lo(ce(o[4] + o[4]) / 255)
      ];
    if (e in Nt)
      return ke(Nt[e]);
    throw new Error(`[seemly/rgba]: Invalid color value ${e}.`);
  } catch (o) {
    throw o;
  }
}
function hi(e) {
  return e > 1 ? 1 : e < 0 ? 0 : e;
}
function it(e, o, t, n) {
  return `rgba(${se(e)}, ${se(o)}, ${se(t)}, ${hi(n)})`;
}
function Ko(e, o, t, n, r) {
  return se((e * o * (1 - n) + t * n) / r);
}
function gt(e, o) {
  Array.isArray(e) || (e = ke(e)), Array.isArray(o) || (o = ke(o));
  const t = e[3], n = o[3], r = lo(t + n - t * n);
  return it(Ko(e[0], t, o[0], n, r), Ko(e[1], t, o[1], n, r), Ko(e[2], t, o[2], n, r), r);
}
function yo(e, o) {
  const [t, n, r, i = 1] = Array.isArray(e) ? e : ke(e);
  return o.alpha ? it(t, n, r, o.alpha) : it(t, n, r, i);
}
function wo(e, o) {
  const [t, n, r, i = 1] = Array.isArray(e) ? e : ke(e), { lightness: a = 1, alpha: l = 1 } = o;
  return pi([t * a, n * a, r * a, i * l]);
}
function lo(e) {
  const o = Math.round(Number(e) * 100) / 100;
  return o > 1 ? 1 : o < 0 ? 0 : o;
}
function se(e) {
  const o = Math.round(Number(e));
  return o > 255 ? 255 : o < 0 ? 0 : o;
}
function pi(e) {
  const [o, t, n] = e;
  return 3 in e ? `rgba(${se(o)}, ${se(t)}, ${se(n)}, ${lo(e[3])})` : `rgba(${se(o)}, ${se(t)}, ${se(n)}, 1)`;
}
function mi(e = 8) {
  return Math.random().toString(16).slice(2, 2 + e);
}
function Wt(e, o, t = "default") {
  const n = o[t];
  if (n === void 0)
    throw new Error(`[vueuc/${e}]: slot[${t}] is empty.`);
  return n();
}
const We = "@@coContext", gi = {
  mounted(e, { value: o, modifiers: t }) {
    e[We] = {
      handler: void 0
    }, typeof o == "function" && (e[We].handler = o, te("clickoutside", e, o, {
      capture: t.capture
    }));
  },
  updated(e, { value: o, modifiers: t }) {
    const n = e[We];
    typeof o == "function" ? n.handler ? n.handler !== o && (ie("clickoutside", e, n.handler, {
      capture: t.capture
    }), n.handler = o, te("clickoutside", e, o, {
      capture: t.capture
    })) : (e[We].handler = o, te("clickoutside", e, o, {
      capture: t.capture
    })) : n.handler && (ie("clickoutside", e, n.handler, {
      capture: t.capture
    }), n.handler = void 0);
  },
  unmounted(e, { modifiers: o }) {
    const { handler: t } = e[We];
    t && ie("clickoutside", e, t, {
      capture: o.capture
    }), e[We].handler = void 0;
  }
};
function vi(e, o) {
  console.error(`[vdirs/${e}]: ${o}`);
}
class bi {
  constructor() {
    this.elementZIndex = /* @__PURE__ */ new Map(), this.nextZIndex = 2e3;
  }
  get elementCount() {
    return this.elementZIndex.size;
  }
  ensureZIndex(o, t) {
    const { elementZIndex: n } = this;
    if (t !== void 0) {
      o.style.zIndex = `${t}`, n.delete(o);
      return;
    }
    const { nextZIndex: r } = this;
    n.has(o) && n.get(o) + 1 === this.nextZIndex || (o.style.zIndex = `${r}`, n.set(o, r), this.nextZIndex = r + 1, this.squashState());
  }
  unregister(o, t) {
    const { elementZIndex: n } = this;
    n.has(o) ? n.delete(o) : t === void 0 && vi("z-index-manager/unregister-element", "Element not found when unregistering."), this.squashState();
  }
  squashState() {
    const { elementCount: o } = this;
    o || (this.nextZIndex = 2e3), this.nextZIndex - o > 2500 && this.rearrange();
  }
  rearrange() {
    const o = Array.from(this.elementZIndex.entries());
    o.sort((t, n) => t[1] - n[1]), this.nextZIndex = 2e3, o.forEach((t) => {
      const n = t[0], r = this.nextZIndex++;
      `${r}` !== n.style.zIndex && (n.style.zIndex = `${r}`);
    });
  }
}
const Yo = new bi(), Ve = "@@ziContext", Ci = {
  mounted(e, o) {
    const { value: t = {} } = o, { zIndex: n, enabled: r } = t;
    e[Ve] = {
      enabled: !!r,
      initialized: !1
    }, r && (Yo.ensureZIndex(e, n), e[Ve].initialized = !0);
  },
  updated(e, o) {
    const { value: t = {} } = o, { zIndex: n, enabled: r } = t, i = e[Ve].enabled;
    r && !i && (Yo.ensureZIndex(e, n), e[Ve].initialized = !0), e[Ve].enabled = !!r;
  },
  unmounted(e, o) {
    if (!e[Ve].initialized)
      return;
    const { value: t = {} } = o, { zIndex: n } = t;
    Yo.unregister(e, n);
  }
}, xi = "@css-render/vue3-ssr";
function Si(e, o) {
  return `<style cssr-id="${e}">
${o}
</style>`;
}
function yi(e, o, t) {
  const { styles: n, ids: r } = t;
  r.has(e) || n !== null && (r.add(e), n.push(Si(e, o)));
}
const wi = typeof document < "u";
function Bo() {
  if (wi)
    return;
  const e = ue(xi, null);
  if (e !== null)
    return {
      adapter: (o, t) => yi(o, t, e),
      context: e
    };
}
function Vt(e, o) {
  console.error(`[vueuc/${e}]: ${o}`);
}
function Ei(e) {
  let o = 0;
  for (let t = 0; t < e.length; ++t)
    e[t] === "&" && ++o;
  return o;
}
const Tn = /\s*,(?![^(]*\))\s*/g, Pi = /\s+/g;
function Ri(e, o) {
  const t = [];
  return o.split(Tn).forEach((n) => {
    let r = Ei(n);
    if (r) {
      if (r === 1) {
        e.forEach((a) => {
          t.push(n.replace("&", a));
        });
        return;
      }
    } else {
      e.forEach((a) => {
        t.push(
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          (a && a + " ") + n
        );
      });
      return;
    }
    let i = [
      n
    ];
    for (; r--; ) {
      const a = [];
      i.forEach((l) => {
        e.forEach((d) => {
          a.push(l.replace("&", d));
        });
      }), i = a;
    }
    i.forEach((a) => t.push(a));
  }), t;
}
function _i(e, o) {
  const t = [];
  return o.split(Tn).forEach((n) => {
    e.forEach((r) => {
      t.push((r && r + " ") + n);
    });
  }), t;
}
function Oi(e) {
  let o = [""];
  return e.forEach((t) => {
    t = t && t.trim(), // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    t && (t.includes("&") ? o = Ri(o, t) : o = _i(o, t));
  }), o.join(", ").replace(Pi, " ");
}
function jt(e) {
  if (!e)
    return;
  const o = e.parentElement;
  o && o.removeChild(e);
}
function Do(e, o) {
  return (o ?? document.head).querySelector(`style[cssr-id="${e}"]`);
}
function Ti(e) {
  const o = document.createElement("style");
  return o.setAttribute("cssr-id", e), o;
}
function Eo(e) {
  return e ? /^\s*@(s|m)/.test(e) : !1;
}
const Mi = /[A-Z]/g;
function Mn(e) {
  return e.replace(Mi, (o) => "-" + o.toLowerCase());
}
function $i(e, o = "  ") {
  return typeof e == "object" && e !== null ? ` {
` + Object.entries(e).map((t) => o + `  ${Mn(t[0])}: ${t[1]};`).join(`
`) + `
` + o + "}" : `: ${e};`;
}
function zi(e, o, t) {
  return typeof e == "function" ? e({
    context: o.context,
    props: t
  }) : e;
}
function Ut(e, o, t, n) {
  if (!o)
    return "";
  const r = zi(o, t, n);
  if (!r)
    return "";
  if (typeof r == "string")
    return `${e} {
${r}
}`;
  const i = Object.keys(r);
  if (i.length === 0)
    return t.config.keepEmptyBlock ? e + ` {
}` : "";
  const a = e ? [
    e + " {"
  ] : [];
  return i.forEach((l) => {
    const d = r[l];
    if (l === "raw") {
      a.push(`
` + d + `
`);
      return;
    }
    l = Mn(l), d != null && a.push(`  ${l}${$i(d)}`);
  }), e && a.push("}"), a.join(`
`);
}
function st(e, o, t) {
  e && e.forEach((n) => {
    if (Array.isArray(n))
      st(n, o, t);
    else if (typeof n == "function") {
      const r = n(o);
      Array.isArray(r) ? st(r, o, t) : r && t(r);
    } else n && t(n);
  });
}
function $n(e, o, t, n, r) {
  const i = e.$;
  let a = "";
  if (!i || typeof i == "string")
    Eo(i) ? a = i : o.push(i);
  else if (typeof i == "function") {
    const h = i({
      context: n.context,
      props: r
    });
    Eo(h) ? a = h : o.push(h);
  } else if (i.before && i.before(n.context), !i.$ || typeof i.$ == "string")
    Eo(i.$) ? a = i.$ : o.push(i.$);
  else if (i.$) {
    const h = i.$({
      context: n.context,
      props: r
    });
    Eo(h) ? a = h : o.push(h);
  }
  const l = Oi(o), d = Ut(l, e.props, n, r);
  a ? t.push(`${a} {`) : d.length && t.push(d), e.children && st(e.children, {
    context: n.context,
    props: r
  }, (h) => {
    if (typeof h == "string") {
      const g = Ut(l, { raw: h }, n, r);
      t.push(g);
    } else
      $n(h, o, t, n, r);
  }), o.pop(), a && t.push("}"), i && i.after && i.after(n.context);
}
function Ii(e, o, t) {
  const n = [];
  return $n(e, [], n, o, t), n.join(`

`);
}
function lt(e) {
  for (var o = 0, t, n = 0, r = e.length; r >= 4; ++n, r -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, o = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16);
  switch (r) {
    case 3:
      o ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      o ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      o ^= e.charCodeAt(n) & 255, o = /* Math.imul(h, m): */
      (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16);
  }
  return o ^= o >>> 13, o = /* Math.imul(h, m): */
  (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16), ((o ^ o >>> 15) >>> 0).toString(36);
}
typeof window < "u" && (window.__cssrContext = {});
function Fi(e, o, t, n) {
  const { els: r } = o;
  if (t === void 0)
    r.forEach(jt), o.els = [];
  else {
    const i = Do(t, n);
    i && r.includes(i) && (jt(i), o.els = r.filter((a) => a !== i));
  }
}
function Gt(e, o) {
  e.push(o);
}
function Bi(e, o, t, n, r, i, a, l, d) {
  let h;
  if (t === void 0 && (h = o.render(n), t = lt(h)), d) {
    d.adapter(t, h ?? o.render(n));
    return;
  }
  l === void 0 && (l = document.head);
  const g = Do(t, l);
  if (g !== null && !i)
    return g;
  const b = g ?? Ti(t);
  if (h === void 0 && (h = o.render(n)), b.textContent = h, g !== null)
    return g;
  if (a) {
    const E = l.querySelector(`meta[name="${a}"]`);
    if (E)
      return l.insertBefore(b, E), Gt(o.els, b), b;
  }
  return r ? l.insertBefore(b, l.querySelector("style, link")) : l.appendChild(b), Gt(o.els, b), b;
}
function Di(e) {
  return Ii(this, this.instance, e);
}
function Ai(e = {}) {
  const { id: o, ssr: t, props: n, head: r = !1, force: i = !1, anchorMetaName: a, parent: l } = e;
  return Bi(this.instance, this, o, n, r, i, a, l, t);
}
function ki(e = {}) {
  const { id: o, parent: t } = e;
  Fi(this.instance, this, o, t);
}
const Po = function(e, o, t, n) {
  return {
    instance: e,
    $: o,
    props: t,
    children: n,
    els: [],
    render: Di,
    mount: Ai,
    unmount: ki
  };
}, Li = function(e, o, t, n) {
  return Array.isArray(o) ? Po(e, { $: null }, null, o) : Array.isArray(t) ? Po(e, o, null, t) : Array.isArray(n) ? Po(e, o, t, n) : Po(e, o, t, null);
};
function Hi(e = {}) {
  const o = {
    c: (...t) => Li(o, ...t),
    use: (t, ...n) => t.install(o, ...n),
    find: Do,
    context: {},
    config: e
  };
  return o;
}
function Ni(e, o) {
  if (e === void 0)
    return !1;
  if (o) {
    const { context: { ids: t } } = o;
    return t.has(e);
  }
  return Do(e) !== null;
}
function Xt(e) {
  return typeof e == "string" ? document.querySelector(e) : e();
}
const Wi = Z({
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
      showTeleport: Xr(Ce(e, "show")),
      mergedTo: F(() => {
        const { to: o } = e;
        return o ?? "body";
      })
    };
  },
  render() {
    return this.showTeleport ? this.disabled ? Wt("lazy-teleport", this.$slots) : p(_r, {
      disabled: this.disabled,
      to: this.mergedTo
    }, Wt("lazy-teleport", this.$slots)) : null;
  }
});
var Be = [], Vi = function() {
  return Be.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, ji = function() {
  return Be.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, Kt = "ResizeObserver loop completed with undelivered notifications.", Ui = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: Kt
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = Kt), window.dispatchEvent(e);
}, co;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(co || (co = {}));
var De = function(e) {
  return Object.freeze(e);
}, Gi = /* @__PURE__ */ function() {
  function e(o, t) {
    this.inlineSize = o, this.blockSize = t, De(this);
  }
  return e;
}(), zn = function() {
  function e(o, t, n, r) {
    return this.x = o, this.y = t, this.width = n, this.height = r, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, De(this);
  }
  return e.prototype.toJSON = function() {
    var o = this, t = o.x, n = o.y, r = o.top, i = o.right, a = o.bottom, l = o.left, d = o.width, h = o.height;
    return { x: t, y: n, top: r, right: i, bottom: a, left: l, width: d, height: h };
  }, e.fromRect = function(o) {
    return new e(o.x, o.y, o.width, o.height);
  }, e;
}(), vt = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, In = function(e) {
  if (vt(e)) {
    var o = e.getBBox(), t = o.width, n = o.height;
    return !t && !n;
  }
  var r = e, i = r.offsetWidth, a = r.offsetHeight;
  return !(i || a || e.getClientRects().length);
}, Yt = function(e) {
  var o;
  if (e instanceof Element)
    return !0;
  var t = (o = e == null ? void 0 : e.ownerDocument) === null || o === void 0 ? void 0 : o.defaultView;
  return !!(t && e instanceof t.Element);
}, Xi = function(e) {
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
}, ao = typeof window < "u" ? window : {}, Ro = /* @__PURE__ */ new WeakMap(), qt = /auto|scroll/, Ki = /^tb|vertical/, Yi = /msie|trident/i.test(ao.navigator && ao.navigator.userAgent), ve = function(e) {
  return parseFloat(e || "0");
}, Ue = function(e, o, t) {
  return e === void 0 && (e = 0), o === void 0 && (o = 0), t === void 0 && (t = !1), new Gi((t ? o : e) || 0, (t ? e : o) || 0);
}, Zt = De({
  devicePixelContentBoxSize: Ue(),
  borderBoxSize: Ue(),
  contentBoxSize: Ue(),
  contentRect: new zn(0, 0, 0, 0)
}), Fn = function(e, o) {
  if (o === void 0 && (o = !1), Ro.has(e) && !o)
    return Ro.get(e);
  if (In(e))
    return Ro.set(e, Zt), Zt;
  var t = getComputedStyle(e), n = vt(e) && e.ownerSVGElement && e.getBBox(), r = !Yi && t.boxSizing === "border-box", i = Ki.test(t.writingMode || ""), a = !n && qt.test(t.overflowY || ""), l = !n && qt.test(t.overflowX || ""), d = n ? 0 : ve(t.paddingTop), h = n ? 0 : ve(t.paddingRight), g = n ? 0 : ve(t.paddingBottom), b = n ? 0 : ve(t.paddingLeft), E = n ? 0 : ve(t.borderTopWidth), x = n ? 0 : ve(t.borderRightWidth), u = n ? 0 : ve(t.borderBottomWidth), _ = n ? 0 : ve(t.borderLeftWidth), m = b + h, f = d + g, y = _ + x, T = E + u, w = l ? e.offsetHeight - T - e.clientHeight : 0, R = a ? e.offsetWidth - y - e.clientWidth : 0, C = r ? m + y : 0, s = r ? f + T : 0, c = n ? n.width : ve(t.width) - C - R, S = n ? n.height : ve(t.height) - s - w, z = c + m + R + y, B = S + f + w + T, D = De({
    devicePixelContentBoxSize: Ue(Math.round(c * devicePixelRatio), Math.round(S * devicePixelRatio), i),
    borderBoxSize: Ue(z, B, i),
    contentBoxSize: Ue(c, S, i),
    contentRect: new zn(b, d, c, S)
  });
  return Ro.set(e, D), D;
}, Bn = function(e, o, t) {
  var n = Fn(e, t), r = n.borderBoxSize, i = n.contentBoxSize, a = n.devicePixelContentBoxSize;
  switch (o) {
    case co.DEVICE_PIXEL_CONTENT_BOX:
      return a;
    case co.BORDER_BOX:
      return r;
    default:
      return i;
  }
}, qi = /* @__PURE__ */ function() {
  function e(o) {
    var t = Fn(o);
    this.target = o, this.contentRect = t.contentRect, this.borderBoxSize = De([t.borderBoxSize]), this.contentBoxSize = De([t.contentBoxSize]), this.devicePixelContentBoxSize = De([t.devicePixelContentBoxSize]);
  }
  return e;
}(), Dn = function(e) {
  if (In(e))
    return 1 / 0;
  for (var o = 0, t = e.parentNode; t; )
    o += 1, t = t.parentNode;
  return o;
}, Zi = function() {
  var e = 1 / 0, o = [];
  Be.forEach(function(a) {
    if (a.activeTargets.length !== 0) {
      var l = [];
      a.activeTargets.forEach(function(h) {
        var g = new qi(h.target), b = Dn(h.target);
        l.push(g), h.lastReportedSize = Bn(h.target, h.observedBox), b < e && (e = b);
      }), o.push(function() {
        a.callback.call(a.observer, l, a.observer);
      }), a.activeTargets.splice(0, a.activeTargets.length);
    }
  });
  for (var t = 0, n = o; t < n.length; t++) {
    var r = n[t];
    r();
  }
  return e;
}, Qt = function(e) {
  Be.forEach(function(t) {
    t.activeTargets.splice(0, t.activeTargets.length), t.skippedTargets.splice(0, t.skippedTargets.length), t.observationTargets.forEach(function(r) {
      r.isActive() && (Dn(r.target) > e ? t.activeTargets.push(r) : t.skippedTargets.push(r));
    });
  });
}, Qi = function() {
  var e = 0;
  for (Qt(e); Vi(); )
    e = Zi(), Qt(e);
  return ji() && Ui(), e > 0;
}, qo, An = [], Ji = function() {
  return An.splice(0).forEach(function(e) {
    return e();
  });
}, es = function(e) {
  if (!qo) {
    var o = 0, t = document.createTextNode(""), n = { characterData: !0 };
    new MutationObserver(function() {
      return Ji();
    }).observe(t, n), qo = function() {
      t.textContent = "".concat(o ? o-- : o++);
    };
  }
  An.push(e), qo();
}, os = function(e) {
  es(function() {
    requestAnimationFrame(e);
  });
}, $o = 0, ts = function() {
  return !!$o;
}, ns = 250, rs = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Jt = [
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
], en = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, Zo = !1, is = function() {
  function e() {
    var o = this;
    this.stopped = !0, this.listener = function() {
      return o.schedule();
    };
  }
  return e.prototype.run = function(o) {
    var t = this;
    if (o === void 0 && (o = ns), !Zo) {
      Zo = !0;
      var n = en(o);
      os(function() {
        var r = !1;
        try {
          r = Qi();
        } finally {
          if (Zo = !1, o = n - en(), !ts())
            return;
          r ? t.run(1e3) : o > 0 ? t.run(o) : t.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var o = this, t = function() {
      return o.observer && o.observer.observe(document.body, rs);
    };
    document.body ? t() : ao.addEventListener("DOMContentLoaded", t);
  }, e.prototype.start = function() {
    var o = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Jt.forEach(function(t) {
      return ao.addEventListener(t, o.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var o = this;
    this.stopped || (this.observer && this.observer.disconnect(), Jt.forEach(function(t) {
      return ao.removeEventListener(t, o.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), at = new is(), on = function(e) {
  !$o && e > 0 && at.start(), $o += e, !$o && at.stop();
}, ss = function(e) {
  return !vt(e) && !Xi(e) && getComputedStyle(e).display === "inline";
}, ls = function() {
  function e(o, t) {
    this.target = o, this.observedBox = t || co.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var o = Bn(this.target, this.observedBox, !0);
    return ss(this.target) && (this.lastReportedSize = o), this.lastReportedSize.inlineSize !== o.inlineSize || this.lastReportedSize.blockSize !== o.blockSize;
  }, e;
}(), as = /* @__PURE__ */ function() {
  function e(o, t) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = o, this.callback = t;
  }
  return e;
}(), _o = /* @__PURE__ */ new WeakMap(), tn = function(e, o) {
  for (var t = 0; t < e.length; t += 1)
    if (e[t].target === o)
      return t;
  return -1;
}, Oo = function() {
  function e() {
  }
  return e.connect = function(o, t) {
    var n = new as(o, t);
    _o.set(o, n);
  }, e.observe = function(o, t, n) {
    var r = _o.get(o), i = r.observationTargets.length === 0;
    tn(r.observationTargets, t) < 0 && (i && Be.push(r), r.observationTargets.push(new ls(t, n && n.box)), on(1), at.schedule());
  }, e.unobserve = function(o, t) {
    var n = _o.get(o), r = tn(n.observationTargets, t), i = n.observationTargets.length === 1;
    r >= 0 && (i && Be.splice(Be.indexOf(n), 1), n.observationTargets.splice(r, 1), on(-1));
  }, e.disconnect = function(o) {
    var t = this, n = _o.get(o);
    n.observationTargets.slice().forEach(function(r) {
      return t.unobserve(o, r.target);
    }), n.activeTargets.splice(0, n.activeTargets.length);
  }, e;
}(), cs = function() {
  function e(o) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof o != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Oo.connect(this, o);
  }
  return e.prototype.observe = function(o, t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Yt(o))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Oo.observe(this, o, t);
  }, e.prototype.unobserve = function(o) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Yt(o))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Oo.unobserve(this, o);
  }, e.prototype.disconnect = function() {
    Oo.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
class ds {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || cs)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
  }
  handleResize(o) {
    for (const t of o) {
      const n = this.elHandlersMap.get(t.target);
      n !== void 0 && n(t);
    }
  }
  registerHandler(o, t) {
    this.elHandlersMap.set(o, t), this.observer.observe(o);
  }
  unregisterHandler(o) {
    this.elHandlersMap.has(o) && (this.elHandlersMap.delete(o), this.observer.unobserve(o));
  }
}
const nn = new ds(), rn = Z({
  name: "ResizeObserver",
  props: {
    onResize: Function
  },
  setup(e) {
    let o = !1;
    const t = Cn().proxy;
    function n(r) {
      const { onResize: i } = e;
      i !== void 0 && i(r);
    }
    ho(() => {
      const r = t.$el;
      if (r === void 0) {
        Vt("resize-observer", "$el does not exist.");
        return;
      }
      if (r.nextElementSibling !== r.nextSibling && r.nodeType === 3 && r.nodeValue !== "") {
        Vt("resize-observer", "$el can not be observed (it may be a text node).");
        return;
      }
      r.nextElementSibling !== null && (nn.registerHandler(r.nextElementSibling, n), o = !0);
    }), xe(() => {
      o && nn.unregisterHandler(t.$el.nextElementSibling);
    });
  },
  render() {
    return ot(this.$slots, "default");
  }
});
function kn(e) {
  return e instanceof HTMLElement;
}
function Ln(e) {
  for (let o = 0; o < e.childNodes.length; o++) {
    const t = e.childNodes[o];
    if (kn(t) && (Nn(t) || Ln(t)))
      return !0;
  }
  return !1;
}
function Hn(e) {
  for (let o = e.childNodes.length - 1; o >= 0; o--) {
    const t = e.childNodes[o];
    if (kn(t) && (Nn(t) || Hn(t)))
      return !0;
  }
  return !1;
}
function Nn(e) {
  if (!us(e))
    return !1;
  try {
    e.focus({ preventScroll: !0 });
  } catch {
  }
  return document.activeElement === e;
}
function us(e) {
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
let no = [];
const fs = Z({
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
    const o = mi(), t = k(null), n = k(null);
    let r = !1, i = !1;
    const a = typeof document > "u" ? null : document.activeElement;
    function l() {
      return no[no.length - 1] === o;
    }
    function d(m) {
      var f;
      m.code === "Escape" && l() && ((f = e.onEsc) === null || f === void 0 || f.call(e, m));
    }
    ho(() => {
      Fe(() => e.active, (m) => {
        m ? (b(), te("keydown", document, d)) : (ie("keydown", document, d), r && E());
      }, {
        immediate: !0
      });
    }), xe(() => {
      ie("keydown", document, d), r && E();
    });
    function h(m) {
      if (!i && l()) {
        const f = g();
        if (f === null || f.contains(mt(m)))
          return;
        x("first");
      }
    }
    function g() {
      const m = t.value;
      if (m === null)
        return null;
      let f = m;
      for (; f = f.nextSibling, !(f === null || f instanceof Element && f.tagName === "DIV"); )
        ;
      return f;
    }
    function b() {
      var m;
      if (!e.disabled) {
        if (no.push(o), e.autoFocus) {
          const { initialFocusTo: f } = e;
          f === void 0 ? x("first") : (m = Xt(f)) === null || m === void 0 || m.focus({ preventScroll: !0 });
        }
        r = !0, document.addEventListener("focus", h, !0);
      }
    }
    function E() {
      var m;
      if (e.disabled || (document.removeEventListener("focus", h, !0), no = no.filter((y) => y !== o), l()))
        return;
      const { finalFocusTo: f } = e;
      f !== void 0 ? (m = Xt(f)) === null || m === void 0 || m.focus({ preventScroll: !0 }) : e.returnFocusOnDeactivated && a instanceof HTMLElement && (i = !0, a.focus({ preventScroll: !0 }), i = !1);
    }
    function x(m) {
      if (l() && e.active) {
        const f = t.value, y = n.value;
        if (f !== null && y !== null) {
          const T = g();
          if (T == null || T === y) {
            i = !0, f.focus({ preventScroll: !0 }), i = !1;
            return;
          }
          i = !0;
          const w = m === "first" ? Ln(T) : Hn(T);
          i = !1, w || (i = !0, f.focus({ preventScroll: !0 }), i = !1);
        }
      }
    }
    function u(m) {
      if (i)
        return;
      const f = g();
      f !== null && (m.relatedTarget !== null && f.contains(m.relatedTarget) ? x("last") : x("first"));
    }
    function _(m) {
      i || (m.relatedTarget !== null && m.relatedTarget === t.value ? x("last") : x("first"));
    }
    return {
      focusableStartRef: t,
      focusableEndRef: n,
      focusableStyle: "position: absolute; height: 0; width: 0;",
      handleStartFocus: u,
      handleEndFocus: _
    };
  },
  render() {
    const { default: e } = this.$slots;
    if (e === void 0)
      return null;
    if (this.disabled)
      return e();
    const { active: o, focusableStyle: t } = this;
    return p(Io, null, [
      p("div", {
        "aria-hidden": "true",
        tabindex: o ? "0" : "-1",
        ref: "focusableStartRef",
        style: t,
        onFocus: this.handleStartFocus
      }),
      e(),
      p("div", {
        "aria-hidden": "true",
        style: t,
        ref: "focusableEndRef",
        tabindex: o ? "0" : "-1",
        onFocus: this.handleEndFocus
      })
    ]);
  }
});
function sn(e) {
  return e.replace(/#|\(|\)|,|\s|\./g, "_");
}
function ln(e) {
  const {
    left: o,
    right: t,
    top: n,
    bottom: r
  } = Te(e);
  return `${n} ${o} ${r} ${t}`;
}
var an = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_11684_UKXSMLHMUWFBWKVP", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.97.2", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-5a8078c568-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
function hs(e) {
  let o = ".", t = "__", n = "--", r;
  {
    let u = e.blockPrefix;
    u && (o = u), u = e.elementPrefix, u && (t = u), u = e.modifierPrefix, u && (n = u);
  }
  const i = {
    install(u) {
      r = u.c;
      const _ = u.context;
      _.bem = {}, _.bem.b = null, _.bem.els = null;
    }
  };
  function a(u) {
    let _, m;
    return {
      before(f) {
        _ = f.bem.b, m = f.bem.els, f.bem.els = null;
      },
      after(f) {
        f.bem.b = _, f.bem.els = m;
      },
      $({ context: f, props: y }) {
        return u = typeof u == "string" ? u : u({ context: f, props: y }), f.bem.b = u, `${(y == null ? void 0 : y.bPrefix) || o}${f.bem.b}`;
      }
    };
  }
  function l(u) {
    let _;
    return {
      before(m) {
        _ = m.bem.els;
      },
      after(m) {
        m.bem.els = _;
      },
      $({ context: m, props: f }) {
        return u = typeof u == "string" ? u : u({ context: m, props: f }), m.bem.els = u.split(",").map((y) => y.trim()), m.bem.els.map((y) => `${(f == null ? void 0 : f.bPrefix) || o}${m.bem.b}${t}${y}`).join(", ");
      }
    };
  }
  function d(u) {
    return {
      $({ context: _, props: m }) {
        u = typeof u == "string" ? u : u({ context: _, props: m });
        const f = u.split(",").map((w) => w.trim());
        function y(w) {
          return f.map((R) => `&${(m == null ? void 0 : m.bPrefix) || o}${_.bem.b}${w !== void 0 ? `${t}${w}` : ""}${n}${R}`).join(", ");
        }
        const T = _.bem.els;
        if (T !== null) {
          if (an.NODE_ENV !== "production" && T.length >= 2)
            throw Error(`[css-render/plugin-bem]: m(${u}) is invalid, using modifier inside multiple elements is not allowed`);
          return y(T[0]);
        } else
          return y();
      }
    };
  }
  function h(u) {
    return {
      $({ context: _, props: m }) {
        u = typeof u == "string" ? u : u({ context: _, props: m });
        const f = _.bem.els;
        if (an.NODE_ENV !== "production" && f !== null && f.length >= 2)
          throw Error(`[css-render/plugin-bem]: notM(${u}) is invalid, using modifier inside multiple elements is not allowed`);
        return `&:not(${(m == null ? void 0 : m.bPrefix) || o}${_.bem.b}${f !== null && f.length > 0 ? `${t}${f[0]}` : ""}${n}${u})`;
      }
    };
  }
  return Object.assign(i, {
    cB: (...u) => r(a(u[0]), u[1], u[2]),
    cE: (...u) => r(l(u[0]), u[1], u[2]),
    cM: (...u) => r(d(u[0]), u[1], u[2]),
    cNotM: (...u) => r(h(u[0]), u[1], u[2])
  }), i;
}
const ps = "n", uo = `.${ps}-`, ms = "__", gs = "--", Wn = Hi(), Vn = hs({
  blockPrefix: uo,
  elementPrefix: ms,
  modifierPrefix: gs
});
Wn.use(Vn);
const {
  c: P,
  find: Al
} = Wn, {
  cB: K,
  cE: $,
  cM: H,
  cNotM: ct
} = Vn;
function jn(e) {
  return P(({
    props: {
      bPrefix: o
    }
  }) => `${o || uo}modal, ${o || uo}drawer`, [e]);
}
function vs(e) {
  return P(({
    props: {
      bPrefix: o
    }
  }) => `${o || uo}popover`, [e]);
}
function Un(e) {
  return P(({
    props: {
      bPrefix: o
    }
  }) => `&${o || uo}modal`, e);
}
function A(e, o) {
  return e + (o === "default" ? "" : o.replace(/^[a-z]/, (t) => t.toUpperCase()));
}
const bs = /* @__PURE__ */ new WeakSet();
function Cs(e) {
  return !bs.has(e);
}
const cn = /* @__PURE__ */ new Set();
function io(e, o) {
  const t = `[naive/${e}]: ${o}`;
  cn.has(t) || (cn.add(t), console.error(t));
}
function Gn(e, o) {
  console.error(`[naive/${e}]: ${o}`);
}
function Xn(e, o) {
  throw new Error(`[naive/${e}]: ${o}`);
}
function Ie(e, ...o) {
  if (Array.isArray(e))
    e.forEach((t) => Ie(t, ...o));
  else
    return e(...o);
}
function dt(e, o = !0, t = []) {
  return e.forEach((n) => {
    if (n !== null) {
      if (typeof n != "object") {
        (typeof n == "string" || typeof n == "number") && t.push(tt(String(n)));
        return;
      }
      if (Array.isArray(n)) {
        dt(n, o, t);
        return;
      }
      if (n.type === Io) {
        if (n.children === null) return;
        Array.isArray(n.children) && dt(n.children, o, t);
      } else {
        if (n.type === xn && o) return;
        t.push(n);
      }
    }
  }), t;
}
function xs(e, o, t) {
  if (!o)
    return null;
  const n = dt(o(t));
  return n.length === 1 ? n[0] : (Gn("getFirstSlotVNode", `slot[${e}] should have exactly one child`), null);
}
function ut(e, o = [], t) {
  const n = {};
  return o.forEach((r) => {
    n[r] = e[r];
  }), Object.assign(n, t);
}
function bt(e) {
  return Object.keys(e);
}
function je(e, ...o) {
  return typeof e == "function" ? e(...o) : typeof e == "string" ? tt(e) : typeof e == "number" ? tt(String(e)) : null;
}
function be(e) {
  return e.some((o) => Or(o) ? !(o.type === xn || o.type === Io && !be(o.children)) : !0) ? e : null;
}
function dn(e, o) {
  return e && be(e()) || o();
}
function me(e, o) {
  const t = e && be(e());
  return o(t || null);
}
function Ss(e) {
  return !(e && be(e()));
}
const un = Z({
  render() {
    var e, o;
    return (o = (e = this.$slots).default) === null || o === void 0 ? void 0 : o.call(e);
  }
}), ft = "n-draggable";
function ys(e, o) {
  let t;
  const n = F(() => e.value !== !1), r = F(() => n.value ? ft : ""), i = F(() => {
    const d = e.value;
    return d === !0 || d === !1 ? !0 : d ? d.bounds !== "none" : !0;
  });
  function a(d) {
    const h = d.querySelector(`.${ft}`);
    if (!h || !r.value)
      return;
    let g = 0, b = 0, E = 0, x = 0, u = 0, _ = 0, m;
    function f(w) {
      w.preventDefault(), m = w;
      const {
        x: R,
        y: C,
        right: s,
        bottom: c
      } = d.getBoundingClientRect();
      b = R, x = C, g = window.innerWidth - s, E = window.innerHeight - c;
      const {
        left: S,
        top: z
      } = d.style;
      u = +z.slice(0, -2), _ = +S.slice(0, -2);
    }
    function y(w) {
      if (!m) return;
      const {
        clientX: R,
        clientY: C
      } = m;
      let s = w.clientX - R, c = w.clientY - C;
      i.value && (s > g ? s = g : -s > b && (s = -b), c > E ? c = E : -c > x && (c = -x));
      const S = s + _, z = c + u;
      d.style.top = `${z}px`, d.style.left = `${S}px`;
    }
    function T() {
      m = void 0, o.onEnd(d);
    }
    te("mousedown", h, f), te("mousemove", window, y), te("mouseup", window, T), t = () => {
      ie("mousedown", h, f), te("mousemove", window, y), te("mouseup", window, T);
    };
  }
  function l() {
    t && (t(), t = void 0);
  }
  return Tr(l), {
    stopDrag: l,
    startDrag: a,
    draggableRef: n,
    draggableClassRef: r
  };
}
const qe = "n-config-provider", ws = "n";
function mo(e = {}, o = {
  defaultBordered: !0
}) {
  const t = ue(qe, null);
  return {
    // NConfigProvider,
    inlineThemeDisabled: t == null ? void 0 : t.inlineThemeDisabled,
    mergedRtlRef: t == null ? void 0 : t.mergedRtlRef,
    mergedComponentPropsRef: t == null ? void 0 : t.mergedComponentPropsRef,
    mergedBreakpointsRef: t == null ? void 0 : t.mergedBreakpointsRef,
    mergedBorderedRef: F(() => {
      var n, r;
      const {
        bordered: i
      } = e;
      return i !== void 0 ? i : (r = (n = t == null ? void 0 : t.mergedBorderedRef.value) !== null && n !== void 0 ? n : o.defaultBordered) !== null && r !== void 0 ? r : !0;
    }),
    mergedClsPrefixRef: t ? t.mergedClsPrefixRef : Mr(ws),
    namespaceRef: F(() => t == null ? void 0 : t.mergedNamespaceRef.value)
  };
}
function go(e, o, t, n) {
  t || Xn("useThemeClass", "cssVarsRef is not passed");
  const r = ue(qe, null), i = r == null ? void 0 : r.mergedThemeHashRef, a = r == null ? void 0 : r.styleMountTarget, l = k(""), d = Bo();
  let h;
  const g = `__${e}`, b = () => {
    let E = g;
    const x = o ? o.value : void 0, u = i == null ? void 0 : i.value;
    u && (E += `-${u}`), x && (E += `-${x}`);
    const {
      themeOverrides: _,
      builtinThemeOverrides: m
    } = n;
    _ && (E += `-${lt(JSON.stringify(_))}`), m && (E += `-${lt(JSON.stringify(m))}`), l.value = E, h = () => {
      const f = t.value;
      let y = "";
      for (const T in f)
        y += `${T}: ${f[T]};`;
      P(`.${E}`, y).mount({
        id: E,
        ssr: d,
        parent: a
      }), h = void 0;
    };
  };
  return Fo(() => {
    b();
  }), {
    themeClass: l,
    onRender: () => {
      h == null || h();
    }
  };
}
const fn = "n-form-item";
function Es(e, {
  defaultSize: o = "medium",
  mergedSize: t,
  mergedDisabled: n
} = {}) {
  const r = ue(fn, null);
  so(fn, null);
  const i = F(t ? () => t(r) : () => {
    const {
      size: d
    } = e;
    if (d) return d;
    if (r) {
      const {
        mergedSize: h
      } = r;
      if (h.value !== void 0)
        return h.value;
    }
    return o;
  }), a = F(n ? () => n(r) : () => {
    const {
      disabled: d
    } = e;
    return d !== void 0 ? d : r ? r.disabled.value : !1;
  }), l = F(() => {
    const {
      status: d
    } = e;
    return d || (r == null ? void 0 : r.mergedValidationStatus.value);
  });
  return xe(() => {
    r && r.restoreValidation();
  }), {
    mergedSizeRef: i,
    mergedDisabledRef: a,
    mergedStatusRef: l,
    nTriggerFormBlur() {
      r && r.handleContentBlur();
    },
    nTriggerFormChange() {
      r && r.handleContentChange();
    },
    nTriggerFormFocus() {
      r && r.handleContentFocus();
    },
    nTriggerFormInput() {
      r && r.handleContentInput();
    }
  };
}
const fo = "naive-ui-style";
function Ao(e, o, t) {
  if (!o) return;
  const n = Bo(), r = F(() => {
    const {
      value: l
    } = o;
    if (!l)
      return;
    const d = l[e];
    if (d)
      return d;
  }), i = ue(qe, null), a = () => {
    Fo(() => {
      const {
        value: l
      } = t, d = `${l}${e}Rtl`;
      if (Ni(d, n)) return;
      const {
        value: h
      } = r;
      h && h.style.mount({
        id: d,
        head: !0,
        anchorMetaName: fo,
        props: {
          bPrefix: l ? `.${l}-` : void 0
        },
        ssr: n,
        parent: i == null ? void 0 : i.styleMountTarget
      });
    });
  };
  return n ? a() : Xe(a), r;
}
const Ze = {
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
  fontSize: Ps,
  fontFamily: Rs,
  lineHeight: _s
} = Ze, Kn = P("body", `
 margin: 0;
 font-size: ${Ps};
 font-family: ${Rs};
 line-height: ${_s};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [P("input", `
 font-family: inherit;
 font-size: inherit;
 `)]);
var Os = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_11684_UKXSMLHMUWFBWKVP", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.97.2", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-5a8078c568-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
function ko(e, o, t) {
  if (!o) {
    Os.NODE_ENV !== "production" && Xn("use-style", "No style is specified.");
    return;
  }
  const n = Bo(), r = ue(qe, null), i = () => {
    const a = t.value;
    o.mount({
      id: a === void 0 ? e : a + e,
      head: !0,
      anchorMetaName: fo,
      props: {
        bPrefix: a ? `.${a}-` : void 0
      },
      ssr: n,
      parent: r == null ? void 0 : r.styleMountTarget
    }), r != null && r.preflightStyleDisabled || Kn.mount({
      id: "n-global",
      head: !0,
      anchorMetaName: fo,
      ssr: n,
      parent: r == null ? void 0 : r.styleMountTarget
    });
  };
  n ? i() : Xe(i);
}
function ge(e, o, t, n, r, i) {
  const a = Bo(), l = ue(qe, null);
  if (t) {
    const h = () => {
      const g = i == null ? void 0 : i.value;
      t.mount({
        id: g === void 0 ? o : g + o,
        head: !0,
        props: {
          bPrefix: g ? `.${g}-` : void 0
        },
        anchorMetaName: fo,
        ssr: a,
        parent: l == null ? void 0 : l.styleMountTarget
      }), l != null && l.preflightStyleDisabled || Kn.mount({
        id: "n-global",
        head: !0,
        anchorMetaName: fo,
        ssr: a,
        parent: l == null ? void 0 : l.styleMountTarget
      });
    };
    a ? h() : Xe(h);
  }
  return F(() => {
    var h;
    const {
      theme: {
        common: g,
        self: b,
        peers: E = {}
      } = {},
      themeOverrides: x = {},
      builtinThemeOverrides: u = {}
    } = r, {
      common: _,
      peers: m
    } = x, {
      common: f = void 0,
      [e]: {
        common: y = void 0,
        self: T = void 0,
        peers: w = {}
      } = {}
    } = (l == null ? void 0 : l.mergedThemeRef.value) || {}, {
      common: R = void 0,
      [e]: C = {}
    } = (l == null ? void 0 : l.mergedThemeOverridesRef.value) || {}, {
      common: s,
      peers: c = {}
    } = C, S = Co({}, g || y || f || n.common, R, s, _), z = Co(
      // {}, executed every time, no need for empty obj
      (h = b || T || n.self) === null || h === void 0 ? void 0 : h(S),
      u,
      C,
      x
    );
    return {
      common: S,
      self: z,
      peers: Co({}, n.peers, w, E),
      peerOverrides: Co({}, u.peers, c, m)
    };
  });
}
ge.props = {
  theme: Object,
  themeOverrides: Object,
  builtinThemeOverrides: Object
};
const Ts = "n-dialog-provider", M = {
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
}, Ms = ke(M.neutralBase), Yn = ke(M.neutralInvertBase), $s = `rgba(${Yn.slice(0, 3).join(", ")}, `;
function hn(e) {
  return `${$s + String(e)})`;
}
function re(e) {
  const o = Array.from(Yn);
  return o[3] = Number(e), gt(Ms, o);
}
const vo = Object.assign(Object.assign({
  name: "common"
}, Ze), {
  baseColor: M.neutralBase,
  // primary color
  primaryColor: M.primaryDefault,
  primaryColorHover: M.primaryHover,
  primaryColorPressed: M.primaryActive,
  primaryColorSuppl: M.primarySuppl,
  // info color
  infoColor: M.infoDefault,
  infoColorHover: M.infoHover,
  infoColorPressed: M.infoActive,
  infoColorSuppl: M.infoSuppl,
  // success color
  successColor: M.successDefault,
  successColorHover: M.successHover,
  successColorPressed: M.successActive,
  successColorSuppl: M.successSuppl,
  // warning color
  warningColor: M.warningDefault,
  warningColorHover: M.warningHover,
  warningColorPressed: M.warningActive,
  warningColorSuppl: M.warningSuppl,
  // error color
  errorColor: M.errorDefault,
  errorColorHover: M.errorHover,
  errorColorPressed: M.errorActive,
  errorColorSuppl: M.errorSuppl,
  // text color
  textColorBase: M.neutralTextBase,
  textColor1: "rgb(31, 34, 37)",
  textColor2: "rgb(51, 54, 57)",
  textColor3: "rgb(118, 124, 130)",
  // textColor4: neutral(base.alpha4), // disabled, placeholder, icon
  // textColor5: neutral(base.alpha5),
  textColorDisabled: re(M.alpha4),
  placeholderColor: re(M.alpha4),
  placeholderColorDisabled: re(M.alpha5),
  iconColor: re(M.alpha4),
  iconColorHover: wo(re(M.alpha4), {
    lightness: 0.75
  }),
  iconColorPressed: wo(re(M.alpha4), {
    lightness: 0.9
  }),
  iconColorDisabled: re(M.alpha5),
  opacity1: M.alpha1,
  opacity2: M.alpha2,
  opacity3: M.alpha3,
  opacity4: M.alpha4,
  opacity5: M.alpha5,
  dividerColor: "rgb(239, 239, 245)",
  borderColor: "rgb(224, 224, 230)",
  // close
  closeIconColor: re(Number(M.alphaClose)),
  closeIconColorHover: re(Number(M.alphaClose)),
  closeIconColorPressed: re(Number(M.alphaClose)),
  closeColorHover: "rgba(0, 0, 0, .09)",
  closeColorPressed: "rgba(0, 0, 0, .13)",
  // clear
  clearColor: re(M.alpha4),
  clearColorHover: wo(re(M.alpha4), {
    lightness: 0.75
  }),
  clearColorPressed: wo(re(M.alpha4), {
    lightness: 0.9
  }),
  scrollbarColor: hn(M.alphaScrollbar),
  scrollbarColorHover: hn(M.alphaScrollbarHover),
  scrollbarWidth: "5px",
  scrollbarHeight: "5px",
  scrollbarBorderRadius: "5px",
  progressRailColor: re(M.alphaProgressRail),
  railColor: "rgb(219, 219, 223)",
  popoverColor: M.neutralPopover,
  tableColor: M.neutralCard,
  cardColor: M.neutralCard,
  modalColor: M.neutralModal,
  bodyColor: M.neutralBody,
  tagColor: "#eee",
  avatarColor: re(M.alphaAvatar),
  invertedColor: "rgb(0, 20, 40)",
  inputColor: re(M.alphaInput),
  codeColor: "rgb(244, 244, 248)",
  tabColor: "rgb(247, 247, 250)",
  actionColor: "rgb(250, 250, 252)",
  tableHeaderColor: "rgb(250, 250, 252)",
  hoverColor: "rgb(243, 243, 245)",
  // use color with alpha since it can be nested with header filter & sorter effect
  tableColorHover: "rgba(0, 0, 100, 0.03)",
  tableColorStriped: "rgba(0, 0, 100, 0.02)",
  pressedColor: "rgb(237, 237, 239)",
  opacityDisabled: M.alphaDisabled,
  inputColorDisabled: "rgb(250, 250, 252)",
  // secondary button color
  // can also be used in tertiary button & quaternary button
  buttonColor2: "rgba(46, 51, 56, .05)",
  buttonColor2Hover: "rgba(46, 51, 56, .09)",
  buttonColor2Pressed: "rgba(46, 51, 56, .13)",
  boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",
  boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",
  boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"
}), zs = {
  railInsetHorizontalBottom: "auto 2px 4px 2px",
  railInsetHorizontalTop: "4px 2px auto 2px",
  railInsetVerticalRight: "2px 4px 2px auto",
  railInsetVerticalLeft: "2px auto 2px 4px",
  railColor: "transparent"
};
function Is(e) {
  const {
    scrollbarColor: o,
    scrollbarColorHover: t,
    scrollbarHeight: n,
    scrollbarWidth: r,
    scrollbarBorderRadius: i
  } = e;
  return Object.assign(Object.assign({}, zs), {
    height: n,
    width: r,
    borderRadius: i,
    color: o,
    colorHover: t
  });
}
const qn = {
  name: "Scrollbar",
  common: vo,
  self: Is
}, Fs = {
  paddingSmall: "12px 16px 12px",
  paddingMedium: "19px 24px 20px",
  paddingLarge: "23px 32px 24px",
  paddingHuge: "27px 40px 28px",
  titleFontSizeSmall: "16px",
  titleFontSizeMedium: "18px",
  titleFontSizeLarge: "18px",
  titleFontSizeHuge: "18px",
  closeIconSize: "18px",
  closeSize: "22px"
};
function Bs(e) {
  const {
    primaryColor: o,
    borderRadius: t,
    lineHeight: n,
    fontSize: r,
    cardColor: i,
    textColor2: a,
    textColor1: l,
    dividerColor: d,
    fontWeightStrong: h,
    closeIconColor: g,
    closeIconColorHover: b,
    closeIconColorPressed: E,
    closeColorHover: x,
    closeColorPressed: u,
    modalColor: _,
    boxShadow1: m,
    popoverColor: f,
    actionColor: y
  } = e;
  return Object.assign(Object.assign({}, Fs), {
    lineHeight: n,
    color: i,
    colorModal: _,
    colorPopover: f,
    colorTarget: o,
    colorEmbedded: y,
    colorEmbeddedModal: y,
    colorEmbeddedPopover: y,
    textColor: a,
    titleTextColor: l,
    borderColor: d,
    actionColor: y,
    titleFontWeight: h,
    closeColorHover: x,
    closeColorPressed: u,
    closeBorderRadius: t,
    closeIconColor: g,
    closeIconColorHover: b,
    closeIconColorPressed: E,
    fontSizeSmall: r,
    fontSizeMedium: r,
    fontSizeLarge: r,
    fontSizeHuge: r,
    boxShadow: m,
    borderRadius: t
  });
}
const Zn = {
  name: "Card",
  common: vo,
  self: Bs
}, Ds = {
  paddingTiny: "0 6px",
  paddingSmall: "0 10px",
  paddingMedium: "0 14px",
  paddingLarge: "0 18px",
  paddingRoundTiny: "0 10px",
  paddingRoundSmall: "0 14px",
  paddingRoundMedium: "0 18px",
  paddingRoundLarge: "0 22px",
  iconMarginTiny: "6px",
  iconMarginSmall: "6px",
  iconMarginMedium: "6px",
  iconMarginLarge: "6px",
  iconSizeTiny: "14px",
  iconSizeSmall: "18px",
  iconSizeMedium: "18px",
  iconSizeLarge: "20px",
  rippleDuration: ".6s"
};
function As(e) {
  const {
    heightTiny: o,
    heightSmall: t,
    heightMedium: n,
    heightLarge: r,
    borderRadius: i,
    fontSizeTiny: a,
    fontSizeSmall: l,
    fontSizeMedium: d,
    fontSizeLarge: h,
    opacityDisabled: g,
    textColor2: b,
    textColor3: E,
    primaryColorHover: x,
    primaryColorPressed: u,
    borderColor: _,
    primaryColor: m,
    baseColor: f,
    infoColor: y,
    infoColorHover: T,
    infoColorPressed: w,
    successColor: R,
    successColorHover: C,
    successColorPressed: s,
    warningColor: c,
    warningColorHover: S,
    warningColorPressed: z,
    errorColor: B,
    errorColorHover: D,
    errorColorPressed: U,
    fontWeight: W,
    buttonColor2: G,
    buttonColor2Hover: V,
    buttonColor2Pressed: L,
    fontWeightStrong: Q
  } = e;
  return Object.assign(Object.assign({}, Ds), {
    heightTiny: o,
    heightSmall: t,
    heightMedium: n,
    heightLarge: r,
    borderRadiusTiny: i,
    borderRadiusSmall: i,
    borderRadiusMedium: i,
    borderRadiusLarge: i,
    fontSizeTiny: a,
    fontSizeSmall: l,
    fontSizeMedium: d,
    fontSizeLarge: h,
    opacityDisabled: g,
    // secondary
    colorOpacitySecondary: "0.16",
    colorOpacitySecondaryHover: "0.22",
    colorOpacitySecondaryPressed: "0.28",
    colorSecondary: G,
    colorSecondaryHover: V,
    colorSecondaryPressed: L,
    // tertiary
    colorTertiary: G,
    colorTertiaryHover: V,
    colorTertiaryPressed: L,
    // quaternary
    colorQuaternary: "#0000",
    colorQuaternaryHover: V,
    colorQuaternaryPressed: L,
    // default type
    color: "#0000",
    colorHover: "#0000",
    colorPressed: "#0000",
    colorFocus: "#0000",
    colorDisabled: "#0000",
    textColor: b,
    textColorTertiary: E,
    textColorHover: x,
    textColorPressed: u,
    textColorFocus: x,
    textColorDisabled: b,
    textColorText: b,
    textColorTextHover: x,
    textColorTextPressed: u,
    textColorTextFocus: x,
    textColorTextDisabled: b,
    textColorGhost: b,
    textColorGhostHover: x,
    textColorGhostPressed: u,
    textColorGhostFocus: x,
    textColorGhostDisabled: b,
    border: `1px solid ${_}`,
    borderHover: `1px solid ${x}`,
    borderPressed: `1px solid ${u}`,
    borderFocus: `1px solid ${x}`,
    borderDisabled: `1px solid ${_}`,
    rippleColor: m,
    // primary
    colorPrimary: m,
    colorHoverPrimary: x,
    colorPressedPrimary: u,
    colorFocusPrimary: x,
    colorDisabledPrimary: m,
    textColorPrimary: f,
    textColorHoverPrimary: f,
    textColorPressedPrimary: f,
    textColorFocusPrimary: f,
    textColorDisabledPrimary: f,
    textColorTextPrimary: m,
    textColorTextHoverPrimary: x,
    textColorTextPressedPrimary: u,
    textColorTextFocusPrimary: x,
    textColorTextDisabledPrimary: b,
    textColorGhostPrimary: m,
    textColorGhostHoverPrimary: x,
    textColorGhostPressedPrimary: u,
    textColorGhostFocusPrimary: x,
    textColorGhostDisabledPrimary: m,
    borderPrimary: `1px solid ${m}`,
    borderHoverPrimary: `1px solid ${x}`,
    borderPressedPrimary: `1px solid ${u}`,
    borderFocusPrimary: `1px solid ${x}`,
    borderDisabledPrimary: `1px solid ${m}`,
    rippleColorPrimary: m,
    // info
    colorInfo: y,
    colorHoverInfo: T,
    colorPressedInfo: w,
    colorFocusInfo: T,
    colorDisabledInfo: y,
    textColorInfo: f,
    textColorHoverInfo: f,
    textColorPressedInfo: f,
    textColorFocusInfo: f,
    textColorDisabledInfo: f,
    textColorTextInfo: y,
    textColorTextHoverInfo: T,
    textColorTextPressedInfo: w,
    textColorTextFocusInfo: T,
    textColorTextDisabledInfo: b,
    textColorGhostInfo: y,
    textColorGhostHoverInfo: T,
    textColorGhostPressedInfo: w,
    textColorGhostFocusInfo: T,
    textColorGhostDisabledInfo: y,
    borderInfo: `1px solid ${y}`,
    borderHoverInfo: `1px solid ${T}`,
    borderPressedInfo: `1px solid ${w}`,
    borderFocusInfo: `1px solid ${T}`,
    borderDisabledInfo: `1px solid ${y}`,
    rippleColorInfo: y,
    // success
    colorSuccess: R,
    colorHoverSuccess: C,
    colorPressedSuccess: s,
    colorFocusSuccess: C,
    colorDisabledSuccess: R,
    textColorSuccess: f,
    textColorHoverSuccess: f,
    textColorPressedSuccess: f,
    textColorFocusSuccess: f,
    textColorDisabledSuccess: f,
    textColorTextSuccess: R,
    textColorTextHoverSuccess: C,
    textColorTextPressedSuccess: s,
    textColorTextFocusSuccess: C,
    textColorTextDisabledSuccess: b,
    textColorGhostSuccess: R,
    textColorGhostHoverSuccess: C,
    textColorGhostPressedSuccess: s,
    textColorGhostFocusSuccess: C,
    textColorGhostDisabledSuccess: R,
    borderSuccess: `1px solid ${R}`,
    borderHoverSuccess: `1px solid ${C}`,
    borderPressedSuccess: `1px solid ${s}`,
    borderFocusSuccess: `1px solid ${C}`,
    borderDisabledSuccess: `1px solid ${R}`,
    rippleColorSuccess: R,
    // warning
    colorWarning: c,
    colorHoverWarning: S,
    colorPressedWarning: z,
    colorFocusWarning: S,
    colorDisabledWarning: c,
    textColorWarning: f,
    textColorHoverWarning: f,
    textColorPressedWarning: f,
    textColorFocusWarning: f,
    textColorDisabledWarning: f,
    textColorTextWarning: c,
    textColorTextHoverWarning: S,
    textColorTextPressedWarning: z,
    textColorTextFocusWarning: S,
    textColorTextDisabledWarning: b,
    textColorGhostWarning: c,
    textColorGhostHoverWarning: S,
    textColorGhostPressedWarning: z,
    textColorGhostFocusWarning: S,
    textColorGhostDisabledWarning: c,
    borderWarning: `1px solid ${c}`,
    borderHoverWarning: `1px solid ${S}`,
    borderPressedWarning: `1px solid ${z}`,
    borderFocusWarning: `1px solid ${S}`,
    borderDisabledWarning: `1px solid ${c}`,
    rippleColorWarning: c,
    // error
    colorError: B,
    colorHoverError: D,
    colorPressedError: U,
    colorFocusError: D,
    colorDisabledError: B,
    textColorError: f,
    textColorHoverError: f,
    textColorPressedError: f,
    textColorFocusError: f,
    textColorDisabledError: f,
    textColorTextError: B,
    textColorTextHoverError: D,
    textColorTextPressedError: U,
    textColorTextFocusError: D,
    textColorTextDisabledError: b,
    textColorGhostError: B,
    textColorGhostHoverError: D,
    textColorGhostPressedError: U,
    textColorGhostFocusError: D,
    textColorGhostDisabledError: B,
    borderError: `1px solid ${B}`,
    borderHoverError: `1px solid ${D}`,
    borderPressedError: `1px solid ${U}`,
    borderFocusError: `1px solid ${D}`,
    borderDisabledError: `1px solid ${B}`,
    rippleColorError: B,
    waveOpacity: "0.6",
    fontWeight: W,
    fontWeightStrong: Q
  });
}
const Qn = {
  name: "Button",
  common: vo,
  self: As
}, ks = {
  titleFontSize: "18px",
  padding: "16px 28px 20px 28px",
  iconSize: "28px",
  actionSpace: "12px",
  contentMargin: "8px 0 16px 0",
  iconMargin: "0 4px 0 0",
  iconMarginIconTop: "4px 0 8px 0",
  closeSize: "22px",
  closeIconSize: "18px",
  closeMargin: "20px 26px 0 0",
  closeMarginIconTop: "10px 16px 0 0"
};
function Ls(e) {
  const {
    textColor1: o,
    textColor2: t,
    modalColor: n,
    closeIconColor: r,
    closeIconColorHover: i,
    closeIconColorPressed: a,
    closeColorHover: l,
    closeColorPressed: d,
    infoColor: h,
    successColor: g,
    warningColor: b,
    errorColor: E,
    primaryColor: x,
    dividerColor: u,
    borderRadius: _,
    fontWeightStrong: m,
    lineHeight: f,
    fontSize: y
  } = e;
  return Object.assign(Object.assign({}, ks), {
    fontSize: y,
    lineHeight: f,
    border: `1px solid ${u}`,
    titleTextColor: o,
    textColor: t,
    color: n,
    closeColorHover: l,
    closeColorPressed: d,
    closeIconColor: r,
    closeIconColorHover: i,
    closeIconColorPressed: a,
    closeBorderRadius: _,
    iconColor: x,
    iconColorInfo: h,
    iconColorSuccess: g,
    iconColorWarning: b,
    iconColorError: E,
    borderRadius: _,
    titleFontWeight: m
  });
}
const Jn = {
  name: "Dialog",
  common: vo,
  peers: {
    Button: Qn
  },
  self: Ls
};
function Hs(e) {
  const {
    modalColor: o,
    textColor2: t,
    boxShadow3: n
  } = e;
  return {
    color: o,
    textColor: t,
    boxShadow: n
  };
}
const Ns = {
  name: "Modal",
  common: vo,
  peers: {
    Scrollbar: qn,
    Dialog: Jn,
    Card: Zn
  },
  self: Hs
}, Ws = K("base-icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`, [P("svg", `
 height: 1em;
 width: 1em;
 `)]), er = Z({
  name: "BaseIcon",
  props: {
    role: String,
    ariaLabel: String,
    ariaDisabled: {
      type: Boolean,
      default: void 0
    },
    ariaHidden: {
      type: Boolean,
      default: void 0
    },
    clsPrefix: {
      type: String,
      required: !0
    },
    onClick: Function,
    onMousedown: Function,
    onMouseup: Function
  },
  setup(e) {
    ko("-base-icon", Ws, Ce(e, "clsPrefix"));
  },
  render() {
    return p("i", {
      class: `${this.clsPrefix}-base-icon`,
      onClick: this.onClick,
      onMousedown: this.onMousedown,
      onMouseup: this.onMouseup,
      role: this.role,
      "aria-label": this.ariaLabel,
      "aria-hidden": this.ariaHidden,
      "aria-disabled": this.ariaDisabled
    }, this.$slots);
  }
}), or = Z({
  name: "BaseIconSwitchTransition",
  setup(e, {
    slots: o
  }) {
    const t = _n();
    return () => p(Ge, {
      name: "icon-switch-transition",
      appear: t.value
    }, o);
  }
});
function bo(e, o) {
  const t = Z({
    render() {
      return o();
    }
  });
  return Z({
    name: Nr(e),
    setup() {
      var n;
      const r = (n = ue(qe, null)) === null || n === void 0 ? void 0 : n.mergedIconsRef;
      return () => {
        var i;
        const a = (i = r == null ? void 0 : r.value) === null || i === void 0 ? void 0 : i[e];
        return a ? a() : p(t, null);
      };
    }
  });
}
const Vs = bo("close", () => p("svg", {
  viewBox: "0 0 12 12",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": !0
}, p("g", {
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, p("g", {
  fill: "currentColor",
  "fill-rule": "nonzero"
}, p("path", {
  d: "M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"
}))))), js = bo("error", () => p("svg", {
  viewBox: "0 0 48 48",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, p("g", {
  stroke: "none",
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, p("g", {
  "fill-rule": "nonzero"
}, p("path", {
  d: "M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z"
}))))), pn = bo("info", () => p("svg", {
  viewBox: "0 0 28 28",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, p("g", {
  stroke: "none",
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, p("g", {
  "fill-rule": "nonzero"
}, p("path", {
  d: "M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z"
}))))), Us = bo("success", () => p("svg", {
  viewBox: "0 0 48 48",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, p("g", {
  stroke: "none",
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, p("g", {
  "fill-rule": "nonzero"
}, p("path", {
  d: "M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z"
}))))), Gs = bo("warning", () => p("svg", {
  viewBox: "0 0 24 24",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, p("g", {
  stroke: "none",
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, p("g", {
  "fill-rule": "nonzero"
}, p("path", {
  d: "M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z"
}))))), {
  cubicBezierEaseInOut: Xs
} = Ze;
function ht({
  originalTransform: e = "",
  left: o = 0,
  top: t = 0,
  transition: n = `all .3s ${Xs} !important`
} = {}) {
  return [P("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to", {
    transform: `${e} scale(0.75)`,
    left: o,
    top: t,
    opacity: 0
  }), P("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from", {
    transform: `scale(1) ${e}`,
    left: o,
    top: t,
    opacity: 1
  }), P("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active", {
    transformOrigin: "center",
    position: "absolute",
    left: o,
    top: t,
    transition: n
  })];
}
const Ks = K("base-close", `
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`, [H("absolute", `
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `), P("&::before", `
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `), ct("disabled", [P("&:hover", `
 color: var(--n-close-icon-color-hover);
 `), P("&:hover::before", `
 background-color: var(--n-close-color-hover);
 `), P("&:focus::before", `
 background-color: var(--n-close-color-hover);
 `), P("&:active", `
 color: var(--n-close-icon-color-pressed);
 `), P("&:active::before", `
 background-color: var(--n-close-color-pressed);
 `)]), H("disabled", `
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `), H("round", [P("&::before", `
 border-radius: 50%;
 `)])]), tr = Z({
  name: "BaseClose",
  props: {
    isButtonTag: {
      type: Boolean,
      default: !0
    },
    clsPrefix: {
      type: String,
      required: !0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    focusable: {
      type: Boolean,
      default: !0
    },
    round: Boolean,
    onClick: Function,
    absolute: Boolean
  },
  setup(e) {
    return ko("-base-close", Ks, Ce(e, "clsPrefix")), () => {
      const {
        clsPrefix: o,
        disabled: t,
        absolute: n,
        round: r,
        isButtonTag: i
      } = e;
      return p(i ? "button" : "div", {
        type: i ? "button" : void 0,
        tabindex: t || !e.focusable ? -1 : 0,
        "aria-disabled": t,
        "aria-label": "close",
        role: i ? void 0 : "button",
        disabled: t,
        class: [`${o}-base-close`, n && `${o}-base-close--absolute`, t && `${o}-base-close--disabled`, r && `${o}-base-close--round`],
        onMousedown: (l) => {
          e.focusable || l.preventDefault();
        },
        onClick: e.onClick
      }, p(er, {
        clsPrefix: o
      }, {
        default: () => p(Vs, null)
      }));
    };
  }
}), Ys = Z({
  name: "FadeInExpandTransition",
  props: {
    appear: Boolean,
    group: Boolean,
    mode: String,
    onLeave: Function,
    onAfterLeave: Function,
    onAfterEnter: Function,
    width: Boolean,
    // reverse mode is only used in tree
    // it make it from expanded to collapsed after mounted
    reverse: Boolean
  },
  setup(e, {
    slots: o
  }) {
    function t(l) {
      e.width ? l.style.maxWidth = `${l.offsetWidth}px` : l.style.maxHeight = `${l.offsetHeight}px`, l.offsetWidth;
    }
    function n(l) {
      e.width ? l.style.maxWidth = "0" : l.style.maxHeight = "0", l.offsetWidth;
      const {
        onLeave: d
      } = e;
      d && d();
    }
    function r(l) {
      e.width ? l.style.maxWidth = "" : l.style.maxHeight = "";
      const {
        onAfterLeave: d
      } = e;
      d && d();
    }
    function i(l) {
      if (l.style.transition = "none", e.width) {
        const d = l.offsetWidth;
        l.style.maxWidth = "0", l.offsetWidth, l.style.transition = "", l.style.maxWidth = `${d}px`;
      } else if (e.reverse)
        l.style.maxHeight = `${l.offsetHeight}px`, l.offsetHeight, l.style.transition = "", l.style.maxHeight = "0";
      else {
        const d = l.offsetHeight;
        l.style.maxHeight = "0", l.offsetWidth, l.style.transition = "", l.style.maxHeight = `${d}px`;
      }
      l.offsetWidth;
    }
    function a(l) {
      var d;
      e.width ? l.style.maxWidth = "" : e.reverse || (l.style.maxHeight = ""), (d = e.onAfterEnter) === null || d === void 0 || d.call(e);
    }
    return () => {
      const {
        group: l,
        width: d,
        appear: h,
        mode: g
      } = e, b = l ? $r : Ge, E = {
        name: d ? "fade-in-width-expand-transition" : "fade-in-height-expand-transition",
        appear: h,
        onEnter: i,
        onAfterEnter: a,
        onBeforeLeave: t,
        onLeave: n,
        onAfterLeave: r
      };
      return l || (E.mode = g), p(b, E, o);
    };
  }
}), qs = P([P("@keyframes rotator", `
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`), K("base-loading", `
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `, [$("transition-wrapper", `
 position: absolute;
 width: 100%;
 height: 100%;
 `, [ht()]), $("placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [ht({
  left: "50%",
  top: "50%",
  originalTransform: "translateX(-50%) translateY(-50%)"
})]), $("container", `
 animation: rotator 3s linear infinite both;
 `, [$("icon", `
 height: 1em;
 width: 1em;
 `)])])]), Qo = "1.6s", Zs = {
  strokeWidth: {
    type: Number,
    default: 28
  },
  stroke: {
    type: String,
    default: void 0
  }
}, Qs = Z({
  name: "BaseLoading",
  props: Object.assign({
    clsPrefix: {
      type: String,
      required: !0
    },
    show: {
      type: Boolean,
      default: !0
    },
    scale: {
      type: Number,
      default: 1
    },
    radius: {
      type: Number,
      default: 100
    }
  }, Zs),
  setup(e) {
    ko("-base-loading", qs, Ce(e, "clsPrefix"));
  },
  render() {
    const {
      clsPrefix: e,
      radius: o,
      strokeWidth: t,
      stroke: n,
      scale: r
    } = this, i = o / r;
    return p("div", {
      class: `${e}-base-loading`,
      role: "img",
      "aria-label": "loading"
    }, p(or, null, {
      default: () => this.show ? p("div", {
        key: "icon",
        class: `${e}-base-loading__transition-wrapper`
      }, p("div", {
        class: `${e}-base-loading__container`
      }, p("svg", {
        class: `${e}-base-loading__icon`,
        viewBox: `0 0 ${2 * i} ${2 * i}`,
        xmlns: "http://www.w3.org/2000/svg",
        style: {
          color: n
        }
      }, p("g", null, p("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        values: `0 ${i} ${i};270 ${i} ${i}`,
        begin: "0s",
        dur: Qo,
        fill: "freeze",
        repeatCount: "indefinite"
      }), p("circle", {
        class: `${e}-base-loading__icon`,
        fill: "none",
        stroke: "currentColor",
        "stroke-width": t,
        "stroke-linecap": "round",
        cx: i,
        cy: i,
        r: o - t / 2,
        "stroke-dasharray": 5.67 * o,
        "stroke-dashoffset": 18.48 * o
      }, p("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        values: `0 ${i} ${i};135 ${i} ${i};450 ${i} ${i}`,
        begin: "0s",
        dur: Qo,
        fill: "freeze",
        repeatCount: "indefinite"
      }), p("animate", {
        attributeName: "stroke-dashoffset",
        values: `${5.67 * o};${1.42 * o};${5.67 * o}`,
        begin: "0s",
        dur: Qo,
        fill: "freeze",
        repeatCount: "indefinite"
      })))))) : p("div", {
        key: "placeholder",
        class: `${e}-base-loading__placeholder`
      }, this.$slots)
    }));
  }
}), {
  cubicBezierEaseInOut: mn
} = Ze;
function nr({
  name: e = "fade-in",
  enterDuration: o = "0.2s",
  leaveDuration: t = "0.2s",
  enterCubicBezier: n = mn,
  leaveCubicBezier: r = mn
} = {}) {
  return [P(`&.${e}-transition-enter-active`, {
    transition: `all ${o} ${n}!important`
  }), P(`&.${e}-transition-leave-active`, {
    transition: `all ${t} ${r}!important`
  }), P(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`, {
    opacity: 0
  }), P(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`, {
    opacity: 1
  })];
}
const Js = K("scrollbar", `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [P(">", [K("scrollbar-container", `
 width: 100%;
 overflow: scroll;
 height: 100%;
 min-height: inherit;
 max-height: inherit;
 scrollbar-width: none;
 `, [P("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), P(">", [
  // We can't set overflow hidden since it affects positioning.
  K("scrollbar-content", `
 box-sizing: border-box;
 min-width: 100%;
 `)
])])]), P(">, +", [K("scrollbar-rail", `
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `, [H("horizontal", `
 height: var(--n-scrollbar-height);
 `, [P(">", [$("scrollbar", `
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]), H("horizontal--top", `
 top: var(--n-scrollbar-rail-top-horizontal-top); 
 right: var(--n-scrollbar-rail-right-horizontal-top); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-top); 
 left: var(--n-scrollbar-rail-left-horizontal-top); 
 `), H("horizontal--bottom", `
 top: var(--n-scrollbar-rail-top-horizontal-bottom); 
 right: var(--n-scrollbar-rail-right-horizontal-bottom); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-bottom); 
 left: var(--n-scrollbar-rail-left-horizontal-bottom); 
 `), H("vertical", `
 width: var(--n-scrollbar-width);
 `, [P(">", [$("scrollbar", `
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]), H("vertical--left", `
 top: var(--n-scrollbar-rail-top-vertical-left); 
 right: var(--n-scrollbar-rail-right-vertical-left); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-left); 
 left: var(--n-scrollbar-rail-left-vertical-left); 
 `), H("vertical--right", `
 top: var(--n-scrollbar-rail-top-vertical-right); 
 right: var(--n-scrollbar-rail-right-vertical-right); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-right); 
 left: var(--n-scrollbar-rail-left-vertical-right); 
 `), H("disabled", [P(">", [$("scrollbar", "pointer-events: none;")])]), P(">", [$("scrollbar", `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [nr(), P("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), el = Object.assign(Object.assign({}, ge.props), {
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
}), ol = Z({
  name: "Scrollbar",
  props: el,
  inheritAttrs: !1,
  setup(e) {
    const {
      mergedClsPrefixRef: o,
      inlineThemeDisabled: t,
      mergedRtlRef: n
    } = mo(e), r = Ao("Scrollbar", n, o), i = k(null), a = k(null), l = k(null), d = k(null), h = k(null), g = k(null), b = k(null), E = k(null), x = k(null), u = k(null), _ = k(null), m = k(0), f = k(0), y = k(!1), T = k(!1);
    let w = !1, R = !1, C, s, c = 0, S = 0, z = 0, B = 0;
    const D = Jr(), U = ge("Scrollbar", "-scrollbar", Js, qn, e, o), W = F(() => {
      const {
        value: v
      } = E, {
        value: O
      } = g, {
        value: I
      } = u;
      return v === null || O === null || I === null ? 0 : Math.min(v, I * v / O + Ht(U.value.self.width) * 1.5);
    }), G = F(() => `${W.value}px`), V = F(() => {
      const {
        value: v
      } = x, {
        value: O
      } = b, {
        value: I
      } = _;
      return v === null || O === null || I === null ? 0 : I * v / O + Ht(U.value.self.height) * 1.5;
    }), L = F(() => `${V.value}px`), Q = F(() => {
      const {
        value: v
      } = E, {
        value: O
      } = m, {
        value: I
      } = g, {
        value: X
      } = u;
      if (v === null || I === null || X === null)
        return 0;
      {
        const ee = I - v;
        return ee ? O / ee * (X - W.value) : 0;
      }
    }), ne = F(() => `${Q.value}px`), J = F(() => {
      const {
        value: v
      } = x, {
        value: O
      } = f, {
        value: I
      } = b, {
        value: X
      } = _;
      if (v === null || I === null || X === null)
        return 0;
      {
        const ee = I - v;
        return ee ? O / ee * (X - V.value) : 0;
      }
    }), le = F(() => `${J.value}px`), fe = F(() => {
      const {
        value: v
      } = E, {
        value: O
      } = g;
      return v !== null && O !== null && O > v;
    }), Se = F(() => {
      const {
        value: v
      } = x, {
        value: O
      } = b;
      return v !== null && O !== null && O > v;
    }), ye = F(() => {
      const {
        trigger: v
      } = e;
      return v === "none" || y.value;
    }), Lo = F(() => {
      const {
        trigger: v
      } = e;
      return v === "none" || T.value;
    }), j = F(() => {
      const {
        container: v
      } = e;
      return v ? v() : a.value;
    }), Le = F(() => {
      const {
        content: v
      } = e;
      return v ? v() : l.value;
    }), Qe = (v, O) => {
      if (!e.scrollable) return;
      if (typeof v == "number") {
        we(v, O ?? 0, 0, !1, "auto");
        return;
      }
      const {
        left: I,
        top: X,
        index: ee,
        elSize: ae,
        position: he,
        behavior: q,
        el: de,
        debounce: Ee = !0
      } = v;
      (I !== void 0 || X !== void 0) && we(I ?? 0, X ?? 0, 0, !1, q), de !== void 0 ? we(0, de.offsetTop, de.offsetHeight, Ee, q) : ee !== void 0 && ae !== void 0 ? we(0, ee * ae, ae, Ee, q) : he === "bottom" ? we(0, Number.MAX_SAFE_INTEGER, 0, !1, q) : he === "top" && we(0, 0, 0, !1, q);
    }, N = si(() => {
      e.container || Qe({
        top: m.value,
        left: f.value
      });
    }), Je = () => {
      N.isDeactivated || _e();
    }, eo = (v) => {
      if (N.isDeactivated) return;
      const {
        onResize: O
      } = e;
      O && O(v), _e();
    }, Ho = (v, O) => {
      if (!e.scrollable) return;
      const {
        value: I
      } = j;
      I && (typeof v == "object" ? I.scrollBy(v) : I.scrollBy(v, O || 0));
    };
    function we(v, O, I, X, ee) {
      const {
        value: ae
      } = j;
      if (ae) {
        if (X) {
          const {
            scrollTop: he,
            offsetHeight: q
          } = ae;
          if (O > he) {
            O + I <= he + q || ae.scrollTo({
              left: v,
              top: O + I - q,
              behavior: ee
            });
            return;
          }
        }
        ae.scrollTo({
          left: v,
          top: O,
          behavior: ee
        });
      }
    }
    function No() {
      Uo(), Y(), _e();
    }
    function Wo() {
      oo();
    }
    function oo() {
      Vo(), jo();
    }
    function Vo() {
      s !== void 0 && window.clearTimeout(s), s = window.setTimeout(() => {
        T.value = !1;
      }, e.duration);
    }
    function jo() {
      C !== void 0 && window.clearTimeout(C), C = window.setTimeout(() => {
        y.value = !1;
      }, e.duration);
    }
    function Uo() {
      C !== void 0 && window.clearTimeout(C), y.value = !0;
    }
    function Y() {
      s !== void 0 && window.clearTimeout(s), T.value = !0;
    }
    function oe(v) {
      const {
        onScroll: O
      } = e;
      O && O(v), Re();
    }
    function Re() {
      const {
        value: v
      } = j;
      v && (m.value = v.scrollTop, f.value = v.scrollLeft * (r != null && r.value ? -1 : 1));
    }
    function ir() {
      const {
        value: v
      } = Le;
      v && (g.value = v.offsetHeight, b.value = v.offsetWidth);
      const {
        value: O
      } = j;
      O && (E.value = O.offsetHeight, x.value = O.offsetWidth);
      const {
        value: I
      } = h, {
        value: X
      } = d;
      I && (_.value = I.offsetWidth), X && (u.value = X.offsetHeight);
    }
    function yt() {
      const {
        value: v
      } = j;
      v && (m.value = v.scrollTop, f.value = v.scrollLeft * (r != null && r.value ? -1 : 1), E.value = v.offsetHeight, x.value = v.offsetWidth, g.value = v.scrollHeight, b.value = v.scrollWidth);
      const {
        value: O
      } = h, {
        value: I
      } = d;
      O && (_.value = O.offsetWidth), I && (u.value = I.offsetHeight);
    }
    function _e() {
      e.scrollable && (e.useUnifiedContainer ? yt() : (ir(), Re()));
    }
    function wt(v) {
      var O;
      return !(!((O = i.value) === null || O === void 0) && O.contains(mt(v)));
    }
    function sr(v) {
      v.preventDefault(), v.stopPropagation(), R = !0, te("mousemove", window, Et, !0), te("mouseup", window, Pt, !0), S = f.value, z = r != null && r.value ? window.innerWidth - v.clientX : v.clientX;
    }
    function Et(v) {
      if (!R) return;
      C !== void 0 && window.clearTimeout(C), s !== void 0 && window.clearTimeout(s);
      const {
        value: O
      } = x, {
        value: I
      } = b, {
        value: X
      } = V;
      if (O === null || I === null) return;
      const ae = (r != null && r.value ? window.innerWidth - v.clientX - z : v.clientX - z) * (I - O) / (O - X), he = I - O;
      let q = S + ae;
      q = Math.min(he, q), q = Math.max(q, 0);
      const {
        value: de
      } = j;
      if (de) {
        de.scrollLeft = q * (r != null && r.value ? -1 : 1);
        const {
          internalOnUpdateScrollLeft: Ee
        } = e;
        Ee && Ee(q);
      }
    }
    function Pt(v) {
      v.preventDefault(), v.stopPropagation(), ie("mousemove", window, Et, !0), ie("mouseup", window, Pt, !0), R = !1, _e(), wt(v) && oo();
    }
    function lr(v) {
      v.preventDefault(), v.stopPropagation(), w = !0, te("mousemove", window, Go, !0), te("mouseup", window, Xo, !0), c = m.value, B = v.clientY;
    }
    function Go(v) {
      if (!w) return;
      C !== void 0 && window.clearTimeout(C), s !== void 0 && window.clearTimeout(s);
      const {
        value: O
      } = E, {
        value: I
      } = g, {
        value: X
      } = W;
      if (O === null || I === null) return;
      const ae = (v.clientY - B) * (I - O) / (O - X), he = I - O;
      let q = c + ae;
      q = Math.min(he, q), q = Math.max(q, 0);
      const {
        value: de
      } = j;
      de && (de.scrollTop = q);
    }
    function Xo(v) {
      v.preventDefault(), v.stopPropagation(), ie("mousemove", window, Go, !0), ie("mouseup", window, Xo, !0), w = !1, _e(), wt(v) && oo();
    }
    Fo(() => {
      const {
        value: v
      } = Se, {
        value: O
      } = fe, {
        value: I
      } = o, {
        value: X
      } = h, {
        value: ee
      } = d;
      X && (v ? X.classList.remove(`${I}-scrollbar-rail--disabled`) : X.classList.add(`${I}-scrollbar-rail--disabled`)), ee && (O ? ee.classList.remove(`${I}-scrollbar-rail--disabled`) : ee.classList.add(`${I}-scrollbar-rail--disabled`));
    }), ho(() => {
      e.container || _e();
    }), xe(() => {
      C !== void 0 && window.clearTimeout(C), s !== void 0 && window.clearTimeout(s), ie("mousemove", window, Go, !0), ie("mouseup", window, Xo, !0);
    });
    const Rt = F(() => {
      const {
        common: {
          cubicBezierEaseInOut: v
        },
        self: {
          color: O,
          colorHover: I,
          height: X,
          width: ee,
          borderRadius: ae,
          railInsetHorizontalTop: he,
          railInsetHorizontalBottom: q,
          railInsetVerticalRight: de,
          railInsetVerticalLeft: Ee,
          railColor: ar
        }
      } = U.value, {
        top: cr,
        right: dr,
        bottom: ur,
        left: fr
      } = Te(he), {
        top: hr,
        right: pr,
        bottom: mr,
        left: gr
      } = Te(q), {
        top: vr,
        right: br,
        bottom: Cr,
        left: xr
      } = Te(r != null && r.value ? ln(de) : de), {
        top: Sr,
        right: yr,
        bottom: wr,
        left: Er
      } = Te(r != null && r.value ? ln(Ee) : Ee);
      return {
        "--n-scrollbar-bezier": v,
        "--n-scrollbar-color": O,
        "--n-scrollbar-color-hover": I,
        "--n-scrollbar-border-radius": ae,
        "--n-scrollbar-width": ee,
        "--n-scrollbar-height": X,
        "--n-scrollbar-rail-top-horizontal-top": cr,
        "--n-scrollbar-rail-right-horizontal-top": dr,
        "--n-scrollbar-rail-bottom-horizontal-top": ur,
        "--n-scrollbar-rail-left-horizontal-top": fr,
        "--n-scrollbar-rail-top-horizontal-bottom": hr,
        "--n-scrollbar-rail-right-horizontal-bottom": pr,
        "--n-scrollbar-rail-bottom-horizontal-bottom": mr,
        "--n-scrollbar-rail-left-horizontal-bottom": gr,
        "--n-scrollbar-rail-top-vertical-right": vr,
        "--n-scrollbar-rail-right-vertical-right": br,
        "--n-scrollbar-rail-bottom-vertical-right": Cr,
        "--n-scrollbar-rail-left-vertical-right": xr,
        "--n-scrollbar-rail-top-vertical-left": Sr,
        "--n-scrollbar-rail-right-vertical-left": yr,
        "--n-scrollbar-rail-bottom-vertical-left": wr,
        "--n-scrollbar-rail-left-vertical-left": Er,
        "--n-scrollbar-rail-color": ar
      };
    }), He = t ? go("scrollbar", void 0, Rt, e) : void 0;
    return Object.assign(Object.assign({}, {
      scrollTo: Qe,
      scrollBy: Ho,
      sync: _e,
      syncUnifiedContainer: yt,
      handleMouseEnterWrapper: No,
      handleMouseLeaveWrapper: Wo
    }), {
      mergedClsPrefix: o,
      rtlEnabled: r,
      containerScrollTop: m,
      wrapperRef: i,
      containerRef: a,
      contentRef: l,
      yRailRef: d,
      xRailRef: h,
      needYBar: fe,
      needXBar: Se,
      yBarSizePx: G,
      xBarSizePx: L,
      yBarTopPx: ne,
      xBarLeftPx: le,
      isShowXBar: ye,
      isShowYBar: Lo,
      isIos: D,
      handleScroll: oe,
      handleContentResize: Je,
      handleContainerResize: eo,
      handleYScrollMouseDown: lr,
      handleXScrollMouseDown: sr,
      cssVars: t ? void 0 : Rt,
      themeClass: He == null ? void 0 : He.themeClass,
      onRender: He == null ? void 0 : He.onRender
    });
  },
  render() {
    var e;
    const {
      $slots: o,
      mergedClsPrefix: t,
      triggerDisplayManually: n,
      rtlEnabled: r,
      internalHoistYRail: i,
      yPlacement: a,
      xPlacement: l,
      xScrollable: d
    } = this;
    if (!this.scrollable) return (e = o.default) === null || e === void 0 ? void 0 : e.call(o);
    const h = this.trigger === "none", g = (x, u) => p("div", {
      ref: "yRailRef",
      class: [`${t}-scrollbar-rail`, `${t}-scrollbar-rail--vertical`, `${t}-scrollbar-rail--vertical--${a}`, x],
      "data-scrollbar-rail": !0,
      style: [u || "", this.verticalRailStyle],
      "aria-hidden": !0
    }, p(h ? un : Ge, h ? null : {
      name: "fade-in-transition"
    }, {
      default: () => this.needYBar && this.isShowYBar && !this.isIos ? p("div", {
        class: `${t}-scrollbar-rail__scrollbar`,
        style: {
          height: this.yBarSizePx,
          top: this.yBarTopPx
        },
        onMousedown: this.handleYScrollMouseDown
      }) : null
    })), b = () => {
      var x, u;
      return (x = this.onRender) === null || x === void 0 || x.call(this), p("div", Sn(this.$attrs, {
        role: "none",
        ref: "wrapperRef",
        class: [`${t}-scrollbar`, this.themeClass, r && `${t}-scrollbar--rtl`],
        style: this.cssVars,
        onMouseenter: n ? void 0 : this.handleMouseEnterWrapper,
        onMouseleave: n ? void 0 : this.handleMouseLeaveWrapper
      }), [this.container ? (u = o.default) === null || u === void 0 ? void 0 : u.call(o) : p("div", {
        role: "none",
        ref: "containerRef",
        class: [`${t}-scrollbar-container`, this.containerClass],
        style: this.containerStyle,
        onScroll: this.handleScroll,
        onWheel: this.onWheel
      }, p(rn, {
        onResize: this.handleContentResize
      }, {
        default: () => p("div", {
          ref: "contentRef",
          role: "none",
          style: [{
            width: this.xScrollable ? "fit-content" : null
          }, this.contentStyle],
          class: [`${t}-scrollbar-content`, this.contentClass]
        }, o)
      })), i ? null : g(void 0, void 0), d && p("div", {
        ref: "xRailRef",
        class: [`${t}-scrollbar-rail`, `${t}-scrollbar-rail--horizontal`, `${t}-scrollbar-rail--horizontal--${l}`],
        style: this.horizontalRailStyle,
        "data-scrollbar-rail": !0,
        "aria-hidden": !0
      }, p(h ? un : Ge, h ? null : {
        name: "fade-in-transition"
      }, {
        default: () => this.needXBar && this.isShowXBar && !this.isIos ? p("div", {
          class: `${t}-scrollbar-rail__scrollbar`,
          style: {
            width: this.xBarSizePx,
            right: r ? this.xBarLeftPx : void 0,
            left: r ? void 0 : this.xBarLeftPx
          },
          onMousedown: this.handleXScrollMouseDown
        }) : null
      }))]);
    }, E = this.container ? b() : p(rn, {
      onResize: this.handleContainerResize
    }, {
      default: b
    });
    return i ? p(Io, null, E, g(this.themeClass, this.cssVars)) : E;
  }
}), {
  cubicBezierEaseIn: gn,
  cubicBezierEaseOut: vn
} = Ze;
function tl({
  transformOrigin: e = "inherit",
  duration: o = ".2s",
  enterScale: t = ".9",
  originalTransform: n = "",
  originalTransition: r = ""
} = {}) {
  return [P("&.fade-in-scale-up-transition-leave-active", {
    transformOrigin: e,
    transition: `opacity ${o} ${gn}, transform ${o} ${gn} ${r && `,${r}`}`
  }), P("&.fade-in-scale-up-transition-enter-active", {
    transformOrigin: e,
    transition: `opacity ${o} ${vn}, transform ${o} ${vn} ${r && `,${r}`}`
  }), P("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to", {
    opacity: 0,
    transform: `${n} scale(${t})`
  }), P("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to", {
    opacity: 1,
    transform: `${n} scale(1)`
  })];
}
const {
  cubicBezierEaseInOut: Pe
} = Ze;
function nl({
  duration: e = ".2s",
  delay: o = ".1s"
} = {}) {
  return [P("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to", {
    opacity: 1
  }), P("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from", `
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `), P("&.fade-in-width-expand-transition-leave-active", `
 overflow: hidden;
 transition:
 opacity ${e} ${Pe},
 max-width ${e} ${Pe} ${o},
 margin-left ${e} ${Pe} ${o},
 margin-right ${e} ${Pe} ${o};
 `), P("&.fade-in-width-expand-transition-enter-active", `
 overflow: hidden;
 transition:
 opacity ${e} ${Pe} ${o},
 max-width ${e} ${Pe},
 margin-left ${e} ${Pe},
 margin-right ${e} ${Pe};
 `)];
}
const rl = K("base-wave", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`), il = Z({
  name: "BaseWave",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    ko("-base-wave", rl, Ce(e, "clsPrefix"));
    const o = k(null), t = k(!1);
    let n = null;
    return xe(() => {
      n !== null && window.clearTimeout(n);
    }), {
      active: t,
      selfRef: o,
      play() {
        n !== null && (window.clearTimeout(n), t.value = !1, n = null), nt(() => {
          var r;
          (r = o.value) === null || r === void 0 || r.offsetHeight, t.value = !0, n = window.setTimeout(() => {
            t.value = !1, n = null;
          }, 1e3);
        });
      }
    };
  },
  render() {
    const {
      clsPrefix: e
    } = this;
    return p("div", {
      ref: "selfRef",
      "aria-hidden": !0,
      class: [`${e}-base-wave`, this.active && `${e}-base-wave--active`]
    });
  }
}), sl = P([K("card", `
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [Un({
  background: "var(--n-color-modal)"
}), H("hoverable", [P("&:hover", "box-shadow: var(--n-box-shadow);")]), H("content-segmented", [P(">", [$("content", {
  paddingTop: "var(--n-padding-bottom)"
})])]), H("content-soft-segmented", [P(">", [$("content", `
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]), H("footer-segmented", [P(">", [$("footer", {
  paddingTop: "var(--n-padding-bottom)"
})])]), H("footer-soft-segmented", [P(">", [$("footer", `
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]), P(">", [K("card-header", `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `, [$("main", `
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `), $("extra", `
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), $("close", `
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]), $("action", `
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `), $("content", "flex: 1; min-width: 0;"), $("content, footer", `
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `, [P("&:first-child", {
  paddingTop: "var(--n-padding-bottom)"
})]), $("action", `
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]), K("card-cover", `
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `, [P("img", `
 display: block;
 width: 100%;
 `)]), H("bordered", `
 border: 1px solid var(--n-border-color);
 `, [P("&:target", "border-color: var(--n-color-target);")]), H("action-segmented", [P(">", [$("action", [P("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), H("content-segmented, content-soft-segmented", [P(">", [$("content", {
  transition: "border-color 0.3s var(--n-bezier)"
}, [P("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), H("footer-segmented, footer-soft-segmented", [P(">", [$("footer", {
  transition: "border-color 0.3s var(--n-bezier)"
}, [P("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), H("embedded", `
 background-color: var(--n-color-embedded);
 `)]), jn(K("card", `
 background: var(--n-color-modal);
 `, [H("embedded", `
 background-color: var(--n-color-embedded-modal);
 `)])), vs(K("card", `
 background: var(--n-color-popover);
 `, [H("embedded", `
 background-color: var(--n-color-embedded-popover);
 `)]))]), Ct = {
  title: [String, Function],
  contentClass: String,
  contentStyle: [Object, String],
  headerClass: String,
  headerStyle: [Object, String],
  headerExtraClass: String,
  headerExtraStyle: [Object, String],
  footerClass: String,
  footerStyle: [Object, String],
  embedded: Boolean,
  segmented: {
    type: [Boolean, Object],
    default: !1
  },
  size: {
    type: String,
    default: "medium"
  },
  bordered: {
    type: Boolean,
    default: !0
  },
  closable: Boolean,
  hoverable: Boolean,
  role: String,
  onClose: [Function, Array],
  tag: {
    type: String,
    default: "div"
  },
  cover: Function,
  content: [String, Function],
  footer: Function,
  action: Function,
  headerExtra: Function
}, ll = bt(Ct), al = Object.assign(Object.assign({}, ge.props), Ct), cl = Z({
  name: "Card",
  props: al,
  slots: Object,
  setup(e) {
    const o = () => {
      const {
        onClose: h
      } = e;
      h && Ie(h);
    }, {
      inlineThemeDisabled: t,
      mergedClsPrefixRef: n,
      mergedRtlRef: r
    } = mo(e), i = ge("Card", "-card", sl, Zn, e, n), a = Ao("Card", r, n), l = F(() => {
      const {
        size: h
      } = e, {
        self: {
          color: g,
          colorModal: b,
          colorTarget: E,
          textColor: x,
          titleTextColor: u,
          titleFontWeight: _,
          borderColor: m,
          actionColor: f,
          borderRadius: y,
          lineHeight: T,
          closeIconColor: w,
          closeIconColorHover: R,
          closeIconColorPressed: C,
          closeColorHover: s,
          closeColorPressed: c,
          closeBorderRadius: S,
          closeIconSize: z,
          closeSize: B,
          boxShadow: D,
          colorPopover: U,
          colorEmbedded: W,
          colorEmbeddedModal: G,
          colorEmbeddedPopover: V,
          [A("padding", h)]: L,
          [A("fontSize", h)]: Q,
          [A("titleFontSize", h)]: ne
        },
        common: {
          cubicBezierEaseInOut: J
        }
      } = i.value, {
        top: le,
        left: fe,
        bottom: Se
      } = Te(L);
      return {
        "--n-bezier": J,
        "--n-border-radius": y,
        "--n-color": g,
        "--n-color-modal": b,
        "--n-color-popover": U,
        "--n-color-embedded": W,
        "--n-color-embedded-modal": G,
        "--n-color-embedded-popover": V,
        "--n-color-target": E,
        "--n-text-color": x,
        "--n-line-height": T,
        "--n-action-color": f,
        "--n-title-text-color": u,
        "--n-title-font-weight": _,
        "--n-close-icon-color": w,
        "--n-close-icon-color-hover": R,
        "--n-close-icon-color-pressed": C,
        "--n-close-color-hover": s,
        "--n-close-color-pressed": c,
        "--n-border-color": m,
        "--n-box-shadow": D,
        // size
        "--n-padding-top": le,
        "--n-padding-bottom": Se,
        "--n-padding-left": fe,
        "--n-font-size": Q,
        "--n-title-font-size": ne,
        "--n-close-size": B,
        "--n-close-icon-size": z,
        "--n-close-border-radius": S
      };
    }), d = t ? go("card", F(() => e.size[0]), l, e) : void 0;
    return {
      rtlEnabled: a,
      mergedClsPrefix: n,
      mergedTheme: i,
      handleCloseClick: o,
      cssVars: t ? void 0 : l,
      themeClass: d == null ? void 0 : d.themeClass,
      onRender: d == null ? void 0 : d.onRender
    };
  },
  render() {
    const {
      segmented: e,
      bordered: o,
      hoverable: t,
      mergedClsPrefix: n,
      rtlEnabled: r,
      onRender: i,
      embedded: a,
      tag: l,
      $slots: d
    } = this;
    return i == null || i(), p(l, {
      class: [`${n}-card`, this.themeClass, a && `${n}-card--embedded`, {
        [`${n}-card--rtl`]: r,
        [`${n}-card--content${typeof e != "boolean" && e.content === "soft" ? "-soft" : ""}-segmented`]: e === !0 || e !== !1 && e.content,
        [`${n}-card--footer${typeof e != "boolean" && e.footer === "soft" ? "-soft" : ""}-segmented`]: e === !0 || e !== !1 && e.footer,
        [`${n}-card--action-segmented`]: e === !0 || e !== !1 && e.action,
        [`${n}-card--bordered`]: o,
        [`${n}-card--hoverable`]: t
      }],
      style: this.cssVars,
      role: this.role
    }, me(d.cover, (h) => {
      const g = this.cover ? be([this.cover()]) : h;
      return g && p("div", {
        class: `${n}-card-cover`,
        role: "none"
      }, g);
    }), me(d.header, (h) => {
      const {
        title: g
      } = this, b = g ? be(typeof g == "function" ? [g()] : [g]) : h;
      return b || this.closable ? p("div", {
        class: [`${n}-card-header`, this.headerClass],
        style: this.headerStyle,
        role: "heading"
      }, p("div", {
        class: `${n}-card-header__main`,
        role: "heading"
      }, b), me(d["header-extra"], (E) => {
        const x = this.headerExtra ? be([this.headerExtra()]) : E;
        return x && p("div", {
          class: [`${n}-card-header__extra`, this.headerExtraClass],
          style: this.headerExtraStyle
        }, x);
      }), this.closable && p(tr, {
        clsPrefix: n,
        class: `${n}-card-header__close`,
        onClick: this.handleCloseClick,
        absolute: !0
      })) : null;
    }), me(d.default, (h) => {
      const {
        content: g
      } = this, b = g ? be(typeof g == "function" ? [g()] : [g]) : h;
      return b && p("div", {
        class: [`${n}-card__content`, this.contentClass],
        style: this.contentStyle,
        role: "none"
      }, b);
    }), me(d.footer, (h) => {
      const g = this.footer ? be([this.footer()]) : h;
      return g && p("div", {
        class: [`${n}-card__footer`, this.footerClass],
        style: this.footerStyle,
        role: "none"
      }, g);
    }), me(d.action, (h) => {
      const g = this.action ? be([this.action()]) : h;
      return g && p("div", {
        class: `${n}-card__action`,
        role: "none"
      }, g);
    }));
  }
});
function Oe(e) {
  return gt(e, [255, 255, 255, 0.16]);
}
function To(e) {
  return gt(e, [0, 0, 0, 0.12]);
}
const dl = po && "chrome" in window;
po && navigator.userAgent.includes("Firefox");
const ul = po && navigator.userAgent.includes("Safari") && !dl, fl = "n-button-group", hl = P([K("button", `
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [H("color", [$("border", {
  borderColor: "var(--n-border-color)"
}), H("disabled", [$("border", {
  borderColor: "var(--n-border-color-disabled)"
})]), ct("disabled", [P("&:focus", [$("state-border", {
  borderColor: "var(--n-border-color-focus)"
})]), P("&:hover", [$("state-border", {
  borderColor: "var(--n-border-color-hover)"
})]), P("&:active", [$("state-border", {
  borderColor: "var(--n-border-color-pressed)"
})]), H("pressed", [$("state-border", {
  borderColor: "var(--n-border-color-pressed)"
})])])]), H("disabled", {
  backgroundColor: "var(--n-color-disabled)",
  color: "var(--n-text-color-disabled)"
}, [$("border", {
  border: "var(--n-border-disabled)"
})]), ct("disabled", [P("&:focus", {
  backgroundColor: "var(--n-color-focus)",
  color: "var(--n-text-color-focus)"
}, [$("state-border", {
  border: "var(--n-border-focus)"
})]), P("&:hover", {
  backgroundColor: "var(--n-color-hover)",
  color: "var(--n-text-color-hover)"
}, [$("state-border", {
  border: "var(--n-border-hover)"
})]), P("&:active", {
  backgroundColor: "var(--n-color-pressed)",
  color: "var(--n-text-color-pressed)"
}, [$("state-border", {
  border: "var(--n-border-pressed)"
})]), H("pressed", {
  backgroundColor: "var(--n-color-pressed)",
  color: "var(--n-text-color-pressed)"
}, [$("state-border", {
  border: "var(--n-border-pressed)"
})])]), H("loading", "cursor: wait;"), K("base-wave", `
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `, [H("active", {
  zIndex: 1,
  animationName: "button-wave-spread, button-wave-opacity"
})]), po && "MozBoxSizing" in document.createElement("div").style ? P("&::moz-focus-inner", {
  border: 0
}) : null, $("border, state-border", `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `), $("border", {
  border: "var(--n-border)"
}), $("state-border", {
  border: "var(--n-border)",
  borderColor: "#0000",
  zIndex: 1
}), $("icon", `
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `, [K("icon-slot", `
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `, [ht({
  top: "50%",
  originalTransform: "translateY(-50%)"
})]), nl()]), $("content", `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `, [P("~", [$("icon", {
  margin: "var(--n-icon-margin)",
  marginRight: 0
})])]), H("block", `
 display: flex;
 width: 100%;
 `), H("dashed", [$("border, state-border", {
  borderStyle: "dashed !important"
})]), H("disabled", {
  cursor: "not-allowed",
  opacity: "var(--n-opacity-disabled)"
})]), P("@keyframes button-wave-spread", {
  from: {
    boxShadow: "0 0 0.5px 0 var(--n-ripple-color)"
  },
  to: {
    // don't use exact 5px since chrome will display the animation with glitches
    boxShadow: "0 0 0.5px 4.5px var(--n-ripple-color)"
  }
}), P("@keyframes button-wave-opacity", {
  from: {
    opacity: "var(--n-wave-opacity)"
  },
  to: {
    opacity: 0
  }
})]);
var pl = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_11684_UKXSMLHMUWFBWKVP", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.97.2", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-5a8078c568-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
const ml = Object.assign(Object.assign({}, ge.props), {
  color: String,
  textColor: String,
  text: Boolean,
  block: Boolean,
  loading: Boolean,
  disabled: Boolean,
  circle: Boolean,
  size: String,
  ghost: Boolean,
  round: Boolean,
  secondary: Boolean,
  tertiary: Boolean,
  quaternary: Boolean,
  strong: Boolean,
  focusable: {
    type: Boolean,
    default: !0
  },
  keyboard: {
    type: Boolean,
    default: !0
  },
  tag: {
    type: String,
    default: "button"
  },
  type: {
    type: String,
    default: "default"
  },
  dashed: Boolean,
  renderIcon: Function,
  iconPlacement: {
    type: String,
    default: "left"
  },
  attrType: {
    type: String,
    default: "button"
  },
  bordered: {
    type: Boolean,
    default: !0
  },
  onClick: [Function, Array],
  nativeFocusBehavior: {
    type: Boolean,
    default: !ul
  }
}), bn = Z({
  name: "Button",
  props: ml,
  slots: Object,
  setup(e) {
    pl.NODE_ENV !== "production" && Fo(() => {
      const {
        dashed: w,
        ghost: R,
        text: C,
        secondary: s,
        tertiary: c,
        quaternary: S
      } = e;
      (w || R || C) && (s || c || S) && io("button", "`dashed`, `ghost` and `text` props can't be used along with `secondary`, `tertiary` and `quaternary` props.");
    });
    const o = k(null), t = k(null), n = k(!1), r = Kr(() => !e.quaternary && !e.tertiary && !e.secondary && !e.text && (!e.color || e.ghost || e.dashed) && e.bordered), i = ue(fl, {}), {
      mergedSizeRef: a
    } = Es({}, {
      defaultSize: "medium",
      mergedSize: (w) => {
        const {
          size: R
        } = e;
        if (R) return R;
        const {
          size: C
        } = i;
        if (C) return C;
        const {
          mergedSize: s
        } = w || {};
        return s ? s.value : "medium";
      }
    }), l = F(() => e.focusable && !e.disabled), d = (w) => {
      var R;
      l.value || w.preventDefault(), !e.nativeFocusBehavior && (w.preventDefault(), !e.disabled && l.value && ((R = o.value) === null || R === void 0 || R.focus({
        preventScroll: !0
      })));
    }, h = (w) => {
      var R;
      if (!e.disabled && !e.loading) {
        const {
          onClick: C
        } = e;
        C && Ie(C, w), e.text || (R = t.value) === null || R === void 0 || R.play();
      }
    }, g = (w) => {
      switch (w.key) {
        case "Enter":
          if (!e.keyboard)
            return;
          n.value = !1;
      }
    }, b = (w) => {
      switch (w.key) {
        case "Enter":
          if (!e.keyboard || e.loading) {
            w.preventDefault();
            return;
          }
          n.value = !0;
      }
    }, E = () => {
      n.value = !1;
    }, {
      inlineThemeDisabled: x,
      mergedClsPrefixRef: u,
      mergedRtlRef: _
    } = mo(e), m = ge("Button", "-button", hl, Qn, e, u), f = Ao("Button", _, u), y = F(() => {
      const w = m.value, {
        common: {
          cubicBezierEaseInOut: R,
          cubicBezierEaseOut: C
        },
        self: s
      } = w, {
        rippleDuration: c,
        opacityDisabled: S,
        fontWeight: z,
        fontWeightStrong: B
      } = s, D = a.value, {
        dashed: U,
        type: W,
        ghost: G,
        text: V,
        color: L,
        round: Q,
        circle: ne,
        textColor: J,
        secondary: le,
        tertiary: fe,
        quaternary: Se,
        strong: ye
      } = e, Lo = {
        "--n-font-weight": ye ? B : z
      };
      let j = {
        "--n-color": "initial",
        "--n-color-hover": "initial",
        "--n-color-pressed": "initial",
        "--n-color-focus": "initial",
        "--n-color-disabled": "initial",
        "--n-ripple-color": "initial",
        "--n-text-color": "initial",
        "--n-text-color-hover": "initial",
        "--n-text-color-pressed": "initial",
        "--n-text-color-focus": "initial",
        "--n-text-color-disabled": "initial"
      };
      const Le = W === "tertiary", Qe = W === "default", N = Le ? "default" : W;
      if (V) {
        const Y = J || L;
        j = {
          "--n-color": "#0000",
          "--n-color-hover": "#0000",
          "--n-color-pressed": "#0000",
          "--n-color-focus": "#0000",
          "--n-color-disabled": "#0000",
          "--n-ripple-color": "#0000",
          "--n-text-color": Y || s[A("textColorText", N)],
          "--n-text-color-hover": Y ? Oe(Y) : s[A("textColorTextHover", N)],
          "--n-text-color-pressed": Y ? To(Y) : s[A("textColorTextPressed", N)],
          "--n-text-color-focus": Y ? Oe(Y) : s[A("textColorTextHover", N)],
          "--n-text-color-disabled": Y || s[A("textColorTextDisabled", N)]
        };
      } else if (G || U) {
        const Y = J || L;
        j = {
          "--n-color": "#0000",
          "--n-color-hover": "#0000",
          "--n-color-pressed": "#0000",
          "--n-color-focus": "#0000",
          "--n-color-disabled": "#0000",
          "--n-ripple-color": L || s[A("rippleColor", N)],
          "--n-text-color": Y || s[A("textColorGhost", N)],
          "--n-text-color-hover": Y ? Oe(Y) : s[A("textColorGhostHover", N)],
          "--n-text-color-pressed": Y ? To(Y) : s[A("textColorGhostPressed", N)],
          "--n-text-color-focus": Y ? Oe(Y) : s[A("textColorGhostHover", N)],
          "--n-text-color-disabled": Y || s[A("textColorGhostDisabled", N)]
        };
      } else if (le) {
        const Y = Qe ? s.textColor : Le ? s.textColorTertiary : s[A("color", N)], oe = L || Y, Re = W !== "default" && W !== "tertiary";
        j = {
          "--n-color": Re ? yo(oe, {
            alpha: Number(s.colorOpacitySecondary)
          }) : s.colorSecondary,
          "--n-color-hover": Re ? yo(oe, {
            alpha: Number(s.colorOpacitySecondaryHover)
          }) : s.colorSecondaryHover,
          "--n-color-pressed": Re ? yo(oe, {
            alpha: Number(s.colorOpacitySecondaryPressed)
          }) : s.colorSecondaryPressed,
          "--n-color-focus": Re ? yo(oe, {
            alpha: Number(s.colorOpacitySecondaryHover)
          }) : s.colorSecondaryHover,
          "--n-color-disabled": s.colorSecondary,
          "--n-ripple-color": "#0000",
          "--n-text-color": oe,
          "--n-text-color-hover": oe,
          "--n-text-color-pressed": oe,
          "--n-text-color-focus": oe,
          "--n-text-color-disabled": oe
        };
      } else if (fe || Se) {
        const Y = Qe ? s.textColor : Le ? s.textColorTertiary : s[A("color", N)], oe = L || Y;
        fe ? (j["--n-color"] = s.colorTertiary, j["--n-color-hover"] = s.colorTertiaryHover, j["--n-color-pressed"] = s.colorTertiaryPressed, j["--n-color-focus"] = s.colorSecondaryHover, j["--n-color-disabled"] = s.colorTertiary) : (j["--n-color"] = s.colorQuaternary, j["--n-color-hover"] = s.colorQuaternaryHover, j["--n-color-pressed"] = s.colorQuaternaryPressed, j["--n-color-focus"] = s.colorQuaternaryHover, j["--n-color-disabled"] = s.colorQuaternary), j["--n-ripple-color"] = "#0000", j["--n-text-color"] = oe, j["--n-text-color-hover"] = oe, j["--n-text-color-pressed"] = oe, j["--n-text-color-focus"] = oe, j["--n-text-color-disabled"] = oe;
      } else
        j = {
          "--n-color": L || s[A("color", N)],
          "--n-color-hover": L ? Oe(L) : s[A("colorHover", N)],
          "--n-color-pressed": L ? To(L) : s[A("colorPressed", N)],
          "--n-color-focus": L ? Oe(L) : s[A("colorFocus", N)],
          "--n-color-disabled": L || s[A("colorDisabled", N)],
          "--n-ripple-color": L || s[A("rippleColor", N)],
          "--n-text-color": J || (L ? s.textColorPrimary : Le ? s.textColorTertiary : s[A("textColor", N)]),
          "--n-text-color-hover": J || (L ? s.textColorHoverPrimary : s[A("textColorHover", N)]),
          "--n-text-color-pressed": J || (L ? s.textColorPressedPrimary : s[A("textColorPressed", N)]),
          "--n-text-color-focus": J || (L ? s.textColorFocusPrimary : s[A("textColorFocus", N)]),
          "--n-text-color-disabled": J || (L ? s.textColorDisabledPrimary : s[A("textColorDisabled", N)])
        };
      let Je = {
        "--n-border": "initial",
        "--n-border-hover": "initial",
        "--n-border-pressed": "initial",
        "--n-border-focus": "initial",
        "--n-border-disabled": "initial"
      };
      V ? Je = {
        "--n-border": "none",
        "--n-border-hover": "none",
        "--n-border-pressed": "none",
        "--n-border-focus": "none",
        "--n-border-disabled": "none"
      } : Je = {
        "--n-border": s[A("border", N)],
        "--n-border-hover": s[A("borderHover", N)],
        "--n-border-pressed": s[A("borderPressed", N)],
        "--n-border-focus": s[A("borderFocus", N)],
        "--n-border-disabled": s[A("borderDisabled", N)]
      };
      const {
        [A("height", D)]: eo,
        [A("fontSize", D)]: Ho,
        [A("padding", D)]: we,
        [A("paddingRound", D)]: No,
        [A("iconSize", D)]: Wo,
        [A("borderRadius", D)]: oo,
        [A("iconMargin", D)]: Vo,
        waveOpacity: jo
      } = s, Uo = {
        "--n-width": ne && !V ? eo : "initial",
        "--n-height": V ? "initial" : eo,
        "--n-font-size": Ho,
        "--n-padding": ne || V ? "initial" : Q ? No : we,
        "--n-icon-size": Wo,
        "--n-icon-margin": Vo,
        "--n-border-radius": V ? "initial" : ne || Q ? eo : oo
      };
      return Object.assign(Object.assign(Object.assign(Object.assign({
        "--n-bezier": R,
        "--n-bezier-ease-out": C,
        "--n-ripple-duration": c,
        "--n-opacity-disabled": S,
        "--n-wave-opacity": jo
      }, Lo), j), Je), Uo);
    }), T = x ? go("button", F(() => {
      let w = "";
      const {
        dashed: R,
        type: C,
        ghost: s,
        text: c,
        color: S,
        round: z,
        circle: B,
        textColor: D,
        secondary: U,
        tertiary: W,
        quaternary: G,
        strong: V
      } = e;
      R && (w += "a"), s && (w += "b"), c && (w += "c"), z && (w += "d"), B && (w += "e"), U && (w += "f"), W && (w += "g"), G && (w += "h"), V && (w += "i"), S && (w += `j${sn(S)}`), D && (w += `k${sn(D)}`);
      const {
        value: L
      } = a;
      return w += `l${L[0]}`, w += `m${C[0]}`, w;
    }), y, e) : void 0;
    return {
      selfElRef: o,
      waveElRef: t,
      mergedClsPrefix: u,
      mergedFocusable: l,
      mergedSize: a,
      showBorder: r,
      enterPressed: n,
      rtlEnabled: f,
      handleMousedown: d,
      handleKeydown: b,
      handleBlur: E,
      handleKeyup: g,
      handleClick: h,
      customColorCssVars: F(() => {
        const {
          color: w
        } = e;
        if (!w) return null;
        const R = Oe(w);
        return {
          "--n-border-color": w,
          "--n-border-color-hover": R,
          "--n-border-color-pressed": To(w),
          "--n-border-color-focus": R,
          "--n-border-color-disabled": w
        };
      }),
      cssVars: x ? void 0 : y,
      themeClass: T == null ? void 0 : T.themeClass,
      onRender: T == null ? void 0 : T.onRender
    };
  },
  render() {
    const {
      mergedClsPrefix: e,
      tag: o,
      onRender: t
    } = this;
    t == null || t();
    const n = me(this.$slots.default, (r) => r && p("span", {
      class: `${e}-button__content`
    }, r));
    return p(o, {
      ref: "selfElRef",
      class: [
        this.themeClass,
        `${e}-button`,
        `${e}-button--${this.type}-type`,
        `${e}-button--${this.mergedSize}-type`,
        this.rtlEnabled && `${e}-button--rtl`,
        this.disabled && `${e}-button--disabled`,
        this.block && `${e}-button--block`,
        this.enterPressed && `${e}-button--pressed`,
        !this.text && this.dashed && `${e}-button--dashed`,
        this.color && `${e}-button--color`,
        this.secondary && `${e}-button--secondary`,
        this.loading && `${e}-button--loading`,
        this.ghost && `${e}-button--ghost`
        // required for button group border collapse
      ],
      tabindex: this.mergedFocusable ? 0 : -1,
      type: this.attrType,
      style: this.cssVars,
      disabled: this.disabled,
      onClick: this.handleClick,
      onBlur: this.handleBlur,
      onMousedown: this.handleMousedown,
      onKeyup: this.handleKeyup,
      onKeydown: this.handleKeydown
    }, this.iconPlacement === "right" && n, p(Ys, {
      width: !0
    }, {
      default: () => me(this.$slots.icon, (r) => (this.loading || this.renderIcon || r) && p("span", {
        class: `${e}-button__icon`,
        style: {
          margin: Ss(this.$slots.default) ? "0" : ""
        }
      }, p(or, null, {
        default: () => this.loading ? p(Qs, {
          clsPrefix: e,
          key: "loading",
          class: `${e}-icon-slot`,
          strokeWidth: 20
        }) : p("div", {
          key: "icon",
          class: `${e}-icon-slot`,
          role: "none"
        }, this.renderIcon ? this.renderIcon() : r)
      })))
    }), this.iconPlacement === "left" && n, this.text ? null : p(il, {
      ref: "waveElRef",
      clsPrefix: e
    }), this.showBorder ? p("div", {
      "aria-hidden": !0,
      class: `${e}-button__border`,
      style: this.customColorCssVars
    }) : null, this.showBorder ? p("div", {
      "aria-hidden": !0,
      class: `${e}-button__state-border`,
      style: this.customColorCssVars
    }) : null);
  }
}), xt = {
  icon: Function,
  type: {
    type: String,
    default: "default"
  },
  title: [String, Function],
  closable: {
    type: Boolean,
    default: !0
  },
  negativeText: String,
  positiveText: String,
  positiveButtonProps: Object,
  negativeButtonProps: Object,
  content: [String, Function],
  action: Function,
  showIcon: {
    type: Boolean,
    default: !0
  },
  loading: Boolean,
  bordered: Boolean,
  iconPlacement: String,
  titleClass: [String, Array],
  titleStyle: [String, Object],
  contentClass: [String, Array],
  contentStyle: [String, Object],
  actionClass: [String, Array],
  actionStyle: [String, Object],
  onPositiveClick: Function,
  onNegativeClick: Function,
  onClose: Function
}, gl = bt(xt), vl = P([K("dialog", `
 --n-icon-margin: var(--n-icon-margin-top) var(--n-icon-margin-right) var(--n-icon-margin-bottom) var(--n-icon-margin-left);
 word-break: break-word;
 line-height: var(--n-line-height);
 position: relative;
 background: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 margin: auto;
 border-radius: var(--n-border-radius);
 padding: var(--n-padding);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `, [$("icon", {
  color: "var(--n-icon-color)"
}), H("bordered", {
  border: "var(--n-border)"
}), H("icon-top", [$("close", {
  margin: "var(--n-close-margin)"
}), $("icon", {
  margin: "var(--n-icon-margin)"
}), $("content", {
  textAlign: "center"
}), $("title", {
  justifyContent: "center"
}), $("action", {
  justifyContent: "center"
})]), H("icon-left", [$("icon", {
  margin: "var(--n-icon-margin)"
}), H("closable", [$("title", `
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]), $("close", `
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `), $("content", `
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `, [H("last", "margin-bottom: 0;")]), $("action", `
 display: flex;
 justify-content: flex-end;
 `, [P("> *:not(:last-child)", `
 margin-right: var(--n-action-space);
 `)]), $("icon", `
 font-size: var(--n-icon-size);
 transition: color .3s var(--n-bezier);
 `), $("title", `
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `), K("dialog-icon-container", `
 display: flex;
 justify-content: center;
 `)]), jn(K("dialog", `
 width: 446px;
 max-width: calc(100vw - 32px);
 `)), K("dialog", [Un(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]), bl = {
  default: () => p(pn, null),
  info: () => p(pn, null),
  success: () => p(Us, null),
  warning: () => p(Gs, null),
  error: () => p(js, null)
}, Cl = Z({
  name: "Dialog",
  alias: [
    "NimbusConfirmCard",
    // deprecated
    "Confirm"
    // deprecated
  ],
  props: Object.assign(Object.assign({}, ge.props), xt),
  slots: Object,
  setup(e) {
    const {
      mergedComponentPropsRef: o,
      mergedClsPrefixRef: t,
      inlineThemeDisabled: n,
      mergedRtlRef: r
    } = mo(e), i = Ao("Dialog", r, t), a = F(() => {
      var x, u;
      const {
        iconPlacement: _
      } = e;
      return _ || ((u = (x = o == null ? void 0 : o.value) === null || x === void 0 ? void 0 : x.Dialog) === null || u === void 0 ? void 0 : u.iconPlacement) || "left";
    });
    function l(x) {
      const {
        onPositiveClick: u
      } = e;
      u && u(x);
    }
    function d(x) {
      const {
        onNegativeClick: u
      } = e;
      u && u(x);
    }
    function h() {
      const {
        onClose: x
      } = e;
      x && x();
    }
    const g = ge("Dialog", "-dialog", vl, Jn, e, t), b = F(() => {
      const {
        type: x
      } = e, u = a.value, {
        common: {
          cubicBezierEaseInOut: _
        },
        self: {
          fontSize: m,
          lineHeight: f,
          border: y,
          titleTextColor: T,
          textColor: w,
          color: R,
          closeBorderRadius: C,
          closeColorHover: s,
          closeColorPressed: c,
          closeIconColor: S,
          closeIconColorHover: z,
          closeIconColorPressed: B,
          closeIconSize: D,
          borderRadius: U,
          titleFontWeight: W,
          titleFontSize: G,
          padding: V,
          iconSize: L,
          actionSpace: Q,
          contentMargin: ne,
          closeSize: J,
          [u === "top" ? "iconMarginIconTop" : "iconMargin"]: le,
          [u === "top" ? "closeMarginIconTop" : "closeMargin"]: fe,
          [A("iconColor", x)]: Se
        }
      } = g.value, ye = Te(le);
      return {
        "--n-font-size": m,
        "--n-icon-color": Se,
        "--n-bezier": _,
        "--n-close-margin": fe,
        "--n-icon-margin-top": ye.top,
        "--n-icon-margin-right": ye.right,
        "--n-icon-margin-bottom": ye.bottom,
        "--n-icon-margin-left": ye.left,
        "--n-icon-size": L,
        "--n-close-size": J,
        "--n-close-icon-size": D,
        "--n-close-border-radius": C,
        "--n-close-color-hover": s,
        "--n-close-color-pressed": c,
        "--n-close-icon-color": S,
        "--n-close-icon-color-hover": z,
        "--n-close-icon-color-pressed": B,
        "--n-color": R,
        "--n-text-color": w,
        "--n-border-radius": U,
        "--n-padding": V,
        "--n-line-height": f,
        "--n-border": y,
        "--n-content-margin": ne,
        "--n-title-font-size": G,
        "--n-title-font-weight": W,
        "--n-title-text-color": T,
        "--n-action-space": Q
      };
    }), E = n ? go("dialog", F(() => `${e.type[0]}${a.value[0]}`), b, e) : void 0;
    return {
      mergedClsPrefix: t,
      rtlEnabled: i,
      mergedIconPlacement: a,
      mergedTheme: g,
      handlePositiveClick: l,
      handleNegativeClick: d,
      handleCloseClick: h,
      cssVars: n ? void 0 : b,
      themeClass: E == null ? void 0 : E.themeClass,
      onRender: E == null ? void 0 : E.onRender
    };
  },
  render() {
    var e;
    const {
      bordered: o,
      mergedIconPlacement: t,
      cssVars: n,
      closable: r,
      showIcon: i,
      title: a,
      content: l,
      action: d,
      negativeText: h,
      positiveText: g,
      positiveButtonProps: b,
      negativeButtonProps: E,
      handlePositiveClick: x,
      handleNegativeClick: u,
      mergedTheme: _,
      loading: m,
      type: f,
      mergedClsPrefix: y
    } = this;
    (e = this.onRender) === null || e === void 0 || e.call(this);
    const T = i ? p(er, {
      clsPrefix: y,
      class: `${y}-dialog__icon`
    }, {
      default: () => me(this.$slots.icon, (R) => R || (this.icon ? je(this.icon) : bl[this.type]()))
    }) : null, w = me(this.$slots.action, (R) => R || g || h || d ? p("div", {
      class: [`${y}-dialog__action`, this.actionClass],
      style: this.actionStyle
    }, R || (d ? [je(d)] : [this.negativeText && p(bn, Object.assign({
      theme: _.peers.Button,
      themeOverrides: _.peerOverrides.Button,
      ghost: !0,
      size: "small",
      onClick: u
    }, E), {
      default: () => je(this.negativeText)
    }), this.positiveText && p(bn, Object.assign({
      theme: _.peers.Button,
      themeOverrides: _.peerOverrides.Button,
      size: "small",
      type: f === "default" ? "primary" : f,
      disabled: m,
      loading: m,
      onClick: x
    }, b), {
      default: () => je(this.positiveText)
    })])) : null);
    return p("div", {
      class: [`${y}-dialog`, this.themeClass, this.closable && `${y}-dialog--closable`, `${y}-dialog--icon-${t}`, o && `${y}-dialog--bordered`, this.rtlEnabled && `${y}-dialog--rtl`],
      style: n,
      role: "dialog"
    }, r ? me(this.$slots.close, (R) => {
      const C = [`${y}-dialog__close`, this.rtlEnabled && `${y}-dialog--rtl`];
      return R ? p("div", {
        class: C
      }, R) : p(tr, {
        clsPrefix: y,
        class: C,
        onClick: this.handleCloseClick
      });
    }) : null, i && t === "top" ? p("div", {
      class: `${y}-dialog-icon-container`
    }, T) : null, p("div", {
      class: [`${y}-dialog__title`, this.titleClass],
      style: this.titleStyle
    }, i && t === "left" ? T : null, dn(this.$slots.header, () => [je(a)])), p("div", {
      class: [`${y}-dialog__content`, w ? "" : `${y}-dialog__content--last`, this.contentClass],
      style: this.contentStyle
    }, dn(this.$slots.default, () => [je(l)])), w);
  }
}), St = Object.assign(Object.assign({}, Ct), xt), xl = bt(St), Sl = Z({
  name: "ModalBody",
  inheritAttrs: !1,
  slots: Object,
  props: Object.assign(Object.assign({
    show: {
      type: Boolean,
      required: !0
    },
    preset: String,
    displayDirective: {
      type: String,
      required: !0
    },
    trapFocus: {
      type: Boolean,
      default: !0
    },
    autoFocus: {
      type: Boolean,
      default: !0
    },
    blockScroll: Boolean,
    draggable: {
      type: [Boolean, Object],
      default: !1
    }
  }, St), {
    renderMask: Function,
    // events
    onClickoutside: Function,
    onBeforeLeave: {
      type: Function,
      required: !0
    },
    onAfterLeave: {
      type: Function,
      required: !0
    },
    onPositiveClick: {
      type: Function,
      required: !0
    },
    onNegativeClick: {
      type: Function,
      required: !0
    },
    onClose: {
      type: Function,
      required: !0
    },
    onAfterEnter: Function,
    onEsc: Function
  }),
  setup(e) {
    const o = k(null), t = k(null), n = k(e.show), r = k(null), i = k(null), a = ue(On);
    let l = null;
    Fe(Ce(e, "show"), (c) => {
      c && (l = a.getMousePosition());
    }, {
      immediate: !0
    });
    const {
      stopDrag: d,
      startDrag: h,
      draggableRef: g,
      draggableClassRef: b
    } = ys(Ce(e, "draggable"), {
      onEnd: (c) => {
        _(c);
      }
    }), E = F(() => zo([e.titleClass, b.value])), x = F(() => zo([e.headerClass, b.value]));
    Fe(Ce(e, "show"), (c) => {
      c && (n.value = !0);
    }), ii(F(() => e.blockScroll && n.value));
    function u() {
      if (a.transformOriginRef.value === "center")
        return "";
      const {
        value: c
      } = r, {
        value: S
      } = i;
      if (c === null || S === null)
        return "";
      if (t.value) {
        const z = t.value.containerScrollTop;
        return `${c}px ${S + z}px`;
      }
      return "";
    }
    function _(c) {
      if (a.transformOriginRef.value === "center" || !l || !t.value) return;
      const S = t.value.containerScrollTop, {
        offsetLeft: z,
        offsetTop: B
      } = c, D = l.y, U = l.x;
      r.value = -(z - U), i.value = -(B - D - S), c.style.transformOrigin = u();
    }
    function m(c) {
      nt(() => {
        _(c);
      });
    }
    function f(c) {
      c.style.transformOrigin = u(), e.onBeforeLeave();
    }
    function y(c) {
      const S = c;
      g.value && h(S), e.onAfterEnter && e.onAfterEnter(S);
    }
    function T() {
      n.value = !1, r.value = null, i.value = null, d(), e.onAfterLeave();
    }
    function w() {
      const {
        onClose: c
      } = e;
      c && c();
    }
    function R() {
      e.onNegativeClick();
    }
    function C() {
      e.onPositiveClick();
    }
    const s = k(null);
    return Fe(s, (c) => {
      c && nt(() => {
        const S = c.el;
        S && o.value !== S && (o.value = S);
      });
    }), so(oi, o), so(ei, null), so(ni, null), {
      mergedTheme: a.mergedThemeRef,
      appear: a.appearRef,
      isMounted: a.isMountedRef,
      mergedClsPrefix: a.mergedClsPrefixRef,
      bodyRef: o,
      scrollbarRef: t,
      draggableClass: b,
      displayed: n,
      childNodeRef: s,
      cardHeaderClass: x,
      dialogTitleClass: E,
      handlePositiveClick: C,
      handleNegativeClick: R,
      handleCloseClick: w,
      handleAfterEnter: y,
      handleAfterLeave: T,
      handleBeforeLeave: f,
      handleEnter: m
    };
  },
  render() {
    const {
      $slots: e,
      $attrs: o,
      handleEnter: t,
      handleAfterEnter: n,
      handleAfterLeave: r,
      handleBeforeLeave: i,
      preset: a,
      mergedClsPrefix: l
    } = this;
    let d = null;
    if (!a) {
      if (d = xs("default", e.default, {
        draggableClass: this.draggableClass
      }), !d) {
        Gn("modal", "default slot is empty");
        return;
      }
      d = zr(d), d.props = Sn({
        class: `${l}-modal`
      }, o, d.props || {});
    }
    return this.displayDirective === "show" || this.displayed || this.show ? rt(p("div", {
      role: "none",
      class: `${l}-modal-body-wrapper`
    }, p(ol, {
      ref: "scrollbarRef",
      theme: this.mergedTheme.peers.Scrollbar,
      themeOverrides: this.mergedTheme.peerOverrides.Scrollbar,
      contentClass: `${l}-modal-scroll-content`
    }, {
      default: () => {
        var h;
        return [(h = this.renderMask) === null || h === void 0 ? void 0 : h.call(this), p(fs, {
          disabled: !this.trapFocus,
          active: this.show,
          onEsc: this.onEsc,
          autoFocus: this.autoFocus
        }, {
          default: () => {
            var g;
            return p(Ge, {
              name: "fade-in-scale-up-transition",
              appear: (g = this.appear) !== null && g !== void 0 ? g : this.isMounted,
              onEnter: t,
              onAfterEnter: n,
              onAfterLeave: r,
              onBeforeLeave: i
            }, {
              default: () => {
                const b = [[_t, this.show]], {
                  onClickoutside: E
                } = this;
                return E && b.push([gi, this.onClickoutside, void 0, {
                  capture: !0
                }]), rt(this.preset === "confirm" || this.preset === "dialog" ? p(Cl, Object.assign({}, this.$attrs, {
                  class: [`${l}-modal`, this.$attrs.class],
                  ref: "bodyRef",
                  theme: this.mergedTheme.peers.Dialog,
                  themeOverrides: this.mergedTheme.peerOverrides.Dialog
                }, ut(this.$props, gl), {
                  titleClass: this.dialogTitleClass,
                  "aria-modal": "true"
                }), e) : this.preset === "card" ? p(cl, Object.assign({}, this.$attrs, {
                  ref: "bodyRef",
                  class: [`${l}-modal`, this.$attrs.class],
                  theme: this.mergedTheme.peers.Card,
                  themeOverrides: this.mergedTheme.peerOverrides.Card
                }, ut(this.$props, ll), {
                  headerClass: this.cardHeaderClass,
                  "aria-modal": "true",
                  role: "dialog"
                }), e) : this.childNodeRef = d, b);
              }
            });
          }
        })];
      }
    })), [[_t, this.displayDirective === "if" || this.displayed || this.show]]) : null;
  }
}), yl = P([K("modal-container", `
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `), K("modal-mask", `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `, [nr({
  enterDuration: ".25s",
  leaveDuration: ".25s",
  enterCubicBezier: "var(--n-bezier-ease-out)",
  leaveCubicBezier: "var(--n-bezier-ease-out)"
})]), K("modal-body-wrapper", `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `, [K("modal-scroll-content", `
 min-height: 100%;
 display: flex;
 position: relative;
 `)]), K("modal", `
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `, [tl({
  duration: ".25s",
  enterScale: ".5"
}), P(`.${ft}`, `
 cursor: move;
 user-select: none;
 `)])]);
var wl = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_11684_UKXSMLHMUWFBWKVP", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.97.2", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-5a8078c568-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
const El = Object.assign(Object.assign(Object.assign(Object.assign({}, ge.props), {
  show: Boolean,
  unstableShowMask: {
    type: Boolean,
    default: !0
  },
  maskClosable: {
    type: Boolean,
    default: !0
  },
  preset: String,
  to: [String, Object],
  displayDirective: {
    type: String,
    default: "if"
  },
  transformOrigin: {
    type: String,
    default: "mouse"
  },
  zIndex: Number,
  autoFocus: {
    type: Boolean,
    default: !0
  },
  trapFocus: {
    type: Boolean,
    default: !0
  },
  closeOnEsc: {
    type: Boolean,
    default: !0
  },
  blockScroll: {
    type: Boolean,
    default: !0
  }
}), St), {
  draggable: [Boolean, Object],
  // events
  onEsc: Function,
  "onUpdate:show": [Function, Array],
  onUpdateShow: [Function, Array],
  onAfterEnter: Function,
  onBeforeLeave: Function,
  onAfterLeave: Function,
  onClose: Function,
  onPositiveClick: Function,
  onNegativeClick: Function,
  onMaskClick: Function,
  // private
  internalDialog: Boolean,
  internalModal: Boolean,
  internalAppear: {
    type: Boolean,
    default: void 0
  },
  // deprecated
  overlayStyle: [String, Object],
  onBeforeHide: Function,
  onAfterHide: Function,
  onHide: Function
}), Pl = Z({
  name: "Modal",
  inheritAttrs: !1,
  props: El,
  slots: Object,
  setup(e) {
    wl.NODE_ENV !== "production" && (e.onHide && io("modal", "`on-hide` is deprecated."), e.onAfterHide && io("modal", "`on-after-hide` is deprecated, please use `on-after-leave` instead."), e.onBeforeHide && io("modal", "`on-before-hide` is deprecated, please use `on-before-leave` instead."), e.overlayStyle && io("modal", "`overlay-style` is deprecated, please use `style` instead."));
    const o = k(null), {
      mergedClsPrefixRef: t,
      namespaceRef: n,
      inlineThemeDisabled: r
    } = mo(e), i = ge("Modal", "-modal", yl, Ns, e, t), a = Zr(64), l = Yr(), d = _n(), h = e.internalDialog ? ue(Ts, null) : null, g = e.internalModal ? ue(ti, null) : null, b = ri();
    function E(C) {
      const {
        onUpdateShow: s,
        "onUpdate:show": c,
        onHide: S
      } = e;
      s && Ie(s, C), c && Ie(c, C), S && !C && S(C);
    }
    function x() {
      const {
        onClose: C
      } = e;
      C ? Promise.resolve(C()).then((s) => {
        s !== !1 && E(!1);
      }) : E(!1);
    }
    function u() {
      const {
        onPositiveClick: C
      } = e;
      C ? Promise.resolve(C()).then((s) => {
        s !== !1 && E(!1);
      }) : E(!1);
    }
    function _() {
      const {
        onNegativeClick: C
      } = e;
      C ? Promise.resolve(C()).then((s) => {
        s !== !1 && E(!1);
      }) : E(!1);
    }
    function m() {
      const {
        onBeforeLeave: C,
        onBeforeHide: s
      } = e;
      C && Ie(C), s && s();
    }
    function f() {
      const {
        onAfterLeave: C,
        onAfterHide: s
      } = e;
      C && Ie(C), s && s();
    }
    function y(C) {
      var s;
      const {
        onMaskClick: c
      } = e;
      c && c(C), e.maskClosable && !((s = o.value) === null || s === void 0) && s.contains(mt(C)) && E(!1);
    }
    function T(C) {
      var s;
      (s = e.onEsc) === null || s === void 0 || s.call(e), e.show && e.closeOnEsc && Cs(C) && (b.value || E(!1));
    }
    so(On, {
      getMousePosition: () => {
        const C = h || g;
        if (C) {
          const {
            clickedRef: s,
            clickedPositionRef: c
          } = C;
          if (s.value && c.value)
            return c.value;
        }
        return a.value ? l.value : null;
      },
      mergedClsPrefixRef: t,
      mergedThemeRef: i,
      isMountedRef: d,
      appearRef: Ce(e, "internalAppear"),
      transformOriginRef: Ce(e, "transformOrigin")
    });
    const w = F(() => {
      const {
        common: {
          cubicBezierEaseOut: C
        },
        self: {
          boxShadow: s,
          color: c,
          textColor: S
        }
      } = i.value;
      return {
        "--n-bezier-ease-out": C,
        "--n-box-shadow": s,
        "--n-color": c,
        "--n-text-color": S
      };
    }), R = r ? go("theme-class", void 0, w, e) : void 0;
    return {
      mergedClsPrefix: t,
      namespace: n,
      isMounted: d,
      containerRef: o,
      presetProps: F(() => ut(e, xl)),
      handleEsc: T,
      handleAfterLeave: f,
      handleClickoutside: y,
      handleBeforeLeave: m,
      doUpdateShow: E,
      handleNegativeClick: _,
      handlePositiveClick: u,
      handleCloseClick: x,
      cssVars: r ? void 0 : w,
      themeClass: R == null ? void 0 : R.themeClass,
      onRender: R == null ? void 0 : R.onRender
    };
  },
  render() {
    const {
      mergedClsPrefix: e
    } = this;
    return p(Wi, {
      to: this.to,
      show: this.show
    }, {
      default: () => {
        var o;
        (o = this.onRender) === null || o === void 0 || o.call(this);
        const {
          unstableShowMask: t
        } = this;
        return rt(p("div", {
          role: "none",
          ref: "containerRef",
          class: [`${e}-modal-container`, this.themeClass, this.namespace],
          style: this.cssVars
        }, p(Sl, Object.assign({
          style: this.overlayStyle
        }, this.$attrs, {
          ref: "bodyWrapper",
          displayDirective: this.displayDirective,
          show: this.show,
          preset: this.preset,
          autoFocus: this.autoFocus,
          trapFocus: this.trapFocus,
          draggable: this.draggable,
          blockScroll: this.blockScroll
        }, this.presetProps, {
          onEsc: this.handleEsc,
          onClose: this.handleCloseClick,
          onNegativeClick: this.handleNegativeClick,
          onPositiveClick: this.handlePositiveClick,
          onBeforeLeave: this.handleBeforeLeave,
          onAfterEnter: this.onAfterEnter,
          onAfterLeave: this.handleAfterLeave,
          onClickoutside: t ? void 0 : this.handleClickoutside,
          renderMask: t ? () => {
            var n;
            return p(Ge, {
              name: "fade-in-transition",
              key: "mask",
              appear: (n = this.internalAppear) !== null && n !== void 0 ? n : this.isMounted
            }, {
              default: () => this.show ? p("div", {
                "aria-hidden": !0,
                ref: "containerRef",
                class: `${e}-modal-mask`,
                onClick: this.handleClickoutside
              }) : null
            });
          } : void 0
        }), this.$slots)), [[Ci, {
          zIndex: this.zIndex,
          enabled: this.show
        }]]);
      }
    });
  }
}), Jo = {
  large: "large",
  medium: "medium",
  custom: "custom"
}, et = {
  size: {
    [Jo.large]: {
      width: 1e3,
      height: 680
    },
    [Jo.medium]: {
      width: 600,
      height: 300
    }
  },
  sizeMode: Jo.custom
};
function Rl(e, o) {
  let t = e ?? "-";
  return t.length > o ? t.substring(0, o) + "..." : t;
}
const _l = { class: "lc-decorator-title__wrapper" }, Ol = ["title"], Tl = /* @__PURE__ */ Z({
  __name: "decoratorTitle",
  props: /* @__PURE__ */ yn({
    text: {
      type: String
    },
    maxLength: {
      type: Number
    },
    dir: {
      type: String
    }
  }, {
    text: "",
    maxLength: 12,
    dir: "ltr"
  }),
  setup(e) {
    const o = F(() => Rl(e.text, e.maxLength));
    return (t, n) => (wn(), Ir(
      "div",
      {
        class: zo(["lc-decorator-title", [`lc-decorator-title--${e.dir}`]])
      },
      [
        pe("div", _l, [
          pe("div", {
            class: "lc-decorator-title__wrapper__text",
            title: e.text
          }, Fr(o.value), 9, Ol)
        ])
      ],
      2
      /* CLASS */
    ));
  }
}), rr = (e, o) => {
  const t = e.__vccOpts || e;
  for (const [n, r] of o)
    t[n] = r;
  return t;
}, Ml = /* @__PURE__ */ rr(Tl, [["__scopeId", "data-v-fde1c37c"]]), $l = { class: "lc-modal__header" }, zl = { class: "lc-modal__wrapper" }, Il = /* @__PURE__ */ Z({
  __name: "modal",
  props: /* @__PURE__ */ yn({
    width: {
      type: Number
    },
    height: {
      type: Number
    },
    sizeMode: {
      type: String
    },
    title: {
      type: String
    }
  }, {
    width: () => et.size.large.width,
    height: () => et.size.large.height,
    sizeMode: "large",
    title: ""
  }),
  emits: ["update:show"],
  setup(e, { emit: o }) {
    const t = o;
    function n(a) {
      return F(() => et.size[a] || { width: e.width, height: e.height });
    }
    const r = F(() => ({
      "--modal-width": n(e.sizeMode).value.width + "px",
      "--modal-height": n(e.sizeMode).value.height + "px"
    }));
    function i() {
      t("update:show", !1);
    }
    return (a, l) => (wn(), Br(
      Ot(Pl),
      Dr(Ar(a.$attrs)),
      {
        default: kr(() => [
          pe(
            "div",
            {
              class: "lc-modal",
              style: Lr(r.value)
            },
            [
              pe("div", $l, [
                Hr(Ot(Ml), { title: e.title }, null, 8, ["title"])
              ]),
              pe("div", zl, [
                pe(
                  "div",
                  {
                    class: zo(["lc-modal__wrapper__closeable", {
                      [e.sizeMode]: !0
                    }])
                  },
                  [
                    ot(a.$slots, "closeable", {}, () => [
                      pe("button", {
                        class: "lc-modal__wrapper__closeable__button",
                        onClick: i
                      }, l[0] || (l[0] = [
                        pe(
                          "svg",
                          {
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            "xmlns:xlink": "http://www.w3.org/1999/xlink",
                            x: "0px",
                            y: "0px",
                            viewBox: "0 0 512 512",
                            "enable-background": "new 0 0 512 512",
                            "xml:space": "preserve"
                          },
                          [
                            pe("g", null, [
                              pe("g", null, [
                                pe("polygon", { points: `405,136.798 375.202,107 256,226.202 136.798,107 107,136.798 226.202,256 107,375.202 136.798,405 256,285.798 \r
                                375.202,405 405,375.202 285.798,256` })
                              ])
                            ])
                          ],
                          -1
                          /* HOISTED */
                        )
                      ]))
                    ], !0)
                  ],
                  2
                  /* CLASS */
                ),
                ot(a.$slots, "default", {}, void 0, !0)
              ])
            ],
            4
            /* STYLE */
          )
        ]),
        _: 3
        /* FORWARDED */
      },
      16
      /* FULL_PROPS */
    ));
  }
}), kl = /* @__PURE__ */ rr(Il, [["__scopeId", "data-v-03507205"]]);
export {
  kl as LcModal
};
