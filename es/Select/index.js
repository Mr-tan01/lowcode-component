// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { ref as F, readonly as Fr, watch as we, computed as z, onMounted as Ie, onBeforeUnmount as Ne, createTextVNode as Mt, Fragment as On, Comment as no, defineComponent as oe, provide as je, getCurrentInstance as Ii, inject as fe, withDirectives as ft, toRef as le, h as g, Teleport as vl, nextTick as Wt, renderSlot as Di, onActivated as $i, onDeactivated as Fi, mergeProps as Ht, isVNode as bl, shallowRef as Cl, watchEffect as Ye, onBeforeMount as to, Transition as Un, vShow as zi, cloneVNode as yl, Text as Sl, mergeDefaults as wl, openBlock as xl, createElementBlock as _l, createVNode as Pl, unref as Ol, withCtx as El, createElementVNode as So } from "vue";
let At = [];
const Ni = /* @__PURE__ */ new WeakMap();
function Tl() {
  At.forEach((e) => e(...Ni.get(e))), At = [];
}
function ki(e, ...n) {
  Ni.set(e, n), !At.includes(e) && At.push(e) === 1 && requestAnimationFrame(Tl);
}
function et(e, n) {
  let { target: t } = e;
  for (; t; ) {
    if (t.dataset && t.dataset[n] !== void 0)
      return !0;
    t = t.parentElement;
  }
  return !1;
}
function at(e) {
  return e.composedPath()[0] || null;
}
function lt(e) {
  return typeof e == "string" ? e.endsWith("px") ? Number(e.slice(0, e.length - 2)) : Number(e) : e;
}
function Jn(e) {
  if (e != null)
    return typeof e == "number" ? `${e}px` : e.endsWith("px") ? e : `${e}px`;
}
function Fe(e, n) {
  const t = e.trim().split(/\s+/g), r = {
    top: t[0]
  };
  switch (t.length) {
    case 1:
      r.right = t[0], r.bottom = t[0], r.left = t[0];
      break;
    case 2:
      r.right = t[1], r.left = t[1], r.bottom = t[0];
      break;
    case 3:
      r.right = t[1], r.bottom = t[2], r.left = t[1];
      break;
    case 4:
      r.right = t[1], r.bottom = t[2], r.left = t[3];
      break;
    default:
      throw new Error("[seemly/getMargin]:" + e + " is not a valid value.");
  }
  return n === void 0 ? r : r[n];
}
const wo = {
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
}, Vn = "^\\s*", Gn = "\\s*$", bn = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", Cn = "([0-9A-Fa-f])", yn = "([0-9A-Fa-f]{2})", Rl = new RegExp(`${Vn}rgb\\s*\\(${bn},${bn},${bn}\\)${Gn}`), Ml = new RegExp(`${Vn}rgba\\s*\\(${bn},${bn},${bn},${bn}\\)${Gn}`), Al = new RegExp(`${Vn}#${Cn}${Cn}${Cn}${Gn}`), Il = new RegExp(`${Vn}#${yn}${yn}${yn}${Gn}`), Dl = new RegExp(`${Vn}#${Cn}${Cn}${Cn}${Cn}${Gn}`), $l = new RegExp(`${Vn}#${yn}${yn}${yn}${yn}${Gn}`);
function Ee(e) {
  return parseInt(e, 16);
}
function _n(e) {
  try {
    let n;
    if (n = Il.exec(e))
      return [Ee(n[1]), Ee(n[2]), Ee(n[3]), 1];
    if (n = Rl.exec(e))
      return [Se(n[1]), Se(n[5]), Se(n[9]), 1];
    if (n = Ml.exec(e))
      return [
        Se(n[1]),
        Se(n[5]),
        Se(n[9]),
        nt(n[13])
      ];
    if (n = Al.exec(e))
      return [
        Ee(n[1] + n[1]),
        Ee(n[2] + n[2]),
        Ee(n[3] + n[3]),
        1
      ];
    if (n = $l.exec(e))
      return [
        Ee(n[1]),
        Ee(n[2]),
        Ee(n[3]),
        nt(Ee(n[4]) / 255)
      ];
    if (n = Dl.exec(e))
      return [
        Ee(n[1] + n[1]),
        Ee(n[2] + n[2]),
        Ee(n[3] + n[3]),
        nt(Ee(n[4] + n[4]) / 255)
      ];
    if (e in wo)
      return _n(wo[e]);
    throw new Error(`[seemly/rgba]: Invalid color value ${e}.`);
  } catch (n) {
    throw n;
  }
}
function Fl(e) {
  return e > 1 ? 1 : e < 0 ? 0 : e;
}
function zr(e, n, t, r) {
  return `rgba(${Se(e)}, ${Se(n)}, ${Se(t)}, ${Fl(r)})`;
}
function pr(e, n, t, r, o) {
  return Se((e * n * (1 - r) + t * r) / o);
}
function zl(e, n) {
  Array.isArray(e) || (e = _n(e)), Array.isArray(n) || (n = _n(n));
  const t = e[3], r = n[3], o = nt(t + r - t * r);
  return zr(pr(e[0], t, n[0], r, o), pr(e[1], t, n[1], r, o), pr(e[2], t, n[2], r, o), o);
}
function ae(e, n) {
  const [t, r, o, i = 1] = Array.isArray(e) ? e : _n(e);
  return n.alpha ? zr(t, r, o, n.alpha) : zr(t, r, o, i);
}
function bt(e, n) {
  const [t, r, o, i = 1] = Array.isArray(e) ? e : _n(e), { lightness: a = 1, alpha: l = 1 } = n;
  return Nl([t * a, r * a, o * a, i * l]);
}
function nt(e) {
  const n = Math.round(Number(e) * 100) / 100;
  return n > 1 ? 1 : n < 0 ? 0 : n;
}
function Se(e) {
  const n = Math.round(Number(e));
  return n > 255 ? 255 : n < 0 ? 0 : n;
}
function Nl(e) {
  const [n, t, r] = e;
  return 3 in e ? `rgba(${Se(n)}, ${Se(t)}, ${Se(r)}, ${nt(e[3])})` : `rgba(${Se(n)}, ${Se(t)}, ${Se(r)}, 1)`;
}
function kl(e = 8) {
  return Math.random().toString(16).slice(2, 2 + e);
}
function xo(e) {
  return Array.isArray(e) ? e : [e];
}
const Nr = {
  STOP: "STOP"
};
function Bi(e, n) {
  const t = n(e);
  e.children !== void 0 && t !== Nr.STOP && e.children.forEach((r) => Bi(r, n));
}
function Bl(e, n = {}) {
  const { preserveGroup: t = !1 } = n, r = [], o = t ? (a) => {
    a.isLeaf || (r.push(a.key), i(a.children));
  } : (a) => {
    a.isLeaf || (a.isGroup || r.push(a.key), i(a.children));
  };
  function i(a) {
    a.forEach(o);
  }
  return i(e), r;
}
function Ll(e, n) {
  const { isLeaf: t } = e;
  return t !== void 0 ? t : !n(e);
}
function Wl(e) {
  return e.children;
}
function Hl(e) {
  return e.key;
}
function jl() {
  return !1;
}
function Ul(e, n) {
  const { isLeaf: t } = e;
  return !(t === !1 && !Array.isArray(n(e)));
}
function Vl(e) {
  return e.disabled === !0;
}
function Gl(e, n) {
  return e.isLeaf === !1 && !Array.isArray(n(e));
}
function Kl(e, n) {
  if (e.isLeaf === !0) {
    const t = n(e);
    if (Array.isArray(t) && t.length > 0)
      return !0;
  }
  return !1;
}
function mr(e) {
  var n;
  return e == null ? [] : Array.isArray(e) ? e : (n = e.checkedKeys) !== null && n !== void 0 ? n : [];
}
function gr(e) {
  var n;
  return e == null || Array.isArray(e) ? [] : (n = e.indeterminateKeys) !== null && n !== void 0 ? n : [];
}
function Xl(e, n) {
  const t = new Set(e);
  return n.forEach((r) => {
    t.has(r) || t.add(r);
  }), Array.from(t);
}
function Jl(e, n) {
  const t = new Set(e);
  return n.forEach((r) => {
    t.has(r) && t.delete(r);
  }), Array.from(t);
}
function Yl(e) {
  return (e == null ? void 0 : e.type) === "group";
}
function ql(e) {
  const n = /* @__PURE__ */ new Map();
  return e.forEach((t, r) => {
    n.set(t.key, r);
  }), (t) => {
    var r;
    return (r = n.get(t)) !== null && r !== void 0 ? r : null;
  };
}
class Zl extends Error {
  constructor() {
    super(), this.message = "SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.";
  }
}
function Ql(e, n, t, r) {
  return It(n.concat(e), t, r, !1);
}
function es(e, n) {
  const t = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const o = n.treeNodeMap.get(r);
    if (o !== void 0) {
      let i = o.parent;
      for (; i !== null && !(i.disabled || t.has(i.key)); )
        t.add(i.key), i = i.parent;
    }
  }), t;
}
function ns(e, n, t, r) {
  const o = It(n, t, r, !1), i = It(e, t, r, !0), a = es(e, t), l = [];
  return o.forEach((s) => {
    (i.has(s) || a.has(s)) && l.push(s);
  }), l.forEach((s) => o.delete(s)), o;
}
function vr(e, n) {
  const { checkedKeys: t, keysToCheck: r, keysToUncheck: o, indeterminateKeys: i, cascade: a, leafOnly: l, checkStrategy: s, allowNotLoaded: u } = e;
  if (!a)
    return r !== void 0 ? {
      checkedKeys: Xl(t, r),
      indeterminateKeys: Array.from(i)
    } : o !== void 0 ? {
      checkedKeys: Jl(t, o),
      indeterminateKeys: Array.from(i)
    } : {
      checkedKeys: Array.from(t),
      indeterminateKeys: Array.from(i)
    };
  const { levelTreeNodeMap: c } = n;
  let h;
  o !== void 0 ? h = ns(o, t, n, u) : r !== void 0 ? h = Ql(r, t, n, u) : h = It(t, n, u, !1);
  const m = s === "parent", v = s === "child" || l, f = h, y = /* @__PURE__ */ new Set(), b = Math.max.apply(null, Array.from(c.keys()));
  for (let p = b; p >= 0; p -= 1) {
    const _ = p === 0, R = c.get(p);
    for (const x of R) {
      if (x.isLeaf)
        continue;
      const { key: E, shallowLoaded: k } = x;
      if (v && k && x.children.forEach((O) => {
        !O.disabled && !O.isLeaf && O.shallowLoaded && f.has(O.key) && f.delete(O.key);
      }), x.disabled || !k)
        continue;
      let C = !0, w = !1, M = !0;
      for (const O of x.children) {
        const j = O.key;
        if (!O.disabled) {
          if (M && (M = !1), f.has(j))
            w = !0;
          else if (y.has(j)) {
            w = !0, C = !1;
            break;
          } else if (C = !1, w)
            break;
        }
      }
      C && !M ? (m && x.children.forEach((O) => {
        !O.disabled && f.has(O.key) && f.delete(O.key);
      }), f.add(E)) : w && y.add(E), _ && v && f.has(E) && f.delete(E);
    }
  }
  return {
    checkedKeys: Array.from(f),
    indeterminateKeys: Array.from(y)
  };
}
function It(e, n, t, r) {
  const { treeNodeMap: o, getChildren: i } = n, a = /* @__PURE__ */ new Set(), l = new Set(e);
  return e.forEach((s) => {
    const u = o.get(s);
    u !== void 0 && Bi(u, (c) => {
      if (c.disabled)
        return Nr.STOP;
      const { key: h } = c;
      if (!a.has(h) && (a.add(h), l.add(h), Gl(c.rawNode, i))) {
        if (r)
          return Nr.STOP;
        if (!t)
          throw new Zl();
      }
    });
  }), l;
}
function ts(e, { includeGroup: n = !1, includeSelf: t = !0 }, r) {
  var o;
  const i = r.treeNodeMap;
  let a = e == null ? null : (o = i.get(e)) !== null && o !== void 0 ? o : null;
  const l = {
    keyPath: [],
    treeNodePath: [],
    treeNode: a
  };
  if (a != null && a.ignored)
    return l.treeNode = null, l;
  for (; a; )
    !a.ignored && (n || !a.isGroup) && l.treeNodePath.push(a), a = a.parent;
  return l.treeNodePath.reverse(), t || l.treeNodePath.pop(), l.keyPath = l.treeNodePath.map((s) => s.key), l;
}
function rs(e) {
  if (e.length === 0)
    return null;
  const n = e[0];
  return n.isGroup || n.ignored || n.disabled ? n.getNext() : n;
}
function os(e, n) {
  const t = e.siblings, r = t.length, { index: o } = e;
  return n ? t[(o + 1) % r] : o === t.length - 1 ? null : t[o + 1];
}
function _o(e, n, { loop: t = !1, includeDisabled: r = !1 } = {}) {
  const o = n === "prev" ? is : os, i = {
    reverse: n === "prev"
  };
  let a = !1, l = null;
  function s(u) {
    if (u !== null) {
      if (u === e) {
        if (!a)
          a = !0;
        else if (!e.disabled && !e.isGroup) {
          l = e;
          return;
        }
      } else if ((!u.disabled || r) && !u.ignored && !u.isGroup) {
        l = u;
        return;
      }
      if (u.isGroup) {
        const c = ro(u, i);
        c !== null ? l = c : s(o(u, t));
      } else {
        const c = o(u, !1);
        if (c !== null)
          s(c);
        else {
          const h = as(u);
          h != null && h.isGroup ? s(o(h, t)) : t && s(o(u, !0));
        }
      }
    }
  }
  return s(e), l;
}
function is(e, n) {
  const t = e.siblings, r = t.length, { index: o } = e;
  return n ? t[(o - 1 + r) % r] : o === 0 ? null : t[o - 1];
}
function as(e) {
  return e.parent;
}
function ro(e, n = {}) {
  const { reverse: t = !1 } = n, { children: r } = e;
  if (r) {
    const { length: o } = r, i = t ? o - 1 : 0, a = t ? -1 : o, l = t ? -1 : 1;
    for (let s = i; s !== a; s += l) {
      const u = r[s];
      if (!u.disabled && !u.ignored)
        if (u.isGroup) {
          const c = ro(u, n);
          if (c !== null)
            return c;
        } else
          return u;
    }
  }
  return null;
}
const ls = {
  getChild() {
    return this.ignored ? null : ro(this);
  },
  getParent() {
    const { parent: e } = this;
    return e != null && e.isGroup ? e.getParent() : e;
  },
  getNext(e = {}) {
    return _o(this, "next", e);
  },
  getPrev(e = {}) {
    return _o(this, "prev", e);
  }
};
function ss(e, n) {
  const t = n ? new Set(n) : void 0, r = [];
  function o(i) {
    i.forEach((a) => {
      r.push(a), !(a.isLeaf || !a.children || a.ignored) && (a.isGroup || // normal non-leaf node
      t === void 0 || t.has(a.key)) && o(a.children);
    });
  }
  return o(e), r;
}
function us(e, n) {
  const t = e.key;
  for (; n; ) {
    if (n.key === t)
      return !0;
    n = n.parent;
  }
  return !1;
}
var ds = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\mmj\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_11032_CTSDTHGKBNXAIWDN", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-QBN3J51", ComSpec: "C:\\WINDOWS\\system32\\cmd.exe", CURSOR_TRACE_ID: "09ee13f00f524892b908f0f5fa49cdb7", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "c:\\Users\\mmj\\AppData\\Local\\Programs\\cursor\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\mmj", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\mmj", INIT_CWD: "F:\\Work\\lowcode\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\mmj\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-QBN3J51", NODE: "C:\\Program Files\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com/", npm_config_user_agent: "pnpm/9.15.4 npm/? node/v18.20.2 win32 x64", npm_execpath: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "C:\\Program Files\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "8", NVM_HOME: "D:\\install\\nvm", NVM_SYMLINK: "C:\\Program Files\\nodejs", OneDrive: "C:\\Users\\mmj\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\Work\\lowcode\\lowcode-component\\scripts\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\Work\\lowcode\\lowcode-component\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\java8path;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Git\\cmd;C:\\Users\\mmj\\AppData\\Local\\Microsoft\\WindowsApps;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Microsoft VS Code\\bin;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\Work\\lowcode\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "AMD64 Family 23 Model 24 Stepping 1, AuthenticAMD", PROCESSOR_LEVEL: "23", PROCESSOR_REVISION: "1801", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\mmj\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\WINDOWS", TEMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "0.45.7", TMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-QBN3J51", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-QBN3J51", USERNAME: "mmj", USERPROFILE: "C:\\Users\\mmj", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "c:\\Users\\mmj\\AppData\\Local\\Programs\\cursor\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "C:\\Users\\mmj\\AppData\\Local\\Programs\\cursor\\Cursor.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-eb177ecbbf-sock", VSCODE_INJECTION: "1", windir: "C:\\WINDOWS" };
function Li(e, n, t, r, o, i = null, a = 0) {
  const l = [];
  return e.forEach((s, u) => {
    var c;
    ds.NODE_ENV !== "production" && Kl(s, o) && console.error("[treemate]: node", s, "is invalid");
    const h = Object.create(r);
    if (h.rawNode = s, h.siblings = l, h.level = a, h.index = u, h.isFirstChild = u === 0, h.isLastChild = u + 1 === e.length, h.parent = i, !h.ignored) {
      const m = o(s);
      Array.isArray(m) && (h.children = Li(m, n, t, r, o, h, a + 1));
    }
    l.push(h), n.set(h.key, h), t.has(a) || t.set(a, []), (c = t.get(a)) === null || c === void 0 || c.push(h);
  }), l;
}
function cs(e, n = {}) {
  var t;
  const r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), { getDisabled: i = Vl, getIgnored: a = jl, getIsGroup: l = Yl, getKey: s = Hl } = n, u = (t = n.getChildren) !== null && t !== void 0 ? t : Wl, c = n.ignoreEmptyChildren ? (x) => {
    const E = u(x);
    return Array.isArray(E) ? E.length ? E : null : E;
  } : u, h = Object.assign({
    get key() {
      return s(this.rawNode);
    },
    get disabled() {
      return i(this.rawNode);
    },
    get isGroup() {
      return l(this.rawNode);
    },
    get isLeaf() {
      return Ll(this.rawNode, c);
    },
    get shallowLoaded() {
      return Ul(this.rawNode, c);
    },
    get ignored() {
      return a(this.rawNode);
    },
    contains(x) {
      return us(this, x);
    }
  }, ls), m = Li(e, r, o, h, c);
  function v(x) {
    if (x == null)
      return null;
    const E = r.get(x);
    return E && !E.isGroup && !E.ignored ? E : null;
  }
  function f(x) {
    if (x == null)
      return null;
    const E = r.get(x);
    return E && !E.ignored ? E : null;
  }
  function y(x, E) {
    const k = f(x);
    return k ? k.getPrev(E) : null;
  }
  function b(x, E) {
    const k = f(x);
    return k ? k.getNext(E) : null;
  }
  function p(x) {
    const E = f(x);
    return E ? E.getParent() : null;
  }
  function _(x) {
    const E = f(x);
    return E ? E.getChild() : null;
  }
  const R = {
    treeNodes: m,
    treeNodeMap: r,
    levelTreeNodeMap: o,
    maxLevel: Math.max(...o.keys()),
    getChildren: c,
    getFlattenedNodes(x) {
      return ss(m, x);
    },
    getNode: v,
    getPrev: y,
    getNext: b,
    getParent: p,
    getChild: _,
    getFirstAvailableNode() {
      return rs(m);
    },
    getPath(x, E = {}) {
      return ts(x, E, R);
    },
    getCheckedKeys(x, E = {}) {
      const { cascade: k = !0, leafOnly: C = !1, checkStrategy: w = "all", allowNotLoaded: M = !1 } = E;
      return vr({
        checkedKeys: mr(x),
        indeterminateKeys: gr(x),
        cascade: k,
        leafOnly: C,
        checkStrategy: w,
        allowNotLoaded: M
      }, R);
    },
    check(x, E, k = {}) {
      const { cascade: C = !0, leafOnly: w = !1, checkStrategy: M = "all", allowNotLoaded: O = !1 } = k;
      return vr({
        checkedKeys: mr(E),
        indeterminateKeys: gr(E),
        keysToCheck: x == null ? [] : xo(x),
        cascade: C,
        leafOnly: w,
        checkStrategy: M,
        allowNotLoaded: O
      }, R);
    },
    uncheck(x, E, k = {}) {
      const { cascade: C = !0, leafOnly: w = !1, checkStrategy: M = "all", allowNotLoaded: O = !1 } = k;
      return vr({
        checkedKeys: mr(E),
        indeterminateKeys: gr(E),
        keysToUncheck: x == null ? [] : xo(x),
        cascade: C,
        leafOnly: w,
        checkStrategy: M,
        allowNotLoaded: O
      }, R);
    },
    getNonLeafKeys(x = {}) {
      return Bl(m, x);
    }
  };
  return R;
}
function Tt(e) {
  return e.composedPath()[0];
}
const fs = {
  mousemoveoutside: /* @__PURE__ */ new WeakMap(),
  clickoutside: /* @__PURE__ */ new WeakMap()
};
function hs(e, n, t) {
  if (e === "mousemoveoutside") {
    const r = (o) => {
      n.contains(Tt(o)) || t(o);
    };
    return {
      mousemove: r,
      touchstart: r
    };
  } else if (e === "clickoutside") {
    let r = !1;
    const o = (a) => {
      r = !n.contains(Tt(a));
    }, i = (a) => {
      r && (n.contains(Tt(a)) || t(a));
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
function Wi(e, n, t) {
  const r = fs[e];
  let o = r.get(n);
  o === void 0 && r.set(n, o = /* @__PURE__ */ new WeakMap());
  let i = o.get(t);
  return i === void 0 && o.set(t, i = hs(e, n, t)), i;
}
function ps(e, n, t, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const o = Wi(e, n, t);
    return Object.keys(o).forEach((i) => {
      Pe(i, document, o[i], r);
    }), !0;
  }
  return !1;
}
function ms(e, n, t, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const o = Wi(e, n, t);
    return Object.keys(o).forEach((i) => {
      pe(i, document, o[i], r);
    }), !0;
  }
  return !1;
}
function gs() {
  if (typeof window > "u")
    return {
      on: () => {
      },
      off: () => {
      }
    };
  const e = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  function t() {
    e.set(this, !0);
  }
  function r() {
    e.set(this, !0), n.set(this, !0);
  }
  function o(C, w, M) {
    const O = C[w];
    return C[w] = function() {
      return M.apply(C, arguments), O.apply(C, arguments);
    }, C;
  }
  function i(C, w) {
    C[w] = Event.prototype[w];
  }
  const a = /* @__PURE__ */ new WeakMap(), l = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
  function s() {
    var C;
    return (C = a.get(this)) !== null && C !== void 0 ? C : null;
  }
  function u(C, w) {
    l !== void 0 && Object.defineProperty(C, "currentTarget", {
      configurable: !0,
      enumerable: !0,
      get: w ?? l.get
    });
  }
  const c = {
    bubble: {},
    capture: {}
  }, h = {};
  function m() {
    const C = function(w) {
      const { type: M, eventPhase: O, bubbles: j } = w, Q = Tt(w);
      if (O === 2)
        return;
      const P = O === 1 ? "capture" : "bubble";
      let $ = Q;
      const T = [];
      for (; $ === null && ($ = window), T.push($), $ !== window; )
        $ = $.parentNode || null;
      const L = c.capture[M], Y = c.bubble[M];
      if (o(w, "stopPropagation", t), o(w, "stopImmediatePropagation", r), u(w, s), P === "capture") {
        if (L === void 0)
          return;
        for (let Z = T.length - 1; Z >= 0 && !e.has(w); --Z) {
          const ee = T[Z], X = L.get(ee);
          if (X !== void 0) {
            a.set(w, ee);
            for (const ie of X) {
              if (n.has(w))
                break;
              ie(w);
            }
          }
          if (Z === 0 && !j && Y !== void 0) {
            const ie = Y.get(ee);
            if (ie !== void 0)
              for (const I of ie) {
                if (n.has(w))
                  break;
                I(w);
              }
          }
        }
      } else if (P === "bubble") {
        if (Y === void 0)
          return;
        for (let Z = 0; Z < T.length && !e.has(w); ++Z) {
          const ee = T[Z], X = Y.get(ee);
          if (X !== void 0) {
            a.set(w, ee);
            for (const ie of X) {
              if (n.has(w))
                break;
              ie(w);
            }
          }
        }
      }
      i(w, "stopPropagation"), i(w, "stopImmediatePropagation"), u(w);
    };
    return C.displayName = "evtdUnifiedHandler", C;
  }
  function v() {
    const C = function(w) {
      const { type: M, eventPhase: O } = w;
      if (O !== 2)
        return;
      const j = h[M];
      j !== void 0 && j.forEach((Q) => Q(w));
    };
    return C.displayName = "evtdUnifiedWindowEventHandler", C;
  }
  const f = m(), y = v();
  function b(C, w) {
    const M = c[C];
    return M[w] === void 0 && (M[w] = /* @__PURE__ */ new Map(), window.addEventListener(w, f, C === "capture")), M[w];
  }
  function p(C) {
    return h[C] === void 0 && (h[C] = /* @__PURE__ */ new Set(), window.addEventListener(C, y)), h[C];
  }
  function _(C, w) {
    let M = C.get(w);
    return M === void 0 && C.set(w, M = /* @__PURE__ */ new Set()), M;
  }
  function R(C, w, M, O) {
    const j = c[w][M];
    if (j !== void 0) {
      const Q = j.get(C);
      if (Q !== void 0 && Q.has(O))
        return !0;
    }
    return !1;
  }
  function x(C, w) {
    const M = h[C];
    return !!(M !== void 0 && M.has(w));
  }
  function E(C, w, M, O) {
    let j;
    if (typeof O == "object" && O.once === !0 ? j = (L) => {
      k(C, w, j, O), M(L);
    } : j = M, ps(C, w, j, O))
      return;
    const P = O === !0 || typeof O == "object" && O.capture === !0 ? "capture" : "bubble", $ = b(P, C), T = _($, w);
    if (T.has(j) || T.add(j), w === window) {
      const L = p(C);
      L.has(j) || L.add(j);
    }
  }
  function k(C, w, M, O) {
    if (ms(C, w, M, O))
      return;
    const Q = O === !0 || typeof O == "object" && O.capture === !0, P = Q ? "capture" : "bubble", $ = b(P, C), T = _($, w);
    if (w === window && !R(w, Q ? "bubble" : "capture", C, M) && x(C, M)) {
      const Y = h[C];
      Y.delete(M), Y.size === 0 && (window.removeEventListener(C, y), h[C] = void 0);
    }
    T.has(M) && T.delete(M), T.size === 0 && $.delete(w), $.size === 0 && (window.removeEventListener(C, f, P === "capture"), c[P][C] = void 0);
  }
  return {
    on: E,
    off: k
  };
}
const { on: Pe, off: pe } = gs(), kn = "@@mmoContext", vs = {
  mounted(e, { value: n }) {
    e[kn] = {
      handler: void 0
    }, typeof n == "function" && (e[kn].handler = n, Pe("mousemoveoutside", e, n));
  },
  updated(e, { value: n }) {
    const t = e[kn];
    typeof n == "function" ? t.handler ? t.handler !== n && (pe("mousemoveoutside", e, t.handler), t.handler = n, Pe("mousemoveoutside", e, n)) : (e[kn].handler = n, Pe("mousemoveoutside", e, n)) : t.handler && (pe("mousemoveoutside", e, t.handler), t.handler = void 0);
  },
  unmounted(e) {
    const { handler: n } = e[kn];
    n && pe("mousemoveoutside", e, n), e[kn].handler = void 0;
  }
}, Bn = "@@coContext", Dt = {
  mounted(e, { value: n, modifiers: t }) {
    e[Bn] = {
      handler: void 0
    }, typeof n == "function" && (e[Bn].handler = n, Pe("clickoutside", e, n, {
      capture: t.capture
    }));
  },
  updated(e, { value: n, modifiers: t }) {
    const r = e[Bn];
    typeof n == "function" ? r.handler ? r.handler !== n && (pe("clickoutside", e, r.handler, {
      capture: t.capture
    }), r.handler = n, Pe("clickoutside", e, n, {
      capture: t.capture
    })) : (e[Bn].handler = n, Pe("clickoutside", e, n, {
      capture: t.capture
    })) : r.handler && (pe("clickoutside", e, r.handler, {
      capture: t.capture
    }), r.handler = void 0);
  },
  unmounted(e, { modifiers: n }) {
    const { handler: t } = e[Bn];
    t && pe("clickoutside", e, t, {
      capture: n.capture
    }), e[Bn].handler = void 0;
  }
};
function bs(e, n) {
  console.error(`[vdirs/${e}]: ${n}`);
}
class Cs {
  constructor() {
    this.elementZIndex = /* @__PURE__ */ new Map(), this.nextZIndex = 2e3;
  }
  get elementCount() {
    return this.elementZIndex.size;
  }
  ensureZIndex(n, t) {
    const { elementZIndex: r } = this;
    if (t !== void 0) {
      n.style.zIndex = `${t}`, r.delete(n);
      return;
    }
    const { nextZIndex: o } = this;
    r.has(n) && r.get(n) + 1 === this.nextZIndex || (n.style.zIndex = `${o}`, r.set(n, o), this.nextZIndex = o + 1, this.squashState());
  }
  unregister(n, t) {
    const { elementZIndex: r } = this;
    r.has(n) ? r.delete(n) : t === void 0 && bs("z-index-manager/unregister-element", "Element not found when unregistering."), this.squashState();
  }
  squashState() {
    const { elementCount: n } = this;
    n || (this.nextZIndex = 2e3), this.nextZIndex - n > 2500 && this.rearrange();
  }
  rearrange() {
    const n = Array.from(this.elementZIndex.entries());
    n.sort((t, r) => t[1] - r[1]), this.nextZIndex = 2e3, n.forEach((t) => {
      const r = t[0], o = this.nextZIndex++;
      `${o}` !== r.style.zIndex && (r.style.zIndex = `${o}`);
    });
  }
}
const br = new Cs(), Ln = "@@ziContext", Hi = {
  mounted(e, n) {
    const { value: t = {} } = n, { zIndex: r, enabled: o } = t;
    e[Ln] = {
      enabled: !!o,
      initialized: !1
    }, o && (br.ensureZIndex(e, r), e[Ln].initialized = !0);
  },
  updated(e, n) {
    const { value: t = {} } = n, { zIndex: r, enabled: o } = t, i = e[Ln].enabled;
    o && !i && (br.ensureZIndex(e, r), e[Ln].initialized = !0), e[Ln].enabled = !!o;
  },
  unmounted(e, n) {
    if (!e[Ln].initialized)
      return;
    const { value: t = {} } = n, { zIndex: r } = t;
    br.unregister(e, r);
  }
};
function ys(e) {
  const n = F(!!e.value);
  if (n.value)
    return Fr(n);
  const t = we(e, (r) => {
    r && (n.value = !0, t());
  });
  return Fr(n);
}
function Me(e) {
  const n = z(e), t = F(n.value);
  return we(n, (r) => {
    t.value = r;
  }), typeof e == "function" ? t : {
    __v_isRef: !0,
    get value() {
      return t.value;
    },
    set value(r) {
      e.set(r);
    }
  };
}
const Ss = typeof window < "u";
let Hn, tt;
const ws = () => {
  var e, n;
  Hn = Ss ? (n = (e = document) === null || e === void 0 ? void 0 : e.fonts) === null || n === void 0 ? void 0 : n.ready : void 0, tt = !1, Hn !== void 0 ? Hn.then(() => {
    tt = !0;
  }) : tt = !0;
};
ws();
function xs(e) {
  if (tt)
    return;
  let n = !1;
  Ie(() => {
    tt || Hn == null || Hn.then(() => {
      n || e();
    });
  }), Ne(() => {
    n = !0;
  });
}
function kr(e, n) {
  return we(e, (t) => {
    t !== void 0 && (n.value = t);
  }), z(() => e.value === void 0 ? n.value : e.value);
}
function jt() {
  const e = F(!1);
  return Ie(() => {
    e.value = !0;
  }), Fr(e);
}
function ji(e, n) {
  return z(() => {
    for (const t of n)
      if (e[t] !== void 0)
        return e[t];
    return e[n[n.length - 1]];
  });
}
const _s = (typeof window > "u" ? !1 : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
!window.MSStream;
function Ps() {
  return _s;
}
function Br(e, n, t = "default") {
  const r = n[t];
  if (r === void 0)
    throw new Error(`[vueuc/${e}]: slot[${t}] is empty.`);
  return r();
}
function Lr(e, n = !0, t = []) {
  return e.forEach((r) => {
    if (r !== null) {
      if (typeof r != "object") {
        (typeof r == "string" || typeof r == "number") && t.push(Mt(String(r)));
        return;
      }
      if (Array.isArray(r)) {
        Lr(r, n, t);
        return;
      }
      if (r.type === On) {
        if (r.children === null)
          return;
        Array.isArray(r.children) && Lr(r.children, n, t);
      } else r.type !== no && t.push(r);
    }
  }), t;
}
function Po(e, n, t = "default") {
  const r = n[t];
  if (r === void 0)
    throw new Error(`[vueuc/${e}]: slot[${t}] is empty.`);
  const o = Lr(r());
  if (o.length === 1)
    return o[0];
  throw new Error(`[vueuc/${e}]: slot[${t}] should have exactly one child.`);
}
let tn = null;
function Ui() {
  if (tn === null && (tn = document.getElementById("v-binder-view-measurer"), tn === null)) {
    tn = document.createElement("div"), tn.id = "v-binder-view-measurer";
    const { style: e } = tn;
    e.position = "fixed", e.left = "0", e.right = "0", e.top = "0", e.bottom = "0", e.pointerEvents = "none", e.visibility = "hidden", document.body.appendChild(tn);
  }
  return tn.getBoundingClientRect();
}
function Os(e, n) {
  const t = Ui();
  return {
    top: n,
    left: e,
    height: 0,
    width: 0,
    right: t.width - e,
    bottom: t.height - n
  };
}
function Cr(e) {
  const n = e.getBoundingClientRect(), t = Ui();
  return {
    left: n.left - t.left,
    top: n.top - t.top,
    bottom: t.height + t.top - n.bottom,
    right: t.width + t.left - n.right,
    width: n.width,
    height: n.height
  };
}
function Es(e) {
  return e.nodeType === 9 ? null : e.parentNode;
}
function Vi(e) {
  if (e === null)
    return null;
  const n = Es(e);
  if (n === null)
    return null;
  if (n.nodeType === 9)
    return document;
  if (n.nodeType === 1) {
    const { overflow: t, overflowX: r, overflowY: o } = getComputedStyle(n);
    if (/(auto|scroll|overlay)/.test(t + o + r))
      return n;
  }
  return Vi(n);
}
const Gi = oe({
  name: "Binder",
  props: {
    syncTargetWithParent: Boolean,
    syncTarget: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    var n;
    je("VBinder", (n = Ii()) === null || n === void 0 ? void 0 : n.proxy);
    const t = fe("VBinder", null), r = F(null), o = (p) => {
      r.value = p, t && e.syncTargetWithParent && t.setTargetRef(p);
    };
    let i = [];
    const a = () => {
      let p = r.value;
      for (; p = Vi(p), p !== null; )
        i.push(p);
      for (const _ of i)
        Pe("scroll", _, h, !0);
    }, l = () => {
      for (const p of i)
        pe("scroll", p, h, !0);
      i = [];
    }, s = /* @__PURE__ */ new Set(), u = (p) => {
      s.size === 0 && a(), s.has(p) || s.add(p);
    }, c = (p) => {
      s.has(p) && s.delete(p), s.size === 0 && l();
    }, h = () => {
      ki(m);
    }, m = () => {
      s.forEach((p) => p());
    }, v = /* @__PURE__ */ new Set(), f = (p) => {
      v.size === 0 && Pe("resize", window, b), v.has(p) || v.add(p);
    }, y = (p) => {
      v.has(p) && v.delete(p), v.size === 0 && pe("resize", window, b);
    }, b = () => {
      v.forEach((p) => p());
    };
    return Ne(() => {
      pe("resize", window, b), l();
    }), {
      targetRef: r,
      setTargetRef: o,
      addScrollListener: u,
      removeScrollListener: c,
      addResizeListener: f,
      removeResizeListener: y
    };
  },
  render() {
    return Br("binder", this.$slots);
  }
}), Ki = oe({
  name: "Target",
  setup() {
    const { setTargetRef: e, syncTarget: n } = fe("VBinder");
    return {
      syncTarget: n,
      setTargetDirective: {
        mounted: e,
        updated: e
      }
    };
  },
  render() {
    const { syncTarget: e, setTargetDirective: n } = this;
    return e ? ft(Po("follower", this.$slots), [
      [n]
    ]) : Po("follower", this.$slots);
  }
}), Ts = "@css-render/vue3-ssr";
function Rs(e, n) {
  return `<style cssr-id="${e}">
${n}
</style>`;
}
function Ms(e, n, t) {
  const { styles: r, ids: o } = t;
  o.has(e) || r !== null && (o.add(e), r.push(Rs(e, n)));
}
const As = typeof document < "u";
function En() {
  if (As)
    return;
  const e = fe(Ts, null);
  if (e !== null)
    return {
      adapter: (n, t) => Ms(n, t, e),
      context: e
    };
}
function Oo(e, n) {
  console.error(`[vueuc/${e}]: ${n}`);
}
function Is(e) {
  let n = 0;
  for (let t = 0; t < e.length; ++t)
    e[t] === "&" && ++n;
  return n;
}
const Xi = /\s*,(?![^(]*\))\s*/g, Ds = /\s+/g;
function $s(e, n) {
  const t = [];
  return n.split(Xi).forEach((r) => {
    let o = Is(r);
    if (o) {
      if (o === 1) {
        e.forEach((a) => {
          t.push(r.replace("&", a));
        });
        return;
      }
    } else {
      e.forEach((a) => {
        t.push(
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
      i.forEach((l) => {
        e.forEach((s) => {
          a.push(l.replace("&", s));
        });
      }), i = a;
    }
    i.forEach((a) => t.push(a));
  }), t;
}
function Fs(e, n) {
  const t = [];
  return n.split(Xi).forEach((r) => {
    e.forEach((o) => {
      t.push((o && o + " ") + r);
    });
  }), t;
}
function zs(e) {
  let n = [""];
  return e.forEach((t) => {
    t = t && t.trim(), // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    t && (t.includes("&") ? n = $s(n, t) : n = Fs(n, t));
  }), n.join(", ").replace(Ds, " ");
}
function Eo(e) {
  if (!e)
    return;
  const n = e.parentElement;
  n && n.removeChild(e);
}
function Ut(e, n) {
  return (n ?? document.head).querySelector(`style[cssr-id="${e}"]`);
}
function Ns(e) {
  const n = document.createElement("style");
  return n.setAttribute("cssr-id", e), n;
}
function Ct(e) {
  return e ? /^\s*@(s|m)/.test(e) : !1;
}
const ks = /[A-Z]/g;
function Ji(e) {
  return e.replace(ks, (n) => "-" + n.toLowerCase());
}
function Bs(e, n = "  ") {
  return typeof e == "object" && e !== null ? ` {
` + Object.entries(e).map((t) => n + `  ${Ji(t[0])}: ${t[1]};`).join(`
`) + `
` + n + "}" : `: ${e};`;
}
function Ls(e, n, t) {
  return typeof e == "function" ? e({
    context: n.context,
    props: t
  }) : e;
}
function To(e, n, t, r) {
  if (!n)
    return "";
  const o = Ls(n, t, r);
  if (!o)
    return "";
  if (typeof o == "string")
    return `${e} {
${o}
}`;
  const i = Object.keys(o);
  if (i.length === 0)
    return t.config.keepEmptyBlock ? e + ` {
}` : "";
  const a = e ? [
    e + " {"
  ] : [];
  return i.forEach((l) => {
    const s = o[l];
    if (l === "raw") {
      a.push(`
` + s + `
`);
      return;
    }
    l = Ji(l), s != null && a.push(`  ${l}${Bs(s)}`);
  }), e && a.push("}"), a.join(`
`);
}
function Wr(e, n, t) {
  e && e.forEach((r) => {
    if (Array.isArray(r))
      Wr(r, n, t);
    else if (typeof r == "function") {
      const o = r(n);
      Array.isArray(o) ? Wr(o, n, t) : o && t(o);
    } else r && t(r);
  });
}
function Yi(e, n, t, r, o) {
  const i = e.$;
  let a = "";
  if (!i || typeof i == "string")
    Ct(i) ? a = i : n.push(i);
  else if (typeof i == "function") {
    const u = i({
      context: r.context,
      props: o
    });
    Ct(u) ? a = u : n.push(u);
  } else if (i.before && i.before(r.context), !i.$ || typeof i.$ == "string")
    Ct(i.$) ? a = i.$ : n.push(i.$);
  else if (i.$) {
    const u = i.$({
      context: r.context,
      props: o
    });
    Ct(u) ? a = u : n.push(u);
  }
  const l = zs(n), s = To(l, e.props, r, o);
  a ? t.push(`${a} {`) : s.length && t.push(s), e.children && Wr(e.children, {
    context: r.context,
    props: o
  }, (u) => {
    if (typeof u == "string") {
      const c = To(l, { raw: u }, r, o);
      t.push(c);
    } else
      Yi(u, n, t, r, o);
  }), n.pop(), a && t.push("}"), i && i.after && i.after(r.context);
}
function Ws(e, n, t) {
  const r = [];
  return Yi(e, [], r, n, t), r.join(`

`);
}
function Hr(e) {
  for (var n = 0, t, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    t = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, n = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      n ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      n ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      n ^= e.charCodeAt(r) & 255, n = /* Math.imul(h, m): */
      (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16);
  }
  return n ^= n >>> 13, n = /* Math.imul(h, m): */
  (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), ((n ^ n >>> 15) >>> 0).toString(36);
}
typeof window < "u" && (window.__cssrContext = {});
function Hs(e, n, t, r) {
  const { els: o } = n;
  if (t === void 0)
    o.forEach(Eo), n.els = [];
  else {
    const i = Ut(t, r);
    i && o.includes(i) && (Eo(i), n.els = o.filter((a) => a !== i));
  }
}
function Ro(e, n) {
  e.push(n);
}
function js(e, n, t, r, o, i, a, l, s) {
  let u;
  if (t === void 0 && (u = n.render(r), t = Hr(u)), s) {
    s.adapter(t, u ?? n.render(r));
    return;
  }
  l === void 0 && (l = document.head);
  const c = Ut(t, l);
  if (c !== null && !i)
    return c;
  const h = c ?? Ns(t);
  if (u === void 0 && (u = n.render(r)), h.textContent = u, c !== null)
    return c;
  if (a) {
    const m = l.querySelector(`meta[name="${a}"]`);
    if (m)
      return l.insertBefore(h, m), Ro(n.els, h), h;
  }
  return o ? l.insertBefore(h, l.querySelector("style, link")) : l.appendChild(h), Ro(n.els, h), h;
}
function Us(e) {
  return Ws(this, this.instance, e);
}
function Vs(e = {}) {
  const { id: n, ssr: t, props: r, head: o = !1, force: i = !1, anchorMetaName: a, parent: l } = e;
  return js(this.instance, this, n, r, o, i, a, l, t);
}
function Gs(e = {}) {
  const { id: n, parent: t } = e;
  Hs(this.instance, this, n, t);
}
const yt = function(e, n, t, r) {
  return {
    instance: e,
    $: n,
    props: t,
    children: r,
    els: [],
    render: Us,
    mount: Vs,
    unmount: Gs
  };
}, Ks = function(e, n, t, r) {
  return Array.isArray(n) ? yt(e, { $: null }, null, n) : Array.isArray(t) ? yt(e, n, null, t) : Array.isArray(r) ? yt(e, n, t, r) : yt(e, n, t, null);
};
function qi(e = {}) {
  const n = {
    c: (...t) => Ks(n, ...t),
    use: (t, ...r) => t.install(n, ...r),
    find: Ut,
    context: {},
    config: e
  };
  return n;
}
function Xs(e, n) {
  if (e === void 0)
    return !1;
  if (n) {
    const { context: { ids: t } } = n;
    return t.has(e);
  }
  return Ut(e) !== null;
}
const { c: an } = qi(), oo = "vueuc-style";
function Mo(e) {
  return e & -e;
}
class Zi {
  /**
   * @param l length of the array
   * @param min min value of the array
   */
  constructor(n, t) {
    this.l = n, this.min = t;
    const r = new Array(n + 1);
    for (let o = 0; o < n + 1; ++o)
      r[o] = 0;
    this.ft = r;
  }
  /**
   * Add arr[i] by n, start from 0
   * @param i the index of the element to be added
   * @param n the value to be added
   */
  add(n, t) {
    if (t === 0)
      return;
    const { l: r, ft: o } = this;
    for (n += 1; n <= r; )
      o[n] += t, n += Mo(n);
  }
  /**
   * Get the value of index i
   * @param i index
   * @returns value of the index
   */
  get(n) {
    return this.sum(n + 1) - this.sum(n);
  }
  /**
   * Get the sum of first i elements
   * @param i count of head elements to be added
   * @returns the sum of first i elements
   */
  sum(n) {
    if (n === void 0 && (n = this.l), n <= 0)
      return 0;
    const { ft: t, min: r, l: o } = this;
    if (n > o)
      throw new Error("[FinweckTree.sum]: `i` is larger than length.");
    let i = n * r;
    for (; n > 0; )
      i += t[n], n -= Mo(n);
    return i;
  }
  /**
   * Get the largest count of head elements whose sum are <= threshold
   * @param threshold
   * @returns the largest count of head elements whose sum are <= threshold
   */
  getBound(n) {
    let t = 0, r = this.l;
    for (; r > t; ) {
      const o = Math.floor((t + r) / 2), i = this.sum(o);
      if (i > n) {
        r = o;
        continue;
      } else if (i < n) {
        if (t === o)
          return this.sum(t + 1) <= n ? t + 1 : o;
        t = o;
      } else
        return o;
    }
    return t;
  }
}
function Ao(e) {
  return typeof e == "string" ? document.querySelector(e) : e();
}
const Js = oe({
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
      showTeleport: ys(le(e, "show")),
      mergedTo: z(() => {
        const { to: n } = e;
        return n ?? "body";
      })
    };
  },
  render() {
    return this.showTeleport ? this.disabled ? Br("lazy-teleport", this.$slots) : g(vl, {
      disabled: this.disabled,
      to: this.mergedTo
    }, Br("lazy-teleport", this.$slots)) : null;
  }
}), St = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Io = {
  start: "end",
  center: "center",
  end: "start"
}, yr = {
  top: "height",
  bottom: "height",
  left: "width",
  right: "width"
}, Ys = {
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
}, qs = {
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
}, Zs = {
  "bottom-start": "right",
  "bottom-end": "left",
  "top-start": "right",
  "top-end": "left",
  "right-start": "bottom",
  "right-end": "top",
  "left-start": "bottom",
  "left-end": "top"
}, Do = {
  top: !0,
  bottom: !1,
  left: !0,
  right: !1
  // left--
}, $o = {
  top: "end",
  bottom: "start",
  left: "end",
  right: "start"
};
function Qs(e, n, t, r, o, i) {
  if (!o || i)
    return { placement: e, top: 0, left: 0 };
  const [a, l] = e.split("-");
  let s = l ?? "center", u = {
    top: 0,
    left: 0
  };
  const c = (v, f, y) => {
    let b = 0, p = 0;
    const _ = t[v] - n[f] - n[v];
    return _ > 0 && r && (y ? p = Do[f] ? _ : -_ : b = Do[f] ? _ : -_), {
      left: b,
      top: p
    };
  }, h = a === "left" || a === "right";
  if (s !== "center") {
    const v = Zs[e], f = St[v], y = yr[v];
    if (t[y] > n[y]) {
      if (
        // current space is not enough
        // ----------[ target ]---------|
        // -------[     follower        ]
        n[v] + n[y] < t[y]
      ) {
        const b = (t[y] - n[y]) / 2;
        n[v] < b || n[f] < b ? n[v] < n[f] ? (s = Io[l], u = c(y, f, h)) : u = c(y, v, h) : s = "center";
      }
    } else t[y] < n[y] && n[f] < 0 && // opposite align has larger space
    // ------------[   target   ]
    // ----------------[follower]
    n[v] > n[f] && (s = Io[l]);
  } else {
    const v = a === "bottom" || a === "top" ? "left" : "top", f = St[v], y = yr[v], b = (t[y] - n[y]) / 2;
    // center is not enough
    // ----------- [ target ]--|
    // -------[     follower     ]
    (n[v] < b || n[f] < b) && (n[v] > n[f] ? (s = $o[v], u = c(y, v, h)) : (s = $o[f], u = c(y, f, h)));
  }
  let m = a;
  return (
    // space is not enough
    n[a] < t[yr[a]] && // opposite position's space is larger
    n[a] < n[St[a]] && (m = St[a]), {
      placement: s !== "center" ? `${m}-${s}` : m,
      left: u.left,
      top: u.top
    }
  );
}
function eu(e, n) {
  return n ? qs[e] : Ys[e];
}
function nu(e, n, t, r, o, i) {
  if (i)
    switch (e) {
      case "bottom-start":
        return {
          top: `${Math.round(t.top - n.top + t.height)}px`,
          left: `${Math.round(t.left - n.left)}px`,
          transform: "translateY(-100%)"
        };
      case "bottom-end":
        return {
          top: `${Math.round(t.top - n.top + t.height)}px`,
          left: `${Math.round(t.left - n.left + t.width)}px`,
          transform: "translateX(-100%) translateY(-100%)"
        };
      case "top-start":
        return {
          top: `${Math.round(t.top - n.top)}px`,
          left: `${Math.round(t.left - n.left)}px`,
          transform: ""
        };
      case "top-end":
        return {
          top: `${Math.round(t.top - n.top)}px`,
          left: `${Math.round(t.left - n.left + t.width)}px`,
          transform: "translateX(-100%)"
        };
      case "right-start":
        return {
          top: `${Math.round(t.top - n.top)}px`,
          left: `${Math.round(t.left - n.left + t.width)}px`,
          transform: "translateX(-100%)"
        };
      case "right-end":
        return {
          top: `${Math.round(t.top - n.top + t.height)}px`,
          left: `${Math.round(t.left - n.left + t.width)}px`,
          transform: "translateX(-100%) translateY(-100%)"
        };
      case "left-start":
        return {
          top: `${Math.round(t.top - n.top)}px`,
          left: `${Math.round(t.left - n.left)}px`,
          transform: ""
        };
      case "left-end":
        return {
          top: `${Math.round(t.top - n.top + t.height)}px`,
          left: `${Math.round(t.left - n.left)}px`,
          transform: "translateY(-100%)"
        };
      case "top":
        return {
          top: `${Math.round(t.top - n.top)}px`,
          left: `${Math.round(t.left - n.left + t.width / 2)}px`,
          transform: "translateX(-50%)"
        };
      case "right":
        return {
          top: `${Math.round(t.top - n.top + t.height / 2)}px`,
          left: `${Math.round(t.left - n.left + t.width)}px`,
          transform: "translateX(-100%) translateY(-50%)"
        };
      case "left":
        return {
          top: `${Math.round(t.top - n.top + t.height / 2)}px`,
          left: `${Math.round(t.left - n.left)}px`,
          transform: "translateY(-50%)"
        };
      case "bottom":
      default:
        return {
          top: `${Math.round(t.top - n.top + t.height)}px`,
          left: `${Math.round(t.left - n.left + t.width / 2)}px`,
          transform: "translateX(-50%) translateY(-100%)"
        };
    }
  switch (e) {
    case "bottom-start":
      return {
        top: `${Math.round(t.top - n.top + t.height + r)}px`,
        left: `${Math.round(t.left - n.left + o)}px`,
        transform: ""
      };
    case "bottom-end":
      return {
        top: `${Math.round(t.top - n.top + t.height + r)}px`,
        left: `${Math.round(t.left - n.left + t.width + o)}px`,
        transform: "translateX(-100%)"
      };
    case "top-start":
      return {
        top: `${Math.round(t.top - n.top + r)}px`,
        left: `${Math.round(t.left - n.left + o)}px`,
        transform: "translateY(-100%)"
      };
    case "top-end":
      return {
        top: `${Math.round(t.top - n.top + r)}px`,
        left: `${Math.round(t.left - n.left + t.width + o)}px`,
        transform: "translateX(-100%) translateY(-100%)"
      };
    case "right-start":
      return {
        top: `${Math.round(t.top - n.top + r)}px`,
        left: `${Math.round(t.left - n.left + t.width + o)}px`,
        transform: ""
      };
    case "right-end":
      return {
        top: `${Math.round(t.top - n.top + t.height + r)}px`,
        left: `${Math.round(t.left - n.left + t.width + o)}px`,
        transform: "translateY(-100%)"
      };
    case "left-start":
      return {
        top: `${Math.round(t.top - n.top + r)}px`,
        left: `${Math.round(t.left - n.left + o)}px`,
        transform: "translateX(-100%)"
      };
    case "left-end":
      return {
        top: `${Math.round(t.top - n.top + t.height + r)}px`,
        left: `${Math.round(t.left - n.left + o)}px`,
        transform: "translateX(-100%) translateY(-100%)"
      };
    case "top":
      return {
        top: `${Math.round(t.top - n.top + r)}px`,
        left: `${Math.round(t.left - n.left + t.width / 2 + o)}px`,
        transform: "translateY(-100%) translateX(-50%)"
      };
    case "right":
      return {
        top: `${Math.round(t.top - n.top + t.height / 2 + r)}px`,
        left: `${Math.round(t.left - n.left + t.width + o)}px`,
        transform: "translateY(-50%)"
      };
    case "left":
      return {
        top: `${Math.round(t.top - n.top + t.height / 2 + r)}px`,
        left: `${Math.round(t.left - n.left + o)}px`,
        transform: "translateY(-50%) translateX(-100%)"
      };
    case "bottom":
    default:
      return {
        top: `${Math.round(t.top - n.top + t.height + r)}px`,
        left: `${Math.round(t.left - n.left + t.width / 2 + o)}px`,
        transform: "translateX(-50%)"
      };
  }
}
const tu = an([
  an(".v-binder-follower-container", {
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    height: "0",
    pointerEvents: "none",
    zIndex: "auto"
  }),
  an(".v-binder-follower-content", {
    position: "absolute",
    zIndex: "auto"
  }, [
    an("> *", {
      pointerEvents: "all"
    })
  ])
]), Qi = oe({
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
    const n = fe("VBinder"), t = Me(() => e.enabled !== void 0 ? e.enabled : e.show), r = F(null), o = F(null), i = () => {
      const { syncTrigger: m } = e;
      m.includes("scroll") && n.addScrollListener(s), m.includes("resize") && n.addResizeListener(s);
    }, a = () => {
      n.removeScrollListener(s), n.removeResizeListener(s);
    };
    Ie(() => {
      t.value && (s(), i());
    });
    const l = En();
    tu.mount({
      id: "vueuc/binder",
      head: !0,
      anchorMetaName: oo,
      ssr: l
    }), Ne(() => {
      a();
    }), xs(() => {
      t.value && s();
    });
    const s = () => {
      if (!t.value)
        return;
      const m = r.value;
      if (m === null)
        return;
      const v = n.targetRef, { x: f, y, overlap: b } = e, p = f !== void 0 && y !== void 0 ? Os(f, y) : Cr(v);
      m.style.setProperty("--v-target-width", `${Math.round(p.width)}px`), m.style.setProperty("--v-target-height", `${Math.round(p.height)}px`);
      const { width: _, minWidth: R, placement: x, internalShift: E, flip: k } = e;
      m.setAttribute("v-placement", x), b ? m.setAttribute("v-overlap", "") : m.removeAttribute("v-overlap");
      const { style: C } = m;
      _ === "target" ? C.width = `${p.width}px` : _ !== void 0 ? C.width = _ : C.width = "", R === "target" ? C.minWidth = `${p.width}px` : R !== void 0 ? C.minWidth = R : C.minWidth = "";
      const w = Cr(m), M = Cr(o.value), { left: O, top: j, placement: Q } = Qs(x, p, w, E, k, b), P = eu(Q, b), { left: $, top: T, transform: L } = nu(Q, M, p, j, O, b);
      m.setAttribute("v-placement", Q), m.style.setProperty("--v-offset-left", `${Math.round(O)}px`), m.style.setProperty("--v-offset-top", `${Math.round(j)}px`), m.style.transform = `translateX(${$}) translateY(${T}) ${L}`, m.style.setProperty("--v-transform-origin", P), m.style.transformOrigin = P;
    };
    we(t, (m) => {
      m ? (i(), u()) : a();
    });
    const u = () => {
      Wt().then(s).catch((m) => console.error(m));
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
      we(le(e, m), s);
    }), ["teleportDisabled"].forEach((m) => {
      we(le(e, m), u);
    }), we(le(e, "syncTrigger"), (m) => {
      m.includes("resize") ? n.addResizeListener(s) : n.removeResizeListener(s), m.includes("scroll") ? n.addScrollListener(s) : n.removeScrollListener(s);
    });
    const c = jt(), h = Me(() => {
      const { to: m } = e;
      if (m !== void 0)
        return m;
      c.value;
    });
    return {
      VBinder: n,
      mergedEnabled: t,
      offsetContainerRef: o,
      followerRef: r,
      mergedTo: h,
      syncPosition: s
    };
  },
  render() {
    return g(Js, {
      show: this.show,
      to: this.mergedTo,
      disabled: this.teleportDisabled
    }, {
      default: () => {
        var e, n;
        const t = g("div", {
          class: ["v-binder-follower-container", this.containerClass],
          ref: "offsetContainerRef"
        }, [
          g("div", {
            class: "v-binder-follower-content",
            ref: "followerRef"
          }, (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e))
        ]);
        return this.zindexable ? ft(t, [
          [
            Hi,
            {
              enabled: this.mergedEnabled,
              zIndex: this.zIndex
            }
          ]
        ]) : t;
      }
    });
  }
});
var Sn = [], ru = function() {
  return Sn.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, ou = function() {
  return Sn.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, Fo = "ResizeObserver loop completed with undelivered notifications.", iu = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: Fo
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = Fo), window.dispatchEvent(e);
}, st;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(st || (st = {}));
var wn = function(e) {
  return Object.freeze(e);
}, au = /* @__PURE__ */ function() {
  function e(n, t) {
    this.inlineSize = n, this.blockSize = t, wn(this);
  }
  return e;
}(), ea = function() {
  function e(n, t, r, o) {
    return this.x = n, this.y = t, this.width = r, this.height = o, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, wn(this);
  }
  return e.prototype.toJSON = function() {
    var n = this, t = n.x, r = n.y, o = n.top, i = n.right, a = n.bottom, l = n.left, s = n.width, u = n.height;
    return { x: t, y: r, top: o, right: i, bottom: a, left: l, width: s, height: u };
  }, e.fromRect = function(n) {
    return new e(n.x, n.y, n.width, n.height);
  }, e;
}(), io = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, na = function(e) {
  if (io(e)) {
    var n = e.getBBox(), t = n.width, r = n.height;
    return !t && !r;
  }
  var o = e, i = o.offsetWidth, a = o.offsetHeight;
  return !(i || a || e.getClientRects().length);
}, zo = function(e) {
  var n;
  if (e instanceof Element)
    return !0;
  var t = (n = e == null ? void 0 : e.ownerDocument) === null || n === void 0 ? void 0 : n.defaultView;
  return !!(t && e instanceof t.Element);
}, lu = function(e) {
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
}, rt = typeof window < "u" ? window : {}, wt = /* @__PURE__ */ new WeakMap(), No = /auto|scroll/, su = /^tb|vertical/, uu = /msie|trident/i.test(rt.navigator && rt.navigator.userAgent), He = function(e) {
  return parseFloat(e || "0");
}, jn = function(e, n, t) {
  return e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = !1), new au((t ? n : e) || 0, (t ? e : n) || 0);
}, ko = wn({
  devicePixelContentBoxSize: jn(),
  borderBoxSize: jn(),
  contentBoxSize: jn(),
  contentRect: new ea(0, 0, 0, 0)
}), ta = function(e, n) {
  if (n === void 0 && (n = !1), wt.has(e) && !n)
    return wt.get(e);
  if (na(e))
    return wt.set(e, ko), ko;
  var t = getComputedStyle(e), r = io(e) && e.ownerSVGElement && e.getBBox(), o = !uu && t.boxSizing === "border-box", i = su.test(t.writingMode || ""), a = !r && No.test(t.overflowY || ""), l = !r && No.test(t.overflowX || ""), s = r ? 0 : He(t.paddingTop), u = r ? 0 : He(t.paddingRight), c = r ? 0 : He(t.paddingBottom), h = r ? 0 : He(t.paddingLeft), m = r ? 0 : He(t.borderTopWidth), v = r ? 0 : He(t.borderRightWidth), f = r ? 0 : He(t.borderBottomWidth), y = r ? 0 : He(t.borderLeftWidth), b = h + u, p = s + c, _ = y + v, R = m + f, x = l ? e.offsetHeight - R - e.clientHeight : 0, E = a ? e.offsetWidth - _ - e.clientWidth : 0, k = o ? b + _ : 0, C = o ? p + R : 0, w = r ? r.width : He(t.width) - k - E, M = r ? r.height : He(t.height) - C - x, O = w + b + E + _, j = M + p + x + R, Q = wn({
    devicePixelContentBoxSize: jn(Math.round(w * devicePixelRatio), Math.round(M * devicePixelRatio), i),
    borderBoxSize: jn(O, j, i),
    contentBoxSize: jn(w, M, i),
    contentRect: new ea(h, s, w, M)
  });
  return wt.set(e, Q), Q;
}, ra = function(e, n, t) {
  var r = ta(e, t), o = r.borderBoxSize, i = r.contentBoxSize, a = r.devicePixelContentBoxSize;
  switch (n) {
    case st.DEVICE_PIXEL_CONTENT_BOX:
      return a;
    case st.BORDER_BOX:
      return o;
    default:
      return i;
  }
}, du = /* @__PURE__ */ function() {
  function e(n) {
    var t = ta(n);
    this.target = n, this.contentRect = t.contentRect, this.borderBoxSize = wn([t.borderBoxSize]), this.contentBoxSize = wn([t.contentBoxSize]), this.devicePixelContentBoxSize = wn([t.devicePixelContentBoxSize]);
  }
  return e;
}(), oa = function(e) {
  if (na(e))
    return 1 / 0;
  for (var n = 0, t = e.parentNode; t; )
    n += 1, t = t.parentNode;
  return n;
}, cu = function() {
  var e = 1 / 0, n = [];
  Sn.forEach(function(a) {
    if (a.activeTargets.length !== 0) {
      var l = [];
      a.activeTargets.forEach(function(u) {
        var c = new du(u.target), h = oa(u.target);
        l.push(c), u.lastReportedSize = ra(u.target, u.observedBox), h < e && (e = h);
      }), n.push(function() {
        a.callback.call(a.observer, l, a.observer);
      }), a.activeTargets.splice(0, a.activeTargets.length);
    }
  });
  for (var t = 0, r = n; t < r.length; t++) {
    var o = r[t];
    o();
  }
  return e;
}, Bo = function(e) {
  Sn.forEach(function(t) {
    t.activeTargets.splice(0, t.activeTargets.length), t.skippedTargets.splice(0, t.skippedTargets.length), t.observationTargets.forEach(function(o) {
      o.isActive() && (oa(o.target) > e ? t.activeTargets.push(o) : t.skippedTargets.push(o));
    });
  });
}, fu = function() {
  var e = 0;
  for (Bo(e); ru(); )
    e = cu(), Bo(e);
  return ou() && iu(), e > 0;
}, Sr, ia = [], hu = function() {
  return ia.splice(0).forEach(function(e) {
    return e();
  });
}, pu = function(e) {
  if (!Sr) {
    var n = 0, t = document.createTextNode(""), r = { characterData: !0 };
    new MutationObserver(function() {
      return hu();
    }).observe(t, r), Sr = function() {
      t.textContent = "".concat(n ? n-- : n++);
    };
  }
  ia.push(e), Sr();
}, mu = function(e) {
  pu(function() {
    requestAnimationFrame(e);
  });
}, Rt = 0, gu = function() {
  return !!Rt;
}, vu = 250, bu = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Lo = [
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
], Wo = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, wr = !1, Cu = function() {
  function e() {
    var n = this;
    this.stopped = !0, this.listener = function() {
      return n.schedule();
    };
  }
  return e.prototype.run = function(n) {
    var t = this;
    if (n === void 0 && (n = vu), !wr) {
      wr = !0;
      var r = Wo(n);
      mu(function() {
        var o = !1;
        try {
          o = fu();
        } finally {
          if (wr = !1, n = r - Wo(), !gu())
            return;
          o ? t.run(1e3) : n > 0 ? t.run(n) : t.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var n = this, t = function() {
      return n.observer && n.observer.observe(document.body, bu);
    };
    document.body ? t() : rt.addEventListener("DOMContentLoaded", t);
  }, e.prototype.start = function() {
    var n = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Lo.forEach(function(t) {
      return rt.addEventListener(t, n.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var n = this;
    this.stopped || (this.observer && this.observer.disconnect(), Lo.forEach(function(t) {
      return rt.removeEventListener(t, n.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), jr = new Cu(), Ho = function(e) {
  !Rt && e > 0 && jr.start(), Rt += e, !Rt && jr.stop();
}, yu = function(e) {
  return !io(e) && !lu(e) && getComputedStyle(e).display === "inline";
}, Su = function() {
  function e(n, t) {
    this.target = n, this.observedBox = t || st.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var n = ra(this.target, this.observedBox, !0);
    return yu(this.target) && (this.lastReportedSize = n), this.lastReportedSize.inlineSize !== n.inlineSize || this.lastReportedSize.blockSize !== n.blockSize;
  }, e;
}(), wu = /* @__PURE__ */ function() {
  function e(n, t) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = n, this.callback = t;
  }
  return e;
}(), xt = /* @__PURE__ */ new WeakMap(), jo = function(e, n) {
  for (var t = 0; t < e.length; t += 1)
    if (e[t].target === n)
      return t;
  return -1;
}, _t = function() {
  function e() {
  }
  return e.connect = function(n, t) {
    var r = new wu(n, t);
    xt.set(n, r);
  }, e.observe = function(n, t, r) {
    var o = xt.get(n), i = o.observationTargets.length === 0;
    jo(o.observationTargets, t) < 0 && (i && Sn.push(o), o.observationTargets.push(new Su(t, r && r.box)), Ho(1), jr.schedule());
  }, e.unobserve = function(n, t) {
    var r = xt.get(n), o = jo(r.observationTargets, t), i = r.observationTargets.length === 1;
    o >= 0 && (i && Sn.splice(Sn.indexOf(r), 1), r.observationTargets.splice(o, 1), Ho(-1));
  }, e.disconnect = function(n) {
    var t = this, r = xt.get(n);
    r.observationTargets.slice().forEach(function(o) {
      return t.unobserve(n, o.target);
    }), r.activeTargets.splice(0, r.activeTargets.length);
  }, e;
}(), xu = function() {
  function e(n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof n != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    _t.connect(this, n);
  }
  return e.prototype.observe = function(n, t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!zo(n))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    _t.observe(this, n, t);
  }, e.prototype.unobserve = function(n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!zo(n))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    _t.unobserve(this, n);
  }, e.prototype.disconnect = function() {
    _t.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
class _u {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || xu)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
  }
  handleResize(n) {
    for (const t of n) {
      const r = this.elHandlersMap.get(t.target);
      r !== void 0 && r(t);
    }
  }
  registerHandler(n, t) {
    this.elHandlersMap.set(n, t), this.observer.observe(n);
  }
  unregisterHandler(n) {
    this.elHandlersMap.has(n) && (this.elHandlersMap.delete(n), this.observer.unobserve(n));
  }
}
const ot = new _u(), $t = oe({
  name: "ResizeObserver",
  props: {
    onResize: Function
  },
  setup(e) {
    let n = !1;
    const t = Ii().proxy;
    function r(o) {
      const { onResize: i } = e;
      i !== void 0 && i(o);
    }
    Ie(() => {
      const o = t.$el;
      if (o === void 0) {
        Oo("resize-observer", "$el does not exist.");
        return;
      }
      if (o.nextElementSibling !== o.nextSibling && o.nodeType === 3 && o.nodeValue !== "") {
        Oo("resize-observer", "$el can not be observed (it may be a text node).");
        return;
      }
      o.nextElementSibling !== null && (ot.registerHandler(o.nextElementSibling, r), n = !0);
    }), Ne(() => {
      n && ot.unregisterHandler(t.$el.nextElementSibling);
    });
  },
  render() {
    return Di(this.$slots, "default");
  }
});
let Pt;
function Pu() {
  return typeof document > "u" ? !1 : (Pt === void 0 && ("matchMedia" in window ? Pt = window.matchMedia("(pointer:coarse)").matches : Pt = !1), Pt);
}
let xr;
function Uo() {
  return typeof document > "u" ? 1 : (xr === void 0 && (xr = "chrome" in window ? window.devicePixelRatio : 1), xr);
}
const aa = "VVirtualListXScroll";
function Ou({ columnsRef: e, renderColRef: n, renderItemWithColsRef: t }) {
  const r = F(0), o = F(0), i = z(() => {
    const u = e.value;
    if (u.length === 0)
      return null;
    const c = new Zi(u.length, 0);
    return u.forEach((h, m) => {
      c.add(m, h.width);
    }), c;
  }), a = Me(() => {
    const u = i.value;
    return u !== null ? Math.max(u.getBound(o.value) - 1, 0) : 0;
  }), l = (u) => {
    const c = i.value;
    return c !== null ? c.sum(u) : 0;
  }, s = Me(() => {
    const u = i.value;
    return u !== null ? Math.min(u.getBound(o.value + r.value) + 1, e.value.length - 1) : 0;
  });
  return je(aa, {
    startIndexRef: a,
    endIndexRef: s,
    columnsRef: e,
    renderColRef: n,
    renderItemWithColsRef: t,
    getLeft: l
  }), {
    listWidthRef: r,
    scrollLeftRef: o
  };
}
const Vo = oe({
  name: "VirtualListRow",
  props: {
    index: { type: Number, required: !0 },
    item: {
      type: Object,
      required: !0
    }
  },
  setup() {
    const { startIndexRef: e, endIndexRef: n, columnsRef: t, getLeft: r, renderColRef: o, renderItemWithColsRef: i } = (
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      fe(aa)
    );
    return {
      startIndex: e,
      endIndex: n,
      columns: t,
      renderCol: o,
      renderItemWithCols: i,
      getLeft: r
    };
  },
  render() {
    const { startIndex: e, endIndex: n, columns: t, renderCol: r, renderItemWithCols: o, getLeft: i, item: a } = this;
    if (o != null)
      return o({
        itemIndex: this.index,
        startColIndex: e,
        endColIndex: n,
        allColumns: t,
        item: a,
        getLeft: i
      });
    if (r != null) {
      const l = [];
      for (let s = e; s <= n; ++s) {
        const u = t[s];
        l.push(r({ column: u, left: i(s), item: a }));
      }
      return l;
    }
    return null;
  }
}), Eu = an(".v-vl", {
  maxHeight: "inherit",
  height: "100%",
  overflow: "auto",
  minWidth: "1px"
  // a zero width container won't be scrollable
}, [
  an("&:not(.v-vl--show-scrollbar)", {
    scrollbarWidth: "none"
  }, [
    an("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", {
      width: 0,
      height: 0,
      display: "none"
    })
  ])
]), Tu = oe({
  name: "VirtualList",
  inheritAttrs: !1,
  props: {
    showScrollbar: {
      type: Boolean,
      default: !0
    },
    columns: {
      type: Array,
      default: () => []
    },
    renderCol: Function,
    renderItemWithCols: Function,
    items: {
      type: Array,
      default: () => []
    },
    // it is suppose to be the min height
    itemSize: {
      type: Number,
      required: !0
    },
    itemResizable: Boolean,
    itemsStyle: [String, Object],
    visibleItemsTag: {
      type: [String, Object],
      default: "div"
    },
    visibleItemsProps: Object,
    ignoreItemResize: Boolean,
    onScroll: Function,
    onWheel: Function,
    onResize: Function,
    defaultScrollKey: [Number, String],
    defaultScrollIndex: Number,
    keyField: {
      type: String,
      default: "key"
    },
    // Whether it is a good API?
    // ResizeObserver + footer & header is not enough.
    // Too complex for simple case
    paddingTop: {
      type: [Number, String],
      default: 0
    },
    paddingBottom: {
      type: [Number, String],
      default: 0
    }
  },
  setup(e) {
    const n = En();
    Eu.mount({
      id: "vueuc/virtual-list",
      head: !0,
      anchorMetaName: oo,
      ssr: n
    }), Ie(() => {
      const { defaultScrollIndex: P, defaultScrollKey: $ } = e;
      P != null ? b({ index: P }) : $ != null && b({ key: $ });
    });
    let t = !1, r = !1;
    $i(() => {
      if (t = !1, !r) {
        r = !0;
        return;
      }
      b({ top: v.value, left: a.value });
    }), Fi(() => {
      t = !0, r || (r = !0);
    });
    const o = Me(() => {
      if (e.renderCol == null && e.renderItemWithCols == null || e.columns.length === 0)
        return;
      let P = 0;
      return e.columns.forEach(($) => {
        P += $.width;
      }), P;
    }), i = z(() => {
      const P = /* @__PURE__ */ new Map(), { keyField: $ } = e;
      return e.items.forEach((T, L) => {
        P.set(T[$], L);
      }), P;
    }), { scrollLeftRef: a, listWidthRef: l } = Ou({
      columnsRef: le(e, "columns"),
      renderColRef: le(e, "renderCol"),
      renderItemWithColsRef: le(e, "renderItemWithCols")
    }), s = F(null), u = F(void 0), c = /* @__PURE__ */ new Map(), h = z(() => {
      const { items: P, itemSize: $, keyField: T } = e, L = new Zi(P.length, $);
      return P.forEach((Y, Z) => {
        const ee = Y[T], X = c.get(ee);
        X !== void 0 && L.add(Z, X);
      }), L;
    }), m = F(0), v = F(0), f = Me(() => Math.max(h.value.getBound(v.value - lt(e.paddingTop)) - 1, 0)), y = z(() => {
      const { value: P } = u;
      if (P === void 0)
        return [];
      const { items: $, itemSize: T } = e, L = f.value, Y = Math.min(L + Math.ceil(P / T + 1), $.length - 1), Z = [];
      for (let ee = L; ee <= Y; ++ee)
        Z.push($[ee]);
      return Z;
    }), b = (P, $) => {
      if (typeof P == "number") {
        x(P, $, "auto");
        return;
      }
      const { left: T, top: L, index: Y, key: Z, position: ee, behavior: X, debounce: ie = !0 } = P;
      if (T !== void 0 || L !== void 0)
        x(T, L, X);
      else if (Y !== void 0)
        R(Y, X, ie);
      else if (Z !== void 0) {
        const I = i.value.get(Z);
        I !== void 0 && R(I, X, ie);
      } else ee === "bottom" ? x(0, Number.MAX_SAFE_INTEGER, X) : ee === "top" && x(0, 0, X);
    };
    let p, _ = null;
    function R(P, $, T) {
      const { value: L } = h, Y = L.sum(P) + lt(e.paddingTop);
      if (!T)
        s.value.scrollTo({
          left: 0,
          top: Y,
          behavior: $
        });
      else {
        p = P, _ !== null && window.clearTimeout(_), _ = window.setTimeout(() => {
          p = void 0, _ = null;
        }, 16);
        const { scrollTop: Z, offsetHeight: ee } = s.value;
        if (Y > Z) {
          const X = L.get(P);
          Y + X <= Z + ee || s.value.scrollTo({
            left: 0,
            top: Y + X - ee,
            behavior: $
          });
        } else
          s.value.scrollTo({
            left: 0,
            top: Y,
            behavior: $
          });
      }
    }
    function x(P, $, T) {
      s.value.scrollTo({
        left: P,
        top: $,
        behavior: T
      });
    }
    function E(P, $) {
      var T, L, Y;
      if (t || e.ignoreItemResize || Q($.target))
        return;
      const { value: Z } = h, ee = i.value.get(P), X = Z.get(ee), ie = (Y = (L = (T = $.borderBoxSize) === null || T === void 0 ? void 0 : T[0]) === null || L === void 0 ? void 0 : L.blockSize) !== null && Y !== void 0 ? Y : $.contentRect.height;
      if (ie === X)
        return;
      ie - e.itemSize === 0 ? c.delete(P) : c.set(P, ie - e.itemSize);
      const N = ie - X;
      if (N === 0)
        return;
      Z.add(ee, N);
      const re = s.value;
      if (re != null) {
        if (p === void 0) {
          const ge = Z.sum(ee);
          re.scrollTop > ge && re.scrollBy(0, N);
        } else if (ee < p)
          re.scrollBy(0, N);
        else if (ee === p) {
          const ge = Z.sum(ee);
          ie + ge > // Note, listEl shouldn't have border, nor offsetHeight won't be
          // correct
          re.scrollTop + re.offsetHeight && re.scrollBy(0, N);
        }
        j();
      }
      m.value++;
    }
    const k = !Pu();
    let C = !1;
    function w(P) {
      var $;
      ($ = e.onScroll) === null || $ === void 0 || $.call(e, P), (!k || !C) && j();
    }
    function M(P) {
      var $;
      if (($ = e.onWheel) === null || $ === void 0 || $.call(e, P), k) {
        const T = s.value;
        if (T != null) {
          if (P.deltaX === 0 && (T.scrollTop === 0 && P.deltaY <= 0 || T.scrollTop + T.offsetHeight >= T.scrollHeight && P.deltaY >= 0))
            return;
          P.preventDefault(), T.scrollTop += P.deltaY / Uo(), T.scrollLeft += P.deltaX / Uo(), j(), C = !0, ki(() => {
            C = !1;
          });
        }
      }
    }
    function O(P) {
      if (t || Q(P.target))
        return;
      if (e.renderCol == null && e.renderItemWithCols == null) {
        if (P.contentRect.height === u.value)
          return;
      } else if (P.contentRect.height === u.value && P.contentRect.width === l.value)
        return;
      u.value = P.contentRect.height, l.value = P.contentRect.width;
      const { onResize: $ } = e;
      $ !== void 0 && $(P);
    }
    function j() {
      const { value: P } = s;
      P != null && (v.value = P.scrollTop, a.value = P.scrollLeft);
    }
    function Q(P) {
      let $ = P;
      for (; $ !== null; ) {
        if ($.style.display === "none")
          return !0;
        $ = $.parentElement;
      }
      return !1;
    }
    return {
      listHeight: u,
      listStyle: {
        overflow: "auto"
      },
      keyToIndex: i,
      itemsStyle: z(() => {
        const { itemResizable: P } = e, $ = Jn(h.value.sum());
        return m.value, [
          e.itemsStyle,
          {
            boxSizing: "content-box",
            width: Jn(o.value),
            height: P ? "" : $,
            minHeight: P ? $ : "",
            paddingTop: Jn(e.paddingTop),
            paddingBottom: Jn(e.paddingBottom)
          }
        ];
      }),
      visibleItemsStyle: z(() => (m.value, {
        transform: `translateY(${Jn(h.value.sum(f.value))})`
      })),
      viewportItems: y,
      listElRef: s,
      itemsElRef: F(null),
      scrollTo: b,
      handleListResize: O,
      handleListScroll: w,
      handleListWheel: M,
      handleItemResize: E
    };
  },
  render() {
    const { itemResizable: e, keyField: n, keyToIndex: t, visibleItemsTag: r } = this;
    return g($t, {
      onResize: this.handleListResize
    }, {
      default: () => {
        var o, i;
        return g("div", Ht(this.$attrs, {
          class: ["v-vl", this.showScrollbar && "v-vl--show-scrollbar"],
          onScroll: this.handleListScroll,
          onWheel: this.handleListWheel,
          ref: "listElRef"
        }), [
          this.items.length !== 0 ? g("div", {
            ref: "itemsElRef",
            class: "v-vl-items",
            style: this.itemsStyle
          }, [
            g(r, Object.assign({
              class: "v-vl-visible-items",
              style: this.visibleItemsStyle
            }, this.visibleItemsProps), {
              default: () => {
                const { renderCol: a, renderItemWithCols: l } = this;
                return this.viewportItems.map((s) => {
                  const u = s[n], c = t.get(u), h = a != null ? g(Vo, {
                    index: c,
                    item: s
                  }) : void 0, m = l != null ? g(Vo, {
                    index: c,
                    item: s
                  }) : void 0, v = this.$slots.default({
                    item: s,
                    renderedCols: h,
                    renderedItemWithCols: m,
                    index: c
                  })[0];
                  return e ? g($t, {
                    key: u,
                    onResize: (f) => this.handleItemResize(u, f)
                  }, {
                    default: () => v
                  }) : (v.key = u, v);
                });
              }
            })
          ]) : (i = (o = this.$slots).empty) === null || i === void 0 ? void 0 : i.call(o)
        ]);
      }
    });
  }
}), Xe = "v-hidden", Ru = an("[v-hidden]", {
  display: "none!important"
}), Go = oe({
  name: "Overflow",
  props: {
    getCounter: Function,
    getTail: Function,
    updateCounter: Function,
    onUpdateCount: Function,
    onUpdateOverflow: Function
  },
  setup(e, { slots: n }) {
    const t = F(null), r = F(null);
    function o(a) {
      const { value: l } = t, { getCounter: s, getTail: u } = e;
      let c;
      if (s !== void 0 ? c = s() : c = r.value, !l || !c)
        return;
      c.hasAttribute(Xe) && c.removeAttribute(Xe);
      const { children: h } = l;
      if (a.showAllItemsBeforeCalculate)
        for (const R of h)
          R.hasAttribute(Xe) && R.removeAttribute(Xe);
      const m = l.offsetWidth, v = [], f = n.tail ? u == null ? void 0 : u() : null;
      let y = f ? f.offsetWidth : 0, b = !1;
      const p = l.children.length - (n.tail ? 1 : 0);
      for (let R = 0; R < p - 1; ++R) {
        if (R < 0)
          continue;
        const x = h[R];
        if (b) {
          x.hasAttribute(Xe) || x.setAttribute(Xe, "");
          continue;
        } else x.hasAttribute(Xe) && x.removeAttribute(Xe);
        const E = x.offsetWidth;
        if (y += E, v[R] = E, y > m) {
          const { updateCounter: k } = e;
          for (let C = R; C >= 0; --C) {
            const w = p - 1 - C;
            k !== void 0 ? k(w) : c.textContent = `${w}`;
            const M = c.offsetWidth;
            if (y -= v[C], y + M <= m || C === 0) {
              b = !0, R = C - 1, f && (R === -1 ? (f.style.maxWidth = `${m - M}px`, f.style.boxSizing = "border-box") : f.style.maxWidth = "");
              const { onUpdateCount: O } = e;
              O && O(w);
              break;
            }
          }
        }
      }
      const { onUpdateOverflow: _ } = e;
      b ? _ !== void 0 && _(!0) : (_ !== void 0 && _(!1), c.setAttribute(Xe, ""));
    }
    const i = En();
    return Ru.mount({
      id: "vueuc/overflow",
      head: !0,
      anchorMetaName: oo,
      ssr: i
    }), Ie(() => o({
      showAllItemsBeforeCalculate: !1
    })), {
      selfRef: t,
      counterRef: r,
      sync: o
    };
  },
  render() {
    const { $slots: e } = this;
    return Wt(() => this.sync({
      showAllItemsBeforeCalculate: !1
    })), g("div", {
      class: "v-overflow",
      ref: "selfRef"
    }, [
      Di(e, "default"),
      // $slots.counter should only has 1 element
      e.counter ? e.counter() : g("span", {
        style: {
          display: "inline-block"
        },
        ref: "counterRef"
      }),
      // $slots.tail should only has 1 element
      e.tail ? e.tail() : null
    ]);
  }
});
function la(e) {
  return e instanceof HTMLElement;
}
function sa(e) {
  for (let n = 0; n < e.childNodes.length; n++) {
    const t = e.childNodes[n];
    if (la(t) && (da(t) || sa(t)))
      return !0;
  }
  return !1;
}
function ua(e) {
  for (let n = e.childNodes.length - 1; n >= 0; n--) {
    const t = e.childNodes[n];
    if (la(t) && (da(t) || ua(t)))
      return !0;
  }
  return !1;
}
function da(e) {
  if (!Mu(e))
    return !1;
  try {
    e.focus({ preventScroll: !0 });
  } catch {
  }
  return document.activeElement === e;
}
function Mu(e) {
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
let Yn = [];
const Au = oe({
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
    const n = kl(), t = F(null), r = F(null);
    let o = !1, i = !1;
    const a = typeof document > "u" ? null : document.activeElement;
    function l() {
      return Yn[Yn.length - 1] === n;
    }
    function s(b) {
      var p;
      b.code === "Escape" && l() && ((p = e.onEsc) === null || p === void 0 || p.call(e, b));
    }
    Ie(() => {
      we(() => e.active, (b) => {
        b ? (h(), Pe("keydown", document, s)) : (pe("keydown", document, s), o && m());
      }, {
        immediate: !0
      });
    }), Ne(() => {
      pe("keydown", document, s), o && m();
    });
    function u(b) {
      if (!i && l()) {
        const p = c();
        if (p === null || p.contains(at(b)))
          return;
        v("first");
      }
    }
    function c() {
      const b = t.value;
      if (b === null)
        return null;
      let p = b;
      for (; p = p.nextSibling, !(p === null || p instanceof Element && p.tagName === "DIV"); )
        ;
      return p;
    }
    function h() {
      var b;
      if (!e.disabled) {
        if (Yn.push(n), e.autoFocus) {
          const { initialFocusTo: p } = e;
          p === void 0 ? v("first") : (b = Ao(p)) === null || b === void 0 || b.focus({ preventScroll: !0 });
        }
        o = !0, document.addEventListener("focus", u, !0);
      }
    }
    function m() {
      var b;
      if (e.disabled || (document.removeEventListener("focus", u, !0), Yn = Yn.filter((_) => _ !== n), l()))
        return;
      const { finalFocusTo: p } = e;
      p !== void 0 ? (b = Ao(p)) === null || b === void 0 || b.focus({ preventScroll: !0 }) : e.returnFocusOnDeactivated && a instanceof HTMLElement && (i = !0, a.focus({ preventScroll: !0 }), i = !1);
    }
    function v(b) {
      if (l() && e.active) {
        const p = t.value, _ = r.value;
        if (p !== null && _ !== null) {
          const R = c();
          if (R == null || R === _) {
            i = !0, p.focus({ preventScroll: !0 }), i = !1;
            return;
          }
          i = !0;
          const x = b === "first" ? sa(R) : ua(R);
          i = !1, x || (i = !0, p.focus({ preventScroll: !0 }), i = !1);
        }
      }
    }
    function f(b) {
      if (i)
        return;
      const p = c();
      p !== null && (b.relatedTarget !== null && p.contains(b.relatedTarget) ? v("last") : v("first"));
    }
    function y(b) {
      i || (b.relatedTarget !== null && b.relatedTarget === t.value ? v("last") : v("first"));
    }
    return {
      focusableStartRef: t,
      focusableEndRef: r,
      focusableStyle: "position: absolute; height: 0; width: 0;",
      handleStartFocus: f,
      handleEndFocus: y
    };
  },
  render() {
    const { default: e } = this.$slots;
    if (e === void 0)
      return null;
    if (this.disabled)
      return e();
    const { active: n, focusableStyle: t } = this;
    return g(On, null, [
      g("div", {
        "aria-hidden": "true",
        tabindex: n ? "0" : "-1",
        ref: "focusableStartRef",
        style: t,
        onFocus: this.handleStartFocus
      }),
      e(),
      g("div", {
        "aria-hidden": "true",
        style: t,
        ref: "focusableEndRef",
        tabindex: n ? "0" : "-1",
        onFocus: this.handleEndFocus
      })
    ]);
  }
});
const ao = "n-internal-select-menu", ca = "n-internal-select-menu-body", fa = "n-drawer-body", ha = "n-modal-body", pa = "n-popover-body", ma = "__disabled__";
function qe(e) {
  const n = fe(ha, null), t = fe(fa, null), r = fe(pa, null), o = fe(ca, null), i = F();
  if (typeof document < "u") {
    i.value = document.fullscreenElement;
    const a = () => {
      i.value = document.fullscreenElement;
    };
    Ie(() => {
      Pe("fullscreenchange", document, a);
    }), Ne(() => {
      pe("fullscreenchange", document, a);
    });
  }
  return Me(() => {
    var a;
    const {
      to: l
    } = e;
    return l !== void 0 ? l === !1 ? ma : l === !0 ? i.value || "body" : l : n != null && n.value ? (a = n.value.$el) !== null && a !== void 0 ? a : n.value : t != null && t.value ? t.value : r != null && r.value ? r.value : o != null && o.value ? o.value : l ?? (i.value || "body");
  });
}
qe.tdkey = ma;
qe.propTo = {
  type: [String, Object, Boolean],
  default: void 0
};
function Iu(e) {
  const n = {
    isDeactivated: !1
  };
  let t = !1;
  return $i(() => {
    if (n.isDeactivated = !1, !t) {
      t = !0;
      return;
    }
    e();
  }), Fi(() => {
    n.isDeactivated = !0, t || (t = !0);
  }), n;
}
function ga(e, n) {
  n && (Ie(() => {
    const {
      value: t
    } = e;
    t && ot.registerHandler(t, n);
  }), we(e, (t, r) => {
    r && ot.unregisterHandler(r);
  }, {
    deep: !1
  }), Ne(() => {
    const {
      value: t
    } = e;
    t && ot.unregisterHandler(t);
  }));
}
function Ko(e) {
  return e.replace(/#|\(|\)|,|\s|\./g, "_");
}
const Du = /^(\d|\.)+$/, Xo = /(\d|\.)+/;
function _r(e, {
  c: n = 1,
  offset: t = 0,
  attachPx: r = !0
} = {}) {
  if (typeof e == "number") {
    const o = (e + t) * n;
    return o === 0 ? "0" : `${o}px`;
  } else if (typeof e == "string")
    if (Du.test(e)) {
      const o = (Number(e) + t) * n;
      return r ? o === 0 ? "0" : `${o}px` : `${o}`;
    } else {
      const o = Xo.exec(e);
      return o ? e.replace(Xo, String((Number(o[0]) + t) * n)) : e;
    }
  return e;
}
function Jo(e) {
  const {
    left: n,
    right: t,
    top: r,
    bottom: o
  } = Fe(e);
  return `${r} ${n} ${o} ${t}`;
}
var Yo = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\mmj\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_11032_CTSDTHGKBNXAIWDN", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-QBN3J51", ComSpec: "C:\\WINDOWS\\system32\\cmd.exe", CURSOR_TRACE_ID: "09ee13f00f524892b908f0f5fa49cdb7", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "c:\\Users\\mmj\\AppData\\Local\\Programs\\cursor\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\mmj", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\mmj", INIT_CWD: "F:\\Work\\lowcode\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\mmj\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-QBN3J51", NODE: "C:\\Program Files\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com/", npm_config_user_agent: "pnpm/9.15.4 npm/? node/v18.20.2 win32 x64", npm_execpath: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "C:\\Program Files\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "8", NVM_HOME: "D:\\install\\nvm", NVM_SYMLINK: "C:\\Program Files\\nodejs", OneDrive: "C:\\Users\\mmj\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\Work\\lowcode\\lowcode-component\\scripts\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\Work\\lowcode\\lowcode-component\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\java8path;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Git\\cmd;C:\\Users\\mmj\\AppData\\Local\\Microsoft\\WindowsApps;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Microsoft VS Code\\bin;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\Work\\lowcode\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "AMD64 Family 23 Model 24 Stepping 1, AuthenticAMD", PROCESSOR_LEVEL: "23", PROCESSOR_REVISION: "1801", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\mmj\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\WINDOWS", TEMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "0.45.7", TMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-QBN3J51", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-QBN3J51", USERNAME: "mmj", USERPROFILE: "C:\\Users\\mmj", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "c:\\Users\\mmj\\AppData\\Local\\Programs\\cursor\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "C:\\Users\\mmj\\AppData\\Local\\Programs\\cursor\\Cursor.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-eb177ecbbf-sock", VSCODE_INJECTION: "1", windir: "C:\\WINDOWS" };
function $u(e) {
  let n = ".", t = "__", r = "--", o;
  {
    let f = e.blockPrefix;
    f && (n = f), f = e.elementPrefix, f && (t = f), f = e.modifierPrefix, f && (r = f);
  }
  const i = {
    install(f) {
      o = f.c;
      const y = f.context;
      y.bem = {}, y.bem.b = null, y.bem.els = null;
    }
  };
  function a(f) {
    let y, b;
    return {
      before(p) {
        y = p.bem.b, b = p.bem.els, p.bem.els = null;
      },
      after(p) {
        p.bem.b = y, p.bem.els = b;
      },
      $({ context: p, props: _ }) {
        return f = typeof f == "string" ? f : f({ context: p, props: _ }), p.bem.b = f, `${(_ == null ? void 0 : _.bPrefix) || n}${p.bem.b}`;
      }
    };
  }
  function l(f) {
    let y;
    return {
      before(b) {
        y = b.bem.els;
      },
      after(b) {
        b.bem.els = y;
      },
      $({ context: b, props: p }) {
        return f = typeof f == "string" ? f : f({ context: b, props: p }), b.bem.els = f.split(",").map((_) => _.trim()), b.bem.els.map((_) => `${(p == null ? void 0 : p.bPrefix) || n}${b.bem.b}${t}${_}`).join(", ");
      }
    };
  }
  function s(f) {
    return {
      $({ context: y, props: b }) {
        f = typeof f == "string" ? f : f({ context: y, props: b });
        const p = f.split(",").map((x) => x.trim());
        function _(x) {
          return p.map((E) => `&${(b == null ? void 0 : b.bPrefix) || n}${y.bem.b}${x !== void 0 ? `${t}${x}` : ""}${r}${E}`).join(", ");
        }
        const R = y.bem.els;
        if (R !== null) {
          if (Yo.NODE_ENV !== "production" && R.length >= 2)
            throw Error(`[css-render/plugin-bem]: m(${f}) is invalid, using modifier inside multiple elements is not allowed`);
          return _(R[0]);
        } else
          return _();
      }
    };
  }
  function u(f) {
    return {
      $({ context: y, props: b }) {
        f = typeof f == "string" ? f : f({ context: y, props: b });
        const p = y.bem.els;
        if (Yo.NODE_ENV !== "production" && p !== null && p.length >= 2)
          throw Error(`[css-render/plugin-bem]: notM(${f}) is invalid, using modifier inside multiple elements is not allowed`);
        return `&:not(${(b == null ? void 0 : b.bPrefix) || n}${y.bem.b}${p !== null && p.length > 0 ? `${t}${p[0]}` : ""}${r}${f})`;
      }
    };
  }
  return Object.assign(i, {
    cB: (...f) => o(a(f[0]), f[1], f[2]),
    cE: (...f) => o(l(f[0]), f[1], f[2]),
    cM: (...f) => o(s(f[0]), f[1], f[2]),
    cNotM: (...f) => o(u(f[0]), f[1], f[2])
  }), i;
}
const Fu = "n", zu = `.${Fu}-`, Nu = "__", ku = "--", va = qi(), ba = $u({
  blockPrefix: zu,
  elementPrefix: Nu,
  modifierPrefix: ku
});
va.use(ba);
const {
  c: W,
  find: mg
} = va, {
  cB: G,
  cE: J,
  cM: te,
  cNotM: ze
} = ba, Bu = (...e) => W(">", [G(...e)]);
function ce(e, n) {
  return e + (n === "default" ? "" : n.replace(/^[a-z]/, (t) => t.toUpperCase()));
}
let Pr;
function Lu() {
  return Pr === void 0 && (Pr = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")), Pr;
}
const Wu = /* @__PURE__ */ new WeakSet();
function Hu(e) {
  Wu.add(e);
}
function qo(e) {
  switch (typeof e) {
    case "string":
      return e || void 0;
    case "number":
      return String(e);
    default:
      return;
  }
}
const Zo = /* @__PURE__ */ new Set();
function on(e, n) {
  const t = `[naive/${e}]: ${n}`;
  Zo.has(t) || (Zo.add(t), console.error(t));
}
function Qo(e, n) {
  console.error(`[naive/${e}]: ${n}`);
}
function Ca(e, n) {
  throw new Error(`[naive/${e}]: ${n}`);
}
function ye(e, ...n) {
  if (Array.isArray(e))
    e.forEach((t) => ye(t, ...n));
  else
    return e(...n);
}
function Ur(e, n = !0, t = []) {
  return e.forEach((r) => {
    if (r !== null) {
      if (typeof r != "object") {
        (typeof r == "string" || typeof r == "number") && t.push(Mt(String(r)));
        return;
      }
      if (Array.isArray(r)) {
        Ur(r, n, t);
        return;
      }
      if (r.type === On) {
        if (r.children === null) return;
        Array.isArray(r.children) && Ur(r.children, n, t);
      } else {
        if (r.type === no && n) return;
        t.push(r);
      }
    }
  }), t;
}
function ju(e, n = "default", t = void 0) {
  const r = e[n];
  if (!r)
    return Qo("getFirstSlotVNode", `slot[${n}] is empty`), null;
  const o = Ur(r(t));
  return o.length === 1 ? o[0] : (Qo("getFirstSlotVNode", `slot[${n}] should have exactly one child`), null);
}
function Uu(e, n = [], t) {
  const r = {};
  return n.forEach((o) => {
    r[o] = e[o];
  }), Object.assign(r, t);
}
function Or(e) {
  const n = e.filter((t) => t !== void 0);
  if (n.length !== 0)
    return n.length === 1 ? n[0] : (t) => {
      e.forEach((r) => {
        r && r(t);
      });
    };
}
function Wn(e, ...n) {
  return typeof e == "function" ? e(...n) : typeof e == "string" ? Mt(e) : typeof e == "number" ? Mt(String(e)) : null;
}
function Vt(e) {
  return e.some((n) => bl(n) ? !(n.type === no || n.type === On && !Vt(n.children)) : !0) ? e : null;
}
function lo(e, n) {
  return e && Vt(e()) || n();
}
function xn(e, n) {
  const t = e && Vt(e());
  return n(t || null);
}
function ei(e) {
  return !(e && Vt(e()));
}
const Vr = oe({
  render() {
    var e, n;
    return (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e);
  }
}), Tn = "n-config-provider", Vu = "n";
function Rn(e = {}, n = {
  defaultBordered: !0
}) {
  const t = fe(Tn, null);
  return {
    // NConfigProvider,
    inlineThemeDisabled: t == null ? void 0 : t.inlineThemeDisabled,
    mergedRtlRef: t == null ? void 0 : t.mergedRtlRef,
    mergedComponentPropsRef: t == null ? void 0 : t.mergedComponentPropsRef,
    mergedBreakpointsRef: t == null ? void 0 : t.mergedBreakpointsRef,
    mergedBorderedRef: z(() => {
      var r, o;
      const {
        bordered: i
      } = e;
      return i !== void 0 ? i : (o = (r = t == null ? void 0 : t.mergedBorderedRef.value) !== null && r !== void 0 ? r : n.defaultBordered) !== null && o !== void 0 ? o : !0;
    }),
    mergedClsPrefixRef: t ? t.mergedClsPrefixRef : Cl(Vu),
    namespaceRef: z(() => t == null ? void 0 : t.mergedNamespaceRef.value)
  };
}
function Mn(e, n, t, r) {
  t || Ca("useThemeClass", "cssVarsRef is not passed");
  const o = fe(Tn, null), i = o == null ? void 0 : o.mergedThemeHashRef, a = o == null ? void 0 : o.styleMountTarget, l = F(""), s = En();
  let u;
  const c = `__${e}`, h = () => {
    let m = c;
    const v = n ? n.value : void 0, f = i == null ? void 0 : i.value;
    f && (m += `-${f}`), v && (m += `-${v}`);
    const {
      themeOverrides: y,
      builtinThemeOverrides: b
    } = r;
    y && (m += `-${Hr(JSON.stringify(y))}`), b && (m += `-${Hr(JSON.stringify(b))}`), l.value = m, u = () => {
      const p = t.value;
      let _ = "";
      for (const R in p)
        _ += `${R}: ${p[R]};`;
      W(`.${m}`, _).mount({
        id: m,
        ssr: s,
        parent: a
      }), u = void 0;
    };
  };
  return Ye(() => {
    h();
  }), {
    themeClass: l,
    onRender: () => {
      u == null || u();
    }
  };
}
const ni = "n-form-item";
function Gu(e, {
  defaultSize: n = "medium",
  mergedSize: t,
  mergedDisabled: r
} = {}) {
  const o = fe(ni, null);
  je(ni, null);
  const i = z(t ? () => t(o) : () => {
    const {
      size: s
    } = e;
    if (s) return s;
    if (o) {
      const {
        mergedSize: u
      } = o;
      if (u.value !== void 0)
        return u.value;
    }
    return n;
  }), a = z(r ? () => r(o) : () => {
    const {
      disabled: s
    } = e;
    return s !== void 0 ? s : o ? o.disabled.value : !1;
  }), l = z(() => {
    const {
      status: s
    } = e;
    return s || (o == null ? void 0 : o.mergedValidationStatus.value);
  });
  return Ne(() => {
    o && o.restoreValidation();
  }), {
    mergedSizeRef: i,
    mergedDisabledRef: a,
    mergedStatusRef: l,
    nTriggerFormBlur() {
      o && o.handleContentBlur();
    },
    nTriggerFormChange() {
      o && o.handleContentChange();
    },
    nTriggerFormFocus() {
      o && o.handleContentFocus();
    },
    nTriggerFormInput() {
      o && o.handleContentInput();
    }
  };
}
const Ku = {
  name: "en-US",
  global: {
    undo: "Undo",
    redo: "Redo",
    confirm: "Confirm",
    clear: "Clear"
  },
  Popconfirm: {
    positiveText: "Confirm",
    negativeText: "Cancel"
  },
  Cascader: {
    placeholder: "Please Select",
    loading: "Loading",
    loadingRequiredMessage: (e) => `Please load all ${e}'s descendants before checking it.`
  },
  Time: {
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss"
  },
  DatePicker: {
    yearFormat: "yyyy",
    monthFormat: "MMM",
    dayFormat: "eeeeee",
    yearTypeFormat: "yyyy",
    monthTypeFormat: "yyyy-MM",
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
    quarterFormat: "yyyy-qqq",
    weekFormat: "YYYY-w",
    clear: "Clear",
    now: "Now",
    confirm: "Confirm",
    selectTime: "Select Time",
    selectDate: "Select Date",
    datePlaceholder: "Select Date",
    datetimePlaceholder: "Select Date and Time",
    monthPlaceholder: "Select Month",
    yearPlaceholder: "Select Year",
    quarterPlaceholder: "Select Quarter",
    weekPlaceholder: "Select Week",
    startDatePlaceholder: "Start Date",
    endDatePlaceholder: "End Date",
    startDatetimePlaceholder: "Start Date and Time",
    endDatetimePlaceholder: "End Date and Time",
    startMonthPlaceholder: "Start Month",
    endMonthPlaceholder: "End Month",
    monthBeforeYear: !0,
    firstDayOfWeek: 6,
    today: "Today"
  },
  DataTable: {
    checkTableAll: "Select all in the table",
    uncheckTableAll: "Unselect all in the table",
    confirm: "Confirm",
    clear: "Clear"
  },
  LegacyTransfer: {
    sourceTitle: "Source",
    targetTitle: "Target"
  },
  Transfer: {
    selectAll: "Select all",
    unselectAll: "Unselect all",
    clearAll: "Clear",
    total: (e) => `Total ${e} items`,
    selected: (e) => `${e} items selected`
  },
  Empty: {
    description: "No Data"
  },
  Select: {
    placeholder: "Please Select"
  },
  TimePicker: {
    placeholder: "Select Time",
    positiveText: "OK",
    negativeText: "Cancel",
    now: "Now",
    clear: "Clear"
  },
  Pagination: {
    goto: "Goto",
    selectionSuffix: "page"
  },
  DynamicTags: {
    add: "Add"
  },
  Log: {
    loading: "Loading"
  },
  Input: {
    placeholder: "Please Input"
  },
  InputNumber: {
    placeholder: "Please Input"
  },
  DynamicInput: {
    create: "Create"
  },
  ThemeEditor: {
    title: "Theme Editor",
    clearAllVars: "Clear All Variables",
    clearSearch: "Clear Search",
    filterCompName: "Filter Component Name",
    filterVarName: "Filter Variable Name",
    import: "Import",
    export: "Export",
    restore: "Reset to Default"
  },
  Image: {
    tipPrevious: "Previous picture (←)",
    tipNext: "Next picture (→)",
    tipCounterclockwise: "Counterclockwise",
    tipClockwise: "Clockwise",
    tipZoomOut: "Zoom out",
    tipZoomIn: "Zoom in",
    tipDownload: "Download",
    tipClose: "Close (Esc)",
    // TODO: translation
    tipOriginalSize: "Zoom to original size"
  }
};
function Er(e) {
  return (n = {}) => {
    const t = n.width ? String(n.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
function qn(e) {
  return (n, t) => {
    const r = t != null && t.context ? String(t.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const a = e.defaultFormattingWidth || e.defaultWidth, l = t != null && t.width ? String(t.width) : a;
      o = e.formattingValues[l] || e.formattingValues[a];
    } else {
      const a = e.defaultWidth, l = t != null && t.width ? String(t.width) : e.defaultWidth;
      o = e.values[l] || e.values[a];
    }
    const i = e.argumentCallback ? e.argumentCallback(n) : n;
    return o[i];
  };
}
function Zn(e) {
  return (n, t = {}) => {
    const r = t.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = n.match(o);
    if (!i)
      return null;
    const a = i[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], s = Array.isArray(l) ? Ju(l, (h) => h.test(a)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      Xu(l, (h) => h.test(a))
    );
    let u;
    u = e.valueCallback ? e.valueCallback(s) : s, u = t.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      t.valueCallback(u)
    ) : u;
    const c = n.slice(a.length);
    return { value: u, rest: c };
  };
}
function Xu(e, n) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && n(e[t]))
      return t;
}
function Ju(e, n) {
  for (let t = 0; t < e.length; t++)
    if (n(e[t]))
      return t;
}
function Yu(e) {
  return (n, t = {}) => {
    const r = n.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], i = n.match(e.parsePattern);
    if (!i) return null;
    let a = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    a = t.valueCallback ? t.valueCallback(a) : a;
    const l = n.slice(o.length);
    return { value: a, rest: l };
  };
}
const qu = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Zu = (e, n, t) => {
  let r;
  const o = qu[e];
  return typeof o == "string" ? r = o : n === 1 ? r = o.one : r = o.other.replace("{{count}}", n.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + r : r + " ago" : r;
}, Qu = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, ed = (e, n, t, r) => Qu[e], nd = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, td = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, rd = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, od = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, id = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, ad = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, ld = (e, n) => {
  const t = Number(e), r = t % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return t + "st";
      case 2:
        return t + "nd";
      case 3:
        return t + "rd";
    }
  return t + "th";
}, sd = {
  ordinalNumber: ld,
  era: qn({
    values: nd,
    defaultWidth: "wide"
  }),
  quarter: qn({
    values: td,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: qn({
    values: rd,
    defaultWidth: "wide"
  }),
  day: qn({
    values: od,
    defaultWidth: "wide"
  }),
  dayPeriod: qn({
    values: id,
    defaultWidth: "wide",
    formattingValues: ad,
    defaultFormattingWidth: "wide"
  })
}, ud = /^(\d+)(th|st|nd|rd)?/i, dd = /\d+/i, cd = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, fd = {
  any: [/^b/i, /^(a|c)/i]
}, hd = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, pd = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, md = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, gd = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, vd = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, bd = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Cd = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, yd = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Sd = {
  ordinalNumber: Yu({
    matchPattern: ud,
    parsePattern: dd,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Zn({
    matchPatterns: cd,
    defaultMatchWidth: "wide",
    parsePatterns: fd,
    defaultParseWidth: "any"
  }),
  quarter: Zn({
    matchPatterns: hd,
    defaultMatchWidth: "wide",
    parsePatterns: pd,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Zn({
    matchPatterns: md,
    defaultMatchWidth: "wide",
    parsePatterns: gd,
    defaultParseWidth: "any"
  }),
  day: Zn({
    matchPatterns: vd,
    defaultMatchWidth: "wide",
    parsePatterns: bd,
    defaultParseWidth: "any"
  }),
  dayPeriod: Zn({
    matchPatterns: Cd,
    defaultMatchWidth: "any",
    parsePatterns: yd,
    defaultParseWidth: "any"
  })
}, wd = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, xd = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, _d = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Pd = {
  date: Er({
    formats: wd,
    defaultWidth: "full"
  }),
  time: Er({
    formats: xd,
    defaultWidth: "full"
  }),
  dateTime: Er({
    formats: _d,
    defaultWidth: "full"
  })
}, Od = {
  code: "en-US",
  formatDistance: Zu,
  formatLong: Pd,
  formatRelative: ed,
  localize: sd,
  match: Sd,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, Ed = {
  name: "en-US",
  locale: Od
};
var ya = typeof global == "object" && global && global.Object === Object && global, Td = typeof self == "object" && self && self.Object === Object && self, Ve = ya || Td || Function("return this")(), ln = Ve.Symbol, Sa = Object.prototype, Rd = Sa.hasOwnProperty, Md = Sa.toString, Qn = ln ? ln.toStringTag : void 0;
function Ad(e) {
  var n = Rd.call(e, Qn), t = e[Qn];
  try {
    e[Qn] = void 0;
    var r = !0;
  } catch {
  }
  var o = Md.call(e);
  return r && (n ? e[Qn] = t : delete e[Qn]), o;
}
var Id = Object.prototype, Dd = Id.toString;
function $d(e) {
  return Dd.call(e);
}
var Fd = "[object Null]", zd = "[object Undefined]", ti = ln ? ln.toStringTag : void 0;
function An(e) {
  return e == null ? e === void 0 ? zd : Fd : ti && ti in Object(e) ? Ad(e) : $d(e);
}
function sn(e) {
  return e != null && typeof e == "object";
}
var Nd = "[object Symbol]";
function so(e) {
  return typeof e == "symbol" || sn(e) && An(e) == Nd;
}
function wa(e, n) {
  for (var t = -1, r = e == null ? 0 : e.length, o = Array(r); ++t < r; )
    o[t] = n(e[t], t, e);
  return o;
}
var Ae = Array.isArray, ri = ln ? ln.prototype : void 0, oi = ri ? ri.toString : void 0;
function xa(e) {
  if (typeof e == "string")
    return e;
  if (Ae(e))
    return wa(e, xa) + "";
  if (so(e))
    return oi ? oi.call(e) : "";
  var n = e + "";
  return n == "0" && 1 / e == -1 / 0 ? "-0" : n;
}
function un(e) {
  var n = typeof e;
  return e != null && (n == "object" || n == "function");
}
function uo(e) {
  return e;
}
var kd = "[object AsyncFunction]", Bd = "[object Function]", Ld = "[object GeneratorFunction]", Wd = "[object Proxy]";
function co(e) {
  if (!un(e))
    return !1;
  var n = An(e);
  return n == Bd || n == Ld || n == kd || n == Wd;
}
var Tr = Ve["__core-js_shared__"], ii = function() {
  var e = /[^.]+$/.exec(Tr && Tr.keys && Tr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Hd(e) {
  return !!ii && ii in e;
}
var jd = Function.prototype, Ud = jd.toString;
function In(e) {
  if (e != null) {
    try {
      return Ud.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Vd = /[\\^$.*+?()[\]{}|]/g, Gd = /^\[object .+?Constructor\]$/, Kd = Function.prototype, Xd = Object.prototype, Jd = Kd.toString, Yd = Xd.hasOwnProperty, qd = RegExp(
  "^" + Jd.call(Yd).replace(Vd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Zd(e) {
  if (!un(e) || Hd(e))
    return !1;
  var n = co(e) ? qd : Gd;
  return n.test(In(e));
}
function Qd(e, n) {
  return e == null ? void 0 : e[n];
}
function Dn(e, n) {
  var t = Qd(e, n);
  return Zd(t) ? t : void 0;
}
var Gr = Dn(Ve, "WeakMap"), ai = Object.create, ec = /* @__PURE__ */ function() {
  function e() {
  }
  return function(n) {
    if (!un(n))
      return {};
    if (ai)
      return ai(n);
    e.prototype = n;
    var t = new e();
    return e.prototype = void 0, t;
  };
}();
function nc(e, n, t) {
  switch (t.length) {
    case 0:
      return e.call(n);
    case 1:
      return e.call(n, t[0]);
    case 2:
      return e.call(n, t[0], t[1]);
    case 3:
      return e.call(n, t[0], t[1], t[2]);
  }
  return e.apply(n, t);
}
function tc(e, n) {
  var t = -1, r = e.length;
  for (n || (n = Array(r)); ++t < r; )
    n[t] = e[t];
  return n;
}
var rc = 800, oc = 16, ic = Date.now;
function ac(e) {
  var n = 0, t = 0;
  return function() {
    var r = ic(), o = oc - (r - t);
    if (t = r, o > 0) {
      if (++n >= rc)
        return arguments[0];
    } else
      n = 0;
    return e.apply(void 0, arguments);
  };
}
function lc(e) {
  return function() {
    return e;
  };
}
var Ft = function() {
  try {
    var e = Dn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), sc = Ft ? function(e, n) {
  return Ft(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: lc(n),
    writable: !0
  });
} : uo, uc = ac(sc), dc = 9007199254740991, cc = /^(?:0|[1-9]\d*)$/;
function fo(e, n) {
  var t = typeof e;
  return n = n ?? dc, !!n && (t == "number" || t != "symbol" && cc.test(e)) && e > -1 && e % 1 == 0 && e < n;
}
function ho(e, n, t) {
  n == "__proto__" && Ft ? Ft(e, n, {
    configurable: !0,
    enumerable: !0,
    value: t,
    writable: !0
  }) : e[n] = t;
}
function ht(e, n) {
  return e === n || e !== e && n !== n;
}
var fc = Object.prototype, hc = fc.hasOwnProperty;
function pc(e, n, t) {
  var r = e[n];
  (!(hc.call(e, n) && ht(r, t)) || t === void 0 && !(n in e)) && ho(e, n, t);
}
function mc(e, n, t, r) {
  var o = !t;
  t || (t = {});
  for (var i = -1, a = n.length; ++i < a; ) {
    var l = n[i], s = void 0;
    s === void 0 && (s = e[l]), o ? ho(t, l, s) : pc(t, l, s);
  }
  return t;
}
var li = Math.max;
function gc(e, n, t) {
  return n = li(n === void 0 ? e.length - 1 : n, 0), function() {
    for (var r = arguments, o = -1, i = li(r.length - n, 0), a = Array(i); ++o < i; )
      a[o] = r[n + o];
    o = -1;
    for (var l = Array(n + 1); ++o < n; )
      l[o] = r[o];
    return l[n] = t(a), nc(e, this, l);
  };
}
function vc(e, n) {
  return uc(gc(e, n, uo), e + "");
}
var bc = 9007199254740991;
function po(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= bc;
}
function Kn(e) {
  return e != null && po(e.length) && !co(e);
}
function Cc(e, n, t) {
  if (!un(t))
    return !1;
  var r = typeof n;
  return (r == "number" ? Kn(t) && fo(n, t.length) : r == "string" && n in t) ? ht(t[n], e) : !1;
}
function yc(e) {
  return vc(function(n, t) {
    var r = -1, o = t.length, i = o > 1 ? t[o - 1] : void 0, a = o > 2 ? t[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (o--, i) : void 0, a && Cc(t[0], t[1], a) && (i = o < 3 ? void 0 : i, o = 1), n = Object(n); ++r < o; ) {
      var l = t[r];
      l && e(n, l, r, i);
    }
    return n;
  });
}
var Sc = Object.prototype;
function mo(e) {
  var n = e && e.constructor, t = typeof n == "function" && n.prototype || Sc;
  return e === t;
}
function wc(e, n) {
  for (var t = -1, r = Array(e); ++t < e; )
    r[t] = n(t);
  return r;
}
var xc = "[object Arguments]";
function si(e) {
  return sn(e) && An(e) == xc;
}
var _a = Object.prototype, _c = _a.hasOwnProperty, Pc = _a.propertyIsEnumerable, zt = si(/* @__PURE__ */ function() {
  return arguments;
}()) ? si : function(e) {
  return sn(e) && _c.call(e, "callee") && !Pc.call(e, "callee");
};
function Oc() {
  return !1;
}
var Pa = typeof exports == "object" && exports && !exports.nodeType && exports, ui = Pa && typeof module == "object" && module && !module.nodeType && module, Ec = ui && ui.exports === Pa, di = Ec ? Ve.Buffer : void 0, Tc = di ? di.isBuffer : void 0, Nt = Tc || Oc, Rc = "[object Arguments]", Mc = "[object Array]", Ac = "[object Boolean]", Ic = "[object Date]", Dc = "[object Error]", $c = "[object Function]", Fc = "[object Map]", zc = "[object Number]", Nc = "[object Object]", kc = "[object RegExp]", Bc = "[object Set]", Lc = "[object String]", Wc = "[object WeakMap]", Hc = "[object ArrayBuffer]", jc = "[object DataView]", Uc = "[object Float32Array]", Vc = "[object Float64Array]", Gc = "[object Int8Array]", Kc = "[object Int16Array]", Xc = "[object Int32Array]", Jc = "[object Uint8Array]", Yc = "[object Uint8ClampedArray]", qc = "[object Uint16Array]", Zc = "[object Uint32Array]", se = {};
se[Uc] = se[Vc] = se[Gc] = se[Kc] = se[Xc] = se[Jc] = se[Yc] = se[qc] = se[Zc] = !0;
se[Rc] = se[Mc] = se[Hc] = se[Ac] = se[jc] = se[Ic] = se[Dc] = se[$c] = se[Fc] = se[zc] = se[Nc] = se[kc] = se[Bc] = se[Lc] = se[Wc] = !1;
function Qc(e) {
  return sn(e) && po(e.length) && !!se[An(e)];
}
function ef(e) {
  return function(n) {
    return e(n);
  };
}
var Oa = typeof exports == "object" && exports && !exports.nodeType && exports, it = Oa && typeof module == "object" && module && !module.nodeType && module, nf = it && it.exports === Oa, Rr = nf && ya.process, ci = function() {
  try {
    var e = it && it.require && it.require("util").types;
    return e || Rr && Rr.binding && Rr.binding("util");
  } catch {
  }
}(), fi = ci && ci.isTypedArray, go = fi ? ef(fi) : Qc, tf = Object.prototype, rf = tf.hasOwnProperty;
function Ea(e, n) {
  var t = Ae(e), r = !t && zt(e), o = !t && !r && Nt(e), i = !t && !r && !o && go(e), a = t || r || o || i, l = a ? wc(e.length, String) : [], s = l.length;
  for (var u in e)
    (n || rf.call(e, u)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    fo(u, s))) && l.push(u);
  return l;
}
function Ta(e, n) {
  return function(t) {
    return e(n(t));
  };
}
var of = Ta(Object.keys, Object), af = Object.prototype, lf = af.hasOwnProperty;
function sf(e) {
  if (!mo(e))
    return of(e);
  var n = [];
  for (var t in Object(e))
    lf.call(e, t) && t != "constructor" && n.push(t);
  return n;
}
function vo(e) {
  return Kn(e) ? Ea(e) : sf(e);
}
function uf(e) {
  var n = [];
  if (e != null)
    for (var t in Object(e))
      n.push(t);
  return n;
}
var df = Object.prototype, cf = df.hasOwnProperty;
function ff(e) {
  if (!un(e))
    return uf(e);
  var n = mo(e), t = [];
  for (var r in e)
    r == "constructor" && (n || !cf.call(e, r)) || t.push(r);
  return t;
}
function Ra(e) {
  return Kn(e) ? Ea(e, !0) : ff(e);
}
var hf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, pf = /^\w*$/;
function bo(e, n) {
  if (Ae(e))
    return !1;
  var t = typeof e;
  return t == "number" || t == "symbol" || t == "boolean" || e == null || so(e) ? !0 : pf.test(e) || !hf.test(e) || n != null && e in Object(n);
}
var ut = Dn(Object, "create");
function mf() {
  this.__data__ = ut ? ut(null) : {}, this.size = 0;
}
function gf(e) {
  var n = this.has(e) && delete this.__data__[e];
  return this.size -= n ? 1 : 0, n;
}
var vf = "__lodash_hash_undefined__", bf = Object.prototype, Cf = bf.hasOwnProperty;
function yf(e) {
  var n = this.__data__;
  if (ut) {
    var t = n[e];
    return t === vf ? void 0 : t;
  }
  return Cf.call(n, e) ? n[e] : void 0;
}
var Sf = Object.prototype, wf = Sf.hasOwnProperty;
function xf(e) {
  var n = this.__data__;
  return ut ? n[e] !== void 0 : wf.call(n, e);
}
var _f = "__lodash_hash_undefined__";
function Pf(e, n) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = ut && n === void 0 ? _f : n, this;
}
function Pn(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var r = e[n];
    this.set(r[0], r[1]);
  }
}
Pn.prototype.clear = mf;
Pn.prototype.delete = gf;
Pn.prototype.get = yf;
Pn.prototype.has = xf;
Pn.prototype.set = Pf;
function Of() {
  this.__data__ = [], this.size = 0;
}
function Gt(e, n) {
  for (var t = e.length; t--; )
    if (ht(e[t][0], n))
      return t;
  return -1;
}
var Ef = Array.prototype, Tf = Ef.splice;
function Rf(e) {
  var n = this.__data__, t = Gt(n, e);
  if (t < 0)
    return !1;
  var r = n.length - 1;
  return t == r ? n.pop() : Tf.call(n, t, 1), --this.size, !0;
}
function Mf(e) {
  var n = this.__data__, t = Gt(n, e);
  return t < 0 ? void 0 : n[t][1];
}
function Af(e) {
  return Gt(this.__data__, e) > -1;
}
function If(e, n) {
  var t = this.__data__, r = Gt(t, e);
  return r < 0 ? (++this.size, t.push([e, n])) : t[r][1] = n, this;
}
function Ze(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var r = e[n];
    this.set(r[0], r[1]);
  }
}
Ze.prototype.clear = Of;
Ze.prototype.delete = Rf;
Ze.prototype.get = Mf;
Ze.prototype.has = Af;
Ze.prototype.set = If;
var dt = Dn(Ve, "Map");
function Df() {
  this.size = 0, this.__data__ = {
    hash: new Pn(),
    map: new (dt || Ze)(),
    string: new Pn()
  };
}
function $f(e) {
  var n = typeof e;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
}
function Kt(e, n) {
  var t = e.__data__;
  return $f(n) ? t[typeof n == "string" ? "string" : "hash"] : t.map;
}
function Ff(e) {
  var n = Kt(this, e).delete(e);
  return this.size -= n ? 1 : 0, n;
}
function zf(e) {
  return Kt(this, e).get(e);
}
function Nf(e) {
  return Kt(this, e).has(e);
}
function kf(e, n) {
  var t = Kt(this, e), r = t.size;
  return t.set(e, n), this.size += t.size == r ? 0 : 1, this;
}
function Qe(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var r = e[n];
    this.set(r[0], r[1]);
  }
}
Qe.prototype.clear = Df;
Qe.prototype.delete = Ff;
Qe.prototype.get = zf;
Qe.prototype.has = Nf;
Qe.prototype.set = kf;
var Bf = "Expected a function";
function Co(e, n) {
  if (typeof e != "function" || n != null && typeof n != "function")
    throw new TypeError(Bf);
  var t = function() {
    var r = arguments, o = n ? n.apply(this, r) : r[0], i = t.cache;
    if (i.has(o))
      return i.get(o);
    var a = e.apply(this, r);
    return t.cache = i.set(o, a) || i, a;
  };
  return t.cache = new (Co.Cache || Qe)(), t;
}
Co.Cache = Qe;
var Lf = 500;
function Wf(e) {
  var n = Co(e, function(r) {
    return t.size === Lf && t.clear(), r;
  }), t = n.cache;
  return n;
}
var Hf = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, jf = /\\(\\)?/g, Uf = Wf(function(e) {
  var n = [];
  return e.charCodeAt(0) === 46 && n.push(""), e.replace(Hf, function(t, r, o, i) {
    n.push(o ? i.replace(jf, "$1") : r || t);
  }), n;
});
function Ma(e) {
  return e == null ? "" : xa(e);
}
function Aa(e, n) {
  return Ae(e) ? e : bo(e, n) ? [e] : Uf(Ma(e));
}
function Xt(e) {
  if (typeof e == "string" || so(e))
    return e;
  var n = e + "";
  return n == "0" && 1 / e == -1 / 0 ? "-0" : n;
}
function Ia(e, n) {
  n = Aa(n, e);
  for (var t = 0, r = n.length; e != null && t < r; )
    e = e[Xt(n[t++])];
  return t && t == r ? e : void 0;
}
function Vf(e, n, t) {
  var r = e == null ? void 0 : Ia(e, n);
  return r === void 0 ? t : r;
}
function Gf(e, n) {
  for (var t = -1, r = n.length, o = e.length; ++t < r; )
    e[o + t] = n[t];
  return e;
}
var Da = Ta(Object.getPrototypeOf, Object), Kf = "[object Object]", Xf = Function.prototype, Jf = Object.prototype, $a = Xf.toString, Yf = Jf.hasOwnProperty, qf = $a.call(Object);
function Zf(e) {
  if (!sn(e) || An(e) != Kf)
    return !1;
  var n = Da(e);
  if (n === null)
    return !0;
  var t = Yf.call(n, "constructor") && n.constructor;
  return typeof t == "function" && t instanceof t && $a.call(t) == qf;
}
function Qf(e, n, t) {
  var r = -1, o = e.length;
  n < 0 && (n = -n > o ? 0 : o + n), t = t > o ? o : t, t < 0 && (t += o), o = n > t ? 0 : t - n >>> 0, n >>>= 0;
  for (var i = Array(o); ++r < o; )
    i[r] = e[r + n];
  return i;
}
function eh(e, n, t) {
  var r = e.length;
  return t = t === void 0 ? r : t, !n && t >= r ? e : Qf(e, n, t);
}
var nh = "\\ud800-\\udfff", th = "\\u0300-\\u036f", rh = "\\ufe20-\\ufe2f", oh = "\\u20d0-\\u20ff", ih = th + rh + oh, ah = "\\ufe0e\\ufe0f", lh = "\\u200d", sh = RegExp("[" + lh + nh + ih + ah + "]");
function Fa(e) {
  return sh.test(e);
}
function uh(e) {
  return e.split("");
}
var za = "\\ud800-\\udfff", dh = "\\u0300-\\u036f", ch = "\\ufe20-\\ufe2f", fh = "\\u20d0-\\u20ff", hh = dh + ch + fh, ph = "\\ufe0e\\ufe0f", mh = "[" + za + "]", Kr = "[" + hh + "]", Xr = "\\ud83c[\\udffb-\\udfff]", gh = "(?:" + Kr + "|" + Xr + ")", Na = "[^" + za + "]", ka = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ba = "[\\ud800-\\udbff][\\udc00-\\udfff]", vh = "\\u200d", La = gh + "?", Wa = "[" + ph + "]?", bh = "(?:" + vh + "(?:" + [Na, ka, Ba].join("|") + ")" + Wa + La + ")*", Ch = Wa + La + bh, yh = "(?:" + [Na + Kr + "?", Kr, ka, Ba, mh].join("|") + ")", Sh = RegExp(Xr + "(?=" + Xr + ")|" + yh + Ch, "g");
function wh(e) {
  return e.match(Sh) || [];
}
function xh(e) {
  return Fa(e) ? wh(e) : uh(e);
}
function _h(e) {
  return function(n) {
    n = Ma(n);
    var t = Fa(n) ? xh(n) : void 0, r = t ? t[0] : n.charAt(0), o = t ? eh(t, 1).join("") : n.slice(1);
    return r[e]() + o;
  };
}
var Ph = _h("toUpperCase");
function Oh() {
  this.__data__ = new Ze(), this.size = 0;
}
function Eh(e) {
  var n = this.__data__, t = n.delete(e);
  return this.size = n.size, t;
}
function Th(e) {
  return this.__data__.get(e);
}
function Rh(e) {
  return this.__data__.has(e);
}
var Mh = 200;
function Ah(e, n) {
  var t = this.__data__;
  if (t instanceof Ze) {
    var r = t.__data__;
    if (!dt || r.length < Mh - 1)
      return r.push([e, n]), this.size = ++t.size, this;
    t = this.__data__ = new Qe(r);
  }
  return t.set(e, n), this.size = t.size, this;
}
function Ue(e) {
  var n = this.__data__ = new Ze(e);
  this.size = n.size;
}
Ue.prototype.clear = Oh;
Ue.prototype.delete = Eh;
Ue.prototype.get = Th;
Ue.prototype.has = Rh;
Ue.prototype.set = Ah;
var Ha = typeof exports == "object" && exports && !exports.nodeType && exports, hi = Ha && typeof module == "object" && module && !module.nodeType && module, Ih = hi && hi.exports === Ha, pi = Ih ? Ve.Buffer : void 0;
pi && pi.allocUnsafe;
function Dh(e, n) {
  return e.slice();
}
function $h(e, n) {
  for (var t = -1, r = e == null ? 0 : e.length, o = 0, i = []; ++t < r; ) {
    var a = e[t];
    n(a, t, e) && (i[o++] = a);
  }
  return i;
}
function Fh() {
  return [];
}
var zh = Object.prototype, Nh = zh.propertyIsEnumerable, mi = Object.getOwnPropertySymbols, kh = mi ? function(e) {
  return e == null ? [] : (e = Object(e), $h(mi(e), function(n) {
    return Nh.call(e, n);
  }));
} : Fh;
function Bh(e, n, t) {
  var r = n(e);
  return Ae(e) ? r : Gf(r, t(e));
}
function gi(e) {
  return Bh(e, vo, kh);
}
var Jr = Dn(Ve, "DataView"), Yr = Dn(Ve, "Promise"), qr = Dn(Ve, "Set"), vi = "[object Map]", Lh = "[object Object]", bi = "[object Promise]", Ci = "[object Set]", yi = "[object WeakMap]", Si = "[object DataView]", Wh = In(Jr), Hh = In(dt), jh = In(Yr), Uh = In(qr), Vh = In(Gr), rn = An;
(Jr && rn(new Jr(new ArrayBuffer(1))) != Si || dt && rn(new dt()) != vi || Yr && rn(Yr.resolve()) != bi || qr && rn(new qr()) != Ci || Gr && rn(new Gr()) != yi) && (rn = function(e) {
  var n = An(e), t = n == Lh ? e.constructor : void 0, r = t ? In(t) : "";
  if (r)
    switch (r) {
      case Wh:
        return Si;
      case Hh:
        return vi;
      case jh:
        return bi;
      case Uh:
        return Ci;
      case Vh:
        return yi;
    }
  return n;
});
var kt = Ve.Uint8Array;
function Gh(e) {
  var n = new e.constructor(e.byteLength);
  return new kt(n).set(new kt(e)), n;
}
function Kh(e, n) {
  var t = Gh(e.buffer);
  return new e.constructor(t, e.byteOffset, e.length);
}
function Xh(e) {
  return typeof e.constructor == "function" && !mo(e) ? ec(Da(e)) : {};
}
var Jh = "__lodash_hash_undefined__";
function Yh(e) {
  return this.__data__.set(e, Jh), this;
}
function qh(e) {
  return this.__data__.has(e);
}
function Bt(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.__data__ = new Qe(); ++n < t; )
    this.add(e[n]);
}
Bt.prototype.add = Bt.prototype.push = Yh;
Bt.prototype.has = qh;
function Zh(e, n) {
  for (var t = -1, r = e == null ? 0 : e.length; ++t < r; )
    if (n(e[t], t, e))
      return !0;
  return !1;
}
function Qh(e, n) {
  return e.has(n);
}
var ep = 1, np = 2;
function ja(e, n, t, r, o, i) {
  var a = t & ep, l = e.length, s = n.length;
  if (l != s && !(a && s > l))
    return !1;
  var u = i.get(e), c = i.get(n);
  if (u && c)
    return u == n && c == e;
  var h = -1, m = !0, v = t & np ? new Bt() : void 0;
  for (i.set(e, n), i.set(n, e); ++h < l; ) {
    var f = e[h], y = n[h];
    if (r)
      var b = a ? r(y, f, h, n, e, i) : r(f, y, h, e, n, i);
    if (b !== void 0) {
      if (b)
        continue;
      m = !1;
      break;
    }
    if (v) {
      if (!Zh(n, function(p, _) {
        if (!Qh(v, _) && (f === p || o(f, p, t, r, i)))
          return v.push(_);
      })) {
        m = !1;
        break;
      }
    } else if (!(f === y || o(f, y, t, r, i))) {
      m = !1;
      break;
    }
  }
  return i.delete(e), i.delete(n), m;
}
function tp(e) {
  var n = -1, t = Array(e.size);
  return e.forEach(function(r, o) {
    t[++n] = [o, r];
  }), t;
}
function rp(e) {
  var n = -1, t = Array(e.size);
  return e.forEach(function(r) {
    t[++n] = r;
  }), t;
}
var op = 1, ip = 2, ap = "[object Boolean]", lp = "[object Date]", sp = "[object Error]", up = "[object Map]", dp = "[object Number]", cp = "[object RegExp]", fp = "[object Set]", hp = "[object String]", pp = "[object Symbol]", mp = "[object ArrayBuffer]", gp = "[object DataView]", wi = ln ? ln.prototype : void 0, Mr = wi ? wi.valueOf : void 0;
function vp(e, n, t, r, o, i, a) {
  switch (t) {
    case gp:
      if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
        return !1;
      e = e.buffer, n = n.buffer;
    case mp:
      return !(e.byteLength != n.byteLength || !i(new kt(e), new kt(n)));
    case ap:
    case lp:
    case dp:
      return ht(+e, +n);
    case sp:
      return e.name == n.name && e.message == n.message;
    case cp:
    case hp:
      return e == n + "";
    case up:
      var l = tp;
    case fp:
      var s = r & op;
      if (l || (l = rp), e.size != n.size && !s)
        return !1;
      var u = a.get(e);
      if (u)
        return u == n;
      r |= ip, a.set(e, n);
      var c = ja(l(e), l(n), r, o, i, a);
      return a.delete(e), c;
    case pp:
      if (Mr)
        return Mr.call(e) == Mr.call(n);
  }
  return !1;
}
var bp = 1, Cp = Object.prototype, yp = Cp.hasOwnProperty;
function Sp(e, n, t, r, o, i) {
  var a = t & bp, l = gi(e), s = l.length, u = gi(n), c = u.length;
  if (s != c && !a)
    return !1;
  for (var h = s; h--; ) {
    var m = l[h];
    if (!(a ? m in n : yp.call(n, m)))
      return !1;
  }
  var v = i.get(e), f = i.get(n);
  if (v && f)
    return v == n && f == e;
  var y = !0;
  i.set(e, n), i.set(n, e);
  for (var b = a; ++h < s; ) {
    m = l[h];
    var p = e[m], _ = n[m];
    if (r)
      var R = a ? r(_, p, m, n, e, i) : r(p, _, m, e, n, i);
    if (!(R === void 0 ? p === _ || o(p, _, t, r, i) : R)) {
      y = !1;
      break;
    }
    b || (b = m == "constructor");
  }
  if (y && !b) {
    var x = e.constructor, E = n.constructor;
    x != E && "constructor" in e && "constructor" in n && !(typeof x == "function" && x instanceof x && typeof E == "function" && E instanceof E) && (y = !1);
  }
  return i.delete(e), i.delete(n), y;
}
var wp = 1, xi = "[object Arguments]", _i = "[object Array]", Ot = "[object Object]", xp = Object.prototype, Pi = xp.hasOwnProperty;
function _p(e, n, t, r, o, i) {
  var a = Ae(e), l = Ae(n), s = a ? _i : rn(e), u = l ? _i : rn(n);
  s = s == xi ? Ot : s, u = u == xi ? Ot : u;
  var c = s == Ot, h = u == Ot, m = s == u;
  if (m && Nt(e)) {
    if (!Nt(n))
      return !1;
    a = !0, c = !1;
  }
  if (m && !c)
    return i || (i = new Ue()), a || go(e) ? ja(e, n, t, r, o, i) : vp(e, n, s, t, r, o, i);
  if (!(t & wp)) {
    var v = c && Pi.call(e, "__wrapped__"), f = h && Pi.call(n, "__wrapped__");
    if (v || f) {
      var y = v ? e.value() : e, b = f ? n.value() : n;
      return i || (i = new Ue()), o(y, b, t, r, i);
    }
  }
  return m ? (i || (i = new Ue()), Sp(e, n, t, r, o, i)) : !1;
}
function yo(e, n, t, r, o) {
  return e === n ? !0 : e == null || n == null || !sn(e) && !sn(n) ? e !== e && n !== n : _p(e, n, t, r, yo, o);
}
var Pp = 1, Op = 2;
function Ep(e, n, t, r) {
  var o = t.length, i = o;
  if (e == null)
    return !i;
  for (e = Object(e); o--; ) {
    var a = t[o];
    if (a[2] ? a[1] !== e[a[0]] : !(a[0] in e))
      return !1;
  }
  for (; ++o < i; ) {
    a = t[o];
    var l = a[0], s = e[l], u = a[1];
    if (a[2]) {
      if (s === void 0 && !(l in e))
        return !1;
    } else {
      var c = new Ue(), h;
      if (!(h === void 0 ? yo(u, s, Pp | Op, r, c) : h))
        return !1;
    }
  }
  return !0;
}
function Ua(e) {
  return e === e && !un(e);
}
function Tp(e) {
  for (var n = vo(e), t = n.length; t--; ) {
    var r = n[t], o = e[r];
    n[t] = [r, o, Ua(o)];
  }
  return n;
}
function Va(e, n) {
  return function(t) {
    return t == null ? !1 : t[e] === n && (n !== void 0 || e in Object(t));
  };
}
function Rp(e) {
  var n = Tp(e);
  return n.length == 1 && n[0][2] ? Va(n[0][0], n[0][1]) : function(t) {
    return t === e || Ep(t, e, n);
  };
}
function Mp(e, n) {
  return e != null && n in Object(e);
}
function Ap(e, n, t) {
  n = Aa(n, e);
  for (var r = -1, o = n.length, i = !1; ++r < o; ) {
    var a = Xt(n[r]);
    if (!(i = e != null && t(e, a)))
      break;
    e = e[a];
  }
  return i || ++r != o ? i : (o = e == null ? 0 : e.length, !!o && po(o) && fo(a, o) && (Ae(e) || zt(e)));
}
function Ip(e, n) {
  return e != null && Ap(e, n, Mp);
}
var Dp = 1, $p = 2;
function Fp(e, n) {
  return bo(e) && Ua(n) ? Va(Xt(e), n) : function(t) {
    var r = Vf(t, e);
    return r === void 0 && r === n ? Ip(t, e) : yo(n, r, Dp | $p);
  };
}
function zp(e) {
  return function(n) {
    return n == null ? void 0 : n[e];
  };
}
function Np(e) {
  return function(n) {
    return Ia(n, e);
  };
}
function kp(e) {
  return bo(e) ? zp(Xt(e)) : Np(e);
}
function Bp(e) {
  return typeof e == "function" ? e : e == null ? uo : typeof e == "object" ? Ae(e) ? Fp(e[0], e[1]) : Rp(e) : kp(e);
}
function Lp(e) {
  return function(n, t, r) {
    for (var o = -1, i = Object(n), a = r(n), l = a.length; l--; ) {
      var s = a[++o];
      if (t(i[s], s, i) === !1)
        break;
    }
    return n;
  };
}
var Ga = Lp();
function Wp(e, n) {
  return e && Ga(e, n, vo);
}
function Hp(e, n) {
  return function(t, r) {
    if (t == null)
      return t;
    if (!Kn(t))
      return e(t, r);
    for (var o = t.length, i = -1, a = Object(t); ++i < o && r(a[i], i, a) !== !1; )
      ;
    return t;
  };
}
var jp = Hp(Wp);
function Zr(e, n, t) {
  (t !== void 0 && !ht(e[n], t) || t === void 0 && !(n in e)) && ho(e, n, t);
}
function Up(e) {
  return sn(e) && Kn(e);
}
function Qr(e, n) {
  if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
    return e[n];
}
function Vp(e) {
  return mc(e, Ra(e));
}
function Gp(e, n, t, r, o, i, a) {
  var l = Qr(e, t), s = Qr(n, t), u = a.get(s);
  if (u) {
    Zr(e, t, u);
    return;
  }
  var c = i ? i(l, s, t + "", e, n, a) : void 0, h = c === void 0;
  if (h) {
    var m = Ae(s), v = !m && Nt(s), f = !m && !v && go(s);
    c = s, m || v || f ? Ae(l) ? c = l : Up(l) ? c = tc(l) : v ? (h = !1, c = Dh(s)) : f ? (h = !1, c = Kh(s)) : c = [] : Zf(s) || zt(s) ? (c = l, zt(l) ? c = Vp(l) : (!un(l) || co(l)) && (c = Xh(s))) : h = !1;
  }
  h && (a.set(s, c), o(c, s, r, i, a), a.delete(s)), Zr(e, t, c);
}
function Ka(e, n, t, r, o) {
  e !== n && Ga(n, function(i, a) {
    if (o || (o = new Ue()), un(i))
      Gp(e, n, a, t, Ka, r, o);
    else {
      var l = r ? r(Qr(e, a), i, a + "", e, n, o) : void 0;
      l === void 0 && (l = i), Zr(e, a, l);
    }
  }, Ra);
}
function Kp(e, n) {
  var t = -1, r = Kn(e) ? Array(e.length) : [];
  return jp(e, function(o, i, a) {
    r[++t] = n(o, i, a);
  }), r;
}
function Xp(e, n) {
  var t = Ae(e) ? wa : Kp;
  return t(e, Bp(n));
}
var Et = yc(function(e, n, t) {
  Ka(e, n, t);
});
function Xa(e) {
  const {
    mergedLocaleRef: n,
    mergedDateLocaleRef: t
  } = fe(Tn, null) || {}, r = z(() => {
    var i, a;
    return (a = (i = n == null ? void 0 : n.value) === null || i === void 0 ? void 0 : i[e]) !== null && a !== void 0 ? a : Ku[e];
  });
  return {
    dateLocaleRef: z(() => {
      var i;
      return (i = t == null ? void 0 : t.value) !== null && i !== void 0 ? i : Ed;
    }),
    localeRef: r
  };
}
const ct = "naive-ui-style";
function Jt(e, n, t) {
  if (!n) return;
  const r = En(), o = z(() => {
    const {
      value: l
    } = n;
    if (!l)
      return;
    const s = l[e];
    if (s)
      return s;
  }), i = fe(Tn, null), a = () => {
    Ye(() => {
      const {
        value: l
      } = t, s = `${l}${e}Rtl`;
      if (Xs(s, r)) return;
      const {
        value: u
      } = o;
      u && u.style.mount({
        id: s,
        head: !0,
        anchorMetaName: ct,
        props: {
          bPrefix: l ? `.${l}-` : void 0
        },
        ssr: r,
        parent: i == null ? void 0 : i.styleMountTarget
      });
    });
  };
  return r ? a() : to(a), o;
}
const pt = {
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
  fontSize: Jp,
  fontFamily: Yp,
  lineHeight: qp
} = pt, Ja = W("body", `
 margin: 0;
 font-size: ${Jp};
 font-family: ${Yp};
 line-height: ${qp};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [W("input", `
 font-family: inherit;
 font-size: inherit;
 `)]);
var Zp = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\mmj\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_11032_CTSDTHGKBNXAIWDN", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-QBN3J51", ComSpec: "C:\\WINDOWS\\system32\\cmd.exe", CURSOR_TRACE_ID: "09ee13f00f524892b908f0f5fa49cdb7", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "c:\\Users\\mmj\\AppData\\Local\\Programs\\cursor\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\mmj", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\mmj", INIT_CWD: "F:\\Work\\lowcode\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\mmj\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-QBN3J51", NODE: "C:\\Program Files\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com/", npm_config_user_agent: "pnpm/9.15.4 npm/? node/v18.20.2 win32 x64", npm_execpath: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "C:\\Program Files\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "8", NVM_HOME: "D:\\install\\nvm", NVM_SYMLINK: "C:\\Program Files\\nodejs", OneDrive: "C:\\Users\\mmj\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\Work\\lowcode\\lowcode-component\\scripts\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\Work\\lowcode\\lowcode-component\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\java8path;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Git\\cmd;C:\\Users\\mmj\\AppData\\Local\\Microsoft\\WindowsApps;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Microsoft VS Code\\bin;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\Work\\lowcode\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "AMD64 Family 23 Model 24 Stepping 1, AuthenticAMD", PROCESSOR_LEVEL: "23", PROCESSOR_REVISION: "1801", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\mmj\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\WINDOWS", TEMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "0.45.7", TMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-QBN3J51", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-QBN3J51", USERNAME: "mmj", USERPROFILE: "C:\\Users\\mmj", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "c:\\Users\\mmj\\AppData\\Local\\Programs\\cursor\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "C:\\Users\\mmj\\AppData\\Local\\Programs\\cursor\\Cursor.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-eb177ecbbf-sock", VSCODE_INJECTION: "1", windir: "C:\\WINDOWS" };
function Yt(e, n, t) {
  if (!n) {
    Zp.NODE_ENV !== "production" && Ca("use-style", "No style is specified.");
    return;
  }
  const r = En(), o = fe(Tn, null), i = () => {
    const a = t.value;
    n.mount({
      id: a === void 0 ? e : a + e,
      head: !0,
      anchorMetaName: ct,
      props: {
        bPrefix: a ? `.${a}-` : void 0
      },
      ssr: r,
      parent: o == null ? void 0 : o.styleMountTarget
    }), o != null && o.preflightStyleDisabled || Ja.mount({
      id: "n-global",
      head: !0,
      anchorMetaName: ct,
      ssr: r,
      parent: o == null ? void 0 : o.styleMountTarget
    });
  };
  r ? i() : to(i);
}
function xe(e, n, t, r, o, i) {
  const a = En(), l = fe(Tn, null);
  if (t) {
    const u = () => {
      const c = i == null ? void 0 : i.value;
      t.mount({
        id: c === void 0 ? n : c + n,
        head: !0,
        props: {
          bPrefix: c ? `.${c}-` : void 0
        },
        anchorMetaName: ct,
        ssr: a,
        parent: l == null ? void 0 : l.styleMountTarget
      }), l != null && l.preflightStyleDisabled || Ja.mount({
        id: "n-global",
        head: !0,
        anchorMetaName: ct,
        ssr: a,
        parent: l == null ? void 0 : l.styleMountTarget
      });
    };
    a ? u() : to(u);
  }
  return z(() => {
    var u;
    const {
      theme: {
        common: c,
        self: h,
        peers: m = {}
      } = {},
      themeOverrides: v = {},
      builtinThemeOverrides: f = {}
    } = o, {
      common: y,
      peers: b
    } = v, {
      common: p = void 0,
      [e]: {
        common: _ = void 0,
        self: R = void 0,
        peers: x = {}
      } = {}
    } = (l == null ? void 0 : l.mergedThemeRef.value) || {}, {
      common: E = void 0,
      [e]: k = {}
    } = (l == null ? void 0 : l.mergedThemeOverridesRef.value) || {}, {
      common: C,
      peers: w = {}
    } = k, M = Et({}, c || _ || p || r.common, E, C, y), O = Et(
      // {}, executed every time, no need for empty obj
      (u = h || R || r.self) === null || u === void 0 ? void 0 : u(M),
      f,
      k,
      v
    );
    return {
      common: M,
      self: O,
      peers: Et({}, r.peers, x, m),
      peerOverrides: Et({}, f.peers, w, b)
    };
  });
}
xe.props = {
  theme: Object,
  themeOverrides: Object,
  builtinThemeOverrides: Object
};
const Qp = G("base-icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`, [W("svg", `
 height: 1em;
 width: 1em;
 `)]), mt = oe({
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
    Yt("-base-icon", Qp, le(e, "clsPrefix"));
  },
  render() {
    return g("i", {
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
}), Ya = oe({
  name: "BaseIconSwitchTransition",
  setup(e, {
    slots: n
  }) {
    const t = jt();
    return () => g(Un, {
      name: "icon-switch-transition",
      appear: t.value
    }, n);
  }
});
function qa(e, n) {
  const t = oe({
    render() {
      return n();
    }
  });
  return oe({
    name: Ph(e),
    setup() {
      var r;
      const o = (r = fe(Tn, null)) === null || r === void 0 ? void 0 : r.mergedIconsRef;
      return () => {
        var i;
        const a = (i = o == null ? void 0 : o.value) === null || i === void 0 ? void 0 : i[e];
        return a ? a() : g(t, null);
      };
    }
  });
}
const em = oe({
  name: "Checkmark",
  render() {
    return g("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, g("g", {
      fill: "none"
    }, g("path", {
      d: "M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",
      fill: "currentColor"
    })));
  }
}), nm = oe({
  name: "ChevronDown",
  render() {
    return g("svg", {
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, g("path", {
      d: "M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",
      fill: "currentColor"
    }));
  }
}), tm = qa("clear", () => g("svg", {
  viewBox: "0 0 16 16",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, g("g", {
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, g("g", {
  fill: "currentColor",
  "fill-rule": "nonzero"
}, g("path", {
  d: "M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"
}))))), rm = qa("close", () => g("svg", {
  viewBox: "0 0 12 12",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": !0
}, g("g", {
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, g("g", {
  fill: "currentColor",
  "fill-rule": "nonzero"
}, g("path", {
  d: "M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"
}))))), om = oe({
  name: "Empty",
  render() {
    return g("svg", {
      viewBox: "0 0 28 28",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, g("path", {
      d: "M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",
      fill: "currentColor"
    }), g("path", {
      d: "M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",
      fill: "currentColor"
    }));
  }
}), {
  cubicBezierEaseInOut: im
} = pt;
function eo({
  originalTransform: e = "",
  left: n = 0,
  top: t = 0,
  transition: r = `all .3s ${im} !important`
} = {}) {
  return [W("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to", {
    transform: `${e} scale(0.75)`,
    left: n,
    top: t,
    opacity: 0
  }), W("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from", {
    transform: `scale(1) ${e}`,
    left: n,
    top: t,
    opacity: 1
  }), W("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active", {
    transformOrigin: "center",
    position: "absolute",
    left: n,
    top: t,
    transition: r
  })];
}
const am = G("base-clear", `
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`, [W(">", [J("clear", `
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `, [W("&:hover", `
 color: var(--n-clear-color-hover)!important;
 `), W("&:active", `
 color: var(--n-clear-color-pressed)!important;
 `)]), J("placeholder", `
 display: flex;
 `), J("clear, placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [eo({
  originalTransform: "translateX(-50%) translateY(-50%)",
  left: "50%",
  top: "50%"
})])])]), lm = oe({
  name: "BaseClear",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    },
    show: Boolean,
    onClear: Function
  },
  setup(e) {
    return Yt("-base-clear", am, le(e, "clsPrefix")), {
      handleMouseDown(n) {
        n.preventDefault();
      }
    };
  },
  render() {
    const {
      clsPrefix: e
    } = this;
    return g("div", {
      class: `${e}-base-clear`
    }, g(Ya, null, {
      default: () => {
        var n, t;
        return this.show ? g("div", {
          key: "dismiss",
          class: `${e}-base-clear__clear`,
          onClick: this.onClear,
          onMousedown: this.handleMouseDown,
          "data-clear": !0
        }, lo(this.$slots.icon, () => [g(mt, {
          clsPrefix: e
        }, {
          default: () => g(tm, null)
        })])) : g("div", {
          key: "icon",
          class: `${e}-base-clear__placeholder`
        }, (t = (n = this.$slots).placeholder) === null || t === void 0 ? void 0 : t.call(n));
      }
    }));
  }
}), sm = G("base-close", `
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
`, [te("absolute", `
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `), W("&::before", `
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `), ze("disabled", [W("&:hover", `
 color: var(--n-close-icon-color-hover);
 `), W("&:hover::before", `
 background-color: var(--n-close-color-hover);
 `), W("&:focus::before", `
 background-color: var(--n-close-color-hover);
 `), W("&:active", `
 color: var(--n-close-icon-color-pressed);
 `), W("&:active::before", `
 background-color: var(--n-close-color-pressed);
 `)]), te("disabled", `
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `), te("round", [W("&::before", `
 border-radius: 50%;
 `)])]), um = oe({
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
    return Yt("-base-close", sm, le(e, "clsPrefix")), () => {
      const {
        clsPrefix: n,
        disabled: t,
        absolute: r,
        round: o,
        isButtonTag: i
      } = e;
      return g(i ? "button" : "div", {
        type: i ? "button" : void 0,
        tabindex: t || !e.focusable ? -1 : 0,
        "aria-disabled": t,
        "aria-label": "close",
        role: i ? void 0 : "button",
        disabled: t,
        class: [`${n}-base-close`, r && `${n}-base-close--absolute`, t && `${n}-base-close--disabled`, o && `${n}-base-close--round`],
        onMousedown: (l) => {
          e.focusable || l.preventDefault();
        },
        onClick: e.onClick
      }, g(mt, {
        clsPrefix: n
      }, {
        default: () => g(rm, null)
      }));
    };
  }
}), dm = oe({
  props: {
    onFocus: Function,
    onBlur: Function
  },
  setup(e) {
    return () => g("div", {
      style: "width: 0; height: 0",
      tabindex: 0,
      onFocus: e.onFocus,
      onBlur: e.onBlur
    });
  }
}), cm = W([W("@keyframes rotator", `
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`), G("base-loading", `
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `, [J("transition-wrapper", `
 position: absolute;
 width: 100%;
 height: 100%;
 `, [eo()]), J("placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [eo({
  left: "50%",
  top: "50%",
  originalTransform: "translateX(-50%) translateY(-50%)"
})]), J("container", `
 animation: rotator 3s linear infinite both;
 `, [J("icon", `
 height: 1em;
 width: 1em;
 `)])])]), Ar = "1.6s", fm = {
  strokeWidth: {
    type: Number,
    default: 28
  },
  stroke: {
    type: String,
    default: void 0
  }
}, Za = oe({
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
  }, fm),
  setup(e) {
    Yt("-base-loading", cm, le(e, "clsPrefix"));
  },
  render() {
    const {
      clsPrefix: e,
      radius: n,
      strokeWidth: t,
      stroke: r,
      scale: o
    } = this, i = n / o;
    return g("div", {
      class: `${e}-base-loading`,
      role: "img",
      "aria-label": "loading"
    }, g(Ya, null, {
      default: () => this.show ? g("div", {
        key: "icon",
        class: `${e}-base-loading__transition-wrapper`
      }, g("div", {
        class: `${e}-base-loading__container`
      }, g("svg", {
        class: `${e}-base-loading__icon`,
        viewBox: `0 0 ${2 * i} ${2 * i}`,
        xmlns: "http://www.w3.org/2000/svg",
        style: {
          color: r
        }
      }, g("g", null, g("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        values: `0 ${i} ${i};270 ${i} ${i}`,
        begin: "0s",
        dur: Ar,
        fill: "freeze",
        repeatCount: "indefinite"
      }), g("circle", {
        class: `${e}-base-loading__icon`,
        fill: "none",
        stroke: "currentColor",
        "stroke-width": t,
        "stroke-linecap": "round",
        cx: i,
        cy: i,
        r: n - t / 2,
        "stroke-dasharray": 5.67 * n,
        "stroke-dashoffset": 18.48 * n
      }, g("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        values: `0 ${i} ${i};135 ${i} ${i};450 ${i} ${i}`,
        begin: "0s",
        dur: Ar,
        fill: "freeze",
        repeatCount: "indefinite"
      }), g("animate", {
        attributeName: "stroke-dashoffset",
        values: `${5.67 * n};${1.42 * n};${5.67 * n}`,
        begin: "0s",
        dur: Ar,
        fill: "freeze",
        repeatCount: "indefinite"
      })))))) : g("div", {
        key: "placeholder",
        class: `${e}-base-loading__placeholder`
      }, this.$slots)
    }));
  }
}), {
  cubicBezierEaseInOut: Oi
} = pt;
function hm({
  name: e = "fade-in",
  enterDuration: n = "0.2s",
  leaveDuration: t = "0.2s",
  enterCubicBezier: r = Oi,
  leaveCubicBezier: o = Oi
} = {}) {
  return [W(`&.${e}-transition-enter-active`, {
    transition: `all ${n} ${r}!important`
  }), W(`&.${e}-transition-leave-active`, {
    transition: `all ${t} ${o}!important`
  }), W(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`, {
    opacity: 0
  }), W(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`, {
    opacity: 1
  })];
}
const V = {
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
}, pm = _n(V.neutralBase), Qa = _n(V.neutralInvertBase), mm = `rgba(${Qa.slice(0, 3).join(", ")}, `;
function Ei(e) {
  return `${mm + String(e)})`;
}
function Ce(e) {
  const n = Array.from(Qa);
  return n[3] = Number(e), zl(pm, n);
}
const $n = Object.assign(Object.assign({
  name: "common"
}, pt), {
  baseColor: V.neutralBase,
  // primary color
  primaryColor: V.primaryDefault,
  primaryColorHover: V.primaryHover,
  primaryColorPressed: V.primaryActive,
  primaryColorSuppl: V.primarySuppl,
  // info color
  infoColor: V.infoDefault,
  infoColorHover: V.infoHover,
  infoColorPressed: V.infoActive,
  infoColorSuppl: V.infoSuppl,
  // success color
  successColor: V.successDefault,
  successColorHover: V.successHover,
  successColorPressed: V.successActive,
  successColorSuppl: V.successSuppl,
  // warning color
  warningColor: V.warningDefault,
  warningColorHover: V.warningHover,
  warningColorPressed: V.warningActive,
  warningColorSuppl: V.warningSuppl,
  // error color
  errorColor: V.errorDefault,
  errorColorHover: V.errorHover,
  errorColorPressed: V.errorActive,
  errorColorSuppl: V.errorSuppl,
  // text color
  textColorBase: V.neutralTextBase,
  textColor1: "rgb(31, 34, 37)",
  textColor2: "rgb(51, 54, 57)",
  textColor3: "rgb(118, 124, 130)",
  // textColor4: neutral(base.alpha4), // disabled, placeholder, icon
  // textColor5: neutral(base.alpha5),
  textColorDisabled: Ce(V.alpha4),
  placeholderColor: Ce(V.alpha4),
  placeholderColorDisabled: Ce(V.alpha5),
  iconColor: Ce(V.alpha4),
  iconColorHover: bt(Ce(V.alpha4), {
    lightness: 0.75
  }),
  iconColorPressed: bt(Ce(V.alpha4), {
    lightness: 0.9
  }),
  iconColorDisabled: Ce(V.alpha5),
  opacity1: V.alpha1,
  opacity2: V.alpha2,
  opacity3: V.alpha3,
  opacity4: V.alpha4,
  opacity5: V.alpha5,
  dividerColor: "rgb(239, 239, 245)",
  borderColor: "rgb(224, 224, 230)",
  // close
  closeIconColor: Ce(Number(V.alphaClose)),
  closeIconColorHover: Ce(Number(V.alphaClose)),
  closeIconColorPressed: Ce(Number(V.alphaClose)),
  closeColorHover: "rgba(0, 0, 0, .09)",
  closeColorPressed: "rgba(0, 0, 0, .13)",
  // clear
  clearColor: Ce(V.alpha4),
  clearColorHover: bt(Ce(V.alpha4), {
    lightness: 0.75
  }),
  clearColorPressed: bt(Ce(V.alpha4), {
    lightness: 0.9
  }),
  scrollbarColor: Ei(V.alphaScrollbar),
  scrollbarColorHover: Ei(V.alphaScrollbarHover),
  scrollbarWidth: "5px",
  scrollbarHeight: "5px",
  scrollbarBorderRadius: "5px",
  progressRailColor: Ce(V.alphaProgressRail),
  railColor: "rgb(219, 219, 223)",
  popoverColor: V.neutralPopover,
  tableColor: V.neutralCard,
  cardColor: V.neutralCard,
  modalColor: V.neutralModal,
  bodyColor: V.neutralBody,
  tagColor: "#eee",
  avatarColor: Ce(V.alphaAvatar),
  invertedColor: "rgb(0, 20, 40)",
  inputColor: Ce(V.alphaInput),
  codeColor: "rgb(244, 244, 248)",
  tabColor: "rgb(247, 247, 250)",
  actionColor: "rgb(250, 250, 252)",
  tableHeaderColor: "rgb(250, 250, 252)",
  hoverColor: "rgb(243, 243, 245)",
  // use color with alpha since it can be nested with header filter & sorter effect
  tableColorHover: "rgba(0, 0, 100, 0.03)",
  tableColorStriped: "rgba(0, 0, 100, 0.02)",
  pressedColor: "rgb(237, 237, 239)",
  opacityDisabled: V.alphaDisabled,
  inputColorDisabled: "rgb(250, 250, 252)",
  // secondary button color
  // can also be used in tertiary button & quaternary button
  buttonColor2: "rgba(46, 51, 56, .05)",
  buttonColor2Hover: "rgba(46, 51, 56, .09)",
  buttonColor2Pressed: "rgba(46, 51, 56, .13)",
  boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",
  boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",
  boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"
}), gm = {
  railInsetHorizontalBottom: "auto 2px 4px 2px",
  railInsetHorizontalTop: "4px 2px auto 2px",
  railInsetVerticalRight: "2px 4px 2px auto",
  railInsetVerticalLeft: "2px auto 2px 4px",
  railColor: "transparent"
};
function vm(e) {
  const {
    scrollbarColor: n,
    scrollbarColorHover: t,
    scrollbarHeight: r,
    scrollbarWidth: o,
    scrollbarBorderRadius: i
  } = e;
  return Object.assign(Object.assign({}, gm), {
    height: r,
    width: o,
    borderRadius: i,
    color: n,
    colorHover: t
  });
}
const el = {
  name: "Scrollbar",
  common: $n,
  self: vm
}, bm = G("scrollbar", `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [W(">", [G("scrollbar-container", `
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
  G("scrollbar-content", `
 box-sizing: border-box;
 min-width: 100%;
 `)
])])]), W(">, +", [G("scrollbar-rail", `
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `, [te("horizontal", `
 height: var(--n-scrollbar-height);
 `, [W(">", [J("scrollbar", `
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]), te("horizontal--top", `
 top: var(--n-scrollbar-rail-top-horizontal-top); 
 right: var(--n-scrollbar-rail-right-horizontal-top); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-top); 
 left: var(--n-scrollbar-rail-left-horizontal-top); 
 `), te("horizontal--bottom", `
 top: var(--n-scrollbar-rail-top-horizontal-bottom); 
 right: var(--n-scrollbar-rail-right-horizontal-bottom); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-bottom); 
 left: var(--n-scrollbar-rail-left-horizontal-bottom); 
 `), te("vertical", `
 width: var(--n-scrollbar-width);
 `, [W(">", [J("scrollbar", `
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]), te("vertical--left", `
 top: var(--n-scrollbar-rail-top-vertical-left); 
 right: var(--n-scrollbar-rail-right-vertical-left); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-left); 
 left: var(--n-scrollbar-rail-left-vertical-left); 
 `), te("vertical--right", `
 top: var(--n-scrollbar-rail-top-vertical-right); 
 right: var(--n-scrollbar-rail-right-vertical-right); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-right); 
 left: var(--n-scrollbar-rail-left-vertical-right); 
 `), te("disabled", [W(">", [J("scrollbar", "pointer-events: none;")])]), W(">", [J("scrollbar", `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [hm(), W("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), Cm = Object.assign(Object.assign({}, xe.props), {
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
}), nl = oe({
  name: "Scrollbar",
  props: Cm,
  inheritAttrs: !1,
  setup(e) {
    const {
      mergedClsPrefixRef: n,
      inlineThemeDisabled: t,
      mergedRtlRef: r
    } = Rn(e), o = Jt("Scrollbar", r, n), i = F(null), a = F(null), l = F(null), s = F(null), u = F(null), c = F(null), h = F(null), m = F(null), v = F(null), f = F(null), y = F(null), b = F(0), p = F(0), _ = F(!1), R = F(!1);
    let x = !1, E = !1, k, C, w = 0, M = 0, O = 0, j = 0;
    const Q = Ps(), P = xe("Scrollbar", "-scrollbar", bm, el, e, n), $ = z(() => {
      const {
        value: d
      } = m, {
        value: S
      } = c, {
        value: A
      } = f;
      return d === null || S === null || A === null ? 0 : Math.min(d, A * d / S + lt(P.value.self.width) * 1.5);
    }), T = z(() => `${$.value}px`), L = z(() => {
      const {
        value: d
      } = v, {
        value: S
      } = h, {
        value: A
      } = y;
      return d === null || S === null || A === null ? 0 : A * d / S + lt(P.value.self.height) * 1.5;
    }), Y = z(() => `${L.value}px`), Z = z(() => {
      const {
        value: d
      } = m, {
        value: S
      } = b, {
        value: A
      } = c, {
        value: H
      } = f;
      if (d === null || A === null || H === null)
        return 0;
      {
        const U = A - d;
        return U ? S / U * (H - $.value) : 0;
      }
    }), ee = z(() => `${Z.value}px`), X = z(() => {
      const {
        value: d
      } = v, {
        value: S
      } = p, {
        value: A
      } = h, {
        value: H
      } = y;
      if (d === null || A === null || H === null)
        return 0;
      {
        const U = A - d;
        return U ? S / U * (H - L.value) : 0;
      }
    }), ie = z(() => `${X.value}px`), I = z(() => {
      const {
        value: d
      } = m, {
        value: S
      } = c;
      return d !== null && S !== null && S > d;
    }), N = z(() => {
      const {
        value: d
      } = v, {
        value: S
      } = h;
      return d !== null && S !== null && S > d;
    }), re = z(() => {
      const {
        trigger: d
      } = e;
      return d === "none" || _.value;
    }), ge = z(() => {
      const {
        trigger: d
      } = e;
      return d === "none" || R.value;
    }), ve = z(() => {
      const {
        container: d
      } = e;
      return d ? d() : a.value;
    }), ke = z(() => {
      const {
        content: d
      } = e;
      return d ? d() : l.value;
    }), Oe = (d, S) => {
      if (!e.scrollable) return;
      if (typeof d == "number") {
        Te(d, S ?? 0, 0, !1, "auto");
        return;
      }
      const {
        left: A,
        top: H,
        index: U,
        elSize: K,
        position: q,
        behavior: ne,
        el: de,
        debounce: We = !0
      } = d;
      (A !== void 0 || H !== void 0) && Te(A ?? 0, H ?? 0, 0, !1, ne), de !== void 0 ? Te(0, de.offsetTop, de.offsetHeight, We, ne) : U !== void 0 && K !== void 0 ? Te(0, U * K, K, We, ne) : q === "bottom" ? Te(0, Number.MAX_SAFE_INTEGER, 0, !1, ne) : q === "top" && Te(0, 0, 0, !1, ne);
    }, me = Iu(() => {
      e.container || Oe({
        top: b.value,
        left: p.value
      });
    }), Be = () => {
      me.isDeactivated || B();
    }, _e = (d) => {
      if (me.isDeactivated) return;
      const {
        onResize: S
      } = e;
      S && S(d), B();
    }, dn = (d, S) => {
      if (!e.scrollable) return;
      const {
        value: A
      } = ve;
      A && (typeof d == "object" ? A.scrollBy(d) : A.scrollBy(d, S || 0));
    };
    function Te(d, S, A, H, U) {
      const {
        value: K
      } = ve;
      if (K) {
        if (H) {
          const {
            scrollTop: q,
            offsetHeight: ne
          } = K;
          if (S > q) {
            S + A <= q + ne || K.scrollTo({
              left: d,
              top: S + A - ne,
              behavior: U
            });
            return;
          }
        }
        K.scrollTo({
          left: d,
          top: S,
          behavior: U
        });
      }
    }
    function cn() {
      pn(), mn(), B();
    }
    function fn() {
      De();
    }
    function De() {
      Ge(), hn();
    }
    function Ge() {
      C !== void 0 && window.clearTimeout(C), C = window.setTimeout(() => {
        R.value = !1;
      }, e.duration);
    }
    function hn() {
      k !== void 0 && window.clearTimeout(k), k = window.setTimeout(() => {
        _.value = !1;
      }, e.duration);
    }
    function pn() {
      k !== void 0 && window.clearTimeout(k), _.value = !0;
    }
    function mn() {
      C !== void 0 && window.clearTimeout(C), R.value = !0;
    }
    function en(d) {
      const {
        onScroll: S
      } = e;
      S && S(d), Le();
    }
    function Le() {
      const {
        value: d
      } = ve;
      d && (b.value = d.scrollTop, p.value = d.scrollLeft * (o != null && o.value ? -1 : 1));
    }
    function be() {
      const {
        value: d
      } = ke;
      d && (c.value = d.offsetHeight, h.value = d.offsetWidth);
      const {
        value: S
      } = ve;
      S && (m.value = S.offsetHeight, v.value = S.offsetWidth);
      const {
        value: A
      } = u, {
        value: H
      } = s;
      A && (y.value = A.offsetWidth), H && (f.value = H.offsetHeight);
    }
    function D() {
      const {
        value: d
      } = ve;
      d && (b.value = d.scrollTop, p.value = d.scrollLeft * (o != null && o.value ? -1 : 1), m.value = d.offsetHeight, v.value = d.offsetWidth, c.value = d.scrollHeight, h.value = d.scrollWidth);
      const {
        value: S
      } = u, {
        value: A
      } = s;
      S && (y.value = S.offsetWidth), A && (f.value = A.offsetHeight);
    }
    function B() {
      e.scrollable && (e.useUnifiedContainer ? D() : (be(), Le()));
    }
    function ue(d) {
      var S;
      return !(!((S = i.value) === null || S === void 0) && S.contains(at(d)));
    }
    function Xn(d) {
      d.preventDefault(), d.stopPropagation(), E = !0, Pe("mousemove", window, Fn, !0), Pe("mouseup", window, gn, !0), M = p.value, O = o != null && o.value ? window.innerWidth - d.clientX : d.clientX;
    }
    function Fn(d) {
      if (!E) return;
      k !== void 0 && window.clearTimeout(k), C !== void 0 && window.clearTimeout(C);
      const {
        value: S
      } = v, {
        value: A
      } = h, {
        value: H
      } = L;
      if (S === null || A === null) return;
      const K = (o != null && o.value ? window.innerWidth - d.clientX - O : d.clientX - O) * (A - S) / (S - H), q = A - S;
      let ne = M + K;
      ne = Math.min(q, ne), ne = Math.max(ne, 0);
      const {
        value: de
      } = ve;
      if (de) {
        de.scrollLeft = ne * (o != null && o.value ? -1 : 1);
        const {
          internalOnUpdateScrollLeft: We
        } = e;
        We && We(ne);
      }
    }
    function gn(d) {
      d.preventDefault(), d.stopPropagation(), pe("mousemove", window, Fn, !0), pe("mouseup", window, gn, !0), E = !1, B(), ue(d) && De();
    }
    function zn(d) {
      d.preventDefault(), d.stopPropagation(), x = !0, Pe("mousemove", window, nn, !0), Pe("mouseup", window, vn, !0), w = b.value, j = d.clientY;
    }
    function nn(d) {
      if (!x) return;
      k !== void 0 && window.clearTimeout(k), C !== void 0 && window.clearTimeout(C);
      const {
        value: S
      } = m, {
        value: A
      } = c, {
        value: H
      } = $;
      if (S === null || A === null) return;
      const K = (d.clientY - j) * (A - S) / (S - H), q = A - S;
      let ne = w + K;
      ne = Math.min(q, ne), ne = Math.max(ne, 0);
      const {
        value: de
      } = ve;
      de && (de.scrollTop = ne);
    }
    function vn(d) {
      d.preventDefault(), d.stopPropagation(), pe("mousemove", window, nn, !0), pe("mouseup", window, vn, !0), x = !1, B(), ue(d) && De();
    }
    Ye(() => {
      const {
        value: d
      } = N, {
        value: S
      } = I, {
        value: A
      } = n, {
        value: H
      } = u, {
        value: U
      } = s;
      H && (d ? H.classList.remove(`${A}-scrollbar-rail--disabled`) : H.classList.add(`${A}-scrollbar-rail--disabled`)), U && (S ? U.classList.remove(`${A}-scrollbar-rail--disabled`) : U.classList.add(`${A}-scrollbar-rail--disabled`));
    }), Ie(() => {
      e.container || B();
    }), Ne(() => {
      k !== void 0 && window.clearTimeout(k), C !== void 0 && window.clearTimeout(C), pe("mousemove", window, nn, !0), pe("mouseup", window, vn, !0);
    });
    const Nn = z(() => {
      const {
        common: {
          cubicBezierEaseInOut: d
        },
        self: {
          color: S,
          colorHover: A,
          height: H,
          width: U,
          borderRadius: K,
          railInsetHorizontalTop: q,
          railInsetHorizontalBottom: ne,
          railInsetVerticalRight: de,
          railInsetVerticalLeft: We,
          railColor: qt
        }
      } = P.value, {
        top: Zt,
        right: Qt,
        bottom: er,
        left: nr
      } = Fe(q), {
        top: tr,
        right: rr,
        bottom: or,
        left: ir
      } = Fe(ne), {
        top: ar,
        right: lr,
        bottom: sr,
        left: ur
      } = Fe(o != null && o.value ? Jo(de) : de), {
        top: dr,
        right: cr,
        bottom: fr,
        left: hr
      } = Fe(o != null && o.value ? Jo(We) : We);
      return {
        "--n-scrollbar-bezier": d,
        "--n-scrollbar-color": S,
        "--n-scrollbar-color-hover": A,
        "--n-scrollbar-border-radius": K,
        "--n-scrollbar-width": U,
        "--n-scrollbar-height": H,
        "--n-scrollbar-rail-top-horizontal-top": Zt,
        "--n-scrollbar-rail-right-horizontal-top": Qt,
        "--n-scrollbar-rail-bottom-horizontal-top": er,
        "--n-scrollbar-rail-left-horizontal-top": nr,
        "--n-scrollbar-rail-top-horizontal-bottom": tr,
        "--n-scrollbar-rail-right-horizontal-bottom": rr,
        "--n-scrollbar-rail-bottom-horizontal-bottom": or,
        "--n-scrollbar-rail-left-horizontal-bottom": ir,
        "--n-scrollbar-rail-top-vertical-right": ar,
        "--n-scrollbar-rail-right-vertical-right": lr,
        "--n-scrollbar-rail-bottom-vertical-right": sr,
        "--n-scrollbar-rail-left-vertical-right": ur,
        "--n-scrollbar-rail-top-vertical-left": dr,
        "--n-scrollbar-rail-right-vertical-left": cr,
        "--n-scrollbar-rail-bottom-vertical-left": fr,
        "--n-scrollbar-rail-left-vertical-left": hr,
        "--n-scrollbar-rail-color": qt
      };
    }), $e = t ? Mn("scrollbar", void 0, Nn, e) : void 0;
    return Object.assign(Object.assign({}, {
      scrollTo: Oe,
      scrollBy: dn,
      sync: B,
      syncUnifiedContainer: D,
      handleMouseEnterWrapper: cn,
      handleMouseLeaveWrapper: fn
    }), {
      mergedClsPrefix: n,
      rtlEnabled: o,
      containerScrollTop: b,
      wrapperRef: i,
      containerRef: a,
      contentRef: l,
      yRailRef: s,
      xRailRef: u,
      needYBar: I,
      needXBar: N,
      yBarSizePx: T,
      xBarSizePx: Y,
      yBarTopPx: ee,
      xBarLeftPx: ie,
      isShowXBar: re,
      isShowYBar: ge,
      isIos: Q,
      handleScroll: en,
      handleContentResize: Be,
      handleContainerResize: _e,
      handleYScrollMouseDown: zn,
      handleXScrollMouseDown: Xn,
      cssVars: t ? void 0 : Nn,
      themeClass: $e == null ? void 0 : $e.themeClass,
      onRender: $e == null ? void 0 : $e.onRender
    });
  },
  render() {
    var e;
    const {
      $slots: n,
      mergedClsPrefix: t,
      triggerDisplayManually: r,
      rtlEnabled: o,
      internalHoistYRail: i,
      yPlacement: a,
      xPlacement: l,
      xScrollable: s
    } = this;
    if (!this.scrollable) return (e = n.default) === null || e === void 0 ? void 0 : e.call(n);
    const u = this.trigger === "none", c = (v, f) => g("div", {
      ref: "yRailRef",
      class: [`${t}-scrollbar-rail`, `${t}-scrollbar-rail--vertical`, `${t}-scrollbar-rail--vertical--${a}`, v],
      "data-scrollbar-rail": !0,
      style: [f || "", this.verticalRailStyle],
      "aria-hidden": !0
    }, g(u ? Vr : Un, u ? null : {
      name: "fade-in-transition"
    }, {
      default: () => this.needYBar && this.isShowYBar && !this.isIos ? g("div", {
        class: `${t}-scrollbar-rail__scrollbar`,
        style: {
          height: this.yBarSizePx,
          top: this.yBarTopPx
        },
        onMousedown: this.handleYScrollMouseDown
      }) : null
    })), h = () => {
      var v, f;
      return (v = this.onRender) === null || v === void 0 || v.call(this), g("div", Ht(this.$attrs, {
        role: "none",
        ref: "wrapperRef",
        class: [`${t}-scrollbar`, this.themeClass, o && `${t}-scrollbar--rtl`],
        style: this.cssVars,
        onMouseenter: r ? void 0 : this.handleMouseEnterWrapper,
        onMouseleave: r ? void 0 : this.handleMouseLeaveWrapper
      }), [this.container ? (f = n.default) === null || f === void 0 ? void 0 : f.call(n) : g("div", {
        role: "none",
        ref: "containerRef",
        class: [`${t}-scrollbar-container`, this.containerClass],
        style: this.containerStyle,
        onScroll: this.handleScroll,
        onWheel: this.onWheel
      }, g($t, {
        onResize: this.handleContentResize
      }, {
        default: () => g("div", {
          ref: "contentRef",
          role: "none",
          style: [{
            width: this.xScrollable ? "fit-content" : null
          }, this.contentStyle],
          class: [`${t}-scrollbar-content`, this.contentClass]
        }, n)
      })), i ? null : c(void 0, void 0), s && g("div", {
        ref: "xRailRef",
        class: [`${t}-scrollbar-rail`, `${t}-scrollbar-rail--horizontal`, `${t}-scrollbar-rail--horizontal--${l}`],
        style: this.horizontalRailStyle,
        "data-scrollbar-rail": !0,
        "aria-hidden": !0
      }, g(u ? Vr : Un, u ? null : {
        name: "fade-in-transition"
      }, {
        default: () => this.needXBar && this.isShowXBar && !this.isIos ? g("div", {
          class: `${t}-scrollbar-rail__scrollbar`,
          style: {
            width: this.xBarSizePx,
            right: o ? this.xBarLeftPx : void 0,
            left: o ? void 0 : this.xBarLeftPx
          },
          onMousedown: this.handleXScrollMouseDown
        }) : null
      }))]);
    }, m = this.container ? h() : g($t, {
      onResize: this.handleContainerResize
    }, {
      default: h
    });
    return i ? g(On, null, m, c(this.themeClass, this.cssVars)) : m;
  }
}), ym = nl, Sm = {
  iconSizeTiny: "28px",
  iconSizeSmall: "34px",
  iconSizeMedium: "40px",
  iconSizeLarge: "46px",
  iconSizeHuge: "52px"
};
function wm(e) {
  const {
    textColorDisabled: n,
    iconColor: t,
    textColor2: r,
    fontSizeTiny: o,
    fontSizeSmall: i,
    fontSizeMedium: a,
    fontSizeLarge: l,
    fontSizeHuge: s
  } = e;
  return Object.assign(Object.assign({}, Sm), {
    fontSizeTiny: o,
    fontSizeSmall: i,
    fontSizeMedium: a,
    fontSizeLarge: l,
    fontSizeHuge: s,
    textColor: n,
    iconColor: t,
    extraTextColor: r
  });
}
const tl = {
  name: "Empty",
  common: $n,
  self: wm
}, xm = G("empty", `
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`, [J("icon", `
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `, [W("+", [J("description", `
 margin-top: 8px;
 `)])]), J("description", `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), J("extra", `
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]), _m = Object.assign(Object.assign({}, xe.props), {
  description: String,
  showDescription: {
    type: Boolean,
    default: !0
  },
  showIcon: {
    type: Boolean,
    default: !0
  },
  size: {
    type: String,
    default: "medium"
  },
  renderIcon: Function
}), Pm = oe({
  name: "Empty",
  props: _m,
  slots: Object,
  setup(e) {
    const {
      mergedClsPrefixRef: n,
      inlineThemeDisabled: t,
      mergedComponentPropsRef: r
    } = Rn(e), o = xe("Empty", "-empty", xm, tl, e, n), {
      localeRef: i
    } = Xa("Empty"), a = z(() => {
      var c, h, m;
      return (c = e.description) !== null && c !== void 0 ? c : (m = (h = r == null ? void 0 : r.value) === null || h === void 0 ? void 0 : h.Empty) === null || m === void 0 ? void 0 : m.description;
    }), l = z(() => {
      var c, h;
      return ((h = (c = r == null ? void 0 : r.value) === null || c === void 0 ? void 0 : c.Empty) === null || h === void 0 ? void 0 : h.renderIcon) || (() => g(om, null));
    }), s = z(() => {
      const {
        size: c
      } = e, {
        common: {
          cubicBezierEaseInOut: h
        },
        self: {
          [ce("iconSize", c)]: m,
          [ce("fontSize", c)]: v,
          textColor: f,
          iconColor: y,
          extraTextColor: b
        }
      } = o.value;
      return {
        "--n-icon-size": m,
        "--n-font-size": v,
        "--n-bezier": h,
        "--n-text-color": f,
        "--n-icon-color": y,
        "--n-extra-text-color": b
      };
    }), u = t ? Mn("empty", z(() => {
      let c = "";
      const {
        size: h
      } = e;
      return c += h[0], c;
    }), s, e) : void 0;
    return {
      mergedClsPrefix: n,
      mergedRenderIcon: l,
      localizedDescription: z(() => a.value || i.value.description),
      cssVars: t ? void 0 : s,
      themeClass: u == null ? void 0 : u.themeClass,
      onRender: u == null ? void 0 : u.onRender
    };
  },
  render() {
    const {
      $slots: e,
      mergedClsPrefix: n,
      onRender: t
    } = this;
    return t == null || t(), g("div", {
      class: [`${n}-empty`, this.themeClass],
      style: this.cssVars
    }, this.showIcon ? g("div", {
      class: `${n}-empty__icon`
    }, e.icon ? e.icon() : g(mt, {
      clsPrefix: n
    }, {
      default: this.mergedRenderIcon
    })) : null, this.showDescription ? g("div", {
      class: `${n}-empty__description`
    }, e.default ? e.default() : this.localizedDescription) : null, e.extra ? g("div", {
      class: `${n}-empty__extra`
    }, e.extra()) : null);
  }
}), Om = {
  height: "calc(var(--n-option-height) * 7.6)",
  paddingTiny: "4px 0",
  paddingSmall: "4px 0",
  paddingMedium: "4px 0",
  paddingLarge: "4px 0",
  paddingHuge: "4px 0",
  optionPaddingTiny: "0 12px",
  optionPaddingSmall: "0 12px",
  optionPaddingMedium: "0 12px",
  optionPaddingLarge: "0 12px",
  optionPaddingHuge: "0 12px",
  loadingSize: "18px"
};
function Em(e) {
  const {
    borderRadius: n,
    popoverColor: t,
    textColor3: r,
    dividerColor: o,
    textColor2: i,
    primaryColorPressed: a,
    textColorDisabled: l,
    primaryColor: s,
    opacityDisabled: u,
    hoverColor: c,
    fontSizeTiny: h,
    fontSizeSmall: m,
    fontSizeMedium: v,
    fontSizeLarge: f,
    fontSizeHuge: y,
    heightTiny: b,
    heightSmall: p,
    heightMedium: _,
    heightLarge: R,
    heightHuge: x
  } = e;
  return Object.assign(Object.assign({}, Om), {
    optionFontSizeTiny: h,
    optionFontSizeSmall: m,
    optionFontSizeMedium: v,
    optionFontSizeLarge: f,
    optionFontSizeHuge: y,
    optionHeightTiny: b,
    optionHeightSmall: p,
    optionHeightMedium: _,
    optionHeightLarge: R,
    optionHeightHuge: x,
    borderRadius: n,
    color: t,
    groupHeaderTextColor: r,
    actionDividerColor: o,
    optionTextColor: i,
    optionTextColorPressed: a,
    optionTextColorDisabled: l,
    optionTextColorActive: s,
    optionOpacityDisabled: u,
    optionCheckColor: s,
    optionColorPending: c,
    optionColorActive: "rgba(0, 0, 0, 0)",
    optionColorActivePending: c,
    actionTextColor: i,
    loadingColor: s
  });
}
const rl = {
  name: "InternalSelectMenu",
  common: $n,
  peers: {
    Scrollbar: el,
    Empty: tl
  },
  self: Em
}, Ti = oe({
  name: "NBaseSelectGroupHeader",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    },
    tmNode: {
      type: Object,
      required: !0
    }
  },
  setup() {
    const {
      renderLabelRef: e,
      renderOptionRef: n,
      labelFieldRef: t,
      nodePropsRef: r
    } = fe(ao);
    return {
      labelField: t,
      nodeProps: r,
      renderLabel: e,
      renderOption: n
    };
  },
  render() {
    const {
      clsPrefix: e,
      renderLabel: n,
      renderOption: t,
      nodeProps: r,
      tmNode: {
        rawNode: o
      }
    } = this, i = r == null ? void 0 : r(o), a = n ? n(o, !1) : Wn(o[this.labelField], o, !1), l = g("div", Object.assign({}, i, {
      class: [`${e}-base-select-group-header`, i == null ? void 0 : i.class]
    }), a);
    return o.render ? o.render({
      node: l,
      option: o
    }) : t ? t({
      node: l,
      option: o,
      selected: !1
    }) : l;
  }
});
function Tm(e, n) {
  return g(Un, {
    name: "fade-in-scale-up-transition"
  }, {
    default: () => e ? g(mt, {
      clsPrefix: n,
      class: `${n}-base-select-option__check`
    }, {
      default: () => g(em)
    }) : null
  });
}
const Ri = oe({
  name: "NBaseSelectOption",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    },
    tmNode: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const {
      valueRef: n,
      pendingTmNodeRef: t,
      multipleRef: r,
      valueSetRef: o,
      renderLabelRef: i,
      renderOptionRef: a,
      labelFieldRef: l,
      valueFieldRef: s,
      showCheckmarkRef: u,
      nodePropsRef: c,
      handleOptionClick: h,
      handleOptionMouseEnter: m
    } = fe(ao), v = Me(() => {
      const {
        value: p
      } = t;
      return p ? e.tmNode.key === p.key : !1;
    });
    function f(p) {
      const {
        tmNode: _
      } = e;
      _.disabled || h(p, _);
    }
    function y(p) {
      const {
        tmNode: _
      } = e;
      _.disabled || m(p, _);
    }
    function b(p) {
      const {
        tmNode: _
      } = e, {
        value: R
      } = v;
      _.disabled || R || m(p, _);
    }
    return {
      multiple: r,
      isGrouped: Me(() => {
        const {
          tmNode: p
        } = e, {
          parent: _
        } = p;
        return _ && _.rawNode.type === "group";
      }),
      showCheckmark: u,
      nodeProps: c,
      isPending: v,
      isSelected: Me(() => {
        const {
          value: p
        } = n, {
          value: _
        } = r;
        if (p === null) return !1;
        const R = e.tmNode.rawNode[s.value];
        if (_) {
          const {
            value: x
          } = o;
          return x.has(R);
        } else
          return p === R;
      }),
      labelField: l,
      renderLabel: i,
      renderOption: a,
      handleMouseMove: b,
      handleMouseEnter: y,
      handleClick: f
    };
  },
  render() {
    const {
      clsPrefix: e,
      tmNode: {
        rawNode: n
      },
      isSelected: t,
      isPending: r,
      isGrouped: o,
      showCheckmark: i,
      nodeProps: a,
      renderOption: l,
      renderLabel: s,
      handleClick: u,
      handleMouseEnter: c,
      handleMouseMove: h
    } = this, m = Tm(t, e), v = s ? [s(n, t), i && m] : [Wn(n[this.labelField], n, t), i && m], f = a == null ? void 0 : a(n), y = g("div", Object.assign({}, f, {
      class: [`${e}-base-select-option`, n.class, f == null ? void 0 : f.class, {
        [`${e}-base-select-option--disabled`]: n.disabled,
        [`${e}-base-select-option--selected`]: t,
        [`${e}-base-select-option--grouped`]: o,
        [`${e}-base-select-option--pending`]: r,
        [`${e}-base-select-option--show-checkmark`]: i
      }],
      style: [(f == null ? void 0 : f.style) || "", n.style || ""],
      onClick: Or([u, f == null ? void 0 : f.onClick]),
      onMouseenter: Or([c, f == null ? void 0 : f.onMouseenter]),
      onMousemove: Or([h, f == null ? void 0 : f.onMousemove])
    }), g("div", {
      class: `${e}-base-select-option__content`
    }, v));
    return n.render ? n.render({
      node: y,
      option: n,
      selected: t
    }) : l ? l({
      node: y,
      option: n,
      selected: t
    }) : y;
  }
}), {
  cubicBezierEaseIn: Mi,
  cubicBezierEaseOut: Ai
} = pt;
function ol({
  transformOrigin: e = "inherit",
  duration: n = ".2s",
  enterScale: t = ".9",
  originalTransform: r = "",
  originalTransition: o = ""
} = {}) {
  return [W("&.fade-in-scale-up-transition-leave-active", {
    transformOrigin: e,
    transition: `opacity ${n} ${Mi}, transform ${n} ${Mi} ${o && `,${o}`}`
  }), W("&.fade-in-scale-up-transition-enter-active", {
    transformOrigin: e,
    transition: `opacity ${n} ${Ai}, transform ${n} ${Ai} ${o && `,${o}`}`
  }), W("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to", {
    opacity: 0,
    transform: `${r} scale(${t})`
  }), W("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to", {
    opacity: 1,
    transform: `${r} scale(1)`
  })];
}
const Rm = G("base-select-menu", `
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`, [G("scrollbar", `
 max-height: var(--n-height);
 `), G("virtual-list", `
 max-height: var(--n-height);
 `), G("base-select-option", `
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `, [J("content", `
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]), G("base-select-group-header", `
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `), G("base-select-menu-option-wrapper", `
 position: relative;
 width: 100%;
 `), J("loading, empty", `
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `), J("loading", `
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `), J("header", `
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `), J("action", `
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `), G("base-select-group-header", `
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `), G("base-select-option", `
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `, [te("show-checkmark", `
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `), W("&::before", `
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `), W("&:active", `
 color: var(--n-option-text-color-pressed);
 `), te("grouped", `
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `), te("pending", [W("&::before", `
 background-color: var(--n-option-color-pending);
 `)]), te("selected", `
 color: var(--n-option-text-color-active);
 `, [W("&::before", `
 background-color: var(--n-option-color-active);
 `), te("pending", [W("&::before", `
 background-color: var(--n-option-color-active-pending);
 `)])]), te("disabled", `
 cursor: not-allowed;
 `, [ze("selected", `
 color: var(--n-option-text-color-disabled);
 `), te("selected", `
 opacity: var(--n-option-opacity-disabled);
 `)]), J("check", `
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `, [ol({
  enterScale: "0.5"
})])])]), Mm = oe({
  name: "InternalSelectMenu",
  props: Object.assign(Object.assign({}, xe.props), {
    clsPrefix: {
      type: String,
      required: !0
    },
    scrollable: {
      type: Boolean,
      default: !0
    },
    treeMate: {
      type: Object,
      required: !0
    },
    multiple: Boolean,
    size: {
      type: String,
      default: "medium"
    },
    value: {
      type: [String, Number, Array],
      default: null
    },
    autoPending: Boolean,
    virtualScroll: {
      type: Boolean,
      default: !0
    },
    // show is used to toggle pending state initialization
    show: {
      type: Boolean,
      default: !0
    },
    labelField: {
      type: String,
      default: "label"
    },
    valueField: {
      type: String,
      default: "value"
    },
    loading: Boolean,
    focusable: Boolean,
    renderLabel: Function,
    renderOption: Function,
    nodeProps: Function,
    showCheckmark: {
      type: Boolean,
      default: !0
    },
    onMousedown: Function,
    onScroll: Function,
    onFocus: Function,
    onBlur: Function,
    onKeyup: Function,
    onKeydown: Function,
    onTabOut: Function,
    onMouseenter: Function,
    onMouseleave: Function,
    onResize: Function,
    resetMenuOnOptionsChange: {
      type: Boolean,
      default: !0
    },
    inlineThemeDisabled: Boolean,
    // deprecated
    onToggle: Function
  }),
  setup(e) {
    const {
      mergedClsPrefixRef: n,
      mergedRtlRef: t
    } = Rn(e), r = Jt("InternalSelectMenu", t, n), o = xe("InternalSelectMenu", "-internal-select-menu", Rm, rl, e, le(e, "clsPrefix")), i = F(null), a = F(null), l = F(null), s = z(() => e.treeMate.getFlattenedNodes()), u = z(() => ql(s.value)), c = F(null);
    function h() {
      const {
        treeMate: I
      } = e;
      let N = null;
      const {
        value: re
      } = e;
      re === null ? N = I.getFirstAvailableNode() : (e.multiple ? N = I.getNode((re || [])[(re || []).length - 1]) : N = I.getNode(re), (!N || N.disabled) && (N = I.getFirstAvailableNode())), $(N || null);
    }
    function m() {
      const {
        value: I
      } = c;
      I && !e.treeMate.getNode(I.key) && (c.value = null);
    }
    let v;
    we(() => e.show, (I) => {
      I ? v = we(() => e.treeMate, () => {
        e.resetMenuOnOptionsChange ? (e.autoPending ? h() : m(), Wt(T)) : m();
      }, {
        immediate: !0
      }) : v == null || v();
    }, {
      immediate: !0
    }), Ne(() => {
      v == null || v();
    });
    const f = z(() => lt(o.value.self[ce("optionHeight", e.size)])), y = z(() => Fe(o.value.self[ce("padding", e.size)])), b = z(() => e.multiple && Array.isArray(e.value) ? new Set(e.value) : /* @__PURE__ */ new Set()), p = z(() => {
      const I = s.value;
      return I && I.length === 0;
    });
    function _(I) {
      const {
        onToggle: N
      } = e;
      N && N(I);
    }
    function R(I) {
      const {
        onScroll: N
      } = e;
      N && N(I);
    }
    function x(I) {
      var N;
      (N = l.value) === null || N === void 0 || N.sync(), R(I);
    }
    function E() {
      var I;
      (I = l.value) === null || I === void 0 || I.sync();
    }
    function k() {
      const {
        value: I
      } = c;
      return I || null;
    }
    function C(I, N) {
      N.disabled || $(N, !1);
    }
    function w(I, N) {
      N.disabled || _(N);
    }
    function M(I) {
      var N;
      et(I, "action") || (N = e.onKeyup) === null || N === void 0 || N.call(e, I);
    }
    function O(I) {
      var N;
      et(I, "action") || (N = e.onKeydown) === null || N === void 0 || N.call(e, I);
    }
    function j(I) {
      var N;
      (N = e.onMousedown) === null || N === void 0 || N.call(e, I), !e.focusable && I.preventDefault();
    }
    function Q() {
      const {
        value: I
      } = c;
      I && $(I.getNext({
        loop: !0
      }), !0);
    }
    function P() {
      const {
        value: I
      } = c;
      I && $(I.getPrev({
        loop: !0
      }), !0);
    }
    function $(I, N = !1) {
      c.value = I, N && T();
    }
    function T() {
      var I, N;
      const re = c.value;
      if (!re) return;
      const ge = u.value(re.key);
      ge !== null && (e.virtualScroll ? (I = a.value) === null || I === void 0 || I.scrollTo({
        index: ge
      }) : (N = l.value) === null || N === void 0 || N.scrollTo({
        index: ge,
        elSize: f.value
      }));
    }
    function L(I) {
      var N, re;
      !((N = i.value) === null || N === void 0) && N.contains(I.target) && ((re = e.onFocus) === null || re === void 0 || re.call(e, I));
    }
    function Y(I) {
      var N, re;
      !((N = i.value) === null || N === void 0) && N.contains(I.relatedTarget) || (re = e.onBlur) === null || re === void 0 || re.call(e, I);
    }
    je(ao, {
      handleOptionMouseEnter: C,
      handleOptionClick: w,
      valueSetRef: b,
      pendingTmNodeRef: c,
      nodePropsRef: le(e, "nodeProps"),
      showCheckmarkRef: le(e, "showCheckmark"),
      multipleRef: le(e, "multiple"),
      valueRef: le(e, "value"),
      renderLabelRef: le(e, "renderLabel"),
      renderOptionRef: le(e, "renderOption"),
      labelFieldRef: le(e, "labelField"),
      valueFieldRef: le(e, "valueField")
    }), je(ca, i), Ie(() => {
      const {
        value: I
      } = l;
      I && I.sync();
    });
    const Z = z(() => {
      const {
        size: I
      } = e, {
        common: {
          cubicBezierEaseInOut: N
        },
        self: {
          height: re,
          borderRadius: ge,
          color: ve,
          groupHeaderTextColor: ke,
          actionDividerColor: Oe,
          optionTextColorPressed: me,
          optionTextColor: Be,
          optionTextColorDisabled: _e,
          optionTextColorActive: dn,
          optionOpacityDisabled: Te,
          optionCheckColor: cn,
          actionTextColor: fn,
          optionColorPending: De,
          optionColorActive: Ge,
          loadingColor: hn,
          loadingSize: pn,
          optionColorActivePending: mn,
          [ce("optionFontSize", I)]: en,
          [ce("optionHeight", I)]: Le,
          [ce("optionPadding", I)]: be
        }
      } = o.value;
      return {
        "--n-height": re,
        "--n-action-divider-color": Oe,
        "--n-action-text-color": fn,
        "--n-bezier": N,
        "--n-border-radius": ge,
        "--n-color": ve,
        "--n-option-font-size": en,
        "--n-group-header-text-color": ke,
        "--n-option-check-color": cn,
        "--n-option-color-pending": De,
        "--n-option-color-active": Ge,
        "--n-option-color-active-pending": mn,
        "--n-option-height": Le,
        "--n-option-opacity-disabled": Te,
        "--n-option-text-color": Be,
        "--n-option-text-color-active": dn,
        "--n-option-text-color-disabled": _e,
        "--n-option-text-color-pressed": me,
        "--n-option-padding": be,
        "--n-option-padding-left": Fe(be, "left"),
        "--n-option-padding-right": Fe(be, "right"),
        "--n-loading-color": hn,
        "--n-loading-size": pn
      };
    }), {
      inlineThemeDisabled: ee
    } = e, X = ee ? Mn("internal-select-menu", z(() => e.size[0]), Z, e) : void 0, ie = {
      selfRef: i,
      next: Q,
      prev: P,
      getPendingTmNode: k
    };
    return ga(i, e.onResize), Object.assign({
      mergedTheme: o,
      mergedClsPrefix: n,
      rtlEnabled: r,
      virtualListRef: a,
      scrollbarRef: l,
      itemSize: f,
      padding: y,
      flattenedNodes: s,
      empty: p,
      virtualListContainer() {
        const {
          value: I
        } = a;
        return I == null ? void 0 : I.listElRef;
      },
      virtualListContent() {
        const {
          value: I
        } = a;
        return I == null ? void 0 : I.itemsElRef;
      },
      doScroll: R,
      handleFocusin: L,
      handleFocusout: Y,
      handleKeyUp: M,
      handleKeyDown: O,
      handleMouseDown: j,
      handleVirtualListResize: E,
      handleVirtualListScroll: x,
      cssVars: ee ? void 0 : Z,
      themeClass: X == null ? void 0 : X.themeClass,
      onRender: X == null ? void 0 : X.onRender
    }, ie);
  },
  render() {
    const {
      $slots: e,
      virtualScroll: n,
      clsPrefix: t,
      mergedTheme: r,
      themeClass: o,
      onRender: i
    } = this;
    return i == null || i(), g("div", {
      ref: "selfRef",
      tabindex: this.focusable ? 0 : -1,
      class: [`${t}-base-select-menu`, this.rtlEnabled && `${t}-base-select-menu--rtl`, o, this.multiple && `${t}-base-select-menu--multiple`],
      style: this.cssVars,
      onFocusin: this.handleFocusin,
      onFocusout: this.handleFocusout,
      onKeyup: this.handleKeyUp,
      onKeydown: this.handleKeyDown,
      onMousedown: this.handleMouseDown,
      onMouseenter: this.onMouseenter,
      onMouseleave: this.onMouseleave
    }, xn(e.header, (a) => a && g("div", {
      class: `${t}-base-select-menu__header`,
      "data-header": !0,
      key: "header"
    }, a)), this.loading ? g("div", {
      class: `${t}-base-select-menu__loading`
    }, g(Za, {
      clsPrefix: t,
      strokeWidth: 20
    })) : this.empty ? g("div", {
      class: `${t}-base-select-menu__empty`,
      "data-empty": !0
    }, lo(e.empty, () => [g(Pm, {
      theme: r.peers.Empty,
      themeOverrides: r.peerOverrides.Empty,
      size: this.size
    })])) : g(nl, {
      ref: "scrollbarRef",
      theme: r.peers.Scrollbar,
      themeOverrides: r.peerOverrides.Scrollbar,
      scrollable: this.scrollable,
      container: n ? this.virtualListContainer : void 0,
      content: n ? this.virtualListContent : void 0,
      onScroll: n ? void 0 : this.doScroll
    }, {
      default: () => n ? g(Tu, {
        ref: "virtualListRef",
        class: `${t}-virtual-list`,
        items: this.flattenedNodes,
        itemSize: this.itemSize,
        showScrollbar: !1,
        paddingTop: this.padding.top,
        paddingBottom: this.padding.bottom,
        onResize: this.handleVirtualListResize,
        onScroll: this.handleVirtualListScroll,
        itemResizable: !0
      }, {
        default: ({
          item: a
        }) => a.isGroup ? g(Ti, {
          key: a.key,
          clsPrefix: t,
          tmNode: a
        }) : a.ignored ? null : g(Ri, {
          clsPrefix: t,
          key: a.key,
          tmNode: a
        })
      }) : g("div", {
        class: `${t}-base-select-menu-option-wrapper`,
        style: {
          paddingTop: this.padding.top,
          paddingBottom: this.padding.bottom
        }
      }, this.flattenedNodes.map((a) => a.isGroup ? g(Ti, {
        key: a.key,
        clsPrefix: t,
        tmNode: a
      }) : g(Ri, {
        clsPrefix: t,
        key: a.key,
        tmNode: a
      })))
    }), xn(e.action, (a) => a && [g("div", {
      class: `${t}-base-select-menu__action`,
      "data-action": !0,
      key: "action"
    }, a), g(dm, {
      onFocus: this.onTabOut,
      key: "focus-detector"
    })]));
  }
}), Am = {
  space: "6px",
  spaceArrow: "10px",
  arrowOffset: "10px",
  arrowOffsetVertical: "10px",
  arrowHeight: "6px",
  padding: "8px 14px"
};
function Im(e) {
  const {
    boxShadow2: n,
    popoverColor: t,
    textColor2: r,
    borderRadius: o,
    fontSize: i,
    dividerColor: a
  } = e;
  return Object.assign(Object.assign({}, Am), {
    fontSize: i,
    borderRadius: o,
    color: t,
    dividerColor: a,
    textColor: r,
    boxShadow: n
  });
}
const il = {
  name: "Popover",
  common: $n,
  self: Im
}, Ir = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, he = "var(--n-arrow-height) * 1.414", Dm = W([G("popover", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `, [W(">", [G("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), ze("raw", `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [ze("scrollable", [ze("show-header-or-footer", "padding: var(--n-padding);")])]), J("header", `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), J("footer", `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), te("scrollable, show-header-or-footer", [J("content", `
 padding: var(--n-padding);
 `)])]), G("popover-shared", `
 transform-origin: inherit;
 `, [
  G("popover-arrow-wrapper", `
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `, [G("popover-arrow", `
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${he});
 height: calc(${he});
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
]), Re("top-start", `
 top: calc(${he} / -2);
 left: calc(${Je("top-start")} - var(--v-offset-left));
 `), Re("top", `
 top: calc(${he} / -2);
 transform: translateX(calc(${he} / -2)) rotate(45deg);
 left: 50%;
 `), Re("top-end", `
 top: calc(${he} / -2);
 right: calc(${Je("top-end")} + var(--v-offset-left));
 `), Re("bottom-start", `
 bottom: calc(${he} / -2);
 left: calc(${Je("bottom-start")} - var(--v-offset-left));
 `), Re("bottom", `
 bottom: calc(${he} / -2);
 transform: translateX(calc(${he} / -2)) rotate(45deg);
 left: 50%;
 `), Re("bottom-end", `
 bottom: calc(${he} / -2);
 right: calc(${Je("bottom-end")} + var(--v-offset-left));
 `), Re("left-start", `
 left: calc(${he} / -2);
 top: calc(${Je("left-start")} - var(--v-offset-top));
 `), Re("left", `
 left: calc(${he} / -2);
 transform: translateY(calc(${he} / -2)) rotate(45deg);
 top: 50%;
 `), Re("left-end", `
 left: calc(${he} / -2);
 bottom: calc(${Je("left-end")} + var(--v-offset-top));
 `), Re("right-start", `
 right: calc(${he} / -2);
 top: calc(${Je("right-start")} - var(--v-offset-top));
 `), Re("right", `
 right: calc(${he} / -2);
 transform: translateY(calc(${he} / -2)) rotate(45deg);
 top: 50%;
 `), Re("right-end", `
 right: calc(${he} / -2);
 bottom: calc(${Je("right-end")} + var(--v-offset-top));
 `), ...Xp({
  top: ["right-start", "left-start"],
  right: ["top-end", "bottom-end"],
  bottom: ["right-end", "left-end"],
  left: ["top-start", "bottom-start"]
}, (e, n) => {
  const t = ["right", "left"].includes(n), r = t ? "width" : "height";
  return e.map((o) => {
    const i = o.split("-")[1] === "end", l = `calc((${`var(--v-target-${r}, 0px)`} - ${he}) / 2)`, s = Je(o);
    return W(`[v-placement="${o}"] >`, [G("popover-shared", [te("center-arrow", [G("popover-arrow", `${n}: calc(max(${l}, ${s}) ${i ? "+" : "-"} var(--v-offset-${t ? "left" : "top"}));`)])])]);
  });
})]);
function Je(e) {
  return ["top", "bottom"].includes(e.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)";
}
function Re(e, n) {
  const t = e.split("-")[0], r = ["top", "bottom"].includes(t) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
  return W(`[v-placement="${e}"] >`, [G("popover-shared", `
 margin-${Ir[t]}: var(--n-space);
 `, [te("show-arrow", `
 margin-${Ir[t]}: var(--n-space-arrow);
 `), te("overlap", `
 margin: 0;
 `), Bu("popover-arrow-wrapper", `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${t}: 100%;
 ${Ir[t]}: auto;
 ${r}
 `, [G("popover-arrow", n)])])]);
}
const al = Object.assign(Object.assign({}, xe.props), {
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
function $m({
  arrowClass: e,
  arrowStyle: n,
  arrowWrapperClass: t,
  arrowWrapperStyle: r,
  clsPrefix: o
}) {
  return g("div", {
    key: "__popover-arrow__",
    style: r,
    class: [`${o}-popover-arrow-wrapper`, t]
  }, g("div", {
    class: [`${o}-popover-arrow`, e],
    style: n
  }));
}
const Fm = oe({
  name: "PopoverBody",
  inheritAttrs: !1,
  props: al,
  setup(e, {
    slots: n,
    attrs: t
  }) {
    const {
      namespaceRef: r,
      mergedClsPrefixRef: o,
      inlineThemeDisabled: i
    } = Rn(e), a = xe("Popover", "-popover", Dm, il, e, o), l = F(null), s = fe("NPopover"), u = F(null), c = F(e.show), h = F(!1);
    Ye(() => {
      const {
        show: C
      } = e;
      C && !Lu() && !e.internalDeactivateImmediately && (h.value = !0);
    });
    const m = z(() => {
      const {
        trigger: C,
        onClickoutside: w
      } = e, M = [], {
        positionManuallyRef: {
          value: O
        }
      } = s;
      return O || (C === "click" && !w && M.push([Dt, x, void 0, {
        capture: !0
      }]), C === "hover" && M.push([vs, R])), w && M.push([Dt, x, void 0, {
        capture: !0
      }]), (e.displayDirective === "show" || e.animated && h.value) && M.push([zi, e.show]), M;
    }), v = z(() => {
      const {
        common: {
          cubicBezierEaseInOut: C,
          cubicBezierEaseIn: w,
          cubicBezierEaseOut: M
        },
        self: {
          space: O,
          spaceArrow: j,
          padding: Q,
          fontSize: P,
          textColor: $,
          dividerColor: T,
          color: L,
          boxShadow: Y,
          borderRadius: Z,
          arrowHeight: ee,
          arrowOffset: X,
          arrowOffsetVertical: ie
        }
      } = a.value;
      return {
        "--n-box-shadow": Y,
        "--n-bezier": C,
        "--n-bezier-ease-in": w,
        "--n-bezier-ease-out": M,
        "--n-font-size": P,
        "--n-text-color": $,
        "--n-color": L,
        "--n-divider-color": T,
        "--n-border-radius": Z,
        "--n-arrow-height": ee,
        "--n-arrow-offset": X,
        "--n-arrow-offset-vertical": ie,
        "--n-padding": Q,
        "--n-space": O,
        "--n-space-arrow": j
      };
    }), f = z(() => {
      const C = e.width === "trigger" ? void 0 : _r(e.width), w = [];
      C && w.push({
        width: C
      });
      const {
        maxWidth: M,
        minWidth: O
      } = e;
      return M && w.push({
        maxWidth: _r(M)
      }), O && w.push({
        maxWidth: _r(O)
      }), i || w.push(v.value), w;
    }), y = i ? Mn("popover", void 0, v, e) : void 0;
    s.setBodyInstance({
      syncPosition: b
    }), Ne(() => {
      s.setBodyInstance(null);
    }), we(le(e, "show"), (C) => {
      e.animated || (C ? c.value = !0 : c.value = !1);
    });
    function b() {
      var C;
      (C = l.value) === null || C === void 0 || C.syncPosition();
    }
    function p(C) {
      e.trigger === "hover" && e.keepAliveOnHover && e.show && s.handleMouseEnter(C);
    }
    function _(C) {
      e.trigger === "hover" && e.keepAliveOnHover && s.handleMouseLeave(C);
    }
    function R(C) {
      e.trigger === "hover" && !E().contains(at(C)) && s.handleMouseMoveOutside(C);
    }
    function x(C) {
      (e.trigger === "click" && !E().contains(at(C)) || e.onClickoutside) && s.handleClickOutside(C);
    }
    function E() {
      return s.getTriggerElement();
    }
    je(pa, u), je(fa, null), je(ha, null);
    function k() {
      if (y == null || y.onRender(), !(e.displayDirective === "show" || e.show || e.animated && h.value))
        return null;
      let w;
      const M = s.internalRenderBodyRef.value, {
        value: O
      } = o;
      if (M)
        w = M(
          // The popover class and overlap class must exists, they will be used
          // to place the body & transition animation.
          // Shadow class exists for reuse box-shadow.
          [`${O}-popover-shared`, y == null ? void 0 : y.themeClass.value, e.overlap && `${O}-popover-shared--overlap`, e.showArrow && `${O}-popover-shared--show-arrow`, e.arrowPointToCenter && `${O}-popover-shared--center-arrow`],
          u,
          f.value,
          p,
          _
        );
      else {
        const {
          value: j
        } = s.extraClassRef, {
          internalTrapFocus: Q
        } = e, P = !ei(n.header) || !ei(n.footer), $ = () => {
          var T, L;
          const Y = P ? g(On, null, xn(n.header, (X) => X ? g("div", {
            class: [`${O}-popover__header`, e.headerClass],
            style: e.headerStyle
          }, X) : null), xn(n.default, (X) => X ? g("div", {
            class: [`${O}-popover__content`, e.contentClass],
            style: e.contentStyle
          }, n) : null), xn(n.footer, (X) => X ? g("div", {
            class: [`${O}-popover__footer`, e.footerClass],
            style: e.footerStyle
          }, X) : null)) : e.scrollable ? (T = n.default) === null || T === void 0 ? void 0 : T.call(n) : g("div", {
            class: [`${O}-popover__content`, e.contentClass],
            style: e.contentStyle
          }, n), Z = e.scrollable ? g(ym, {
            contentClass: P ? void 0 : `${O}-popover__content ${(L = e.contentClass) !== null && L !== void 0 ? L : ""}`,
            contentStyle: P ? void 0 : e.contentStyle
          }, {
            default: () => Y
          }) : Y, ee = e.showArrow ? $m({
            arrowClass: e.arrowClass,
            arrowStyle: e.arrowStyle,
            arrowWrapperClass: e.arrowWrapperClass,
            arrowWrapperStyle: e.arrowWrapperStyle,
            clsPrefix: O
          }) : null;
          return [Z, ee];
        };
        w = g("div", Ht({
          class: [`${O}-popover`, `${O}-popover-shared`, y == null ? void 0 : y.themeClass.value, j.map((T) => `${O}-${T}`), {
            [`${O}-popover--scrollable`]: e.scrollable,
            [`${O}-popover--show-header-or-footer`]: P,
            [`${O}-popover--raw`]: e.raw,
            [`${O}-popover-shared--overlap`]: e.overlap,
            [`${O}-popover-shared--show-arrow`]: e.showArrow,
            [`${O}-popover-shared--center-arrow`]: e.arrowPointToCenter
          }],
          ref: u,
          style: f.value,
          onKeydown: s.handleKeydown,
          onMouseenter: p,
          onMouseleave: _
        }, t), Q ? g(Au, {
          active: e.show,
          autoFocus: !0
        }, {
          default: $
        }) : $());
      }
      return ft(w, m.value);
    }
    return {
      displayed: h,
      namespace: r,
      isMounted: s.isMountedRef,
      zIndex: s.zIndexRef,
      followerRef: l,
      adjustedTo: qe(e),
      followerEnabled: c,
      renderContentNode: k
    };
  },
  render() {
    return g(Qi, {
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
      default: () => this.animated ? g(Un, {
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
var zm = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\mmj\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_11032_CTSDTHGKBNXAIWDN", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-QBN3J51", ComSpec: "C:\\WINDOWS\\system32\\cmd.exe", CURSOR_TRACE_ID: "09ee13f00f524892b908f0f5fa49cdb7", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "c:\\Users\\mmj\\AppData\\Local\\Programs\\cursor\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\mmj", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\mmj", INIT_CWD: "F:\\Work\\lowcode\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\mmj\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-QBN3J51", NODE: "C:\\Program Files\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com/", npm_config_user_agent: "pnpm/9.15.4 npm/? node/v18.20.2 win32 x64", npm_execpath: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "C:\\Program Files\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "8", NVM_HOME: "D:\\install\\nvm", NVM_SYMLINK: "C:\\Program Files\\nodejs", OneDrive: "C:\\Users\\mmj\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\Work\\lowcode\\lowcode-component\\scripts\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\Work\\lowcode\\lowcode-component\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\java8path;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Git\\cmd;C:\\Users\\mmj\\AppData\\Local\\Microsoft\\WindowsApps;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Microsoft VS Code\\bin;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\Work\\lowcode\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "AMD64 Family 23 Model 24 Stepping 1, AuthenticAMD", PROCESSOR_LEVEL: "23", PROCESSOR_REVISION: "1801", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\mmj\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\WINDOWS", TEMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "0.45.7", TMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-QBN3J51", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-QBN3J51", USERNAME: "mmj", USERPROFILE: "C:\\Users\\mmj", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "c:\\Users\\mmj\\AppData\\Local\\Programs\\cursor\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "C:\\Users\\mmj\\AppData\\Local\\Programs\\cursor\\Cursor.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-eb177ecbbf-sock", VSCODE_INJECTION: "1", windir: "C:\\WINDOWS" };
const Nm = Object.keys(al), km = {
  focus: ["onFocus", "onBlur"],
  click: ["onClick"],
  hover: ["onMouseenter", "onMouseleave"],
  manual: [],
  nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"]
};
function Bm(e, n, t) {
  km[n].forEach((r) => {
    e.props ? e.props = Object.assign({}, e.props) : e.props = {};
    const o = e.props[r], i = t[r];
    o ? e.props[r] = (...a) => {
      o(...a), i(...a);
    } : e.props[r] = i;
  });
}
const Lm = {
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
}, Wm = Object.assign(Object.assign(Object.assign({}, xe.props), Lm), {
  internalOnAfterLeave: Function,
  internalRenderBody: Function
}), Hm = oe({
  name: "Popover",
  inheritAttrs: !1,
  props: Wm,
  slots: Object,
  __popover__: !0,
  setup(e) {
    zm.NODE_ENV !== "production" && Ye(() => {
      e.maxWidth !== void 0 && on("popover", "`max-width` is deprecated, please use `style` instead."), e.minWidth !== void 0 && on("popover", "`min-width` is deprecated, please use `style` instead."), e.arrow !== void 0 && on("popover", "`arrow` is deprecated, please use `showArrow` instead."), e.onHide !== void 0 && on("popover", "`on-hide` is deprecated, please use `on-update:show` instead."), e.onShow !== void 0 && on("popover", "`on-show` is deprecated, please use `on-update:show` instead.");
    });
    const n = jt(), t = F(null), r = z(() => e.show), o = F(e.defaultShow), i = kr(r, o), a = Me(() => e.disabled ? !1 : i.value), l = () => {
      if (e.disabled) return !0;
      const {
        getDisabled: T
      } = e;
      return !!(T != null && T());
    }, s = () => l() ? !1 : i.value, u = ji(e, ["arrow", "showArrow"]), c = z(() => e.overlap ? !1 : u.value);
    let h = null;
    const m = F(null), v = F(null), f = Me(() => e.x !== void 0 && e.y !== void 0);
    function y(T) {
      const {
        "onUpdate:show": L,
        onUpdateShow: Y,
        onShow: Z,
        onHide: ee
      } = e;
      o.value = T, L && ye(L, T), Y && ye(Y, T), T && Z && ye(Z, !0), T && ee && ye(ee, !1);
    }
    function b() {
      h && h.syncPosition();
    }
    function p() {
      const {
        value: T
      } = m;
      T && (window.clearTimeout(T), m.value = null);
    }
    function _() {
      const {
        value: T
      } = v;
      T && (window.clearTimeout(T), v.value = null);
    }
    function R() {
      const T = l();
      if (e.trigger === "focus" && !T) {
        if (s()) return;
        y(!0);
      }
    }
    function x() {
      const T = l();
      if (e.trigger === "focus" && !T) {
        if (!s()) return;
        y(!1);
      }
    }
    function E() {
      const T = l();
      if (e.trigger === "hover" && !T) {
        if (_(), m.value !== null || s()) return;
        const L = () => {
          y(!0), m.value = null;
        }, {
          delay: Y
        } = e;
        Y === 0 ? L() : m.value = window.setTimeout(L, Y);
      }
    }
    function k() {
      const T = l();
      if (e.trigger === "hover" && !T) {
        if (p(), v.value !== null || !s()) return;
        const L = () => {
          y(!1), v.value = null;
        }, {
          duration: Y
        } = e;
        Y === 0 ? L() : v.value = window.setTimeout(L, Y);
      }
    }
    function C() {
      k();
    }
    function w(T) {
      var L;
      s() && (e.trigger === "click" && (p(), _(), y(!1)), (L = e.onClickoutside) === null || L === void 0 || L.call(e, T));
    }
    function M() {
      if (e.trigger === "click" && !l()) {
        p(), _();
        const T = !s();
        y(T);
      }
    }
    function O(T) {
      e.internalTrapFocus && T.key === "Escape" && (p(), _(), y(!1));
    }
    function j(T) {
      o.value = T;
    }
    function Q() {
      var T;
      return (T = t.value) === null || T === void 0 ? void 0 : T.targetRef;
    }
    function P(T) {
      h = T;
    }
    return je("NPopover", {
      getTriggerElement: Q,
      handleKeydown: O,
      handleMouseEnter: E,
      handleMouseLeave: k,
      handleClickOutside: w,
      handleMouseMoveOutside: C,
      setBodyInstance: P,
      positionManuallyRef: f,
      isMountedRef: n,
      zIndexRef: le(e, "zIndex"),
      extraClassRef: le(e, "internalExtraClass"),
      internalRenderBodyRef: le(e, "internalRenderBody")
    }), Ye(() => {
      i.value && l() && y(!1);
    }), {
      binderInstRef: t,
      positionManually: f,
      mergedShowConsideringDisabledProp: a,
      // if to show popover body
      uncontrolledShow: o,
      mergedShowArrow: c,
      getMergedShow: s,
      setShow: j,
      handleClick: M,
      handleMouseEnter: E,
      handleMouseLeave: k,
      handleFocus: R,
      handleBlur: x,
      syncPosition: b
    };
  },
  render() {
    var e;
    const {
      positionManually: n,
      $slots: t
    } = this;
    let r, o = !1;
    if (!n && (r = ju(t, "trigger"), r)) {
      r = yl(r), r = r.type === Sl ? g("span", [r]) : r;
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
        } = this, l = [i, ...a], s = {
          onBlur: (u) => {
            l.forEach((c) => {
              c.onBlur(u);
            });
          },
          onFocus: (u) => {
            l.forEach((c) => {
              c.onFocus(u);
            });
          },
          onClick: (u) => {
            l.forEach((c) => {
              c.onClick(u);
            });
          },
          onMouseenter: (u) => {
            l.forEach((c) => {
              c.onMouseenter(u);
            });
          },
          onMouseleave: (u) => {
            l.forEach((c) => {
              c.onMouseleave(u);
            });
          }
        };
        Bm(r, a ? "nested" : n ? "manual" : this.trigger, s);
      }
    }
    return g(Gi, {
      ref: "binderInstRef",
      syncTarget: !o,
      syncTargetWithParent: this.internalSyncTargetWithParent
    }, {
      default: () => {
        this.mergedShowConsideringDisabledProp;
        const i = this.getMergedShow();
        return [this.internalTrapFocus && i ? ft(g("div", {
          style: {
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }), [[Hi, {
          enabled: i,
          zIndex: this.zIndex
        }]]) : null, n ? null : g(Ki, null, {
          default: () => r
        }), g(Fm, Uu(this.$props, Nm, Object.assign(Object.assign({}, this.$attrs), {
          showArrow: this.mergedShowArrow,
          show: i
        })), {
          default: () => {
            var a, l;
            return (l = (a = this.$slots).default) === null || l === void 0 ? void 0 : l.call(a);
          },
          header: () => {
            var a, l;
            return (l = (a = this.$slots).header) === null || l === void 0 ? void 0 : l.call(a);
          },
          footer: () => {
            var a, l;
            return (l = (a = this.$slots).footer) === null || l === void 0 ? void 0 : l.call(a);
          }
        })];
      }
    });
  }
}), jm = {
  closeIconSizeTiny: "12px",
  closeIconSizeSmall: "12px",
  closeIconSizeMedium: "14px",
  closeIconSizeLarge: "14px",
  closeSizeTiny: "16px",
  closeSizeSmall: "16px",
  closeSizeMedium: "18px",
  closeSizeLarge: "18px",
  padding: "0 7px",
  closeMargin: "0 0 0 4px"
};
function Um(e) {
  const {
    textColor2: n,
    primaryColorHover: t,
    primaryColorPressed: r,
    primaryColor: o,
    infoColor: i,
    successColor: a,
    warningColor: l,
    errorColor: s,
    baseColor: u,
    borderColor: c,
    opacityDisabled: h,
    tagColor: m,
    closeIconColor: v,
    closeIconColorHover: f,
    closeIconColorPressed: y,
    borderRadiusSmall: b,
    fontSizeMini: p,
    fontSizeTiny: _,
    fontSizeSmall: R,
    fontSizeMedium: x,
    heightMini: E,
    heightTiny: k,
    heightSmall: C,
    heightMedium: w,
    closeColorHover: M,
    closeColorPressed: O,
    buttonColor2Hover: j,
    buttonColor2Pressed: Q,
    fontWeightStrong: P
  } = e;
  return Object.assign(Object.assign({}, jm), {
    closeBorderRadius: b,
    heightTiny: E,
    heightSmall: k,
    heightMedium: C,
    heightLarge: w,
    borderRadius: b,
    opacityDisabled: h,
    fontSizeTiny: p,
    fontSizeSmall: _,
    fontSizeMedium: R,
    fontSizeLarge: x,
    fontWeightStrong: P,
    // checked
    textColorCheckable: n,
    textColorHoverCheckable: n,
    textColorPressedCheckable: n,
    textColorChecked: u,
    colorCheckable: "#0000",
    colorHoverCheckable: j,
    colorPressedCheckable: Q,
    colorChecked: o,
    colorCheckedHover: t,
    colorCheckedPressed: r,
    // default
    border: `1px solid ${c}`,
    textColor: n,
    color: m,
    colorBordered: "rgb(250, 250, 252)",
    closeIconColor: v,
    closeIconColorHover: f,
    closeIconColorPressed: y,
    closeColorHover: M,
    closeColorPressed: O,
    borderPrimary: `1px solid ${ae(o, {
      alpha: 0.3
    })}`,
    textColorPrimary: o,
    colorPrimary: ae(o, {
      alpha: 0.12
    }),
    colorBorderedPrimary: ae(o, {
      alpha: 0.1
    }),
    closeIconColorPrimary: o,
    closeIconColorHoverPrimary: o,
    closeIconColorPressedPrimary: o,
    closeColorHoverPrimary: ae(o, {
      alpha: 0.12
    }),
    closeColorPressedPrimary: ae(o, {
      alpha: 0.18
    }),
    borderInfo: `1px solid ${ae(i, {
      alpha: 0.3
    })}`,
    textColorInfo: i,
    colorInfo: ae(i, {
      alpha: 0.12
    }),
    colorBorderedInfo: ae(i, {
      alpha: 0.1
    }),
    closeIconColorInfo: i,
    closeIconColorHoverInfo: i,
    closeIconColorPressedInfo: i,
    closeColorHoverInfo: ae(i, {
      alpha: 0.12
    }),
    closeColorPressedInfo: ae(i, {
      alpha: 0.18
    }),
    borderSuccess: `1px solid ${ae(a, {
      alpha: 0.3
    })}`,
    textColorSuccess: a,
    colorSuccess: ae(a, {
      alpha: 0.12
    }),
    colorBorderedSuccess: ae(a, {
      alpha: 0.1
    }),
    closeIconColorSuccess: a,
    closeIconColorHoverSuccess: a,
    closeIconColorPressedSuccess: a,
    closeColorHoverSuccess: ae(a, {
      alpha: 0.12
    }),
    closeColorPressedSuccess: ae(a, {
      alpha: 0.18
    }),
    borderWarning: `1px solid ${ae(l, {
      alpha: 0.35
    })}`,
    textColorWarning: l,
    colorWarning: ae(l, {
      alpha: 0.15
    }),
    colorBorderedWarning: ae(l, {
      alpha: 0.12
    }),
    closeIconColorWarning: l,
    closeIconColorHoverWarning: l,
    closeIconColorPressedWarning: l,
    closeColorHoverWarning: ae(l, {
      alpha: 0.12
    }),
    closeColorPressedWarning: ae(l, {
      alpha: 0.18
    }),
    borderError: `1px solid ${ae(s, {
      alpha: 0.23
    })}`,
    textColorError: s,
    colorError: ae(s, {
      alpha: 0.1
    }),
    colorBorderedError: ae(s, {
      alpha: 0.08
    }),
    closeIconColorError: s,
    closeIconColorHoverError: s,
    closeIconColorPressedError: s,
    closeColorHoverError: ae(s, {
      alpha: 0.12
    }),
    closeColorPressedError: ae(s, {
      alpha: 0.18
    })
  });
}
const Vm = {
  name: "Tag",
  common: $n,
  self: Um
}, Gm = {
  color: Object,
  type: {
    type: String,
    default: "default"
  },
  round: Boolean,
  size: {
    type: String,
    default: "medium"
  },
  closable: Boolean,
  disabled: {
    type: Boolean,
    default: void 0
  }
}, Km = G("tag", `
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`, [te("strong", `
 font-weight: var(--n-font-weight-strong);
 `), J("border", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `), J("icon", `
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `), J("avatar", `
 display: flex;
 margin: 0 6px 0 0;
 `), J("close", `
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `), te("round", `
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `, [J("icon", `
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `), J("avatar", `
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `), te("closable", `
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]), te("icon, avatar", [te("round", `
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]), te("disabled", `
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `), te("checkable", `
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `, [ze("disabled", [W("&:hover", "background-color: var(--n-color-hover-checkable);", [ze("checked", "color: var(--n-text-color-hover-checkable);")]), W("&:active", "background-color: var(--n-color-pressed-checkable);", [ze("checked", "color: var(--n-text-color-pressed-checkable);")])]), te("checked", `
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `, [ze("disabled", [W("&:hover", "background-color: var(--n-color-checked-hover);"), W("&:active", "background-color: var(--n-color-checked-pressed);")])])])]);
var Xm = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\mmj\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_11032_CTSDTHGKBNXAIWDN", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-QBN3J51", ComSpec: "C:\\WINDOWS\\system32\\cmd.exe", CURSOR_TRACE_ID: "09ee13f00f524892b908f0f5fa49cdb7", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "c:\\Users\\mmj\\AppData\\Local\\Programs\\cursor\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\mmj", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\mmj", INIT_CWD: "F:\\Work\\lowcode\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\mmj\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-QBN3J51", NODE: "C:\\Program Files\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com/", npm_config_user_agent: "pnpm/9.15.4 npm/? node/v18.20.2 win32 x64", npm_execpath: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "C:\\Program Files\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "8", NVM_HOME: "D:\\install\\nvm", NVM_SYMLINK: "C:\\Program Files\\nodejs", OneDrive: "C:\\Users\\mmj\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\Work\\lowcode\\lowcode-component\\scripts\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\Work\\lowcode\\lowcode-component\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\java8path;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Git\\cmd;C:\\Users\\mmj\\AppData\\Local\\Microsoft\\WindowsApps;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Microsoft VS Code\\bin;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\Work\\lowcode\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "AMD64 Family 23 Model 24 Stepping 1, AuthenticAMD", PROCESSOR_LEVEL: "23", PROCESSOR_REVISION: "1801", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\mmj\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\WINDOWS", TEMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "0.45.7", TMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-QBN3J51", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-QBN3J51", USERNAME: "mmj", USERPROFILE: "C:\\Users\\mmj", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "c:\\Users\\mmj\\AppData\\Local\\Programs\\cursor\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "C:\\Users\\mmj\\AppData\\Local\\Programs\\cursor\\Cursor.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-eb177ecbbf-sock", VSCODE_INJECTION: "1", windir: "C:\\WINDOWS" };
const Jm = Object.assign(Object.assign(Object.assign({}, xe.props), Gm), {
  bordered: {
    type: Boolean,
    default: void 0
  },
  checked: Boolean,
  checkable: Boolean,
  strong: Boolean,
  triggerClickOnClose: Boolean,
  onClose: [Array, Function],
  onMouseenter: Function,
  onMouseleave: Function,
  "onUpdate:checked": Function,
  onUpdateChecked: Function,
  // private
  internalCloseFocusable: {
    type: Boolean,
    default: !0
  },
  internalCloseIsButtonTag: {
    type: Boolean,
    default: !0
  },
  // deprecated
  onCheckedChange: Function
}), Ym = "n-tag", Dr = oe({
  name: "Tag",
  props: Jm,
  slots: Object,
  setup(e) {
    Xm.NODE_ENV !== "production" && Ye(() => {
      e.onCheckedChange !== void 0 && on("tag", "`on-checked-change` is deprecated, please use `on-update:checked` instead");
    });
    const n = F(null), {
      mergedBorderedRef: t,
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = Rn(e), a = xe("Tag", "-tag", Km, Vm, e, r);
    je(Ym, {
      roundRef: le(e, "round")
    });
    function l() {
      if (!e.disabled && e.checkable) {
        const {
          checked: v,
          onCheckedChange: f,
          onUpdateChecked: y,
          "onUpdate:checked": b
        } = e;
        y && y(!v), b && b(!v), f && f(!v);
      }
    }
    function s(v) {
      if (e.triggerClickOnClose || v.stopPropagation(), !e.disabled) {
        const {
          onClose: f
        } = e;
        f && ye(f, v);
      }
    }
    const u = {
      setTextContent(v) {
        const {
          value: f
        } = n;
        f && (f.textContent = v);
      }
    }, c = Jt("Tag", i, r), h = z(() => {
      const {
        type: v,
        size: f,
        color: {
          color: y,
          textColor: b
        } = {}
      } = e, {
        common: {
          cubicBezierEaseInOut: p
        },
        self: {
          padding: _,
          closeMargin: R,
          borderRadius: x,
          opacityDisabled: E,
          textColorCheckable: k,
          textColorHoverCheckable: C,
          textColorPressedCheckable: w,
          textColorChecked: M,
          colorCheckable: O,
          colorHoverCheckable: j,
          colorPressedCheckable: Q,
          colorChecked: P,
          colorCheckedHover: $,
          colorCheckedPressed: T,
          closeBorderRadius: L,
          fontWeightStrong: Y,
          [ce("colorBordered", v)]: Z,
          [ce("closeSize", f)]: ee,
          [ce("closeIconSize", f)]: X,
          [ce("fontSize", f)]: ie,
          [ce("height", f)]: I,
          [ce("color", v)]: N,
          [ce("textColor", v)]: re,
          [ce("border", v)]: ge,
          [ce("closeIconColor", v)]: ve,
          [ce("closeIconColorHover", v)]: ke,
          [ce("closeIconColorPressed", v)]: Oe,
          [ce("closeColorHover", v)]: me,
          [ce("closeColorPressed", v)]: Be
        }
      } = a.value, _e = Fe(R);
      return {
        "--n-font-weight-strong": Y,
        "--n-avatar-size-override": `calc(${I} - 8px)`,
        "--n-bezier": p,
        "--n-border-radius": x,
        "--n-border": ge,
        "--n-close-icon-size": X,
        "--n-close-color-pressed": Be,
        "--n-close-color-hover": me,
        "--n-close-border-radius": L,
        "--n-close-icon-color": ve,
        "--n-close-icon-color-hover": ke,
        "--n-close-icon-color-pressed": Oe,
        "--n-close-icon-color-disabled": ve,
        "--n-close-margin-top": _e.top,
        "--n-close-margin-right": _e.right,
        "--n-close-margin-bottom": _e.bottom,
        "--n-close-margin-left": _e.left,
        "--n-close-size": ee,
        "--n-color": y || (t.value ? Z : N),
        "--n-color-checkable": O,
        "--n-color-checked": P,
        "--n-color-checked-hover": $,
        "--n-color-checked-pressed": T,
        "--n-color-hover-checkable": j,
        "--n-color-pressed-checkable": Q,
        "--n-font-size": ie,
        "--n-height": I,
        "--n-opacity-disabled": E,
        "--n-padding": _,
        "--n-text-color": b || re,
        "--n-text-color-checkable": k,
        "--n-text-color-checked": M,
        "--n-text-color-hover-checkable": C,
        "--n-text-color-pressed-checkable": w
      };
    }), m = o ? Mn("tag", z(() => {
      let v = "";
      const {
        type: f,
        size: y,
        color: {
          color: b,
          textColor: p
        } = {}
      } = e;
      return v += f[0], v += y[0], b && (v += `a${Ko(b)}`), p && (v += `b${Ko(p)}`), t.value && (v += "c"), v;
    }), h, e) : void 0;
    return Object.assign(Object.assign({}, u), {
      rtlEnabled: c,
      mergedClsPrefix: r,
      contentRef: n,
      mergedBordered: t,
      handleClick: l,
      handleCloseClick: s,
      cssVars: o ? void 0 : h,
      themeClass: m == null ? void 0 : m.themeClass,
      onRender: m == null ? void 0 : m.onRender
    });
  },
  render() {
    var e, n;
    const {
      mergedClsPrefix: t,
      rtlEnabled: r,
      closable: o,
      color: {
        borderColor: i
      } = {},
      round: a,
      onRender: l,
      $slots: s
    } = this;
    l == null || l();
    const u = xn(s.avatar, (h) => h && g("div", {
      class: `${t}-tag__avatar`
    }, h)), c = xn(s.icon, (h) => h && g("div", {
      class: `${t}-tag__icon`
    }, h));
    return g("div", {
      class: [`${t}-tag`, this.themeClass, {
        [`${t}-tag--rtl`]: r,
        [`${t}-tag--strong`]: this.strong,
        [`${t}-tag--disabled`]: this.disabled,
        [`${t}-tag--checkable`]: this.checkable,
        [`${t}-tag--checked`]: this.checkable && this.checked,
        [`${t}-tag--round`]: a,
        [`${t}-tag--avatar`]: u,
        [`${t}-tag--icon`]: c,
        [`${t}-tag--closable`]: o
      }],
      style: this.cssVars,
      onClick: this.handleClick,
      onMouseenter: this.onMouseenter,
      onMouseleave: this.onMouseleave
    }, c || u, g("span", {
      class: `${t}-tag__content`,
      ref: "contentRef"
    }, (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e)), !this.checkable && o ? g(um, {
      clsPrefix: t,
      class: `${t}-tag__close`,
      disabled: this.disabled,
      onClick: this.handleCloseClick,
      focusable: this.internalCloseFocusable,
      round: a,
      isButtonTag: this.internalCloseIsButtonTag,
      absolute: !0
    }) : null, !this.checkable && this.mergedBordered ? g("div", {
      class: `${t}-tag__border`,
      style: {
        borderColor: i
      }
    }) : null);
  }
}), qm = oe({
  name: "InternalSelectionSuffix",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    },
    showArrow: {
      type: Boolean,
      default: void 0
    },
    showClear: {
      type: Boolean,
      default: void 0
    },
    loading: {
      type: Boolean,
      default: !1
    },
    onClear: Function
  },
  setup(e, {
    slots: n
  }) {
    return () => {
      const {
        clsPrefix: t
      } = e;
      return g(Za, {
        clsPrefix: t,
        class: `${t}-base-suffix`,
        strokeWidth: 24,
        scale: 0.85,
        show: e.loading
      }, {
        default: () => e.showArrow ? g(lm, {
          clsPrefix: t,
          show: e.showClear,
          onClear: e.onClear
        }, {
          placeholder: () => g(mt, {
            clsPrefix: t,
            class: `${t}-base-suffix__arrow`
          }, {
            default: () => lo(n.default, () => [g(nm, null)])
          })
        }) : null
      });
    };
  }
}), Zm = {
  paddingSingle: "0 26px 0 12px",
  paddingMultiple: "3px 26px 0 12px",
  clearSize: "16px",
  arrowSize: "16px"
};
function Qm(e) {
  const {
    borderRadius: n,
    textColor2: t,
    textColorDisabled: r,
    inputColor: o,
    inputColorDisabled: i,
    primaryColor: a,
    primaryColorHover: l,
    warningColor: s,
    warningColorHover: u,
    errorColor: c,
    errorColorHover: h,
    borderColor: m,
    iconColor: v,
    iconColorDisabled: f,
    clearColor: y,
    clearColorHover: b,
    clearColorPressed: p,
    placeholderColor: _,
    placeholderColorDisabled: R,
    fontSizeTiny: x,
    fontSizeSmall: E,
    fontSizeMedium: k,
    fontSizeLarge: C,
    heightTiny: w,
    heightSmall: M,
    heightMedium: O,
    heightLarge: j,
    fontWeight: Q
  } = e;
  return Object.assign(Object.assign({}, Zm), {
    fontSizeTiny: x,
    fontSizeSmall: E,
    fontSizeMedium: k,
    fontSizeLarge: C,
    heightTiny: w,
    heightSmall: M,
    heightMedium: O,
    heightLarge: j,
    borderRadius: n,
    fontWeight: Q,
    // default
    textColor: t,
    textColorDisabled: r,
    placeholderColor: _,
    placeholderColorDisabled: R,
    color: o,
    colorDisabled: i,
    colorActive: o,
    border: `1px solid ${m}`,
    borderHover: `1px solid ${l}`,
    borderActive: `1px solid ${a}`,
    borderFocus: `1px solid ${l}`,
    boxShadowHover: "none",
    boxShadowActive: `0 0 0 2px ${ae(a, {
      alpha: 0.2
    })}`,
    boxShadowFocus: `0 0 0 2px ${ae(a, {
      alpha: 0.2
    })}`,
    caretColor: a,
    arrowColor: v,
    arrowColorDisabled: f,
    loadingColor: a,
    // warning
    borderWarning: `1px solid ${s}`,
    borderHoverWarning: `1px solid ${u}`,
    borderActiveWarning: `1px solid ${s}`,
    borderFocusWarning: `1px solid ${u}`,
    boxShadowHoverWarning: "none",
    boxShadowActiveWarning: `0 0 0 2px ${ae(s, {
      alpha: 0.2
    })}`,
    boxShadowFocusWarning: `0 0 0 2px ${ae(s, {
      alpha: 0.2
    })}`,
    colorActiveWarning: o,
    caretColorWarning: s,
    // error
    borderError: `1px solid ${c}`,
    borderHoverError: `1px solid ${h}`,
    borderActiveError: `1px solid ${c}`,
    borderFocusError: `1px solid ${h}`,
    boxShadowHoverError: "none",
    boxShadowActiveError: `0 0 0 2px ${ae(c, {
      alpha: 0.2
    })}`,
    boxShadowFocusError: `0 0 0 2px ${ae(c, {
      alpha: 0.2
    })}`,
    colorActiveError: o,
    caretColorError: c,
    clearColor: y,
    clearColorHover: b,
    clearColorPressed: p
  });
}
const ll = {
  name: "InternalSelection",
  common: $n,
  peers: {
    Popover: il
  },
  self: Qm
}, eg = W([G("base-selection", `
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `, [G("base-loading", `
 color: var(--n-loading-color);
 `), G("base-selection-tags", "min-height: var(--n-height);"), J("border, state-border", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `), J("state-border", `
 z-index: 1;
 border-color: #0000;
 `), G("base-suffix", `
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `, [J("arrow", `
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]), G("base-selection-overlay", `
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `, [J("wrapper", `
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]), G("base-selection-placeholder", `
 color: var(--n-placeholder-color);
 `, [J("inner", `
 max-width: 100%;
 overflow: hidden;
 `)]), G("base-selection-tags", `
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `), G("base-selection-label", `
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `, [G("base-selection-input", `
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `, [J("content", `
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]), J("render-label", `
 color: var(--n-text-color);
 `)]), ze("disabled", [W("&:hover", [J("state-border", `
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]), te("focus", [J("state-border", `
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]), te("active", [J("state-border", `
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `), G("base-selection-label", "background-color: var(--n-color-active);"), G("base-selection-tags", "background-color: var(--n-color-active);")])]), te("disabled", "cursor: not-allowed;", [J("arrow", `
 color: var(--n-arrow-color-disabled);
 `), G("base-selection-label", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [G("base-selection-input", `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `), J("render-label", `
 color: var(--n-text-color-disabled);
 `)]), G("base-selection-tags", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `), G("base-selection-placeholder", `
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]), G("base-selection-input-tag", `
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `, [J("input", `
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `), J("mirror", `
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]), ["warning", "error"].map((e) => te(`${e}-status`, [J("state-border", `border: var(--n-border-${e});`), ze("disabled", [W("&:hover", [J("state-border", `
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]), te("active", [J("state-border", `
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `), G("base-selection-label", `background-color: var(--n-color-active-${e});`), G("base-selection-tags", `background-color: var(--n-color-active-${e});`)]), te("focus", [J("state-border", `
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]), G("base-selection-popover", `
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `), G("base-selection-tag-wrapper", `
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `, [W("&:last-child", "padding-right: 0;"), G("tag", `
 font-size: 14px;
 max-width: 100%;
 `, [J("content", `
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]), ng = oe({
  name: "InternalSelection",
  props: Object.assign(Object.assign({}, xe.props), {
    clsPrefix: {
      type: String,
      required: !0
    },
    bordered: {
      type: Boolean,
      default: void 0
    },
    active: Boolean,
    pattern: {
      type: String,
      default: ""
    },
    placeholder: String,
    selectedOption: {
      type: Object,
      default: null
    },
    selectedOptions: {
      type: Array,
      default: null
    },
    labelField: {
      type: String,
      default: "label"
    },
    valueField: {
      type: String,
      default: "value"
    },
    multiple: Boolean,
    filterable: Boolean,
    clearable: Boolean,
    disabled: Boolean,
    size: {
      type: String,
      default: "medium"
    },
    loading: Boolean,
    autofocus: Boolean,
    showArrow: {
      type: Boolean,
      default: !0
    },
    inputProps: Object,
    focused: Boolean,
    renderTag: Function,
    onKeydown: Function,
    onClick: Function,
    onBlur: Function,
    onFocus: Function,
    onDeleteOption: Function,
    maxTagCount: [String, Number],
    ellipsisTagPopoverProps: Object,
    onClear: Function,
    onPatternInput: Function,
    onPatternFocus: Function,
    onPatternBlur: Function,
    renderLabel: Function,
    status: String,
    inlineThemeDisabled: Boolean,
    ignoreComposition: {
      type: Boolean,
      default: !0
    },
    onResize: Function
  }),
  setup(e) {
    const {
      mergedClsPrefixRef: n,
      mergedRtlRef: t
    } = Rn(e), r = Jt("InternalSelection", t, n), o = F(null), i = F(null), a = F(null), l = F(null), s = F(null), u = F(null), c = F(null), h = F(null), m = F(null), v = F(null), f = F(!1), y = F(!1), b = F(!1), p = xe("InternalSelection", "-internal-selection", eg, ll, e, le(e, "clsPrefix")), _ = z(() => e.clearable && !e.disabled && (b.value || e.active)), R = z(() => e.selectedOption ? e.renderTag ? e.renderTag({
      option: e.selectedOption,
      handleClose: () => {
      }
    }) : e.renderLabel ? e.renderLabel(e.selectedOption, !0) : Wn(e.selectedOption[e.labelField], e.selectedOption, !0) : e.placeholder), x = z(() => {
      const D = e.selectedOption;
      if (D)
        return D[e.labelField];
    }), E = z(() => e.multiple ? !!(Array.isArray(e.selectedOptions) && e.selectedOptions.length) : e.selectedOption !== null);
    function k() {
      var D;
      const {
        value: B
      } = o;
      if (B) {
        const {
          value: ue
        } = i;
        ue && (ue.style.width = `${B.offsetWidth}px`, e.maxTagCount !== "responsive" && ((D = m.value) === null || D === void 0 || D.sync({
          showAllItemsBeforeCalculate: !1
        })));
      }
    }
    function C() {
      const {
        value: D
      } = v;
      D && (D.style.display = "none");
    }
    function w() {
      const {
        value: D
      } = v;
      D && (D.style.display = "inline-block");
    }
    we(le(e, "active"), (D) => {
      D || C();
    }), we(le(e, "pattern"), () => {
      e.multiple && Wt(k);
    });
    function M(D) {
      const {
        onFocus: B
      } = e;
      B && B(D);
    }
    function O(D) {
      const {
        onBlur: B
      } = e;
      B && B(D);
    }
    function j(D) {
      const {
        onDeleteOption: B
      } = e;
      B && B(D);
    }
    function Q(D) {
      const {
        onClear: B
      } = e;
      B && B(D);
    }
    function P(D) {
      const {
        onPatternInput: B
      } = e;
      B && B(D);
    }
    function $(D) {
      var B;
      (!D.relatedTarget || !(!((B = a.value) === null || B === void 0) && B.contains(D.relatedTarget))) && M(D);
    }
    function T(D) {
      var B;
      !((B = a.value) === null || B === void 0) && B.contains(D.relatedTarget) || O(D);
    }
    function L(D) {
      Q(D);
    }
    function Y() {
      b.value = !0;
    }
    function Z() {
      b.value = !1;
    }
    function ee(D) {
      !e.active || !e.filterable || D.target !== i.value && D.preventDefault();
    }
    function X(D) {
      j(D);
    }
    const ie = F(!1);
    function I(D) {
      if (D.key === "Backspace" && !ie.value && !e.pattern.length) {
        const {
          selectedOptions: B
        } = e;
        B != null && B.length && X(B[B.length - 1]);
      }
    }
    let N = null;
    function re(D) {
      const {
        value: B
      } = o;
      if (B) {
        const ue = D.target.value;
        B.textContent = ue, k();
      }
      e.ignoreComposition && ie.value ? N = D : P(D);
    }
    function ge() {
      ie.value = !0;
    }
    function ve() {
      ie.value = !1, e.ignoreComposition && P(N), N = null;
    }
    function ke(D) {
      var B;
      y.value = !0, (B = e.onPatternFocus) === null || B === void 0 || B.call(e, D);
    }
    function Oe(D) {
      var B;
      y.value = !1, (B = e.onPatternBlur) === null || B === void 0 || B.call(e, D);
    }
    function me() {
      var D, B;
      if (e.filterable)
        y.value = !1, (D = u.value) === null || D === void 0 || D.blur(), (B = i.value) === null || B === void 0 || B.blur();
      else if (e.multiple) {
        const {
          value: ue
        } = l;
        ue == null || ue.blur();
      } else {
        const {
          value: ue
        } = s;
        ue == null || ue.blur();
      }
    }
    function Be() {
      var D, B, ue;
      e.filterable ? (y.value = !1, (D = u.value) === null || D === void 0 || D.focus()) : e.multiple ? (B = l.value) === null || B === void 0 || B.focus() : (ue = s.value) === null || ue === void 0 || ue.focus();
    }
    function _e() {
      const {
        value: D
      } = i;
      D && (w(), D.focus());
    }
    function dn() {
      const {
        value: D
      } = i;
      D && D.blur();
    }
    function Te(D) {
      const {
        value: B
      } = c;
      B && B.setTextContent(`+${D}`);
    }
    function cn() {
      const {
        value: D
      } = h;
      return D;
    }
    function fn() {
      return i.value;
    }
    let De = null;
    function Ge() {
      De !== null && window.clearTimeout(De);
    }
    function hn() {
      e.active || (Ge(), De = window.setTimeout(() => {
        E.value && (f.value = !0);
      }, 100));
    }
    function pn() {
      Ge();
    }
    function mn(D) {
      D || (Ge(), f.value = !1);
    }
    we(E, (D) => {
      D || (f.value = !1);
    }), Ie(() => {
      Ye(() => {
        const D = u.value;
        D && (e.disabled ? D.removeAttribute("tabindex") : D.tabIndex = y.value ? -1 : 0);
      });
    }), ga(a, e.onResize);
    const {
      inlineThemeDisabled: en
    } = e, Le = z(() => {
      const {
        size: D
      } = e, {
        common: {
          cubicBezierEaseInOut: B
        },
        self: {
          fontWeight: ue,
          borderRadius: Xn,
          color: Fn,
          placeholderColor: gn,
          textColor: zn,
          paddingSingle: nn,
          paddingMultiple: vn,
          caretColor: Nn,
          colorDisabled: $e,
          textColorDisabled: Ke,
          placeholderColorDisabled: d,
          colorActive: S,
          boxShadowFocus: A,
          boxShadowActive: H,
          boxShadowHover: U,
          border: K,
          borderFocus: q,
          borderHover: ne,
          borderActive: de,
          arrowColor: We,
          arrowColorDisabled: qt,
          loadingColor: Zt,
          // form warning
          colorActiveWarning: Qt,
          boxShadowFocusWarning: er,
          boxShadowActiveWarning: nr,
          boxShadowHoverWarning: tr,
          borderWarning: rr,
          borderFocusWarning: or,
          borderHoverWarning: ir,
          borderActiveWarning: ar,
          // form error
          colorActiveError: lr,
          boxShadowFocusError: sr,
          boxShadowActiveError: ur,
          boxShadowHoverError: dr,
          borderError: cr,
          borderFocusError: fr,
          borderHoverError: hr,
          borderActiveError: ul,
          // clear
          clearColor: dl,
          clearColorHover: cl,
          clearColorPressed: fl,
          clearSize: hl,
          // arrow
          arrowSize: pl,
          [ce("height", D)]: ml,
          [ce("fontSize", D)]: gl
        }
      } = p.value, gt = Fe(nn), vt = Fe(vn);
      return {
        "--n-bezier": B,
        "--n-border": K,
        "--n-border-active": de,
        "--n-border-focus": q,
        "--n-border-hover": ne,
        "--n-border-radius": Xn,
        "--n-box-shadow-active": H,
        "--n-box-shadow-focus": A,
        "--n-box-shadow-hover": U,
        "--n-caret-color": Nn,
        "--n-color": Fn,
        "--n-color-active": S,
        "--n-color-disabled": $e,
        "--n-font-size": gl,
        "--n-height": ml,
        "--n-padding-single-top": gt.top,
        "--n-padding-multiple-top": vt.top,
        "--n-padding-single-right": gt.right,
        "--n-padding-multiple-right": vt.right,
        "--n-padding-single-left": gt.left,
        "--n-padding-multiple-left": vt.left,
        "--n-padding-single-bottom": gt.bottom,
        "--n-padding-multiple-bottom": vt.bottom,
        "--n-placeholder-color": gn,
        "--n-placeholder-color-disabled": d,
        "--n-text-color": zn,
        "--n-text-color-disabled": Ke,
        "--n-arrow-color": We,
        "--n-arrow-color-disabled": qt,
        "--n-loading-color": Zt,
        // form warning
        "--n-color-active-warning": Qt,
        "--n-box-shadow-focus-warning": er,
        "--n-box-shadow-active-warning": nr,
        "--n-box-shadow-hover-warning": tr,
        "--n-border-warning": rr,
        "--n-border-focus-warning": or,
        "--n-border-hover-warning": ir,
        "--n-border-active-warning": ar,
        // form error
        "--n-color-active-error": lr,
        "--n-box-shadow-focus-error": sr,
        "--n-box-shadow-active-error": ur,
        "--n-box-shadow-hover-error": dr,
        "--n-border-error": cr,
        "--n-border-focus-error": fr,
        "--n-border-hover-error": hr,
        "--n-border-active-error": ul,
        // clear
        "--n-clear-size": hl,
        "--n-clear-color": dl,
        "--n-clear-color-hover": cl,
        "--n-clear-color-pressed": fl,
        // arrow-size
        "--n-arrow-size": pl,
        // font-weight
        "--n-font-weight": ue
      };
    }), be = en ? Mn("internal-selection", z(() => e.size[0]), Le, e) : void 0;
    return {
      mergedTheme: p,
      mergedClearable: _,
      mergedClsPrefix: n,
      rtlEnabled: r,
      patternInputFocused: y,
      filterablePlaceholder: R,
      label: x,
      selected: E,
      showTagsPanel: f,
      isComposing: ie,
      // dom ref
      counterRef: c,
      counterWrapperRef: h,
      patternInputMirrorRef: o,
      patternInputRef: i,
      selfRef: a,
      multipleElRef: l,
      singleElRef: s,
      patternInputWrapperRef: u,
      overflowRef: m,
      inputTagElRef: v,
      handleMouseDown: ee,
      handleFocusin: $,
      handleClear: L,
      handleMouseEnter: Y,
      handleMouseLeave: Z,
      handleDeleteOption: X,
      handlePatternKeyDown: I,
      handlePatternInputInput: re,
      handlePatternInputBlur: Oe,
      handlePatternInputFocus: ke,
      handleMouseEnterCounter: hn,
      handleMouseLeaveCounter: pn,
      handleFocusout: T,
      handleCompositionEnd: ve,
      handleCompositionStart: ge,
      onPopoverUpdateShow: mn,
      focus: Be,
      focusInput: _e,
      blur: me,
      blurInput: dn,
      updateCounter: Te,
      getCounter: cn,
      getTail: fn,
      renderLabel: e.renderLabel,
      cssVars: en ? void 0 : Le,
      themeClass: be == null ? void 0 : be.themeClass,
      onRender: be == null ? void 0 : be.onRender
    };
  },
  render() {
    const {
      status: e,
      multiple: n,
      size: t,
      disabled: r,
      filterable: o,
      maxTagCount: i,
      bordered: a,
      clsPrefix: l,
      ellipsisTagPopoverProps: s,
      onRender: u,
      renderTag: c,
      renderLabel: h
    } = this;
    u == null || u();
    const m = i === "responsive", v = typeof i == "number", f = m || v, y = g(Vr, null, {
      default: () => g(qm, {
        clsPrefix: l,
        loading: this.loading,
        showArrow: this.showArrow,
        showClear: this.mergedClearable && this.selected,
        onClear: this.handleClear
      }, {
        default: () => {
          var p, _;
          return (_ = (p = this.$slots).arrow) === null || _ === void 0 ? void 0 : _.call(p);
        }
      })
    });
    let b;
    if (n) {
      const {
        labelField: p
      } = this, _ = (P) => g("div", {
        class: `${l}-base-selection-tag-wrapper`,
        key: P.value
      }, c ? c({
        option: P,
        handleClose: () => {
          this.handleDeleteOption(P);
        }
      }) : g(Dr, {
        size: t,
        closable: !P.disabled,
        disabled: r,
        onClose: () => {
          this.handleDeleteOption(P);
        },
        internalCloseIsButtonTag: !1,
        internalCloseFocusable: !1
      }, {
        default: () => h ? h(P, !0) : Wn(P[p], P, !0)
      })), R = () => (v ? this.selectedOptions.slice(0, i) : this.selectedOptions).map(_), x = o ? g("div", {
        class: `${l}-base-selection-input-tag`,
        ref: "inputTagElRef",
        key: "__input-tag__"
      }, g("input", Object.assign({}, this.inputProps, {
        ref: "patternInputRef",
        tabindex: -1,
        disabled: r,
        value: this.pattern,
        autofocus: this.autofocus,
        class: `${l}-base-selection-input-tag__input`,
        onBlur: this.handlePatternInputBlur,
        onFocus: this.handlePatternInputFocus,
        onKeydown: this.handlePatternKeyDown,
        onInput: this.handlePatternInputInput,
        onCompositionstart: this.handleCompositionStart,
        onCompositionend: this.handleCompositionEnd
      })), g("span", {
        ref: "patternInputMirrorRef",
        class: `${l}-base-selection-input-tag__mirror`
      }, this.pattern)) : null, E = m ? () => g("div", {
        class: `${l}-base-selection-tag-wrapper`,
        ref: "counterWrapperRef"
      }, g(Dr, {
        size: t,
        ref: "counterRef",
        onMouseenter: this.handleMouseEnterCounter,
        onMouseleave: this.handleMouseLeaveCounter,
        disabled: r
      })) : void 0;
      let k;
      if (v) {
        const P = this.selectedOptions.length - i;
        P > 0 && (k = g("div", {
          class: `${l}-base-selection-tag-wrapper`,
          key: "__counter__"
        }, g(Dr, {
          size: t,
          ref: "counterRef",
          onMouseenter: this.handleMouseEnterCounter,
          disabled: r
        }, {
          default: () => `+${P}`
        })));
      }
      const C = m ? o ? g(Go, {
        ref: "overflowRef",
        updateCounter: this.updateCounter,
        getCounter: this.getCounter,
        getTail: this.getTail,
        style: {
          width: "100%",
          display: "flex",
          overflow: "hidden"
        }
      }, {
        default: R,
        counter: E,
        tail: () => x
      }) : g(Go, {
        ref: "overflowRef",
        updateCounter: this.updateCounter,
        getCounter: this.getCounter,
        style: {
          width: "100%",
          display: "flex",
          overflow: "hidden"
        }
      }, {
        default: R,
        counter: E
      }) : v && k ? R().concat(k) : R(), w = f ? () => g("div", {
        class: `${l}-base-selection-popover`
      }, m ? R() : this.selectedOptions.map(_)) : void 0, M = f ? Object.assign({
        show: this.showTagsPanel,
        trigger: "hover",
        overlap: !0,
        placement: "top",
        width: "trigger",
        onUpdateShow: this.onPopoverUpdateShow,
        theme: this.mergedTheme.peers.Popover,
        themeOverrides: this.mergedTheme.peerOverrides.Popover
      }, s) : null, j = (this.selected ? !1 : this.active ? !this.pattern && !this.isComposing : !0) ? g("div", {
        class: `${l}-base-selection-placeholder ${l}-base-selection-overlay`
      }, g("div", {
        class: `${l}-base-selection-placeholder__inner`
      }, this.placeholder)) : null, Q = o ? g("div", {
        ref: "patternInputWrapperRef",
        class: `${l}-base-selection-tags`
      }, C, m ? null : x, y) : g("div", {
        ref: "multipleElRef",
        class: `${l}-base-selection-tags`,
        tabindex: r ? void 0 : 0
      }, C, y);
      b = g(On, null, f ? g(Hm, Object.assign({}, M, {
        scrollable: !0,
        style: "max-height: calc(var(--v-target-height) * 6.6);"
      }), {
        trigger: () => Q,
        default: w
      }) : Q, j);
    } else if (o) {
      const p = this.pattern || this.isComposing, _ = this.active ? !p : !this.selected, R = this.active ? !1 : this.selected;
      b = g("div", {
        ref: "patternInputWrapperRef",
        class: `${l}-base-selection-label`,
        title: this.patternInputFocused ? void 0 : qo(this.label)
      }, g("input", Object.assign({}, this.inputProps, {
        ref: "patternInputRef",
        class: `${l}-base-selection-input`,
        value: this.active ? this.pattern : "",
        placeholder: "",
        readonly: r,
        disabled: r,
        tabindex: -1,
        autofocus: this.autofocus,
        onFocus: this.handlePatternInputFocus,
        onBlur: this.handlePatternInputBlur,
        onInput: this.handlePatternInputInput,
        onCompositionstart: this.handleCompositionStart,
        onCompositionend: this.handleCompositionEnd
      })), R ? g("div", {
        class: `${l}-base-selection-label__render-label ${l}-base-selection-overlay`,
        key: "input"
      }, g("div", {
        class: `${l}-base-selection-overlay__wrapper`
      }, c ? c({
        option: this.selectedOption,
        handleClose: () => {
        }
      }) : h ? h(this.selectedOption, !0) : Wn(this.label, this.selectedOption, !0))) : null, _ ? g("div", {
        class: `${l}-base-selection-placeholder ${l}-base-selection-overlay`,
        key: "placeholder"
      }, g("div", {
        class: `${l}-base-selection-overlay__wrapper`
      }, this.filterablePlaceholder)) : null, y);
    } else
      b = g("div", {
        ref: "singleElRef",
        class: `${l}-base-selection-label`,
        tabindex: this.disabled ? void 0 : 0
      }, this.label !== void 0 ? g("div", {
        class: `${l}-base-selection-input`,
        title: qo(this.label),
        key: "input"
      }, g("div", {
        class: `${l}-base-selection-input__content`
      }, c ? c({
        option: this.selectedOption,
        handleClose: () => {
        }
      }) : h ? h(this.selectedOption, !0) : Wn(this.label, this.selectedOption, !0))) : g("div", {
        class: `${l}-base-selection-placeholder ${l}-base-selection-overlay`,
        key: "placeholder"
      }, g("div", {
        class: `${l}-base-selection-placeholder__inner`
      }, this.placeholder)), y);
    return g("div", {
      ref: "selfRef",
      class: [`${l}-base-selection`, this.rtlEnabled && `${l}-base-selection--rtl`, this.themeClass, e && `${l}-base-selection--${e}-status`, {
        [`${l}-base-selection--active`]: this.active,
        [`${l}-base-selection--selected`]: this.selected || this.active && this.pattern,
        [`${l}-base-selection--disabled`]: this.disabled,
        [`${l}-base-selection--multiple`]: this.multiple,
        // focus is not controlled by selection itself since it always need
        // to be managed together with menu. provide :focus style will cause
        // many redundant codes.
        [`${l}-base-selection--focus`]: this.focused
      }],
      style: this.cssVars,
      onClick: this.onClick,
      onMouseenter: this.handleMouseEnter,
      onMouseleave: this.handleMouseLeave,
      onKeydown: this.onKeydown,
      onFocusin: this.handleFocusin,
      onFocusout: this.handleFocusout,
      onMousedown: this.handleMouseDown
    }, b, a ? g("div", {
      class: `${l}-base-selection__border`
    }) : null, a ? g("div", {
      class: `${l}-base-selection__state-border`
    }) : null);
  }
});
function tg(e) {
  const {
    boxShadow2: n
  } = e;
  return {
    menuBoxShadow: n
  };
}
const rg = {
  name: "Select",
  common: $n,
  peers: {
    InternalSelection: ll,
    InternalSelectMenu: rl
  },
  self: tg
}, og = W([G("select", `
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `), G("select-menu", `
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `, [ol({
  originalTransition: "background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"
})])]);
function Lt(e) {
  return e.type === "group";
}
function sl(e) {
  return e.type === "ignored";
}
function $r(e, n) {
  try {
    return !!(1 + n.toString().toLowerCase().indexOf(e.trim().toLowerCase()));
  } catch {
    return !1;
  }
}
function ig(e, n) {
  return {
    getIsGroup: Lt,
    getIgnored: sl,
    getKey(r) {
      return Lt(r) ? r.name || r.key || "key-required" : r[e];
    },
    getChildren(r) {
      return r[n];
    }
  };
}
function ag(e, n, t, r) {
  if (!n) return e;
  function o(i) {
    if (!Array.isArray(i)) return [];
    const a = [];
    for (const l of i)
      if (Lt(l)) {
        const s = o(l[r]);
        s.length && a.push(Object.assign({}, l, {
          [r]: s
        }));
      } else {
        if (sl(l))
          continue;
        n(t, l) && a.push(l);
      }
    return a;
  }
  return o(e);
}
function lg(e, n, t) {
  const r = /* @__PURE__ */ new Map();
  return e.forEach((o) => {
    Lt(o) ? o[t].forEach((i) => {
      r.set(i[n], i);
    }) : r.set(o[n], o);
  }), r;
}
var sg = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\mmj\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_11032_CTSDTHGKBNXAIWDN", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-QBN3J51", ComSpec: "C:\\WINDOWS\\system32\\cmd.exe", CURSOR_TRACE_ID: "09ee13f00f524892b908f0f5fa49cdb7", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "c:\\Users\\mmj\\AppData\\Local\\Programs\\cursor\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\mmj", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\mmj", INIT_CWD: "F:\\Work\\lowcode\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\mmj\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-QBN3J51", NODE: "C:\\Program Files\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com/", npm_config_user_agent: "pnpm/9.15.4 npm/? node/v18.20.2 win32 x64", npm_execpath: "D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "C:\\Program Files\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "8", NVM_HOME: "D:\\install\\nvm", NVM_SYMLINK: "C:\\Program Files\\nodejs", OneDrive: "C:\\Users\\mmj\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\Work\\lowcode\\lowcode-component\\scripts\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\Work\\lowcode\\lowcode-component\\node_modules\\.bin;D:\\install\\nvm\\v18.20.2\\node_modules\\pnpm\\dist\\node-gyp-bin;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\java8path;C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\WINDOWS\\system32;C:\\WINDOWS;C:\\WINDOWS\\System32\\Wbem;C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\;C:\\WINDOWS\\System32\\OpenSSH\\;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Git\\cmd;C:\\Users\\mmj\\AppData\\Local\\Microsoft\\WindowsApps;D:\\install\\nvm;C:\\Program Files\\nodejs;D:\\install\\Microsoft VS Code\\bin;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\Work\\lowcode\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "AMD64 Family 23 Model 24 Stepping 1, AuthenticAMD", PROCESSOR_LEVEL: "23", PROCESSOR_REVISION: "1801", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\mmj\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\WINDOWS\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\WINDOWS", TEMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "0.45.7", TMP: "C:\\Users\\mmj\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-QBN3J51", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-QBN3J51", USERNAME: "mmj", USERPROFILE: "C:\\Users\\mmj", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "c:\\Users\\mmj\\AppData\\Local\\Programs\\cursor\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "C:\\Users\\mmj\\AppData\\Local\\Programs\\cursor\\Cursor.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-eb177ecbbf-sock", VSCODE_INJECTION: "1", windir: "C:\\WINDOWS" };
const ug = Object.assign(Object.assign({}, xe.props), {
  to: qe.propTo,
  bordered: {
    type: Boolean,
    default: void 0
  },
  clearable: Boolean,
  clearFilterAfterSelect: {
    type: Boolean,
    default: !0
  },
  options: {
    type: Array,
    default: () => []
  },
  defaultValue: {
    type: [String, Number, Array],
    default: null
  },
  keyboard: {
    type: Boolean,
    default: !0
  },
  value: [String, Number, Array],
  placeholder: String,
  menuProps: Object,
  multiple: Boolean,
  size: String,
  menuSize: {
    type: String
  },
  filterable: Boolean,
  disabled: {
    type: Boolean,
    default: void 0
  },
  remote: Boolean,
  loading: Boolean,
  filter: Function,
  placement: {
    type: String,
    default: "bottom-start"
  },
  widthMode: {
    type: String,
    default: "trigger"
  },
  tag: Boolean,
  onCreate: Function,
  fallbackOption: {
    type: [Function, Boolean],
    default: void 0
  },
  show: {
    type: Boolean,
    default: void 0
  },
  showArrow: {
    type: Boolean,
    default: !0
  },
  maxTagCount: [Number, String],
  ellipsisTagPopoverProps: Object,
  consistentMenuWidth: {
    type: Boolean,
    default: !0
  },
  virtualScroll: {
    type: Boolean,
    default: !0
  },
  labelField: {
    type: String,
    default: "label"
  },
  valueField: {
    type: String,
    default: "value"
  },
  childrenField: {
    type: String,
    default: "children"
  },
  renderLabel: Function,
  renderOption: Function,
  renderTag: Function,
  "onUpdate:value": [Function, Array],
  inputProps: Object,
  nodeProps: Function,
  ignoreComposition: {
    type: Boolean,
    default: !0
  },
  showOnFocus: Boolean,
  // for jsx
  onUpdateValue: [Function, Array],
  onBlur: [Function, Array],
  onClear: [Function, Array],
  onFocus: [Function, Array],
  onScroll: [Function, Array],
  onSearch: [Function, Array],
  onUpdateShow: [Function, Array],
  "onUpdate:show": [Function, Array],
  displayDirective: {
    type: String,
    default: "show"
  },
  resetMenuOnOptionsChange: {
    type: Boolean,
    default: !0
  },
  status: String,
  showCheckmark: {
    type: Boolean,
    default: !0
  },
  /** deprecated */
  onChange: [Function, Array],
  items: Array
}), dg = oe({
  name: "Select",
  props: ug,
  slots: Object,
  setup(e) {
    sg.NODE_ENV !== "production" && Ye(() => {
      e.items !== void 0 && on("select", "`items` is deprecated, please use `options` instead."), e.onChange !== void 0 && on("select", "`on-change` is deprecated, please use `on-update:value` instead.");
    });
    const {
      mergedClsPrefixRef: n,
      mergedBorderedRef: t,
      namespaceRef: r,
      inlineThemeDisabled: o
    } = Rn(e), i = xe("Select", "-select", og, rg, e, n), a = F(e.defaultValue), l = le(e, "value"), s = kr(l, a), u = F(!1), c = F(""), h = ji(e, ["items", "options"]), m = F([]), v = F([]), f = z(() => v.value.concat(m.value).concat(h.value)), y = z(() => {
      const {
        filter: d
      } = e;
      if (d) return d;
      const {
        labelField: S,
        valueField: A
      } = e;
      return (H, U) => {
        if (!U) return !1;
        const K = U[S];
        if (typeof K == "string")
          return $r(H, K);
        const q = U[A];
        return typeof q == "string" ? $r(H, q) : typeof q == "number" ? $r(H, String(q)) : !1;
      };
    }), b = z(() => {
      if (e.remote)
        return h.value;
      {
        const {
          value: d
        } = f, {
          value: S
        } = c;
        return !S.length || !e.filterable ? d : ag(d, y.value, S, e.childrenField);
      }
    }), p = z(() => {
      const {
        valueField: d,
        childrenField: S
      } = e, A = ig(d, S);
      return cs(b.value, A);
    }), _ = z(() => lg(f.value, e.valueField, e.childrenField)), R = F(!1), x = kr(le(e, "show"), R), E = F(null), k = F(null), C = F(null), {
      localeRef: w
    } = Xa("Select"), M = z(() => {
      var d;
      return (d = e.placeholder) !== null && d !== void 0 ? d : w.value.placeholder;
    }), O = [], j = F(/* @__PURE__ */ new Map()), Q = z(() => {
      const {
        fallbackOption: d
      } = e;
      if (d === void 0) {
        const {
          labelField: S,
          valueField: A
        } = e;
        return (H) => ({
          [S]: String(H),
          [A]: H
        });
      }
      return d === !1 ? !1 : (S) => Object.assign(d(S), {
        value: S
      });
    });
    function P(d) {
      const S = e.remote, {
        value: A
      } = j, {
        value: H
      } = _, {
        value: U
      } = Q, K = [];
      return d.forEach((q) => {
        if (H.has(q))
          K.push(H.get(q));
        else if (S && A.has(q))
          K.push(A.get(q));
        else if (U) {
          const ne = U(q);
          ne && K.push(ne);
        }
      }), K;
    }
    const $ = z(() => {
      if (e.multiple) {
        const {
          value: d
        } = s;
        return Array.isArray(d) ? P(d) : [];
      }
      return null;
    }), T = z(() => {
      const {
        value: d
      } = s;
      return !e.multiple && !Array.isArray(d) ? d === null ? null : P([d])[0] || null : null;
    }), L = Gu(e), {
      mergedSizeRef: Y,
      mergedDisabledRef: Z,
      mergedStatusRef: ee
    } = L;
    function X(d, S) {
      const {
        onChange: A,
        "onUpdate:value": H,
        onUpdateValue: U
      } = e, {
        nTriggerFormChange: K,
        nTriggerFormInput: q
      } = L;
      A && ye(A, d, S), U && ye(U, d, S), H && ye(H, d, S), a.value = d, K(), q();
    }
    function ie(d) {
      const {
        onBlur: S
      } = e, {
        nTriggerFormBlur: A
      } = L;
      S && ye(S, d), A();
    }
    function I() {
      const {
        onClear: d
      } = e;
      d && ye(d);
    }
    function N(d) {
      const {
        onFocus: S,
        showOnFocus: A
      } = e, {
        nTriggerFormFocus: H
      } = L;
      S && ye(S, d), H(), A && Oe();
    }
    function re(d) {
      const {
        onSearch: S
      } = e;
      S && ye(S, d);
    }
    function ge(d) {
      const {
        onScroll: S
      } = e;
      S && ye(S, d);
    }
    function ve() {
      var d;
      const {
        remote: S,
        multiple: A
      } = e;
      if (S) {
        const {
          value: H
        } = j;
        if (A) {
          const {
            valueField: U
          } = e;
          (d = $.value) === null || d === void 0 || d.forEach((K) => {
            H.set(K[U], K);
          });
        } else {
          const U = T.value;
          U && H.set(U[e.valueField], U);
        }
      }
    }
    function ke(d) {
      const {
        onUpdateShow: S,
        "onUpdate:show": A
      } = e;
      S && ye(S, d), A && ye(A, d), R.value = d;
    }
    function Oe() {
      Z.value || (ke(!0), R.value = !0, e.filterable && nn());
    }
    function me() {
      ke(!1);
    }
    function Be() {
      c.value = "", v.value = O;
    }
    const _e = F(!1);
    function dn() {
      e.filterable && (_e.value = !0);
    }
    function Te() {
      e.filterable && (_e.value = !1, x.value || Be());
    }
    function cn() {
      Z.value || (x.value ? e.filterable ? nn() : me() : Oe());
    }
    function fn(d) {
      var S, A;
      !((A = (S = C.value) === null || S === void 0 ? void 0 : S.selfRef) === null || A === void 0) && A.contains(d.relatedTarget) || (u.value = !1, ie(d), me());
    }
    function De(d) {
      N(d), u.value = !0;
    }
    function Ge() {
      u.value = !0;
    }
    function hn(d) {
      var S;
      !((S = E.value) === null || S === void 0) && S.$el.contains(d.relatedTarget) || (u.value = !1, ie(d), me());
    }
    function pn() {
      var d;
      (d = E.value) === null || d === void 0 || d.focus(), me();
    }
    function mn(d) {
      var S;
      x.value && (!((S = E.value) === null || S === void 0) && S.$el.contains(at(d)) || me());
    }
    function en(d) {
      if (!Array.isArray(d)) return [];
      if (Q.value)
        return Array.from(d);
      {
        const {
          remote: S
        } = e, {
          value: A
        } = _;
        if (S) {
          const {
            value: H
          } = j;
          return d.filter((U) => A.has(U) || H.has(U));
        } else
          return d.filter((H) => A.has(H));
      }
    }
    function Le(d) {
      be(d.rawNode);
    }
    function be(d) {
      if (Z.value) return;
      const {
        tag: S,
        remote: A,
        clearFilterAfterSelect: H,
        valueField: U
      } = e;
      if (S && !A) {
        const {
          value: K
        } = v, q = K[0] || null;
        if (q) {
          const ne = m.value;
          ne.length ? ne.push(q) : m.value = [q], v.value = O;
        }
      }
      if (A && j.value.set(d[U], d), e.multiple) {
        const K = en(s.value), q = K.findIndex((ne) => ne === d[U]);
        if (~q) {
          if (K.splice(q, 1), S && !A) {
            const ne = D(d[U]);
            ~ne && (m.value.splice(ne, 1), H && (c.value = ""));
          }
        } else
          K.push(d[U]), H && (c.value = "");
        X(K, P(K));
      } else {
        if (S && !A) {
          const K = D(d[U]);
          ~K ? m.value = [m.value[K]] : m.value = O;
        }
        zn(), me(), X(d[U], d);
      }
    }
    function D(d) {
      return m.value.findIndex((A) => A[e.valueField] === d);
    }
    function B(d) {
      x.value || Oe();
      const {
        value: S
      } = d.target;
      c.value = S;
      const {
        tag: A,
        remote: H
      } = e;
      if (re(S), A && !H) {
        if (!S) {
          v.value = O;
          return;
        }
        const {
          onCreate: U
        } = e, K = U ? U(S) : {
          [e.labelField]: S,
          [e.valueField]: S
        }, {
          valueField: q,
          labelField: ne
        } = e;
        h.value.some((de) => de[q] === K[q] || de[ne] === K[ne]) || m.value.some((de) => de[q] === K[q] || de[ne] === K[ne]) ? v.value = O : v.value = [K];
      }
    }
    function ue(d) {
      d.stopPropagation();
      const {
        multiple: S
      } = e;
      !S && e.filterable && me(), I(), S ? X([], []) : X(null, null);
    }
    function Xn(d) {
      !et(d, "action") && !et(d, "empty") && !et(d, "header") && d.preventDefault();
    }
    function Fn(d) {
      ge(d);
    }
    function gn(d) {
      var S, A, H, U, K;
      if (!e.keyboard) {
        d.preventDefault();
        return;
      }
      switch (d.key) {
        case " ":
          if (e.filterable)
            break;
          d.preventDefault();
        case "Enter":
          if (!(!((S = E.value) === null || S === void 0) && S.isComposing)) {
            if (x.value) {
              const q = (A = C.value) === null || A === void 0 ? void 0 : A.getPendingTmNode();
              q ? Le(q) : e.filterable || (me(), zn());
            } else if (Oe(), e.tag && _e.value) {
              const q = v.value[0];
              if (q) {
                const ne = q[e.valueField], {
                  value: de
                } = s;
                e.multiple && Array.isArray(de) && de.includes(ne) || be(q);
              }
            }
          }
          d.preventDefault();
          break;
        case "ArrowUp":
          if (d.preventDefault(), e.loading) return;
          x.value && ((H = C.value) === null || H === void 0 || H.prev());
          break;
        case "ArrowDown":
          if (d.preventDefault(), e.loading) return;
          x.value ? (U = C.value) === null || U === void 0 || U.next() : Oe();
          break;
        case "Escape":
          x.value && (Hu(d), me()), (K = E.value) === null || K === void 0 || K.focus();
          break;
      }
    }
    function zn() {
      var d;
      (d = E.value) === null || d === void 0 || d.focus();
    }
    function nn() {
      var d;
      (d = E.value) === null || d === void 0 || d.focusInput();
    }
    function vn() {
      var d;
      x.value && ((d = k.value) === null || d === void 0 || d.syncPosition());
    }
    ve(), we(le(e, "options"), ve);
    const Nn = {
      focus: () => {
        var d;
        (d = E.value) === null || d === void 0 || d.focus();
      },
      focusInput: () => {
        var d;
        (d = E.value) === null || d === void 0 || d.focusInput();
      },
      blur: () => {
        var d;
        (d = E.value) === null || d === void 0 || d.blur();
      },
      blurInput: () => {
        var d;
        (d = E.value) === null || d === void 0 || d.blurInput();
      }
    }, $e = z(() => {
      const {
        self: {
          menuBoxShadow: d
        }
      } = i.value;
      return {
        "--n-menu-box-shadow": d
      };
    }), Ke = o ? Mn("select", void 0, $e, e) : void 0;
    return Object.assign(Object.assign({}, Nn), {
      mergedStatus: ee,
      mergedClsPrefix: n,
      mergedBordered: t,
      namespace: r,
      treeMate: p,
      isMounted: jt(),
      triggerRef: E,
      menuRef: C,
      pattern: c,
      uncontrolledShow: R,
      mergedShow: x,
      adjustedTo: qe(e),
      uncontrolledValue: a,
      mergedValue: s,
      followerRef: k,
      localizedPlaceholder: M,
      selectedOption: T,
      selectedOptions: $,
      mergedSize: Y,
      mergedDisabled: Z,
      focused: u,
      activeWithoutMenuOpen: _e,
      inlineThemeDisabled: o,
      onTriggerInputFocus: dn,
      onTriggerInputBlur: Te,
      handleTriggerOrMenuResize: vn,
      handleMenuFocus: Ge,
      handleMenuBlur: hn,
      handleMenuTabOut: pn,
      handleTriggerClick: cn,
      handleToggle: Le,
      handleDeleteOption: be,
      handlePatternInput: B,
      handleClear: ue,
      handleTriggerBlur: fn,
      handleTriggerFocus: De,
      handleKeydown: gn,
      handleMenuAfterLeave: Be,
      handleMenuClickOutside: mn,
      handleMenuScroll: Fn,
      handleMenuKeydown: gn,
      handleMenuMousedown: Xn,
      mergedTheme: i,
      cssVars: o ? void 0 : $e,
      themeClass: Ke == null ? void 0 : Ke.themeClass,
      onRender: Ke == null ? void 0 : Ke.onRender
    });
  },
  render() {
    return g("div", {
      class: `${this.mergedClsPrefix}-select`
    }, g(Gi, null, {
      default: () => [g(Ki, null, {
        default: () => g(ng, {
          ref: "triggerRef",
          inlineThemeDisabled: this.inlineThemeDisabled,
          status: this.mergedStatus,
          inputProps: this.inputProps,
          clsPrefix: this.mergedClsPrefix,
          showArrow: this.showArrow,
          maxTagCount: this.maxTagCount,
          ellipsisTagPopoverProps: this.ellipsisTagPopoverProps,
          bordered: this.mergedBordered,
          active: this.activeWithoutMenuOpen || this.mergedShow,
          pattern: this.pattern,
          placeholder: this.localizedPlaceholder,
          selectedOption: this.selectedOption,
          selectedOptions: this.selectedOptions,
          multiple: this.multiple,
          renderTag: this.renderTag,
          renderLabel: this.renderLabel,
          filterable: this.filterable,
          clearable: this.clearable,
          disabled: this.mergedDisabled,
          size: this.mergedSize,
          theme: this.mergedTheme.peers.InternalSelection,
          labelField: this.labelField,
          valueField: this.valueField,
          themeOverrides: this.mergedTheme.peerOverrides.InternalSelection,
          loading: this.loading,
          focused: this.focused,
          onClick: this.handleTriggerClick,
          onDeleteOption: this.handleDeleteOption,
          onPatternInput: this.handlePatternInput,
          onClear: this.handleClear,
          onBlur: this.handleTriggerBlur,
          onFocus: this.handleTriggerFocus,
          onKeydown: this.handleKeydown,
          onPatternBlur: this.onTriggerInputBlur,
          onPatternFocus: this.onTriggerInputFocus,
          onResize: this.handleTriggerOrMenuResize,
          ignoreComposition: this.ignoreComposition
        }, {
          arrow: () => {
            var e, n;
            return [(n = (e = this.$slots).arrow) === null || n === void 0 ? void 0 : n.call(e)];
          }
        })
      }), g(Qi, {
        ref: "followerRef",
        show: this.mergedShow,
        to: this.adjustedTo,
        teleportDisabled: this.adjustedTo === qe.tdkey,
        containerClass: this.namespace,
        width: this.consistentMenuWidth ? "target" : void 0,
        minWidth: "target",
        placement: this.placement
      }, {
        default: () => g(Un, {
          name: "fade-in-scale-up-transition",
          appear: this.isMounted,
          onAfterLeave: this.handleMenuAfterLeave
        }, {
          default: () => {
            var e, n, t;
            return this.mergedShow || this.displayDirective === "show" ? ((e = this.onRender) === null || e === void 0 || e.call(this), ft(g(Mm, Object.assign({}, this.menuProps, {
              ref: "menuRef",
              onResize: this.handleTriggerOrMenuResize,
              inlineThemeDisabled: this.inlineThemeDisabled,
              virtualScroll: this.consistentMenuWidth && this.virtualScroll,
              class: [`${this.mergedClsPrefix}-select-menu`, this.themeClass, (n = this.menuProps) === null || n === void 0 ? void 0 : n.class],
              clsPrefix: this.mergedClsPrefix,
              focusable: !0,
              labelField: this.labelField,
              valueField: this.valueField,
              autoPending: !0,
              nodeProps: this.nodeProps,
              theme: this.mergedTheme.peers.InternalSelectMenu,
              themeOverrides: this.mergedTheme.peerOverrides.InternalSelectMenu,
              treeMate: this.treeMate,
              multiple: this.multiple,
              size: this.menuSize,
              renderOption: this.renderOption,
              renderLabel: this.renderLabel,
              value: this.mergedValue,
              style: [(t = this.menuProps) === null || t === void 0 ? void 0 : t.style, this.cssVars],
              onToggle: this.handleToggle,
              onScroll: this.handleMenuScroll,
              onFocus: this.handleMenuFocus,
              onBlur: this.handleMenuBlur,
              onKeydown: this.handleMenuKeydown,
              onTabOut: this.handleMenuTabOut,
              onMousedown: this.handleMenuMousedown,
              show: this.mergedShow,
              showCheckmark: this.showCheckmark,
              resetMenuOnOptionsChange: this.resetMenuOnOptionsChange
            }), {
              empty: () => {
                var r, o;
                return [(o = (r = this.$slots).empty) === null || o === void 0 ? void 0 : o.call(r)];
              },
              header: () => {
                var r, o;
                return [(o = (r = this.$slots).header) === null || o === void 0 ? void 0 : o.call(r)];
              },
              action: () => {
                var r, o;
                return [(o = (r = this.$slots).action) === null || o === void 0 ? void 0 : o.call(r)];
              }
            }), this.displayDirective === "show" ? [[zi, this.mergedShow], [Dt, this.handleMenuClickOutside, void 0, {
              capture: !0
            }]] : [[Dt, this.handleMenuClickOutside, void 0, {
              capture: !0
            }]])) : null;
          }
        })
      })]
    }));
  }
}), cg = { class: "lc-select" }, fg = /* @__PURE__ */ oe({
  __name: "Select",
  props: /* @__PURE__ */ wl({
    options: {
      type: Array
    }
  }, {
    options: () => []
  }),
  setup(e) {
    return (n, t) => (xl(), _l("div", cg, [
      Pl(Ol(dg), Ht({
        placeholder: "下拉选择",
        options: e.options,
        clearable: "",
        to: !1
      }, n.$attrs), {
        arrow: El(() => t[0] || (t[0] = [
          So(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              "xmlns:xlink": "http://www.w3.org/1999/xlink",
              viewBox: "0 0 512 512"
            },
            [
              So("path", {
                d: "M98 190.06l139.78 163.12a24 24 0 0 0 36.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62z",
                fill: "currentColor"
              })
            ],
            -1
            /* HOISTED */
          )
        ])),
        _: 1
        /* STABLE */
      }, 16, ["options"])
    ]));
  }
}), hg = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [r, o] of n)
    t[r] = o;
  return t;
}, gg = /* @__PURE__ */ hg(fg, [["__scopeId", "data-v-7a66645f"]]);
export {
  gg as LcSelect
};
