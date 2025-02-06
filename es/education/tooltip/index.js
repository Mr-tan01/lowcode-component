// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { ref as P, readonly as sn, watch as ve, computed as z, onMounted as De, onBeforeUnmount as _e, inject as re, onActivated as Bi, onDeactivated as Di, createTextVNode as eo, Fragment as Ze, Comment as Cn, defineComponent as se, provide as at, getCurrentInstance as to, withDirectives as Dt, toRef as Se, h as T, Teleport as Fi, nextTick as Hi, renderSlot as ln, isVNode as Ni, shallowRef as Wi, watchEffect as Ke, onBeforeMount as no, Transition as un, mergeProps as _n, vShow as Li, cloneVNode as ji, Text as Ui, openBlock as ki, createElementBlock as Vi, createVNode as Gi, unref as Xi, withCtx as Zn, createElementVNode as je } from "vue";
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
function Ji(e, t, n, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const o = ro(e, t, n);
    return Object.keys(o).forEach((i) => {
      Q(i, document, o[i], r);
    }), !0;
  }
  return !1;
}
function Zi(e, t, n, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const o = ro(e, t, n);
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
  function o(f, b, _) {
    const x = f[b];
    return f[b] = function() {
      return _.apply(f, arguments), x.apply(f, arguments);
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
      const { type: _, eventPhase: x, bubbles: R } = b, F = $t(b);
      if (x === 2)
        return;
      const L = x === 1 ? "capture" : "bubble";
      let j = F;
      const S = [];
      for (; j === null && (j = window), S.push(j), j !== window; )
        j = j.parentNode || null;
      const M = v.capture[_], U = v.bubble[_];
      if (o(b, "stopPropagation", n), o(b, "stopImmediatePropagation", r), u(b, l), L === "capture") {
        if (M === void 0)
          return;
        for (let K = S.length - 1; K >= 0 && !e.has(b); --K) {
          const q = S[K], Y = M.get(q);
          if (Y !== void 0) {
            a.set(b, q);
            for (const ce of Y) {
              if (t.has(b))
                break;
              ce(b);
            }
          }
          if (K === 0 && !R && U !== void 0) {
            const ce = U.get(q);
            if (ce !== void 0)
              for (const mt of ce) {
                if (t.has(b))
                  break;
                mt(b);
              }
          }
        }
      } else if (L === "bubble") {
        if (U === void 0)
          return;
        for (let K = 0; K < S.length && !e.has(b); ++K) {
          const q = S[K], Y = U.get(q);
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
      const { type: _, eventPhase: x } = b;
      if (x !== 2)
        return;
      const R = y[_];
      R !== void 0 && R.forEach((F) => F(b));
    };
    return f.displayName = "evtdUnifiedWindowEventHandler", f;
  }
  const c = p(), m = w();
  function h(f, b) {
    const _ = v[f];
    return _[b] === void 0 && (_[b] = /* @__PURE__ */ new Map(), window.addEventListener(b, c, f === "capture")), _[b];
  }
  function d(f) {
    return y[f] === void 0 && (y[f] = /* @__PURE__ */ new Set(), window.addEventListener(f, m)), y[f];
  }
  function C(f, b) {
    let _ = f.get(b);
    return _ === void 0 && f.set(b, _ = /* @__PURE__ */ new Set()), _;
  }
  function A(f, b, _, x) {
    const R = v[b][_];
    if (R !== void 0) {
      const F = R.get(f);
      if (F !== void 0 && F.has(x))
        return !0;
    }
    return !1;
  }
  function I(f, b) {
    const _ = y[f];
    return !!(_ !== void 0 && _.has(b));
  }
  function D(f, b, _, x) {
    let R;
    if (typeof x == "object" && x.once === !0 ? R = (M) => {
      B(f, b, R, x), _(M);
    } : R = _, Ji(f, b, R, x))
      return;
    const L = x === !0 || typeof x == "object" && x.capture === !0 ? "capture" : "bubble", j = h(L, f), S = C(j, b);
    if (S.has(R) || S.add(R), b === window) {
      const M = d(f);
      M.has(R) || M.add(R);
    }
  }
  function B(f, b, _, x) {
    if (Zi(f, b, _, x))
      return;
    const F = x === !0 || typeof x == "object" && x.capture === !0, L = F ? "capture" : "bubble", j = h(L, f), S = C(j, b);
    if (b === window && !A(b, F ? "bubble" : "capture", f, _) && I(f, _)) {
      const U = y[f];
      U.delete(_), U.size === 0 && (window.removeEventListener(f, m), y[f] = void 0);
    }
    S.has(_) && S.delete(_), S.size === 0 && j.delete(b), j.size === 0 && (window.removeEventListener(f, c, L === "capture"), v[L][f] = void 0);
  }
  return {
    on: D,
    off: B
  };
}
const { on: Q, off: X } = qi();
function Qi(e) {
  const t = P(!!e.value);
  if (t.value)
    return sn(t);
  const n = ve(e, (r) => {
    r && (t.value = !0, n());
  });
  return sn(t);
}
function dt(e) {
  const t = z(e), n = P(t.value);
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
let Ge, st;
const ta = () => {
  var e, t;
  Ge = ea ? (t = (e = document) === null || e === void 0 ? void 0 : e.fonts) === null || t === void 0 ? void 0 : t.ready : void 0, st = !1, Ge !== void 0 ? Ge.then(() => {
    st = !0;
  }) : st = !0;
};
ta();
function na(e) {
  if (st)
    return;
  let t = !1;
  De(() => {
    st || Ge == null || Ge.then(() => {
      t || e();
    });
  }), _e(() => {
    t = !0;
  });
}
function ra(e, t) {
  return ve(e, (n) => {
    n !== void 0 && (t.value = n);
  }), z(() => e.value === void 0 ? t.value : e.value);
}
function oo() {
  const e = P(!1);
  return De(() => {
    e.value = !0;
  }), sn(e);
}
function oa(e, t) {
  return z(() => {
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
    }), _e(() => {
      X("fullscreenchange", document, a);
    });
  }
  return dt(() => {
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
function ca(e, ...t) {
  uo.set(e, t), !Pt.includes(e) && Pt.push(e) === 1 && requestAnimationFrame(ua);
}
function Mt(e) {
  return e.composedPath()[0] || null;
}
function qn(e) {
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
}, qe = "^\\s*", Qe = "\\s*$", Pe = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", Me = "([0-9A-Fa-f])", Ae = "([0-9A-Fa-f]{2})", da = new RegExp(`${qe}rgb\\s*\\(${Pe},${Pe},${Pe}\\)${Qe}`), fa = new RegExp(`${qe}rgba\\s*\\(${Pe},${Pe},${Pe},${Pe}\\)${Qe}`), pa = new RegExp(`${qe}#${Me}${Me}${Me}${Qe}`), ha = new RegExp(`${qe}#${Ae}${Ae}${Ae}${Qe}`), va = new RegExp(`${qe}#${Me}${Me}${Me}${Me}${Qe}`), ma = new RegExp(`${qe}#${Ae}${Ae}${Ae}${Ae}${Qe}`);
function te(e) {
  return parseInt(e, 16);
}
function Je(e) {
  try {
    let t;
    if (t = ha.exec(e))
      return [te(t[1]), te(t[2]), te(t[3]), 1];
    if (t = da.exec(e))
      return [Z(t[1]), Z(t[5]), Z(t[9]), 1];
    if (t = fa.exec(e))
      return [
        Z(t[1]),
        Z(t[5]),
        Z(t[9]),
        lt(t[13])
      ];
    if (t = pa.exec(e))
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
      return Je(Qn[e]);
    throw new Error(`[seemly/rgba]: Invalid color value ${e}.`);
  } catch (t) {
    throw t;
  }
}
function ga(e) {
  return e > 1 ? 1 : e < 0 ? 0 : e;
}
function ba(e, t, n, r) {
  return `rgba(${Z(e)}, ${Z(t)}, ${Z(n)}, ${ga(r)})`;
}
function Gt(e, t, n, r, o) {
  return Z((e * t * (1 - r) + n * r) / o);
}
function co(e, t) {
  Array.isArray(e) || (e = Je(e)), Array.isArray(t) || (t = Je(t));
  const n = e[3], r = t[3], o = lt(n + r - n * r);
  return ba(Gt(e[0], n, t[0], r, o), Gt(e[1], n, t[1], r, o), Gt(e[2], n, t[2], r, o), o);
}
function gt(e, t) {
  const [n, r, o, i = 1] = Array.isArray(e) ? e : Je(e), { lightness: a = 1, alpha: s = 1 } = t;
  return wa([n * a, r * a, o * a, i * s]);
}
function lt(e) {
  const t = Math.round(Number(e) * 100) / 100;
  return t > 1 ? 1 : t < 0 ? 0 : t;
}
function Z(e) {
  const t = Math.round(Number(e));
  return t > 255 ? 255 : t < 0 ? 0 : t;
}
function wa(e) {
  const [t, n, r] = e;
  return 3 in e ? `rgba(${Z(t)}, ${Z(n)}, ${Z(r)}, ${lt(e[3])})` : `rgba(${Z(t)}, ${Z(n)}, ${Z(r)}, 1)`;
}
function ya(e = 8) {
  return Math.random().toString(16).slice(2, 2 + e);
}
function cn(e, t, n = "default") {
  const r = t[n];
  if (r === void 0)
    throw new Error(`[vueuc/${e}]: slot[${n}] is empty.`);
  return r();
}
function dn(e, t = !0, n = []) {
  return e.forEach((r) => {
    if (r !== null) {
      if (typeof r != "object") {
        (typeof r == "string" || typeof r == "number") && n.push(eo(String(r)));
        return;
      }
      if (Array.isArray(r)) {
        dn(r, t, n);
        return;
      }
      if (r.type === Ze) {
        if (r.children === null)
          return;
        Array.isArray(r.children) && dn(r.children, t, n);
      } else r.type !== Cn && n.push(r);
    }
  }), n;
}
function er(e, t, n = "default") {
  const r = t[n];
  if (r === void 0)
    throw new Error(`[vueuc/${e}]: slot[${n}] is empty.`);
  const o = dn(r());
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
function Xt(e) {
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
const Ca = se({
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
    const n = re("VBinder", null), r = P(null), o = (d) => {
      r.value = d, n && e.syncTargetWithParent && n.setTargetRef(d);
    };
    let i = [];
    const a = () => {
      let d = r.value;
      for (; d = po(d), d !== null; )
        i.push(d);
      for (const C of i)
        Q("scroll", C, y, !0);
    }, s = () => {
      for (const d of i)
        X("scroll", d, y, !0);
      i = [];
    }, l = /* @__PURE__ */ new Set(), u = (d) => {
      l.size === 0 && a(), l.has(d) || l.add(d);
    }, v = (d) => {
      l.has(d) && l.delete(d), l.size === 0 && s();
    }, y = () => {
      ca(p);
    }, p = () => {
      l.forEach((d) => d());
    }, w = /* @__PURE__ */ new Set(), c = (d) => {
      w.size === 0 && Q("resize", window, h), w.has(d) || w.add(d);
    }, m = (d) => {
      w.has(d) && w.delete(d), w.size === 0 && X("resize", window, h);
    }, h = () => {
      w.forEach((d) => d());
    };
    return _e(() => {
      X("resize", window, h), s();
    }), {
      targetRef: r,
      setTargetRef: o,
      addScrollListener: u,
      removeScrollListener: v,
      addResizeListener: c,
      removeResizeListener: m
    };
  },
  render() {
    return cn("binder", this.$slots);
  }
}), _a = se({
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
    typeof t == "function" ? n.handler ? n.handler !== t && (X("mousemoveoutside", e, n.handler), n.handler = t, Q("mousemoveoutside", e, t)) : (e[Ue].handler = t, Q("mousemoveoutside", e, t)) : n.handler && (X("mousemoveoutside", e, n.handler), n.handler = void 0);
  },
  unmounted(e) {
    const { handler: t } = e[Ue];
    t && X("mousemoveoutside", e, t), e[Ue].handler = void 0;
  }
}, ke = "@@coContext", tr = {
  mounted(e, { value: t, modifiers: n }) {
    e[ke] = {
      handler: void 0
    }, typeof t == "function" && (e[ke].handler = t, Q("clickoutside", e, t, {
      capture: n.capture
    }));
  },
  updated(e, { value: t, modifiers: n }) {
    const r = e[ke];
    typeof t == "function" ? r.handler ? r.handler !== t && (X("clickoutside", e, r.handler, {
      capture: n.capture
    }), r.handler = t, Q("clickoutside", e, t, {
      capture: n.capture
    })) : (e[ke].handler = t, Q("clickoutside", e, t, {
      capture: n.capture
    })) : r.handler && (X("clickoutside", e, r.handler, {
      capture: n.capture
    }), r.handler = void 0);
  },
  unmounted(e, { modifiers: t }) {
    const { handler: n } = e[ke];
    n && X("clickoutside", e, n, {
      capture: t.capture
    }), e[ke].handler = void 0;
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
const Kt = new $a(), Ve = "@@ziContext", ho = {
  mounted(e, t) {
    const { value: n = {} } = t, { zIndex: r, enabled: o } = n;
    e[Ve] = {
      enabled: !!o,
      initialized: !1
    }, o && (Kt.ensureZIndex(e, r), e[Ve].initialized = !0);
  },
  updated(e, t) {
    const { value: n = {} } = t, { zIndex: r, enabled: o } = n, i = e[Ve].enabled;
    o && !i && (Kt.ensureZIndex(e, r), e[Ve].initialized = !0), e[Ve].enabled = !!o;
  },
  unmounted(e, t) {
    if (!e[Ve].initialized)
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
const vo = /\s*,(?![^(]*\))\s*/g, Ia = /\s+/g;
function za(e, t) {
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
    n && (n.includes("&") ? t = za(t, n) : t = Ba(t, n));
  }), t.join(", ").replace(Ia, " ");
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
function mo(e) {
  return e.replace(Ha, (t) => "-" + t.toLowerCase());
}
function Na(e, t = "  ") {
  return typeof e == "object" && e !== null ? ` {
` + Object.entries(e).map((n) => t + `  ${mo(n[0])}: ${n[1]};`).join(`
`) + `
` + t + "}" : `: ${e};`;
}
function Wa(e, t, n) {
  return typeof e == "function" ? e({
    context: t.context,
    props: n
  }) : e;
}
function or(e, t, n, r) {
  if (!t)
    return "";
  const o = Wa(t, n, r);
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
    s = mo(s), l != null && a.push(`  ${s}${Na(l)}`);
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
function go(e, t, n, r, o) {
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
      go(u, t, n, r, o);
  }), t.pop(), a && n.push("}"), i && i.after && i.after(r.context);
}
function La(e, t, n) {
  const r = [];
  return go(e, [], r, t, n), r.join(`

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
function ja(e, t, n, r) {
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
function ka(e) {
  return La(this, this.instance, e);
}
function Va(e = {}) {
  const { id: t, ssr: n, props: r, head: o = !1, force: i = !1, anchorMetaName: a, parent: s } = e;
  return Ua(this.instance, this, t, r, o, i, a, s, n);
}
function Ga(e = {}) {
  const { id: t, parent: n } = e;
  ja(this.instance, this, t, n);
}
const wt = function(e, t, n, r) {
  return {
    instance: e,
    $: t,
    props: n,
    children: r,
    els: [],
    render: ka,
    mount: Va,
    unmount: Ga
  };
}, Xa = function(e, t, n, r) {
  return Array.isArray(t) ? wt(e, { $: null }, null, t) : Array.isArray(n) ? wt(e, t, null, n) : Array.isArray(r) ? wt(e, t, n, r) : wt(e, t, n, null);
};
function bo(e = {}) {
  const t = {
    c: (...n) => Xa(t, ...n),
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
const Ja = se({
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
      mergedTo: z(() => {
        const { to: t } = e;
        return t ?? "body";
      })
    };
  },
  render() {
    return this.showTeleport ? this.disabled ? cn("lazy-teleport", this.$slots) : T(Fi, {
      disabled: this.disabled,
      to: this.mergedTo
    }, cn("lazy-teleport", this.$slots)) : null;
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
  const v = (w, c, m) => {
    let h = 0, d = 0;
    const C = n[w] - t[c] - t[w];
    return C > 0 && r && (m ? d = lr[c] ? C : -C : h = lr[c] ? C : -C), {
      left: h,
      top: d
    };
  }, y = a === "left" || a === "right";
  if (l !== "center") {
    const w = Qa[e], c = St[w], m = Yt[w];
    if (n[m] > t[m]) {
      if (
        // current space is not enough
        // ----------[ target ]---------|
        // -------[     follower        ]
        t[w] + t[m] < n[m]
      ) {
        const h = (n[m] - t[m]) / 2;
        t[w] < h || t[c] < h ? t[w] < t[c] ? (l = sr[s], u = v(m, c, y)) : u = v(m, w, y) : l = "center";
      }
    } else n[m] < t[m] && t[c] < 0 && // opposite align has larger space
    // ------------[   target   ]
    // ----------------[follower]
    t[w] > t[c] && (l = sr[s]);
  } else {
    const w = a === "bottom" || a === "top" ? "left" : "top", c = St[w], m = Yt[w], h = (n[m] - t[m]) / 2;
    // center is not enough
    // ----------- [ target ]--|
    // -------[     follower     ]
    (t[w] < h || t[c] < h) && (t[w] > t[c] ? (l = ur[w], u = v(m, w, y)) : (l = ur[c], u = v(m, c, y)));
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
  return t ? qa[e] : Za[e];
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
    const t = re("VBinder"), n = dt(() => e.enabled !== void 0 ? e.enabled : e.show), r = P(null), o = P(null), i = () => {
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
    }), _e(() => {
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
      const w = t.targetRef, { x: c, y: m, overlap: h } = e, d = c !== void 0 && m !== void 0 ? Sa(c, m) : Xt(w);
      p.style.setProperty("--v-target-width", `${Math.round(d.width)}px`), p.style.setProperty("--v-target-height", `${Math.round(d.height)}px`);
      const { width: C, minWidth: A, placement: I, internalShift: D, flip: B } = e;
      p.setAttribute("v-placement", I), h ? p.setAttribute("v-overlap", "") : p.removeAttribute("v-overlap");
      const { style: f } = p;
      C === "target" ? f.width = `${d.width}px` : C !== void 0 ? f.width = C : f.width = "", A === "target" ? f.minWidth = `${d.width}px` : A !== void 0 ? f.minWidth = A : f.minWidth = "";
      const b = Xt(p), _ = Xt(o.value), { left: x, top: R, placement: F } = es(I, d, b, D, B, h), L = ts(F, h), { left: j, top: S, transform: M } = ns(F, _, d, R, x, h);
      p.setAttribute("v-placement", F), p.style.setProperty("--v-offset-left", `${Math.round(x)}px`), p.style.setProperty("--v-offset-top", `${Math.round(R)}px`), p.style.transform = `translateX(${j}) translateY(${S}) ${M}`, p.style.setProperty("--v-transform-origin", L), p.style.transformOrigin = L;
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
    const v = oo(), y = dt(() => {
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
    return T(Ja, {
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
var Ie = [], is = function() {
  return Ie.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, as = function() {
  return Ie.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, cr = "ResizeObserver loop completed with undelivered notifications.", ss = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: cr
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = cr), window.dispatchEvent(e);
}, ft;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(ft || (ft = {}));
var ze = function(e) {
  return Object.freeze(e);
}, ls = /* @__PURE__ */ function() {
  function e(t, n) {
    this.inlineSize = t, this.blockSize = n, ze(this);
  }
  return e;
}(), wo = function() {
  function e(t, n, r, o) {
    return this.x = t, this.y = n, this.width = r, this.height = o, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, ze(this);
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
}, dr = function(e) {
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
}, ut = typeof window < "u" ? window : {}, xt = /* @__PURE__ */ new WeakMap(), fr = /auto|scroll/, cs = /^tb|vertical/, ds = /msie|trident/i.test(ut.navigator && ut.navigator.userAgent), de = function(e) {
  return parseFloat(e || "0");
}, Xe = function(e, t, n) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = !1), new ls((n ? t : e) || 0, (n ? e : t) || 0);
}, pr = ze({
  devicePixelContentBoxSize: Xe(),
  borderBoxSize: Xe(),
  contentBoxSize: Xe(),
  contentRect: new wo(0, 0, 0, 0)
}), So = function(e, t) {
  if (t === void 0 && (t = !1), xt.has(e) && !t)
    return xt.get(e);
  if (yo(e))
    return xt.set(e, pr), pr;
  var n = getComputedStyle(e), r = En(e) && e.ownerSVGElement && e.getBBox(), o = !ds && n.boxSizing === "border-box", i = cs.test(n.writingMode || ""), a = !r && fr.test(n.overflowY || ""), s = !r && fr.test(n.overflowX || ""), l = r ? 0 : de(n.paddingTop), u = r ? 0 : de(n.paddingRight), v = r ? 0 : de(n.paddingBottom), y = r ? 0 : de(n.paddingLeft), p = r ? 0 : de(n.borderTopWidth), w = r ? 0 : de(n.borderRightWidth), c = r ? 0 : de(n.borderBottomWidth), m = r ? 0 : de(n.borderLeftWidth), h = y + u, d = l + v, C = m + w, A = p + c, I = s ? e.offsetHeight - A - e.clientHeight : 0, D = a ? e.offsetWidth - C - e.clientWidth : 0, B = o ? h + C : 0, f = o ? d + A : 0, b = r ? r.width : de(n.width) - B - D, _ = r ? r.height : de(n.height) - f - I, x = b + h + D + C, R = _ + d + I + A, F = ze({
    devicePixelContentBoxSize: Xe(Math.round(b * devicePixelRatio), Math.round(_ * devicePixelRatio), i),
    borderBoxSize: Xe(x, R, i),
    contentBoxSize: Xe(b, _, i),
    contentRect: new wo(y, l, b, _)
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
    this.target = t, this.contentRect = n.contentRect, this.borderBoxSize = ze([n.borderBoxSize]), this.contentBoxSize = ze([n.contentBoxSize]), this.devicePixelContentBoxSize = ze([n.devicePixelContentBoxSize]);
  }
  return e;
}(), Co = function(e) {
  if (yo(e))
    return 1 / 0;
  for (var t = 0, n = e.parentNode; n; )
    t += 1, n = n.parentNode;
  return t;
}, ps = function() {
  var e = 1 / 0, t = [];
  Ie.forEach(function(a) {
    if (a.activeTargets.length !== 0) {
      var s = [];
      a.activeTargets.forEach(function(u) {
        var v = new fs(u.target), y = Co(u.target);
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
  Ie.forEach(function(n) {
    n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(o) {
      o.isActive() && (Co(o.target) > e ? n.activeTargets.push(o) : n.skippedTargets.push(o));
    });
  });
}, hs = function() {
  var e = 0;
  for (hr(e); is(); )
    e = ps(), hr(e);
  return as() && ss(), e > 0;
}, Jt, _o = [], vs = function() {
  return _o.splice(0).forEach(function(e) {
    return e();
  });
}, ms = function(e) {
  if (!Jt) {
    var t = 0, n = document.createTextNode(""), r = { characterData: !0 };
    new MutationObserver(function() {
      return vs();
    }).observe(n, r), Jt = function() {
      n.textContent = "".concat(t ? t-- : t++);
    };
  }
  _o.push(e), Jt();
}, gs = function(e) {
  ms(function() {
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
], mr = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, Zt = !1, Ss = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var n = this;
    if (t === void 0 && (t = ws), !Zt) {
      Zt = !0;
      var r = mr(t);
      gs(function() {
        var o = !1;
        try {
          o = hs();
        } finally {
          if (Zt = !1, t = r - mr(), !bs())
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
}(), hn = new Ss(), gr = function(e) {
  !Tt && e > 0 && hn.start(), Tt += e, !Tt && hn.stop();
}, xs = function(e) {
  return !En(e) && !us(e) && getComputedStyle(e).display === "inline";
}, Cs = function() {
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
}(), _s = /* @__PURE__ */ function() {
  function e(t, n) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = n;
  }
  return e;
}(), Ct = /* @__PURE__ */ new WeakMap(), br = function(e, t) {
  for (var n = 0; n < e.length; n += 1)
    if (e[n].target === t)
      return n;
  return -1;
}, _t = function() {
  function e() {
  }
  return e.connect = function(t, n) {
    var r = new _s(t, n);
    Ct.set(t, r);
  }, e.observe = function(t, n, r) {
    var o = Ct.get(t), i = o.observationTargets.length === 0;
    br(o.observationTargets, n) < 0 && (i && Ie.push(o), o.observationTargets.push(new Cs(n, r && r.box)), gr(1), hn.schedule());
  }, e.unobserve = function(t, n) {
    var r = Ct.get(t), o = br(r.observationTargets, n), i = r.observationTargets.length === 1;
    o >= 0 && (i && Ie.splice(Ie.indexOf(r), 1), r.observationTargets.splice(o, 1), gr(-1));
  }, e.disconnect = function(t) {
    var n = this, r = Ct.get(t);
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
    _t.connect(this, t);
  }
  return e.prototype.observe = function(t, n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!dr(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    _t.observe(this, t, n);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!dr(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    _t.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    _t.disconnect(this);
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
    }), _e(() => {
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
      var d;
      h.code === "Escape" && s() && ((d = e.onEsc) === null || d === void 0 || d.call(e, h));
    }
    De(() => {
      ve(() => e.active, (h) => {
        h ? (y(), Q("keydown", document, l)) : (X("keydown", document, l), o && p());
      }, {
        immediate: !0
      });
    }), _e(() => {
      X("keydown", document, l), o && p();
    });
    function u(h) {
      if (!i && s()) {
        const d = v();
        if (d === null || d.contains(Mt(h)))
          return;
        w("first");
      }
    }
    function v() {
      const h = n.value;
      if (h === null)
        return null;
      let d = h;
      for (; d = d.nextSibling, !(d === null || d instanceof Element && d.tagName === "DIV"); )
        ;
      return d;
    }
    function y() {
      var h;
      if (!e.disabled) {
        if (tt.push(t), e.autoFocus) {
          const { initialFocusTo: d } = e;
          d === void 0 ? w("first") : (h = ar(d)) === null || h === void 0 || h.focus({ preventScroll: !0 });
        }
        o = !0, document.addEventListener("focus", u, !0);
      }
    }
    function p() {
      var h;
      if (e.disabled || (document.removeEventListener("focus", u, !0), tt = tt.filter((C) => C !== t), s()))
        return;
      const { finalFocusTo: d } = e;
      d !== void 0 ? (h = ar(d)) === null || h === void 0 || h.focus({ preventScroll: !0 }) : e.returnFocusOnDeactivated && a instanceof HTMLElement && (i = !0, a.focus({ preventScroll: !0 }), i = !1);
    }
    function w(h) {
      if (s() && e.active) {
        const d = n.value, C = r.value;
        if (d !== null && C !== null) {
          const A = v();
          if (A == null || A === C) {
            i = !0, d.focus({ preventScroll: !0 }), i = !1;
            return;
          }
          i = !0;
          const I = h === "first" ? Oo(A) : $o(A);
          i = !1, I || (i = !0, d.focus({ preventScroll: !0 }), i = !1);
        }
      }
    }
    function c(h) {
      if (i)
        return;
      const d = v();
      d !== null && (h.relatedTarget !== null && d.contains(h.relatedTarget) ? w("last") : w("first"));
    }
    function m(h) {
      i || (h.relatedTarget !== null && h.relatedTarget === n.value ? w("last") : w("first"));
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
    return T(Ze, null, [
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
function qt(e, {
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
var Cr = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\mmj\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_17748_VZZMJJWFFMGMQMSF", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-QBN3J51", ComSpec: "C:\\WINDOWS\\system32\\cmd.exe", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "d:\\install\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\mmj", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\mmj", INIT_CWD: "F:\\Work\\lowcode\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\mmj\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-QBN3J51", NODE: "C:\\Program Files\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com/", npm_config_user_agent: "pnpm/9.15.4 npm/? node/v18.20.2 win32 x64", npm_execpath: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "C:\\Program Files\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "8", NVM_HOME: "D:\\install\\nvm", NVM_SYMLINK: "C:\\Program Files\\nodejs", OneDrive: "C:\\Users\\mmj\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\Work\\lowcode\\lowcode-component\\scripts\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\Work\\lowcode\\lowcode-component\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\java8path;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Git\\cmd;C:\\Users\\mmj\\AppData\\Local\\Microsoft\\WindowsApps;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Microsoft VS Code\\bin;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\Work\\lowcode\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "AMD64 Family 23 Model 24 Stepping 1, AuthenticAMD", PROCESSOR_LEVEL: "23", PROCESSOR_REVISION: "1801", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\mmj\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\WINDOWS", TEMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.96.4", TMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-QBN3J51", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-QBN3J51", USERNAME: "mmj", USERPROFILE: "C:\\Users\\mmj", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "d:\\install\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "D:\\install\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-780eceaefd-sock", VSCODE_INJECTION: "1", windir: "C:\\WINDOWS" };
function Ms(e) {
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
    let m, h;
    return {
      before(d) {
        m = d.bem.b, h = d.bem.els, d.bem.els = null;
      },
      after(d) {
        d.bem.b = m, d.bem.els = h;
      },
      $({ context: d, props: C }) {
        return c = typeof c == "string" ? c : c({ context: d, props: C }), d.bem.b = c, `${(C == null ? void 0 : C.bPrefix) || t}${d.bem.b}`;
      }
    };
  }
  function s(c) {
    let m;
    return {
      before(h) {
        m = h.bem.els;
      },
      after(h) {
        h.bem.els = m;
      },
      $({ context: h, props: d }) {
        return c = typeof c == "string" ? c : c({ context: h, props: d }), h.bem.els = c.split(",").map((C) => C.trim()), h.bem.els.map((C) => `${(d == null ? void 0 : d.bPrefix) || t}${h.bem.b}${n}${C}`).join(", ");
      }
    };
  }
  function l(c) {
    return {
      $({ context: m, props: h }) {
        c = typeof c == "string" ? c : c({ context: m, props: h });
        const d = c.split(",").map((I) => I.trim());
        function C(I) {
          return d.map((D) => `&${(h == null ? void 0 : h.bPrefix) || t}${m.bem.b}${I !== void 0 ? `${n}${I}` : ""}${r}${D}`).join(", ");
        }
        const A = m.bem.els;
        if (A !== null) {
          if (Cr.NODE_ENV !== "production" && A.length >= 2)
            throw Error(`[css-render/plugin-bem]: m(${c}) is invalid, using modifier inside multiple elements is not allowed`);
          return C(A[0]);
        } else
          return C();
      }
    };
  }
  function u(c) {
    return {
      $({ context: m, props: h }) {
        c = typeof c == "string" ? c : c({ context: m, props: h });
        const d = m.bem.els;
        if (Cr.NODE_ENV !== "production" && d !== null && d.length >= 2)
          throw Error(`[css-render/plugin-bem]: notM(${c}) is invalid, using modifier inside multiple elements is not allowed`);
        return `&:not(${(h == null ? void 0 : h.bPrefix) || t}${m.bem.b}${d !== null && d.length > 0 ? `${n}${d[0]}` : ""}${r}${c})`;
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
const As = "n", Rs = `.${As}-`, Is = "__", zs = "--", Po = bo(), Mo = Ms({
  blockPrefix: Rs,
  elementPrefix: Is,
  modifierPrefix: zs
});
Po.use(Mo);
const {
  c: W,
  find: wf
} = Po, {
  cB: ne,
  cE: Re,
  cM: ue,
  cNotM: Qt
} = Mo, Bs = (...e) => W(">", [ne(...e)]);
let en;
function Ds() {
  return en === void 0 && (en = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")), en;
}
const _r = /* @__PURE__ */ new Set();
function nt(e, t) {
  const n = `[naive/${e}]: ${t}`;
  _r.has(n) || (_r.add(n), console.error(n));
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
      if (r.type === Ze) {
        if (r.children === null) return;
        Array.isArray(r.children) && vn(r.children, t, n);
      } else {
        if (r.type === Cn && t) return;
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
function Ns(e, t = [], n) {
  const r = {};
  return t.forEach((o) => {
    r[o] = e[o];
  }), Object.assign(r, n);
}
function On(e) {
  return e.some((t) => Ni(t) ? !(t.type === Cn || t.type === Ze && !On(t.children)) : !0) ? e : null;
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
}), Nt = "n-config-provider", Ws = "n";
function $n(e = {}, t = {
  defaultBordered: !0
}) {
  const n = re(Nt, null);
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
    mergedClsPrefixRef: n ? n.mergedClsPrefixRef : Wi(Ws),
    namespaceRef: z(() => n == null ? void 0 : n.mergedNamespaceRef.value)
  };
}
function Ao(e, t, n, r) {
  n || Fs("useThemeClass", "cssVarsRef is not passed");
  const o = re(Nt, null), i = o == null ? void 0 : o.mergedThemeHashRef, a = o == null ? void 0 : o.styleMountTarget, s = P(""), l = Ft();
  let u;
  const v = `__${e}`, y = () => {
    let p = v;
    const w = i == null ? void 0 : i.value;
    w && (p += `-${w}`);
    const {
      themeOverrides: c,
      builtinThemeOverrides: m
    } = r;
    c && (p += `-${pn(JSON.stringify(c))}`), m && (p += `-${pn(JSON.stringify(m))}`), s.value = p, u = () => {
      const h = n.value;
      let d = "";
      for (const C in h)
        d += `${C}: ${h[C]};`;
      W(`.${p}`, d).mount({
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
var Ro = typeof global == "object" && global && global.Object === Object && global, Ls = typeof self == "object" && self && self.Object === Object && self, pe = Ro || Ls || Function("return this")(), xe = pe.Symbol, Io = Object.prototype, js = Io.hasOwnProperty, Us = Io.toString, rt = xe ? xe.toStringTag : void 0;
function ks(e) {
  var t = js.call(e, rt), n = e[rt];
  try {
    e[rt] = void 0;
    var r = !0;
  } catch {
  }
  var o = Us.call(e);
  return r && (t ? e[rt] = n : delete e[rt]), o;
}
var Vs = Object.prototype, Gs = Vs.toString;
function Xs(e) {
  return Gs.call(e);
}
var Ks = "[object Null]", Ys = "[object Undefined]", Tr = xe ? xe.toStringTag : void 0;
function Fe(e) {
  return e == null ? e === void 0 ? Ys : Ks : Tr && Tr in Object(e) ? ks(e) : Xs(e);
}
function Ce(e) {
  return e != null && typeof e == "object";
}
var Js = "[object Symbol]";
function Tn(e) {
  return typeof e == "symbol" || Ce(e) && Fe(e) == Js;
}
function zo(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = Array(r); ++n < r; )
    o[n] = t(e[n], n, e);
  return o;
}
var ae = Array.isArray, Pr = xe ? xe.prototype : void 0, Mr = Pr ? Pr.toString : void 0;
function Bo(e) {
  if (typeof e == "string")
    return e;
  if (ae(e))
    return zo(e, Bo) + "";
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
var Zs = "[object AsyncFunction]", qs = "[object Function]", Qs = "[object GeneratorFunction]", el = "[object Proxy]";
function Mn(e) {
  if (!Ee(e))
    return !1;
  var t = Fe(e);
  return t == qs || t == Qs || t == Zs || t == el;
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
var ol = /[\\^$.*+?()[\]{}|]/g, il = /^\[object .+?Constructor\]$/, al = Function.prototype, sl = Object.prototype, ll = al.toString, ul = sl.hasOwnProperty, cl = RegExp(
  "^" + ll.call(ul).replace(ol, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function dl(e) {
  if (!Ee(e) || tl(e))
    return !1;
  var t = Mn(e) ? cl : il;
  return t.test(He(e));
}
function fl(e, t) {
  return e == null ? void 0 : e[t];
}
function Ne(e, t) {
  var n = fl(e, t);
  return dl(n) ? n : void 0;
}
var mn = Ne(pe, "WeakMap"), Rr = Object.create, pl = /* @__PURE__ */ function() {
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
var ml = 800, gl = 16, bl = Date.now;
function wl(e) {
  var t = 0, n = 0;
  return function() {
    var r = bl(), o = gl - (r - n);
    if (n = r, o > 0) {
      if (++t >= ml)
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
    var e = Ne(Object, "defineProperty");
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
} : Pn, xl = wl(Sl), Cl = 9007199254740991, _l = /^(?:0|[1-9]\d*)$/;
function An(e, t) {
  var n = typeof e;
  return t = t ?? Cl, !!t && (n == "number" || n != "symbol" && _l.test(e)) && e > -1 && e % 1 == 0 && e < t;
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
var Ir = Math.max;
function Pl(e, t, n) {
  return t = Ir(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, i = Ir(r.length - t, 0), a = Array(i); ++o < i; )
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
function In(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Al;
}
function et(e) {
  return e != null && In(e.length) && !Mn(e);
}
function Rl(e, t, n) {
  if (!Ee(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? et(n) && An(t, n.length) : r == "string" && t in n) ? vt(n[t], e) : !1;
}
function Il(e) {
  return Ml(function(t, n) {
    var r = -1, o = n.length, i = o > 1 ? n[o - 1] : void 0, a = o > 2 ? n[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (o--, i) : void 0, a && Rl(n[0], n[1], a) && (i = o < 3 ? void 0 : i, o = 1), t = Object(t); ++r < o; ) {
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
var Dl = "[object Arguments]";
function zr(e) {
  return Ce(e) && Fe(e) == Dl;
}
var Do = Object.prototype, Fl = Do.hasOwnProperty, Hl = Do.propertyIsEnumerable, Rt = zr(/* @__PURE__ */ function() {
  return arguments;
}()) ? zr : function(e) {
  return Ce(e) && Fl.call(e, "callee") && !Hl.call(e, "callee");
};
function Nl() {
  return !1;
}
var Fo = typeof exports == "object" && exports && !exports.nodeType && exports, Br = Fo && typeof module == "object" && module && !module.nodeType && module, Wl = Br && Br.exports === Fo, Dr = Wl ? pe.Buffer : void 0, Ll = Dr ? Dr.isBuffer : void 0, It = Ll || Nl, jl = "[object Arguments]", Ul = "[object Array]", kl = "[object Boolean]", Vl = "[object Date]", Gl = "[object Error]", Xl = "[object Function]", Kl = "[object Map]", Yl = "[object Number]", Jl = "[object Object]", Zl = "[object RegExp]", ql = "[object Set]", Ql = "[object String]", eu = "[object WeakMap]", tu = "[object ArrayBuffer]", nu = "[object DataView]", ru = "[object Float32Array]", ou = "[object Float64Array]", iu = "[object Int8Array]", au = "[object Int16Array]", su = "[object Int32Array]", lu = "[object Uint8Array]", uu = "[object Uint8ClampedArray]", cu = "[object Uint16Array]", du = "[object Uint32Array]", N = {};
N[ru] = N[ou] = N[iu] = N[au] = N[su] = N[lu] = N[uu] = N[cu] = N[du] = !0;
N[jl] = N[Ul] = N[tu] = N[kl] = N[nu] = N[Vl] = N[Gl] = N[Xl] = N[Kl] = N[Yl] = N[Jl] = N[Zl] = N[ql] = N[Ql] = N[eu] = !1;
function fu(e) {
  return Ce(e) && In(e.length) && !!N[Fe(e)];
}
function pu(e) {
  return function(t) {
    return e(t);
  };
}
var Ho = typeof exports == "object" && exports && !exports.nodeType && exports, ct = Ho && typeof module == "object" && module && !module.nodeType && module, hu = ct && ct.exports === Ho, rn = hu && Ro.process, Fr = function() {
  try {
    var e = ct && ct.require && ct.require("util").types;
    return e || rn && rn.binding && rn.binding("util");
  } catch {
  }
}(), Hr = Fr && Fr.isTypedArray, Bn = Hr ? pu(Hr) : fu, vu = Object.prototype, mu = vu.hasOwnProperty;
function No(e, t) {
  var n = ae(e), r = !n && Rt(e), o = !n && !r && It(e), i = !n && !r && !o && Bn(e), a = n || r || o || i, s = a ? Bl(e.length, String) : [], l = s.length;
  for (var u in e)
    (t || mu.call(e, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    An(u, l))) && s.push(u);
  return s;
}
function Wo(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var gu = Wo(Object.keys, Object), bu = Object.prototype, wu = bu.hasOwnProperty;
function yu(e) {
  if (!zn(e))
    return gu(e);
  var t = [];
  for (var n in Object(e))
    wu.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function Dn(e) {
  return et(e) ? No(e) : yu(e);
}
function Su(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var xu = Object.prototype, Cu = xu.hasOwnProperty;
function _u(e) {
  if (!Ee(e))
    return Su(e);
  var t = zn(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !Cu.call(e, r)) || n.push(r);
  return n;
}
function Lo(e) {
  return et(e) ? No(e, !0) : _u(e);
}
var Eu = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ou = /^\w*$/;
function Fn(e, t) {
  if (ae(e))
    return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || Tn(e) ? !0 : Ou.test(e) || !Eu.test(e) || t != null && e in Object(t);
}
var pt = Ne(Object, "create");
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
var Iu = Object.prototype, zu = Iu.hasOwnProperty;
function Bu(e) {
  var t = this.__data__;
  return pt ? t[e] !== void 0 : zu.call(t, e);
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
function Wt(e, t) {
  for (var n = e.length; n--; )
    if (vt(e[n][0], t))
      return n;
  return -1;
}
var Nu = Array.prototype, Wu = Nu.splice;
function Lu(e) {
  var t = this.__data__, n = Wt(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Wu.call(t, n, 1), --this.size, !0;
}
function ju(e) {
  var t = this.__data__, n = Wt(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Uu(e) {
  return Wt(this.__data__, e) > -1;
}
function ku(e, t) {
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
me.prototype.clear = Hu;
me.prototype.delete = Lu;
me.prototype.get = ju;
me.prototype.has = Uu;
me.prototype.set = ku;
var ht = Ne(pe, "Map");
function Vu() {
  this.size = 0, this.__data__ = {
    hash: new Be(),
    map: new (ht || me)(),
    string: new Be()
  };
}
function Gu(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Lt(e, t) {
  var n = e.__data__;
  return Gu(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Xu(e) {
  var t = Lt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Ku(e) {
  return Lt(this, e).get(e);
}
function Yu(e) {
  return Lt(this, e).has(e);
}
function Ju(e, t) {
  var n = Lt(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function ge(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ge.prototype.clear = Vu;
ge.prototype.delete = Xu;
ge.prototype.get = Ku;
ge.prototype.has = Yu;
ge.prototype.set = Ju;
var Zu = "Expected a function";
function Hn(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Zu);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], i = n.cache;
    if (i.has(o))
      return i.get(o);
    var a = e.apply(this, r);
    return n.cache = i.set(o, a) || i, a;
  };
  return n.cache = new (Hn.Cache || ge)(), n;
}
Hn.Cache = ge;
var qu = 500;
function Qu(e) {
  var t = Hn(e, function(r) {
    return n.size === qu && n.clear(), r;
  }), n = t.cache;
  return t;
}
var ec = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, tc = /\\(\\)?/g, nc = Qu(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(ec, function(n, r, o, i) {
    t.push(o ? i.replace(tc, "$1") : r || n);
  }), t;
});
function rc(e) {
  return e == null ? "" : Bo(e);
}
function jo(e, t) {
  return ae(e) ? e : Fn(e, t) ? [e] : nc(rc(e));
}
function jt(e) {
  if (typeof e == "string" || Tn(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -1 / 0 ? "-0" : t;
}
function Uo(e, t) {
  t = jo(t, e);
  for (var n = 0, r = t.length; e != null && n < r; )
    e = e[jt(t[n++])];
  return n && n == r ? e : void 0;
}
function oc(e, t, n) {
  var r = e == null ? void 0 : Uo(e, t);
  return r === void 0 ? n : r;
}
function ic(e, t) {
  for (var n = -1, r = t.length, o = e.length; ++n < r; )
    e[o + n] = t[n];
  return e;
}
var ko = Wo(Object.getPrototypeOf, Object), ac = "[object Object]", sc = Function.prototype, lc = Object.prototype, Vo = sc.toString, uc = lc.hasOwnProperty, cc = Vo.call(Object);
function dc(e) {
  if (!Ce(e) || Fe(e) != ac)
    return !1;
  var t = ko(e);
  if (t === null)
    return !0;
  var n = uc.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Vo.call(n) == cc;
}
function fc() {
  this.__data__ = new me(), this.size = 0;
}
function pc(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function hc(e) {
  return this.__data__.get(e);
}
function vc(e) {
  return this.__data__.has(e);
}
var mc = 200;
function gc(e, t) {
  var n = this.__data__;
  if (n instanceof me) {
    var r = n.__data__;
    if (!ht || r.length < mc - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new ge(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function fe(e) {
  var t = this.__data__ = new me(e);
  this.size = t.size;
}
fe.prototype.clear = fc;
fe.prototype.delete = pc;
fe.prototype.get = hc;
fe.prototype.has = vc;
fe.prototype.set = gc;
var Go = typeof exports == "object" && exports && !exports.nodeType && exports, Nr = Go && typeof module == "object" && module && !module.nodeType && module, bc = Nr && Nr.exports === Go, Wr = bc ? pe.Buffer : void 0;
Wr && Wr.allocUnsafe;
function wc(e, t) {
  return e.slice();
}
function yc(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, o = 0, i = []; ++n < r; ) {
    var a = e[n];
    t(a, n, e) && (i[o++] = a);
  }
  return i;
}
function Sc() {
  return [];
}
var xc = Object.prototype, Cc = xc.propertyIsEnumerable, Lr = Object.getOwnPropertySymbols, _c = Lr ? function(e) {
  return e == null ? [] : (e = Object(e), yc(Lr(e), function(t) {
    return Cc.call(e, t);
  }));
} : Sc;
function Ec(e, t, n) {
  var r = t(e);
  return ae(e) ? r : ic(r, n(e));
}
function jr(e) {
  return Ec(e, Dn, _c);
}
var gn = Ne(pe, "DataView"), bn = Ne(pe, "Promise"), wn = Ne(pe, "Set"), Ur = "[object Map]", Oc = "[object Object]", kr = "[object Promise]", Vr = "[object Set]", Gr = "[object WeakMap]", Xr = "[object DataView]", $c = He(gn), Tc = He(ht), Pc = He(bn), Mc = He(wn), Ac = He(mn), ye = Fe;
(gn && ye(new gn(new ArrayBuffer(1))) != Xr || ht && ye(new ht()) != Ur || bn && ye(bn.resolve()) != kr || wn && ye(new wn()) != Vr || mn && ye(new mn()) != Gr) && (ye = function(e) {
  var t = Fe(e), n = t == Oc ? e.constructor : void 0, r = n ? He(n) : "";
  if (r)
    switch (r) {
      case $c:
        return Xr;
      case Tc:
        return Ur;
      case Pc:
        return kr;
      case Mc:
        return Vr;
      case Ac:
        return Gr;
    }
  return t;
});
var zt = pe.Uint8Array;
function Rc(e) {
  var t = new e.constructor(e.byteLength);
  return new zt(t).set(new zt(e)), t;
}
function Ic(e, t) {
  var n = Rc(e.buffer);
  return new e.constructor(n, e.byteOffset, e.length);
}
function zc(e) {
  return typeof e.constructor == "function" && !zn(e) ? pl(ko(e)) : {};
}
var Bc = "__lodash_hash_undefined__";
function Dc(e) {
  return this.__data__.set(e, Bc), this;
}
function Fc(e) {
  return this.__data__.has(e);
}
function Bt(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.__data__ = new ge(); ++t < n; )
    this.add(e[t]);
}
Bt.prototype.add = Bt.prototype.push = Dc;
Bt.prototype.has = Fc;
function Hc(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e))
      return !0;
  return !1;
}
function Nc(e, t) {
  return e.has(t);
}
var Wc = 1, Lc = 2;
function Xo(e, t, n, r, o, i) {
  var a = n & Wc, s = e.length, l = t.length;
  if (s != l && !(a && l > s))
    return !1;
  var u = i.get(e), v = i.get(t);
  if (u && v)
    return u == t && v == e;
  var y = -1, p = !0, w = n & Lc ? new Bt() : void 0;
  for (i.set(e, t), i.set(t, e); ++y < s; ) {
    var c = e[y], m = t[y];
    if (r)
      var h = a ? r(m, c, y, t, e, i) : r(c, m, y, e, t, i);
    if (h !== void 0) {
      if (h)
        continue;
      p = !1;
      break;
    }
    if (w) {
      if (!Hc(t, function(d, C) {
        if (!Nc(w, C) && (c === d || o(c, d, n, r, i)))
          return w.push(C);
      })) {
        p = !1;
        break;
      }
    } else if (!(c === m || o(c, m, n, r, i))) {
      p = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), p;
}
function jc(e) {
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
var kc = 1, Vc = 2, Gc = "[object Boolean]", Xc = "[object Date]", Kc = "[object Error]", Yc = "[object Map]", Jc = "[object Number]", Zc = "[object RegExp]", qc = "[object Set]", Qc = "[object String]", ed = "[object Symbol]", td = "[object ArrayBuffer]", nd = "[object DataView]", Kr = xe ? xe.prototype : void 0, on = Kr ? Kr.valueOf : void 0;
function rd(e, t, n, r, o, i, a) {
  switch (n) {
    case nd:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case td:
      return !(e.byteLength != t.byteLength || !i(new zt(e), new zt(t)));
    case Gc:
    case Xc:
    case Jc:
      return vt(+e, +t);
    case Kc:
      return e.name == t.name && e.message == t.message;
    case Zc:
    case Qc:
      return e == t + "";
    case Yc:
      var s = jc;
    case qc:
      var l = r & kc;
      if (s || (s = Uc), e.size != t.size && !l)
        return !1;
      var u = a.get(e);
      if (u)
        return u == t;
      r |= Vc, a.set(e, t);
      var v = Xo(s(e), s(t), r, o, i, a);
      return a.delete(e), v;
    case ed:
      if (on)
        return on.call(e) == on.call(t);
  }
  return !1;
}
var od = 1, id = Object.prototype, ad = id.hasOwnProperty;
function sd(e, t, n, r, o, i) {
  var a = n & od, s = jr(e), l = s.length, u = jr(t), v = u.length;
  if (l != v && !a)
    return !1;
  for (var y = l; y--; ) {
    var p = s[y];
    if (!(a ? p in t : ad.call(t, p)))
      return !1;
  }
  var w = i.get(e), c = i.get(t);
  if (w && c)
    return w == t && c == e;
  var m = !0;
  i.set(e, t), i.set(t, e);
  for (var h = a; ++y < l; ) {
    p = s[y];
    var d = e[p], C = t[p];
    if (r)
      var A = a ? r(C, d, p, t, e, i) : r(d, C, p, e, t, i);
    if (!(A === void 0 ? d === C || o(d, C, n, r, i) : A)) {
      m = !1;
      break;
    }
    h || (h = p == "constructor");
  }
  if (m && !h) {
    var I = e.constructor, D = t.constructor;
    I != D && "constructor" in e && "constructor" in t && !(typeof I == "function" && I instanceof I && typeof D == "function" && D instanceof D) && (m = !1);
  }
  return i.delete(e), i.delete(t), m;
}
var ld = 1, Yr = "[object Arguments]", Jr = "[object Array]", Et = "[object Object]", ud = Object.prototype, Zr = ud.hasOwnProperty;
function cd(e, t, n, r, o, i) {
  var a = ae(e), s = ae(t), l = a ? Jr : ye(e), u = s ? Jr : ye(t);
  l = l == Yr ? Et : l, u = u == Yr ? Et : u;
  var v = l == Et, y = u == Et, p = l == u;
  if (p && It(e)) {
    if (!It(t))
      return !1;
    a = !0, v = !1;
  }
  if (p && !v)
    return i || (i = new fe()), a || Bn(e) ? Xo(e, t, n, r, o, i) : rd(e, t, l, n, r, o, i);
  if (!(n & ld)) {
    var w = v && Zr.call(e, "__wrapped__"), c = y && Zr.call(t, "__wrapped__");
    if (w || c) {
      var m = w ? e.value() : e, h = c ? t.value() : t;
      return i || (i = new fe()), o(m, h, n, r, i);
    }
  }
  return p ? (i || (i = new fe()), sd(e, t, n, r, o, i)) : !1;
}
function Nn(e, t, n, r, o) {
  return e === t ? !0 : e == null || t == null || !Ce(e) && !Ce(t) ? e !== e && t !== t : cd(e, t, n, r, Nn, o);
}
var dd = 1, fd = 2;
function pd(e, t, n, r) {
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
      if (!(y === void 0 ? Nn(u, l, dd | fd, r, v) : y))
        return !1;
    }
  }
  return !0;
}
function Ko(e) {
  return e === e && !Ee(e);
}
function hd(e) {
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
function vd(e) {
  var t = hd(e);
  return t.length == 1 && t[0][2] ? Yo(t[0][0], t[0][1]) : function(n) {
    return n === e || pd(n, e, t);
  };
}
function md(e, t) {
  return e != null && t in Object(e);
}
function gd(e, t, n) {
  t = jo(t, e);
  for (var r = -1, o = t.length, i = !1; ++r < o; ) {
    var a = jt(t[r]);
    if (!(i = e != null && n(e, a)))
      break;
    e = e[a];
  }
  return i || ++r != o ? i : (o = e == null ? 0 : e.length, !!o && In(o) && An(a, o) && (ae(e) || Rt(e)));
}
function bd(e, t) {
  return e != null && gd(e, t, md);
}
var wd = 1, yd = 2;
function Sd(e, t) {
  return Fn(e) && Ko(t) ? Yo(jt(e), t) : function(n) {
    var r = oc(n, e);
    return r === void 0 && r === t ? bd(n, e) : Nn(t, r, wd | yd);
  };
}
function xd(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Cd(e) {
  return function(t) {
    return Uo(t, e);
  };
}
function _d(e) {
  return Fn(e) ? xd(jt(e)) : Cd(e);
}
function Ed(e) {
  return typeof e == "function" ? e : e == null ? Pn : typeof e == "object" ? ae(e) ? Sd(e[0], e[1]) : vd(e) : _d(e);
}
function Od(e) {
  return function(t, n, r) {
    for (var o = -1, i = Object(t), a = r(t), s = a.length; s--; ) {
      var l = a[++o];
      if (n(i[l], l, i) === !1)
        break;
    }
    return t;
  };
}
var Jo = Od();
function $d(e, t) {
  return e && Jo(e, t, Dn);
}
function Td(e, t) {
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
var Pd = Td($d);
function yn(e, t, n) {
  (n !== void 0 && !vt(e[t], n) || n === void 0 && !(t in e)) && Rn(e, t, n);
}
function Md(e) {
  return Ce(e) && et(e);
}
function Sn(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function Ad(e) {
  return Tl(e, Lo(e));
}
function Rd(e, t, n, r, o, i, a) {
  var s = Sn(e, n), l = Sn(t, n), u = a.get(l);
  if (u) {
    yn(e, n, u);
    return;
  }
  var v = i ? i(s, l, n + "", e, t, a) : void 0, y = v === void 0;
  if (y) {
    var p = ae(l), w = !p && It(l), c = !p && !w && Bn(l);
    v = l, p || w || c ? ae(s) ? v = s : Md(s) ? v = vl(s) : w ? (y = !1, v = wc(l)) : c ? (y = !1, v = Ic(l)) : v = [] : dc(l) || Rt(l) ? (v = s, Rt(s) ? v = Ad(s) : (!Ee(s) || Mn(s)) && (v = zc(l))) : y = !1;
  }
  y && (a.set(l, v), o(v, l, r, i, a), a.delete(l)), yn(e, n, v);
}
function Zo(e, t, n, r, o) {
  e !== t && Jo(t, function(i, a) {
    if (o || (o = new fe()), Ee(i))
      Rd(e, t, a, n, Zo, r, o);
    else {
      var s = r ? r(Sn(e, a), i, a + "", e, t, o) : void 0;
      s === void 0 && (s = i), yn(e, a, s);
    }
  }, Lo);
}
function Id(e, t) {
  var n = -1, r = et(e) ? Array(e.length) : [];
  return Pd(e, function(o, i, a) {
    r[++n] = t(o, i, a);
  }), r;
}
function zd(e, t) {
  var n = ae(e) ? zo : Id;
  return n(e, Ed(t));
}
var Ot = Il(function(e, t, n) {
  Zo(e, t, n);
});
const xn = "naive-ui-style";
function Bd(e, t, n) {
  if (!t) return;
  const r = Ft(), o = z(() => {
    const {
      value: s
    } = t;
    if (!s)
      return;
    const l = s[e];
    if (l)
      return l;
  }), i = re(Nt, null), a = () => {
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
const Wn = {
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
  fontSize: Dd,
  fontFamily: Fd,
  lineHeight: Hd
} = Wn, Nd = W("body", `
 margin: 0;
 font-size: ${Dd};
 font-family: ${Fd};
 line-height: ${Hd};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [W("input", `
 font-family: inherit;
 font-size: inherit;
 `)]);
function Oe(e, t, n, r, o, i) {
  const a = Ft(), s = re(Nt, null);
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
      }), s != null && s.preflightStyleDisabled || Nd.mount({
        id: "n-global",
        head: !0,
        anchorMetaName: xn,
        ssr: a,
        parent: s == null ? void 0 : s.styleMountTarget
      });
    };
    a ? u() : no(u);
  }
  return z(() => {
    var u;
    const {
      theme: {
        common: v,
        self: y,
        peers: p = {}
      } = {},
      themeOverrides: w = {},
      builtinThemeOverrides: c = {}
    } = o, {
      common: m,
      peers: h
    } = w, {
      common: d = void 0,
      [e]: {
        common: C = void 0,
        self: A = void 0,
        peers: I = {}
      } = {}
    } = (s == null ? void 0 : s.mergedThemeRef.value) || {}, {
      common: D = void 0,
      [e]: B = {}
    } = (s == null ? void 0 : s.mergedThemeOverridesRef.value) || {}, {
      common: f,
      peers: b = {}
    } = B, _ = Ot({}, v || C || d || r.common, D, f, m), x = Ot(
      // {}, executed every time, no need for empty obj
      (u = y || A || r.self) === null || u === void 0 ? void 0 : u(_),
      c,
      B,
      w
    );
    return {
      common: _,
      self: x,
      peers: Ot({}, r.peers, I, p),
      peerOverrides: Ot({}, c.peers, b, h)
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
}, Wd = Je(O.neutralBase), qo = Je(O.neutralInvertBase), Ld = `rgba(${qo.slice(0, 3).join(", ")}, `;
function qr(e) {
  return `${Ld + String(e)})`;
}
function J(e) {
  const t = Array.from(qo);
  return t[3] = Number(e), co(Wd, t);
}
const Ln = Object.assign(Object.assign({
  name: "common"
}, Wn), {
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
  iconColorHover: gt(J(O.alpha4), {
    lightness: 0.75
  }),
  iconColorPressed: gt(J(O.alpha4), {
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
  clearColorHover: gt(J(O.alpha4), {
    lightness: 0.75
  }),
  clearColorPressed: gt(J(O.alpha4), {
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
}), jd = {
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
  return Object.assign(Object.assign({}, jd), {
    height: r,
    width: o,
    borderRadius: i,
    color: t,
    colorHover: n
  });
}
const kd = {
  name: "Scrollbar",
  common: Ln,
  self: Ud
}, {
  cubicBezierEaseInOut: Qr
} = Wn;
function Vd({
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
const Gd = ne("scrollbar", `
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
 `, [ue("horizontal", `
 height: var(--n-scrollbar-height);
 `, [W(">", [Re("scrollbar", `
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
 `, [W(">", [Re("scrollbar", `
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
 `), ue("disabled", [W(">", [Re("scrollbar", "pointer-events: none;")])]), W(">", [Re("scrollbar", `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [Vd(), W("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), Xd = Object.assign(Object.assign({}, Oe.props), {
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
}), Kd = se({
  name: "Scrollbar",
  props: Xd,
  inheritAttrs: !1,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: n,
      mergedRtlRef: r
    } = $n(e), o = Bd("Scrollbar", r, t), i = P(null), a = P(null), s = P(null), l = P(null), u = P(null), v = P(null), y = P(null), p = P(null), w = P(null), c = P(null), m = P(null), h = P(0), d = P(0), C = P(!1), A = P(!1);
    let I = !1, D = !1, B, f, b = 0, _ = 0, x = 0, R = 0;
    const F = aa(), L = Oe("Scrollbar", "-scrollbar", Gd, kd, e, t), j = z(() => {
      const {
        value: g
      } = p, {
        value: E
      } = v, {
        value: $
      } = c;
      return g === null || E === null || $ === null ? 0 : Math.min(g, $ * g / E + qn(L.value.self.width) * 1.5);
    }), S = z(() => `${j.value}px`), M = z(() => {
      const {
        value: g
      } = w, {
        value: E
      } = y, {
        value: $
      } = m;
      return g === null || E === null || $ === null ? 0 : $ * g / E + qn(L.value.self.height) * 1.5;
    }), U = z(() => `${M.value}px`), K = z(() => {
      const {
        value: g
      } = p, {
        value: E
      } = h, {
        value: $
      } = v, {
        value: H
      } = c;
      if (g === null || $ === null || H === null)
        return 0;
      {
        const V = $ - g;
        return V ? E / V * (H - j.value) : 0;
      }
    }), q = z(() => `${K.value}px`), Y = z(() => {
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
        return V ? E / V * (H - M.value) : 0;
      }
    }), ce = z(() => `${Y.value}px`), mt = z(() => {
      const {
        value: g
      } = p, {
        value: E
      } = v;
      return g !== null && E !== null && E > g;
    }), jn = z(() => {
      const {
        value: g
      } = w, {
        value: E
      } = y;
      return g !== null && E !== null && E > g;
    }), ni = z(() => {
      const {
        trigger: g
      } = e;
      return g === "none" || C.value;
    }), ri = z(() => {
      const {
        trigger: g
      } = e;
      return g === "none" || A.value;
    }), $e = z(() => {
      const {
        container: g
      } = e;
      return g ? g() : a.value;
    }), oi = z(() => {
      const {
        content: g
      } = e;
      return g ? g() : s.value;
    }), Un = (g, E) => {
      if (!e.scrollable) return;
      if (typeof g == "number") {
        We(g, E ?? 0, 0, !1, "auto");
        return;
      }
      const {
        left: $,
        top: H,
        index: V,
        elSize: ee,
        position: le,
        behavior: k,
        el: oe,
        debounce: be = !0
      } = g;
      ($ !== void 0 || H !== void 0) && We($ ?? 0, H ?? 0, 0, !1, k), oe !== void 0 ? We(0, oe.offsetTop, oe.offsetHeight, be, k) : V !== void 0 && ee !== void 0 ? We(0, V * ee, ee, be, k) : le === "bottom" ? We(0, Number.MAX_SAFE_INTEGER, 0, !1, k) : le === "top" && We(0, 0, 0, !1, k);
    }, kn = la(() => {
      e.container || Un({
        top: h.value,
        left: d.value
      });
    }), ii = () => {
      kn.isDeactivated || Te();
    }, ai = (g) => {
      if (kn.isDeactivated) return;
      const {
        onResize: E
      } = e;
      E && E(g), Te();
    }, si = (g, E) => {
      if (!e.scrollable) return;
      const {
        value: $
      } = $e;
      $ && (typeof g == "object" ? $.scrollBy(g) : $.scrollBy(g, E || 0));
    };
    function We(g, E, $, H, V) {
      const {
        value: ee
      } = $e;
      if (ee) {
        if (H) {
          const {
            scrollTop: le,
            offsetHeight: k
          } = ee;
          if (E > le) {
            E + $ <= le + k || ee.scrollTo({
              left: g,
              top: E + $ - k,
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
      fi(), pi(), Te();
    }
    function ui() {
      Ut();
    }
    function Ut() {
      ci(), di();
    }
    function ci() {
      f !== void 0 && window.clearTimeout(f), f = window.setTimeout(() => {
        A.value = !1;
      }, e.duration);
    }
    function di() {
      B !== void 0 && window.clearTimeout(B), B = window.setTimeout(() => {
        C.value = !1;
      }, e.duration);
    }
    function fi() {
      B !== void 0 && window.clearTimeout(B), C.value = !0;
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
      } = $e;
      g && (h.value = g.scrollTop, d.value = g.scrollLeft * (o != null && o.value ? -1 : 1));
    }
    function vi() {
      const {
        value: g
      } = oi;
      g && (v.value = g.offsetHeight, y.value = g.offsetWidth);
      const {
        value: E
      } = $e;
      E && (p.value = E.offsetHeight, w.value = E.offsetWidth);
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
      } = $e;
      g && (h.value = g.scrollTop, d.value = g.scrollLeft * (o != null && o.value ? -1 : 1), p.value = g.offsetHeight, w.value = g.offsetWidth, v.value = g.scrollHeight, y.value = g.scrollWidth);
      const {
        value: E
      } = u, {
        value: $
      } = l;
      E && (m.value = E.offsetWidth), $ && (c.value = $.offsetHeight);
    }
    function Te() {
      e.scrollable && (e.useUnifiedContainer ? Gn() : (vi(), Vn()));
    }
    function Xn(g) {
      var E;
      return !(!((E = i.value) === null || E === void 0) && E.contains(Mt(g)));
    }
    function mi(g) {
      g.preventDefault(), g.stopPropagation(), D = !0, Q("mousemove", window, Kn, !0), Q("mouseup", window, Yn, !0), _ = d.value, x = o != null && o.value ? window.innerWidth - g.clientX : g.clientX;
    }
    function Kn(g) {
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
      const ee = (o != null && o.value ? window.innerWidth - g.clientX - x : g.clientX - x) * ($ - E) / (E - H), le = $ - E;
      let k = _ + ee;
      k = Math.min(le, k), k = Math.max(k, 0);
      const {
        value: oe
      } = $e;
      if (oe) {
        oe.scrollLeft = k * (o != null && o.value ? -1 : 1);
        const {
          internalOnUpdateScrollLeft: be
        } = e;
        be && be(k);
      }
    }
    function Yn(g) {
      g.preventDefault(), g.stopPropagation(), X("mousemove", window, Kn, !0), X("mouseup", window, Yn, !0), D = !1, Te(), Xn(g) && Ut();
    }
    function gi(g) {
      g.preventDefault(), g.stopPropagation(), I = !0, Q("mousemove", window, kt, !0), Q("mouseup", window, Vt, !0), b = h.value, R = g.clientY;
    }
    function kt(g) {
      if (!I) return;
      B !== void 0 && window.clearTimeout(B), f !== void 0 && window.clearTimeout(f);
      const {
        value: E
      } = p, {
        value: $
      } = v, {
        value: H
      } = j;
      if (E === null || $ === null) return;
      const ee = (g.clientY - R) * ($ - E) / (E - H), le = $ - E;
      let k = b + ee;
      k = Math.min(le, k), k = Math.max(k, 0);
      const {
        value: oe
      } = $e;
      oe && (oe.scrollTop = k);
    }
    function Vt(g) {
      g.preventDefault(), g.stopPropagation(), X("mousemove", window, kt, !0), X("mouseup", window, Vt, !0), I = !1, Te(), Xn(g) && Ut();
    }
    Ke(() => {
      const {
        value: g
      } = jn, {
        value: E
      } = mt, {
        value: $
      } = t, {
        value: H
      } = u, {
        value: V
      } = l;
      H && (g ? H.classList.remove(`${$}-scrollbar-rail--disabled`) : H.classList.add(`${$}-scrollbar-rail--disabled`)), V && (E ? V.classList.remove(`${$}-scrollbar-rail--disabled`) : V.classList.add(`${$}-scrollbar-rail--disabled`));
    }), De(() => {
      e.container || Te();
    }), _e(() => {
      B !== void 0 && window.clearTimeout(B), f !== void 0 && window.clearTimeout(f), X("mousemove", window, kt, !0), X("mouseup", window, Vt, !0);
    });
    const Jn = z(() => {
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
          railInsetHorizontalTop: le,
          railInsetHorizontalBottom: k,
          railInsetVerticalRight: oe,
          railInsetVerticalLeft: be,
          railColor: bi
        }
      } = L.value, {
        top: wi,
        right: yi,
        bottom: Si,
        left: xi
      } = ot(le), {
        top: Ci,
        right: _i,
        bottom: Ei,
        left: Oi
      } = ot(k), {
        top: $i,
        right: Ti,
        bottom: Pi,
        left: Mi
      } = ot(o != null && o.value ? xr(oe) : oe), {
        top: Ai,
        right: Ri,
        bottom: Ii,
        left: zi
      } = ot(o != null && o.value ? xr(be) : be);
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
        "--n-scrollbar-rail-top-horizontal-bottom": Ci,
        "--n-scrollbar-rail-right-horizontal-bottom": _i,
        "--n-scrollbar-rail-bottom-horizontal-bottom": Ei,
        "--n-scrollbar-rail-left-horizontal-bottom": Oi,
        "--n-scrollbar-rail-top-vertical-right": $i,
        "--n-scrollbar-rail-right-vertical-right": Ti,
        "--n-scrollbar-rail-bottom-vertical-right": Pi,
        "--n-scrollbar-rail-left-vertical-right": Mi,
        "--n-scrollbar-rail-top-vertical-left": Ai,
        "--n-scrollbar-rail-right-vertical-left": Ri,
        "--n-scrollbar-rail-bottom-vertical-left": Ii,
        "--n-scrollbar-rail-left-vertical-left": zi,
        "--n-scrollbar-rail-color": bi
      };
    }), Le = n ? Ao("scrollbar", void 0, Jn, e) : void 0;
    return Object.assign(Object.assign({}, {
      scrollTo: Un,
      scrollBy: si,
      sync: Te,
      syncUnifiedContainer: Gn,
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
      needYBar: mt,
      needXBar: jn,
      yBarSizePx: S,
      xBarSizePx: U,
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
      themeClass: Le == null ? void 0 : Le.themeClass,
      onRender: Le == null ? void 0 : Le.onRender
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
    const u = this.trigger === "none", v = (w, c) => T("div", {
      ref: "yRailRef",
      class: [`${n}-scrollbar-rail`, `${n}-scrollbar-rail--vertical`, `${n}-scrollbar-rail--vertical--${a}`, w],
      "data-scrollbar-rail": !0,
      style: [c || "", this.verticalRailStyle],
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
      var w, c;
      return (w = this.onRender) === null || w === void 0 || w.call(this), T("div", _n(this.$attrs, {
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
    return i ? T(Ze, null, p, v(this.themeClass, this.cssVars)) : p;
  }
}), Yd = Kd, Jd = {
  space: "6px",
  spaceArrow: "10px",
  arrowOffset: "10px",
  arrowOffsetVertical: "10px",
  arrowHeight: "6px",
  padding: "8px 14px"
};
function Zd(e) {
  const {
    boxShadow2: t,
    popoverColor: n,
    textColor2: r,
    borderRadius: o,
    fontSize: i,
    dividerColor: a
  } = e;
  return Object.assign(Object.assign({}, Jd), {
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
  common: Ln,
  self: Zd
}, an = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, G = "var(--n-arrow-height) * 1.414", qd = W([ne("popover", `
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
    return W(`[v-placement="${o}"] >`, [ne("popover-shared", [ue("center-arrow", [ne("popover-arrow", `${t}: calc(max(${s}, ${l}) ${i ? "+" : "-"} var(--v-offset-${n ? "left" : "top"}));`)])])]);
  });
})]);
function he(e) {
  return ["top", "bottom"].includes(e.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)";
}
function ie(e, t) {
  const n = e.split("-")[0], r = ["top", "bottom"].includes(n) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
  return W(`[v-placement="${e}"] >`, [ne("popover-shared", `
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
function Qd({
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
    } = $n(e), a = Oe("Popover", "-popover", qd, Qo, e, o), s = P(null), l = re("NPopover"), u = P(null), v = P(e.show), y = P(!1);
    Ke(() => {
      const {
        show: f
      } = e;
      f && !Ds() && !e.internalDeactivateImmediately && (y.value = !0);
    });
    const p = z(() => {
      const {
        trigger: f,
        onClickoutside: b
      } = e, _ = [], {
        positionManuallyRef: {
          value: x
        }
      } = l;
      return x || (f === "click" && !b && _.push([tr, I, void 0, {
        capture: !0
      }]), f === "hover" && _.push([Ea, A])), b && _.push([tr, I, void 0, {
        capture: !0
      }]), (e.displayDirective === "show" || e.animated && y.value) && _.push([Li, e.show]), _;
    }), w = z(() => {
      const {
        common: {
          cubicBezierEaseInOut: f,
          cubicBezierEaseIn: b,
          cubicBezierEaseOut: _
        },
        self: {
          space: x,
          spaceArrow: R,
          padding: F,
          fontSize: L,
          textColor: j,
          dividerColor: S,
          color: M,
          boxShadow: U,
          borderRadius: K,
          arrowHeight: q,
          arrowOffset: Y,
          arrowOffsetVertical: ce
        }
      } = a.value;
      return {
        "--n-box-shadow": U,
        "--n-bezier": f,
        "--n-bezier-ease-in": b,
        "--n-bezier-ease-out": _,
        "--n-font-size": L,
        "--n-text-color": j,
        "--n-color": M,
        "--n-divider-color": S,
        "--n-border-radius": K,
        "--n-arrow-height": q,
        "--n-arrow-offset": Y,
        "--n-arrow-offset-vertical": ce,
        "--n-padding": F,
        "--n-space": x,
        "--n-space-arrow": R
      };
    }), c = z(() => {
      const f = e.width === "trigger" ? void 0 : qt(e.width), b = [];
      f && b.push({
        width: f
      });
      const {
        maxWidth: _,
        minWidth: x
      } = e;
      return _ && b.push({
        maxWidth: qt(_)
      }), x && b.push({
        maxWidth: qt(x)
      }), i || b.push(w.value), b;
    }), m = i ? Ao("popover", void 0, w, e) : void 0;
    l.setBodyInstance({
      syncPosition: h
    }), _e(() => {
      l.setBodyInstance(null);
    }), ve(Se(e, "show"), (f) => {
      e.animated || (f ? v.value = !0 : v.value = !1);
    });
    function h() {
      var f;
      (f = s.value) === null || f === void 0 || f.syncPosition();
    }
    function d(f) {
      e.trigger === "hover" && e.keepAliveOnHover && e.show && l.handleMouseEnter(f);
    }
    function C(f) {
      e.trigger === "hover" && e.keepAliveOnHover && l.handleMouseLeave(f);
    }
    function A(f) {
      e.trigger === "hover" && !D().contains(Mt(f)) && l.handleMouseMoveOutside(f);
    }
    function I(f) {
      (e.trigger === "click" && !D().contains(Mt(f)) || e.onClickoutside) && l.handleClickOutside(f);
    }
    function D() {
      return l.getTriggerElement();
    }
    at(so, u), at(io, null), at(ao, null);
    function B() {
      if (m == null || m.onRender(), !(e.displayDirective === "show" || e.show || e.animated && y.value))
        return null;
      let b;
      const _ = l.internalRenderBodyRef.value, {
        value: x
      } = o;
      if (_)
        b = _(
          // The popover class and overlap class must exists, they will be used
          // to place the body & transition animation.
          // Shadow class exists for reuse box-shadow.
          [`${x}-popover-shared`, m == null ? void 0 : m.themeClass.value, e.overlap && `${x}-popover-shared--overlap`, e.showArrow && `${x}-popover-shared--show-arrow`, e.arrowPointToCenter && `${x}-popover-shared--center-arrow`],
          u,
          c.value,
          d,
          C
        );
      else {
        const {
          value: R
        } = l.extraClassRef, {
          internalTrapFocus: F
        } = e, L = !Or(t.header) || !Or(t.footer), j = () => {
          var S, M;
          const U = L ? T(Ze, null, tn(t.header, (Y) => Y ? T("div", {
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
          }, t), K = e.scrollable ? T(Yd, {
            contentClass: L ? void 0 : `${x}-popover__content ${(M = e.contentClass) !== null && M !== void 0 ? M : ""}`,
            contentStyle: L ? void 0 : e.contentStyle
          }, {
            default: () => U
          }) : U, q = e.showArrow ? Qd({
            arrowClass: e.arrowClass,
            arrowStyle: e.arrowStyle,
            arrowWrapperClass: e.arrowWrapperClass,
            arrowWrapperStyle: e.arrowWrapperStyle,
            clsPrefix: x
          }) : null;
          return [K, q];
        };
        b = T("div", _n({
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
          onMouseleave: C
        }, n), F ? T(Ts, {
          active: e.show,
          autoFocus: !0
        }, {
          default: j
        }) : j());
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
var tf = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\mmj\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_17748_VZZMJJWFFMGMQMSF", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-QBN3J51", ComSpec: "C:\\WINDOWS\\system32\\cmd.exe", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "d:\\install\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\mmj", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\mmj", INIT_CWD: "F:\\Work\\lowcode\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\mmj\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-QBN3J51", NODE: "C:\\Program Files\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com/", npm_config_user_agent: "pnpm/9.15.4 npm/? node/v18.20.2 win32 x64", npm_execpath: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "C:\\Program Files\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "8", NVM_HOME: "D:\\install\\nvm", NVM_SYMLINK: "C:\\Program Files\\nodejs", OneDrive: "C:\\Users\\mmj\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\Work\\lowcode\\lowcode-component\\scripts\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\Work\\lowcode\\lowcode-component\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\java8path;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Git\\cmd;C:\\Users\\mmj\\AppData\\Local\\Microsoft\\WindowsApps;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Microsoft VS Code\\bin;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\Work\\lowcode\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "AMD64 Family 23 Model 24 Stepping 1, AuthenticAMD", PROCESSOR_LEVEL: "23", PROCESSOR_REVISION: "1801", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\mmj\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\WINDOWS", TEMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.96.4", TMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-QBN3J51", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-QBN3J51", USERNAME: "mmj", USERPROFILE: "C:\\Users\\mmj", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "d:\\install\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "D:\\install\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-780eceaefd-sock", VSCODE_INJECTION: "1", windir: "C:\\WINDOWS" };
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
    const t = oo(), n = P(null), r = z(() => e.show), o = P(e.defaultShow), i = ra(r, o), a = dt(() => e.disabled ? !1 : i.value), s = () => {
      if (e.disabled) return !0;
      const {
        getDisabled: S
      } = e;
      return !!(S != null && S());
    }, l = () => s() ? !1 : i.value, u = oa(e, ["arrow", "showArrow"]), v = z(() => e.overlap ? !1 : u.value);
    let y = null;
    const p = P(null), w = P(null), c = dt(() => e.x !== void 0 && e.y !== void 0);
    function m(S) {
      const {
        "onUpdate:show": M,
        onUpdateShow: U,
        onShow: K,
        onHide: q
      } = e;
      o.value = S, M && it(M, S), U && it(U, S), S && K && it(K, !0), S && q && it(q, !1);
    }
    function h() {
      y && y.syncPosition();
    }
    function d() {
      const {
        value: S
      } = p;
      S && (window.clearTimeout(S), p.value = null);
    }
    function C() {
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
    function D() {
      const S = s();
      if (e.trigger === "hover" && !S) {
        if (C(), p.value !== null || l()) return;
        const M = () => {
          m(!0), p.value = null;
        }, {
          delay: U
        } = e;
        U === 0 ? M() : p.value = window.setTimeout(M, U);
      }
    }
    function B() {
      const S = s();
      if (e.trigger === "hover" && !S) {
        if (d(), w.value !== null || !l()) return;
        const M = () => {
          m(!1), w.value = null;
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
      l() && (e.trigger === "click" && (d(), C(), m(!1)), (M = e.onClickoutside) === null || M === void 0 || M.call(e, S));
    }
    function _() {
      if (e.trigger === "click" && !s()) {
        d(), C();
        const S = !l();
        m(S);
      }
    }
    function x(S) {
      e.internalTrapFocus && S.key === "Escape" && (d(), C(), m(!1));
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
    return at("NPopover", {
      getTriggerElement: F,
      handleKeydown: x,
      handleMouseEnter: D,
      handleMouseLeave: B,
      handleClickOutside: b,
      handleMouseMoveOutside: f,
      setBodyInstance: L,
      positionManuallyRef: c,
      isMountedRef: t,
      zIndexRef: Se(e, "zIndex"),
      extraClassRef: Se(e, "internalExtraClass"),
      internalRenderBodyRef: Se(e, "internalRenderBody")
    }), Ke(() => {
      i.value && s() && m(!1);
    }), {
      binderInstRef: n,
      positionManually: c,
      mergedShowConsideringDisabledProp: a,
      // if to show popover body
      uncontrolledShow: o,
      mergedShowArrow: v,
      getMergedShow: l,
      setShow: R,
      handleClick: _,
      handleMouseEnter: D,
      handleMouseLeave: B,
      handleFocus: A,
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
    if (!t && (r = Hs(n, "trigger"), r)) {
      r = ji(r), r = r.type === Ui ? T("span", [r]) : r;
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
    return T(Ca, {
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
        }]]) : null, t ? null : T(_a, null, {
          default: () => r
        }), T(ef, Ns(this.$props, nf, Object.assign(Object.assign({}, this.$attrs), {
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
const cf = {
  name: "Tooltip",
  common: Ln,
  peers: {
    Popover: Qo
  },
  self: uf
}, df = Object.assign(Object.assign({}, ti), Oe.props), ff = se({
  name: "Tooltip",
  props: df,
  slots: Object,
  __popover__: !0,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = $n(e), n = Oe("Tooltip", "-tooltip", void 0, cf, e, t), r = P(null);
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
    return T(sf, Object.assign(Object.assign({}, this.$props), {
      theme: e.peers.Popover,
      themeOverrides: e.peerOverrides.Popover,
      builtinThemeOverrides: this.popoverThemeOverrides,
      internalExtraClass: t.concat("tooltip"),
      ref: "popoverRef"
    }), this.$slots);
  }
}), pf = { class: "lc-tooltip" }, hf = { class: "lc-tooltip__content" }, vf = /* @__PURE__ */ se({
  __name: "tooltip",
  setup(e) {
    return (t, n) => (ki(), Vi("div", pf, [
      Gi(
        Xi(ff),
        _n({
          trigger: "hover",
          class: "lc-n-tooltip",
          "arrow-class": "lc-tooltip-arrow-class"
        }, t.$attrs),
        {
          trigger: Zn(() => [
            ln(t.$slots, "trigger", {}, () => [
              n[0] || (n[0] = je(
                "div",
                { class: "lc-tooltip__trigger_icon" },
                [
                  je("svg", {
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 512 512",
                    "enable-background": "new 0 0 512 512",
                    "xml:space": "preserve"
                  }, [
                    je("path", { d: `M256,90c44.3,0,86,17.3,117.4,48.6C404.7,170,422,211.7,422,256s-17.3,86-48.6,117.4C342,404.7,300.3,422,256,422\r
	s-86-17.3-117.4-48.6C107.3,342,90,300.3,90,256s17.3-86,48.6-117.4C170,107.3,211.7,90,256,90 M256,48C141.1,48,48,141.1,48,256\r
	s93.1,208,208,208s208-93.1,208-208S370.9,48,256,48L256,48z` }),
                    je("g", null, [
                      je("path", { d: "M277,360h-42V235h42V360z M277,194h-42v-42h42V194z" })
                    ])
                  ])
                ],
                -1
                /* HOISTED */
              ))
            ], !0)
          ]),
          default: Zn(() => [
            je("div", hf, [
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
}), mf = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, yf = /* @__PURE__ */ mf(vf, [["__scopeId", "data-v-37c77816"]]);
export {
  yf as LcTooltip
};
