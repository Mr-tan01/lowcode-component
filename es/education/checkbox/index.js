// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { computed as N, ref as ee, watch as De, onMounted as fn, readonly as mn, inject as Z, isVNode as pn, Comment as bn, Fragment as hn, shallowRef as gn, watchEffect as ue, provide as Fe, onBeforeUnmount as Cn, onBeforeMount as Ie, defineComponent as te, h as $, Transition as _n, toRef as he, openBlock as $e, createBlock as Ne, unref as He, mergeProps as Le, withCtx as Ue, renderSlot as Be } from "vue";
import { merge as ie } from "lodash-es";
function ce(n) {
  return n.composedPath()[0];
}
const Sn = {
  mousemoveoutside: /* @__PURE__ */ new WeakMap(),
  clickoutside: /* @__PURE__ */ new WeakMap()
};
function vn(n, e, r) {
  if (n === "mousemoveoutside") {
    const o = (t) => {
      e.contains(ce(t)) || r(t);
    };
    return {
      mousemove: o,
      touchstart: o
    };
  } else if (n === "clickoutside") {
    let o = !1;
    const t = (d) => {
      o = !e.contains(ce(d));
    }, i = (d) => {
      o && (e.contains(ce(d)) || r(d));
    };
    return {
      mousedown: t,
      mouseup: i,
      touchstart: t,
      touchend: i
    };
  }
  return console.error(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    `[evtd/create-trap-handler]: name \`${n}\` is invalid. This could be a bug of evtd.`
  ), {};
}
function Ve(n, e, r) {
  const o = Sn[n];
  let t = o.get(e);
  t === void 0 && o.set(e, t = /* @__PURE__ */ new WeakMap());
  let i = t.get(r);
  return i === void 0 && t.set(r, i = vn(n, e, r)), i;
}
function xn(n, e, r, o) {
  if (n === "mousemoveoutside" || n === "clickoutside") {
    const t = Ve(n, e, r);
    return Object.keys(t).forEach((i) => {
      We(i, document, t[i], o);
    }), !0;
  }
  return !1;
}
function En(n, e, r, o) {
  if (n === "mousemoveoutside" || n === "clickoutside") {
    const t = Ve(n, e, r);
    return Object.keys(t).forEach((i) => {
      Rn(i, document, t[i], o);
    }), !0;
  }
  return !1;
}
function Pn() {
  if (typeof window > "u")
    return {
      on: () => {
      },
      off: () => {
      }
    };
  const n = /* @__PURE__ */ new WeakMap(), e = /* @__PURE__ */ new WeakMap();
  function r() {
    n.set(this, !0);
  }
  function o() {
    n.set(this, !0), e.set(this, !0);
  }
  function t(u, l, g) {
    const E = u[l];
    return u[l] = function() {
      return g.apply(u, arguments), E.apply(u, arguments);
    }, u;
  }
  function i(u, l) {
    u[l] = Event.prototype[l];
  }
  const d = /* @__PURE__ */ new WeakMap(), a = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
  function m() {
    var u;
    return (u = d.get(this)) !== null && u !== void 0 ? u : null;
  }
  function c(u, l) {
    a !== void 0 && Object.defineProperty(u, "currentTarget", {
      configurable: !0,
      enumerable: !0,
      get: l ?? a.get
    });
  }
  const v = {
    bubble: {},
    capture: {}
  }, S = {};
  function C() {
    const u = function(l) {
      const { type: g, eventPhase: E, bubbles: P } = l, k = ce(l);
      if (E === 2)
        return;
      const U = E === 1 ? "capture" : "bubble";
      let D = k;
      const F = [];
      for (; D === null && (D = window), F.push(D), D !== window; )
        D = D.parentNode || null;
      const B = v.capture[g], W = v.bubble[g];
      if (t(l, "stopPropagation", r), t(l, "stopImmediatePropagation", o), c(l, m), U === "capture") {
        if (B === void 0)
          return;
        for (let V = F.length - 1; V >= 0 && !n.has(l); --V) {
          const j = F[V], K = B.get(j);
          if (K !== void 0) {
            d.set(l, j);
            for (const G of K) {
              if (e.has(l))
                break;
              G(l);
            }
          }
          if (V === 0 && !P && W !== void 0) {
            const G = W.get(j);
            if (G !== void 0)
              for (const pe of G) {
                if (e.has(l))
                  break;
                pe(l);
              }
          }
        }
      } else if (U === "bubble") {
        if (W === void 0)
          return;
        for (let V = 0; V < F.length && !n.has(l); ++V) {
          const j = F[V], K = W.get(j);
          if (K !== void 0) {
            d.set(l, j);
            for (const G of K) {
              if (e.has(l))
                break;
              G(l);
            }
          }
        }
      }
      i(l, "stopPropagation"), i(l, "stopImmediatePropagation"), c(l);
    };
    return u.displayName = "evtdUnifiedHandler", u;
  }
  function R() {
    const u = function(l) {
      const { type: g, eventPhase: E } = l;
      if (E !== 2)
        return;
      const P = S[g];
      P !== void 0 && P.forEach((k) => k(l));
    };
    return u.displayName = "evtdUnifiedWindowEventHandler", u;
  }
  const s = C(), p = R();
  function h(u, l) {
    const g = v[u];
    return g[l] === void 0 && (g[l] = /* @__PURE__ */ new Map(), window.addEventListener(l, s, u === "capture")), g[l];
  }
  function b(u) {
    return S[u] === void 0 && (S[u] = /* @__PURE__ */ new Set(), window.addEventListener(u, p)), S[u];
  }
  function x(u, l) {
    let g = u.get(l);
    return g === void 0 && u.set(l, g = /* @__PURE__ */ new Set()), g;
  }
  function y(u, l, g, E) {
    const P = v[l][g];
    if (P !== void 0) {
      const k = P.get(u);
      if (k !== void 0 && k.has(E))
        return !0;
    }
    return !1;
  }
  function H(u, l) {
    const g = S[u];
    return !!(g !== void 0 && g.has(l));
  }
  function L(u, l, g, E) {
    let P;
    if (typeof E == "object" && E.once === !0 ? P = (B) => {
      _(u, l, P, E), g(B);
    } : P = g, xn(u, l, P, E))
      return;
    const U = E === !0 || typeof E == "object" && E.capture === !0 ? "capture" : "bubble", D = h(U, u), F = x(D, l);
    if (F.has(P) || F.add(P), l === window) {
      const B = b(u);
      B.has(P) || B.add(P);
    }
  }
  function _(u, l, g, E) {
    if (En(u, l, g, E))
      return;
    const k = E === !0 || typeof E == "object" && E.capture === !0, U = k ? "capture" : "bubble", D = h(U, u), F = x(D, l);
    if (l === window && !y(l, k ? "bubble" : "capture", u, g) && H(u, g)) {
      const W = S[u];
      W.delete(g), W.size === 0 && (window.removeEventListener(u, p), S[u] = void 0);
    }
    F.has(g) && F.delete(g), F.size === 0 && D.delete(l), D.size === 0 && (window.removeEventListener(u, s, U === "capture"), v[U][u] = void 0);
  }
  return {
    on: L,
    off: _
  };
}
const { on: We, off: Rn } = Pn(), Pe = {
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
}, ne = "^\\s*", re = "\\s*$", Q = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", J = "([0-9A-Fa-f])", q = "([0-9A-Fa-f]{2})", On = new RegExp(`${ne}rgb\\s*\\(${Q},${Q},${Q}\\)${re}`), wn = new RegExp(`${ne}rgba\\s*\\(${Q},${Q},${Q},${Q}\\)${re}`), kn = new RegExp(`${ne}#${J}${J}${J}${re}`), yn = new RegExp(`${ne}#${q}${q}${q}${re}`), An = new RegExp(`${ne}#${J}${J}${J}${J}${re}`), Mn = new RegExp(`${ne}#${q}${q}${q}${q}${re}`);
function I(n) {
  return parseInt(n, 16);
}
function Y(n) {
  try {
    let e;
    if (e = yn.exec(n))
      return [I(e[1]), I(e[2]), I(e[3]), 1];
    if (e = On.exec(n))
      return [T(e[1]), T(e[5]), T(e[9]), 1];
    if (e = wn.exec(n))
      return [
        T(e[1]),
        T(e[5]),
        T(e[9]),
        oe(e[13])
      ];
    if (e = kn.exec(n))
      return [
        I(e[1] + e[1]),
        I(e[2] + e[2]),
        I(e[3] + e[3]),
        1
      ];
    if (e = Mn.exec(n))
      return [
        I(e[1]),
        I(e[2]),
        I(e[3]),
        oe(I(e[4]) / 255)
      ];
    if (e = An.exec(n))
      return [
        I(e[1] + e[1]),
        I(e[2] + e[2]),
        I(e[3] + e[3]),
        oe(I(e[4] + e[4]) / 255)
      ];
    if (n in Pe)
      return Y(Pe[n]);
    throw new Error(`[seemly/rgba]: Invalid color value ${n}.`);
  } catch (e) {
    throw e;
  }
}
function Tn(n) {
  return n > 1 ? 1 : n < 0 ? 0 : n;
}
function ge(n, e, r, o) {
  return `rgba(${T(n)}, ${T(e)}, ${T(r)}, ${Tn(o)})`;
}
function be(n, e, r, o, t) {
  return T((n * e * (1 - o) + r * o) / t);
}
function Dn(n, e) {
  Array.isArray(n) || (n = Y(n)), Array.isArray(e) || (e = Y(e));
  const r = n[3], o = e[3], t = oe(r + o - r * o);
  return ge(be(n[0], r, e[0], o, t), be(n[1], r, e[1], o, t), be(n[2], r, e[2], o, t), t);
}
function Fn(n, e) {
  const [r, o, t, i = 1] = Array.isArray(n) ? n : Y(n);
  return e.alpha ? ge(r, o, t, e.alpha) : ge(r, o, t, i);
}
function se(n, e) {
  const [r, o, t, i = 1] = Array.isArray(n) ? n : Y(n), { lightness: d = 1, alpha: a = 1 } = e;
  return In([r * d, o * d, t * d, i * a]);
}
function oe(n) {
  const e = Math.round(Number(n) * 100) / 100;
  return e > 1 ? 1 : e < 0 ? 0 : e;
}
function T(n) {
  const e = Math.round(Number(n));
  return e > 255 ? 255 : e < 0 ? 0 : e;
}
function In(n) {
  const [e, r, o] = n;
  return 3 in n ? `rgba(${T(e)}, ${T(r)}, ${T(o)}, ${oe(n[3])})` : `rgba(${T(e)}, ${T(r)}, ${T(o)}, 1)`;
}
function $n(n = 8) {
  return Math.random().toString(16).slice(2, 2 + n);
}
function Nn(n) {
  const e = N(n), r = ee(e.value);
  return De(e, (o) => {
    r.value = o;
  }), typeof n == "function" ? r : {
    __v_isRef: !0,
    get value() {
      return r.value;
    },
    set value(o) {
      n.set(o);
    }
  };
}
function ze(n, e) {
  return De(n, (r) => {
    r !== void 0 && (e.value = r);
  }), N(() => n.value === void 0 ? e.value : n.value);
}
function Hn() {
  const n = ee(!1);
  return fn(() => {
    n.value = !0;
  }), mn(n);
}
const Ln = "@css-render/vue3-ssr";
function Un(n, e) {
  return `<style cssr-id="${n}">
${e}
</style>`;
}
function Bn(n, e, r) {
  const { styles: o, ids: t } = r;
  t.has(n) || o !== null && (t.add(n), o.push(Un(n, e)));
}
const Vn = typeof document < "u";
function ve() {
  if (Vn)
    return;
  const n = Z(Ln, null);
  if (n !== null)
    return {
      adapter: (e, r) => Bn(e, r, n),
      context: n
    };
}
function Wn(n) {
  let e = 0;
  for (let r = 0; r < n.length; ++r)
    n[r] === "&" && ++e;
  return e;
}
const je = /\s*,(?![^(]*\))\s*/g, zn = /\s+/g;
function jn(n, e) {
  const r = [];
  return e.split(je).forEach((o) => {
    let t = Wn(o);
    if (t) {
      if (t === 1) {
        n.forEach((d) => {
          r.push(o.replace("&", d));
        });
        return;
      }
    } else {
      n.forEach((d) => {
        r.push(
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          (d && d + " ") + o
        );
      });
      return;
    }
    let i = [
      o
    ];
    for (; t--; ) {
      const d = [];
      i.forEach((a) => {
        n.forEach((m) => {
          d.push(a.replace("&", m));
        });
      }), i = d;
    }
    i.forEach((d) => r.push(d));
  }), r;
}
function Gn(n, e) {
  const r = [];
  return e.split(je).forEach((o) => {
    n.forEach((t) => {
      r.push((t && t + " ") + o);
    });
  }), r;
}
function Kn(n) {
  let e = [""];
  return n.forEach((r) => {
    r = r && r.trim(), // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    r && (r.includes("&") ? e = jn(e, r) : e = Gn(e, r));
  }), e.join(", ").replace(zn, " ");
}
function Re(n) {
  if (!n)
    return;
  const e = n.parentElement;
  e && e.removeChild(n);
}
function fe(n, e) {
  return (e ?? document.head).querySelector(`style[cssr-id="${n}"]`);
}
function Xn(n) {
  const e = document.createElement("style");
  return e.setAttribute("cssr-id", n), e;
}
function ae(n) {
  return n ? /^\s*@(s|m)/.test(n) : !1;
}
const Qn = /[A-Z]/g;
function Ge(n) {
  return n.replace(Qn, (e) => "-" + e.toLowerCase());
}
function Jn(n, e = "  ") {
  return typeof n == "object" && n !== null ? ` {
` + Object.entries(n).map((r) => e + `  ${Ge(r[0])}: ${r[1]};`).join(`
`) + `
` + e + "}" : `: ${n};`;
}
function qn(n, e, r) {
  return typeof n == "function" ? n({
    context: e.context,
    props: r
  }) : n;
}
function Oe(n, e, r, o) {
  if (!e)
    return "";
  const t = qn(e, r, o);
  if (!t)
    return "";
  if (typeof t == "string")
    return `${n} {
${t}
}`;
  const i = Object.keys(t);
  if (i.length === 0)
    return r.config.keepEmptyBlock ? n + ` {
}` : "";
  const d = n ? [
    n + " {"
  ] : [];
  return i.forEach((a) => {
    const m = t[a];
    if (a === "raw") {
      d.push(`
` + m + `
`);
      return;
    }
    a = Ge(a), m != null && d.push(`  ${a}${Jn(m)}`);
  }), n && d.push("}"), d.join(`
`);
}
function Ce(n, e, r) {
  n && n.forEach((o) => {
    if (Array.isArray(o))
      Ce(o, e, r);
    else if (typeof o == "function") {
      const t = o(e);
      Array.isArray(t) ? Ce(t, e, r) : t && r(t);
    } else o && r(o);
  });
}
function Ke(n, e, r, o, t) {
  const i = n.$;
  let d = "";
  if (!i || typeof i == "string")
    ae(i) ? d = i : e.push(i);
  else if (typeof i == "function") {
    const c = i({
      context: o.context,
      props: t
    });
    ae(c) ? d = c : e.push(c);
  } else if (i.before && i.before(o.context), !i.$ || typeof i.$ == "string")
    ae(i.$) ? d = i.$ : e.push(i.$);
  else if (i.$) {
    const c = i.$({
      context: o.context,
      props: t
    });
    ae(c) ? d = c : e.push(c);
  }
  const a = Kn(e), m = Oe(a, n.props, o, t);
  d ? r.push(`${d} {`) : m.length && r.push(m), n.children && Ce(n.children, {
    context: o.context,
    props: t
  }, (c) => {
    if (typeof c == "string") {
      const v = Oe(a, { raw: c }, o, t);
      r.push(v);
    } else
      Ke(c, e, r, o, t);
  }), e.pop(), d && r.push("}"), i && i.after && i.after(o.context);
}
function Yn(n, e, r) {
  const o = [];
  return Ke(n, [], o, e, r), o.join(`

`);
}
function _e(n) {
  for (var e = 0, r, o = 0, t = n.length; t >= 4; ++o, t -= 4)
    r = n.charCodeAt(o) & 255 | (n.charCodeAt(++o) & 255) << 8 | (n.charCodeAt(++o) & 255) << 16 | (n.charCodeAt(++o) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, e = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  switch (t) {
    case 3:
      e ^= (n.charCodeAt(o + 2) & 255) << 16;
    case 2:
      e ^= (n.charCodeAt(o + 1) & 255) << 8;
    case 1:
      e ^= n.charCodeAt(o) & 255, e = /* Math.imul(h, m): */
      (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  }
  return e ^= e >>> 13, e = /* Math.imul(h, m): */
  (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16), ((e ^ e >>> 15) >>> 0).toString(36);
}
typeof window < "u" && (window.__cssrContext = {});
function Zn(n, e, r, o) {
  const { els: t } = e;
  if (r === void 0)
    t.forEach(Re), e.els = [];
  else {
    const i = fe(r, o);
    i && t.includes(i) && (Re(i), e.els = t.filter((d) => d !== i));
  }
}
function we(n, e) {
  n.push(e);
}
function er(n, e, r, o, t, i, d, a, m) {
  let c;
  if (r === void 0 && (c = e.render(o), r = _e(c)), m) {
    m.adapter(r, c ?? e.render(o));
    return;
  }
  a === void 0 && (a = document.head);
  const v = fe(r, a);
  if (v !== null && !i)
    return v;
  const S = v ?? Xn(r);
  if (c === void 0 && (c = e.render(o)), S.textContent = c, v !== null)
    return v;
  if (d) {
    const C = a.querySelector(`meta[name="${d}"]`);
    if (C)
      return a.insertBefore(S, C), we(e.els, S), S;
  }
  return t ? a.insertBefore(S, a.querySelector("style, link")) : a.appendChild(S), we(e.els, S), S;
}
function nr(n) {
  return Yn(this, this.instance, n);
}
function rr(n = {}) {
  const { id: e, ssr: r, props: o, head: t = !1, force: i = !1, anchorMetaName: d, parent: a } = n;
  return er(this.instance, this, e, o, t, i, d, a, r);
}
function or(n = {}) {
  const { id: e, parent: r } = n;
  Zn(this.instance, this, e, r);
}
const le = function(n, e, r, o) {
  return {
    instance: n,
    $: e,
    props: r,
    children: o,
    els: [],
    render: nr,
    mount: rr,
    unmount: or
  };
}, tr = function(n, e, r, o) {
  return Array.isArray(e) ? le(n, { $: null }, null, e) : Array.isArray(r) ? le(n, e, null, r) : Array.isArray(o) ? le(n, e, r, o) : le(n, e, r, null);
};
function ir(n = {}) {
  const e = {
    c: (...r) => tr(e, ...r),
    use: (r, ...o) => r.install(e, ...o),
    find: fe,
    context: {},
    config: n
  };
  return e;
}
function sr(n, e) {
  if (n === void 0)
    return !1;
  if (e) {
    const { context: { ids: r } } = e;
    return r.has(n);
  }
  return fe(n) !== null;
}
var ke = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_25056_QFZLEHXAPWMVKXIM", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.97.0", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-5a8078c568-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
function ar(n) {
  let e = ".", r = "__", o = "--", t;
  {
    let s = n.blockPrefix;
    s && (e = s), s = n.elementPrefix, s && (r = s), s = n.modifierPrefix, s && (o = s);
  }
  const i = {
    install(s) {
      t = s.c;
      const p = s.context;
      p.bem = {}, p.bem.b = null, p.bem.els = null;
    }
  };
  function d(s) {
    let p, h;
    return {
      before(b) {
        p = b.bem.b, h = b.bem.els, b.bem.els = null;
      },
      after(b) {
        b.bem.b = p, b.bem.els = h;
      },
      $({ context: b, props: x }) {
        return s = typeof s == "string" ? s : s({ context: b, props: x }), b.bem.b = s, `${(x == null ? void 0 : x.bPrefix) || e}${b.bem.b}`;
      }
    };
  }
  function a(s) {
    let p;
    return {
      before(h) {
        p = h.bem.els;
      },
      after(h) {
        h.bem.els = p;
      },
      $({ context: h, props: b }) {
        return s = typeof s == "string" ? s : s({ context: h, props: b }), h.bem.els = s.split(",").map((x) => x.trim()), h.bem.els.map((x) => `${(b == null ? void 0 : b.bPrefix) || e}${h.bem.b}${r}${x}`).join(", ");
      }
    };
  }
  function m(s) {
    return {
      $({ context: p, props: h }) {
        s = typeof s == "string" ? s : s({ context: p, props: h });
        const b = s.split(",").map((H) => H.trim());
        function x(H) {
          return b.map((L) => `&${(h == null ? void 0 : h.bPrefix) || e}${p.bem.b}${H !== void 0 ? `${r}${H}` : ""}${o}${L}`).join(", ");
        }
        const y = p.bem.els;
        if (y !== null) {
          if (ke.NODE_ENV !== "production" && y.length >= 2)
            throw Error(`[css-render/plugin-bem]: m(${s}) is invalid, using modifier inside multiple elements is not allowed`);
          return x(y[0]);
        } else
          return x();
      }
    };
  }
  function c(s) {
    return {
      $({ context: p, props: h }) {
        s = typeof s == "string" ? s : s({ context: p, props: h });
        const b = p.bem.els;
        if (ke.NODE_ENV !== "production" && b !== null && b.length >= 2)
          throw Error(`[css-render/plugin-bem]: notM(${s}) is invalid, using modifier inside multiple elements is not allowed`);
        return `&:not(${(h == null ? void 0 : h.bPrefix) || e}${p.bem.b}${b !== null && b.length > 0 ? `${r}${b[0]}` : ""}${o}${s})`;
      }
    };
  }
  return Object.assign(i, {
    cB: (...s) => t(d(s[0]), s[1], s[2]),
    cE: (...s) => t(a(s[0]), s[1], s[2]),
    cM: (...s) => t(m(s[0]), s[1], s[2]),
    cNotM: (...s) => t(c(s[0]), s[1], s[2])
  }), i;
}
const lr = "n", de = `.${lr}-`, cr = "__", dr = "--", Xe = ir(), Qe = ar({
  blockPrefix: de,
  elementPrefix: cr,
  modifierPrefix: dr
});
Xe.use(Qe);
const {
  c: w,
  find: zr
} = Xe, {
  cB: O,
  cE: z,
  cM: X,
  cNotM: jr
} = Qe;
function ur(n) {
  return w(({
    props: {
      bPrefix: e
    }
  }) => `${e || de}modal, ${e || de}drawer`, [n]);
}
function fr(n) {
  return w(({
    props: {
      bPrefix: e
    }
  }) => `${e || de}popover`, [n]);
}
function ye(n, e) {
  return n + (e === "default" ? "" : e.replace(/^[a-z]/, (r) => r.toUpperCase()));
}
const Ae = /* @__PURE__ */ new Set();
function Je(n, e) {
  const r = `[naive/${n}]: ${e}`;
  Ae.has(r) || (Ae.add(r), console.error(r));
}
function mr(n, e) {
  throw new Error(`[naive/${n}]: ${e}`);
}
function M(n, ...e) {
  if (Array.isArray(n))
    n.forEach((r) => M(r, ...e));
  else
    return n(...e);
}
function qe(n) {
  return n.some((e) => pn(e) ? !(e.type === bn || e.type === hn && !qe(e.children)) : !0) ? n : null;
}
function pr(n, e) {
  const r = n && qe(n());
  return e(r || null);
}
const me = "n-config-provider", br = "n";
function Ye(n = {}, e = {
  defaultBordered: !0
}) {
  const r = Z(me, null);
  return {
    // NConfigProvider,
    inlineThemeDisabled: r == null ? void 0 : r.inlineThemeDisabled,
    mergedRtlRef: r == null ? void 0 : r.mergedRtlRef,
    mergedComponentPropsRef: r == null ? void 0 : r.mergedComponentPropsRef,
    mergedBreakpointsRef: r == null ? void 0 : r.mergedBreakpointsRef,
    mergedBorderedRef: N(() => {
      var o, t;
      const {
        bordered: i
      } = n;
      return i !== void 0 ? i : (t = (o = r == null ? void 0 : r.mergedBorderedRef.value) !== null && o !== void 0 ? o : e.defaultBordered) !== null && t !== void 0 ? t : !0;
    }),
    mergedClsPrefixRef: r ? r.mergedClsPrefixRef : gn(br),
    namespaceRef: N(() => r == null ? void 0 : r.mergedNamespaceRef.value)
  };
}
function hr(n, e, r, o) {
  r || mr("useThemeClass", "cssVarsRef is not passed");
  const t = Z(me, null), i = t == null ? void 0 : t.mergedThemeHashRef, d = t == null ? void 0 : t.styleMountTarget, a = ee(""), m = ve();
  let c;
  const v = `__${n}`, S = () => {
    let C = v;
    const R = e ? e.value : void 0, s = i == null ? void 0 : i.value;
    s && (C += `-${s}`), R && (C += `-${R}`);
    const {
      themeOverrides: p,
      builtinThemeOverrides: h
    } = o;
    p && (C += `-${_e(JSON.stringify(p))}`), h && (C += `-${_e(JSON.stringify(h))}`), a.value = C, c = () => {
      const b = r.value;
      let x = "";
      for (const y in b)
        x += `${y}: ${b[y]};`;
      w(`.${C}`, x).mount({
        id: C,
        ssr: m,
        parent: d
      }), c = void 0;
    };
  };
  return ue(() => {
    S();
  }), {
    themeClass: a,
    onRender: () => {
      c == null || c();
    }
  };
}
const Me = "n-form-item";
function Ze(n, {
  defaultSize: e = "medium",
  mergedSize: r,
  mergedDisabled: o
} = {}) {
  const t = Z(Me, null);
  Fe(Me, null);
  const i = N(r ? () => r(t) : () => {
    const {
      size: m
    } = n;
    if (m) return m;
    if (t) {
      const {
        mergedSize: c
      } = t;
      if (c.value !== void 0)
        return c.value;
    }
    return e;
  }), d = N(o ? () => o(t) : () => {
    const {
      disabled: m
    } = n;
    return m !== void 0 ? m : t ? t.disabled.value : !1;
  }), a = N(() => {
    const {
      status: m
    } = n;
    return m || (t == null ? void 0 : t.mergedValidationStatus.value);
  });
  return Cn(() => {
    t && t.restoreValidation();
  }), {
    mergedSizeRef: i,
    mergedDisabledRef: d,
    mergedStatusRef: a,
    nTriggerFormBlur() {
      t && t.handleContentBlur();
    },
    nTriggerFormChange() {
      t && t.handleContentChange();
    },
    nTriggerFormFocus() {
      t && t.handleContentFocus();
    },
    nTriggerFormInput() {
      t && t.handleContentInput();
    }
  };
}
const Se = "naive-ui-style";
function gr(n, e, r) {
  if (!e) return;
  const o = ve(), t = N(() => {
    const {
      value: a
    } = e;
    if (!a)
      return;
    const m = a[n];
    if (m)
      return m;
  }), i = Z(me, null), d = () => {
    ue(() => {
      const {
        value: a
      } = r, m = `${a}${n}Rtl`;
      if (sr(m, o)) return;
      const {
        value: c
      } = t;
      c && c.style.mount({
        id: m,
        head: !0,
        anchorMetaName: Se,
        props: {
          bPrefix: a ? `.${a}-` : void 0
        },
        ssr: o,
        parent: i == null ? void 0 : i.styleMountTarget
      });
    });
  };
  return o ? d() : Ie(d), t;
}
const xe = {
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
  fontSize: Cr,
  fontFamily: _r,
  lineHeight: Sr
} = xe, vr = w("body", `
 margin: 0;
 font-size: ${Cr};
 font-family: ${_r};
 line-height: ${Sr};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [w("input", `
 font-family: inherit;
 font-size: inherit;
 `)]);
function Ee(n, e, r, o, t, i) {
  const d = ve(), a = Z(me, null);
  if (r) {
    const c = () => {
      const v = i == null ? void 0 : i.value;
      r.mount({
        id: v === void 0 ? e : v + e,
        head: !0,
        props: {
          bPrefix: v ? `.${v}-` : void 0
        },
        anchorMetaName: Se,
        ssr: d,
        parent: a == null ? void 0 : a.styleMountTarget
      }), a != null && a.preflightStyleDisabled || vr.mount({
        id: "n-global",
        head: !0,
        anchorMetaName: Se,
        ssr: d,
        parent: a == null ? void 0 : a.styleMountTarget
      });
    };
    d ? c() : Ie(c);
  }
  return N(() => {
    var c;
    const {
      theme: {
        common: v,
        self: S,
        peers: C = {}
      } = {},
      themeOverrides: R = {},
      builtinThemeOverrides: s = {}
    } = t, {
      common: p,
      peers: h
    } = R, {
      common: b = void 0,
      [n]: {
        common: x = void 0,
        self: y = void 0,
        peers: H = {}
      } = {}
    } = (a == null ? void 0 : a.mergedThemeRef.value) || {}, {
      common: L = void 0,
      [n]: _ = {}
    } = (a == null ? void 0 : a.mergedThemeOverridesRef.value) || {}, {
      common: u,
      peers: l = {}
    } = _, g = ie({}, v || x || b || o.common, L, u, p), E = ie(
      // {}, executed every time, no need for empty obj
      (c = S || y || o.self) === null || c === void 0 ? void 0 : c(g),
      s,
      _,
      R
    );
    return {
      common: g,
      self: E,
      peers: ie({}, o.peers, H, C),
      peerOverrides: ie({}, s.peers, l, h)
    };
  });
}
Ee.props = {
  theme: Object,
  themeOverrides: Object,
  builtinThemeOverrides: Object
};
const xr = te({
  name: "BaseIconSwitchTransition",
  setup(n, {
    slots: e
  }) {
    const r = Hn();
    return () => $(_n, {
      name: "icon-switch-transition",
      appear: r.value
    }, e);
  }
}), {
  cubicBezierEaseInOut: Er
} = xe;
function Pr({
  originalTransform: n = "",
  left: e = 0,
  top: r = 0,
  transition: o = `all .3s ${Er} !important`
} = {}) {
  return [w("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to", {
    transform: `${n} scale(0.75)`,
    left: e,
    top: r,
    opacity: 0
  }), w("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from", {
    transform: `scale(1) ${n}`,
    left: e,
    top: r,
    opacity: 1
  }), w("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active", {
    transformOrigin: "center",
    position: "absolute",
    left: e,
    top: r,
    transition: o
  })];
}
const f = {
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
}, Rr = Y(f.neutralBase), en = Y(f.neutralInvertBase), Or = `rgba(${en.slice(0, 3).join(", ")}, `;
function Te(n) {
  return `${Or + String(n)})`;
}
function A(n) {
  const e = Array.from(en);
  return e[3] = Number(n), Dn(Rr, e);
}
const wr = Object.assign(Object.assign({
  name: "common"
}, xe), {
  baseColor: f.neutralBase,
  // primary color
  primaryColor: f.primaryDefault,
  primaryColorHover: f.primaryHover,
  primaryColorPressed: f.primaryActive,
  primaryColorSuppl: f.primarySuppl,
  // info color
  infoColor: f.infoDefault,
  infoColorHover: f.infoHover,
  infoColorPressed: f.infoActive,
  infoColorSuppl: f.infoSuppl,
  // success color
  successColor: f.successDefault,
  successColorHover: f.successHover,
  successColorPressed: f.successActive,
  successColorSuppl: f.successSuppl,
  // warning color
  warningColor: f.warningDefault,
  warningColorHover: f.warningHover,
  warningColorPressed: f.warningActive,
  warningColorSuppl: f.warningSuppl,
  // error color
  errorColor: f.errorDefault,
  errorColorHover: f.errorHover,
  errorColorPressed: f.errorActive,
  errorColorSuppl: f.errorSuppl,
  // text color
  textColorBase: f.neutralTextBase,
  textColor1: "rgb(31, 34, 37)",
  textColor2: "rgb(51, 54, 57)",
  textColor3: "rgb(118, 124, 130)",
  // textColor4: neutral(base.alpha4), // disabled, placeholder, icon
  // textColor5: neutral(base.alpha5),
  textColorDisabled: A(f.alpha4),
  placeholderColor: A(f.alpha4),
  placeholderColorDisabled: A(f.alpha5),
  iconColor: A(f.alpha4),
  iconColorHover: se(A(f.alpha4), {
    lightness: 0.75
  }),
  iconColorPressed: se(A(f.alpha4), {
    lightness: 0.9
  }),
  iconColorDisabled: A(f.alpha5),
  opacity1: f.alpha1,
  opacity2: f.alpha2,
  opacity3: f.alpha3,
  opacity4: f.alpha4,
  opacity5: f.alpha5,
  dividerColor: "rgb(239, 239, 245)",
  borderColor: "rgb(224, 224, 230)",
  // close
  closeIconColor: A(Number(f.alphaClose)),
  closeIconColorHover: A(Number(f.alphaClose)),
  closeIconColorPressed: A(Number(f.alphaClose)),
  closeColorHover: "rgba(0, 0, 0, .09)",
  closeColorPressed: "rgba(0, 0, 0, .13)",
  // clear
  clearColor: A(f.alpha4),
  clearColorHover: se(A(f.alpha4), {
    lightness: 0.75
  }),
  clearColorPressed: se(A(f.alpha4), {
    lightness: 0.9
  }),
  scrollbarColor: Te(f.alphaScrollbar),
  scrollbarColorHover: Te(f.alphaScrollbarHover),
  scrollbarWidth: "5px",
  scrollbarHeight: "5px",
  scrollbarBorderRadius: "5px",
  progressRailColor: A(f.alphaProgressRail),
  railColor: "rgb(219, 219, 223)",
  popoverColor: f.neutralPopover,
  tableColor: f.neutralCard,
  cardColor: f.neutralCard,
  modalColor: f.neutralModal,
  bodyColor: f.neutralBody,
  tagColor: "#eee",
  avatarColor: A(f.alphaAvatar),
  invertedColor: "rgb(0, 20, 40)",
  inputColor: A(f.alphaInput),
  codeColor: "rgb(244, 244, 248)",
  tabColor: "rgb(247, 247, 250)",
  actionColor: "rgb(250, 250, 252)",
  tableHeaderColor: "rgb(250, 250, 252)",
  hoverColor: "rgb(243, 243, 245)",
  // use color with alpha since it can be nested with header filter & sorter effect
  tableColorHover: "rgba(0, 0, 100, 0.03)",
  tableColorStriped: "rgba(0, 0, 100, 0.02)",
  pressedColor: "rgb(237, 237, 239)",
  opacityDisabled: f.alphaDisabled,
  inputColorDisabled: "rgb(250, 250, 252)",
  // secondary button color
  // can also be used in tertiary button & quaternary button
  buttonColor2: "rgba(46, 51, 56, .05)",
  buttonColor2Hover: "rgba(46, 51, 56, .09)",
  buttonColor2Pressed: "rgba(46, 51, 56, .13)",
  boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",
  boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",
  boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"
}), kr = {
  sizeSmall: "14px",
  sizeMedium: "16px",
  sizeLarge: "18px",
  labelPadding: "0 8px",
  labelFontWeight: "400"
};
function yr(n) {
  const {
    baseColor: e,
    inputColorDisabled: r,
    cardColor: o,
    modalColor: t,
    popoverColor: i,
    textColorDisabled: d,
    borderColor: a,
    primaryColor: m,
    textColor2: c,
    fontSizeSmall: v,
    fontSizeMedium: S,
    fontSizeLarge: C,
    borderRadiusSmall: R,
    lineHeight: s
  } = n;
  return Object.assign(Object.assign({}, kr), {
    labelLineHeight: s,
    fontSizeSmall: v,
    fontSizeMedium: S,
    fontSizeLarge: C,
    borderRadius: R,
    color: e,
    colorChecked: m,
    colorDisabled: r,
    colorDisabledChecked: r,
    colorTableHeader: o,
    colorTableHeaderModal: t,
    colorTableHeaderPopover: i,
    checkMarkColor: e,
    checkMarkColorDisabled: d,
    checkMarkColorDisabledChecked: d,
    border: `1px solid ${a}`,
    borderDisabled: `1px solid ${a}`,
    borderDisabledChecked: `1px solid ${a}`,
    borderChecked: `1px solid ${m}`,
    borderFocus: `1px solid ${m}`,
    boxShadowFocus: `0 0 0 2px ${Fn(m, {
      alpha: 0.3
    })}`,
    textColor: c,
    textColorDisabled: d
  });
}
const Ar = {
  name: "Checkbox",
  common: wr,
  self: yr
};
var Mr = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_25056_QFZLEHXAPWMVKXIM", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.97.0", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-5a8078c568-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
const nn = "n-checkbox-group", Tr = {
  min: Number,
  max: Number,
  size: String,
  value: Array,
  defaultValue: {
    type: Array,
    default: null
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  // deprecated
  onChange: [Function, Array]
}, Dr = te({
  name: "CheckboxGroup",
  props: Tr,
  setup(n) {
    Mr.NODE_ENV !== "production" && ue(() => {
      n.onChange !== void 0 && Je("checkbox-group", "`on-change` is deprecated, please use `on-update:value` instead.");
    });
    const {
      mergedClsPrefixRef: e
    } = Ye(n), r = Ze(n), {
      mergedSizeRef: o,
      mergedDisabledRef: t
    } = r, i = ee(n.defaultValue), d = N(() => n.value), a = ze(d, i), m = N(() => {
      var S;
      return ((S = a.value) === null || S === void 0 ? void 0 : S.length) || 0;
    }), c = N(() => Array.isArray(a.value) ? new Set(a.value) : /* @__PURE__ */ new Set());
    function v(S, C) {
      const {
        nTriggerFormInput: R,
        nTriggerFormChange: s
      } = r, {
        onChange: p,
        "onUpdate:value": h,
        onUpdateValue: b
      } = n;
      if (Array.isArray(a.value)) {
        const x = Array.from(a.value), y = x.findIndex((H) => H === C);
        S ? ~y || (x.push(C), b && M(b, x, {
          actionType: "check",
          value: C
        }), h && M(h, x, {
          actionType: "check",
          value: C
        }), R(), s(), i.value = x, p && M(p, x)) : ~y && (x.splice(y, 1), b && M(b, x, {
          actionType: "uncheck",
          value: C
        }), h && M(h, x, {
          actionType: "uncheck",
          value: C
        }), p && M(p, x), i.value = x, R(), s());
      } else
        S ? (b && M(b, [C], {
          actionType: "check",
          value: C
        }), h && M(h, [C], {
          actionType: "check",
          value: C
        }), p && M(p, [C]), i.value = [C], R(), s()) : (b && M(b, [], {
          actionType: "uncheck",
          value: C
        }), h && M(h, [], {
          actionType: "uncheck",
          value: C
        }), p && M(p, []), i.value = [], R(), s());
    }
    return Fe(nn, {
      checkedCountRef: m,
      maxRef: he(n, "max"),
      minRef: he(n, "min"),
      valueSetRef: c,
      disabledRef: t,
      mergedSizeRef: o,
      toggleCheckbox: v
    }), {
      mergedClsPrefix: e
    };
  },
  render() {
    return $("div", {
      class: `${this.mergedClsPrefix}-checkbox-group`,
      role: "group"
    }, this.$slots);
  }
}), Fr = () => $("svg", {
  viewBox: "0 0 64 64",
  class: "check-icon"
}, $("path", {
  d: "M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"
})), Ir = () => $("svg", {
  viewBox: "0 0 100 100",
  class: "line-icon"
}, $("path", {
  d: "M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"
})), $r = w([
  O("checkbox", `
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `, [X("show-label", "line-height: var(--n-label-line-height);"), w("&:hover", [O("checkbox-box", [z("border", "border: var(--n-border-checked);")])]), w("&:focus:not(:active)", [O("checkbox-box", [z("border", `
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]), X("inside-table", [O("checkbox-box", `
 background-color: var(--n-merged-color-table);
 `)]), X("checked", [O("checkbox-box", `
 background-color: var(--n-color-checked);
 `, [O("checkbox-icon", [
    // if not set width to 100%, safari & old chrome won't display the icon
    w(".check-icon", `
 opacity: 1;
 transform: scale(1);
 `)
  ])])]), X("indeterminate", [O("checkbox-box", [O("checkbox-icon", [w(".check-icon", `
 opacity: 0;
 transform: scale(.5);
 `), w(".line-icon", `
 opacity: 1;
 transform: scale(1);
 `)])])]), X("checked, indeterminate", [w("&:focus:not(:active)", [O("checkbox-box", [z("border", `
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]), O("checkbox-box", `
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `, [z("border", {
    border: "var(--n-border-checked)"
  })])]), X("disabled", {
    cursor: "not-allowed"
  }, [X("checked", [O("checkbox-box", `
 background-color: var(--n-color-disabled-checked);
 `, [z("border", {
    border: "var(--n-border-disabled-checked)"
  }), O("checkbox-icon", [w(".check-icon, .line-icon", {
    fill: "var(--n-check-mark-color-disabled-checked)"
  })])])]), O("checkbox-box", `
 background-color: var(--n-color-disabled);
 `, [z("border", `
 border: var(--n-border-disabled);
 `), O("checkbox-icon", [w(".check-icon, .line-icon", `
 fill: var(--n-check-mark-color-disabled);
 `)])]), z("label", `
 color: var(--n-text-color-disabled);
 `)]), O("checkbox-box-wrapper", `
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `), O("checkbox-box", `
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `, [z("border", `
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `), O("checkbox-icon", `
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `, [w(".check-icon, .line-icon", `
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `), Pr({
    left: "1px",
    top: "1px"
  })])]), z("label", `
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `, [w("&:empty", {
    display: "none"
  })])]),
  // modal table header checkbox
  ur(O("checkbox", `
 --n-merged-color-table: var(--n-color-table-modal);
 `)),
  // popover table header checkbox
  fr(O("checkbox", `
 --n-merged-color-table: var(--n-color-table-popover);
 `))
]);
var Nr = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_25056_QFZLEHXAPWMVKXIM", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.97.0", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-5a8078c568-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
const Hr = Object.assign(Object.assign({}, Ee.props), {
  size: String,
  checked: {
    type: [Boolean, String, Number],
    default: void 0
  },
  defaultChecked: {
    type: [Boolean, String, Number],
    default: !1
  },
  value: [String, Number],
  disabled: {
    type: Boolean,
    default: void 0
  },
  indeterminate: Boolean,
  label: String,
  focusable: {
    type: Boolean,
    default: !0
  },
  checkedValue: {
    type: [Boolean, String, Number],
    default: !0
  },
  uncheckedValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  "onUpdate:checked": [Function, Array],
  onUpdateChecked: [Function, Array],
  // private
  privateInsideTable: Boolean,
  // deprecated
  onChange: [Function, Array]
}), Lr = te({
  name: "Checkbox",
  props: Hr,
  setup(n) {
    Nr.NODE_ENV !== "production" && ue(() => {
      n.onChange && Je("checkbox", "`on-change` is deprecated, please use `on-update:checked` instead.");
    });
    const e = Z(nn, null), r = ee(null), {
      mergedClsPrefixRef: o,
      inlineThemeDisabled: t,
      mergedRtlRef: i
    } = Ye(n), d = ee(n.defaultChecked), a = he(n, "checked"), m = ze(a, d), c = Nn(() => {
      if (e) {
        const _ = e.valueSetRef.value;
        return _ && n.value !== void 0 ? _.has(n.value) : !1;
      } else
        return m.value === n.checkedValue;
    }), v = Ze(n, {
      mergedSize(_) {
        const {
          size: u
        } = n;
        if (u !== void 0) return u;
        if (e) {
          const {
            value: l
          } = e.mergedSizeRef;
          if (l !== void 0)
            return l;
        }
        if (_) {
          const {
            mergedSize: l
          } = _;
          if (l !== void 0) return l.value;
        }
        return "medium";
      },
      mergedDisabled(_) {
        const {
          disabled: u
        } = n;
        if (u !== void 0) return u;
        if (e) {
          if (e.disabledRef.value) return !0;
          const {
            maxRef: {
              value: l
            },
            checkedCountRef: g
          } = e;
          if (l !== void 0 && g.value >= l && !c.value)
            return !0;
          const {
            minRef: {
              value: E
            }
          } = e;
          if (E !== void 0 && g.value <= E && c.value)
            return !0;
        }
        return _ ? _.disabled.value : !1;
      }
    }), {
      mergedDisabledRef: S,
      mergedSizeRef: C
    } = v, R = Ee("Checkbox", "-checkbox", $r, Ar, n, o);
    function s(_) {
      if (e && n.value !== void 0)
        e.toggleCheckbox(!c.value, n.value);
      else {
        const {
          onChange: u,
          "onUpdate:checked": l,
          onUpdateChecked: g
        } = n, {
          nTriggerFormInput: E,
          nTriggerFormChange: P
        } = v, k = c.value ? n.uncheckedValue : n.checkedValue;
        l && M(l, k, _), g && M(g, k, _), u && M(u, k, _), E(), P(), d.value = k;
      }
    }
    function p(_) {
      S.value || s(_);
    }
    function h(_) {
      if (!S.value)
        switch (_.key) {
          case " ":
          case "Enter":
            s(_);
        }
    }
    function b(_) {
      switch (_.key) {
        case " ":
          _.preventDefault();
      }
    }
    const x = {
      focus: () => {
        var _;
        (_ = r.value) === null || _ === void 0 || _.focus();
      },
      blur: () => {
        var _;
        (_ = r.value) === null || _ === void 0 || _.blur();
      }
    }, y = gr("Checkbox", i, o), H = N(() => {
      const {
        value: _
      } = C, {
        common: {
          cubicBezierEaseInOut: u
        },
        self: {
          borderRadius: l,
          color: g,
          colorChecked: E,
          colorDisabled: P,
          colorTableHeader: k,
          colorTableHeaderModal: U,
          colorTableHeaderPopover: D,
          checkMarkColor: F,
          checkMarkColorDisabled: B,
          border: W,
          borderFocus: V,
          borderDisabled: j,
          borderChecked: K,
          boxShadowFocus: G,
          textColor: pe,
          textColorDisabled: rn,
          checkMarkColorDisabledChecked: on,
          colorDisabledChecked: tn,
          borderDisabledChecked: sn,
          labelPadding: an,
          labelLineHeight: ln,
          labelFontWeight: cn,
          [ye("fontSize", _)]: dn,
          [ye("size", _)]: un
        }
      } = R.value;
      return {
        "--n-label-line-height": ln,
        "--n-label-font-weight": cn,
        "--n-size": un,
        "--n-bezier": u,
        "--n-border-radius": l,
        "--n-border": W,
        "--n-border-checked": K,
        "--n-border-focus": V,
        "--n-border-disabled": j,
        "--n-border-disabled-checked": sn,
        "--n-box-shadow-focus": G,
        "--n-color": g,
        "--n-color-checked": E,
        "--n-color-table": k,
        "--n-color-table-modal": U,
        "--n-color-table-popover": D,
        "--n-color-disabled": P,
        "--n-color-disabled-checked": tn,
        "--n-text-color": pe,
        "--n-text-color-disabled": rn,
        "--n-check-mark-color": F,
        "--n-check-mark-color-disabled": B,
        "--n-check-mark-color-disabled-checked": on,
        "--n-font-size": dn,
        "--n-label-padding": an
      };
    }), L = t ? hr("checkbox", N(() => C.value[0]), H, n) : void 0;
    return Object.assign(v, x, {
      rtlEnabled: y,
      selfRef: r,
      mergedClsPrefix: o,
      mergedDisabled: S,
      renderedChecked: c,
      mergedTheme: R,
      labelId: $n(),
      handleClick: p,
      handleKeyUp: h,
      handleKeyDown: b,
      cssVars: t ? void 0 : H,
      themeClass: L == null ? void 0 : L.themeClass,
      onRender: L == null ? void 0 : L.onRender
    });
  },
  render() {
    var n;
    const {
      $slots: e,
      renderedChecked: r,
      mergedDisabled: o,
      indeterminate: t,
      privateInsideTable: i,
      cssVars: d,
      labelId: a,
      label: m,
      mergedClsPrefix: c,
      focusable: v,
      handleKeyUp: S,
      handleKeyDown: C,
      handleClick: R
    } = this;
    (n = this.onRender) === null || n === void 0 || n.call(this);
    const s = pr(e.default, (p) => m || p ? $("span", {
      class: `${c}-checkbox__label`,
      id: a
    }, m || p) : null);
    return $("div", {
      ref: "selfRef",
      class: [`${c}-checkbox`, this.themeClass, this.rtlEnabled && `${c}-checkbox--rtl`, r && `${c}-checkbox--checked`, o && `${c}-checkbox--disabled`, t && `${c}-checkbox--indeterminate`, i && `${c}-checkbox--inside-table`, s && `${c}-checkbox--show-label`],
      tabindex: o || !v ? void 0 : 0,
      role: "checkbox",
      "aria-checked": t ? "mixed" : r,
      "aria-labelledby": a,
      style: d,
      onKeyup: S,
      onKeydown: C,
      onClick: R,
      onMousedown: () => {
        We("selectstart", window, (p) => {
          p.preventDefault();
        }, {
          once: !0
        });
      }
    }, $("div", {
      class: `${c}-checkbox-box-wrapper`
    }, " ", $("div", {
      class: `${c}-checkbox-box`
    }, $(xr, null, {
      default: () => this.indeterminate ? $("div", {
        key: "indeterminate",
        class: `${c}-checkbox-icon`
      }, Ir()) : $("div", {
        key: "check",
        class: `${c}-checkbox-icon`
      }, Fr())
    }), $("div", {
      class: `${c}-checkbox-box__border`
    }))), s);
  }
}), Ur = /* @__PURE__ */ te({
  __name: "checkbox",
  setup(n) {
    return (e, r) => ($e(), Ne(
      He(Lr),
      Le({ class: "lc-checkbox" }, e.$attrs),
      {
        default: Ue(() => [
          Be(e.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
        /* FORWARDED */
      },
      16
      /* FULL_PROPS */
    ));
  }
}), Br = (n, e) => {
  const r = n.__vccOpts || n;
  for (const [o, t] of e)
    r[o] = t;
  return r;
}, Gr = /* @__PURE__ */ Br(Ur, [["__scopeId", "data-v-a7afc8c0"]]), Kr = /* @__PURE__ */ te({
  __name: "checkbox-group",
  setup(n) {
    return (e, r) => ($e(), Ne(
      He(Dr),
      Le({ class: "lc-checkbox-group" }, e.$attrs),
      {
        default: Ue(() => [
          Be(e.$slots, "default")
        ]),
        _: 3
        /* FORWARDED */
      },
      16
      /* FULL_PROPS */
    ));
  }
});
export {
  Gr as LcCheckbox,
  Kr as LcCheckboxGroup
};
