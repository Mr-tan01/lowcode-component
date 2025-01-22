import { ref as M, readonly as cn, watch as ve, computed as I, onMounted as He, onBeforeUnmount as $e, createTextVNode as eo, Fragment as ge, Comment as On, defineComponent as ue, provide as lt, getCurrentInstance as to, inject as re, withDirectives as Ht, toRef as Ce, h as T, Teleport as Bi, nextTick as Di, renderSlot as Fi, onActivated as Hi, onDeactivated as Li, isVNode as Ni, shallowRef as ji, watchEffect as Ye, onBeforeMount as no, Transition as fn, mergeProps as ro, vShow as Wi, cloneVNode as Ui, Text as ki, openBlock as ye, createElementBlock as Se, createElementVNode as nt, renderList as Kt, createVNode as Vi, unref as Xi, withCtx as qn, toDisplayString as Yt, createCommentVNode as Gi } from "vue";
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
function Zi(e, t, n, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const o = oo(e, t, n);
    return Object.keys(o).forEach((i) => {
      Q(i, document, o[i], r);
    }), !0;
  }
  return !1;
}
function qi(e, t, n, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const o = oo(e, t, n);
    return Object.keys(o).forEach((i) => {
      G(i, document, o[i], r);
    }), !0;
  }
  return !1;
}
function Ji() {
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
    const _ = f[b];
    return f[b] = function() {
      return C.apply(f, arguments), _.apply(f, arguments);
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
      const { type: C, eventPhase: _, bubbles: R } = b, F = Pt(b);
      if (_ === 2)
        return;
      const j = _ === 1 ? "capture" : "bubble";
      let W = F;
      const S = [];
      for (; W === null && (W = window), S.push(W), W !== window; )
        W = W.parentNode || null;
      const P = p.capture[C], U = p.bubble[C];
      if (o(b, "stopPropagation", n), o(b, "stopImmediatePropagation", r), u(b, l), j === "capture") {
        if (P === void 0)
          return;
        for (let K = S.length - 1; K >= 0 && !e.has(b); --K) {
          const J = S[K], Y = P.get(J);
          if (Y !== void 0) {
            a.set(b, J);
            for (const de of Y) {
              if (t.has(b))
                break;
              de(b);
            }
          }
          if (K === 0 && !R && U !== void 0) {
            const de = U.get(J);
            if (de !== void 0)
              for (const bt of de) {
                if (t.has(b))
                  break;
                bt(b);
              }
          }
        }
      } else if (j === "bubble") {
        if (U === void 0)
          return;
        for (let K = 0; K < S.length && !e.has(b); ++K) {
          const J = S[K], Y = U.get(J);
          if (Y !== void 0) {
            a.set(b, J);
            for (const de of Y) {
              if (t.has(b))
                break;
              de(b);
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
      const { type: C, eventPhase: _ } = b;
      if (_ !== 2)
        return;
      const R = y[C];
      R !== void 0 && R.forEach((F) => F(b));
    };
    return f.displayName = "evtdUnifiedWindowEventHandler", f;
  }
  const d = h(), g = w();
  function v(f, b) {
    const C = p[f];
    return C[b] === void 0 && (C[b] = /* @__PURE__ */ new Map(), window.addEventListener(b, d, f === "capture")), C[b];
  }
  function c(f) {
    return y[f] === void 0 && (y[f] = /* @__PURE__ */ new Set(), window.addEventListener(f, g)), y[f];
  }
  function x(f, b) {
    let C = f.get(b);
    return C === void 0 && f.set(b, C = /* @__PURE__ */ new Set()), C;
  }
  function A(f, b, C, _) {
    const R = p[b][C];
    if (R !== void 0) {
      const F = R.get(f);
      if (F !== void 0 && F.has(_))
        return !0;
    }
    return !1;
  }
  function z(f, b) {
    const C = y[f];
    return !!(C !== void 0 && C.has(b));
  }
  function D(f, b, C, _) {
    let R;
    if (typeof _ == "object" && _.once === !0 ? R = (P) => {
      B(f, b, R, _), C(P);
    } : R = C, Zi(f, b, R, _))
      return;
    const j = _ === !0 || typeof _ == "object" && _.capture === !0 ? "capture" : "bubble", W = v(j, f), S = x(W, b);
    if (S.has(R) || S.add(R), b === window) {
      const P = c(f);
      P.has(R) || P.add(R);
    }
  }
  function B(f, b, C, _) {
    if (qi(f, b, C, _))
      return;
    const F = _ === !0 || typeof _ == "object" && _.capture === !0, j = F ? "capture" : "bubble", W = v(j, f), S = x(W, b);
    if (b === window && !A(b, F ? "bubble" : "capture", f, C) && z(f, C)) {
      const U = y[f];
      U.delete(C), U.size === 0 && (window.removeEventListener(f, g), y[f] = void 0);
    }
    S.has(C) && S.delete(C), S.size === 0 && W.delete(b), W.size === 0 && (window.removeEventListener(f, d, j === "capture"), p[j][f] = void 0);
  }
  return {
    on: D,
    off: B
  };
}
const { on: Q, off: G } = Ji(), ke = "@@mmoContext", Qi = {
  mounted(e, { value: t }) {
    e[ke] = {
      handler: void 0
    }, typeof t == "function" && (e[ke].handler = t, Q("mousemoveoutside", e, t));
  },
  updated(e, { value: t }) {
    const n = e[ke];
    typeof t == "function" ? n.handler ? n.handler !== t && (G("mousemoveoutside", e, n.handler), n.handler = t, Q("mousemoveoutside", e, t)) : (e[ke].handler = t, Q("mousemoveoutside", e, t)) : n.handler && (G("mousemoveoutside", e, n.handler), n.handler = void 0);
  },
  unmounted(e) {
    const { handler: t } = e[ke];
    t && G("mousemoveoutside", e, t), e[ke].handler = void 0;
  }
}, Ve = "@@coContext", Jn = {
  mounted(e, { value: t, modifiers: n }) {
    e[Ve] = {
      handler: void 0
    }, typeof t == "function" && (e[Ve].handler = t, Q("clickoutside", e, t, {
      capture: n.capture
    }));
  },
  updated(e, { value: t, modifiers: n }) {
    const r = e[Ve];
    typeof t == "function" ? r.handler ? r.handler !== t && (G("clickoutside", e, r.handler, {
      capture: n.capture
    }), r.handler = t, Q("clickoutside", e, t, {
      capture: n.capture
    })) : (e[Ve].handler = t, Q("clickoutside", e, t, {
      capture: n.capture
    })) : r.handler && (G("clickoutside", e, r.handler, {
      capture: n.capture
    }), r.handler = void 0);
  },
  unmounted(e, { modifiers: t }) {
    const { handler: n } = e[Ve];
    n && G("clickoutside", e, n, {
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
const Zt = new ta(), Xe = "@@ziContext", io = {
  mounted(e, t) {
    const { value: n = {} } = t, { zIndex: r, enabled: o } = n;
    e[Xe] = {
      enabled: !!o,
      initialized: !1
    }, o && (Zt.ensureZIndex(e, r), e[Xe].initialized = !0);
  },
  updated(e, t) {
    const { value: n = {} } = t, { zIndex: r, enabled: o } = n, i = e[Xe].enabled;
    o && !i && (Zt.ensureZIndex(e, r), e[Xe].initialized = !0), e[Xe].enabled = !!o;
  },
  unmounted(e, t) {
    if (!e[Xe].initialized)
      return;
    const { value: n = {} } = t, { zIndex: r } = n;
    Zt.unregister(e, r);
  }
};
function na(e) {
  const t = M(!!e.value);
  if (t.value)
    return cn(t);
  const n = ve(e, (r) => {
    r && (t.value = !0, n());
  });
  return cn(t);
}
function pt(e) {
  const t = I(e), n = M(t.value);
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
let Ge, ut;
const oa = () => {
  var e, t;
  Ge = ra ? (t = (e = document) === null || e === void 0 ? void 0 : e.fonts) === null || t === void 0 ? void 0 : t.ready : void 0, ut = !1, Ge !== void 0 ? Ge.then(() => {
    ut = !0;
  }) : ut = !0;
};
oa();
function ia(e) {
  if (ut)
    return;
  let t = !1;
  He(() => {
    ut || Ge == null || Ge.then(() => {
      t || e();
    });
  }), $e(() => {
    t = !0;
  });
}
function aa(e, t) {
  return ve(e, (n) => {
    n !== void 0 && (t.value = n);
  }), I(() => e.value === void 0 ? t.value : e.value);
}
function ao() {
  const e = M(!1);
  return He(() => {
    e.value = !0;
  }), cn(e);
}
function sa(e, t) {
  return I(() => {
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
function da() {
  At.forEach((e) => e(...so.get(e))), At = [];
}
function ca(e, ...t) {
  so.set(e, t), !At.includes(e) && At.push(e) === 1 && requestAnimationFrame(da);
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
}, Je = "^\\s*", Qe = "\\s*$", Ae = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", Re = "([0-9A-Fa-f])", ze = "([0-9A-Fa-f]{2})", fa = new RegExp(`${Je}rgb\\s*\\(${Ae},${Ae},${Ae}\\)${Qe}`), pa = new RegExp(`${Je}rgba\\s*\\(${Ae},${Ae},${Ae},${Ae}\\)${Qe}`), ha = new RegExp(`${Je}#${Re}${Re}${Re}${Qe}`), va = new RegExp(`${Je}#${ze}${ze}${ze}${Qe}`), ga = new RegExp(`${Je}#${Re}${Re}${Re}${Re}${Qe}`), ma = new RegExp(`${Je}#${ze}${ze}${ze}${ze}${Qe}`);
function te(e) {
  return parseInt(e, 16);
}
function Ze(e) {
  try {
    let t;
    if (t = va.exec(e))
      return [te(t[1]), te(t[2]), te(t[3]), 1];
    if (t = fa.exec(e))
      return [q(t[1]), q(t[5]), q(t[9]), 1];
    if (t = pa.exec(e))
      return [
        q(t[1]),
        q(t[5]),
        q(t[9]),
        dt(t[13])
      ];
    if (t = ha.exec(e))
      return [
        te(t[1] + t[1]),
        te(t[2] + t[2]),
        te(t[3] + t[3]),
        1
      ];
    if (t = ma.exec(e))
      return [
        te(t[1]),
        te(t[2]),
        te(t[3]),
        dt(te(t[4]) / 255)
      ];
    if (t = ga.exec(e))
      return [
        te(t[1] + t[1]),
        te(t[2] + t[2]),
        te(t[3] + t[3]),
        dt(te(t[4] + t[4]) / 255)
      ];
    if (e in er)
      return Ze(er[e]);
    throw new Error(`[seemly/rgba]: Invalid color value ${e}.`);
  } catch (t) {
    throw t;
  }
}
function ba(e) {
  return e > 1 ? 1 : e < 0 ? 0 : e;
}
function wa(e, t, n, r) {
  return `rgba(${q(e)}, ${q(t)}, ${q(n)}, ${ba(r)})`;
}
function qt(e, t, n, r, o) {
  return q((e * t * (1 - r) + n * r) / o);
}
function ya(e, t) {
  Array.isArray(e) || (e = Ze(e)), Array.isArray(t) || (t = Ze(t));
  const n = e[3], r = t[3], o = dt(n + r - n * r);
  return wa(qt(e[0], n, t[0], r, o), qt(e[1], n, t[1], r, o), qt(e[2], n, t[2], r, o), o);
}
function wt(e, t) {
  const [n, r, o, i = 1] = Array.isArray(e) ? e : Ze(e), { lightness: a = 1, alpha: s = 1 } = t;
  return Sa([n * a, r * a, o * a, i * s]);
}
function dt(e) {
  const t = Math.round(Number(e) * 100) / 100;
  return t > 1 ? 1 : t < 0 ? 0 : t;
}
function q(e) {
  const t = Math.round(Number(e));
  return t > 255 ? 255 : t < 0 ? 0 : t;
}
function Sa(e) {
  const [t, n, r] = e;
  return 3 in e ? `rgba(${q(t)}, ${q(n)}, ${q(r)}, ${dt(e[3])})` : `rgba(${q(t)}, ${q(n)}, ${q(r)}, 1)`;
}
function _a(e = 8) {
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
      if (r.type === ge) {
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
let _e = null;
function lo() {
  if (_e === null && (_e = document.getElementById("v-binder-view-measurer"), _e === null)) {
    _e = document.createElement("div"), _e.id = "v-binder-view-measurer";
    const { style: e } = _e;
    e.position = "fixed", e.left = "0", e.right = "0", e.top = "0", e.bottom = "0", e.pointerEvents = "none", e.visibility = "hidden", document.body.appendChild(_e);
  }
  return _e.getBoundingClientRect();
}
function xa(e, t) {
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
function Jt(e) {
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
    const n = re("VBinder", null), r = M(null), o = (c) => {
      r.value = c, n && e.syncTargetWithParent && n.setTargetRef(c);
    };
    let i = [];
    const a = () => {
      let c = r.value;
      for (; c = uo(c), c !== null; )
        i.push(c);
      for (const x of i)
        Q("scroll", x, y, !0);
    }, s = () => {
      for (const c of i)
        G("scroll", c, y, !0);
      i = [];
    }, l = /* @__PURE__ */ new Set(), u = (c) => {
      l.size === 0 && a(), l.has(c) || l.add(c);
    }, p = (c) => {
      l.has(c) && l.delete(c), l.size === 0 && s();
    }, y = () => {
      ca(h);
    }, h = () => {
      l.forEach((c) => c());
    }, w = /* @__PURE__ */ new Set(), d = (c) => {
      w.size === 0 && Q("resize", window, v), w.has(c) || w.add(c);
    }, g = (c) => {
      w.has(c) && w.delete(c), w.size === 0 && G("resize", window, v);
    }, v = () => {
      w.forEach((c) => c());
    };
    return $e(() => {
      G("resize", window, v), s();
    }), {
      targetRef: r,
      setTargetRef: o,
      addScrollListener: u,
      removeScrollListener: p,
      addResizeListener: d,
      removeResizeListener: g
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
function Lt() {
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
function za(e, t) {
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
function Ia(e, t) {
  const n = [];
  return t.split(co).forEach((r) => {
    e.forEach((o) => {
      n.push((o && o + " ") + r);
    });
  }), n;
}
function Ba(e) {
  let t = [""];
  return e.forEach((n) => {
    n = n && n.trim(), // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    n && (n.includes("&") ? t = za(t, n) : t = Ia(t, n));
  }), t.join(", ").replace(Ra, " ");
}
function rr(e) {
  if (!e)
    return;
  const t = e.parentElement;
  t && t.removeChild(e);
}
function Nt(e, t) {
  return (t ?? document.head).querySelector(`style[cssr-id="${e}"]`);
}
function Da(e) {
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
function La(e, t, n) {
  return typeof e == "function" ? e({
    context: t.context,
    props: n
  }) : e;
}
function or(e, t, n, r) {
  if (!t)
    return "";
  const o = La(t, n, r);
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
  const s = Ba(t), l = or(s, e.props, r, o);
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
function Na(e, t, n) {
  const r = [];
  return po(e, [], r, t, n), r.join(`

`);
}
function gn(e) {
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
function ja(e, t, n, r) {
  const { els: o } = t;
  if (n === void 0)
    o.forEach(rr), t.els = [];
  else {
    const i = Nt(n, r);
    i && o.includes(i) && (rr(i), t.els = o.filter((a) => a !== i));
  }
}
function ir(e, t) {
  e.push(t);
}
function Wa(e, t, n, r, o, i, a, s, l) {
  let u;
  if (n === void 0 && (u = t.render(r), n = gn(u)), l) {
    l.adapter(n, u ?? t.render(r));
    return;
  }
  s === void 0 && (s = document.head);
  const p = Nt(n, s);
  if (p !== null && !i)
    return p;
  const y = p ?? Da(n);
  if (u === void 0 && (u = t.render(r)), y.textContent = u, p !== null)
    return p;
  if (a) {
    const h = s.querySelector(`meta[name="${a}"]`);
    if (h)
      return s.insertBefore(y, h), ir(t.els, y), y;
  }
  return o ? s.insertBefore(y, s.querySelector("style, link")) : s.appendChild(y), ir(t.els, y), y;
}
function Ua(e) {
  return Na(this, this.instance, e);
}
function ka(e = {}) {
  const { id: t, ssr: n, props: r, head: o = !1, force: i = !1, anchorMetaName: a, parent: s } = e;
  return Wa(this.instance, this, t, r, o, i, a, s, n);
}
function Va(e = {}) {
  const { id: t, parent: n } = e;
  ja(this.instance, this, t, n);
}
const St = function(e, t, n, r) {
  return {
    instance: e,
    $: t,
    props: n,
    children: r,
    els: [],
    render: Ua,
    mount: ka,
    unmount: Va
  };
}, Xa = function(e, t, n, r) {
  return Array.isArray(t) ? St(e, { $: null }, null, t) : Array.isArray(n) ? St(e, t, null, n) : Array.isArray(r) ? St(e, t, n, r) : St(e, t, n, null);
};
function ho(e = {}) {
  const t = {
    c: (...n) => Xa(t, ...n),
    use: (n, ...r) => n.install(t, ...r),
    find: Nt,
    context: {},
    config: e
  };
  return t;
}
function Ga(e, t) {
  if (e === void 0)
    return !1;
  if (t) {
    const { context: { ids: n } } = t;
    return n.has(e);
  }
  return Nt(e) !== null;
}
const { c: _t } = ho(), Ka = "vueuc-style";
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
      mergedTo: I(() => {
        const { to: t } = e;
        return t ?? "body";
      })
    };
  },
  render() {
    return this.showTeleport ? this.disabled ? pn("lazy-teleport", this.$slots) : T(Bi, {
      disabled: this.disabled,
      to: this.mergedTo
    }, pn("lazy-teleport", this.$slots)) : null;
  }
}), xt = {
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
}, Za = {
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
}, qa = {
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
}, Ja = {
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
  const p = (w, d, g) => {
    let v = 0, c = 0;
    const x = n[w] - t[d] - t[w];
    return x > 0 && r && (g ? c = lr[d] ? x : -x : v = lr[d] ? x : -x), {
      left: v,
      top: c
    };
  }, y = a === "left" || a === "right";
  if (l !== "center") {
    const w = Ja[e], d = xt[w], g = Qt[w];
    if (n[g] > t[g]) {
      if (
        // current space is not enough
        // ----------[ target ]---------|
        // -------[     follower        ]
        t[w] + t[g] < n[g]
      ) {
        const v = (n[g] - t[g]) / 2;
        t[w] < v || t[d] < v ? t[w] < t[d] ? (l = sr[s], u = p(g, d, y)) : u = p(g, w, y) : l = "center";
      }
    } else n[g] < t[g] && t[d] < 0 && // opposite align has larger space
    // ------------[   target   ]
    // ----------------[follower]
    t[w] > t[d] && (l = sr[s]);
  } else {
    const w = a === "bottom" || a === "top" ? "left" : "top", d = xt[w], g = Qt[w], v = (n[g] - t[g]) / 2;
    // center is not enough
    // ----------- [ target ]--|
    // -------[     follower     ]
    (t[w] < v || t[d] < v) && (t[w] > t[d] ? (l = ur[w], u = p(g, w, y)) : (l = ur[d], u = p(g, d, y)));
  }
  let h = a;
  return (
    // space is not enough
    t[a] < n[Qt[a]] && // opposite position's space is larger
    t[a] < t[xt[a]] && (h = xt[a]), {
      placement: l !== "center" ? `${h}-${l}` : h,
      left: u.left,
      top: u.top
    }
  );
}
function es(e, t) {
  return t ? qa[e] : Za[e];
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
const ns = _t([
  _t(".v-binder-follower-container", {
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    height: "0",
    pointerEvents: "none",
    zIndex: "auto"
  }),
  _t(".v-binder-follower-content", {
    position: "absolute",
    zIndex: "auto"
  }, [
    _t("> *", {
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
    const s = Lt();
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
      const w = t.targetRef, { x: d, y: g, overlap: v } = e, c = d !== void 0 && g !== void 0 ? xa(d, g) : Jt(w);
      h.style.setProperty("--v-target-width", `${Math.round(c.width)}px`), h.style.setProperty("--v-target-height", `${Math.round(c.height)}px`);
      const { width: x, minWidth: A, placement: z, internalShift: D, flip: B } = e;
      h.setAttribute("v-placement", z), v ? h.setAttribute("v-overlap", "") : h.removeAttribute("v-overlap");
      const { style: f } = h;
      x === "target" ? f.width = `${c.width}px` : x !== void 0 ? f.width = x : f.width = "", A === "target" ? f.minWidth = `${c.width}px` : A !== void 0 ? f.minWidth = A : f.minWidth = "";
      const b = Jt(h), C = Jt(o.value), { left: _, top: R, placement: F } = Qa(z, c, b, D, B, v), j = es(F, v), { left: W, top: S, transform: P } = ts(F, C, c, R, _, v);
      h.setAttribute("v-placement", F), h.style.setProperty("--v-offset-left", `${Math.round(_)}px`), h.style.setProperty("--v-offset-top", `${Math.round(R)}px`), h.style.transform = `translateX(${W}) translateY(${S}) ${P}`, h.style.setProperty("--v-transform-origin", j), h.style.transformOrigin = j;
    };
    ve(n, (h) => {
      h ? (i(), u()) : a();
    });
    const u = () => {
      Di().then(l).catch((h) => console.error(h));
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
var Be = [], os = function() {
  return Be.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, is = function() {
  return Be.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, dr = "ResizeObserver loop completed with undelivered notifications.", as = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: dr
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = dr), window.dispatchEvent(e);
}, ht;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(ht || (ht = {}));
var De = function(e) {
  return Object.freeze(e);
}, ss = /* @__PURE__ */ function() {
  function e(t, n) {
    this.inlineSize = t, this.blockSize = n, De(this);
  }
  return e;
}(), vo = function() {
  function e(t, n, r, o) {
    return this.x = t, this.y = n, this.width = r, this.height = o, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, De(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, n = t.x, r = t.y, o = t.top, i = t.right, a = t.bottom, s = t.left, l = t.width, u = t.height;
    return { x: n, y: r, top: o, right: i, bottom: a, left: s, width: l, height: u };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), $n = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, go = function(e) {
  if ($n(e)) {
    var t = e.getBBox(), n = t.width, r = t.height;
    return !n && !r;
  }
  var o = e, i = o.offsetWidth, a = o.offsetHeight;
  return !(i || a || e.getClientRects().length);
}, cr = function(e) {
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
}, ct = typeof window < "u" ? window : {}, Ct = /* @__PURE__ */ new WeakMap(), fr = /auto|scroll/, us = /^tb|vertical/, ds = /msie|trident/i.test(ct.navigator && ct.navigator.userAgent), ce = function(e) {
  return parseFloat(e || "0");
}, Ke = function(e, t, n) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = !1), new ss((n ? t : e) || 0, (n ? e : t) || 0);
}, pr = De({
  devicePixelContentBoxSize: Ke(),
  borderBoxSize: Ke(),
  contentBoxSize: Ke(),
  contentRect: new vo(0, 0, 0, 0)
}), mo = function(e, t) {
  if (t === void 0 && (t = !1), Ct.has(e) && !t)
    return Ct.get(e);
  if (go(e))
    return Ct.set(e, pr), pr;
  var n = getComputedStyle(e), r = $n(e) && e.ownerSVGElement && e.getBBox(), o = !ds && n.boxSizing === "border-box", i = us.test(n.writingMode || ""), a = !r && fr.test(n.overflowY || ""), s = !r && fr.test(n.overflowX || ""), l = r ? 0 : ce(n.paddingTop), u = r ? 0 : ce(n.paddingRight), p = r ? 0 : ce(n.paddingBottom), y = r ? 0 : ce(n.paddingLeft), h = r ? 0 : ce(n.borderTopWidth), w = r ? 0 : ce(n.borderRightWidth), d = r ? 0 : ce(n.borderBottomWidth), g = r ? 0 : ce(n.borderLeftWidth), v = y + u, c = l + p, x = g + w, A = h + d, z = s ? e.offsetHeight - A - e.clientHeight : 0, D = a ? e.offsetWidth - x - e.clientWidth : 0, B = o ? v + x : 0, f = o ? c + A : 0, b = r ? r.width : ce(n.width) - B - D, C = r ? r.height : ce(n.height) - f - z, _ = b + v + D + x, R = C + c + z + A, F = De({
    devicePixelContentBoxSize: Ke(Math.round(b * devicePixelRatio), Math.round(C * devicePixelRatio), i),
    borderBoxSize: Ke(_, R, i),
    contentBoxSize: Ke(b, C, i),
    contentRect: new vo(y, l, b, C)
  });
  return Ct.set(e, F), F;
}, bo = function(e, t, n) {
  var r = mo(e, n), o = r.borderBoxSize, i = r.contentBoxSize, a = r.devicePixelContentBoxSize;
  switch (t) {
    case ht.DEVICE_PIXEL_CONTENT_BOX:
      return a;
    case ht.BORDER_BOX:
      return o;
    default:
      return i;
  }
}, cs = /* @__PURE__ */ function() {
  function e(t) {
    var n = mo(t);
    this.target = t, this.contentRect = n.contentRect, this.borderBoxSize = De([n.borderBoxSize]), this.contentBoxSize = De([n.contentBoxSize]), this.devicePixelContentBoxSize = De([n.devicePixelContentBoxSize]);
  }
  return e;
}(), wo = function(e) {
  if (go(e))
    return 1 / 0;
  for (var t = 0, n = e.parentNode; n; )
    t += 1, n = n.parentNode;
  return t;
}, fs = function() {
  var e = 1 / 0, t = [];
  Be.forEach(function(a) {
    if (a.activeTargets.length !== 0) {
      var s = [];
      a.activeTargets.forEach(function(u) {
        var p = new cs(u.target), y = wo(u.target);
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
  Be.forEach(function(n) {
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
}, gs = function(e) {
  vs(function() {
    requestAnimationFrame(e);
  });
}, Mt = 0, ms = function() {
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
], gr = function(e) {
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
      var r = gr(t);
      gs(function() {
        var o = !1;
        try {
          o = ps();
        } finally {
          if (tn = !1, t = r - gr(), !ms())
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
    document.body ? n() : ct.addEventListener("DOMContentLoaded", n);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), vr.forEach(function(n) {
      return ct.addEventListener(n, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), vr.forEach(function(n) {
      return ct.removeEventListener(n, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), mn = new ys(), mr = function(e) {
  !Mt && e > 0 && mn.start(), Mt += e, !Mt && mn.stop();
}, Ss = function(e) {
  return !$n(e) && !ls(e) && getComputedStyle(e).display === "inline";
}, _s = function() {
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
}(), xs = /* @__PURE__ */ function() {
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
    var r = new xs(t, n);
    Et.set(t, r);
  }, e.observe = function(t, n, r) {
    var o = Et.get(t), i = o.observationTargets.length === 0;
    br(o.observationTargets, n) < 0 && (i && Be.push(o), o.observationTargets.push(new _s(n, r && r.box)), mr(1), mn.schedule());
  }, e.unobserve = function(t, n) {
    var r = Et.get(t), o = br(r.observationTargets, n), i = r.observationTargets.length === 1;
    o >= 0 && (i && Be.splice(Be.indexOf(r), 1), r.observationTargets.splice(o, 1), mr(-1));
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
    if (!cr(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Ot.observe(this, t, n);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!cr(t))
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
function _o(e) {
  for (let t = 0; t < e.childNodes.length; t++) {
    const n = e.childNodes[t];
    if (So(n) && (Co(n) || _o(n)))
      return !0;
  }
  return !1;
}
function xo(e) {
  for (let t = e.childNodes.length - 1; t >= 0; t--) {
    const n = e.childNodes[t];
    if (So(n) && (Co(n) || xo(n)))
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
    const t = _a(), n = M(null), r = M(null);
    let o = !1, i = !1;
    const a = typeof document > "u" ? null : document.activeElement;
    function s() {
      return rt[rt.length - 1] === t;
    }
    function l(v) {
      var c;
      v.code === "Escape" && s() && ((c = e.onEsc) === null || c === void 0 || c.call(e, v));
    }
    He(() => {
      ve(() => e.active, (v) => {
        v ? (y(), Q("keydown", document, l)) : (G("keydown", document, l), o && h());
      }, {
        immediate: !0
      });
    }), $e(() => {
      G("keydown", document, l), o && h();
    });
    function u(v) {
      if (!i && s()) {
        const c = p();
        if (c === null || c.contains(Rt(v)))
          return;
        w("first");
      }
    }
    function p() {
      const v = n.value;
      if (v === null)
        return null;
      let c = v;
      for (; c = c.nextSibling, !(c === null || c instanceof Element && c.tagName === "DIV"); )
        ;
      return c;
    }
    function y() {
      var v;
      if (!e.disabled) {
        if (rt.push(t), e.autoFocus) {
          const { initialFocusTo: c } = e;
          c === void 0 ? w("first") : (v = ar(c)) === null || v === void 0 || v.focus({ preventScroll: !0 });
        }
        o = !0, document.addEventListener("focus", u, !0);
      }
    }
    function h() {
      var v;
      if (e.disabled || (document.removeEventListener("focus", u, !0), rt = rt.filter((x) => x !== t), s()))
        return;
      const { finalFocusTo: c } = e;
      c !== void 0 ? (v = ar(c)) === null || v === void 0 || v.focus({ preventScroll: !0 }) : e.returnFocusOnDeactivated && a instanceof HTMLElement && (i = !0, a.focus({ preventScroll: !0 }), i = !1);
    }
    function w(v) {
      if (s() && e.active) {
        const c = n.value, x = r.value;
        if (c !== null && x !== null) {
          const A = p();
          if (A == null || A === x) {
            i = !0, c.focus({ preventScroll: !0 }), i = !1;
            return;
          }
          i = !0;
          const z = v === "first" ? _o(A) : xo(A);
          i = !1, z || (i = !0, c.focus({ preventScroll: !0 }), i = !1);
        }
      }
    }
    function d(v) {
      if (i)
        return;
      const c = p();
      c !== null && (v.relatedTarget !== null && c.contains(v.relatedTarget) ? w("last") : w("first"));
    }
    function g(v) {
      i || (v.relatedTarget !== null && v.relatedTarget === n.value ? w("last") : w("first"));
    }
    return {
      focusableStartRef: n,
      focusableEndRef: r,
      focusableStyle: "position: absolute; height: 0; width: 0;",
      handleStartFocus: d,
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
    return T(ge, null, [
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
function qe(e) {
  const t = re(Oo, null), n = re(Eo, null), r = re($o, null), o = re(Ts, null), i = M();
  if (typeof document < "u") {
    i.value = document.fullscreenElement;
    const a = () => {
      i.value = document.fullscreenElement;
    };
    He(() => {
      Q("fullscreenchange", document, a);
    }), $e(() => {
      G("fullscreenchange", document, a);
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
qe.tdkey = To;
qe.propTo = {
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
  }), Li(() => {
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
function _r(e) {
  const {
    left: t,
    right: n,
    top: r,
    bottom: o
  } = at(e);
  return `${r} ${t} ${o} ${n}`;
}
var xr = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_21460_PJDHIKOZPECWZFUP", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.96.4", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-32603f9735-sock", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
function As(e) {
  let t = ".", n = "__", r = "--", o;
  {
    let d = e.blockPrefix;
    d && (t = d), d = e.elementPrefix, d && (n = d), d = e.modifierPrefix, d && (r = d);
  }
  const i = {
    install(d) {
      o = d.c;
      const g = d.context;
      g.bem = {}, g.bem.b = null, g.bem.els = null;
    }
  };
  function a(d) {
    let g, v;
    return {
      before(c) {
        g = c.bem.b, v = c.bem.els, c.bem.els = null;
      },
      after(c) {
        c.bem.b = g, c.bem.els = v;
      },
      $({ context: c, props: x }) {
        return d = typeof d == "string" ? d : d({ context: c, props: x }), c.bem.b = d, `${(x == null ? void 0 : x.bPrefix) || t}${c.bem.b}`;
      }
    };
  }
  function s(d) {
    let g;
    return {
      before(v) {
        g = v.bem.els;
      },
      after(v) {
        v.bem.els = g;
      },
      $({ context: v, props: c }) {
        return d = typeof d == "string" ? d : d({ context: v, props: c }), v.bem.els = d.split(",").map((x) => x.trim()), v.bem.els.map((x) => `${(c == null ? void 0 : c.bPrefix) || t}${v.bem.b}${n}${x}`).join(", ");
      }
    };
  }
  function l(d) {
    return {
      $({ context: g, props: v }) {
        d = typeof d == "string" ? d : d({ context: g, props: v });
        const c = d.split(",").map((z) => z.trim());
        function x(z) {
          return c.map((D) => `&${(v == null ? void 0 : v.bPrefix) || t}${g.bem.b}${z !== void 0 ? `${n}${z}` : ""}${r}${D}`).join(", ");
        }
        const A = g.bem.els;
        if (A !== null) {
          if (xr.NODE_ENV !== "production" && A.length >= 2)
            throw Error(`[css-render/plugin-bem]: m(${d}) is invalid, using modifier inside multiple elements is not allowed`);
          return x(A[0]);
        } else
          return x();
      }
    };
  }
  function u(d) {
    return {
      $({ context: g, props: v }) {
        d = typeof d == "string" ? d : d({ context: g, props: v });
        const c = g.bem.els;
        if (xr.NODE_ENV !== "production" && c !== null && c.length >= 2)
          throw Error(`[css-render/plugin-bem]: notM(${d}) is invalid, using modifier inside multiple elements is not allowed`);
        return `&:not(${(v == null ? void 0 : v.bPrefix) || t}${g.bem.b}${c !== null && c.length > 0 ? `${n}${c[0]}` : ""}${r}${d})`;
      }
    };
  }
  return Object.assign(i, {
    cB: (...d) => o(a(d[0]), d[1], d[2]),
    cE: (...d) => o(s(d[0]), d[1], d[2]),
    cM: (...d) => o(l(d[0]), d[1], d[2]),
    cNotM: (...d) => o(u(d[0]), d[1], d[2])
  }), i;
}
const Rs = "n", zs = `.${Rs}-`, Is = "__", Bs = "--", Po = ho(), Mo = As({
  blockPrefix: zs,
  elementPrefix: Is,
  modifierPrefix: Bs
});
Po.use(Mo);
const {
  c: N,
  find: _f
} = Po, {
  cB: ne,
  cE: Ie,
  cM: le,
  cNotM: rn
} = Mo, Ds = (...e) => N(">", [ne(...e)]);
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
      if (r.type === ge) {
        if (r.children === null) return;
        Array.isArray(r.children) && bn(r.children, t, n);
      } else {
        if (r.type === On && t) return;
        n.push(r);
      }
    }
  }), n;
}
function Ls(e, t = "default", n = void 0) {
  const r = e[t];
  if (!r)
    return Er("getFirstSlotVNode", `slot[${t}] is empty`), null;
  const o = bn(r(n));
  return o.length === 1 ? o[0] : (Er("getFirstSlotVNode", `slot[${t}] should have exactly one child`), null);
}
function Ns(e, t = [], n) {
  const r = {};
  return t.forEach((o) => {
    r[o] = e[o];
  }), Object.assign(r, n);
}
function Tn(e) {
  return e.some((t) => Ni(t) ? !(t.type === On || t.type === ge && !Tn(t.children)) : !0) ? e : null;
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
}), jt = "n-config-provider", js = "n";
function Ao(e = {}, t = {
  defaultBordered: !0
}) {
  const n = re(jt, null);
  return {
    // NConfigProvider,
    inlineThemeDisabled: n == null ? void 0 : n.inlineThemeDisabled,
    mergedRtlRef: n == null ? void 0 : n.mergedRtlRef,
    mergedComponentPropsRef: n == null ? void 0 : n.mergedComponentPropsRef,
    mergedBreakpointsRef: n == null ? void 0 : n.mergedBreakpointsRef,
    mergedBorderedRef: I(() => {
      var r, o;
      const {
        bordered: i
      } = e;
      return i !== void 0 ? i : (o = (r = n == null ? void 0 : n.mergedBorderedRef.value) !== null && r !== void 0 ? r : t.defaultBordered) !== null && o !== void 0 ? o : !0;
    }),
    mergedClsPrefixRef: n ? n.mergedClsPrefixRef : ji(js),
    namespaceRef: I(() => n == null ? void 0 : n.mergedNamespaceRef.value)
  };
}
function Ro(e, t, n, r) {
  n || Hs("useThemeClass", "cssVarsRef is not passed");
  const o = re(jt, null), i = o == null ? void 0 : o.mergedThemeHashRef, a = o == null ? void 0 : o.styleMountTarget, s = M(""), l = Lt();
  let u;
  const p = `__${e}`, y = () => {
    let h = p;
    const w = i == null ? void 0 : i.value;
    w && (h += `-${w}`);
    const {
      themeOverrides: d,
      builtinThemeOverrides: g
    } = r;
    d && (h += `-${gn(JSON.stringify(d))}`), g && (h += `-${gn(JSON.stringify(g))}`), s.value = h, u = () => {
      const v = n.value;
      let c = "";
      for (const x in v)
        c += `${x}: ${v[x]};`;
      N(`.${h}`, c).mount({
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
var zo = typeof global == "object" && global && global.Object === Object && global, Ws = typeof self == "object" && self && self.Object === Object && self, pe = zo || Ws || Function("return this")(), Ee = pe.Symbol, Io = Object.prototype, Us = Io.hasOwnProperty, ks = Io.toString, it = Ee ? Ee.toStringTag : void 0;
function Vs(e) {
  var t = Us.call(e, it), n = e[it];
  try {
    e[it] = void 0;
    var r = !0;
  } catch {
  }
  var o = ks.call(e);
  return r && (t ? e[it] = n : delete e[it]), o;
}
var Xs = Object.prototype, Gs = Xs.toString;
function Ks(e) {
  return Gs.call(e);
}
var Ys = "[object Null]", Zs = "[object Undefined]", Tr = Ee ? Ee.toStringTag : void 0;
function Le(e) {
  return e == null ? e === void 0 ? Zs : Ys : Tr && Tr in Object(e) ? Vs(e) : Ks(e);
}
function Oe(e) {
  return e != null && typeof e == "object";
}
var qs = "[object Symbol]";
function Pn(e) {
  return typeof e == "symbol" || Oe(e) && Le(e) == qs;
}
function Bo(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var ae = Array.isArray, Pr = Ee ? Ee.prototype : void 0, Mr = Pr ? Pr.toString : void 0;
function Do(e) {
  if (typeof e == "string")
    return e;
  if (ae(e))
    return Bo(e, Do) + "";
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
var Js = "[object AsyncFunction]", Qs = "[object Function]", el = "[object GeneratorFunction]", tl = "[object Proxy]";
function An(e) {
  if (!Te(e))
    return !1;
  var t = Le(e);
  return t == Qs || t == el || t == Js || t == tl;
}
var sn = pe["__core-js_shared__"], Ar = function() {
  var e = /[^.]+$/.exec(sn && sn.keys && sn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function nl(e) {
  return !!Ar && Ar in e;
}
var rl = Function.prototype, ol = rl.toString;
function Ne(e) {
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
var il = /[\\^$.*+?()[\]{}|]/g, al = /^\[object .+?Constructor\]$/, sl = Function.prototype, ll = Object.prototype, ul = sl.toString, dl = ll.hasOwnProperty, cl = RegExp(
  "^" + ul.call(dl).replace(il, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function fl(e) {
  if (!Te(e) || nl(e))
    return !1;
  var t = An(e) ? cl : al;
  return t.test(Ne(e));
}
function pl(e, t) {
  return e == null ? void 0 : e[t];
}
function je(e, t) {
  var n = pl(e, t);
  return fl(n) ? n : void 0;
}
var wn = je(pe, "WeakMap"), Rr = Object.create, hl = /* @__PURE__ */ function() {
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
function gl(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var ml = 800, bl = 16, wl = Date.now;
function yl(e) {
  var t = 0, n = 0;
  return function() {
    var r = wl(), o = bl - (r - n);
    if (n = r, o > 0) {
      if (++t >= ml)
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
var zt = function() {
  try {
    var e = je(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), _l = zt ? function(e, t) {
  return zt(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Sl(t),
    writable: !0
  });
} : Mn, xl = yl(_l), Cl = 9007199254740991, El = /^(?:0|[1-9]\d*)$/;
function Rn(e, t) {
  var n = typeof e;
  return t = t ?? Cl, !!t && (n == "number" || n != "symbol" && El.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function zn(e, t, n) {
  t == "__proto__" && zt ? zt(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function mt(e, t) {
  return e === t || e !== e && t !== t;
}
var Ol = Object.prototype, $l = Ol.hasOwnProperty;
function Tl(e, t, n) {
  var r = e[t];
  (!($l.call(e, t) && mt(r, n)) || n === void 0 && !(t in e)) && zn(e, t, n);
}
function Pl(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var i = -1, a = t.length; ++i < a; ) {
    var s = t[i], l = void 0;
    l === void 0 && (l = e[s]), o ? zn(n, s, l) : Tl(n, s, l);
  }
  return n;
}
var zr = Math.max;
function Ml(e, t, n) {
  return t = zr(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, i = zr(r.length - t, 0), a = Array(i); ++o < i; )
      a[o] = r[t + o];
    o = -1;
    for (var s = Array(t + 1); ++o < t; )
      s[o] = r[o];
    return s[t] = n(a), vl(e, this, s);
  };
}
function Al(e, t) {
  return xl(Ml(e, t, Mn), e + "");
}
var Rl = 9007199254740991;
function In(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Rl;
}
function et(e) {
  return e != null && In(e.length) && !An(e);
}
function zl(e, t, n) {
  if (!Te(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? et(n) && Rn(t, n.length) : r == "string" && t in n) ? mt(n[t], e) : !1;
}
function Il(e) {
  return Al(function(t, n) {
    var r = -1, o = n.length, i = o > 1 ? n[o - 1] : void 0, a = o > 2 ? n[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (o--, i) : void 0, a && zl(n[0], n[1], a) && (i = o < 3 ? void 0 : i, o = 1), t = Object(t); ++r < o; ) {
      var s = n[r];
      s && e(t, s, r, i);
    }
    return t;
  });
}
var Bl = Object.prototype;
function Bn(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Bl;
  return e === n;
}
function Dl(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var Fl = "[object Arguments]";
function Ir(e) {
  return Oe(e) && Le(e) == Fl;
}
var Fo = Object.prototype, Hl = Fo.hasOwnProperty, Ll = Fo.propertyIsEnumerable, It = Ir(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ir : function(e) {
  return Oe(e) && Hl.call(e, "callee") && !Ll.call(e, "callee");
};
function Nl() {
  return !1;
}
var Ho = typeof exports == "object" && exports && !exports.nodeType && exports, Br = Ho && typeof module == "object" && module && !module.nodeType && module, jl = Br && Br.exports === Ho, Dr = jl ? pe.Buffer : void 0, Wl = Dr ? Dr.isBuffer : void 0, Bt = Wl || Nl, Ul = "[object Arguments]", kl = "[object Array]", Vl = "[object Boolean]", Xl = "[object Date]", Gl = "[object Error]", Kl = "[object Function]", Yl = "[object Map]", Zl = "[object Number]", ql = "[object Object]", Jl = "[object RegExp]", Ql = "[object Set]", eu = "[object String]", tu = "[object WeakMap]", nu = "[object ArrayBuffer]", ru = "[object DataView]", ou = "[object Float32Array]", iu = "[object Float64Array]", au = "[object Int8Array]", su = "[object Int16Array]", lu = "[object Int32Array]", uu = "[object Uint8Array]", du = "[object Uint8ClampedArray]", cu = "[object Uint16Array]", fu = "[object Uint32Array]", L = {};
L[ou] = L[iu] = L[au] = L[su] = L[lu] = L[uu] = L[du] = L[cu] = L[fu] = !0;
L[Ul] = L[kl] = L[nu] = L[Vl] = L[ru] = L[Xl] = L[Gl] = L[Kl] = L[Yl] = L[Zl] = L[ql] = L[Jl] = L[Ql] = L[eu] = L[tu] = !1;
function pu(e) {
  return Oe(e) && In(e.length) && !!L[Le(e)];
}
function hu(e) {
  return function(t) {
    return e(t);
  };
}
var Lo = typeof exports == "object" && exports && !exports.nodeType && exports, ft = Lo && typeof module == "object" && module && !module.nodeType && module, vu = ft && ft.exports === Lo, ln = vu && zo.process, Fr = function() {
  try {
    var e = ft && ft.require && ft.require("util").types;
    return e || ln && ln.binding && ln.binding("util");
  } catch {
  }
}(), Hr = Fr && Fr.isTypedArray, Dn = Hr ? hu(Hr) : pu, gu = Object.prototype, mu = gu.hasOwnProperty;
function No(e, t) {
  var n = ae(e), r = !n && It(e), o = !n && !r && Bt(e), i = !n && !r && !o && Dn(e), a = n || r || o || i, s = a ? Dl(e.length, String) : [], l = s.length;
  for (var u in e)
    (t || mu.call(e, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Rn(u, l))) && s.push(u);
  return s;
}
function jo(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var bu = jo(Object.keys, Object), wu = Object.prototype, yu = wu.hasOwnProperty;
function Su(e) {
  if (!Bn(e))
    return bu(e);
  var t = [];
  for (var n in Object(e))
    yu.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Fn(e) {
  return et(e) ? No(e) : Su(e);
}
function _u(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var xu = Object.prototype, Cu = xu.hasOwnProperty;
function Eu(e) {
  if (!Te(e))
    return _u(e);
  var t = Bn(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !Cu.call(e, r)) || n.push(r);
  return n;
}
function Wo(e) {
  return et(e) ? No(e, !0) : Eu(e);
}
var Ou = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, $u = /^\w*$/;
function Hn(e, t) {
  if (ae(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Pn(e) ? !0 : $u.test(e) || !Ou.test(e) || t != null && e in Object(t);
}
var vt = je(Object, "create");
function Tu() {
  this.__data__ = vt ? vt(null) : {}, this.size = 0;
}
function Pu(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Mu = "__lodash_hash_undefined__", Au = Object.prototype, Ru = Au.hasOwnProperty;
function zu(e) {
  var t = this.__data__;
  if (vt) {
    var n = t[e];
    return n === Mu ? void 0 : n;
  }
  return Ru.call(t, e) ? t[e] : void 0;
}
var Iu = Object.prototype, Bu = Iu.hasOwnProperty;
function Du(e) {
  var t = this.__data__;
  return vt ? t[e] !== void 0 : Bu.call(t, e);
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
Fe.prototype.get = zu;
Fe.prototype.has = Du;
Fe.prototype.set = Hu;
function Lu() {
  this.__data__ = [], this.size = 0;
}
function Wt(e, t) {
  for (var n = e.length; n--; )
    if (mt(e[n][0], t))
      return n;
  return -1;
}
var Nu = Array.prototype, ju = Nu.splice;
function Wu(e) {
  var t = this.__data__, n = Wt(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : ju.call(t, n, 1), --this.size, !0;
}
function Uu(e) {
  var t = this.__data__, n = Wt(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function ku(e) {
  return Wt(this.__data__, e) > -1;
}
function Vu(e, t) {
  var n = this.__data__, r = Wt(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function me(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
me.prototype.clear = Lu;
me.prototype.delete = Wu;
me.prototype.get = Uu;
me.prototype.has = ku;
me.prototype.set = Vu;
var gt = je(pe, "Map");
function Xu() {
  this.size = 0, this.__data__ = {
    hash: new Fe(),
    map: new (gt || me)(),
    string: new Fe()
  };
}
function Gu(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ut(e, t) {
  var n = e.__data__;
  return Gu(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Ku(e) {
  var t = Ut(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Yu(e) {
  return Ut(this, e).get(e);
}
function Zu(e) {
  return Ut(this, e).has(e);
}
function qu(e, t) {
  var n = Ut(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function be(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
be.prototype.clear = Xu;
be.prototype.delete = Ku;
be.prototype.get = Yu;
be.prototype.has = Zu;
be.prototype.set = qu;
var Ju = "Expected a function";
function Ln(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Ju);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], i = n.cache;
    if (i.has(o))
      return i.get(o);
    var a = e.apply(this, r);
    return n.cache = i.set(o, a) || i, a;
  };
  return n.cache = new (Ln.Cache || be)(), n;
}
Ln.Cache = be;
var Qu = 500;
function ed(e) {
  var t = Ln(e, function(r) {
    return n.size === Qu && n.clear(), r;
  }), n = t.cache;
  return t;
}
var td = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, nd = /\\(\\)?/g, rd = ed(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(td, function(n, r, o, i) {
    t.push(o ? i.replace(nd, "$1") : r || n);
  }), t;
});
function od(e) {
  return e == null ? "" : Do(e);
}
function Uo(e, t) {
  return ae(e) ? e : Hn(e, t) ? [e] : rd(od(e));
}
function kt(e) {
  if (typeof e == "string" || Pn(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function ko(e, t) {
  t = Uo(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[kt(t[n++])];
  return n && n == r ? e : void 0;
}
function id(e, t, n) {
  var r = e == null ? void 0 : ko(e, t);
  return r === void 0 ? n : r;
}
function ad(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Vo = jo(Object.getPrototypeOf, Object), sd = "[object Object]", ld = Function.prototype, ud = Object.prototype, Xo = ld.toString, dd = ud.hasOwnProperty, cd = Xo.call(Object);
function fd(e) {
  if (!Oe(e) || Le(e) != sd)
    return !1;
  var t = Vo(e);
  if (t === null)
    return !0;
  var n = dd.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Xo.call(n) == cd;
}
function pd() {
  this.__data__ = new me(), this.size = 0;
}
function hd(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function vd(e) {
  return this.__data__.get(e);
}
function gd(e) {
  return this.__data__.has(e);
}
var md = 200;
function bd(e, t) {
  var n = this.__data__;
  if (n instanceof me) {
    var r = n.__data__;
    if (!gt || r.length < md - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new be(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function fe(e) {
  var t = this.__data__ = new me(e);
  this.size = t.size;
}
fe.prototype.clear = pd;
fe.prototype.delete = hd;
fe.prototype.get = vd;
fe.prototype.has = gd;
fe.prototype.set = bd;
var Go = typeof exports == "object" && exports && !exports.nodeType && exports, Lr = Go && typeof module == "object" && module && !module.nodeType && module, wd = Lr && Lr.exports === Go, Nr = wd ? pe.Buffer : void 0;
Nr && Nr.allocUnsafe;
function yd(e, t) {
  return e.slice();
}
function Sd(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, i = []; ++n < r; ) {
    var a = e[n];
    t(a, n, e) && (i[o++] = a);
  }
  return i;
}
function _d() {
  return [];
}
var xd = Object.prototype, Cd = xd.propertyIsEnumerable, jr = Object.getOwnPropertySymbols, Ed = jr ? function(e) {
  return e == null ? [] : (e = Object(e), Sd(jr(e), function(t) {
    return Cd.call(e, t);
  }));
} : _d;
function Od(e, t, n) {
  var r = t(e);
  return ae(e) ? r : ad(r, n(e));
}
function Wr(e) {
  return Od(e, Fn, Ed);
}
var yn = je(pe, "DataView"), Sn = je(pe, "Promise"), _n = je(pe, "Set"), Ur = "[object Map]", $d = "[object Object]", kr = "[object Promise]", Vr = "[object Set]", Xr = "[object WeakMap]", Gr = "[object DataView]", Td = Ne(yn), Pd = Ne(gt), Md = Ne(Sn), Ad = Ne(_n), Rd = Ne(wn), xe = Le;
(yn && xe(new yn(new ArrayBuffer(1))) != Gr || gt && xe(new gt()) != Ur || Sn && xe(Sn.resolve()) != kr || _n && xe(new _n()) != Vr || wn && xe(new wn()) != Xr) && (xe = function(e) {
  var t = Le(e), n = t == $d ? e.constructor : void 0, r = n ? Ne(n) : "";
  if (r)
    switch (r) {
      case Td:
        return Gr;
      case Pd:
        return Ur;
      case Md:
        return kr;
      case Ad:
        return Vr;
      case Rd:
        return Xr;
    }
  return t;
});
var Dt = pe.Uint8Array;
function zd(e) {
  var t = new e.constructor(e.byteLength);
  return new Dt(t).set(new Dt(e)), t;
}
function Id(e, t) {
  var n = zd(e.buffer);
  return new e.constructor(n, e.byteOffset, e.length);
}
function Bd(e) {
  return typeof e.constructor == "function" && !Bn(e) ? hl(Vo(e)) : {};
}
var Dd = "__lodash_hash_undefined__";
function Fd(e) {
  return this.__data__.set(e, Dd), this;
}
function Hd(e) {
  return this.__data__.has(e);
}
function Ft(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new be(); ++t < n; )
    this.add(e[t]);
}
Ft.prototype.add = Ft.prototype.push = Fd;
Ft.prototype.has = Hd;
function Ld(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Nd(e, t) {
  return e.has(t);
}
var jd = 1, Wd = 2;
function Ko(e, t, n, r, o, i) {
  var a = n & jd, s = e.length, l = t.length;
  if (s != l && !(a && l > s))
    return !1;
  var u = i.get(e), p = i.get(t);
  if (u && p)
    return u == t && p == e;
  var y = -1, h = !0, w = n & Wd ? new Ft() : void 0;
  for (i.set(e, t), i.set(t, e); ++y < s; ) {
    var d = e[y], g = t[y];
    if (r)
      var v = a ? r(g, d, y, t, e, i) : r(d, g, y, e, t, i);
    if (v !== void 0) {
      if (v)
        continue;
      h = !1;
      break;
    }
    if (w) {
      if (!Ld(t, function(c, x) {
        if (!Nd(w, x) && (d === c || o(d, c, n, r, i)))
          return w.push(x);
      })) {
        h = !1;
        break;
      }
    } else if (!(d === g || o(d, g, n, r, i))) {
      h = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), h;
}
function Ud(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function kd(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var Vd = 1, Xd = 2, Gd = "[object Boolean]", Kd = "[object Date]", Yd = "[object Error]", Zd = "[object Map]", qd = "[object Number]", Jd = "[object RegExp]", Qd = "[object Set]", ec = "[object String]", tc = "[object Symbol]", nc = "[object ArrayBuffer]", rc = "[object DataView]", Kr = Ee ? Ee.prototype : void 0, un = Kr ? Kr.valueOf : void 0;
function oc(e, t, n, r, o, i, a) {
  switch (n) {
    case rc:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case nc:
      return !(e.byteLength != t.byteLength || !i(new Dt(e), new Dt(t)));
    case Gd:
    case Kd:
    case qd:
      return mt(+e, +t);
    case Yd:
      return e.name == t.name && e.message == t.message;
    case Jd:
    case ec:
      return e == t + "";
    case Zd:
      var s = Ud;
    case Qd:
      var l = r & Vd;
      if (s || (s = kd), e.size != t.size && !l)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      r |= Xd, a.set(e, t);
      var p = Ko(s(e), s(t), r, o, i, a);
      return a.delete(e), p;
    case tc:
      if (un)
        return un.call(e) == un.call(t);
  }
  return !1;
}
var ic = 1, ac = Object.prototype, sc = ac.hasOwnProperty;
function lc(e, t, n, r, o, i) {
  var a = n & ic, s = Wr(e), l = s.length, u = Wr(t), p = u.length;
  if (l != p && !a)
    return !1;
  for (var y = l; y--; ) {
    var h = s[y];
    if (!(a ? h in t : sc.call(t, h)))
      return !1;
  }
  var w = i.get(e), d = i.get(t);
  if (w && d)
    return w == t && d == e;
  var g = !0;
  i.set(e, t), i.set(t, e);
  for (var v = a; ++y < l; ) {
    h = s[y];
    var c = e[h], x = t[h];
    if (r)
      var A = a ? r(x, c, h, t, e, i) : r(c, x, h, e, t, i);
    if (!(A === void 0 ? c === x || o(c, x, n, r, i) : A)) {
      g = !1;
      break;
    }
    v || (v = h == "constructor");
  }
  if (g && !v) {
    var z = e.constructor, D = t.constructor;
    z != D && "constructor" in e && "constructor" in t && !(typeof z == "function" && z instanceof z && typeof D == "function" && D instanceof D) && (g = !1);
  }
  return i.delete(e), i.delete(t), g;
}
var uc = 1, Yr = "[object Arguments]", Zr = "[object Array]", $t = "[object Object]", dc = Object.prototype, qr = dc.hasOwnProperty;
function cc(e, t, n, r, o, i) {
  var a = ae(e), s = ae(t), l = a ? Zr : xe(e), u = s ? Zr : xe(t);
  l = l == Yr ? $t : l, u = u == Yr ? $t : u;
  var p = l == $t, y = u == $t, h = l == u;
  if (h && Bt(e)) {
    if (!Bt(t))
      return !1;
    a = !0, p = !1;
  }
  if (h && !p)
    return i || (i = new fe()), a || Dn(e) ? Ko(e, t, n, r, o, i) : oc(e, t, l, n, r, o, i);
  if (!(n & uc)) {
    var w = p && qr.call(e, "__wrapped__"), d = y && qr.call(t, "__wrapped__");
    if (w || d) {
      var g = w ? e.value() : e, v = d ? t.value() : t;
      return i || (i = new fe()), o(g, v, n, r, i);
    }
  }
  return h ? (i || (i = new fe()), lc(e, t, n, r, o, i)) : !1;
}
function Nn(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !Oe(e) && !Oe(t) ? e !== e && t !== t : cc(e, t, n, r, Nn, o);
}
var fc = 1, pc = 2;
function hc(e, t, n, r) {
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
      if (!(y === void 0 ? Nn(u, l, fc | pc, r, p) : y))
        return !1;
    }
  }
  return !0;
}
function Yo(e) {
  return e === e && !Te(e);
}
function vc(e) {
  for (var t = Fn(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, Yo(o)];
  }
  return t;
}
function Zo(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function gc(e) {
  var t = vc(e);
  return t.length == 1 && t[0][2] ? Zo(t[0][0], t[0][1]) : function(n) {
    return n === e || hc(n, e, t);
  };
}
function mc(e, t) {
  return e != null && t in Object(e);
}
function bc(e, t, n) {
  t = Uo(t, e);
  for (var r = -1, o = t.length, i = !1; ++r < o; ) {
    var a = kt(t[r]);
    if (!(i = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return i || ++r != o ? i : (o = e == null ? 0 : e.length, !!o && In(o) && Rn(a, o) && (ae(e) || It(e)));
}
function wc(e, t) {
  return e != null && bc(e, t, mc);
}
var yc = 1, Sc = 2;
function _c(e, t) {
  return Hn(e) && Yo(t) ? Zo(kt(e), t) : function(n) {
    var r = id(n, e);
    return r === void 0 && r === t ? wc(n, e) : Nn(t, r, yc | Sc);
  };
}
function xc(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Cc(e) {
  return function(t) {
    return ko(t, e);
  };
}
function Ec(e) {
  return Hn(e) ? xc(kt(e)) : Cc(e);
}
function Oc(e) {
  return typeof e == "function" ? e : e == null ? Mn : typeof e == "object" ? ae(e) ? _c(e[0], e[1]) : gc(e) : Ec(e);
}
function $c(e) {
  return function(t, n, r) {
    for (var o = -1, i = Object(t), a = r(t), s = a.length; s--; ) {
      var l = a[++o];
      if (n(i[l], l, i) === !1)
        break;
    }
    return t;
  };
}
var qo = $c();
function Tc(e, t) {
  return e && qo(e, t, Fn);
}
function Pc(e, t) {
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
var Mc = Pc(Tc);
function xn(e, t, n) {
  (n !== void 0 && !mt(e[t], n) || n === void 0 && !(t in e)) && zn(e, t, n);
}
function Ac(e) {
  return Oe(e) && et(e);
}
function Cn(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function Rc(e) {
  return Pl(e, Wo(e));
}
function zc(e, t, n, r, o, i, a) {
  var s = Cn(e, n), l = Cn(t, n), u = a.get(l);
  if (u) {
    xn(e, n, u);
    return;
  }
  var p = i ? i(s, l, n + "", e, t, a) : void 0, y = p === void 0;
  if (y) {
    var h = ae(l), w = !h && Bt(l), d = !h && !w && Dn(l);
    p = l, h || w || d ? ae(s) ? p = s : Ac(s) ? p = gl(s) : w ? (y = !1, p = yd(l)) : d ? (y = !1, p = Id(l)) : p = [] : fd(l) || It(l) ? (p = s, It(s) ? p = Rc(s) : (!Te(s) || An(s)) && (p = Bd(l))) : y = !1;
  }
  y && (a.set(l, p), o(p, l, r, i, a), a.delete(l)), xn(e, n, p);
}
function Jo(e, t, n, r, o) {
  e !== t && qo(t, function(i, a) {
    if (o || (o = new fe()), Te(i))
      zc(e, t, a, n, Jo, r, o);
    else {
      var s = r ? r(Cn(e, a), i, a + "", e, t, o) : void 0;
      s === void 0 && (s = i), xn(e, a, s);
    }
  }, Wo);
}
function Ic(e, t) {
  var n = -1, r = et(e) ? Array(e.length) : [];
  return Mc(e, function(o, i, a) {
    r[++n] = t(o, i, a);
  }), r;
}
function Bc(e, t) {
  var n = ae(e) ? Bo : Ic;
  return n(e, Oc(t));
}
var Tt = Il(function(e, t, n) {
  Jo(e, t, n);
});
const En = "naive-ui-style";
function Dc(e, t, n) {
  if (!t) return;
  const r = Lt(), o = I(() => {
    const {
      value: s
    } = t;
    if (!s)
      return;
    const l = s[e];
    if (l)
      return l;
  }), i = re(jt, null), a = () => {
    Ye(() => {
      const {
        value: s
      } = n, l = `${s}${e}Rtl`;
      if (Ga(l, r)) return;
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
const jn = {
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
  fontSize: Fc,
  fontFamily: Hc,
  lineHeight: Lc
} = jn, Nc = N("body", `
 margin: 0;
 font-size: ${Fc};
 font-family: ${Hc};
 line-height: ${Lc};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [N("input", `
 font-family: inherit;
 font-size: inherit;
 `)]);
function tt(e, t, n, r, o, i) {
  const a = Lt(), s = re(jt, null);
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
      }), s != null && s.preflightStyleDisabled || Nc.mount({
        id: "n-global",
        head: !0,
        anchorMetaName: En,
        ssr: a,
        parent: s == null ? void 0 : s.styleMountTarget
      });
    };
    a ? u() : no(u);
  }
  return I(() => {
    var u;
    const {
      theme: {
        common: p,
        self: y,
        peers: h = {}
      } = {},
      themeOverrides: w = {},
      builtinThemeOverrides: d = {}
    } = o, {
      common: g,
      peers: v
    } = w, {
      common: c = void 0,
      [e]: {
        common: x = void 0,
        self: A = void 0,
        peers: z = {}
      } = {}
    } = (s == null ? void 0 : s.mergedThemeRef.value) || {}, {
      common: D = void 0,
      [e]: B = {}
    } = (s == null ? void 0 : s.mergedThemeOverridesRef.value) || {}, {
      common: f,
      peers: b = {}
    } = B, C = Tt({}, p || x || c || r.common, D, f, g), _ = Tt(
      // {}, executed every time, no need for empty obj
      (u = y || A || r.self) === null || u === void 0 ? void 0 : u(C),
      d,
      B,
      w
    );
    return {
      common: C,
      self: _,
      peers: Tt({}, r.peers, z, h),
      peerOverrides: Tt({}, d.peers, b, v)
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
}, jc = Ze(O.neutralBase), Qo = Ze(O.neutralInvertBase), Wc = `rgba(${Qo.slice(0, 3).join(", ")}, `;
function Jr(e) {
  return `${Wc + String(e)})`;
}
function Z(e) {
  const t = Array.from(Qo);
  return t[3] = Number(e), ya(jc, t);
}
const ei = Object.assign(Object.assign({
  name: "common"
}, jn), {
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
  textColorDisabled: Z(O.alpha4),
  placeholderColor: Z(O.alpha4),
  placeholderColorDisabled: Z(O.alpha5),
  iconColor: Z(O.alpha4),
  iconColorHover: wt(Z(O.alpha4), {
    lightness: 0.75
  }),
  iconColorPressed: wt(Z(O.alpha4), {
    lightness: 0.9
  }),
  iconColorDisabled: Z(O.alpha5),
  opacity1: O.alpha1,
  opacity2: O.alpha2,
  opacity3: O.alpha3,
  opacity4: O.alpha4,
  opacity5: O.alpha5,
  dividerColor: "rgb(239, 239, 245)",
  borderColor: "rgb(224, 224, 230)",
  // close
  closeIconColor: Z(Number(O.alphaClose)),
  closeIconColorHover: Z(Number(O.alphaClose)),
  closeIconColorPressed: Z(Number(O.alphaClose)),
  closeColorHover: "rgba(0, 0, 0, .09)",
  closeColorPressed: "rgba(0, 0, 0, .13)",
  // clear
  clearColor: Z(O.alpha4),
  clearColorHover: wt(Z(O.alpha4), {
    lightness: 0.75
  }),
  clearColorPressed: wt(Z(O.alpha4), {
    lightness: 0.9
  }),
  scrollbarColor: Jr(O.alphaScrollbar),
  scrollbarColorHover: Jr(O.alphaScrollbarHover),
  scrollbarWidth: "5px",
  scrollbarHeight: "5px",
  scrollbarBorderRadius: "5px",
  progressRailColor: Z(O.alphaProgressRail),
  railColor: "rgb(219, 219, 223)",
  popoverColor: O.neutralPopover,
  tableColor: O.neutralCard,
  cardColor: O.neutralCard,
  modalColor: O.neutralModal,
  bodyColor: O.neutralBody,
  tagColor: "#eee",
  avatarColor: Z(O.alphaAvatar),
  invertedColor: "rgb(0, 20, 40)",
  inputColor: Z(O.alphaInput),
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
}), Uc = {
  railInsetHorizontalBottom: "auto 2px 4px 2px",
  railInsetHorizontalTop: "4px 2px auto 2px",
  railInsetVerticalRight: "2px 4px 2px auto",
  railInsetVerticalLeft: "2px auto 2px 4px",
  railColor: "transparent"
};
function kc(e) {
  const {
    scrollbarColor: t,
    scrollbarColorHover: n,
    scrollbarHeight: r,
    scrollbarWidth: o,
    scrollbarBorderRadius: i
  } = e;
  return Object.assign(Object.assign({}, Uc), {
    height: r,
    width: o,
    borderRadius: i,
    color: t,
    colorHover: n
  });
}
const Vc = {
  name: "Scrollbar",
  common: ei,
  self: kc
}, {
  cubicBezierEaseInOut: Qr
} = jn;
function Xc({
  name: e = "fade-in",
  enterDuration: t = "0.2s",
  leaveDuration: n = "0.2s",
  enterCubicBezier: r = Qr,
  leaveCubicBezier: o = Qr
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
const Gc = ne("scrollbar", `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [N(">", [ne("scrollbar-container", `
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
  ne("scrollbar-content", `
 box-sizing: border-box;
 min-width: 100%;
 `)
])])]), N(">, +", [ne("scrollbar-rail", `
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `, [le("horizontal", `
 height: var(--n-scrollbar-height);
 `, [N(">", [Ie("scrollbar", `
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
 `, [N(">", [Ie("scrollbar", `
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
 `), le("disabled", [N(">", [Ie("scrollbar", "pointer-events: none;")])]), N(">", [Ie("scrollbar", `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [Xc(), N("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), Kc = Object.assign(Object.assign({}, tt.props), {
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
}), Yc = ue({
  name: "Scrollbar",
  props: Kc,
  inheritAttrs: !1,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: n,
      mergedRtlRef: r
    } = Ao(e), o = Dc("Scrollbar", r, t), i = M(null), a = M(null), s = M(null), l = M(null), u = M(null), p = M(null), y = M(null), h = M(null), w = M(null), d = M(null), g = M(null), v = M(0), c = M(0), x = M(!1), A = M(!1);
    let z = !1, D = !1, B, f, b = 0, C = 0, _ = 0, R = 0;
    const F = ua(), j = tt("Scrollbar", "-scrollbar", Gc, Vc, e, t), W = I(() => {
      const {
        value: m
      } = h, {
        value: E
      } = p, {
        value: $
      } = d;
      return m === null || E === null || $ === null ? 0 : Math.min(m, $ * m / E + Qn(j.value.self.width) * 1.5);
    }), S = I(() => `${W.value}px`), P = I(() => {
      const {
        value: m
      } = w, {
        value: E
      } = y, {
        value: $
      } = g;
      return m === null || E === null || $ === null ? 0 : $ * m / E + Qn(j.value.self.height) * 1.5;
    }), U = I(() => `${P.value}px`), K = I(() => {
      const {
        value: m
      } = h, {
        value: E
      } = v, {
        value: $
      } = p, {
        value: H
      } = d;
      if (m === null || $ === null || H === null)
        return 0;
      {
        const V = $ - m;
        return V ? E / V * (H - W.value) : 0;
      }
    }), J = I(() => `${K.value}px`), Y = I(() => {
      const {
        value: m
      } = w, {
        value: E
      } = c, {
        value: $
      } = y, {
        value: H
      } = g;
      if (m === null || $ === null || H === null)
        return 0;
      {
        const V = $ - m;
        return V ? E / V * (H - P.value) : 0;
      }
    }), de = I(() => `${Y.value}px`), bt = I(() => {
      const {
        value: m
      } = h, {
        value: E
      } = p;
      return m !== null && E !== null && E > m;
    }), Wn = I(() => {
      const {
        value: m
      } = w, {
        value: E
      } = y;
      return m !== null && E !== null && E > m;
    }), ni = I(() => {
      const {
        trigger: m
      } = e;
      return m === "none" || x.value;
    }), ri = I(() => {
      const {
        trigger: m
      } = e;
      return m === "none" || A.value;
    }), Pe = I(() => {
      const {
        container: m
      } = e;
      return m ? m() : a.value;
    }), oi = I(() => {
      const {
        content: m
      } = e;
      return m ? m() : s.value;
    }), Un = (m, E) => {
      if (!e.scrollable) return;
      if (typeof m == "number") {
        We(m, E ?? 0, 0, !1, "auto");
        return;
      }
      const {
        left: $,
        top: H,
        index: V,
        elSize: ee,
        position: se,
        behavior: k,
        el: oe,
        debounce: we = !0
      } = m;
      ($ !== void 0 || H !== void 0) && We($ ?? 0, H ?? 0, 0, !1, k), oe !== void 0 ? We(0, oe.offsetTop, oe.offsetHeight, we, k) : V !== void 0 && ee !== void 0 ? We(0, V * ee, ee, we, k) : se === "bottom" ? We(0, Number.MAX_SAFE_INTEGER, 0, !1, k) : se === "top" && We(0, 0, 0, !1, k);
    }, kn = Ps(() => {
      e.container || Un({
        top: v.value,
        left: c.value
      });
    }), ii = () => {
      kn.isDeactivated || Me();
    }, ai = (m) => {
      if (kn.isDeactivated) return;
      const {
        onResize: E
      } = e;
      E && E(m), Me();
    }, si = (m, E) => {
      if (!e.scrollable) return;
      const {
        value: $
      } = Pe;
      $ && (typeof m == "object" ? $.scrollBy(m) : $.scrollBy(m, E || 0));
    };
    function We(m, E, $, H, V) {
      const {
        value: ee
      } = Pe;
      if (ee) {
        if (H) {
          const {
            scrollTop: se,
            offsetHeight: k
          } = ee;
          if (E > se) {
            E + $ <= se + k || ee.scrollTo({
              left: m,
              top: E + $ - k,
              behavior: V
            });
            return;
          }
        }
        ee.scrollTo({
          left: m,
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
      di(), ci();
    }
    function di() {
      f !== void 0 && window.clearTimeout(f), f = window.setTimeout(() => {
        A.value = !1;
      }, e.duration);
    }
    function ci() {
      B !== void 0 && window.clearTimeout(B), B = window.setTimeout(() => {
        x.value = !1;
      }, e.duration);
    }
    function fi() {
      B !== void 0 && window.clearTimeout(B), x.value = !0;
    }
    function pi() {
      f !== void 0 && window.clearTimeout(f), A.value = !0;
    }
    function hi(m) {
      const {
        onScroll: E
      } = e;
      E && E(m), Vn();
    }
    function Vn() {
      const {
        value: m
      } = Pe;
      m && (v.value = m.scrollTop, c.value = m.scrollLeft * (o != null && o.value ? -1 : 1));
    }
    function vi() {
      const {
        value: m
      } = oi;
      m && (p.value = m.offsetHeight, y.value = m.offsetWidth);
      const {
        value: E
      } = Pe;
      E && (h.value = E.offsetHeight, w.value = E.offsetWidth);
      const {
        value: $
      } = u, {
        value: H
      } = l;
      $ && (g.value = $.offsetWidth), H && (d.value = H.offsetHeight);
    }
    function Xn() {
      const {
        value: m
      } = Pe;
      m && (v.value = m.scrollTop, c.value = m.scrollLeft * (o != null && o.value ? -1 : 1), h.value = m.offsetHeight, w.value = m.offsetWidth, p.value = m.scrollHeight, y.value = m.scrollWidth);
      const {
        value: E
      } = u, {
        value: $
      } = l;
      E && (g.value = E.offsetWidth), $ && (d.value = $.offsetHeight);
    }
    function Me() {
      e.scrollable && (e.useUnifiedContainer ? Xn() : (vi(), Vn()));
    }
    function Gn(m) {
      var E;
      return !(!((E = i.value) === null || E === void 0) && E.contains(Rt(m)));
    }
    function gi(m) {
      m.preventDefault(), m.stopPropagation(), D = !0, Q("mousemove", window, Kn, !0), Q("mouseup", window, Yn, !0), C = c.value, _ = o != null && o.value ? window.innerWidth - m.clientX : m.clientX;
    }
    function Kn(m) {
      if (!D) return;
      B !== void 0 && window.clearTimeout(B), f !== void 0 && window.clearTimeout(f);
      const {
        value: E
      } = w, {
        value: $
      } = y, {
        value: H
      } = P;
      if (E === null || $ === null) return;
      const ee = (o != null && o.value ? window.innerWidth - m.clientX - _ : m.clientX - _) * ($ - E) / (E - H), se = $ - E;
      let k = C + ee;
      k = Math.min(se, k), k = Math.max(k, 0);
      const {
        value: oe
      } = Pe;
      if (oe) {
        oe.scrollLeft = k * (o != null && o.value ? -1 : 1);
        const {
          internalOnUpdateScrollLeft: we
        } = e;
        we && we(k);
      }
    }
    function Yn(m) {
      m.preventDefault(), m.stopPropagation(), G("mousemove", window, Kn, !0), G("mouseup", window, Yn, !0), D = !1, Me(), Gn(m) && Vt();
    }
    function mi(m) {
      m.preventDefault(), m.stopPropagation(), z = !0, Q("mousemove", window, Xt, !0), Q("mouseup", window, Gt, !0), b = v.value, R = m.clientY;
    }
    function Xt(m) {
      if (!z) return;
      B !== void 0 && window.clearTimeout(B), f !== void 0 && window.clearTimeout(f);
      const {
        value: E
      } = h, {
        value: $
      } = p, {
        value: H
      } = W;
      if (E === null || $ === null) return;
      const ee = (m.clientY - R) * ($ - E) / (E - H), se = $ - E;
      let k = b + ee;
      k = Math.min(se, k), k = Math.max(k, 0);
      const {
        value: oe
      } = Pe;
      oe && (oe.scrollTop = k);
    }
    function Gt(m) {
      m.preventDefault(), m.stopPropagation(), G("mousemove", window, Xt, !0), G("mouseup", window, Gt, !0), z = !1, Me(), Gn(m) && Vt();
    }
    Ye(() => {
      const {
        value: m
      } = Wn, {
        value: E
      } = bt, {
        value: $
      } = t, {
        value: H
      } = u, {
        value: V
      } = l;
      H && (m ? H.classList.remove(`${$}-scrollbar-rail--disabled`) : H.classList.add(`${$}-scrollbar-rail--disabled`)), V && (E ? V.classList.remove(`${$}-scrollbar-rail--disabled`) : V.classList.add(`${$}-scrollbar-rail--disabled`));
    }), He(() => {
      e.container || Me();
    }), $e(() => {
      B !== void 0 && window.clearTimeout(B), f !== void 0 && window.clearTimeout(f), G("mousemove", window, Xt, !0), G("mouseup", window, Gt, !0);
    });
    const Zn = I(() => {
      const {
        common: {
          cubicBezierEaseInOut: m
        },
        self: {
          color: E,
          colorHover: $,
          height: H,
          width: V,
          borderRadius: ee,
          railInsetHorizontalTop: se,
          railInsetHorizontalBottom: k,
          railInsetVerticalRight: oe,
          railInsetVerticalLeft: we,
          railColor: bi
        }
      } = j.value, {
        top: wi,
        right: yi,
        bottom: Si,
        left: _i
      } = at(se), {
        top: xi,
        right: Ci,
        bottom: Ei,
        left: Oi
      } = at(k), {
        top: $i,
        right: Ti,
        bottom: Pi,
        left: Mi
      } = at(o != null && o.value ? _r(oe) : oe), {
        top: Ai,
        right: Ri,
        bottom: zi,
        left: Ii
      } = at(o != null && o.value ? _r(we) : we);
      return {
        "--n-scrollbar-bezier": m,
        "--n-scrollbar-color": E,
        "--n-scrollbar-color-hover": $,
        "--n-scrollbar-border-radius": ee,
        "--n-scrollbar-width": V,
        "--n-scrollbar-height": H,
        "--n-scrollbar-rail-top-horizontal-top": wi,
        "--n-scrollbar-rail-right-horizontal-top": yi,
        "--n-scrollbar-rail-bottom-horizontal-top": Si,
        "--n-scrollbar-rail-left-horizontal-top": _i,
        "--n-scrollbar-rail-top-horizontal-bottom": xi,
        "--n-scrollbar-rail-right-horizontal-bottom": Ci,
        "--n-scrollbar-rail-bottom-horizontal-bottom": Ei,
        "--n-scrollbar-rail-left-horizontal-bottom": Oi,
        "--n-scrollbar-rail-top-vertical-right": $i,
        "--n-scrollbar-rail-right-vertical-right": Ti,
        "--n-scrollbar-rail-bottom-vertical-right": Pi,
        "--n-scrollbar-rail-left-vertical-right": Mi,
        "--n-scrollbar-rail-top-vertical-left": Ai,
        "--n-scrollbar-rail-right-vertical-left": Ri,
        "--n-scrollbar-rail-bottom-vertical-left": zi,
        "--n-scrollbar-rail-left-vertical-left": Ii,
        "--n-scrollbar-rail-color": bi
      };
    }), Ue = n ? Ro("scrollbar", void 0, Zn, e) : void 0;
    return Object.assign(Object.assign({}, {
      scrollTo: Un,
      scrollBy: si,
      sync: Me,
      syncUnifiedContainer: Xn,
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
      needXBar: Wn,
      yBarSizePx: S,
      xBarSizePx: U,
      yBarTopPx: J,
      xBarLeftPx: de,
      isShowXBar: ni,
      isShowYBar: ri,
      isIos: F,
      handleScroll: hi,
      handleContentResize: ii,
      handleContainerResize: ai,
      handleYScrollMouseDown: mi,
      handleXScrollMouseDown: gi,
      cssVars: n ? void 0 : Zn,
      themeClass: Ue == null ? void 0 : Ue.themeClass,
      onRender: Ue == null ? void 0 : Ue.onRender
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
    const u = this.trigger === "none", p = (w, d) => T("div", {
      ref: "yRailRef",
      class: [`${n}-scrollbar-rail`, `${n}-scrollbar-rail--vertical`, `${n}-scrollbar-rail--vertical--${a}`, w],
      "data-scrollbar-rail": !0,
      style: [d || "", this.verticalRailStyle],
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
      var w, d;
      return (w = this.onRender) === null || w === void 0 || w.call(this), T("div", ro(this.$attrs, {
        role: "none",
        ref: "wrapperRef",
        class: [`${n}-scrollbar`, this.themeClass, o && `${n}-scrollbar--rtl`],
        style: this.cssVars,
        onMouseenter: r ? void 0 : this.handleMouseEnterWrapper,
        onMouseleave: r ? void 0 : this.handleMouseLeaveWrapper
      }), [this.container ? (d = t.default) === null || d === void 0 ? void 0 : d.call(t) : T("div", {
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
    return i ? T(ge, null, h, p(this.themeClass, this.cssVars)) : h;
  }
}), Zc = Yc, qc = {
  space: "6px",
  spaceArrow: "10px",
  arrowOffset: "10px",
  arrowOffsetVertical: "10px",
  arrowHeight: "6px",
  padding: "8px 14px"
};
function Jc(e) {
  const {
    boxShadow2: t,
    popoverColor: n,
    textColor2: r,
    borderRadius: o,
    fontSize: i,
    dividerColor: a
  } = e;
  return Object.assign(Object.assign({}, qc), {
    fontSize: i,
    borderRadius: o,
    color: n,
    dividerColor: a,
    textColor: r,
    boxShadow: t
  });
}
const Qc = {
  name: "Popover",
  common: ei,
  self: Jc
}, dn = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, X = "var(--n-arrow-height) * 1.414", ef = N([ne("popover", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `, [N(">", [ne("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), rn("raw", `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [rn("scrollable", [rn("show-header-or-footer", "padding: var(--n-padding);")])]), Ie("header", `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), Ie("footer", `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), le("scrollable, show-header-or-footer", [Ie("content", `
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
]), ie("top-start", `
 top: calc(${X} / -2);
 left: calc(${he("top-start")} - var(--v-offset-left));
 `), ie("top", `
 top: calc(${X} / -2);
 transform: translateX(calc(${X} / -2)) rotate(45deg);
 left: 50%;
 `), ie("top-end", `
 top: calc(${X} / -2);
 right: calc(${he("top-end")} + var(--v-offset-left));
 `), ie("bottom-start", `
 bottom: calc(${X} / -2);
 left: calc(${he("bottom-start")} - var(--v-offset-left));
 `), ie("bottom", `
 bottom: calc(${X} / -2);
 transform: translateX(calc(${X} / -2)) rotate(45deg);
 left: 50%;
 `), ie("bottom-end", `
 bottom: calc(${X} / -2);
 right: calc(${he("bottom-end")} + var(--v-offset-left));
 `), ie("left-start", `
 left: calc(${X} / -2);
 top: calc(${he("left-start")} - var(--v-offset-top));
 `), ie("left", `
 left: calc(${X} / -2);
 transform: translateY(calc(${X} / -2)) rotate(45deg);
 top: 50%;
 `), ie("left-end", `
 left: calc(${X} / -2);
 bottom: calc(${he("left-end")} + var(--v-offset-top));
 `), ie("right-start", `
 right: calc(${X} / -2);
 top: calc(${he("right-start")} - var(--v-offset-top));
 `), ie("right", `
 right: calc(${X} / -2);
 transform: translateY(calc(${X} / -2)) rotate(45deg);
 top: 50%;
 `), ie("right-end", `
 right: calc(${X} / -2);
 bottom: calc(${he("right-end")} + var(--v-offset-top));
 `), ...Bc({
  top: ["right-start", "left-start"],
  right: ["top-end", "bottom-end"],
  bottom: ["right-end", "left-end"],
  left: ["top-start", "bottom-start"]
}, (e, t) => {
  const n = ["right", "left"].includes(t), r = n ? "width" : "height";
  return e.map((o) => {
    const i = o.split("-")[1] === "end", s = `calc((${`var(--v-target-${r}, 0px)`} - ${X}) / 2)`, l = he(o);
    return N(`[v-placement="${o}"] >`, [ne("popover-shared", [le("center-arrow", [ne("popover-arrow", `${t}: calc(max(${s}, ${l}) ${i ? "+" : "-"} var(--v-offset-${n ? "left" : "top"}));`)])])]);
  });
})]);
function he(e) {
  return ["top", "bottom"].includes(e.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)";
}
function ie(e, t) {
  const n = e.split("-")[0], r = ["top", "bottom"].includes(n) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
  return N(`[v-placement="${e}"] >`, [ne("popover-shared", `
 margin-${dn[n]}: var(--n-space);
 `, [le("show-arrow", `
 margin-${dn[n]}: var(--n-space-arrow);
 `), le("overlap", `
 margin: 0;
 `), Ds("popover-arrow-wrapper", `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${dn[n]}: auto;
 ${r}
 `, [ne("popover-arrow", t)])])]);
}
const ti = Object.assign(Object.assign({}, tt.props), {
  to: qe.propTo,
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
    } = Ao(e), a = tt("Popover", "-popover", ef, Qc, e, o), s = M(null), l = re("NPopover"), u = M(null), p = M(e.show), y = M(!1);
    Ye(() => {
      const {
        show: f
      } = e;
      f && !Fs() && !e.internalDeactivateImmediately && (y.value = !0);
    });
    const h = I(() => {
      const {
        trigger: f,
        onClickoutside: b
      } = e, C = [], {
        positionManuallyRef: {
          value: _
        }
      } = l;
      return _ || (f === "click" && !b && C.push([Jn, z, void 0, {
        capture: !0
      }]), f === "hover" && C.push([Qi, A])), b && C.push([Jn, z, void 0, {
        capture: !0
      }]), (e.displayDirective === "show" || e.animated && y.value) && C.push([Wi, e.show]), C;
    }), w = I(() => {
      const {
        common: {
          cubicBezierEaseInOut: f,
          cubicBezierEaseIn: b,
          cubicBezierEaseOut: C
        },
        self: {
          space: _,
          spaceArrow: R,
          padding: F,
          fontSize: j,
          textColor: W,
          dividerColor: S,
          color: P,
          boxShadow: U,
          borderRadius: K,
          arrowHeight: J,
          arrowOffset: Y,
          arrowOffsetVertical: de
        }
      } = a.value;
      return {
        "--n-box-shadow": U,
        "--n-bezier": f,
        "--n-bezier-ease-in": b,
        "--n-bezier-ease-out": C,
        "--n-font-size": j,
        "--n-text-color": W,
        "--n-color": P,
        "--n-divider-color": S,
        "--n-border-radius": K,
        "--n-arrow-height": J,
        "--n-arrow-offset": Y,
        "--n-arrow-offset-vertical": de,
        "--n-padding": F,
        "--n-space": _,
        "--n-space-arrow": R
      };
    }), d = I(() => {
      const f = e.width === "trigger" ? void 0 : nn(e.width), b = [];
      f && b.push({
        width: f
      });
      const {
        maxWidth: C,
        minWidth: _
      } = e;
      return C && b.push({
        maxWidth: nn(C)
      }), _ && b.push({
        maxWidth: nn(_)
      }), i || b.push(w.value), b;
    }), g = i ? Ro("popover", void 0, w, e) : void 0;
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
    function c(f) {
      e.trigger === "hover" && e.keepAliveOnHover && e.show && l.handleMouseEnter(f);
    }
    function x(f) {
      e.trigger === "hover" && e.keepAliveOnHover && l.handleMouseLeave(f);
    }
    function A(f) {
      e.trigger === "hover" && !D().contains(Rt(f)) && l.handleMouseMoveOutside(f);
    }
    function z(f) {
      (e.trigger === "click" && !D().contains(Rt(f)) || e.onClickoutside) && l.handleClickOutside(f);
    }
    function D() {
      return l.getTriggerElement();
    }
    lt($o, u), lt(Eo, null), lt(Oo, null);
    function B() {
      if (g == null || g.onRender(), !(e.displayDirective === "show" || e.show || e.animated && y.value))
        return null;
      let b;
      const C = l.internalRenderBodyRef.value, {
        value: _
      } = o;
      if (C)
        b = C(
          // The popover class and overlap class must exists, they will be used
          // to place the body & transition animation.
          // Shadow class exists for reuse box-shadow.
          [`${_}-popover-shared`, g == null ? void 0 : g.themeClass.value, e.overlap && `${_}-popover-shared--overlap`, e.showArrow && `${_}-popover-shared--show-arrow`, e.arrowPointToCenter && `${_}-popover-shared--center-arrow`],
          u,
          d.value,
          c,
          x
        );
      else {
        const {
          value: R
        } = l.extraClassRef, {
          internalTrapFocus: F
        } = e, j = !Or(t.header) || !Or(t.footer), W = () => {
          var S, P;
          const U = j ? T(ge, null, an(t.header, (Y) => Y ? T("div", {
            class: [`${_}-popover__header`, e.headerClass],
            style: e.headerStyle
          }, Y) : null), an(t.default, (Y) => Y ? T("div", {
            class: [`${_}-popover__content`, e.contentClass],
            style: e.contentStyle
          }, t) : null), an(t.footer, (Y) => Y ? T("div", {
            class: [`${_}-popover__footer`, e.footerClass],
            style: e.footerStyle
          }, Y) : null)) : e.scrollable ? (S = t.default) === null || S === void 0 ? void 0 : S.call(t) : T("div", {
            class: [`${_}-popover__content`, e.contentClass],
            style: e.contentStyle
          }, t), K = e.scrollable ? T(Zc, {
            contentClass: j ? void 0 : `${_}-popover__content ${(P = e.contentClass) !== null && P !== void 0 ? P : ""}`,
            contentStyle: j ? void 0 : e.contentStyle
          }, {
            default: () => U
          }) : U, J = e.showArrow ? tf({
            arrowClass: e.arrowClass,
            arrowStyle: e.arrowStyle,
            arrowWrapperClass: e.arrowWrapperClass,
            arrowWrapperStyle: e.arrowWrapperStyle,
            clsPrefix: _
          }) : null;
          return [K, J];
        };
        b = T("div", ro({
          class: [`${_}-popover`, `${_}-popover-shared`, g == null ? void 0 : g.themeClass.value, R.map((S) => `${_}-${S}`), {
            [`${_}-popover--scrollable`]: e.scrollable,
            [`${_}-popover--show-header-or-footer`]: j,
            [`${_}-popover--raw`]: e.raw,
            [`${_}-popover-shared--overlap`]: e.overlap,
            [`${_}-popover-shared--show-arrow`]: e.showArrow,
            [`${_}-popover-shared--center-arrow`]: e.arrowPointToCenter
          }],
          ref: u,
          style: d.value,
          onKeydown: l.handleKeydown,
          onMouseenter: c,
          onMouseleave: x
        }, n), F ? T($s, {
          active: e.show,
          autoFocus: !0
        }, {
          default: W
        }) : W());
      }
      return Ht(b, h.value);
    }
    return {
      displayed: y,
      namespace: r,
      isMounted: l.isMountedRef,
      zIndex: l.zIndexRef,
      followerRef: s,
      adjustedTo: qe(e),
      followerEnabled: p,
      renderContentNode: B
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
      teleportDisabled: this.adjustedTo === qe.tdkey
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
var rf = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_21460_PJDHIKOZPECWZFUP", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.96.4", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-32603f9735-sock", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
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
  to: qe.propTo,
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
}), df = ue({
  name: "Popover",
  inheritAttrs: !1,
  props: uf,
  slots: Object,
  __popover__: !0,
  setup(e) {
    rf.NODE_ENV !== "production" && Ye(() => {
      e.maxWidth !== void 0 && ot("popover", "`max-width` is deprecated, please use `style` instead."), e.minWidth !== void 0 && ot("popover", "`min-width` is deprecated, please use `style` instead."), e.arrow !== void 0 && ot("popover", "`arrow` is deprecated, please use `showArrow` instead."), e.onHide !== void 0 && ot("popover", "`on-hide` is deprecated, please use `on-update:show` instead."), e.onShow !== void 0 && ot("popover", "`on-show` is deprecated, please use `on-update:show` instead.");
    });
    const t = ao(), n = M(null), r = I(() => e.show), o = M(e.defaultShow), i = aa(r, o), a = pt(() => e.disabled ? !1 : i.value), s = () => {
      if (e.disabled) return !0;
      const {
        getDisabled: S
      } = e;
      return !!(S != null && S());
    }, l = () => s() ? !1 : i.value, u = sa(e, ["arrow", "showArrow"]), p = I(() => e.overlap ? !1 : u.value);
    let y = null;
    const h = M(null), w = M(null), d = pt(() => e.x !== void 0 && e.y !== void 0);
    function g(S) {
      const {
        "onUpdate:show": P,
        onUpdateShow: U,
        onShow: K,
        onHide: J
      } = e;
      o.value = S, P && st(P, S), U && st(U, S), S && K && st(K, !0), S && J && st(J, !1);
    }
    function v() {
      y && y.syncPosition();
    }
    function c() {
      const {
        value: S
      } = h;
      S && (window.clearTimeout(S), h.value = null);
    }
    function x() {
      const {
        value: S
      } = w;
      S && (window.clearTimeout(S), w.value = null);
    }
    function A() {
      const S = s();
      if (e.trigger === "focus" && !S) {
        if (l()) return;
        g(!0);
      }
    }
    function z() {
      const S = s();
      if (e.trigger === "focus" && !S) {
        if (!l()) return;
        g(!1);
      }
    }
    function D() {
      const S = s();
      if (e.trigger === "hover" && !S) {
        if (x(), h.value !== null || l()) return;
        const P = () => {
          g(!0), h.value = null;
        }, {
          delay: U
        } = e;
        U === 0 ? P() : h.value = window.setTimeout(P, U);
      }
    }
    function B() {
      const S = s();
      if (e.trigger === "hover" && !S) {
        if (c(), w.value !== null || !l()) return;
        const P = () => {
          g(!1), w.value = null;
        }, {
          duration: U
        } = e;
        U === 0 ? P() : w.value = window.setTimeout(P, U);
      }
    }
    function f() {
      B();
    }
    function b(S) {
      var P;
      l() && (e.trigger === "click" && (c(), x(), g(!1)), (P = e.onClickoutside) === null || P === void 0 || P.call(e, S));
    }
    function C() {
      if (e.trigger === "click" && !s()) {
        c(), x();
        const S = !l();
        g(S);
      }
    }
    function _(S) {
      e.internalTrapFocus && S.key === "Escape" && (c(), x(), g(!1));
    }
    function R(S) {
      o.value = S;
    }
    function F() {
      var S;
      return (S = n.value) === null || S === void 0 ? void 0 : S.targetRef;
    }
    function j(S) {
      y = S;
    }
    return lt("NPopover", {
      getTriggerElement: F,
      handleKeydown: _,
      handleMouseEnter: D,
      handleMouseLeave: B,
      handleClickOutside: b,
      handleMouseMoveOutside: f,
      setBodyInstance: j,
      positionManuallyRef: d,
      isMountedRef: t,
      zIndexRef: Ce(e, "zIndex"),
      extraClassRef: Ce(e, "internalExtraClass"),
      internalRenderBodyRef: Ce(e, "internalRenderBody")
    }), Ye(() => {
      i.value && s() && g(!1);
    }), {
      binderInstRef: n,
      positionManually: d,
      mergedShowConsideringDisabledProp: a,
      // if to show popover body
      uncontrolledShow: o,
      mergedShowArrow: p,
      getMergedShow: l,
      setShow: R,
      handleClick: C,
      handleMouseEnter: D,
      handleMouseLeave: B,
      handleFocus: A,
      handleBlur: z,
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
    if (!t && (r = Ls(n, "trigger"), r)) {
      r = Ui(r), r = r.type === ki ? T("span", [r]) : r;
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
        }), T(nf, Ns(this.$props, of, Object.assign(Object.assign({}, this.$attrs), {
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
}), cf = { class: "lcc-header" }, ff = { class: "lcc-header__wrapper" }, pf = { class: "lcc-header__wrapper__navs" }, hf = ["onClick"], vf = {
  key: 0,
  class: "lcc-header__wrapper__navs__drop"
}, gf = { class: "lcc-header__wrapper__navs__drop__group__label" }, mf = { class: "lcc-header__wrapper__navs__drop__group__item__group" }, bf = /* @__PURE__ */ ue({
  __name: "Header",
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
    ], r = I(() => e.navDatas ?? n), o = t;
    function i(a) {
      o("jump", a);
    }
    return (a, s) => (ye(), Se("div", cf, [
      nt("div", ff, [
        nt("div", pf, [
          (ye(!0), Se(
            ge,
            null,
            Kt(r.value, (l, u) => (ye(), Se("div", {
              class: "lcc-header__wrapper__navs__item",
              key: u
            }, [
              Vi(
                Xi(df),
                {
                  trigger: "hover",
                  "arrow-class": "header-arrow-class",
                  class: "header-popover-class"
                },
                {
                  trigger: qn(() => [
                    nt("a", {
                      class: "lcc-header__wrapper__navs__item__link",
                      onClick: (p) => i(l)
                    }, Yt(l.title), 9, hf)
                  ]),
                  default: qn(() => [
                    l.list ? (ye(), Se("div", vf, [
                      (ye(!0), Se(
                        ge,
                        null,
                        Kt(l.list, (p, y) => (ye(), Se("div", {
                          class: "lcc-header__wrapper__navs__drop__group",
                          key: y
                        }, [
                          nt(
                            "div",
                            gf,
                            Yt(p.label),
                            1
                            /* TEXT */
                          ),
                          nt("div", mf, [
                            (ye(!0), Se(
                              ge,
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
                    ])) : Gi("v-if", !0)
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
}, xf = /* @__PURE__ */ wf(bf, [["__scopeId", "data-v-5e414046"]]);
export {
  xf as LcHeader
};
