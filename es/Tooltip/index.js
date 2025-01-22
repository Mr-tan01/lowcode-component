import { ref as P, readonly as sn, watch as ve, computed as I, onMounted as De, onBeforeUnmount as Ce, inject as re, onActivated as Bi, onDeactivated as Di, createTextVNode as eo, Fragment as qe, Comment as _n, defineComponent as se, provide as at, getCurrentInstance as to, withDirectives as Dt, toRef as Se, h as T, Teleport as Fi, nextTick as Hi, renderSlot as ln, isVNode as Li, shallowRef as Ni, watchEffect as Ke, onBeforeMount as no, Transition as un, mergeProps as Cn, vShow as ji, cloneVNode as Wi, Text as Ui, openBlock as Vi, createElementBlock as ki, createVNode as Xi, unref as Gi, withCtx as qn, createElementVNode as We } from "vue";
function $t(e) {
  return e.composedPath()[0];
}
const Ki = {
  mousemoveoutside: /* @__PURE__ */ new WeakMap(),
  clickoutside: /* @__PURE__ */ new WeakMap()
};
function Yi(e, t, n) {
  if (e === "mousemoveoutside") {
    const r = (o) => {
      t.contains($t(o)) || n(o);
    };
    return {
      mousemove: r,
      touchstart: r
    };
  } else if (e === "clickoutside") {
    let r = !1;
    const o = (a) => {
      r = !t.contains($t(a));
    }, i = (a) => {
      r && (t.contains($t(a)) || n(a));
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
function ro(e, t, n) {
  const r = Ki[e];
  let o = r.get(t);
  o === void 0 && r.set(t, o = /* @__PURE__ */ new WeakMap());
  let i = o.get(n);
  return i === void 0 && o.set(n, i = Yi(e, t, n)), i;
}
function Zi(e, t, n, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const o = ro(e, t, n);
    return Object.keys(o).forEach((i) => {
      Q(i, document, o[i], r);
    }), !0;
  }
  return !1;
}
function qi(e, t, n, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const o = ro(e, t, n);
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
  const v = {
    bubble: {},
    capture: {}
  }, y = {};
  function p() {
    const f = function(b) {
      const { type: C, eventPhase: x, bubbles: R } = b, F = $t(b);
      if (x === 2)
        return;
      const j = x === 1 ? "capture" : "bubble";
      let W = F;
      const S = [];
      for (; W === null && (W = window), S.push(W), W !== window; )
        W = W.parentNode || null;
      const M = v.capture[C], U = v.bubble[C];
      if (o(b, "stopPropagation", n), o(b, "stopImmediatePropagation", r), u(b, l), j === "capture") {
        if (M === void 0)
          return;
        for (let K = S.length - 1; K >= 0 && !e.has(b); --K) {
          const J = S[K], Y = M.get(J);
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
              for (const gt of de) {
                if (t.has(b))
                  break;
                gt(b);
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
      const { type: C, eventPhase: x } = b;
      if (x !== 2)
        return;
      const R = y[C];
      R !== void 0 && R.forEach((F) => F(b));
    };
    return f.displayName = "evtdUnifiedWindowEventHandler", f;
  }
  const d = p(), g = w();
  function h(f, b) {
    const C = v[f];
    return C[b] === void 0 && (C[b] = /* @__PURE__ */ new Map(), window.addEventListener(b, d, f === "capture")), C[b];
  }
  function c(f) {
    return y[f] === void 0 && (y[f] = /* @__PURE__ */ new Set(), window.addEventListener(f, g)), y[f];
  }
  function _(f, b) {
    let C = f.get(b);
    return C === void 0 && f.set(b, C = /* @__PURE__ */ new Set()), C;
  }
  function A(f, b, C, x) {
    const R = v[b][C];
    if (R !== void 0) {
      const F = R.get(f);
      if (F !== void 0 && F.has(x))
        return !0;
    }
    return !1;
  }
  function z(f, b) {
    const C = y[f];
    return !!(C !== void 0 && C.has(b));
  }
  function D(f, b, C, x) {
    let R;
    if (typeof x == "object" && x.once === !0 ? R = (M) => {
      B(f, b, R, x), C(M);
    } : R = C, Zi(f, b, R, x))
      return;
    const j = x === !0 || typeof x == "object" && x.capture === !0 ? "capture" : "bubble", W = h(j, f), S = _(W, b);
    if (S.has(R) || S.add(R), b === window) {
      const M = c(f);
      M.has(R) || M.add(R);
    }
  }
  function B(f, b, C, x) {
    if (qi(f, b, C, x))
      return;
    const F = x === !0 || typeof x == "object" && x.capture === !0, j = F ? "capture" : "bubble", W = h(j, f), S = _(W, b);
    if (b === window && !A(b, F ? "bubble" : "capture", f, C) && z(f, C)) {
      const U = y[f];
      U.delete(C), U.size === 0 && (window.removeEventListener(f, g), y[f] = void 0);
    }
    S.has(C) && S.delete(C), S.size === 0 && W.delete(b), W.size === 0 && (window.removeEventListener(f, d, j === "capture"), v[j][f] = void 0);
  }
  return {
    on: D,
    off: B
  };
}
const { on: Q, off: G } = Ji();
function Qi(e) {
  const t = P(!!e.value);
  if (t.value)
    return sn(t);
  const n = ve(e, (r) => {
    r && (t.value = !0, n());
  });
  return sn(t);
}
function ct(e) {
  const t = I(e), n = P(t.value);
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
const ea = typeof window < "u";
let Xe, st;
const ta = () => {
  var e, t;
  Xe = ea ? (t = (e = document) === null || e === void 0 ? void 0 : e.fonts) === null || t === void 0 ? void 0 : t.ready : void 0, st = !1, Xe !== void 0 ? Xe.then(() => {
    st = !0;
  }) : st = !0;
};
ta();
function na(e) {
  if (st)
    return;
  let t = !1;
  De(() => {
    st || Xe == null || Xe.then(() => {
      t || e();
    });
  }), Ce(() => {
    t = !0;
  });
}
function ra(e, t) {
  return ve(e, (n) => {
    n !== void 0 && (t.value = n);
  }), I(() => e.value === void 0 ? t.value : e.value);
}
function oo() {
  const e = P(!1);
  return De(() => {
    e.value = !0;
  }), sn(e);
}
function oa(e, t) {
  return I(() => {
    for (const n of t)
      if (e[n] !== void 0)
        return e[n];
    return e[t[t.length - 1]];
  });
}
const ia = (typeof window > "u" ? !1 : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
!window.MSStream;
function aa() {
  return ia;
}
const sa = "n-internal-select-menu-body", io = "n-drawer-body", ao = "n-modal-body", so = "n-popover-body", lo = "__disabled__";
function Ye(e) {
  const t = re(ao, null), n = re(io, null), r = re(so, null), o = re(sa, null), i = P();
  if (typeof document < "u") {
    i.value = document.fullscreenElement;
    const a = () => {
      i.value = document.fullscreenElement;
    };
    De(() => {
      Q("fullscreenchange", document, a);
    }), Ce(() => {
      G("fullscreenchange", document, a);
    });
  }
  return ct(() => {
    var a;
    const {
      to: s
    } = e;
    return s !== void 0 ? s === !1 ? lo : s === !0 ? i.value || "body" : s : t != null && t.value ? (a = t.value.$el) !== null && a !== void 0 ? a : t.value : n != null && n.value ? n.value : r != null && r.value ? r.value : o != null && o.value ? o.value : s ?? (i.value || "body");
  });
}
Ye.tdkey = lo;
Ye.propTo = {
  type: [String, Object, Boolean],
  default: void 0
};
function la(e) {
  const t = {
    isDeactivated: !1
  };
  let n = !1;
  return Bi(() => {
    if (t.isDeactivated = !1, !n) {
      n = !0;
      return;
    }
    e();
  }), Di(() => {
    t.isDeactivated = !0, n || (n = !0);
  }), t;
}
let Pt = [];
const uo = /* @__PURE__ */ new WeakMap();
function ua() {
  Pt.forEach((e) => e(...uo.get(e))), Pt = [];
}
function da(e, ...t) {
  uo.set(e, t), !Pt.includes(e) && Pt.push(e) === 1 && requestAnimationFrame(ua);
}
function Mt(e) {
  return e.composedPath()[0] || null;
}
function Jn(e) {
  return typeof e == "string" ? e.endsWith("px") ? Number(e.slice(0, e.length - 2)) : Number(e) : e;
}
function ot(e, t) {
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
const Qn = {
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
}, Je = "^\\s*", Qe = "\\s*$", Pe = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", Me = "([0-9A-Fa-f])", Ae = "([0-9A-Fa-f]{2})", ca = new RegExp(`${Je}rgb\\s*\\(${Pe},${Pe},${Pe}\\)${Qe}`), fa = new RegExp(`${Je}rgba\\s*\\(${Pe},${Pe},${Pe},${Pe}\\)${Qe}`), pa = new RegExp(`${Je}#${Me}${Me}${Me}${Qe}`), ha = new RegExp(`${Je}#${Ae}${Ae}${Ae}${Qe}`), va = new RegExp(`${Je}#${Me}${Me}${Me}${Me}${Qe}`), ga = new RegExp(`${Je}#${Ae}${Ae}${Ae}${Ae}${Qe}`);
function te(e) {
  return parseInt(e, 16);
}
function Ze(e) {
  try {
    let t;
    if (t = ha.exec(e))
      return [te(t[1]), te(t[2]), te(t[3]), 1];
    if (t = ca.exec(e))
      return [q(t[1]), q(t[5]), q(t[9]), 1];
    if (t = fa.exec(e))
      return [
        q(t[1]),
        q(t[5]),
        q(t[9]),
        lt(t[13])
      ];
    if (t = pa.exec(e))
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
        lt(te(t[4]) / 255)
      ];
    if (t = va.exec(e))
      return [
        te(t[1] + t[1]),
        te(t[2] + t[2]),
        te(t[3] + t[3]),
        lt(te(t[4] + t[4]) / 255)
      ];
    if (e in Qn)
      return Ze(Qn[e]);
    throw new Error(`[seemly/rgba]: Invalid color value ${e}.`);
  } catch (t) {
    throw t;
  }
}
function ma(e) {
  return e > 1 ? 1 : e < 0 ? 0 : e;
}
function ba(e, t, n, r) {
  return `rgba(${q(e)}, ${q(t)}, ${q(n)}, ${ma(r)})`;
}
function Xt(e, t, n, r, o) {
  return q((e * t * (1 - r) + n * r) / o);
}
function co(e, t) {
  Array.isArray(e) || (e = Ze(e)), Array.isArray(t) || (t = Ze(t));
  const n = e[3], r = t[3], o = lt(n + r - n * r);
  return ba(Xt(e[0], n, t[0], r, o), Xt(e[1], n, t[1], r, o), Xt(e[2], n, t[2], r, o), o);
}
function mt(e, t) {
  const [n, r, o, i = 1] = Array.isArray(e) ? e : Ze(e), { lightness: a = 1, alpha: s = 1 } = t;
  return wa([n * a, r * a, o * a, i * s]);
}
function lt(e) {
  const t = Math.round(Number(e) * 100) / 100;
  return t > 1 ? 1 : t < 0 ? 0 : t;
}
function q(e) {
  const t = Math.round(Number(e));
  return t > 255 ? 255 : t < 0 ? 0 : t;
}
function wa(e) {
  const [t, n, r] = e;
  return 3 in e ? `rgba(${q(t)}, ${q(n)}, ${q(r)}, ${lt(e[3])})` : `rgba(${q(t)}, ${q(n)}, ${q(r)}, 1)`;
}
function ya(e = 8) {
  return Math.random().toString(16).slice(2, 2 + e);
}
function dn(e, t, n = "default") {
  const r = t[n];
  if (r === void 0)
    throw new Error(`[vueuc/${e}]: slot[${n}] is empty.`);
  return r();
}
function cn(e, t = !0, n = []) {
  return e.forEach((r) => {
    if (r !== null) {
      if (typeof r != "object") {
        (typeof r == "string" || typeof r == "number") && n.push(eo(String(r)));
        return;
      }
      if (Array.isArray(r)) {
        cn(r, t, n);
        return;
      }
      if (r.type === qe) {
        if (r.children === null)
          return;
        Array.isArray(r.children) && cn(r.children, t, n);
      } else r.type !== _n && n.push(r);
    }
  }), n;
}
function er(e, t, n = "default") {
  const r = t[n];
  if (r === void 0)
    throw new Error(`[vueuc/${e}]: slot[${n}] is empty.`);
  const o = cn(r());
  if (o.length === 1)
    return o[0];
  throw new Error(`[vueuc/${e}]: slot[${n}] should have exactly one child.`);
}
let we = null;
function fo() {
  if (we === null && (we = document.getElementById("v-binder-view-measurer"), we === null)) {
    we = document.createElement("div"), we.id = "v-binder-view-measurer";
    const { style: e } = we;
    e.position = "fixed", e.left = "0", e.right = "0", e.top = "0", e.bottom = "0", e.pointerEvents = "none", e.visibility = "hidden", document.body.appendChild(we);
  }
  return we.getBoundingClientRect();
}
function Sa(e, t) {
  const n = fo();
  return {
    top: t,
    left: e,
    height: 0,
    width: 0,
    right: n.width - e,
    bottom: n.height - t
  };
}
function Gt(e) {
  const t = e.getBoundingClientRect(), n = fo();
  return {
    left: t.left - n.left,
    top: t.top - n.top,
    bottom: n.height + n.top - t.bottom,
    right: n.width + n.left - t.right,
    width: t.width,
    height: t.height
  };
}
function xa(e) {
  return e.nodeType === 9 ? null : e.parentNode;
}
function po(e) {
  if (e === null)
    return null;
  const t = xa(e);
  if (t === null)
    return null;
  if (t.nodeType === 9)
    return document;
  if (t.nodeType === 1) {
    const { overflow: n, overflowX: r, overflowY: o } = getComputedStyle(t);
    if (/(auto|scroll|overlay)/.test(n + o + r))
      return t;
  }
  return po(t);
}
const _a = se({
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
    at("VBinder", (t = to()) === null || t === void 0 ? void 0 : t.proxy);
    const n = re("VBinder", null), r = P(null), o = (c) => {
      r.value = c, n && e.syncTargetWithParent && n.setTargetRef(c);
    };
    let i = [];
    const a = () => {
      let c = r.value;
      for (; c = po(c), c !== null; )
        i.push(c);
      for (const _ of i)
        Q("scroll", _, y, !0);
    }, s = () => {
      for (const c of i)
        G("scroll", c, y, !0);
      i = [];
    }, l = /* @__PURE__ */ new Set(), u = (c) => {
      l.size === 0 && a(), l.has(c) || l.add(c);
    }, v = (c) => {
      l.has(c) && l.delete(c), l.size === 0 && s();
    }, y = () => {
      da(p);
    }, p = () => {
      l.forEach((c) => c());
    }, w = /* @__PURE__ */ new Set(), d = (c) => {
      w.size === 0 && Q("resize", window, h), w.has(c) || w.add(c);
    }, g = (c) => {
      w.has(c) && w.delete(c), w.size === 0 && G("resize", window, h);
    }, h = () => {
      w.forEach((c) => c());
    };
    return Ce(() => {
      G("resize", window, h), s();
    }), {
      targetRef: r,
      setTargetRef: o,
      addScrollListener: u,
      removeScrollListener: v,
      addResizeListener: d,
      removeResizeListener: g
    };
  },
  render() {
    return dn("binder", this.$slots);
  }
}), Ca = se({
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
    return e ? Dt(er("follower", this.$slots), [
      [t]
    ]) : er("follower", this.$slots);
  }
}), Ue = "@@mmoContext", Ea = {
  mounted(e, { value: t }) {
    e[Ue] = {
      handler: void 0
    }, typeof t == "function" && (e[Ue].handler = t, Q("mousemoveoutside", e, t));
  },
  updated(e, { value: t }) {
    const n = e[Ue];
    typeof t == "function" ? n.handler ? n.handler !== t && (G("mousemoveoutside", e, n.handler), n.handler = t, Q("mousemoveoutside", e, t)) : (e[Ue].handler = t, Q("mousemoveoutside", e, t)) : n.handler && (G("mousemoveoutside", e, n.handler), n.handler = void 0);
  },
  unmounted(e) {
    const { handler: t } = e[Ue];
    t && G("mousemoveoutside", e, t), e[Ue].handler = void 0;
  }
}, Ve = "@@coContext", tr = {
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
function Oa(e, t) {
  console.error(`[vdirs/${e}]: ${t}`);
}
class $a {
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
    r.has(t) ? r.delete(t) : n === void 0 && Oa("z-index-manager/unregister-element", "Element not found when unregistering."), this.squashState();
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
const Kt = new $a(), ke = "@@ziContext", ho = {
  mounted(e, t) {
    const { value: n = {} } = t, { zIndex: r, enabled: o } = n;
    e[ke] = {
      enabled: !!o,
      initialized: !1
    }, o && (Kt.ensureZIndex(e, r), e[ke].initialized = !0);
  },
  updated(e, t) {
    const { value: n = {} } = t, { zIndex: r, enabled: o } = n, i = e[ke].enabled;
    o && !i && (Kt.ensureZIndex(e, r), e[ke].initialized = !0), e[ke].enabled = !!o;
  },
  unmounted(e, t) {
    if (!e[ke].initialized)
      return;
    const { value: n = {} } = t, { zIndex: r } = n;
    Kt.unregister(e, r);
  }
}, Ta = "@css-render/vue3-ssr";
function Pa(e, t) {
  return `<style cssr-id="${e}">
${t}
</style>`;
}
function Ma(e, t, n) {
  const { styles: r, ids: o } = n;
  o.has(e) || r !== null && (o.add(e), r.push(Pa(e, t)));
}
const Aa = typeof document < "u";
function Ft() {
  if (Aa)
    return;
  const e = re(Ta, null);
  if (e !== null)
    return {
      adapter: (t, n) => Ma(t, n, e),
      context: e
    };
}
function nr(e, t) {
  console.error(`[vueuc/${e}]: ${t}`);
}
function Ra(e) {
  let t = 0;
  for (let n = 0; n < e.length; ++n)
    e[n] === "&" && ++t;
  return t;
}
const vo = /\s*,(?![^(]*\))\s*/g, za = /\s+/g;
function Ia(e, t) {
  const n = [];
  return t.split(vo).forEach((r) => {
    let o = Ra(r);
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
function Ba(e, t) {
  const n = [];
  return t.split(vo).forEach((r) => {
    e.forEach((o) => {
      n.push((o && o + " ") + r);
    });
  }), n;
}
function Da(e) {
  let t = [""];
  return e.forEach((n) => {
    n = n && n.trim(), // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    n && (n.includes("&") ? t = Ia(t, n) : t = Ba(t, n));
  }), t.join(", ").replace(za, " ");
}
function rr(e) {
  if (!e)
    return;
  const t = e.parentElement;
  t && t.removeChild(e);
}
function Ht(e, t) {
  return (t ?? document.head).querySelector(`style[cssr-id="${e}"]`);
}
function Fa(e) {
  const t = document.createElement("style");
  return t.setAttribute("cssr-id", e), t;
}
function bt(e) {
  return e ? /^\s*@(s|m)/.test(e) : !1;
}
const Ha = /[A-Z]/g;
function go(e) {
  return e.replace(Ha, (t) => "-" + t.toLowerCase());
}
function La(e, t = "  ") {
  return typeof e == "object" && e !== null ? ` {
` + Object.entries(e).map((n) => t + `  ${go(n[0])}: ${n[1]};`).join(`
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
    s = go(s), l != null && a.push(`  ${s}${La(l)}`);
  }), e && a.push("}"), a.join(`
`);
}
function fn(e, t, n) {
  e && e.forEach((r) => {
    if (Array.isArray(r))
      fn(r, t, n);
    else if (typeof r == "function") {
      const o = r(t);
      Array.isArray(o) ? fn(o, t, n) : o && n(o);
    } else r && n(r);
  });
}
function mo(e, t, n, r, o) {
  const i = e.$;
  let a = "";
  if (!i || typeof i == "string")
    bt(i) ? a = i : t.push(i);
  else if (typeof i == "function") {
    const u = i({
      context: r.context,
      props: o
    });
    bt(u) ? a = u : t.push(u);
  } else if (i.before && i.before(r.context), !i.$ || typeof i.$ == "string")
    bt(i.$) ? a = i.$ : t.push(i.$);
  else if (i.$) {
    const u = i.$({
      context: r.context,
      props: o
    });
    bt(u) ? a = u : t.push(u);
  }
  const s = Da(t), l = or(s, e.props, r, o);
  a ? n.push(`${a} {`) : l.length && n.push(l), e.children && fn(e.children, {
    context: r.context,
    props: o
  }, (u) => {
    if (typeof u == "string") {
      const v = or(s, { raw: u }, r, o);
      n.push(v);
    } else
      mo(u, t, n, r, o);
  }), t.pop(), a && n.push("}"), i && i.after && i.after(r.context);
}
function ja(e, t, n) {
  const r = [];
  return mo(e, [], r, t, n), r.join(`

`);
}
function pn(e) {
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
function Wa(e, t, n, r) {
  const { els: o } = t;
  if (n === void 0)
    o.forEach(rr), t.els = [];
  else {
    const i = Ht(n, r);
    i && o.includes(i) && (rr(i), t.els = o.filter((a) => a !== i));
  }
}
function ir(e, t) {
  e.push(t);
}
function Ua(e, t, n, r, o, i, a, s, l) {
  let u;
  if (n === void 0 && (u = t.render(r), n = pn(u)), l) {
    l.adapter(n, u ?? t.render(r));
    return;
  }
  s === void 0 && (s = document.head);
  const v = Ht(n, s);
  if (v !== null && !i)
    return v;
  const y = v ?? Fa(n);
  if (u === void 0 && (u = t.render(r)), y.textContent = u, v !== null)
    return v;
  if (a) {
    const p = s.querySelector(`meta[name="${a}"]`);
    if (p)
      return s.insertBefore(y, p), ir(t.els, y), y;
  }
  return o ? s.insertBefore(y, s.querySelector("style, link")) : s.appendChild(y), ir(t.els, y), y;
}
function Va(e) {
  return ja(this, this.instance, e);
}
function ka(e = {}) {
  const { id: t, ssr: n, props: r, head: o = !1, force: i = !1, anchorMetaName: a, parent: s } = e;
  return Ua(this.instance, this, t, r, o, i, a, s, n);
}
function Xa(e = {}) {
  const { id: t, parent: n } = e;
  Wa(this.instance, this, t, n);
}
const wt = function(e, t, n, r) {
  return {
    instance: e,
    $: t,
    props: n,
    children: r,
    els: [],
    render: Va,
    mount: ka,
    unmount: Xa
  };
}, Ga = function(e, t, n, r) {
  return Array.isArray(t) ? wt(e, { $: null }, null, t) : Array.isArray(n) ? wt(e, t, null, n) : Array.isArray(r) ? wt(e, t, n, r) : wt(e, t, n, null);
};
function bo(e = {}) {
  const t = {
    c: (...n) => Ga(t, ...n),
    use: (n, ...r) => n.install(t, ...r),
    find: Ht,
    context: {},
    config: e
  };
  return t;
}
function Ka(e, t) {
  if (e === void 0)
    return !1;
  if (t) {
    const { context: { ids: n } } = t;
    return n.has(e);
  }
  return Ht(e) !== null;
}
const { c: yt } = bo(), Ya = "vueuc-style";
function ar(e) {
  return typeof e == "string" ? document.querySelector(e) : e();
}
const Za = se({
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
      showTeleport: Qi(Se(e, "show")),
      mergedTo: I(() => {
        const { to: t } = e;
        return t ?? "body";
      })
    };
  },
  render() {
    return this.showTeleport ? this.disabled ? dn("lazy-teleport", this.$slots) : T(Fi, {
      disabled: this.disabled,
      to: this.mergedTo
    }, dn("lazy-teleport", this.$slots)) : null;
  }
}), St = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, sr = {
  start: "end",
  center: "center",
  end: "start"
}, Yt = {
  top: "height",
  bottom: "height",
  left: "width",
  right: "width"
}, qa = {
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
}, Ja = {
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
}, Qa = {
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
function es(e, t, n, r, o, i) {
  if (!o || i)
    return { placement: e, top: 0, left: 0 };
  const [a, s] = e.split("-");
  let l = s ?? "center", u = {
    top: 0,
    left: 0
  };
  const v = (w, d, g) => {
    let h = 0, c = 0;
    const _ = n[w] - t[d] - t[w];
    return _ > 0 && r && (g ? c = lr[d] ? _ : -_ : h = lr[d] ? _ : -_), {
      left: h,
      top: c
    };
  }, y = a === "left" || a === "right";
  if (l !== "center") {
    const w = Qa[e], d = St[w], g = Yt[w];
    if (n[g] > t[g]) {
      if (
        // current space is not enough
        // ----------[ target ]---------|
        // -------[     follower        ]
        t[w] + t[g] < n[g]
      ) {
        const h = (n[g] - t[g]) / 2;
        t[w] < h || t[d] < h ? t[w] < t[d] ? (l = sr[s], u = v(g, d, y)) : u = v(g, w, y) : l = "center";
      }
    } else n[g] < t[g] && t[d] < 0 && // opposite align has larger space
    // ------------[   target   ]
    // ----------------[follower]
    t[w] > t[d] && (l = sr[s]);
  } else {
    const w = a === "bottom" || a === "top" ? "left" : "top", d = St[w], g = Yt[w], h = (n[g] - t[g]) / 2;
    // center is not enough
    // ----------- [ target ]--|
    // -------[     follower     ]
    (t[w] < h || t[d] < h) && (t[w] > t[d] ? (l = ur[w], u = v(g, w, y)) : (l = ur[d], u = v(g, d, y)));
  }
  let p = a;
  return (
    // space is not enough
    t[a] < n[Yt[a]] && // opposite position's space is larger
    t[a] < t[St[a]] && (p = St[a]), {
      placement: l !== "center" ? `${p}-${l}` : p,
      left: u.left,
      top: u.top
    }
  );
}
function ts(e, t) {
  return t ? Ja[e] : qa[e];
}
function ns(e, t, n, r, o, i) {
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
const rs = yt([
  yt(".v-binder-follower-container", {
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    height: "0",
    pointerEvents: "none",
    zIndex: "auto"
  }),
  yt(".v-binder-follower-content", {
    position: "absolute",
    zIndex: "auto"
  }, [
    yt("> *", {
      pointerEvents: "all"
    })
  ])
]), os = se({
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
    const t = re("VBinder"), n = ct(() => e.enabled !== void 0 ? e.enabled : e.show), r = P(null), o = P(null), i = () => {
      const { syncTrigger: p } = e;
      p.includes("scroll") && t.addScrollListener(l), p.includes("resize") && t.addResizeListener(l);
    }, a = () => {
      t.removeScrollListener(l), t.removeResizeListener(l);
    };
    De(() => {
      n.value && (l(), i());
    });
    const s = Ft();
    rs.mount({
      id: "vueuc/binder",
      head: !0,
      anchorMetaName: Ya,
      ssr: s
    }), Ce(() => {
      a();
    }), na(() => {
      n.value && l();
    });
    const l = () => {
      if (!n.value)
        return;
      const p = r.value;
      if (p === null)
        return;
      const w = t.targetRef, { x: d, y: g, overlap: h } = e, c = d !== void 0 && g !== void 0 ? Sa(d, g) : Gt(w);
      p.style.setProperty("--v-target-width", `${Math.round(c.width)}px`), p.style.setProperty("--v-target-height", `${Math.round(c.height)}px`);
      const { width: _, minWidth: A, placement: z, internalShift: D, flip: B } = e;
      p.setAttribute("v-placement", z), h ? p.setAttribute("v-overlap", "") : p.removeAttribute("v-overlap");
      const { style: f } = p;
      _ === "target" ? f.width = `${c.width}px` : _ !== void 0 ? f.width = _ : f.width = "", A === "target" ? f.minWidth = `${c.width}px` : A !== void 0 ? f.minWidth = A : f.minWidth = "";
      const b = Gt(p), C = Gt(o.value), { left: x, top: R, placement: F } = es(z, c, b, D, B, h), j = ts(F, h), { left: W, top: S, transform: M } = ns(F, C, c, R, x, h);
      p.setAttribute("v-placement", F), p.style.setProperty("--v-offset-left", `${Math.round(x)}px`), p.style.setProperty("--v-offset-top", `${Math.round(R)}px`), p.style.transform = `translateX(${W}) translateY(${S}) ${M}`, p.style.setProperty("--v-transform-origin", j), p.style.transformOrigin = j;
    };
    ve(n, (p) => {
      p ? (i(), u()) : a();
    });
    const u = () => {
      Hi().then(l).catch((p) => console.error(p));
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
    ].forEach((p) => {
      ve(Se(e, p), l);
    }), ["teleportDisabled"].forEach((p) => {
      ve(Se(e, p), u);
    }), ve(Se(e, "syncTrigger"), (p) => {
      p.includes("resize") ? t.addResizeListener(l) : t.removeResizeListener(l), p.includes("scroll") ? t.addScrollListener(l) : t.removeScrollListener(l);
    });
    const v = oo(), y = ct(() => {
      const { to: p } = e;
      if (p !== void 0)
        return p;
      v.value;
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
    return T(Za, {
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
        return this.zindexable ? Dt(n, [
          [
            ho,
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
var ze = [], is = function() {
  return ze.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, as = function() {
  return ze.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, dr = "ResizeObserver loop completed with undelivered notifications.", ss = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: dr
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = dr), window.dispatchEvent(e);
}, ft;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(ft || (ft = {}));
var Ie = function(e) {
  return Object.freeze(e);
}, ls = /* @__PURE__ */ function() {
  function e(t, n) {
    this.inlineSize = t, this.blockSize = n, Ie(this);
  }
  return e;
}(), wo = function() {
  function e(t, n, r, o) {
    return this.x = t, this.y = n, this.width = r, this.height = o, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Ie(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, n = t.x, r = t.y, o = t.top, i = t.right, a = t.bottom, s = t.left, l = t.width, u = t.height;
    return { x: n, y: r, top: o, right: i, bottom: a, left: s, width: l, height: u };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), En = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, yo = function(e) {
  if (En(e)) {
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
}, us = function(e) {
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
}, ut = typeof window < "u" ? window : {}, xt = /* @__PURE__ */ new WeakMap(), fr = /auto|scroll/, ds = /^tb|vertical/, cs = /msie|trident/i.test(ut.navigator && ut.navigator.userAgent), ce = function(e) {
  return parseFloat(e || "0");
}, Ge = function(e, t, n) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = !1), new ls((n ? t : e) || 0, (n ? e : t) || 0);
}, pr = Ie({
  devicePixelContentBoxSize: Ge(),
  borderBoxSize: Ge(),
  contentBoxSize: Ge(),
  contentRect: new wo(0, 0, 0, 0)
}), So = function(e, t) {
  if (t === void 0 && (t = !1), xt.has(e) && !t)
    return xt.get(e);
  if (yo(e))
    return xt.set(e, pr), pr;
  var n = getComputedStyle(e), r = En(e) && e.ownerSVGElement && e.getBBox(), o = !cs && n.boxSizing === "border-box", i = ds.test(n.writingMode || ""), a = !r && fr.test(n.overflowY || ""), s = !r && fr.test(n.overflowX || ""), l = r ? 0 : ce(n.paddingTop), u = r ? 0 : ce(n.paddingRight), v = r ? 0 : ce(n.paddingBottom), y = r ? 0 : ce(n.paddingLeft), p = r ? 0 : ce(n.borderTopWidth), w = r ? 0 : ce(n.borderRightWidth), d = r ? 0 : ce(n.borderBottomWidth), g = r ? 0 : ce(n.borderLeftWidth), h = y + u, c = l + v, _ = g + w, A = p + d, z = s ? e.offsetHeight - A - e.clientHeight : 0, D = a ? e.offsetWidth - _ - e.clientWidth : 0, B = o ? h + _ : 0, f = o ? c + A : 0, b = r ? r.width : ce(n.width) - B - D, C = r ? r.height : ce(n.height) - f - z, x = b + h + D + _, R = C + c + z + A, F = Ie({
    devicePixelContentBoxSize: Ge(Math.round(b * devicePixelRatio), Math.round(C * devicePixelRatio), i),
    borderBoxSize: Ge(x, R, i),
    contentBoxSize: Ge(b, C, i),
    contentRect: new wo(y, l, b, C)
  });
  return xt.set(e, F), F;
}, xo = function(e, t, n) {
  var r = So(e, n), o = r.borderBoxSize, i = r.contentBoxSize, a = r.devicePixelContentBoxSize;
  switch (t) {
    case ft.DEVICE_PIXEL_CONTENT_BOX:
      return a;
    case ft.BORDER_BOX:
      return o;
    default:
      return i;
  }
}, fs = /* @__PURE__ */ function() {
  function e(t) {
    var n = So(t);
    this.target = t, this.contentRect = n.contentRect, this.borderBoxSize = Ie([n.borderBoxSize]), this.contentBoxSize = Ie([n.contentBoxSize]), this.devicePixelContentBoxSize = Ie([n.devicePixelContentBoxSize]);
  }
  return e;
}(), _o = function(e) {
  if (yo(e))
    return 1 / 0;
  for (var t = 0, n = e.parentNode; n; )
    t += 1, n = n.parentNode;
  return t;
}, ps = function() {
  var e = 1 / 0, t = [];
  ze.forEach(function(a) {
    if (a.activeTargets.length !== 0) {
      var s = [];
      a.activeTargets.forEach(function(u) {
        var v = new fs(u.target), y = _o(u.target);
        s.push(v), u.lastReportedSize = xo(u.target, u.observedBox), y < e && (e = y);
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
      o.isActive() && (_o(o.target) > e ? n.activeTargets.push(o) : n.skippedTargets.push(o));
    });
  });
}, hs = function() {
  var e = 0;
  for (hr(e); is(); )
    e = ps(), hr(e);
  return as() && ss(), e > 0;
}, Zt, Co = [], vs = function() {
  return Co.splice(0).forEach(function(e) {
    return e();
  });
}, gs = function(e) {
  if (!Zt) {
    var t = 0, n = document.createTextNode(""), r = { characterData: !0 };
    new MutationObserver(function() {
      return vs();
    }).observe(n, r), Zt = function() {
      n.textContent = "".concat(t ? t-- : t++);
    };
  }
  Co.push(e), Zt();
}, ms = function(e) {
  gs(function() {
    requestAnimationFrame(e);
  });
}, Tt = 0, bs = function() {
  return !!Tt;
}, ws = 250, ys = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, vr = [
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
}, qt = !1, Ss = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var n = this;
    if (t === void 0 && (t = ws), !qt) {
      qt = !0;
      var r = gr(t);
      ms(function() {
        var o = !1;
        try {
          o = hs();
        } finally {
          if (qt = !1, t = r - gr(), !bs())
            return;
          o ? n.run(1e3) : t > 0 ? n.run(t) : n.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, n = function() {
      return t.observer && t.observer.observe(document.body, ys);
    };
    document.body ? n() : ut.addEventListener("DOMContentLoaded", n);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), vr.forEach(function(n) {
      return ut.addEventListener(n, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), vr.forEach(function(n) {
      return ut.removeEventListener(n, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), hn = new Ss(), mr = function(e) {
  !Tt && e > 0 && hn.start(), Tt += e, !Tt && hn.stop();
}, xs = function(e) {
  return !En(e) && !us(e) && getComputedStyle(e).display === "inline";
}, _s = function() {
  function e(t, n) {
    this.target = t, this.observedBox = n || ft.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = xo(this.target, this.observedBox, !0);
    return xs(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), Cs = /* @__PURE__ */ function() {
  function e(t, n) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = n;
  }
  return e;
}(), _t = /* @__PURE__ */ new WeakMap(), br = function(e, t) {
  for (var n = 0; n < e.length; n += 1)
    if (e[n].target === t)
      return n;
  return -1;
}, Ct = function() {
  function e() {
  }
  return e.connect = function(t, n) {
    var r = new Cs(t, n);
    _t.set(t, r);
  }, e.observe = function(t, n, r) {
    var o = _t.get(t), i = o.observationTargets.length === 0;
    br(o.observationTargets, n) < 0 && (i && ze.push(o), o.observationTargets.push(new _s(n, r && r.box)), mr(1), hn.schedule());
  }, e.unobserve = function(t, n) {
    var r = _t.get(t), o = br(r.observationTargets, n), i = r.observationTargets.length === 1;
    o >= 0 && (i && ze.splice(ze.indexOf(r), 1), r.observationTargets.splice(o, 1), mr(-1));
  }, e.disconnect = function(t) {
    var n = this, r = _t.get(t);
    r.observationTargets.slice().forEach(function(o) {
      return n.unobserve(t, o.target);
    }), r.activeTargets.splice(0, r.activeTargets.length);
  }, e;
}(), Es = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Ct.connect(this, t);
  }
  return e.prototype.observe = function(t, n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!cr(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Ct.observe(this, t, n);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!cr(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Ct.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    Ct.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
class Os {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || Es)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
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
const wr = new Os(), yr = se({
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
    De(() => {
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
    }), Ce(() => {
      t && wr.unregisterHandler(n.$el.nextElementSibling);
    });
  },
  render() {
    return ln(this.$slots, "default");
  }
});
function Eo(e) {
  return e instanceof HTMLElement;
}
function Oo(e) {
  for (let t = 0; t < e.childNodes.length; t++) {
    const n = e.childNodes[t];
    if (Eo(n) && (To(n) || Oo(n)))
      return !0;
  }
  return !1;
}
function $o(e) {
  for (let t = e.childNodes.length - 1; t >= 0; t--) {
    const n = e.childNodes[t];
    if (Eo(n) && (To(n) || $o(n)))
      return !0;
  }
  return !1;
}
function To(e) {
  if (!$s(e))
    return !1;
  try {
    e.focus({ preventScroll: !0 });
  } catch {
  }
  return document.activeElement === e;
}
function $s(e) {
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
let tt = [];
const Ts = se({
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
    const t = ya(), n = P(null), r = P(null);
    let o = !1, i = !1;
    const a = typeof document > "u" ? null : document.activeElement;
    function s() {
      return tt[tt.length - 1] === t;
    }
    function l(h) {
      var c;
      h.code === "Escape" && s() && ((c = e.onEsc) === null || c === void 0 || c.call(e, h));
    }
    De(() => {
      ve(() => e.active, (h) => {
        h ? (y(), Q("keydown", document, l)) : (G("keydown", document, l), o && p());
      }, {
        immediate: !0
      });
    }), Ce(() => {
      G("keydown", document, l), o && p();
    });
    function u(h) {
      if (!i && s()) {
        const c = v();
        if (c === null || c.contains(Mt(h)))
          return;
        w("first");
      }
    }
    function v() {
      const h = n.value;
      if (h === null)
        return null;
      let c = h;
      for (; c = c.nextSibling, !(c === null || c instanceof Element && c.tagName === "DIV"); )
        ;
      return c;
    }
    function y() {
      var h;
      if (!e.disabled) {
        if (tt.push(t), e.autoFocus) {
          const { initialFocusTo: c } = e;
          c === void 0 ? w("first") : (h = ar(c)) === null || h === void 0 || h.focus({ preventScroll: !0 });
        }
        o = !0, document.addEventListener("focus", u, !0);
      }
    }
    function p() {
      var h;
      if (e.disabled || (document.removeEventListener("focus", u, !0), tt = tt.filter((_) => _ !== t), s()))
        return;
      const { finalFocusTo: c } = e;
      c !== void 0 ? (h = ar(c)) === null || h === void 0 || h.focus({ preventScroll: !0 }) : e.returnFocusOnDeactivated && a instanceof HTMLElement && (i = !0, a.focus({ preventScroll: !0 }), i = !1);
    }
    function w(h) {
      if (s() && e.active) {
        const c = n.value, _ = r.value;
        if (c !== null && _ !== null) {
          const A = v();
          if (A == null || A === _) {
            i = !0, c.focus({ preventScroll: !0 }), i = !1;
            return;
          }
          i = !0;
          const z = h === "first" ? Oo(A) : $o(A);
          i = !1, z || (i = !0, c.focus({ preventScroll: !0 }), i = !1);
        }
      }
    }
    function d(h) {
      if (i)
        return;
      const c = v();
      c !== null && (h.relatedTarget !== null && c.contains(h.relatedTarget) ? w("last") : w("first"));
    }
    function g(h) {
      i || (h.relatedTarget !== null && h.relatedTarget === n.value ? w("last") : w("first"));
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
    return T(qe, null, [
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
}), Ps = /^(\d|\.)+$/, Sr = /(\d|\.)+/;
function Jt(e, {
  c: t = 1,
  offset: n = 0,
  attachPx: r = !0
} = {}) {
  if (typeof e == "number") {
    const o = (e + n) * t;
    return o === 0 ? "0" : `${o}px`;
  } else if (typeof e == "string")
    if (Ps.test(e)) {
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
  } = ot(e);
  return `${r} ${t} ${o} ${n}`;
}
var _r = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_21460_PJDHIKOZPECWZFUP", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.96.4", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-32603f9735-sock", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
function Ms(e) {
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
    let g, h;
    return {
      before(c) {
        g = c.bem.b, h = c.bem.els, c.bem.els = null;
      },
      after(c) {
        c.bem.b = g, c.bem.els = h;
      },
      $({ context: c, props: _ }) {
        return d = typeof d == "string" ? d : d({ context: c, props: _ }), c.bem.b = d, `${(_ == null ? void 0 : _.bPrefix) || t}${c.bem.b}`;
      }
    };
  }
  function s(d) {
    let g;
    return {
      before(h) {
        g = h.bem.els;
      },
      after(h) {
        h.bem.els = g;
      },
      $({ context: h, props: c }) {
        return d = typeof d == "string" ? d : d({ context: h, props: c }), h.bem.els = d.split(",").map((_) => _.trim()), h.bem.els.map((_) => `${(c == null ? void 0 : c.bPrefix) || t}${h.bem.b}${n}${_}`).join(", ");
      }
    };
  }
  function l(d) {
    return {
      $({ context: g, props: h }) {
        d = typeof d == "string" ? d : d({ context: g, props: h });
        const c = d.split(",").map((z) => z.trim());
        function _(z) {
          return c.map((D) => `&${(h == null ? void 0 : h.bPrefix) || t}${g.bem.b}${z !== void 0 ? `${n}${z}` : ""}${r}${D}`).join(", ");
        }
        const A = g.bem.els;
        if (A !== null) {
          if (_r.NODE_ENV !== "production" && A.length >= 2)
            throw Error(`[css-render/plugin-bem]: m(${d}) is invalid, using modifier inside multiple elements is not allowed`);
          return _(A[0]);
        } else
          return _();
      }
    };
  }
  function u(d) {
    return {
      $({ context: g, props: h }) {
        d = typeof d == "string" ? d : d({ context: g, props: h });
        const c = g.bem.els;
        if (_r.NODE_ENV !== "production" && c !== null && c.length >= 2)
          throw Error(`[css-render/plugin-bem]: notM(${d}) is invalid, using modifier inside multiple elements is not allowed`);
        return `&:not(${(h == null ? void 0 : h.bPrefix) || t}${g.bem.b}${c !== null && c.length > 0 ? `${n}${c[0]}` : ""}${r}${d})`;
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
const As = "n", Rs = `.${As}-`, zs = "__", Is = "--", Po = bo(), Mo = Ms({
  blockPrefix: Rs,
  elementPrefix: zs,
  modifierPrefix: Is
});
Po.use(Mo);
const {
  c: N,
  find: wf
} = Po, {
  cB: ne,
  cE: Re,
  cM: ue,
  cNotM: Qt
} = Mo, Bs = (...e) => N(">", [ne(...e)]);
let en;
function Ds() {
  return en === void 0 && (en = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")), en;
}
const Cr = /* @__PURE__ */ new Set();
function nt(e, t) {
  const n = `[naive/${e}]: ${t}`;
  Cr.has(n) || (Cr.add(n), console.error(n));
}
function Er(e, t) {
  console.error(`[naive/${e}]: ${t}`);
}
function Fs(e, t) {
  throw new Error(`[naive/${e}]: ${t}`);
}
function it(e, ...t) {
  if (Array.isArray(e))
    e.forEach((n) => it(n, ...t));
  else
    return e(...t);
}
function vn(e, t = !0, n = []) {
  return e.forEach((r) => {
    if (r !== null) {
      if (typeof r != "object") {
        (typeof r == "string" || typeof r == "number") && n.push(eo(String(r)));
        return;
      }
      if (Array.isArray(r)) {
        vn(r, t, n);
        return;
      }
      if (r.type === qe) {
        if (r.children === null) return;
        Array.isArray(r.children) && vn(r.children, t, n);
      } else {
        if (r.type === _n && t) return;
        n.push(r);
      }
    }
  }), n;
}
function Hs(e, t = "default", n = void 0) {
  const r = e[t];
  if (!r)
    return Er("getFirstSlotVNode", `slot[${t}] is empty`), null;
  const o = vn(r(n));
  return o.length === 1 ? o[0] : (Er("getFirstSlotVNode", `slot[${t}] should have exactly one child`), null);
}
function Ls(e, t = [], n) {
  const r = {};
  return t.forEach((o) => {
    r[o] = e[o];
  }), Object.assign(r, n);
}
function On(e) {
  return e.some((t) => Li(t) ? !(t.type === _n || t.type === qe && !On(t.children)) : !0) ? e : null;
}
function tn(e, t) {
  const n = e && On(e());
  return t(n || null);
}
function Or(e) {
  return !(e && On(e()));
}
const $r = se({
  render() {
    var e, t;
    return (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e);
  }
}), Lt = "n-config-provider", Ns = "n";
function $n(e = {}, t = {
  defaultBordered: !0
}) {
  const n = re(Lt, null);
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
    mergedClsPrefixRef: n ? n.mergedClsPrefixRef : Ni(Ns),
    namespaceRef: I(() => n == null ? void 0 : n.mergedNamespaceRef.value)
  };
}
function Ao(e, t, n, r) {
  n || Fs("useThemeClass", "cssVarsRef is not passed");
  const o = re(Lt, null), i = o == null ? void 0 : o.mergedThemeHashRef, a = o == null ? void 0 : o.styleMountTarget, s = P(""), l = Ft();
  let u;
  const v = `__${e}`, y = () => {
    let p = v;
    const w = i == null ? void 0 : i.value;
    w && (p += `-${w}`);
    const {
      themeOverrides: d,
      builtinThemeOverrides: g
    } = r;
    d && (p += `-${pn(JSON.stringify(d))}`), g && (p += `-${pn(JSON.stringify(g))}`), s.value = p, u = () => {
      const h = n.value;
      let c = "";
      for (const _ in h)
        c += `${_}: ${h[_]};`;
      N(`.${p}`, c).mount({
        id: p,
        ssr: l,
        parent: a
      }), u = void 0;
    };
  };
  return Ke(() => {
    y();
  }), {
    themeClass: s,
    onRender: () => {
      u == null || u();
    }
  };
}
var Ro = typeof global == "object" && global && global.Object === Object && global, js = typeof self == "object" && self && self.Object === Object && self, pe = Ro || js || Function("return this")(), xe = pe.Symbol, zo = Object.prototype, Ws = zo.hasOwnProperty, Us = zo.toString, rt = xe ? xe.toStringTag : void 0;
function Vs(e) {
  var t = Ws.call(e, rt), n = e[rt];
  try {
    e[rt] = void 0;
    var r = !0;
  } catch {
  }
  var o = Us.call(e);
  return r && (t ? e[rt] = n : delete e[rt]), o;
}
var ks = Object.prototype, Xs = ks.toString;
function Gs(e) {
  return Xs.call(e);
}
var Ks = "[object Null]", Ys = "[object Undefined]", Tr = xe ? xe.toStringTag : void 0;
function Fe(e) {
  return e == null ? e === void 0 ? Ys : Ks : Tr && Tr in Object(e) ? Vs(e) : Gs(e);
}
function _e(e) {
  return e != null && typeof e == "object";
}
var Zs = "[object Symbol]";
function Tn(e) {
  return typeof e == "symbol" || _e(e) && Fe(e) == Zs;
}
function Io(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var ae = Array.isArray, Pr = xe ? xe.prototype : void 0, Mr = Pr ? Pr.toString : void 0;
function Bo(e) {
  if (typeof e == "string")
    return e;
  if (ae(e))
    return Io(e, Bo) + "";
  if (Tn(e))
    return Mr ? Mr.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Ee(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Pn(e) {
  return e;
}
var qs = "[object AsyncFunction]", Js = "[object Function]", Qs = "[object GeneratorFunction]", el = "[object Proxy]";
function Mn(e) {
  if (!Ee(e))
    return !1;
  var t = Fe(e);
  return t == Js || t == Qs || t == qs || t == el;
}
var nn = pe["__core-js_shared__"], Ar = function() {
  var e = /[^.]+$/.exec(nn && nn.keys && nn.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function tl(e) {
  return !!Ar && Ar in e;
}
var nl = Function.prototype, rl = nl.toString;
function He(e) {
  if (e != null) {
    try {
      return rl.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ol = /[\\^$.*+?()[\]{}|]/g, il = /^\[object .+?Constructor\]$/, al = Function.prototype, sl = Object.prototype, ll = al.toString, ul = sl.hasOwnProperty, dl = RegExp(
  "^" + ll.call(ul).replace(ol, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function cl(e) {
  if (!Ee(e) || tl(e))
    return !1;
  var t = Mn(e) ? dl : il;
  return t.test(He(e));
}
function fl(e, t) {
  return e == null ? void 0 : e[t];
}
function Le(e, t) {
  var n = fl(e, t);
  return cl(n) ? n : void 0;
}
var gn = Le(pe, "WeakMap"), Rr = Object.create, pl = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!Ee(t))
      return {};
    if (Rr)
      return Rr(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
function hl(e, t, n) {
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
function vl(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var gl = 800, ml = 16, bl = Date.now;
function wl(e) {
  var t = 0, n = 0;
  return function() {
    var r = bl(), o = ml - (r - n);
    if (n = r, o > 0) {
      if (++t >= gl)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function yl(e) {
  return function() {
    return e;
  };
}
var At = function() {
  try {
    var e = Le(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Sl = At ? function(e, t) {
  return At(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: yl(t),
    writable: !0
  });
} : Pn, xl = wl(Sl), _l = 9007199254740991, Cl = /^(?:0|[1-9]\d*)$/;
function An(e, t) {
  var n = typeof e;
  return t = t ?? _l, !!t && (n == "number" || n != "symbol" && Cl.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Rn(e, t, n) {
  t == "__proto__" && At ? At(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function vt(e, t) {
  return e === t || e !== e && t !== t;
}
var El = Object.prototype, Ol = El.hasOwnProperty;
function $l(e, t, n) {
  var r = e[t];
  (!(Ol.call(e, t) && vt(r, n)) || n === void 0 && !(t in e)) && Rn(e, t, n);
}
function Tl(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var i = -1, a = t.length; ++i < a; ) {
    var s = t[i], l = void 0;
    l === void 0 && (l = e[s]), o ? Rn(n, s, l) : $l(n, s, l);
  }
  return n;
}
var zr = Math.max;
function Pl(e, t, n) {
  return t = zr(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, i = zr(r.length - t, 0), a = Array(i); ++o < i; )
      a[o] = r[t + o];
    o = -1;
    for (var s = Array(t + 1); ++o < t; )
      s[o] = r[o];
    return s[t] = n(a), hl(e, this, s);
  };
}
function Ml(e, t) {
  return xl(Pl(e, t, Pn), e + "");
}
var Al = 9007199254740991;
function zn(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Al;
}
function et(e) {
  return e != null && zn(e.length) && !Mn(e);
}
function Rl(e, t, n) {
  if (!Ee(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? et(n) && An(t, n.length) : r == "string" && t in n) ? vt(n[t], e) : !1;
}
function zl(e) {
  return Ml(function(t, n) {
    var r = -1, o = n.length, i = o > 1 ? n[o - 1] : void 0, a = o > 2 ? n[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (o--, i) : void 0, a && Rl(n[0], n[1], a) && (i = o < 3 ? void 0 : i, o = 1), t = Object(t); ++r < o; ) {
      var s = n[r];
      s && e(t, s, r, i);
    }
    return t;
  });
}
var Il = Object.prototype;
function In(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || Il;
  return e === n;
}
function Bl(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var Dl = "[object Arguments]";
function Ir(e) {
  return _e(e) && Fe(e) == Dl;
}
var Do = Object.prototype, Fl = Do.hasOwnProperty, Hl = Do.propertyIsEnumerable, Rt = Ir(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ir : function(e) {
  return _e(e) && Fl.call(e, "callee") && !Hl.call(e, "callee");
};
function Ll() {
  return !1;
}
var Fo = typeof exports == "object" && exports && !exports.nodeType && exports, Br = Fo && typeof module == "object" && module && !module.nodeType && module, Nl = Br && Br.exports === Fo, Dr = Nl ? pe.Buffer : void 0, jl = Dr ? Dr.isBuffer : void 0, zt = jl || Ll, Wl = "[object Arguments]", Ul = "[object Array]", Vl = "[object Boolean]", kl = "[object Date]", Xl = "[object Error]", Gl = "[object Function]", Kl = "[object Map]", Yl = "[object Number]", Zl = "[object Object]", ql = "[object RegExp]", Jl = "[object Set]", Ql = "[object String]", eu = "[object WeakMap]", tu = "[object ArrayBuffer]", nu = "[object DataView]", ru = "[object Float32Array]", ou = "[object Float64Array]", iu = "[object Int8Array]", au = "[object Int16Array]", su = "[object Int32Array]", lu = "[object Uint8Array]", uu = "[object Uint8ClampedArray]", du = "[object Uint16Array]", cu = "[object Uint32Array]", L = {};
L[ru] = L[ou] = L[iu] = L[au] = L[su] = L[lu] = L[uu] = L[du] = L[cu] = !0;
L[Wl] = L[Ul] = L[tu] = L[Vl] = L[nu] = L[kl] = L[Xl] = L[Gl] = L[Kl] = L[Yl] = L[Zl] = L[ql] = L[Jl] = L[Ql] = L[eu] = !1;
function fu(e) {
  return _e(e) && zn(e.length) && !!L[Fe(e)];
}
function pu(e) {
  return function(t) {
    return e(t);
  };
}
var Ho = typeof exports == "object" && exports && !exports.nodeType && exports, dt = Ho && typeof module == "object" && module && !module.nodeType && module, hu = dt && dt.exports === Ho, rn = hu && Ro.process, Fr = function() {
  try {
    var e = dt && dt.require && dt.require("util").types;
    return e || rn && rn.binding && rn.binding("util");
  } catch {
  }
}(), Hr = Fr && Fr.isTypedArray, Bn = Hr ? pu(Hr) : fu, vu = Object.prototype, gu = vu.hasOwnProperty;
function Lo(e, t) {
  var n = ae(e), r = !n && Rt(e), o = !n && !r && zt(e), i = !n && !r && !o && Bn(e), a = n || r || o || i, s = a ? Bl(e.length, String) : [], l = s.length;
  for (var u in e)
    (t || gu.call(e, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    An(u, l))) && s.push(u);
  return s;
}
function No(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var mu = No(Object.keys, Object), bu = Object.prototype, wu = bu.hasOwnProperty;
function yu(e) {
  if (!In(e))
    return mu(e);
  var t = [];
  for (var n in Object(e))
    wu.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Dn(e) {
  return et(e) ? Lo(e) : yu(e);
}
function Su(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var xu = Object.prototype, _u = xu.hasOwnProperty;
function Cu(e) {
  if (!Ee(e))
    return Su(e);
  var t = In(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !_u.call(e, r)) || n.push(r);
  return n;
}
function jo(e) {
  return et(e) ? Lo(e, !0) : Cu(e);
}
var Eu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ou = /^\w*$/;
function Fn(e, t) {
  if (ae(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Tn(e) ? !0 : Ou.test(e) || !Eu.test(e) || t != null && e in Object(t);
}
var pt = Le(Object, "create");
function $u() {
  this.__data__ = pt ? pt(null) : {}, this.size = 0;
}
function Tu(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Pu = "__lodash_hash_undefined__", Mu = Object.prototype, Au = Mu.hasOwnProperty;
function Ru(e) {
  var t = this.__data__;
  if (pt) {
    var n = t[e];
    return n === Pu ? void 0 : n;
  }
  return Au.call(t, e) ? t[e] : void 0;
}
var zu = Object.prototype, Iu = zu.hasOwnProperty;
function Bu(e) {
  var t = this.__data__;
  return pt ? t[e] !== void 0 : Iu.call(t, e);
}
var Du = "__lodash_hash_undefined__";
function Fu(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = pt && t === void 0 ? Du : t, this;
}
function Be(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Be.prototype.clear = $u;
Be.prototype.delete = Tu;
Be.prototype.get = Ru;
Be.prototype.has = Bu;
Be.prototype.set = Fu;
function Hu() {
  this.__data__ = [], this.size = 0;
}
function Nt(e, t) {
  for (var n = e.length; n--; )
    if (vt(e[n][0], t))
      return n;
  return -1;
}
var Lu = Array.prototype, Nu = Lu.splice;
function ju(e) {
  var t = this.__data__, n = Nt(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Nu.call(t, n, 1), --this.size, !0;
}
function Wu(e) {
  var t = this.__data__, n = Nt(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Uu(e) {
  return Nt(this.__data__, e) > -1;
}
function Vu(e, t) {
  var n = this.__data__, r = Nt(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function ge(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ge.prototype.clear = Hu;
ge.prototype.delete = ju;
ge.prototype.get = Wu;
ge.prototype.has = Uu;
ge.prototype.set = Vu;
var ht = Le(pe, "Map");
function ku() {
  this.size = 0, this.__data__ = {
    hash: new Be(),
    map: new (ht || ge)(),
    string: new Be()
  };
}
function Xu(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function jt(e, t) {
  var n = e.__data__;
  return Xu(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Gu(e) {
  var t = jt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Ku(e) {
  return jt(this, e).get(e);
}
function Yu(e) {
  return jt(this, e).has(e);
}
function Zu(e, t) {
  var n = jt(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function me(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
me.prototype.clear = ku;
me.prototype.delete = Gu;
me.prototype.get = Ku;
me.prototype.has = Yu;
me.prototype.set = Zu;
var qu = "Expected a function";
function Hn(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(qu);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], i = n.cache;
    if (i.has(o))
      return i.get(o);
    var a = e.apply(this, r);
    return n.cache = i.set(o, a) || i, a;
  };
  return n.cache = new (Hn.Cache || me)(), n;
}
Hn.Cache = me;
var Ju = 500;
function Qu(e) {
  var t = Hn(e, function(r) {
    return n.size === Ju && n.clear(), r;
  }), n = t.cache;
  return t;
}
var ed = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, td = /\\(\\)?/g, nd = Qu(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ed, function(n, r, o, i) {
    t.push(o ? i.replace(td, "$1") : r || n);
  }), t;
});
function rd(e) {
  return e == null ? "" : Bo(e);
}
function Wo(e, t) {
  return ae(e) ? e : Fn(e, t) ? [e] : nd(rd(e));
}
function Wt(e) {
  if (typeof e == "string" || Tn(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Uo(e, t) {
  t = Wo(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[Wt(t[n++])];
  return n && n == r ? e : void 0;
}
function od(e, t, n) {
  var r = e == null ? void 0 : Uo(e, t);
  return r === void 0 ? n : r;
}
function id(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var Vo = No(Object.getPrototypeOf, Object), ad = "[object Object]", sd = Function.prototype, ld = Object.prototype, ko = sd.toString, ud = ld.hasOwnProperty, dd = ko.call(Object);
function cd(e) {
  if (!_e(e) || Fe(e) != ad)
    return !1;
  var t = Vo(e);
  if (t === null)
    return !0;
  var n = ud.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && ko.call(n) == dd;
}
function fd() {
  this.__data__ = new ge(), this.size = 0;
}
function pd(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function hd(e) {
  return this.__data__.get(e);
}
function vd(e) {
  return this.__data__.has(e);
}
var gd = 200;
function md(e, t) {
  var n = this.__data__;
  if (n instanceof ge) {
    var r = n.__data__;
    if (!ht || r.length < gd - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new me(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function fe(e) {
  var t = this.__data__ = new ge(e);
  this.size = t.size;
}
fe.prototype.clear = fd;
fe.prototype.delete = pd;
fe.prototype.get = hd;
fe.prototype.has = vd;
fe.prototype.set = md;
var Xo = typeof exports == "object" && exports && !exports.nodeType && exports, Lr = Xo && typeof module == "object" && module && !module.nodeType && module, bd = Lr && Lr.exports === Xo, Nr = bd ? pe.Buffer : void 0;
Nr && Nr.allocUnsafe;
function wd(e, t) {
  return e.slice();
}
function yd(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, i = []; ++n < r; ) {
    var a = e[n];
    t(a, n, e) && (i[o++] = a);
  }
  return i;
}
function Sd() {
  return [];
}
var xd = Object.prototype, _d = xd.propertyIsEnumerable, jr = Object.getOwnPropertySymbols, Cd = jr ? function(e) {
  return e == null ? [] : (e = Object(e), yd(jr(e), function(t) {
    return _d.call(e, t);
  }));
} : Sd;
function Ed(e, t, n) {
  var r = t(e);
  return ae(e) ? r : id(r, n(e));
}
function Wr(e) {
  return Ed(e, Dn, Cd);
}
var mn = Le(pe, "DataView"), bn = Le(pe, "Promise"), wn = Le(pe, "Set"), Ur = "[object Map]", Od = "[object Object]", Vr = "[object Promise]", kr = "[object Set]", Xr = "[object WeakMap]", Gr = "[object DataView]", $d = He(mn), Td = He(ht), Pd = He(bn), Md = He(wn), Ad = He(gn), ye = Fe;
(mn && ye(new mn(new ArrayBuffer(1))) != Gr || ht && ye(new ht()) != Ur || bn && ye(bn.resolve()) != Vr || wn && ye(new wn()) != kr || gn && ye(new gn()) != Xr) && (ye = function(e) {
  var t = Fe(e), n = t == Od ? e.constructor : void 0, r = n ? He(n) : "";
  if (r)
    switch (r) {
      case $d:
        return Gr;
      case Td:
        return Ur;
      case Pd:
        return Vr;
      case Md:
        return kr;
      case Ad:
        return Xr;
    }
  return t;
});
var It = pe.Uint8Array;
function Rd(e) {
  var t = new e.constructor(e.byteLength);
  return new It(t).set(new It(e)), t;
}
function zd(e, t) {
  var n = Rd(e.buffer);
  return new e.constructor(n, e.byteOffset, e.length);
}
function Id(e) {
  return typeof e.constructor == "function" && !In(e) ? pl(Vo(e)) : {};
}
var Bd = "__lodash_hash_undefined__";
function Dd(e) {
  return this.__data__.set(e, Bd), this;
}
function Fd(e) {
  return this.__data__.has(e);
}
function Bt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new me(); ++t < n; )
    this.add(e[t]);
}
Bt.prototype.add = Bt.prototype.push = Dd;
Bt.prototype.has = Fd;
function Hd(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Ld(e, t) {
  return e.has(t);
}
var Nd = 1, jd = 2;
function Go(e, t, n, r, o, i) {
  var a = n & Nd, s = e.length, l = t.length;
  if (s != l && !(a && l > s))
    return !1;
  var u = i.get(e), v = i.get(t);
  if (u && v)
    return u == t && v == e;
  var y = -1, p = !0, w = n & jd ? new Bt() : void 0;
  for (i.set(e, t), i.set(t, e); ++y < s; ) {
    var d = e[y], g = t[y];
    if (r)
      var h = a ? r(g, d, y, t, e, i) : r(d, g, y, e, t, i);
    if (h !== void 0) {
      if (h)
        continue;
      p = !1;
      break;
    }
    if (w) {
      if (!Hd(t, function(c, _) {
        if (!Ld(w, _) && (d === c || o(d, c, n, r, i)))
          return w.push(_);
      })) {
        p = !1;
        break;
      }
    } else if (!(d === g || o(d, g, n, r, i))) {
      p = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), p;
}
function Wd(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r, o) {
    n[++t] = [o, r];
  }), n;
}
function Ud(e) {
  var t = -1, n = Array(e.size);
  return e.forEach(function(r) {
    n[++t] = r;
  }), n;
}
var Vd = 1, kd = 2, Xd = "[object Boolean]", Gd = "[object Date]", Kd = "[object Error]", Yd = "[object Map]", Zd = "[object Number]", qd = "[object RegExp]", Jd = "[object Set]", Qd = "[object String]", ec = "[object Symbol]", tc = "[object ArrayBuffer]", nc = "[object DataView]", Kr = xe ? xe.prototype : void 0, on = Kr ? Kr.valueOf : void 0;
function rc(e, t, n, r, o, i, a) {
  switch (n) {
    case nc:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case tc:
      return !(e.byteLength != t.byteLength || !i(new It(e), new It(t)));
    case Xd:
    case Gd:
    case Zd:
      return vt(+e, +t);
    case Kd:
      return e.name == t.name && e.message == t.message;
    case qd:
    case Qd:
      return e == t + "";
    case Yd:
      var s = Wd;
    case Jd:
      var l = r & Vd;
      if (s || (s = Ud), e.size != t.size && !l)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      r |= kd, a.set(e, t);
      var v = Go(s(e), s(t), r, o, i, a);
      return a.delete(e), v;
    case ec:
      if (on)
        return on.call(e) == on.call(t);
  }
  return !1;
}
var oc = 1, ic = Object.prototype, ac = ic.hasOwnProperty;
function sc(e, t, n, r, o, i) {
  var a = n & oc, s = Wr(e), l = s.length, u = Wr(t), v = u.length;
  if (l != v && !a)
    return !1;
  for (var y = l; y--; ) {
    var p = s[y];
    if (!(a ? p in t : ac.call(t, p)))
      return !1;
  }
  var w = i.get(e), d = i.get(t);
  if (w && d)
    return w == t && d == e;
  var g = !0;
  i.set(e, t), i.set(t, e);
  for (var h = a; ++y < l; ) {
    p = s[y];
    var c = e[p], _ = t[p];
    if (r)
      var A = a ? r(_, c, p, t, e, i) : r(c, _, p, e, t, i);
    if (!(A === void 0 ? c === _ || o(c, _, n, r, i) : A)) {
      g = !1;
      break;
    }
    h || (h = p == "constructor");
  }
  if (g && !h) {
    var z = e.constructor, D = t.constructor;
    z != D && "constructor" in e && "constructor" in t && !(typeof z == "function" && z instanceof z && typeof D == "function" && D instanceof D) && (g = !1);
  }
  return i.delete(e), i.delete(t), g;
}
var lc = 1, Yr = "[object Arguments]", Zr = "[object Array]", Et = "[object Object]", uc = Object.prototype, qr = uc.hasOwnProperty;
function dc(e, t, n, r, o, i) {
  var a = ae(e), s = ae(t), l = a ? Zr : ye(e), u = s ? Zr : ye(t);
  l = l == Yr ? Et : l, u = u == Yr ? Et : u;
  var v = l == Et, y = u == Et, p = l == u;
  if (p && zt(e)) {
    if (!zt(t))
      return !1;
    a = !0, v = !1;
  }
  if (p && !v)
    return i || (i = new fe()), a || Bn(e) ? Go(e, t, n, r, o, i) : rc(e, t, l, n, r, o, i);
  if (!(n & lc)) {
    var w = v && qr.call(e, "__wrapped__"), d = y && qr.call(t, "__wrapped__");
    if (w || d) {
      var g = w ? e.value() : e, h = d ? t.value() : t;
      return i || (i = new fe()), o(g, h, n, r, i);
    }
  }
  return p ? (i || (i = new fe()), sc(e, t, n, r, o, i)) : !1;
}
function Ln(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !_e(e) && !_e(t) ? e !== e && t !== t : dc(e, t, n, r, Ln, o);
}
var cc = 1, fc = 2;
function pc(e, t, n, r) {
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
      var v = new fe(), y;
      if (!(y === void 0 ? Ln(u, l, cc | fc, r, v) : y))
        return !1;
    }
  }
  return !0;
}
function Ko(e) {
  return e === e && !Ee(e);
}
function hc(e) {
  for (var t = Dn(e), n = t.length; n--; ) {
    var r = t[n], o = e[r];
    t[n] = [r, o, Ko(o)];
  }
  return t;
}
function Yo(e, t) {
  return function(n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function vc(e) {
  var t = hc(e);
  return t.length == 1 && t[0][2] ? Yo(t[0][0], t[0][1]) : function(n) {
    return n === e || pc(n, e, t);
  };
}
function gc(e, t) {
  return e != null && t in Object(e);
}
function mc(e, t, n) {
  t = Wo(t, e);
  for (var r = -1, o = t.length, i = !1; ++r < o; ) {
    var a = Wt(t[r]);
    if (!(i = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return i || ++r != o ? i : (o = e == null ? 0 : e.length, !!o && zn(o) && An(a, o) && (ae(e) || Rt(e)));
}
function bc(e, t) {
  return e != null && mc(e, t, gc);
}
var wc = 1, yc = 2;
function Sc(e, t) {
  return Fn(e) && Ko(t) ? Yo(Wt(e), t) : function(n) {
    var r = od(n, e);
    return r === void 0 && r === t ? bc(n, e) : Ln(t, r, wc | yc);
  };
}
function xc(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function _c(e) {
  return function(t) {
    return Uo(t, e);
  };
}
function Cc(e) {
  return Fn(e) ? xc(Wt(e)) : _c(e);
}
function Ec(e) {
  return typeof e == "function" ? e : e == null ? Pn : typeof e == "object" ? ae(e) ? Sc(e[0], e[1]) : vc(e) : Cc(e);
}
function Oc(e) {
  return function(t, n, r) {
    for (var o = -1, i = Object(t), a = r(t), s = a.length; s--; ) {
      var l = a[++o];
      if (n(i[l], l, i) === !1)
        break;
    }
    return t;
  };
}
var Zo = Oc();
function $c(e, t) {
  return e && Zo(e, t, Dn);
}
function Tc(e, t) {
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
var Pc = Tc($c);
function yn(e, t, n) {
  (n !== void 0 && !vt(e[t], n) || n === void 0 && !(t in e)) && Rn(e, t, n);
}
function Mc(e) {
  return _e(e) && et(e);
}
function Sn(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function Ac(e) {
  return Tl(e, jo(e));
}
function Rc(e, t, n, r, o, i, a) {
  var s = Sn(e, n), l = Sn(t, n), u = a.get(l);
  if (u) {
    yn(e, n, u);
    return;
  }
  var v = i ? i(s, l, n + "", e, t, a) : void 0, y = v === void 0;
  if (y) {
    var p = ae(l), w = !p && zt(l), d = !p && !w && Bn(l);
    v = l, p || w || d ? ae(s) ? v = s : Mc(s) ? v = vl(s) : w ? (y = !1, v = wd(l)) : d ? (y = !1, v = zd(l)) : v = [] : cd(l) || Rt(l) ? (v = s, Rt(s) ? v = Ac(s) : (!Ee(s) || Mn(s)) && (v = Id(l))) : y = !1;
  }
  y && (a.set(l, v), o(v, l, r, i, a), a.delete(l)), yn(e, n, v);
}
function qo(e, t, n, r, o) {
  e !== t && Zo(t, function(i, a) {
    if (o || (o = new fe()), Ee(i))
      Rc(e, t, a, n, qo, r, o);
    else {
      var s = r ? r(Sn(e, a), i, a + "", e, t, o) : void 0;
      s === void 0 && (s = i), yn(e, a, s);
    }
  }, jo);
}
function zc(e, t) {
  var n = -1, r = et(e) ? Array(e.length) : [];
  return Pc(e, function(o, i, a) {
    r[++n] = t(o, i, a);
  }), r;
}
function Ic(e, t) {
  var n = ae(e) ? Io : zc;
  return n(e, Ec(t));
}
var Ot = zl(function(e, t, n) {
  qo(e, t, n);
});
const xn = "naive-ui-style";
function Bc(e, t, n) {
  if (!t) return;
  const r = Ft(), o = I(() => {
    const {
      value: s
    } = t;
    if (!s)
      return;
    const l = s[e];
    if (l)
      return l;
  }), i = re(Lt, null), a = () => {
    Ke(() => {
      const {
        value: s
      } = n, l = `${s}${e}Rtl`;
      if (Ka(l, r)) return;
      const {
        value: u
      } = o;
      u && u.style.mount({
        id: l,
        head: !0,
        anchorMetaName: xn,
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
const Nn = {
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
  fontSize: Dc,
  fontFamily: Fc,
  lineHeight: Hc
} = Nn, Lc = N("body", `
 margin: 0;
 font-size: ${Dc};
 font-family: ${Fc};
 line-height: ${Hc};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [N("input", `
 font-family: inherit;
 font-size: inherit;
 `)]);
function Oe(e, t, n, r, o, i) {
  const a = Ft(), s = re(Lt, null);
  if (n) {
    const u = () => {
      const v = i == null ? void 0 : i.value;
      n.mount({
        id: v === void 0 ? t : v + t,
        head: !0,
        props: {
          bPrefix: v ? `.${v}-` : void 0
        },
        anchorMetaName: xn,
        ssr: a,
        parent: s == null ? void 0 : s.styleMountTarget
      }), s != null && s.preflightStyleDisabled || Lc.mount({
        id: "n-global",
        head: !0,
        anchorMetaName: xn,
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
        common: v,
        self: y,
        peers: p = {}
      } = {},
      themeOverrides: w = {},
      builtinThemeOverrides: d = {}
    } = o, {
      common: g,
      peers: h
    } = w, {
      common: c = void 0,
      [e]: {
        common: _ = void 0,
        self: A = void 0,
        peers: z = {}
      } = {}
    } = (s == null ? void 0 : s.mergedThemeRef.value) || {}, {
      common: D = void 0,
      [e]: B = {}
    } = (s == null ? void 0 : s.mergedThemeOverridesRef.value) || {}, {
      common: f,
      peers: b = {}
    } = B, C = Ot({}, v || _ || c || r.common, D, f, g), x = Ot(
      // {}, executed every time, no need for empty obj
      (u = y || A || r.self) === null || u === void 0 ? void 0 : u(C),
      d,
      B,
      w
    );
    return {
      common: C,
      self: x,
      peers: Ot({}, r.peers, z, p),
      peerOverrides: Ot({}, d.peers, b, h)
    };
  });
}
Oe.props = {
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
}, Nc = Ze(O.neutralBase), Jo = Ze(O.neutralInvertBase), jc = `rgba(${Jo.slice(0, 3).join(", ")}, `;
function Jr(e) {
  return `${jc + String(e)})`;
}
function Z(e) {
  const t = Array.from(Jo);
  return t[3] = Number(e), co(Nc, t);
}
const jn = Object.assign(Object.assign({
  name: "common"
}, Nn), {
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
  iconColorHover: mt(Z(O.alpha4), {
    lightness: 0.75
  }),
  iconColorPressed: mt(Z(O.alpha4), {
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
  clearColorHover: mt(Z(O.alpha4), {
    lightness: 0.75
  }),
  clearColorPressed: mt(Z(O.alpha4), {
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
}), Wc = {
  railInsetHorizontalBottom: "auto 2px 4px 2px",
  railInsetHorizontalTop: "4px 2px auto 2px",
  railInsetVerticalRight: "2px 4px 2px auto",
  railInsetVerticalLeft: "2px auto 2px 4px",
  railColor: "transparent"
};
function Uc(e) {
  const {
    scrollbarColor: t,
    scrollbarColorHover: n,
    scrollbarHeight: r,
    scrollbarWidth: o,
    scrollbarBorderRadius: i
  } = e;
  return Object.assign(Object.assign({}, Wc), {
    height: r,
    width: o,
    borderRadius: i,
    color: t,
    colorHover: n
  });
}
const Vc = {
  name: "Scrollbar",
  common: jn,
  self: Uc
}, {
  cubicBezierEaseInOut: Qr
} = Nn;
function kc({
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
const Xc = ne("scrollbar", `
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
 `, [ue("horizontal", `
 height: var(--n-scrollbar-height);
 `, [N(">", [Re("scrollbar", `
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]), ue("horizontal--top", `
 top: var(--n-scrollbar-rail-top-horizontal-top); 
 right: var(--n-scrollbar-rail-right-horizontal-top); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-top); 
 left: var(--n-scrollbar-rail-left-horizontal-top); 
 `), ue("horizontal--bottom", `
 top: var(--n-scrollbar-rail-top-horizontal-bottom); 
 right: var(--n-scrollbar-rail-right-horizontal-bottom); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-bottom); 
 left: var(--n-scrollbar-rail-left-horizontal-bottom); 
 `), ue("vertical", `
 width: var(--n-scrollbar-width);
 `, [N(">", [Re("scrollbar", `
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]), ue("vertical--left", `
 top: var(--n-scrollbar-rail-top-vertical-left); 
 right: var(--n-scrollbar-rail-right-vertical-left); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-left); 
 left: var(--n-scrollbar-rail-left-vertical-left); 
 `), ue("vertical--right", `
 top: var(--n-scrollbar-rail-top-vertical-right); 
 right: var(--n-scrollbar-rail-right-vertical-right); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-right); 
 left: var(--n-scrollbar-rail-left-vertical-right); 
 `), ue("disabled", [N(">", [Re("scrollbar", "pointer-events: none;")])]), N(">", [Re("scrollbar", `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [kc(), N("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), Gc = Object.assign(Object.assign({}, Oe.props), {
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
}), Kc = se({
  name: "Scrollbar",
  props: Gc,
  inheritAttrs: !1,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: n,
      mergedRtlRef: r
    } = $n(e), o = Bc("Scrollbar", r, t), i = P(null), a = P(null), s = P(null), l = P(null), u = P(null), v = P(null), y = P(null), p = P(null), w = P(null), d = P(null), g = P(null), h = P(0), c = P(0), _ = P(!1), A = P(!1);
    let z = !1, D = !1, B, f, b = 0, C = 0, x = 0, R = 0;
    const F = aa(), j = Oe("Scrollbar", "-scrollbar", Xc, Vc, e, t), W = I(() => {
      const {
        value: m
      } = p, {
        value: E
      } = v, {
        value: $
      } = d;
      return m === null || E === null || $ === null ? 0 : Math.min(m, $ * m / E + Jn(j.value.self.width) * 1.5);
    }), S = I(() => `${W.value}px`), M = I(() => {
      const {
        value: m
      } = w, {
        value: E
      } = y, {
        value: $
      } = g;
      return m === null || E === null || $ === null ? 0 : $ * m / E + Jn(j.value.self.height) * 1.5;
    }), U = I(() => `${M.value}px`), K = I(() => {
      const {
        value: m
      } = p, {
        value: E
      } = h, {
        value: $
      } = v, {
        value: H
      } = d;
      if (m === null || $ === null || H === null)
        return 0;
      {
        const k = $ - m;
        return k ? E / k * (H - W.value) : 0;
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
        const k = $ - m;
        return k ? E / k * (H - M.value) : 0;
      }
    }), de = I(() => `${Y.value}px`), gt = I(() => {
      const {
        value: m
      } = p, {
        value: E
      } = v;
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
      return m === "none" || _.value;
    }), ri = I(() => {
      const {
        trigger: m
      } = e;
      return m === "none" || A.value;
    }), $e = I(() => {
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
        Ne(m, E ?? 0, 0, !1, "auto");
        return;
      }
      const {
        left: $,
        top: H,
        index: k,
        elSize: ee,
        position: le,
        behavior: V,
        el: oe,
        debounce: be = !0
      } = m;
      ($ !== void 0 || H !== void 0) && Ne($ ?? 0, H ?? 0, 0, !1, V), oe !== void 0 ? Ne(0, oe.offsetTop, oe.offsetHeight, be, V) : k !== void 0 && ee !== void 0 ? Ne(0, k * ee, ee, be, V) : le === "bottom" ? Ne(0, Number.MAX_SAFE_INTEGER, 0, !1, V) : le === "top" && Ne(0, 0, 0, !1, V);
    }, Vn = la(() => {
      e.container || Un({
        top: h.value,
        left: c.value
      });
    }), ii = () => {
      Vn.isDeactivated || Te();
    }, ai = (m) => {
      if (Vn.isDeactivated) return;
      const {
        onResize: E
      } = e;
      E && E(m), Te();
    }, si = (m, E) => {
      if (!e.scrollable) return;
      const {
        value: $
      } = $e;
      $ && (typeof m == "object" ? $.scrollBy(m) : $.scrollBy(m, E || 0));
    };
    function Ne(m, E, $, H, k) {
      const {
        value: ee
      } = $e;
      if (ee) {
        if (H) {
          const {
            scrollTop: le,
            offsetHeight: V
          } = ee;
          if (E > le) {
            E + $ <= le + V || ee.scrollTo({
              left: m,
              top: E + $ - V,
              behavior: k
            });
            return;
          }
        }
        ee.scrollTo({
          left: m,
          top: E,
          behavior: k
        });
      }
    }
    function li() {
      fi(), pi(), Te();
    }
    function ui() {
      Ut();
    }
    function Ut() {
      di(), ci();
    }
    function di() {
      f !== void 0 && window.clearTimeout(f), f = window.setTimeout(() => {
        A.value = !1;
      }, e.duration);
    }
    function ci() {
      B !== void 0 && window.clearTimeout(B), B = window.setTimeout(() => {
        _.value = !1;
      }, e.duration);
    }
    function fi() {
      B !== void 0 && window.clearTimeout(B), _.value = !0;
    }
    function pi() {
      f !== void 0 && window.clearTimeout(f), A.value = !0;
    }
    function hi(m) {
      const {
        onScroll: E
      } = e;
      E && E(m), kn();
    }
    function kn() {
      const {
        value: m
      } = $e;
      m && (h.value = m.scrollTop, c.value = m.scrollLeft * (o != null && o.value ? -1 : 1));
    }
    function vi() {
      const {
        value: m
      } = oi;
      m && (v.value = m.offsetHeight, y.value = m.offsetWidth);
      const {
        value: E
      } = $e;
      E && (p.value = E.offsetHeight, w.value = E.offsetWidth);
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
      } = $e;
      m && (h.value = m.scrollTop, c.value = m.scrollLeft * (o != null && o.value ? -1 : 1), p.value = m.offsetHeight, w.value = m.offsetWidth, v.value = m.scrollHeight, y.value = m.scrollWidth);
      const {
        value: E
      } = u, {
        value: $
      } = l;
      E && (g.value = E.offsetWidth), $ && (d.value = $.offsetHeight);
    }
    function Te() {
      e.scrollable && (e.useUnifiedContainer ? Xn() : (vi(), kn()));
    }
    function Gn(m) {
      var E;
      return !(!((E = i.value) === null || E === void 0) && E.contains(Mt(m)));
    }
    function gi(m) {
      m.preventDefault(), m.stopPropagation(), D = !0, Q("mousemove", window, Kn, !0), Q("mouseup", window, Yn, !0), C = c.value, x = o != null && o.value ? window.innerWidth - m.clientX : m.clientX;
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
      } = M;
      if (E === null || $ === null) return;
      const ee = (o != null && o.value ? window.innerWidth - m.clientX - x : m.clientX - x) * ($ - E) / (E - H), le = $ - E;
      let V = C + ee;
      V = Math.min(le, V), V = Math.max(V, 0);
      const {
        value: oe
      } = $e;
      if (oe) {
        oe.scrollLeft = V * (o != null && o.value ? -1 : 1);
        const {
          internalOnUpdateScrollLeft: be
        } = e;
        be && be(V);
      }
    }
    function Yn(m) {
      m.preventDefault(), m.stopPropagation(), G("mousemove", window, Kn, !0), G("mouseup", window, Yn, !0), D = !1, Te(), Gn(m) && Ut();
    }
    function mi(m) {
      m.preventDefault(), m.stopPropagation(), z = !0, Q("mousemove", window, Vt, !0), Q("mouseup", window, kt, !0), b = h.value, R = m.clientY;
    }
    function Vt(m) {
      if (!z) return;
      B !== void 0 && window.clearTimeout(B), f !== void 0 && window.clearTimeout(f);
      const {
        value: E
      } = p, {
        value: $
      } = v, {
        value: H
      } = W;
      if (E === null || $ === null) return;
      const ee = (m.clientY - R) * ($ - E) / (E - H), le = $ - E;
      let V = b + ee;
      V = Math.min(le, V), V = Math.max(V, 0);
      const {
        value: oe
      } = $e;
      oe && (oe.scrollTop = V);
    }
    function kt(m) {
      m.preventDefault(), m.stopPropagation(), G("mousemove", window, Vt, !0), G("mouseup", window, kt, !0), z = !1, Te(), Gn(m) && Ut();
    }
    Ke(() => {
      const {
        value: m
      } = Wn, {
        value: E
      } = gt, {
        value: $
      } = t, {
        value: H
      } = u, {
        value: k
      } = l;
      H && (m ? H.classList.remove(`${$}-scrollbar-rail--disabled`) : H.classList.add(`${$}-scrollbar-rail--disabled`)), k && (E ? k.classList.remove(`${$}-scrollbar-rail--disabled`) : k.classList.add(`${$}-scrollbar-rail--disabled`));
    }), De(() => {
      e.container || Te();
    }), Ce(() => {
      B !== void 0 && window.clearTimeout(B), f !== void 0 && window.clearTimeout(f), G("mousemove", window, Vt, !0), G("mouseup", window, kt, !0);
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
          width: k,
          borderRadius: ee,
          railInsetHorizontalTop: le,
          railInsetHorizontalBottom: V,
          railInsetVerticalRight: oe,
          railInsetVerticalLeft: be,
          railColor: bi
        }
      } = j.value, {
        top: wi,
        right: yi,
        bottom: Si,
        left: xi
      } = ot(le), {
        top: _i,
        right: Ci,
        bottom: Ei,
        left: Oi
      } = ot(V), {
        top: $i,
        right: Ti,
        bottom: Pi,
        left: Mi
      } = ot(o != null && o.value ? xr(oe) : oe), {
        top: Ai,
        right: Ri,
        bottom: zi,
        left: Ii
      } = ot(o != null && o.value ? xr(be) : be);
      return {
        "--n-scrollbar-bezier": m,
        "--n-scrollbar-color": E,
        "--n-scrollbar-color-hover": $,
        "--n-scrollbar-border-radius": ee,
        "--n-scrollbar-width": k,
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
        "--n-scrollbar-rail-bottom-vertical-left": zi,
        "--n-scrollbar-rail-left-vertical-left": Ii,
        "--n-scrollbar-rail-color": bi
      };
    }), je = n ? Ao("scrollbar", void 0, Zn, e) : void 0;
    return Object.assign(Object.assign({}, {
      scrollTo: Un,
      scrollBy: si,
      sync: Te,
      syncUnifiedContainer: Xn,
      handleMouseEnterWrapper: li,
      handleMouseLeaveWrapper: ui
    }), {
      mergedClsPrefix: t,
      rtlEnabled: o,
      containerScrollTop: h,
      wrapperRef: i,
      containerRef: a,
      contentRef: s,
      yRailRef: l,
      xRailRef: u,
      needYBar: gt,
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
      themeClass: je == null ? void 0 : je.themeClass,
      onRender: je == null ? void 0 : je.onRender
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
    const u = this.trigger === "none", v = (w, d) => T("div", {
      ref: "yRailRef",
      class: [`${n}-scrollbar-rail`, `${n}-scrollbar-rail--vertical`, `${n}-scrollbar-rail--vertical--${a}`, w],
      "data-scrollbar-rail": !0,
      style: [d || "", this.verticalRailStyle],
      "aria-hidden": !0
    }, T(u ? $r : un, u ? null : {
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
      return (w = this.onRender) === null || w === void 0 || w.call(this), T("div", Cn(this.$attrs, {
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
      })), i ? null : v(void 0, void 0), l && T("div", {
        ref: "xRailRef",
        class: [`${n}-scrollbar-rail`, `${n}-scrollbar-rail--horizontal`, `${n}-scrollbar-rail--horizontal--${s}`],
        style: this.horizontalRailStyle,
        "data-scrollbar-rail": !0,
        "aria-hidden": !0
      }, T(u ? $r : un, u ? null : {
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
    }, p = this.container ? y() : T(yr, {
      onResize: this.handleContainerResize
    }, {
      default: y
    });
    return i ? T(qe, null, p, v(this.themeClass, this.cssVars)) : p;
  }
}), Yc = Kc, Zc = {
  space: "6px",
  spaceArrow: "10px",
  arrowOffset: "10px",
  arrowOffsetVertical: "10px",
  arrowHeight: "6px",
  padding: "8px 14px"
};
function qc(e) {
  const {
    boxShadow2: t,
    popoverColor: n,
    textColor2: r,
    borderRadius: o,
    fontSize: i,
    dividerColor: a
  } = e;
  return Object.assign(Object.assign({}, Zc), {
    fontSize: i,
    borderRadius: o,
    color: n,
    dividerColor: a,
    textColor: r,
    boxShadow: t
  });
}
const Qo = {
  name: "Popover",
  common: jn,
  self: qc
}, an = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, X = "var(--n-arrow-height) * 1.414", Jc = N([ne("popover", `
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
 `)]), Qt("raw", `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [Qt("scrollable", [Qt("show-header-or-footer", "padding: var(--n-padding);")])]), Re("header", `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), Re("footer", `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), ue("scrollable, show-header-or-footer", [Re("content", `
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
 `), ...Ic({
  top: ["right-start", "left-start"],
  right: ["top-end", "bottom-end"],
  bottom: ["right-end", "left-end"],
  left: ["top-start", "bottom-start"]
}, (e, t) => {
  const n = ["right", "left"].includes(t), r = n ? "width" : "height";
  return e.map((o) => {
    const i = o.split("-")[1] === "end", s = `calc((${`var(--v-target-${r}, 0px)`} - ${X}) / 2)`, l = he(o);
    return N(`[v-placement="${o}"] >`, [ne("popover-shared", [ue("center-arrow", [ne("popover-arrow", `${t}: calc(max(${s}, ${l}) ${i ? "+" : "-"} var(--v-offset-${n ? "left" : "top"}));`)])])]);
  });
})]);
function he(e) {
  return ["top", "bottom"].includes(e.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)";
}
function ie(e, t) {
  const n = e.split("-")[0], r = ["top", "bottom"].includes(n) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
  return N(`[v-placement="${e}"] >`, [ne("popover-shared", `
 margin-${an[n]}: var(--n-space);
 `, [ue("show-arrow", `
 margin-${an[n]}: var(--n-space-arrow);
 `), ue("overlap", `
 margin: 0;
 `), Bs("popover-arrow-wrapper", `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${an[n]}: auto;
 ${r}
 `, [ne("popover-arrow", t)])])]);
}
const ei = Object.assign(Object.assign({}, Oe.props), {
  to: Ye.propTo,
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
function Qc({
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
const ef = se({
  name: "PopoverBody",
  inheritAttrs: !1,
  props: ei,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    const {
      namespaceRef: r,
      mergedClsPrefixRef: o,
      inlineThemeDisabled: i
    } = $n(e), a = Oe("Popover", "-popover", Jc, Qo, e, o), s = P(null), l = re("NPopover"), u = P(null), v = P(e.show), y = P(!1);
    Ke(() => {
      const {
        show: f
      } = e;
      f && !Ds() && !e.internalDeactivateImmediately && (y.value = !0);
    });
    const p = I(() => {
      const {
        trigger: f,
        onClickoutside: b
      } = e, C = [], {
        positionManuallyRef: {
          value: x
        }
      } = l;
      return x || (f === "click" && !b && C.push([tr, z, void 0, {
        capture: !0
      }]), f === "hover" && C.push([Ea, A])), b && C.push([tr, z, void 0, {
        capture: !0
      }]), (e.displayDirective === "show" || e.animated && y.value) && C.push([ji, e.show]), C;
    }), w = I(() => {
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
          fontSize: j,
          textColor: W,
          dividerColor: S,
          color: M,
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
        "--n-color": M,
        "--n-divider-color": S,
        "--n-border-radius": K,
        "--n-arrow-height": J,
        "--n-arrow-offset": Y,
        "--n-arrow-offset-vertical": de,
        "--n-padding": F,
        "--n-space": x,
        "--n-space-arrow": R
      };
    }), d = I(() => {
      const f = e.width === "trigger" ? void 0 : Jt(e.width), b = [];
      f && b.push({
        width: f
      });
      const {
        maxWidth: C,
        minWidth: x
      } = e;
      return C && b.push({
        maxWidth: Jt(C)
      }), x && b.push({
        maxWidth: Jt(x)
      }), i || b.push(w.value), b;
    }), g = i ? Ao("popover", void 0, w, e) : void 0;
    l.setBodyInstance({
      syncPosition: h
    }), Ce(() => {
      l.setBodyInstance(null);
    }), ve(Se(e, "show"), (f) => {
      e.animated || (f ? v.value = !0 : v.value = !1);
    });
    function h() {
      var f;
      (f = s.value) === null || f === void 0 || f.syncPosition();
    }
    function c(f) {
      e.trigger === "hover" && e.keepAliveOnHover && e.show && l.handleMouseEnter(f);
    }
    function _(f) {
      e.trigger === "hover" && e.keepAliveOnHover && l.handleMouseLeave(f);
    }
    function A(f) {
      e.trigger === "hover" && !D().contains(Mt(f)) && l.handleMouseMoveOutside(f);
    }
    function z(f) {
      (e.trigger === "click" && !D().contains(Mt(f)) || e.onClickoutside) && l.handleClickOutside(f);
    }
    function D() {
      return l.getTriggerElement();
    }
    at(so, u), at(io, null), at(ao, null);
    function B() {
      if (g == null || g.onRender(), !(e.displayDirective === "show" || e.show || e.animated && y.value))
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
          [`${x}-popover-shared`, g == null ? void 0 : g.themeClass.value, e.overlap && `${x}-popover-shared--overlap`, e.showArrow && `${x}-popover-shared--show-arrow`, e.arrowPointToCenter && `${x}-popover-shared--center-arrow`],
          u,
          d.value,
          c,
          _
        );
      else {
        const {
          value: R
        } = l.extraClassRef, {
          internalTrapFocus: F
        } = e, j = !Or(t.header) || !Or(t.footer), W = () => {
          var S, M;
          const U = j ? T(qe, null, tn(t.header, (Y) => Y ? T("div", {
            class: [`${x}-popover__header`, e.headerClass],
            style: e.headerStyle
          }, Y) : null), tn(t.default, (Y) => Y ? T("div", {
            class: [`${x}-popover__content`, e.contentClass],
            style: e.contentStyle
          }, t) : null), tn(t.footer, (Y) => Y ? T("div", {
            class: [`${x}-popover__footer`, e.footerClass],
            style: e.footerStyle
          }, Y) : null)) : e.scrollable ? (S = t.default) === null || S === void 0 ? void 0 : S.call(t) : T("div", {
            class: [`${x}-popover__content`, e.contentClass],
            style: e.contentStyle
          }, t), K = e.scrollable ? T(Yc, {
            contentClass: j ? void 0 : `${x}-popover__content ${(M = e.contentClass) !== null && M !== void 0 ? M : ""}`,
            contentStyle: j ? void 0 : e.contentStyle
          }, {
            default: () => U
          }) : U, J = e.showArrow ? Qc({
            arrowClass: e.arrowClass,
            arrowStyle: e.arrowStyle,
            arrowWrapperClass: e.arrowWrapperClass,
            arrowWrapperStyle: e.arrowWrapperStyle,
            clsPrefix: x
          }) : null;
          return [K, J];
        };
        b = T("div", Cn({
          class: [`${x}-popover`, `${x}-popover-shared`, g == null ? void 0 : g.themeClass.value, R.map((S) => `${x}-${S}`), {
            [`${x}-popover--scrollable`]: e.scrollable,
            [`${x}-popover--show-header-or-footer`]: j,
            [`${x}-popover--raw`]: e.raw,
            [`${x}-popover-shared--overlap`]: e.overlap,
            [`${x}-popover-shared--show-arrow`]: e.showArrow,
            [`${x}-popover-shared--center-arrow`]: e.arrowPointToCenter
          }],
          ref: u,
          style: d.value,
          onKeydown: l.handleKeydown,
          onMouseenter: c,
          onMouseleave: _
        }, n), F ? T(Ts, {
          active: e.show,
          autoFocus: !0
        }, {
          default: W
        }) : W());
      }
      return Dt(b, p.value);
    }
    return {
      displayed: y,
      namespace: r,
      isMounted: l.isMountedRef,
      zIndex: l.zIndexRef,
      followerRef: s,
      adjustedTo: Ye(e),
      followerEnabled: v,
      renderContentNode: B
    };
  },
  render() {
    return T(os, {
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
      teleportDisabled: this.adjustedTo === Ye.tdkey
    }, {
      default: () => this.animated ? T(un, {
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
var tf = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_21460_PJDHIKOZPECWZFUP", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.96.4", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-32603f9735-sock", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
const nf = Object.keys(ei), rf = {
  focus: ["onFocus", "onBlur"],
  click: ["onClick"],
  hover: ["onMouseenter", "onMouseleave"],
  manual: [],
  nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"]
};
function of(e, t, n) {
  rf[t].forEach((r) => {
    e.props ? e.props = Object.assign({}, e.props) : e.props = {};
    const o = e.props[r], i = n[r];
    o ? e.props[r] = (...a) => {
      o(...a), i(...a);
    } : e.props[r] = i;
  });
}
const ti = {
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
  to: Ye.propTo,
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
}, af = Object.assign(Object.assign(Object.assign({}, Oe.props), ti), {
  internalOnAfterLeave: Function,
  internalRenderBody: Function
}), sf = se({
  name: "Popover",
  inheritAttrs: !1,
  props: af,
  slots: Object,
  __popover__: !0,
  setup(e) {
    tf.NODE_ENV !== "production" && Ke(() => {
      e.maxWidth !== void 0 && nt("popover", "`max-width` is deprecated, please use `style` instead."), e.minWidth !== void 0 && nt("popover", "`min-width` is deprecated, please use `style` instead."), e.arrow !== void 0 && nt("popover", "`arrow` is deprecated, please use `showArrow` instead."), e.onHide !== void 0 && nt("popover", "`on-hide` is deprecated, please use `on-update:show` instead."), e.onShow !== void 0 && nt("popover", "`on-show` is deprecated, please use `on-update:show` instead.");
    });
    const t = oo(), n = P(null), r = I(() => e.show), o = P(e.defaultShow), i = ra(r, o), a = ct(() => e.disabled ? !1 : i.value), s = () => {
      if (e.disabled) return !0;
      const {
        getDisabled: S
      } = e;
      return !!(S != null && S());
    }, l = () => s() ? !1 : i.value, u = oa(e, ["arrow", "showArrow"]), v = I(() => e.overlap ? !1 : u.value);
    let y = null;
    const p = P(null), w = P(null), d = ct(() => e.x !== void 0 && e.y !== void 0);
    function g(S) {
      const {
        "onUpdate:show": M,
        onUpdateShow: U,
        onShow: K,
        onHide: J
      } = e;
      o.value = S, M && it(M, S), U && it(U, S), S && K && it(K, !0), S && J && it(J, !1);
    }
    function h() {
      y && y.syncPosition();
    }
    function c() {
      const {
        value: S
      } = p;
      S && (window.clearTimeout(S), p.value = null);
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
        if (_(), p.value !== null || l()) return;
        const M = () => {
          g(!0), p.value = null;
        }, {
          delay: U
        } = e;
        U === 0 ? M() : p.value = window.setTimeout(M, U);
      }
    }
    function B() {
      const S = s();
      if (e.trigger === "hover" && !S) {
        if (c(), w.value !== null || !l()) return;
        const M = () => {
          g(!1), w.value = null;
        }, {
          duration: U
        } = e;
        U === 0 ? M() : w.value = window.setTimeout(M, U);
      }
    }
    function f() {
      B();
    }
    function b(S) {
      var M;
      l() && (e.trigger === "click" && (c(), _(), g(!1)), (M = e.onClickoutside) === null || M === void 0 || M.call(e, S));
    }
    function C() {
      if (e.trigger === "click" && !s()) {
        c(), _();
        const S = !l();
        g(S);
      }
    }
    function x(S) {
      e.internalTrapFocus && S.key === "Escape" && (c(), _(), g(!1));
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
    return at("NPopover", {
      getTriggerElement: F,
      handleKeydown: x,
      handleMouseEnter: D,
      handleMouseLeave: B,
      handleClickOutside: b,
      handleMouseMoveOutside: f,
      setBodyInstance: j,
      positionManuallyRef: d,
      isMountedRef: t,
      zIndexRef: Se(e, "zIndex"),
      extraClassRef: Se(e, "internalExtraClass"),
      internalRenderBodyRef: Se(e, "internalRenderBody")
    }), Ke(() => {
      i.value && s() && g(!1);
    }), {
      binderInstRef: n,
      positionManually: d,
      mergedShowConsideringDisabledProp: a,
      // if to show popover body
      uncontrolledShow: o,
      mergedShowArrow: v,
      getMergedShow: l,
      setShow: R,
      handleClick: C,
      handleMouseEnter: D,
      handleMouseLeave: B,
      handleFocus: A,
      handleBlur: z,
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
    if (!t && (r = Hs(n, "trigger"), r)) {
      r = Wi(r), r = r.type === Ui ? T("span", [r]) : r;
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
            s.forEach((v) => {
              v.onBlur(u);
            });
          },
          onFocus: (u) => {
            s.forEach((v) => {
              v.onFocus(u);
            });
          },
          onClick: (u) => {
            s.forEach((v) => {
              v.onClick(u);
            });
          },
          onMouseenter: (u) => {
            s.forEach((v) => {
              v.onMouseenter(u);
            });
          },
          onMouseleave: (u) => {
            s.forEach((v) => {
              v.onMouseleave(u);
            });
          }
        };
        of(r, a ? "nested" : t ? "manual" : this.trigger, l);
      }
    }
    return T(_a, {
      ref: "binderInstRef",
      syncTarget: !o,
      syncTargetWithParent: this.internalSyncTargetWithParent
    }, {
      default: () => {
        this.mergedShowConsideringDisabledProp;
        const i = this.getMergedShow();
        return [this.internalTrapFocus && i ? Dt(T("div", {
          style: {
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }), [[ho, {
          enabled: i,
          zIndex: this.zIndex
        }]]) : null, t ? null : T(Ca, null, {
          default: () => r
        }), T(ef, Ls(this.$props, nf, Object.assign(Object.assign({}, this.$attrs), {
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
}), lf = {
  padding: "8px 14px"
};
function uf(e) {
  const {
    borderRadius: t,
    boxShadow2: n,
    baseColor: r
  } = e;
  return Object.assign(Object.assign({}, lf), {
    borderRadius: t,
    boxShadow: n,
    color: co(r, "rgba(0, 0, 0, .85)"),
    textColor: r
  });
}
const df = {
  name: "Tooltip",
  common: jn,
  peers: {
    Popover: Qo
  },
  self: uf
}, cf = Object.assign(Object.assign({}, ti), Oe.props), ff = se({
  name: "Tooltip",
  props: cf,
  slots: Object,
  __popover__: !0,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = $n(e), n = Oe("Tooltip", "-tooltip", void 0, df, e, t), r = P(null);
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
      popoverThemeOverrides: I(() => n.value.self)
    });
  },
  render() {
    const {
      mergedTheme: e,
      internalExtraClass: t
    } = this;
    return T(sf, Object.assign(Object.assign({}, this.$props), {
      theme: e.peers.Popover,
      themeOverrides: e.peerOverrides.Popover,
      builtinThemeOverrides: this.popoverThemeOverrides,
      internalExtraClass: t.concat("tooltip"),
      ref: "popoverRef"
    }), this.$slots);
  }
}), pf = { class: "lc-tooltip" }, hf = { class: "lc-tooltip__content" }, vf = /* @__PURE__ */ se({
  __name: "Tooltip",
  setup(e) {
    return (t, n) => (Vi(), ki("div", pf, [
      Xi(
        Gi(ff),
        Cn({
          trigger: "hover",
          class: "lc-n-tooltip",
          "arrow-class": "lc-tooltip-arrow-class"
        }, t.$attrs),
        {
          trigger: qn(() => [
            ln(t.$slots, "trigger", {}, () => [
              n[0] || (n[0] = We(
                "div",
                { class: "lc-tooltip__trigger_icon" },
                [
                  We("svg", {
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 512 512",
                    "enable-background": "new 0 0 512 512",
                    "xml:space": "preserve"
                  }, [
                    We("path", { d: `M256,90c44.3,0,86,17.3,117.4,48.6C404.7,170,422,211.7,422,256s-17.3,86-48.6,117.4C342,404.7,300.3,422,256,422\r
	s-86-17.3-117.4-48.6C107.3,342,90,300.3,90,256s17.3-86,48.6-117.4C170,107.3,211.7,90,256,90 M256,48C141.1,48,48,141.1,48,256\r
	s93.1,208,208,208s208-93.1,208-208S370.9,48,256,48L256,48z` }),
                    We("g", null, [
                      We("path", { d: "M277,360h-42V235h42V360z M277,194h-42v-42h42V194z" })
                    ])
                  ])
                ],
                -1
                /* HOISTED */
              ))
            ], !0)
          ]),
          default: qn(() => [
            We("div", hf, [
              ln(t.$slots, "default", {}, void 0, !0)
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
}), gf = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, yf = /* @__PURE__ */ gf(vf, [["__scopeId", "data-v-9199e3ea"]]);
export {
  yf as LcTooltip
};
