// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { onActivated as wr, onDeactivated as _r, inject as De, defineComponent as ae, getCurrentInstance as Cr, onMounted as Rt, onBeforeUnmount as yn, renderSlot as Sn, computed as D, shallowRef as vt, ref as H, watchEffect as Ze, onBeforeMount as wn, h as J, Fragment as Ge, Transition as kt, mergeProps as bt, mergeDefaults as et, openBlock as Z, createElementBlock as ne, normalizeClass as qe, createElementVNode as N, toDisplayString as Ke, createVNode as _n, unref as L, normalizeStyle as Je, withCtx as Rr, renderList as xt, reactive as Er, mergeModels as yt, useCssVars as Cn, useModel as Rn, toRefs as Tr, createBlock as Ft, createCommentVNode as Nt, withDirectives as Lt, createTextVNode as $r, vShow as Or, vModelText as Pr } from "vue";
import { s as zr } from "./assets/s1-DPIWGfHc.js";
import { s as Br } from "./assets/s2-DBLzyVtL.js";
import { s as Mr } from "./assets/s3-DpTjJiCN.js";
import { s as Hr } from "./assets/s4-B9ptzqa9.js";
import { _ as En } from "./assets/voice-_coO-1Ya.js";
import { merge as Ie } from "lodash-es";
import { _ as Dr } from "./assets/main-robot-BgJtdn2i.js";
import { _ as Ar } from "./assets/microphone-CZMasZlZ.js";
const Ir = {
  s1: zr,
  s2: Br,
  s3: Mr,
  s4: Hr
}, kr = {
  none: "none",
  focus: "focus"
}, jt = {
  lt: "lt",
  rt: "rt",
  auto: "auto"
}, Wt = [
  {
    key: "001",
    domain: "event",
    name: "person2",
    size: "88%",
    meta: [
      {
        label: "教师职业发展"
      },
      {
        label: "教师资源均衡发展分析"
      },
      {
        label: "基础教育交流轮岗"
      },
      {
        label: "基础教育校长队伍"
      },
      {
        label: "基础教育教师队伍结构"
      }
    ]
  },
  {
    key: "002",
    domain: "event",
    name: "person2",
    size: "88%",
    meta: [
      {
        label: "教师职业发展"
      },
      {
        label: "教师资源均衡发展分析"
      },
      {
        label: "基础教育交流轮岗"
      },
      {
        label: "基础教育校长队伍"
      },
      {
        label: "基础教育教师队伍结构"
      }
    ]
  },
  {
    key: "003",
    domain: "event",
    name: "person2",
    size: "88%",
    meta: [
      {
        label: "教师职业发展"
      },
      {
        label: "教师资源均衡发展分析"
      },
      {
        label: "基础教育交流轮岗"
      },
      {
        label: "基础教育校长队伍"
      },
      {
        label: "基础教育教师队伍结构"
      }
    ]
  },
  {
    key: "004",
    domain: "event",
    name: "person2",
    size: "88%",
    meta: [
      {
        label: "教师职业发展"
      },
      {
        label: "教师资源均衡发展分析"
      },
      {
        label: "基础教育交流轮岗"
      },
      {
        label: "基础教育校长队伍"
      },
      {
        label: "基础教育教师队伍结构"
      }
    ]
  },
  {
    key: "005",
    domain: "event",
    name: "person2",
    size: "88%",
    meta: [
      {
        label: "教师职业发展"
      },
      {
        label: "教师资源均衡发展分析"
      },
      {
        label: "基础教育交流轮岗"
      },
      {
        label: "基础教育校长队伍"
      },
      {
        label: "基础教育教师队伍结构"
      }
    ]
  },
  {
    key: "006",
    domain: "event",
    name: "person2",
    size: "88%",
    meta: [
      {
        label: "教师职业发展"
      },
      {
        label: "教师资源均衡发展分析"
      },
      {
        label: "基础教育交流轮岗"
      },
      {
        label: "基础教育校长队伍"
      },
      {
        label: "基础教育教师队伍结构"
      }
    ]
  },
  {
    key: "007",
    domain: "event",
    name: "person2",
    size: "88%",
    meta: [
      {
        label: "教师职业发展"
      },
      {
        label: "教师资源均衡发展分析"
      },
      {
        label: "基础教育交流轮岗"
      },
      {
        label: "基础教育教师队伍结构"
      }
    ]
  },
  {
    key: "008",
    domain: "event",
    name: "person2",
    size: "88%",
    meta: [
      {
        label: "教师职业发展"
      },
      {
        label: "教师资源均衡发展分析"
      },
      {
        label: "基础教育交流轮岗"
      },
      {
        label: "基础教育教师队伍结构"
      }
    ]
  },
  {
    key: "009",
    domain: "event",
    name: "person2",
    size: "88%",
    meta: [
      {
        label: "教师职业发展"
      },
      {
        label: "教师资源均衡发展分析"
      },
      {
        label: "基础教育校长队伍"
      },
      {
        label: "基础教育教师队伍结构"
      }
    ]
  }
];
function Xe(e) {
  return e.composedPath()[0];
}
const Fr = {
  mousemoveoutside: /* @__PURE__ */ new WeakMap(),
  clickoutside: /* @__PURE__ */ new WeakMap()
};
function Nr(e, t, n) {
  if (e === "mousemoveoutside") {
    const r = (o) => {
      t.contains(Xe(o)) || n(o);
    };
    return {
      mousemove: r,
      touchstart: r
    };
  } else if (e === "clickoutside") {
    let r = !1;
    const o = (l) => {
      r = !t.contains(Xe(l));
    }, i = (l) => {
      r && (t.contains(Xe(l)) || n(l));
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
function Tn(e, t, n) {
  const r = Fr[e];
  let o = r.get(t);
  o === void 0 && r.set(t, o = /* @__PURE__ */ new WeakMap());
  let i = o.get(n);
  return i === void 0 && o.set(n, i = Nr(e, t, n)), i;
}
function Lr(e, t, n, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const o = Tn(e, t, n);
    return Object.keys(o).forEach((i) => {
      Te(i, document, o[i], r);
    }), !0;
  }
  return !1;
}
function jr(e, t, n, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const o = Tn(e, t, n);
    return Object.keys(o).forEach((i) => {
      fe(i, document, o[i], r);
    }), !0;
  }
  return !1;
}
function Wr() {
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
  function o(f, h, _) {
    const P = f[h];
    return f[h] = function() {
      return _.apply(f, arguments), P.apply(f, arguments);
    }, f;
  }
  function i(f, h) {
    f[h] = Event.prototype[h];
  }
  const l = /* @__PURE__ */ new WeakMap(), a = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
  function d() {
    var f;
    return (f = l.get(this)) !== null && f !== void 0 ? f : null;
  }
  function s(f, h) {
    a !== void 0 && Object.defineProperty(f, "currentTarget", {
      configurable: !0,
      enumerable: !0,
      get: h ?? a.get
    });
  }
  const p = {
    bubble: {},
    capture: {}
  }, g = {};
  function y() {
    const f = function(h) {
      const { type: _, eventPhase: P, bubbles: A } = h, I = Xe(h);
      if (P === 2)
        return;
      const $ = P === 1 ? "capture" : "bubble";
      let E = I;
      const z = [];
      for (; E === null && (E = window), z.push(E), E !== window; )
        E = E.parentNode || null;
      const j = p.capture[_], V = p.bubble[_];
      if (o(h, "stopPropagation", n), o(h, "stopImmediatePropagation", r), s(h, d), $ === "capture") {
        if (j === void 0)
          return;
        for (let G = z.length - 1; G >= 0 && !e.has(h); --G) {
          const re = z[G], le = j.get(re);
          if (le !== void 0) {
            l.set(h, re);
            for (const oe of le) {
              if (t.has(h))
                break;
              oe(h);
            }
          }
          if (G === 0 && !A && V !== void 0) {
            const oe = V.get(re);
            if (oe !== void 0)
              for (const Ae of oe) {
                if (t.has(h))
                  break;
                Ae(h);
              }
          }
        }
      } else if ($ === "bubble") {
        if (V === void 0)
          return;
        for (let G = 0; G < z.length && !e.has(h); ++G) {
          const re = z[G], le = V.get(re);
          if (le !== void 0) {
            l.set(h, re);
            for (const oe of le) {
              if (t.has(h))
                break;
              oe(h);
            }
          }
        }
      }
      i(h, "stopPropagation"), i(h, "stopImmediatePropagation"), s(h);
    };
    return f.displayName = "evtdUnifiedHandler", f;
  }
  function C() {
    const f = function(h) {
      const { type: _, eventPhase: P } = h;
      if (P !== 2)
        return;
      const A = g[_];
      A !== void 0 && A.forEach((I) => I(h));
    };
    return f.displayName = "evtdUnifiedWindowEventHandler", f;
  }
  const c = y(), T = C();
  function S(f, h) {
    const _ = p[f];
    return _[h] === void 0 && (_[h] = /* @__PURE__ */ new Map(), window.addEventListener(h, c, f === "capture")), _[h];
  }
  function x(f) {
    return g[f] === void 0 && (g[f] = /* @__PURE__ */ new Set(), window.addEventListener(f, T)), g[f];
  }
  function v(f, h) {
    let _ = f.get(h);
    return _ === void 0 && f.set(h, _ = /* @__PURE__ */ new Set()), _;
  }
  function B(f, h, _, P) {
    const A = p[h][_];
    if (A !== void 0) {
      const I = A.get(f);
      if (I !== void 0 && I.has(P))
        return !0;
    }
    return !1;
  }
  function O(f, h) {
    const _ = g[f];
    return !!(_ !== void 0 && _.has(h));
  }
  function M(f, h, _, P) {
    let A;
    if (typeof P == "object" && P.once === !0 ? A = (j) => {
      w(f, h, A, P), _(j);
    } : A = _, Lr(f, h, A, P))
      return;
    const $ = P === !0 || typeof P == "object" && P.capture === !0 ? "capture" : "bubble", E = S($, f), z = v(E, h);
    if (z.has(A) || z.add(A), h === window) {
      const j = x(f);
      j.has(A) || j.add(A);
    }
  }
  function w(f, h, _, P) {
    if (jr(f, h, _, P))
      return;
    const I = P === !0 || typeof P == "object" && P.capture === !0, $ = I ? "capture" : "bubble", E = S($, f), z = v(E, h);
    if (h === window && !B(h, I ? "bubble" : "capture", f, _) && O(f, _)) {
      const V = g[f];
      V.delete(_), V.size === 0 && (window.removeEventListener(f, T), g[f] = void 0);
    }
    z.has(_) && z.delete(_), z.size === 0 && E.delete(h), E.size === 0 && (window.removeEventListener(f, c, $ === "capture"), p[$][f] = void 0);
  }
  return {
    on: M,
    off: w
  };
}
const { on: Te, off: fe } = Wr(), Vr = (typeof window > "u" ? !1 : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
!window.MSStream;
function Ur() {
  return Vr;
}
function Xr(e) {
  const t = {
    isDeactivated: !1
  };
  let n = !1;
  return wr(() => {
    if (t.isDeactivated = !1, !n) {
      n = !0;
      return;
    }
    e();
  }), _r(() => {
    t.isDeactivated = !0, n || (n = !0);
  }), t;
}
function Yr(e) {
  return e.composedPath()[0] || null;
}
function Vt(e) {
  return typeof e == "string" ? e.endsWith("px") ? Number(e.slice(0, e.length - 2)) : Number(e) : e;
}
function $e(e, t) {
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
const Ut = {
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
}, _e = "^\\s*", Ce = "\\s*$", de = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", he = "([0-9A-Fa-f])", pe = "([0-9A-Fa-f]{2})", Gr = new RegExp(`${_e}rgb\\s*\\(${de},${de},${de}\\)${Ce}`), qr = new RegExp(`${_e}rgba\\s*\\(${de},${de},${de},${de}\\)${Ce}`), Kr = new RegExp(`${_e}#${he}${he}${he}${Ce}`), Jr = new RegExp(`${_e}#${pe}${pe}${pe}${Ce}`), Qr = new RegExp(`${_e}#${he}${he}${he}${he}${Ce}`), Zr = new RegExp(`${_e}#${pe}${pe}${pe}${pe}${Ce}`);
function K(e) {
  return parseInt(e, 16);
}
function we(e) {
  try {
    let t;
    if (t = Jr.exec(e))
      return [K(t[1]), K(t[2]), K(t[3]), 1];
    if (t = Gr.exec(e))
      return [Y(t[1]), Y(t[5]), Y(t[9]), 1];
    if (t = qr.exec(e))
      return [
        Y(t[1]),
        Y(t[5]),
        Y(t[9]),
        Oe(t[13])
      ];
    if (t = Kr.exec(e))
      return [
        K(t[1] + t[1]),
        K(t[2] + t[2]),
        K(t[3] + t[3]),
        1
      ];
    if (t = Zr.exec(e))
      return [
        K(t[1]),
        K(t[2]),
        K(t[3]),
        Oe(K(t[4]) / 255)
      ];
    if (t = Qr.exec(e))
      return [
        K(t[1] + t[1]),
        K(t[2] + t[2]),
        K(t[3] + t[3]),
        Oe(K(t[4] + t[4]) / 255)
      ];
    if (e in Ut)
      return we(Ut[e]);
    throw new Error(`[seemly/rgba]: Invalid color value ${e}.`);
  } catch (t) {
    throw t;
  }
}
function eo(e) {
  return e > 1 ? 1 : e < 0 ? 0 : e;
}
function to(e, t, n, r) {
  return `rgba(${Y(e)}, ${Y(t)}, ${Y(n)}, ${eo(r)})`;
}
function ft(e, t, n, r, o) {
  return Y((e * t * (1 - r) + n * r) / o);
}
function no(e, t) {
  Array.isArray(e) || (e = we(e)), Array.isArray(t) || (t = we(t));
  const n = e[3], r = t[3], o = Oe(n + r - n * r);
  return to(ft(e[0], n, t[0], r, o), ft(e[1], n, t[1], r, o), ft(e[2], n, t[2], r, o), o);
}
function ke(e, t) {
  const [n, r, o, i = 1] = Array.isArray(e) ? e : we(e), { lightness: l = 1, alpha: a = 1 } = t;
  return ro([n * l, r * l, o * l, i * a]);
}
function Oe(e) {
  const t = Math.round(Number(e) * 100) / 100;
  return t > 1 ? 1 : t < 0 ? 0 : t;
}
function Y(e) {
  const t = Math.round(Number(e));
  return t > 255 ? 255 : t < 0 ? 0 : t;
}
function ro(e) {
  const [t, n, r] = e;
  return 3 in e ? `rgba(${Y(t)}, ${Y(n)}, ${Y(r)}, ${Oe(e[3])})` : `rgba(${Y(t)}, ${Y(n)}, ${Y(r)}, 1)`;
}
const oo = "@css-render/vue3-ssr";
function io(e, t) {
  return `<style cssr-id="${e}">
${t}
</style>`;
}
function ao(e, t, n) {
  const { styles: r, ids: o } = n;
  o.has(e) || r !== null && (o.add(e), r.push(io(e, t)));
}
const lo = typeof document < "u";
function Et() {
  if (lo)
    return;
  const e = De(oo, null);
  if (e !== null)
    return {
      adapter: (t, n) => ao(t, n, e),
      context: e
    };
}
function Xt(e, t) {
  console.error(`[vueuc/${e}]: ${t}`);
}
function so(e) {
  let t = 0;
  for (let n = 0; n < e.length; ++n)
    e[n] === "&" && ++t;
  return t;
}
const $n = /\s*,(?![^(]*\))\s*/g, co = /\s+/g;
function uo(e, t) {
  const n = [];
  return t.split($n).forEach((r) => {
    let o = so(r);
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
        e.forEach((d) => {
          l.push(a.replace("&", d));
        });
      }), i = l;
    }
    i.forEach((l) => n.push(l));
  }), n;
}
function fo(e, t) {
  const n = [];
  return t.split($n).forEach((r) => {
    e.forEach((o) => {
      n.push((o && o + " ") + r);
    });
  }), n;
}
function ho(e) {
  let t = [""];
  return e.forEach((n) => {
    n = n && n.trim(), // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    n && (n.includes("&") ? t = uo(t, n) : t = fo(t, n));
  }), t.join(", ").replace(co, " ");
}
function Yt(e) {
  if (!e)
    return;
  const t = e.parentElement;
  t && t.removeChild(e);
}
function tt(e, t) {
  return (t ?? document.head).querySelector(`style[cssr-id="${e}"]`);
}
function po(e) {
  const t = document.createElement("style");
  return t.setAttribute("cssr-id", e), t;
}
function Fe(e) {
  return e ? /^\s*@(s|m)/.test(e) : !1;
}
const go = /[A-Z]/g;
function On(e) {
  return e.replace(go, (t) => "-" + t.toLowerCase());
}
function mo(e, t = "  ") {
  return typeof e == "object" && e !== null ? ` {
` + Object.entries(e).map((n) => t + `  ${On(n[0])}: ${n[1]};`).join(`
`) + `
` + t + "}" : `: ${e};`;
}
function vo(e, t, n) {
  return typeof e == "function" ? e({
    context: t.context,
    props: n
  }) : e;
}
function Gt(e, t, n, r) {
  if (!t)
    return "";
  const o = vo(t, n, r);
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
    const d = o[a];
    if (a === "raw") {
      l.push(`
` + d + `
`);
      return;
    }
    a = On(a), d != null && l.push(`  ${a}${mo(d)}`);
  }), e && l.push("}"), l.join(`
`);
}
function St(e, t, n) {
  e && e.forEach((r) => {
    if (Array.isArray(r))
      St(r, t, n);
    else if (typeof r == "function") {
      const o = r(t);
      Array.isArray(o) ? St(o, t, n) : o && n(o);
    } else r && n(r);
  });
}
function Pn(e, t, n, r, o) {
  const i = e.$;
  let l = "";
  if (!i || typeof i == "string")
    Fe(i) ? l = i : t.push(i);
  else if (typeof i == "function") {
    const s = i({
      context: r.context,
      props: o
    });
    Fe(s) ? l = s : t.push(s);
  } else if (i.before && i.before(r.context), !i.$ || typeof i.$ == "string")
    Fe(i.$) ? l = i.$ : t.push(i.$);
  else if (i.$) {
    const s = i.$({
      context: r.context,
      props: o
    });
    Fe(s) ? l = s : t.push(s);
  }
  const a = ho(t), d = Gt(a, e.props, r, o);
  l ? n.push(`${l} {`) : d.length && n.push(d), e.children && St(e.children, {
    context: r.context,
    props: o
  }, (s) => {
    if (typeof s == "string") {
      const p = Gt(a, { raw: s }, r, o);
      n.push(p);
    } else
      Pn(s, t, n, r, o);
  }), t.pop(), l && n.push("}"), i && i.after && i.after(r.context);
}
function bo(e, t, n) {
  const r = [];
  return Pn(e, [], r, t, n), r.join(`

`);
}
function wt(e) {
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
function xo(e, t, n, r) {
  const { els: o } = t;
  if (n === void 0)
    o.forEach(Yt), t.els = [];
  else {
    const i = tt(n, r);
    i && o.includes(i) && (Yt(i), t.els = o.filter((l) => l !== i));
  }
}
function qt(e, t) {
  e.push(t);
}
function yo(e, t, n, r, o, i, l, a, d) {
  let s;
  if (n === void 0 && (s = t.render(r), n = wt(s)), d) {
    d.adapter(n, s ?? t.render(r));
    return;
  }
  a === void 0 && (a = document.head);
  const p = tt(n, a);
  if (p !== null && !i)
    return p;
  const g = p ?? po(n);
  if (s === void 0 && (s = t.render(r)), g.textContent = s, p !== null)
    return p;
  if (l) {
    const y = a.querySelector(`meta[name="${l}"]`);
    if (y)
      return a.insertBefore(g, y), qt(t.els, g), g;
  }
  return o ? a.insertBefore(g, a.querySelector("style, link")) : a.appendChild(g), qt(t.els, g), g;
}
function So(e) {
  return bo(this, this.instance, e);
}
function wo(e = {}) {
  const { id: t, ssr: n, props: r, head: o = !1, force: i = !1, anchorMetaName: l, parent: a } = e;
  return yo(this.instance, this, t, r, o, i, l, a, n);
}
function _o(e = {}) {
  const { id: t, parent: n } = e;
  xo(this.instance, this, t, n);
}
const Ne = function(e, t, n, r) {
  return {
    instance: e,
    $: t,
    props: n,
    children: r,
    els: [],
    render: So,
    mount: wo,
    unmount: _o
  };
}, Co = function(e, t, n, r) {
  return Array.isArray(t) ? Ne(e, { $: null }, null, t) : Array.isArray(n) ? Ne(e, t, null, n) : Array.isArray(r) ? Ne(e, t, n, r) : Ne(e, t, n, null);
};
function Ro(e = {}) {
  const t = {
    c: (...n) => Co(t, ...n),
    use: (n, ...r) => n.install(t, ...r),
    find: tt,
    context: {},
    config: e
  };
  return t;
}
function Eo(e, t) {
  if (e === void 0)
    return !1;
  if (t) {
    const { context: { ids: n } } = t;
    return n.has(e);
  }
  return tt(e) !== null;
}
var ge = [], To = function() {
  return ge.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, $o = function() {
  return ge.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, Kt = "ResizeObserver loop completed with undelivered notifications.", Oo = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: Kt
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = Kt), window.dispatchEvent(e);
}, ze;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(ze || (ze = {}));
var me = function(e) {
  return Object.freeze(e);
}, Po = /* @__PURE__ */ function() {
  function e(t, n) {
    this.inlineSize = t, this.blockSize = n, me(this);
  }
  return e;
}(), zn = function() {
  function e(t, n, r, o) {
    return this.x = t, this.y = n, this.width = r, this.height = o, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, me(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, n = t.x, r = t.y, o = t.top, i = t.right, l = t.bottom, a = t.left, d = t.width, s = t.height;
    return { x: n, y: r, top: o, right: i, bottom: l, left: a, width: d, height: s };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), Tt = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, Bn = function(e) {
  if (Tt(e)) {
    var t = e.getBBox(), n = t.width, r = t.height;
    return !n && !r;
  }
  var o = e, i = o.offsetWidth, l = o.offsetHeight;
  return !(i || l || e.getClientRects().length);
}, Jt = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var n = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(n && e instanceof n.Element);
}, zo = function(e) {
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
}, Pe = typeof window < "u" ? window : {}, Le = /* @__PURE__ */ new WeakMap(), Qt = /auto|scroll/, Bo = /^tb|vertical/, Mo = /msie|trident/i.test(Pe.navigator && Pe.navigator.userAgent), te = function(e) {
  return parseFloat(e || "0");
}, Se = function(e, t, n) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = !1), new Po((n ? t : e) || 0, (n ? e : t) || 0);
}, Zt = me({
  devicePixelContentBoxSize: Se(),
  borderBoxSize: Se(),
  contentBoxSize: Se(),
  contentRect: new zn(0, 0, 0, 0)
}), Mn = function(e, t) {
  if (t === void 0 && (t = !1), Le.has(e) && !t)
    return Le.get(e);
  if (Bn(e))
    return Le.set(e, Zt), Zt;
  var n = getComputedStyle(e), r = Tt(e) && e.ownerSVGElement && e.getBBox(), o = !Mo && n.boxSizing === "border-box", i = Bo.test(n.writingMode || ""), l = !r && Qt.test(n.overflowY || ""), a = !r && Qt.test(n.overflowX || ""), d = r ? 0 : te(n.paddingTop), s = r ? 0 : te(n.paddingRight), p = r ? 0 : te(n.paddingBottom), g = r ? 0 : te(n.paddingLeft), y = r ? 0 : te(n.borderTopWidth), C = r ? 0 : te(n.borderRightWidth), c = r ? 0 : te(n.borderBottomWidth), T = r ? 0 : te(n.borderLeftWidth), S = g + s, x = d + p, v = T + C, B = y + c, O = a ? e.offsetHeight - B - e.clientHeight : 0, M = l ? e.offsetWidth - v - e.clientWidth : 0, w = o ? S + v : 0, f = o ? x + B : 0, h = r ? r.width : te(n.width) - w - M, _ = r ? r.height : te(n.height) - f - O, P = h + S + M + v, A = _ + x + O + B, I = me({
    devicePixelContentBoxSize: Se(Math.round(h * devicePixelRatio), Math.round(_ * devicePixelRatio), i),
    borderBoxSize: Se(P, A, i),
    contentBoxSize: Se(h, _, i),
    contentRect: new zn(g, d, h, _)
  });
  return Le.set(e, I), I;
}, Hn = function(e, t, n) {
  var r = Mn(e, n), o = r.borderBoxSize, i = r.contentBoxSize, l = r.devicePixelContentBoxSize;
  switch (t) {
    case ze.DEVICE_PIXEL_CONTENT_BOX:
      return l;
    case ze.BORDER_BOX:
      return o;
    default:
      return i;
  }
}, Ho = /* @__PURE__ */ function() {
  function e(t) {
    var n = Mn(t);
    this.target = t, this.contentRect = n.contentRect, this.borderBoxSize = me([n.borderBoxSize]), this.contentBoxSize = me([n.contentBoxSize]), this.devicePixelContentBoxSize = me([n.devicePixelContentBoxSize]);
  }
  return e;
}(), Dn = function(e) {
  if (Bn(e))
    return 1 / 0;
  for (var t = 0, n = e.parentNode; n; )
    t += 1, n = n.parentNode;
  return t;
}, Do = function() {
  var e = 1 / 0, t = [];
  ge.forEach(function(l) {
    if (l.activeTargets.length !== 0) {
      var a = [];
      l.activeTargets.forEach(function(s) {
        var p = new Ho(s.target), g = Dn(s.target);
        a.push(p), s.lastReportedSize = Hn(s.target, s.observedBox), g < e && (e = g);
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
}, en = function(e) {
  ge.forEach(function(n) {
    n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(o) {
      o.isActive() && (Dn(o.target) > e ? n.activeTargets.push(o) : n.skippedTargets.push(o));
    });
  });
}, Ao = function() {
  var e = 0;
  for (en(e); To(); )
    e = Do(), en(e);
  return $o() && Oo(), e > 0;
}, dt, An = [], Io = function() {
  return An.splice(0).forEach(function(e) {
    return e();
  });
}, ko = function(e) {
  if (!dt) {
    var t = 0, n = document.createTextNode(""), r = { characterData: !0 };
    new MutationObserver(function() {
      return Io();
    }).observe(n, r), dt = function() {
      n.textContent = "".concat(t ? t-- : t++);
    };
  }
  An.push(e), dt();
}, Fo = function(e) {
  ko(function() {
    requestAnimationFrame(e);
  });
}, Ye = 0, No = function() {
  return !!Ye;
}, Lo = 250, jo = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, tn = [
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
], nn = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, ht = !1, Wo = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var n = this;
    if (t === void 0 && (t = Lo), !ht) {
      ht = !0;
      var r = nn(t);
      Fo(function() {
        var o = !1;
        try {
          o = Ao();
        } finally {
          if (ht = !1, t = r - nn(), !No())
            return;
          o ? n.run(1e3) : t > 0 ? n.run(t) : n.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, n = function() {
      return t.observer && t.observer.observe(document.body, jo);
    };
    document.body ? n() : Pe.addEventListener("DOMContentLoaded", n);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), tn.forEach(function(n) {
      return Pe.addEventListener(n, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), tn.forEach(function(n) {
      return Pe.removeEventListener(n, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), _t = new Wo(), rn = function(e) {
  !Ye && e > 0 && _t.start(), Ye += e, !Ye && _t.stop();
}, Vo = function(e) {
  return !Tt(e) && !zo(e) && getComputedStyle(e).display === "inline";
}, Uo = function() {
  function e(t, n) {
    this.target = t, this.observedBox = n || ze.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = Hn(this.target, this.observedBox, !0);
    return Vo(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), Xo = /* @__PURE__ */ function() {
  function e(t, n) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = n;
  }
  return e;
}(), je = /* @__PURE__ */ new WeakMap(), on = function(e, t) {
  for (var n = 0; n < e.length; n += 1)
    if (e[n].target === t)
      return n;
  return -1;
}, We = function() {
  function e() {
  }
  return e.connect = function(t, n) {
    var r = new Xo(t, n);
    je.set(t, r);
  }, e.observe = function(t, n, r) {
    var o = je.get(t), i = o.observationTargets.length === 0;
    on(o.observationTargets, n) < 0 && (i && ge.push(o), o.observationTargets.push(new Uo(n, r && r.box)), rn(1), _t.schedule());
  }, e.unobserve = function(t, n) {
    var r = je.get(t), o = on(r.observationTargets, n), i = r.observationTargets.length === 1;
    o >= 0 && (i && ge.splice(ge.indexOf(r), 1), r.observationTargets.splice(o, 1), rn(-1));
  }, e.disconnect = function(t) {
    var n = this, r = je.get(t);
    r.observationTargets.slice().forEach(function(o) {
      return n.unobserve(t, o.target);
    }), r.activeTargets.splice(0, r.activeTargets.length);
  }, e;
}(), Yo = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    We.connect(this, t);
  }
  return e.prototype.observe = function(t, n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Jt(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    We.observe(this, t, n);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Jt(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    We.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    We.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
class Go {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || Yo)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
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
const an = new Go(), ln = ae({
  name: "ResizeObserver",
  props: {
    onResize: Function
  },
  setup(e) {
    let t = !1;
    const n = Cr().proxy;
    function r(o) {
      const { onResize: i } = e;
      i !== void 0 && i(o);
    }
    Rt(() => {
      const o = n.$el;
      if (o === void 0) {
        Xt("resize-observer", "$el does not exist.");
        return;
      }
      if (o.nextElementSibling !== o.nextSibling && o.nodeType === 3 && o.nodeValue !== "") {
        Xt("resize-observer", "$el can not be observed (it may be a text node).");
        return;
      }
      o.nextElementSibling !== null && (an.registerHandler(o.nextElementSibling, r), t = !0);
    }), yn(() => {
      t && an.unregisterHandler(n.$el.nextElementSibling);
    });
  },
  render() {
    return Sn(this.$slots, "default");
  }
});
function sn(e) {
  const {
    left: t,
    right: n,
    top: r,
    bottom: o
  } = $e(e);
  return `${r} ${t} ${o} ${n}`;
}
var cn = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_26504_XKHRYLZIHXXZLNIG", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.97.2", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-5a8078c568-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
function qo(e) {
  let t = ".", n = "__", r = "--", o;
  {
    let c = e.blockPrefix;
    c && (t = c), c = e.elementPrefix, c && (n = c), c = e.modifierPrefix, c && (r = c);
  }
  const i = {
    install(c) {
      o = c.c;
      const T = c.context;
      T.bem = {}, T.bem.b = null, T.bem.els = null;
    }
  };
  function l(c) {
    let T, S;
    return {
      before(x) {
        T = x.bem.b, S = x.bem.els, x.bem.els = null;
      },
      after(x) {
        x.bem.b = T, x.bem.els = S;
      },
      $({ context: x, props: v }) {
        return c = typeof c == "string" ? c : c({ context: x, props: v }), x.bem.b = c, `${(v == null ? void 0 : v.bPrefix) || t}${x.bem.b}`;
      }
    };
  }
  function a(c) {
    let T;
    return {
      before(S) {
        T = S.bem.els;
      },
      after(S) {
        S.bem.els = T;
      },
      $({ context: S, props: x }) {
        return c = typeof c == "string" ? c : c({ context: S, props: x }), S.bem.els = c.split(",").map((v) => v.trim()), S.bem.els.map((v) => `${(x == null ? void 0 : x.bPrefix) || t}${S.bem.b}${n}${v}`).join(", ");
      }
    };
  }
  function d(c) {
    return {
      $({ context: T, props: S }) {
        c = typeof c == "string" ? c : c({ context: T, props: S });
        const x = c.split(",").map((O) => O.trim());
        function v(O) {
          return x.map((M) => `&${(S == null ? void 0 : S.bPrefix) || t}${T.bem.b}${O !== void 0 ? `${n}${O}` : ""}${r}${M}`).join(", ");
        }
        const B = T.bem.els;
        if (B !== null) {
          if (cn.NODE_ENV !== "production" && B.length >= 2)
            throw Error(`[css-render/plugin-bem]: m(${c}) is invalid, using modifier inside multiple elements is not allowed`);
          return v(B[0]);
        } else
          return v();
      }
    };
  }
  function s(c) {
    return {
      $({ context: T, props: S }) {
        c = typeof c == "string" ? c : c({ context: T, props: S });
        const x = T.bem.els;
        if (cn.NODE_ENV !== "production" && x !== null && x.length >= 2)
          throw Error(`[css-render/plugin-bem]: notM(${c}) is invalid, using modifier inside multiple elements is not allowed`);
        return `&:not(${(S == null ? void 0 : S.bPrefix) || t}${T.bem.b}${x !== null && x.length > 0 ? `${n}${x[0]}` : ""}${r}${c})`;
      }
    };
  }
  return Object.assign(i, {
    cB: (...c) => o(l(c[0]), c[1], c[2]),
    cE: (...c) => o(a(c[0]), c[1], c[2]),
    cM: (...c) => o(d(c[0]), c[1], c[2]),
    cNotM: (...c) => o(s(c[0]), c[1], c[2])
  }), i;
}
const Ko = "n", Jo = `.${Ko}-`, Qo = "__", Zo = "--", In = Ro(), kn = qo({
  blockPrefix: Jo,
  elementPrefix: Qo,
  modifierPrefix: Zo
});
In.use(kn);
const {
  c: X,
  find: El
} = In, {
  cB: Ve,
  cE: Ue,
  cM: ue,
  cNotM: Tl
} = kn;
function ei(e, t) {
  throw new Error(`[naive/${e}]: ${t}`);
}
const un = ae({
  render() {
    var e, t;
    return (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e);
  }
}), nt = "n-config-provider", ti = "n";
function ni(e = {}, t = {
  defaultBordered: !0
}) {
  const n = De(nt, null);
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
    mergedClsPrefixRef: n ? n.mergedClsPrefixRef : vt(ti),
    namespaceRef: D(() => n == null ? void 0 : n.mergedNamespaceRef.value)
  };
}
function ri(e, t, n, r) {
  n || ei("useThemeClass", "cssVarsRef is not passed");
  const o = De(nt, null), i = o == null ? void 0 : o.mergedThemeHashRef, l = o == null ? void 0 : o.styleMountTarget, a = H(""), d = Et();
  let s;
  const p = `__${e}`, g = () => {
    let y = p;
    const C = i == null ? void 0 : i.value;
    C && (y += `-${C}`);
    const {
      themeOverrides: c,
      builtinThemeOverrides: T
    } = r;
    c && (y += `-${wt(JSON.stringify(c))}`), T && (y += `-${wt(JSON.stringify(T))}`), a.value = y, s = () => {
      const S = n.value;
      let x = "";
      for (const v in S)
        x += `${v}: ${S[v]};`;
      X(`.${y}`, x).mount({
        id: y,
        ssr: d,
        parent: l
      }), s = void 0;
    };
  };
  return Ze(() => {
    g();
  }), {
    themeClass: a,
    onRender: () => {
      s == null || s();
    }
  };
}
const Ct = "naive-ui-style";
function oi(e, t, n) {
  if (!t) return;
  const r = Et(), o = D(() => {
    const {
      value: a
    } = t;
    if (!a)
      return;
    const d = a[e];
    if (d)
      return d;
  }), i = De(nt, null), l = () => {
    Ze(() => {
      const {
        value: a
      } = n, d = `${a}${e}Rtl`;
      if (Eo(d, r)) return;
      const {
        value: s
      } = o;
      s && s.style.mount({
        id: d,
        head: !0,
        anchorMetaName: Ct,
        props: {
          bPrefix: a ? `.${a}-` : void 0
        },
        ssr: r,
        parent: i == null ? void 0 : i.styleMountTarget
      });
    });
  };
  return r ? l() : wn(l), o;
}
const $t = {
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
  fontSize: ii,
  fontFamily: ai,
  lineHeight: li
} = $t, si = X("body", `
 margin: 0;
 font-size: ${ii};
 font-family: ${ai};
 line-height: ${li};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [X("input", `
 font-family: inherit;
 font-size: inherit;
 `)]);
function rt(e, t, n, r, o, i) {
  const l = Et(), a = De(nt, null);
  if (n) {
    const s = () => {
      const p = i == null ? void 0 : i.value;
      n.mount({
        id: p === void 0 ? t : p + t,
        head: !0,
        props: {
          bPrefix: p ? `.${p}-` : void 0
        },
        anchorMetaName: Ct,
        ssr: l,
        parent: a == null ? void 0 : a.styleMountTarget
      }), a != null && a.preflightStyleDisabled || si.mount({
        id: "n-global",
        head: !0,
        anchorMetaName: Ct,
        ssr: l,
        parent: a == null ? void 0 : a.styleMountTarget
      });
    };
    l ? s() : wn(s);
  }
  return D(() => {
    var s;
    const {
      theme: {
        common: p,
        self: g,
        peers: y = {}
      } = {},
      themeOverrides: C = {},
      builtinThemeOverrides: c = {}
    } = o, {
      common: T,
      peers: S
    } = C, {
      common: x = void 0,
      [e]: {
        common: v = void 0,
        self: B = void 0,
        peers: O = {}
      } = {}
    } = (a == null ? void 0 : a.mergedThemeRef.value) || {}, {
      common: M = void 0,
      [e]: w = {}
    } = (a == null ? void 0 : a.mergedThemeOverridesRef.value) || {}, {
      common: f,
      peers: h = {}
    } = w, _ = Ie({}, p || v || x || r.common, M, f, T), P = Ie(
      // {}, executed every time, no need for empty obj
      (s = g || B || r.self) === null || s === void 0 ? void 0 : s(_),
      c,
      w,
      C
    );
    return {
      common: _,
      self: P,
      peers: Ie({}, r.peers, O, y),
      peerOverrides: Ie({}, c.peers, h, S)
    };
  });
}
rt.props = {
  theme: Object,
  themeOverrides: Object,
  builtinThemeOverrides: Object
};
const {
  cubicBezierEaseInOut: fn
} = $t;
function ci({
  name: e = "fade-in",
  enterDuration: t = "0.2s",
  leaveDuration: n = "0.2s",
  enterCubicBezier: r = fn,
  leaveCubicBezier: o = fn
} = {}) {
  return [X(`&.${e}-transition-enter-active`, {
    transition: `all ${t} ${r}!important`
  }), X(`&.${e}-transition-leave-active`, {
    transition: `all ${n} ${o}!important`
  }), X(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`, {
    opacity: 0
  }), X(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`, {
    opacity: 1
  })];
}
const b = {
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
}, ui = we(b.neutralBase), Fn = we(b.neutralInvertBase), fi = `rgba(${Fn.slice(0, 3).join(", ")}, `;
function dn(e) {
  return `${fi + String(e)})`;
}
function U(e) {
  const t = Array.from(Fn);
  return t[3] = Number(e), no(ui, t);
}
const di = Object.assign(Object.assign({
  name: "common"
}, $t), {
  baseColor: b.neutralBase,
  // primary color
  primaryColor: b.primaryDefault,
  primaryColorHover: b.primaryHover,
  primaryColorPressed: b.primaryActive,
  primaryColorSuppl: b.primarySuppl,
  // info color
  infoColor: b.infoDefault,
  infoColorHover: b.infoHover,
  infoColorPressed: b.infoActive,
  infoColorSuppl: b.infoSuppl,
  // success color
  successColor: b.successDefault,
  successColorHover: b.successHover,
  successColorPressed: b.successActive,
  successColorSuppl: b.successSuppl,
  // warning color
  warningColor: b.warningDefault,
  warningColorHover: b.warningHover,
  warningColorPressed: b.warningActive,
  warningColorSuppl: b.warningSuppl,
  // error color
  errorColor: b.errorDefault,
  errorColorHover: b.errorHover,
  errorColorPressed: b.errorActive,
  errorColorSuppl: b.errorSuppl,
  // text color
  textColorBase: b.neutralTextBase,
  textColor1: "rgb(31, 34, 37)",
  textColor2: "rgb(51, 54, 57)",
  textColor3: "rgb(118, 124, 130)",
  // textColor4: neutral(base.alpha4), // disabled, placeholder, icon
  // textColor5: neutral(base.alpha5),
  textColorDisabled: U(b.alpha4),
  placeholderColor: U(b.alpha4),
  placeholderColorDisabled: U(b.alpha5),
  iconColor: U(b.alpha4),
  iconColorHover: ke(U(b.alpha4), {
    lightness: 0.75
  }),
  iconColorPressed: ke(U(b.alpha4), {
    lightness: 0.9
  }),
  iconColorDisabled: U(b.alpha5),
  opacity1: b.alpha1,
  opacity2: b.alpha2,
  opacity3: b.alpha3,
  opacity4: b.alpha4,
  opacity5: b.alpha5,
  dividerColor: "rgb(239, 239, 245)",
  borderColor: "rgb(224, 224, 230)",
  // close
  closeIconColor: U(Number(b.alphaClose)),
  closeIconColorHover: U(Number(b.alphaClose)),
  closeIconColorPressed: U(Number(b.alphaClose)),
  closeColorHover: "rgba(0, 0, 0, .09)",
  closeColorPressed: "rgba(0, 0, 0, .13)",
  // clear
  clearColor: U(b.alpha4),
  clearColorHover: ke(U(b.alpha4), {
    lightness: 0.75
  }),
  clearColorPressed: ke(U(b.alpha4), {
    lightness: 0.9
  }),
  scrollbarColor: dn(b.alphaScrollbar),
  scrollbarColorHover: dn(b.alphaScrollbarHover),
  scrollbarWidth: "5px",
  scrollbarHeight: "5px",
  scrollbarBorderRadius: "5px",
  progressRailColor: U(b.alphaProgressRail),
  railColor: "rgb(219, 219, 223)",
  popoverColor: b.neutralPopover,
  tableColor: b.neutralCard,
  cardColor: b.neutralCard,
  modalColor: b.neutralModal,
  bodyColor: b.neutralBody,
  tagColor: "#eee",
  avatarColor: U(b.alphaAvatar),
  invertedColor: "rgb(0, 20, 40)",
  inputColor: U(b.alphaInput),
  codeColor: "rgb(244, 244, 248)",
  tabColor: "rgb(247, 247, 250)",
  actionColor: "rgb(250, 250, 252)",
  tableHeaderColor: "rgb(250, 250, 252)",
  hoverColor: "rgb(243, 243, 245)",
  // use color with alpha since it can be nested with header filter & sorter effect
  tableColorHover: "rgba(0, 0, 100, 0.03)",
  tableColorStriped: "rgba(0, 0, 100, 0.02)",
  pressedColor: "rgb(237, 237, 239)",
  opacityDisabled: b.alphaDisabled,
  inputColorDisabled: "rgb(250, 250, 252)",
  // secondary button color
  // can also be used in tertiary button & quaternary button
  buttonColor2: "rgba(46, 51, 56, .05)",
  buttonColor2Hover: "rgba(46, 51, 56, .09)",
  buttonColor2Pressed: "rgba(46, 51, 56, .13)",
  boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",
  boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",
  boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"
}), hi = {
  railInsetHorizontalBottom: "auto 2px 4px 2px",
  railInsetHorizontalTop: "4px 2px auto 2px",
  railInsetVerticalRight: "2px 4px 2px auto",
  railInsetVerticalLeft: "2px auto 2px 4px",
  railColor: "transparent"
};
function pi(e) {
  const {
    scrollbarColor: t,
    scrollbarColorHover: n,
    scrollbarHeight: r,
    scrollbarWidth: o,
    scrollbarBorderRadius: i
  } = e;
  return Object.assign(Object.assign({}, hi), {
    height: r,
    width: o,
    borderRadius: i,
    color: t,
    colorHover: n
  });
}
const gi = {
  name: "Scrollbar",
  common: di,
  self: pi
}, mi = Ve("scrollbar", `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [X(">", [Ve("scrollbar-container", `
 width: 100%;
 overflow: scroll;
 height: 100%;
 min-height: inherit;
 max-height: inherit;
 scrollbar-width: none;
 `, [X("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), X(">", [
  // We can't set overflow hidden since it affects positioning.
  Ve("scrollbar-content", `
 box-sizing: border-box;
 min-width: 100%;
 `)
])])]), X(">, +", [Ve("scrollbar-rail", `
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `, [ue("horizontal", `
 height: var(--n-scrollbar-height);
 `, [X(">", [Ue("scrollbar", `
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
 `, [X(">", [Ue("scrollbar", `
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
 `), ue("disabled", [X(">", [Ue("scrollbar", "pointer-events: none;")])]), X(">", [Ue("scrollbar", `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [ci(), X("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), vi = Object.assign(Object.assign({}, rt.props), {
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
}), bi = ae({
  name: "Scrollbar",
  props: vi,
  inheritAttrs: !1,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: n,
      mergedRtlRef: r
    } = ni(e), o = oi("Scrollbar", r, t), i = H(null), l = H(null), a = H(null), d = H(null), s = H(null), p = H(null), g = H(null), y = H(null), C = H(null), c = H(null), T = H(null), S = H(0), x = H(0), v = H(!1), B = H(!1);
    let O = !1, M = !1, w, f, h = 0, _ = 0, P = 0, A = 0;
    const I = Ur(), $ = rt("Scrollbar", "-scrollbar", mi, gi, e, t), E = D(() => {
      const {
        value: u
      } = y, {
        value: m
      } = p, {
        value: R
      } = c;
      return u === null || m === null || R === null ? 0 : Math.min(u, R * u / m + Vt($.value.self.width) * 1.5);
    }), z = D(() => `${E.value}px`), j = D(() => {
      const {
        value: u
      } = C, {
        value: m
      } = g, {
        value: R
      } = T;
      return u === null || m === null || R === null ? 0 : R * u / m + Vt($.value.self.height) * 1.5;
    }), V = D(() => `${j.value}px`), G = D(() => {
      const {
        value: u
      } = y, {
        value: m
      } = S, {
        value: R
      } = p, {
        value: k
      } = c;
      if (u === null || R === null || k === null)
        return 0;
      {
        const W = R - u;
        return W ? m / W * (k - E.value) : 0;
      }
    }), re = D(() => `${G.value}px`), le = D(() => {
      const {
        value: u
      } = C, {
        value: m
      } = x, {
        value: R
      } = g, {
        value: k
      } = T;
      if (u === null || R === null || k === null)
        return 0;
      {
        const W = R - u;
        return W ? m / W * (k - j.value) : 0;
      }
    }), oe = D(() => `${le.value}px`), Ae = D(() => {
      const {
        value: u
      } = y, {
        value: m
      } = p;
      return u !== null && m !== null && m > u;
    }), Ot = D(() => {
      const {
        value: u
      } = C, {
        value: m
      } = g;
      return u !== null && m !== null && m > u;
    }), Wn = D(() => {
      const {
        trigger: u
      } = e;
      return u === "none" || v.value;
    }), Vn = D(() => {
      const {
        trigger: u
      } = e;
      return u === "none" || B.value;
    }), se = D(() => {
      const {
        container: u
      } = e;
      return u ? u() : l.value;
    }), Un = D(() => {
      const {
        content: u
      } = e;
      return u ? u() : a.value;
    }), Pt = (u, m) => {
      if (!e.scrollable) return;
      if (typeof u == "number") {
        xe(u, m ?? 0, 0, !1, "auto");
        return;
      }
      const {
        left: R,
        top: k,
        index: W,
        elSize: q,
        position: ee,
        behavior: F,
        el: Q,
        debounce: ie = !0
      } = u;
      (R !== void 0 || k !== void 0) && xe(R ?? 0, k ?? 0, 0, !1, F), Q !== void 0 ? xe(0, Q.offsetTop, Q.offsetHeight, ie, F) : W !== void 0 && q !== void 0 ? xe(0, W * q, q, ie, F) : ee === "bottom" ? xe(0, Number.MAX_SAFE_INTEGER, 0, !1, F) : ee === "top" && xe(0, 0, 0, !1, F);
    }, zt = Xr(() => {
      e.container || Pt({
        top: S.value,
        left: x.value
      });
    }), Xn = () => {
      zt.isDeactivated || ce();
    }, Yn = (u) => {
      if (zt.isDeactivated) return;
      const {
        onResize: m
      } = e;
      m && m(u), ce();
    }, Gn = (u, m) => {
      if (!e.scrollable) return;
      const {
        value: R
      } = se;
      R && (typeof u == "object" ? R.scrollBy(u) : R.scrollBy(u, m || 0));
    };
    function xe(u, m, R, k, W) {
      const {
        value: q
      } = se;
      if (q) {
        if (k) {
          const {
            scrollTop: ee,
            offsetHeight: F
          } = q;
          if (m > ee) {
            m + R <= ee + F || q.scrollTo({
              left: u,
              top: m + R - F,
              behavior: W
            });
            return;
          }
        }
        q.scrollTo({
          left: u,
          top: m,
          behavior: W
        });
      }
    }
    function qn() {
      Zn(), er(), ce();
    }
    function Kn() {
      st();
    }
    function st() {
      Jn(), Qn();
    }
    function Jn() {
      f !== void 0 && window.clearTimeout(f), f = window.setTimeout(() => {
        B.value = !1;
      }, e.duration);
    }
    function Qn() {
      w !== void 0 && window.clearTimeout(w), w = window.setTimeout(() => {
        v.value = !1;
      }, e.duration);
    }
    function Zn() {
      w !== void 0 && window.clearTimeout(w), v.value = !0;
    }
    function er() {
      f !== void 0 && window.clearTimeout(f), B.value = !0;
    }
    function tr(u) {
      const {
        onScroll: m
      } = e;
      m && m(u), Bt();
    }
    function Bt() {
      const {
        value: u
      } = se;
      u && (S.value = u.scrollTop, x.value = u.scrollLeft * (o != null && o.value ? -1 : 1));
    }
    function nr() {
      const {
        value: u
      } = Un;
      u && (p.value = u.offsetHeight, g.value = u.offsetWidth);
      const {
        value: m
      } = se;
      m && (y.value = m.offsetHeight, C.value = m.offsetWidth);
      const {
        value: R
      } = s, {
        value: k
      } = d;
      R && (T.value = R.offsetWidth), k && (c.value = k.offsetHeight);
    }
    function Mt() {
      const {
        value: u
      } = se;
      u && (S.value = u.scrollTop, x.value = u.scrollLeft * (o != null && o.value ? -1 : 1), y.value = u.offsetHeight, C.value = u.offsetWidth, p.value = u.scrollHeight, g.value = u.scrollWidth);
      const {
        value: m
      } = s, {
        value: R
      } = d;
      m && (T.value = m.offsetWidth), R && (c.value = R.offsetHeight);
    }
    function ce() {
      e.scrollable && (e.useUnifiedContainer ? Mt() : (nr(), Bt()));
    }
    function Ht(u) {
      var m;
      return !(!((m = i.value) === null || m === void 0) && m.contains(Yr(u)));
    }
    function rr(u) {
      u.preventDefault(), u.stopPropagation(), M = !0, Te("mousemove", window, Dt, !0), Te("mouseup", window, At, !0), _ = x.value, P = o != null && o.value ? window.innerWidth - u.clientX : u.clientX;
    }
    function Dt(u) {
      if (!M) return;
      w !== void 0 && window.clearTimeout(w), f !== void 0 && window.clearTimeout(f);
      const {
        value: m
      } = C, {
        value: R
      } = g, {
        value: k
      } = j;
      if (m === null || R === null) return;
      const q = (o != null && o.value ? window.innerWidth - u.clientX - P : u.clientX - P) * (R - m) / (m - k), ee = R - m;
      let F = _ + q;
      F = Math.min(ee, F), F = Math.max(F, 0);
      const {
        value: Q
      } = se;
      if (Q) {
        Q.scrollLeft = F * (o != null && o.value ? -1 : 1);
        const {
          internalOnUpdateScrollLeft: ie
        } = e;
        ie && ie(F);
      }
    }
    function At(u) {
      u.preventDefault(), u.stopPropagation(), fe("mousemove", window, Dt, !0), fe("mouseup", window, At, !0), M = !1, ce(), Ht(u) && st();
    }
    function or(u) {
      u.preventDefault(), u.stopPropagation(), O = !0, Te("mousemove", window, ct, !0), Te("mouseup", window, ut, !0), h = S.value, A = u.clientY;
    }
    function ct(u) {
      if (!O) return;
      w !== void 0 && window.clearTimeout(w), f !== void 0 && window.clearTimeout(f);
      const {
        value: m
      } = y, {
        value: R
      } = p, {
        value: k
      } = E;
      if (m === null || R === null) return;
      const q = (u.clientY - A) * (R - m) / (m - k), ee = R - m;
      let F = h + q;
      F = Math.min(ee, F), F = Math.max(F, 0);
      const {
        value: Q
      } = se;
      Q && (Q.scrollTop = F);
    }
    function ut(u) {
      u.preventDefault(), u.stopPropagation(), fe("mousemove", window, ct, !0), fe("mouseup", window, ut, !0), O = !1, ce(), Ht(u) && st();
    }
    Ze(() => {
      const {
        value: u
      } = Ot, {
        value: m
      } = Ae, {
        value: R
      } = t, {
        value: k
      } = s, {
        value: W
      } = d;
      k && (u ? k.classList.remove(`${R}-scrollbar-rail--disabled`) : k.classList.add(`${R}-scrollbar-rail--disabled`)), W && (m ? W.classList.remove(`${R}-scrollbar-rail--disabled`) : W.classList.add(`${R}-scrollbar-rail--disabled`));
    }), Rt(() => {
      e.container || ce();
    }), yn(() => {
      w !== void 0 && window.clearTimeout(w), f !== void 0 && window.clearTimeout(f), fe("mousemove", window, ct, !0), fe("mouseup", window, ut, !0);
    });
    const It = D(() => {
      const {
        common: {
          cubicBezierEaseInOut: u
        },
        self: {
          color: m,
          colorHover: R,
          height: k,
          width: W,
          borderRadius: q,
          railInsetHorizontalTop: ee,
          railInsetHorizontalBottom: F,
          railInsetVerticalRight: Q,
          railInsetVerticalLeft: ie,
          railColor: ir
        }
      } = $.value, {
        top: ar,
        right: lr,
        bottom: sr,
        left: cr
      } = $e(ee), {
        top: ur,
        right: fr,
        bottom: dr,
        left: hr
      } = $e(F), {
        top: pr,
        right: gr,
        bottom: mr,
        left: vr
      } = $e(o != null && o.value ? sn(Q) : Q), {
        top: br,
        right: xr,
        bottom: yr,
        left: Sr
      } = $e(o != null && o.value ? sn(ie) : ie);
      return {
        "--n-scrollbar-bezier": u,
        "--n-scrollbar-color": m,
        "--n-scrollbar-color-hover": R,
        "--n-scrollbar-border-radius": q,
        "--n-scrollbar-width": W,
        "--n-scrollbar-height": k,
        "--n-scrollbar-rail-top-horizontal-top": ar,
        "--n-scrollbar-rail-right-horizontal-top": lr,
        "--n-scrollbar-rail-bottom-horizontal-top": sr,
        "--n-scrollbar-rail-left-horizontal-top": cr,
        "--n-scrollbar-rail-top-horizontal-bottom": ur,
        "--n-scrollbar-rail-right-horizontal-bottom": fr,
        "--n-scrollbar-rail-bottom-horizontal-bottom": dr,
        "--n-scrollbar-rail-left-horizontal-bottom": hr,
        "--n-scrollbar-rail-top-vertical-right": pr,
        "--n-scrollbar-rail-right-vertical-right": gr,
        "--n-scrollbar-rail-bottom-vertical-right": mr,
        "--n-scrollbar-rail-left-vertical-right": vr,
        "--n-scrollbar-rail-top-vertical-left": br,
        "--n-scrollbar-rail-right-vertical-left": xr,
        "--n-scrollbar-rail-bottom-vertical-left": yr,
        "--n-scrollbar-rail-left-vertical-left": Sr,
        "--n-scrollbar-rail-color": ir
      };
    }), ye = n ? ri("scrollbar", void 0, It, e) : void 0;
    return Object.assign(Object.assign({}, {
      scrollTo: Pt,
      scrollBy: Gn,
      sync: ce,
      syncUnifiedContainer: Mt,
      handleMouseEnterWrapper: qn,
      handleMouseLeaveWrapper: Kn
    }), {
      mergedClsPrefix: t,
      rtlEnabled: o,
      containerScrollTop: S,
      wrapperRef: i,
      containerRef: l,
      contentRef: a,
      yRailRef: d,
      xRailRef: s,
      needYBar: Ae,
      needXBar: Ot,
      yBarSizePx: z,
      xBarSizePx: V,
      yBarTopPx: re,
      xBarLeftPx: oe,
      isShowXBar: Wn,
      isShowYBar: Vn,
      isIos: I,
      handleScroll: tr,
      handleContentResize: Xn,
      handleContainerResize: Yn,
      handleYScrollMouseDown: or,
      handleXScrollMouseDown: rr,
      cssVars: n ? void 0 : It,
      themeClass: ye == null ? void 0 : ye.themeClass,
      onRender: ye == null ? void 0 : ye.onRender
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
      xScrollable: d
    } = this;
    if (!this.scrollable) return (e = t.default) === null || e === void 0 ? void 0 : e.call(t);
    const s = this.trigger === "none", p = (C, c) => J("div", {
      ref: "yRailRef",
      class: [`${n}-scrollbar-rail`, `${n}-scrollbar-rail--vertical`, `${n}-scrollbar-rail--vertical--${l}`, C],
      "data-scrollbar-rail": !0,
      style: [c || "", this.verticalRailStyle],
      "aria-hidden": !0
    }, J(s ? un : kt, s ? null : {
      name: "fade-in-transition"
    }, {
      default: () => this.needYBar && this.isShowYBar && !this.isIos ? J("div", {
        class: `${n}-scrollbar-rail__scrollbar`,
        style: {
          height: this.yBarSizePx,
          top: this.yBarTopPx
        },
        onMousedown: this.handleYScrollMouseDown
      }) : null
    })), g = () => {
      var C, c;
      return (C = this.onRender) === null || C === void 0 || C.call(this), J("div", bt(this.$attrs, {
        role: "none",
        ref: "wrapperRef",
        class: [`${n}-scrollbar`, this.themeClass, o && `${n}-scrollbar--rtl`],
        style: this.cssVars,
        onMouseenter: r ? void 0 : this.handleMouseEnterWrapper,
        onMouseleave: r ? void 0 : this.handleMouseLeaveWrapper
      }), [this.container ? (c = t.default) === null || c === void 0 ? void 0 : c.call(t) : J("div", {
        role: "none",
        ref: "containerRef",
        class: [`${n}-scrollbar-container`, this.containerClass],
        style: this.containerStyle,
        onScroll: this.handleScroll,
        onWheel: this.onWheel
      }, J(ln, {
        onResize: this.handleContentResize
      }, {
        default: () => J("div", {
          ref: "contentRef",
          role: "none",
          style: [{
            width: this.xScrollable ? "fit-content" : null
          }, this.contentStyle],
          class: [`${n}-scrollbar-content`, this.contentClass]
        }, t)
      })), i ? null : p(void 0, void 0), d && J("div", {
        ref: "xRailRef",
        class: [`${n}-scrollbar-rail`, `${n}-scrollbar-rail--horizontal`, `${n}-scrollbar-rail--horizontal--${a}`],
        style: this.horizontalRailStyle,
        "data-scrollbar-rail": !0,
        "aria-hidden": !0
      }, J(s ? un : kt, s ? null : {
        name: "fade-in-transition"
      }, {
        default: () => this.needXBar && this.isShowXBar && !this.isIos ? J("div", {
          class: `${n}-scrollbar-rail__scrollbar`,
          style: {
            width: this.xBarSizePx,
            right: o ? this.xBarLeftPx : void 0,
            left: o ? void 0 : this.xBarLeftPx
          },
          onMousedown: this.handleXScrollMouseDown
        }) : null
      }))]);
    }, y = this.container ? g() : J(ln, {
      onResize: this.handleContainerResize
    }, {
      default: g
    });
    return i ? J(Ge, null, y, p(this.themeClass, this.cssVars)) : y;
  }
}), xi = Object.assign(Object.assign({}, rt.props), {
  trigger: String,
  xScrollable: Boolean,
  onScroll: Function,
  contentClass: String,
  contentStyle: [Object, String],
  size: Number,
  yPlacement: {
    type: String,
    default: "right"
  },
  xPlacement: {
    type: String,
    default: "bottom"
  }
}), yi = ae({
  name: "Scrollbar",
  props: xi,
  setup() {
    const e = H(null);
    return Object.assign(Object.assign({}, {
      scrollTo: (...n) => {
        var r;
        (r = e.value) === null || r === void 0 || r.scrollTo(n[0], n[1]);
      },
      scrollBy: (...n) => {
        var r;
        (r = e.value) === null || r === void 0 || r.scrollBy(n[0], n[1]);
      }
    }), {
      scrollbarInstRef: e
    });
  },
  render() {
    return J(bi, Object.assign({
      ref: "scrollbarInstRef"
    }, this.$props), this.$slots);
  }
}), Si = { class: "lc-robot-chat-popup__content" }, wi = { class: "lc-robot-chat-popup__content--inner" }, _i = { class: "lc-robot-chat-popup__content--inner__sayhello" }, Ci = { class: "lc-robot-chat-popup__content--inner__quick" }, Ri = ["onClick"], Ei = { class: "lc-robot-chat-popup__content--inner__quick__item--text" }, Ti = /* @__PURE__ */ ae({
  __name: "robot-chat-popup",
  props: /* @__PURE__ */ et({
    isFocus: {
      type: Boolean
    },
    hidDir: {
      type: String
    },
    aiConfig: {
      type: Object
    },
    maxHeight: {
      type: String
    }
  }, {
    isFocus: !1,
    hidDir: "rt",
    aiConfig: () => ({
      sayHello: "您好，我是智能客服机器人，请问您需要什么帮助？",
      quick: []
    }),
    maxHeight: "75px"
  }),
  emits: ["clickQuick"],
  setup(e, { emit: t }) {
    const n = t;
    function r(o) {
      n("clickQuick", o);
    }
    return (o, i) => (Z(), ne(
      "div",
      {
        class: qe(["lc-robot-chat-popup", [{
          "lc-robot-chat-popup--focus": e.isFocus
        }, `lc-robot-chat-popup__hide--${e.hidDir}`]])
      },
      [
        N("div", Si, [
          N("div", wi, [
            N(
              "div",
              _i,
              Ke(e.aiConfig.sayHello),
              1
              /* TEXT */
            ),
            N("div", Ci, [
              _n(L(yi), {
                style: Je({ maxHeight: e.maxHeight })
              }, {
                default: Rr(() => [
                  (Z(!0), ne(
                    Ge,
                    null,
                    xt(e.aiConfig.quick, (l, a) => (Z(), ne("div", {
                      class: "lc-robot-chat-popup__content--inner__quick__item",
                      key: a,
                      onClick: (d) => r(l)
                    }, [
                      i[0] || (i[0] = N(
                        "img",
                        {
                          class: "lc-robot-chat-popup__content--inner__quick__item--img",
                          src: En,
                          alt: ""
                        },
                        null,
                        -1
                        /* HOISTED */
                      )),
                      N(
                        "div",
                        Ei,
                        Ke(l.text),
                        1
                        /* TEXT */
                      )
                    ], 8, Ri))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                _: 1
                /* STABLE */
              }, 8, ["style"])
            ])
          ])
        ])
      ],
      2
      /* CLASS */
    ));
  }
}), ot = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, hn = /* @__PURE__ */ ot(Ti, [["__scopeId", "data-v-f617021b"]]), pn = "__localStorage:dragHistory__";
function $i() {
  const e = H(!1), t = Er({ x: 100, y: "80%" });
  try {
    const d = localStorage.getItem(pn);
    if (d) {
      const s = JSON.parse(d);
      t.x = s.x, t.y = parseInt(s.y) > innerHeight ? "80%" : s.y;
    }
  } catch {
  }
  const n = D(() => t.x <= 0 ? "lt" : "rt");
  function r(d) {
    e.value = !0;
  }
  function o(d) {
    d.preventDefault();
  }
  function i(d) {
    var p;
    d.preventDefault(), e.value = !1, d.clientX < window.innerWidth / 2 ? t.x = 0 : t.x = 100;
    const { height: s = 200 } = (p = d.target) == null ? void 0 : p.getBoundingClientRect();
    t.y = (d.clientY <= s ? s : d.clientY) + "px", localStorage.setItem(pn, JSON.stringify(t));
  }
  function l() {
    console.log("拖拽进入");
  }
  function a(d) {
    d.preventDefault();
  }
  return {
    isDraging: e,
    startDrag: r,
    stopDrag: i,
    draging: o,
    dragenter: l,
    robotOffset: t,
    xAdsorptionDir: n,
    dragover: a
  };
}
const Oi = ["draggable"], Pi = ["src"], zi = /* @__PURE__ */ ae({
  __name: "robot",
  props: /* @__PURE__ */ yt(/* @__PURE__ */ et({
    src: {
      type: String
    },
    value: {
      type: String
    },
    width: {
      type: String
    },
    height: {
      type: String
    },
    trigger: {
      type: String
    },
    hidDir: {
      type: String
    },
    showPopup: {
      type: Boolean
    },
    aiConfig: {
      type: Object
    },
    popupContextMaxH: {
      type: String
    },
    draggable: {
      type: Boolean
    },
    position: {
      type: String
    }
  }, {
    value: "s1",
    width: "219px",
    height: "233px",
    trigger: "none",
    hidDir: "lt",
    showPopup: !1,
    src: "",
    aiConfig: () => ({
      sayHello: "Hi，我是小教！ 您可以试着说",
      quick: [
        {
          text: "部门汇报模式"
        },
        {
          text: "任务查看模式"
        },
        {
          text: "智能问答模式"
        },
        {
          text: "智能问答模式"
        }
      ]
    }),
    draggable: !1,
    position: "fixed"
  }), {
    isShow: { default: !1 },
    isShowModifiers: {}
  }),
  emits: ["update:isShow"],
  setup(e) {
    Cn((y) => ({
      "401aba4f": e.position,
      "6e8f5cd8": L(g),
      "309fe340": e.width,
      "16fa7866": e.height
    }));
    const t = Rn(e, "isShow"), n = D(() => e.src || Ir[e.value]), { isDraging: r, startDrag: o, stopDrag: i, robotOffset: l, xAdsorptionDir: a } = $i(), d = D(() => e.draggable ? a.value : e.hidDir), s = D(() => ({
      [`lc-robot__wrapper__image--status-${d.value}`]: e.trigger !== kr.none
    }));
    function p(y) {
      return D(() => e.showPopup && d.value === y).value;
    }
    const {
      y: g
    } = Tr(l);
    return (y, C) => (Z(), ne("div", {
      class: qe(["lc-robot", [{
        "lc-robot--draggable": e.draggable,
        "lc-robot--draging": L(r)
      }, `lc-robot--dir-${L(a)}`]]),
      draggable: e.draggable,
      onDragstart: C[2] || (C[2] = //@ts-ignore
      (...c) => L(o) && L(o)(...c)),
      onDragend: C[3] || (C[3] = //@ts-ignore
      (...c) => L(i) && L(i)(...c))
    }, [
      N(
        "div",
        {
          class: "lc-robot__wrapper",
          tabindex: "-1",
          onFocus: C[0] || (C[0] = (c) => t.value = !0),
          onBlur: C[1] || (C[1] = (c) => t.value = !1)
        },
        [
          p(L(jt).rt) ? (Z(), Ft(hn, bt({
            key: 0,
            "max-height": e.popupContextMaxH,
            aiConfig: e.aiConfig,
            isFocus: t.value,
            hidDir: d.value
          }, y.$attrs), null, 16, ["max-height", "aiConfig", "isFocus", "hidDir"])) : Nt("v-if", !0),
          N("img", {
            class: qe(["lc-robot__wrapper__image", [s.value]]),
            src: n.value,
            draggable: "false",
            alt: ""
          }, null, 10, Pi),
          p(L(jt).lt) ? (Z(), Ft(hn, bt({
            key: 1,
            "max-height": e.popupContextMaxH,
            aiConfig: e.aiConfig,
            isFocus: t.value,
            hidDir: d.value
          }, y.$attrs), null, 16, ["max-height", "aiConfig", "isFocus", "hidDir"])) : Nt("v-if", !0)
        ],
        32
        /* NEED_HYDRATION */
      )
    ], 42, Oi));
  }
}), $l = /* @__PURE__ */ ot(zi, [["__scopeId", "data-v-1eb72328"]]), Bi = 2e3;
function Mi() {
  let e = !1;
  const t = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!t)
    e = !1;
  else {
    let n = function(p, g) {
      d.has(p) || d.set(p, g);
    }, r = function(p) {
      d.has(p) && d.delete(p);
    }, o = function() {
      if (!e)
        return alert("您的浏览器不支持 SpeechRecognition API");
      a.value.starting || (a.value.starting = !0, a.value.error = !1, s.start(), a.value.helpText = "正在聆听...");
    }, i = function() {
      a.value.starting = !1, s.stop(), a.value.helpText = "已停止聆听。", setTimeout(l, Bi);
    }, l = function() {
      a.value.helpText = "";
    };
    e = !0;
    const a = H({
      textContent: "",
      helpText: "",
      starting: !1,
      error: !1
    }), d = /* @__PURE__ */ new Map(), s = new t();
    return s.lang = "zh-CN", s.interimResults = !0, s.maxAlternatives = 1, s.addEventListener("result", (p) => {
      const g = p.results[0][0].transcript;
      a.value.textContent = g, d.forEach((y) => y(g));
    }), s.addEventListener("error", (p) => {
      a.value.helpText = "发生错误: " + p.error + "。", a.value.error = !0, a.value.starting = !1;
    }), {
      isSupport: e,
      recognition: s,
      start: o,
      stop: i,
      output: a,
      off: r,
      on: n
    };
  }
  return {
    isSupport: e,
    recognition: null,
    start: () => {
    },
    stop: () => {
    },
    output: H({
      helpText: "",
      textContent: "",
      starting: !1,
      error: !1
    }),
    off: () => {
    },
    on: () => {
    }
  };
}
const Hi = /* @__PURE__ */ Object.assign({
  "./images/func/add.png": () => import("./assets/add-ChlFVGqP.js").then((e) => e.default),
  "./images/func/blue-l-arrow.png": () => import("./assets/blue-l-arrow-BdO8_23_.js").then((e) => e.default),
  "./images/func/blue-r-arrow.png": () => import("./assets/blue-r-arrow-CHtaCVEv.js").then((e) => e.default),
  "./images/func/caret-down.png": () => import("./assets/caret-down-CmeLcQHZ.js").then((e) => e.default),
  "./images/func/caret-sort.png": () => import("./assets/caret-sort-COV1w0XK.js").then((e) => e.default),
  "./images/func/caret-up.png": () => import("./assets/caret-up-Dcnj0KoS.js").then((e) => e.default),
  "./images/func/chevron-down.png": () => import("./assets/chevron-down-Cyr78CbI.js").then((e) => e.default),
  "./images/func/chevron-up.png": () => import("./assets/chevron-up-CcJPfj33.js").then((e) => e.default),
  "./images/func/help-circle.png": () => import("./assets/help-circle-Bernx1Dp.js").then((e) => e.default),
  "./images/func/info-circle.png": () => import("./assets/info-circle-wCQu-_8n.js").then((e) => e.default),
  "./images/func/internet.png": () => import("./assets/internet-D-Mu9sBE.js").then((e) => e.default),
  "./images/func/laptop.png": () => import("./assets/laptop-CC03Lhg9.js").then((e) => e.default),
  "./images/func/layers.png": () => import("./assets/layers-C_7wJ803.js").then((e) => e.default),
  "./images/func/location.png": () => import("./assets/location-CAiqJkJi.js").then((e) => e.default),
  "./images/func/refresh.png": () => import("./assets/refresh-BwJoFD3c.js").then((e) => e.default),
  "./images/func/remove.png": () => import("./assets/remove-p9fjN5C_.js").then((e) => e.default),
  "./images/func/search.png": () => import("./assets/search-C_MUuboT.js").then((e) => e.default),
  "./images/func/time.png": () => import("./assets/time-BUWRfRmg.js").then((e) => e.default)
}), Di = /* @__PURE__ */ Object.assign({
  "./images/event/building/icon.png": () => import("./assets/icon-CpqipgJB.js").then((e) => e.i).then((e) => e.default),
  "./images/event/building/selected-icon.png": () => import("./assets/selected-icon-MFwRU2PB.js").then((e) => e.s).then((e) => e.default),
  "./images/event/domain/icon.png": () => import("./assets/icon-CpqipgJB.js").then((e) => e.a).then((e) => e.default),
  "./images/event/domain/selected-icon.png": () => import("./assets/selected-icon-MFwRU2PB.js").then((e) => e.a).then((e) => e.default),
  "./images/event/gate/icon.png": () => import("./assets/icon-CpqipgJB.js").then((e) => e.b).then((e) => e.default),
  "./images/event/gate/selected-icon.png": () => import("./assets/selected-icon-MFwRU2PB.js").then((e) => e.b).then((e) => e.default),
  "./images/event/mentor/icon.png": () => import("./assets/icon-CpqipgJB.js").then((e) => e.c).then((e) => e.default),
  "./images/event/mentor/selected-icon.png": () => import("./assets/selected-icon-MFwRU2PB.js").then((e) => e.c).then((e) => e.default),
  "./images/event/person/icon.png": () => import("./assets/icon-CpqipgJB.js").then((e) => e.d).then((e) => e.default),
  "./images/event/person/selected-icon.png": () => import("./assets/selected-icon-MFwRU2PB.js").then((e) => e.d).then((e) => e.default),
  "./images/event/person2/icon.png": () => import("./assets/icon-CpqipgJB.js").then((e) => e.e).then((e) => e.default),
  "./images/event/person2/selected-icon.png": () => import("./assets/selected-icon-MFwRU2PB.js").then((e) => e.e).then((e) => e.default),
  "./images/event/reward/icon.png": () => import("./assets/icon-CpqipgJB.js").then((e) => e.f).then((e) => e.default),
  "./images/event/reward/selected-icon.png": () => import("./assets/selected-icon-MFwRU2PB.js").then((e) => e.f).then((e) => e.default),
  "./images/event/style/icon.png": () => import("./assets/icon-CpqipgJB.js").then((e) => e.g).then((e) => e.default),
  "./images/event/style/selected-icon.png": () => import("./assets/selected-icon-MFwRU2PB.js").then((e) => e.g).then((e) => e.default)
}), gn = {
  func: Hi,
  event: Di
};
function Ai(e, t, n = ".png") {
  var a, d, s, p, g, y;
  const r = H(""), o = H("");
  let i = `${e}/${t}${n}`, l = "";
  return e === "event" && (i = `${e}/${t}/icon${n}`, l = `${e}/${t}/selected-icon${n}`), (s = (d = (a = gn[e]) == null ? void 0 : a[`./images/${i}`]) == null ? void 0 : d.call(a)) == null || s.then((C) => r.value = C), l && ((y = (g = (p = gn[e]) == null ? void 0 : p[`./images/${l}`]) == null ? void 0 : g.call(p)) == null || y.then((C) => o.value = C)), {
    src: r,
    selectedSrc: o
  };
}
const Ii = { class: "lc-icon__image" }, ki = ["src"], Fi = { class: "lc-icon__span" }, Ni = /* @__PURE__ */ ae({
  __name: "icon",
  props: /* @__PURE__ */ et({
    domain: {
      type: String
    },
    name: {
      type: String
    },
    size: {
      type: [Number, String]
    },
    ext: {
      type: String
    },
    selected: {
      type: Boolean
    }
  }, {
    domain: "func",
    name: "add",
    size: 16,
    ext: ".png",
    selected: () => {
    }
  }),
  setup(e) {
    Cn((o) => ({
      "74ae46c6": r.value
    }));
    const { src: t, selectedSrc: n } = Ai(e.domain, e.name, e.ext), r = D(() => typeof e.size == "number" ? `${e.size}px` : e.size);
    return (o, i) => (Z(), ne(
      "div",
      {
        class: qe(["lc-icon", { "lc-icon--selected": e.selected }]),
        style: Je({
          "--img-src": `url(${L(t)})`,
          "--img-selected-src": `url(${L(n)})`
        })
      },
      [
        N("div", Ii, [
          N("img", {
            class: "lc-icon__img",
            src: L(t),
            draggable: "false",
            alt: ""
          }, null, 8, ki)
        ]),
        N("span", Fi, [
          Sn(o.$slots, "default", {}, void 0, !0)
        ])
      ],
      6
      /* CLASS, STYLE */
    ));
  }
}), Li = /* @__PURE__ */ ot(Ni, [["__scopeId", "data-v-5ad7eb20"]]);
function Be(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var ji = typeof global == "object" && global && global.Object === Object && global, Wi = typeof self == "object" && self && self.Object === Object && self, it = ji || Wi || Function("return this")(), pt = function() {
  return it.Date.now();
}, Vi = /\s/;
function Ui(e) {
  for (var t = e.length; t-- && Vi.test(e.charAt(t)); )
    ;
  return t;
}
var Xi = /^\s+/;
function Yi(e) {
  return e && e.slice(0, Ui(e) + 1).replace(Xi, "");
}
var Qe = it.Symbol, Nn = Object.prototype, Gi = Nn.hasOwnProperty, qi = Nn.toString, Ee = Qe ? Qe.toStringTag : void 0;
function Ki(e) {
  var t = Gi.call(e, Ee), n = e[Ee];
  try {
    e[Ee] = void 0;
    var r = !0;
  } catch {
  }
  var o = qi.call(e);
  return r && (t ? e[Ee] = n : delete e[Ee]), o;
}
var Ji = Object.prototype, Qi = Ji.toString;
function Zi(e) {
  return Qi.call(e);
}
var ea = "[object Null]", ta = "[object Undefined]", mn = Qe ? Qe.toStringTag : void 0;
function Ln(e) {
  return e == null ? e === void 0 ? ta : ea : mn && mn in Object(e) ? Ki(e) : Zi(e);
}
function na(e) {
  return e != null && typeof e == "object";
}
var ra = "[object Symbol]";
function oa(e) {
  return typeof e == "symbol" || na(e) && Ln(e) == ra;
}
var vn = NaN, ia = /^[-+]0x[0-9a-f]+$/i, aa = /^0b[01]+$/i, la = /^0o[0-7]+$/i, sa = parseInt;
function bn(e) {
  if (typeof e == "number")
    return e;
  if (oa(e))
    return vn;
  if (Be(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Be(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Yi(e);
  var n = aa.test(e);
  return n || la.test(e) ? sa(e.slice(2), n ? 2 : 8) : ia.test(e) ? vn : +e;
}
var ca = "Expected a function", ua = Math.max, fa = Math.min;
function gt(e, t, n) {
  var r, o, i, l, a, d, s = 0, p = !1, g = !1, y = !0;
  if (typeof e != "function")
    throw new TypeError(ca);
  t = bn(t) || 0, Be(n) && (p = !!n.leading, g = "maxWait" in n, i = g ? ua(bn(n.maxWait) || 0, t) : i, y = "trailing" in n ? !!n.trailing : y);
  function C(w) {
    var f = r, h = o;
    return r = o = void 0, s = w, l = e.apply(h, f), l;
  }
  function c(w) {
    return s = w, a = setTimeout(x, t), p ? C(w) : l;
  }
  function T(w) {
    var f = w - d, h = w - s, _ = t - f;
    return g ? fa(_, i - h) : _;
  }
  function S(w) {
    var f = w - d, h = w - s;
    return d === void 0 || f >= t || f < 0 || g && h >= i;
  }
  function x() {
    var w = pt();
    if (S(w))
      return v(w);
    a = setTimeout(x, T(w));
  }
  function v(w) {
    return a = void 0, y && r ? C(w) : (r = o = void 0, l);
  }
  function B() {
    a !== void 0 && clearTimeout(a), s = 0, r = d = o = a = void 0;
  }
  function O() {
    return a === void 0 ? l : v(pt());
  }
  function M() {
    var w = pt(), f = S(w);
    if (r = arguments, o = this, d = w, f) {
      if (a === void 0)
        return c(d);
      if (g)
        return clearTimeout(a), a = setTimeout(x, t), C(d);
    }
    return a === void 0 && (a = setTimeout(x, t)), l;
  }
  return M.cancel = B, M.flush = O, M;
}
var da = "[object AsyncFunction]", ha = "[object Function]", pa = "[object GeneratorFunction]", ga = "[object Proxy]";
function ma(e) {
  if (!Be(e))
    return !1;
  var t = Ln(e);
  return t == ha || t == pa || t == da || t == ga;
}
var mt = it["__core-js_shared__"], xn = function() {
  var e = /[^.]+$/.exec(mt && mt.keys && mt.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function va(e) {
  return !!xn && xn in e;
}
var ba = Function.prototype, xa = ba.toString;
function ya(e) {
  if (e != null) {
    try {
      return xa.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Sa = /[\\^$.*+?()[\]{}|]/g, wa = /^\[object .+?Constructor\]$/, _a = Function.prototype, Ca = Object.prototype, Ra = _a.toString, Ea = Ca.hasOwnProperty, Ta = RegExp(
  "^" + Ra.call(Ea).replace(Sa, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function $a(e) {
  if (!Be(e) || va(e))
    return !1;
  var t = ma(e) ? Ta : wa;
  return t.test(ya(e));
}
function Oa(e, t) {
  return e == null ? void 0 : e[t];
}
function jn(e, t) {
  var n = Oa(e, t);
  return $a(n) ? n : void 0;
}
var Me = jn(Object, "create");
function Pa() {
  this.__data__ = Me ? Me(null) : {}, this.size = 0;
}
function za(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ba = "__lodash_hash_undefined__", Ma = Object.prototype, Ha = Ma.hasOwnProperty;
function Da(e) {
  var t = this.__data__;
  if (Me) {
    var n = t[e];
    return n === Ba ? void 0 : n;
  }
  return Ha.call(t, e) ? t[e] : void 0;
}
var Aa = Object.prototype, Ia = Aa.hasOwnProperty;
function ka(e) {
  var t = this.__data__;
  return Me ? t[e] !== void 0 : Ia.call(t, e);
}
var Fa = "__lodash_hash_undefined__";
function Na(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = Me && t === void 0 ? Fa : t, this;
}
function ve(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ve.prototype.clear = Pa;
ve.prototype.delete = za;
ve.prototype.get = Da;
ve.prototype.has = ka;
ve.prototype.set = Na;
function La() {
  this.__data__ = [], this.size = 0;
}
function ja(e, t) {
  return e === t || e !== e && t !== t;
}
function at(e, t) {
  for (var n = e.length; n--; )
    if (ja(e[n][0], t))
      return n;
  return -1;
}
var Wa = Array.prototype, Va = Wa.splice;
function Ua(e) {
  var t = this.__data__, n = at(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Va.call(t, n, 1), --this.size, !0;
}
function Xa(e) {
  var t = this.__data__, n = at(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Ya(e) {
  return at(this.__data__, e) > -1;
}
function Ga(e, t) {
  var n = this.__data__, r = at(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function Re(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Re.prototype.clear = La;
Re.prototype.delete = Ua;
Re.prototype.get = Xa;
Re.prototype.has = Ya;
Re.prototype.set = Ga;
var qa = jn(it, "Map");
function Ka() {
  this.size = 0, this.__data__ = {
    hash: new ve(),
    map: new (qa || Re)(),
    string: new ve()
  };
}
function Ja(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function lt(e, t) {
  var n = e.__data__;
  return Ja(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function Qa(e) {
  var t = lt(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Za(e) {
  return lt(this, e).get(e);
}
function el(e) {
  return lt(this, e).has(e);
}
function tl(e, t) {
  var n = lt(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function be(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
be.prototype.clear = Ka;
be.prototype.delete = Qa;
be.prototype.get = Za;
be.prototype.has = el;
be.prototype.set = tl;
var nl = "Expected a function";
function He(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(nl);
  var n = function() {
    var r = arguments, o = t ? t.apply(this, r) : r[0], i = n.cache;
    if (i.has(o))
      return i.get(o);
    var l = e.apply(this, r);
    return n.cache = i.set(o, l) || i, l;
  };
  return n.cache = new (He.Cache || be)(), n;
}
He.Cache = be;
const rl = 300;
function ol() {
  const e = vt(), t = vt(), n = H(90), r = H(360), o = H(7), i = H({
    x: 0,
    y: 0
  }), l = H(0), a = H({ x: 0 }), d = H(0), s = H([]), p = gt(() => {
    const v = e.value;
    if (!v || !t.value) return;
    const { width: B, height: O } = v.getBoundingClientRect();
    i.value.x = B / 2, i.value.y = O / 2;
    const { width: M } = t.value[0].getBoundingClientRect();
    a.value.x = M / 2;
  });
  function g() {
    if (!window.ResizeObserver || !e.value) return;
    new ResizeObserver(gt(() => {
      p();
    }, rl)).observe(e.value);
  }
  Rt(() => {
    g(), setTimeout(() => p);
  });
  const y = D(() => {
    let v = l.value >= o.value ? o.value : l.value;
    return r.value / v;
  }), C = He((v) => y.value * v + n.value), c = gt((v) => {
    s.value.pop(), s.value.unshift(v);
  }, 300), T = He((v, B, O, M) => {
    const w = v * (Math.PI / 180), f = B + B * Math.cos(w), h = O + O * Math.sin(w) + M;
    return {
      x: f,
      y: h
    };
  }, (v, B, O, M) => `${v}-${B}-${O}-${M}`);
  function S(v, B, O, M) {
    return B / (O - M) - v;
  }
  function x(v) {
    let B = v >= o.value ? 0 : v;
    const O = C(B) + d.value, M = i.value.y, w = i.value.x, f = i.value.y / 3.2, h = +M / 1.1, _ = C(y.value + 1), { y: P } = T(_, w, f, h), { x: A, y: I } = T(O, w, f, h);
    if (!A || !I || !i.value.y) return {
      left: "50%",
      top: "50%",
      opacity: 0,
      zIndex: 0
    };
    const $ = I > 0 && I > i.value.y + f / 2;
    let E = $ ? 1 : S(1, I, M, f), z = $ ? 1 : S(1, I, M, f), j = $ ? 10 : 0, V = s.value.includes(v);
    return !V && I <= P && B === 0 && (c(v), V = s.value.includes(v)), V && (z = 0, E = 0), {
      left: A + "px",
      top: I + "px",
      transform: `translate(-50%, -50%) scale(${z})`,
      opacity: E,
      "--z-index-number": j
    };
  }
  return {
    starLneght: l,
    starWrapperRef: e,
    angleOffset: d,
    customRotateStyle: x,
    starElRefs: t,
    averageAngle: y,
    startAngle: n,
    starMaxShowCount: o,
    displayAlternately: s,
    fullAngle: r
  };
}
const il = { class: "lc-main-robot" }, al = { class: "lc-main-robot__wrapper" }, ll = { class: "lc-main-robot__wrapper__inner-input" }, sl = { class: "lc-main-robot__wrapper__inner-input--content" }, cl = { class: "lc-main-robot__wrapper__inner-input--help" }, ul = ["placeholder"], fl = { class: "lc-main-robot__wrapper__inner-input--content__suffix" }, dl = ["onClick"], hl = { class: "lc-main-robot__wrapper__star-wrap--star__meta" }, pl = { class: "lc-main-robot__wrapper__star-wrap--star__meta--item--text" }, gl = /* @__PURE__ */ ae({
  __name: "main-robot",
  props: /* @__PURE__ */ yt(/* @__PURE__ */ et({
    placeholder: String,
    stars: Array,
    duration: Number,
    animate: Boolean,
    startAngle: Number,
    maxShowCount: Number,
    fullAngle: Number
  }, {
    placeholder: "AI 智能问数",
    stars: () => {
    },
    duration: 1e3,
    animate: !0,
    startAngle: 90,
    maxShowCount: 7,
    fullAngle: 360
  }), {
    value: { default: "" },
    valueModifiers: {}
  }),
  emits: /* @__PURE__ */ yt(["click"], ["update:value"]),
  setup(e, { emit: t }) {
    const { start: n, stop: r, output: o, on: i } = Mi(), {
      starWrapperRef: l,
      customRotateStyle: a,
      starLneght: d,
      starElRefs: s,
      angleOffset: p,
      averageAngle: g,
      startAngle: y,
      starMaxShowCount: C,
      displayAlternately: c,
      fullAngle: T
    } = ol(), S = He(($, E) => $ - (E + 1), ($, E) => `${$}-${E}`), x = D(() => {
      var $;
      return ($ = e.stars) != null && $.length ? e.stars : Wt;
    });
    Ze(() => {
      var E;
      d.value = ((E = x.value) == null ? void 0 : E.length) || 0, y.value = e.startAngle, C.value = e.maxShowCount, T.value = e.fullAngle;
      const $ = x.value.length - e.maxShowCount;
      $ < 0 || Wt.slice($ * -1).forEach((z, j) => {
        const V = x.value.length - $ + j;
        c.value.push(V);
      });
    });
    const v = D(() => 360 / e.duration), B = D(() => 1e3 / e.duration), O = H(e.animate);
    let M;
    function w($) {
      window.requestAnimationFrame ? window.requestAnimationFrame.call(this, $) : $();
    }
    function f() {
      O.value && setTimeout(() => {
        O.value && w(() => {
          p.value += v.value, p.value >= 360 && (p.value = 0), f();
        });
      }, B.value);
    }
    O.value && f();
    const h = t;
    function _($, E) {
      p.value = g.value * E * -1, h("click", $, E);
    }
    function P() {
      clearTimeout(M), O.value = !1;
    }
    function A() {
      M = setTimeout(() => {
        O.value || (O.value = e.animate, f());
      }, 2e3);
    }
    const I = Rn(e, "value");
    return i("result", () => {
      var $;
      I.value = (($ = o.value) == null ? void 0 : $.textContent) || "";
    }), ($, E) => (Z(), ne("div", il, [
      N("div", al, [
        E[4] || (E[4] = N(
          "img",
          {
            class: "lc-main-robot__img",
            src: Dr,
            draggable: "false",
            alt: ""
          },
          null,
          -1
          /* HOISTED */
        )),
        N("div", ll, [
          N("div", sl, [
            Lt(N(
              "div",
              cl,
              [
                E[3] || (E[3] = N(
                  "img",
                  {
                    class: "lc-main-robot__wrapper__inner-input--help--voice",
                    src: En,
                    draggable: "false",
                    alt: ""
                  },
                  null,
                  -1
                  /* HOISTED */
                )),
                $r(
                  " " + Ke(L(o).helpText),
                  1
                  /* TEXT */
                )
              ],
              512
              /* NEED_PATCH */
            ), [
              [Or, L(o).helpText]
            ]),
            Lt(N("input", {
              type: "text",
              placeholder: e.placeholder,
              "onUpdate:modelValue": E[0] || (E[0] = (z) => I.value = z),
              class: "lc-main-robot__wrapper__inner-input--content__input"
            }, null, 8, ul), [
              [Pr, I.value]
            ]),
            N("div", fl, [
              N(
                "img",
                {
                  class: "lc-main-robot__wrapper__inner-input--content__suffix--img",
                  src: Ar,
                  draggable: "false",
                  onMousedown: E[1] || (E[1] = //@ts-ignore
                  (...z) => L(n) && L(n)(...z)),
                  onMouseup: E[2] || (E[2] = //@ts-ignore
                  (...z) => L(r) && L(r)(...z)),
                  alt: ""
                },
                null,
                32
                /* NEED_HYDRATION */
              )
            ])
          ])
        ]),
        N(
          "div",
          {
            class: "lc-main-robot__wrapper__star-wrap",
            ref_key: "starWrapperRef",
            ref: l
          },
          [
            (Z(!0), ne(
              Ge,
              null,
              xt(x.value, (z, j) => (Z(), ne("div", {
                class: "lc-main-robot__wrapper__star-wrap--star",
                style: Je(L(a)(j)),
                key: z.key ?? j,
                ref_for: !0,
                ref_key: "starElRefs",
                ref: s,
                onMouseenter: P,
                onMouseleave: A,
                onClick: (V) => _(z, j)
              }, [
                _n(L(Li), {
                  domain: z.domain,
                  name: z.name,
                  size: z.size
                }, null, 8, ["domain", "name", "size"]),
                N("div", hl, [
                  (Z(!0), ne(
                    Ge,
                    null,
                    xt(z.meta, (V, G) => (Z(), ne(
                      "div",
                      {
                        class: "lc-main-robot__wrapper__star-wrap--star__meta--item",
                        key: G,
                        style: Je({ "--left-offset-number": G, "--left-reverse-offset-number": L(S)(z.meta.length, G) })
                      },
                      [
                        N(
                          "div",
                          pl,
                          Ke(V.label),
                          1
                          /* TEXT */
                        )
                      ],
                      4
                      /* STYLE */
                    ))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ], 44, dl))),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          512
          /* NEED_PATCH */
        )
      ])
    ]));
  }
}), Ol = /* @__PURE__ */ ot(gl, [["__scopeId", "data-v-3f1247db"]]);
export {
  Ol as LcMainRobot,
  $l as LcRobot,
  Wt as defStarData,
  jt as imageHideDir,
  kr as imageShowTrigger,
  Ir as robotBQMap
};
