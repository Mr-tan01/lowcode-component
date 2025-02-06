// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { ref as M, readonly as dn, watch as ve, computed as D, onMounted as He, onBeforeUnmount as $e, createTextVNode as eo, Fragment as me, Comment as On, defineComponent as ue, provide as lt, getCurrentInstance as to, inject as re, withDirectives as Ht, toRef as Ce, h as T, Teleport as zi, nextTick as Bi, renderSlot as Fi, onActivated as Hi, onDeactivated as Ni, isVNode as Wi, shallowRef as Li, watchEffect as Ye, onBeforeMount as no, Transition as fn, mergeProps as ro, vShow as ji, cloneVNode as ki, Text as Ui, openBlock as ye, createElementBlock as Se, createElementVNode as nt, renderList as Kt, createVNode as Vi, unref as Gi, withCtx as Zn, toDisplayString as Yt, createCommentVNode as Xi } from "vue";
function Pt(e) {
  return e.composedPath()[0];
}
const Ki = {
  mousemoveoutside: /* @__PURE__ */ new WeakMap(),
  clickoutside: /* @__PURE__ */ new WeakMap()
};
function Yi(e, t, n) {
  if (e === "mousemoveoutside") {
    const r = (o) => {
      t.contains(Pt(o)) || n(o);
    };
    return {
      mousemove: r,
      touchstart: r
    };
  } else if (e === "clickoutside") {
    let r = !1;
    const o = (a) => {
      r = !t.contains(Pt(a));
    }, i = (a) => {
      r && (t.contains(Pt(a)) || n(a));
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
function oo(e, t, n) {
  const r = Ki[e];
  let o = r.get(t);
  o === void 0 && r.set(t, o = /* @__PURE__ */ new WeakMap());
  let i = o.get(n);
  return i === void 0 && o.set(n, i = Yi(e, t, n)), i;
}
function Ji(e, t, n, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const o = oo(e, t, n);
    return Object.keys(o).forEach((i) => {
      Q(i, document, o[i], r);
    }), !0;
  }
  return !1;
}
function Zi(e, t, n, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const o = oo(e, t, n);
    return Object.keys(o).forEach((i) => {
      X(i, document, o[i], r);
    }), !0;
  }
  return !1;
}
function qi() {
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
  function o(f, b, C) {
    const x = f[b];
    return f[b] = function() {
      return C.apply(f, arguments), x.apply(f, arguments);
    }, f;
  }
  function i(f, b) {
    f[b] = Event.prototype[b];
  }
  const a = /* @__PURE__ */ new WeakMap(), s = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
  function l() {
    var f;
    return (f = a.get(this)) !== null && f !== void 0 ? f : null;
  }
  function u(f, b) {
    s !== void 0 && Object.defineProperty(f, "currentTarget", {
      configurable: !0,
      enumerable: !0,
      get: b ?? s.get
    });
  }
  const p = {
    bubble: {},
    capture: {}
  }, y = {};
  function h() {
    const f = function(b) {
      const { type: C, eventPhase: x, bubbles: R } = b, F = Pt(b);
      if (x === 2)
        return;
      const L = x === 1 ? "capture" : "bubble";
      let j = F;
      const S = [];
      for (; j === null && (j = window), S.push(j), j !== window; )
        j = j.parentNode || null;
      const P = p.capture[C], k = p.bubble[C];
      if (o(b, "stopPropagation", n), o(b, "stopImmediatePropagation", r), u(b, l), L === "capture") {
        if (P === void 0)
          return;
        for (let K = S.length - 1; K >= 0 && !e.has(b); --K) {
          const q = S[K], Y = P.get(q);
          if (Y !== void 0) {
            a.set(b, q);
            for (const ce of Y) {
              if (t.has(b))
                break;
              ce(b);
            }
          }
          if (K === 0 && !R && k !== void 0) {
            const ce = k.get(q);
            if (ce !== void 0)
              for (const bt of ce) {
                if (t.has(b))
                  break;
                bt(b);
              }
          }
        }
      } else if (L === "bubble") {
        if (k === void 0)
          return;
        for (let K = 0; K < S.length && !e.has(b); ++K) {
          const q = S[K], Y = k.get(q);
          if (Y !== void 0) {
            a.set(b, q);
            for (const ce of Y) {
              if (t.has(b))
                break;
              ce(b);
            }
          }
        }
      }
      i(b, "stopPropagation"), i(b, "stopImmediatePropagation"), u(b);
    };
    return f.displayName = "evtdUnifiedHandler", f;
  }
  function w() {
    const f = function(b) {
      const { type: C, eventPhase: x } = b;
      if (x !== 2)
        return;
      const R = y[C];
      R !== void 0 && R.forEach((F) => F(b));
    };
    return f.displayName = "evtdUnifiedWindowEventHandler", f;
  }
  const c = h(), m = w();
  function v(f, b) {
    const C = p[f];
    return C[b] === void 0 && (C[b] = /* @__PURE__ */ new Map(), window.addEventListener(b, c, f === "capture")), C[b];
  }
  function d(f) {
    return y[f] === void 0 && (y[f] = /* @__PURE__ */ new Set(), window.addEventListener(f, m)), y[f];
  }
  function _(f, b) {
    let C = f.get(b);
    return C === void 0 && f.set(b, C = /* @__PURE__ */ new Set()), C;
  }
  function A(f, b, C, x) {
    const R = p[b][C];
    if (R !== void 0) {
      const F = R.get(f);
      if (F !== void 0 && F.has(x))
        return !0;
    }
    return !1;
  }
  function I(f, b) {
    const C = y[f];
    return !!(C !== void 0 && C.has(b));
  }
  function B(f, b, C, x) {
    let R;
    if (typeof x == "object" && x.once === !0 ? R = (P) => {
      z(f, b, R, x), C(P);
    } : R = C, Ji(f, b, R, x))
      return;
    const L = x === !0 || typeof x == "object" && x.capture === !0 ? "capture" : "bubble", j = v(L, f), S = _(j, b);
    if (S.has(R) || S.add(R), b === window) {
      const P = d(f);
      P.has(R) || P.add(R);
    }
  }
  function z(f, b, C, x) {
    if (Zi(f, b, C, x))
      return;
    const F = x === !0 || typeof x == "object" && x.capture === !0, L = F ? "capture" : "bubble", j = v(L, f), S = _(j, b);
    if (b === window && !A(b, F ? "bubble" : "capture", f, C) && I(f, C)) {
      const k = y[f];
      k.delete(C), k.size === 0 && (window.removeEventListener(f, m), y[f] = void 0);
    }
    S.has(C) && S.delete(C), S.size === 0 && j.delete(b), j.size === 0 && (window.removeEventListener(f, c, L === "capture"), p[L][f] = void 0);
  }
  return {
    on: B,
    off: z
  };
}
const { on: Q, off: X } = qi(), Ue = "@@mmoContext", Qi = {
  mounted(e, { value: t }) {
    e[Ue] = {
      handler: void 0
    }, typeof t == "function" && (e[Ue].handler = t, Q("mousemoveoutside", e, t));
  },
  updated(e, { value: t }) {
    const n = e[Ue];
    typeof t == "function" ? n.handler ? n.handler !== t && (X("mousemoveoutside", e, n.handler), n.handler = t, Q("mousemoveoutside", e, t)) : (e[Ue].handler = t, Q("mousemoveoutside", e, t)) : n.handler && (X("mousemoveoutside", e, n.handler), n.handler = void 0);
  },
  unmounted(e) {
    const { handler: t } = e[Ue];
    t && X("mousemoveoutside", e, t), e[Ue].handler = void 0;
  }
}, Ve = "@@coContext", qn = {
  mounted(e, { value: t, modifiers: n }) {
    e[Ve] = {
      handler: void 0
    }, typeof t == "function" && (e[Ve].handler = t, Q("clickoutside", e, t, {
      capture: n.capture
    }));
  },
  updated(e, { value: t, modifiers: n }) {
    const r = e[Ve];
    typeof t == "function" ? r.handler ? r.handler !== t && (X("clickoutside", e, r.handler, {
      capture: n.capture
    }), r.handler = t, Q("clickoutside", e, t, {
      capture: n.capture
    })) : (e[Ve].handler = t, Q("clickoutside", e, t, {
      capture: n.capture
    })) : r.handler && (X("clickoutside", e, r.handler, {
      capture: n.capture
    }), r.handler = void 0);
  },
  unmounted(e, { modifiers: t }) {
    const { handler: n } = e[Ve];
    n && X("clickoutside", e, n, {
      capture: t.capture
    }), e[Ve].handler = void 0;
  }
};
function ea(e, t) {
  console.error(`[vdirs/${e}]: ${t}`);
}
class ta {
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
    r.has(t) ? r.delete(t) : n === void 0 && ea("z-index-manager/unregister-element", "Element not found when unregistering."), this.squashState();
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
const Jt = new ta(), Ge = "@@ziContext", io = {
  mounted(e, t) {
    const { value: n = {} } = t, { zIndex: r, enabled: o } = n;
    e[Ge] = {
      enabled: !!o,
      initialized: !1
    }, o && (Jt.ensureZIndex(e, r), e[Ge].initialized = !0);
  },
  updated(e, t) {
    const { value: n = {} } = t, { zIndex: r, enabled: o } = n, i = e[Ge].enabled;
    o && !i && (Jt.ensureZIndex(e, r), e[Ge].initialized = !0), e[Ge].enabled = !!o;
  },
  unmounted(e, t) {
    if (!e[Ge].initialized)
      return;
    const { value: n = {} } = t, { zIndex: r } = n;
    Jt.unregister(e, r);
  }
};
function na(e) {
  const t = M(!!e.value);
  if (t.value)
    return dn(t);
  const n = ve(e, (r) => {
    r && (t.value = !0, n());
  });
  return dn(t);
}
function pt(e) {
  const t = D(e), n = M(t.value);
  return ve(t, (r) => {
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
const ra = typeof window < "u";
let Xe, ut;
const oa = () => {
  var e, t;
  Xe = ra ? (t = (e = document) === null || e === void 0 ? void 0 : e.fonts) === null || t === void 0 ? void 0 : t.ready : void 0, ut = !1, Xe !== void 0 ? Xe.then(() => {
    ut = !0;
  }) : ut = !0;
};
oa();
function ia(e) {
  if (ut)
    return;
  let t = !1;
  He(() => {
    ut || Xe == null || Xe.then(() => {
      t || e();
    });
  }), $e(() => {
    t = !0;
  });
}
function aa(e, t) {
  return ve(e, (n) => {
    n !== void 0 && (t.value = n);
  }), D(() => e.value === void 0 ? t.value : e.value);
}
function ao() {
  const e = M(!1);
  return He(() => {
    e.value = !0;
  }), dn(e);
}
function sa(e, t) {
  return D(() => {
    for (const n of t)
      if (e[n] !== void 0)
        return e[n];
    return e[t[t.length - 1]];
  });
}
const la = (typeof window > "u" ? !1 : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
!window.MSStream;
function ua() {
  return la;
}
let At = [];
const so = /* @__PURE__ */ new WeakMap();
function ca() {
  At.forEach((e) => e(...so.get(e))), At = [];
}
function da(e, ...t) {
  so.set(e, t), !At.includes(e) && At.push(e) === 1 && requestAnimationFrame(ca);
}
function Rt(e) {
  return e.composedPath()[0] || null;
}
function Qn(e) {
  return typeof e == "string" ? e.endsWith("px") ? Number(e.slice(0, e.length - 2)) : Number(e) : e;
}
function at(e, t) {
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
const er = {
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
}, qe = "^\\s*", Qe = "\\s*$", Ae = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", Re = "([0-9A-Fa-f])", Ie = "([0-9A-Fa-f]{2})", fa = new RegExp(`${qe}rgb\\s*\\(${Ae},${Ae},${Ae}\\)${Qe}`), pa = new RegExp(`${qe}rgba\\s*\\(${Ae},${Ae},${Ae},${Ae}\\)${Qe}`), ha = new RegExp(`${qe}#${Re}${Re}${Re}${Qe}`), va = new RegExp(`${qe}#${Ie}${Ie}${Ie}${Qe}`), ma = new RegExp(`${qe}#${Re}${Re}${Re}${Re}${Qe}`), ga = new RegExp(`${qe}#${Ie}${Ie}${Ie}${Ie}${Qe}`);
function te(e) {
  return parseInt(e, 16);
}
function Je(e) {
  try {
    let t;
    if (t = va.exec(e))
      return [te(t[1]), te(t[2]), te(t[3]), 1];
    if (t = fa.exec(e))
      return [Z(t[1]), Z(t[5]), Z(t[9]), 1];
    if (t = pa.exec(e))
      return [
        Z(t[1]),
        Z(t[5]),
        Z(t[9]),
        ct(t[13])
      ];
    if (t = ha.exec(e))
      return [
        te(t[1] + t[1]),
        te(t[2] + t[2]),
        te(t[3] + t[3]),
        1
      ];
    if (t = ga.exec(e))
      return [
        te(t[1]),
        te(t[2]),
        te(t[3]),
        ct(te(t[4]) / 255)
      ];
    if (t = ma.exec(e))
      return [
        te(t[1] + t[1]),
        te(t[2] + t[2]),
        te(t[3] + t[3]),
        ct(te(t[4] + t[4]) / 255)
      ];
    if (e in er)
      return Je(er[e]);
    throw new Error(`[seemly/rgba]: Invalid color value ${e}.`);
  } catch (t) {
    throw t;
  }
}
function ba(e) {
  return e > 1 ? 1 : e < 0 ? 0 : e;
}
function wa(e, t, n, r) {
  return `rgba(${Z(e)}, ${Z(t)}, ${Z(n)}, ${ba(r)})`;
}
function Zt(e, t, n, r, o) {
  return Z((e * t * (1 - r) + n * r) / o);
}
function ya(e, t) {
  Array.isArray(e) || (e = Je(e)), Array.isArray(t) || (t = Je(t));
  const n = e[3], r = t[3], o = ct(n + r - n * r);
  return wa(Zt(e[0], n, t[0], r, o), Zt(e[1], n, t[1], r, o), Zt(e[2], n, t[2], r, o), o);
}
function wt(e, t) {
  const [n, r, o, i = 1] = Array.isArray(e) ? e : Je(e), { lightness: a = 1, alpha: s = 1 } = t;
  return Sa([n * a, r * a, o * a, i * s]);
}
function ct(e) {
  const t = Math.round(Number(e) * 100) / 100;
  return t > 1 ? 1 : t < 0 ? 0 : t;
}
function Z(e) {
  const t = Math.round(Number(e));
  return t > 255 ? 255 : t < 0 ? 0 : t;
}
function Sa(e) {
  const [t, n, r] = e;
  return 3 in e ? `rgba(${Z(t)}, ${Z(n)}, ${Z(r)}, ${ct(e[3])})` : `rgba(${Z(t)}, ${Z(n)}, ${Z(r)}, 1)`;
}
function xa(e = 8) {
  return Math.random().toString(16).slice(2, 2 + e);
}
function pn(e, t, n = "default") {
  const r = t[n];
  if (r === void 0)
    throw new Error(`[vueuc/${e}]: slot[${n}] is empty.`);
  return r();
}
function hn(e, t = !0, n = []) {
  return e.forEach((r) => {
    if (r !== null) {
      if (typeof r != "object") {
        (typeof r == "string" || typeof r == "number") && n.push(eo(String(r)));
        return;
      }
      if (Array.isArray(r)) {
        hn(r, t, n);
        return;
      }
      if (r.type === me) {
        if (r.children === null)
          return;
        Array.isArray(r.children) && hn(r.children, t, n);
      } else r.type !== On && n.push(r);
    }
  }), n;
}
function tr(e, t, n = "default") {
  const r = t[n];
  if (r === void 0)
    throw new Error(`[vueuc/${e}]: slot[${n}] is empty.`);
  const o = hn(r());
  if (o.length === 1)
    return o[0];
  throw new Error(`[vueuc/${e}]: slot[${n}] should have exactly one child.`);
}
let xe = null;
function lo() {
  if (xe === null && (xe = document.getElementById("v-binder-view-measurer"), xe === null)) {
    xe = document.createElement("div"), xe.id = "v-binder-view-measurer";
    const { style: e } = xe;
    e.position = "fixed", e.left = "0", e.right = "0", e.top = "0", e.bottom = "0", e.pointerEvents = "none", e.visibility = "hidden", document.body.appendChild(xe);
  }
  return xe.getBoundingClientRect();
}
function _a(e, t) {
  const n = lo();
  return {
    top: t,
    left: e,
    height: 0,
    width: 0,
    right: n.width - e,
    bottom: n.height - t
  };
}
function qt(e) {
  const t = e.getBoundingClientRect(), n = lo();
  return {
    left: t.left - n.left,
    top: t.top - n.top,
    bottom: n.height + n.top - t.bottom,
    right: n.width + n.left - t.right,
    width: t.width,
    height: t.height
  };
}
function Ca(e) {
  return e.nodeType === 9 ? null : e.parentNode;
}
function uo(e) {
  if (e === null)
    return null;
  const t = Ca(e);
  if (t === null)
    return null;
  if (t.nodeType === 9)
    return document;
  if (t.nodeType === 1) {
    const { overflow: n, overflowX: r, overflowY: o } = getComputedStyle(t);
    if (/(auto|scroll|overlay)/.test(n + o + r))
      return t;
  }
  return uo(t);
}
const Ea = ue({
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
    lt("VBinder", (t = to()) === null || t === void 0 ? void 0 : t.proxy);
    const n = re("VBinder", null), r = M(null), o = (d) => {
      r.value = d, n && e.syncTargetWithParent && n.setTargetRef(d);
    };
    let i = [];
    const a = () => {
      let d = r.value;
      for (; d = uo(d), d !== null; )
        i.push(d);
      for (const _ of i)
        Q("scroll", _, y, !0);
    }, s = () => {
      for (const d of i)
        X("scroll", d, y, !0);
      i = [];
    }, l = /* @__PURE__ */ new Set(), u = (d) => {
      l.size === 0 && a(), l.has(d) || l.add(d);
    }, p = (d) => {
      l.has(d) && l.delete(d), l.size === 0 && s();
    }, y = () => {
      da(h);
    }, h = () => {
      l.forEach((d) => d());
    }, w = /* @__PURE__ */ new Set(), c = (d) => {
      w.size === 0 && Q("resize", window, v), w.has(d) || w.add(d);
    }, m = (d) => {
      w.has(d) && w.delete(d), w.size === 0 && X("resize", window, v);
    }, v = () => {
      w.forEach((d) => d());
    };
    return $e(() => {
      X("resize", window, v), s();
    }), {
      targetRef: r,
      setTargetRef: o,
      addScrollListener: u,
      removeScrollListener: p,
      addResizeListener: c,
      removeResizeListener: m
    };
  },
  render() {
    return pn("binder", this.$slots);
  }
}), Oa = ue({
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
    return e ? Ht(tr("follower", this.$slots), [
      [t]
    ]) : tr("follower", this.$slots);
  }
}), $a = "@css-render/vue3-ssr";
function Ta(e, t) {
  return `<style cssr-id="${e}">
${t}
</style>`;
}
function Pa(e, t, n) {
  const { styles: r, ids: o } = n;
  o.has(e) || r !== null && (o.add(e), r.push(Ta(e, t)));
}
const Ma = typeof document < "u";
function Nt() {
  if (Ma)
    return;
  const e = re($a, null);
  if (e !== null)
    return {
      adapter: (t, n) => Pa(t, n, e),
      context: e
    };
}
function nr(e, t) {
  console.error(`[vueuc/${e}]: ${t}`);
}
function Aa(e) {
  let t = 0;
  for (let n = 0; n < e.length; ++n)
    e[n] === "&" && ++t;
  return t;
}
const co = /\s*,(?![^(]*\))\s*/g, Ra = /\s+/g;
function Ia(e, t) {
  const n = [];
  return t.split(co).forEach((r) => {
    let o = Aa(r);
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
      i.forEach((s) => {
        e.forEach((l) => {
          a.push(s.replace("&", l));
        });
      }), i = a;
    }
    i.forEach((a) => n.push(a));
  }), n;
}
function Da(e, t) {
  const n = [];
  return t.split(co).forEach((r) => {
    e.forEach((o) => {
      n.push((o && o + " ") + r);
    });
  }), n;
}
function za(e) {
  let t = [""];
  return e.forEach((n) => {
    n = n && n.trim(), // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    n && (n.includes("&") ? t = Ia(t, n) : t = Da(t, n));
  }), t.join(", ").replace(Ra, " ");
}
function rr(e) {
  if (!e)
    return;
  const t = e.parentElement;
  t && t.removeChild(e);
}
function Wt(e, t) {
  return (t ?? document.head).querySelector(`style[cssr-id="${e}"]`);
}
function Ba(e) {
  const t = document.createElement("style");
  return t.setAttribute("cssr-id", e), t;
}
function yt(e) {
  return e ? /^\s*@(s|m)/.test(e) : !1;
}
const Fa = /[A-Z]/g;
function fo(e) {
  return e.replace(Fa, (t) => "-" + t.toLowerCase());
}
function Ha(e, t = "  ") {
  return typeof e == "object" && e !== null ? ` {
` + Object.entries(e).map((n) => t + `  ${fo(n[0])}: ${n[1]};`).join(`
`) + `
` + t + "}" : `: ${e};`;
}
function Na(e, t, n) {
  return typeof e == "function" ? e({
    context: t.context,
    props: n
  }) : e;
}
function or(e, t, n, r) {
  if (!t)
    return "";
  const o = Na(t, n, r);
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
  return i.forEach((s) => {
    const l = o[s];
    if (s === "raw") {
      a.push(`
` + l + `
`);
      return;
    }
    s = fo(s), l != null && a.push(`  ${s}${Ha(l)}`);
  }), e && a.push("}"), a.join(`
`);
}
function vn(e, t, n) {
  e && e.forEach((r) => {
    if (Array.isArray(r))
      vn(r, t, n);
    else if (typeof r == "function") {
      const o = r(t);
      Array.isArray(o) ? vn(o, t, n) : o && n(o);
    } else r && n(r);
  });
}
function po(e, t, n, r, o) {
  const i = e.$;
  let a = "";
  if (!i || typeof i == "string")
    yt(i) ? a = i : t.push(i);
  else if (typeof i == "function") {
    const u = i({
      context: r.context,
      props: o
    });
    yt(u) ? a = u : t.push(u);
  } else if (i.before && i.before(r.context), !i.$ || typeof i.$ == "string")
    yt(i.$) ? a = i.$ : t.push(i.$);
  else if (i.$) {
    const u = i.$({
      context: r.context,
      props: o
    });
    yt(u) ? a = u : t.push(u);
  }
  const s = za(t), l = or(s, e.props, r, o);
  a ? n.push(`${a} {`) : l.length && n.push(l), e.children && vn(e.children, {
    context: r.context,
    props: o
  }, (u) => {
    if (typeof u == "string") {
      const p = or(s, { raw: u }, r, o);
      n.push(p);
    } else
      po(u, t, n, r, o);
  }), t.pop(), a && n.push("}"), i && i.after && i.after(r.context);
}
function Wa(e, t, n) {
  const r = [];
  return po(e, [], r, t, n), r.join(`

`);
}
function mn(e) {
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
function La(e, t, n, r) {
  const { els: o } = t;
  if (n === void 0)
    o.forEach(rr), t.els = [];
  else {
    const i = Wt(n, r);
    i && o.includes(i) && (rr(i), t.els = o.filter((a) => a !== i));
  }
}
function ir(e, t) {
  e.push(t);
}
function ja(e, t, n, r, o, i, a, s, l) {
  let u;
  if (n === void 0 && (u = t.render(r), n = mn(u)), l) {
    l.adapter(n, u ?? t.render(r));
    return;
  }
  s === void 0 && (s = document.head);
  const p = Wt(n, s);
  if (p !== null && !i)
    return p;
  const y = p ?? Ba(n);
  if (u === void 0 && (u = t.render(r)), y.textContent = u, p !== null)
    return p;
  if (a) {
    const h = s.querySelector(`meta[name="${a}"]`);
    if (h)
      return s.insertBefore(y, h), ir(t.els, y), y;
  }
  return o ? s.insertBefore(y, s.querySelector("style, link")) : s.appendChild(y), ir(t.els, y), y;
}
function ka(e) {
  return Wa(this, this.instance, e);
}
function Ua(e = {}) {
  const { id: t, ssr: n, props: r, head: o = !1, force: i = !1, anchorMetaName: a, parent: s } = e;
  return ja(this.instance, this, t, r, o, i, a, s, n);
}
function Va(e = {}) {
  const { id: t, parent: n } = e;
  La(this.instance, this, t, n);
}
const St = function(e, t, n, r) {
  return {
    instance: e,
    $: t,
    props: n,
    children: r,
    els: [],
    render: ka,
    mount: Ua,
    unmount: Va
  };
}, Ga = function(e, t, n, r) {
  return Array.isArray(t) ? St(e, { $: null }, null, t) : Array.isArray(n) ? St(e, t, null, n) : Array.isArray(r) ? St(e, t, n, r) : St(e, t, n, null);
};
function ho(e = {}) {
  const t = {
    c: (...n) => Ga(t, ...n),
    use: (n, ...r) => n.install(t, ...r),
    find: Wt,
    context: {},
    config: e
  };
  return t;
}
function Xa(e, t) {
  if (e === void 0)
    return !1;
  if (t) {
    const { context: { ids: n } } = t;
    return n.has(e);
  }
  return Wt(e) !== null;
}
const { c: xt } = ho(), Ka = "vueuc-style";
function ar(e) {
  return typeof e == "string" ? document.querySelector(e) : e();
}
const Ya = ue({
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
      showTeleport: na(Ce(e, "show")),
      mergedTo: D(() => {
        const { to: t } = e;
        return t ?? "body";
      })
    };
  },
  render() {
    return this.showTeleport ? this.disabled ? pn("lazy-teleport", this.$slots) : T(zi, {
      disabled: this.disabled,
      to: this.mergedTo
    }, pn("lazy-teleport", this.$slots)) : null;
  }
}), _t = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, sr = {
  start: "end",
  center: "center",
  end: "start"
}, Qt = {
  top: "height",
  bottom: "height",
  left: "width",
  right: "width"
}, Ja = {
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
}, Za = {
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
}, qa = {
  "bottom-start": "right",
  "bottom-end": "left",
  "top-start": "right",
  "top-end": "left",
  "right-start": "bottom",
  "right-end": "top",
  "left-start": "bottom",
  "left-end": "top"
}, lr = {
  top: !0,
  bottom: !1,
  left: !0,
  right: !1
  // left--
}, ur = {
  top: "end",
  bottom: "start",
  left: "end",
  right: "start"
};
function Qa(e, t, n, r, o, i) {
  if (!o || i)
    return { placement: e, top: 0, left: 0 };
  const [a, s] = e.split("-");
  let l = s ?? "center", u = {
    top: 0,
    left: 0
  };
  const p = (w, c, m) => {
    let v = 0, d = 0;
    const _ = n[w] - t[c] - t[w];
    return _ > 0 && r && (m ? d = lr[c] ? _ : -_ : v = lr[c] ? _ : -_), {
      left: v,
      top: d
    };
  }, y = a === "left" || a === "right";
  if (l !== "center") {
    const w = qa[e], c = _t[w], m = Qt[w];
    if (n[m] > t[m]) {
      if (
        // current space is not enough
        // ----------[ target ]---------|
        // -------[     follower        ]
        t[w] + t[m] < n[m]
      ) {
        const v = (n[m] - t[m]) / 2;
        t[w] < v || t[c] < v ? t[w] < t[c] ? (l = sr[s], u = p(m, c, y)) : u = p(m, w, y) : l = "center";
      }
    } else n[m] < t[m] && t[c] < 0 && // opposite align has larger space
    // ------------[   target   ]
    // ----------------[follower]
    t[w] > t[c] && (l = sr[s]);
  } else {
    const w = a === "bottom" || a === "top" ? "left" : "top", c = _t[w], m = Qt[w], v = (n[m] - t[m]) / 2;
    // center is not enough
    // ----------- [ target ]--|
    // -------[     follower     ]
    (t[w] < v || t[c] < v) && (t[w] > t[c] ? (l = ur[w], u = p(m, w, y)) : (l = ur[c], u = p(m, c, y)));
  }
  let h = a;
  return (
    // space is not enough
    t[a] < n[Qt[a]] && // opposite position's space is larger
    t[a] < t[_t[a]] && (h = _t[a]), {
      placement: l !== "center" ? `${h}-${l}` : h,
      left: u.left,
      top: u.top
    }
  );
}
function es(e, t) {
  return t ? Za[e] : Ja[e];
}
function ts(e, t, n, r, o, i) {
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
const ns = xt([
  xt(".v-binder-follower-container", {
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    height: "0",
    pointerEvents: "none",
    zIndex: "auto"
  }),
  xt(".v-binder-follower-content", {
    position: "absolute",
    zIndex: "auto"
  }, [
    xt("> *", {
      pointerEvents: "all"
    })
  ])
]), rs = ue({
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
    const t = re("VBinder"), n = pt(() => e.enabled !== void 0 ? e.enabled : e.show), r = M(null), o = M(null), i = () => {
      const { syncTrigger: h } = e;
      h.includes("scroll") && t.addScrollListener(l), h.includes("resize") && t.addResizeListener(l);
    }, a = () => {
      t.removeScrollListener(l), t.removeResizeListener(l);
    };
    He(() => {
      n.value && (l(), i());
    });
    const s = Nt();
    ns.mount({
      id: "vueuc/binder",
      head: !0,
      anchorMetaName: Ka,
      ssr: s
    }), $e(() => {
      a();
    }), ia(() => {
      n.value && l();
    });
    const l = () => {
      if (!n.value)
        return;
      const h = r.value;
      if (h === null)
        return;
      const w = t.targetRef, { x: c, y: m, overlap: v } = e, d = c !== void 0 && m !== void 0 ? _a(c, m) : qt(w);
      h.style.setProperty("--v-target-width", `${Math.round(d.width)}px`), h.style.setProperty("--v-target-height", `${Math.round(d.height)}px`);
      const { width: _, minWidth: A, placement: I, internalShift: B, flip: z } = e;
      h.setAttribute("v-placement", I), v ? h.setAttribute("v-overlap", "") : h.removeAttribute("v-overlap");
      const { style: f } = h;
      _ === "target" ? f.width = `${d.width}px` : _ !== void 0 ? f.width = _ : f.width = "", A === "target" ? f.minWidth = `${d.width}px` : A !== void 0 ? f.minWidth = A : f.minWidth = "";
      const b = qt(h), C = qt(o.value), { left: x, top: R, placement: F } = Qa(I, d, b, B, z, v), L = es(F, v), { left: j, top: S, transform: P } = ts(F, C, d, R, x, v);
      h.setAttribute("v-placement", F), h.style.setProperty("--v-offset-left", `${Math.round(x)}px`), h.style.setProperty("--v-offset-top", `${Math.round(R)}px`), h.style.transform = `translateX(${j}) translateY(${S}) ${P}`, h.style.setProperty("--v-transform-origin", L), h.style.transformOrigin = L;
    };
    ve(n, (h) => {
      h ? (i(), u()) : a();
    });
    const u = () => {
      Bi().then(l).catch((h) => console.error(h));
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
      ve(Ce(e, h), l);
    }), ["teleportDisabled"].forEach((h) => {
      ve(Ce(e, h), u);
    }), ve(Ce(e, "syncTrigger"), (h) => {
      h.includes("resize") ? t.addResizeListener(l) : t.removeResizeListener(l), h.includes("scroll") ? t.addScrollListener(l) : t.removeScrollListener(l);
    });
    const p = ao(), y = pt(() => {
      const { to: h } = e;
      if (h !== void 0)
        return h;
      p.value;
    });
    return {
      VBinder: t,
      mergedEnabled: n,
      offsetContainerRef: o,
      followerRef: r,
      mergedTo: y,
      syncPosition: l
    };
  },
  render() {
    return T(Ya, {
      show: this.show,
      to: this.mergedTo,
      disabled: this.teleportDisabled
    }, {
      default: () => {
        var e, t;
        const n = T("div", {
          class: ["v-binder-follower-container", this.containerClass],
          ref: "offsetContainerRef"
        }, [
          T("div", {
            class: "v-binder-follower-content",
            ref: "followerRef"
          }, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e))
        ]);
        return this.zindexable ? Ht(n, [
          [
            io,
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
var ze = [], os = function() {
  return ze.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, is = function() {
  return ze.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, cr = "ResizeObserver loop completed with undelivered notifications.", as = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: cr
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = cr), window.dispatchEvent(e);
}, ht;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(ht || (ht = {}));
var Be = function(e) {
  return Object.freeze(e);
}, ss = /* @__PURE__ */ function() {
  function e(t, n) {
    this.inlineSize = t, this.blockSize = n, Be(this);
  }
  return e;
}(), vo = function() {
  function e(t, n, r, o) {
    return this.x = t, this.y = n, this.width = r, this.height = o, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Be(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, n = t.x, r = t.y, o = t.top, i = t.right, a = t.bottom, s = t.left, l = t.width, u = t.height;
    return { x: n, y: r, top: o, right: i, bottom: a, left: s, width: l, height: u };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), $n = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, mo = function(e) {
  if ($n(e)) {
    var t = e.getBBox(), n = t.width, r = t.height;
    return !n && !r;
  }
  var o = e, i = o.offsetWidth, a = o.offsetHeight;
  return !(i || a || e.getClientRects().length);
}, dr = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var n = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(n && e instanceof n.Element);
}, ls = function(e) {
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
}, dt = typeof window < "u" ? window : {}, Ct = /* @__PURE__ */ new WeakMap(), fr = /auto|scroll/, us = /^tb|vertical/, cs = /msie|trident/i.test(dt.navigator && dt.navigator.userAgent), de = function(e) {
  return parseFloat(e || "0");
}, Ke = function(e, t, n) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = !1), new ss((n ? t : e) || 0, (n ? e : t) || 0);
}, pr = Be({
  devicePixelContentBoxSize: Ke(),
  borderBoxSize: Ke(),
  contentBoxSize: Ke(),
  contentRect: new vo(0, 0, 0, 0)
}), go = function(e, t) {
  if (t === void 0 && (t = !1), Ct.has(e) && !t)
    return Ct.get(e);
  if (mo(e))
    return Ct.set(e, pr), pr;
  var n = getComputedStyle(e), r = $n(e) && e.ownerSVGElement && e.getBBox(), o = !cs && n.boxSizing === "border-box", i = us.test(n.writingMode || ""), a = !r && fr.test(n.overflowY || ""), s = !r && fr.test(n.overflowX || ""), l = r ? 0 : de(n.paddingTop), u = r ? 0 : de(n.paddingRight), p = r ? 0 : de(n.paddingBottom), y = r ? 0 : de(n.paddingLeft), h = r ? 0 : de(n.borderTopWidth), w = r ? 0 : de(n.borderRightWidth), c = r ? 0 : de(n.borderBottomWidth), m = r ? 0 : de(n.borderLeftWidth), v = y + u, d = l + p, _ = m + w, A = h + c, I = s ? e.offsetHeight - A - e.clientHeight : 0, B = a ? e.offsetWidth - _ - e.clientWidth : 0, z = o ? v + _ : 0, f = o ? d + A : 0, b = r ? r.width : de(n.width) - z - B, C = r ? r.height : de(n.height) - f - I, x = b + v + B + _, R = C + d + I + A, F = Be({
    devicePixelContentBoxSize: Ke(Math.round(b * devicePixelRatio), Math.round(C * devicePixelRatio), i),
    borderBoxSize: Ke(x, R, i),
    contentBoxSize: Ke(b, C, i),
    contentRect: new vo(y, l, b, C)
  });
  return Ct.set(e, F), F;
}, bo = function(e, t, n) {
  var r = go(e, n), o = r.borderBoxSize, i = r.contentBoxSize, a = r.devicePixelContentBoxSize;
  switch (t) {
    case ht.DEVICE_PIXEL_CONTENT_BOX:
      return a;
    case ht.BORDER_BOX:
      return o;
    default:
      return i;
  }
}, ds = /* @__PURE__ */ function() {
  function e(t) {
    var n = go(t);
    this.target = t, this.contentRect = n.contentRect, this.borderBoxSize = Be([n.borderBoxSize]), this.contentBoxSize = Be([n.contentBoxSize]), this.devicePixelContentBoxSize = Be([n.devicePixelContentBoxSize]);
  }
  return e;
}(), wo = function(e) {
  if (mo(e))
    return 1 / 0;
  for (var t = 0, n = e.parentNode; n; )
    t += 1, n = n.parentNode;
  return t;
}, fs = function() {
  var e = 1 / 0, t = [];
  ze.forEach(function(a) {
    if (a.activeTargets.length !== 0) {
      var s = [];
      a.activeTargets.forEach(function(u) {
        var p = new ds(u.target), y = wo(u.target);
        s.push(p), u.lastReportedSize = bo(u.target, u.observedBox), y < e && (e = y);
      }), t.push(function() {
        a.callback.call(a.observer, s, a.observer);
      }), a.activeTargets.splice(0, a.activeTargets.length);
    }
  });
  for (var n = 0, r = t; n < r.length; n++) {
    var o = r[n];
    o();
  }
  return e;
}, hr = function(e) {
  ze.forEach(function(n) {
    n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(o) {
      o.isActive() && (wo(o.target) > e ? n.activeTargets.push(o) : n.skippedTargets.push(o));
    });
  });
}, ps = function() {
  var e = 0;
  for (hr(e); os(); )
    e = fs(), hr(e);
  return is() && as(), e > 0;
}, en, yo = [], hs = function() {
  return yo.splice(0).forEach(function(e) {
    return e();
  });
}, vs = function(e) {
  if (!en) {
    var t = 0, n = document.createTextNode(""), r = { characterData: !0 };
    new MutationObserver(function() {
      return hs();
    }).observe(n, r), en = function() {
      n.textContent = "".concat(t ? t-- : t++);
    };
  }
  yo.push(e), en();
}, ms = function(e) {
  vs(function() {
    requestAnimationFrame(e);
  });
}, Mt = 0, gs = function() {
  return !!Mt;
}, bs = 250, ws = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, vr = [
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
], mr = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, tn = !1, ys = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var n = this;
    if (t === void 0 && (t = bs), !tn) {
      tn = !0;
      var r = mr(t);
      ms(function() {
        var o = !1;
        try {
          o = ps();
        } finally {
          if (tn = !1, t = r - mr(), !gs())
            return;
          o ? n.run(1e3) : t > 0 ? n.run(t) : n.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, n = function() {
      return t.observer && t.observer.observe(document.body, ws);
    };
    document.body ? n() : dt.addEventListener("DOMContentLoaded", n);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), vr.forEach(function(n) {
      return dt.addEventListener(n, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), vr.forEach(function(n) {
      return dt.removeEventListener(n, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), gn = new ys(), gr = function(e) {
  !Mt && e > 0 && gn.start(), Mt += e, !Mt && gn.stop();
}, Ss = function(e) {
  return !$n(e) && !ls(e) && getComputedStyle(e).display === "inline";
}, xs = function() {
  function e(t, n) {
    this.target = t, this.observedBox = n || ht.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = bo(this.target, this.observedBox, !0);
    return Ss(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), _s = /* @__PURE__ */ function() {
  function e(t, n) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = n;
  }
  return e;
}(), Et = /* @__PURE__ */ new WeakMap(), br = function(e, t) {
  for (var n = 0; n < e.length; n += 1)
    if (e[n].target === t)
      return n;
  return -1;
}, Ot = function() {
  function e() {
  }
  return e.connect = function(t, n) {
    var r = new _s(t, n);
    Et.set(t, r);
  }, e.observe = function(t, n, r) {
    var o = Et.get(t), i = o.observationTargets.length === 0;
    br(o.observationTargets, n) < 0 && (i && ze.push(o), o.observationTargets.push(new xs(n, r && r.box)), gr(1), gn.schedule());
  }, e.unobserve = function(t, n) {
    var r = Et.get(t), o = br(r.observationTargets, n), i = r.observationTargets.length === 1;
    o >= 0 && (i && ze.splice(ze.indexOf(r), 1), r.observationTargets.splice(o, 1), gr(-1));
  }, e.disconnect = function(t) {
    var n = this, r = Et.get(t);
    r.observationTargets.slice().forEach(function(o) {
      return n.unobserve(t, o.target);
    }), r.activeTargets.splice(0, r.activeTargets.length);
  }, e;
}(), Cs = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Ot.connect(this, t);
  }
  return e.prototype.observe = function(t, n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!dr(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Ot.observe(this, t, n);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!dr(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Ot.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    Ot.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
class Es {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || Cs)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
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
const wr = new Es(), yr = ue({
  name: "ResizeObserver",
  props: {
    onResize: Function
  },
  setup(e) {
    let t = !1;
    const n = to().proxy;
    function r(o) {
      const { onResize: i } = e;
      i !== void 0 && i(o);
    }
    He(() => {
      const o = n.$el;
      if (o === void 0) {
        nr("resize-observer", "$el does not exist.");
        return;
      }
      if (o.nextElementSibling !== o.nextSibling && o.nodeType === 3 && o.nodeValue !== "") {
        nr("resize-observer", "$el can not be observed (it may be a text node).");
        return;
      }
      o.nextElementSibling !== null && (wr.registerHandler(o.nextElementSibling, r), t = !0);
    }), $e(() => {
      t && wr.unregisterHandler(n.$el.nextElementSibling);
    });
  },
  render() {
    return Fi(this.$slots, "default");
  }
});
function So(e) {
  return e instanceof HTMLElement;
}
function xo(e) {
  for (let t = 0; t < e.childNodes.length; t++) {
    const n = e.childNodes[t];
    if (So(n) && (Co(n) || xo(n)))
      return !0;
  }
  return !1;
}
function _o(e) {
  for (let t = e.childNodes.length - 1; t >= 0; t--) {
    const n = e.childNodes[t];
    if (So(n) && (Co(n) || _o(n)))
      return !0;
  }
  return !1;
}
function Co(e) {
  if (!Os(e))
    return !1;
  try {
    e.focus({ preventScroll: !0 });
  } catch {
  }
  return document.activeElement === e;
}
function Os(e) {
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
let rt = [];
const $s = ue({
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
    const t = xa(), n = M(null), r = M(null);
    let o = !1, i = !1;
    const a = typeof document > "u" ? null : document.activeElement;
    function s() {
      return rt[rt.length - 1] === t;
    }
    function l(v) {
      var d;
      v.code === "Escape" && s() && ((d = e.onEsc) === null || d === void 0 || d.call(e, v));
    }
    He(() => {
      ve(() => e.active, (v) => {
        v ? (y(), Q("keydown", document, l)) : (X("keydown", document, l), o && h());
      }, {
        immediate: !0
      });
    }), $e(() => {
      X("keydown", document, l), o && h();
    });
    function u(v) {
      if (!i && s()) {
        const d = p();
        if (d === null || d.contains(Rt(v)))
          return;
        w("first");
      }
    }
    function p() {
      const v = n.value;
      if (v === null)
        return null;
      let d = v;
      for (; d = d.nextSibling, !(d === null || d instanceof Element && d.tagName === "DIV"); )
        ;
      return d;
    }
    function y() {
      var v;
      if (!e.disabled) {
        if (rt.push(t), e.autoFocus) {
          const { initialFocusTo: d } = e;
          d === void 0 ? w("first") : (v = ar(d)) === null || v === void 0 || v.focus({ preventScroll: !0 });
        }
        o = !0, document.addEventListener("focus", u, !0);
      }
    }
    function h() {
      var v;
      if (e.disabled || (document.removeEventListener("focus", u, !0), rt = rt.filter((_) => _ !== t), s()))
        return;
      const { finalFocusTo: d } = e;
      d !== void 0 ? (v = ar(d)) === null || v === void 0 || v.focus({ preventScroll: !0 }) : e.returnFocusOnDeactivated && a instanceof HTMLElement && (i = !0, a.focus({ preventScroll: !0 }), i = !1);
    }
    function w(v) {
      if (s() && e.active) {
        const d = n.value, _ = r.value;
        if (d !== null && _ !== null) {
          const A = p();
          if (A == null || A === _) {
            i = !0, d.focus({ preventScroll: !0 }), i = !1;
            return;
          }
          i = !0;
          const I = v === "first" ? xo(A) : _o(A);
          i = !1, I || (i = !0, d.focus({ preventScroll: !0 }), i = !1);
        }
      }
    }
    function c(v) {
      if (i)
        return;
      const d = p();
      d !== null && (v.relatedTarget !== null && d.contains(v.relatedTarget) ? w("last") : w("first"));
    }
    function m(v) {
      i || (v.relatedTarget !== null && v.relatedTarget === n.value ? w("last") : w("first"));
    }
    return {
      focusableStartRef: n,
      focusableEndRef: r,
      focusableStyle: "position: absolute; height: 0; width: 0;",
      handleStartFocus: c,
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
    return T(me, null, [
      T("div", {
        "aria-hidden": "true",
        tabindex: t ? "0" : "-1",
        ref: "focusableStartRef",
        style: n,
        onFocus: this.handleStartFocus
      }),
      e(),
      T("div", {
        "aria-hidden": "true",
        style: n,
        ref: "focusableEndRef",
        tabindex: t ? "0" : "-1",
        onFocus: this.handleEndFocus
      })
    ]);
  }
});
const Ts = "n-internal-select-menu-body", Eo = "n-drawer-body", Oo = "n-modal-body", $o = "n-popover-body", To = "__disabled__";
function Ze(e) {
  const t = re(Oo, null), n = re(Eo, null), r = re($o, null), o = re(Ts, null), i = M();
  if (typeof document < "u") {
    i.value = document.fullscreenElement;
    const a = () => {
      i.value = document.fullscreenElement;
    };
    He(() => {
      Q("fullscreenchange", document, a);
    }), $e(() => {
      X("fullscreenchange", document, a);
    });
  }
  return pt(() => {
    var a;
    const {
      to: s
    } = e;
    return s !== void 0 ? s === !1 ? To : s === !0 ? i.value || "body" : s : t != null && t.value ? (a = t.value.$el) !== null && a !== void 0 ? a : t.value : n != null && n.value ? n.value : r != null && r.value ? r.value : o != null && o.value ? o.value : s ?? (i.value || "body");
  });
}
Ze.tdkey = To;
Ze.propTo = {
  type: [String, Object, Boolean],
  default: void 0
};
function Ps(e) {
  const t = {
    isDeactivated: !1
  };
  let n = !1;
  return Hi(() => {
    if (t.isDeactivated = !1, !n) {
      n = !0;
      return;
    }
    e();
  }), Ni(() => {
    t.isDeactivated = !0, n || (n = !0);
  }), t;
}
const Ms = /^(\d|\.)+$/, Sr = /(\d|\.)+/;
function nn(e, {
  c: t = 1,
  offset: n = 0,
  attachPx: r = !0
} = {}) {
  if (typeof e == "number") {
    const o = (e + n) * t;
    return o === 0 ? "0" : `${o}px`;
  } else if (typeof e == "string")
    if (Ms.test(e)) {
      const o = (Number(e) + n) * t;
      return r ? o === 0 ? "0" : `${o}px` : `${o}`;
    } else {
      const o = Sr.exec(e);
      return o ? e.replace(Sr, String((Number(o[0]) + n) * t)) : e;
    }
  return e;
}
function xr(e) {
  const {
    left: t,
    right: n,
    top: r,
    bottom: o
  } = at(e);
  return `${r} ${t} ${o} ${n}`;
}
var _r = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\mmj\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_17748_VZZMJJWFFMGMQMSF", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-QBN3J51", ComSpec: "C:\\WINDOWS\\system32\\cmd.exe", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "d:\\install\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\mmj", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\mmj", INIT_CWD: "F:\\Work\\lowcode\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\mmj\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-QBN3J51", NODE: "C:\\Program Files\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com/", npm_config_user_agent: "pnpm/9.15.4 npm/? node/v18.20.2 win32 x64", npm_execpath: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "C:\\Program Files\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "8", NVM_HOME: "D:\\install\\nvm", NVM_SYMLINK: "C:\\Program Files\\nodejs", OneDrive: "C:\\Users\\mmj\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\Work\\lowcode\\lowcode-component\\scripts\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\Work\\lowcode\\lowcode-component\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\java8path;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Git\\cmd;C:\\Users\\mmj\\AppData\\Local\\Microsoft\\WindowsApps;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Microsoft VS Code\\bin;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\Work\\lowcode\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "AMD64 Family 23 Model 24 Stepping 1, AuthenticAMD", PROCESSOR_LEVEL: "23", PROCESSOR_REVISION: "1801", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\mmj\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\WINDOWS", TEMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.96.4", TMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-QBN3J51", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-QBN3J51", USERNAME: "mmj", USERPROFILE: "C:\\Users\\mmj", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "d:\\install\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "D:\\install\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-780eceaefd-sock", VSCODE_INJECTION: "1", windir: "C:\\WINDOWS" };
function As(e) {
  let t = ".", n = "__", r = "--", o;
  {
    let c = e.blockPrefix;
    c && (t = c), c = e.elementPrefix, c && (n = c), c = e.modifierPrefix, c && (r = c);
  }
  const i = {
    install(c) {
      o = c.c;
      const m = c.context;
      m.bem = {}, m.bem.b = null, m.bem.els = null;
    }
  };
  function a(c) {
    let m, v;
    return {
      before(d) {
        m = d.bem.b, v = d.bem.els, d.bem.els = null;
      },
      after(d) {
        d.bem.b = m, d.bem.els = v;
      },
      $({ context: d, props: _ }) {
        return c = typeof c == "string" ? c : c({ context: d, props: _ }), d.bem.b = c, `${(_ == null ? void 0 : _.bPrefix) || t}${d.bem.b}`;
      }
    };
  }
  function s(c) {
    let m;
    return {
      before(v) {
        m = v.bem.els;
      },
      after(v) {
        v.bem.els = m;
      },
      $({ context: v, props: d }) {
        return c = typeof c == "string" ? c : c({ context: v, props: d }), v.bem.els = c.split(",").map((_) => _.trim()), v.bem.els.map((_) => `${(d == null ? void 0 : d.bPrefix) || t}${v.bem.b}${n}${_}`).join(", ");
      }
    };
  }
  function l(c) {
    return {
      $({ context: m, props: v }) {
        c = typeof c == "string" ? c : c({ context: m, props: v });
        const d = c.split(",").map((I) => I.trim());
        function _(I) {
          return d.map((B) => `&${(v == null ? void 0 : v.bPrefix) || t}${m.bem.b}${I !== void 0 ? `${n}${I}` : ""}${r}${B}`).join(", ");
        }
        const A = m.bem.els;
        if (A !== null) {
          if (_r.NODE_ENV !== "production" && A.length >= 2)
            throw Error(`[css-render/plugin-bem]: m(${c}) is invalid, using modifier inside multiple elements is not allowed`);
          return _(A[0]);
        } else
          return _();
      }
    };
  }
  function u(c) {
    return {
      $({ context: m, props: v }) {
        c = typeof c == "string" ? c : c({ context: m, props: v });
        const d = m.bem.els;
        if (_r.NODE_ENV !== "production" && d !== null && d.length >= 2)
          throw Error(`[css-render/plugin-bem]: notM(${c}) is invalid, using modifier inside multiple elements is not allowed`);
        return `&:not(${(v == null ? void 0 : v.bPrefix) || t}${m.bem.b}${d !== null && d.length > 0 ? `${n}${d[0]}` : ""}${r}${c})`;
      }
    };
  }
  return Object.assign(i, {
    cB: (...c) => o(a(c[0]), c[1], c[2]),
    cE: (...c) => o(s(c[0]), c[1], c[2]),
    cM: (...c) => o(l(c[0]), c[1], c[2]),
    cNotM: (...c) => o(u(c[0]), c[1], c[2])
  }), i;
}
const Rs = "n", Is = `.${Rs}-`, Ds = "__", zs = "--", Po = ho(), Mo = As({
  blockPrefix: Is,
  elementPrefix: Ds,
  modifierPrefix: zs
});
Po.use(Mo);
const {
  c: W,
  find: xf
} = Po, {
  cB: ne,
  cE: De,
  cM: le,
  cNotM: rn
} = Mo, Bs = (...e) => W(">", [ne(...e)]);
let on;
function Fs() {
  return on === void 0 && (on = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")), on;
}
const Cr = /* @__PURE__ */ new Set();
function ot(e, t) {
  const n = `[naive/${e}]: ${t}`;
  Cr.has(n) || (Cr.add(n), console.error(n));
}
function Er(e, t) {
  console.error(`[naive/${e}]: ${t}`);
}
function Hs(e, t) {
  throw new Error(`[naive/${e}]: ${t}`);
}
function st(e, ...t) {
  if (Array.isArray(e))
    e.forEach((n) => st(n, ...t));
  else
    return e(...t);
}
function bn(e, t = !0, n = []) {
  return e.forEach((r) => {
    if (r !== null) {
      if (typeof r != "object") {
        (typeof r == "string" || typeof r == "number") && n.push(eo(String(r)));
        return;
      }
      if (Array.isArray(r)) {
        bn(r, t, n);
        return;
      }
      if (r.type === me) {
        if (r.children === null) return;
        Array.isArray(r.children) && bn(r.children, t, n);
      } else {
        if (r.type === On && t) return;
        n.push(r);
      }
    }
  }), n;
}
function Ns(e, t = "default", n = void 0) {
  const r = e[t];
  if (!r)
    return Er("getFirstSlotVNode", `slot[${t}] is empty`), null;
  const o = bn(r(n));
  return o.length === 1 ? o[0] : (Er("getFirstSlotVNode", `slot[${t}] should have exactly one child`), null);
}
function Ws(e, t = [], n) {
  const r = {};
  return t.forEach((o) => {
    r[o] = e[o];
  }), Object.assign(r, n);
}
function Tn(e) {
  return e.some((t) => Wi(t) ? !(t.type === On || t.type === me && !Tn(t.children)) : !0) ? e : null;
}
function an(e, t) {
  const n = e && Tn(e());
  return t(n || null);
}
function Or(e) {
  return !(e && Tn(e()));
}
const $r = ue({
  render() {
    var e, t;
    return (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e);
  }
}), Lt = "n-config-provider", Ls = "n";
function Ao(e = {}, t = {
  defaultBordered: !0
}) {
  const n = re(Lt, null);
  return {
    // NConfigProvider,
    inlineThemeDisabled: n == null ? void 0 : n.inlineThemeDisabled,
    mergedRtlRef: n == null ? void 0 : n.mergedRtlRef,
    mergedComponentPropsRef: n == null ? void 0 : n.mergedComponentPropsRef,
    mergedBreakpointsRef: n == null ? void 0 : n.mergedBreakpointsRef,
    mergedBorderedRef: D(() => {
      var r, o;
      const {
        bordered: i
      } = e;
      return i !== void 0 ? i : (o = (r = n == null ? void 0 : n.mergedBorderedRef.value) !== null && r !== void 0 ? r : t.defaultBordered) !== null && o !== void 0 ? o : !0;
    }),
    mergedClsPrefixRef: n ? n.mergedClsPrefixRef : Li(Ls),
    namespaceRef: D(() => n == null ? void 0 : n.mergedNamespaceRef.value)
  };
}
function Ro(e, t, n, r) {
  n || Hs("useThemeClass", "cssVarsRef is not passed");
  const o = re(Lt, null), i = o == null ? void 0 : o.mergedThemeHashRef, a = o == null ? void 0 : o.styleMountTarget, s = M(""), l = Nt();
  let u;
  const p = `__${e}`, y = () => {
    let h = p;
    const w = i == null ? void 0 : i.value;
    w && (h += `-${w}`);
    const {
      themeOverrides: c,
      builtinThemeOverrides: m
    } = r;
    c && (h += `-${mn(JSON.stringify(c))}`), m && (h += `-${mn(JSON.stringify(m))}`), s.value = h, u = () => {
      const v = n.value;
      let d = "";
      for (const _ in v)
        d += `${_}: ${v[_]};`;
      W(`.${h}`, d).mount({
        id: h,
        ssr: l,
        parent: a
      }), u = void 0;
    };
  };
  return Ye(() => {
    y();
  }), {
    themeClass: s,
    onRender: () => {
      u == null || u();
    }
  };
}
var Io = typeof global == "object" && global && global.Object === Object && global, js = typeof self == "object" && self && self.Object === Object && self, pe = Io || js || Function("return this")(), Ee = pe.Symbol, Do = Object.prototype, ks = Do.hasOwnProperty, Us = Do.toString, it = Ee ? Ee.toStringTag : void 0;
function Vs(e) {
  var t = ks.call(e, it), n = e[it];
  try {
    e[it] = void 0;
    var r = !0;
  } catch {
  }
  var o = Us.call(e);
  return r && (t ? e[it] = n : delete e[it]), o;
}
var Gs = Object.prototype, Xs = Gs.toString;
function Ks(e) {
  return Xs.call(e);
}
var Ys = "[object Null]", Js = "[object Undefined]", Tr = Ee ? Ee.toStringTag : void 0;
function Ne(e) {
  return e == null ? e === void 0 ? Js : Ys : Tr && Tr in Object(e) ? Vs(e) : Ks(e);
}
function Oe(e) {
  return e != null && typeof e == "object";
}
var Zs = "[object Symbol]";
function Pn(e) {
  return typeof e == "symbol" || Oe(e) && Ne(e) == Zs;
}
function zo(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var ae = Array.isArray, Pr = Ee ? Ee.prototype : void 0, Mr = Pr ? Pr.toString : void 0;
function Bo(e) {
  if (typeof e == "string")
    return e;
  if (ae(e))
    return zo(e, Bo) + "";
  if (Pn(e))
    return Mr ? Mr.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Te(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Mn(e) {
  return e;
}
var qs = "[object AsyncFunction]", Qs = "[object Function]", el = "[object GeneratorFunction]", tl = "[object Proxy]";
function An(e) {
  if (!Te(e))
    return !1;
  var t = Ne(e);
  return t == Qs || t == el || t == qs || t == tl;
}
var sn = pe["__core-js_shared__"], Ar = function() {
  var e = /[^.]+$/.exec(sn && sn.keys && sn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function nl(e) {
  return !!Ar && Ar in e;
}
var rl = Function.prototype, ol = rl.toString;
function We(e) {
  if (e != null) {
    try {
      return ol.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var il = /[\\^$.*+?()[\]{}|]/g, al = /^\[object .+?Constructor\]$/, sl = Function.prototype, ll = Object.prototype, ul = sl.toString, cl = ll.hasOwnProperty, dl = RegExp(
  "^" + ul.call(cl).replace(il, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function fl(e) {
  if (!Te(e) || nl(e))
    return !1;
  var t = An(e) ? dl : al;
  return t.test(We(e));
}
function pl(e, t) {
  return e == null ? void 0 : e[t];
}
function Le(e, t) {
  var n = pl(e, t);
  return fl(n) ? n : void 0;
}
var wn = Le(pe, "WeakMap"), Rr = Object.create, hl = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!Te(t))
      return {};
    if (Rr)
      return Rr(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
function vl(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
function ml(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var gl = 800, bl = 16, wl = Date.now;
function yl(e) {
  var t = 0, n = 0;
  return function() {
    var r = wl(), o = bl - (r - n);
    if (n = r, o > 0) {
      if (++t >= gl)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Sl(e) {
  return function() {
    return e;
  };
}
var It = function() {
  try {
    var e = Le(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), xl = It ? function(e, t) {
  return It(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Sl(t),
    writable: !0
  });
} : Mn, _l = yl(xl), Cl = 9007199254740991, El = /^(?:0|[1-9]\d*)$/;
function Rn(e, t) {
  var n = typeof e;
  return t = t ?? Cl, !!t && (n == "number" || n != "symbol" && El.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function In(e, t, n) {
  t == "__proto__" && It ? It(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function gt(e, t) {
  return e === t || e !== e && t !== t;
}
var Ol = Object.prototype, $l = Ol.hasOwnProperty;
function Tl(e, t, n) {
  var r = e[t];
  (!($l.call(e, t) && gt(r, n)) || n === void 0 && !(t in e)) && In(e, t, n);
}
function Pl(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var i = -1, a = t.length; ++i < a; ) {
    var s = t[i], l = void 0;
    l === void 0 && (l = e[s]), o ? In(n, s, l) : Tl(n, s, l);
  }
  return n;
}
var Ir = Math.max;
function Ml(e, t, n) {
  return t = Ir(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, i = Ir(r.length - t, 0), a = Array(i); ++o < i; )
      a[o] = r[t + o];
    o = -1;
    for (var s = Array(t + 1); ++o < t; )
      s[o] = r[o];
    return s[t] = n(a), vl(e, this, s);
  };
}
function Al(e, t) {
  return _l(Ml(e, t, Mn), e + "");
}
var Rl = 9007199254740991;
function Dn(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Rl;
}
function et(e) {
  return e != null && Dn(e.length) && !An(e);
}
function Il(e, t, n) {
  if (!Te(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? et(n) && Rn(t, n.length) : r == "string" && t in n) ? gt(n[t], e) : !1;
}
function Dl(e) {
  return Al(function(t, n) {
    var r = -1, o = n.length, i = o > 1 ? n[o - 1] : void 0, a = o > 2 ? n[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (o--, i) : void 0, a && Il(n[0], n[1], a) && (i = o < 3 ? void 0 : i, o = 1), t = Object(t); ++r < o; ) {
      var s = n[r];
      s && e(t, s, r, i);
    }
    return t;
  });
}
var zl = Object.prototype;
function zn(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || zl;
  return e === n;
}
function Bl(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var Fl = "[object Arguments]";
function Dr(e) {
  return Oe(e) && Ne(e) == Fl;
}
var Fo = Object.prototype, Hl = Fo.hasOwnProperty, Nl = Fo.propertyIsEnumerable, Dt = Dr(/* @__PURE__ */ function() {
  return arguments;
}()) ? Dr : function(e) {
  return Oe(e) && Hl.call(e, "callee") && !Nl.call(e, "callee");
};
function Wl() {
  return !1;
}
var Ho = typeof exports == "object" && exports && !exports.nodeType && exports, zr = Ho && typeof module == "object" && module && !module.nodeType && module, Ll = zr && zr.exports === Ho, Br = Ll ? pe.Buffer : void 0, jl = Br ? Br.isBuffer : void 0, zt = jl || Wl, kl = "[object Arguments]", Ul = "[object Array]", Vl = "[object Boolean]", Gl = "[object Date]", Xl = "[object Error]", Kl = "[object Function]", Yl = "[object Map]", Jl = "[object Number]", Zl = "[object Object]", ql = "[object RegExp]", Ql = "[object Set]", eu = "[object String]", tu = "[object WeakMap]", nu = "[object ArrayBuffer]", ru = "[object DataView]", ou = "[object Float32Array]", iu = "[object Float64Array]", au = "[object Int8Array]", su = "[object Int16Array]", lu = "[object Int32Array]", uu = "[object Uint8Array]", cu = "[object Uint8ClampedArray]", du = "[object Uint16Array]", fu = "[object Uint32Array]", N = {};
N[ou] = N[iu] = N[au] = N[su] = N[lu] = N[uu] = N[cu] = N[du] = N[fu] = !0;
N[kl] = N[Ul] = N[nu] = N[Vl] = N[ru] = N[Gl] = N[Xl] = N[Kl] = N[Yl] = N[Jl] = N[Zl] = N[ql] = N[Ql] = N[eu] = N[tu] = !1;
function pu(e) {
  return Oe(e) && Dn(e.length) && !!N[Ne(e)];
}
function hu(e) {
  return function(t) {
    return e(t);
  };
}
var No = typeof exports == "object" && exports && !exports.nodeType && exports, ft = No && typeof module == "object" && module && !module.nodeType && module, vu = ft && ft.exports === No, ln = vu && Io.process, Fr = function() {
  try {
    var e = ft && ft.require && ft.require("util").types;
    return e || ln && ln.binding && ln.binding("util");
  } catch {
  }
}(), Hr = Fr && Fr.isTypedArray, Bn = Hr ? hu(Hr) : pu, mu = Object.prototype, gu = mu.hasOwnProperty;
function Wo(e, t) {
  var n = ae(e), r = !n && Dt(e), o = !n && !r && zt(e), i = !n && !r && !o && Bn(e), a = n || r || o || i, s = a ? Bl(e.length, String) : [], l = s.length;
  for (var u in e)
    (t || gu.call(e, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Rn(u, l))) && s.push(u);
  return s;
}
function Lo(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var bu = Lo(Object.keys, Object), wu = Object.prototype, yu = wu.hasOwnProperty;
function Su(e) {
  if (!zn(e))
    return bu(e);
  var t = [];
  for (var n in Object(e))
    yu.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Fn(e) {
  return et(e) ? Wo(e) : Su(e);
}
function xu(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var _u = Object.prototype, Cu = _u.hasOwnProperty;
function Eu(e) {
  if (!Te(e))
    return xu(e);
  var t = zn(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !Cu.call(e, r)) || n.push(r);
  return n;
}
function jo(e) {
  return et(e) ? Wo(e, !0) : Eu(e);
}
var Ou = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, $u = /^\w*$/;
function Hn(e, t) {
  if (ae(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Pn(e) ? !0 : $u.test(e) || !Ou.test(e) || t != null && e in Object(t);
}
var vt = Le(Object, "create");
function Tu() {
  this.__data__ = vt ? vt(null) : {}, this.size = 0;
}
function Pu(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Mu = "__lodash_hash_undefined__", Au = Object.prototype, Ru = Au.hasOwnProperty;
function Iu(e) {
  var t = this.__data__;
  if (vt) {
    var n = t[e];
    return n === Mu ? void 0 : n;
  }
  return Ru.call(t, e) ? t[e] : void 0;
}
var Du = Object.prototype, zu = Du.hasOwnProperty;
function Bu(e) {
  var t = this.__data__;
  return vt ? t[e] !== void 0 : zu.call(t, e);
}
var Fu = "__lodash_hash_undefined__";
function Hu(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = vt && t === void 0 ? Fu : t, this;
}
function Fe(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Fe.prototype.clear = Tu;
Fe.prototype.delete = Pu;
Fe.prototype.get = Iu;
Fe.prototype.has = Bu;
Fe.prototype.set = Hu;
function Nu() {
  this.__data__ = [], this.size = 0;
}
function jt(e, t) {
  for (var n = e.length; n--; )
    if (gt(e[n][0], t))
      return n;
  return -1;
}
var Wu = Array.prototype, Lu = Wu.splice;
function ju(e) {
  var t = this.__data__, n = jt(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Lu.call(t, n, 1), --this.size, !0;
}
function ku(e) {
  var t = this.__data__, n = jt(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Uu(e) {
  return jt(this.__data__, e) > -1;
}
function Vu(e, t) {
  var n = this.__data__, r = jt(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function ge(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ge.prototype.clear = Nu;
ge.prototype.delete = ju;
ge.prototype.get = ku;
ge.prototype.has = Uu;
ge.prototype.set = Vu;
var mt = Le(pe, "Map");
function Gu() {
  this.size = 0, this.__data__ = {
    hash: new Fe(),
    map: new (mt || ge)(),
    string: new Fe()
  };
}
function Xu(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function kt(e, t) {
  var n = e.__data__;
  return Xu(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Ku(e) {
  var t = kt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Yu(e) {
  return kt(this, e).get(e);
}
function Ju(e) {
  return kt(this, e).has(e);
}
function Zu(e, t) {
  var n = kt(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function be(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
be.prototype.clear = Gu;
be.prototype.delete = Ku;
be.prototype.get = Yu;
be.prototype.has = Ju;
be.prototype.set = Zu;
var qu = "Expected a function";
function Nn(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(qu);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], i = n.cache;
    if (i.has(o))
      return i.get(o);
    var a = e.apply(this, r);
    return n.cache = i.set(o, a) || i, a;
  };
  return n.cache = new (Nn.Cache || be)(), n;
}
Nn.Cache = be;
var Qu = 500;
function ec(e) {
  var t = Nn(e, function(r) {
    return n.size === Qu && n.clear(), r;
  }), n = t.cache;
  return t;
}
var tc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, nc = /\\(\\)?/g, rc = ec(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(tc, function(n, r, o, i) {
    t.push(o ? i.replace(nc, "$1") : r || n);
  }), t;
});
function oc(e) {
  return e == null ? "" : Bo(e);
}
function ko(e, t) {
  return ae(e) ? e : Hn(e, t) ? [e] : rc(oc(e));
}
function Ut(e) {
  if (typeof e == "string" || Pn(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Uo(e, t) {
  t = ko(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Ut(t[n++])];
  return n && n == r ? e : void 0;
}
function ic(e, t, n) {
  var r = e == null ? void 0 : Uo(e, t);
  return r === void 0 ? n : r;
}
function ac(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Vo = Lo(Object.getPrototypeOf, Object), sc = "[object Object]", lc = Function.prototype, uc = Object.prototype, Go = lc.toString, cc = uc.hasOwnProperty, dc = Go.call(Object);
function fc(e) {
  if (!Oe(e) || Ne(e) != sc)
    return !1;
  var t = Vo(e);
  if (t === null)
    return !0;
  var n = cc.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Go.call(n) == dc;
}
function pc() {
  this.__data__ = new ge(), this.size = 0;
}
function hc(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function vc(e) {
  return this.__data__.get(e);
}
function mc(e) {
  return this.__data__.has(e);
}
var gc = 200;
function bc(e, t) {
  var n = this.__data__;
  if (n instanceof ge) {
    var r = n.__data__;
    if (!mt || r.length < gc - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new be(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function fe(e) {
  var t = this.__data__ = new ge(e);
  this.size = t.size;
}
fe.prototype.clear = pc;
fe.prototype.delete = hc;
fe.prototype.get = vc;
fe.prototype.has = mc;
fe.prototype.set = bc;
var Xo = typeof exports == "object" && exports && !exports.nodeType && exports, Nr = Xo && typeof module == "object" && module && !module.nodeType && module, wc = Nr && Nr.exports === Xo, Wr = wc ? pe.Buffer : void 0;
Wr && Wr.allocUnsafe;
function yc(e, t) {
  return e.slice();
}
function Sc(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, i = []; ++n < r; ) {
    var a = e[n];
    t(a, n, e) && (i[o++] = a);
  }
  return i;
}
function xc() {
  return [];
}
var _c = Object.prototype, Cc = _c.propertyIsEnumerable, Lr = Object.getOwnPropertySymbols, Ec = Lr ? function(e) {
  return e == null ? [] : (e = Object(e), Sc(Lr(e), function(t) {
    return Cc.call(e, t);
  }));
} : xc;
function Oc(e, t, n) {
  var r = t(e);
  return ae(e) ? r : ac(r, n(e));
}
function jr(e) {
  return Oc(e, Fn, Ec);
}
var yn = Le(pe, "DataView"), Sn = Le(pe, "Promise"), xn = Le(pe, "Set"), kr = "[object Map]", $c = "[object Object]", Ur = "[object Promise]", Vr = "[object Set]", Gr = "[object WeakMap]", Xr = "[object DataView]", Tc = We(yn), Pc = We(mt), Mc = We(Sn), Ac = We(xn), Rc = We(wn), _e = Ne;
(yn && _e(new yn(new ArrayBuffer(1))) != Xr || mt && _e(new mt()) != kr || Sn && _e(Sn.resolve()) != Ur || xn && _e(new xn()) != Vr || wn && _e(new wn()) != Gr) && (_e = function(e) {
  var t = Ne(e), n = t == $c ? e.constructor : void 0, r = n ? We(n) : "";
  if (r)
    switch (r) {
      case Tc:
        return Xr;
      case Pc:
        return kr;
      case Mc:
        return Ur;
      case Ac:
        return Vr;
      case Rc:
        return Gr;
    }
  return t;
});
var Bt = pe.Uint8Array;
function Ic(e) {
  var t = new e.constructor(e.byteLength);
  return new Bt(t).set(new Bt(e)), t;
}
function Dc(e, t) {
  var n = Ic(e.buffer);
  return new e.constructor(n, e.byteOffset, e.length);
}
function zc(e) {
  return typeof e.constructor == "function" && !zn(e) ? hl(Vo(e)) : {};
}
var Bc = "__lodash_hash_undefined__";
function Fc(e) {
  return this.__data__.set(e, Bc), this;
}
function Hc(e) {
  return this.__data__.has(e);
}
function Ft(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new be(); ++t < n; )
    this.add(e[t]);
}
Ft.prototype.add = Ft.prototype.push = Fc;
Ft.prototype.has = Hc;
function Nc(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Wc(e, t) {
  return e.has(t);
}
var Lc = 1, jc = 2;
function Ko(e, t, n, r, o, i) {
  var a = n & Lc, s = e.length, l = t.length;
  if (s != l && !(a && l > s))
    return !1;
  var u = i.get(e), p = i.get(t);
  if (u && p)
    return u == t && p == e;
  var y = -1, h = !0, w = n & jc ? new Ft() : void 0;
  for (i.set(e, t), i.set(t, e); ++y < s; ) {
    var c = e[y], m = t[y];
    if (r)
      var v = a ? r(m, c, y, t, e, i) : r(c, m, y, e, t, i);
    if (v !== void 0) {
      if (v)
        continue;
      h = !1;
      break;
    }
    if (w) {
      if (!Nc(t, function(d, _) {
        if (!Wc(w, _) && (c === d || o(c, d, n, r, i)))
          return w.push(_);
      })) {
        h = !1;
        break;
      }
    } else if (!(c === m || o(c, m, n, r, i))) {
      h = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), h;
}
function kc(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function Uc(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var Vc = 1, Gc = 2, Xc = "[object Boolean]", Kc = "[object Date]", Yc = "[object Error]", Jc = "[object Map]", Zc = "[object Number]", qc = "[object RegExp]", Qc = "[object Set]", ed = "[object String]", td = "[object Symbol]", nd = "[object ArrayBuffer]", rd = "[object DataView]", Kr = Ee ? Ee.prototype : void 0, un = Kr ? Kr.valueOf : void 0;
function od(e, t, n, r, o, i, a) {
  switch (n) {
    case rd:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case nd:
      return !(e.byteLength != t.byteLength || !i(new Bt(e), new Bt(t)));
    case Xc:
    case Kc:
    case Zc:
      return gt(+e, +t);
    case Yc:
      return e.name == t.name && e.message == t.message;
    case qc:
    case ed:
      return e == t + "";
    case Jc:
      var s = kc;
    case Qc:
      var l = r & Vc;
      if (s || (s = Uc), e.size != t.size && !l)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      r |= Gc, a.set(e, t);
      var p = Ko(s(e), s(t), r, o, i, a);
      return a.delete(e), p;
    case td:
      if (un)
        return un.call(e) == un.call(t);
  }
  return !1;
}
var id = 1, ad = Object.prototype, sd = ad.hasOwnProperty;
function ld(e, t, n, r, o, i) {
  var a = n & id, s = jr(e), l = s.length, u = jr(t), p = u.length;
  if (l != p && !a)
    return !1;
  for (var y = l; y--; ) {
    var h = s[y];
    if (!(a ? h in t : sd.call(t, h)))
      return !1;
  }
  var w = i.get(e), c = i.get(t);
  if (w && c)
    return w == t && c == e;
  var m = !0;
  i.set(e, t), i.set(t, e);
  for (var v = a; ++y < l; ) {
    h = s[y];
    var d = e[h], _ = t[h];
    if (r)
      var A = a ? r(_, d, h, t, e, i) : r(d, _, h, e, t, i);
    if (!(A === void 0 ? d === _ || o(d, _, n, r, i) : A)) {
      m = !1;
      break;
    }
    v || (v = h == "constructor");
  }
  if (m && !v) {
    var I = e.constructor, B = t.constructor;
    I != B && "constructor" in e && "constructor" in t && !(typeof I == "function" && I instanceof I && typeof B == "function" && B instanceof B) && (m = !1);
  }
  return i.delete(e), i.delete(t), m;
}
var ud = 1, Yr = "[object Arguments]", Jr = "[object Array]", $t = "[object Object]", cd = Object.prototype, Zr = cd.hasOwnProperty;
function dd(e, t, n, r, o, i) {
  var a = ae(e), s = ae(t), l = a ? Jr : _e(e), u = s ? Jr : _e(t);
  l = l == Yr ? $t : l, u = u == Yr ? $t : u;
  var p = l == $t, y = u == $t, h = l == u;
  if (h && zt(e)) {
    if (!zt(t))
      return !1;
    a = !0, p = !1;
  }
  if (h && !p)
    return i || (i = new fe()), a || Bn(e) ? Ko(e, t, n, r, o, i) : od(e, t, l, n, r, o, i);
  if (!(n & ud)) {
    var w = p && Zr.call(e, "__wrapped__"), c = y && Zr.call(t, "__wrapped__");
    if (w || c) {
      var m = w ? e.value() : e, v = c ? t.value() : t;
      return i || (i = new fe()), o(m, v, n, r, i);
    }
  }
  return h ? (i || (i = new fe()), ld(e, t, n, r, o, i)) : !1;
}
function Wn(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !Oe(e) && !Oe(t) ? e !== e && t !== t : dd(e, t, n, r, Wn, o);
}
var fd = 1, pd = 2;
function hd(e, t, n, r) {
  var o = n.length, i = o;
  if (e == null)
    return !i;
  for (e = Object(e); o--; ) {
    var a = n[o];
    if (a[2] ? a[1] !== e[a[0]] : !(a[0] in e))
      return !1;
  }
  for (; ++o < i; ) {
    a = n[o];
    var s = a[0], l = e[s], u = a[1];
    if (a[2]) {
      if (l === void 0 && !(s in e))
        return !1;
    } else {
      var p = new fe(), y;
      if (!(y === void 0 ? Wn(u, l, fd | pd, r, p) : y))
        return !1;
    }
  }
  return !0;
}
function Yo(e) {
  return e === e && !Te(e);
}
function vd(e) {
  for (var t = Fn(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, Yo(o)];
  }
  return t;
}
function Jo(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function md(e) {
  var t = vd(e);
  return t.length == 1 && t[0][2] ? Jo(t[0][0], t[0][1]) : function(n) {
    return n === e || hd(n, e, t);
  };
}
function gd(e, t) {
  return e != null && t in Object(e);
}
function bd(e, t, n) {
  t = ko(t, e);
  for (var r = -1, o = t.length, i = !1; ++r < o; ) {
    var a = Ut(t[r]);
    if (!(i = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return i || ++r != o ? i : (o = e == null ? 0 : e.length, !!o && Dn(o) && Rn(a, o) && (ae(e) || Dt(e)));
}
function wd(e, t) {
  return e != null && bd(e, t, gd);
}
var yd = 1, Sd = 2;
function xd(e, t) {
  return Hn(e) && Yo(t) ? Jo(Ut(e), t) : function(n) {
    var r = ic(n, e);
    return r === void 0 && r === t ? wd(n, e) : Wn(t, r, yd | Sd);
  };
}
function _d(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Cd(e) {
  return function(t) {
    return Uo(t, e);
  };
}
function Ed(e) {
  return Hn(e) ? _d(Ut(e)) : Cd(e);
}
function Od(e) {
  return typeof e == "function" ? e : e == null ? Mn : typeof e == "object" ? ae(e) ? xd(e[0], e[1]) : md(e) : Ed(e);
}
function $d(e) {
  return function(t, n, r) {
    for (var o = -1, i = Object(t), a = r(t), s = a.length; s--; ) {
      var l = a[++o];
      if (n(i[l], l, i) === !1)
        break;
    }
    return t;
  };
}
var Zo = $d();
function Td(e, t) {
  return e && Zo(e, t, Fn);
}
function Pd(e, t) {
  return function(n, r) {
    if (n == null)
      return n;
    if (!et(n))
      return e(n, r);
    for (var o = n.length, i = -1, a = Object(n); ++i < o && r(a[i], i, a) !== !1; )
      ;
    return n;
  };
}
var Md = Pd(Td);
function _n(e, t, n) {
  (n !== void 0 && !gt(e[t], n) || n === void 0 && !(t in e)) && In(e, t, n);
}
function Ad(e) {
  return Oe(e) && et(e);
}
function Cn(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function Rd(e) {
  return Pl(e, jo(e));
}
function Id(e, t, n, r, o, i, a) {
  var s = Cn(e, n), l = Cn(t, n), u = a.get(l);
  if (u) {
    _n(e, n, u);
    return;
  }
  var p = i ? i(s, l, n + "", e, t, a) : void 0, y = p === void 0;
  if (y) {
    var h = ae(l), w = !h && zt(l), c = !h && !w && Bn(l);
    p = l, h || w || c ? ae(s) ? p = s : Ad(s) ? p = ml(s) : w ? (y = !1, p = yc(l)) : c ? (y = !1, p = Dc(l)) : p = [] : fc(l) || Dt(l) ? (p = s, Dt(s) ? p = Rd(s) : (!Te(s) || An(s)) && (p = zc(l))) : y = !1;
  }
  y && (a.set(l, p), o(p, l, r, i, a), a.delete(l)), _n(e, n, p);
}
function qo(e, t, n, r, o) {
  e !== t && Zo(t, function(i, a) {
    if (o || (o = new fe()), Te(i))
      Id(e, t, a, n, qo, r, o);
    else {
      var s = r ? r(Cn(e, a), i, a + "", e, t, o) : void 0;
      s === void 0 && (s = i), _n(e, a, s);
    }
  }, jo);
}
function Dd(e, t) {
  var n = -1, r = et(e) ? Array(e.length) : [];
  return Md(e, function(o, i, a) {
    r[++n] = t(o, i, a);
  }), r;
}
function zd(e, t) {
  var n = ae(e) ? zo : Dd;
  return n(e, Od(t));
}
var Tt = Dl(function(e, t, n) {
  qo(e, t, n);
});
const En = "naive-ui-style";
function Bd(e, t, n) {
  if (!t) return;
  const r = Nt(), o = D(() => {
    const {
      value: s
    } = t;
    if (!s)
      return;
    const l = s[e];
    if (l)
      return l;
  }), i = re(Lt, null), a = () => {
    Ye(() => {
      const {
        value: s
      } = n, l = `${s}${e}Rtl`;
      if (Xa(l, r)) return;
      const {
        value: u
      } = o;
      u && u.style.mount({
        id: l,
        head: !0,
        anchorMetaName: En,
        props: {
          bPrefix: s ? `.${s}-` : void 0
        },
        ssr: r,
        parent: i == null ? void 0 : i.styleMountTarget
      });
    });
  };
  return r ? a() : no(a), o;
}
const Ln = {
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
  fontSize: Fd,
  fontFamily: Hd,
  lineHeight: Nd
} = Ln, Wd = W("body", `
 margin: 0;
 font-size: ${Fd};
 font-family: ${Hd};
 line-height: ${Nd};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [W("input", `
 font-family: inherit;
 font-size: inherit;
 `)]);
function tt(e, t, n, r, o, i) {
  const a = Nt(), s = re(Lt, null);
  if (n) {
    const u = () => {
      const p = i == null ? void 0 : i.value;
      n.mount({
        id: p === void 0 ? t : p + t,
        head: !0,
        props: {
          bPrefix: p ? `.${p}-` : void 0
        },
        anchorMetaName: En,
        ssr: a,
        parent: s == null ? void 0 : s.styleMountTarget
      }), s != null && s.preflightStyleDisabled || Wd.mount({
        id: "n-global",
        head: !0,
        anchorMetaName: En,
        ssr: a,
        parent: s == null ? void 0 : s.styleMountTarget
      });
    };
    a ? u() : no(u);
  }
  return D(() => {
    var u;
    const {
      theme: {
        common: p,
        self: y,
        peers: h = {}
      } = {},
      themeOverrides: w = {},
      builtinThemeOverrides: c = {}
    } = o, {
      common: m,
      peers: v
    } = w, {
      common: d = void 0,
      [e]: {
        common: _ = void 0,
        self: A = void 0,
        peers: I = {}
      } = {}
    } = (s == null ? void 0 : s.mergedThemeRef.value) || {}, {
      common: B = void 0,
      [e]: z = {}
    } = (s == null ? void 0 : s.mergedThemeOverridesRef.value) || {}, {
      common: f,
      peers: b = {}
    } = z, C = Tt({}, p || _ || d || r.common, B, f, m), x = Tt(
      // {}, executed every time, no need for empty obj
      (u = y || A || r.self) === null || u === void 0 ? void 0 : u(C),
      c,
      z,
      w
    );
    return {
      common: C,
      self: x,
      peers: Tt({}, r.peers, I, h),
      peerOverrides: Tt({}, c.peers, b, v)
    };
  });
}
tt.props = {
  theme: Object,
  themeOverrides: Object,
  builtinThemeOverrides: Object
};
const O = {
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
}, Ld = Je(O.neutralBase), Qo = Je(O.neutralInvertBase), jd = `rgba(${Qo.slice(0, 3).join(", ")}, `;
function qr(e) {
  return `${jd + String(e)})`;
}
function J(e) {
  const t = Array.from(Qo);
  return t[3] = Number(e), ya(Ld, t);
}
const ei = Object.assign(Object.assign({
  name: "common"
}, Ln), {
  baseColor: O.neutralBase,
  // primary color
  primaryColor: O.primaryDefault,
  primaryColorHover: O.primaryHover,
  primaryColorPressed: O.primaryActive,
  primaryColorSuppl: O.primarySuppl,
  // info color
  infoColor: O.infoDefault,
  infoColorHover: O.infoHover,
  infoColorPressed: O.infoActive,
  infoColorSuppl: O.infoSuppl,
  // success color
  successColor: O.successDefault,
  successColorHover: O.successHover,
  successColorPressed: O.successActive,
  successColorSuppl: O.successSuppl,
  // warning color
  warningColor: O.warningDefault,
  warningColorHover: O.warningHover,
  warningColorPressed: O.warningActive,
  warningColorSuppl: O.warningSuppl,
  // error color
  errorColor: O.errorDefault,
  errorColorHover: O.errorHover,
  errorColorPressed: O.errorActive,
  errorColorSuppl: O.errorSuppl,
  // text color
  textColorBase: O.neutralTextBase,
  textColor1: "rgb(31, 34, 37)",
  textColor2: "rgb(51, 54, 57)",
  textColor3: "rgb(118, 124, 130)",
  // textColor4: neutral(base.alpha4), // disabled, placeholder, icon
  // textColor5: neutral(base.alpha5),
  textColorDisabled: J(O.alpha4),
  placeholderColor: J(O.alpha4),
  placeholderColorDisabled: J(O.alpha5),
  iconColor: J(O.alpha4),
  iconColorHover: wt(J(O.alpha4), {
    lightness: 0.75
  }),
  iconColorPressed: wt(J(O.alpha4), {
    lightness: 0.9
  }),
  iconColorDisabled: J(O.alpha5),
  opacity1: O.alpha1,
  opacity2: O.alpha2,
  opacity3: O.alpha3,
  opacity4: O.alpha4,
  opacity5: O.alpha5,
  dividerColor: "rgb(239, 239, 245)",
  borderColor: "rgb(224, 224, 230)",
  // close
  closeIconColor: J(Number(O.alphaClose)),
  closeIconColorHover: J(Number(O.alphaClose)),
  closeIconColorPressed: J(Number(O.alphaClose)),
  closeColorHover: "rgba(0, 0, 0, .09)",
  closeColorPressed: "rgba(0, 0, 0, .13)",
  // clear
  clearColor: J(O.alpha4),
  clearColorHover: wt(J(O.alpha4), {
    lightness: 0.75
  }),
  clearColorPressed: wt(J(O.alpha4), {
    lightness: 0.9
  }),
  scrollbarColor: qr(O.alphaScrollbar),
  scrollbarColorHover: qr(O.alphaScrollbarHover),
  scrollbarWidth: "5px",
  scrollbarHeight: "5px",
  scrollbarBorderRadius: "5px",
  progressRailColor: J(O.alphaProgressRail),
  railColor: "rgb(219, 219, 223)",
  popoverColor: O.neutralPopover,
  tableColor: O.neutralCard,
  cardColor: O.neutralCard,
  modalColor: O.neutralModal,
  bodyColor: O.neutralBody,
  tagColor: "#eee",
  avatarColor: J(O.alphaAvatar),
  invertedColor: "rgb(0, 20, 40)",
  inputColor: J(O.alphaInput),
  codeColor: "rgb(244, 244, 248)",
  tabColor: "rgb(247, 247, 250)",
  actionColor: "rgb(250, 250, 252)",
  tableHeaderColor: "rgb(250, 250, 252)",
  hoverColor: "rgb(243, 243, 245)",
  // use color with alpha since it can be nested with header filter & sorter effect
  tableColorHover: "rgba(0, 0, 100, 0.03)",
  tableColorStriped: "rgba(0, 0, 100, 0.02)",
  pressedColor: "rgb(237, 237, 239)",
  opacityDisabled: O.alphaDisabled,
  inputColorDisabled: "rgb(250, 250, 252)",
  // secondary button color
  // can also be used in tertiary button & quaternary button
  buttonColor2: "rgba(46, 51, 56, .05)",
  buttonColor2Hover: "rgba(46, 51, 56, .09)",
  buttonColor2Pressed: "rgba(46, 51, 56, .13)",
  boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",
  boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",
  boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"
}), kd = {
  railInsetHorizontalBottom: "auto 2px 4px 2px",
  railInsetHorizontalTop: "4px 2px auto 2px",
  railInsetVerticalRight: "2px 4px 2px auto",
  railInsetVerticalLeft: "2px auto 2px 4px",
  railColor: "transparent"
};
function Ud(e) {
  const {
    scrollbarColor: t,
    scrollbarColorHover: n,
    scrollbarHeight: r,
    scrollbarWidth: o,
    scrollbarBorderRadius: i
  } = e;
  return Object.assign(Object.assign({}, kd), {
    height: r,
    width: o,
    borderRadius: i,
    color: t,
    colorHover: n
  });
}
const Vd = {
  name: "Scrollbar",
  common: ei,
  self: Ud
}, {
  cubicBezierEaseInOut: Qr
} = Ln;
function Gd({
  name: e = "fade-in",
  enterDuration: t = "0.2s",
  leaveDuration: n = "0.2s",
  enterCubicBezier: r = Qr,
  leaveCubicBezier: o = Qr
} = {}) {
  return [W(`&.${e}-transition-enter-active`, {
    transition: `all ${t} ${r}!important`
  }), W(`&.${e}-transition-leave-active`, {
    transition: `all ${n} ${o}!important`
  }), W(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`, {
    opacity: 0
  }), W(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`, {
    opacity: 1
  })];
}
const Xd = ne("scrollbar", `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [W(">", [ne("scrollbar-container", `
 width: 100%;
 overflow: scroll;
 height: 100%;
 min-height: inherit;
 max-height: inherit;
 scrollbar-width: none;
 `, [W("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), W(">", [
  // We can't set overflow hidden since it affects positioning.
  ne("scrollbar-content", `
 box-sizing: border-box;
 min-width: 100%;
 `)
])])]), W(">, +", [ne("scrollbar-rail", `
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `, [le("horizontal", `
 height: var(--n-scrollbar-height);
 `, [W(">", [De("scrollbar", `
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]), le("horizontal--top", `
 top: var(--n-scrollbar-rail-top-horizontal-top); 
 right: var(--n-scrollbar-rail-right-horizontal-top); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-top); 
 left: var(--n-scrollbar-rail-left-horizontal-top); 
 `), le("horizontal--bottom", `
 top: var(--n-scrollbar-rail-top-horizontal-bottom); 
 right: var(--n-scrollbar-rail-right-horizontal-bottom); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-bottom); 
 left: var(--n-scrollbar-rail-left-horizontal-bottom); 
 `), le("vertical", `
 width: var(--n-scrollbar-width);
 `, [W(">", [De("scrollbar", `
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]), le("vertical--left", `
 top: var(--n-scrollbar-rail-top-vertical-left); 
 right: var(--n-scrollbar-rail-right-vertical-left); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-left); 
 left: var(--n-scrollbar-rail-left-vertical-left); 
 `), le("vertical--right", `
 top: var(--n-scrollbar-rail-top-vertical-right); 
 right: var(--n-scrollbar-rail-right-vertical-right); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-right); 
 left: var(--n-scrollbar-rail-left-vertical-right); 
 `), le("disabled", [W(">", [De("scrollbar", "pointer-events: none;")])]), W(">", [De("scrollbar", `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [Gd(), W("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), Kd = Object.assign(Object.assign({}, tt.props), {
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
}), Yd = ue({
  name: "Scrollbar",
  props: Kd,
  inheritAttrs: !1,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: n,
      mergedRtlRef: r
    } = Ao(e), o = Bd("Scrollbar", r, t), i = M(null), a = M(null), s = M(null), l = M(null), u = M(null), p = M(null), y = M(null), h = M(null), w = M(null), c = M(null), m = M(null), v = M(0), d = M(0), _ = M(!1), A = M(!1);
    let I = !1, B = !1, z, f, b = 0, C = 0, x = 0, R = 0;
    const F = ua(), L = tt("Scrollbar", "-scrollbar", Xd, Vd, e, t), j = D(() => {
      const {
        value: g
      } = h, {
        value: E
      } = p, {
        value: $
      } = c;
      return g === null || E === null || $ === null ? 0 : Math.min(g, $ * g / E + Qn(L.value.self.width) * 1.5);
    }), S = D(() => `${j.value}px`), P = D(() => {
      const {
        value: g
      } = w, {
        value: E
      } = y, {
        value: $
      } = m;
      return g === null || E === null || $ === null ? 0 : $ * g / E + Qn(L.value.self.height) * 1.5;
    }), k = D(() => `${P.value}px`), K = D(() => {
      const {
        value: g
      } = h, {
        value: E
      } = v, {
        value: $
      } = p, {
        value: H
      } = c;
      if (g === null || $ === null || H === null)
        return 0;
      {
        const V = $ - g;
        return V ? E / V * (H - j.value) : 0;
      }
    }), q = D(() => `${K.value}px`), Y = D(() => {
      const {
        value: g
      } = w, {
        value: E
      } = d, {
        value: $
      } = y, {
        value: H
      } = m;
      if (g === null || $ === null || H === null)
        return 0;
      {
        const V = $ - g;
        return V ? E / V * (H - P.value) : 0;
      }
    }), ce = D(() => `${Y.value}px`), bt = D(() => {
      const {
        value: g
      } = h, {
        value: E
      } = p;
      return g !== null && E !== null && E > g;
    }), jn = D(() => {
      const {
        value: g
      } = w, {
        value: E
      } = y;
      return g !== null && E !== null && E > g;
    }), ni = D(() => {
      const {
        trigger: g
      } = e;
      return g === "none" || _.value;
    }), ri = D(() => {
      const {
        trigger: g
      } = e;
      return g === "none" || A.value;
    }), Pe = D(() => {
      const {
        container: g
      } = e;
      return g ? g() : a.value;
    }), oi = D(() => {
      const {
        content: g
      } = e;
      return g ? g() : s.value;
    }), kn = (g, E) => {
      if (!e.scrollable) return;
      if (typeof g == "number") {
        je(g, E ?? 0, 0, !1, "auto");
        return;
      }
      const {
        left: $,
        top: H,
        index: V,
        elSize: ee,
        position: se,
        behavior: U,
        el: oe,
        debounce: we = !0
      } = g;
      ($ !== void 0 || H !== void 0) && je($ ?? 0, H ?? 0, 0, !1, U), oe !== void 0 ? je(0, oe.offsetTop, oe.offsetHeight, we, U) : V !== void 0 && ee !== void 0 ? je(0, V * ee, ee, we, U) : se === "bottom" ? je(0, Number.MAX_SAFE_INTEGER, 0, !1, U) : se === "top" && je(0, 0, 0, !1, U);
    }, Un = Ps(() => {
      e.container || kn({
        top: v.value,
        left: d.value
      });
    }), ii = () => {
      Un.isDeactivated || Me();
    }, ai = (g) => {
      if (Un.isDeactivated) return;
      const {
        onResize: E
      } = e;
      E && E(g), Me();
    }, si = (g, E) => {
      if (!e.scrollable) return;
      const {
        value: $
      } = Pe;
      $ && (typeof g == "object" ? $.scrollBy(g) : $.scrollBy(g, E || 0));
    };
    function je(g, E, $, H, V) {
      const {
        value: ee
      } = Pe;
      if (ee) {
        if (H) {
          const {
            scrollTop: se,
            offsetHeight: U
          } = ee;
          if (E > se) {
            E + $ <= se + U || ee.scrollTo({
              left: g,
              top: E + $ - U,
              behavior: V
            });
            return;
          }
        }
        ee.scrollTo({
          left: g,
          top: E,
          behavior: V
        });
      }
    }
    function li() {
      fi(), pi(), Me();
    }
    function ui() {
      Vt();
    }
    function Vt() {
      ci(), di();
    }
    function ci() {
      f !== void 0 && window.clearTimeout(f), f = window.setTimeout(() => {
        A.value = !1;
      }, e.duration);
    }
    function di() {
      z !== void 0 && window.clearTimeout(z), z = window.setTimeout(() => {
        _.value = !1;
      }, e.duration);
    }
    function fi() {
      z !== void 0 && window.clearTimeout(z), _.value = !0;
    }
    function pi() {
      f !== void 0 && window.clearTimeout(f), A.value = !0;
    }
    function hi(g) {
      const {
        onScroll: E
      } = e;
      E && E(g), Vn();
    }
    function Vn() {
      const {
        value: g
      } = Pe;
      g && (v.value = g.scrollTop, d.value = g.scrollLeft * (o != null && o.value ? -1 : 1));
    }
    function vi() {
      const {
        value: g
      } = oi;
      g && (p.value = g.offsetHeight, y.value = g.offsetWidth);
      const {
        value: E
      } = Pe;
      E && (h.value = E.offsetHeight, w.value = E.offsetWidth);
      const {
        value: $
      } = u, {
        value: H
      } = l;
      $ && (m.value = $.offsetWidth), H && (c.value = H.offsetHeight);
    }
    function Gn() {
      const {
        value: g
      } = Pe;
      g && (v.value = g.scrollTop, d.value = g.scrollLeft * (o != null && o.value ? -1 : 1), h.value = g.offsetHeight, w.value = g.offsetWidth, p.value = g.scrollHeight, y.value = g.scrollWidth);
      const {
        value: E
      } = u, {
        value: $
      } = l;
      E && (m.value = E.offsetWidth), $ && (c.value = $.offsetHeight);
    }
    function Me() {
      e.scrollable && (e.useUnifiedContainer ? Gn() : (vi(), Vn()));
    }
    function Xn(g) {
      var E;
      return !(!((E = i.value) === null || E === void 0) && E.contains(Rt(g)));
    }
    function mi(g) {
      g.preventDefault(), g.stopPropagation(), B = !0, Q("mousemove", window, Kn, !0), Q("mouseup", window, Yn, !0), C = d.value, x = o != null && o.value ? window.innerWidth - g.clientX : g.clientX;
    }
    function Kn(g) {
      if (!B) return;
      z !== void 0 && window.clearTimeout(z), f !== void 0 && window.clearTimeout(f);
      const {
        value: E
      } = w, {
        value: $
      } = y, {
        value: H
      } = P;
      if (E === null || $ === null) return;
      const ee = (o != null && o.value ? window.innerWidth - g.clientX - x : g.clientX - x) * ($ - E) / (E - H), se = $ - E;
      let U = C + ee;
      U = Math.min(se, U), U = Math.max(U, 0);
      const {
        value: oe
      } = Pe;
      if (oe) {
        oe.scrollLeft = U * (o != null && o.value ? -1 : 1);
        const {
          internalOnUpdateScrollLeft: we
        } = e;
        we && we(U);
      }
    }
    function Yn(g) {
      g.preventDefault(), g.stopPropagation(), X("mousemove", window, Kn, !0), X("mouseup", window, Yn, !0), B = !1, Me(), Xn(g) && Vt();
    }
    function gi(g) {
      g.preventDefault(), g.stopPropagation(), I = !0, Q("mousemove", window, Gt, !0), Q("mouseup", window, Xt, !0), b = v.value, R = g.clientY;
    }
    function Gt(g) {
      if (!I) return;
      z !== void 0 && window.clearTimeout(z), f !== void 0 && window.clearTimeout(f);
      const {
        value: E
      } = h, {
        value: $
      } = p, {
        value: H
      } = j;
      if (E === null || $ === null) return;
      const ee = (g.clientY - R) * ($ - E) / (E - H), se = $ - E;
      let U = b + ee;
      U = Math.min(se, U), U = Math.max(U, 0);
      const {
        value: oe
      } = Pe;
      oe && (oe.scrollTop = U);
    }
    function Xt(g) {
      g.preventDefault(), g.stopPropagation(), X("mousemove", window, Gt, !0), X("mouseup", window, Xt, !0), I = !1, Me(), Xn(g) && Vt();
    }
    Ye(() => {
      const {
        value: g
      } = jn, {
        value: E
      } = bt, {
        value: $
      } = t, {
        value: H
      } = u, {
        value: V
      } = l;
      H && (g ? H.classList.remove(`${$}-scrollbar-rail--disabled`) : H.classList.add(`${$}-scrollbar-rail--disabled`)), V && (E ? V.classList.remove(`${$}-scrollbar-rail--disabled`) : V.classList.add(`${$}-scrollbar-rail--disabled`));
    }), He(() => {
      e.container || Me();
    }), $e(() => {
      z !== void 0 && window.clearTimeout(z), f !== void 0 && window.clearTimeout(f), X("mousemove", window, Gt, !0), X("mouseup", window, Xt, !0);
    });
    const Jn = D(() => {
      const {
        common: {
          cubicBezierEaseInOut: g
        },
        self: {
          color: E,
          colorHover: $,
          height: H,
          width: V,
          borderRadius: ee,
          railInsetHorizontalTop: se,
          railInsetHorizontalBottom: U,
          railInsetVerticalRight: oe,
          railInsetVerticalLeft: we,
          railColor: bi
        }
      } = L.value, {
        top: wi,
        right: yi,
        bottom: Si,
        left: xi
      } = at(se), {
        top: _i,
        right: Ci,
        bottom: Ei,
        left: Oi
      } = at(U), {
        top: $i,
        right: Ti,
        bottom: Pi,
        left: Mi
      } = at(o != null && o.value ? xr(oe) : oe), {
        top: Ai,
        right: Ri,
        bottom: Ii,
        left: Di
      } = at(o != null && o.value ? xr(we) : we);
      return {
        "--n-scrollbar-bezier": g,
        "--n-scrollbar-color": E,
        "--n-scrollbar-color-hover": $,
        "--n-scrollbar-border-radius": ee,
        "--n-scrollbar-width": V,
        "--n-scrollbar-height": H,
        "--n-scrollbar-rail-top-horizontal-top": wi,
        "--n-scrollbar-rail-right-horizontal-top": yi,
        "--n-scrollbar-rail-bottom-horizontal-top": Si,
        "--n-scrollbar-rail-left-horizontal-top": xi,
        "--n-scrollbar-rail-top-horizontal-bottom": _i,
        "--n-scrollbar-rail-right-horizontal-bottom": Ci,
        "--n-scrollbar-rail-bottom-horizontal-bottom": Ei,
        "--n-scrollbar-rail-left-horizontal-bottom": Oi,
        "--n-scrollbar-rail-top-vertical-right": $i,
        "--n-scrollbar-rail-right-vertical-right": Ti,
        "--n-scrollbar-rail-bottom-vertical-right": Pi,
        "--n-scrollbar-rail-left-vertical-right": Mi,
        "--n-scrollbar-rail-top-vertical-left": Ai,
        "--n-scrollbar-rail-right-vertical-left": Ri,
        "--n-scrollbar-rail-bottom-vertical-left": Ii,
        "--n-scrollbar-rail-left-vertical-left": Di,
        "--n-scrollbar-rail-color": bi
      };
    }), ke = n ? Ro("scrollbar", void 0, Jn, e) : void 0;
    return Object.assign(Object.assign({}, {
      scrollTo: kn,
      scrollBy: si,
      sync: Me,
      syncUnifiedContainer: Gn,
      handleMouseEnterWrapper: li,
      handleMouseLeaveWrapper: ui
    }), {
      mergedClsPrefix: t,
      rtlEnabled: o,
      containerScrollTop: v,
      wrapperRef: i,
      containerRef: a,
      contentRef: s,
      yRailRef: l,
      xRailRef: u,
      needYBar: bt,
      needXBar: jn,
      yBarSizePx: S,
      xBarSizePx: k,
      yBarTopPx: q,
      xBarLeftPx: ce,
      isShowXBar: ni,
      isShowYBar: ri,
      isIos: F,
      handleScroll: hi,
      handleContentResize: ii,
      handleContainerResize: ai,
      handleYScrollMouseDown: gi,
      handleXScrollMouseDown: mi,
      cssVars: n ? void 0 : Jn,
      themeClass: ke == null ? void 0 : ke.themeClass,
      onRender: ke == null ? void 0 : ke.onRender
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
      xPlacement: s,
      xScrollable: l
    } = this;
    if (!this.scrollable) return (e = t.default) === null || e === void 0 ? void 0 : e.call(t);
    const u = this.trigger === "none", p = (w, c) => T("div", {
      ref: "yRailRef",
      class: [`${n}-scrollbar-rail`, `${n}-scrollbar-rail--vertical`, `${n}-scrollbar-rail--vertical--${a}`, w],
      "data-scrollbar-rail": !0,
      style: [c || "", this.verticalRailStyle],
      "aria-hidden": !0
    }, T(u ? $r : fn, u ? null : {
      name: "fade-in-transition"
    }, {
      default: () => this.needYBar && this.isShowYBar && !this.isIos ? T("div", {
        class: `${n}-scrollbar-rail__scrollbar`,
        style: {
          height: this.yBarSizePx,
          top: this.yBarTopPx
        },
        onMousedown: this.handleYScrollMouseDown
      }) : null
    })), y = () => {
      var w, c;
      return (w = this.onRender) === null || w === void 0 || w.call(this), T("div", ro(this.$attrs, {
        role: "none",
        ref: "wrapperRef",
        class: [`${n}-scrollbar`, this.themeClass, o && `${n}-scrollbar--rtl`],
        style: this.cssVars,
        onMouseenter: r ? void 0 : this.handleMouseEnterWrapper,
        onMouseleave: r ? void 0 : this.handleMouseLeaveWrapper
      }), [this.container ? (c = t.default) === null || c === void 0 ? void 0 : c.call(t) : T("div", {
        role: "none",
        ref: "containerRef",
        class: [`${n}-scrollbar-container`, this.containerClass],
        style: this.containerStyle,
        onScroll: this.handleScroll,
        onWheel: this.onWheel
      }, T(yr, {
        onResize: this.handleContentResize
      }, {
        default: () => T("div", {
          ref: "contentRef",
          role: "none",
          style: [{
            width: this.xScrollable ? "fit-content" : null
          }, this.contentStyle],
          class: [`${n}-scrollbar-content`, this.contentClass]
        }, t)
      })), i ? null : p(void 0, void 0), l && T("div", {
        ref: "xRailRef",
        class: [`${n}-scrollbar-rail`, `${n}-scrollbar-rail--horizontal`, `${n}-scrollbar-rail--horizontal--${s}`],
        style: this.horizontalRailStyle,
        "data-scrollbar-rail": !0,
        "aria-hidden": !0
      }, T(u ? $r : fn, u ? null : {
        name: "fade-in-transition"
      }, {
        default: () => this.needXBar && this.isShowXBar && !this.isIos ? T("div", {
          class: `${n}-scrollbar-rail__scrollbar`,
          style: {
            width: this.xBarSizePx,
            right: o ? this.xBarLeftPx : void 0,
            left: o ? void 0 : this.xBarLeftPx
          },
          onMousedown: this.handleXScrollMouseDown
        }) : null
      }))]);
    }, h = this.container ? y() : T(yr, {
      onResize: this.handleContainerResize
    }, {
      default: y
    });
    return i ? T(me, null, h, p(this.themeClass, this.cssVars)) : h;
  }
}), Jd = Yd, Zd = {
  space: "6px",
  spaceArrow: "10px",
  arrowOffset: "10px",
  arrowOffsetVertical: "10px",
  arrowHeight: "6px",
  padding: "8px 14px"
};
function qd(e) {
  const {
    boxShadow2: t,
    popoverColor: n,
    textColor2: r,
    borderRadius: o,
    fontSize: i,
    dividerColor: a
  } = e;
  return Object.assign(Object.assign({}, Zd), {
    fontSize: i,
    borderRadius: o,
    color: n,
    dividerColor: a,
    textColor: r,
    boxShadow: t
  });
}
const Qd = {
  name: "Popover",
  common: ei,
  self: qd
}, cn = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, G = "var(--n-arrow-height) * 1.414", ef = W([ne("popover", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `, [W(">", [ne("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), rn("raw", `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [rn("scrollable", [rn("show-header-or-footer", "padding: var(--n-padding);")])]), De("header", `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), De("footer", `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), le("scrollable, show-header-or-footer", [De("content", `
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
 width: calc(${G});
 height: calc(${G});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),
  // body transition
  W("&.popover-transition-enter-from, &.popover-transition-leave-to", `
 opacity: 0;
 transform: scale(.85);
 `),
  W("&.popover-transition-enter-to, &.popover-transition-leave-from", `
 transform: scale(1);
 opacity: 1;
 `),
  W("&.popover-transition-enter-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),
  W("&.popover-transition-leave-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)
]), ie("top-start", `
 top: calc(${G} / -2);
 left: calc(${he("top-start")} - var(--v-offset-left));
 `), ie("top", `
 top: calc(${G} / -2);
 transform: translateX(calc(${G} / -2)) rotate(45deg);
 left: 50%;
 `), ie("top-end", `
 top: calc(${G} / -2);
 right: calc(${he("top-end")} + var(--v-offset-left));
 `), ie("bottom-start", `
 bottom: calc(${G} / -2);
 left: calc(${he("bottom-start")} - var(--v-offset-left));
 `), ie("bottom", `
 bottom: calc(${G} / -2);
 transform: translateX(calc(${G} / -2)) rotate(45deg);
 left: 50%;
 `), ie("bottom-end", `
 bottom: calc(${G} / -2);
 right: calc(${he("bottom-end")} + var(--v-offset-left));
 `), ie("left-start", `
 left: calc(${G} / -2);
 top: calc(${he("left-start")} - var(--v-offset-top));
 `), ie("left", `
 left: calc(${G} / -2);
 transform: translateY(calc(${G} / -2)) rotate(45deg);
 top: 50%;
 `), ie("left-end", `
 left: calc(${G} / -2);
 bottom: calc(${he("left-end")} + var(--v-offset-top));
 `), ie("right-start", `
 right: calc(${G} / -2);
 top: calc(${he("right-start")} - var(--v-offset-top));
 `), ie("right", `
 right: calc(${G} / -2);
 transform: translateY(calc(${G} / -2)) rotate(45deg);
 top: 50%;
 `), ie("right-end", `
 right: calc(${G} / -2);
 bottom: calc(${he("right-end")} + var(--v-offset-top));
 `), ...zd({
  top: ["right-start", "left-start"],
  right: ["top-end", "bottom-end"],
  bottom: ["right-end", "left-end"],
  left: ["top-start", "bottom-start"]
}, (e, t) => {
  const n = ["right", "left"].includes(t), r = n ? "width" : "height";
  return e.map((o) => {
    const i = o.split("-")[1] === "end", s = `calc((${`var(--v-target-${r}, 0px)`} - ${G}) / 2)`, l = he(o);
    return W(`[v-placement="${o}"] >`, [ne("popover-shared", [le("center-arrow", [ne("popover-arrow", `${t}: calc(max(${s}, ${l}) ${i ? "+" : "-"} var(--v-offset-${n ? "left" : "top"}));`)])])]);
  });
})]);
function he(e) {
  return ["top", "bottom"].includes(e.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)";
}
function ie(e, t) {
  const n = e.split("-")[0], r = ["top", "bottom"].includes(n) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
  return W(`[v-placement="${e}"] >`, [ne("popover-shared", `
 margin-${cn[n]}: var(--n-space);
 `, [le("show-arrow", `
 margin-${cn[n]}: var(--n-space-arrow);
 `), le("overlap", `
 margin: 0;
 `), Bs("popover-arrow-wrapper", `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${cn[n]}: auto;
 ${r}
 `, [ne("popover-arrow", t)])])]);
}
const ti = Object.assign(Object.assign({}, tt.props), {
  to: Ze.propTo,
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
function tf({
  arrowClass: e,
  arrowStyle: t,
  arrowWrapperClass: n,
  arrowWrapperStyle: r,
  clsPrefix: o
}) {
  return T("div", {
    key: "__popover-arrow__",
    style: r,
    class: [`${o}-popover-arrow-wrapper`, n]
  }, T("div", {
    class: [`${o}-popover-arrow`, e],
    style: t
  }));
}
const nf = ue({
  name: "PopoverBody",
  inheritAttrs: !1,
  props: ti,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    const {
      namespaceRef: r,
      mergedClsPrefixRef: o,
      inlineThemeDisabled: i
    } = Ao(e), a = tt("Popover", "-popover", ef, Qd, e, o), s = M(null), l = re("NPopover"), u = M(null), p = M(e.show), y = M(!1);
    Ye(() => {
      const {
        show: f
      } = e;
      f && !Fs() && !e.internalDeactivateImmediately && (y.value = !0);
    });
    const h = D(() => {
      const {
        trigger: f,
        onClickoutside: b
      } = e, C = [], {
        positionManuallyRef: {
          value: x
        }
      } = l;
      return x || (f === "click" && !b && C.push([qn, I, void 0, {
        capture: !0
      }]), f === "hover" && C.push([Qi, A])), b && C.push([qn, I, void 0, {
        capture: !0
      }]), (e.displayDirective === "show" || e.animated && y.value) && C.push([ji, e.show]), C;
    }), w = D(() => {
      const {
        common: {
          cubicBezierEaseInOut: f,
          cubicBezierEaseIn: b,
          cubicBezierEaseOut: C
        },
        self: {
          space: x,
          spaceArrow: R,
          padding: F,
          fontSize: L,
          textColor: j,
          dividerColor: S,
          color: P,
          boxShadow: k,
          borderRadius: K,
          arrowHeight: q,
          arrowOffset: Y,
          arrowOffsetVertical: ce
        }
      } = a.value;
      return {
        "--n-box-shadow": k,
        "--n-bezier": f,
        "--n-bezier-ease-in": b,
        "--n-bezier-ease-out": C,
        "--n-font-size": L,
        "--n-text-color": j,
        "--n-color": P,
        "--n-divider-color": S,
        "--n-border-radius": K,
        "--n-arrow-height": q,
        "--n-arrow-offset": Y,
        "--n-arrow-offset-vertical": ce,
        "--n-padding": F,
        "--n-space": x,
        "--n-space-arrow": R
      };
    }), c = D(() => {
      const f = e.width === "trigger" ? void 0 : nn(e.width), b = [];
      f && b.push({
        width: f
      });
      const {
        maxWidth: C,
        minWidth: x
      } = e;
      return C && b.push({
        maxWidth: nn(C)
      }), x && b.push({
        maxWidth: nn(x)
      }), i || b.push(w.value), b;
    }), m = i ? Ro("popover", void 0, w, e) : void 0;
    l.setBodyInstance({
      syncPosition: v
    }), $e(() => {
      l.setBodyInstance(null);
    }), ve(Ce(e, "show"), (f) => {
      e.animated || (f ? p.value = !0 : p.value = !1);
    });
    function v() {
      var f;
      (f = s.value) === null || f === void 0 || f.syncPosition();
    }
    function d(f) {
      e.trigger === "hover" && e.keepAliveOnHover && e.show && l.handleMouseEnter(f);
    }
    function _(f) {
      e.trigger === "hover" && e.keepAliveOnHover && l.handleMouseLeave(f);
    }
    function A(f) {
      e.trigger === "hover" && !B().contains(Rt(f)) && l.handleMouseMoveOutside(f);
    }
    function I(f) {
      (e.trigger === "click" && !B().contains(Rt(f)) || e.onClickoutside) && l.handleClickOutside(f);
    }
    function B() {
      return l.getTriggerElement();
    }
    lt($o, u), lt(Eo, null), lt(Oo, null);
    function z() {
      if (m == null || m.onRender(), !(e.displayDirective === "show" || e.show || e.animated && y.value))
        return null;
      let b;
      const C = l.internalRenderBodyRef.value, {
        value: x
      } = o;
      if (C)
        b = C(
          // The popover class and overlap class must exists, they will be used
          // to place the body & transition animation.
          // Shadow class exists for reuse box-shadow.
          [`${x}-popover-shared`, m == null ? void 0 : m.themeClass.value, e.overlap && `${x}-popover-shared--overlap`, e.showArrow && `${x}-popover-shared--show-arrow`, e.arrowPointToCenter && `${x}-popover-shared--center-arrow`],
          u,
          c.value,
          d,
          _
        );
      else {
        const {
          value: R
        } = l.extraClassRef, {
          internalTrapFocus: F
        } = e, L = !Or(t.header) || !Or(t.footer), j = () => {
          var S, P;
          const k = L ? T(me, null, an(t.header, (Y) => Y ? T("div", {
            class: [`${x}-popover__header`, e.headerClass],
            style: e.headerStyle
          }, Y) : null), an(t.default, (Y) => Y ? T("div", {
            class: [`${x}-popover__content`, e.contentClass],
            style: e.contentStyle
          }, t) : null), an(t.footer, (Y) => Y ? T("div", {
            class: [`${x}-popover__footer`, e.footerClass],
            style: e.footerStyle
          }, Y) : null)) : e.scrollable ? (S = t.default) === null || S === void 0 ? void 0 : S.call(t) : T("div", {
            class: [`${x}-popover__content`, e.contentClass],
            style: e.contentStyle
          }, t), K = e.scrollable ? T(Jd, {
            contentClass: L ? void 0 : `${x}-popover__content ${(P = e.contentClass) !== null && P !== void 0 ? P : ""}`,
            contentStyle: L ? void 0 : e.contentStyle
          }, {
            default: () => k
          }) : k, q = e.showArrow ? tf({
            arrowClass: e.arrowClass,
            arrowStyle: e.arrowStyle,
            arrowWrapperClass: e.arrowWrapperClass,
            arrowWrapperStyle: e.arrowWrapperStyle,
            clsPrefix: x
          }) : null;
          return [K, q];
        };
        b = T("div", ro({
          class: [`${x}-popover`, `${x}-popover-shared`, m == null ? void 0 : m.themeClass.value, R.map((S) => `${x}-${S}`), {
            [`${x}-popover--scrollable`]: e.scrollable,
            [`${x}-popover--show-header-or-footer`]: L,
            [`${x}-popover--raw`]: e.raw,
            [`${x}-popover-shared--overlap`]: e.overlap,
            [`${x}-popover-shared--show-arrow`]: e.showArrow,
            [`${x}-popover-shared--center-arrow`]: e.arrowPointToCenter
          }],
          ref: u,
          style: c.value,
          onKeydown: l.handleKeydown,
          onMouseenter: d,
          onMouseleave: _
        }, n), F ? T($s, {
          active: e.show,
          autoFocus: !0
        }, {
          default: j
        }) : j());
      }
      return Ht(b, h.value);
    }
    return {
      displayed: y,
      namespace: r,
      isMounted: l.isMountedRef,
      zIndex: l.zIndexRef,
      followerRef: s,
      adjustedTo: Ze(e),
      followerEnabled: p,
      renderContentNode: z
    };
  },
  render() {
    return T(rs, {
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
      teleportDisabled: this.adjustedTo === Ze.tdkey
    }, {
      default: () => this.animated ? T(fn, {
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
var rf = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\mmj\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_17748_VZZMJJWFFMGMQMSF", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-QBN3J51", ComSpec: "C:\\WINDOWS\\system32\\cmd.exe", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "d:\\install\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\mmj", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\mmj", INIT_CWD: "F:\\Work\\lowcode\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\mmj\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-QBN3J51", NODE: "C:\\Program Files\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com/", npm_config_user_agent: "pnpm/9.15.4 npm/? node/v18.20.2 win32 x64", npm_execpath: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "C:\\Program Files\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "8", NVM_HOME: "D:\\install\\nvm", NVM_SYMLINK: "C:\\Program Files\\nodejs", OneDrive: "C:\\Users\\mmj\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\Work\\lowcode\\lowcode-component\\scripts\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\Work\\lowcode\\lowcode-component\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\java8path;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Git\\cmd;C:\\Users\\mmj\\AppData\\Local\\Microsoft\\WindowsApps;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Microsoft VS Code\\bin;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\Work\\lowcode\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "AMD64 Family 23 Model 24 Stepping 1, AuthenticAMD", PROCESSOR_LEVEL: "23", PROCESSOR_REVISION: "1801", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\mmj\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\WINDOWS", TEMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.96.4", TMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-QBN3J51", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-QBN3J51", USERNAME: "mmj", USERPROFILE: "C:\\Users\\mmj", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "d:\\install\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "D:\\install\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-780eceaefd-sock", VSCODE_INJECTION: "1", windir: "C:\\WINDOWS" };
const of = Object.keys(ti), af = {
  focus: ["onFocus", "onBlur"],
  click: ["onClick"],
  hover: ["onMouseenter", "onMouseleave"],
  manual: [],
  nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"]
};
function sf(e, t, n) {
  af[t].forEach((r) => {
    e.props ? e.props = Object.assign({}, e.props) : e.props = {};
    const o = e.props[r], i = n[r];
    o ? e.props[r] = (...a) => {
      o(...a), i(...a);
    } : e.props[r] = i;
  });
}
const lf = {
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
  to: Ze.propTo,
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
}, uf = Object.assign(Object.assign(Object.assign({}, tt.props), lf), {
  internalOnAfterLeave: Function,
  internalRenderBody: Function
}), cf = ue({
  name: "Popover",
  inheritAttrs: !1,
  props: uf,
  slots: Object,
  __popover__: !0,
  setup(e) {
    rf.NODE_ENV !== "production" && Ye(() => {
      e.maxWidth !== void 0 && ot("popover", "`max-width` is deprecated, please use `style` instead."), e.minWidth !== void 0 && ot("popover", "`min-width` is deprecated, please use `style` instead."), e.arrow !== void 0 && ot("popover", "`arrow` is deprecated, please use `showArrow` instead."), e.onHide !== void 0 && ot("popover", "`on-hide` is deprecated, please use `on-update:show` instead."), e.onShow !== void 0 && ot("popover", "`on-show` is deprecated, please use `on-update:show` instead.");
    });
    const t = ao(), n = M(null), r = D(() => e.show), o = M(e.defaultShow), i = aa(r, o), a = pt(() => e.disabled ? !1 : i.value), s = () => {
      if (e.disabled) return !0;
      const {
        getDisabled: S
      } = e;
      return !!(S != null && S());
    }, l = () => s() ? !1 : i.value, u = sa(e, ["arrow", "showArrow"]), p = D(() => e.overlap ? !1 : u.value);
    let y = null;
    const h = M(null), w = M(null), c = pt(() => e.x !== void 0 && e.y !== void 0);
    function m(S) {
      const {
        "onUpdate:show": P,
        onUpdateShow: k,
        onShow: K,
        onHide: q
      } = e;
      o.value = S, P && st(P, S), k && st(k, S), S && K && st(K, !0), S && q && st(q, !1);
    }
    function v() {
      y && y.syncPosition();
    }
    function d() {
      const {
        value: S
      } = h;
      S && (window.clearTimeout(S), h.value = null);
    }
    function _() {
      const {
        value: S
      } = w;
      S && (window.clearTimeout(S), w.value = null);
    }
    function A() {
      const S = s();
      if (e.trigger === "focus" && !S) {
        if (l()) return;
        m(!0);
      }
    }
    function I() {
      const S = s();
      if (e.trigger === "focus" && !S) {
        if (!l()) return;
        m(!1);
      }
    }
    function B() {
      const S = s();
      if (e.trigger === "hover" && !S) {
        if (_(), h.value !== null || l()) return;
        const P = () => {
          m(!0), h.value = null;
        }, {
          delay: k
        } = e;
        k === 0 ? P() : h.value = window.setTimeout(P, k);
      }
    }
    function z() {
      const S = s();
      if (e.trigger === "hover" && !S) {
        if (d(), w.value !== null || !l()) return;
        const P = () => {
          m(!1), w.value = null;
        }, {
          duration: k
        } = e;
        k === 0 ? P() : w.value = window.setTimeout(P, k);
      }
    }
    function f() {
      z();
    }
    function b(S) {
      var P;
      l() && (e.trigger === "click" && (d(), _(), m(!1)), (P = e.onClickoutside) === null || P === void 0 || P.call(e, S));
    }
    function C() {
      if (e.trigger === "click" && !s()) {
        d(), _();
        const S = !l();
        m(S);
      }
    }
    function x(S) {
      e.internalTrapFocus && S.key === "Escape" && (d(), _(), m(!1));
    }
    function R(S) {
      o.value = S;
    }
    function F() {
      var S;
      return (S = n.value) === null || S === void 0 ? void 0 : S.targetRef;
    }
    function L(S) {
      y = S;
    }
    return lt("NPopover", {
      getTriggerElement: F,
      handleKeydown: x,
      handleMouseEnter: B,
      handleMouseLeave: z,
      handleClickOutside: b,
      handleMouseMoveOutside: f,
      setBodyInstance: L,
      positionManuallyRef: c,
      isMountedRef: t,
      zIndexRef: Ce(e, "zIndex"),
      extraClassRef: Ce(e, "internalExtraClass"),
      internalRenderBodyRef: Ce(e, "internalRenderBody")
    }), Ye(() => {
      i.value && s() && m(!1);
    }), {
      binderInstRef: n,
      positionManually: c,
      mergedShowConsideringDisabledProp: a,
      // if to show popover body
      uncontrolledShow: o,
      mergedShowArrow: p,
      getMergedShow: l,
      setShow: R,
      handleClick: C,
      handleMouseEnter: B,
      handleMouseLeave: z,
      handleFocus: A,
      handleBlur: I,
      syncPosition: v
    };
  },
  render() {
    var e;
    const {
      positionManually: t,
      $slots: n
    } = this;
    let r, o = !1;
    if (!t && (r = Ns(n, "trigger"), r)) {
      r = ki(r), r = r.type === Ui ? T("span", [r]) : r;
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
        } = this, s = [i, ...a], l = {
          onBlur: (u) => {
            s.forEach((p) => {
              p.onBlur(u);
            });
          },
          onFocus: (u) => {
            s.forEach((p) => {
              p.onFocus(u);
            });
          },
          onClick: (u) => {
            s.forEach((p) => {
              p.onClick(u);
            });
          },
          onMouseenter: (u) => {
            s.forEach((p) => {
              p.onMouseenter(u);
            });
          },
          onMouseleave: (u) => {
            s.forEach((p) => {
              p.onMouseleave(u);
            });
          }
        };
        sf(r, a ? "nested" : t ? "manual" : this.trigger, l);
      }
    }
    return T(Ea, {
      ref: "binderInstRef",
      syncTarget: !o,
      syncTargetWithParent: this.internalSyncTargetWithParent
    }, {
      default: () => {
        this.mergedShowConsideringDisabledProp;
        const i = this.getMergedShow();
        return [this.internalTrapFocus && i ? Ht(T("div", {
          style: {
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }), [[io, {
          enabled: i,
          zIndex: this.zIndex
        }]]) : null, t ? null : T(Oa, null, {
          default: () => r
        }), T(nf, Ws(this.$props, of, Object.assign(Object.assign({}, this.$attrs), {
          showArrow: this.mergedShowArrow,
          show: i
        })), {
          default: () => {
            var a, s;
            return (s = (a = this.$slots).default) === null || s === void 0 ? void 0 : s.call(a);
          },
          header: () => {
            var a, s;
            return (s = (a = this.$slots).header) === null || s === void 0 ? void 0 : s.call(a);
          },
          footer: () => {
            var a, s;
            return (s = (a = this.$slots).footer) === null || s === void 0 ? void 0 : s.call(a);
          }
        })];
      }
    });
  }
}), df = { class: "lcc-header" }, ff = { class: "lcc-header__wrapper" }, pf = { class: "lcc-header__wrapper__navs" }, hf = ["onClick"], vf = {
  key: 0,
  class: "lcc-header__wrapper__navs__drop"
}, mf = { class: "lcc-header__wrapper__navs__drop__group__label" }, gf = { class: "lcc-header__wrapper__navs__drop__group__item__group" }, bf = /* @__PURE__ */ ue({
  __name: "header",
  props: {
    navDatas: {
      type: Array
    }
  },
  emits: ["jump"],
  setup(e, { emit: t }) {
    const n = [
      {
        title: "高质量发展中心",
        path: "/home"
      },
      {
        title: "学生发展中心",
        path: "/join"
      },
      {
        title: "教师发展中心",
        path: "/join",
        list: [
          {
            label: "数据概览",
            children: [
              {
                title: "数据概览",
                path: ""
              }
            ]
          },
          {
            label: "教师队伍建设",
            children: [
              {
                title: "基础教育教师队伍结构",
                path: ""
              },
              {
                title: "基础教育校长队伍",
                path: ""
              },
              {
                title: "基础教育交流轮岗",
                path: ""
              },
              {
                title: "基础教育交流轮岗",
                path: ""
              },
              {
                title: "教师资源均衡发展分析",
                path: ""
              }
            ]
          },
          {
            label: "教师职业发展",
            children: [
              {
                title: "教师成长",
                path: ""
              },
              {
                title: "教师专业技术水平分析",
                path: ""
              },
              {
                title: "教师风采",
                path: ""
              }
            ]
          }
        ]
      },
      {
        title: "治理决策中心",
        path: "/join"
      },
      {
        title: "发展规划中心",
        path: "/join"
      }
    ], r = D(() => e.navDatas ?? n), o = t;
    function i(a) {
      o("jump", a);
    }
    return (a, s) => (ye(), Se("div", df, [
      nt("div", ff, [
        nt("div", pf, [
          (ye(!0), Se(
            me,
            null,
            Kt(r.value, (l, u) => (ye(), Se("div", {
              class: "lcc-header__wrapper__navs__item",
              key: u
            }, [
              Vi(
                Gi(cf),
                {
                  trigger: "hover",
                  "arrow-class": "header-arrow-class",
                  class: "header-popover-class"
                },
                {
                  trigger: Zn(() => [
                    nt("a", {
                      class: "lcc-header__wrapper__navs__item__link",
                      onClick: (p) => i(l)
                    }, Yt(l.title), 9, hf)
                  ]),
                  default: Zn(() => [
                    l.list ? (ye(), Se("div", vf, [
                      (ye(!0), Se(
                        me,
                        null,
                        Kt(l.list, (p, y) => (ye(), Se("div", {
                          class: "lcc-header__wrapper__navs__drop__group",
                          key: y
                        }, [
                          nt(
                            "div",
                            mf,
                            Yt(p.label),
                            1
                            /* TEXT */
                          ),
                          nt("div", gf, [
                            (ye(!0), Se(
                              me,
                              null,
                              Kt(p.children, (h, w) => (ye(), Se(
                                "div",
                                {
                                  class: "lcc-header__wrapper__navs__drop__group__item__group__nav",
                                  key: w
                                },
                                Yt(h.title),
                                1
                                /* TEXT */
                              ))),
                              128
                              /* KEYED_FRAGMENT */
                            ))
                          ])
                        ]))),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ])) : Xi("v-if", !0)
                  ]),
                  _: 2
                  /* DYNAMIC */
                },
                1024
                /* DYNAMIC_SLOTS */
              )
            ]))),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ])
    ]));
  }
}), wf = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, _f = /* @__PURE__ */ wf(bf, [["__scopeId", "data-v-2c925960"]]);
export {
  _f as LcHeader
};
