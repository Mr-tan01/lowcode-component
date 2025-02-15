// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { ref as P, readonly as zt, watch as ce, computed as z, onMounted as Me, onBeforeUnmount as we, createTextVNode as An, Fragment as fe, Comment as Nt, defineComponent as ae, provide as Xe, getCurrentInstance as In, inject as ne, withDirectives as ft, toRef as ge, h as M, Teleport as Gr, nextTick as Kr, renderSlot as Zr, onActivated as qr, onDeactivated as Jr, isVNode as Qr, shallowRef as eo, watchEffect as De, onBeforeMount as Dn, Transition as Bt, mergeProps as Fn, vShow as to, cloneVNode as no, Text as ro, openBlock as pe, createElementBlock as ve, createElementVNode as me, renderList as wt, createVNode as oo, unref as io, withCtx as en, toDisplayString as yt, createCommentVNode as lo } from "vue";
import { _ as ao } from "./assets/right-arrow-B90nBv-r.js";
import { merge as Qe, map as so } from "lodash-es";
function st(e) {
  return e.composedPath()[0];
}
const uo = {
  mousemoveoutside: /* @__PURE__ */ new WeakMap(),
  clickoutside: /* @__PURE__ */ new WeakMap()
};
function co(e, t, n) {
  if (e === "mousemoveoutside") {
    const r = (o) => {
      t.contains(st(o)) || n(o);
    };
    return {
      mousemove: r,
      touchstart: r
    };
  } else if (e === "clickoutside") {
    let r = !1;
    const o = (l) => {
      r = !t.contains(st(l));
    }, i = (l) => {
      r && (t.contains(st(l)) || n(l));
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
function Hn(e, t, n) {
  const r = uo[e];
  let o = r.get(t);
  o === void 0 && r.set(t, o = /* @__PURE__ */ new WeakMap());
  let i = o.get(n);
  return i === void 0 && o.set(n, i = co(e, t, n)), i;
}
function fo(e, t, n, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const o = Hn(e, t, n);
    return Object.keys(o).forEach((i) => {
      J(i, document, o[i], r);
    }), !0;
  }
  return !1;
}
function ho(e, t, n, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const o = Hn(e, t, n);
    return Object.keys(o).forEach((i) => {
      X(i, document, o[i], r);
    }), !0;
  }
  return !1;
}
function po() {
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
    const x = c[v];
    return c[v] = function() {
      return _.apply(c, arguments), x.apply(c, arguments);
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
  function f(c, v) {
    a !== void 0 && Object.defineProperty(c, "currentTarget", {
      configurable: !0,
      enumerable: !0,
      get: v ?? a.get
    });
  }
  const g = {
    bubble: {},
    capture: {}
  }, S = {};
  function m() {
    const c = function(v) {
      const { type: _, eventPhase: x, bubbles: R } = v, D = st(v);
      if (x === 2)
        return;
      const k = x === 1 ? "capture" : "bubble";
      let L = D;
      const y = [];
      for (; L === null && (L = window), y.push(L), L !== window; )
        L = L.parentNode || null;
      const T = g.capture[_], N = g.bubble[_];
      if (o(v, "stopPropagation", n), o(v, "stopImmediatePropagation", r), f(v, u), k === "capture") {
        if (T === void 0)
          return;
        for (let Y = y.length - 1; Y >= 0 && !e.has(v); --Y) {
          const q = y[Y], G = T.get(q);
          if (G !== void 0) {
            l.set(v, q);
            for (const se of G) {
              if (t.has(v))
                break;
              se(v);
            }
          }
          if (Y === 0 && !R && N !== void 0) {
            const se = N.get(q);
            if (se !== void 0)
              for (const Je of se) {
                if (t.has(v))
                  break;
                Je(v);
              }
          }
        }
      } else if (k === "bubble") {
        if (N === void 0)
          return;
        for (let Y = 0; Y < y.length && !e.has(v); ++Y) {
          const q = y[Y], G = N.get(q);
          if (G !== void 0) {
            l.set(v, q);
            for (const se of G) {
              if (t.has(v))
                break;
              se(v);
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
      const { type: _, eventPhase: x } = v;
      if (x !== 2)
        return;
      const R = S[_];
      R !== void 0 && R.forEach((D) => D(v));
    };
    return c.displayName = "evtdUnifiedWindowEventHandler", c;
  }
  const d = m(), b = w();
  function h(c, v) {
    const _ = g[c];
    return _[v] === void 0 && (_[v] = /* @__PURE__ */ new Map(), window.addEventListener(v, d, c === "capture")), _[v];
  }
  function s(c) {
    return S[c] === void 0 && (S[c] = /* @__PURE__ */ new Set(), window.addEventListener(c, b)), S[c];
  }
  function $(c, v) {
    let _ = c.get(v);
    return _ === void 0 && c.set(v, _ = /* @__PURE__ */ new Set()), _;
  }
  function B(c, v, _, x) {
    const R = g[v][_];
    if (R !== void 0) {
      const D = R.get(c);
      if (D !== void 0 && D.has(x))
        return !0;
    }
    return !1;
  }
  function I(c, v) {
    const _ = S[c];
    return !!(_ !== void 0 && _.has(v));
  }
  function j(c, v, _, x) {
    let R;
    if (typeof x == "object" && x.once === !0 ? R = (T) => {
      A(c, v, R, x), _(T);
    } : R = _, fo(c, v, R, x))
      return;
    const k = x === !0 || typeof x == "object" && x.capture === !0 ? "capture" : "bubble", L = h(k, c), y = $(L, v);
    if (y.has(R) || y.add(R), v === window) {
      const T = s(c);
      T.has(R) || T.add(R);
    }
  }
  function A(c, v, _, x) {
    if (ho(c, v, _, x))
      return;
    const D = x === !0 || typeof x == "object" && x.capture === !0, k = D ? "capture" : "bubble", L = h(k, c), y = $(L, v);
    if (v === window && !B(v, D ? "bubble" : "capture", c, _) && I(c, _)) {
      const N = S[c];
      N.delete(_), N.size === 0 && (window.removeEventListener(c, b), S[c] = void 0);
    }
    y.has(_) && y.delete(_), y.size === 0 && L.delete(v), L.size === 0 && (window.removeEventListener(c, d, k === "capture"), g[k][c] = void 0);
  }
  return {
    on: j,
    off: A
  };
}
const { on: J, off: X } = po(), Re = "@@mmoContext", vo = {
  mounted(e, { value: t }) {
    e[Re] = {
      handler: void 0
    }, typeof t == "function" && (e[Re].handler = t, J("mousemoveoutside", e, t));
  },
  updated(e, { value: t }) {
    const n = e[Re];
    typeof t == "function" ? n.handler ? n.handler !== t && (X("mousemoveoutside", e, n.handler), n.handler = t, J("mousemoveoutside", e, t)) : (e[Re].handler = t, J("mousemoveoutside", e, t)) : n.handler && (X("mousemoveoutside", e, n.handler), n.handler = void 0);
  },
  unmounted(e) {
    const { handler: t } = e[Re];
    t && X("mousemoveoutside", e, t), e[Re].handler = void 0;
  }
}, ze = "@@coContext", tn = {
  mounted(e, { value: t, modifiers: n }) {
    e[ze] = {
      handler: void 0
    }, typeof t == "function" && (e[ze].handler = t, J("clickoutside", e, t, {
      capture: n.capture
    }));
  },
  updated(e, { value: t, modifiers: n }) {
    const r = e[ze];
    typeof t == "function" ? r.handler ? r.handler !== t && (X("clickoutside", e, r.handler, {
      capture: n.capture
    }), r.handler = t, J("clickoutside", e, t, {
      capture: n.capture
    })) : (e[ze].handler = t, J("clickoutside", e, t, {
      capture: n.capture
    })) : r.handler && (X("clickoutside", e, r.handler, {
      capture: n.capture
    }), r.handler = void 0);
  },
  unmounted(e, { modifiers: t }) {
    const { handler: n } = e[ze];
    n && X("clickoutside", e, n, {
      capture: t.capture
    }), e[ze].handler = void 0;
  }
};
function mo(e, t) {
  console.error(`[vdirs/${e}]: ${t}`);
}
class bo {
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
    r.has(t) ? r.delete(t) : n === void 0 && mo("z-index-manager/unregister-element", "Element not found when unregistering."), this.squashState();
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
const St = new bo(), Be = "@@ziContext", kn = {
  mounted(e, t) {
    const { value: n = {} } = t, { zIndex: r, enabled: o } = n;
    e[Be] = {
      enabled: !!o,
      initialized: !1
    }, o && (St.ensureZIndex(e, r), e[Be].initialized = !0);
  },
  updated(e, t) {
    const { value: n = {} } = t, { zIndex: r, enabled: o } = n, i = e[Be].enabled;
    o && !i && (St.ensureZIndex(e, r), e[Be].initialized = !0), e[Be].enabled = !!o;
  },
  unmounted(e, t) {
    if (!e[Be].initialized)
      return;
    const { value: n = {} } = t, { zIndex: r } = n;
    St.unregister(e, r);
  }
};
function go(e) {
  const t = P(!!e.value);
  if (t.value)
    return zt(t);
  const n = ce(e, (r) => {
    r && (t.value = !0, n());
  });
  return zt(t);
}
function Ze(e) {
  const t = z(e), n = P(t.value);
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
const wo = typeof window < "u";
let Ae, Ye;
const yo = () => {
  var e, t;
  Ae = wo ? (t = (e = document) === null || e === void 0 ? void 0 : e.fonts) === null || t === void 0 ? void 0 : t.ready : void 0, Ye = !1, Ae !== void 0 ? Ae.then(() => {
    Ye = !0;
  }) : Ye = !0;
};
yo();
function So(e) {
  if (Ye)
    return;
  let t = !1;
  Me(() => {
    Ye || Ae == null || Ae.then(() => {
      t || e();
    });
  }), we(() => {
    t = !0;
  });
}
function xo(e, t) {
  return ce(e, (n) => {
    n !== void 0 && (t.value = n);
  }), z(() => e.value === void 0 ? t.value : e.value);
}
function Ln() {
  const e = P(!1);
  return Me(() => {
    e.value = !0;
  }), zt(e);
}
function _o(e, t) {
  return z(() => {
    for (const n of t)
      if (e[n] !== void 0)
        return e[n];
    return e[t[t.length - 1]];
  });
}
const Co = (typeof window > "u" ? !1 : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
!window.MSStream;
function Eo() {
  return Co;
}
let dt = [];
const Nn = /* @__PURE__ */ new WeakMap();
function $o() {
  dt.forEach((e) => e(...Nn.get(e))), dt = [];
}
function Oo(e, ...t) {
  Nn.set(e, t), !dt.includes(e) && dt.push(e) === 1 && requestAnimationFrame($o);
}
function ct(e) {
  return e.composedPath()[0] || null;
}
function nn(e) {
  return typeof e == "string" ? e.endsWith("px") ? Number(e.slice(0, e.length - 2)) : Number(e) : e;
}
function Ve(e, t) {
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
const rn = {
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
}, ke = "^\\s*", Le = "\\s*$", xe = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", _e = "([0-9A-Fa-f])", Ce = "([0-9A-Fa-f]{2})", Mo = new RegExp(`${ke}rgb\\s*\\(${xe},${xe},${xe}\\)${Le}`), To = new RegExp(`${ke}rgba\\s*\\(${xe},${xe},${xe},${xe}\\)${Le}`), Po = new RegExp(`${ke}#${_e}${_e}${_e}${Le}`), Ro = new RegExp(`${ke}#${Ce}${Ce}${Ce}${Le}`), zo = new RegExp(`${ke}#${_e}${_e}${_e}${_e}${Le}`), Bo = new RegExp(`${ke}#${Ce}${Ce}${Ce}${Ce}${Le}`);
function ee(e) {
  return parseInt(e, 16);
}
function Fe(e) {
  try {
    let t;
    if (t = Ro.exec(e))
      return [ee(t[1]), ee(t[2]), ee(t[3]), 1];
    if (t = Mo.exec(e))
      return [Z(t[1]), Z(t[5]), Z(t[9]), 1];
    if (t = To.exec(e))
      return [
        Z(t[1]),
        Z(t[5]),
        Z(t[9]),
        Ge(t[13])
      ];
    if (t = Po.exec(e))
      return [
        ee(t[1] + t[1]),
        ee(t[2] + t[2]),
        ee(t[3] + t[3]),
        1
      ];
    if (t = Bo.exec(e))
      return [
        ee(t[1]),
        ee(t[2]),
        ee(t[3]),
        Ge(ee(t[4]) / 255)
      ];
    if (t = zo.exec(e))
      return [
        ee(t[1] + t[1]),
        ee(t[2] + t[2]),
        ee(t[3] + t[3]),
        Ge(ee(t[4] + t[4]) / 255)
      ];
    if (e in rn)
      return Fe(rn[e]);
    throw new Error(`[seemly/rgba]: Invalid color value ${e}.`);
  } catch (t) {
    throw t;
  }
}
function Ao(e) {
  return e > 1 ? 1 : e < 0 ? 0 : e;
}
function Io(e, t, n, r) {
  return `rgba(${Z(e)}, ${Z(t)}, ${Z(n)}, ${Ao(r)})`;
}
function xt(e, t, n, r, o) {
  return Z((e * t * (1 - r) + n * r) / o);
}
function Do(e, t) {
  Array.isArray(e) || (e = Fe(e)), Array.isArray(t) || (t = Fe(t));
  const n = e[3], r = t[3], o = Ge(n + r - n * r);
  return Io(xt(e[0], n, t[0], r, o), xt(e[1], n, t[1], r, o), xt(e[2], n, t[2], r, o), o);
}
function et(e, t) {
  const [n, r, o, i = 1] = Array.isArray(e) ? e : Fe(e), { lightness: l = 1, alpha: a = 1 } = t;
  return Fo([n * l, r * l, o * l, i * a]);
}
function Ge(e) {
  const t = Math.round(Number(e) * 100) / 100;
  return t > 1 ? 1 : t < 0 ? 0 : t;
}
function Z(e) {
  const t = Math.round(Number(e));
  return t > 255 ? 255 : t < 0 ? 0 : t;
}
function Fo(e) {
  const [t, n, r] = e;
  return 3 in e ? `rgba(${Z(t)}, ${Z(n)}, ${Z(r)}, ${Ge(e[3])})` : `rgba(${Z(t)}, ${Z(n)}, ${Z(r)}, 1)`;
}
function Ho(e = 8) {
  return Math.random().toString(16).slice(2, 2 + e);
}
function At(e, t, n = "default") {
  const r = t[n];
  if (r === void 0)
    throw new Error(`[vueuc/${e}]: slot[${n}] is empty.`);
  return r();
}
function It(e, t = !0, n = []) {
  return e.forEach((r) => {
    if (r !== null) {
      if (typeof r != "object") {
        (typeof r == "string" || typeof r == "number") && n.push(An(String(r)));
        return;
      }
      if (Array.isArray(r)) {
        It(r, t, n);
        return;
      }
      if (r.type === fe) {
        if (r.children === null)
          return;
        Array.isArray(r.children) && It(r.children, t, n);
      } else r.type !== Nt && n.push(r);
    }
  }), n;
}
function on(e, t, n = "default") {
  const r = t[n];
  if (r === void 0)
    throw new Error(`[vueuc/${e}]: slot[${n}] is empty.`);
  const o = It(r());
  if (o.length === 1)
    return o[0];
  throw new Error(`[vueuc/${e}]: slot[${n}] should have exactly one child.`);
}
let be = null;
function Wn() {
  if (be === null && (be = document.getElementById("v-binder-view-measurer"), be === null)) {
    be = document.createElement("div"), be.id = "v-binder-view-measurer";
    const { style: e } = be;
    e.position = "fixed", e.left = "0", e.right = "0", e.top = "0", e.bottom = "0", e.pointerEvents = "none", e.visibility = "hidden", document.body.appendChild(be);
  }
  return be.getBoundingClientRect();
}
function ko(e, t) {
  const n = Wn();
  return {
    top: t,
    left: e,
    height: 0,
    width: 0,
    right: n.width - e,
    bottom: n.height - t
  };
}
function _t(e) {
  const t = e.getBoundingClientRect(), n = Wn();
  return {
    left: t.left - n.left,
    top: t.top - n.top,
    bottom: n.height + n.top - t.bottom,
    right: n.width + n.left - t.right,
    width: t.width,
    height: t.height
  };
}
function Lo(e) {
  return e.nodeType === 9 ? null : e.parentNode;
}
function jn(e) {
  if (e === null)
    return null;
  const t = Lo(e);
  if (t === null)
    return null;
  if (t.nodeType === 9)
    return document;
  if (t.nodeType === 1) {
    const { overflow: n, overflowX: r, overflowY: o } = getComputedStyle(t);
    if (/(auto|scroll|overlay)/.test(n + o + r))
      return t;
  }
  return jn(t);
}
const No = ae({
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
    Xe("VBinder", (t = In()) === null || t === void 0 ? void 0 : t.proxy);
    const n = ne("VBinder", null), r = P(null), o = (s) => {
      r.value = s, n && e.syncTargetWithParent && n.setTargetRef(s);
    };
    let i = [];
    const l = () => {
      let s = r.value;
      for (; s = jn(s), s !== null; )
        i.push(s);
      for (const $ of i)
        J("scroll", $, S, !0);
    }, a = () => {
      for (const s of i)
        X("scroll", s, S, !0);
      i = [];
    }, u = /* @__PURE__ */ new Set(), f = (s) => {
      u.size === 0 && l(), u.has(s) || u.add(s);
    }, g = (s) => {
      u.has(s) && u.delete(s), u.size === 0 && a();
    }, S = () => {
      Oo(m);
    }, m = () => {
      u.forEach((s) => s());
    }, w = /* @__PURE__ */ new Set(), d = (s) => {
      w.size === 0 && J("resize", window, h), w.has(s) || w.add(s);
    }, b = (s) => {
      w.has(s) && w.delete(s), w.size === 0 && X("resize", window, h);
    }, h = () => {
      w.forEach((s) => s());
    };
    return we(() => {
      X("resize", window, h), a();
    }), {
      targetRef: r,
      setTargetRef: o,
      addScrollListener: f,
      removeScrollListener: g,
      addResizeListener: d,
      removeResizeListener: b
    };
  },
  render() {
    return At("binder", this.$slots);
  }
}), Wo = ae({
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
    return e ? ft(on("follower", this.$slots), [
      [t]
    ]) : on("follower", this.$slots);
  }
}), jo = "@css-render/vue3-ssr";
function Vo(e, t) {
  return `<style cssr-id="${e}">
${t}
</style>`;
}
function Uo(e, t, n) {
  const { styles: r, ids: o } = n;
  o.has(e) || r !== null && (o.add(e), r.push(Vo(e, t)));
}
const Xo = typeof document < "u";
function ht() {
  if (Xo)
    return;
  const e = ne(jo, null);
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
const Vn = /\s*,(?![^(]*\))\s*/g, Go = /\s+/g;
function Ko(e, t) {
  const n = [];
  return t.split(Vn).forEach((r) => {
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
      i.forEach((a) => {
        e.forEach((u) => {
          l.push(a.replace("&", u));
        });
      }), i = l;
    }
    i.forEach((l) => n.push(l));
  }), n;
}
function Zo(e, t) {
  const n = [];
  return t.split(Vn).forEach((r) => {
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
function an(e) {
  if (!e)
    return;
  const t = e.parentElement;
  t && t.removeChild(e);
}
function pt(e, t) {
  return (t ?? document.head).querySelector(`style[cssr-id="${e}"]`);
}
function Jo(e) {
  const t = document.createElement("style");
  return t.setAttribute("cssr-id", e), t;
}
function tt(e) {
  return e ? /^\s*@(s|m)/.test(e) : !1;
}
const Qo = /[A-Z]/g;
function Un(e) {
  return e.replace(Qo, (t) => "-" + t.toLowerCase());
}
function ei(e, t = "  ") {
  return typeof e == "object" && e !== null ? ` {
` + Object.entries(e).map((n) => t + `  ${Un(n[0])}: ${n[1]};`).join(`
`) + `
` + t + "}" : `: ${e};`;
}
function ti(e, t, n) {
  return typeof e == "function" ? e({
    context: t.context,
    props: n
  }) : e;
}
function sn(e, t, n, r) {
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
  return i.forEach((a) => {
    const u = o[a];
    if (a === "raw") {
      l.push(`
` + u + `
`);
      return;
    }
    a = Un(a), u != null && l.push(`  ${a}${ei(u)}`);
  }), e && l.push("}"), l.join(`
`);
}
function Dt(e, t, n) {
  e && e.forEach((r) => {
    if (Array.isArray(r))
      Dt(r, t, n);
    else if (typeof r == "function") {
      const o = r(t);
      Array.isArray(o) ? Dt(o, t, n) : o && n(o);
    } else r && n(r);
  });
}
function Xn(e, t, n, r, o) {
  const i = e.$;
  let l = "";
  if (!i || typeof i == "string")
    tt(i) ? l = i : t.push(i);
  else if (typeof i == "function") {
    const f = i({
      context: r.context,
      props: o
    });
    tt(f) ? l = f : t.push(f);
  } else if (i.before && i.before(r.context), !i.$ || typeof i.$ == "string")
    tt(i.$) ? l = i.$ : t.push(i.$);
  else if (i.$) {
    const f = i.$({
      context: r.context,
      props: o
    });
    tt(f) ? l = f : t.push(f);
  }
  const a = qo(t), u = sn(a, e.props, r, o);
  l ? n.push(`${l} {`) : u.length && n.push(u), e.children && Dt(e.children, {
    context: r.context,
    props: o
  }, (f) => {
    if (typeof f == "string") {
      const g = sn(a, { raw: f }, r, o);
      n.push(g);
    } else
      Xn(f, t, n, r, o);
  }), t.pop(), l && n.push("}"), i && i.after && i.after(r.context);
}
function ni(e, t, n) {
  const r = [];
  return Xn(e, [], r, t, n), r.join(`

`);
}
function Ft(e) {
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
    o.forEach(an), t.els = [];
  else {
    const i = pt(n, r);
    i && o.includes(i) && (an(i), t.els = o.filter((l) => l !== i));
  }
}
function un(e, t) {
  e.push(t);
}
function oi(e, t, n, r, o, i, l, a, u) {
  let f;
  if (n === void 0 && (f = t.render(r), n = Ft(f)), u) {
    u.adapter(n, f ?? t.render(r));
    return;
  }
  a === void 0 && (a = document.head);
  const g = pt(n, a);
  if (g !== null && !i)
    return g;
  const S = g ?? Jo(n);
  if (f === void 0 && (f = t.render(r)), S.textContent = f, g !== null)
    return g;
  if (l) {
    const m = a.querySelector(`meta[name="${l}"]`);
    if (m)
      return a.insertBefore(S, m), un(t.els, S), S;
  }
  return o ? a.insertBefore(S, a.querySelector("style, link")) : a.appendChild(S), un(t.els, S), S;
}
function ii(e) {
  return ni(this, this.instance, e);
}
function li(e = {}) {
  const { id: t, ssr: n, props: r, head: o = !1, force: i = !1, anchorMetaName: l, parent: a } = e;
  return oi(this.instance, this, t, r, o, i, l, a, n);
}
function ai(e = {}) {
  const { id: t, parent: n } = e;
  ri(this.instance, this, t, n);
}
const nt = function(e, t, n, r) {
  return {
    instance: e,
    $: t,
    props: n,
    children: r,
    els: [],
    render: ii,
    mount: li,
    unmount: ai
  };
}, si = function(e, t, n, r) {
  return Array.isArray(t) ? nt(e, { $: null }, null, t) : Array.isArray(n) ? nt(e, t, null, n) : Array.isArray(r) ? nt(e, t, n, r) : nt(e, t, n, null);
};
function Yn(e = {}) {
  const t = {
    c: (...n) => si(t, ...n),
    use: (n, ...r) => n.install(t, ...r),
    find: pt,
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
  return pt(e) !== null;
}
const { c: rt } = Yn(), di = "vueuc-style";
function dn(e) {
  return typeof e == "string" ? document.querySelector(e) : e();
}
const ci = ae({
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
      showTeleport: go(ge(e, "show")),
      mergedTo: z(() => {
        const { to: t } = e;
        return t ?? "body";
      })
    };
  },
  render() {
    return this.showTeleport ? this.disabled ? At("lazy-teleport", this.$slots) : M(Gr, {
      disabled: this.disabled,
      to: this.mergedTo
    }, At("lazy-teleport", this.$slots)) : null;
  }
}), ot = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, cn = {
  start: "end",
  center: "center",
  end: "start"
}, Ct = {
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
  const [l, a] = e.split("-");
  let u = a ?? "center", f = {
    top: 0,
    left: 0
  };
  const g = (w, d, b) => {
    let h = 0, s = 0;
    const $ = n[w] - t[d] - t[w];
    return $ > 0 && r && (b ? s = fn[d] ? $ : -$ : h = fn[d] ? $ : -$), {
      left: h,
      top: s
    };
  }, S = l === "left" || l === "right";
  if (u !== "center") {
    const w = pi[e], d = ot[w], b = Ct[w];
    if (n[b] > t[b]) {
      if (
        // current space is not enough
        // ----------[ target ]---------|
        // -------[     follower        ]
        t[w] + t[b] < n[b]
      ) {
        const h = (n[b] - t[b]) / 2;
        t[w] < h || t[d] < h ? t[w] < t[d] ? (u = cn[a], f = g(b, d, S)) : f = g(b, w, S) : u = "center";
      }
    } else n[b] < t[b] && t[d] < 0 && // opposite align has larger space
    // ------------[   target   ]
    // ----------------[follower]
    t[w] > t[d] && (u = cn[a]);
  } else {
    const w = l === "bottom" || l === "top" ? "left" : "top", d = ot[w], b = Ct[w], h = (n[b] - t[b]) / 2;
    // center is not enough
    // ----------- [ target ]--|
    // -------[     follower     ]
    (t[w] < h || t[d] < h) && (t[w] > t[d] ? (u = hn[w], f = g(b, w, S)) : (u = hn[d], f = g(b, d, S)));
  }
  let m = l;
  return (
    // space is not enough
    t[l] < n[Ct[l]] && // opposite position's space is larger
    t[l] < t[ot[l]] && (m = ot[l]), {
      placement: u !== "center" ? `${m}-${u}` : m,
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
const gi = rt([
  rt(".v-binder-follower-container", {
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    height: "0",
    pointerEvents: "none",
    zIndex: "auto"
  }),
  rt(".v-binder-follower-content", {
    position: "absolute",
    zIndex: "auto"
  }, [
    rt("> *", {
      pointerEvents: "all"
    })
  ])
]), wi = ae({
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
    const t = ne("VBinder"), n = Ze(() => e.enabled !== void 0 ? e.enabled : e.show), r = P(null), o = P(null), i = () => {
      const { syncTrigger: m } = e;
      m.includes("scroll") && t.addScrollListener(u), m.includes("resize") && t.addResizeListener(u);
    }, l = () => {
      t.removeScrollListener(u), t.removeResizeListener(u);
    };
    Me(() => {
      n.value && (u(), i());
    });
    const a = ht();
    gi.mount({
      id: "vueuc/binder",
      head: !0,
      anchorMetaName: di,
      ssr: a
    }), we(() => {
      l();
    }), So(() => {
      n.value && u();
    });
    const u = () => {
      if (!n.value)
        return;
      const m = r.value;
      if (m === null)
        return;
      const w = t.targetRef, { x: d, y: b, overlap: h } = e, s = d !== void 0 && b !== void 0 ? ko(d, b) : _t(w);
      m.style.setProperty("--v-target-width", `${Math.round(s.width)}px`), m.style.setProperty("--v-target-height", `${Math.round(s.height)}px`);
      const { width: $, minWidth: B, placement: I, internalShift: j, flip: A } = e;
      m.setAttribute("v-placement", I), h ? m.setAttribute("v-overlap", "") : m.removeAttribute("v-overlap");
      const { style: c } = m;
      $ === "target" ? c.width = `${s.width}px` : $ !== void 0 ? c.width = $ : c.width = "", B === "target" ? c.minWidth = `${s.width}px` : B !== void 0 ? c.minWidth = B : c.minWidth = "";
      const v = _t(m), _ = _t(o.value), { left: x, top: R, placement: D } = vi(I, s, v, j, A, h), k = mi(D, h), { left: L, top: y, transform: T } = bi(D, _, s, R, x, h);
      m.setAttribute("v-placement", D), m.style.setProperty("--v-offset-left", `${Math.round(x)}px`), m.style.setProperty("--v-offset-top", `${Math.round(R)}px`), m.style.transform = `translateX(${L}) translateY(${y}) ${T}`, m.style.setProperty("--v-transform-origin", k), m.style.transformOrigin = k;
    };
    ce(n, (m) => {
      m ? (i(), f()) : l();
    });
    const f = () => {
      Kr().then(u).catch((m) => console.error(m));
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
    ].forEach((m) => {
      ce(ge(e, m), u);
    }), ["teleportDisabled"].forEach((m) => {
      ce(ge(e, m), f);
    }), ce(ge(e, "syncTrigger"), (m) => {
      m.includes("resize") ? t.addResizeListener(u) : t.removeResizeListener(u), m.includes("scroll") ? t.addScrollListener(u) : t.removeScrollListener(u);
    });
    const g = Ln(), S = Ze(() => {
      const { to: m } = e;
      if (m !== void 0)
        return m;
      g.value;
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
        return this.zindexable ? ft(n, [
          [
            kn,
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
var $e = [], yi = function() {
  return $e.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, Si = function() {
  return $e.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, pn = "ResizeObserver loop completed with undelivered notifications.", xi = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: pn
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = pn), window.dispatchEvent(e);
}, qe;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(qe || (qe = {}));
var Oe = function(e) {
  return Object.freeze(e);
}, _i = /* @__PURE__ */ function() {
  function e(t, n) {
    this.inlineSize = t, this.blockSize = n, Oe(this);
  }
  return e;
}(), Gn = function() {
  function e(t, n, r, o) {
    return this.x = t, this.y = n, this.width = r, this.height = o, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Oe(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, n = t.x, r = t.y, o = t.top, i = t.right, l = t.bottom, a = t.left, u = t.width, f = t.height;
    return { x: n, y: r, top: o, right: i, bottom: l, left: a, width: u, height: f };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), Wt = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, Kn = function(e) {
  if (Wt(e)) {
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
}, Ci = function(e) {
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
}, Ke = typeof window < "u" ? window : {}, it = /* @__PURE__ */ new WeakMap(), mn = /auto|scroll/, Ei = /^tb|vertical/, $i = /msie|trident/i.test(Ke.navigator && Ke.navigator.userAgent), ue = function(e) {
  return parseFloat(e || "0");
}, Ie = function(e, t, n) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = !1), new _i((n ? t : e) || 0, (n ? e : t) || 0);
}, bn = Oe({
  devicePixelContentBoxSize: Ie(),
  borderBoxSize: Ie(),
  contentBoxSize: Ie(),
  contentRect: new Gn(0, 0, 0, 0)
}), Zn = function(e, t) {
  if (t === void 0 && (t = !1), it.has(e) && !t)
    return it.get(e);
  if (Kn(e))
    return it.set(e, bn), bn;
  var n = getComputedStyle(e), r = Wt(e) && e.ownerSVGElement && e.getBBox(), o = !$i && n.boxSizing === "border-box", i = Ei.test(n.writingMode || ""), l = !r && mn.test(n.overflowY || ""), a = !r && mn.test(n.overflowX || ""), u = r ? 0 : ue(n.paddingTop), f = r ? 0 : ue(n.paddingRight), g = r ? 0 : ue(n.paddingBottom), S = r ? 0 : ue(n.paddingLeft), m = r ? 0 : ue(n.borderTopWidth), w = r ? 0 : ue(n.borderRightWidth), d = r ? 0 : ue(n.borderBottomWidth), b = r ? 0 : ue(n.borderLeftWidth), h = S + f, s = u + g, $ = b + w, B = m + d, I = a ? e.offsetHeight - B - e.clientHeight : 0, j = l ? e.offsetWidth - $ - e.clientWidth : 0, A = o ? h + $ : 0, c = o ? s + B : 0, v = r ? r.width : ue(n.width) - A - j, _ = r ? r.height : ue(n.height) - c - I, x = v + h + j + $, R = _ + s + I + B, D = Oe({
    devicePixelContentBoxSize: Ie(Math.round(v * devicePixelRatio), Math.round(_ * devicePixelRatio), i),
    borderBoxSize: Ie(x, R, i),
    contentBoxSize: Ie(v, _, i),
    contentRect: new Gn(S, u, v, _)
  });
  return it.set(e, D), D;
}, qn = function(e, t, n) {
  var r = Zn(e, n), o = r.borderBoxSize, i = r.contentBoxSize, l = r.devicePixelContentBoxSize;
  switch (t) {
    case qe.DEVICE_PIXEL_CONTENT_BOX:
      return l;
    case qe.BORDER_BOX:
      return o;
    default:
      return i;
  }
}, Oi = /* @__PURE__ */ function() {
  function e(t) {
    var n = Zn(t);
    this.target = t, this.contentRect = n.contentRect, this.borderBoxSize = Oe([n.borderBoxSize]), this.contentBoxSize = Oe([n.contentBoxSize]), this.devicePixelContentBoxSize = Oe([n.devicePixelContentBoxSize]);
  }
  return e;
}(), Jn = function(e) {
  if (Kn(e))
    return 1 / 0;
  for (var t = 0, n = e.parentNode; n; )
    t += 1, n = n.parentNode;
  return t;
}, Mi = function() {
  var e = 1 / 0, t = [];
  $e.forEach(function(l) {
    if (l.activeTargets.length !== 0) {
      var a = [];
      l.activeTargets.forEach(function(f) {
        var g = new Oi(f.target), S = Jn(f.target);
        a.push(g), f.lastReportedSize = qn(f.target, f.observedBox), S < e && (e = S);
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
}, gn = function(e) {
  $e.forEach(function(n) {
    n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(o) {
      o.isActive() && (Jn(o.target) > e ? n.activeTargets.push(o) : n.skippedTargets.push(o));
    });
  });
}, Ti = function() {
  var e = 0;
  for (gn(e); yi(); )
    e = Mi(), gn(e);
  return Si() && xi(), e > 0;
}, Et, Qn = [], Pi = function() {
  return Qn.splice(0).forEach(function(e) {
    return e();
  });
}, Ri = function(e) {
  if (!Et) {
    var t = 0, n = document.createTextNode(""), r = { characterData: !0 };
    new MutationObserver(function() {
      return Pi();
    }).observe(n, r), Et = function() {
      n.textContent = "".concat(t ? t-- : t++);
    };
  }
  Qn.push(e), Et();
}, zi = function(e) {
  Ri(function() {
    requestAnimationFrame(e);
  });
}, ut = 0, Bi = function() {
  return !!ut;
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
], yn = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, $t = !1, Di = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var n = this;
    if (t === void 0 && (t = Ai), !$t) {
      $t = !0;
      var r = yn(t);
      zi(function() {
        var o = !1;
        try {
          o = Ti();
        } finally {
          if ($t = !1, t = r - yn(), !Bi())
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
    document.body ? n() : Ke.addEventListener("DOMContentLoaded", n);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), wn.forEach(function(n) {
      return Ke.addEventListener(n, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), wn.forEach(function(n) {
      return Ke.removeEventListener(n, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), Ht = new Di(), Sn = function(e) {
  !ut && e > 0 && Ht.start(), ut += e, !ut && Ht.stop();
}, Fi = function(e) {
  return !Wt(e) && !Ci(e) && getComputedStyle(e).display === "inline";
}, Hi = function() {
  function e(t, n) {
    this.target = t, this.observedBox = n || qe.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = qn(this.target, this.observedBox, !0);
    return Fi(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), ki = /* @__PURE__ */ function() {
  function e(t, n) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = n;
  }
  return e;
}(), lt = /* @__PURE__ */ new WeakMap(), xn = function(e, t) {
  for (var n = 0; n < e.length; n += 1)
    if (e[n].target === t)
      return n;
  return -1;
}, at = function() {
  function e() {
  }
  return e.connect = function(t, n) {
    var r = new ki(t, n);
    lt.set(t, r);
  }, e.observe = function(t, n, r) {
    var o = lt.get(t), i = o.observationTargets.length === 0;
    xn(o.observationTargets, n) < 0 && (i && $e.push(o), o.observationTargets.push(new Hi(n, r && r.box)), Sn(1), Ht.schedule());
  }, e.unobserve = function(t, n) {
    var r = lt.get(t), o = xn(r.observationTargets, n), i = r.observationTargets.length === 1;
    o >= 0 && (i && $e.splice($e.indexOf(r), 1), r.observationTargets.splice(o, 1), Sn(-1));
  }, e.disconnect = function(t) {
    var n = this, r = lt.get(t);
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
    at.connect(this, t);
  }
  return e.prototype.observe = function(t, n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!vn(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    at.observe(this, t, n);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!vn(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    at.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    at.disconnect(this);
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
const _n = new Ni(), Cn = ae({
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
    Me(() => {
      const o = n.$el;
      if (o === void 0) {
        ln("resize-observer", "$el does not exist.");
        return;
      }
      if (o.nextElementSibling !== o.nextSibling && o.nodeType === 3 && o.nodeValue !== "") {
        ln("resize-observer", "$el can not be observed (it may be a text node).");
        return;
      }
      o.nextElementSibling !== null && (_n.registerHandler(o.nextElementSibling, r), t = !0);
    }), we(() => {
      t && _n.unregisterHandler(n.$el.nextElementSibling);
    });
  },
  render() {
    return Zr(this.$slots, "default");
  }
});
function er(e) {
  return e instanceof HTMLElement;
}
function tr(e) {
  for (let t = 0; t < e.childNodes.length; t++) {
    const n = e.childNodes[t];
    if (er(n) && (rr(n) || tr(n)))
      return !0;
  }
  return !1;
}
function nr(e) {
  for (let t = e.childNodes.length - 1; t >= 0; t--) {
    const n = e.childNodes[t];
    if (er(n) && (rr(n) || nr(n)))
      return !0;
  }
  return !1;
}
function rr(e) {
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
let We = [];
const ji = ae({
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
    const t = Ho(), n = P(null), r = P(null);
    let o = !1, i = !1;
    const l = typeof document > "u" ? null : document.activeElement;
    function a() {
      return We[We.length - 1] === t;
    }
    function u(h) {
      var s;
      h.code === "Escape" && a() && ((s = e.onEsc) === null || s === void 0 || s.call(e, h));
    }
    Me(() => {
      ce(() => e.active, (h) => {
        h ? (S(), J("keydown", document, u)) : (X("keydown", document, u), o && m());
      }, {
        immediate: !0
      });
    }), we(() => {
      X("keydown", document, u), o && m();
    });
    function f(h) {
      if (!i && a()) {
        const s = g();
        if (s === null || s.contains(ct(h)))
          return;
        w("first");
      }
    }
    function g() {
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
        if (We.push(t), e.autoFocus) {
          const { initialFocusTo: s } = e;
          s === void 0 ? w("first") : (h = dn(s)) === null || h === void 0 || h.focus({ preventScroll: !0 });
        }
        o = !0, document.addEventListener("focus", f, !0);
      }
    }
    function m() {
      var h;
      if (e.disabled || (document.removeEventListener("focus", f, !0), We = We.filter(($) => $ !== t), a()))
        return;
      const { finalFocusTo: s } = e;
      s !== void 0 ? (h = dn(s)) === null || h === void 0 || h.focus({ preventScroll: !0 }) : e.returnFocusOnDeactivated && l instanceof HTMLElement && (i = !0, l.focus({ preventScroll: !0 }), i = !1);
    }
    function w(h) {
      if (a() && e.active) {
        const s = n.value, $ = r.value;
        if (s !== null && $ !== null) {
          const B = g();
          if (B == null || B === $) {
            i = !0, s.focus({ preventScroll: !0 }), i = !1;
            return;
          }
          i = !0;
          const I = h === "first" ? tr(B) : nr(B);
          i = !1, I || (i = !0, s.focus({ preventScroll: !0 }), i = !1);
        }
      }
    }
    function d(h) {
      if (i)
        return;
      const s = g();
      s !== null && (h.relatedTarget !== null && s.contains(h.relatedTarget) ? w("last") : w("first"));
    }
    function b(h) {
      i || (h.relatedTarget !== null && h.relatedTarget === n.value ? w("last") : w("first"));
    }
    return {
      focusableStartRef: n,
      focusableEndRef: r,
      focusableStyle: "position: absolute; height: 0; width: 0;",
      handleStartFocus: d,
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
    return M(fe, null, [
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
});
const Vi = "n-internal-select-menu-body", or = "n-drawer-body", ir = "n-modal-body", lr = "n-popover-body", ar = "__disabled__";
function He(e) {
  const t = ne(ir, null), n = ne(or, null), r = ne(lr, null), o = ne(Vi, null), i = P();
  if (typeof document < "u") {
    i.value = document.fullscreenElement;
    const l = () => {
      i.value = document.fullscreenElement;
    };
    Me(() => {
      J("fullscreenchange", document, l);
    }), we(() => {
      X("fullscreenchange", document, l);
    });
  }
  return Ze(() => {
    var l;
    const {
      to: a
    } = e;
    return a !== void 0 ? a === !1 ? ar : a === !0 ? i.value || "body" : a : t != null && t.value ? (l = t.value.$el) !== null && l !== void 0 ? l : t.value : n != null && n.value ? n.value : r != null && r.value ? r.value : o != null && o.value ? o.value : a ?? (i.value || "body");
  });
}
He.tdkey = ar;
He.propTo = {
  type: [String, Object, Boolean],
  default: void 0
};
function Ui(e) {
  const t = {
    isDeactivated: !1
  };
  let n = !1;
  return qr(() => {
    if (t.isDeactivated = !1, !n) {
      n = !0;
      return;
    }
    e();
  }), Jr(() => {
    t.isDeactivated = !0, n || (n = !0);
  }), t;
}
const Xi = /^(\d|\.)+$/, En = /(\d|\.)+/;
function Ot(e, {
  c: t = 1,
  offset: n = 0,
  attachPx: r = !0
} = {}) {
  if (typeof e == "number") {
    const o = (e + n) * t;
    return o === 0 ? "0" : `${o}px`;
  } else if (typeof e == "string")
    if (Xi.test(e)) {
      const o = (Number(e) + n) * t;
      return r ? o === 0 ? "0" : `${o}px` : `${o}`;
    } else {
      const o = En.exec(e);
      return o ? e.replace(En, String((Number(o[0]) + n) * t)) : e;
    }
  return e;
}
function $n(e) {
  const {
    left: t,
    right: n,
    top: r,
    bottom: o
  } = Ve(e);
  return `${r} ${t} ${o} ${n}`;
}
var On = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_26504_XKHRYLZIHXXZLNIG", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.97.2", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-5a8078c568-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
function Yi(e) {
  let t = ".", n = "__", r = "--", o;
  {
    let d = e.blockPrefix;
    d && (t = d), d = e.elementPrefix, d && (n = d), d = e.modifierPrefix, d && (r = d);
  }
  const i = {
    install(d) {
      o = d.c;
      const b = d.context;
      b.bem = {}, b.bem.b = null, b.bem.els = null;
    }
  };
  function l(d) {
    let b, h;
    return {
      before(s) {
        b = s.bem.b, h = s.bem.els, s.bem.els = null;
      },
      after(s) {
        s.bem.b = b, s.bem.els = h;
      },
      $({ context: s, props: $ }) {
        return d = typeof d == "string" ? d : d({ context: s, props: $ }), s.bem.b = d, `${($ == null ? void 0 : $.bPrefix) || t}${s.bem.b}`;
      }
    };
  }
  function a(d) {
    let b;
    return {
      before(h) {
        b = h.bem.els;
      },
      after(h) {
        h.bem.els = b;
      },
      $({ context: h, props: s }) {
        return d = typeof d == "string" ? d : d({ context: h, props: s }), h.bem.els = d.split(",").map(($) => $.trim()), h.bem.els.map(($) => `${(s == null ? void 0 : s.bPrefix) || t}${h.bem.b}${n}${$}`).join(", ");
      }
    };
  }
  function u(d) {
    return {
      $({ context: b, props: h }) {
        d = typeof d == "string" ? d : d({ context: b, props: h });
        const s = d.split(",").map((I) => I.trim());
        function $(I) {
          return s.map((j) => `&${(h == null ? void 0 : h.bPrefix) || t}${b.bem.b}${I !== void 0 ? `${n}${I}` : ""}${r}${j}`).join(", ");
        }
        const B = b.bem.els;
        if (B !== null) {
          if (On.NODE_ENV !== "production" && B.length >= 2)
            throw Error(`[css-render/plugin-bem]: m(${d}) is invalid, using modifier inside multiple elements is not allowed`);
          return $(B[0]);
        } else
          return $();
      }
    };
  }
  function f(d) {
    return {
      $({ context: b, props: h }) {
        d = typeof d == "string" ? d : d({ context: b, props: h });
        const s = b.bem.els;
        if (On.NODE_ENV !== "production" && s !== null && s.length >= 2)
          throw Error(`[css-render/plugin-bem]: notM(${d}) is invalid, using modifier inside multiple elements is not allowed`);
        return `&:not(${(h == null ? void 0 : h.bPrefix) || t}${b.bem.b}${s !== null && s.length > 0 ? `${n}${s[0]}` : ""}${r}${d})`;
      }
    };
  }
  return Object.assign(i, {
    cB: (...d) => o(l(d[0]), d[1], d[2]),
    cE: (...d) => o(a(d[0]), d[1], d[2]),
    cM: (...d) => o(u(d[0]), d[1], d[2]),
    cNotM: (...d) => o(f(d[0]), d[1], d[2])
  }), i;
}
const Gi = "n", Ki = `.${Gi}-`, Zi = "__", qi = "--", sr = Yn(), ur = Yi({
  blockPrefix: Ki,
  elementPrefix: Zi,
  modifierPrefix: qi
});
sr.use(ur);
const {
  c: H,
  find: Xl
} = sr, {
  cB: te,
  cE: Ee,
  cM: le,
  cNotM: Mt
} = ur, Ji = (...e) => H(">", [te(...e)]);
let Tt;
function Qi() {
  return Tt === void 0 && (Tt = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")), Tt;
}
const Mn = /* @__PURE__ */ new Set();
function je(e, t) {
  const n = `[naive/${e}]: ${t}`;
  Mn.has(n) || (Mn.add(n), console.error(n));
}
function Tn(e, t) {
  console.error(`[naive/${e}]: ${t}`);
}
function el(e, t) {
  throw new Error(`[naive/${e}]: ${t}`);
}
function Ue(e, ...t) {
  if (Array.isArray(e))
    e.forEach((n) => Ue(n, ...t));
  else
    return e(...t);
}
function kt(e, t = !0, n = []) {
  return e.forEach((r) => {
    if (r !== null) {
      if (typeof r != "object") {
        (typeof r == "string" || typeof r == "number") && n.push(An(String(r)));
        return;
      }
      if (Array.isArray(r)) {
        kt(r, t, n);
        return;
      }
      if (r.type === fe) {
        if (r.children === null) return;
        Array.isArray(r.children) && kt(r.children, t, n);
      } else {
        if (r.type === Nt && t) return;
        n.push(r);
      }
    }
  }), n;
}
function tl(e, t = "default", n = void 0) {
  const r = e[t];
  if (!r)
    return Tn("getFirstSlotVNode", `slot[${t}] is empty`), null;
  const o = kt(r(n));
  return o.length === 1 ? o[0] : (Tn("getFirstSlotVNode", `slot[${t}] should have exactly one child`), null);
}
function nl(e, t = [], n) {
  const r = {};
  return t.forEach((o) => {
    r[o] = e[o];
  }), Object.assign(r, n);
}
function jt(e) {
  return e.some((t) => Qr(t) ? !(t.type === Nt || t.type === fe && !jt(t.children)) : !0) ? e : null;
}
function Pt(e, t) {
  const n = e && jt(e());
  return t(n || null);
}
function Pn(e) {
  return !(e && jt(e()));
}
const Rn = ae({
  render() {
    var e, t;
    return (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e);
  }
}), vt = "n-config-provider", rl = "n";
function dr(e = {}, t = {
  defaultBordered: !0
}) {
  const n = ne(vt, null);
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
    mergedClsPrefixRef: n ? n.mergedClsPrefixRef : eo(rl),
    namespaceRef: z(() => n == null ? void 0 : n.mergedNamespaceRef.value)
  };
}
function cr(e, t, n, r) {
  n || el("useThemeClass", "cssVarsRef is not passed");
  const o = ne(vt, null), i = o == null ? void 0 : o.mergedThemeHashRef, l = o == null ? void 0 : o.styleMountTarget, a = P(""), u = ht();
  let f;
  const g = `__${e}`, S = () => {
    let m = g;
    const w = i == null ? void 0 : i.value;
    w && (m += `-${w}`);
    const {
      themeOverrides: d,
      builtinThemeOverrides: b
    } = r;
    d && (m += `-${Ft(JSON.stringify(d))}`), b && (m += `-${Ft(JSON.stringify(b))}`), a.value = m, f = () => {
      const h = n.value;
      let s = "";
      for (const $ in h)
        s += `${$}: ${h[$]};`;
      H(`.${m}`, s).mount({
        id: m,
        ssr: u,
        parent: l
      }), f = void 0;
    };
  };
  return De(() => {
    S();
  }), {
    themeClass: a,
    onRender: () => {
      f == null || f();
    }
  };
}
const Lt = "naive-ui-style";
function ol(e, t, n) {
  if (!t) return;
  const r = ht(), o = z(() => {
    const {
      value: a
    } = t;
    if (!a)
      return;
    const u = a[e];
    if (u)
      return u;
  }), i = ne(vt, null), l = () => {
    De(() => {
      const {
        value: a
      } = n, u = `${a}${e}Rtl`;
      if (ui(u, r)) return;
      const {
        value: f
      } = o;
      f && f.style.mount({
        id: u,
        head: !0,
        anchorMetaName: Lt,
        props: {
          bPrefix: a ? `.${a}-` : void 0
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
  fontSize: il,
  fontFamily: ll,
  lineHeight: al
} = Vt, sl = H("body", `
 margin: 0;
 font-size: ${il};
 font-family: ${ll};
 line-height: ${al};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [H("input", `
 font-family: inherit;
 font-size: inherit;
 `)]);
function Ne(e, t, n, r, o, i) {
  const l = ht(), a = ne(vt, null);
  if (n) {
    const f = () => {
      const g = i == null ? void 0 : i.value;
      n.mount({
        id: g === void 0 ? t : g + t,
        head: !0,
        props: {
          bPrefix: g ? `.${g}-` : void 0
        },
        anchorMetaName: Lt,
        ssr: l,
        parent: a == null ? void 0 : a.styleMountTarget
      }), a != null && a.preflightStyleDisabled || sl.mount({
        id: "n-global",
        head: !0,
        anchorMetaName: Lt,
        ssr: l,
        parent: a == null ? void 0 : a.styleMountTarget
      });
    };
    l ? f() : Dn(f);
  }
  return z(() => {
    var f;
    const {
      theme: {
        common: g,
        self: S,
        peers: m = {}
      } = {},
      themeOverrides: w = {},
      builtinThemeOverrides: d = {}
    } = o, {
      common: b,
      peers: h
    } = w, {
      common: s = void 0,
      [e]: {
        common: $ = void 0,
        self: B = void 0,
        peers: I = {}
      } = {}
    } = (a == null ? void 0 : a.mergedThemeRef.value) || {}, {
      common: j = void 0,
      [e]: A = {}
    } = (a == null ? void 0 : a.mergedThemeOverridesRef.value) || {}, {
      common: c,
      peers: v = {}
    } = A, _ = Qe({}, g || $ || s || r.common, j, c, b), x = Qe(
      // {}, executed every time, no need for empty obj
      (f = S || B || r.self) === null || f === void 0 ? void 0 : f(_),
      d,
      A,
      w
    );
    return {
      common: _,
      self: x,
      peers: Qe({}, r.peers, I, m),
      peerOverrides: Qe({}, d.peers, v, h)
    };
  });
}
Ne.props = {
  theme: Object,
  themeOverrides: Object,
  builtinThemeOverrides: Object
};
const E = {
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
}, ul = Fe(E.neutralBase), fr = Fe(E.neutralInvertBase), dl = `rgba(${fr.slice(0, 3).join(", ")}, `;
function zn(e) {
  return `${dl + String(e)})`;
}
function K(e) {
  const t = Array.from(fr);
  return t[3] = Number(e), Do(ul, t);
}
const hr = Object.assign(Object.assign({
  name: "common"
}, Vt), {
  baseColor: E.neutralBase,
  // primary color
  primaryColor: E.primaryDefault,
  primaryColorHover: E.primaryHover,
  primaryColorPressed: E.primaryActive,
  primaryColorSuppl: E.primarySuppl,
  // info color
  infoColor: E.infoDefault,
  infoColorHover: E.infoHover,
  infoColorPressed: E.infoActive,
  infoColorSuppl: E.infoSuppl,
  // success color
  successColor: E.successDefault,
  successColorHover: E.successHover,
  successColorPressed: E.successActive,
  successColorSuppl: E.successSuppl,
  // warning color
  warningColor: E.warningDefault,
  warningColorHover: E.warningHover,
  warningColorPressed: E.warningActive,
  warningColorSuppl: E.warningSuppl,
  // error color
  errorColor: E.errorDefault,
  errorColorHover: E.errorHover,
  errorColorPressed: E.errorActive,
  errorColorSuppl: E.errorSuppl,
  // text color
  textColorBase: E.neutralTextBase,
  textColor1: "rgb(31, 34, 37)",
  textColor2: "rgb(51, 54, 57)",
  textColor3: "rgb(118, 124, 130)",
  // textColor4: neutral(base.alpha4), // disabled, placeholder, icon
  // textColor5: neutral(base.alpha5),
  textColorDisabled: K(E.alpha4),
  placeholderColor: K(E.alpha4),
  placeholderColorDisabled: K(E.alpha5),
  iconColor: K(E.alpha4),
  iconColorHover: et(K(E.alpha4), {
    lightness: 0.75
  }),
  iconColorPressed: et(K(E.alpha4), {
    lightness: 0.9
  }),
  iconColorDisabled: K(E.alpha5),
  opacity1: E.alpha1,
  opacity2: E.alpha2,
  opacity3: E.alpha3,
  opacity4: E.alpha4,
  opacity5: E.alpha5,
  dividerColor: "rgb(239, 239, 245)",
  borderColor: "rgb(224, 224, 230)",
  // close
  closeIconColor: K(Number(E.alphaClose)),
  closeIconColorHover: K(Number(E.alphaClose)),
  closeIconColorPressed: K(Number(E.alphaClose)),
  closeColorHover: "rgba(0, 0, 0, .09)",
  closeColorPressed: "rgba(0, 0, 0, .13)",
  // clear
  clearColor: K(E.alpha4),
  clearColorHover: et(K(E.alpha4), {
    lightness: 0.75
  }),
  clearColorPressed: et(K(E.alpha4), {
    lightness: 0.9
  }),
  scrollbarColor: zn(E.alphaScrollbar),
  scrollbarColorHover: zn(E.alphaScrollbarHover),
  scrollbarWidth: "5px",
  scrollbarHeight: "5px",
  scrollbarBorderRadius: "5px",
  progressRailColor: K(E.alphaProgressRail),
  railColor: "rgb(219, 219, 223)",
  popoverColor: E.neutralPopover,
  tableColor: E.neutralCard,
  cardColor: E.neutralCard,
  modalColor: E.neutralModal,
  bodyColor: E.neutralBody,
  tagColor: "#eee",
  avatarColor: K(E.alphaAvatar),
  invertedColor: "rgb(0, 20, 40)",
  inputColor: K(E.alphaInput),
  codeColor: "rgb(244, 244, 248)",
  tabColor: "rgb(247, 247, 250)",
  actionColor: "rgb(250, 250, 252)",
  tableHeaderColor: "rgb(250, 250, 252)",
  hoverColor: "rgb(243, 243, 245)",
  // use color with alpha since it can be nested with header filter & sorter effect
  tableColorHover: "rgba(0, 0, 100, 0.03)",
  tableColorStriped: "rgba(0, 0, 100, 0.02)",
  pressedColor: "rgb(237, 237, 239)",
  opacityDisabled: E.alphaDisabled,
  inputColorDisabled: "rgb(250, 250, 252)",
  // secondary button color
  // can also be used in tertiary button & quaternary button
  buttonColor2: "rgba(46, 51, 56, .05)",
  buttonColor2Hover: "rgba(46, 51, 56, .09)",
  buttonColor2Pressed: "rgba(46, 51, 56, .13)",
  boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",
  boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",
  boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"
}), cl = {
  railInsetHorizontalBottom: "auto 2px 4px 2px",
  railInsetHorizontalTop: "4px 2px auto 2px",
  railInsetVerticalRight: "2px 4px 2px auto",
  railInsetVerticalLeft: "2px auto 2px 4px",
  railColor: "transparent"
};
function fl(e) {
  const {
    scrollbarColor: t,
    scrollbarColorHover: n,
    scrollbarHeight: r,
    scrollbarWidth: o,
    scrollbarBorderRadius: i
  } = e;
  return Object.assign(Object.assign({}, cl), {
    height: r,
    width: o,
    borderRadius: i,
    color: t,
    colorHover: n
  });
}
const hl = {
  name: "Scrollbar",
  common: hr,
  self: fl
}, {
  cubicBezierEaseInOut: Bn
} = Vt;
function pl({
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
const vl = te("scrollbar", `
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
 `, [le("horizontal", `
 height: var(--n-scrollbar-height);
 `, [H(">", [Ee("scrollbar", `
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
 `, [H(">", [Ee("scrollbar", `
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
 `), le("disabled", [H(">", [Ee("scrollbar", "pointer-events: none;")])]), H(">", [Ee("scrollbar", `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [pl(), H("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), ml = Object.assign(Object.assign({}, Ne.props), {
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
}), bl = ae({
  name: "Scrollbar",
  props: ml,
  inheritAttrs: !1,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: n,
      mergedRtlRef: r
    } = dr(e), o = ol("Scrollbar", r, t), i = P(null), l = P(null), a = P(null), u = P(null), f = P(null), g = P(null), S = P(null), m = P(null), w = P(null), d = P(null), b = P(null), h = P(0), s = P(0), $ = P(!1), B = P(!1);
    let I = !1, j = !1, A, c, v = 0, _ = 0, x = 0, R = 0;
    const D = Eo(), k = Ne("Scrollbar", "-scrollbar", vl, hl, e, t), L = z(() => {
      const {
        value: p
      } = m, {
        value: C
      } = g, {
        value: O
      } = d;
      return p === null || C === null || O === null ? 0 : Math.min(p, O * p / C + nn(k.value.self.width) * 1.5);
    }), y = z(() => `${L.value}px`), T = z(() => {
      const {
        value: p
      } = w, {
        value: C
      } = S, {
        value: O
      } = b;
      return p === null || C === null || O === null ? 0 : O * p / C + nn(k.value.self.height) * 1.5;
    }), N = z(() => `${T.value}px`), Y = z(() => {
      const {
        value: p
      } = m, {
        value: C
      } = h, {
        value: O
      } = g, {
        value: F
      } = d;
      if (p === null || O === null || F === null)
        return 0;
      {
        const V = O - p;
        return V ? C / V * (F - L.value) : 0;
      }
    }), q = z(() => `${Y.value}px`), G = z(() => {
      const {
        value: p
      } = w, {
        value: C
      } = s, {
        value: O
      } = S, {
        value: F
      } = b;
      if (p === null || O === null || F === null)
        return 0;
      {
        const V = O - p;
        return V ? C / V * (F - T.value) : 0;
      }
    }), se = z(() => `${G.value}px`), Je = z(() => {
      const {
        value: p
      } = m, {
        value: C
      } = g;
      return p !== null && C !== null && C > p;
    }), Ut = z(() => {
      const {
        value: p
      } = w, {
        value: C
      } = S;
      return p !== null && C !== null && C > p;
    }), vr = z(() => {
      const {
        trigger: p
      } = e;
      return p === "none" || $.value;
    }), mr = z(() => {
      const {
        trigger: p
      } = e;
      return p === "none" || B.value;
    }), ye = z(() => {
      const {
        container: p
      } = e;
      return p ? p() : l.value;
    }), br = z(() => {
      const {
        content: p
      } = e;
      return p ? p() : a.value;
    }), Xt = (p, C) => {
      if (!e.scrollable) return;
      if (typeof p == "number") {
        Te(p, C ?? 0, 0, !1, "auto");
        return;
      }
      const {
        left: O,
        top: F,
        index: V,
        elSize: Q,
        position: ie,
        behavior: W,
        el: re,
        debounce: he = !0
      } = p;
      (O !== void 0 || F !== void 0) && Te(O ?? 0, F ?? 0, 0, !1, W), re !== void 0 ? Te(0, re.offsetTop, re.offsetHeight, he, W) : V !== void 0 && Q !== void 0 ? Te(0, V * Q, Q, he, W) : ie === "bottom" ? Te(0, Number.MAX_SAFE_INTEGER, 0, !1, W) : ie === "top" && Te(0, 0, 0, !1, W);
    }, Yt = Ui(() => {
      e.container || Xt({
        top: h.value,
        left: s.value
      });
    }), gr = () => {
      Yt.isDeactivated || Se();
    }, wr = (p) => {
      if (Yt.isDeactivated) return;
      const {
        onResize: C
      } = e;
      C && C(p), Se();
    }, yr = (p, C) => {
      if (!e.scrollable) return;
      const {
        value: O
      } = ye;
      O && (typeof p == "object" ? O.scrollBy(p) : O.scrollBy(p, C || 0));
    };
    function Te(p, C, O, F, V) {
      const {
        value: Q
      } = ye;
      if (Q) {
        if (F) {
          const {
            scrollTop: ie,
            offsetHeight: W
          } = Q;
          if (C > ie) {
            C + O <= ie + W || Q.scrollTo({
              left: p,
              top: C + O - W,
              behavior: V
            });
            return;
          }
        }
        Q.scrollTo({
          left: p,
          top: C,
          behavior: V
        });
      }
    }
    function Sr() {
      Er(), $r(), Se();
    }
    function xr() {
      mt();
    }
    function mt() {
      _r(), Cr();
    }
    function _r() {
      c !== void 0 && window.clearTimeout(c), c = window.setTimeout(() => {
        B.value = !1;
      }, e.duration);
    }
    function Cr() {
      A !== void 0 && window.clearTimeout(A), A = window.setTimeout(() => {
        $.value = !1;
      }, e.duration);
    }
    function Er() {
      A !== void 0 && window.clearTimeout(A), $.value = !0;
    }
    function $r() {
      c !== void 0 && window.clearTimeout(c), B.value = !0;
    }
    function Or(p) {
      const {
        onScroll: C
      } = e;
      C && C(p), Gt();
    }
    function Gt() {
      const {
        value: p
      } = ye;
      p && (h.value = p.scrollTop, s.value = p.scrollLeft * (o != null && o.value ? -1 : 1));
    }
    function Mr() {
      const {
        value: p
      } = br;
      p && (g.value = p.offsetHeight, S.value = p.offsetWidth);
      const {
        value: C
      } = ye;
      C && (m.value = C.offsetHeight, w.value = C.offsetWidth);
      const {
        value: O
      } = f, {
        value: F
      } = u;
      O && (b.value = O.offsetWidth), F && (d.value = F.offsetHeight);
    }
    function Kt() {
      const {
        value: p
      } = ye;
      p && (h.value = p.scrollTop, s.value = p.scrollLeft * (o != null && o.value ? -1 : 1), m.value = p.offsetHeight, w.value = p.offsetWidth, g.value = p.scrollHeight, S.value = p.scrollWidth);
      const {
        value: C
      } = f, {
        value: O
      } = u;
      C && (b.value = C.offsetWidth), O && (d.value = O.offsetHeight);
    }
    function Se() {
      e.scrollable && (e.useUnifiedContainer ? Kt() : (Mr(), Gt()));
    }
    function Zt(p) {
      var C;
      return !(!((C = i.value) === null || C === void 0) && C.contains(ct(p)));
    }
    function Tr(p) {
      p.preventDefault(), p.stopPropagation(), j = !0, J("mousemove", window, qt, !0), J("mouseup", window, Jt, !0), _ = s.value, x = o != null && o.value ? window.innerWidth - p.clientX : p.clientX;
    }
    function qt(p) {
      if (!j) return;
      A !== void 0 && window.clearTimeout(A), c !== void 0 && window.clearTimeout(c);
      const {
        value: C
      } = w, {
        value: O
      } = S, {
        value: F
      } = T;
      if (C === null || O === null) return;
      const Q = (o != null && o.value ? window.innerWidth - p.clientX - x : p.clientX - x) * (O - C) / (C - F), ie = O - C;
      let W = _ + Q;
      W = Math.min(ie, W), W = Math.max(W, 0);
      const {
        value: re
      } = ye;
      if (re) {
        re.scrollLeft = W * (o != null && o.value ? -1 : 1);
        const {
          internalOnUpdateScrollLeft: he
        } = e;
        he && he(W);
      }
    }
    function Jt(p) {
      p.preventDefault(), p.stopPropagation(), X("mousemove", window, qt, !0), X("mouseup", window, Jt, !0), j = !1, Se(), Zt(p) && mt();
    }
    function Pr(p) {
      p.preventDefault(), p.stopPropagation(), I = !0, J("mousemove", window, bt, !0), J("mouseup", window, gt, !0), v = h.value, R = p.clientY;
    }
    function bt(p) {
      if (!I) return;
      A !== void 0 && window.clearTimeout(A), c !== void 0 && window.clearTimeout(c);
      const {
        value: C
      } = m, {
        value: O
      } = g, {
        value: F
      } = L;
      if (C === null || O === null) return;
      const Q = (p.clientY - R) * (O - C) / (C - F), ie = O - C;
      let W = v + Q;
      W = Math.min(ie, W), W = Math.max(W, 0);
      const {
        value: re
      } = ye;
      re && (re.scrollTop = W);
    }
    function gt(p) {
      p.preventDefault(), p.stopPropagation(), X("mousemove", window, bt, !0), X("mouseup", window, gt, !0), I = !1, Se(), Zt(p) && mt();
    }
    De(() => {
      const {
        value: p
      } = Ut, {
        value: C
      } = Je, {
        value: O
      } = t, {
        value: F
      } = f, {
        value: V
      } = u;
      F && (p ? F.classList.remove(`${O}-scrollbar-rail--disabled`) : F.classList.add(`${O}-scrollbar-rail--disabled`)), V && (C ? V.classList.remove(`${O}-scrollbar-rail--disabled`) : V.classList.add(`${O}-scrollbar-rail--disabled`));
    }), Me(() => {
      e.container || Se();
    }), we(() => {
      A !== void 0 && window.clearTimeout(A), c !== void 0 && window.clearTimeout(c), X("mousemove", window, bt, !0), X("mouseup", window, gt, !0);
    });
    const Qt = z(() => {
      const {
        common: {
          cubicBezierEaseInOut: p
        },
        self: {
          color: C,
          colorHover: O,
          height: F,
          width: V,
          borderRadius: Q,
          railInsetHorizontalTop: ie,
          railInsetHorizontalBottom: W,
          railInsetVerticalRight: re,
          railInsetVerticalLeft: he,
          railColor: Rr
        }
      } = k.value, {
        top: zr,
        right: Br,
        bottom: Ar,
        left: Ir
      } = Ve(ie), {
        top: Dr,
        right: Fr,
        bottom: Hr,
        left: kr
      } = Ve(W), {
        top: Lr,
        right: Nr,
        bottom: Wr,
        left: jr
      } = Ve(o != null && o.value ? $n(re) : re), {
        top: Vr,
        right: Ur,
        bottom: Xr,
        left: Yr
      } = Ve(o != null && o.value ? $n(he) : he);
      return {
        "--n-scrollbar-bezier": p,
        "--n-scrollbar-color": C,
        "--n-scrollbar-color-hover": O,
        "--n-scrollbar-border-radius": Q,
        "--n-scrollbar-width": V,
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
        "--n-scrollbar-rail-left-vertical-right": jr,
        "--n-scrollbar-rail-top-vertical-left": Vr,
        "--n-scrollbar-rail-right-vertical-left": Ur,
        "--n-scrollbar-rail-bottom-vertical-left": Xr,
        "--n-scrollbar-rail-left-vertical-left": Yr,
        "--n-scrollbar-rail-color": Rr
      };
    }), Pe = n ? cr("scrollbar", void 0, Qt, e) : void 0;
    return Object.assign(Object.assign({}, {
      scrollTo: Xt,
      scrollBy: yr,
      sync: Se,
      syncUnifiedContainer: Kt,
      handleMouseEnterWrapper: Sr,
      handleMouseLeaveWrapper: xr
    }), {
      mergedClsPrefix: t,
      rtlEnabled: o,
      containerScrollTop: h,
      wrapperRef: i,
      containerRef: l,
      contentRef: a,
      yRailRef: u,
      xRailRef: f,
      needYBar: Je,
      needXBar: Ut,
      yBarSizePx: y,
      xBarSizePx: N,
      yBarTopPx: q,
      xBarLeftPx: se,
      isShowXBar: vr,
      isShowYBar: mr,
      isIos: D,
      handleScroll: Or,
      handleContentResize: gr,
      handleContainerResize: wr,
      handleYScrollMouseDown: Pr,
      handleXScrollMouseDown: Tr,
      cssVars: n ? void 0 : Qt,
      themeClass: Pe == null ? void 0 : Pe.themeClass,
      onRender: Pe == null ? void 0 : Pe.onRender
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
    const f = this.trigger === "none", g = (w, d) => M("div", {
      ref: "yRailRef",
      class: [`${n}-scrollbar-rail`, `${n}-scrollbar-rail--vertical`, `${n}-scrollbar-rail--vertical--${l}`, w],
      "data-scrollbar-rail": !0,
      style: [d || "", this.verticalRailStyle],
      "aria-hidden": !0
    }, M(f ? Rn : Bt, f ? null : {
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
    })), S = () => {
      var w, d;
      return (w = this.onRender) === null || w === void 0 || w.call(this), M("div", Fn(this.$attrs, {
        role: "none",
        ref: "wrapperRef",
        class: [`${n}-scrollbar`, this.themeClass, o && `${n}-scrollbar--rtl`],
        style: this.cssVars,
        onMouseenter: r ? void 0 : this.handleMouseEnterWrapper,
        onMouseleave: r ? void 0 : this.handleMouseLeaveWrapper
      }), [this.container ? (d = t.default) === null || d === void 0 ? void 0 : d.call(t) : M("div", {
        role: "none",
        ref: "containerRef",
        class: [`${n}-scrollbar-container`, this.containerClass],
        style: this.containerStyle,
        onScroll: this.handleScroll,
        onWheel: this.onWheel
      }, M(Cn, {
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
      })), i ? null : g(void 0, void 0), u && M("div", {
        ref: "xRailRef",
        class: [`${n}-scrollbar-rail`, `${n}-scrollbar-rail--horizontal`, `${n}-scrollbar-rail--horizontal--${a}`],
        style: this.horizontalRailStyle,
        "data-scrollbar-rail": !0,
        "aria-hidden": !0
      }, M(f ? Rn : Bt, f ? null : {
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
    }, m = this.container ? S() : M(Cn, {
      onResize: this.handleContainerResize
    }, {
      default: S
    });
    return i ? M(fe, null, m, g(this.themeClass, this.cssVars)) : m;
  }
}), gl = bl, wl = {
  space: "6px",
  spaceArrow: "10px",
  arrowOffset: "10px",
  arrowOffsetVertical: "10px",
  arrowHeight: "6px",
  padding: "8px 14px"
};
function yl(e) {
  const {
    boxShadow2: t,
    popoverColor: n,
    textColor2: r,
    borderRadius: o,
    fontSize: i,
    dividerColor: l
  } = e;
  return Object.assign(Object.assign({}, wl), {
    fontSize: i,
    borderRadius: o,
    color: n,
    dividerColor: l,
    textColor: r,
    boxShadow: t
  });
}
const Sl = {
  name: "Popover",
  common: hr,
  self: yl
}, Rt = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, U = "var(--n-arrow-height) * 1.414", xl = H([te("popover", `
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
 `)]), Mt("raw", `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [Mt("scrollable", [Mt("show-header-or-footer", "padding: var(--n-padding);")])]), Ee("header", `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), Ee("footer", `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), le("scrollable, show-header-or-footer", [Ee("content", `
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
    const i = o.split("-")[1] === "end", a = `calc((${`var(--v-target-${r}, 0px)`} - ${U}) / 2)`, u = de(o);
    return H(`[v-placement="${o}"] >`, [te("popover-shared", [le("center-arrow", [te("popover-arrow", `${t}: calc(max(${a}, ${u}) ${i ? "+" : "-"} var(--v-offset-${n ? "left" : "top"}));`)])])]);
  });
})]);
function de(e) {
  return ["top", "bottom"].includes(e.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)";
}
function oe(e, t) {
  const n = e.split("-")[0], r = ["top", "bottom"].includes(n) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
  return H(`[v-placement="${e}"] >`, [te("popover-shared", `
 margin-${Rt[n]}: var(--n-space);
 `, [le("show-arrow", `
 margin-${Rt[n]}: var(--n-space-arrow);
 `), le("overlap", `
 margin: 0;
 `), Ji("popover-arrow-wrapper", `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${Rt[n]}: auto;
 ${r}
 `, [te("popover-arrow", t)])])]);
}
const pr = Object.assign(Object.assign({}, Ne.props), {
  to: He.propTo,
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
function _l({
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
const Cl = ae({
  name: "PopoverBody",
  inheritAttrs: !1,
  props: pr,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    const {
      namespaceRef: r,
      mergedClsPrefixRef: o,
      inlineThemeDisabled: i
    } = dr(e), l = Ne("Popover", "-popover", xl, Sl, e, o), a = P(null), u = ne("NPopover"), f = P(null), g = P(e.show), S = P(!1);
    De(() => {
      const {
        show: c
      } = e;
      c && !Qi() && !e.internalDeactivateImmediately && (S.value = !0);
    });
    const m = z(() => {
      const {
        trigger: c,
        onClickoutside: v
      } = e, _ = [], {
        positionManuallyRef: {
          value: x
        }
      } = u;
      return x || (c === "click" && !v && _.push([tn, I, void 0, {
        capture: !0
      }]), c === "hover" && _.push([vo, B])), v && _.push([tn, I, void 0, {
        capture: !0
      }]), (e.displayDirective === "show" || e.animated && S.value) && _.push([to, e.show]), _;
    }), w = z(() => {
      const {
        common: {
          cubicBezierEaseInOut: c,
          cubicBezierEaseIn: v,
          cubicBezierEaseOut: _
        },
        self: {
          space: x,
          spaceArrow: R,
          padding: D,
          fontSize: k,
          textColor: L,
          dividerColor: y,
          color: T,
          boxShadow: N,
          borderRadius: Y,
          arrowHeight: q,
          arrowOffset: G,
          arrowOffsetVertical: se
        }
      } = l.value;
      return {
        "--n-box-shadow": N,
        "--n-bezier": c,
        "--n-bezier-ease-in": v,
        "--n-bezier-ease-out": _,
        "--n-font-size": k,
        "--n-text-color": L,
        "--n-color": T,
        "--n-divider-color": y,
        "--n-border-radius": Y,
        "--n-arrow-height": q,
        "--n-arrow-offset": G,
        "--n-arrow-offset-vertical": se,
        "--n-padding": D,
        "--n-space": x,
        "--n-space-arrow": R
      };
    }), d = z(() => {
      const c = e.width === "trigger" ? void 0 : Ot(e.width), v = [];
      c && v.push({
        width: c
      });
      const {
        maxWidth: _,
        minWidth: x
      } = e;
      return _ && v.push({
        maxWidth: Ot(_)
      }), x && v.push({
        maxWidth: Ot(x)
      }), i || v.push(w.value), v;
    }), b = i ? cr("popover", void 0, w, e) : void 0;
    u.setBodyInstance({
      syncPosition: h
    }), we(() => {
      u.setBodyInstance(null);
    }), ce(ge(e, "show"), (c) => {
      e.animated || (c ? g.value = !0 : g.value = !1);
    });
    function h() {
      var c;
      (c = a.value) === null || c === void 0 || c.syncPosition();
    }
    function s(c) {
      e.trigger === "hover" && e.keepAliveOnHover && e.show && u.handleMouseEnter(c);
    }
    function $(c) {
      e.trigger === "hover" && e.keepAliveOnHover && u.handleMouseLeave(c);
    }
    function B(c) {
      e.trigger === "hover" && !j().contains(ct(c)) && u.handleMouseMoveOutside(c);
    }
    function I(c) {
      (e.trigger === "click" && !j().contains(ct(c)) || e.onClickoutside) && u.handleClickOutside(c);
    }
    function j() {
      return u.getTriggerElement();
    }
    Xe(lr, f), Xe(or, null), Xe(ir, null);
    function A() {
      if (b == null || b.onRender(), !(e.displayDirective === "show" || e.show || e.animated && S.value))
        return null;
      let v;
      const _ = u.internalRenderBodyRef.value, {
        value: x
      } = o;
      if (_)
        v = _(
          // The popover class and overlap class must exists, they will be used
          // to place the body & transition animation.
          // Shadow class exists for reuse box-shadow.
          [`${x}-popover-shared`, b == null ? void 0 : b.themeClass.value, e.overlap && `${x}-popover-shared--overlap`, e.showArrow && `${x}-popover-shared--show-arrow`, e.arrowPointToCenter && `${x}-popover-shared--center-arrow`],
          f,
          d.value,
          s,
          $
        );
      else {
        const {
          value: R
        } = u.extraClassRef, {
          internalTrapFocus: D
        } = e, k = !Pn(t.header) || !Pn(t.footer), L = () => {
          var y, T;
          const N = k ? M(fe, null, Pt(t.header, (G) => G ? M("div", {
            class: [`${x}-popover__header`, e.headerClass],
            style: e.headerStyle
          }, G) : null), Pt(t.default, (G) => G ? M("div", {
            class: [`${x}-popover__content`, e.contentClass],
            style: e.contentStyle
          }, t) : null), Pt(t.footer, (G) => G ? M("div", {
            class: [`${x}-popover__footer`, e.footerClass],
            style: e.footerStyle
          }, G) : null)) : e.scrollable ? (y = t.default) === null || y === void 0 ? void 0 : y.call(t) : M("div", {
            class: [`${x}-popover__content`, e.contentClass],
            style: e.contentStyle
          }, t), Y = e.scrollable ? M(gl, {
            contentClass: k ? void 0 : `${x}-popover__content ${(T = e.contentClass) !== null && T !== void 0 ? T : ""}`,
            contentStyle: k ? void 0 : e.contentStyle
          }, {
            default: () => N
          }) : N, q = e.showArrow ? _l({
            arrowClass: e.arrowClass,
            arrowStyle: e.arrowStyle,
            arrowWrapperClass: e.arrowWrapperClass,
            arrowWrapperStyle: e.arrowWrapperStyle,
            clsPrefix: x
          }) : null;
          return [Y, q];
        };
        v = M("div", Fn({
          class: [`${x}-popover`, `${x}-popover-shared`, b == null ? void 0 : b.themeClass.value, R.map((y) => `${x}-${y}`), {
            [`${x}-popover--scrollable`]: e.scrollable,
            [`${x}-popover--show-header-or-footer`]: k,
            [`${x}-popover--raw`]: e.raw,
            [`${x}-popover-shared--overlap`]: e.overlap,
            [`${x}-popover-shared--show-arrow`]: e.showArrow,
            [`${x}-popover-shared--center-arrow`]: e.arrowPointToCenter
          }],
          ref: f,
          style: d.value,
          onKeydown: u.handleKeydown,
          onMouseenter: s,
          onMouseleave: $
        }, n), D ? M(ji, {
          active: e.show,
          autoFocus: !0
        }, {
          default: L
        }) : L());
      }
      return ft(v, m.value);
    }
    return {
      displayed: S,
      namespace: r,
      isMounted: u.isMountedRef,
      zIndex: u.zIndexRef,
      followerRef: a,
      adjustedTo: He(e),
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
      teleportDisabled: this.adjustedTo === He.tdkey
    }, {
      default: () => this.animated ? M(Bt, {
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
var El = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_26504_XKHRYLZIHXXZLNIG", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.97.2", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-5a8078c568-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
const $l = Object.keys(pr), Ol = {
  focus: ["onFocus", "onBlur"],
  click: ["onClick"],
  hover: ["onMouseenter", "onMouseleave"],
  manual: [],
  nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"]
};
function Ml(e, t, n) {
  Ol[t].forEach((r) => {
    e.props ? e.props = Object.assign({}, e.props) : e.props = {};
    const o = e.props[r], i = n[r];
    o ? e.props[r] = (...l) => {
      o(...l), i(...l);
    } : e.props[r] = i;
  });
}
const Tl = {
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
  to: He.propTo,
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
}, Pl = Object.assign(Object.assign(Object.assign({}, Ne.props), Tl), {
  internalOnAfterLeave: Function,
  internalRenderBody: Function
}), Rl = ae({
  name: "Popover",
  inheritAttrs: !1,
  props: Pl,
  slots: Object,
  __popover__: !0,
  setup(e) {
    El.NODE_ENV !== "production" && De(() => {
      e.maxWidth !== void 0 && je("popover", "`max-width` is deprecated, please use `style` instead."), e.minWidth !== void 0 && je("popover", "`min-width` is deprecated, please use `style` instead."), e.arrow !== void 0 && je("popover", "`arrow` is deprecated, please use `showArrow` instead."), e.onHide !== void 0 && je("popover", "`on-hide` is deprecated, please use `on-update:show` instead."), e.onShow !== void 0 && je("popover", "`on-show` is deprecated, please use `on-update:show` instead.");
    });
    const t = Ln(), n = P(null), r = z(() => e.show), o = P(e.defaultShow), i = xo(r, o), l = Ze(() => e.disabled ? !1 : i.value), a = () => {
      if (e.disabled) return !0;
      const {
        getDisabled: y
      } = e;
      return !!(y != null && y());
    }, u = () => a() ? !1 : i.value, f = _o(e, ["arrow", "showArrow"]), g = z(() => e.overlap ? !1 : f.value);
    let S = null;
    const m = P(null), w = P(null), d = Ze(() => e.x !== void 0 && e.y !== void 0);
    function b(y) {
      const {
        "onUpdate:show": T,
        onUpdateShow: N,
        onShow: Y,
        onHide: q
      } = e;
      o.value = y, T && Ue(T, y), N && Ue(N, y), y && Y && Ue(Y, !0), y && q && Ue(q, !1);
    }
    function h() {
      S && S.syncPosition();
    }
    function s() {
      const {
        value: y
      } = m;
      y && (window.clearTimeout(y), m.value = null);
    }
    function $() {
      const {
        value: y
      } = w;
      y && (window.clearTimeout(y), w.value = null);
    }
    function B() {
      const y = a();
      if (e.trigger === "focus" && !y) {
        if (u()) return;
        b(!0);
      }
    }
    function I() {
      const y = a();
      if (e.trigger === "focus" && !y) {
        if (!u()) return;
        b(!1);
      }
    }
    function j() {
      const y = a();
      if (e.trigger === "hover" && !y) {
        if ($(), m.value !== null || u()) return;
        const T = () => {
          b(!0), m.value = null;
        }, {
          delay: N
        } = e;
        N === 0 ? T() : m.value = window.setTimeout(T, N);
      }
    }
    function A() {
      const y = a();
      if (e.trigger === "hover" && !y) {
        if (s(), w.value !== null || !u()) return;
        const T = () => {
          b(!1), w.value = null;
        }, {
          duration: N
        } = e;
        N === 0 ? T() : w.value = window.setTimeout(T, N);
      }
    }
    function c() {
      A();
    }
    function v(y) {
      var T;
      u() && (e.trigger === "click" && (s(), $(), b(!1)), (T = e.onClickoutside) === null || T === void 0 || T.call(e, y));
    }
    function _() {
      if (e.trigger === "click" && !a()) {
        s(), $();
        const y = !u();
        b(y);
      }
    }
    function x(y) {
      e.internalTrapFocus && y.key === "Escape" && (s(), $(), b(!1));
    }
    function R(y) {
      o.value = y;
    }
    function D() {
      var y;
      return (y = n.value) === null || y === void 0 ? void 0 : y.targetRef;
    }
    function k(y) {
      S = y;
    }
    return Xe("NPopover", {
      getTriggerElement: D,
      handleKeydown: x,
      handleMouseEnter: j,
      handleMouseLeave: A,
      handleClickOutside: v,
      handleMouseMoveOutside: c,
      setBodyInstance: k,
      positionManuallyRef: d,
      isMountedRef: t,
      zIndexRef: ge(e, "zIndex"),
      extraClassRef: ge(e, "internalExtraClass"),
      internalRenderBodyRef: ge(e, "internalRenderBody")
    }), De(() => {
      i.value && a() && b(!1);
    }), {
      binderInstRef: n,
      positionManually: d,
      mergedShowConsideringDisabledProp: l,
      // if to show popover body
      uncontrolledShow: o,
      mergedShowArrow: g,
      getMergedShow: u,
      setShow: R,
      handleClick: _,
      handleMouseEnter: j,
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
    if (!t && (r = tl(n, "trigger"), r)) {
      r = no(r), r = r.type === ro ? M("span", [r]) : r;
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
          onBlur: (f) => {
            a.forEach((g) => {
              g.onBlur(f);
            });
          },
          onFocus: (f) => {
            a.forEach((g) => {
              g.onFocus(f);
            });
          },
          onClick: (f) => {
            a.forEach((g) => {
              g.onClick(f);
            });
          },
          onMouseenter: (f) => {
            a.forEach((g) => {
              g.onMouseenter(f);
            });
          },
          onMouseleave: (f) => {
            a.forEach((g) => {
              g.onMouseleave(f);
            });
          }
        };
        Ml(r, l ? "nested" : t ? "manual" : this.trigger, u);
      }
    }
    return M(No, {
      ref: "binderInstRef",
      syncTarget: !o,
      syncTargetWithParent: this.internalSyncTargetWithParent
    }, {
      default: () => {
        this.mergedShowConsideringDisabledProp;
        const i = this.getMergedShow();
        return [this.internalTrapFocus && i ? ft(M("div", {
          style: {
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }), [[kn, {
          enabled: i,
          zIndex: this.zIndex
        }]]) : null, t ? null : M(Wo, null, {
          default: () => r
        }), M(Cl, nl(this.$props, $l, Object.assign(Object.assign({}, this.$attrs), {
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
}), zl = { class: "lcc-header" }, Bl = { class: "lcc-header__wrapper" }, Al = { class: "lcc-header__wrapper__navs" }, Il = ["onClick"], Dl = {
  key: 0,
  class: "lcc-header__wrapper__navs__drop"
}, Fl = { class: "lcc-header__wrapper__navs__drop__group__label" }, Hl = { class: "lcc-header__wrapper__navs__drop__group__label--text" }, kl = { class: "lcc-header__wrapper__navs__drop__group__item__group" }, Ll = /* @__PURE__ */ ae({
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
    ], r = z(() => e.navDatas ?? n), o = t;
    function i(l) {
      o("jump", l);
    }
    return (l, a) => (pe(), ve("div", zl, [
      me("div", Bl, [
        me("div", Al, [
          (pe(!0), ve(
            fe,
            null,
            wt(r.value, (u, f) => (pe(), ve("div", {
              class: "lcc-header__wrapper__navs__item",
              key: f
            }, [
              oo(
                io(Rl),
                {
                  trigger: "hover",
                  "arrow-class": "header-arrow-class",
                  class: "header-popover-class"
                },
                {
                  trigger: en(() => [
                    me("a", {
                      class: "lcc-header__wrapper__navs__item__link",
                      onClick: (g) => i(u)
                    }, yt(u.title), 9, Il)
                  ]),
                  default: en(() => {
                    var g;
                    return [
                      (g = u.list) != null && g.length ? (pe(), ve("div", Dl, [
                        (pe(!0), ve(
                          fe,
                          null,
                          wt(u.list, (S, m) => (pe(), ve("div", {
                            class: "lcc-header__wrapper__navs__drop__group",
                            key: m
                          }, [
                            me("div", Fl, [
                              a[0] || (a[0] = me(
                                "div",
                                { class: "lcc-header__wrapper__navs__drop__group__label--icon" },
                                [
                                  me("img", {
                                    class: "lcc-header__wrapper__navs__drop__group__label--icon--image",
                                    src: ao,
                                    alt: ""
                                  })
                                ],
                                -1
                                /* HOISTED */
                              )),
                              me(
                                "div",
                                Hl,
                                yt(S.label),
                                1
                                /* TEXT */
                              )
                            ]),
                            me("div", kl, [
                              (pe(!0), ve(
                                fe,
                                null,
                                wt(S.children, (w, d) => (pe(), ve(
                                  "div",
                                  {
                                    class: "lcc-header__wrapper__navs__drop__group__item__group__nav",
                                    key: d
                                  },
                                  yt(w.title),
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
                      ])) : lo("v-if", !0)
                    ];
                  }),
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
}), Nl = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Yl = /* @__PURE__ */ Nl(Ll, [["__scopeId", "data-v-6284b2c8"]]);
export {
  Yl as LcHeader
};
