import { ref as D, readonly as Dr, watch as Ce, computed as z, onMounted as Ie, onBeforeUnmount as ke, createTextVNode as Rt, Fragment as On, Comment as no, defineComponent as oe, provide as Ve, getCurrentInstance as Ii, inject as fe, withDirectives as ft, toRef as le, h as g, Teleport as vl, nextTick as Ht, renderSlot as $i, onActivated as Fi, onDeactivated as Di, mergeProps as Wt, isVNode as bl, shallowRef as yl, watchEffect as qe, onBeforeMount as to, Transition as Un, vShow as zi, cloneVNode as wl, Text as Sl, mergeDefaults as Cl, openBlock as xl, createElementBlock as _l, createVNode as Pl, unref as Ol, withCtx as El, createElementVNode as So } from "vue";
let At = [];
const ki = /* @__PURE__ */ new WeakMap();
function Tl() {
  At.forEach((e) => e(...ki.get(e))), At = [];
}
function Bi(e, ...n) {
  ki.set(e, n), !At.includes(e) && At.push(e) === 1 && requestAnimationFrame(Tl);
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
function Yn(e) {
  if (e != null)
    return typeof e == "number" ? `${e}px` : e.endsWith("px") ? e : `${e}px`;
}
function De(e, n) {
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
const Co = {
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
}, jn = "^\\s*", Gn = "\\s*$", bn = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", yn = "([0-9A-Fa-f])", wn = "([0-9A-Fa-f]{2})", Ml = new RegExp(`${jn}rgb\\s*\\(${bn},${bn},${bn}\\)${Gn}`), Rl = new RegExp(`${jn}rgba\\s*\\(${bn},${bn},${bn},${bn}\\)${Gn}`), Al = new RegExp(`${jn}#${yn}${yn}${yn}${Gn}`), Il = new RegExp(`${jn}#${wn}${wn}${wn}${Gn}`), $l = new RegExp(`${jn}#${yn}${yn}${yn}${yn}${Gn}`), Fl = new RegExp(`${jn}#${wn}${wn}${wn}${wn}${Gn}`);
function Ee(e) {
  return parseInt(e, 16);
}
function _n(e) {
  try {
    let n;
    if (n = Il.exec(e))
      return [Ee(n[1]), Ee(n[2]), Ee(n[3]), 1];
    if (n = Ml.exec(e))
      return [Se(n[1]), Se(n[5]), Se(n[9]), 1];
    if (n = Rl.exec(e))
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
    if (n = Fl.exec(e))
      return [
        Ee(n[1]),
        Ee(n[2]),
        Ee(n[3]),
        nt(Ee(n[4]) / 255)
      ];
    if (n = $l.exec(e))
      return [
        Ee(n[1] + n[1]),
        Ee(n[2] + n[2]),
        Ee(n[3] + n[3]),
        nt(Ee(n[4] + n[4]) / 255)
      ];
    if (e in Co)
      return _n(Co[e]);
    throw new Error(`[seemly/rgba]: Invalid color value ${e}.`);
  } catch (n) {
    throw n;
  }
}
function Dl(e) {
  return e > 1 ? 1 : e < 0 ? 0 : e;
}
function zr(e, n, t, r) {
  return `rgba(${Se(e)}, ${Se(n)}, ${Se(t)}, ${Dl(r)})`;
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
  return kl([t * a, r * a, o * a, i * l]);
}
function nt(e) {
  const n = Math.round(Number(e) * 100) / 100;
  return n > 1 ? 1 : n < 0 ? 0 : n;
}
function Se(e) {
  const n = Math.round(Number(e));
  return n > 255 ? 255 : n < 0 ? 0 : n;
}
function kl(e) {
  const [n, t, r] = e;
  return 3 in e ? `rgba(${Se(n)}, ${Se(t)}, ${Se(r)}, ${nt(e[3])})` : `rgba(${Se(n)}, ${Se(t)}, ${Se(r)}, 1)`;
}
function Bl(e = 8) {
  return Math.random().toString(16).slice(2, 2 + e);
}
function xo(e) {
  return Array.isArray(e) ? e : [e];
}
const kr = {
  STOP: "STOP"
};
function Li(e, n) {
  const t = n(e);
  e.children !== void 0 && t !== kr.STOP && e.children.forEach((r) => Li(r, n));
}
function Ll(e, n = {}) {
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
function Nl(e, n) {
  const { isLeaf: t } = e;
  return t !== void 0 ? t : !n(e);
}
function Hl(e) {
  return e.children;
}
function Wl(e) {
  return e.key;
}
function Vl() {
  return !1;
}
function Ul(e, n) {
  const { isLeaf: t } = e;
  return !(t === !1 && !Array.isArray(n(e)));
}
function jl(e) {
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
function Yl(e, n) {
  const t = new Set(e);
  return n.forEach((r) => {
    t.has(r) && t.delete(r);
  }), Array.from(t);
}
function ql(e) {
  return (e == null ? void 0 : e.type) === "group";
}
function Zl(e) {
  const n = /* @__PURE__ */ new Map();
  return e.forEach((t, r) => {
    n.set(t.key, r);
  }), (t) => {
    var r;
    return (r = n.get(t)) !== null && r !== void 0 ? r : null;
  };
}
class Jl extends Error {
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
  const { checkedKeys: t, keysToCheck: r, keysToUncheck: o, indeterminateKeys: i, cascade: a, leafOnly: l, checkStrategy: s, allowNotLoaded: d } = e;
  if (!a)
    return r !== void 0 ? {
      checkedKeys: Xl(t, r),
      indeterminateKeys: Array.from(i)
    } : o !== void 0 ? {
      checkedKeys: Yl(t, o),
      indeterminateKeys: Array.from(i)
    } : {
      checkedKeys: Array.from(t),
      indeterminateKeys: Array.from(i)
    };
  const { levelTreeNodeMap: c } = n;
  let h;
  o !== void 0 ? h = ns(o, t, n, d) : r !== void 0 ? h = Ql(r, t, n, d) : h = It(t, n, d, !1);
  const m = s === "parent", v = s === "child" || l, f = h, w = /* @__PURE__ */ new Set(), b = Math.max.apply(null, Array.from(c.keys()));
  for (let p = b; p >= 0; p -= 1) {
    const _ = p === 0, M = c.get(p);
    for (const x of M) {
      if (x.isLeaf)
        continue;
      const { key: E, shallowLoaded: B } = x;
      if (v && B && x.children.forEach((O) => {
        !O.disabled && !O.isLeaf && O.shallowLoaded && f.has(O.key) && f.delete(O.key);
      }), x.disabled || !B)
        continue;
      let y = !0, C = !1, R = !0;
      for (const O of x.children) {
        const V = O.key;
        if (!O.disabled) {
          if (R && (R = !1), f.has(V))
            C = !0;
          else if (w.has(V)) {
            C = !0, y = !1;
            break;
          } else if (y = !1, C)
            break;
        }
      }
      y && !R ? (m && x.children.forEach((O) => {
        !O.disabled && f.has(O.key) && f.delete(O.key);
      }), f.add(E)) : C && w.add(E), _ && v && f.has(E) && f.delete(E);
    }
  }
  return {
    checkedKeys: Array.from(f),
    indeterminateKeys: Array.from(w)
  };
}
function It(e, n, t, r) {
  const { treeNodeMap: o, getChildren: i } = n, a = /* @__PURE__ */ new Set(), l = new Set(e);
  return e.forEach((s) => {
    const d = o.get(s);
    d !== void 0 && Li(d, (c) => {
      if (c.disabled)
        return kr.STOP;
      const { key: h } = c;
      if (!a.has(h) && (a.add(h), l.add(h), Gl(c.rawNode, i))) {
        if (r)
          return kr.STOP;
        if (!t)
          throw new Jl();
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
  function s(d) {
    if (d !== null) {
      if (d === e) {
        if (!a)
          a = !0;
        else if (!e.disabled && !e.isGroup) {
          l = e;
          return;
        }
      } else if ((!d.disabled || r) && !d.ignored && !d.isGroup) {
        l = d;
        return;
      }
      if (d.isGroup) {
        const c = ro(d, i);
        c !== null ? l = c : s(o(d, t));
      } else {
        const c = o(d, !1);
        if (c !== null)
          s(c);
        else {
          const h = as(d);
          h != null && h.isGroup ? s(o(h, t)) : t && s(o(d, !0));
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
      const d = r[s];
      if (!d.disabled && !d.ignored)
        if (d.isGroup) {
          const c = ro(d, n);
          if (c !== null)
            return c;
        } else
          return d;
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
function ds(e, n) {
  const t = e.key;
  for (; n; ) {
    if (n.key === t)
      return !0;
    n = n.parent;
  }
  return !1;
}
var us = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_21460_PJDHIKOZPECWZFUP", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.96.4", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-32603f9735-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
function Ni(e, n, t, r, o, i = null, a = 0) {
  const l = [];
  return e.forEach((s, d) => {
    var c;
    us.NODE_ENV !== "production" && Kl(s, o) && console.error("[treemate]: node", s, "is invalid");
    const h = Object.create(r);
    if (h.rawNode = s, h.siblings = l, h.level = a, h.index = d, h.isFirstChild = d === 0, h.isLastChild = d + 1 === e.length, h.parent = i, !h.ignored) {
      const m = o(s);
      Array.isArray(m) && (h.children = Ni(m, n, t, r, o, h, a + 1));
    }
    l.push(h), n.set(h.key, h), t.has(a) || t.set(a, []), (c = t.get(a)) === null || c === void 0 || c.push(h);
  }), l;
}
function cs(e, n = {}) {
  var t;
  const r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), { getDisabled: i = jl, getIgnored: a = Vl, getIsGroup: l = ql, getKey: s = Wl } = n, d = (t = n.getChildren) !== null && t !== void 0 ? t : Hl, c = n.ignoreEmptyChildren ? (x) => {
    const E = d(x);
    return Array.isArray(E) ? E.length ? E : null : E;
  } : d, h = Object.assign({
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
      return Nl(this.rawNode, c);
    },
    get shallowLoaded() {
      return Ul(this.rawNode, c);
    },
    get ignored() {
      return a(this.rawNode);
    },
    contains(x) {
      return ds(this, x);
    }
  }, ls), m = Ni(e, r, o, h, c);
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
  function w(x, E) {
    const B = f(x);
    return B ? B.getPrev(E) : null;
  }
  function b(x, E) {
    const B = f(x);
    return B ? B.getNext(E) : null;
  }
  function p(x) {
    const E = f(x);
    return E ? E.getParent() : null;
  }
  function _(x) {
    const E = f(x);
    return E ? E.getChild() : null;
  }
  const M = {
    treeNodes: m,
    treeNodeMap: r,
    levelTreeNodeMap: o,
    maxLevel: Math.max(...o.keys()),
    getChildren: c,
    getFlattenedNodes(x) {
      return ss(m, x);
    },
    getNode: v,
    getPrev: w,
    getNext: b,
    getParent: p,
    getChild: _,
    getFirstAvailableNode() {
      return rs(m);
    },
    getPath(x, E = {}) {
      return ts(x, E, M);
    },
    getCheckedKeys(x, E = {}) {
      const { cascade: B = !0, leafOnly: y = !1, checkStrategy: C = "all", allowNotLoaded: R = !1 } = E;
      return vr({
        checkedKeys: mr(x),
        indeterminateKeys: gr(x),
        cascade: B,
        leafOnly: y,
        checkStrategy: C,
        allowNotLoaded: R
      }, M);
    },
    check(x, E, B = {}) {
      const { cascade: y = !0, leafOnly: C = !1, checkStrategy: R = "all", allowNotLoaded: O = !1 } = B;
      return vr({
        checkedKeys: mr(E),
        indeterminateKeys: gr(E),
        keysToCheck: x == null ? [] : xo(x),
        cascade: y,
        leafOnly: C,
        checkStrategy: R,
        allowNotLoaded: O
      }, M);
    },
    uncheck(x, E, B = {}) {
      const { cascade: y = !0, leafOnly: C = !1, checkStrategy: R = "all", allowNotLoaded: O = !1 } = B;
      return vr({
        checkedKeys: mr(E),
        indeterminateKeys: gr(E),
        keysToUncheck: x == null ? [] : xo(x),
        cascade: y,
        leafOnly: C,
        checkStrategy: R,
        allowNotLoaded: O
      }, M);
    },
    getNonLeafKeys(x = {}) {
      return Ll(m, x);
    }
  };
  return M;
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
function Hi(e, n, t) {
  const r = fs[e];
  let o = r.get(n);
  o === void 0 && r.set(n, o = /* @__PURE__ */ new WeakMap());
  let i = o.get(t);
  return i === void 0 && o.set(t, i = hs(e, n, t)), i;
}
function ps(e, n, t, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const o = Hi(e, n, t);
    return Object.keys(o).forEach((i) => {
      Pe(i, document, o[i], r);
    }), !0;
  }
  return !1;
}
function ms(e, n, t, r) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const o = Hi(e, n, t);
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
  function o(y, C, R) {
    const O = y[C];
    return y[C] = function() {
      return R.apply(y, arguments), O.apply(y, arguments);
    }, y;
  }
  function i(y, C) {
    y[C] = Event.prototype[C];
  }
  const a = /* @__PURE__ */ new WeakMap(), l = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
  function s() {
    var y;
    return (y = a.get(this)) !== null && y !== void 0 ? y : null;
  }
  function d(y, C) {
    l !== void 0 && Object.defineProperty(y, "currentTarget", {
      configurable: !0,
      enumerable: !0,
      get: C ?? l.get
    });
  }
  const c = {
    bubble: {},
    capture: {}
  }, h = {};
  function m() {
    const y = function(C) {
      const { type: R, eventPhase: O, bubbles: V } = C, Q = Tt(C);
      if (O === 2)
        return;
      const P = O === 1 ? "capture" : "bubble";
      let F = Q;
      const T = [];
      for (; F === null && (F = window), T.push(F), F !== window; )
        F = F.parentNode || null;
      const N = c.capture[R], q = c.bubble[R];
      if (o(C, "stopPropagation", t), o(C, "stopImmediatePropagation", r), d(C, s), P === "capture") {
        if (N === void 0)
          return;
        for (let J = T.length - 1; J >= 0 && !e.has(C); --J) {
          const ee = T[J], X = N.get(ee);
          if (X !== void 0) {
            a.set(C, ee);
            for (const ie of X) {
              if (n.has(C))
                break;
              ie(C);
            }
          }
          if (J === 0 && !V && q !== void 0) {
            const ie = q.get(ee);
            if (ie !== void 0)
              for (const I of ie) {
                if (n.has(C))
                  break;
                I(C);
              }
          }
        }
      } else if (P === "bubble") {
        if (q === void 0)
          return;
        for (let J = 0; J < T.length && !e.has(C); ++J) {
          const ee = T[J], X = q.get(ee);
          if (X !== void 0) {
            a.set(C, ee);
            for (const ie of X) {
              if (n.has(C))
                break;
              ie(C);
            }
          }
        }
      }
      i(C, "stopPropagation"), i(C, "stopImmediatePropagation"), d(C);
    };
    return y.displayName = "evtdUnifiedHandler", y;
  }
  function v() {
    const y = function(C) {
      const { type: R, eventPhase: O } = C;
      if (O !== 2)
        return;
      const V = h[R];
      V !== void 0 && V.forEach((Q) => Q(C));
    };
    return y.displayName = "evtdUnifiedWindowEventHandler", y;
  }
  const f = m(), w = v();
  function b(y, C) {
    const R = c[y];
    return R[C] === void 0 && (R[C] = /* @__PURE__ */ new Map(), window.addEventListener(C, f, y === "capture")), R[C];
  }
  function p(y) {
    return h[y] === void 0 && (h[y] = /* @__PURE__ */ new Set(), window.addEventListener(y, w)), h[y];
  }
  function _(y, C) {
    let R = y.get(C);
    return R === void 0 && y.set(C, R = /* @__PURE__ */ new Set()), R;
  }
  function M(y, C, R, O) {
    const V = c[C][R];
    if (V !== void 0) {
      const Q = V.get(y);
      if (Q !== void 0 && Q.has(O))
        return !0;
    }
    return !1;
  }
  function x(y, C) {
    const R = h[y];
    return !!(R !== void 0 && R.has(C));
  }
  function E(y, C, R, O) {
    let V;
    if (typeof O == "object" && O.once === !0 ? V = (N) => {
      B(y, C, V, O), R(N);
    } : V = R, ps(y, C, V, O))
      return;
    const P = O === !0 || typeof O == "object" && O.capture === !0 ? "capture" : "bubble", F = b(P, y), T = _(F, C);
    if (T.has(V) || T.add(V), C === window) {
      const N = p(y);
      N.has(V) || N.add(V);
    }
  }
  function B(y, C, R, O) {
    if (ms(y, C, R, O))
      return;
    const Q = O === !0 || typeof O == "object" && O.capture === !0, P = Q ? "capture" : "bubble", F = b(P, y), T = _(F, C);
    if (C === window && !M(C, Q ? "bubble" : "capture", y, R) && x(y, R)) {
      const q = h[y];
      q.delete(R), q.size === 0 && (window.removeEventListener(y, w), h[y] = void 0);
    }
    T.has(R) && T.delete(R), T.size === 0 && F.delete(C), F.size === 0 && (window.removeEventListener(y, f, P === "capture"), c[P][y] = void 0);
  }
  return {
    on: E,
    off: B
  };
}
const { on: Pe, off: pe } = gs(), Bn = "@@mmoContext", vs = {
  mounted(e, { value: n }) {
    e[Bn] = {
      handler: void 0
    }, typeof n == "function" && (e[Bn].handler = n, Pe("mousemoveoutside", e, n));
  },
  updated(e, { value: n }) {
    const t = e[Bn];
    typeof n == "function" ? t.handler ? t.handler !== n && (pe("mousemoveoutside", e, t.handler), t.handler = n, Pe("mousemoveoutside", e, n)) : (e[Bn].handler = n, Pe("mousemoveoutside", e, n)) : t.handler && (pe("mousemoveoutside", e, t.handler), t.handler = void 0);
  },
  unmounted(e) {
    const { handler: n } = e[Bn];
    n && pe("mousemoveoutside", e, n), e[Bn].handler = void 0;
  }
}, Ln = "@@coContext", $t = {
  mounted(e, { value: n, modifiers: t }) {
    e[Ln] = {
      handler: void 0
    }, typeof n == "function" && (e[Ln].handler = n, Pe("clickoutside", e, n, {
      capture: t.capture
    }));
  },
  updated(e, { value: n, modifiers: t }) {
    const r = e[Ln];
    typeof n == "function" ? r.handler ? r.handler !== n && (pe("clickoutside", e, r.handler, {
      capture: t.capture
    }), r.handler = n, Pe("clickoutside", e, n, {
      capture: t.capture
    })) : (e[Ln].handler = n, Pe("clickoutside", e, n, {
      capture: t.capture
    })) : r.handler && (pe("clickoutside", e, r.handler, {
      capture: t.capture
    }), r.handler = void 0);
  },
  unmounted(e, { modifiers: n }) {
    const { handler: t } = e[Ln];
    t && pe("clickoutside", e, t, {
      capture: n.capture
    }), e[Ln].handler = void 0;
  }
};
function bs(e, n) {
  console.error(`[vdirs/${e}]: ${n}`);
}
class ys {
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
const br = new ys(), Nn = "@@ziContext", Wi = {
  mounted(e, n) {
    const { value: t = {} } = n, { zIndex: r, enabled: o } = t;
    e[Nn] = {
      enabled: !!o,
      initialized: !1
    }, o && (br.ensureZIndex(e, r), e[Nn].initialized = !0);
  },
  updated(e, n) {
    const { value: t = {} } = n, { zIndex: r, enabled: o } = t, i = e[Nn].enabled;
    o && !i && (br.ensureZIndex(e, r), e[Nn].initialized = !0), e[Nn].enabled = !!o;
  },
  unmounted(e, n) {
    if (!e[Nn].initialized)
      return;
    const { value: t = {} } = n, { zIndex: r } = t;
    br.unregister(e, r);
  }
};
function ws(e) {
  const n = D(!!e.value);
  if (n.value)
    return Dr(n);
  const t = Ce(e, (r) => {
    r && (n.value = !0, t());
  });
  return Dr(n);
}
function Re(e) {
  const n = z(e), t = D(n.value);
  return Ce(n, (r) => {
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
let Wn, tt;
const Cs = () => {
  var e, n;
  Wn = Ss ? (n = (e = document) === null || e === void 0 ? void 0 : e.fonts) === null || n === void 0 ? void 0 : n.ready : void 0, tt = !1, Wn !== void 0 ? Wn.then(() => {
    tt = !0;
  }) : tt = !0;
};
Cs();
function xs(e) {
  if (tt)
    return;
  let n = !1;
  Ie(() => {
    tt || Wn == null || Wn.then(() => {
      n || e();
    });
  }), ke(() => {
    n = !0;
  });
}
function Br(e, n) {
  return Ce(e, (t) => {
    t !== void 0 && (n.value = t);
  }), z(() => e.value === void 0 ? n.value : e.value);
}
function Vt() {
  const e = D(!1);
  return Ie(() => {
    e.value = !0;
  }), Dr(e);
}
function Vi(e, n) {
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
function Lr(e, n, t = "default") {
  const r = n[t];
  if (r === void 0)
    throw new Error(`[vueuc/${e}]: slot[${t}] is empty.`);
  return r();
}
function Nr(e, n = !0, t = []) {
  return e.forEach((r) => {
    if (r !== null) {
      if (typeof r != "object") {
        (typeof r == "string" || typeof r == "number") && t.push(Rt(String(r)));
        return;
      }
      if (Array.isArray(r)) {
        Nr(r, n, t);
        return;
      }
      if (r.type === On) {
        if (r.children === null)
          return;
        Array.isArray(r.children) && Nr(r.children, n, t);
      } else r.type !== no && t.push(r);
    }
  }), t;
}
function Po(e, n, t = "default") {
  const r = n[t];
  if (r === void 0)
    throw new Error(`[vueuc/${e}]: slot[${t}] is empty.`);
  const o = Nr(r());
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
function yr(e) {
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
function ji(e) {
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
  return ji(n);
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
    Ve("VBinder", (n = Ii()) === null || n === void 0 ? void 0 : n.proxy);
    const t = fe("VBinder", null), r = D(null), o = (p) => {
      r.value = p, t && e.syncTargetWithParent && t.setTargetRef(p);
    };
    let i = [];
    const a = () => {
      let p = r.value;
      for (; p = ji(p), p !== null; )
        i.push(p);
      for (const _ of i)
        Pe("scroll", _, h, !0);
    }, l = () => {
      for (const p of i)
        pe("scroll", p, h, !0);
      i = [];
    }, s = /* @__PURE__ */ new Set(), d = (p) => {
      s.size === 0 && a(), s.has(p) || s.add(p);
    }, c = (p) => {
      s.has(p) && s.delete(p), s.size === 0 && l();
    }, h = () => {
      Bi(m);
    }, m = () => {
      s.forEach((p) => p());
    }, v = /* @__PURE__ */ new Set(), f = (p) => {
      v.size === 0 && Pe("resize", window, b), v.has(p) || v.add(p);
    }, w = (p) => {
      v.has(p) && v.delete(p), v.size === 0 && pe("resize", window, b);
    }, b = () => {
      v.forEach((p) => p());
    };
    return ke(() => {
      pe("resize", window, b), l();
    }), {
      targetRef: r,
      setTargetRef: o,
      addScrollListener: d,
      removeScrollListener: c,
      addResizeListener: f,
      removeResizeListener: w
    };
  },
  render() {
    return Lr("binder", this.$slots);
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
function Ms(e, n) {
  return `<style cssr-id="${e}">
${n}
</style>`;
}
function Rs(e, n, t) {
  const { styles: r, ids: o } = t;
  o.has(e) || r !== null && (o.add(e), r.push(Ms(e, n)));
}
const As = typeof document < "u";
function En() {
  if (As)
    return;
  const e = fe(Ts, null);
  if (e !== null)
    return {
      adapter: (n, t) => Rs(n, t, e),
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
const Xi = /\s*,(?![^(]*\))\s*/g, $s = /\s+/g;
function Fs(e, n) {
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
function Ds(e, n) {
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
    t && (t.includes("&") ? n = Fs(n, t) : n = Ds(n, t));
  }), n.join(", ").replace($s, " ");
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
function ks(e) {
  const n = document.createElement("style");
  return n.setAttribute("cssr-id", e), n;
}
function yt(e) {
  return e ? /^\s*@(s|m)/.test(e) : !1;
}
const Bs = /[A-Z]/g;
function Yi(e) {
  return e.replace(Bs, (n) => "-" + n.toLowerCase());
}
function Ls(e, n = "  ") {
  return typeof e == "object" && e !== null ? ` {
` + Object.entries(e).map((t) => n + `  ${Yi(t[0])}: ${t[1]};`).join(`
`) + `
` + n + "}" : `: ${e};`;
}
function Ns(e, n, t) {
  return typeof e == "function" ? e({
    context: n.context,
    props: t
  }) : e;
}
function To(e, n, t, r) {
  if (!n)
    return "";
  const o = Ns(n, t, r);
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
    l = Yi(l), s != null && a.push(`  ${l}${Ls(s)}`);
  }), e && a.push("}"), a.join(`
`);
}
function Hr(e, n, t) {
  e && e.forEach((r) => {
    if (Array.isArray(r))
      Hr(r, n, t);
    else if (typeof r == "function") {
      const o = r(n);
      Array.isArray(o) ? Hr(o, n, t) : o && t(o);
    } else r && t(r);
  });
}
function qi(e, n, t, r, o) {
  const i = e.$;
  let a = "";
  if (!i || typeof i == "string")
    yt(i) ? a = i : n.push(i);
  else if (typeof i == "function") {
    const d = i({
      context: r.context,
      props: o
    });
    yt(d) ? a = d : n.push(d);
  } else if (i.before && i.before(r.context), !i.$ || typeof i.$ == "string")
    yt(i.$) ? a = i.$ : n.push(i.$);
  else if (i.$) {
    const d = i.$({
      context: r.context,
      props: o
    });
    yt(d) ? a = d : n.push(d);
  }
  const l = zs(n), s = To(l, e.props, r, o);
  a ? t.push(`${a} {`) : s.length && t.push(s), e.children && Hr(e.children, {
    context: r.context,
    props: o
  }, (d) => {
    if (typeof d == "string") {
      const c = To(l, { raw: d }, r, o);
      t.push(c);
    } else
      qi(d, n, t, r, o);
  }), n.pop(), a && t.push("}"), i && i.after && i.after(r.context);
}
function Hs(e, n, t) {
  const r = [];
  return qi(e, [], r, n, t), r.join(`

`);
}
function Wr(e) {
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
function Ws(e, n, t, r) {
  const { els: o } = n;
  if (t === void 0)
    o.forEach(Eo), n.els = [];
  else {
    const i = Ut(t, r);
    i && o.includes(i) && (Eo(i), n.els = o.filter((a) => a !== i));
  }
}
function Mo(e, n) {
  e.push(n);
}
function Vs(e, n, t, r, o, i, a, l, s) {
  let d;
  if (t === void 0 && (d = n.render(r), t = Wr(d)), s) {
    s.adapter(t, d ?? n.render(r));
    return;
  }
  l === void 0 && (l = document.head);
  const c = Ut(t, l);
  if (c !== null && !i)
    return c;
  const h = c ?? ks(t);
  if (d === void 0 && (d = n.render(r)), h.textContent = d, c !== null)
    return c;
  if (a) {
    const m = l.querySelector(`meta[name="${a}"]`);
    if (m)
      return l.insertBefore(h, m), Mo(n.els, h), h;
  }
  return o ? l.insertBefore(h, l.querySelector("style, link")) : l.appendChild(h), Mo(n.els, h), h;
}
function Us(e) {
  return Hs(this, this.instance, e);
}
function js(e = {}) {
  const { id: n, ssr: t, props: r, head: o = !1, force: i = !1, anchorMetaName: a, parent: l } = e;
  return Vs(this.instance, this, n, r, o, i, a, l, t);
}
function Gs(e = {}) {
  const { id: n, parent: t } = e;
  Ws(this.instance, this, n, t);
}
const wt = function(e, n, t, r) {
  return {
    instance: e,
    $: n,
    props: t,
    children: r,
    els: [],
    render: Us,
    mount: js,
    unmount: Gs
  };
}, Ks = function(e, n, t, r) {
  return Array.isArray(n) ? wt(e, { $: null }, null, n) : Array.isArray(t) ? wt(e, n, null, t) : Array.isArray(r) ? wt(e, n, t, r) : wt(e, n, t, null);
};
function Zi(e = {}) {
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
const { c: an } = Zi(), oo = "vueuc-style";
function Ro(e) {
  return e & -e;
}
class Ji {
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
      o[n] += t, n += Ro(n);
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
      i += t[n], n -= Ro(n);
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
const Ys = oe({
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
      showTeleport: ws(le(e, "show")),
      mergedTo: z(() => {
        const { to: n } = e;
        return n ?? "body";
      })
    };
  },
  render() {
    return this.showTeleport ? this.disabled ? Lr("lazy-teleport", this.$slots) : g(vl, {
      disabled: this.disabled,
      to: this.mergedTo
    }, Lr("lazy-teleport", this.$slots)) : null;
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
}, wr = {
  top: "height",
  bottom: "height",
  left: "width",
  right: "width"
}, qs = {
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
}, Zs = {
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
}, Js = {
  "bottom-start": "right",
  "bottom-end": "left",
  "top-start": "right",
  "top-end": "left",
  "right-start": "bottom",
  "right-end": "top",
  "left-start": "bottom",
  "left-end": "top"
}, $o = {
  top: !0,
  bottom: !1,
  left: !0,
  right: !1
  // left--
}, Fo = {
  top: "end",
  bottom: "start",
  left: "end",
  right: "start"
};
function Qs(e, n, t, r, o, i) {
  if (!o || i)
    return { placement: e, top: 0, left: 0 };
  const [a, l] = e.split("-");
  let s = l ?? "center", d = {
    top: 0,
    left: 0
  };
  const c = (v, f, w) => {
    let b = 0, p = 0;
    const _ = t[v] - n[f] - n[v];
    return _ > 0 && r && (w ? p = $o[f] ? _ : -_ : b = $o[f] ? _ : -_), {
      left: b,
      top: p
    };
  }, h = a === "left" || a === "right";
  if (s !== "center") {
    const v = Js[e], f = St[v], w = wr[v];
    if (t[w] > n[w]) {
      if (
        // current space is not enough
        // ----------[ target ]---------|
        // -------[     follower        ]
        n[v] + n[w] < t[w]
      ) {
        const b = (t[w] - n[w]) / 2;
        n[v] < b || n[f] < b ? n[v] < n[f] ? (s = Io[l], d = c(w, f, h)) : d = c(w, v, h) : s = "center";
      }
    } else t[w] < n[w] && n[f] < 0 && // opposite align has larger space
    // ------------[   target   ]
    // ----------------[follower]
    n[v] > n[f] && (s = Io[l]);
  } else {
    const v = a === "bottom" || a === "top" ? "left" : "top", f = St[v], w = wr[v], b = (t[w] - n[w]) / 2;
    // center is not enough
    // ----------- [ target ]--|
    // -------[     follower     ]
    (n[v] < b || n[f] < b) && (n[v] > n[f] ? (s = Fo[v], d = c(w, v, h)) : (s = Fo[f], d = c(w, f, h)));
  }
  let m = a;
  return (
    // space is not enough
    n[a] < t[wr[a]] && // opposite position's space is larger
    n[a] < n[St[a]] && (m = St[a]), {
      placement: s !== "center" ? `${m}-${s}` : m,
      left: d.left,
      top: d.top
    }
  );
}
function ed(e, n) {
  return n ? Zs[e] : qs[e];
}
function nd(e, n, t, r, o, i) {
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
const td = an([
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
    const n = fe("VBinder"), t = Re(() => e.enabled !== void 0 ? e.enabled : e.show), r = D(null), o = D(null), i = () => {
      const { syncTrigger: m } = e;
      m.includes("scroll") && n.addScrollListener(s), m.includes("resize") && n.addResizeListener(s);
    }, a = () => {
      n.removeScrollListener(s), n.removeResizeListener(s);
    };
    Ie(() => {
      t.value && (s(), i());
    });
    const l = En();
    td.mount({
      id: "vueuc/binder",
      head: !0,
      anchorMetaName: oo,
      ssr: l
    }), ke(() => {
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
      const v = n.targetRef, { x: f, y: w, overlap: b } = e, p = f !== void 0 && w !== void 0 ? Os(f, w) : yr(v);
      m.style.setProperty("--v-target-width", `${Math.round(p.width)}px`), m.style.setProperty("--v-target-height", `${Math.round(p.height)}px`);
      const { width: _, minWidth: M, placement: x, internalShift: E, flip: B } = e;
      m.setAttribute("v-placement", x), b ? m.setAttribute("v-overlap", "") : m.removeAttribute("v-overlap");
      const { style: y } = m;
      _ === "target" ? y.width = `${p.width}px` : _ !== void 0 ? y.width = _ : y.width = "", M === "target" ? y.minWidth = `${p.width}px` : M !== void 0 ? y.minWidth = M : y.minWidth = "";
      const C = yr(m), R = yr(o.value), { left: O, top: V, placement: Q } = Qs(x, p, C, E, B, b), P = ed(Q, b), { left: F, top: T, transform: N } = nd(Q, R, p, V, O, b);
      m.setAttribute("v-placement", Q), m.style.setProperty("--v-offset-left", `${Math.round(O)}px`), m.style.setProperty("--v-offset-top", `${Math.round(V)}px`), m.style.transform = `translateX(${F}) translateY(${T}) ${N}`, m.style.setProperty("--v-transform-origin", P), m.style.transformOrigin = P;
    };
    Ce(t, (m) => {
      m ? (i(), d()) : a();
    });
    const d = () => {
      Ht().then(s).catch((m) => console.error(m));
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
      Ce(le(e, m), s);
    }), ["teleportDisabled"].forEach((m) => {
      Ce(le(e, m), d);
    }), Ce(le(e, "syncTrigger"), (m) => {
      m.includes("resize") ? n.addResizeListener(s) : n.removeResizeListener(s), m.includes("scroll") ? n.addScrollListener(s) : n.removeScrollListener(s);
    });
    const c = Vt(), h = Re(() => {
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
    return g(Ys, {
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
            Wi,
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
var Sn = [], rd = function() {
  return Sn.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, od = function() {
  return Sn.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, Do = "ResizeObserver loop completed with undelivered notifications.", id = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: Do
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = Do), window.dispatchEvent(e);
}, st;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(st || (st = {}));
var Cn = function(e) {
  return Object.freeze(e);
}, ad = /* @__PURE__ */ function() {
  function e(n, t) {
    this.inlineSize = n, this.blockSize = t, Cn(this);
  }
  return e;
}(), ea = function() {
  function e(n, t, r, o) {
    return this.x = n, this.y = t, this.width = r, this.height = o, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Cn(this);
  }
  return e.prototype.toJSON = function() {
    var n = this, t = n.x, r = n.y, o = n.top, i = n.right, a = n.bottom, l = n.left, s = n.width, d = n.height;
    return { x: t, y: r, top: o, right: i, bottom: a, left: l, width: s, height: d };
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
}, ld = function(e) {
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
}, rt = typeof window < "u" ? window : {}, Ct = /* @__PURE__ */ new WeakMap(), ko = /auto|scroll/, sd = /^tb|vertical/, dd = /msie|trident/i.test(rt.navigator && rt.navigator.userAgent), We = function(e) {
  return parseFloat(e || "0");
}, Vn = function(e, n, t) {
  return e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = !1), new ad((t ? n : e) || 0, (t ? e : n) || 0);
}, Bo = Cn({
  devicePixelContentBoxSize: Vn(),
  borderBoxSize: Vn(),
  contentBoxSize: Vn(),
  contentRect: new ea(0, 0, 0, 0)
}), ta = function(e, n) {
  if (n === void 0 && (n = !1), Ct.has(e) && !n)
    return Ct.get(e);
  if (na(e))
    return Ct.set(e, Bo), Bo;
  var t = getComputedStyle(e), r = io(e) && e.ownerSVGElement && e.getBBox(), o = !dd && t.boxSizing === "border-box", i = sd.test(t.writingMode || ""), a = !r && ko.test(t.overflowY || ""), l = !r && ko.test(t.overflowX || ""), s = r ? 0 : We(t.paddingTop), d = r ? 0 : We(t.paddingRight), c = r ? 0 : We(t.paddingBottom), h = r ? 0 : We(t.paddingLeft), m = r ? 0 : We(t.borderTopWidth), v = r ? 0 : We(t.borderRightWidth), f = r ? 0 : We(t.borderBottomWidth), w = r ? 0 : We(t.borderLeftWidth), b = h + d, p = s + c, _ = w + v, M = m + f, x = l ? e.offsetHeight - M - e.clientHeight : 0, E = a ? e.offsetWidth - _ - e.clientWidth : 0, B = o ? b + _ : 0, y = o ? p + M : 0, C = r ? r.width : We(t.width) - B - E, R = r ? r.height : We(t.height) - y - x, O = C + b + E + _, V = R + p + x + M, Q = Cn({
    devicePixelContentBoxSize: Vn(Math.round(C * devicePixelRatio), Math.round(R * devicePixelRatio), i),
    borderBoxSize: Vn(O, V, i),
    contentBoxSize: Vn(C, R, i),
    contentRect: new ea(h, s, C, R)
  });
  return Ct.set(e, Q), Q;
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
}, ud = /* @__PURE__ */ function() {
  function e(n) {
    var t = ta(n);
    this.target = n, this.contentRect = t.contentRect, this.borderBoxSize = Cn([t.borderBoxSize]), this.contentBoxSize = Cn([t.contentBoxSize]), this.devicePixelContentBoxSize = Cn([t.devicePixelContentBoxSize]);
  }
  return e;
}(), oa = function(e) {
  if (na(e))
    return 1 / 0;
  for (var n = 0, t = e.parentNode; t; )
    n += 1, t = t.parentNode;
  return n;
}, cd = function() {
  var e = 1 / 0, n = [];
  Sn.forEach(function(a) {
    if (a.activeTargets.length !== 0) {
      var l = [];
      a.activeTargets.forEach(function(d) {
        var c = new ud(d.target), h = oa(d.target);
        l.push(c), d.lastReportedSize = ra(d.target, d.observedBox), h < e && (e = h);
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
}, Lo = function(e) {
  Sn.forEach(function(t) {
    t.activeTargets.splice(0, t.activeTargets.length), t.skippedTargets.splice(0, t.skippedTargets.length), t.observationTargets.forEach(function(o) {
      o.isActive() && (oa(o.target) > e ? t.activeTargets.push(o) : t.skippedTargets.push(o));
    });
  });
}, fd = function() {
  var e = 0;
  for (Lo(e); rd(); )
    e = cd(), Lo(e);
  return od() && id(), e > 0;
}, Sr, ia = [], hd = function() {
  return ia.splice(0).forEach(function(e) {
    return e();
  });
}, pd = function(e) {
  if (!Sr) {
    var n = 0, t = document.createTextNode(""), r = { characterData: !0 };
    new MutationObserver(function() {
      return hd();
    }).observe(t, r), Sr = function() {
      t.textContent = "".concat(n ? n-- : n++);
    };
  }
  ia.push(e), Sr();
}, md = function(e) {
  pd(function() {
    requestAnimationFrame(e);
  });
}, Mt = 0, gd = function() {
  return !!Mt;
}, vd = 250, bd = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, No = [
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
], Ho = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, Cr = !1, yd = function() {
  function e() {
    var n = this;
    this.stopped = !0, this.listener = function() {
      return n.schedule();
    };
  }
  return e.prototype.run = function(n) {
    var t = this;
    if (n === void 0 && (n = vd), !Cr) {
      Cr = !0;
      var r = Ho(n);
      md(function() {
        var o = !1;
        try {
          o = fd();
        } finally {
          if (Cr = !1, n = r - Ho(), !gd())
            return;
          o ? t.run(1e3) : n > 0 ? t.run(n) : t.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var n = this, t = function() {
      return n.observer && n.observer.observe(document.body, bd);
    };
    document.body ? t() : rt.addEventListener("DOMContentLoaded", t);
  }, e.prototype.start = function() {
    var n = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), No.forEach(function(t) {
      return rt.addEventListener(t, n.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var n = this;
    this.stopped || (this.observer && this.observer.disconnect(), No.forEach(function(t) {
      return rt.removeEventListener(t, n.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), Vr = new yd(), Wo = function(e) {
  !Mt && e > 0 && Vr.start(), Mt += e, !Mt && Vr.stop();
}, wd = function(e) {
  return !io(e) && !ld(e) && getComputedStyle(e).display === "inline";
}, Sd = function() {
  function e(n, t) {
    this.target = n, this.observedBox = t || st.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var n = ra(this.target, this.observedBox, !0);
    return wd(this.target) && (this.lastReportedSize = n), this.lastReportedSize.inlineSize !== n.inlineSize || this.lastReportedSize.blockSize !== n.blockSize;
  }, e;
}(), Cd = /* @__PURE__ */ function() {
  function e(n, t) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = n, this.callback = t;
  }
  return e;
}(), xt = /* @__PURE__ */ new WeakMap(), Vo = function(e, n) {
  for (var t = 0; t < e.length; t += 1)
    if (e[t].target === n)
      return t;
  return -1;
}, _t = function() {
  function e() {
  }
  return e.connect = function(n, t) {
    var r = new Cd(n, t);
    xt.set(n, r);
  }, e.observe = function(n, t, r) {
    var o = xt.get(n), i = o.observationTargets.length === 0;
    Vo(o.observationTargets, t) < 0 && (i && Sn.push(o), o.observationTargets.push(new Sd(t, r && r.box)), Wo(1), Vr.schedule());
  }, e.unobserve = function(n, t) {
    var r = xt.get(n), o = Vo(r.observationTargets, t), i = r.observationTargets.length === 1;
    o >= 0 && (i && Sn.splice(Sn.indexOf(r), 1), r.observationTargets.splice(o, 1), Wo(-1));
  }, e.disconnect = function(n) {
    var t = this, r = xt.get(n);
    r.observationTargets.slice().forEach(function(o) {
      return t.unobserve(n, o.target);
    }), r.activeTargets.splice(0, r.activeTargets.length);
  }, e;
}(), xd = function() {
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
class _d {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || xd)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
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
const ot = new _d(), Ft = oe({
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
    }), ke(() => {
      n && ot.unregisterHandler(t.$el.nextElementSibling);
    });
  },
  render() {
    return $i(this.$slots, "default");
  }
});
let Pt;
function Pd() {
  return typeof document > "u" ? !1 : (Pt === void 0 && ("matchMedia" in window ? Pt = window.matchMedia("(pointer:coarse)").matches : Pt = !1), Pt);
}
let xr;
function Uo() {
  return typeof document > "u" ? 1 : (xr === void 0 && (xr = "chrome" in window ? window.devicePixelRatio : 1), xr);
}
const aa = "VVirtualListXScroll";
function Od({ columnsRef: e, renderColRef: n, renderItemWithColsRef: t }) {
  const r = D(0), o = D(0), i = z(() => {
    const d = e.value;
    if (d.length === 0)
      return null;
    const c = new Ji(d.length, 0);
    return d.forEach((h, m) => {
      c.add(m, h.width);
    }), c;
  }), a = Re(() => {
    const d = i.value;
    return d !== null ? Math.max(d.getBound(o.value) - 1, 0) : 0;
  }), l = (d) => {
    const c = i.value;
    return c !== null ? c.sum(d) : 0;
  }, s = Re(() => {
    const d = i.value;
    return d !== null ? Math.min(d.getBound(o.value + r.value) + 1, e.value.length - 1) : 0;
  });
  return Ve(aa, {
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
const jo = oe({
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
        const d = t[s];
        l.push(r({ column: d, left: i(s), item: a }));
      }
      return l;
    }
    return null;
  }
}), Ed = an(".v-vl", {
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
]), Td = oe({
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
    Ed.mount({
      id: "vueuc/virtual-list",
      head: !0,
      anchorMetaName: oo,
      ssr: n
    }), Ie(() => {
      const { defaultScrollIndex: P, defaultScrollKey: F } = e;
      P != null ? b({ index: P }) : F != null && b({ key: F });
    });
    let t = !1, r = !1;
    Fi(() => {
      if (t = !1, !r) {
        r = !0;
        return;
      }
      b({ top: v.value, left: a.value });
    }), Di(() => {
      t = !0, r || (r = !0);
    });
    const o = Re(() => {
      if (e.renderCol == null && e.renderItemWithCols == null || e.columns.length === 0)
        return;
      let P = 0;
      return e.columns.forEach((F) => {
        P += F.width;
      }), P;
    }), i = z(() => {
      const P = /* @__PURE__ */ new Map(), { keyField: F } = e;
      return e.items.forEach((T, N) => {
        P.set(T[F], N);
      }), P;
    }), { scrollLeftRef: a, listWidthRef: l } = Od({
      columnsRef: le(e, "columns"),
      renderColRef: le(e, "renderCol"),
      renderItemWithColsRef: le(e, "renderItemWithCols")
    }), s = D(null), d = D(void 0), c = /* @__PURE__ */ new Map(), h = z(() => {
      const { items: P, itemSize: F, keyField: T } = e, N = new Ji(P.length, F);
      return P.forEach((q, J) => {
        const ee = q[T], X = c.get(ee);
        X !== void 0 && N.add(J, X);
      }), N;
    }), m = D(0), v = D(0), f = Re(() => Math.max(h.value.getBound(v.value - lt(e.paddingTop)) - 1, 0)), w = z(() => {
      const { value: P } = d;
      if (P === void 0)
        return [];
      const { items: F, itemSize: T } = e, N = f.value, q = Math.min(N + Math.ceil(P / T + 1), F.length - 1), J = [];
      for (let ee = N; ee <= q; ++ee)
        J.push(F[ee]);
      return J;
    }), b = (P, F) => {
      if (typeof P == "number") {
        x(P, F, "auto");
        return;
      }
      const { left: T, top: N, index: q, key: J, position: ee, behavior: X, debounce: ie = !0 } = P;
      if (T !== void 0 || N !== void 0)
        x(T, N, X);
      else if (q !== void 0)
        M(q, X, ie);
      else if (J !== void 0) {
        const I = i.value.get(J);
        I !== void 0 && M(I, X, ie);
      } else ee === "bottom" ? x(0, Number.MAX_SAFE_INTEGER, X) : ee === "top" && x(0, 0, X);
    };
    let p, _ = null;
    function M(P, F, T) {
      const { value: N } = h, q = N.sum(P) + lt(e.paddingTop);
      if (!T)
        s.value.scrollTo({
          left: 0,
          top: q,
          behavior: F
        });
      else {
        p = P, _ !== null && window.clearTimeout(_), _ = window.setTimeout(() => {
          p = void 0, _ = null;
        }, 16);
        const { scrollTop: J, offsetHeight: ee } = s.value;
        if (q > J) {
          const X = N.get(P);
          q + X <= J + ee || s.value.scrollTo({
            left: 0,
            top: q + X - ee,
            behavior: F
          });
        } else
          s.value.scrollTo({
            left: 0,
            top: q,
            behavior: F
          });
      }
    }
    function x(P, F, T) {
      s.value.scrollTo({
        left: P,
        top: F,
        behavior: T
      });
    }
    function E(P, F) {
      var T, N, q;
      if (t || e.ignoreItemResize || Q(F.target))
        return;
      const { value: J } = h, ee = i.value.get(P), X = J.get(ee), ie = (q = (N = (T = F.borderBoxSize) === null || T === void 0 ? void 0 : T[0]) === null || N === void 0 ? void 0 : N.blockSize) !== null && q !== void 0 ? q : F.contentRect.height;
      if (ie === X)
        return;
      ie - e.itemSize === 0 ? c.delete(P) : c.set(P, ie - e.itemSize);
      const k = ie - X;
      if (k === 0)
        return;
      J.add(ee, k);
      const re = s.value;
      if (re != null) {
        if (p === void 0) {
          const ge = J.sum(ee);
          re.scrollTop > ge && re.scrollBy(0, k);
        } else if (ee < p)
          re.scrollBy(0, k);
        else if (ee === p) {
          const ge = J.sum(ee);
          ie + ge > // Note, listEl shouldn't have border, nor offsetHeight won't be
          // correct
          re.scrollTop + re.offsetHeight && re.scrollBy(0, k);
        }
        V();
      }
      m.value++;
    }
    const B = !Pd();
    let y = !1;
    function C(P) {
      var F;
      (F = e.onScroll) === null || F === void 0 || F.call(e, P), (!B || !y) && V();
    }
    function R(P) {
      var F;
      if ((F = e.onWheel) === null || F === void 0 || F.call(e, P), B) {
        const T = s.value;
        if (T != null) {
          if (P.deltaX === 0 && (T.scrollTop === 0 && P.deltaY <= 0 || T.scrollTop + T.offsetHeight >= T.scrollHeight && P.deltaY >= 0))
            return;
          P.preventDefault(), T.scrollTop += P.deltaY / Uo(), T.scrollLeft += P.deltaX / Uo(), V(), y = !0, Bi(() => {
            y = !1;
          });
        }
      }
    }
    function O(P) {
      if (t || Q(P.target))
        return;
      if (e.renderCol == null && e.renderItemWithCols == null) {
        if (P.contentRect.height === d.value)
          return;
      } else if (P.contentRect.height === d.value && P.contentRect.width === l.value)
        return;
      d.value = P.contentRect.height, l.value = P.contentRect.width;
      const { onResize: F } = e;
      F !== void 0 && F(P);
    }
    function V() {
      const { value: P } = s;
      P != null && (v.value = P.scrollTop, a.value = P.scrollLeft);
    }
    function Q(P) {
      let F = P;
      for (; F !== null; ) {
        if (F.style.display === "none")
          return !0;
        F = F.parentElement;
      }
      return !1;
    }
    return {
      listHeight: d,
      listStyle: {
        overflow: "auto"
      },
      keyToIndex: i,
      itemsStyle: z(() => {
        const { itemResizable: P } = e, F = Yn(h.value.sum());
        return m.value, [
          e.itemsStyle,
          {
            boxSizing: "content-box",
            width: Yn(o.value),
            height: P ? "" : F,
            minHeight: P ? F : "",
            paddingTop: Yn(e.paddingTop),
            paddingBottom: Yn(e.paddingBottom)
          }
        ];
      }),
      visibleItemsStyle: z(() => (m.value, {
        transform: `translateY(${Yn(h.value.sum(f.value))})`
      })),
      viewportItems: w,
      listElRef: s,
      itemsElRef: D(null),
      scrollTo: b,
      handleListResize: O,
      handleListScroll: C,
      handleListWheel: R,
      handleItemResize: E
    };
  },
  render() {
    const { itemResizable: e, keyField: n, keyToIndex: t, visibleItemsTag: r } = this;
    return g(Ft, {
      onResize: this.handleListResize
    }, {
      default: () => {
        var o, i;
        return g("div", Wt(this.$attrs, {
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
                  const d = s[n], c = t.get(d), h = a != null ? g(jo, {
                    index: c,
                    item: s
                  }) : void 0, m = l != null ? g(jo, {
                    index: c,
                    item: s
                  }) : void 0, v = this.$slots.default({
                    item: s,
                    renderedCols: h,
                    renderedItemWithCols: m,
                    index: c
                  })[0];
                  return e ? g(Ft, {
                    key: d,
                    onResize: (f) => this.handleItemResize(d, f)
                  }, {
                    default: () => v
                  }) : (v.key = d, v);
                });
              }
            })
          ]) : (i = (o = this.$slots).empty) === null || i === void 0 ? void 0 : i.call(o)
        ]);
      }
    });
  }
}), Xe = "v-hidden", Md = an("[v-hidden]", {
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
    const t = D(null), r = D(null);
    function o(a) {
      const { value: l } = t, { getCounter: s, getTail: d } = e;
      let c;
      if (s !== void 0 ? c = s() : c = r.value, !l || !c)
        return;
      c.hasAttribute(Xe) && c.removeAttribute(Xe);
      const { children: h } = l;
      if (a.showAllItemsBeforeCalculate)
        for (const M of h)
          M.hasAttribute(Xe) && M.removeAttribute(Xe);
      const m = l.offsetWidth, v = [], f = n.tail ? d == null ? void 0 : d() : null;
      let w = f ? f.offsetWidth : 0, b = !1;
      const p = l.children.length - (n.tail ? 1 : 0);
      for (let M = 0; M < p - 1; ++M) {
        if (M < 0)
          continue;
        const x = h[M];
        if (b) {
          x.hasAttribute(Xe) || x.setAttribute(Xe, "");
          continue;
        } else x.hasAttribute(Xe) && x.removeAttribute(Xe);
        const E = x.offsetWidth;
        if (w += E, v[M] = E, w > m) {
          const { updateCounter: B } = e;
          for (let y = M; y >= 0; --y) {
            const C = p - 1 - y;
            B !== void 0 ? B(C) : c.textContent = `${C}`;
            const R = c.offsetWidth;
            if (w -= v[y], w + R <= m || y === 0) {
              b = !0, M = y - 1, f && (M === -1 ? (f.style.maxWidth = `${m - R}px`, f.style.boxSizing = "border-box") : f.style.maxWidth = "");
              const { onUpdateCount: O } = e;
              O && O(C);
              break;
            }
          }
        }
      }
      const { onUpdateOverflow: _ } = e;
      b ? _ !== void 0 && _(!0) : (_ !== void 0 && _(!1), c.setAttribute(Xe, ""));
    }
    const i = En();
    return Md.mount({
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
    return Ht(() => this.sync({
      showAllItemsBeforeCalculate: !1
    })), g("div", {
      class: "v-overflow",
      ref: "selfRef"
    }, [
      $i(e, "default"),
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
    if (la(t) && (ua(t) || sa(t)))
      return !0;
  }
  return !1;
}
function da(e) {
  for (let n = e.childNodes.length - 1; n >= 0; n--) {
    const t = e.childNodes[n];
    if (la(t) && (ua(t) || da(t)))
      return !0;
  }
  return !1;
}
function ua(e) {
  if (!Rd(e))
    return !1;
  try {
    e.focus({ preventScroll: !0 });
  } catch {
  }
  return document.activeElement === e;
}
function Rd(e) {
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
let qn = [];
const Ad = oe({
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
    const n = Bl(), t = D(null), r = D(null);
    let o = !1, i = !1;
    const a = typeof document > "u" ? null : document.activeElement;
    function l() {
      return qn[qn.length - 1] === n;
    }
    function s(b) {
      var p;
      b.code === "Escape" && l() && ((p = e.onEsc) === null || p === void 0 || p.call(e, b));
    }
    Ie(() => {
      Ce(() => e.active, (b) => {
        b ? (h(), Pe("keydown", document, s)) : (pe("keydown", document, s), o && m());
      }, {
        immediate: !0
      });
    }), ke(() => {
      pe("keydown", document, s), o && m();
    });
    function d(b) {
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
        if (qn.push(n), e.autoFocus) {
          const { initialFocusTo: p } = e;
          p === void 0 ? v("first") : (b = Ao(p)) === null || b === void 0 || b.focus({ preventScroll: !0 });
        }
        o = !0, document.addEventListener("focus", d, !0);
      }
    }
    function m() {
      var b;
      if (e.disabled || (document.removeEventListener("focus", d, !0), qn = qn.filter((_) => _ !== n), l()))
        return;
      const { finalFocusTo: p } = e;
      p !== void 0 ? (b = Ao(p)) === null || b === void 0 || b.focus({ preventScroll: !0 }) : e.returnFocusOnDeactivated && a instanceof HTMLElement && (i = !0, a.focus({ preventScroll: !0 }), i = !1);
    }
    function v(b) {
      if (l() && e.active) {
        const p = t.value, _ = r.value;
        if (p !== null && _ !== null) {
          const M = c();
          if (M == null || M === _) {
            i = !0, p.focus({ preventScroll: !0 }), i = !1;
            return;
          }
          i = !0;
          const x = b === "first" ? sa(M) : da(M);
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
    function w(b) {
      i || (b.relatedTarget !== null && b.relatedTarget === t.value ? v("last") : v("first"));
    }
    return {
      focusableStartRef: t,
      focusableEndRef: r,
      focusableStyle: "position: absolute; height: 0; width: 0;",
      handleStartFocus: f,
      handleEndFocus: w
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
function Ze(e) {
  const n = fe(ha, null), t = fe(fa, null), r = fe(pa, null), o = fe(ca, null), i = D();
  if (typeof document < "u") {
    i.value = document.fullscreenElement;
    const a = () => {
      i.value = document.fullscreenElement;
    };
    Ie(() => {
      Pe("fullscreenchange", document, a);
    }), ke(() => {
      pe("fullscreenchange", document, a);
    });
  }
  return Re(() => {
    var a;
    const {
      to: l
    } = e;
    return l !== void 0 ? l === !1 ? ma : l === !0 ? i.value || "body" : l : n != null && n.value ? (a = n.value.$el) !== null && a !== void 0 ? a : n.value : t != null && t.value ? t.value : r != null && r.value ? r.value : o != null && o.value ? o.value : l ?? (i.value || "body");
  });
}
Ze.tdkey = ma;
Ze.propTo = {
  type: [String, Object, Boolean],
  default: void 0
};
function Id(e) {
  const n = {
    isDeactivated: !1
  };
  let t = !1;
  return Fi(() => {
    if (n.isDeactivated = !1, !t) {
      t = !0;
      return;
    }
    e();
  }), Di(() => {
    n.isDeactivated = !0, t || (t = !0);
  }), n;
}
function ga(e, n) {
  n && (Ie(() => {
    const {
      value: t
    } = e;
    t && ot.registerHandler(t, n);
  }), Ce(e, (t, r) => {
    r && ot.unregisterHandler(r);
  }, {
    deep: !1
  }), ke(() => {
    const {
      value: t
    } = e;
    t && ot.unregisterHandler(t);
  }));
}
function Ko(e) {
  return e.replace(/#|\(|\)|,|\s|\./g, "_");
}
const $d = /^(\d|\.)+$/, Xo = /(\d|\.)+/;
function _r(e, {
  c: n = 1,
  offset: t = 0,
  attachPx: r = !0
} = {}) {
  if (typeof e == "number") {
    const o = (e + t) * n;
    return o === 0 ? "0" : `${o}px`;
  } else if (typeof e == "string")
    if ($d.test(e)) {
      const o = (Number(e) + t) * n;
      return r ? o === 0 ? "0" : `${o}px` : `${o}`;
    } else {
      const o = Xo.exec(e);
      return o ? e.replace(Xo, String((Number(o[0]) + t) * n)) : e;
    }
  return e;
}
function Yo(e) {
  const {
    left: n,
    right: t,
    top: r,
    bottom: o
  } = De(e);
  return `${r} ${n} ${o} ${t}`;
}
var qo = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_21460_PJDHIKOZPECWZFUP", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.96.4", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-32603f9735-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
function Fd(e) {
  let n = ".", t = "__", r = "--", o;
  {
    let f = e.blockPrefix;
    f && (n = f), f = e.elementPrefix, f && (t = f), f = e.modifierPrefix, f && (r = f);
  }
  const i = {
    install(f) {
      o = f.c;
      const w = f.context;
      w.bem = {}, w.bem.b = null, w.bem.els = null;
    }
  };
  function a(f) {
    let w, b;
    return {
      before(p) {
        w = p.bem.b, b = p.bem.els, p.bem.els = null;
      },
      after(p) {
        p.bem.b = w, p.bem.els = b;
      },
      $({ context: p, props: _ }) {
        return f = typeof f == "string" ? f : f({ context: p, props: _ }), p.bem.b = f, `${(_ == null ? void 0 : _.bPrefix) || n}${p.bem.b}`;
      }
    };
  }
  function l(f) {
    let w;
    return {
      before(b) {
        w = b.bem.els;
      },
      after(b) {
        b.bem.els = w;
      },
      $({ context: b, props: p }) {
        return f = typeof f == "string" ? f : f({ context: b, props: p }), b.bem.els = f.split(",").map((_) => _.trim()), b.bem.els.map((_) => `${(p == null ? void 0 : p.bPrefix) || n}${b.bem.b}${t}${_}`).join(", ");
      }
    };
  }
  function s(f) {
    return {
      $({ context: w, props: b }) {
        f = typeof f == "string" ? f : f({ context: w, props: b });
        const p = f.split(",").map((x) => x.trim());
        function _(x) {
          return p.map((E) => `&${(b == null ? void 0 : b.bPrefix) || n}${w.bem.b}${x !== void 0 ? `${t}${x}` : ""}${r}${E}`).join(", ");
        }
        const M = w.bem.els;
        if (M !== null) {
          if (qo.NODE_ENV !== "production" && M.length >= 2)
            throw Error(`[css-render/plugin-bem]: m(${f}) is invalid, using modifier inside multiple elements is not allowed`);
          return _(M[0]);
        } else
          return _();
      }
    };
  }
  function d(f) {
    return {
      $({ context: w, props: b }) {
        f = typeof f == "string" ? f : f({ context: w, props: b });
        const p = w.bem.els;
        if (qo.NODE_ENV !== "production" && p !== null && p.length >= 2)
          throw Error(`[css-render/plugin-bem]: notM(${f}) is invalid, using modifier inside multiple elements is not allowed`);
        return `&:not(${(b == null ? void 0 : b.bPrefix) || n}${w.bem.b}${p !== null && p.length > 0 ? `${t}${p[0]}` : ""}${r}${f})`;
      }
    };
  }
  return Object.assign(i, {
    cB: (...f) => o(a(f[0]), f[1], f[2]),
    cE: (...f) => o(l(f[0]), f[1], f[2]),
    cM: (...f) => o(s(f[0]), f[1], f[2]),
    cNotM: (...f) => o(d(f[0]), f[1], f[2])
  }), i;
}
const Dd = "n", zd = `.${Dd}-`, kd = "__", Bd = "--", va = Zi(), ba = Fd({
  blockPrefix: zd,
  elementPrefix: kd,
  modifierPrefix: Bd
});
va.use(ba);
const {
  c: H,
  find: mg
} = va, {
  cB: G,
  cE: Y,
  cM: te,
  cNotM: ze
} = ba, Ld = (...e) => H(">", [G(...e)]);
function ce(e, n) {
  return e + (n === "default" ? "" : n.replace(/^[a-z]/, (t) => t.toUpperCase()));
}
let Pr;
function Nd() {
  return Pr === void 0 && (Pr = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")), Pr;
}
const Hd = /* @__PURE__ */ new WeakSet();
function Wd(e) {
  Hd.add(e);
}
function Zo(e) {
  switch (typeof e) {
    case "string":
      return e || void 0;
    case "number":
      return String(e);
    default:
      return;
  }
}
const Jo = /* @__PURE__ */ new Set();
function on(e, n) {
  const t = `[naive/${e}]: ${n}`;
  Jo.has(t) || (Jo.add(t), console.error(t));
}
function Qo(e, n) {
  console.error(`[naive/${e}]: ${n}`);
}
function ya(e, n) {
  throw new Error(`[naive/${e}]: ${n}`);
}
function we(e, ...n) {
  if (Array.isArray(e))
    e.forEach((t) => we(t, ...n));
  else
    return e(...n);
}
function Ur(e, n = !0, t = []) {
  return e.forEach((r) => {
    if (r !== null) {
      if (typeof r != "object") {
        (typeof r == "string" || typeof r == "number") && t.push(Rt(String(r)));
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
function Vd(e, n = "default", t = void 0) {
  const r = e[n];
  if (!r)
    return Qo("getFirstSlotVNode", `slot[${n}] is empty`), null;
  const o = Ur(r(t));
  return o.length === 1 ? o[0] : (Qo("getFirstSlotVNode", `slot[${n}] should have exactly one child`), null);
}
function Ud(e, n = [], t) {
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
function Hn(e, ...n) {
  return typeof e == "function" ? e(...n) : typeof e == "string" ? Rt(e) : typeof e == "number" ? Rt(String(e)) : null;
}
function jt(e) {
  return e.some((n) => bl(n) ? !(n.type === no || n.type === On && !jt(n.children)) : !0) ? e : null;
}
function lo(e, n) {
  return e && jt(e()) || n();
}
function xn(e, n) {
  const t = e && jt(e());
  return n(t || null);
}
function ei(e) {
  return !(e && jt(e()));
}
const jr = oe({
  render() {
    var e, n;
    return (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e);
  }
}), Tn = "n-config-provider", jd = "n";
function Mn(e = {}, n = {
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
    mergedClsPrefixRef: t ? t.mergedClsPrefixRef : yl(jd),
    namespaceRef: z(() => t == null ? void 0 : t.mergedNamespaceRef.value)
  };
}
function Rn(e, n, t, r) {
  t || ya("useThemeClass", "cssVarsRef is not passed");
  const o = fe(Tn, null), i = o == null ? void 0 : o.mergedThemeHashRef, a = o == null ? void 0 : o.styleMountTarget, l = D(""), s = En();
  let d;
  const c = `__${e}`, h = () => {
    let m = c;
    const v = n ? n.value : void 0, f = i == null ? void 0 : i.value;
    f && (m += `-${f}`), v && (m += `-${v}`);
    const {
      themeOverrides: w,
      builtinThemeOverrides: b
    } = r;
    w && (m += `-${Wr(JSON.stringify(w))}`), b && (m += `-${Wr(JSON.stringify(b))}`), l.value = m, d = () => {
      const p = t.value;
      let _ = "";
      for (const M in p)
        _ += `${M}: ${p[M]};`;
      H(`.${m}`, _).mount({
        id: m,
        ssr: s,
        parent: a
      }), d = void 0;
    };
  };
  return qe(() => {
    h();
  }), {
    themeClass: l,
    onRender: () => {
      d == null || d();
    }
  };
}
const ni = "n-form-item";
function Gd(e, {
  defaultSize: n = "medium",
  mergedSize: t,
  mergedDisabled: r
} = {}) {
  const o = fe(ni, null);
  Ve(ni, null);
  const i = z(t ? () => t(o) : () => {
    const {
      size: s
    } = e;
    if (s) return s;
    if (o) {
      const {
        mergedSize: d
      } = o;
      if (d.value !== void 0)
        return d.value;
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
  return ke(() => {
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
const Kd = {
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
function Zn(e) {
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
function Jn(e) {
  return (n, t = {}) => {
    const r = t.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = n.match(o);
    if (!i)
      return null;
    const a = i[0], l = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], s = Array.isArray(l) ? Yd(l, (h) => h.test(a)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      Xd(l, (h) => h.test(a))
    );
    let d;
    d = e.valueCallback ? e.valueCallback(s) : s, d = t.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      t.valueCallback(d)
    ) : d;
    const c = n.slice(a.length);
    return { value: d, rest: c };
  };
}
function Xd(e, n) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && n(e[t]))
      return t;
}
function Yd(e, n) {
  for (let t = 0; t < e.length; t++)
    if (n(e[t]))
      return t;
}
function qd(e) {
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
const Zd = {
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
}, Jd = (e, n, t) => {
  let r;
  const o = Zd[e];
  return typeof o == "string" ? r = o : n === 1 ? r = o.one : r = o.other.replace("{{count}}", n.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + r : r + " ago" : r;
}, Qd = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, eu = (e, n, t, r) => Qd[e], nu = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, tu = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, ru = {
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
}, ou = {
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
}, iu = {
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
}, au = {
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
}, lu = (e, n) => {
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
}, su = {
  ordinalNumber: lu,
  era: Zn({
    values: nu,
    defaultWidth: "wide"
  }),
  quarter: Zn({
    values: tu,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Zn({
    values: ru,
    defaultWidth: "wide"
  }),
  day: Zn({
    values: ou,
    defaultWidth: "wide"
  }),
  dayPeriod: Zn({
    values: iu,
    defaultWidth: "wide",
    formattingValues: au,
    defaultFormattingWidth: "wide"
  })
}, du = /^(\d+)(th|st|nd|rd)?/i, uu = /\d+/i, cu = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, fu = {
  any: [/^b/i, /^(a|c)/i]
}, hu = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, pu = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, mu = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, gu = {
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
}, vu = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, bu = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, yu = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, wu = {
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
}, Su = {
  ordinalNumber: qd({
    matchPattern: du,
    parsePattern: uu,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Jn({
    matchPatterns: cu,
    defaultMatchWidth: "wide",
    parsePatterns: fu,
    defaultParseWidth: "any"
  }),
  quarter: Jn({
    matchPatterns: hu,
    defaultMatchWidth: "wide",
    parsePatterns: pu,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Jn({
    matchPatterns: mu,
    defaultMatchWidth: "wide",
    parsePatterns: gu,
    defaultParseWidth: "any"
  }),
  day: Jn({
    matchPatterns: vu,
    defaultMatchWidth: "wide",
    parsePatterns: bu,
    defaultParseWidth: "any"
  }),
  dayPeriod: Jn({
    matchPatterns: yu,
    defaultMatchWidth: "any",
    parsePatterns: wu,
    defaultParseWidth: "any"
  })
}, Cu = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, xu = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, _u = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Pu = {
  date: Er({
    formats: Cu,
    defaultWidth: "full"
  }),
  time: Er({
    formats: xu,
    defaultWidth: "full"
  }),
  dateTime: Er({
    formats: _u,
    defaultWidth: "full"
  })
}, Ou = {
  code: "en-US",
  formatDistance: Jd,
  formatLong: Pu,
  formatRelative: eu,
  localize: su,
  match: Su,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, Eu = {
  name: "en-US",
  locale: Ou
};
var wa = typeof global == "object" && global && global.Object === Object && global, Tu = typeof self == "object" && self && self.Object === Object && self, je = wa || Tu || Function("return this")(), ln = je.Symbol, Sa = Object.prototype, Mu = Sa.hasOwnProperty, Ru = Sa.toString, Qn = ln ? ln.toStringTag : void 0;
function Au(e) {
  var n = Mu.call(e, Qn), t = e[Qn];
  try {
    e[Qn] = void 0;
    var r = !0;
  } catch {
  }
  var o = Ru.call(e);
  return r && (n ? e[Qn] = t : delete e[Qn]), o;
}
var Iu = Object.prototype, $u = Iu.toString;
function Fu(e) {
  return $u.call(e);
}
var Du = "[object Null]", zu = "[object Undefined]", ti = ln ? ln.toStringTag : void 0;
function An(e) {
  return e == null ? e === void 0 ? zu : Du : ti && ti in Object(e) ? Au(e) : Fu(e);
}
function sn(e) {
  return e != null && typeof e == "object";
}
var ku = "[object Symbol]";
function so(e) {
  return typeof e == "symbol" || sn(e) && An(e) == ku;
}
function Ca(e, n) {
  for (var t = -1, r = e == null ? 0 : e.length, o = Array(r); ++t < r; )
    o[t] = n(e[t], t, e);
  return o;
}
var Ae = Array.isArray, ri = ln ? ln.prototype : void 0, oi = ri ? ri.toString : void 0;
function xa(e) {
  if (typeof e == "string")
    return e;
  if (Ae(e))
    return Ca(e, xa) + "";
  if (so(e))
    return oi ? oi.call(e) : "";
  var n = e + "";
  return n == "0" && 1 / e == -1 / 0 ? "-0" : n;
}
function dn(e) {
  var n = typeof e;
  return e != null && (n == "object" || n == "function");
}
function uo(e) {
  return e;
}
var Bu = "[object AsyncFunction]", Lu = "[object Function]", Nu = "[object GeneratorFunction]", Hu = "[object Proxy]";
function co(e) {
  if (!dn(e))
    return !1;
  var n = An(e);
  return n == Lu || n == Nu || n == Bu || n == Hu;
}
var Tr = je["__core-js_shared__"], ii = function() {
  var e = /[^.]+$/.exec(Tr && Tr.keys && Tr.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Wu(e) {
  return !!ii && ii in e;
}
var Vu = Function.prototype, Uu = Vu.toString;
function In(e) {
  if (e != null) {
    try {
      return Uu.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ju = /[\\^$.*+?()[\]{}|]/g, Gu = /^\[object .+?Constructor\]$/, Ku = Function.prototype, Xu = Object.prototype, Yu = Ku.toString, qu = Xu.hasOwnProperty, Zu = RegExp(
  "^" + Yu.call(qu).replace(ju, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ju(e) {
  if (!dn(e) || Wu(e))
    return !1;
  var n = co(e) ? Zu : Gu;
  return n.test(In(e));
}
function Qu(e, n) {
  return e == null ? void 0 : e[n];
}
function $n(e, n) {
  var t = Qu(e, n);
  return Ju(t) ? t : void 0;
}
var Gr = $n(je, "WeakMap"), ai = Object.create, ec = /* @__PURE__ */ function() {
  function e() {
  }
  return function(n) {
    if (!dn(n))
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
var Dt = function() {
  try {
    var e = $n(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), sc = Dt ? function(e, n) {
  return Dt(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: lc(n),
    writable: !0
  });
} : uo, dc = ac(sc), uc = 9007199254740991, cc = /^(?:0|[1-9]\d*)$/;
function fo(e, n) {
  var t = typeof e;
  return n = n ?? uc, !!n && (t == "number" || t != "symbol" && cc.test(e)) && e > -1 && e % 1 == 0 && e < n;
}
function ho(e, n, t) {
  n == "__proto__" && Dt ? Dt(e, n, {
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
  return dc(gc(e, n, uo), e + "");
}
var bc = 9007199254740991;
function po(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= bc;
}
function Kn(e) {
  return e != null && po(e.length) && !co(e);
}
function yc(e, n, t) {
  if (!dn(t))
    return !1;
  var r = typeof n;
  return (r == "number" ? Kn(t) && fo(n, t.length) : r == "string" && n in t) ? ht(t[n], e) : !1;
}
function wc(e) {
  return vc(function(n, t) {
    var r = -1, o = t.length, i = o > 1 ? t[o - 1] : void 0, a = o > 2 ? t[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (o--, i) : void 0, a && yc(t[0], t[1], a) && (i = o < 3 ? void 0 : i, o = 1), n = Object(n); ++r < o; ) {
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
function Cc(e, n) {
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
var Pa = typeof exports == "object" && exports && !exports.nodeType && exports, di = Pa && typeof module == "object" && module && !module.nodeType && module, Ec = di && di.exports === Pa, ui = Ec ? je.Buffer : void 0, Tc = ui ? ui.isBuffer : void 0, kt = Tc || Oc, Mc = "[object Arguments]", Rc = "[object Array]", Ac = "[object Boolean]", Ic = "[object Date]", $c = "[object Error]", Fc = "[object Function]", Dc = "[object Map]", zc = "[object Number]", kc = "[object Object]", Bc = "[object RegExp]", Lc = "[object Set]", Nc = "[object String]", Hc = "[object WeakMap]", Wc = "[object ArrayBuffer]", Vc = "[object DataView]", Uc = "[object Float32Array]", jc = "[object Float64Array]", Gc = "[object Int8Array]", Kc = "[object Int16Array]", Xc = "[object Int32Array]", Yc = "[object Uint8Array]", qc = "[object Uint8ClampedArray]", Zc = "[object Uint16Array]", Jc = "[object Uint32Array]", se = {};
se[Uc] = se[jc] = se[Gc] = se[Kc] = se[Xc] = se[Yc] = se[qc] = se[Zc] = se[Jc] = !0;
se[Mc] = se[Rc] = se[Wc] = se[Ac] = se[Vc] = se[Ic] = se[$c] = se[Fc] = se[Dc] = se[zc] = se[kc] = se[Bc] = se[Lc] = se[Nc] = se[Hc] = !1;
function Qc(e) {
  return sn(e) && po(e.length) && !!se[An(e)];
}
function ef(e) {
  return function(n) {
    return e(n);
  };
}
var Oa = typeof exports == "object" && exports && !exports.nodeType && exports, it = Oa && typeof module == "object" && module && !module.nodeType && module, nf = it && it.exports === Oa, Mr = nf && wa.process, ci = function() {
  try {
    var e = it && it.require && it.require("util").types;
    return e || Mr && Mr.binding && Mr.binding("util");
  } catch {
  }
}(), fi = ci && ci.isTypedArray, go = fi ? ef(fi) : Qc, tf = Object.prototype, rf = tf.hasOwnProperty;
function Ea(e, n) {
  var t = Ae(e), r = !t && zt(e), o = !t && !r && kt(e), i = !t && !r && !o && go(e), a = t || r || o || i, l = a ? Cc(e.length, String) : [], s = l.length;
  for (var d in e)
    (n || rf.call(e, d)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
    fo(d, s))) && l.push(d);
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
function df(e) {
  var n = [];
  if (e != null)
    for (var t in Object(e))
      n.push(t);
  return n;
}
var uf = Object.prototype, cf = uf.hasOwnProperty;
function ff(e) {
  if (!dn(e))
    return df(e);
  var n = mo(e), t = [];
  for (var r in e)
    r == "constructor" && (n || !cf.call(e, r)) || t.push(r);
  return t;
}
function Ma(e) {
  return Kn(e) ? Ea(e, !0) : ff(e);
}
var hf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, pf = /^\w*$/;
function bo(e, n) {
  if (Ae(e))
    return !1;
  var t = typeof e;
  return t == "number" || t == "symbol" || t == "boolean" || e == null || so(e) ? !0 : pf.test(e) || !hf.test(e) || n != null && e in Object(n);
}
var dt = $n(Object, "create");
function mf() {
  this.__data__ = dt ? dt(null) : {}, this.size = 0;
}
function gf(e) {
  var n = this.has(e) && delete this.__data__[e];
  return this.size -= n ? 1 : 0, n;
}
var vf = "__lodash_hash_undefined__", bf = Object.prototype, yf = bf.hasOwnProperty;
function wf(e) {
  var n = this.__data__;
  if (dt) {
    var t = n[e];
    return t === vf ? void 0 : t;
  }
  return yf.call(n, e) ? n[e] : void 0;
}
var Sf = Object.prototype, Cf = Sf.hasOwnProperty;
function xf(e) {
  var n = this.__data__;
  return dt ? n[e] !== void 0 : Cf.call(n, e);
}
var _f = "__lodash_hash_undefined__";
function Pf(e, n) {
  var t = this.__data__;
  return this.size += this.has(e) ? 0 : 1, t[e] = dt && n === void 0 ? _f : n, this;
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
Pn.prototype.get = wf;
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
function Mf(e) {
  var n = this.__data__, t = Gt(n, e);
  if (t < 0)
    return !1;
  var r = n.length - 1;
  return t == r ? n.pop() : Tf.call(n, t, 1), --this.size, !0;
}
function Rf(e) {
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
function Je(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.clear(); ++n < t; ) {
    var r = e[n];
    this.set(r[0], r[1]);
  }
}
Je.prototype.clear = Of;
Je.prototype.delete = Mf;
Je.prototype.get = Rf;
Je.prototype.has = Af;
Je.prototype.set = If;
var ut = $n(je, "Map");
function $f() {
  this.size = 0, this.__data__ = {
    hash: new Pn(),
    map: new (ut || Je)(),
    string: new Pn()
  };
}
function Ff(e) {
  var n = typeof e;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
}
function Kt(e, n) {
  var t = e.__data__;
  return Ff(n) ? t[typeof n == "string" ? "string" : "hash"] : t.map;
}
function Df(e) {
  var n = Kt(this, e).delete(e);
  return this.size -= n ? 1 : 0, n;
}
function zf(e) {
  return Kt(this, e).get(e);
}
function kf(e) {
  return Kt(this, e).has(e);
}
function Bf(e, n) {
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
Qe.prototype.clear = $f;
Qe.prototype.delete = Df;
Qe.prototype.get = zf;
Qe.prototype.has = kf;
Qe.prototype.set = Bf;
var Lf = "Expected a function";
function yo(e, n) {
  if (typeof e != "function" || n != null && typeof n != "function")
    throw new TypeError(Lf);
  var t = function() {
    var r = arguments, o = n ? n.apply(this, r) : r[0], i = t.cache;
    if (i.has(o))
      return i.get(o);
    var a = e.apply(this, r);
    return t.cache = i.set(o, a) || i, a;
  };
  return t.cache = new (yo.Cache || Qe)(), t;
}
yo.Cache = Qe;
var Nf = 500;
function Hf(e) {
  var n = yo(e, function(r) {
    return t.size === Nf && t.clear(), r;
  }), t = n.cache;
  return n;
}
var Wf = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Vf = /\\(\\)?/g, Uf = Hf(function(e) {
  var n = [];
  return e.charCodeAt(0) === 46 && n.push(""), e.replace(Wf, function(t, r, o, i) {
    n.push(o ? i.replace(Vf, "$1") : r || t);
  }), n;
});
function Ra(e) {
  return e == null ? "" : xa(e);
}
function Aa(e, n) {
  return Ae(e) ? e : bo(e, n) ? [e] : Uf(Ra(e));
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
function jf(e, n, t) {
  var r = e == null ? void 0 : Ia(e, n);
  return r === void 0 ? t : r;
}
function Gf(e, n) {
  for (var t = -1, r = n.length, o = e.length; ++t < r; )
    e[o + t] = n[t];
  return e;
}
var $a = Ta(Object.getPrototypeOf, Object), Kf = "[object Object]", Xf = Function.prototype, Yf = Object.prototype, Fa = Xf.toString, qf = Yf.hasOwnProperty, Zf = Fa.call(Object);
function Jf(e) {
  if (!sn(e) || An(e) != Kf)
    return !1;
  var n = $a(e);
  if (n === null)
    return !0;
  var t = qf.call(n, "constructor") && n.constructor;
  return typeof t == "function" && t instanceof t && Fa.call(t) == Zf;
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
function Da(e) {
  return sh.test(e);
}
function dh(e) {
  return e.split("");
}
var za = "\\ud800-\\udfff", uh = "\\u0300-\\u036f", ch = "\\ufe20-\\ufe2f", fh = "\\u20d0-\\u20ff", hh = uh + ch + fh, ph = "\\ufe0e\\ufe0f", mh = "[" + za + "]", Kr = "[" + hh + "]", Xr = "\\ud83c[\\udffb-\\udfff]", gh = "(?:" + Kr + "|" + Xr + ")", ka = "[^" + za + "]", Ba = "(?:\\ud83c[\\udde6-\\uddff]){2}", La = "[\\ud800-\\udbff][\\udc00-\\udfff]", vh = "\\u200d", Na = gh + "?", Ha = "[" + ph + "]?", bh = "(?:" + vh + "(?:" + [ka, Ba, La].join("|") + ")" + Ha + Na + ")*", yh = Ha + Na + bh, wh = "(?:" + [ka + Kr + "?", Kr, Ba, La, mh].join("|") + ")", Sh = RegExp(Xr + "(?=" + Xr + ")|" + wh + yh, "g");
function Ch(e) {
  return e.match(Sh) || [];
}
function xh(e) {
  return Da(e) ? Ch(e) : dh(e);
}
function _h(e) {
  return function(n) {
    n = Ra(n);
    var t = Da(n) ? xh(n) : void 0, r = t ? t[0] : n.charAt(0), o = t ? eh(t, 1).join("") : n.slice(1);
    return r[e]() + o;
  };
}
var Ph = _h("toUpperCase");
function Oh() {
  this.__data__ = new Je(), this.size = 0;
}
function Eh(e) {
  var n = this.__data__, t = n.delete(e);
  return this.size = n.size, t;
}
function Th(e) {
  return this.__data__.get(e);
}
function Mh(e) {
  return this.__data__.has(e);
}
var Rh = 200;
function Ah(e, n) {
  var t = this.__data__;
  if (t instanceof Je) {
    var r = t.__data__;
    if (!ut || r.length < Rh - 1)
      return r.push([e, n]), this.size = ++t.size, this;
    t = this.__data__ = new Qe(r);
  }
  return t.set(e, n), this.size = t.size, this;
}
function Ue(e) {
  var n = this.__data__ = new Je(e);
  this.size = n.size;
}
Ue.prototype.clear = Oh;
Ue.prototype.delete = Eh;
Ue.prototype.get = Th;
Ue.prototype.has = Mh;
Ue.prototype.set = Ah;
var Wa = typeof exports == "object" && exports && !exports.nodeType && exports, hi = Wa && typeof module == "object" && module && !module.nodeType && module, Ih = hi && hi.exports === Wa, pi = Ih ? je.Buffer : void 0;
pi && pi.allocUnsafe;
function $h(e, n) {
  return e.slice();
}
function Fh(e, n) {
  for (var t = -1, r = e == null ? 0 : e.length, o = 0, i = []; ++t < r; ) {
    var a = e[t];
    n(a, t, e) && (i[o++] = a);
  }
  return i;
}
function Dh() {
  return [];
}
var zh = Object.prototype, kh = zh.propertyIsEnumerable, mi = Object.getOwnPropertySymbols, Bh = mi ? function(e) {
  return e == null ? [] : (e = Object(e), Fh(mi(e), function(n) {
    return kh.call(e, n);
  }));
} : Dh;
function Lh(e, n, t) {
  var r = n(e);
  return Ae(e) ? r : Gf(r, t(e));
}
function gi(e) {
  return Lh(e, vo, Bh);
}
var Yr = $n(je, "DataView"), qr = $n(je, "Promise"), Zr = $n(je, "Set"), vi = "[object Map]", Nh = "[object Object]", bi = "[object Promise]", yi = "[object Set]", wi = "[object WeakMap]", Si = "[object DataView]", Hh = In(Yr), Wh = In(ut), Vh = In(qr), Uh = In(Zr), jh = In(Gr), rn = An;
(Yr && rn(new Yr(new ArrayBuffer(1))) != Si || ut && rn(new ut()) != vi || qr && rn(qr.resolve()) != bi || Zr && rn(new Zr()) != yi || Gr && rn(new Gr()) != wi) && (rn = function(e) {
  var n = An(e), t = n == Nh ? e.constructor : void 0, r = t ? In(t) : "";
  if (r)
    switch (r) {
      case Hh:
        return Si;
      case Wh:
        return vi;
      case Vh:
        return bi;
      case Uh:
        return yi;
      case jh:
        return wi;
    }
  return n;
});
var Bt = je.Uint8Array;
function Gh(e) {
  var n = new e.constructor(e.byteLength);
  return new Bt(n).set(new Bt(e)), n;
}
function Kh(e, n) {
  var t = Gh(e.buffer);
  return new e.constructor(t, e.byteOffset, e.length);
}
function Xh(e) {
  return typeof e.constructor == "function" && !mo(e) ? ec($a(e)) : {};
}
var Yh = "__lodash_hash_undefined__";
function qh(e) {
  return this.__data__.set(e, Yh), this;
}
function Zh(e) {
  return this.__data__.has(e);
}
function Lt(e) {
  var n = -1, t = e == null ? 0 : e.length;
  for (this.__data__ = new Qe(); ++n < t; )
    this.add(e[n]);
}
Lt.prototype.add = Lt.prototype.push = qh;
Lt.prototype.has = Zh;
function Jh(e, n) {
  for (var t = -1, r = e == null ? 0 : e.length; ++t < r; )
    if (n(e[t], t, e))
      return !0;
  return !1;
}
function Qh(e, n) {
  return e.has(n);
}
var ep = 1, np = 2;
function Va(e, n, t, r, o, i) {
  var a = t & ep, l = e.length, s = n.length;
  if (l != s && !(a && s > l))
    return !1;
  var d = i.get(e), c = i.get(n);
  if (d && c)
    return d == n && c == e;
  var h = -1, m = !0, v = t & np ? new Lt() : void 0;
  for (i.set(e, n), i.set(n, e); ++h < l; ) {
    var f = e[h], w = n[h];
    if (r)
      var b = a ? r(w, f, h, n, e, i) : r(f, w, h, e, n, i);
    if (b !== void 0) {
      if (b)
        continue;
      m = !1;
      break;
    }
    if (v) {
      if (!Jh(n, function(p, _) {
        if (!Qh(v, _) && (f === p || o(f, p, t, r, i)))
          return v.push(_);
      })) {
        m = !1;
        break;
      }
    } else if (!(f === w || o(f, w, t, r, i))) {
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
var op = 1, ip = 2, ap = "[object Boolean]", lp = "[object Date]", sp = "[object Error]", dp = "[object Map]", up = "[object Number]", cp = "[object RegExp]", fp = "[object Set]", hp = "[object String]", pp = "[object Symbol]", mp = "[object ArrayBuffer]", gp = "[object DataView]", Ci = ln ? ln.prototype : void 0, Rr = Ci ? Ci.valueOf : void 0;
function vp(e, n, t, r, o, i, a) {
  switch (t) {
    case gp:
      if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
        return !1;
      e = e.buffer, n = n.buffer;
    case mp:
      return !(e.byteLength != n.byteLength || !i(new Bt(e), new Bt(n)));
    case ap:
    case lp:
    case up:
      return ht(+e, +n);
    case sp:
      return e.name == n.name && e.message == n.message;
    case cp:
    case hp:
      return e == n + "";
    case dp:
      var l = tp;
    case fp:
      var s = r & op;
      if (l || (l = rp), e.size != n.size && !s)
        return !1;
      var d = a.get(e);
      if (d)
        return d == n;
      r |= ip, a.set(e, n);
      var c = Va(l(e), l(n), r, o, i, a);
      return a.delete(e), c;
    case pp:
      if (Rr)
        return Rr.call(e) == Rr.call(n);
  }
  return !1;
}
var bp = 1, yp = Object.prototype, wp = yp.hasOwnProperty;
function Sp(e, n, t, r, o, i) {
  var a = t & bp, l = gi(e), s = l.length, d = gi(n), c = d.length;
  if (s != c && !a)
    return !1;
  for (var h = s; h--; ) {
    var m = l[h];
    if (!(a ? m in n : wp.call(n, m)))
      return !1;
  }
  var v = i.get(e), f = i.get(n);
  if (v && f)
    return v == n && f == e;
  var w = !0;
  i.set(e, n), i.set(n, e);
  for (var b = a; ++h < s; ) {
    m = l[h];
    var p = e[m], _ = n[m];
    if (r)
      var M = a ? r(_, p, m, n, e, i) : r(p, _, m, e, n, i);
    if (!(M === void 0 ? p === _ || o(p, _, t, r, i) : M)) {
      w = !1;
      break;
    }
    b || (b = m == "constructor");
  }
  if (w && !b) {
    var x = e.constructor, E = n.constructor;
    x != E && "constructor" in e && "constructor" in n && !(typeof x == "function" && x instanceof x && typeof E == "function" && E instanceof E) && (w = !1);
  }
  return i.delete(e), i.delete(n), w;
}
var Cp = 1, xi = "[object Arguments]", _i = "[object Array]", Ot = "[object Object]", xp = Object.prototype, Pi = xp.hasOwnProperty;
function _p(e, n, t, r, o, i) {
  var a = Ae(e), l = Ae(n), s = a ? _i : rn(e), d = l ? _i : rn(n);
  s = s == xi ? Ot : s, d = d == xi ? Ot : d;
  var c = s == Ot, h = d == Ot, m = s == d;
  if (m && kt(e)) {
    if (!kt(n))
      return !1;
    a = !0, c = !1;
  }
  if (m && !c)
    return i || (i = new Ue()), a || go(e) ? Va(e, n, t, r, o, i) : vp(e, n, s, t, r, o, i);
  if (!(t & Cp)) {
    var v = c && Pi.call(e, "__wrapped__"), f = h && Pi.call(n, "__wrapped__");
    if (v || f) {
      var w = v ? e.value() : e, b = f ? n.value() : n;
      return i || (i = new Ue()), o(w, b, t, r, i);
    }
  }
  return m ? (i || (i = new Ue()), Sp(e, n, t, r, o, i)) : !1;
}
function wo(e, n, t, r, o) {
  return e === n ? !0 : e == null || n == null || !sn(e) && !sn(n) ? e !== e && n !== n : _p(e, n, t, r, wo, o);
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
    var l = a[0], s = e[l], d = a[1];
    if (a[2]) {
      if (s === void 0 && !(l in e))
        return !1;
    } else {
      var c = new Ue(), h;
      if (!(h === void 0 ? wo(d, s, Pp | Op, r, c) : h))
        return !1;
    }
  }
  return !0;
}
function Ua(e) {
  return e === e && !dn(e);
}
function Tp(e) {
  for (var n = vo(e), t = n.length; t--; ) {
    var r = n[t], o = e[r];
    n[t] = [r, o, Ua(o)];
  }
  return n;
}
function ja(e, n) {
  return function(t) {
    return t == null ? !1 : t[e] === n && (n !== void 0 || e in Object(t));
  };
}
function Mp(e) {
  var n = Tp(e);
  return n.length == 1 && n[0][2] ? ja(n[0][0], n[0][1]) : function(t) {
    return t === e || Ep(t, e, n);
  };
}
function Rp(e, n) {
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
  return e != null && Ap(e, n, Rp);
}
var $p = 1, Fp = 2;
function Dp(e, n) {
  return bo(e) && Ua(n) ? ja(Xt(e), n) : function(t) {
    var r = jf(t, e);
    return r === void 0 && r === n ? Ip(t, e) : wo(n, r, $p | Fp);
  };
}
function zp(e) {
  return function(n) {
    return n == null ? void 0 : n[e];
  };
}
function kp(e) {
  return function(n) {
    return Ia(n, e);
  };
}
function Bp(e) {
  return bo(e) ? zp(Xt(e)) : kp(e);
}
function Lp(e) {
  return typeof e == "function" ? e : e == null ? uo : typeof e == "object" ? Ae(e) ? Dp(e[0], e[1]) : Mp(e) : Bp(e);
}
function Np(e) {
  return function(n, t, r) {
    for (var o = -1, i = Object(n), a = r(n), l = a.length; l--; ) {
      var s = a[++o];
      if (t(i[s], s, i) === !1)
        break;
    }
    return n;
  };
}
var Ga = Np();
function Hp(e, n) {
  return e && Ga(e, n, vo);
}
function Wp(e, n) {
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
var Vp = Wp(Hp);
function Jr(e, n, t) {
  (t !== void 0 && !ht(e[n], t) || t === void 0 && !(n in e)) && ho(e, n, t);
}
function Up(e) {
  return sn(e) && Kn(e);
}
function Qr(e, n) {
  if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
    return e[n];
}
function jp(e) {
  return mc(e, Ma(e));
}
function Gp(e, n, t, r, o, i, a) {
  var l = Qr(e, t), s = Qr(n, t), d = a.get(s);
  if (d) {
    Jr(e, t, d);
    return;
  }
  var c = i ? i(l, s, t + "", e, n, a) : void 0, h = c === void 0;
  if (h) {
    var m = Ae(s), v = !m && kt(s), f = !m && !v && go(s);
    c = s, m || v || f ? Ae(l) ? c = l : Up(l) ? c = tc(l) : v ? (h = !1, c = $h(s)) : f ? (h = !1, c = Kh(s)) : c = [] : Jf(s) || zt(s) ? (c = l, zt(l) ? c = jp(l) : (!dn(l) || co(l)) && (c = Xh(s))) : h = !1;
  }
  h && (a.set(s, c), o(c, s, r, i, a), a.delete(s)), Jr(e, t, c);
}
function Ka(e, n, t, r, o) {
  e !== n && Ga(n, function(i, a) {
    if (o || (o = new Ue()), dn(i))
      Gp(e, n, a, t, Ka, r, o);
    else {
      var l = r ? r(Qr(e, a), i, a + "", e, n, o) : void 0;
      l === void 0 && (l = i), Jr(e, a, l);
    }
  }, Ma);
}
function Kp(e, n) {
  var t = -1, r = Kn(e) ? Array(e.length) : [];
  return Vp(e, function(o, i, a) {
    r[++t] = n(o, i, a);
  }), r;
}
function Xp(e, n) {
  var t = Ae(e) ? Ca : Kp;
  return t(e, Lp(n));
}
var Et = wc(function(e, n, t) {
  Ka(e, n, t);
});
function Xa(e) {
  const {
    mergedLocaleRef: n,
    mergedDateLocaleRef: t
  } = fe(Tn, null) || {}, r = z(() => {
    var i, a;
    return (a = (i = n == null ? void 0 : n.value) === null || i === void 0 ? void 0 : i[e]) !== null && a !== void 0 ? a : Kd[e];
  });
  return {
    dateLocaleRef: z(() => {
      var i;
      return (i = t == null ? void 0 : t.value) !== null && i !== void 0 ? i : Eu;
    }),
    localeRef: r
  };
}
const ct = "naive-ui-style";
function Yt(e, n, t) {
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
    qe(() => {
      const {
        value: l
      } = t, s = `${l}${e}Rtl`;
      if (Xs(s, r)) return;
      const {
        value: d
      } = o;
      d && d.style.mount({
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
  fontSize: Yp,
  fontFamily: qp,
  lineHeight: Zp
} = pt, Ya = H("body", `
 margin: 0;
 font-size: ${Yp};
 font-family: ${qp};
 line-height: ${Zp};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [H("input", `
 font-family: inherit;
 font-size: inherit;
 `)]);
var Jp = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_21460_PJDHIKOZPECWZFUP", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.96.4", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-32603f9735-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
function qt(e, n, t) {
  if (!n) {
    Jp.NODE_ENV !== "production" && ya("use-style", "No style is specified.");
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
    }), o != null && o.preflightStyleDisabled || Ya.mount({
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
    const d = () => {
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
      }), l != null && l.preflightStyleDisabled || Ya.mount({
        id: "n-global",
        head: !0,
        anchorMetaName: ct,
        ssr: a,
        parent: l == null ? void 0 : l.styleMountTarget
      });
    };
    a ? d() : to(d);
  }
  return z(() => {
    var d;
    const {
      theme: {
        common: c,
        self: h,
        peers: m = {}
      } = {},
      themeOverrides: v = {},
      builtinThemeOverrides: f = {}
    } = o, {
      common: w,
      peers: b
    } = v, {
      common: p = void 0,
      [e]: {
        common: _ = void 0,
        self: M = void 0,
        peers: x = {}
      } = {}
    } = (l == null ? void 0 : l.mergedThemeRef.value) || {}, {
      common: E = void 0,
      [e]: B = {}
    } = (l == null ? void 0 : l.mergedThemeOverridesRef.value) || {}, {
      common: y,
      peers: C = {}
    } = B, R = Et({}, c || _ || p || r.common, E, y, w), O = Et(
      // {}, executed every time, no need for empty obj
      (d = h || M || r.self) === null || d === void 0 ? void 0 : d(R),
      f,
      B,
      v
    );
    return {
      common: R,
      self: O,
      peers: Et({}, r.peers, x, m),
      peerOverrides: Et({}, f.peers, C, b)
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
`, [H("svg", `
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
    qt("-base-icon", Qp, le(e, "clsPrefix"));
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
}), qa = oe({
  name: "BaseIconSwitchTransition",
  setup(e, {
    slots: n
  }) {
    const t = Vt();
    return () => g(Un, {
      name: "icon-switch-transition",
      appear: t.value
    }, n);
  }
});
function Za(e, n) {
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
}), tm = Za("clear", () => g("svg", {
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
}))))), rm = Za("close", () => g("svg", {
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
  return [H("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to", {
    transform: `${e} scale(0.75)`,
    left: n,
    top: t,
    opacity: 0
  }), H("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from", {
    transform: `scale(1) ${e}`,
    left: n,
    top: t,
    opacity: 1
  }), H("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active", {
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
`, [H(">", [Y("clear", `
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `, [H("&:hover", `
 color: var(--n-clear-color-hover)!important;
 `), H("&:active", `
 color: var(--n-clear-color-pressed)!important;
 `)]), Y("placeholder", `
 display: flex;
 `), Y("clear, placeholder", `
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
    return qt("-base-clear", am, le(e, "clsPrefix")), {
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
    }, g(qa, null, {
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
 `), H("&::before", `
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `), ze("disabled", [H("&:hover", `
 color: var(--n-close-icon-color-hover);
 `), H("&:hover::before", `
 background-color: var(--n-close-color-hover);
 `), H("&:focus::before", `
 background-color: var(--n-close-color-hover);
 `), H("&:active", `
 color: var(--n-close-icon-color-pressed);
 `), H("&:active::before", `
 background-color: var(--n-close-color-pressed);
 `)]), te("disabled", `
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `), te("round", [H("&::before", `
 border-radius: 50%;
 `)])]), dm = oe({
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
    return qt("-base-close", sm, le(e, "clsPrefix")), () => {
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
}), um = oe({
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
}), cm = H([H("@keyframes rotator", `
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
 `, [Y("transition-wrapper", `
 position: absolute;
 width: 100%;
 height: 100%;
 `, [eo()]), Y("placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [eo({
  left: "50%",
  top: "50%",
  originalTransform: "translateX(-50%) translateY(-50%)"
})]), Y("container", `
 animation: rotator 3s linear infinite both;
 `, [Y("icon", `
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
}, Ja = oe({
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
    qt("-base-loading", cm, le(e, "clsPrefix"));
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
    }, g(qa, null, {
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
  return [H(`&.${e}-transition-enter-active`, {
    transition: `all ${n} ${r}!important`
  }), H(`&.${e}-transition-leave-active`, {
    transition: `all ${t} ${o}!important`
  }), H(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`, {
    opacity: 0
  }), H(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`, {
    opacity: 1
  })];
}
const j = {
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
}, pm = _n(j.neutralBase), Qa = _n(j.neutralInvertBase), mm = `rgba(${Qa.slice(0, 3).join(", ")}, `;
function Ei(e) {
  return `${mm + String(e)})`;
}
function ye(e) {
  const n = Array.from(Qa);
  return n[3] = Number(e), zl(pm, n);
}
const Fn = Object.assign(Object.assign({
  name: "common"
}, pt), {
  baseColor: j.neutralBase,
  // primary color
  primaryColor: j.primaryDefault,
  primaryColorHover: j.primaryHover,
  primaryColorPressed: j.primaryActive,
  primaryColorSuppl: j.primarySuppl,
  // info color
  infoColor: j.infoDefault,
  infoColorHover: j.infoHover,
  infoColorPressed: j.infoActive,
  infoColorSuppl: j.infoSuppl,
  // success color
  successColor: j.successDefault,
  successColorHover: j.successHover,
  successColorPressed: j.successActive,
  successColorSuppl: j.successSuppl,
  // warning color
  warningColor: j.warningDefault,
  warningColorHover: j.warningHover,
  warningColorPressed: j.warningActive,
  warningColorSuppl: j.warningSuppl,
  // error color
  errorColor: j.errorDefault,
  errorColorHover: j.errorHover,
  errorColorPressed: j.errorActive,
  errorColorSuppl: j.errorSuppl,
  // text color
  textColorBase: j.neutralTextBase,
  textColor1: "rgb(31, 34, 37)",
  textColor2: "rgb(51, 54, 57)",
  textColor3: "rgb(118, 124, 130)",
  // textColor4: neutral(base.alpha4), // disabled, placeholder, icon
  // textColor5: neutral(base.alpha5),
  textColorDisabled: ye(j.alpha4),
  placeholderColor: ye(j.alpha4),
  placeholderColorDisabled: ye(j.alpha5),
  iconColor: ye(j.alpha4),
  iconColorHover: bt(ye(j.alpha4), {
    lightness: 0.75
  }),
  iconColorPressed: bt(ye(j.alpha4), {
    lightness: 0.9
  }),
  iconColorDisabled: ye(j.alpha5),
  opacity1: j.alpha1,
  opacity2: j.alpha2,
  opacity3: j.alpha3,
  opacity4: j.alpha4,
  opacity5: j.alpha5,
  dividerColor: "rgb(239, 239, 245)",
  borderColor: "rgb(224, 224, 230)",
  // close
  closeIconColor: ye(Number(j.alphaClose)),
  closeIconColorHover: ye(Number(j.alphaClose)),
  closeIconColorPressed: ye(Number(j.alphaClose)),
  closeColorHover: "rgba(0, 0, 0, .09)",
  closeColorPressed: "rgba(0, 0, 0, .13)",
  // clear
  clearColor: ye(j.alpha4),
  clearColorHover: bt(ye(j.alpha4), {
    lightness: 0.75
  }),
  clearColorPressed: bt(ye(j.alpha4), {
    lightness: 0.9
  }),
  scrollbarColor: Ei(j.alphaScrollbar),
  scrollbarColorHover: Ei(j.alphaScrollbarHover),
  scrollbarWidth: "5px",
  scrollbarHeight: "5px",
  scrollbarBorderRadius: "5px",
  progressRailColor: ye(j.alphaProgressRail),
  railColor: "rgb(219, 219, 223)",
  popoverColor: j.neutralPopover,
  tableColor: j.neutralCard,
  cardColor: j.neutralCard,
  modalColor: j.neutralModal,
  bodyColor: j.neutralBody,
  tagColor: "#eee",
  avatarColor: ye(j.alphaAvatar),
  invertedColor: "rgb(0, 20, 40)",
  inputColor: ye(j.alphaInput),
  codeColor: "rgb(244, 244, 248)",
  tabColor: "rgb(247, 247, 250)",
  actionColor: "rgb(250, 250, 252)",
  tableHeaderColor: "rgb(250, 250, 252)",
  hoverColor: "rgb(243, 243, 245)",
  // use color with alpha since it can be nested with header filter & sorter effect
  tableColorHover: "rgba(0, 0, 100, 0.03)",
  tableColorStriped: "rgba(0, 0, 100, 0.02)",
  pressedColor: "rgb(237, 237, 239)",
  opacityDisabled: j.alphaDisabled,
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
  common: Fn,
  self: vm
}, bm = G("scrollbar", `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [H(">", [G("scrollbar-container", `
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
  G("scrollbar-content", `
 box-sizing: border-box;
 min-width: 100%;
 `)
])])]), H(">, +", [G("scrollbar-rail", `
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `, [te("horizontal", `
 height: var(--n-scrollbar-height);
 `, [H(">", [Y("scrollbar", `
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
 `, [H(">", [Y("scrollbar", `
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
 `), te("disabled", [H(">", [Y("scrollbar", "pointer-events: none;")])]), H(">", [Y("scrollbar", `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [hm(), H("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), ym = Object.assign(Object.assign({}, xe.props), {
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
  props: ym,
  inheritAttrs: !1,
  setup(e) {
    const {
      mergedClsPrefixRef: n,
      inlineThemeDisabled: t,
      mergedRtlRef: r
    } = Mn(e), o = Yt("Scrollbar", r, n), i = D(null), a = D(null), l = D(null), s = D(null), d = D(null), c = D(null), h = D(null), m = D(null), v = D(null), f = D(null), w = D(null), b = D(0), p = D(0), _ = D(!1), M = D(!1);
    let x = !1, E = !1, B, y, C = 0, R = 0, O = 0, V = 0;
    const Q = Ps(), P = xe("Scrollbar", "-scrollbar", bm, el, e, n), F = z(() => {
      const {
        value: u
      } = m, {
        value: S
      } = c, {
        value: A
      } = f;
      return u === null || S === null || A === null ? 0 : Math.min(u, A * u / S + lt(P.value.self.width) * 1.5);
    }), T = z(() => `${F.value}px`), N = z(() => {
      const {
        value: u
      } = v, {
        value: S
      } = h, {
        value: A
      } = w;
      return u === null || S === null || A === null ? 0 : A * u / S + lt(P.value.self.height) * 1.5;
    }), q = z(() => `${N.value}px`), J = z(() => {
      const {
        value: u
      } = m, {
        value: S
      } = b, {
        value: A
      } = c, {
        value: W
      } = f;
      if (u === null || A === null || W === null)
        return 0;
      {
        const U = A - u;
        return U ? S / U * (W - F.value) : 0;
      }
    }), ee = z(() => `${J.value}px`), X = z(() => {
      const {
        value: u
      } = v, {
        value: S
      } = p, {
        value: A
      } = h, {
        value: W
      } = w;
      if (u === null || A === null || W === null)
        return 0;
      {
        const U = A - u;
        return U ? S / U * (W - N.value) : 0;
      }
    }), ie = z(() => `${X.value}px`), I = z(() => {
      const {
        value: u
      } = m, {
        value: S
      } = c;
      return u !== null && S !== null && S > u;
    }), k = z(() => {
      const {
        value: u
      } = v, {
        value: S
      } = h;
      return u !== null && S !== null && S > u;
    }), re = z(() => {
      const {
        trigger: u
      } = e;
      return u === "none" || _.value;
    }), ge = z(() => {
      const {
        trigger: u
      } = e;
      return u === "none" || M.value;
    }), ve = z(() => {
      const {
        container: u
      } = e;
      return u ? u() : a.value;
    }), Be = z(() => {
      const {
        content: u
      } = e;
      return u ? u() : l.value;
    }), Oe = (u, S) => {
      if (!e.scrollable) return;
      if (typeof u == "number") {
        Te(u, S ?? 0, 0, !1, "auto");
        return;
      }
      const {
        left: A,
        top: W,
        index: U,
        elSize: K,
        position: Z,
        behavior: ne,
        el: ue,
        debounce: He = !0
      } = u;
      (A !== void 0 || W !== void 0) && Te(A ?? 0, W ?? 0, 0, !1, ne), ue !== void 0 ? Te(0, ue.offsetTop, ue.offsetHeight, He, ne) : U !== void 0 && K !== void 0 ? Te(0, U * K, K, He, ne) : Z === "bottom" ? Te(0, Number.MAX_SAFE_INTEGER, 0, !1, ne) : Z === "top" && Te(0, 0, 0, !1, ne);
    }, me = Id(() => {
      e.container || Oe({
        top: b.value,
        left: p.value
      });
    }), Le = () => {
      me.isDeactivated || L();
    }, _e = (u) => {
      if (me.isDeactivated) return;
      const {
        onResize: S
      } = e;
      S && S(u), L();
    }, un = (u, S) => {
      if (!e.scrollable) return;
      const {
        value: A
      } = ve;
      A && (typeof u == "object" ? A.scrollBy(u) : A.scrollBy(u, S || 0));
    };
    function Te(u, S, A, W, U) {
      const {
        value: K
      } = ve;
      if (K) {
        if (W) {
          const {
            scrollTop: Z,
            offsetHeight: ne
          } = K;
          if (S > Z) {
            S + A <= Z + ne || K.scrollTo({
              left: u,
              top: S + A - ne,
              behavior: U
            });
            return;
          }
        }
        K.scrollTo({
          left: u,
          top: S,
          behavior: U
        });
      }
    }
    function cn() {
      pn(), mn(), L();
    }
    function fn() {
      $e();
    }
    function $e() {
      Ge(), hn();
    }
    function Ge() {
      y !== void 0 && window.clearTimeout(y), y = window.setTimeout(() => {
        M.value = !1;
      }, e.duration);
    }
    function hn() {
      B !== void 0 && window.clearTimeout(B), B = window.setTimeout(() => {
        _.value = !1;
      }, e.duration);
    }
    function pn() {
      B !== void 0 && window.clearTimeout(B), _.value = !0;
    }
    function mn() {
      y !== void 0 && window.clearTimeout(y), M.value = !0;
    }
    function en(u) {
      const {
        onScroll: S
      } = e;
      S && S(u), Ne();
    }
    function Ne() {
      const {
        value: u
      } = ve;
      u && (b.value = u.scrollTop, p.value = u.scrollLeft * (o != null && o.value ? -1 : 1));
    }
    function be() {
      const {
        value: u
      } = Be;
      u && (c.value = u.offsetHeight, h.value = u.offsetWidth);
      const {
        value: S
      } = ve;
      S && (m.value = S.offsetHeight, v.value = S.offsetWidth);
      const {
        value: A
      } = d, {
        value: W
      } = s;
      A && (w.value = A.offsetWidth), W && (f.value = W.offsetHeight);
    }
    function $() {
      const {
        value: u
      } = ve;
      u && (b.value = u.scrollTop, p.value = u.scrollLeft * (o != null && o.value ? -1 : 1), m.value = u.offsetHeight, v.value = u.offsetWidth, c.value = u.scrollHeight, h.value = u.scrollWidth);
      const {
        value: S
      } = d, {
        value: A
      } = s;
      S && (w.value = S.offsetWidth), A && (f.value = A.offsetHeight);
    }
    function L() {
      e.scrollable && (e.useUnifiedContainer ? $() : (be(), Ne()));
    }
    function de(u) {
      var S;
      return !(!((S = i.value) === null || S === void 0) && S.contains(at(u)));
    }
    function Xn(u) {
      u.preventDefault(), u.stopPropagation(), E = !0, Pe("mousemove", window, Dn, !0), Pe("mouseup", window, gn, !0), R = p.value, O = o != null && o.value ? window.innerWidth - u.clientX : u.clientX;
    }
    function Dn(u) {
      if (!E) return;
      B !== void 0 && window.clearTimeout(B), y !== void 0 && window.clearTimeout(y);
      const {
        value: S
      } = v, {
        value: A
      } = h, {
        value: W
      } = N;
      if (S === null || A === null) return;
      const K = (o != null && o.value ? window.innerWidth - u.clientX - O : u.clientX - O) * (A - S) / (S - W), Z = A - S;
      let ne = R + K;
      ne = Math.min(Z, ne), ne = Math.max(ne, 0);
      const {
        value: ue
      } = ve;
      if (ue) {
        ue.scrollLeft = ne * (o != null && o.value ? -1 : 1);
        const {
          internalOnUpdateScrollLeft: He
        } = e;
        He && He(ne);
      }
    }
    function gn(u) {
      u.preventDefault(), u.stopPropagation(), pe("mousemove", window, Dn, !0), pe("mouseup", window, gn, !0), E = !1, L(), de(u) && $e();
    }
    function zn(u) {
      u.preventDefault(), u.stopPropagation(), x = !0, Pe("mousemove", window, nn, !0), Pe("mouseup", window, vn, !0), C = b.value, V = u.clientY;
    }
    function nn(u) {
      if (!x) return;
      B !== void 0 && window.clearTimeout(B), y !== void 0 && window.clearTimeout(y);
      const {
        value: S
      } = m, {
        value: A
      } = c, {
        value: W
      } = F;
      if (S === null || A === null) return;
      const K = (u.clientY - V) * (A - S) / (S - W), Z = A - S;
      let ne = C + K;
      ne = Math.min(Z, ne), ne = Math.max(ne, 0);
      const {
        value: ue
      } = ve;
      ue && (ue.scrollTop = ne);
    }
    function vn(u) {
      u.preventDefault(), u.stopPropagation(), pe("mousemove", window, nn, !0), pe("mouseup", window, vn, !0), x = !1, L(), de(u) && $e();
    }
    qe(() => {
      const {
        value: u
      } = k, {
        value: S
      } = I, {
        value: A
      } = n, {
        value: W
      } = d, {
        value: U
      } = s;
      W && (u ? W.classList.remove(`${A}-scrollbar-rail--disabled`) : W.classList.add(`${A}-scrollbar-rail--disabled`)), U && (S ? U.classList.remove(`${A}-scrollbar-rail--disabled`) : U.classList.add(`${A}-scrollbar-rail--disabled`));
    }), Ie(() => {
      e.container || L();
    }), ke(() => {
      B !== void 0 && window.clearTimeout(B), y !== void 0 && window.clearTimeout(y), pe("mousemove", window, nn, !0), pe("mouseup", window, vn, !0);
    });
    const kn = z(() => {
      const {
        common: {
          cubicBezierEaseInOut: u
        },
        self: {
          color: S,
          colorHover: A,
          height: W,
          width: U,
          borderRadius: K,
          railInsetHorizontalTop: Z,
          railInsetHorizontalBottom: ne,
          railInsetVerticalRight: ue,
          railInsetVerticalLeft: He,
          railColor: Zt
        }
      } = P.value, {
        top: Jt,
        right: Qt,
        bottom: er,
        left: nr
      } = De(Z), {
        top: tr,
        right: rr,
        bottom: or,
        left: ir
      } = De(ne), {
        top: ar,
        right: lr,
        bottom: sr,
        left: dr
      } = De(o != null && o.value ? Yo(ue) : ue), {
        top: ur,
        right: cr,
        bottom: fr,
        left: hr
      } = De(o != null && o.value ? Yo(He) : He);
      return {
        "--n-scrollbar-bezier": u,
        "--n-scrollbar-color": S,
        "--n-scrollbar-color-hover": A,
        "--n-scrollbar-border-radius": K,
        "--n-scrollbar-width": U,
        "--n-scrollbar-height": W,
        "--n-scrollbar-rail-top-horizontal-top": Jt,
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
        "--n-scrollbar-rail-left-vertical-right": dr,
        "--n-scrollbar-rail-top-vertical-left": ur,
        "--n-scrollbar-rail-right-vertical-left": cr,
        "--n-scrollbar-rail-bottom-vertical-left": fr,
        "--n-scrollbar-rail-left-vertical-left": hr,
        "--n-scrollbar-rail-color": Zt
      };
    }), Fe = t ? Rn("scrollbar", void 0, kn, e) : void 0;
    return Object.assign(Object.assign({}, {
      scrollTo: Oe,
      scrollBy: un,
      sync: L,
      syncUnifiedContainer: $,
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
      xRailRef: d,
      needYBar: I,
      needXBar: k,
      yBarSizePx: T,
      xBarSizePx: q,
      yBarTopPx: ee,
      xBarLeftPx: ie,
      isShowXBar: re,
      isShowYBar: ge,
      isIos: Q,
      handleScroll: en,
      handleContentResize: Le,
      handleContainerResize: _e,
      handleYScrollMouseDown: zn,
      handleXScrollMouseDown: Xn,
      cssVars: t ? void 0 : kn,
      themeClass: Fe == null ? void 0 : Fe.themeClass,
      onRender: Fe == null ? void 0 : Fe.onRender
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
    const d = this.trigger === "none", c = (v, f) => g("div", {
      ref: "yRailRef",
      class: [`${t}-scrollbar-rail`, `${t}-scrollbar-rail--vertical`, `${t}-scrollbar-rail--vertical--${a}`, v],
      "data-scrollbar-rail": !0,
      style: [f || "", this.verticalRailStyle],
      "aria-hidden": !0
    }, g(d ? jr : Un, d ? null : {
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
      return (v = this.onRender) === null || v === void 0 || v.call(this), g("div", Wt(this.$attrs, {
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
      }, g(Ft, {
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
      }, g(d ? jr : Un, d ? null : {
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
    }, m = this.container ? h() : g(Ft, {
      onResize: this.handleContainerResize
    }, {
      default: h
    });
    return i ? g(On, null, m, c(this.themeClass, this.cssVars)) : m;
  }
}), wm = nl, Sm = {
  iconSizeTiny: "28px",
  iconSizeSmall: "34px",
  iconSizeMedium: "40px",
  iconSizeLarge: "46px",
  iconSizeHuge: "52px"
};
function Cm(e) {
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
  common: Fn,
  self: Cm
}, xm = G("empty", `
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`, [Y("icon", `
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `, [H("+", [Y("description", `
 margin-top: 8px;
 `)])]), Y("description", `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), Y("extra", `
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
    } = Mn(e), o = xe("Empty", "-empty", xm, tl, e, n), {
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
          iconColor: w,
          extraTextColor: b
        }
      } = o.value;
      return {
        "--n-icon-size": m,
        "--n-font-size": v,
        "--n-bezier": h,
        "--n-text-color": f,
        "--n-icon-color": w,
        "--n-extra-text-color": b
      };
    }), d = t ? Rn("empty", z(() => {
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
      themeClass: d == null ? void 0 : d.themeClass,
      onRender: d == null ? void 0 : d.onRender
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
    opacityDisabled: d,
    hoverColor: c,
    fontSizeTiny: h,
    fontSizeSmall: m,
    fontSizeMedium: v,
    fontSizeLarge: f,
    fontSizeHuge: w,
    heightTiny: b,
    heightSmall: p,
    heightMedium: _,
    heightLarge: M,
    heightHuge: x
  } = e;
  return Object.assign(Object.assign({}, Om), {
    optionFontSizeTiny: h,
    optionFontSizeSmall: m,
    optionFontSizeMedium: v,
    optionFontSizeLarge: f,
    optionFontSizeHuge: w,
    optionHeightTiny: b,
    optionHeightSmall: p,
    optionHeightMedium: _,
    optionHeightLarge: M,
    optionHeightHuge: x,
    borderRadius: n,
    color: t,
    groupHeaderTextColor: r,
    actionDividerColor: o,
    optionTextColor: i,
    optionTextColorPressed: a,
    optionTextColorDisabled: l,
    optionTextColorActive: s,
    optionOpacityDisabled: d,
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
  common: Fn,
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
    } = this, i = r == null ? void 0 : r(o), a = n ? n(o, !1) : Hn(o[this.labelField], o, !1), l = g("div", Object.assign({}, i, {
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
const Mi = oe({
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
      showCheckmarkRef: d,
      nodePropsRef: c,
      handleOptionClick: h,
      handleOptionMouseEnter: m
    } = fe(ao), v = Re(() => {
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
    function w(p) {
      const {
        tmNode: _
      } = e;
      _.disabled || m(p, _);
    }
    function b(p) {
      const {
        tmNode: _
      } = e, {
        value: M
      } = v;
      _.disabled || M || m(p, _);
    }
    return {
      multiple: r,
      isGrouped: Re(() => {
        const {
          tmNode: p
        } = e, {
          parent: _
        } = p;
        return _ && _.rawNode.type === "group";
      }),
      showCheckmark: d,
      nodeProps: c,
      isPending: v,
      isSelected: Re(() => {
        const {
          value: p
        } = n, {
          value: _
        } = r;
        if (p === null) return !1;
        const M = e.tmNode.rawNode[s.value];
        if (_) {
          const {
            value: x
          } = o;
          return x.has(M);
        } else
          return p === M;
      }),
      labelField: l,
      renderLabel: i,
      renderOption: a,
      handleMouseMove: b,
      handleMouseEnter: w,
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
      handleClick: d,
      handleMouseEnter: c,
      handleMouseMove: h
    } = this, m = Tm(t, e), v = s ? [s(n, t), i && m] : [Hn(n[this.labelField], n, t), i && m], f = a == null ? void 0 : a(n), w = g("div", Object.assign({}, f, {
      class: [`${e}-base-select-option`, n.class, f == null ? void 0 : f.class, {
        [`${e}-base-select-option--disabled`]: n.disabled,
        [`${e}-base-select-option--selected`]: t,
        [`${e}-base-select-option--grouped`]: o,
        [`${e}-base-select-option--pending`]: r,
        [`${e}-base-select-option--show-checkmark`]: i
      }],
      style: [(f == null ? void 0 : f.style) || "", n.style || ""],
      onClick: Or([d, f == null ? void 0 : f.onClick]),
      onMouseenter: Or([c, f == null ? void 0 : f.onMouseenter]),
      onMousemove: Or([h, f == null ? void 0 : f.onMousemove])
    }), g("div", {
      class: `${e}-base-select-option__content`
    }, v));
    return n.render ? n.render({
      node: w,
      option: n,
      selected: t
    }) : l ? l({
      node: w,
      option: n,
      selected: t
    }) : w;
  }
}), {
  cubicBezierEaseIn: Ri,
  cubicBezierEaseOut: Ai
} = pt;
function ol({
  transformOrigin: e = "inherit",
  duration: n = ".2s",
  enterScale: t = ".9",
  originalTransform: r = "",
  originalTransition: o = ""
} = {}) {
  return [H("&.fade-in-scale-up-transition-leave-active", {
    transformOrigin: e,
    transition: `opacity ${n} ${Ri}, transform ${n} ${Ri} ${o && `,${o}`}`
  }), H("&.fade-in-scale-up-transition-enter-active", {
    transformOrigin: e,
    transition: `opacity ${n} ${Ai}, transform ${n} ${Ai} ${o && `,${o}`}`
  }), H("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to", {
    opacity: 0,
    transform: `${r} scale(${t})`
  }), H("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to", {
    opacity: 1,
    transform: `${r} scale(1)`
  })];
}
const Mm = G("base-select-menu", `
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
 `, [Y("content", `
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
 `), Y("loading, empty", `
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `), Y("loading", `
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `), Y("header", `
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `), Y("action", `
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
 `), H("&::before", `
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `), H("&:active", `
 color: var(--n-option-text-color-pressed);
 `), te("grouped", `
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `), te("pending", [H("&::before", `
 background-color: var(--n-option-color-pending);
 `)]), te("selected", `
 color: var(--n-option-text-color-active);
 `, [H("&::before", `
 background-color: var(--n-option-color-active);
 `), te("pending", [H("&::before", `
 background-color: var(--n-option-color-active-pending);
 `)])]), te("disabled", `
 cursor: not-allowed;
 `, [ze("selected", `
 color: var(--n-option-text-color-disabled);
 `), te("selected", `
 opacity: var(--n-option-opacity-disabled);
 `)]), Y("check", `
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `, [ol({
  enterScale: "0.5"
})])])]), Rm = oe({
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
    } = Mn(e), r = Yt("InternalSelectMenu", t, n), o = xe("InternalSelectMenu", "-internal-select-menu", Mm, rl, e, le(e, "clsPrefix")), i = D(null), a = D(null), l = D(null), s = z(() => e.treeMate.getFlattenedNodes()), d = z(() => Zl(s.value)), c = D(null);
    function h() {
      const {
        treeMate: I
      } = e;
      let k = null;
      const {
        value: re
      } = e;
      re === null ? k = I.getFirstAvailableNode() : (e.multiple ? k = I.getNode((re || [])[(re || []).length - 1]) : k = I.getNode(re), (!k || k.disabled) && (k = I.getFirstAvailableNode())), F(k || null);
    }
    function m() {
      const {
        value: I
      } = c;
      I && !e.treeMate.getNode(I.key) && (c.value = null);
    }
    let v;
    Ce(() => e.show, (I) => {
      I ? v = Ce(() => e.treeMate, () => {
        e.resetMenuOnOptionsChange ? (e.autoPending ? h() : m(), Ht(T)) : m();
      }, {
        immediate: !0
      }) : v == null || v();
    }, {
      immediate: !0
    }), ke(() => {
      v == null || v();
    });
    const f = z(() => lt(o.value.self[ce("optionHeight", e.size)])), w = z(() => De(o.value.self[ce("padding", e.size)])), b = z(() => e.multiple && Array.isArray(e.value) ? new Set(e.value) : /* @__PURE__ */ new Set()), p = z(() => {
      const I = s.value;
      return I && I.length === 0;
    });
    function _(I) {
      const {
        onToggle: k
      } = e;
      k && k(I);
    }
    function M(I) {
      const {
        onScroll: k
      } = e;
      k && k(I);
    }
    function x(I) {
      var k;
      (k = l.value) === null || k === void 0 || k.sync(), M(I);
    }
    function E() {
      var I;
      (I = l.value) === null || I === void 0 || I.sync();
    }
    function B() {
      const {
        value: I
      } = c;
      return I || null;
    }
    function y(I, k) {
      k.disabled || F(k, !1);
    }
    function C(I, k) {
      k.disabled || _(k);
    }
    function R(I) {
      var k;
      et(I, "action") || (k = e.onKeyup) === null || k === void 0 || k.call(e, I);
    }
    function O(I) {
      var k;
      et(I, "action") || (k = e.onKeydown) === null || k === void 0 || k.call(e, I);
    }
    function V(I) {
      var k;
      (k = e.onMousedown) === null || k === void 0 || k.call(e, I), !e.focusable && I.preventDefault();
    }
    function Q() {
      const {
        value: I
      } = c;
      I && F(I.getNext({
        loop: !0
      }), !0);
    }
    function P() {
      const {
        value: I
      } = c;
      I && F(I.getPrev({
        loop: !0
      }), !0);
    }
    function F(I, k = !1) {
      c.value = I, k && T();
    }
    function T() {
      var I, k;
      const re = c.value;
      if (!re) return;
      const ge = d.value(re.key);
      ge !== null && (e.virtualScroll ? (I = a.value) === null || I === void 0 || I.scrollTo({
        index: ge
      }) : (k = l.value) === null || k === void 0 || k.scrollTo({
        index: ge,
        elSize: f.value
      }));
    }
    function N(I) {
      var k, re;
      !((k = i.value) === null || k === void 0) && k.contains(I.target) && ((re = e.onFocus) === null || re === void 0 || re.call(e, I));
    }
    function q(I) {
      var k, re;
      !((k = i.value) === null || k === void 0) && k.contains(I.relatedTarget) || (re = e.onBlur) === null || re === void 0 || re.call(e, I);
    }
    Ve(ao, {
      handleOptionMouseEnter: y,
      handleOptionClick: C,
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
    }), Ve(ca, i), Ie(() => {
      const {
        value: I
      } = l;
      I && I.sync();
    });
    const J = z(() => {
      const {
        size: I
      } = e, {
        common: {
          cubicBezierEaseInOut: k
        },
        self: {
          height: re,
          borderRadius: ge,
          color: ve,
          groupHeaderTextColor: Be,
          actionDividerColor: Oe,
          optionTextColorPressed: me,
          optionTextColor: Le,
          optionTextColorDisabled: _e,
          optionTextColorActive: un,
          optionOpacityDisabled: Te,
          optionCheckColor: cn,
          actionTextColor: fn,
          optionColorPending: $e,
          optionColorActive: Ge,
          loadingColor: hn,
          loadingSize: pn,
          optionColorActivePending: mn,
          [ce("optionFontSize", I)]: en,
          [ce("optionHeight", I)]: Ne,
          [ce("optionPadding", I)]: be
        }
      } = o.value;
      return {
        "--n-height": re,
        "--n-action-divider-color": Oe,
        "--n-action-text-color": fn,
        "--n-bezier": k,
        "--n-border-radius": ge,
        "--n-color": ve,
        "--n-option-font-size": en,
        "--n-group-header-text-color": Be,
        "--n-option-check-color": cn,
        "--n-option-color-pending": $e,
        "--n-option-color-active": Ge,
        "--n-option-color-active-pending": mn,
        "--n-option-height": Ne,
        "--n-option-opacity-disabled": Te,
        "--n-option-text-color": Le,
        "--n-option-text-color-active": un,
        "--n-option-text-color-disabled": _e,
        "--n-option-text-color-pressed": me,
        "--n-option-padding": be,
        "--n-option-padding-left": De(be, "left"),
        "--n-option-padding-right": De(be, "right"),
        "--n-loading-color": hn,
        "--n-loading-size": pn
      };
    }), {
      inlineThemeDisabled: ee
    } = e, X = ee ? Rn("internal-select-menu", z(() => e.size[0]), J, e) : void 0, ie = {
      selfRef: i,
      next: Q,
      prev: P,
      getPendingTmNode: B
    };
    return ga(i, e.onResize), Object.assign({
      mergedTheme: o,
      mergedClsPrefix: n,
      rtlEnabled: r,
      virtualListRef: a,
      scrollbarRef: l,
      itemSize: f,
      padding: w,
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
      doScroll: M,
      handleFocusin: N,
      handleFocusout: q,
      handleKeyUp: R,
      handleKeyDown: O,
      handleMouseDown: V,
      handleVirtualListResize: E,
      handleVirtualListScroll: x,
      cssVars: ee ? void 0 : J,
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
    }, g(Ja, {
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
      default: () => n ? g(Td, {
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
        }) : a.ignored ? null : g(Mi, {
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
      }) : g(Mi, {
        clsPrefix: t,
        key: a.key,
        tmNode: a
      })))
    }), xn(e.action, (a) => a && [g("div", {
      class: `${t}-base-select-menu__action`,
      "data-action": !0,
      key: "action"
    }, a), g(um, {
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
  common: Fn,
  self: Im
}, Ir = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, he = "var(--n-arrow-height) * 1.414", $m = H([G("popover", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `, [H(">", [G("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), ze("raw", `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [ze("scrollable", [ze("show-header-or-footer", "padding: var(--n-padding);")])]), Y("header", `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), Y("footer", `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), te("scrollable, show-header-or-footer", [Y("content", `
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
]), Me("top-start", `
 top: calc(${he} / -2);
 left: calc(${Ye("top-start")} - var(--v-offset-left));
 `), Me("top", `
 top: calc(${he} / -2);
 transform: translateX(calc(${he} / -2)) rotate(45deg);
 left: 50%;
 `), Me("top-end", `
 top: calc(${he} / -2);
 right: calc(${Ye("top-end")} + var(--v-offset-left));
 `), Me("bottom-start", `
 bottom: calc(${he} / -2);
 left: calc(${Ye("bottom-start")} - var(--v-offset-left));
 `), Me("bottom", `
 bottom: calc(${he} / -2);
 transform: translateX(calc(${he} / -2)) rotate(45deg);
 left: 50%;
 `), Me("bottom-end", `
 bottom: calc(${he} / -2);
 right: calc(${Ye("bottom-end")} + var(--v-offset-left));
 `), Me("left-start", `
 left: calc(${he} / -2);
 top: calc(${Ye("left-start")} - var(--v-offset-top));
 `), Me("left", `
 left: calc(${he} / -2);
 transform: translateY(calc(${he} / -2)) rotate(45deg);
 top: 50%;
 `), Me("left-end", `
 left: calc(${he} / -2);
 bottom: calc(${Ye("left-end")} + var(--v-offset-top));
 `), Me("right-start", `
 right: calc(${he} / -2);
 top: calc(${Ye("right-start")} - var(--v-offset-top));
 `), Me("right", `
 right: calc(${he} / -2);
 transform: translateY(calc(${he} / -2)) rotate(45deg);
 top: 50%;
 `), Me("right-end", `
 right: calc(${he} / -2);
 bottom: calc(${Ye("right-end")} + var(--v-offset-top));
 `), ...Xp({
  top: ["right-start", "left-start"],
  right: ["top-end", "bottom-end"],
  bottom: ["right-end", "left-end"],
  left: ["top-start", "bottom-start"]
}, (e, n) => {
  const t = ["right", "left"].includes(n), r = t ? "width" : "height";
  return e.map((o) => {
    const i = o.split("-")[1] === "end", l = `calc((${`var(--v-target-${r}, 0px)`} - ${he}) / 2)`, s = Ye(o);
    return H(`[v-placement="${o}"] >`, [G("popover-shared", [te("center-arrow", [G("popover-arrow", `${n}: calc(max(${l}, ${s}) ${i ? "+" : "-"} var(--v-offset-${t ? "left" : "top"}));`)])])]);
  });
})]);
function Ye(e) {
  return ["top", "bottom"].includes(e.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)";
}
function Me(e, n) {
  const t = e.split("-")[0], r = ["top", "bottom"].includes(t) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
  return H(`[v-placement="${e}"] >`, [G("popover-shared", `
 margin-${Ir[t]}: var(--n-space);
 `, [te("show-arrow", `
 margin-${Ir[t]}: var(--n-space-arrow);
 `), te("overlap", `
 margin: 0;
 `), Ld("popover-arrow-wrapper", `
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
function Fm({
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
const Dm = oe({
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
    } = Mn(e), a = xe("Popover", "-popover", $m, il, e, o), l = D(null), s = fe("NPopover"), d = D(null), c = D(e.show), h = D(!1);
    qe(() => {
      const {
        show: y
      } = e;
      y && !Nd() && !e.internalDeactivateImmediately && (h.value = !0);
    });
    const m = z(() => {
      const {
        trigger: y,
        onClickoutside: C
      } = e, R = [], {
        positionManuallyRef: {
          value: O
        }
      } = s;
      return O || (y === "click" && !C && R.push([$t, x, void 0, {
        capture: !0
      }]), y === "hover" && R.push([vs, M])), C && R.push([$t, x, void 0, {
        capture: !0
      }]), (e.displayDirective === "show" || e.animated && h.value) && R.push([zi, e.show]), R;
    }), v = z(() => {
      const {
        common: {
          cubicBezierEaseInOut: y,
          cubicBezierEaseIn: C,
          cubicBezierEaseOut: R
        },
        self: {
          space: O,
          spaceArrow: V,
          padding: Q,
          fontSize: P,
          textColor: F,
          dividerColor: T,
          color: N,
          boxShadow: q,
          borderRadius: J,
          arrowHeight: ee,
          arrowOffset: X,
          arrowOffsetVertical: ie
        }
      } = a.value;
      return {
        "--n-box-shadow": q,
        "--n-bezier": y,
        "--n-bezier-ease-in": C,
        "--n-bezier-ease-out": R,
        "--n-font-size": P,
        "--n-text-color": F,
        "--n-color": N,
        "--n-divider-color": T,
        "--n-border-radius": J,
        "--n-arrow-height": ee,
        "--n-arrow-offset": X,
        "--n-arrow-offset-vertical": ie,
        "--n-padding": Q,
        "--n-space": O,
        "--n-space-arrow": V
      };
    }), f = z(() => {
      const y = e.width === "trigger" ? void 0 : _r(e.width), C = [];
      y && C.push({
        width: y
      });
      const {
        maxWidth: R,
        minWidth: O
      } = e;
      return R && C.push({
        maxWidth: _r(R)
      }), O && C.push({
        maxWidth: _r(O)
      }), i || C.push(v.value), C;
    }), w = i ? Rn("popover", void 0, v, e) : void 0;
    s.setBodyInstance({
      syncPosition: b
    }), ke(() => {
      s.setBodyInstance(null);
    }), Ce(le(e, "show"), (y) => {
      e.animated || (y ? c.value = !0 : c.value = !1);
    });
    function b() {
      var y;
      (y = l.value) === null || y === void 0 || y.syncPosition();
    }
    function p(y) {
      e.trigger === "hover" && e.keepAliveOnHover && e.show && s.handleMouseEnter(y);
    }
    function _(y) {
      e.trigger === "hover" && e.keepAliveOnHover && s.handleMouseLeave(y);
    }
    function M(y) {
      e.trigger === "hover" && !E().contains(at(y)) && s.handleMouseMoveOutside(y);
    }
    function x(y) {
      (e.trigger === "click" && !E().contains(at(y)) || e.onClickoutside) && s.handleClickOutside(y);
    }
    function E() {
      return s.getTriggerElement();
    }
    Ve(pa, d), Ve(fa, null), Ve(ha, null);
    function B() {
      if (w == null || w.onRender(), !(e.displayDirective === "show" || e.show || e.animated && h.value))
        return null;
      let C;
      const R = s.internalRenderBodyRef.value, {
        value: O
      } = o;
      if (R)
        C = R(
          // The popover class and overlap class must exists, they will be used
          // to place the body & transition animation.
          // Shadow class exists for reuse box-shadow.
          [`${O}-popover-shared`, w == null ? void 0 : w.themeClass.value, e.overlap && `${O}-popover-shared--overlap`, e.showArrow && `${O}-popover-shared--show-arrow`, e.arrowPointToCenter && `${O}-popover-shared--center-arrow`],
          d,
          f.value,
          p,
          _
        );
      else {
        const {
          value: V
        } = s.extraClassRef, {
          internalTrapFocus: Q
        } = e, P = !ei(n.header) || !ei(n.footer), F = () => {
          var T, N;
          const q = P ? g(On, null, xn(n.header, (X) => X ? g("div", {
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
          }, n), J = e.scrollable ? g(wm, {
            contentClass: P ? void 0 : `${O}-popover__content ${(N = e.contentClass) !== null && N !== void 0 ? N : ""}`,
            contentStyle: P ? void 0 : e.contentStyle
          }, {
            default: () => q
          }) : q, ee = e.showArrow ? Fm({
            arrowClass: e.arrowClass,
            arrowStyle: e.arrowStyle,
            arrowWrapperClass: e.arrowWrapperClass,
            arrowWrapperStyle: e.arrowWrapperStyle,
            clsPrefix: O
          }) : null;
          return [J, ee];
        };
        C = g("div", Wt({
          class: [`${O}-popover`, `${O}-popover-shared`, w == null ? void 0 : w.themeClass.value, V.map((T) => `${O}-${T}`), {
            [`${O}-popover--scrollable`]: e.scrollable,
            [`${O}-popover--show-header-or-footer`]: P,
            [`${O}-popover--raw`]: e.raw,
            [`${O}-popover-shared--overlap`]: e.overlap,
            [`${O}-popover-shared--show-arrow`]: e.showArrow,
            [`${O}-popover-shared--center-arrow`]: e.arrowPointToCenter
          }],
          ref: d,
          style: f.value,
          onKeydown: s.handleKeydown,
          onMouseenter: p,
          onMouseleave: _
        }, t), Q ? g(Ad, {
          active: e.show,
          autoFocus: !0
        }, {
          default: F
        }) : F());
      }
      return ft(C, m.value);
    }
    return {
      displayed: h,
      namespace: r,
      isMounted: s.isMountedRef,
      zIndex: s.zIndexRef,
      followerRef: l,
      adjustedTo: Ze(e),
      followerEnabled: c,
      renderContentNode: B
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
      teleportDisabled: this.adjustedTo === Ze.tdkey
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
var zm = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_21460_PJDHIKOZPECWZFUP", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.96.4", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-32603f9735-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
const km = Object.keys(al), Bm = {
  focus: ["onFocus", "onBlur"],
  click: ["onClick"],
  hover: ["onMouseenter", "onMouseleave"],
  manual: [],
  nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"]
};
function Lm(e, n, t) {
  Bm[n].forEach((r) => {
    e.props ? e.props = Object.assign({}, e.props) : e.props = {};
    const o = e.props[r], i = t[r];
    o ? e.props[r] = (...a) => {
      o(...a), i(...a);
    } : e.props[r] = i;
  });
}
const Nm = {
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
}, Hm = Object.assign(Object.assign(Object.assign({}, xe.props), Nm), {
  internalOnAfterLeave: Function,
  internalRenderBody: Function
}), Wm = oe({
  name: "Popover",
  inheritAttrs: !1,
  props: Hm,
  slots: Object,
  __popover__: !0,
  setup(e) {
    zm.NODE_ENV !== "production" && qe(() => {
      e.maxWidth !== void 0 && on("popover", "`max-width` is deprecated, please use `style` instead."), e.minWidth !== void 0 && on("popover", "`min-width` is deprecated, please use `style` instead."), e.arrow !== void 0 && on("popover", "`arrow` is deprecated, please use `showArrow` instead."), e.onHide !== void 0 && on("popover", "`on-hide` is deprecated, please use `on-update:show` instead."), e.onShow !== void 0 && on("popover", "`on-show` is deprecated, please use `on-update:show` instead.");
    });
    const n = Vt(), t = D(null), r = z(() => e.show), o = D(e.defaultShow), i = Br(r, o), a = Re(() => e.disabled ? !1 : i.value), l = () => {
      if (e.disabled) return !0;
      const {
        getDisabled: T
      } = e;
      return !!(T != null && T());
    }, s = () => l() ? !1 : i.value, d = Vi(e, ["arrow", "showArrow"]), c = z(() => e.overlap ? !1 : d.value);
    let h = null;
    const m = D(null), v = D(null), f = Re(() => e.x !== void 0 && e.y !== void 0);
    function w(T) {
      const {
        "onUpdate:show": N,
        onUpdateShow: q,
        onShow: J,
        onHide: ee
      } = e;
      o.value = T, N && we(N, T), q && we(q, T), T && J && we(J, !0), T && ee && we(ee, !1);
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
    function M() {
      const T = l();
      if (e.trigger === "focus" && !T) {
        if (s()) return;
        w(!0);
      }
    }
    function x() {
      const T = l();
      if (e.trigger === "focus" && !T) {
        if (!s()) return;
        w(!1);
      }
    }
    function E() {
      const T = l();
      if (e.trigger === "hover" && !T) {
        if (_(), m.value !== null || s()) return;
        const N = () => {
          w(!0), m.value = null;
        }, {
          delay: q
        } = e;
        q === 0 ? N() : m.value = window.setTimeout(N, q);
      }
    }
    function B() {
      const T = l();
      if (e.trigger === "hover" && !T) {
        if (p(), v.value !== null || !s()) return;
        const N = () => {
          w(!1), v.value = null;
        }, {
          duration: q
        } = e;
        q === 0 ? N() : v.value = window.setTimeout(N, q);
      }
    }
    function y() {
      B();
    }
    function C(T) {
      var N;
      s() && (e.trigger === "click" && (p(), _(), w(!1)), (N = e.onClickoutside) === null || N === void 0 || N.call(e, T));
    }
    function R() {
      if (e.trigger === "click" && !l()) {
        p(), _();
        const T = !s();
        w(T);
      }
    }
    function O(T) {
      e.internalTrapFocus && T.key === "Escape" && (p(), _(), w(!1));
    }
    function V(T) {
      o.value = T;
    }
    function Q() {
      var T;
      return (T = t.value) === null || T === void 0 ? void 0 : T.targetRef;
    }
    function P(T) {
      h = T;
    }
    return Ve("NPopover", {
      getTriggerElement: Q,
      handleKeydown: O,
      handleMouseEnter: E,
      handleMouseLeave: B,
      handleClickOutside: C,
      handleMouseMoveOutside: y,
      setBodyInstance: P,
      positionManuallyRef: f,
      isMountedRef: n,
      zIndexRef: le(e, "zIndex"),
      extraClassRef: le(e, "internalExtraClass"),
      internalRenderBodyRef: le(e, "internalRenderBody")
    }), qe(() => {
      i.value && l() && w(!1);
    }), {
      binderInstRef: t,
      positionManually: f,
      mergedShowConsideringDisabledProp: a,
      // if to show popover body
      uncontrolledShow: o,
      mergedShowArrow: c,
      getMergedShow: s,
      setShow: V,
      handleClick: R,
      handleMouseEnter: E,
      handleMouseLeave: B,
      handleFocus: M,
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
    if (!n && (r = Vd(t, "trigger"), r)) {
      r = wl(r), r = r.type === Sl ? g("span", [r]) : r;
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
          onBlur: (d) => {
            l.forEach((c) => {
              c.onBlur(d);
            });
          },
          onFocus: (d) => {
            l.forEach((c) => {
              c.onFocus(d);
            });
          },
          onClick: (d) => {
            l.forEach((c) => {
              c.onClick(d);
            });
          },
          onMouseenter: (d) => {
            l.forEach((c) => {
              c.onMouseenter(d);
            });
          },
          onMouseleave: (d) => {
            l.forEach((c) => {
              c.onMouseleave(d);
            });
          }
        };
        Lm(r, a ? "nested" : n ? "manual" : this.trigger, s);
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
        }), [[Wi, {
          enabled: i,
          zIndex: this.zIndex
        }]]) : null, n ? null : g(Ki, null, {
          default: () => r
        }), g(Dm, Ud(this.$props, km, Object.assign(Object.assign({}, this.$attrs), {
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
}), Vm = {
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
    baseColor: d,
    borderColor: c,
    opacityDisabled: h,
    tagColor: m,
    closeIconColor: v,
    closeIconColorHover: f,
    closeIconColorPressed: w,
    borderRadiusSmall: b,
    fontSizeMini: p,
    fontSizeTiny: _,
    fontSizeSmall: M,
    fontSizeMedium: x,
    heightMini: E,
    heightTiny: B,
    heightSmall: y,
    heightMedium: C,
    closeColorHover: R,
    closeColorPressed: O,
    buttonColor2Hover: V,
    buttonColor2Pressed: Q,
    fontWeightStrong: P
  } = e;
  return Object.assign(Object.assign({}, Vm), {
    closeBorderRadius: b,
    heightTiny: E,
    heightSmall: B,
    heightMedium: y,
    heightLarge: C,
    borderRadius: b,
    opacityDisabled: h,
    fontSizeTiny: p,
    fontSizeSmall: _,
    fontSizeMedium: M,
    fontSizeLarge: x,
    fontWeightStrong: P,
    // checked
    textColorCheckable: n,
    textColorHoverCheckable: n,
    textColorPressedCheckable: n,
    textColorChecked: d,
    colorCheckable: "#0000",
    colorHoverCheckable: V,
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
    closeIconColorPressed: w,
    closeColorHover: R,
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
const jm = {
  name: "Tag",
  common: Fn,
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
 `), Y("border", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `), Y("icon", `
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `), Y("avatar", `
 display: flex;
 margin: 0 6px 0 0;
 `), Y("close", `
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `), te("round", `
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `, [Y("icon", `
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `), Y("avatar", `
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
 `, [ze("disabled", [H("&:hover", "background-color: var(--n-color-hover-checkable);", [ze("checked", "color: var(--n-text-color-hover-checkable);")]), H("&:active", "background-color: var(--n-color-pressed-checkable);", [ze("checked", "color: var(--n-text-color-pressed-checkable);")])]), te("checked", `
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `, [ze("disabled", [H("&:hover", "background-color: var(--n-color-checked-hover);"), H("&:active", "background-color: var(--n-color-checked-pressed);")])])])]);
var Xm = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_21460_PJDHIKOZPECWZFUP", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.96.4", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-32603f9735-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
const Ym = Object.assign(Object.assign(Object.assign({}, xe.props), Gm), {
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
}), qm = "n-tag", $r = oe({
  name: "Tag",
  props: Ym,
  slots: Object,
  setup(e) {
    Xm.NODE_ENV !== "production" && qe(() => {
      e.onCheckedChange !== void 0 && on("tag", "`on-checked-change` is deprecated, please use `on-update:checked` instead");
    });
    const n = D(null), {
      mergedBorderedRef: t,
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = Mn(e), a = xe("Tag", "-tag", Km, jm, e, r);
    Ve(qm, {
      roundRef: le(e, "round")
    });
    function l() {
      if (!e.disabled && e.checkable) {
        const {
          checked: v,
          onCheckedChange: f,
          onUpdateChecked: w,
          "onUpdate:checked": b
        } = e;
        w && w(!v), b && b(!v), f && f(!v);
      }
    }
    function s(v) {
      if (e.triggerClickOnClose || v.stopPropagation(), !e.disabled) {
        const {
          onClose: f
        } = e;
        f && we(f, v);
      }
    }
    const d = {
      setTextContent(v) {
        const {
          value: f
        } = n;
        f && (f.textContent = v);
      }
    }, c = Yt("Tag", i, r), h = z(() => {
      const {
        type: v,
        size: f,
        color: {
          color: w,
          textColor: b
        } = {}
      } = e, {
        common: {
          cubicBezierEaseInOut: p
        },
        self: {
          padding: _,
          closeMargin: M,
          borderRadius: x,
          opacityDisabled: E,
          textColorCheckable: B,
          textColorHoverCheckable: y,
          textColorPressedCheckable: C,
          textColorChecked: R,
          colorCheckable: O,
          colorHoverCheckable: V,
          colorPressedCheckable: Q,
          colorChecked: P,
          colorCheckedHover: F,
          colorCheckedPressed: T,
          closeBorderRadius: N,
          fontWeightStrong: q,
          [ce("colorBordered", v)]: J,
          [ce("closeSize", f)]: ee,
          [ce("closeIconSize", f)]: X,
          [ce("fontSize", f)]: ie,
          [ce("height", f)]: I,
          [ce("color", v)]: k,
          [ce("textColor", v)]: re,
          [ce("border", v)]: ge,
          [ce("closeIconColor", v)]: ve,
          [ce("closeIconColorHover", v)]: Be,
          [ce("closeIconColorPressed", v)]: Oe,
          [ce("closeColorHover", v)]: me,
          [ce("closeColorPressed", v)]: Le
        }
      } = a.value, _e = De(M);
      return {
        "--n-font-weight-strong": q,
        "--n-avatar-size-override": `calc(${I} - 8px)`,
        "--n-bezier": p,
        "--n-border-radius": x,
        "--n-border": ge,
        "--n-close-icon-size": X,
        "--n-close-color-pressed": Le,
        "--n-close-color-hover": me,
        "--n-close-border-radius": N,
        "--n-close-icon-color": ve,
        "--n-close-icon-color-hover": Be,
        "--n-close-icon-color-pressed": Oe,
        "--n-close-icon-color-disabled": ve,
        "--n-close-margin-top": _e.top,
        "--n-close-margin-right": _e.right,
        "--n-close-margin-bottom": _e.bottom,
        "--n-close-margin-left": _e.left,
        "--n-close-size": ee,
        "--n-color": w || (t.value ? J : k),
        "--n-color-checkable": O,
        "--n-color-checked": P,
        "--n-color-checked-hover": F,
        "--n-color-checked-pressed": T,
        "--n-color-hover-checkable": V,
        "--n-color-pressed-checkable": Q,
        "--n-font-size": ie,
        "--n-height": I,
        "--n-opacity-disabled": E,
        "--n-padding": _,
        "--n-text-color": b || re,
        "--n-text-color-checkable": B,
        "--n-text-color-checked": R,
        "--n-text-color-hover-checkable": y,
        "--n-text-color-pressed-checkable": C
      };
    }), m = o ? Rn("tag", z(() => {
      let v = "";
      const {
        type: f,
        size: w,
        color: {
          color: b,
          textColor: p
        } = {}
      } = e;
      return v += f[0], v += w[0], b && (v += `a${Ko(b)}`), p && (v += `b${Ko(p)}`), t.value && (v += "c"), v;
    }), h, e) : void 0;
    return Object.assign(Object.assign({}, d), {
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
    const d = xn(s.avatar, (h) => h && g("div", {
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
        [`${t}-tag--avatar`]: d,
        [`${t}-tag--icon`]: c,
        [`${t}-tag--closable`]: o
      }],
      style: this.cssVars,
      onClick: this.handleClick,
      onMouseenter: this.onMouseenter,
      onMouseleave: this.onMouseleave
    }, c || d, g("span", {
      class: `${t}-tag__content`,
      ref: "contentRef"
    }, (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e)), !this.checkable && o ? g(dm, {
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
}), Zm = oe({
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
      return g(Ja, {
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
}), Jm = {
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
    warningColorHover: d,
    errorColor: c,
    errorColorHover: h,
    borderColor: m,
    iconColor: v,
    iconColorDisabled: f,
    clearColor: w,
    clearColorHover: b,
    clearColorPressed: p,
    placeholderColor: _,
    placeholderColorDisabled: M,
    fontSizeTiny: x,
    fontSizeSmall: E,
    fontSizeMedium: B,
    fontSizeLarge: y,
    heightTiny: C,
    heightSmall: R,
    heightMedium: O,
    heightLarge: V,
    fontWeight: Q
  } = e;
  return Object.assign(Object.assign({}, Jm), {
    fontSizeTiny: x,
    fontSizeSmall: E,
    fontSizeMedium: B,
    fontSizeLarge: y,
    heightTiny: C,
    heightSmall: R,
    heightMedium: O,
    heightLarge: V,
    borderRadius: n,
    fontWeight: Q,
    // default
    textColor: t,
    textColorDisabled: r,
    placeholderColor: _,
    placeholderColorDisabled: M,
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
    borderHoverWarning: `1px solid ${d}`,
    borderActiveWarning: `1px solid ${s}`,
    borderFocusWarning: `1px solid ${d}`,
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
    clearColor: w,
    clearColorHover: b,
    clearColorPressed: p
  });
}
const ll = {
  name: "InternalSelection",
  common: Fn,
  peers: {
    Popover: il
  },
  self: Qm
}, eg = H([G("base-selection", `
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
 `), G("base-selection-tags", "min-height: var(--n-height);"), Y("border, state-border", `
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
 `), Y("state-border", `
 z-index: 1;
 border-color: #0000;
 `), G("base-suffix", `
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `, [Y("arrow", `
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
 `, [Y("wrapper", `
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]), G("base-selection-placeholder", `
 color: var(--n-placeholder-color);
 `, [Y("inner", `
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
 `, [Y("content", `
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]), Y("render-label", `
 color: var(--n-text-color);
 `)]), ze("disabled", [H("&:hover", [Y("state-border", `
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]), te("focus", [Y("state-border", `
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]), te("active", [Y("state-border", `
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `), G("base-selection-label", "background-color: var(--n-color-active);"), G("base-selection-tags", "background-color: var(--n-color-active);")])]), te("disabled", "cursor: not-allowed;", [Y("arrow", `
 color: var(--n-arrow-color-disabled);
 `), G("base-selection-label", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [G("base-selection-input", `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `), Y("render-label", `
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
 `, [Y("input", `
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
 `), Y("mirror", `
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]), ["warning", "error"].map((e) => te(`${e}-status`, [Y("state-border", `border: var(--n-border-${e});`), ze("disabled", [H("&:hover", [Y("state-border", `
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]), te("active", [Y("state-border", `
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `), G("base-selection-label", `background-color: var(--n-color-active-${e});`), G("base-selection-tags", `background-color: var(--n-color-active-${e});`)]), te("focus", [Y("state-border", `
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
 `, [H("&:last-child", "padding-right: 0;"), G("tag", `
 font-size: 14px;
 max-width: 100%;
 `, [Y("content", `
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
    } = Mn(e), r = Yt("InternalSelection", t, n), o = D(null), i = D(null), a = D(null), l = D(null), s = D(null), d = D(null), c = D(null), h = D(null), m = D(null), v = D(null), f = D(!1), w = D(!1), b = D(!1), p = xe("InternalSelection", "-internal-selection", eg, ll, e, le(e, "clsPrefix")), _ = z(() => e.clearable && !e.disabled && (b.value || e.active)), M = z(() => e.selectedOption ? e.renderTag ? e.renderTag({
      option: e.selectedOption,
      handleClose: () => {
      }
    }) : e.renderLabel ? e.renderLabel(e.selectedOption, !0) : Hn(e.selectedOption[e.labelField], e.selectedOption, !0) : e.placeholder), x = z(() => {
      const $ = e.selectedOption;
      if ($)
        return $[e.labelField];
    }), E = z(() => e.multiple ? !!(Array.isArray(e.selectedOptions) && e.selectedOptions.length) : e.selectedOption !== null);
    function B() {
      var $;
      const {
        value: L
      } = o;
      if (L) {
        const {
          value: de
        } = i;
        de && (de.style.width = `${L.offsetWidth}px`, e.maxTagCount !== "responsive" && (($ = m.value) === null || $ === void 0 || $.sync({
          showAllItemsBeforeCalculate: !1
        })));
      }
    }
    function y() {
      const {
        value: $
      } = v;
      $ && ($.style.display = "none");
    }
    function C() {
      const {
        value: $
      } = v;
      $ && ($.style.display = "inline-block");
    }
    Ce(le(e, "active"), ($) => {
      $ || y();
    }), Ce(le(e, "pattern"), () => {
      e.multiple && Ht(B);
    });
    function R($) {
      const {
        onFocus: L
      } = e;
      L && L($);
    }
    function O($) {
      const {
        onBlur: L
      } = e;
      L && L($);
    }
    function V($) {
      const {
        onDeleteOption: L
      } = e;
      L && L($);
    }
    function Q($) {
      const {
        onClear: L
      } = e;
      L && L($);
    }
    function P($) {
      const {
        onPatternInput: L
      } = e;
      L && L($);
    }
    function F($) {
      var L;
      (!$.relatedTarget || !(!((L = a.value) === null || L === void 0) && L.contains($.relatedTarget))) && R($);
    }
    function T($) {
      var L;
      !((L = a.value) === null || L === void 0) && L.contains($.relatedTarget) || O($);
    }
    function N($) {
      Q($);
    }
    function q() {
      b.value = !0;
    }
    function J() {
      b.value = !1;
    }
    function ee($) {
      !e.active || !e.filterable || $.target !== i.value && $.preventDefault();
    }
    function X($) {
      V($);
    }
    const ie = D(!1);
    function I($) {
      if ($.key === "Backspace" && !ie.value && !e.pattern.length) {
        const {
          selectedOptions: L
        } = e;
        L != null && L.length && X(L[L.length - 1]);
      }
    }
    let k = null;
    function re($) {
      const {
        value: L
      } = o;
      if (L) {
        const de = $.target.value;
        L.textContent = de, B();
      }
      e.ignoreComposition && ie.value ? k = $ : P($);
    }
    function ge() {
      ie.value = !0;
    }
    function ve() {
      ie.value = !1, e.ignoreComposition && P(k), k = null;
    }
    function Be($) {
      var L;
      w.value = !0, (L = e.onPatternFocus) === null || L === void 0 || L.call(e, $);
    }
    function Oe($) {
      var L;
      w.value = !1, (L = e.onPatternBlur) === null || L === void 0 || L.call(e, $);
    }
    function me() {
      var $, L;
      if (e.filterable)
        w.value = !1, ($ = d.value) === null || $ === void 0 || $.blur(), (L = i.value) === null || L === void 0 || L.blur();
      else if (e.multiple) {
        const {
          value: de
        } = l;
        de == null || de.blur();
      } else {
        const {
          value: de
        } = s;
        de == null || de.blur();
      }
    }
    function Le() {
      var $, L, de;
      e.filterable ? (w.value = !1, ($ = d.value) === null || $ === void 0 || $.focus()) : e.multiple ? (L = l.value) === null || L === void 0 || L.focus() : (de = s.value) === null || de === void 0 || de.focus();
    }
    function _e() {
      const {
        value: $
      } = i;
      $ && (C(), $.focus());
    }
    function un() {
      const {
        value: $
      } = i;
      $ && $.blur();
    }
    function Te($) {
      const {
        value: L
      } = c;
      L && L.setTextContent(`+${$}`);
    }
    function cn() {
      const {
        value: $
      } = h;
      return $;
    }
    function fn() {
      return i.value;
    }
    let $e = null;
    function Ge() {
      $e !== null && window.clearTimeout($e);
    }
    function hn() {
      e.active || (Ge(), $e = window.setTimeout(() => {
        E.value && (f.value = !0);
      }, 100));
    }
    function pn() {
      Ge();
    }
    function mn($) {
      $ || (Ge(), f.value = !1);
    }
    Ce(E, ($) => {
      $ || (f.value = !1);
    }), Ie(() => {
      qe(() => {
        const $ = d.value;
        $ && (e.disabled ? $.removeAttribute("tabindex") : $.tabIndex = w.value ? -1 : 0);
      });
    }), ga(a, e.onResize);
    const {
      inlineThemeDisabled: en
    } = e, Ne = z(() => {
      const {
        size: $
      } = e, {
        common: {
          cubicBezierEaseInOut: L
        },
        self: {
          fontWeight: de,
          borderRadius: Xn,
          color: Dn,
          placeholderColor: gn,
          textColor: zn,
          paddingSingle: nn,
          paddingMultiple: vn,
          caretColor: kn,
          colorDisabled: Fe,
          textColorDisabled: Ke,
          placeholderColorDisabled: u,
          colorActive: S,
          boxShadowFocus: A,
          boxShadowActive: W,
          boxShadowHover: U,
          border: K,
          borderFocus: Z,
          borderHover: ne,
          borderActive: ue,
          arrowColor: He,
          arrowColorDisabled: Zt,
          loadingColor: Jt,
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
          boxShadowActiveError: dr,
          boxShadowHoverError: ur,
          borderError: cr,
          borderFocusError: fr,
          borderHoverError: hr,
          borderActiveError: dl,
          // clear
          clearColor: ul,
          clearColorHover: cl,
          clearColorPressed: fl,
          clearSize: hl,
          // arrow
          arrowSize: pl,
          [ce("height", $)]: ml,
          [ce("fontSize", $)]: gl
        }
      } = p.value, gt = De(nn), vt = De(vn);
      return {
        "--n-bezier": L,
        "--n-border": K,
        "--n-border-active": ue,
        "--n-border-focus": Z,
        "--n-border-hover": ne,
        "--n-border-radius": Xn,
        "--n-box-shadow-active": W,
        "--n-box-shadow-focus": A,
        "--n-box-shadow-hover": U,
        "--n-caret-color": kn,
        "--n-color": Dn,
        "--n-color-active": S,
        "--n-color-disabled": Fe,
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
        "--n-placeholder-color-disabled": u,
        "--n-text-color": zn,
        "--n-text-color-disabled": Ke,
        "--n-arrow-color": He,
        "--n-arrow-color-disabled": Zt,
        "--n-loading-color": Jt,
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
        "--n-box-shadow-active-error": dr,
        "--n-box-shadow-hover-error": ur,
        "--n-border-error": cr,
        "--n-border-focus-error": fr,
        "--n-border-hover-error": hr,
        "--n-border-active-error": dl,
        // clear
        "--n-clear-size": hl,
        "--n-clear-color": ul,
        "--n-clear-color-hover": cl,
        "--n-clear-color-pressed": fl,
        // arrow-size
        "--n-arrow-size": pl,
        // font-weight
        "--n-font-weight": de
      };
    }), be = en ? Rn("internal-selection", z(() => e.size[0]), Ne, e) : void 0;
    return {
      mergedTheme: p,
      mergedClearable: _,
      mergedClsPrefix: n,
      rtlEnabled: r,
      patternInputFocused: w,
      filterablePlaceholder: M,
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
      patternInputWrapperRef: d,
      overflowRef: m,
      inputTagElRef: v,
      handleMouseDown: ee,
      handleFocusin: F,
      handleClear: N,
      handleMouseEnter: q,
      handleMouseLeave: J,
      handleDeleteOption: X,
      handlePatternKeyDown: I,
      handlePatternInputInput: re,
      handlePatternInputBlur: Oe,
      handlePatternInputFocus: Be,
      handleMouseEnterCounter: hn,
      handleMouseLeaveCounter: pn,
      handleFocusout: T,
      handleCompositionEnd: ve,
      handleCompositionStart: ge,
      onPopoverUpdateShow: mn,
      focus: Le,
      focusInput: _e,
      blur: me,
      blurInput: un,
      updateCounter: Te,
      getCounter: cn,
      getTail: fn,
      renderLabel: e.renderLabel,
      cssVars: en ? void 0 : Ne,
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
      onRender: d,
      renderTag: c,
      renderLabel: h
    } = this;
    d == null || d();
    const m = i === "responsive", v = typeof i == "number", f = m || v, w = g(jr, null, {
      default: () => g(Zm, {
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
      }) : g($r, {
        size: t,
        closable: !P.disabled,
        disabled: r,
        onClose: () => {
          this.handleDeleteOption(P);
        },
        internalCloseIsButtonTag: !1,
        internalCloseFocusable: !1
      }, {
        default: () => h ? h(P, !0) : Hn(P[p], P, !0)
      })), M = () => (v ? this.selectedOptions.slice(0, i) : this.selectedOptions).map(_), x = o ? g("div", {
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
      }, g($r, {
        size: t,
        ref: "counterRef",
        onMouseenter: this.handleMouseEnterCounter,
        onMouseleave: this.handleMouseLeaveCounter,
        disabled: r
      })) : void 0;
      let B;
      if (v) {
        const P = this.selectedOptions.length - i;
        P > 0 && (B = g("div", {
          class: `${l}-base-selection-tag-wrapper`,
          key: "__counter__"
        }, g($r, {
          size: t,
          ref: "counterRef",
          onMouseenter: this.handleMouseEnterCounter,
          disabled: r
        }, {
          default: () => `+${P}`
        })));
      }
      const y = m ? o ? g(Go, {
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
        default: M,
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
        default: M,
        counter: E
      }) : v && B ? M().concat(B) : M(), C = f ? () => g("div", {
        class: `${l}-base-selection-popover`
      }, m ? M() : this.selectedOptions.map(_)) : void 0, R = f ? Object.assign({
        show: this.showTagsPanel,
        trigger: "hover",
        overlap: !0,
        placement: "top",
        width: "trigger",
        onUpdateShow: this.onPopoverUpdateShow,
        theme: this.mergedTheme.peers.Popover,
        themeOverrides: this.mergedTheme.peerOverrides.Popover
      }, s) : null, V = (this.selected ? !1 : this.active ? !this.pattern && !this.isComposing : !0) ? g("div", {
        class: `${l}-base-selection-placeholder ${l}-base-selection-overlay`
      }, g("div", {
        class: `${l}-base-selection-placeholder__inner`
      }, this.placeholder)) : null, Q = o ? g("div", {
        ref: "patternInputWrapperRef",
        class: `${l}-base-selection-tags`
      }, y, m ? null : x, w) : g("div", {
        ref: "multipleElRef",
        class: `${l}-base-selection-tags`,
        tabindex: r ? void 0 : 0
      }, y, w);
      b = g(On, null, f ? g(Wm, Object.assign({}, R, {
        scrollable: !0,
        style: "max-height: calc(var(--v-target-height) * 6.6);"
      }), {
        trigger: () => Q,
        default: C
      }) : Q, V);
    } else if (o) {
      const p = this.pattern || this.isComposing, _ = this.active ? !p : !this.selected, M = this.active ? !1 : this.selected;
      b = g("div", {
        ref: "patternInputWrapperRef",
        class: `${l}-base-selection-label`,
        title: this.patternInputFocused ? void 0 : Zo(this.label)
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
      })), M ? g("div", {
        class: `${l}-base-selection-label__render-label ${l}-base-selection-overlay`,
        key: "input"
      }, g("div", {
        class: `${l}-base-selection-overlay__wrapper`
      }, c ? c({
        option: this.selectedOption,
        handleClose: () => {
        }
      }) : h ? h(this.selectedOption, !0) : Hn(this.label, this.selectedOption, !0))) : null, _ ? g("div", {
        class: `${l}-base-selection-placeholder ${l}-base-selection-overlay`,
        key: "placeholder"
      }, g("div", {
        class: `${l}-base-selection-overlay__wrapper`
      }, this.filterablePlaceholder)) : null, w);
    } else
      b = g("div", {
        ref: "singleElRef",
        class: `${l}-base-selection-label`,
        tabindex: this.disabled ? void 0 : 0
      }, this.label !== void 0 ? g("div", {
        class: `${l}-base-selection-input`,
        title: Zo(this.label),
        key: "input"
      }, g("div", {
        class: `${l}-base-selection-input__content`
      }, c ? c({
        option: this.selectedOption,
        handleClose: () => {
        }
      }) : h ? h(this.selectedOption, !0) : Hn(this.label, this.selectedOption, !0))) : g("div", {
        class: `${l}-base-selection-placeholder ${l}-base-selection-overlay`,
        key: "placeholder"
      }, g("div", {
        class: `${l}-base-selection-placeholder__inner`
      }, this.placeholder)), w);
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
  common: Fn,
  peers: {
    InternalSelection: ll,
    InternalSelectMenu: rl
  },
  self: tg
}, og = H([G("select", `
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
function Nt(e) {
  return e.type === "group";
}
function sl(e) {
  return e.type === "ignored";
}
function Fr(e, n) {
  try {
    return !!(1 + n.toString().toLowerCase().indexOf(e.trim().toLowerCase()));
  } catch {
    return !1;
  }
}
function ig(e, n) {
  return {
    getIsGroup: Nt,
    getIgnored: sl,
    getKey(r) {
      return Nt(r) ? r.name || r.key || "key-required" : r[e];
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
      if (Nt(l)) {
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
    Nt(o) ? o[t].forEach((i) => {
      r.set(i[n], i);
    }) : r.set(o[n], o);
  }), r;
}
var sg = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_21460_PJDHIKOZPECWZFUP", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.96.4", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-32603f9735-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
const dg = Object.assign(Object.assign({}, xe.props), {
  to: Ze.propTo,
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
}), ug = oe({
  name: "Select",
  props: dg,
  slots: Object,
  setup(e) {
    sg.NODE_ENV !== "production" && qe(() => {
      e.items !== void 0 && on("select", "`items` is deprecated, please use `options` instead."), e.onChange !== void 0 && on("select", "`on-change` is deprecated, please use `on-update:value` instead.");
    });
    const {
      mergedClsPrefixRef: n,
      mergedBorderedRef: t,
      namespaceRef: r,
      inlineThemeDisabled: o
    } = Mn(e), i = xe("Select", "-select", og, rg, e, n), a = D(e.defaultValue), l = le(e, "value"), s = Br(l, a), d = D(!1), c = D(""), h = Vi(e, ["items", "options"]), m = D([]), v = D([]), f = z(() => v.value.concat(m.value).concat(h.value)), w = z(() => {
      const {
        filter: u
      } = e;
      if (u) return u;
      const {
        labelField: S,
        valueField: A
      } = e;
      return (W, U) => {
        if (!U) return !1;
        const K = U[S];
        if (typeof K == "string")
          return Fr(W, K);
        const Z = U[A];
        return typeof Z == "string" ? Fr(W, Z) : typeof Z == "number" ? Fr(W, String(Z)) : !1;
      };
    }), b = z(() => {
      if (e.remote)
        return h.value;
      {
        const {
          value: u
        } = f, {
          value: S
        } = c;
        return !S.length || !e.filterable ? u : ag(u, w.value, S, e.childrenField);
      }
    }), p = z(() => {
      const {
        valueField: u,
        childrenField: S
      } = e, A = ig(u, S);
      return cs(b.value, A);
    }), _ = z(() => lg(f.value, e.valueField, e.childrenField)), M = D(!1), x = Br(le(e, "show"), M), E = D(null), B = D(null), y = D(null), {
      localeRef: C
    } = Xa("Select"), R = z(() => {
      var u;
      return (u = e.placeholder) !== null && u !== void 0 ? u : C.value.placeholder;
    }), O = [], V = D(/* @__PURE__ */ new Map()), Q = z(() => {
      const {
        fallbackOption: u
      } = e;
      if (u === void 0) {
        const {
          labelField: S,
          valueField: A
        } = e;
        return (W) => ({
          [S]: String(W),
          [A]: W
        });
      }
      return u === !1 ? !1 : (S) => Object.assign(u(S), {
        value: S
      });
    });
    function P(u) {
      const S = e.remote, {
        value: A
      } = V, {
        value: W
      } = _, {
        value: U
      } = Q, K = [];
      return u.forEach((Z) => {
        if (W.has(Z))
          K.push(W.get(Z));
        else if (S && A.has(Z))
          K.push(A.get(Z));
        else if (U) {
          const ne = U(Z);
          ne && K.push(ne);
        }
      }), K;
    }
    const F = z(() => {
      if (e.multiple) {
        const {
          value: u
        } = s;
        return Array.isArray(u) ? P(u) : [];
      }
      return null;
    }), T = z(() => {
      const {
        value: u
      } = s;
      return !e.multiple && !Array.isArray(u) ? u === null ? null : P([u])[0] || null : null;
    }), N = Gd(e), {
      mergedSizeRef: q,
      mergedDisabledRef: J,
      mergedStatusRef: ee
    } = N;
    function X(u, S) {
      const {
        onChange: A,
        "onUpdate:value": W,
        onUpdateValue: U
      } = e, {
        nTriggerFormChange: K,
        nTriggerFormInput: Z
      } = N;
      A && we(A, u, S), U && we(U, u, S), W && we(W, u, S), a.value = u, K(), Z();
    }
    function ie(u) {
      const {
        onBlur: S
      } = e, {
        nTriggerFormBlur: A
      } = N;
      S && we(S, u), A();
    }
    function I() {
      const {
        onClear: u
      } = e;
      u && we(u);
    }
    function k(u) {
      const {
        onFocus: S,
        showOnFocus: A
      } = e, {
        nTriggerFormFocus: W
      } = N;
      S && we(S, u), W(), A && Oe();
    }
    function re(u) {
      const {
        onSearch: S
      } = e;
      S && we(S, u);
    }
    function ge(u) {
      const {
        onScroll: S
      } = e;
      S && we(S, u);
    }
    function ve() {
      var u;
      const {
        remote: S,
        multiple: A
      } = e;
      if (S) {
        const {
          value: W
        } = V;
        if (A) {
          const {
            valueField: U
          } = e;
          (u = F.value) === null || u === void 0 || u.forEach((K) => {
            W.set(K[U], K);
          });
        } else {
          const U = T.value;
          U && W.set(U[e.valueField], U);
        }
      }
    }
    function Be(u) {
      const {
        onUpdateShow: S,
        "onUpdate:show": A
      } = e;
      S && we(S, u), A && we(A, u), M.value = u;
    }
    function Oe() {
      J.value || (Be(!0), M.value = !0, e.filterable && nn());
    }
    function me() {
      Be(!1);
    }
    function Le() {
      c.value = "", v.value = O;
    }
    const _e = D(!1);
    function un() {
      e.filterable && (_e.value = !0);
    }
    function Te() {
      e.filterable && (_e.value = !1, x.value || Le());
    }
    function cn() {
      J.value || (x.value ? e.filterable ? nn() : me() : Oe());
    }
    function fn(u) {
      var S, A;
      !((A = (S = y.value) === null || S === void 0 ? void 0 : S.selfRef) === null || A === void 0) && A.contains(u.relatedTarget) || (d.value = !1, ie(u), me());
    }
    function $e(u) {
      k(u), d.value = !0;
    }
    function Ge() {
      d.value = !0;
    }
    function hn(u) {
      var S;
      !((S = E.value) === null || S === void 0) && S.$el.contains(u.relatedTarget) || (d.value = !1, ie(u), me());
    }
    function pn() {
      var u;
      (u = E.value) === null || u === void 0 || u.focus(), me();
    }
    function mn(u) {
      var S;
      x.value && (!((S = E.value) === null || S === void 0) && S.$el.contains(at(u)) || me());
    }
    function en(u) {
      if (!Array.isArray(u)) return [];
      if (Q.value)
        return Array.from(u);
      {
        const {
          remote: S
        } = e, {
          value: A
        } = _;
        if (S) {
          const {
            value: W
          } = V;
          return u.filter((U) => A.has(U) || W.has(U));
        } else
          return u.filter((W) => A.has(W));
      }
    }
    function Ne(u) {
      be(u.rawNode);
    }
    function be(u) {
      if (J.value) return;
      const {
        tag: S,
        remote: A,
        clearFilterAfterSelect: W,
        valueField: U
      } = e;
      if (S && !A) {
        const {
          value: K
        } = v, Z = K[0] || null;
        if (Z) {
          const ne = m.value;
          ne.length ? ne.push(Z) : m.value = [Z], v.value = O;
        }
      }
      if (A && V.value.set(u[U], u), e.multiple) {
        const K = en(s.value), Z = K.findIndex((ne) => ne === u[U]);
        if (~Z) {
          if (K.splice(Z, 1), S && !A) {
            const ne = $(u[U]);
            ~ne && (m.value.splice(ne, 1), W && (c.value = ""));
          }
        } else
          K.push(u[U]), W && (c.value = "");
        X(K, P(K));
      } else {
        if (S && !A) {
          const K = $(u[U]);
          ~K ? m.value = [m.value[K]] : m.value = O;
        }
        zn(), me(), X(u[U], u);
      }
    }
    function $(u) {
      return m.value.findIndex((A) => A[e.valueField] === u);
    }
    function L(u) {
      x.value || Oe();
      const {
        value: S
      } = u.target;
      c.value = S;
      const {
        tag: A,
        remote: W
      } = e;
      if (re(S), A && !W) {
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
          valueField: Z,
          labelField: ne
        } = e;
        h.value.some((ue) => ue[Z] === K[Z] || ue[ne] === K[ne]) || m.value.some((ue) => ue[Z] === K[Z] || ue[ne] === K[ne]) ? v.value = O : v.value = [K];
      }
    }
    function de(u) {
      u.stopPropagation();
      const {
        multiple: S
      } = e;
      !S && e.filterable && me(), I(), S ? X([], []) : X(null, null);
    }
    function Xn(u) {
      !et(u, "action") && !et(u, "empty") && !et(u, "header") && u.preventDefault();
    }
    function Dn(u) {
      ge(u);
    }
    function gn(u) {
      var S, A, W, U, K;
      if (!e.keyboard) {
        u.preventDefault();
        return;
      }
      switch (u.key) {
        case " ":
          if (e.filterable)
            break;
          u.preventDefault();
        case "Enter":
          if (!(!((S = E.value) === null || S === void 0) && S.isComposing)) {
            if (x.value) {
              const Z = (A = y.value) === null || A === void 0 ? void 0 : A.getPendingTmNode();
              Z ? Ne(Z) : e.filterable || (me(), zn());
            } else if (Oe(), e.tag && _e.value) {
              const Z = v.value[0];
              if (Z) {
                const ne = Z[e.valueField], {
                  value: ue
                } = s;
                e.multiple && Array.isArray(ue) && ue.includes(ne) || be(Z);
              }
            }
          }
          u.preventDefault();
          break;
        case "ArrowUp":
          if (u.preventDefault(), e.loading) return;
          x.value && ((W = y.value) === null || W === void 0 || W.prev());
          break;
        case "ArrowDown":
          if (u.preventDefault(), e.loading) return;
          x.value ? (U = y.value) === null || U === void 0 || U.next() : Oe();
          break;
        case "Escape":
          x.value && (Wd(u), me()), (K = E.value) === null || K === void 0 || K.focus();
          break;
      }
    }
    function zn() {
      var u;
      (u = E.value) === null || u === void 0 || u.focus();
    }
    function nn() {
      var u;
      (u = E.value) === null || u === void 0 || u.focusInput();
    }
    function vn() {
      var u;
      x.value && ((u = B.value) === null || u === void 0 || u.syncPosition());
    }
    ve(), Ce(le(e, "options"), ve);
    const kn = {
      focus: () => {
        var u;
        (u = E.value) === null || u === void 0 || u.focus();
      },
      focusInput: () => {
        var u;
        (u = E.value) === null || u === void 0 || u.focusInput();
      },
      blur: () => {
        var u;
        (u = E.value) === null || u === void 0 || u.blur();
      },
      blurInput: () => {
        var u;
        (u = E.value) === null || u === void 0 || u.blurInput();
      }
    }, Fe = z(() => {
      const {
        self: {
          menuBoxShadow: u
        }
      } = i.value;
      return {
        "--n-menu-box-shadow": u
      };
    }), Ke = o ? Rn("select", void 0, Fe, e) : void 0;
    return Object.assign(Object.assign({}, kn), {
      mergedStatus: ee,
      mergedClsPrefix: n,
      mergedBordered: t,
      namespace: r,
      treeMate: p,
      isMounted: Vt(),
      triggerRef: E,
      menuRef: y,
      pattern: c,
      uncontrolledShow: M,
      mergedShow: x,
      adjustedTo: Ze(e),
      uncontrolledValue: a,
      mergedValue: s,
      followerRef: B,
      localizedPlaceholder: R,
      selectedOption: T,
      selectedOptions: F,
      mergedSize: q,
      mergedDisabled: J,
      focused: d,
      activeWithoutMenuOpen: _e,
      inlineThemeDisabled: o,
      onTriggerInputFocus: un,
      onTriggerInputBlur: Te,
      handleTriggerOrMenuResize: vn,
      handleMenuFocus: Ge,
      handleMenuBlur: hn,
      handleMenuTabOut: pn,
      handleTriggerClick: cn,
      handleToggle: Ne,
      handleDeleteOption: be,
      handlePatternInput: L,
      handleClear: de,
      handleTriggerBlur: fn,
      handleTriggerFocus: $e,
      handleKeydown: gn,
      handleMenuAfterLeave: Le,
      handleMenuClickOutside: mn,
      handleMenuScroll: Dn,
      handleMenuKeydown: gn,
      handleMenuMousedown: Xn,
      mergedTheme: i,
      cssVars: o ? void 0 : Fe,
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
        teleportDisabled: this.adjustedTo === Ze.tdkey,
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
            return this.mergedShow || this.displayDirective === "show" ? ((e = this.onRender) === null || e === void 0 || e.call(this), ft(g(Rm, Object.assign({}, this.menuProps, {
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
            }), this.displayDirective === "show" ? [[zi, this.mergedShow], [$t, this.handleMenuClickOutside, void 0, {
              capture: !0
            }]] : [[$t, this.handleMenuClickOutside, void 0, {
              capture: !0
            }]])) : null;
          }
        })
      })]
    }));
  }
}), cg = { class: "lc-select" }, fg = /* @__PURE__ */ oe({
  __name: "Select",
  props: /* @__PURE__ */ Cl({
    options: {
      type: Array
    }
  }, {
    options: () => []
  }),
  setup(e) {
    return (n, t) => (xl(), _l("div", cg, [
      Pl(Ol(ug), Wt({
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
