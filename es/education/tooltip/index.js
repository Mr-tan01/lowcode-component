// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { ref as T, readonly as Mt, watch as ce, computed as z, onMounted as $e, onBeforeUnmount as ve, inject as ne, onActivated as Gr, onDeactivated as Kr, createTextVNode as An, Fragment as Fe, Comment as Ht, defineComponent as ie, provide as je, getCurrentInstance as In, withDirectives as dt, toRef as pe, h as M, Teleport as Zr, nextTick as qr, renderSlot as Tt, isVNode as Jr, shallowRef as Qr, watchEffect as Ae, onBeforeMount as Dn, Transition as Pt, mergeProps as kt, vShow as eo, cloneVNode as to, Text as no, openBlock as ro, createElementBlock as oo, createVNode as io, unref as lo, withCtx as en, createElementVNode as Me } from "vue";
import { merge as qe, map as so } from "lodash-es";
function lt(e) {
  return e.composedPath()[0];
}
const ao = {
  mousemoveoutside: /* @__PURE__ */ new WeakMap(),
  clickoutside: /* @__PURE__ */ new WeakMap()
};
function uo(e, t, n) {
  if (e === "mousemoveoutside") {
    const r = (o) => {
      t.contains(lt(o)) || n(o);
    };
    return {
      mousemove: r,
      touchstart: r
    };
  } else if (e === "clickoutside") {
    let r = !1;
    const o = (l) => {
      r = !t.contains(lt(l));
    }, i = (l) => {
      r && (t.contains(lt(l)) || n(l));
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
function Fn(e, t, n) {
  const r = ao[e];
  let o = r.get(t);
  o === void 0 && r.set(t, o = /* @__PURE__ */ new WeakMap());
  let i = o.get(n);
  return i === void 0 && o.set(n, i = uo(e, t, n)), i;
}
function co(e, t, n, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const o = Fn(e, t, n);
    return Object.keys(o).forEach((i) => {
      J(i, document, o[i], r);
    }), !0;
  }
  return !1;
}
function fo(e, t, n, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const o = Fn(e, t, n);
    return Object.keys(o).forEach((i) => {
      X(i, document, o[i], r);
    }), !0;
  }
  return !1;
}
function ho() {
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
  function o(c, v, C) {
    const S = c[v];
    return c[v] = function() {
      return C.apply(c, arguments), S.apply(c, arguments);
    }, c;
  }
  function i(c, v) {
    c[v] = Event.prototype[v];
  }
  const l = /* @__PURE__ */ new WeakMap(), s = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
  function d() {
    var c;
    return (c = l.get(this)) !== null && c !== void 0 ? c : null;
  }
  function f(c, v) {
    s !== void 0 && Object.defineProperty(c, "currentTarget", {
      configurable: !0,
      enumerable: !0,
      get: v ?? s.get
    });
  }
  const g = {
    bubble: {},
    capture: {}
  }, y = {};
  function b() {
    const c = function(v) {
      const { type: C, eventPhase: S, bubbles: R } = v, D = lt(v);
      if (S === 2)
        return;
      const k = S === 1 ? "capture" : "bubble";
      let L = D;
      const x = [];
      for (; L === null && (L = window), x.push(L), L !== window; )
        L = L.parentNode || null;
      const P = g.capture[C], N = g.bubble[C];
      if (o(v, "stopPropagation", n), o(v, "stopImmediatePropagation", r), f(v, d), k === "capture") {
        if (P === void 0)
          return;
        for (let Y = x.length - 1; Y >= 0 && !e.has(v); --Y) {
          const q = x[Y], G = P.get(q);
          if (G !== void 0) {
            l.set(v, q);
            for (const ae of G) {
              if (t.has(v))
                break;
              ae(v);
            }
          }
          if (Y === 0 && !R && N !== void 0) {
            const ae = N.get(q);
            if (ae !== void 0)
              for (const Ze of ae) {
                if (t.has(v))
                  break;
                Ze(v);
              }
          }
        }
      } else if (k === "bubble") {
        if (N === void 0)
          return;
        for (let Y = 0; Y < x.length && !e.has(v); ++Y) {
          const q = x[Y], G = N.get(q);
          if (G !== void 0) {
            l.set(v, q);
            for (const ae of G) {
              if (t.has(v))
                break;
              ae(v);
            }
          }
        }
      }
      i(v, "stopPropagation"), i(v, "stopImmediatePropagation"), f(v);
    };
    return c.displayName = "evtdUnifiedHandler", c;
  }
  function w() {
    const c = function(v) {
      const { type: C, eventPhase: S } = v;
      if (S !== 2)
        return;
      const R = y[C];
      R !== void 0 && R.forEach((D) => D(v));
    };
    return c.displayName = "evtdUnifiedWindowEventHandler", c;
  }
  const u = b(), m = w();
  function h(c, v) {
    const C = g[c];
    return C[v] === void 0 && (C[v] = /* @__PURE__ */ new Map(), window.addEventListener(v, u, c === "capture")), C[v];
  }
  function a(c) {
    return y[c] === void 0 && (y[c] = /* @__PURE__ */ new Set(), window.addEventListener(c, m)), y[c];
  }
  function O(c, v) {
    let C = c.get(v);
    return C === void 0 && c.set(v, C = /* @__PURE__ */ new Set()), C;
  }
  function B(c, v, C, S) {
    const R = g[v][C];
    if (R !== void 0) {
      const D = R.get(c);
      if (D !== void 0 && D.has(S))
        return !0;
    }
    return !1;
  }
  function I(c, v) {
    const C = y[c];
    return !!(C !== void 0 && C.has(v));
  }
  function V(c, v, C, S) {
    let R;
    if (typeof S == "object" && S.once === !0 ? R = (P) => {
      A(c, v, R, S), C(P);
    } : R = C, co(c, v, R, S))
      return;
    const k = S === !0 || typeof S == "object" && S.capture === !0 ? "capture" : "bubble", L = h(k, c), x = O(L, v);
    if (x.has(R) || x.add(R), v === window) {
      const P = a(c);
      P.has(R) || P.add(R);
    }
  }
  function A(c, v, C, S) {
    if (fo(c, v, C, S))
      return;
    const D = S === !0 || typeof S == "object" && S.capture === !0, k = D ? "capture" : "bubble", L = h(k, c), x = O(L, v);
    if (v === window && !B(v, D ? "bubble" : "capture", c, C) && I(c, C)) {
      const N = y[c];
      N.delete(C), N.size === 0 && (window.removeEventListener(c, m), y[c] = void 0);
    }
    x.has(C) && x.delete(C), x.size === 0 && L.delete(v), L.size === 0 && (window.removeEventListener(c, u, k === "capture"), g[k][c] = void 0);
  }
  return {
    on: V,
    off: A
  };
}
const { on: J, off: X } = ho();
function po(e) {
  const t = T(!!e.value);
  if (t.value)
    return Mt(t);
  const n = ce(e, (r) => {
    r && (t.value = !0, n());
  });
  return Mt(t);
}
function Ge(e) {
  const t = z(e), n = T(t.value);
  return ce(t, (r) => {
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
const vo = typeof window < "u";
let ze, Ue;
const mo = () => {
  var e, t;
  ze = vo ? (t = (e = document) === null || e === void 0 ? void 0 : e.fonts) === null || t === void 0 ? void 0 : t.ready : void 0, Ue = !1, ze !== void 0 ? ze.then(() => {
    Ue = !0;
  }) : Ue = !0;
};
mo();
function bo(e) {
  if (Ue)
    return;
  let t = !1;
  $e(() => {
    Ue || ze == null || ze.then(() => {
      t || e();
    });
  }), ve(() => {
    t = !0;
  });
}
function go(e, t) {
  return ce(e, (n) => {
    n !== void 0 && (t.value = n);
  }), z(() => e.value === void 0 ? t.value : e.value);
}
function Hn() {
  const e = T(!1);
  return $e(() => {
    e.value = !0;
  }), Mt(e);
}
function wo(e, t) {
  return z(() => {
    for (const n of t)
      if (e[n] !== void 0)
        return e[n];
    return e[t[t.length - 1]];
  });
}
const xo = (typeof window > "u" ? !1 : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
!window.MSStream;
function So() {
  return xo;
}
const yo = "n-internal-select-menu-body", kn = "n-drawer-body", Ln = "n-modal-body", Nn = "n-popover-body", Wn = "__disabled__";
function Ie(e) {
  const t = ne(Ln, null), n = ne(kn, null), r = ne(Nn, null), o = ne(yo, null), i = T();
  if (typeof document < "u") {
    i.value = document.fullscreenElement;
    const l = () => {
      i.value = document.fullscreenElement;
    };
    $e(() => {
      J("fullscreenchange", document, l);
    }), ve(() => {
      X("fullscreenchange", document, l);
    });
  }
  return Ge(() => {
    var l;
    const {
      to: s
    } = e;
    return s !== void 0 ? s === !1 ? Wn : s === !0 ? i.value || "body" : s : t != null && t.value ? (l = t.value.$el) !== null && l !== void 0 ? l : t.value : n != null && n.value ? n.value : r != null && r.value ? r.value : o != null && o.value ? o.value : s ?? (i.value || "body");
  });
}
Ie.tdkey = Wn;
Ie.propTo = {
  type: [String, Object, Boolean],
  default: void 0
};
function Co(e) {
  const t = {
    isDeactivated: !1
  };
  let n = !1;
  return Gr(() => {
    if (t.isDeactivated = !1, !n) {
      n = !0;
      return;
    }
    e();
  }), Kr(() => {
    t.isDeactivated = !0, n || (n = !0);
  }), t;
}
let at = [];
const Vn = /* @__PURE__ */ new WeakMap();
function Eo() {
  at.forEach((e) => e(...Vn.get(e))), at = [];
}
function $o(e, ...t) {
  Vn.set(e, t), !at.includes(e) && at.push(e) === 1 && requestAnimationFrame(Eo);
}
function ut(e) {
  return e.composedPath()[0] || null;
}
function tn(e) {
  return typeof e == "string" ? e.endsWith("px") ? Number(e.slice(0, e.length - 2)) : Number(e) : e;
}
function We(e, t) {
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
const nn = {
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
}, He = "^\\s*", ke = "\\s*$", we = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", xe = "([0-9A-Fa-f])", Se = "([0-9A-Fa-f]{2})", Oo = new RegExp(`${He}rgb\\s*\\(${we},${we},${we}\\)${ke}`), _o = new RegExp(`${He}rgba\\s*\\(${we},${we},${we},${we}\\)${ke}`), Mo = new RegExp(`${He}#${xe}${xe}${xe}${ke}`), To = new RegExp(`${He}#${Se}${Se}${Se}${ke}`), Po = new RegExp(`${He}#${xe}${xe}${xe}${xe}${ke}`), Ro = new RegExp(`${He}#${Se}${Se}${Se}${Se}${ke}`);
function ee(e) {
  return parseInt(e, 16);
}
function De(e) {
  try {
    let t;
    if (t = To.exec(e))
      return [ee(t[1]), ee(t[2]), ee(t[3]), 1];
    if (t = Oo.exec(e))
      return [Z(t[1]), Z(t[5]), Z(t[9]), 1];
    if (t = _o.exec(e))
      return [
        Z(t[1]),
        Z(t[5]),
        Z(t[9]),
        Xe(t[13])
      ];
    if (t = Mo.exec(e))
      return [
        ee(t[1] + t[1]),
        ee(t[2] + t[2]),
        ee(t[3] + t[3]),
        1
      ];
    if (t = Ro.exec(e))
      return [
        ee(t[1]),
        ee(t[2]),
        ee(t[3]),
        Xe(ee(t[4]) / 255)
      ];
    if (t = Po.exec(e))
      return [
        ee(t[1] + t[1]),
        ee(t[2] + t[2]),
        ee(t[3] + t[3]),
        Xe(ee(t[4] + t[4]) / 255)
      ];
    if (e in nn)
      return De(nn[e]);
    throw new Error(`[seemly/rgba]: Invalid color value ${e}.`);
  } catch (t) {
    throw t;
  }
}
function zo(e) {
  return e > 1 ? 1 : e < 0 ? 0 : e;
}
function Bo(e, t, n, r) {
  return `rgba(${Z(e)}, ${Z(t)}, ${Z(n)}, ${zo(r)})`;
}
function bt(e, t, n, r, o) {
  return Z((e * t * (1 - r) + n * r) / o);
}
function jn(e, t) {
  Array.isArray(e) || (e = De(e)), Array.isArray(t) || (t = De(t));
  const n = e[3], r = t[3], o = Xe(n + r - n * r);
  return Bo(bt(e[0], n, t[0], r, o), bt(e[1], n, t[1], r, o), bt(e[2], n, t[2], r, o), o);
}
function Je(e, t) {
  const [n, r, o, i = 1] = Array.isArray(e) ? e : De(e), { lightness: l = 1, alpha: s = 1 } = t;
  return Ao([n * l, r * l, o * l, i * s]);
}
function Xe(e) {
  const t = Math.round(Number(e) * 100) / 100;
  return t > 1 ? 1 : t < 0 ? 0 : t;
}
function Z(e) {
  const t = Math.round(Number(e));
  return t > 255 ? 255 : t < 0 ? 0 : t;
}
function Ao(e) {
  const [t, n, r] = e;
  return 3 in e ? `rgba(${Z(t)}, ${Z(n)}, ${Z(r)}, ${Xe(e[3])})` : `rgba(${Z(t)}, ${Z(n)}, ${Z(r)}, 1)`;
}
function Io(e = 8) {
  return Math.random().toString(16).slice(2, 2 + e);
}
function Rt(e, t, n = "default") {
  const r = t[n];
  if (r === void 0)
    throw new Error(`[vueuc/${e}]: slot[${n}] is empty.`);
  return r();
}
function zt(e, t = !0, n = []) {
  return e.forEach((r) => {
    if (r !== null) {
      if (typeof r != "object") {
        (typeof r == "string" || typeof r == "number") && n.push(An(String(r)));
        return;
      }
      if (Array.isArray(r)) {
        zt(r, t, n);
        return;
      }
      if (r.type === Fe) {
        if (r.children === null)
          return;
        Array.isArray(r.children) && zt(r.children, t, n);
      } else r.type !== Ht && n.push(r);
    }
  }), n;
}
function rn(e, t, n = "default") {
  const r = t[n];
  if (r === void 0)
    throw new Error(`[vueuc/${e}]: slot[${n}] is empty.`);
  const o = zt(r());
  if (o.length === 1)
    return o[0];
  throw new Error(`[vueuc/${e}]: slot[${n}] should have exactly one child.`);
}
let he = null;
function Un() {
  if (he === null && (he = document.getElementById("v-binder-view-measurer"), he === null)) {
    he = document.createElement("div"), he.id = "v-binder-view-measurer";
    const { style: e } = he;
    e.position = "fixed", e.left = "0", e.right = "0", e.top = "0", e.bottom = "0", e.pointerEvents = "none", e.visibility = "hidden", document.body.appendChild(he);
  }
  return he.getBoundingClientRect();
}
function Do(e, t) {
  const n = Un();
  return {
    top: t,
    left: e,
    height: 0,
    width: 0,
    right: n.width - e,
    bottom: n.height - t
  };
}
function gt(e) {
  const t = e.getBoundingClientRect(), n = Un();
  return {
    left: t.left - n.left,
    top: t.top - n.top,
    bottom: n.height + n.top - t.bottom,
    right: n.width + n.left - t.right,
    width: t.width,
    height: t.height
  };
}
function Fo(e) {
  return e.nodeType === 9 ? null : e.parentNode;
}
function Xn(e) {
  if (e === null)
    return null;
  const t = Fo(e);
  if (t === null)
    return null;
  if (t.nodeType === 9)
    return document;
  if (t.nodeType === 1) {
    const { overflow: n, overflowX: r, overflowY: o } = getComputedStyle(t);
    if (/(auto|scroll|overlay)/.test(n + o + r))
      return t;
  }
  return Xn(t);
}
const Ho = ie({
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
    je("VBinder", (t = In()) === null || t === void 0 ? void 0 : t.proxy);
    const n = ne("VBinder", null), r = T(null), o = (a) => {
      r.value = a, n && e.syncTargetWithParent && n.setTargetRef(a);
    };
    let i = [];
    const l = () => {
      let a = r.value;
      for (; a = Xn(a), a !== null; )
        i.push(a);
      for (const O of i)
        J("scroll", O, y, !0);
    }, s = () => {
      for (const a of i)
        X("scroll", a, y, !0);
      i = [];
    }, d = /* @__PURE__ */ new Set(), f = (a) => {
      d.size === 0 && l(), d.has(a) || d.add(a);
    }, g = (a) => {
      d.has(a) && d.delete(a), d.size === 0 && s();
    }, y = () => {
      $o(b);
    }, b = () => {
      d.forEach((a) => a());
    }, w = /* @__PURE__ */ new Set(), u = (a) => {
      w.size === 0 && J("resize", window, h), w.has(a) || w.add(a);
    }, m = (a) => {
      w.has(a) && w.delete(a), w.size === 0 && X("resize", window, h);
    }, h = () => {
      w.forEach((a) => a());
    };
    return ve(() => {
      X("resize", window, h), s();
    }), {
      targetRef: r,
      setTargetRef: o,
      addScrollListener: f,
      removeScrollListener: g,
      addResizeListener: u,
      removeResizeListener: m
    };
  },
  render() {
    return Rt("binder", this.$slots);
  }
}), ko = ie({
  name: "Target",
  setup() {
    const { setTargetRef: e, syncTarget: t } = ne("VBinder");
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
    return e ? dt(rn("follower", this.$slots), [
      [t]
    ]) : rn("follower", this.$slots);
  }
}), Te = "@@mmoContext", Lo = {
  mounted(e, { value: t }) {
    e[Te] = {
      handler: void 0
    }, typeof t == "function" && (e[Te].handler = t, J("mousemoveoutside", e, t));
  },
  updated(e, { value: t }) {
    const n = e[Te];
    typeof t == "function" ? n.handler ? n.handler !== t && (X("mousemoveoutside", e, n.handler), n.handler = t, J("mousemoveoutside", e, t)) : (e[Te].handler = t, J("mousemoveoutside", e, t)) : n.handler && (X("mousemoveoutside", e, n.handler), n.handler = void 0);
  },
  unmounted(e) {
    const { handler: t } = e[Te];
    t && X("mousemoveoutside", e, t), e[Te].handler = void 0;
  }
}, Pe = "@@coContext", on = {
  mounted(e, { value: t, modifiers: n }) {
    e[Pe] = {
      handler: void 0
    }, typeof t == "function" && (e[Pe].handler = t, J("clickoutside", e, t, {
      capture: n.capture
    }));
  },
  updated(e, { value: t, modifiers: n }) {
    const r = e[Pe];
    typeof t == "function" ? r.handler ? r.handler !== t && (X("clickoutside", e, r.handler, {
      capture: n.capture
    }), r.handler = t, J("clickoutside", e, t, {
      capture: n.capture
    })) : (e[Pe].handler = t, J("clickoutside", e, t, {
      capture: n.capture
    })) : r.handler && (X("clickoutside", e, r.handler, {
      capture: n.capture
    }), r.handler = void 0);
  },
  unmounted(e, { modifiers: t }) {
    const { handler: n } = e[Pe];
    n && X("clickoutside", e, n, {
      capture: t.capture
    }), e[Pe].handler = void 0;
  }
};
function No(e, t) {
  console.error(`[vdirs/${e}]: ${t}`);
}
class Wo {
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
    r.has(t) ? r.delete(t) : n === void 0 && No("z-index-manager/unregister-element", "Element not found when unregistering."), this.squashState();
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
const wt = new Wo(), Re = "@@ziContext", Yn = {
  mounted(e, t) {
    const { value: n = {} } = t, { zIndex: r, enabled: o } = n;
    e[Re] = {
      enabled: !!o,
      initialized: !1
    }, o && (wt.ensureZIndex(e, r), e[Re].initialized = !0);
  },
  updated(e, t) {
    const { value: n = {} } = t, { zIndex: r, enabled: o } = n, i = e[Re].enabled;
    o && !i && (wt.ensureZIndex(e, r), e[Re].initialized = !0), e[Re].enabled = !!o;
  },
  unmounted(e, t) {
    if (!e[Re].initialized)
      return;
    const { value: n = {} } = t, { zIndex: r } = n;
    wt.unregister(e, r);
  }
}, Vo = "@css-render/vue3-ssr";
function jo(e, t) {
  return `<style cssr-id="${e}">
${t}
</style>`;
}
function Uo(e, t, n) {
  const { styles: r, ids: o } = n;
  o.has(e) || r !== null && (o.add(e), r.push(jo(e, t)));
}
const Xo = typeof document < "u";
function ct() {
  if (Xo)
    return;
  const e = ne(Vo, null);
  if (e !== null)
    return {
      adapter: (t, n) => Uo(t, n, e),
      context: e
    };
}
function ln(e, t) {
  console.error(`[vueuc/${e}]: ${t}`);
}
function Yo(e) {
  let t = 0;
  for (let n = 0; n < e.length; ++n)
    e[n] === "&" && ++t;
  return t;
}
const Gn = /\s*,(?![^(]*\))\s*/g, Go = /\s+/g;
function Ko(e, t) {
  const n = [];
  return t.split(Gn).forEach((r) => {
    let o = Yo(r);
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
      i.forEach((s) => {
        e.forEach((d) => {
          l.push(s.replace("&", d));
        });
      }), i = l;
    }
    i.forEach((l) => n.push(l));
  }), n;
}
function Zo(e, t) {
  const n = [];
  return t.split(Gn).forEach((r) => {
    e.forEach((o) => {
      n.push((o && o + " ") + r);
    });
  }), n;
}
function qo(e) {
  let t = [""];
  return e.forEach((n) => {
    n = n && n.trim(), // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    n && (n.includes("&") ? t = Ko(t, n) : t = Zo(t, n));
  }), t.join(", ").replace(Go, " ");
}
function sn(e) {
  if (!e)
    return;
  const t = e.parentElement;
  t && t.removeChild(e);
}
function ft(e, t) {
  return (t ?? document.head).querySelector(`style[cssr-id="${e}"]`);
}
function Jo(e) {
  const t = document.createElement("style");
  return t.setAttribute("cssr-id", e), t;
}
function Qe(e) {
  return e ? /^\s*@(s|m)/.test(e) : !1;
}
const Qo = /[A-Z]/g;
function Kn(e) {
  return e.replace(Qo, (t) => "-" + t.toLowerCase());
}
function ei(e, t = "  ") {
  return typeof e == "object" && e !== null ? ` {
` + Object.entries(e).map((n) => t + `  ${Kn(n[0])}: ${n[1]};`).join(`
`) + `
` + t + "}" : `: ${e};`;
}
function ti(e, t, n) {
  return typeof e == "function" ? e({
    context: t.context,
    props: n
  }) : e;
}
function an(e, t, n, r) {
  if (!t)
    return "";
  const o = ti(t, n, r);
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
  return i.forEach((s) => {
    const d = o[s];
    if (s === "raw") {
      l.push(`
` + d + `
`);
      return;
    }
    s = Kn(s), d != null && l.push(`  ${s}${ei(d)}`);
  }), e && l.push("}"), l.join(`
`);
}
function Bt(e, t, n) {
  e && e.forEach((r) => {
    if (Array.isArray(r))
      Bt(r, t, n);
    else if (typeof r == "function") {
      const o = r(t);
      Array.isArray(o) ? Bt(o, t, n) : o && n(o);
    } else r && n(r);
  });
}
function Zn(e, t, n, r, o) {
  const i = e.$;
  let l = "";
  if (!i || typeof i == "string")
    Qe(i) ? l = i : t.push(i);
  else if (typeof i == "function") {
    const f = i({
      context: r.context,
      props: o
    });
    Qe(f) ? l = f : t.push(f);
  } else if (i.before && i.before(r.context), !i.$ || typeof i.$ == "string")
    Qe(i.$) ? l = i.$ : t.push(i.$);
  else if (i.$) {
    const f = i.$({
      context: r.context,
      props: o
    });
    Qe(f) ? l = f : t.push(f);
  }
  const s = qo(t), d = an(s, e.props, r, o);
  l ? n.push(`${l} {`) : d.length && n.push(d), e.children && Bt(e.children, {
    context: r.context,
    props: o
  }, (f) => {
    if (typeof f == "string") {
      const g = an(s, { raw: f }, r, o);
      n.push(g);
    } else
      Zn(f, t, n, r, o);
  }), t.pop(), l && n.push("}"), i && i.after && i.after(r.context);
}
function ni(e, t, n) {
  const r = [];
  return Zn(e, [], r, t, n), r.join(`

`);
}
function At(e) {
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
function ri(e, t, n, r) {
  const { els: o } = t;
  if (n === void 0)
    o.forEach(sn), t.els = [];
  else {
    const i = ft(n, r);
    i && o.includes(i) && (sn(i), t.els = o.filter((l) => l !== i));
  }
}
function un(e, t) {
  e.push(t);
}
function oi(e, t, n, r, o, i, l, s, d) {
  let f;
  if (n === void 0 && (f = t.render(r), n = At(f)), d) {
    d.adapter(n, f ?? t.render(r));
    return;
  }
  s === void 0 && (s = document.head);
  const g = ft(n, s);
  if (g !== null && !i)
    return g;
  const y = g ?? Jo(n);
  if (f === void 0 && (f = t.render(r)), y.textContent = f, g !== null)
    return g;
  if (l) {
    const b = s.querySelector(`meta[name="${l}"]`);
    if (b)
      return s.insertBefore(y, b), un(t.els, y), y;
  }
  return o ? s.insertBefore(y, s.querySelector("style, link")) : s.appendChild(y), un(t.els, y), y;
}
function ii(e) {
  return ni(this, this.instance, e);
}
function li(e = {}) {
  const { id: t, ssr: n, props: r, head: o = !1, force: i = !1, anchorMetaName: l, parent: s } = e;
  return oi(this.instance, this, t, r, o, i, l, s, n);
}
function si(e = {}) {
  const { id: t, parent: n } = e;
  ri(this.instance, this, t, n);
}
const et = function(e, t, n, r) {
  return {
    instance: e,
    $: t,
    props: n,
    children: r,
    els: [],
    render: ii,
    mount: li,
    unmount: si
  };
}, ai = function(e, t, n, r) {
  return Array.isArray(t) ? et(e, { $: null }, null, t) : Array.isArray(n) ? et(e, t, null, n) : Array.isArray(r) ? et(e, t, n, r) : et(e, t, n, null);
};
function qn(e = {}) {
  const t = {
    c: (...n) => ai(t, ...n),
    use: (n, ...r) => n.install(t, ...r),
    find: ft,
    context: {},
    config: e
  };
  return t;
}
function ui(e, t) {
  if (e === void 0)
    return !1;
  if (t) {
    const { context: { ids: n } } = t;
    return n.has(e);
  }
  return ft(e) !== null;
}
const { c: tt } = qn(), di = "vueuc-style";
function dn(e) {
  return typeof e == "string" ? document.querySelector(e) : e();
}
const ci = ie({
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
      showTeleport: po(pe(e, "show")),
      mergedTo: z(() => {
        const { to: t } = e;
        return t ?? "body";
      })
    };
  },
  render() {
    return this.showTeleport ? this.disabled ? Rt("lazy-teleport", this.$slots) : M(Zr, {
      disabled: this.disabled,
      to: this.mergedTo
    }, Rt("lazy-teleport", this.$slots)) : null;
  }
}), nt = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, cn = {
  start: "end",
  center: "center",
  end: "start"
}, xt = {
  top: "height",
  bottom: "height",
  left: "width",
  right: "width"
}, fi = {
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
}, hi = {
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
}, pi = {
  "bottom-start": "right",
  "bottom-end": "left",
  "top-start": "right",
  "top-end": "left",
  "right-start": "bottom",
  "right-end": "top",
  "left-start": "bottom",
  "left-end": "top"
}, fn = {
  top: !0,
  bottom: !1,
  left: !0,
  right: !1
  // left--
}, hn = {
  top: "end",
  bottom: "start",
  left: "end",
  right: "start"
};
function vi(e, t, n, r, o, i) {
  if (!o || i)
    return { placement: e, top: 0, left: 0 };
  const [l, s] = e.split("-");
  let d = s ?? "center", f = {
    top: 0,
    left: 0
  };
  const g = (w, u, m) => {
    let h = 0, a = 0;
    const O = n[w] - t[u] - t[w];
    return O > 0 && r && (m ? a = fn[u] ? O : -O : h = fn[u] ? O : -O), {
      left: h,
      top: a
    };
  }, y = l === "left" || l === "right";
  if (d !== "center") {
    const w = pi[e], u = nt[w], m = xt[w];
    if (n[m] > t[m]) {
      if (
        // current space is not enough
        // ----------[ target ]---------|
        // -------[     follower        ]
        t[w] + t[m] < n[m]
      ) {
        const h = (n[m] - t[m]) / 2;
        t[w] < h || t[u] < h ? t[w] < t[u] ? (d = cn[s], f = g(m, u, y)) : f = g(m, w, y) : d = "center";
      }
    } else n[m] < t[m] && t[u] < 0 && // opposite align has larger space
    // ------------[   target   ]
    // ----------------[follower]
    t[w] > t[u] && (d = cn[s]);
  } else {
    const w = l === "bottom" || l === "top" ? "left" : "top", u = nt[w], m = xt[w], h = (n[m] - t[m]) / 2;
    // center is not enough
    // ----------- [ target ]--|
    // -------[     follower     ]
    (t[w] < h || t[u] < h) && (t[w] > t[u] ? (d = hn[w], f = g(m, w, y)) : (d = hn[u], f = g(m, u, y)));
  }
  let b = l;
  return (
    // space is not enough
    t[l] < n[xt[l]] && // opposite position's space is larger
    t[l] < t[nt[l]] && (b = nt[l]), {
      placement: d !== "center" ? `${b}-${d}` : b,
      left: f.left,
      top: f.top
    }
  );
}
function mi(e, t) {
  return t ? hi[e] : fi[e];
}
function bi(e, t, n, r, o, i) {
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
const gi = tt([
  tt(".v-binder-follower-container", {
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    height: "0",
    pointerEvents: "none",
    zIndex: "auto"
  }),
  tt(".v-binder-follower-content", {
    position: "absolute",
    zIndex: "auto"
  }, [
    tt("> *", {
      pointerEvents: "all"
    })
  ])
]), wi = ie({
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
    const t = ne("VBinder"), n = Ge(() => e.enabled !== void 0 ? e.enabled : e.show), r = T(null), o = T(null), i = () => {
      const { syncTrigger: b } = e;
      b.includes("scroll") && t.addScrollListener(d), b.includes("resize") && t.addResizeListener(d);
    }, l = () => {
      t.removeScrollListener(d), t.removeResizeListener(d);
    };
    $e(() => {
      n.value && (d(), i());
    });
    const s = ct();
    gi.mount({
      id: "vueuc/binder",
      head: !0,
      anchorMetaName: di,
      ssr: s
    }), ve(() => {
      l();
    }), bo(() => {
      n.value && d();
    });
    const d = () => {
      if (!n.value)
        return;
      const b = r.value;
      if (b === null)
        return;
      const w = t.targetRef, { x: u, y: m, overlap: h } = e, a = u !== void 0 && m !== void 0 ? Do(u, m) : gt(w);
      b.style.setProperty("--v-target-width", `${Math.round(a.width)}px`), b.style.setProperty("--v-target-height", `${Math.round(a.height)}px`);
      const { width: O, minWidth: B, placement: I, internalShift: V, flip: A } = e;
      b.setAttribute("v-placement", I), h ? b.setAttribute("v-overlap", "") : b.removeAttribute("v-overlap");
      const { style: c } = b;
      O === "target" ? c.width = `${a.width}px` : O !== void 0 ? c.width = O : c.width = "", B === "target" ? c.minWidth = `${a.width}px` : B !== void 0 ? c.minWidth = B : c.minWidth = "";
      const v = gt(b), C = gt(o.value), { left: S, top: R, placement: D } = vi(I, a, v, V, A, h), k = mi(D, h), { left: L, top: x, transform: P } = bi(D, C, a, R, S, h);
      b.setAttribute("v-placement", D), b.style.setProperty("--v-offset-left", `${Math.round(S)}px`), b.style.setProperty("--v-offset-top", `${Math.round(R)}px`), b.style.transform = `translateX(${L}) translateY(${x}) ${P}`, b.style.setProperty("--v-transform-origin", k), b.style.transformOrigin = k;
    };
    ce(n, (b) => {
      b ? (i(), f()) : l();
    });
    const f = () => {
      qr().then(d).catch((b) => console.error(b));
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
      ce(pe(e, b), d);
    }), ["teleportDisabled"].forEach((b) => {
      ce(pe(e, b), f);
    }), ce(pe(e, "syncTrigger"), (b) => {
      b.includes("resize") ? t.addResizeListener(d) : t.removeResizeListener(d), b.includes("scroll") ? t.addScrollListener(d) : t.removeScrollListener(d);
    });
    const g = Hn(), y = Ge(() => {
      const { to: b } = e;
      if (b !== void 0)
        return b;
      g.value;
    });
    return {
      VBinder: t,
      mergedEnabled: n,
      offsetContainerRef: o,
      followerRef: r,
      mergedTo: y,
      syncPosition: d
    };
  },
  render() {
    return M(ci, {
      show: this.show,
      to: this.mergedTo,
      disabled: this.teleportDisabled
    }, {
      default: () => {
        var e, t;
        const n = M("div", {
          class: ["v-binder-follower-container", this.containerClass],
          ref: "offsetContainerRef"
        }, [
          M("div", {
            class: "v-binder-follower-content",
            ref: "followerRef"
          }, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e))
        ]);
        return this.zindexable ? dt(n, [
          [
            Yn,
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
var Ce = [], xi = function() {
  return Ce.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, Si = function() {
  return Ce.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, pn = "ResizeObserver loop completed with undelivered notifications.", yi = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: pn
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = pn), window.dispatchEvent(e);
}, Ke;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(Ke || (Ke = {}));
var Ee = function(e) {
  return Object.freeze(e);
}, Ci = /* @__PURE__ */ function() {
  function e(t, n) {
    this.inlineSize = t, this.blockSize = n, Ee(this);
  }
  return e;
}(), Jn = function() {
  function e(t, n, r, o) {
    return this.x = t, this.y = n, this.width = r, this.height = o, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Ee(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, n = t.x, r = t.y, o = t.top, i = t.right, l = t.bottom, s = t.left, d = t.width, f = t.height;
    return { x: n, y: r, top: o, right: i, bottom: l, left: s, width: d, height: f };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), Lt = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, Qn = function(e) {
  if (Lt(e)) {
    var t = e.getBBox(), n = t.width, r = t.height;
    return !n && !r;
  }
  var o = e, i = o.offsetWidth, l = o.offsetHeight;
  return !(i || l || e.getClientRects().length);
}, vn = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var n = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(n && e instanceof n.Element);
}, Ei = function(e) {
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
}, Ye = typeof window < "u" ? window : {}, rt = /* @__PURE__ */ new WeakMap(), mn = /auto|scroll/, $i = /^tb|vertical/, Oi = /msie|trident/i.test(Ye.navigator && Ye.navigator.userAgent), ue = function(e) {
  return parseFloat(e || "0");
}, Be = function(e, t, n) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = !1), new Ci((n ? t : e) || 0, (n ? e : t) || 0);
}, bn = Ee({
  devicePixelContentBoxSize: Be(),
  borderBoxSize: Be(),
  contentBoxSize: Be(),
  contentRect: new Jn(0, 0, 0, 0)
}), er = function(e, t) {
  if (t === void 0 && (t = !1), rt.has(e) && !t)
    return rt.get(e);
  if (Qn(e))
    return rt.set(e, bn), bn;
  var n = getComputedStyle(e), r = Lt(e) && e.ownerSVGElement && e.getBBox(), o = !Oi && n.boxSizing === "border-box", i = $i.test(n.writingMode || ""), l = !r && mn.test(n.overflowY || ""), s = !r && mn.test(n.overflowX || ""), d = r ? 0 : ue(n.paddingTop), f = r ? 0 : ue(n.paddingRight), g = r ? 0 : ue(n.paddingBottom), y = r ? 0 : ue(n.paddingLeft), b = r ? 0 : ue(n.borderTopWidth), w = r ? 0 : ue(n.borderRightWidth), u = r ? 0 : ue(n.borderBottomWidth), m = r ? 0 : ue(n.borderLeftWidth), h = y + f, a = d + g, O = m + w, B = b + u, I = s ? e.offsetHeight - B - e.clientHeight : 0, V = l ? e.offsetWidth - O - e.clientWidth : 0, A = o ? h + O : 0, c = o ? a + B : 0, v = r ? r.width : ue(n.width) - A - V, C = r ? r.height : ue(n.height) - c - I, S = v + h + V + O, R = C + a + I + B, D = Ee({
    devicePixelContentBoxSize: Be(Math.round(v * devicePixelRatio), Math.round(C * devicePixelRatio), i),
    borderBoxSize: Be(S, R, i),
    contentBoxSize: Be(v, C, i),
    contentRect: new Jn(y, d, v, C)
  });
  return rt.set(e, D), D;
}, tr = function(e, t, n) {
  var r = er(e, n), o = r.borderBoxSize, i = r.contentBoxSize, l = r.devicePixelContentBoxSize;
  switch (t) {
    case Ke.DEVICE_PIXEL_CONTENT_BOX:
      return l;
    case Ke.BORDER_BOX:
      return o;
    default:
      return i;
  }
}, _i = /* @__PURE__ */ function() {
  function e(t) {
    var n = er(t);
    this.target = t, this.contentRect = n.contentRect, this.borderBoxSize = Ee([n.borderBoxSize]), this.contentBoxSize = Ee([n.contentBoxSize]), this.devicePixelContentBoxSize = Ee([n.devicePixelContentBoxSize]);
  }
  return e;
}(), nr = function(e) {
  if (Qn(e))
    return 1 / 0;
  for (var t = 0, n = e.parentNode; n; )
    t += 1, n = n.parentNode;
  return t;
}, Mi = function() {
  var e = 1 / 0, t = [];
  Ce.forEach(function(l) {
    if (l.activeTargets.length !== 0) {
      var s = [];
      l.activeTargets.forEach(function(f) {
        var g = new _i(f.target), y = nr(f.target);
        s.push(g), f.lastReportedSize = tr(f.target, f.observedBox), y < e && (e = y);
      }), t.push(function() {
        l.callback.call(l.observer, s, l.observer);
      }), l.activeTargets.splice(0, l.activeTargets.length);
    }
  });
  for (var n = 0, r = t; n < r.length; n++) {
    var o = r[n];
    o();
  }
  return e;
}, gn = function(e) {
  Ce.forEach(function(n) {
    n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(o) {
      o.isActive() && (nr(o.target) > e ? n.activeTargets.push(o) : n.skippedTargets.push(o));
    });
  });
}, Ti = function() {
  var e = 0;
  for (gn(e); xi(); )
    e = Mi(), gn(e);
  return Si() && yi(), e > 0;
}, St, rr = [], Pi = function() {
  return rr.splice(0).forEach(function(e) {
    return e();
  });
}, Ri = function(e) {
  if (!St) {
    var t = 0, n = document.createTextNode(""), r = { characterData: !0 };
    new MutationObserver(function() {
      return Pi();
    }).observe(n, r), St = function() {
      n.textContent = "".concat(t ? t-- : t++);
    };
  }
  rr.push(e), St();
}, zi = function(e) {
  Ri(function() {
    requestAnimationFrame(e);
  });
}, st = 0, Bi = function() {
  return !!st;
}, Ai = 250, Ii = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, wn = [
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
], xn = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, yt = !1, Di = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var n = this;
    if (t === void 0 && (t = Ai), !yt) {
      yt = !0;
      var r = xn(t);
      zi(function() {
        var o = !1;
        try {
          o = Ti();
        } finally {
          if (yt = !1, t = r - xn(), !Bi())
            return;
          o ? n.run(1e3) : t > 0 ? n.run(t) : n.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, n = function() {
      return t.observer && t.observer.observe(document.body, Ii);
    };
    document.body ? n() : Ye.addEventListener("DOMContentLoaded", n);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), wn.forEach(function(n) {
      return Ye.addEventListener(n, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), wn.forEach(function(n) {
      return Ye.removeEventListener(n, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), It = new Di(), Sn = function(e) {
  !st && e > 0 && It.start(), st += e, !st && It.stop();
}, Fi = function(e) {
  return !Lt(e) && !Ei(e) && getComputedStyle(e).display === "inline";
}, Hi = function() {
  function e(t, n) {
    this.target = t, this.observedBox = n || Ke.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = tr(this.target, this.observedBox, !0);
    return Fi(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), ki = /* @__PURE__ */ function() {
  function e(t, n) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = n;
  }
  return e;
}(), ot = /* @__PURE__ */ new WeakMap(), yn = function(e, t) {
  for (var n = 0; n < e.length; n += 1)
    if (e[n].target === t)
      return n;
  return -1;
}, it = function() {
  function e() {
  }
  return e.connect = function(t, n) {
    var r = new ki(t, n);
    ot.set(t, r);
  }, e.observe = function(t, n, r) {
    var o = ot.get(t), i = o.observationTargets.length === 0;
    yn(o.observationTargets, n) < 0 && (i && Ce.push(o), o.observationTargets.push(new Hi(n, r && r.box)), Sn(1), It.schedule());
  }, e.unobserve = function(t, n) {
    var r = ot.get(t), o = yn(r.observationTargets, n), i = r.observationTargets.length === 1;
    o >= 0 && (i && Ce.splice(Ce.indexOf(r), 1), r.observationTargets.splice(o, 1), Sn(-1));
  }, e.disconnect = function(t) {
    var n = this, r = ot.get(t);
    r.observationTargets.slice().forEach(function(o) {
      return n.unobserve(t, o.target);
    }), r.activeTargets.splice(0, r.activeTargets.length);
  }, e;
}(), Li = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    it.connect(this, t);
  }
  return e.prototype.observe = function(t, n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!vn(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    it.observe(this, t, n);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!vn(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    it.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    it.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
class Ni {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || Li)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
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
const Cn = new Ni(), En = ie({
  name: "ResizeObserver",
  props: {
    onResize: Function
  },
  setup(e) {
    let t = !1;
    const n = In().proxy;
    function r(o) {
      const { onResize: i } = e;
      i !== void 0 && i(o);
    }
    $e(() => {
      const o = n.$el;
      if (o === void 0) {
        ln("resize-observer", "$el does not exist.");
        return;
      }
      if (o.nextElementSibling !== o.nextSibling && o.nodeType === 3 && o.nodeValue !== "") {
        ln("resize-observer", "$el can not be observed (it may be a text node).");
        return;
      }
      o.nextElementSibling !== null && (Cn.registerHandler(o.nextElementSibling, r), t = !0);
    }), ve(() => {
      t && Cn.unregisterHandler(n.$el.nextElementSibling);
    });
  },
  render() {
    return Tt(this.$slots, "default");
  }
});
function or(e) {
  return e instanceof HTMLElement;
}
function ir(e) {
  for (let t = 0; t < e.childNodes.length; t++) {
    const n = e.childNodes[t];
    if (or(n) && (sr(n) || ir(n)))
      return !0;
  }
  return !1;
}
function lr(e) {
  for (let t = e.childNodes.length - 1; t >= 0; t--) {
    const n = e.childNodes[t];
    if (or(n) && (sr(n) || lr(n)))
      return !0;
  }
  return !1;
}
function sr(e) {
  if (!Wi(e))
    return !1;
  try {
    e.focus({ preventScroll: !0 });
  } catch {
  }
  return document.activeElement === e;
}
function Wi(e) {
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
let Le = [];
const Vi = ie({
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
    const t = Io(), n = T(null), r = T(null);
    let o = !1, i = !1;
    const l = typeof document > "u" ? null : document.activeElement;
    function s() {
      return Le[Le.length - 1] === t;
    }
    function d(h) {
      var a;
      h.code === "Escape" && s() && ((a = e.onEsc) === null || a === void 0 || a.call(e, h));
    }
    $e(() => {
      ce(() => e.active, (h) => {
        h ? (y(), J("keydown", document, d)) : (X("keydown", document, d), o && b());
      }, {
        immediate: !0
      });
    }), ve(() => {
      X("keydown", document, d), o && b();
    });
    function f(h) {
      if (!i && s()) {
        const a = g();
        if (a === null || a.contains(ut(h)))
          return;
        w("first");
      }
    }
    function g() {
      const h = n.value;
      if (h === null)
        return null;
      let a = h;
      for (; a = a.nextSibling, !(a === null || a instanceof Element && a.tagName === "DIV"); )
        ;
      return a;
    }
    function y() {
      var h;
      if (!e.disabled) {
        if (Le.push(t), e.autoFocus) {
          const { initialFocusTo: a } = e;
          a === void 0 ? w("first") : (h = dn(a)) === null || h === void 0 || h.focus({ preventScroll: !0 });
        }
        o = !0, document.addEventListener("focus", f, !0);
      }
    }
    function b() {
      var h;
      if (e.disabled || (document.removeEventListener("focus", f, !0), Le = Le.filter((O) => O !== t), s()))
        return;
      const { finalFocusTo: a } = e;
      a !== void 0 ? (h = dn(a)) === null || h === void 0 || h.focus({ preventScroll: !0 }) : e.returnFocusOnDeactivated && l instanceof HTMLElement && (i = !0, l.focus({ preventScroll: !0 }), i = !1);
    }
    function w(h) {
      if (s() && e.active) {
        const a = n.value, O = r.value;
        if (a !== null && O !== null) {
          const B = g();
          if (B == null || B === O) {
            i = !0, a.focus({ preventScroll: !0 }), i = !1;
            return;
          }
          i = !0;
          const I = h === "first" ? ir(B) : lr(B);
          i = !1, I || (i = !0, a.focus({ preventScroll: !0 }), i = !1);
        }
      }
    }
    function u(h) {
      if (i)
        return;
      const a = g();
      a !== null && (h.relatedTarget !== null && a.contains(h.relatedTarget) ? w("last") : w("first"));
    }
    function m(h) {
      i || (h.relatedTarget !== null && h.relatedTarget === n.value ? w("last") : w("first"));
    }
    return {
      focusableStartRef: n,
      focusableEndRef: r,
      focusableStyle: "position: absolute; height: 0; width: 0;",
      handleStartFocus: u,
      handleEndFocus: m
    };
  },
  render() {
    const { default: e } = this.$slots;
    if (e === void 0)
      return null;
    if (this.disabled)
      return e();
    const { active: t, focusableStyle: n } = this;
    return M(Fe, null, [
      M("div", {
        "aria-hidden": "true",
        tabindex: t ? "0" : "-1",
        ref: "focusableStartRef",
        style: n,
        onFocus: this.handleStartFocus
      }),
      e(),
      M("div", {
        "aria-hidden": "true",
        style: n,
        ref: "focusableEndRef",
        tabindex: t ? "0" : "-1",
        onFocus: this.handleEndFocus
      })
    ]);
  }
}), ji = /^(\d|\.)+$/, $n = /(\d|\.)+/;
function Ct(e, {
  c: t = 1,
  offset: n = 0,
  attachPx: r = !0
} = {}) {
  if (typeof e == "number") {
    const o = (e + n) * t;
    return o === 0 ? "0" : `${o}px`;
  } else if (typeof e == "string")
    if (ji.test(e)) {
      const o = (Number(e) + n) * t;
      return r ? o === 0 ? "0" : `${o}px` : `${o}`;
    } else {
      const o = $n.exec(e);
      return o ? e.replace($n, String((Number(o[0]) + n) * t)) : e;
    }
  return e;
}
function On(e) {
  const {
    left: t,
    right: n,
    top: r,
    bottom: o
  } = We(e);
  return `${r} ${t} ${o} ${n}`;
}
var _n = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_11684_UKXSMLHMUWFBWKVP", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.97.2", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-5a8078c568-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
function Ui(e) {
  let t = ".", n = "__", r = "--", o;
  {
    let u = e.blockPrefix;
    u && (t = u), u = e.elementPrefix, u && (n = u), u = e.modifierPrefix, u && (r = u);
  }
  const i = {
    install(u) {
      o = u.c;
      const m = u.context;
      m.bem = {}, m.bem.b = null, m.bem.els = null;
    }
  };
  function l(u) {
    let m, h;
    return {
      before(a) {
        m = a.bem.b, h = a.bem.els, a.bem.els = null;
      },
      after(a) {
        a.bem.b = m, a.bem.els = h;
      },
      $({ context: a, props: O }) {
        return u = typeof u == "string" ? u : u({ context: a, props: O }), a.bem.b = u, `${(O == null ? void 0 : O.bPrefix) || t}${a.bem.b}`;
      }
    };
  }
  function s(u) {
    let m;
    return {
      before(h) {
        m = h.bem.els;
      },
      after(h) {
        h.bem.els = m;
      },
      $({ context: h, props: a }) {
        return u = typeof u == "string" ? u : u({ context: h, props: a }), h.bem.els = u.split(",").map((O) => O.trim()), h.bem.els.map((O) => `${(a == null ? void 0 : a.bPrefix) || t}${h.bem.b}${n}${O}`).join(", ");
      }
    };
  }
  function d(u) {
    return {
      $({ context: m, props: h }) {
        u = typeof u == "string" ? u : u({ context: m, props: h });
        const a = u.split(",").map((I) => I.trim());
        function O(I) {
          return a.map((V) => `&${(h == null ? void 0 : h.bPrefix) || t}${m.bem.b}${I !== void 0 ? `${n}${I}` : ""}${r}${V}`).join(", ");
        }
        const B = m.bem.els;
        if (B !== null) {
          if (_n.NODE_ENV !== "production" && B.length >= 2)
            throw Error(`[css-render/plugin-bem]: m(${u}) is invalid, using modifier inside multiple elements is not allowed`);
          return O(B[0]);
        } else
          return O();
      }
    };
  }
  function f(u) {
    return {
      $({ context: m, props: h }) {
        u = typeof u == "string" ? u : u({ context: m, props: h });
        const a = m.bem.els;
        if (_n.NODE_ENV !== "production" && a !== null && a.length >= 2)
          throw Error(`[css-render/plugin-bem]: notM(${u}) is invalid, using modifier inside multiple elements is not allowed`);
        return `&:not(${(h == null ? void 0 : h.bPrefix) || t}${m.bem.b}${a !== null && a.length > 0 ? `${n}${a[0]}` : ""}${r}${u})`;
      }
    };
  }
  return Object.assign(i, {
    cB: (...u) => o(l(u[0]), u[1], u[2]),
    cE: (...u) => o(s(u[0]), u[1], u[2]),
    cM: (...u) => o(d(u[0]), u[1], u[2]),
    cNotM: (...u) => o(f(u[0]), u[1], u[2])
  }), i;
}
const Xi = "n", Yi = `.${Xi}-`, Gi = "__", Ki = "--", ar = qn(), ur = Ui({
  blockPrefix: Yi,
  elementPrefix: Gi,
  modifierPrefix: Ki
});
ar.use(ur);
const {
  c: H,
  find: Ll
} = ar, {
  cB: te,
  cE: ye,
  cM: se,
  cNotM: Et
} = ur, Zi = (...e) => H(">", [te(...e)]);
let $t;
function qi() {
  return $t === void 0 && ($t = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")), $t;
}
const Mn = /* @__PURE__ */ new Set();
function Ne(e, t) {
  const n = `[naive/${e}]: ${t}`;
  Mn.has(n) || (Mn.add(n), console.error(n));
}
function Tn(e, t) {
  console.error(`[naive/${e}]: ${t}`);
}
function Ji(e, t) {
  throw new Error(`[naive/${e}]: ${t}`);
}
function Ve(e, ...t) {
  if (Array.isArray(e))
    e.forEach((n) => Ve(n, ...t));
  else
    return e(...t);
}
function Dt(e, t = !0, n = []) {
  return e.forEach((r) => {
    if (r !== null) {
      if (typeof r != "object") {
        (typeof r == "string" || typeof r == "number") && n.push(An(String(r)));
        return;
      }
      if (Array.isArray(r)) {
        Dt(r, t, n);
        return;
      }
      if (r.type === Fe) {
        if (r.children === null) return;
        Array.isArray(r.children) && Dt(r.children, t, n);
      } else {
        if (r.type === Ht && t) return;
        n.push(r);
      }
    }
  }), n;
}
function Qi(e, t = "default", n = void 0) {
  const r = e[t];
  if (!r)
    return Tn("getFirstSlotVNode", `slot[${t}] is empty`), null;
  const o = Dt(r(n));
  return o.length === 1 ? o[0] : (Tn("getFirstSlotVNode", `slot[${t}] should have exactly one child`), null);
}
function el(e, t = [], n) {
  const r = {};
  return t.forEach((o) => {
    r[o] = e[o];
  }), Object.assign(r, n);
}
function Nt(e) {
  return e.some((t) => Jr(t) ? !(t.type === Ht || t.type === Fe && !Nt(t.children)) : !0) ? e : null;
}
function Ot(e, t) {
  const n = e && Nt(e());
  return t(n || null);
}
function Pn(e) {
  return !(e && Nt(e()));
}
const Rn = ie({
  render() {
    var e, t;
    return (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e);
  }
}), ht = "n-config-provider", tl = "n";
function Wt(e = {}, t = {
  defaultBordered: !0
}) {
  const n = ne(ht, null);
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
    mergedClsPrefixRef: n ? n.mergedClsPrefixRef : Qr(tl),
    namespaceRef: z(() => n == null ? void 0 : n.mergedNamespaceRef.value)
  };
}
function dr(e, t, n, r) {
  n || Ji("useThemeClass", "cssVarsRef is not passed");
  const o = ne(ht, null), i = o == null ? void 0 : o.mergedThemeHashRef, l = o == null ? void 0 : o.styleMountTarget, s = T(""), d = ct();
  let f;
  const g = `__${e}`, y = () => {
    let b = g;
    const w = i == null ? void 0 : i.value;
    w && (b += `-${w}`);
    const {
      themeOverrides: u,
      builtinThemeOverrides: m
    } = r;
    u && (b += `-${At(JSON.stringify(u))}`), m && (b += `-${At(JSON.stringify(m))}`), s.value = b, f = () => {
      const h = n.value;
      let a = "";
      for (const O in h)
        a += `${O}: ${h[O]};`;
      H(`.${b}`, a).mount({
        id: b,
        ssr: d,
        parent: l
      }), f = void 0;
    };
  };
  return Ae(() => {
    y();
  }), {
    themeClass: s,
    onRender: () => {
      f == null || f();
    }
  };
}
const Ft = "naive-ui-style";
function nl(e, t, n) {
  if (!t) return;
  const r = ct(), o = z(() => {
    const {
      value: s
    } = t;
    if (!s)
      return;
    const d = s[e];
    if (d)
      return d;
  }), i = ne(ht, null), l = () => {
    Ae(() => {
      const {
        value: s
      } = n, d = `${s}${e}Rtl`;
      if (ui(d, r)) return;
      const {
        value: f
      } = o;
      f && f.style.mount({
        id: d,
        head: !0,
        anchorMetaName: Ft,
        props: {
          bPrefix: s ? `.${s}-` : void 0
        },
        ssr: r,
        parent: i == null ? void 0 : i.styleMountTarget
      });
    });
  };
  return r ? l() : Dn(l), o;
}
const Vt = {
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
  fontSize: rl,
  fontFamily: ol,
  lineHeight: il
} = Vt, ll = H("body", `
 margin: 0;
 font-size: ${rl};
 font-family: ${ol};
 line-height: ${il};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [H("input", `
 font-family: inherit;
 font-size: inherit;
 `)]);
function me(e, t, n, r, o, i) {
  const l = ct(), s = ne(ht, null);
  if (n) {
    const f = () => {
      const g = i == null ? void 0 : i.value;
      n.mount({
        id: g === void 0 ? t : g + t,
        head: !0,
        props: {
          bPrefix: g ? `.${g}-` : void 0
        },
        anchorMetaName: Ft,
        ssr: l,
        parent: s == null ? void 0 : s.styleMountTarget
      }), s != null && s.preflightStyleDisabled || ll.mount({
        id: "n-global",
        head: !0,
        anchorMetaName: Ft,
        ssr: l,
        parent: s == null ? void 0 : s.styleMountTarget
      });
    };
    l ? f() : Dn(f);
  }
  return z(() => {
    var f;
    const {
      theme: {
        common: g,
        self: y,
        peers: b = {}
      } = {},
      themeOverrides: w = {},
      builtinThemeOverrides: u = {}
    } = o, {
      common: m,
      peers: h
    } = w, {
      common: a = void 0,
      [e]: {
        common: O = void 0,
        self: B = void 0,
        peers: I = {}
      } = {}
    } = (s == null ? void 0 : s.mergedThemeRef.value) || {}, {
      common: V = void 0,
      [e]: A = {}
    } = (s == null ? void 0 : s.mergedThemeOverridesRef.value) || {}, {
      common: c,
      peers: v = {}
    } = A, C = qe({}, g || O || a || r.common, V, c, m), S = qe(
      // {}, executed every time, no need for empty obj
      (f = y || B || r.self) === null || f === void 0 ? void 0 : f(C),
      u,
      A,
      w
    );
    return {
      common: C,
      self: S,
      peers: qe({}, r.peers, I, b),
      peerOverrides: qe({}, u.peers, v, h)
    };
  });
}
me.props = {
  theme: Object,
  themeOverrides: Object,
  builtinThemeOverrides: Object
};
const $ = {
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
}, sl = De($.neutralBase), cr = De($.neutralInvertBase), al = `rgba(${cr.slice(0, 3).join(", ")}, `;
function zn(e) {
  return `${al + String(e)})`;
}
function K(e) {
  const t = Array.from(cr);
  return t[3] = Number(e), jn(sl, t);
}
const jt = Object.assign(Object.assign({
  name: "common"
}, Vt), {
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
  textColorDisabled: K($.alpha4),
  placeholderColor: K($.alpha4),
  placeholderColorDisabled: K($.alpha5),
  iconColor: K($.alpha4),
  iconColorHover: Je(K($.alpha4), {
    lightness: 0.75
  }),
  iconColorPressed: Je(K($.alpha4), {
    lightness: 0.9
  }),
  iconColorDisabled: K($.alpha5),
  opacity1: $.alpha1,
  opacity2: $.alpha2,
  opacity3: $.alpha3,
  opacity4: $.alpha4,
  opacity5: $.alpha5,
  dividerColor: "rgb(239, 239, 245)",
  borderColor: "rgb(224, 224, 230)",
  // close
  closeIconColor: K(Number($.alphaClose)),
  closeIconColorHover: K(Number($.alphaClose)),
  closeIconColorPressed: K(Number($.alphaClose)),
  closeColorHover: "rgba(0, 0, 0, .09)",
  closeColorPressed: "rgba(0, 0, 0, .13)",
  // clear
  clearColor: K($.alpha4),
  clearColorHover: Je(K($.alpha4), {
    lightness: 0.75
  }),
  clearColorPressed: Je(K($.alpha4), {
    lightness: 0.9
  }),
  scrollbarColor: zn($.alphaScrollbar),
  scrollbarColorHover: zn($.alphaScrollbarHover),
  scrollbarWidth: "5px",
  scrollbarHeight: "5px",
  scrollbarBorderRadius: "5px",
  progressRailColor: K($.alphaProgressRail),
  railColor: "rgb(219, 219, 223)",
  popoverColor: $.neutralPopover,
  tableColor: $.neutralCard,
  cardColor: $.neutralCard,
  modalColor: $.neutralModal,
  bodyColor: $.neutralBody,
  tagColor: "#eee",
  avatarColor: K($.alphaAvatar),
  invertedColor: "rgb(0, 20, 40)",
  inputColor: K($.alphaInput),
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
}), ul = {
  railInsetHorizontalBottom: "auto 2px 4px 2px",
  railInsetHorizontalTop: "4px 2px auto 2px",
  railInsetVerticalRight: "2px 4px 2px auto",
  railInsetVerticalLeft: "2px auto 2px 4px",
  railColor: "transparent"
};
function dl(e) {
  const {
    scrollbarColor: t,
    scrollbarColorHover: n,
    scrollbarHeight: r,
    scrollbarWidth: o,
    scrollbarBorderRadius: i
  } = e;
  return Object.assign(Object.assign({}, ul), {
    height: r,
    width: o,
    borderRadius: i,
    color: t,
    colorHover: n
  });
}
const cl = {
  name: "Scrollbar",
  common: jt,
  self: dl
}, {
  cubicBezierEaseInOut: Bn
} = Vt;
function fl({
  name: e = "fade-in",
  enterDuration: t = "0.2s",
  leaveDuration: n = "0.2s",
  enterCubicBezier: r = Bn,
  leaveCubicBezier: o = Bn
} = {}) {
  return [H(`&.${e}-transition-enter-active`, {
    transition: `all ${t} ${r}!important`
  }), H(`&.${e}-transition-leave-active`, {
    transition: `all ${n} ${o}!important`
  }), H(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`, {
    opacity: 0
  }), H(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`, {
    opacity: 1
  })];
}
const hl = te("scrollbar", `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [H(">", [te("scrollbar-container", `
 width: 100%;
 overflow: scroll;
 height: 100%;
 min-height: inherit;
 max-height: inherit;
 scrollbar-width: none;
 `, [H("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), H(">", [
  // We can't set overflow hidden since it affects positioning.
  te("scrollbar-content", `
 box-sizing: border-box;
 min-width: 100%;
 `)
])])]), H(">, +", [te("scrollbar-rail", `
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `, [se("horizontal", `
 height: var(--n-scrollbar-height);
 `, [H(">", [ye("scrollbar", `
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]), se("horizontal--top", `
 top: var(--n-scrollbar-rail-top-horizontal-top); 
 right: var(--n-scrollbar-rail-right-horizontal-top); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-top); 
 left: var(--n-scrollbar-rail-left-horizontal-top); 
 `), se("horizontal--bottom", `
 top: var(--n-scrollbar-rail-top-horizontal-bottom); 
 right: var(--n-scrollbar-rail-right-horizontal-bottom); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-bottom); 
 left: var(--n-scrollbar-rail-left-horizontal-bottom); 
 `), se("vertical", `
 width: var(--n-scrollbar-width);
 `, [H(">", [ye("scrollbar", `
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]), se("vertical--left", `
 top: var(--n-scrollbar-rail-top-vertical-left); 
 right: var(--n-scrollbar-rail-right-vertical-left); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-left); 
 left: var(--n-scrollbar-rail-left-vertical-left); 
 `), se("vertical--right", `
 top: var(--n-scrollbar-rail-top-vertical-right); 
 right: var(--n-scrollbar-rail-right-vertical-right); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-right); 
 left: var(--n-scrollbar-rail-left-vertical-right); 
 `), se("disabled", [H(">", [ye("scrollbar", "pointer-events: none;")])]), H(">", [ye("scrollbar", `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [fl(), H("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), pl = Object.assign(Object.assign({}, me.props), {
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
}), vl = ie({
  name: "Scrollbar",
  props: pl,
  inheritAttrs: !1,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: n,
      mergedRtlRef: r
    } = Wt(e), o = nl("Scrollbar", r, t), i = T(null), l = T(null), s = T(null), d = T(null), f = T(null), g = T(null), y = T(null), b = T(null), w = T(null), u = T(null), m = T(null), h = T(0), a = T(0), O = T(!1), B = T(!1);
    let I = !1, V = !1, A, c, v = 0, C = 0, S = 0, R = 0;
    const D = So(), k = me("Scrollbar", "-scrollbar", hl, cl, e, t), L = z(() => {
      const {
        value: p
      } = b, {
        value: E
      } = g, {
        value: _
      } = u;
      return p === null || E === null || _ === null ? 0 : Math.min(p, _ * p / E + tn(k.value.self.width) * 1.5);
    }), x = z(() => `${L.value}px`), P = z(() => {
      const {
        value: p
      } = w, {
        value: E
      } = y, {
        value: _
      } = m;
      return p === null || E === null || _ === null ? 0 : _ * p / E + tn(k.value.self.height) * 1.5;
    }), N = z(() => `${P.value}px`), Y = z(() => {
      const {
        value: p
      } = b, {
        value: E
      } = h, {
        value: _
      } = g, {
        value: F
      } = u;
      if (p === null || _ === null || F === null)
        return 0;
      {
        const j = _ - p;
        return j ? E / j * (F - L.value) : 0;
      }
    }), q = z(() => `${Y.value}px`), G = z(() => {
      const {
        value: p
      } = w, {
        value: E
      } = a, {
        value: _
      } = y, {
        value: F
      } = m;
      if (p === null || _ === null || F === null)
        return 0;
      {
        const j = _ - p;
        return j ? E / j * (F - P.value) : 0;
      }
    }), ae = z(() => `${G.value}px`), Ze = z(() => {
      const {
        value: p
      } = b, {
        value: E
      } = g;
      return p !== null && E !== null && E > p;
    }), Ut = z(() => {
      const {
        value: p
      } = w, {
        value: E
      } = y;
      return p !== null && E !== null && E > p;
    }), vr = z(() => {
      const {
        trigger: p
      } = e;
      return p === "none" || O.value;
    }), mr = z(() => {
      const {
        trigger: p
      } = e;
      return p === "none" || B.value;
    }), be = z(() => {
      const {
        container: p
      } = e;
      return p ? p() : l.value;
    }), br = z(() => {
      const {
        content: p
      } = e;
      return p ? p() : s.value;
    }), Xt = (p, E) => {
      if (!e.scrollable) return;
      if (typeof p == "number") {
        Oe(p, E ?? 0, 0, !1, "auto");
        return;
      }
      const {
        left: _,
        top: F,
        index: j,
        elSize: Q,
        position: le,
        behavior: W,
        el: re,
        debounce: fe = !0
      } = p;
      (_ !== void 0 || F !== void 0) && Oe(_ ?? 0, F ?? 0, 0, !1, W), re !== void 0 ? Oe(0, re.offsetTop, re.offsetHeight, fe, W) : j !== void 0 && Q !== void 0 ? Oe(0, j * Q, Q, fe, W) : le === "bottom" ? Oe(0, Number.MAX_SAFE_INTEGER, 0, !1, W) : le === "top" && Oe(0, 0, 0, !1, W);
    }, Yt = Co(() => {
      e.container || Xt({
        top: h.value,
        left: a.value
      });
    }), gr = () => {
      Yt.isDeactivated || ge();
    }, wr = (p) => {
      if (Yt.isDeactivated) return;
      const {
        onResize: E
      } = e;
      E && E(p), ge();
    }, xr = (p, E) => {
      if (!e.scrollable) return;
      const {
        value: _
      } = be;
      _ && (typeof p == "object" ? _.scrollBy(p) : _.scrollBy(p, E || 0));
    };
    function Oe(p, E, _, F, j) {
      const {
        value: Q
      } = be;
      if (Q) {
        if (F) {
          const {
            scrollTop: le,
            offsetHeight: W
          } = Q;
          if (E > le) {
            E + _ <= le + W || Q.scrollTo({
              left: p,
              top: E + _ - W,
              behavior: j
            });
            return;
          }
        }
        Q.scrollTo({
          left: p,
          top: E,
          behavior: j
        });
      }
    }
    function Sr() {
      $r(), Or(), ge();
    }
    function yr() {
      pt();
    }
    function pt() {
      Cr(), Er();
    }
    function Cr() {
      c !== void 0 && window.clearTimeout(c), c = window.setTimeout(() => {
        B.value = !1;
      }, e.duration);
    }
    function Er() {
      A !== void 0 && window.clearTimeout(A), A = window.setTimeout(() => {
        O.value = !1;
      }, e.duration);
    }
    function $r() {
      A !== void 0 && window.clearTimeout(A), O.value = !0;
    }
    function Or() {
      c !== void 0 && window.clearTimeout(c), B.value = !0;
    }
    function _r(p) {
      const {
        onScroll: E
      } = e;
      E && E(p), Gt();
    }
    function Gt() {
      const {
        value: p
      } = be;
      p && (h.value = p.scrollTop, a.value = p.scrollLeft * (o != null && o.value ? -1 : 1));
    }
    function Mr() {
      const {
        value: p
      } = br;
      p && (g.value = p.offsetHeight, y.value = p.offsetWidth);
      const {
        value: E
      } = be;
      E && (b.value = E.offsetHeight, w.value = E.offsetWidth);
      const {
        value: _
      } = f, {
        value: F
      } = d;
      _ && (m.value = _.offsetWidth), F && (u.value = F.offsetHeight);
    }
    function Kt() {
      const {
        value: p
      } = be;
      p && (h.value = p.scrollTop, a.value = p.scrollLeft * (o != null && o.value ? -1 : 1), b.value = p.offsetHeight, w.value = p.offsetWidth, g.value = p.scrollHeight, y.value = p.scrollWidth);
      const {
        value: E
      } = f, {
        value: _
      } = d;
      E && (m.value = E.offsetWidth), _ && (u.value = _.offsetHeight);
    }
    function ge() {
      e.scrollable && (e.useUnifiedContainer ? Kt() : (Mr(), Gt()));
    }
    function Zt(p) {
      var E;
      return !(!((E = i.value) === null || E === void 0) && E.contains(ut(p)));
    }
    function Tr(p) {
      p.preventDefault(), p.stopPropagation(), V = !0, J("mousemove", window, qt, !0), J("mouseup", window, Jt, !0), C = a.value, S = o != null && o.value ? window.innerWidth - p.clientX : p.clientX;
    }
    function qt(p) {
      if (!V) return;
      A !== void 0 && window.clearTimeout(A), c !== void 0 && window.clearTimeout(c);
      const {
        value: E
      } = w, {
        value: _
      } = y, {
        value: F
      } = P;
      if (E === null || _ === null) return;
      const Q = (o != null && o.value ? window.innerWidth - p.clientX - S : p.clientX - S) * (_ - E) / (E - F), le = _ - E;
      let W = C + Q;
      W = Math.min(le, W), W = Math.max(W, 0);
      const {
        value: re
      } = be;
      if (re) {
        re.scrollLeft = W * (o != null && o.value ? -1 : 1);
        const {
          internalOnUpdateScrollLeft: fe
        } = e;
        fe && fe(W);
      }
    }
    function Jt(p) {
      p.preventDefault(), p.stopPropagation(), X("mousemove", window, qt, !0), X("mouseup", window, Jt, !0), V = !1, ge(), Zt(p) && pt();
    }
    function Pr(p) {
      p.preventDefault(), p.stopPropagation(), I = !0, J("mousemove", window, vt, !0), J("mouseup", window, mt, !0), v = h.value, R = p.clientY;
    }
    function vt(p) {
      if (!I) return;
      A !== void 0 && window.clearTimeout(A), c !== void 0 && window.clearTimeout(c);
      const {
        value: E
      } = b, {
        value: _
      } = g, {
        value: F
      } = L;
      if (E === null || _ === null) return;
      const Q = (p.clientY - R) * (_ - E) / (E - F), le = _ - E;
      let W = v + Q;
      W = Math.min(le, W), W = Math.max(W, 0);
      const {
        value: re
      } = be;
      re && (re.scrollTop = W);
    }
    function mt(p) {
      p.preventDefault(), p.stopPropagation(), X("mousemove", window, vt, !0), X("mouseup", window, mt, !0), I = !1, ge(), Zt(p) && pt();
    }
    Ae(() => {
      const {
        value: p
      } = Ut, {
        value: E
      } = Ze, {
        value: _
      } = t, {
        value: F
      } = f, {
        value: j
      } = d;
      F && (p ? F.classList.remove(`${_}-scrollbar-rail--disabled`) : F.classList.add(`${_}-scrollbar-rail--disabled`)), j && (E ? j.classList.remove(`${_}-scrollbar-rail--disabled`) : j.classList.add(`${_}-scrollbar-rail--disabled`));
    }), $e(() => {
      e.container || ge();
    }), ve(() => {
      A !== void 0 && window.clearTimeout(A), c !== void 0 && window.clearTimeout(c), X("mousemove", window, vt, !0), X("mouseup", window, mt, !0);
    });
    const Qt = z(() => {
      const {
        common: {
          cubicBezierEaseInOut: p
        },
        self: {
          color: E,
          colorHover: _,
          height: F,
          width: j,
          borderRadius: Q,
          railInsetHorizontalTop: le,
          railInsetHorizontalBottom: W,
          railInsetVerticalRight: re,
          railInsetVerticalLeft: fe,
          railColor: Rr
        }
      } = k.value, {
        top: zr,
        right: Br,
        bottom: Ar,
        left: Ir
      } = We(le), {
        top: Dr,
        right: Fr,
        bottom: Hr,
        left: kr
      } = We(W), {
        top: Lr,
        right: Nr,
        bottom: Wr,
        left: Vr
      } = We(o != null && o.value ? On(re) : re), {
        top: jr,
        right: Ur,
        bottom: Xr,
        left: Yr
      } = We(o != null && o.value ? On(fe) : fe);
      return {
        "--n-scrollbar-bezier": p,
        "--n-scrollbar-color": E,
        "--n-scrollbar-color-hover": _,
        "--n-scrollbar-border-radius": Q,
        "--n-scrollbar-width": j,
        "--n-scrollbar-height": F,
        "--n-scrollbar-rail-top-horizontal-top": zr,
        "--n-scrollbar-rail-right-horizontal-top": Br,
        "--n-scrollbar-rail-bottom-horizontal-top": Ar,
        "--n-scrollbar-rail-left-horizontal-top": Ir,
        "--n-scrollbar-rail-top-horizontal-bottom": Dr,
        "--n-scrollbar-rail-right-horizontal-bottom": Fr,
        "--n-scrollbar-rail-bottom-horizontal-bottom": Hr,
        "--n-scrollbar-rail-left-horizontal-bottom": kr,
        "--n-scrollbar-rail-top-vertical-right": Lr,
        "--n-scrollbar-rail-right-vertical-right": Nr,
        "--n-scrollbar-rail-bottom-vertical-right": Wr,
        "--n-scrollbar-rail-left-vertical-right": Vr,
        "--n-scrollbar-rail-top-vertical-left": jr,
        "--n-scrollbar-rail-right-vertical-left": Ur,
        "--n-scrollbar-rail-bottom-vertical-left": Xr,
        "--n-scrollbar-rail-left-vertical-left": Yr,
        "--n-scrollbar-rail-color": Rr
      };
    }), _e = n ? dr("scrollbar", void 0, Qt, e) : void 0;
    return Object.assign(Object.assign({}, {
      scrollTo: Xt,
      scrollBy: xr,
      sync: ge,
      syncUnifiedContainer: Kt,
      handleMouseEnterWrapper: Sr,
      handleMouseLeaveWrapper: yr
    }), {
      mergedClsPrefix: t,
      rtlEnabled: o,
      containerScrollTop: h,
      wrapperRef: i,
      containerRef: l,
      contentRef: s,
      yRailRef: d,
      xRailRef: f,
      needYBar: Ze,
      needXBar: Ut,
      yBarSizePx: x,
      xBarSizePx: N,
      yBarTopPx: q,
      xBarLeftPx: ae,
      isShowXBar: vr,
      isShowYBar: mr,
      isIos: D,
      handleScroll: _r,
      handleContentResize: gr,
      handleContainerResize: wr,
      handleYScrollMouseDown: Pr,
      handleXScrollMouseDown: Tr,
      cssVars: n ? void 0 : Qt,
      themeClass: _e == null ? void 0 : _e.themeClass,
      onRender: _e == null ? void 0 : _e.onRender
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
      xPlacement: s,
      xScrollable: d
    } = this;
    if (!this.scrollable) return (e = t.default) === null || e === void 0 ? void 0 : e.call(t);
    const f = this.trigger === "none", g = (w, u) => M("div", {
      ref: "yRailRef",
      class: [`${n}-scrollbar-rail`, `${n}-scrollbar-rail--vertical`, `${n}-scrollbar-rail--vertical--${l}`, w],
      "data-scrollbar-rail": !0,
      style: [u || "", this.verticalRailStyle],
      "aria-hidden": !0
    }, M(f ? Rn : Pt, f ? null : {
      name: "fade-in-transition"
    }, {
      default: () => this.needYBar && this.isShowYBar && !this.isIos ? M("div", {
        class: `${n}-scrollbar-rail__scrollbar`,
        style: {
          height: this.yBarSizePx,
          top: this.yBarTopPx
        },
        onMousedown: this.handleYScrollMouseDown
      }) : null
    })), y = () => {
      var w, u;
      return (w = this.onRender) === null || w === void 0 || w.call(this), M("div", kt(this.$attrs, {
        role: "none",
        ref: "wrapperRef",
        class: [`${n}-scrollbar`, this.themeClass, o && `${n}-scrollbar--rtl`],
        style: this.cssVars,
        onMouseenter: r ? void 0 : this.handleMouseEnterWrapper,
        onMouseleave: r ? void 0 : this.handleMouseLeaveWrapper
      }), [this.container ? (u = t.default) === null || u === void 0 ? void 0 : u.call(t) : M("div", {
        role: "none",
        ref: "containerRef",
        class: [`${n}-scrollbar-container`, this.containerClass],
        style: this.containerStyle,
        onScroll: this.handleScroll,
        onWheel: this.onWheel
      }, M(En, {
        onResize: this.handleContentResize
      }, {
        default: () => M("div", {
          ref: "contentRef",
          role: "none",
          style: [{
            width: this.xScrollable ? "fit-content" : null
          }, this.contentStyle],
          class: [`${n}-scrollbar-content`, this.contentClass]
        }, t)
      })), i ? null : g(void 0, void 0), d && M("div", {
        ref: "xRailRef",
        class: [`${n}-scrollbar-rail`, `${n}-scrollbar-rail--horizontal`, `${n}-scrollbar-rail--horizontal--${s}`],
        style: this.horizontalRailStyle,
        "data-scrollbar-rail": !0,
        "aria-hidden": !0
      }, M(f ? Rn : Pt, f ? null : {
        name: "fade-in-transition"
      }, {
        default: () => this.needXBar && this.isShowXBar && !this.isIos ? M("div", {
          class: `${n}-scrollbar-rail__scrollbar`,
          style: {
            width: this.xBarSizePx,
            right: o ? this.xBarLeftPx : void 0,
            left: o ? void 0 : this.xBarLeftPx
          },
          onMousedown: this.handleXScrollMouseDown
        }) : null
      }))]);
    }, b = this.container ? y() : M(En, {
      onResize: this.handleContainerResize
    }, {
      default: y
    });
    return i ? M(Fe, null, b, g(this.themeClass, this.cssVars)) : b;
  }
}), ml = vl, bl = {
  space: "6px",
  spaceArrow: "10px",
  arrowOffset: "10px",
  arrowOffsetVertical: "10px",
  arrowHeight: "6px",
  padding: "8px 14px"
};
function gl(e) {
  const {
    boxShadow2: t,
    popoverColor: n,
    textColor2: r,
    borderRadius: o,
    fontSize: i,
    dividerColor: l
  } = e;
  return Object.assign(Object.assign({}, bl), {
    fontSize: i,
    borderRadius: o,
    color: n,
    dividerColor: l,
    textColor: r,
    boxShadow: t
  });
}
const fr = {
  name: "Popover",
  common: jt,
  self: gl
}, _t = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, U = "var(--n-arrow-height) * 1.414", wl = H([te("popover", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `, [H(">", [te("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), Et("raw", `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [Et("scrollable", [Et("show-header-or-footer", "padding: var(--n-padding);")])]), ye("header", `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), ye("footer", `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), se("scrollable, show-header-or-footer", [ye("content", `
 padding: var(--n-padding);
 `)])]), te("popover-shared", `
 transform-origin: inherit;
 `, [
  te("popover-arrow-wrapper", `
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `, [te("popover-arrow", `
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${U});
 height: calc(${U});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),
  // body transition
  H("&.popover-transition-enter-from, &.popover-transition-leave-to", `
 opacity: 0;
 transform: scale(.85);
 `),
  H("&.popover-transition-enter-to, &.popover-transition-leave-from", `
 transform: scale(1);
 opacity: 1;
 `),
  H("&.popover-transition-enter-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),
  H("&.popover-transition-leave-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)
]), oe("top-start", `
 top: calc(${U} / -2);
 left: calc(${de("top-start")} - var(--v-offset-left));
 `), oe("top", `
 top: calc(${U} / -2);
 transform: translateX(calc(${U} / -2)) rotate(45deg);
 left: 50%;
 `), oe("top-end", `
 top: calc(${U} / -2);
 right: calc(${de("top-end")} + var(--v-offset-left));
 `), oe("bottom-start", `
 bottom: calc(${U} / -2);
 left: calc(${de("bottom-start")} - var(--v-offset-left));
 `), oe("bottom", `
 bottom: calc(${U} / -2);
 transform: translateX(calc(${U} / -2)) rotate(45deg);
 left: 50%;
 `), oe("bottom-end", `
 bottom: calc(${U} / -2);
 right: calc(${de("bottom-end")} + var(--v-offset-left));
 `), oe("left-start", `
 left: calc(${U} / -2);
 top: calc(${de("left-start")} - var(--v-offset-top));
 `), oe("left", `
 left: calc(${U} / -2);
 transform: translateY(calc(${U} / -2)) rotate(45deg);
 top: 50%;
 `), oe("left-end", `
 left: calc(${U} / -2);
 bottom: calc(${de("left-end")} + var(--v-offset-top));
 `), oe("right-start", `
 right: calc(${U} / -2);
 top: calc(${de("right-start")} - var(--v-offset-top));
 `), oe("right", `
 right: calc(${U} / -2);
 transform: translateY(calc(${U} / -2)) rotate(45deg);
 top: 50%;
 `), oe("right-end", `
 right: calc(${U} / -2);
 bottom: calc(${de("right-end")} + var(--v-offset-top));
 `), ...so({
  top: ["right-start", "left-start"],
  right: ["top-end", "bottom-end"],
  bottom: ["right-end", "left-end"],
  left: ["top-start", "bottom-start"]
}, (e, t) => {
  const n = ["right", "left"].includes(t), r = n ? "width" : "height";
  return e.map((o) => {
    const i = o.split("-")[1] === "end", s = `calc((${`var(--v-target-${r}, 0px)`} - ${U}) / 2)`, d = de(o);
    return H(`[v-placement="${o}"] >`, [te("popover-shared", [se("center-arrow", [te("popover-arrow", `${t}: calc(max(${s}, ${d}) ${i ? "+" : "-"} var(--v-offset-${n ? "left" : "top"}));`)])])]);
  });
})]);
function de(e) {
  return ["top", "bottom"].includes(e.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)";
}
function oe(e, t) {
  const n = e.split("-")[0], r = ["top", "bottom"].includes(n) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
  return H(`[v-placement="${e}"] >`, [te("popover-shared", `
 margin-${_t[n]}: var(--n-space);
 `, [se("show-arrow", `
 margin-${_t[n]}: var(--n-space-arrow);
 `), se("overlap", `
 margin: 0;
 `), Zi("popover-arrow-wrapper", `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${_t[n]}: auto;
 ${r}
 `, [te("popover-arrow", t)])])]);
}
const hr = Object.assign(Object.assign({}, me.props), {
  to: Ie.propTo,
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
function xl({
  arrowClass: e,
  arrowStyle: t,
  arrowWrapperClass: n,
  arrowWrapperStyle: r,
  clsPrefix: o
}) {
  return M("div", {
    key: "__popover-arrow__",
    style: r,
    class: [`${o}-popover-arrow-wrapper`, n]
  }, M("div", {
    class: [`${o}-popover-arrow`, e],
    style: t
  }));
}
const Sl = ie({
  name: "PopoverBody",
  inheritAttrs: !1,
  props: hr,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    const {
      namespaceRef: r,
      mergedClsPrefixRef: o,
      inlineThemeDisabled: i
    } = Wt(e), l = me("Popover", "-popover", wl, fr, e, o), s = T(null), d = ne("NPopover"), f = T(null), g = T(e.show), y = T(!1);
    Ae(() => {
      const {
        show: c
      } = e;
      c && !qi() && !e.internalDeactivateImmediately && (y.value = !0);
    });
    const b = z(() => {
      const {
        trigger: c,
        onClickoutside: v
      } = e, C = [], {
        positionManuallyRef: {
          value: S
        }
      } = d;
      return S || (c === "click" && !v && C.push([on, I, void 0, {
        capture: !0
      }]), c === "hover" && C.push([Lo, B])), v && C.push([on, I, void 0, {
        capture: !0
      }]), (e.displayDirective === "show" || e.animated && y.value) && C.push([eo, e.show]), C;
    }), w = z(() => {
      const {
        common: {
          cubicBezierEaseInOut: c,
          cubicBezierEaseIn: v,
          cubicBezierEaseOut: C
        },
        self: {
          space: S,
          spaceArrow: R,
          padding: D,
          fontSize: k,
          textColor: L,
          dividerColor: x,
          color: P,
          boxShadow: N,
          borderRadius: Y,
          arrowHeight: q,
          arrowOffset: G,
          arrowOffsetVertical: ae
        }
      } = l.value;
      return {
        "--n-box-shadow": N,
        "--n-bezier": c,
        "--n-bezier-ease-in": v,
        "--n-bezier-ease-out": C,
        "--n-font-size": k,
        "--n-text-color": L,
        "--n-color": P,
        "--n-divider-color": x,
        "--n-border-radius": Y,
        "--n-arrow-height": q,
        "--n-arrow-offset": G,
        "--n-arrow-offset-vertical": ae,
        "--n-padding": D,
        "--n-space": S,
        "--n-space-arrow": R
      };
    }), u = z(() => {
      const c = e.width === "trigger" ? void 0 : Ct(e.width), v = [];
      c && v.push({
        width: c
      });
      const {
        maxWidth: C,
        minWidth: S
      } = e;
      return C && v.push({
        maxWidth: Ct(C)
      }), S && v.push({
        maxWidth: Ct(S)
      }), i || v.push(w.value), v;
    }), m = i ? dr("popover", void 0, w, e) : void 0;
    d.setBodyInstance({
      syncPosition: h
    }), ve(() => {
      d.setBodyInstance(null);
    }), ce(pe(e, "show"), (c) => {
      e.animated || (c ? g.value = !0 : g.value = !1);
    });
    function h() {
      var c;
      (c = s.value) === null || c === void 0 || c.syncPosition();
    }
    function a(c) {
      e.trigger === "hover" && e.keepAliveOnHover && e.show && d.handleMouseEnter(c);
    }
    function O(c) {
      e.trigger === "hover" && e.keepAliveOnHover && d.handleMouseLeave(c);
    }
    function B(c) {
      e.trigger === "hover" && !V().contains(ut(c)) && d.handleMouseMoveOutside(c);
    }
    function I(c) {
      (e.trigger === "click" && !V().contains(ut(c)) || e.onClickoutside) && d.handleClickOutside(c);
    }
    function V() {
      return d.getTriggerElement();
    }
    je(Nn, f), je(kn, null), je(Ln, null);
    function A() {
      if (m == null || m.onRender(), !(e.displayDirective === "show" || e.show || e.animated && y.value))
        return null;
      let v;
      const C = d.internalRenderBodyRef.value, {
        value: S
      } = o;
      if (C)
        v = C(
          // The popover class and overlap class must exists, they will be used
          // to place the body & transition animation.
          // Shadow class exists for reuse box-shadow.
          [`${S}-popover-shared`, m == null ? void 0 : m.themeClass.value, e.overlap && `${S}-popover-shared--overlap`, e.showArrow && `${S}-popover-shared--show-arrow`, e.arrowPointToCenter && `${S}-popover-shared--center-arrow`],
          f,
          u.value,
          a,
          O
        );
      else {
        const {
          value: R
        } = d.extraClassRef, {
          internalTrapFocus: D
        } = e, k = !Pn(t.header) || !Pn(t.footer), L = () => {
          var x, P;
          const N = k ? M(Fe, null, Ot(t.header, (G) => G ? M("div", {
            class: [`${S}-popover__header`, e.headerClass],
            style: e.headerStyle
          }, G) : null), Ot(t.default, (G) => G ? M("div", {
            class: [`${S}-popover__content`, e.contentClass],
            style: e.contentStyle
          }, t) : null), Ot(t.footer, (G) => G ? M("div", {
            class: [`${S}-popover__footer`, e.footerClass],
            style: e.footerStyle
          }, G) : null)) : e.scrollable ? (x = t.default) === null || x === void 0 ? void 0 : x.call(t) : M("div", {
            class: [`${S}-popover__content`, e.contentClass],
            style: e.contentStyle
          }, t), Y = e.scrollable ? M(ml, {
            contentClass: k ? void 0 : `${S}-popover__content ${(P = e.contentClass) !== null && P !== void 0 ? P : ""}`,
            contentStyle: k ? void 0 : e.contentStyle
          }, {
            default: () => N
          }) : N, q = e.showArrow ? xl({
            arrowClass: e.arrowClass,
            arrowStyle: e.arrowStyle,
            arrowWrapperClass: e.arrowWrapperClass,
            arrowWrapperStyle: e.arrowWrapperStyle,
            clsPrefix: S
          }) : null;
          return [Y, q];
        };
        v = M("div", kt({
          class: [`${S}-popover`, `${S}-popover-shared`, m == null ? void 0 : m.themeClass.value, R.map((x) => `${S}-${x}`), {
            [`${S}-popover--scrollable`]: e.scrollable,
            [`${S}-popover--show-header-or-footer`]: k,
            [`${S}-popover--raw`]: e.raw,
            [`${S}-popover-shared--overlap`]: e.overlap,
            [`${S}-popover-shared--show-arrow`]: e.showArrow,
            [`${S}-popover-shared--center-arrow`]: e.arrowPointToCenter
          }],
          ref: f,
          style: u.value,
          onKeydown: d.handleKeydown,
          onMouseenter: a,
          onMouseleave: O
        }, n), D ? M(Vi, {
          active: e.show,
          autoFocus: !0
        }, {
          default: L
        }) : L());
      }
      return dt(v, b.value);
    }
    return {
      displayed: y,
      namespace: r,
      isMounted: d.isMountedRef,
      zIndex: d.zIndexRef,
      followerRef: s,
      adjustedTo: Ie(e),
      followerEnabled: g,
      renderContentNode: A
    };
  },
  render() {
    return M(wi, {
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
      teleportDisabled: this.adjustedTo === Ie.tdkey
    }, {
      default: () => this.animated ? M(Pt, {
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
var yl = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_11684_UKXSMLHMUWFBWKVP", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.97.2", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-5a8078c568-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
const Cl = Object.keys(hr), El = {
  focus: ["onFocus", "onBlur"],
  click: ["onClick"],
  hover: ["onMouseenter", "onMouseleave"],
  manual: [],
  nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"]
};
function $l(e, t, n) {
  El[t].forEach((r) => {
    e.props ? e.props = Object.assign({}, e.props) : e.props = {};
    const o = e.props[r], i = n[r];
    o ? e.props[r] = (...l) => {
      o(...l), i(...l);
    } : e.props[r] = i;
  });
}
const pr = {
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
  to: Ie.propTo,
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
}, Ol = Object.assign(Object.assign(Object.assign({}, me.props), pr), {
  internalOnAfterLeave: Function,
  internalRenderBody: Function
}), _l = ie({
  name: "Popover",
  inheritAttrs: !1,
  props: Ol,
  slots: Object,
  __popover__: !0,
  setup(e) {
    yl.NODE_ENV !== "production" && Ae(() => {
      e.maxWidth !== void 0 && Ne("popover", "`max-width` is deprecated, please use `style` instead."), e.minWidth !== void 0 && Ne("popover", "`min-width` is deprecated, please use `style` instead."), e.arrow !== void 0 && Ne("popover", "`arrow` is deprecated, please use `showArrow` instead."), e.onHide !== void 0 && Ne("popover", "`on-hide` is deprecated, please use `on-update:show` instead."), e.onShow !== void 0 && Ne("popover", "`on-show` is deprecated, please use `on-update:show` instead.");
    });
    const t = Hn(), n = T(null), r = z(() => e.show), o = T(e.defaultShow), i = go(r, o), l = Ge(() => e.disabled ? !1 : i.value), s = () => {
      if (e.disabled) return !0;
      const {
        getDisabled: x
      } = e;
      return !!(x != null && x());
    }, d = () => s() ? !1 : i.value, f = wo(e, ["arrow", "showArrow"]), g = z(() => e.overlap ? !1 : f.value);
    let y = null;
    const b = T(null), w = T(null), u = Ge(() => e.x !== void 0 && e.y !== void 0);
    function m(x) {
      const {
        "onUpdate:show": P,
        onUpdateShow: N,
        onShow: Y,
        onHide: q
      } = e;
      o.value = x, P && Ve(P, x), N && Ve(N, x), x && Y && Ve(Y, !0), x && q && Ve(q, !1);
    }
    function h() {
      y && y.syncPosition();
    }
    function a() {
      const {
        value: x
      } = b;
      x && (window.clearTimeout(x), b.value = null);
    }
    function O() {
      const {
        value: x
      } = w;
      x && (window.clearTimeout(x), w.value = null);
    }
    function B() {
      const x = s();
      if (e.trigger === "focus" && !x) {
        if (d()) return;
        m(!0);
      }
    }
    function I() {
      const x = s();
      if (e.trigger === "focus" && !x) {
        if (!d()) return;
        m(!1);
      }
    }
    function V() {
      const x = s();
      if (e.trigger === "hover" && !x) {
        if (O(), b.value !== null || d()) return;
        const P = () => {
          m(!0), b.value = null;
        }, {
          delay: N
        } = e;
        N === 0 ? P() : b.value = window.setTimeout(P, N);
      }
    }
    function A() {
      const x = s();
      if (e.trigger === "hover" && !x) {
        if (a(), w.value !== null || !d()) return;
        const P = () => {
          m(!1), w.value = null;
        }, {
          duration: N
        } = e;
        N === 0 ? P() : w.value = window.setTimeout(P, N);
      }
    }
    function c() {
      A();
    }
    function v(x) {
      var P;
      d() && (e.trigger === "click" && (a(), O(), m(!1)), (P = e.onClickoutside) === null || P === void 0 || P.call(e, x));
    }
    function C() {
      if (e.trigger === "click" && !s()) {
        a(), O();
        const x = !d();
        m(x);
      }
    }
    function S(x) {
      e.internalTrapFocus && x.key === "Escape" && (a(), O(), m(!1));
    }
    function R(x) {
      o.value = x;
    }
    function D() {
      var x;
      return (x = n.value) === null || x === void 0 ? void 0 : x.targetRef;
    }
    function k(x) {
      y = x;
    }
    return je("NPopover", {
      getTriggerElement: D,
      handleKeydown: S,
      handleMouseEnter: V,
      handleMouseLeave: A,
      handleClickOutside: v,
      handleMouseMoveOutside: c,
      setBodyInstance: k,
      positionManuallyRef: u,
      isMountedRef: t,
      zIndexRef: pe(e, "zIndex"),
      extraClassRef: pe(e, "internalExtraClass"),
      internalRenderBodyRef: pe(e, "internalRenderBody")
    }), Ae(() => {
      i.value && s() && m(!1);
    }), {
      binderInstRef: n,
      positionManually: u,
      mergedShowConsideringDisabledProp: l,
      // if to show popover body
      uncontrolledShow: o,
      mergedShowArrow: g,
      getMergedShow: d,
      setShow: R,
      handleClick: C,
      handleMouseEnter: V,
      handleMouseLeave: A,
      handleFocus: B,
      handleBlur: I,
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
    if (!t && (r = Qi(n, "trigger"), r)) {
      r = to(r), r = r.type === no ? M("span", [r]) : r;
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
        } = this, s = [i, ...l], d = {
          onBlur: (f) => {
            s.forEach((g) => {
              g.onBlur(f);
            });
          },
          onFocus: (f) => {
            s.forEach((g) => {
              g.onFocus(f);
            });
          },
          onClick: (f) => {
            s.forEach((g) => {
              g.onClick(f);
            });
          },
          onMouseenter: (f) => {
            s.forEach((g) => {
              g.onMouseenter(f);
            });
          },
          onMouseleave: (f) => {
            s.forEach((g) => {
              g.onMouseleave(f);
            });
          }
        };
        $l(r, l ? "nested" : t ? "manual" : this.trigger, d);
      }
    }
    return M(Ho, {
      ref: "binderInstRef",
      syncTarget: !o,
      syncTargetWithParent: this.internalSyncTargetWithParent
    }, {
      default: () => {
        this.mergedShowConsideringDisabledProp;
        const i = this.getMergedShow();
        return [this.internalTrapFocus && i ? dt(M("div", {
          style: {
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }), [[Yn, {
          enabled: i,
          zIndex: this.zIndex
        }]]) : null, t ? null : M(ko, null, {
          default: () => r
        }), M(Sl, el(this.$props, Cl, Object.assign(Object.assign({}, this.$attrs), {
          showArrow: this.mergedShowArrow,
          show: i
        })), {
          default: () => {
            var l, s;
            return (s = (l = this.$slots).default) === null || s === void 0 ? void 0 : s.call(l);
          },
          header: () => {
            var l, s;
            return (s = (l = this.$slots).header) === null || s === void 0 ? void 0 : s.call(l);
          },
          footer: () => {
            var l, s;
            return (s = (l = this.$slots).footer) === null || s === void 0 ? void 0 : s.call(l);
          }
        })];
      }
    });
  }
}), Ml = {
  padding: "8px 14px"
};
function Tl(e) {
  const {
    borderRadius: t,
    boxShadow2: n,
    baseColor: r
  } = e;
  return Object.assign(Object.assign({}, Ml), {
    borderRadius: t,
    boxShadow: n,
    color: jn(r, "rgba(0, 0, 0, .85)"),
    textColor: r
  });
}
const Pl = {
  name: "Tooltip",
  common: jt,
  peers: {
    Popover: fr
  },
  self: Tl
}, Rl = Object.assign(Object.assign({}, pr), me.props), zl = ie({
  name: "Tooltip",
  props: Rl,
  slots: Object,
  __popover__: !0,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = Wt(e), n = me("Tooltip", "-tooltip", void 0, Pl, e, t), r = T(null);
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
      popoverThemeOverrides: z(() => n.value.self)
    });
  },
  render() {
    const {
      mergedTheme: e,
      internalExtraClass: t
    } = this;
    return M(_l, Object.assign(Object.assign({}, this.$props), {
      theme: e.peers.Popover,
      themeOverrides: e.peerOverrides.Popover,
      builtinThemeOverrides: this.popoverThemeOverrides,
      internalExtraClass: t.concat("tooltip"),
      ref: "popoverRef"
    }), this.$slots);
  }
}), Bl = { class: "lc-tooltip" }, Al = { class: "lc-tooltip__content" }, Il = /* @__PURE__ */ ie({
  __name: "tooltip",
  setup(e) {
    return (t, n) => (ro(), oo("div", Bl, [
      io(
        lo(zl),
        kt({
          trigger: "hover",
          class: "lc-n-tooltip",
          "arrow-class": "lc-tooltip-arrow-class"
        }, t.$attrs),
        {
          trigger: en(() => [
            Tt(t.$slots, "trigger", {}, () => [
              n[0] || (n[0] = Me(
                "div",
                { class: "lc-tooltip__trigger_icon" },
                [
                  Me("svg", {
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 512 512",
                    "enable-background": "new 0 0 512 512",
                    "xml:space": "preserve"
                  }, [
                    Me("path", { d: `M256,90c44.3,0,86,17.3,117.4,48.6C404.7,170,422,211.7,422,256s-17.3,86-48.6,117.4C342,404.7,300.3,422,256,422\r
	s-86-17.3-117.4-48.6C107.3,342,90,300.3,90,256s17.3-86,48.6-117.4C170,107.3,211.7,90,256,90 M256,48C141.1,48,48,141.1,48,256\r
	s93.1,208,208,208s208-93.1,208-208S370.9,48,256,48L256,48z` }),
                    Me("g", null, [
                      Me("path", { d: "M277,360h-42V235h42V360z M277,194h-42v-42h42V194z" })
                    ])
                  ])
                ],
                -1
                /* HOISTED */
              ))
            ], !0)
          ]),
          default: en(() => [
            Me("div", Al, [
              Tt(t.$slots, "default", {}, void 0, !0)
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
}), Dl = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Nl = /* @__PURE__ */ Dl(Il, [["__scopeId", "data-v-37c77816"]]);
export {
  Nl as LcTooltip
};
