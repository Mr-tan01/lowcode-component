// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { ref as $, readonly as oo, watch as we, computed as z, onMounted as Te, onBeforeUnmount as $e, createTextVNode as dt, Fragment as mn, Comment as go, defineComponent as re, provide as He, getCurrentInstance as cr, inject as ue, withDirectives as Kn, toRef as ae, h as p, Teleport as wi, nextTick as mt, renderSlot as ur, onActivated as fr, onDeactivated as hr, mergeProps as gt, isVNode as yi, shallowRef as xi, watchEffect as Ge, onBeforeMount as vo, Transition as Tn, vShow as pr, cloneVNode as _i, Text as Pi, mergeDefaults as Ei, openBlock as Oi, createElementBlock as Mi, normalizeClass as Ri, createVNode as Ti, unref as Ii, withCtx as Fi, createElementVNode as xo } from "vue";
import { merge as Jn, upperFirst as Ai, map as ki } from "lodash-es";
let ct = [];
const mr = /* @__PURE__ */ new WeakMap();
function $i() {
  ct.forEach((e) => e(...mr.get(e))), ct = [];
}
function gr(e, ...n) {
  mr.set(e, n), !ct.includes(e) && ct.push(e) === 1 && requestAnimationFrame($i);
}
function Bn(e, n) {
  let { target: t } = e;
  for (; t; ) {
    if (t.dataset && t.dataset[n] !== void 0)
      return !0;
    t = t.parentElement;
  }
  return !1;
}
function Vn(e) {
  return e.composedPath()[0] || null;
}
function Un(e) {
  return typeof e == "string" ? e.endsWith("px") ? Number(e.slice(0, e.length - 2)) : Number(e) : e;
}
function kn(e) {
  if (e != null)
    return typeof e == "number" ? `${e}px` : e.endsWith("px") ? e : `${e}px`;
}
function Ae(e, n) {
  const t = e.trim().split(/\s+/g), o = {
    top: t[0]
  };
  switch (t.length) {
    case 1:
      o.right = t[0], o.bottom = t[0], o.left = t[0];
      break;
    case 2:
      o.right = t[1], o.left = t[1], o.bottom = t[0];
      break;
    case 3:
      o.right = t[1], o.bottom = t[2], o.left = t[1];
      break;
    case 4:
      o.right = t[1], o.bottom = t[2], o.left = t[3];
      break;
    default:
      throw new Error("[seemly/getMargin]:" + e + " is not a valid value.");
  }
  return n === void 0 ? o : o[n];
}
const _o = {
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
}, In = "^\\s*", Fn = "\\s*$", sn = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", dn = "([0-9A-Fa-f])", cn = "([0-9A-Fa-f]{2})", zi = new RegExp(`${In}rgb\\s*\\(${sn},${sn},${sn}\\)${Fn}`), Di = new RegExp(`${In}rgba\\s*\\(${sn},${sn},${sn},${sn}\\)${Fn}`), Bi = new RegExp(`${In}#${dn}${dn}${dn}${Fn}`), Li = new RegExp(`${In}#${cn}${cn}${cn}${Fn}`), Ni = new RegExp(`${In}#${dn}${dn}${dn}${dn}${Fn}`), Hi = new RegExp(`${In}#${cn}${cn}${cn}${cn}${Fn}`);
function Ee(e) {
  return parseInt(e, 16);
}
function pn(e) {
  try {
    let n;
    if (n = Li.exec(e))
      return [Ee(n[1]), Ee(n[2]), Ee(n[3]), 1];
    if (n = zi.exec(e))
      return [Se(n[1]), Se(n[5]), Se(n[9]), 1];
    if (n = Di.exec(e))
      return [
        Se(n[1]),
        Se(n[5]),
        Se(n[9]),
        Ln(n[13])
      ];
    if (n = Bi.exec(e))
      return [
        Ee(n[1] + n[1]),
        Ee(n[2] + n[2]),
        Ee(n[3] + n[3]),
        1
      ];
    if (n = Hi.exec(e))
      return [
        Ee(n[1]),
        Ee(n[2]),
        Ee(n[3]),
        Ln(Ee(n[4]) / 255)
      ];
    if (n = Ni.exec(e))
      return [
        Ee(n[1] + n[1]),
        Ee(n[2] + n[2]),
        Ee(n[3] + n[3]),
        Ln(Ee(n[4] + n[4]) / 255)
      ];
    if (e in _o)
      return pn(_o[e]);
    throw new Error(`[seemly/rgba]: Invalid color value ${e}.`);
  } catch (n) {
    throw n;
  }
}
function Wi(e) {
  return e > 1 ? 1 : e < 0 ? 0 : e;
}
function ro(e, n, t, o) {
  return `rgba(${Se(e)}, ${Se(n)}, ${Se(t)}, ${Wi(o)})`;
}
function Lt(e, n, t, o, r) {
  return Se((e * n * (1 - o) + t * o) / r);
}
function Vi(e, n) {
  Array.isArray(e) || (e = pn(e)), Array.isArray(n) || (n = pn(n));
  const t = e[3], o = n[3], r = Ln(t + o - t * o);
  return ro(Lt(e[0], t, n[0], o, r), Lt(e[1], t, n[1], o, r), Lt(e[2], t, n[2], o, r), r);
}
function le(e, n) {
  const [t, o, r, i = 1] = Array.isArray(e) ? e : pn(e);
  return n.alpha ? ro(t, o, r, n.alpha) : ro(t, o, r, i);
}
function Qn(e, n) {
  const [t, o, r, i = 1] = Array.isArray(e) ? e : pn(e), { lightness: l = 1, alpha: a = 1 } = n;
  return Ui([t * l, o * l, r * l, i * a]);
}
function Ln(e) {
  const n = Math.round(Number(e) * 100) / 100;
  return n > 1 ? 1 : n < 0 ? 0 : n;
}
function Se(e) {
  const n = Math.round(Number(e));
  return n > 255 ? 255 : n < 0 ? 0 : n;
}
function Ui(e) {
  const [n, t, o] = e;
  return 3 in e ? `rgba(${Se(n)}, ${Se(t)}, ${Se(o)}, ${Ln(e[3])})` : `rgba(${Se(n)}, ${Se(t)}, ${Se(o)}, 1)`;
}
function ji(e = 8) {
  return Math.random().toString(16).slice(2, 2 + e);
}
function Po(e) {
  return Array.isArray(e) ? e : [e];
}
const io = {
  STOP: "STOP"
};
function vr(e, n) {
  const t = n(e);
  e.children !== void 0 && t !== io.STOP && e.children.forEach((o) => vr(o, n));
}
function Gi(e, n = {}) {
  const { preserveGroup: t = !1 } = n, o = [], r = t ? (l) => {
    l.isLeaf || (o.push(l.key), i(l.children));
  } : (l) => {
    l.isLeaf || (l.isGroup || o.push(l.key), i(l.children));
  };
  function i(l) {
    l.forEach(r);
  }
  return i(e), o;
}
function Ki(e, n) {
  const { isLeaf: t } = e;
  return t !== void 0 ? t : !n(e);
}
function Xi(e) {
  return e.children;
}
function Yi(e) {
  return e.key;
}
function qi() {
  return !1;
}
function Zi(e, n) {
  const { isLeaf: t } = e;
  return !(t === !1 && !Array.isArray(n(e)));
}
function Ji(e) {
  return e.disabled === !0;
}
function Qi(e, n) {
  return e.isLeaf === !1 && !Array.isArray(n(e));
}
function el(e, n) {
  if (e.isLeaf === !0) {
    const t = n(e);
    if (Array.isArray(t) && t.length > 0)
      return !0;
  }
  return !1;
}
function Nt(e) {
  var n;
  return e == null ? [] : Array.isArray(e) ? e : (n = e.checkedKeys) !== null && n !== void 0 ? n : [];
}
function Ht(e) {
  var n;
  return e == null || Array.isArray(e) ? [] : (n = e.indeterminateKeys) !== null && n !== void 0 ? n : [];
}
function nl(e, n) {
  const t = new Set(e);
  return n.forEach((o) => {
    t.has(o) || t.add(o);
  }), Array.from(t);
}
function tl(e, n) {
  const t = new Set(e);
  return n.forEach((o) => {
    t.has(o) && t.delete(o);
  }), Array.from(t);
}
function ol(e) {
  return (e == null ? void 0 : e.type) === "group";
}
function rl(e) {
  const n = /* @__PURE__ */ new Map();
  return e.forEach((t, o) => {
    n.set(t.key, o);
  }), (t) => {
    var o;
    return (o = n.get(t)) !== null && o !== void 0 ? o : null;
  };
}
class il extends Error {
  constructor() {
    super(), this.message = "SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.";
  }
}
function ll(e, n, t, o) {
  return ut(n.concat(e), t, o, !1);
}
function al(e, n) {
  const t = /* @__PURE__ */ new Set();
  return e.forEach((o) => {
    const r = n.treeNodeMap.get(o);
    if (r !== void 0) {
      let i = r.parent;
      for (; i !== null && !(i.disabled || t.has(i.key)); )
        t.add(i.key), i = i.parent;
    }
  }), t;
}
function sl(e, n, t, o) {
  const r = ut(n, t, o, !1), i = ut(e, t, o, !0), l = al(e, t), a = [];
  return r.forEach((s) => {
    (i.has(s) || l.has(s)) && a.push(s);
  }), a.forEach((s) => r.delete(s)), r;
}
function Wt(e, n) {
  const { checkedKeys: t, keysToCheck: o, keysToUncheck: r, indeterminateKeys: i, cascade: l, leafOnly: a, checkStrategy: s, allowNotLoaded: c } = e;
  if (!l)
    return o !== void 0 ? {
      checkedKeys: nl(t, o),
      indeterminateKeys: Array.from(i)
    } : r !== void 0 ? {
      checkedKeys: tl(t, r),
      indeterminateKeys: Array.from(i)
    } : {
      checkedKeys: Array.from(t),
      indeterminateKeys: Array.from(i)
    };
  const { levelTreeNodeMap: f } = n;
  let m;
  r !== void 0 ? m = sl(r, t, n, c) : o !== void 0 ? m = ll(o, t, n, c) : m = ut(t, n, c, !1);
  const v = s === "parent", g = s === "child" || a, u = m, w = /* @__PURE__ */ new Set(), C = Math.max.apply(null, Array.from(f.keys()));
  for (let h = C; h >= 0; h -= 1) {
    const P = h === 0, I = f.get(h);
    for (const x of I) {
      if (x.isLeaf)
        continue;
      const { key: M, shallowLoaded: B } = x;
      if (g && B && x.children.forEach((E) => {
        !E.disabled && !E.isLeaf && E.shallowLoaded && u.has(E.key) && u.delete(E.key);
      }), x.disabled || !B)
        continue;
      let b = !0, y = !1, R = !0;
      for (const E of x.children) {
        const V = E.key;
        if (!E.disabled) {
          if (R && (R = !1), u.has(V))
            y = !0;
          else if (w.has(V)) {
            y = !0, b = !1;
            break;
          } else if (b = !1, y)
            break;
        }
      }
      b && !R ? (v && x.children.forEach((E) => {
        !E.disabled && u.has(E.key) && u.delete(E.key);
      }), u.add(M)) : y && w.add(M), P && g && u.has(M) && u.delete(M);
    }
  }
  return {
    checkedKeys: Array.from(u),
    indeterminateKeys: Array.from(w)
  };
}
function ut(e, n, t, o) {
  const { treeNodeMap: r, getChildren: i } = n, l = /* @__PURE__ */ new Set(), a = new Set(e);
  return e.forEach((s) => {
    const c = r.get(s);
    c !== void 0 && vr(c, (f) => {
      if (f.disabled)
        return io.STOP;
      const { key: m } = f;
      if (!l.has(m) && (l.add(m), a.add(m), Qi(f.rawNode, i))) {
        if (o)
          return io.STOP;
        if (!t)
          throw new il();
      }
    });
  }), a;
}
function dl(e, { includeGroup: n = !1, includeSelf: t = !0 }, o) {
  var r;
  const i = o.treeNodeMap;
  let l = e == null ? null : (r = i.get(e)) !== null && r !== void 0 ? r : null;
  const a = {
    keyPath: [],
    treeNodePath: [],
    treeNode: l
  };
  if (l != null && l.ignored)
    return a.treeNode = null, a;
  for (; l; )
    !l.ignored && (n || !l.isGroup) && a.treeNodePath.push(l), l = l.parent;
  return a.treeNodePath.reverse(), t || a.treeNodePath.pop(), a.keyPath = a.treeNodePath.map((s) => s.key), a;
}
function cl(e) {
  if (e.length === 0)
    return null;
  const n = e[0];
  return n.isGroup || n.ignored || n.disabled ? n.getNext() : n;
}
function ul(e, n) {
  const t = e.siblings, o = t.length, { index: r } = e;
  return n ? t[(r + 1) % o] : r === t.length - 1 ? null : t[r + 1];
}
function Eo(e, n, { loop: t = !1, includeDisabled: o = !1 } = {}) {
  const r = n === "prev" ? fl : ul, i = {
    reverse: n === "prev"
  };
  let l = !1, a = null;
  function s(c) {
    if (c !== null) {
      if (c === e) {
        if (!l)
          l = !0;
        else if (!e.disabled && !e.isGroup) {
          a = e;
          return;
        }
      } else if ((!c.disabled || o) && !c.ignored && !c.isGroup) {
        a = c;
        return;
      }
      if (c.isGroup) {
        const f = bo(c, i);
        f !== null ? a = f : s(r(c, t));
      } else {
        const f = r(c, !1);
        if (f !== null)
          s(f);
        else {
          const m = hl(c);
          m != null && m.isGroup ? s(r(m, t)) : t && s(r(c, !0));
        }
      }
    }
  }
  return s(e), a;
}
function fl(e, n) {
  const t = e.siblings, o = t.length, { index: r } = e;
  return n ? t[(r - 1 + o) % o] : r === 0 ? null : t[r - 1];
}
function hl(e) {
  return e.parent;
}
function bo(e, n = {}) {
  const { reverse: t = !1 } = n, { children: o } = e;
  if (o) {
    const { length: r } = o, i = t ? r - 1 : 0, l = t ? -1 : r, a = t ? -1 : 1;
    for (let s = i; s !== l; s += a) {
      const c = o[s];
      if (!c.disabled && !c.ignored)
        if (c.isGroup) {
          const f = bo(c, n);
          if (f !== null)
            return f;
        } else
          return c;
    }
  }
  return null;
}
const pl = {
  getChild() {
    return this.ignored ? null : bo(this);
  },
  getParent() {
    const { parent: e } = this;
    return e != null && e.isGroup ? e.getParent() : e;
  },
  getNext(e = {}) {
    return Eo(this, "next", e);
  },
  getPrev(e = {}) {
    return Eo(this, "prev", e);
  }
};
function ml(e, n) {
  const t = n ? new Set(n) : void 0, o = [];
  function r(i) {
    i.forEach((l) => {
      o.push(l), !(l.isLeaf || !l.children || l.ignored) && (l.isGroup || // normal non-leaf node
      t === void 0 || t.has(l.key)) && r(l.children);
    });
  }
  return r(e), o;
}
function gl(e, n) {
  const t = e.key;
  for (; n; ) {
    if (n.key === t)
      return !0;
    n = n.parent;
  }
  return !1;
}
var vl = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_26504_XKHRYLZIHXXZLNIG", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.97.2", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-5a8078c568-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
function br(e, n, t, o, r, i = null, l = 0) {
  const a = [];
  return e.forEach((s, c) => {
    var f;
    vl.NODE_ENV !== "production" && el(s, r) && console.error("[treemate]: node", s, "is invalid");
    const m = Object.create(o);
    if (m.rawNode = s, m.siblings = a, m.level = l, m.index = c, m.isFirstChild = c === 0, m.isLastChild = c + 1 === e.length, m.parent = i, !m.ignored) {
      const v = r(s);
      Array.isArray(v) && (m.children = br(v, n, t, o, r, m, l + 1));
    }
    a.push(m), n.set(m.key, m), t.has(l) || t.set(l, []), (f = t.get(l)) === null || f === void 0 || f.push(m);
  }), a;
}
function bl(e, n = {}) {
  var t;
  const o = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map(), { getDisabled: i = Ji, getIgnored: l = qi, getIsGroup: a = ol, getKey: s = Yi } = n, c = (t = n.getChildren) !== null && t !== void 0 ? t : Xi, f = n.ignoreEmptyChildren ? (x) => {
    const M = c(x);
    return Array.isArray(M) ? M.length ? M : null : M;
  } : c, m = Object.assign({
    get key() {
      return s(this.rawNode);
    },
    get disabled() {
      return i(this.rawNode);
    },
    get isGroup() {
      return a(this.rawNode);
    },
    get isLeaf() {
      return Ki(this.rawNode, f);
    },
    get shallowLoaded() {
      return Zi(this.rawNode, f);
    },
    get ignored() {
      return l(this.rawNode);
    },
    contains(x) {
      return gl(this, x);
    }
  }, pl), v = br(e, o, r, m, f);
  function g(x) {
    if (x == null)
      return null;
    const M = o.get(x);
    return M && !M.isGroup && !M.ignored ? M : null;
  }
  function u(x) {
    if (x == null)
      return null;
    const M = o.get(x);
    return M && !M.ignored ? M : null;
  }
  function w(x, M) {
    const B = u(x);
    return B ? B.getPrev(M) : null;
  }
  function C(x, M) {
    const B = u(x);
    return B ? B.getNext(M) : null;
  }
  function h(x) {
    const M = u(x);
    return M ? M.getParent() : null;
  }
  function P(x) {
    const M = u(x);
    return M ? M.getChild() : null;
  }
  const I = {
    treeNodes: v,
    treeNodeMap: o,
    levelTreeNodeMap: r,
    maxLevel: Math.max(...r.keys()),
    getChildren: f,
    getFlattenedNodes(x) {
      return ml(v, x);
    },
    getNode: g,
    getPrev: w,
    getNext: C,
    getParent: h,
    getChild: P,
    getFirstAvailableNode() {
      return cl(v);
    },
    getPath(x, M = {}) {
      return dl(x, M, I);
    },
    getCheckedKeys(x, M = {}) {
      const { cascade: B = !0, leafOnly: b = !1, checkStrategy: y = "all", allowNotLoaded: R = !1 } = M;
      return Wt({
        checkedKeys: Nt(x),
        indeterminateKeys: Ht(x),
        cascade: B,
        leafOnly: b,
        checkStrategy: y,
        allowNotLoaded: R
      }, I);
    },
    check(x, M, B = {}) {
      const { cascade: b = !0, leafOnly: y = !1, checkStrategy: R = "all", allowNotLoaded: E = !1 } = B;
      return Wt({
        checkedKeys: Nt(M),
        indeterminateKeys: Ht(M),
        keysToCheck: x == null ? [] : Po(x),
        cascade: b,
        leafOnly: y,
        checkStrategy: R,
        allowNotLoaded: E
      }, I);
    },
    uncheck(x, M, B = {}) {
      const { cascade: b = !0, leafOnly: y = !1, checkStrategy: R = "all", allowNotLoaded: E = !1 } = B;
      return Wt({
        checkedKeys: Nt(M),
        indeterminateKeys: Ht(M),
        keysToUncheck: x == null ? [] : Po(x),
        cascade: b,
        leafOnly: y,
        checkStrategy: R,
        allowNotLoaded: E
      }, I);
    },
    getNonLeafKeys(x = {}) {
      return Gi(v, x);
    }
  };
  return I;
}
function at(e) {
  return e.composedPath()[0];
}
const Cl = {
  mousemoveoutside: /* @__PURE__ */ new WeakMap(),
  clickoutside: /* @__PURE__ */ new WeakMap()
};
function Sl(e, n, t) {
  if (e === "mousemoveoutside") {
    const o = (r) => {
      n.contains(at(r)) || t(r);
    };
    return {
      mousemove: o,
      touchstart: o
    };
  } else if (e === "clickoutside") {
    let o = !1;
    const r = (l) => {
      o = !n.contains(at(l));
    }, i = (l) => {
      o && (n.contains(at(l)) || t(l));
    };
    return {
      mousedown: r,
      mouseup: i,
      touchstart: r,
      touchend: i
    };
  }
  return console.error(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    `[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`
  ), {};
}
function Cr(e, n, t) {
  const o = Cl[e];
  let r = o.get(n);
  r === void 0 && o.set(n, r = /* @__PURE__ */ new WeakMap());
  let i = r.get(t);
  return i === void 0 && r.set(t, i = Sl(e, n, t)), i;
}
function wl(e, n, t, o) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const r = Cr(e, n, t);
    return Object.keys(r).forEach((i) => {
      _e(i, document, r[i], o);
    }), !0;
  }
  return !1;
}
function yl(e, n, t, o) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const r = Cr(e, n, t);
    return Object.keys(r).forEach((i) => {
      he(i, document, r[i], o);
    }), !0;
  }
  return !1;
}
function xl() {
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
  function o() {
    e.set(this, !0), n.set(this, !0);
  }
  function r(b, y, R) {
    const E = b[y];
    return b[y] = function() {
      return R.apply(b, arguments), E.apply(b, arguments);
    }, b;
  }
  function i(b, y) {
    b[y] = Event.prototype[y];
  }
  const l = /* @__PURE__ */ new WeakMap(), a = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
  function s() {
    var b;
    return (b = l.get(this)) !== null && b !== void 0 ? b : null;
  }
  function c(b, y) {
    a !== void 0 && Object.defineProperty(b, "currentTarget", {
      configurable: !0,
      enumerable: !0,
      get: y ?? a.get
    });
  }
  const f = {
    bubble: {},
    capture: {}
  }, m = {};
  function v() {
    const b = function(y) {
      const { type: R, eventPhase: E, bubbles: V } = y, Q = at(y);
      if (E === 2)
        return;
      const _ = E === 1 ? "capture" : "bubble";
      let k = Q;
      const O = [];
      for (; k === null && (k = window), O.push(k), k !== window; )
        k = k.parentNode || null;
      const N = f.capture[R], q = f.bubble[R];
      if (r(y, "stopPropagation", t), r(y, "stopImmediatePropagation", o), c(y, s), _ === "capture") {
        if (N === void 0)
          return;
        for (let J = O.length - 1; J >= 0 && !e.has(y); --J) {
          const ee = O[J], X = N.get(ee);
          if (X !== void 0) {
            l.set(y, ee);
            for (const ie of X) {
              if (n.has(y))
                break;
              ie(y);
            }
          }
          if (J === 0 && !V && q !== void 0) {
            const ie = q.get(ee);
            if (ie !== void 0)
              for (const F of ie) {
                if (n.has(y))
                  break;
                F(y);
              }
          }
        }
      } else if (_ === "bubble") {
        if (q === void 0)
          return;
        for (let J = 0; J < O.length && !e.has(y); ++J) {
          const ee = O[J], X = q.get(ee);
          if (X !== void 0) {
            l.set(y, ee);
            for (const ie of X) {
              if (n.has(y))
                break;
              ie(y);
            }
          }
        }
      }
      i(y, "stopPropagation"), i(y, "stopImmediatePropagation"), c(y);
    };
    return b.displayName = "evtdUnifiedHandler", b;
  }
  function g() {
    const b = function(y) {
      const { type: R, eventPhase: E } = y;
      if (E !== 2)
        return;
      const V = m[R];
      V !== void 0 && V.forEach((Q) => Q(y));
    };
    return b.displayName = "evtdUnifiedWindowEventHandler", b;
  }
  const u = v(), w = g();
  function C(b, y) {
    const R = f[b];
    return R[y] === void 0 && (R[y] = /* @__PURE__ */ new Map(), window.addEventListener(y, u, b === "capture")), R[y];
  }
  function h(b) {
    return m[b] === void 0 && (m[b] = /* @__PURE__ */ new Set(), window.addEventListener(b, w)), m[b];
  }
  function P(b, y) {
    let R = b.get(y);
    return R === void 0 && b.set(y, R = /* @__PURE__ */ new Set()), R;
  }
  function I(b, y, R, E) {
    const V = f[y][R];
    if (V !== void 0) {
      const Q = V.get(b);
      if (Q !== void 0 && Q.has(E))
        return !0;
    }
    return !1;
  }
  function x(b, y) {
    const R = m[b];
    return !!(R !== void 0 && R.has(y));
  }
  function M(b, y, R, E) {
    let V;
    if (typeof E == "object" && E.once === !0 ? V = (N) => {
      B(b, y, V, E), R(N);
    } : V = R, wl(b, y, V, E))
      return;
    const _ = E === !0 || typeof E == "object" && E.capture === !0 ? "capture" : "bubble", k = C(_, b), O = P(k, y);
    if (O.has(V) || O.add(V), y === window) {
      const N = h(b);
      N.has(V) || N.add(V);
    }
  }
  function B(b, y, R, E) {
    if (yl(b, y, R, E))
      return;
    const Q = E === !0 || typeof E == "object" && E.capture === !0, _ = Q ? "capture" : "bubble", k = C(_, b), O = P(k, y);
    if (y === window && !I(y, Q ? "bubble" : "capture", b, R) && x(b, R)) {
      const q = m[b];
      q.delete(R), q.size === 0 && (window.removeEventListener(b, w), m[b] = void 0);
    }
    O.has(R) && O.delete(R), O.size === 0 && k.delete(y), k.size === 0 && (window.removeEventListener(b, u, _ === "capture"), f[_][b] = void 0);
  }
  return {
    on: M,
    off: B
  };
}
const { on: _e, off: he } = xl(), _n = "@@mmoContext", _l = {
  mounted(e, { value: n }) {
    e[_n] = {
      handler: void 0
    }, typeof n == "function" && (e[_n].handler = n, _e("mousemoveoutside", e, n));
  },
  updated(e, { value: n }) {
    const t = e[_n];
    typeof n == "function" ? t.handler ? t.handler !== n && (he("mousemoveoutside", e, t.handler), t.handler = n, _e("mousemoveoutside", e, n)) : (e[_n].handler = n, _e("mousemoveoutside", e, n)) : t.handler && (he("mousemoveoutside", e, t.handler), t.handler = void 0);
  },
  unmounted(e) {
    const { handler: n } = e[_n];
    n && he("mousemoveoutside", e, n), e[_n].handler = void 0;
  }
}, Pn = "@@coContext", ft = {
  mounted(e, { value: n, modifiers: t }) {
    e[Pn] = {
      handler: void 0
    }, typeof n == "function" && (e[Pn].handler = n, _e("clickoutside", e, n, {
      capture: t.capture
    }));
  },
  updated(e, { value: n, modifiers: t }) {
    const o = e[Pn];
    typeof n == "function" ? o.handler ? o.handler !== n && (he("clickoutside", e, o.handler, {
      capture: t.capture
    }), o.handler = n, _e("clickoutside", e, n, {
      capture: t.capture
    })) : (e[Pn].handler = n, _e("clickoutside", e, n, {
      capture: t.capture
    })) : o.handler && (he("clickoutside", e, o.handler, {
      capture: t.capture
    }), o.handler = void 0);
  },
  unmounted(e, { modifiers: n }) {
    const { handler: t } = e[Pn];
    t && he("clickoutside", e, t, {
      capture: n.capture
    }), e[Pn].handler = void 0;
  }
};
function Pl(e, n) {
  console.error(`[vdirs/${e}]: ${n}`);
}
class El {
  constructor() {
    this.elementZIndex = /* @__PURE__ */ new Map(), this.nextZIndex = 2e3;
  }
  get elementCount() {
    return this.elementZIndex.size;
  }
  ensureZIndex(n, t) {
    const { elementZIndex: o } = this;
    if (t !== void 0) {
      n.style.zIndex = `${t}`, o.delete(n);
      return;
    }
    const { nextZIndex: r } = this;
    o.has(n) && o.get(n) + 1 === this.nextZIndex || (n.style.zIndex = `${r}`, o.set(n, r), this.nextZIndex = r + 1, this.squashState());
  }
  unregister(n, t) {
    const { elementZIndex: o } = this;
    o.has(n) ? o.delete(n) : t === void 0 && Pl("z-index-manager/unregister-element", "Element not found when unregistering."), this.squashState();
  }
  squashState() {
    const { elementCount: n } = this;
    n || (this.nextZIndex = 2e3), this.nextZIndex - n > 2500 && this.rearrange();
  }
  rearrange() {
    const n = Array.from(this.elementZIndex.entries());
    n.sort((t, o) => t[1] - o[1]), this.nextZIndex = 2e3, n.forEach((t) => {
      const o = t[0], r = this.nextZIndex++;
      `${r}` !== o.style.zIndex && (o.style.zIndex = `${r}`);
    });
  }
}
const Vt = new El(), En = "@@ziContext", Sr = {
  mounted(e, n) {
    const { value: t = {} } = n, { zIndex: o, enabled: r } = t;
    e[En] = {
      enabled: !!r,
      initialized: !1
    }, r && (Vt.ensureZIndex(e, o), e[En].initialized = !0);
  },
  updated(e, n) {
    const { value: t = {} } = n, { zIndex: o, enabled: r } = t, i = e[En].enabled;
    r && !i && (Vt.ensureZIndex(e, o), e[En].initialized = !0), e[En].enabled = !!r;
  },
  unmounted(e, n) {
    if (!e[En].initialized)
      return;
    const { value: t = {} } = n, { zIndex: o } = t;
    Vt.unregister(e, o);
  }
};
function Ol(e) {
  const n = $(!!e.value);
  if (n.value)
    return oo(n);
  const t = we(e, (o) => {
    o && (n.value = !0, t());
  });
  return oo(n);
}
function Re(e) {
  const n = z(e), t = $(n.value);
  return we(n, (o) => {
    t.value = o;
  }), typeof e == "function" ? t : {
    __v_isRef: !0,
    get value() {
      return t.value;
    },
    set value(o) {
      e.set(o);
    }
  };
}
const Ml = typeof window < "u";
let Mn, Nn;
const Rl = () => {
  var e, n;
  Mn = Ml ? (n = (e = document) === null || e === void 0 ? void 0 : e.fonts) === null || n === void 0 ? void 0 : n.ready : void 0, Nn = !1, Mn !== void 0 ? Mn.then(() => {
    Nn = !0;
  }) : Nn = !0;
};
Rl();
function Tl(e) {
  if (Nn)
    return;
  let n = !1;
  Te(() => {
    Nn || Mn == null || Mn.then(() => {
      n || e();
    });
  }), $e(() => {
    n = !0;
  });
}
function lo(e, n) {
  return we(e, (t) => {
    t !== void 0 && (n.value = t);
  }), z(() => e.value === void 0 ? n.value : e.value);
}
function vt() {
  const e = $(!1);
  return Te(() => {
    e.value = !0;
  }), oo(e);
}
function wr(e, n) {
  return z(() => {
    for (const t of n)
      if (e[t] !== void 0)
        return e[t];
    return e[n[n.length - 1]];
  });
}
const Il = (typeof window > "u" ? !1 : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
!window.MSStream;
function Fl() {
  return Il;
}
function ao(e, n, t = "default") {
  const o = n[t];
  if (o === void 0)
    throw new Error(`[vueuc/${e}]: slot[${t}] is empty.`);
  return o();
}
function so(e, n = !0, t = []) {
  return e.forEach((o) => {
    if (o !== null) {
      if (typeof o != "object") {
        (typeof o == "string" || typeof o == "number") && t.push(dt(String(o)));
        return;
      }
      if (Array.isArray(o)) {
        so(o, n, t);
        return;
      }
      if (o.type === mn) {
        if (o.children === null)
          return;
        Array.isArray(o.children) && so(o.children, n, t);
      } else o.type !== go && t.push(o);
    }
  }), t;
}
function Oo(e, n, t = "default") {
  const o = n[t];
  if (o === void 0)
    throw new Error(`[vueuc/${e}]: slot[${t}] is empty.`);
  const r = so(o());
  if (r.length === 1)
    return r[0];
  throw new Error(`[vueuc/${e}]: slot[${t}] should have exactly one child.`);
}
let qe = null;
function yr() {
  if (qe === null && (qe = document.getElementById("v-binder-view-measurer"), qe === null)) {
    qe = document.createElement("div"), qe.id = "v-binder-view-measurer";
    const { style: e } = qe;
    e.position = "fixed", e.left = "0", e.right = "0", e.top = "0", e.bottom = "0", e.pointerEvents = "none", e.visibility = "hidden", document.body.appendChild(qe);
  }
  return qe.getBoundingClientRect();
}
function Al(e, n) {
  const t = yr();
  return {
    top: n,
    left: e,
    height: 0,
    width: 0,
    right: t.width - e,
    bottom: t.height - n
  };
}
function Ut(e) {
  const n = e.getBoundingClientRect(), t = yr();
  return {
    left: n.left - t.left,
    top: n.top - t.top,
    bottom: t.height + t.top - n.bottom,
    right: t.width + t.left - n.right,
    width: n.width,
    height: n.height
  };
}
function kl(e) {
  return e.nodeType === 9 ? null : e.parentNode;
}
function xr(e) {
  if (e === null)
    return null;
  const n = kl(e);
  if (n === null)
    return null;
  if (n.nodeType === 9)
    return document;
  if (n.nodeType === 1) {
    const { overflow: t, overflowX: o, overflowY: r } = getComputedStyle(n);
    if (/(auto|scroll|overlay)/.test(t + r + o))
      return n;
  }
  return xr(n);
}
const _r = re({
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
    He("VBinder", (n = cr()) === null || n === void 0 ? void 0 : n.proxy);
    const t = ue("VBinder", null), o = $(null), r = (h) => {
      o.value = h, t && e.syncTargetWithParent && t.setTargetRef(h);
    };
    let i = [];
    const l = () => {
      let h = o.value;
      for (; h = xr(h), h !== null; )
        i.push(h);
      for (const P of i)
        _e("scroll", P, m, !0);
    }, a = () => {
      for (const h of i)
        he("scroll", h, m, !0);
      i = [];
    }, s = /* @__PURE__ */ new Set(), c = (h) => {
      s.size === 0 && l(), s.has(h) || s.add(h);
    }, f = (h) => {
      s.has(h) && s.delete(h), s.size === 0 && a();
    }, m = () => {
      gr(v);
    }, v = () => {
      s.forEach((h) => h());
    }, g = /* @__PURE__ */ new Set(), u = (h) => {
      g.size === 0 && _e("resize", window, C), g.has(h) || g.add(h);
    }, w = (h) => {
      g.has(h) && g.delete(h), g.size === 0 && he("resize", window, C);
    }, C = () => {
      g.forEach((h) => h());
    };
    return $e(() => {
      he("resize", window, C), a();
    }), {
      targetRef: o,
      setTargetRef: r,
      addScrollListener: c,
      removeScrollListener: f,
      addResizeListener: u,
      removeResizeListener: w
    };
  },
  render() {
    return ao("binder", this.$slots);
  }
}), Pr = re({
  name: "Target",
  setup() {
    const { setTargetRef: e, syncTarget: n } = ue("VBinder");
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
    return e ? Kn(Oo("follower", this.$slots), [
      [n]
    ]) : Oo("follower", this.$slots);
  }
}), $l = "@css-render/vue3-ssr";
function zl(e, n) {
  return `<style cssr-id="${e}">
${n}
</style>`;
}
function Dl(e, n, t) {
  const { styles: o, ids: r } = t;
  r.has(e) || o !== null && (r.add(e), o.push(zl(e, n)));
}
const Bl = typeof document < "u";
function gn() {
  if (Bl)
    return;
  const e = ue($l, null);
  if (e !== null)
    return {
      adapter: (n, t) => Dl(n, t, e),
      context: e
    };
}
function Mo(e, n) {
  console.error(`[vueuc/${e}]: ${n}`);
}
function Ll(e) {
  let n = 0;
  for (let t = 0; t < e.length; ++t)
    e[t] === "&" && ++n;
  return n;
}
const Er = /\s*,(?![^(]*\))\s*/g, Nl = /\s+/g;
function Hl(e, n) {
  const t = [];
  return n.split(Er).forEach((o) => {
    let r = Ll(o);
    if (r) {
      if (r === 1) {
        e.forEach((l) => {
          t.push(o.replace("&", l));
        });
        return;
      }
    } else {
      e.forEach((l) => {
        t.push(
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          (l && l + " ") + o
        );
      });
      return;
    }
    let i = [
      o
    ];
    for (; r--; ) {
      const l = [];
      i.forEach((a) => {
        e.forEach((s) => {
          l.push(a.replace("&", s));
        });
      }), i = l;
    }
    i.forEach((l) => t.push(l));
  }), t;
}
function Wl(e, n) {
  const t = [];
  return n.split(Er).forEach((o) => {
    e.forEach((r) => {
      t.push((r && r + " ") + o);
    });
  }), t;
}
function Vl(e) {
  let n = [""];
  return e.forEach((t) => {
    t = t && t.trim(), // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    t && (t.includes("&") ? n = Hl(n, t) : n = Wl(n, t));
  }), n.join(", ").replace(Nl, " ");
}
function Ro(e) {
  if (!e)
    return;
  const n = e.parentElement;
  n && n.removeChild(e);
}
function bt(e, n) {
  return (n ?? document.head).querySelector(`style[cssr-id="${e}"]`);
}
function Ul(e) {
  const n = document.createElement("style");
  return n.setAttribute("cssr-id", e), n;
}
function et(e) {
  return e ? /^\s*@(s|m)/.test(e) : !1;
}
const jl = /[A-Z]/g;
function Or(e) {
  return e.replace(jl, (n) => "-" + n.toLowerCase());
}
function Gl(e, n = "  ") {
  return typeof e == "object" && e !== null ? ` {
` + Object.entries(e).map((t) => n + `  ${Or(t[0])}: ${t[1]};`).join(`
`) + `
` + n + "}" : `: ${e};`;
}
function Kl(e, n, t) {
  return typeof e == "function" ? e({
    context: n.context,
    props: t
  }) : e;
}
function To(e, n, t, o) {
  if (!n)
    return "";
  const r = Kl(n, t, o);
  if (!r)
    return "";
  if (typeof r == "string")
    return `${e} {
${r}
}`;
  const i = Object.keys(r);
  if (i.length === 0)
    return t.config.keepEmptyBlock ? e + ` {
}` : "";
  const l = e ? [
    e + " {"
  ] : [];
  return i.forEach((a) => {
    const s = r[a];
    if (a === "raw") {
      l.push(`
` + s + `
`);
      return;
    }
    a = Or(a), s != null && l.push(`  ${a}${Gl(s)}`);
  }), e && l.push("}"), l.join(`
`);
}
function co(e, n, t) {
  e && e.forEach((o) => {
    if (Array.isArray(o))
      co(o, n, t);
    else if (typeof o == "function") {
      const r = o(n);
      Array.isArray(r) ? co(r, n, t) : r && t(r);
    } else o && t(o);
  });
}
function Mr(e, n, t, o, r) {
  const i = e.$;
  let l = "";
  if (!i || typeof i == "string")
    et(i) ? l = i : n.push(i);
  else if (typeof i == "function") {
    const c = i({
      context: o.context,
      props: r
    });
    et(c) ? l = c : n.push(c);
  } else if (i.before && i.before(o.context), !i.$ || typeof i.$ == "string")
    et(i.$) ? l = i.$ : n.push(i.$);
  else if (i.$) {
    const c = i.$({
      context: o.context,
      props: r
    });
    et(c) ? l = c : n.push(c);
  }
  const a = Vl(n), s = To(a, e.props, o, r);
  l ? t.push(`${l} {`) : s.length && t.push(s), e.children && co(e.children, {
    context: o.context,
    props: r
  }, (c) => {
    if (typeof c == "string") {
      const f = To(a, { raw: c }, o, r);
      t.push(f);
    } else
      Mr(c, n, t, o, r);
  }), n.pop(), l && t.push("}"), i && i.after && i.after(o.context);
}
function Xl(e, n, t) {
  const o = [];
  return Mr(e, [], o, n, t), o.join(`

`);
}
function uo(e) {
  for (var n = 0, t, o = 0, r = e.length; r >= 4; ++o, r -= 4)
    t = e.charCodeAt(o) & 255 | (e.charCodeAt(++o) & 255) << 8 | (e.charCodeAt(++o) & 255) << 16 | (e.charCodeAt(++o) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, n = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16);
  switch (r) {
    case 3:
      n ^= (e.charCodeAt(o + 2) & 255) << 16;
    case 2:
      n ^= (e.charCodeAt(o + 1) & 255) << 8;
    case 1:
      n ^= e.charCodeAt(o) & 255, n = /* Math.imul(h, m): */
      (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16);
  }
  return n ^= n >>> 13, n = /* Math.imul(h, m): */
  (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), ((n ^ n >>> 15) >>> 0).toString(36);
}
typeof window < "u" && (window.__cssrContext = {});
function Yl(e, n, t, o) {
  const { els: r } = n;
  if (t === void 0)
    r.forEach(Ro), n.els = [];
  else {
    const i = bt(t, o);
    i && r.includes(i) && (Ro(i), n.els = r.filter((l) => l !== i));
  }
}
function Io(e, n) {
  e.push(n);
}
function ql(e, n, t, o, r, i, l, a, s) {
  let c;
  if (t === void 0 && (c = n.render(o), t = uo(c)), s) {
    s.adapter(t, c ?? n.render(o));
    return;
  }
  a === void 0 && (a = document.head);
  const f = bt(t, a);
  if (f !== null && !i)
    return f;
  const m = f ?? Ul(t);
  if (c === void 0 && (c = n.render(o)), m.textContent = c, f !== null)
    return f;
  if (l) {
    const v = a.querySelector(`meta[name="${l}"]`);
    if (v)
      return a.insertBefore(m, v), Io(n.els, m), m;
  }
  return r ? a.insertBefore(m, a.querySelector("style, link")) : a.appendChild(m), Io(n.els, m), m;
}
function Zl(e) {
  return Xl(this, this.instance, e);
}
function Jl(e = {}) {
  const { id: n, ssr: t, props: o, head: r = !1, force: i = !1, anchorMetaName: l, parent: a } = e;
  return ql(this.instance, this, n, o, r, i, l, a, t);
}
function Ql(e = {}) {
  const { id: n, parent: t } = e;
  Yl(this.instance, this, n, t);
}
const nt = function(e, n, t, o) {
  return {
    instance: e,
    $: n,
    props: t,
    children: o,
    els: [],
    render: Zl,
    mount: Jl,
    unmount: Ql
  };
}, ea = function(e, n, t, o) {
  return Array.isArray(n) ? nt(e, { $: null }, null, n) : Array.isArray(t) ? nt(e, n, null, t) : Array.isArray(o) ? nt(e, n, t, o) : nt(e, n, t, null);
};
function Rr(e = {}) {
  const n = {
    c: (...t) => ea(n, ...t),
    use: (t, ...o) => t.install(n, ...o),
    find: bt,
    context: {},
    config: e
  };
  return n;
}
function na(e, n) {
  if (e === void 0)
    return !1;
  if (n) {
    const { context: { ids: t } } = n;
    return t.has(e);
  }
  return bt(e) !== null;
}
const { c: Je } = Rr(), Co = "vueuc-style";
function Fo(e) {
  return e & -e;
}
class Tr {
  /**
   * @param l length of the array
   * @param min min value of the array
   */
  constructor(n, t) {
    this.l = n, this.min = t;
    const o = new Array(n + 1);
    for (let r = 0; r < n + 1; ++r)
      o[r] = 0;
    this.ft = o;
  }
  /**
   * Add arr[i] by n, start from 0
   * @param i the index of the element to be added
   * @param n the value to be added
   */
  add(n, t) {
    if (t === 0)
      return;
    const { l: o, ft: r } = this;
    for (n += 1; n <= o; )
      r[n] += t, n += Fo(n);
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
    const { ft: t, min: o, l: r } = this;
    if (n > r)
      throw new Error("[FinweckTree.sum]: `i` is larger than length.");
    let i = n * o;
    for (; n > 0; )
      i += t[n], n -= Fo(n);
    return i;
  }
  /**
   * Get the largest count of head elements whose sum are <= threshold
   * @param threshold
   * @returns the largest count of head elements whose sum are <= threshold
   */
  getBound(n) {
    let t = 0, o = this.l;
    for (; o > t; ) {
      const r = Math.floor((t + o) / 2), i = this.sum(r);
      if (i > n) {
        o = r;
        continue;
      } else if (i < n) {
        if (t === r)
          return this.sum(t + 1) <= n ? t + 1 : r;
        t = r;
      } else
        return r;
    }
    return t;
  }
}
function Ao(e) {
  return typeof e == "string" ? document.querySelector(e) : e();
}
const ta = re({
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
      showTeleport: Ol(ae(e, "show")),
      mergedTo: z(() => {
        const { to: n } = e;
        return n ?? "body";
      })
    };
  },
  render() {
    return this.showTeleport ? this.disabled ? ao("lazy-teleport", this.$slots) : p(wi, {
      disabled: this.disabled,
      to: this.mergedTo
    }, ao("lazy-teleport", this.$slots)) : null;
  }
}), tt = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, ko = {
  start: "end",
  center: "center",
  end: "start"
}, jt = {
  top: "height",
  bottom: "height",
  left: "width",
  right: "width"
}, oa = {
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
}, ra = {
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
}, ia = {
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
}, zo = {
  top: "end",
  bottom: "start",
  left: "end",
  right: "start"
};
function la(e, n, t, o, r, i) {
  if (!r || i)
    return { placement: e, top: 0, left: 0 };
  const [l, a] = e.split("-");
  let s = a ?? "center", c = {
    top: 0,
    left: 0
  };
  const f = (g, u, w) => {
    let C = 0, h = 0;
    const P = t[g] - n[u] - n[g];
    return P > 0 && o && (w ? h = $o[u] ? P : -P : C = $o[u] ? P : -P), {
      left: C,
      top: h
    };
  }, m = l === "left" || l === "right";
  if (s !== "center") {
    const g = ia[e], u = tt[g], w = jt[g];
    if (t[w] > n[w]) {
      if (
        // current space is not enough
        // ----------[ target ]---------|
        // -------[     follower        ]
        n[g] + n[w] < t[w]
      ) {
        const C = (t[w] - n[w]) / 2;
        n[g] < C || n[u] < C ? n[g] < n[u] ? (s = ko[a], c = f(w, u, m)) : c = f(w, g, m) : s = "center";
      }
    } else t[w] < n[w] && n[u] < 0 && // opposite align has larger space
    // ------------[   target   ]
    // ----------------[follower]
    n[g] > n[u] && (s = ko[a]);
  } else {
    const g = l === "bottom" || l === "top" ? "left" : "top", u = tt[g], w = jt[g], C = (t[w] - n[w]) / 2;
    // center is not enough
    // ----------- [ target ]--|
    // -------[     follower     ]
    (n[g] < C || n[u] < C) && (n[g] > n[u] ? (s = zo[g], c = f(w, g, m)) : (s = zo[u], c = f(w, u, m)));
  }
  let v = l;
  return (
    // space is not enough
    n[l] < t[jt[l]] && // opposite position's space is larger
    n[l] < n[tt[l]] && (v = tt[l]), {
      placement: s !== "center" ? `${v}-${s}` : v,
      left: c.left,
      top: c.top
    }
  );
}
function aa(e, n) {
  return n ? ra[e] : oa[e];
}
function sa(e, n, t, o, r, i) {
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
        top: `${Math.round(t.top - n.top + t.height + o)}px`,
        left: `${Math.round(t.left - n.left + r)}px`,
        transform: ""
      };
    case "bottom-end":
      return {
        top: `${Math.round(t.top - n.top + t.height + o)}px`,
        left: `${Math.round(t.left - n.left + t.width + r)}px`,
        transform: "translateX(-100%)"
      };
    case "top-start":
      return {
        top: `${Math.round(t.top - n.top + o)}px`,
        left: `${Math.round(t.left - n.left + r)}px`,
        transform: "translateY(-100%)"
      };
    case "top-end":
      return {
        top: `${Math.round(t.top - n.top + o)}px`,
        left: `${Math.round(t.left - n.left + t.width + r)}px`,
        transform: "translateX(-100%) translateY(-100%)"
      };
    case "right-start":
      return {
        top: `${Math.round(t.top - n.top + o)}px`,
        left: `${Math.round(t.left - n.left + t.width + r)}px`,
        transform: ""
      };
    case "right-end":
      return {
        top: `${Math.round(t.top - n.top + t.height + o)}px`,
        left: `${Math.round(t.left - n.left + t.width + r)}px`,
        transform: "translateY(-100%)"
      };
    case "left-start":
      return {
        top: `${Math.round(t.top - n.top + o)}px`,
        left: `${Math.round(t.left - n.left + r)}px`,
        transform: "translateX(-100%)"
      };
    case "left-end":
      return {
        top: `${Math.round(t.top - n.top + t.height + o)}px`,
        left: `${Math.round(t.left - n.left + r)}px`,
        transform: "translateX(-100%) translateY(-100%)"
      };
    case "top":
      return {
        top: `${Math.round(t.top - n.top + o)}px`,
        left: `${Math.round(t.left - n.left + t.width / 2 + r)}px`,
        transform: "translateY(-100%) translateX(-50%)"
      };
    case "right":
      return {
        top: `${Math.round(t.top - n.top + t.height / 2 + o)}px`,
        left: `${Math.round(t.left - n.left + t.width + r)}px`,
        transform: "translateY(-50%)"
      };
    case "left":
      return {
        top: `${Math.round(t.top - n.top + t.height / 2 + o)}px`,
        left: `${Math.round(t.left - n.left + r)}px`,
        transform: "translateY(-50%) translateX(-100%)"
      };
    case "bottom":
    default:
      return {
        top: `${Math.round(t.top - n.top + t.height + o)}px`,
        left: `${Math.round(t.left - n.left + t.width / 2 + r)}px`,
        transform: "translateX(-50%)"
      };
  }
}
const da = Je([
  Je(".v-binder-follower-container", {
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    height: "0",
    pointerEvents: "none",
    zIndex: "auto"
  }),
  Je(".v-binder-follower-content", {
    position: "absolute",
    zIndex: "auto"
  }, [
    Je("> *", {
      pointerEvents: "all"
    })
  ])
]), Ir = re({
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
    const n = ue("VBinder"), t = Re(() => e.enabled !== void 0 ? e.enabled : e.show), o = $(null), r = $(null), i = () => {
      const { syncTrigger: v } = e;
      v.includes("scroll") && n.addScrollListener(s), v.includes("resize") && n.addResizeListener(s);
    }, l = () => {
      n.removeScrollListener(s), n.removeResizeListener(s);
    };
    Te(() => {
      t.value && (s(), i());
    });
    const a = gn();
    da.mount({
      id: "vueuc/binder",
      head: !0,
      anchorMetaName: Co,
      ssr: a
    }), $e(() => {
      l();
    }), Tl(() => {
      t.value && s();
    });
    const s = () => {
      if (!t.value)
        return;
      const v = o.value;
      if (v === null)
        return;
      const g = n.targetRef, { x: u, y: w, overlap: C } = e, h = u !== void 0 && w !== void 0 ? Al(u, w) : Ut(g);
      v.style.setProperty("--v-target-width", `${Math.round(h.width)}px`), v.style.setProperty("--v-target-height", `${Math.round(h.height)}px`);
      const { width: P, minWidth: I, placement: x, internalShift: M, flip: B } = e;
      v.setAttribute("v-placement", x), C ? v.setAttribute("v-overlap", "") : v.removeAttribute("v-overlap");
      const { style: b } = v;
      P === "target" ? b.width = `${h.width}px` : P !== void 0 ? b.width = P : b.width = "", I === "target" ? b.minWidth = `${h.width}px` : I !== void 0 ? b.minWidth = I : b.minWidth = "";
      const y = Ut(v), R = Ut(r.value), { left: E, top: V, placement: Q } = la(x, h, y, M, B, C), _ = aa(Q, C), { left: k, top: O, transform: N } = sa(Q, R, h, V, E, C);
      v.setAttribute("v-placement", Q), v.style.setProperty("--v-offset-left", `${Math.round(E)}px`), v.style.setProperty("--v-offset-top", `${Math.round(V)}px`), v.style.transform = `translateX(${k}) translateY(${O}) ${N}`, v.style.setProperty("--v-transform-origin", _), v.style.transformOrigin = _;
    };
    we(t, (v) => {
      v ? (i(), c()) : l();
    });
    const c = () => {
      mt().then(s).catch((v) => console.error(v));
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
    ].forEach((v) => {
      we(ae(e, v), s);
    }), ["teleportDisabled"].forEach((v) => {
      we(ae(e, v), c);
    }), we(ae(e, "syncTrigger"), (v) => {
      v.includes("resize") ? n.addResizeListener(s) : n.removeResizeListener(s), v.includes("scroll") ? n.addScrollListener(s) : n.removeScrollListener(s);
    });
    const f = vt(), m = Re(() => {
      const { to: v } = e;
      if (v !== void 0)
        return v;
      f.value;
    });
    return {
      VBinder: n,
      mergedEnabled: t,
      offsetContainerRef: r,
      followerRef: o,
      mergedTo: m,
      syncPosition: s
    };
  },
  render() {
    return p(ta, {
      show: this.show,
      to: this.mergedTo,
      disabled: this.teleportDisabled
    }, {
      default: () => {
        var e, n;
        const t = p("div", {
          class: ["v-binder-follower-container", this.containerClass],
          ref: "offsetContainerRef"
        }, [
          p("div", {
            class: "v-binder-follower-content",
            ref: "followerRef"
          }, (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e))
        ]);
        return this.zindexable ? Kn(t, [
          [
            Sr,
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
var un = [], ca = function() {
  return un.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, ua = function() {
  return un.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, Do = "ResizeObserver loop completed with undelivered notifications.", fa = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: Do
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = Do), window.dispatchEvent(e);
}, jn;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(jn || (jn = {}));
var fn = function(e) {
  return Object.freeze(e);
}, ha = /* @__PURE__ */ function() {
  function e(n, t) {
    this.inlineSize = n, this.blockSize = t, fn(this);
  }
  return e;
}(), Fr = function() {
  function e(n, t, o, r) {
    return this.x = n, this.y = t, this.width = o, this.height = r, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, fn(this);
  }
  return e.prototype.toJSON = function() {
    var n = this, t = n.x, o = n.y, r = n.top, i = n.right, l = n.bottom, a = n.left, s = n.width, c = n.height;
    return { x: t, y: o, top: r, right: i, bottom: l, left: a, width: s, height: c };
  }, e.fromRect = function(n) {
    return new e(n.x, n.y, n.width, n.height);
  }, e;
}(), So = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, Ar = function(e) {
  if (So(e)) {
    var n = e.getBBox(), t = n.width, o = n.height;
    return !t && !o;
  }
  var r = e, i = r.offsetWidth, l = r.offsetHeight;
  return !(i || l || e.getClientRects().length);
}, Bo = function(e) {
  var n;
  if (e instanceof Element)
    return !0;
  var t = (n = e == null ? void 0 : e.ownerDocument) === null || n === void 0 ? void 0 : n.defaultView;
  return !!(t && e instanceof t.Element);
}, pa = function(e) {
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
}, Hn = typeof window < "u" ? window : {}, ot = /* @__PURE__ */ new WeakMap(), Lo = /auto|scroll/, ma = /^tb|vertical/, ga = /msie|trident/i.test(Hn.navigator && Hn.navigator.userAgent), Ne = function(e) {
  return parseFloat(e || "0");
}, Rn = function(e, n, t) {
  return e === void 0 && (e = 0), n === void 0 && (n = 0), t === void 0 && (t = !1), new ha((t ? n : e) || 0, (t ? e : n) || 0);
}, No = fn({
  devicePixelContentBoxSize: Rn(),
  borderBoxSize: Rn(),
  contentBoxSize: Rn(),
  contentRect: new Fr(0, 0, 0, 0)
}), kr = function(e, n) {
  if (n === void 0 && (n = !1), ot.has(e) && !n)
    return ot.get(e);
  if (Ar(e))
    return ot.set(e, No), No;
  var t = getComputedStyle(e), o = So(e) && e.ownerSVGElement && e.getBBox(), r = !ga && t.boxSizing === "border-box", i = ma.test(t.writingMode || ""), l = !o && Lo.test(t.overflowY || ""), a = !o && Lo.test(t.overflowX || ""), s = o ? 0 : Ne(t.paddingTop), c = o ? 0 : Ne(t.paddingRight), f = o ? 0 : Ne(t.paddingBottom), m = o ? 0 : Ne(t.paddingLeft), v = o ? 0 : Ne(t.borderTopWidth), g = o ? 0 : Ne(t.borderRightWidth), u = o ? 0 : Ne(t.borderBottomWidth), w = o ? 0 : Ne(t.borderLeftWidth), C = m + c, h = s + f, P = w + g, I = v + u, x = a ? e.offsetHeight - I - e.clientHeight : 0, M = l ? e.offsetWidth - P - e.clientWidth : 0, B = r ? C + P : 0, b = r ? h + I : 0, y = o ? o.width : Ne(t.width) - B - M, R = o ? o.height : Ne(t.height) - b - x, E = y + C + M + P, V = R + h + x + I, Q = fn({
    devicePixelContentBoxSize: Rn(Math.round(y * devicePixelRatio), Math.round(R * devicePixelRatio), i),
    borderBoxSize: Rn(E, V, i),
    contentBoxSize: Rn(y, R, i),
    contentRect: new Fr(m, s, y, R)
  });
  return ot.set(e, Q), Q;
}, $r = function(e, n, t) {
  var o = kr(e, t), r = o.borderBoxSize, i = o.contentBoxSize, l = o.devicePixelContentBoxSize;
  switch (n) {
    case jn.DEVICE_PIXEL_CONTENT_BOX:
      return l;
    case jn.BORDER_BOX:
      return r;
    default:
      return i;
  }
}, va = /* @__PURE__ */ function() {
  function e(n) {
    var t = kr(n);
    this.target = n, this.contentRect = t.contentRect, this.borderBoxSize = fn([t.borderBoxSize]), this.contentBoxSize = fn([t.contentBoxSize]), this.devicePixelContentBoxSize = fn([t.devicePixelContentBoxSize]);
  }
  return e;
}(), zr = function(e) {
  if (Ar(e))
    return 1 / 0;
  for (var n = 0, t = e.parentNode; t; )
    n += 1, t = t.parentNode;
  return n;
}, ba = function() {
  var e = 1 / 0, n = [];
  un.forEach(function(l) {
    if (l.activeTargets.length !== 0) {
      var a = [];
      l.activeTargets.forEach(function(c) {
        var f = new va(c.target), m = zr(c.target);
        a.push(f), c.lastReportedSize = $r(c.target, c.observedBox), m < e && (e = m);
      }), n.push(function() {
        l.callback.call(l.observer, a, l.observer);
      }), l.activeTargets.splice(0, l.activeTargets.length);
    }
  });
  for (var t = 0, o = n; t < o.length; t++) {
    var r = o[t];
    r();
  }
  return e;
}, Ho = function(e) {
  un.forEach(function(t) {
    t.activeTargets.splice(0, t.activeTargets.length), t.skippedTargets.splice(0, t.skippedTargets.length), t.observationTargets.forEach(function(r) {
      r.isActive() && (zr(r.target) > e ? t.activeTargets.push(r) : t.skippedTargets.push(r));
    });
  });
}, Ca = function() {
  var e = 0;
  for (Ho(e); ca(); )
    e = ba(), Ho(e);
  return ua() && fa(), e > 0;
}, Gt, Dr = [], Sa = function() {
  return Dr.splice(0).forEach(function(e) {
    return e();
  });
}, wa = function(e) {
  if (!Gt) {
    var n = 0, t = document.createTextNode(""), o = { characterData: !0 };
    new MutationObserver(function() {
      return Sa();
    }).observe(t, o), Gt = function() {
      t.textContent = "".concat(n ? n-- : n++);
    };
  }
  Dr.push(e), Gt();
}, ya = function(e) {
  wa(function() {
    requestAnimationFrame(e);
  });
}, st = 0, xa = function() {
  return !!st;
}, _a = 250, Pa = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Wo = [
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
], Vo = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, Kt = !1, Ea = function() {
  function e() {
    var n = this;
    this.stopped = !0, this.listener = function() {
      return n.schedule();
    };
  }
  return e.prototype.run = function(n) {
    var t = this;
    if (n === void 0 && (n = _a), !Kt) {
      Kt = !0;
      var o = Vo(n);
      ya(function() {
        var r = !1;
        try {
          r = Ca();
        } finally {
          if (Kt = !1, n = o - Vo(), !xa())
            return;
          r ? t.run(1e3) : n > 0 ? t.run(n) : t.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var n = this, t = function() {
      return n.observer && n.observer.observe(document.body, Pa);
    };
    document.body ? t() : Hn.addEventListener("DOMContentLoaded", t);
  }, e.prototype.start = function() {
    var n = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Wo.forEach(function(t) {
      return Hn.addEventListener(t, n.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var n = this;
    this.stopped || (this.observer && this.observer.disconnect(), Wo.forEach(function(t) {
      return Hn.removeEventListener(t, n.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), fo = new Ea(), Uo = function(e) {
  !st && e > 0 && fo.start(), st += e, !st && fo.stop();
}, Oa = function(e) {
  return !So(e) && !pa(e) && getComputedStyle(e).display === "inline";
}, Ma = function() {
  function e(n, t) {
    this.target = n, this.observedBox = t || jn.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var n = $r(this.target, this.observedBox, !0);
    return Oa(this.target) && (this.lastReportedSize = n), this.lastReportedSize.inlineSize !== n.inlineSize || this.lastReportedSize.blockSize !== n.blockSize;
  }, e;
}(), Ra = /* @__PURE__ */ function() {
  function e(n, t) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = n, this.callback = t;
  }
  return e;
}(), rt = /* @__PURE__ */ new WeakMap(), jo = function(e, n) {
  for (var t = 0; t < e.length; t += 1)
    if (e[t].target === n)
      return t;
  return -1;
}, it = function() {
  function e() {
  }
  return e.connect = function(n, t) {
    var o = new Ra(n, t);
    rt.set(n, o);
  }, e.observe = function(n, t, o) {
    var r = rt.get(n), i = r.observationTargets.length === 0;
    jo(r.observationTargets, t) < 0 && (i && un.push(r), r.observationTargets.push(new Ma(t, o && o.box)), Uo(1), fo.schedule());
  }, e.unobserve = function(n, t) {
    var o = rt.get(n), r = jo(o.observationTargets, t), i = o.observationTargets.length === 1;
    r >= 0 && (i && un.splice(un.indexOf(o), 1), o.observationTargets.splice(r, 1), Uo(-1));
  }, e.disconnect = function(n) {
    var t = this, o = rt.get(n);
    o.observationTargets.slice().forEach(function(r) {
      return t.unobserve(n, r.target);
    }), o.activeTargets.splice(0, o.activeTargets.length);
  }, e;
}(), Ta = function() {
  function e(n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof n != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    it.connect(this, n);
  }
  return e.prototype.observe = function(n, t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Bo(n))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    it.observe(this, n, t);
  }, e.prototype.unobserve = function(n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Bo(n))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    it.unobserve(this, n);
  }, e.prototype.disconnect = function() {
    it.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
class Ia {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || Ta)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
  }
  handleResize(n) {
    for (const t of n) {
      const o = this.elHandlersMap.get(t.target);
      o !== void 0 && o(t);
    }
  }
  registerHandler(n, t) {
    this.elHandlersMap.set(n, t), this.observer.observe(n);
  }
  unregisterHandler(n) {
    this.elHandlersMap.has(n) && (this.elHandlersMap.delete(n), this.observer.unobserve(n));
  }
}
const Wn = new Ia(), ht = re({
  name: "ResizeObserver",
  props: {
    onResize: Function
  },
  setup(e) {
    let n = !1;
    const t = cr().proxy;
    function o(r) {
      const { onResize: i } = e;
      i !== void 0 && i(r);
    }
    Te(() => {
      const r = t.$el;
      if (r === void 0) {
        Mo("resize-observer", "$el does not exist.");
        return;
      }
      if (r.nextElementSibling !== r.nextSibling && r.nodeType === 3 && r.nodeValue !== "") {
        Mo("resize-observer", "$el can not be observed (it may be a text node).");
        return;
      }
      r.nextElementSibling !== null && (Wn.registerHandler(r.nextElementSibling, o), n = !0);
    }), $e(() => {
      n && Wn.unregisterHandler(t.$el.nextElementSibling);
    });
  },
  render() {
    return ur(this.$slots, "default");
  }
});
let lt;
function Fa() {
  return typeof document > "u" ? !1 : (lt === void 0 && ("matchMedia" in window ? lt = window.matchMedia("(pointer:coarse)").matches : lt = !1), lt);
}
let Xt;
function Go() {
  return typeof document > "u" ? 1 : (Xt === void 0 && (Xt = "chrome" in window ? window.devicePixelRatio : 1), Xt);
}
const Br = "VVirtualListXScroll";
function Aa({ columnsRef: e, renderColRef: n, renderItemWithColsRef: t }) {
  const o = $(0), r = $(0), i = z(() => {
    const c = e.value;
    if (c.length === 0)
      return null;
    const f = new Tr(c.length, 0);
    return c.forEach((m, v) => {
      f.add(v, m.width);
    }), f;
  }), l = Re(() => {
    const c = i.value;
    return c !== null ? Math.max(c.getBound(r.value) - 1, 0) : 0;
  }), a = (c) => {
    const f = i.value;
    return f !== null ? f.sum(c) : 0;
  }, s = Re(() => {
    const c = i.value;
    return c !== null ? Math.min(c.getBound(r.value + o.value) + 1, e.value.length - 1) : 0;
  });
  return He(Br, {
    startIndexRef: l,
    endIndexRef: s,
    columnsRef: e,
    renderColRef: n,
    renderItemWithColsRef: t,
    getLeft: a
  }), {
    listWidthRef: o,
    scrollLeftRef: r
  };
}
const Ko = re({
  name: "VirtualListRow",
  props: {
    index: { type: Number, required: !0 },
    item: {
      type: Object,
      required: !0
    }
  },
  setup() {
    const { startIndexRef: e, endIndexRef: n, columnsRef: t, getLeft: o, renderColRef: r, renderItemWithColsRef: i } = (
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      ue(Br)
    );
    return {
      startIndex: e,
      endIndex: n,
      columns: t,
      renderCol: r,
      renderItemWithCols: i,
      getLeft: o
    };
  },
  render() {
    const { startIndex: e, endIndex: n, columns: t, renderCol: o, renderItemWithCols: r, getLeft: i, item: l } = this;
    if (r != null)
      return r({
        itemIndex: this.index,
        startColIndex: e,
        endColIndex: n,
        allColumns: t,
        item: l,
        getLeft: i
      });
    if (o != null) {
      const a = [];
      for (let s = e; s <= n; ++s) {
        const c = t[s];
        a.push(o({ column: c, left: i(s), item: l }));
      }
      return a;
    }
    return null;
  }
}), ka = Je(".v-vl", {
  maxHeight: "inherit",
  height: "100%",
  overflow: "auto",
  minWidth: "1px"
  // a zero width container won't be scrollable
}, [
  Je("&:not(.v-vl--show-scrollbar)", {
    scrollbarWidth: "none"
  }, [
    Je("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", {
      width: 0,
      height: 0,
      display: "none"
    })
  ])
]), $a = re({
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
    const n = gn();
    ka.mount({
      id: "vueuc/virtual-list",
      head: !0,
      anchorMetaName: Co,
      ssr: n
    }), Te(() => {
      const { defaultScrollIndex: _, defaultScrollKey: k } = e;
      _ != null ? C({ index: _ }) : k != null && C({ key: k });
    });
    let t = !1, o = !1;
    fr(() => {
      if (t = !1, !o) {
        o = !0;
        return;
      }
      C({ top: g.value, left: l.value });
    }), hr(() => {
      t = !0, o || (o = !0);
    });
    const r = Re(() => {
      if (e.renderCol == null && e.renderItemWithCols == null || e.columns.length === 0)
        return;
      let _ = 0;
      return e.columns.forEach((k) => {
        _ += k.width;
      }), _;
    }), i = z(() => {
      const _ = /* @__PURE__ */ new Map(), { keyField: k } = e;
      return e.items.forEach((O, N) => {
        _.set(O[k], N);
      }), _;
    }), { scrollLeftRef: l, listWidthRef: a } = Aa({
      columnsRef: ae(e, "columns"),
      renderColRef: ae(e, "renderCol"),
      renderItemWithColsRef: ae(e, "renderItemWithCols")
    }), s = $(null), c = $(void 0), f = /* @__PURE__ */ new Map(), m = z(() => {
      const { items: _, itemSize: k, keyField: O } = e, N = new Tr(_.length, k);
      return _.forEach((q, J) => {
        const ee = q[O], X = f.get(ee);
        X !== void 0 && N.add(J, X);
      }), N;
    }), v = $(0), g = $(0), u = Re(() => Math.max(m.value.getBound(g.value - Un(e.paddingTop)) - 1, 0)), w = z(() => {
      const { value: _ } = c;
      if (_ === void 0)
        return [];
      const { items: k, itemSize: O } = e, N = u.value, q = Math.min(N + Math.ceil(_ / O + 1), k.length - 1), J = [];
      for (let ee = N; ee <= q; ++ee)
        J.push(k[ee]);
      return J;
    }), C = (_, k) => {
      if (typeof _ == "number") {
        x(_, k, "auto");
        return;
      }
      const { left: O, top: N, index: q, key: J, position: ee, behavior: X, debounce: ie = !0 } = _;
      if (O !== void 0 || N !== void 0)
        x(O, N, X);
      else if (q !== void 0)
        I(q, X, ie);
      else if (J !== void 0) {
        const F = i.value.get(J);
        F !== void 0 && I(F, X, ie);
      } else ee === "bottom" ? x(0, Number.MAX_SAFE_INTEGER, X) : ee === "top" && x(0, 0, X);
    };
    let h, P = null;
    function I(_, k, O) {
      const { value: N } = m, q = N.sum(_) + Un(e.paddingTop);
      if (!O)
        s.value.scrollTo({
          left: 0,
          top: q,
          behavior: k
        });
      else {
        h = _, P !== null && window.clearTimeout(P), P = window.setTimeout(() => {
          h = void 0, P = null;
        }, 16);
        const { scrollTop: J, offsetHeight: ee } = s.value;
        if (q > J) {
          const X = N.get(_);
          q + X <= J + ee || s.value.scrollTo({
            left: 0,
            top: q + X - ee,
            behavior: k
          });
        } else
          s.value.scrollTo({
            left: 0,
            top: q,
            behavior: k
          });
      }
    }
    function x(_, k, O) {
      s.value.scrollTo({
        left: _,
        top: k,
        behavior: O
      });
    }
    function M(_, k) {
      var O, N, q;
      if (t || e.ignoreItemResize || Q(k.target))
        return;
      const { value: J } = m, ee = i.value.get(_), X = J.get(ee), ie = (q = (N = (O = k.borderBoxSize) === null || O === void 0 ? void 0 : O[0]) === null || N === void 0 ? void 0 : N.blockSize) !== null && q !== void 0 ? q : k.contentRect.height;
      if (ie === X)
        return;
      ie - e.itemSize === 0 ? f.delete(_) : f.set(_, ie - e.itemSize);
      const D = ie - X;
      if (D === 0)
        return;
      J.add(ee, D);
      const oe = s.value;
      if (oe != null) {
        if (h === void 0) {
          const me = J.sum(ee);
          oe.scrollTop > me && oe.scrollBy(0, D);
        } else if (ee < h)
          oe.scrollBy(0, D);
        else if (ee === h) {
          const me = J.sum(ee);
          ie + me > // Note, listEl shouldn't have border, nor offsetHeight won't be
          // correct
          oe.scrollTop + oe.offsetHeight && oe.scrollBy(0, D);
        }
        V();
      }
      v.value++;
    }
    const B = !Fa();
    let b = !1;
    function y(_) {
      var k;
      (k = e.onScroll) === null || k === void 0 || k.call(e, _), (!B || !b) && V();
    }
    function R(_) {
      var k;
      if ((k = e.onWheel) === null || k === void 0 || k.call(e, _), B) {
        const O = s.value;
        if (O != null) {
          if (_.deltaX === 0 && (O.scrollTop === 0 && _.deltaY <= 0 || O.scrollTop + O.offsetHeight >= O.scrollHeight && _.deltaY >= 0))
            return;
          _.preventDefault(), O.scrollTop += _.deltaY / Go(), O.scrollLeft += _.deltaX / Go(), V(), b = !0, gr(() => {
            b = !1;
          });
        }
      }
    }
    function E(_) {
      if (t || Q(_.target))
        return;
      if (e.renderCol == null && e.renderItemWithCols == null) {
        if (_.contentRect.height === c.value)
          return;
      } else if (_.contentRect.height === c.value && _.contentRect.width === a.value)
        return;
      c.value = _.contentRect.height, a.value = _.contentRect.width;
      const { onResize: k } = e;
      k !== void 0 && k(_);
    }
    function V() {
      const { value: _ } = s;
      _ != null && (g.value = _.scrollTop, l.value = _.scrollLeft);
    }
    function Q(_) {
      let k = _;
      for (; k !== null; ) {
        if (k.style.display === "none")
          return !0;
        k = k.parentElement;
      }
      return !1;
    }
    return {
      listHeight: c,
      listStyle: {
        overflow: "auto"
      },
      keyToIndex: i,
      itemsStyle: z(() => {
        const { itemResizable: _ } = e, k = kn(m.value.sum());
        return v.value, [
          e.itemsStyle,
          {
            boxSizing: "content-box",
            width: kn(r.value),
            height: _ ? "" : k,
            minHeight: _ ? k : "",
            paddingTop: kn(e.paddingTop),
            paddingBottom: kn(e.paddingBottom)
          }
        ];
      }),
      visibleItemsStyle: z(() => (v.value, {
        transform: `translateY(${kn(m.value.sum(u.value))})`
      })),
      viewportItems: w,
      listElRef: s,
      itemsElRef: $(null),
      scrollTo: C,
      handleListResize: E,
      handleListScroll: y,
      handleListWheel: R,
      handleItemResize: M
    };
  },
  render() {
    const { itemResizable: e, keyField: n, keyToIndex: t, visibleItemsTag: o } = this;
    return p(ht, {
      onResize: this.handleListResize
    }, {
      default: () => {
        var r, i;
        return p("div", gt(this.$attrs, {
          class: ["v-vl", this.showScrollbar && "v-vl--show-scrollbar"],
          onScroll: this.handleListScroll,
          onWheel: this.handleListWheel,
          ref: "listElRef"
        }), [
          this.items.length !== 0 ? p("div", {
            ref: "itemsElRef",
            class: "v-vl-items",
            style: this.itemsStyle
          }, [
            p(o, Object.assign({
              class: "v-vl-visible-items",
              style: this.visibleItemsStyle
            }, this.visibleItemsProps), {
              default: () => {
                const { renderCol: l, renderItemWithCols: a } = this;
                return this.viewportItems.map((s) => {
                  const c = s[n], f = t.get(c), m = l != null ? p(Ko, {
                    index: f,
                    item: s
                  }) : void 0, v = a != null ? p(Ko, {
                    index: f,
                    item: s
                  }) : void 0, g = this.$slots.default({
                    item: s,
                    renderedCols: m,
                    renderedItemWithCols: v,
                    index: f
                  })[0];
                  return e ? p(ht, {
                    key: c,
                    onResize: (u) => this.handleItemResize(c, u)
                  }, {
                    default: () => g
                  }) : (g.key = c, g);
                });
              }
            })
          ]) : (i = (r = this.$slots).empty) === null || i === void 0 ? void 0 : i.call(r)
        ]);
      }
    });
  }
}), Ue = "v-hidden", za = Je("[v-hidden]", {
  display: "none!important"
}), Xo = re({
  name: "Overflow",
  props: {
    getCounter: Function,
    getTail: Function,
    updateCounter: Function,
    onUpdateCount: Function,
    onUpdateOverflow: Function
  },
  setup(e, { slots: n }) {
    const t = $(null), o = $(null);
    function r(l) {
      const { value: a } = t, { getCounter: s, getTail: c } = e;
      let f;
      if (s !== void 0 ? f = s() : f = o.value, !a || !f)
        return;
      f.hasAttribute(Ue) && f.removeAttribute(Ue);
      const { children: m } = a;
      if (l.showAllItemsBeforeCalculate)
        for (const I of m)
          I.hasAttribute(Ue) && I.removeAttribute(Ue);
      const v = a.offsetWidth, g = [], u = n.tail ? c == null ? void 0 : c() : null;
      let w = u ? u.offsetWidth : 0, C = !1;
      const h = a.children.length - (n.tail ? 1 : 0);
      for (let I = 0; I < h - 1; ++I) {
        if (I < 0)
          continue;
        const x = m[I];
        if (C) {
          x.hasAttribute(Ue) || x.setAttribute(Ue, "");
          continue;
        } else x.hasAttribute(Ue) && x.removeAttribute(Ue);
        const M = x.offsetWidth;
        if (w += M, g[I] = M, w > v) {
          const { updateCounter: B } = e;
          for (let b = I; b >= 0; --b) {
            const y = h - 1 - b;
            B !== void 0 ? B(y) : f.textContent = `${y}`;
            const R = f.offsetWidth;
            if (w -= g[b], w + R <= v || b === 0) {
              C = !0, I = b - 1, u && (I === -1 ? (u.style.maxWidth = `${v - R}px`, u.style.boxSizing = "border-box") : u.style.maxWidth = "");
              const { onUpdateCount: E } = e;
              E && E(y);
              break;
            }
          }
        }
      }
      const { onUpdateOverflow: P } = e;
      C ? P !== void 0 && P(!0) : (P !== void 0 && P(!1), f.setAttribute(Ue, ""));
    }
    const i = gn();
    return za.mount({
      id: "vueuc/overflow",
      head: !0,
      anchorMetaName: Co,
      ssr: i
    }), Te(() => r({
      showAllItemsBeforeCalculate: !1
    })), {
      selfRef: t,
      counterRef: o,
      sync: r
    };
  },
  render() {
    const { $slots: e } = this;
    return mt(() => this.sync({
      showAllItemsBeforeCalculate: !1
    })), p("div", {
      class: "v-overflow",
      ref: "selfRef"
    }, [
      ur(e, "default"),
      // $slots.counter should only has 1 element
      e.counter ? e.counter() : p("span", {
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
function Lr(e) {
  return e instanceof HTMLElement;
}
function Nr(e) {
  for (let n = 0; n < e.childNodes.length; n++) {
    const t = e.childNodes[n];
    if (Lr(t) && (Wr(t) || Nr(t)))
      return !0;
  }
  return !1;
}
function Hr(e) {
  for (let n = e.childNodes.length - 1; n >= 0; n--) {
    const t = e.childNodes[n];
    if (Lr(t) && (Wr(t) || Hr(t)))
      return !0;
  }
  return !1;
}
function Wr(e) {
  if (!Da(e))
    return !1;
  try {
    e.focus({ preventScroll: !0 });
  } catch {
  }
  return document.activeElement === e;
}
function Da(e) {
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
let $n = [];
const Ba = re({
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
    const n = ji(), t = $(null), o = $(null);
    let r = !1, i = !1;
    const l = typeof document > "u" ? null : document.activeElement;
    function a() {
      return $n[$n.length - 1] === n;
    }
    function s(C) {
      var h;
      C.code === "Escape" && a() && ((h = e.onEsc) === null || h === void 0 || h.call(e, C));
    }
    Te(() => {
      we(() => e.active, (C) => {
        C ? (m(), _e("keydown", document, s)) : (he("keydown", document, s), r && v());
      }, {
        immediate: !0
      });
    }), $e(() => {
      he("keydown", document, s), r && v();
    });
    function c(C) {
      if (!i && a()) {
        const h = f();
        if (h === null || h.contains(Vn(C)))
          return;
        g("first");
      }
    }
    function f() {
      const C = t.value;
      if (C === null)
        return null;
      let h = C;
      for (; h = h.nextSibling, !(h === null || h instanceof Element && h.tagName === "DIV"); )
        ;
      return h;
    }
    function m() {
      var C;
      if (!e.disabled) {
        if ($n.push(n), e.autoFocus) {
          const { initialFocusTo: h } = e;
          h === void 0 ? g("first") : (C = Ao(h)) === null || C === void 0 || C.focus({ preventScroll: !0 });
        }
        r = !0, document.addEventListener("focus", c, !0);
      }
    }
    function v() {
      var C;
      if (e.disabled || (document.removeEventListener("focus", c, !0), $n = $n.filter((P) => P !== n), a()))
        return;
      const { finalFocusTo: h } = e;
      h !== void 0 ? (C = Ao(h)) === null || C === void 0 || C.focus({ preventScroll: !0 }) : e.returnFocusOnDeactivated && l instanceof HTMLElement && (i = !0, l.focus({ preventScroll: !0 }), i = !1);
    }
    function g(C) {
      if (a() && e.active) {
        const h = t.value, P = o.value;
        if (h !== null && P !== null) {
          const I = f();
          if (I == null || I === P) {
            i = !0, h.focus({ preventScroll: !0 }), i = !1;
            return;
          }
          i = !0;
          const x = C === "first" ? Nr(I) : Hr(I);
          i = !1, x || (i = !0, h.focus({ preventScroll: !0 }), i = !1);
        }
      }
    }
    function u(C) {
      if (i)
        return;
      const h = f();
      h !== null && (C.relatedTarget !== null && h.contains(C.relatedTarget) ? g("last") : g("first"));
    }
    function w(C) {
      i || (C.relatedTarget !== null && C.relatedTarget === t.value ? g("last") : g("first"));
    }
    return {
      focusableStartRef: t,
      focusableEndRef: o,
      focusableStyle: "position: absolute; height: 0; width: 0;",
      handleStartFocus: u,
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
    return p(mn, null, [
      p("div", {
        "aria-hidden": "true",
        tabindex: n ? "0" : "-1",
        ref: "focusableStartRef",
        style: t,
        onFocus: this.handleStartFocus
      }),
      e(),
      p("div", {
        "aria-hidden": "true",
        style: t,
        ref: "focusableEndRef",
        tabindex: n ? "0" : "-1",
        onFocus: this.handleEndFocus
      })
    ]);
  }
});
const wo = "n-internal-select-menu", Vr = "n-internal-select-menu-body", Ur = "n-drawer-body", jr = "n-modal-body", Gr = "n-popover-body", Kr = "__disabled__";
function Ke(e) {
  const n = ue(jr, null), t = ue(Ur, null), o = ue(Gr, null), r = ue(Vr, null), i = $();
  if (typeof document < "u") {
    i.value = document.fullscreenElement;
    const l = () => {
      i.value = document.fullscreenElement;
    };
    Te(() => {
      _e("fullscreenchange", document, l);
    }), $e(() => {
      he("fullscreenchange", document, l);
    });
  }
  return Re(() => {
    var l;
    const {
      to: a
    } = e;
    return a !== void 0 ? a === !1 ? Kr : a === !0 ? i.value || "body" : a : n != null && n.value ? (l = n.value.$el) !== null && l !== void 0 ? l : n.value : t != null && t.value ? t.value : o != null && o.value ? o.value : r != null && r.value ? r.value : a ?? (i.value || "body");
  });
}
Ke.tdkey = Kr;
Ke.propTo = {
  type: [String, Object, Boolean],
  default: void 0
};
function La(e) {
  const n = {
    isDeactivated: !1
  };
  let t = !1;
  return fr(() => {
    if (n.isDeactivated = !1, !t) {
      t = !0;
      return;
    }
    e();
  }), hr(() => {
    n.isDeactivated = !0, t || (t = !0);
  }), n;
}
function Xr(e, n) {
  n && (Te(() => {
    const {
      value: t
    } = e;
    t && Wn.registerHandler(t, n);
  }), we(e, (t, o) => {
    o && Wn.unregisterHandler(o);
  }, {
    deep: !1
  }), $e(() => {
    const {
      value: t
    } = e;
    t && Wn.unregisterHandler(t);
  }));
}
function Yo(e) {
  return e.replace(/#|\(|\)|,|\s|\./g, "_");
}
const Na = /^(\d|\.)+$/, qo = /(\d|\.)+/;
function Yt(e, {
  c: n = 1,
  offset: t = 0,
  attachPx: o = !0
} = {}) {
  if (typeof e == "number") {
    const r = (e + t) * n;
    return r === 0 ? "0" : `${r}px`;
  } else if (typeof e == "string")
    if (Na.test(e)) {
      const r = (Number(e) + t) * n;
      return o ? r === 0 ? "0" : `${r}px` : `${r}`;
    } else {
      const r = qo.exec(e);
      return r ? e.replace(qo, String((Number(r[0]) + t) * n)) : e;
    }
  return e;
}
function Zo(e) {
  const {
    left: n,
    right: t,
    top: o,
    bottom: r
  } = Ae(e);
  return `${o} ${n} ${r} ${t}`;
}
var Jo = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_26504_XKHRYLZIHXXZLNIG", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.97.2", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-5a8078c568-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
function Ha(e) {
  let n = ".", t = "__", o = "--", r;
  {
    let u = e.blockPrefix;
    u && (n = u), u = e.elementPrefix, u && (t = u), u = e.modifierPrefix, u && (o = u);
  }
  const i = {
    install(u) {
      r = u.c;
      const w = u.context;
      w.bem = {}, w.bem.b = null, w.bem.els = null;
    }
  };
  function l(u) {
    let w, C;
    return {
      before(h) {
        w = h.bem.b, C = h.bem.els, h.bem.els = null;
      },
      after(h) {
        h.bem.b = w, h.bem.els = C;
      },
      $({ context: h, props: P }) {
        return u = typeof u == "string" ? u : u({ context: h, props: P }), h.bem.b = u, `${(P == null ? void 0 : P.bPrefix) || n}${h.bem.b}`;
      }
    };
  }
  function a(u) {
    let w;
    return {
      before(C) {
        w = C.bem.els;
      },
      after(C) {
        C.bem.els = w;
      },
      $({ context: C, props: h }) {
        return u = typeof u == "string" ? u : u({ context: C, props: h }), C.bem.els = u.split(",").map((P) => P.trim()), C.bem.els.map((P) => `${(h == null ? void 0 : h.bPrefix) || n}${C.bem.b}${t}${P}`).join(", ");
      }
    };
  }
  function s(u) {
    return {
      $({ context: w, props: C }) {
        u = typeof u == "string" ? u : u({ context: w, props: C });
        const h = u.split(",").map((x) => x.trim());
        function P(x) {
          return h.map((M) => `&${(C == null ? void 0 : C.bPrefix) || n}${w.bem.b}${x !== void 0 ? `${t}${x}` : ""}${o}${M}`).join(", ");
        }
        const I = w.bem.els;
        if (I !== null) {
          if (Jo.NODE_ENV !== "production" && I.length >= 2)
            throw Error(`[css-render/plugin-bem]: m(${u}) is invalid, using modifier inside multiple elements is not allowed`);
          return P(I[0]);
        } else
          return P();
      }
    };
  }
  function c(u) {
    return {
      $({ context: w, props: C }) {
        u = typeof u == "string" ? u : u({ context: w, props: C });
        const h = w.bem.els;
        if (Jo.NODE_ENV !== "production" && h !== null && h.length >= 2)
          throw Error(`[css-render/plugin-bem]: notM(${u}) is invalid, using modifier inside multiple elements is not allowed`);
        return `&:not(${(C == null ? void 0 : C.bPrefix) || n}${w.bem.b}${h !== null && h.length > 0 ? `${t}${h[0]}` : ""}${o}${u})`;
      }
    };
  }
  return Object.assign(i, {
    cB: (...u) => r(l(u[0]), u[1], u[2]),
    cE: (...u) => r(a(u[0]), u[1], u[2]),
    cM: (...u) => r(s(u[0]), u[1], u[2]),
    cNotM: (...u) => r(c(u[0]), u[1], u[2])
  }), i;
}
const Wa = "n", Va = `.${Wa}-`, Ua = "__", ja = "--", Yr = Rr(), qr = Ha({
  blockPrefix: Va,
  elementPrefix: Ua,
  modifierPrefix: ja
});
Yr.use(qr);
const {
  c: H,
  find: nc
} = Yr, {
  cB: G,
  cE: Y,
  cM: te,
  cNotM: ke
} = qr, Ga = (...e) => H(">", [G(...e)]);
function ce(e, n) {
  return e + (n === "default" ? "" : n.replace(/^[a-z]/, (t) => t.toUpperCase()));
}
let qt;
function Ka() {
  return qt === void 0 && (qt = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")), qt;
}
const Xa = /* @__PURE__ */ new WeakSet();
function Ya(e) {
  Xa.add(e);
}
function Qo(e) {
  switch (typeof e) {
    case "string":
      return e || void 0;
    case "number":
      return String(e);
    default:
      return;
  }
}
const er = /* @__PURE__ */ new Set();
function Ze(e, n) {
  const t = `[naive/${e}]: ${n}`;
  er.has(t) || (er.add(t), console.error(t));
}
function nr(e, n) {
  console.error(`[naive/${e}]: ${n}`);
}
function Zr(e, n) {
  throw new Error(`[naive/${e}]: ${n}`);
}
function Ce(e, ...n) {
  if (Array.isArray(e))
    e.forEach((t) => Ce(t, ...n));
  else
    return e(...n);
}
function ho(e, n = !0, t = []) {
  return e.forEach((o) => {
    if (o !== null) {
      if (typeof o != "object") {
        (typeof o == "string" || typeof o == "number") && t.push(dt(String(o)));
        return;
      }
      if (Array.isArray(o)) {
        ho(o, n, t);
        return;
      }
      if (o.type === mn) {
        if (o.children === null) return;
        Array.isArray(o.children) && ho(o.children, n, t);
      } else {
        if (o.type === go && n) return;
        t.push(o);
      }
    }
  }), t;
}
function qa(e, n = "default", t = void 0) {
  const o = e[n];
  if (!o)
    return nr("getFirstSlotVNode", `slot[${n}] is empty`), null;
  const r = ho(o(t));
  return r.length === 1 ? r[0] : (nr("getFirstSlotVNode", `slot[${n}] should have exactly one child`), null);
}
function Za(e, n = [], t) {
  const o = {};
  return n.forEach((r) => {
    o[r] = e[r];
  }), Object.assign(o, t);
}
function Zt(e) {
  const n = e.filter((t) => t !== void 0);
  if (n.length !== 0)
    return n.length === 1 ? n[0] : (t) => {
      e.forEach((o) => {
        o && o(t);
      });
    };
}
function On(e, ...n) {
  return typeof e == "function" ? e(...n) : typeof e == "string" ? dt(e) : typeof e == "number" ? dt(String(e)) : null;
}
function Ct(e) {
  return e.some((n) => yi(n) ? !(n.type === go || n.type === mn && !Ct(n.children)) : !0) ? e : null;
}
function yo(e, n) {
  return e && Ct(e()) || n();
}
function hn(e, n) {
  const t = e && Ct(e());
  return n(t || null);
}
function tr(e) {
  return !(e && Ct(e()));
}
const po = re({
  render() {
    var e, n;
    return (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e);
  }
}), vn = "n-config-provider", Ja = "n";
function bn(e = {}, n = {
  defaultBordered: !0
}) {
  const t = ue(vn, null);
  return {
    // NConfigProvider,
    inlineThemeDisabled: t == null ? void 0 : t.inlineThemeDisabled,
    mergedRtlRef: t == null ? void 0 : t.mergedRtlRef,
    mergedComponentPropsRef: t == null ? void 0 : t.mergedComponentPropsRef,
    mergedBreakpointsRef: t == null ? void 0 : t.mergedBreakpointsRef,
    mergedBorderedRef: z(() => {
      var o, r;
      const {
        bordered: i
      } = e;
      return i !== void 0 ? i : (r = (o = t == null ? void 0 : t.mergedBorderedRef.value) !== null && o !== void 0 ? o : n.defaultBordered) !== null && r !== void 0 ? r : !0;
    }),
    mergedClsPrefixRef: t ? t.mergedClsPrefixRef : xi(Ja),
    namespaceRef: z(() => t == null ? void 0 : t.mergedNamespaceRef.value)
  };
}
function Cn(e, n, t, o) {
  t || Zr("useThemeClass", "cssVarsRef is not passed");
  const r = ue(vn, null), i = r == null ? void 0 : r.mergedThemeHashRef, l = r == null ? void 0 : r.styleMountTarget, a = $(""), s = gn();
  let c;
  const f = `__${e}`, m = () => {
    let v = f;
    const g = n ? n.value : void 0, u = i == null ? void 0 : i.value;
    u && (v += `-${u}`), g && (v += `-${g}`);
    const {
      themeOverrides: w,
      builtinThemeOverrides: C
    } = o;
    w && (v += `-${uo(JSON.stringify(w))}`), C && (v += `-${uo(JSON.stringify(C))}`), a.value = v, c = () => {
      const h = t.value;
      let P = "";
      for (const I in h)
        P += `${I}: ${h[I]};`;
      H(`.${v}`, P).mount({
        id: v,
        ssr: s,
        parent: l
      }), c = void 0;
    };
  };
  return Ge(() => {
    m();
  }), {
    themeClass: a,
    onRender: () => {
      c == null || c();
    }
  };
}
const or = "n-form-item";
function Qa(e, {
  defaultSize: n = "medium",
  mergedSize: t,
  mergedDisabled: o
} = {}) {
  const r = ue(or, null);
  He(or, null);
  const i = z(t ? () => t(r) : () => {
    const {
      size: s
    } = e;
    if (s) return s;
    if (r) {
      const {
        mergedSize: c
      } = r;
      if (c.value !== void 0)
        return c.value;
    }
    return n;
  }), l = z(o ? () => o(r) : () => {
    const {
      disabled: s
    } = e;
    return s !== void 0 ? s : r ? r.disabled.value : !1;
  }), a = z(() => {
    const {
      status: s
    } = e;
    return s || (r == null ? void 0 : r.mergedValidationStatus.value);
  });
  return $e(() => {
    r && r.restoreValidation();
  }), {
    mergedSizeRef: i,
    mergedDisabledRef: l,
    mergedStatusRef: a,
    nTriggerFormBlur() {
      r && r.handleContentBlur();
    },
    nTriggerFormChange() {
      r && r.handleContentChange();
    },
    nTriggerFormFocus() {
      r && r.handleContentFocus();
    },
    nTriggerFormInput() {
      r && r.handleContentInput();
    }
  };
}
const es = {
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
function Jt(e) {
  return (n = {}) => {
    const t = n.width ? String(n.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
function zn(e) {
  return (n, t) => {
    const o = t != null && t.context ? String(t.context) : "standalone";
    let r;
    if (o === "formatting" && e.formattingValues) {
      const l = e.defaultFormattingWidth || e.defaultWidth, a = t != null && t.width ? String(t.width) : l;
      r = e.formattingValues[a] || e.formattingValues[l];
    } else {
      const l = e.defaultWidth, a = t != null && t.width ? String(t.width) : e.defaultWidth;
      r = e.values[a] || e.values[l];
    }
    const i = e.argumentCallback ? e.argumentCallback(n) : n;
    return r[i];
  };
}
function Dn(e) {
  return (n, t = {}) => {
    const o = t.width, r = o && e.matchPatterns[o] || e.matchPatterns[e.defaultMatchWidth], i = n.match(r);
    if (!i)
      return null;
    const l = i[0], a = o && e.parsePatterns[o] || e.parsePatterns[e.defaultParseWidth], s = Array.isArray(a) ? ts(a, (m) => m.test(l)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      ns(a, (m) => m.test(l))
    );
    let c;
    c = e.valueCallback ? e.valueCallback(s) : s, c = t.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      t.valueCallback(c)
    ) : c;
    const f = n.slice(l.length);
    return { value: c, rest: f };
  };
}
function ns(e, n) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && n(e[t]))
      return t;
}
function ts(e, n) {
  for (let t = 0; t < e.length; t++)
    if (n(e[t]))
      return t;
}
function os(e) {
  return (n, t = {}) => {
    const o = n.match(e.matchPattern);
    if (!o) return null;
    const r = o[0], i = n.match(e.parsePattern);
    if (!i) return null;
    let l = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    l = t.valueCallback ? t.valueCallback(l) : l;
    const a = n.slice(r.length);
    return { value: l, rest: a };
  };
}
const rs = {
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
}, is = (e, n, t) => {
  let o;
  const r = rs[e];
  return typeof r == "string" ? o = r : n === 1 ? o = r.one : o = r.other.replace("{{count}}", n.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + o : o + " ago" : o;
}, ls = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, as = (e, n, t, o) => ls[e], ss = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, ds = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, cs = {
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
}, us = {
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
}, fs = {
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
}, hs = {
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
}, ps = (e, n) => {
  const t = Number(e), o = t % 100;
  if (o > 20 || o < 10)
    switch (o % 10) {
      case 1:
        return t + "st";
      case 2:
        return t + "nd";
      case 3:
        return t + "rd";
    }
  return t + "th";
}, ms = {
  ordinalNumber: ps,
  era: zn({
    values: ss,
    defaultWidth: "wide"
  }),
  quarter: zn({
    values: ds,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: zn({
    values: cs,
    defaultWidth: "wide"
  }),
  day: zn({
    values: us,
    defaultWidth: "wide"
  }),
  dayPeriod: zn({
    values: fs,
    defaultWidth: "wide",
    formattingValues: hs,
    defaultFormattingWidth: "wide"
  })
}, gs = /^(\d+)(th|st|nd|rd)?/i, vs = /\d+/i, bs = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Cs = {
  any: [/^b/i, /^(a|c)/i]
}, Ss = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, ws = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, ys = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, xs = {
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
}, _s = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Ps = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Es = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Os = {
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
}, Ms = {
  ordinalNumber: os({
    matchPattern: gs,
    parsePattern: vs,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Dn({
    matchPatterns: bs,
    defaultMatchWidth: "wide",
    parsePatterns: Cs,
    defaultParseWidth: "any"
  }),
  quarter: Dn({
    matchPatterns: Ss,
    defaultMatchWidth: "wide",
    parsePatterns: ws,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Dn({
    matchPatterns: ys,
    defaultMatchWidth: "wide",
    parsePatterns: xs,
    defaultParseWidth: "any"
  }),
  day: Dn({
    matchPatterns: _s,
    defaultMatchWidth: "wide",
    parsePatterns: Ps,
    defaultParseWidth: "any"
  }),
  dayPeriod: Dn({
    matchPatterns: Es,
    defaultMatchWidth: "any",
    parsePatterns: Os,
    defaultParseWidth: "any"
  })
}, Rs = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Ts = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Is = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Fs = {
  date: Jt({
    formats: Rs,
    defaultWidth: "full"
  }),
  time: Jt({
    formats: Ts,
    defaultWidth: "full"
  }),
  dateTime: Jt({
    formats: Is,
    defaultWidth: "full"
  })
}, As = {
  code: "en-US",
  formatDistance: is,
  formatLong: Fs,
  formatRelative: as,
  localize: ms,
  match: Ms,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, ks = {
  name: "en-US",
  locale: As
};
function Jr(e) {
  const {
    mergedLocaleRef: n,
    mergedDateLocaleRef: t
  } = ue(vn, null) || {}, o = z(() => {
    var i, l;
    return (l = (i = n == null ? void 0 : n.value) === null || i === void 0 ? void 0 : i[e]) !== null && l !== void 0 ? l : es[e];
  });
  return {
    dateLocaleRef: z(() => {
      var i;
      return (i = t == null ? void 0 : t.value) !== null && i !== void 0 ? i : ks;
    }),
    localeRef: o
  };
}
const Gn = "naive-ui-style";
function St(e, n, t) {
  if (!n) return;
  const o = gn(), r = z(() => {
    const {
      value: a
    } = n;
    if (!a)
      return;
    const s = a[e];
    if (s)
      return s;
  }), i = ue(vn, null), l = () => {
    Ge(() => {
      const {
        value: a
      } = t, s = `${a}${e}Rtl`;
      if (na(s, o)) return;
      const {
        value: c
      } = r;
      c && c.style.mount({
        id: s,
        head: !0,
        anchorMetaName: Gn,
        props: {
          bPrefix: a ? `.${a}-` : void 0
        },
        ssr: o,
        parent: i == null ? void 0 : i.styleMountTarget
      });
    });
  };
  return o ? l() : vo(l), r;
}
const Xn = {
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
  fontSize: $s,
  fontFamily: zs,
  lineHeight: Ds
} = Xn, Qr = H("body", `
 margin: 0;
 font-size: ${$s};
 font-family: ${zs};
 line-height: ${Ds};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [H("input", `
 font-family: inherit;
 font-size: inherit;
 `)]);
var Bs = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_26504_XKHRYLZIHXXZLNIG", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.97.2", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-5a8078c568-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
function wt(e, n, t) {
  if (!n) {
    Bs.NODE_ENV !== "production" && Zr("use-style", "No style is specified.");
    return;
  }
  const o = gn(), r = ue(vn, null), i = () => {
    const l = t.value;
    n.mount({
      id: l === void 0 ? e : l + e,
      head: !0,
      anchorMetaName: Gn,
      props: {
        bPrefix: l ? `.${l}-` : void 0
      },
      ssr: o,
      parent: r == null ? void 0 : r.styleMountTarget
    }), r != null && r.preflightStyleDisabled || Qr.mount({
      id: "n-global",
      head: !0,
      anchorMetaName: Gn,
      ssr: o,
      parent: r == null ? void 0 : r.styleMountTarget
    });
  };
  o ? i() : vo(i);
}
function ye(e, n, t, o, r, i) {
  const l = gn(), a = ue(vn, null);
  if (t) {
    const c = () => {
      const f = i == null ? void 0 : i.value;
      t.mount({
        id: f === void 0 ? n : f + n,
        head: !0,
        props: {
          bPrefix: f ? `.${f}-` : void 0
        },
        anchorMetaName: Gn,
        ssr: l,
        parent: a == null ? void 0 : a.styleMountTarget
      }), a != null && a.preflightStyleDisabled || Qr.mount({
        id: "n-global",
        head: !0,
        anchorMetaName: Gn,
        ssr: l,
        parent: a == null ? void 0 : a.styleMountTarget
      });
    };
    l ? c() : vo(c);
  }
  return z(() => {
    var c;
    const {
      theme: {
        common: f,
        self: m,
        peers: v = {}
      } = {},
      themeOverrides: g = {},
      builtinThemeOverrides: u = {}
    } = r, {
      common: w,
      peers: C
    } = g, {
      common: h = void 0,
      [e]: {
        common: P = void 0,
        self: I = void 0,
        peers: x = {}
      } = {}
    } = (a == null ? void 0 : a.mergedThemeRef.value) || {}, {
      common: M = void 0,
      [e]: B = {}
    } = (a == null ? void 0 : a.mergedThemeOverridesRef.value) || {}, {
      common: b,
      peers: y = {}
    } = B, R = Jn({}, f || P || h || o.common, M, b, w), E = Jn(
      // {}, executed every time, no need for empty obj
      (c = m || I || o.self) === null || c === void 0 ? void 0 : c(R),
      u,
      B,
      g
    );
    return {
      common: R,
      self: E,
      peers: Jn({}, o.peers, x, v),
      peerOverrides: Jn({}, u.peers, y, C)
    };
  });
}
ye.props = {
  theme: Object,
  themeOverrides: Object,
  builtinThemeOverrides: Object
};
const Ls = G("base-icon", `
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
 `)]), Yn = re({
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
    wt("-base-icon", Ls, ae(e, "clsPrefix"));
  },
  render() {
    return p("i", {
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
}), ei = re({
  name: "BaseIconSwitchTransition",
  setup(e, {
    slots: n
  }) {
    const t = vt();
    return () => p(Tn, {
      name: "icon-switch-transition",
      appear: t.value
    }, n);
  }
});
function ni(e, n) {
  const t = re({
    render() {
      return n();
    }
  });
  return re({
    name: Ai(e),
    setup() {
      var o;
      const r = (o = ue(vn, null)) === null || o === void 0 ? void 0 : o.mergedIconsRef;
      return () => {
        var i;
        const l = (i = r == null ? void 0 : r.value) === null || i === void 0 ? void 0 : i[e];
        return l ? l() : p(t, null);
      };
    }
  });
}
const Ns = re({
  name: "Checkmark",
  render() {
    return p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, p("g", {
      fill: "none"
    }, p("path", {
      d: "M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",
      fill: "currentColor"
    })));
  }
}), Hs = re({
  name: "ChevronDown",
  render() {
    return p("svg", {
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, p("path", {
      d: "M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",
      fill: "currentColor"
    }));
  }
}), Ws = ni("clear", () => p("svg", {
  viewBox: "0 0 16 16",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, p("g", {
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, p("g", {
  fill: "currentColor",
  "fill-rule": "nonzero"
}, p("path", {
  d: "M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"
}))))), Vs = ni("close", () => p("svg", {
  viewBox: "0 0 12 12",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": !0
}, p("g", {
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, p("g", {
  fill: "currentColor",
  "fill-rule": "nonzero"
}, p("path", {
  d: "M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"
}))))), Us = re({
  name: "Empty",
  render() {
    return p("svg", {
      viewBox: "0 0 28 28",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, p("path", {
      d: "M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",
      fill: "currentColor"
    }), p("path", {
      d: "M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",
      fill: "currentColor"
    }));
  }
}), {
  cubicBezierEaseInOut: js
} = Xn;
function mo({
  originalTransform: e = "",
  left: n = 0,
  top: t = 0,
  transition: o = `all .3s ${js} !important`
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
    transition: o
  })];
}
const Gs = G("base-clear", `
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
 `, [mo({
  originalTransform: "translateX(-50%) translateY(-50%)",
  left: "50%",
  top: "50%"
})])])]), Ks = re({
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
    return wt("-base-clear", Gs, ae(e, "clsPrefix")), {
      handleMouseDown(n) {
        n.preventDefault();
      }
    };
  },
  render() {
    const {
      clsPrefix: e
    } = this;
    return p("div", {
      class: `${e}-base-clear`
    }, p(ei, null, {
      default: () => {
        var n, t;
        return this.show ? p("div", {
          key: "dismiss",
          class: `${e}-base-clear__clear`,
          onClick: this.onClear,
          onMousedown: this.handleMouseDown,
          "data-clear": !0
        }, yo(this.$slots.icon, () => [p(Yn, {
          clsPrefix: e
        }, {
          default: () => p(Ws, null)
        })])) : p("div", {
          key: "icon",
          class: `${e}-base-clear__placeholder`
        }, (t = (n = this.$slots).placeholder) === null || t === void 0 ? void 0 : t.call(n));
      }
    }));
  }
}), Xs = G("base-close", `
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
 `), ke("disabled", [H("&:hover", `
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
 `)])]), Ys = re({
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
    return wt("-base-close", Xs, ae(e, "clsPrefix")), () => {
      const {
        clsPrefix: n,
        disabled: t,
        absolute: o,
        round: r,
        isButtonTag: i
      } = e;
      return p(i ? "button" : "div", {
        type: i ? "button" : void 0,
        tabindex: t || !e.focusable ? -1 : 0,
        "aria-disabled": t,
        "aria-label": "close",
        role: i ? void 0 : "button",
        disabled: t,
        class: [`${n}-base-close`, o && `${n}-base-close--absolute`, t && `${n}-base-close--disabled`, r && `${n}-base-close--round`],
        onMousedown: (a) => {
          e.focusable || a.preventDefault();
        },
        onClick: e.onClick
      }, p(Yn, {
        clsPrefix: n
      }, {
        default: () => p(Vs, null)
      }));
    };
  }
}), qs = re({
  props: {
    onFocus: Function,
    onBlur: Function
  },
  setup(e) {
    return () => p("div", {
      style: "width: 0; height: 0",
      tabindex: 0,
      onFocus: e.onFocus,
      onBlur: e.onBlur
    });
  }
}), Zs = H([H("@keyframes rotator", `
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
 `, [mo()]), Y("placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [mo({
  left: "50%",
  top: "50%",
  originalTransform: "translateX(-50%) translateY(-50%)"
})]), Y("container", `
 animation: rotator 3s linear infinite both;
 `, [Y("icon", `
 height: 1em;
 width: 1em;
 `)])])]), Qt = "1.6s", Js = {
  strokeWidth: {
    type: Number,
    default: 28
  },
  stroke: {
    type: String,
    default: void 0
  }
}, ti = re({
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
  }, Js),
  setup(e) {
    wt("-base-loading", Zs, ae(e, "clsPrefix"));
  },
  render() {
    const {
      clsPrefix: e,
      radius: n,
      strokeWidth: t,
      stroke: o,
      scale: r
    } = this, i = n / r;
    return p("div", {
      class: `${e}-base-loading`,
      role: "img",
      "aria-label": "loading"
    }, p(ei, null, {
      default: () => this.show ? p("div", {
        key: "icon",
        class: `${e}-base-loading__transition-wrapper`
      }, p("div", {
        class: `${e}-base-loading__container`
      }, p("svg", {
        class: `${e}-base-loading__icon`,
        viewBox: `0 0 ${2 * i} ${2 * i}`,
        xmlns: "http://www.w3.org/2000/svg",
        style: {
          color: o
        }
      }, p("g", null, p("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        values: `0 ${i} ${i};270 ${i} ${i}`,
        begin: "0s",
        dur: Qt,
        fill: "freeze",
        repeatCount: "indefinite"
      }), p("circle", {
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
      }, p("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        values: `0 ${i} ${i};135 ${i} ${i};450 ${i} ${i}`,
        begin: "0s",
        dur: Qt,
        fill: "freeze",
        repeatCount: "indefinite"
      }), p("animate", {
        attributeName: "stroke-dashoffset",
        values: `${5.67 * n};${1.42 * n};${5.67 * n}`,
        begin: "0s",
        dur: Qt,
        fill: "freeze",
        repeatCount: "indefinite"
      })))))) : p("div", {
        key: "placeholder",
        class: `${e}-base-loading__placeholder`
      }, this.$slots)
    }));
  }
}), {
  cubicBezierEaseInOut: rr
} = Xn;
function Qs({
  name: e = "fade-in",
  enterDuration: n = "0.2s",
  leaveDuration: t = "0.2s",
  enterCubicBezier: o = rr,
  leaveCubicBezier: r = rr
} = {}) {
  return [H(`&.${e}-transition-enter-active`, {
    transition: `all ${n} ${o}!important`
  }), H(`&.${e}-transition-leave-active`, {
    transition: `all ${t} ${r}!important`
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
}, ed = pn(j.neutralBase), oi = pn(j.neutralInvertBase), nd = `rgba(${oi.slice(0, 3).join(", ")}, `;
function ir(e) {
  return `${nd + String(e)})`;
}
function be(e) {
  const n = Array.from(oi);
  return n[3] = Number(e), Vi(ed, n);
}
const Sn = Object.assign(Object.assign({
  name: "common"
}, Xn), {
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
  textColorDisabled: be(j.alpha4),
  placeholderColor: be(j.alpha4),
  placeholderColorDisabled: be(j.alpha5),
  iconColor: be(j.alpha4),
  iconColorHover: Qn(be(j.alpha4), {
    lightness: 0.75
  }),
  iconColorPressed: Qn(be(j.alpha4), {
    lightness: 0.9
  }),
  iconColorDisabled: be(j.alpha5),
  opacity1: j.alpha1,
  opacity2: j.alpha2,
  opacity3: j.alpha3,
  opacity4: j.alpha4,
  opacity5: j.alpha5,
  dividerColor: "rgb(239, 239, 245)",
  borderColor: "rgb(224, 224, 230)",
  // close
  closeIconColor: be(Number(j.alphaClose)),
  closeIconColorHover: be(Number(j.alphaClose)),
  closeIconColorPressed: be(Number(j.alphaClose)),
  closeColorHover: "rgba(0, 0, 0, .09)",
  closeColorPressed: "rgba(0, 0, 0, .13)",
  // clear
  clearColor: be(j.alpha4),
  clearColorHover: Qn(be(j.alpha4), {
    lightness: 0.75
  }),
  clearColorPressed: Qn(be(j.alpha4), {
    lightness: 0.9
  }),
  scrollbarColor: ir(j.alphaScrollbar),
  scrollbarColorHover: ir(j.alphaScrollbarHover),
  scrollbarWidth: "5px",
  scrollbarHeight: "5px",
  scrollbarBorderRadius: "5px",
  progressRailColor: be(j.alphaProgressRail),
  railColor: "rgb(219, 219, 223)",
  popoverColor: j.neutralPopover,
  tableColor: j.neutralCard,
  cardColor: j.neutralCard,
  modalColor: j.neutralModal,
  bodyColor: j.neutralBody,
  tagColor: "#eee",
  avatarColor: be(j.alphaAvatar),
  invertedColor: "rgb(0, 20, 40)",
  inputColor: be(j.alphaInput),
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
}), td = {
  railInsetHorizontalBottom: "auto 2px 4px 2px",
  railInsetHorizontalTop: "4px 2px auto 2px",
  railInsetVerticalRight: "2px 4px 2px auto",
  railInsetVerticalLeft: "2px auto 2px 4px",
  railColor: "transparent"
};
function od(e) {
  const {
    scrollbarColor: n,
    scrollbarColorHover: t,
    scrollbarHeight: o,
    scrollbarWidth: r,
    scrollbarBorderRadius: i
  } = e;
  return Object.assign(Object.assign({}, td), {
    height: o,
    width: r,
    borderRadius: i,
    color: n,
    colorHover: t
  });
}
const ri = {
  name: "Scrollbar",
  common: Sn,
  self: od
}, rd = G("scrollbar", `
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
 `, [Qs(), H("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), id = Object.assign(Object.assign({}, ye.props), {
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
}), ii = re({
  name: "Scrollbar",
  props: id,
  inheritAttrs: !1,
  setup(e) {
    const {
      mergedClsPrefixRef: n,
      inlineThemeDisabled: t,
      mergedRtlRef: o
    } = bn(e), r = St("Scrollbar", o, n), i = $(null), l = $(null), a = $(null), s = $(null), c = $(null), f = $(null), m = $(null), v = $(null), g = $(null), u = $(null), w = $(null), C = $(0), h = $(0), P = $(!1), I = $(!1);
    let x = !1, M = !1, B, b, y = 0, R = 0, E = 0, V = 0;
    const Q = Fl(), _ = ye("Scrollbar", "-scrollbar", rd, ri, e, n), k = z(() => {
      const {
        value: d
      } = v, {
        value: S
      } = f, {
        value: T
      } = u;
      return d === null || S === null || T === null ? 0 : Math.min(d, T * d / S + Un(_.value.self.width) * 1.5);
    }), O = z(() => `${k.value}px`), N = z(() => {
      const {
        value: d
      } = g, {
        value: S
      } = m, {
        value: T
      } = w;
      return d === null || S === null || T === null ? 0 : T * d / S + Un(_.value.self.height) * 1.5;
    }), q = z(() => `${N.value}px`), J = z(() => {
      const {
        value: d
      } = v, {
        value: S
      } = C, {
        value: T
      } = f, {
        value: W
      } = u;
      if (d === null || T === null || W === null)
        return 0;
      {
        const U = T - d;
        return U ? S / U * (W - k.value) : 0;
      }
    }), ee = z(() => `${J.value}px`), X = z(() => {
      const {
        value: d
      } = g, {
        value: S
      } = h, {
        value: T
      } = m, {
        value: W
      } = w;
      if (d === null || T === null || W === null)
        return 0;
      {
        const U = T - d;
        return U ? S / U * (W - N.value) : 0;
      }
    }), ie = z(() => `${X.value}px`), F = z(() => {
      const {
        value: d
      } = v, {
        value: S
      } = f;
      return d !== null && S !== null && S > d;
    }), D = z(() => {
      const {
        value: d
      } = g, {
        value: S
      } = m;
      return d !== null && S !== null && S > d;
    }), oe = z(() => {
      const {
        trigger: d
      } = e;
      return d === "none" || P.value;
    }), me = z(() => {
      const {
        trigger: d
      } = e;
      return d === "none" || I.value;
    }), ge = z(() => {
      const {
        container: d
      } = e;
      return d ? d() : l.value;
    }), ze = z(() => {
      const {
        content: d
      } = e;
      return d ? d() : a.value;
    }), Pe = (d, S) => {
      if (!e.scrollable) return;
      if (typeof d == "number") {
        Oe(d, S ?? 0, 0, !1, "auto");
        return;
      }
      const {
        left: T,
        top: W,
        index: U,
        elSize: K,
        position: Z,
        behavior: ne,
        el: de,
        debounce: Le = !0
      } = d;
      (T !== void 0 || W !== void 0) && Oe(T ?? 0, W ?? 0, 0, !1, ne), de !== void 0 ? Oe(0, de.offsetTop, de.offsetHeight, Le, ne) : U !== void 0 && K !== void 0 ? Oe(0, U * K, K, Le, ne) : Z === "bottom" ? Oe(0, Number.MAX_SAFE_INTEGER, 0, !1, ne) : Z === "top" && Oe(0, 0, 0, !1, ne);
    }, pe = La(() => {
      e.container || Pe({
        top: C.value,
        left: h.value
      });
    }), De = () => {
      pe.isDeactivated || L();
    }, xe = (d) => {
      if (pe.isDeactivated) return;
      const {
        onResize: S
      } = e;
      S && S(d), L();
    }, Qe = (d, S) => {
      if (!e.scrollable) return;
      const {
        value: T
      } = ge;
      T && (typeof d == "object" ? T.scrollBy(d) : T.scrollBy(d, S || 0));
    };
    function Oe(d, S, T, W, U) {
      const {
        value: K
      } = ge;
      if (K) {
        if (W) {
          const {
            scrollTop: Z,
            offsetHeight: ne
          } = K;
          if (S > Z) {
            S + T <= Z + ne || K.scrollTo({
              left: d,
              top: S + T - ne,
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
    function en() {
      on(), rn(), L();
    }
    function nn() {
      Ie();
    }
    function Ie() {
      We(), tn();
    }
    function We() {
      b !== void 0 && window.clearTimeout(b), b = window.setTimeout(() => {
        I.value = !1;
      }, e.duration);
    }
    function tn() {
      B !== void 0 && window.clearTimeout(B), B = window.setTimeout(() => {
        P.value = !1;
      }, e.duration);
    }
    function on() {
      B !== void 0 && window.clearTimeout(B), P.value = !0;
    }
    function rn() {
      b !== void 0 && window.clearTimeout(b), I.value = !0;
    }
    function Xe(d) {
      const {
        onScroll: S
      } = e;
      S && S(d), Be();
    }
    function Be() {
      const {
        value: d
      } = ge;
      d && (C.value = d.scrollTop, h.value = d.scrollLeft * (r != null && r.value ? -1 : 1));
    }
    function ve() {
      const {
        value: d
      } = ze;
      d && (f.value = d.offsetHeight, m.value = d.offsetWidth);
      const {
        value: S
      } = ge;
      S && (v.value = S.offsetHeight, g.value = S.offsetWidth);
      const {
        value: T
      } = c, {
        value: W
      } = s;
      T && (w.value = T.offsetWidth), W && (u.value = W.offsetHeight);
    }
    function A() {
      const {
        value: d
      } = ge;
      d && (C.value = d.scrollTop, h.value = d.scrollLeft * (r != null && r.value ? -1 : 1), v.value = d.offsetHeight, g.value = d.offsetWidth, f.value = d.scrollHeight, m.value = d.scrollWidth);
      const {
        value: S
      } = c, {
        value: T
      } = s;
      S && (w.value = S.offsetWidth), T && (u.value = T.offsetHeight);
    }
    function L() {
      e.scrollable && (e.useUnifiedContainer ? A() : (ve(), Be()));
    }
    function se(d) {
      var S;
      return !(!((S = i.value) === null || S === void 0) && S.contains(Vn(d)));
    }
    function An(d) {
      d.preventDefault(), d.stopPropagation(), M = !0, _e("mousemove", window, wn, !0), _e("mouseup", window, ln, !0), R = h.value, E = r != null && r.value ? window.innerWidth - d.clientX : d.clientX;
    }
    function wn(d) {
      if (!M) return;
      B !== void 0 && window.clearTimeout(B), b !== void 0 && window.clearTimeout(b);
      const {
        value: S
      } = g, {
        value: T
      } = m, {
        value: W
      } = N;
      if (S === null || T === null) return;
      const K = (r != null && r.value ? window.innerWidth - d.clientX - E : d.clientX - E) * (T - S) / (S - W), Z = T - S;
      let ne = R + K;
      ne = Math.min(Z, ne), ne = Math.max(ne, 0);
      const {
        value: de
      } = ge;
      if (de) {
        de.scrollLeft = ne * (r != null && r.value ? -1 : 1);
        const {
          internalOnUpdateScrollLeft: Le
        } = e;
        Le && Le(ne);
      }
    }
    function ln(d) {
      d.preventDefault(), d.stopPropagation(), he("mousemove", window, wn, !0), he("mouseup", window, ln, !0), M = !1, L(), se(d) && Ie();
    }
    function yn(d) {
      d.preventDefault(), d.stopPropagation(), x = !0, _e("mousemove", window, Ye, !0), _e("mouseup", window, an, !0), y = C.value, V = d.clientY;
    }
    function Ye(d) {
      if (!x) return;
      B !== void 0 && window.clearTimeout(B), b !== void 0 && window.clearTimeout(b);
      const {
        value: S
      } = v, {
        value: T
      } = f, {
        value: W
      } = k;
      if (S === null || T === null) return;
      const K = (d.clientY - V) * (T - S) / (S - W), Z = T - S;
      let ne = y + K;
      ne = Math.min(Z, ne), ne = Math.max(ne, 0);
      const {
        value: de
      } = ge;
      de && (de.scrollTop = ne);
    }
    function an(d) {
      d.preventDefault(), d.stopPropagation(), he("mousemove", window, Ye, !0), he("mouseup", window, an, !0), x = !1, L(), se(d) && Ie();
    }
    Ge(() => {
      const {
        value: d
      } = D, {
        value: S
      } = F, {
        value: T
      } = n, {
        value: W
      } = c, {
        value: U
      } = s;
      W && (d ? W.classList.remove(`${T}-scrollbar-rail--disabled`) : W.classList.add(`${T}-scrollbar-rail--disabled`)), U && (S ? U.classList.remove(`${T}-scrollbar-rail--disabled`) : U.classList.add(`${T}-scrollbar-rail--disabled`));
    }), Te(() => {
      e.container || L();
    }), $e(() => {
      B !== void 0 && window.clearTimeout(B), b !== void 0 && window.clearTimeout(b), he("mousemove", window, Ye, !0), he("mouseup", window, an, !0);
    });
    const xn = z(() => {
      const {
        common: {
          cubicBezierEaseInOut: d
        },
        self: {
          color: S,
          colorHover: T,
          height: W,
          width: U,
          borderRadius: K,
          railInsetHorizontalTop: Z,
          railInsetHorizontalBottom: ne,
          railInsetVerticalRight: de,
          railInsetVerticalLeft: Le,
          railColor: yt
        }
      } = _.value, {
        top: xt,
        right: _t,
        bottom: Pt,
        left: Et
      } = Ae(Z), {
        top: Ot,
        right: Mt,
        bottom: Rt,
        left: Tt
      } = Ae(ne), {
        top: It,
        right: Ft,
        bottom: At,
        left: kt
      } = Ae(r != null && r.value ? Zo(de) : de), {
        top: $t,
        right: zt,
        bottom: Dt,
        left: Bt
      } = Ae(r != null && r.value ? Zo(Le) : Le);
      return {
        "--n-scrollbar-bezier": d,
        "--n-scrollbar-color": S,
        "--n-scrollbar-color-hover": T,
        "--n-scrollbar-border-radius": K,
        "--n-scrollbar-width": U,
        "--n-scrollbar-height": W,
        "--n-scrollbar-rail-top-horizontal-top": xt,
        "--n-scrollbar-rail-right-horizontal-top": _t,
        "--n-scrollbar-rail-bottom-horizontal-top": Pt,
        "--n-scrollbar-rail-left-horizontal-top": Et,
        "--n-scrollbar-rail-top-horizontal-bottom": Ot,
        "--n-scrollbar-rail-right-horizontal-bottom": Mt,
        "--n-scrollbar-rail-bottom-horizontal-bottom": Rt,
        "--n-scrollbar-rail-left-horizontal-bottom": Tt,
        "--n-scrollbar-rail-top-vertical-right": It,
        "--n-scrollbar-rail-right-vertical-right": Ft,
        "--n-scrollbar-rail-bottom-vertical-right": At,
        "--n-scrollbar-rail-left-vertical-right": kt,
        "--n-scrollbar-rail-top-vertical-left": $t,
        "--n-scrollbar-rail-right-vertical-left": zt,
        "--n-scrollbar-rail-bottom-vertical-left": Dt,
        "--n-scrollbar-rail-left-vertical-left": Bt,
        "--n-scrollbar-rail-color": yt
      };
    }), Fe = t ? Cn("scrollbar", void 0, xn, e) : void 0;
    return Object.assign(Object.assign({}, {
      scrollTo: Pe,
      scrollBy: Qe,
      sync: L,
      syncUnifiedContainer: A,
      handleMouseEnterWrapper: en,
      handleMouseLeaveWrapper: nn
    }), {
      mergedClsPrefix: n,
      rtlEnabled: r,
      containerScrollTop: C,
      wrapperRef: i,
      containerRef: l,
      contentRef: a,
      yRailRef: s,
      xRailRef: c,
      needYBar: F,
      needXBar: D,
      yBarSizePx: O,
      xBarSizePx: q,
      yBarTopPx: ee,
      xBarLeftPx: ie,
      isShowXBar: oe,
      isShowYBar: me,
      isIos: Q,
      handleScroll: Xe,
      handleContentResize: De,
      handleContainerResize: xe,
      handleYScrollMouseDown: yn,
      handleXScrollMouseDown: An,
      cssVars: t ? void 0 : xn,
      themeClass: Fe == null ? void 0 : Fe.themeClass,
      onRender: Fe == null ? void 0 : Fe.onRender
    });
  },
  render() {
    var e;
    const {
      $slots: n,
      mergedClsPrefix: t,
      triggerDisplayManually: o,
      rtlEnabled: r,
      internalHoistYRail: i,
      yPlacement: l,
      xPlacement: a,
      xScrollable: s
    } = this;
    if (!this.scrollable) return (e = n.default) === null || e === void 0 ? void 0 : e.call(n);
    const c = this.trigger === "none", f = (g, u) => p("div", {
      ref: "yRailRef",
      class: [`${t}-scrollbar-rail`, `${t}-scrollbar-rail--vertical`, `${t}-scrollbar-rail--vertical--${l}`, g],
      "data-scrollbar-rail": !0,
      style: [u || "", this.verticalRailStyle],
      "aria-hidden": !0
    }, p(c ? po : Tn, c ? null : {
      name: "fade-in-transition"
    }, {
      default: () => this.needYBar && this.isShowYBar && !this.isIos ? p("div", {
        class: `${t}-scrollbar-rail__scrollbar`,
        style: {
          height: this.yBarSizePx,
          top: this.yBarTopPx
        },
        onMousedown: this.handleYScrollMouseDown
      }) : null
    })), m = () => {
      var g, u;
      return (g = this.onRender) === null || g === void 0 || g.call(this), p("div", gt(this.$attrs, {
        role: "none",
        ref: "wrapperRef",
        class: [`${t}-scrollbar`, this.themeClass, r && `${t}-scrollbar--rtl`],
        style: this.cssVars,
        onMouseenter: o ? void 0 : this.handleMouseEnterWrapper,
        onMouseleave: o ? void 0 : this.handleMouseLeaveWrapper
      }), [this.container ? (u = n.default) === null || u === void 0 ? void 0 : u.call(n) : p("div", {
        role: "none",
        ref: "containerRef",
        class: [`${t}-scrollbar-container`, this.containerClass],
        style: this.containerStyle,
        onScroll: this.handleScroll,
        onWheel: this.onWheel
      }, p(ht, {
        onResize: this.handleContentResize
      }, {
        default: () => p("div", {
          ref: "contentRef",
          role: "none",
          style: [{
            width: this.xScrollable ? "fit-content" : null
          }, this.contentStyle],
          class: [`${t}-scrollbar-content`, this.contentClass]
        }, n)
      })), i ? null : f(void 0, void 0), s && p("div", {
        ref: "xRailRef",
        class: [`${t}-scrollbar-rail`, `${t}-scrollbar-rail--horizontal`, `${t}-scrollbar-rail--horizontal--${a}`],
        style: this.horizontalRailStyle,
        "data-scrollbar-rail": !0,
        "aria-hidden": !0
      }, p(c ? po : Tn, c ? null : {
        name: "fade-in-transition"
      }, {
        default: () => this.needXBar && this.isShowXBar && !this.isIos ? p("div", {
          class: `${t}-scrollbar-rail__scrollbar`,
          style: {
            width: this.xBarSizePx,
            right: r ? this.xBarLeftPx : void 0,
            left: r ? void 0 : this.xBarLeftPx
          },
          onMousedown: this.handleXScrollMouseDown
        }) : null
      }))]);
    }, v = this.container ? m() : p(ht, {
      onResize: this.handleContainerResize
    }, {
      default: m
    });
    return i ? p(mn, null, v, f(this.themeClass, this.cssVars)) : v;
  }
}), ld = ii, ad = {
  iconSizeTiny: "28px",
  iconSizeSmall: "34px",
  iconSizeMedium: "40px",
  iconSizeLarge: "46px",
  iconSizeHuge: "52px"
};
function sd(e) {
  const {
    textColorDisabled: n,
    iconColor: t,
    textColor2: o,
    fontSizeTiny: r,
    fontSizeSmall: i,
    fontSizeMedium: l,
    fontSizeLarge: a,
    fontSizeHuge: s
  } = e;
  return Object.assign(Object.assign({}, ad), {
    fontSizeTiny: r,
    fontSizeSmall: i,
    fontSizeMedium: l,
    fontSizeLarge: a,
    fontSizeHuge: s,
    textColor: n,
    iconColor: t,
    extraTextColor: o
  });
}
const li = {
  name: "Empty",
  common: Sn,
  self: sd
}, dd = G("empty", `
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
 `)]), cd = Object.assign(Object.assign({}, ye.props), {
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
}), ud = re({
  name: "Empty",
  props: cd,
  slots: Object,
  setup(e) {
    const {
      mergedClsPrefixRef: n,
      inlineThemeDisabled: t,
      mergedComponentPropsRef: o
    } = bn(e), r = ye("Empty", "-empty", dd, li, e, n), {
      localeRef: i
    } = Jr("Empty"), l = z(() => {
      var f, m, v;
      return (f = e.description) !== null && f !== void 0 ? f : (v = (m = o == null ? void 0 : o.value) === null || m === void 0 ? void 0 : m.Empty) === null || v === void 0 ? void 0 : v.description;
    }), a = z(() => {
      var f, m;
      return ((m = (f = o == null ? void 0 : o.value) === null || f === void 0 ? void 0 : f.Empty) === null || m === void 0 ? void 0 : m.renderIcon) || (() => p(Us, null));
    }), s = z(() => {
      const {
        size: f
      } = e, {
        common: {
          cubicBezierEaseInOut: m
        },
        self: {
          [ce("iconSize", f)]: v,
          [ce("fontSize", f)]: g,
          textColor: u,
          iconColor: w,
          extraTextColor: C
        }
      } = r.value;
      return {
        "--n-icon-size": v,
        "--n-font-size": g,
        "--n-bezier": m,
        "--n-text-color": u,
        "--n-icon-color": w,
        "--n-extra-text-color": C
      };
    }), c = t ? Cn("empty", z(() => {
      let f = "";
      const {
        size: m
      } = e;
      return f += m[0], f;
    }), s, e) : void 0;
    return {
      mergedClsPrefix: n,
      mergedRenderIcon: a,
      localizedDescription: z(() => l.value || i.value.description),
      cssVars: t ? void 0 : s,
      themeClass: c == null ? void 0 : c.themeClass,
      onRender: c == null ? void 0 : c.onRender
    };
  },
  render() {
    const {
      $slots: e,
      mergedClsPrefix: n,
      onRender: t
    } = this;
    return t == null || t(), p("div", {
      class: [`${n}-empty`, this.themeClass],
      style: this.cssVars
    }, this.showIcon ? p("div", {
      class: `${n}-empty__icon`
    }, e.icon ? e.icon() : p(Yn, {
      clsPrefix: n
    }, {
      default: this.mergedRenderIcon
    })) : null, this.showDescription ? p("div", {
      class: `${n}-empty__description`
    }, e.default ? e.default() : this.localizedDescription) : null, e.extra ? p("div", {
      class: `${n}-empty__extra`
    }, e.extra()) : null);
  }
}), fd = {
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
function hd(e) {
  const {
    borderRadius: n,
    popoverColor: t,
    textColor3: o,
    dividerColor: r,
    textColor2: i,
    primaryColorPressed: l,
    textColorDisabled: a,
    primaryColor: s,
    opacityDisabled: c,
    hoverColor: f,
    fontSizeTiny: m,
    fontSizeSmall: v,
    fontSizeMedium: g,
    fontSizeLarge: u,
    fontSizeHuge: w,
    heightTiny: C,
    heightSmall: h,
    heightMedium: P,
    heightLarge: I,
    heightHuge: x
  } = e;
  return Object.assign(Object.assign({}, fd), {
    optionFontSizeTiny: m,
    optionFontSizeSmall: v,
    optionFontSizeMedium: g,
    optionFontSizeLarge: u,
    optionFontSizeHuge: w,
    optionHeightTiny: C,
    optionHeightSmall: h,
    optionHeightMedium: P,
    optionHeightLarge: I,
    optionHeightHuge: x,
    borderRadius: n,
    color: t,
    groupHeaderTextColor: o,
    actionDividerColor: r,
    optionTextColor: i,
    optionTextColorPressed: l,
    optionTextColorDisabled: a,
    optionTextColorActive: s,
    optionOpacityDisabled: c,
    optionCheckColor: s,
    optionColorPending: f,
    optionColorActive: "rgba(0, 0, 0, 0)",
    optionColorActivePending: f,
    actionTextColor: i,
    loadingColor: s
  });
}
const ai = {
  name: "InternalSelectMenu",
  common: Sn,
  peers: {
    Scrollbar: ri,
    Empty: li
  },
  self: hd
}, lr = re({
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
      nodePropsRef: o
    } = ue(wo);
    return {
      labelField: t,
      nodeProps: o,
      renderLabel: e,
      renderOption: n
    };
  },
  render() {
    const {
      clsPrefix: e,
      renderLabel: n,
      renderOption: t,
      nodeProps: o,
      tmNode: {
        rawNode: r
      }
    } = this, i = o == null ? void 0 : o(r), l = n ? n(r, !1) : On(r[this.labelField], r, !1), a = p("div", Object.assign({}, i, {
      class: [`${e}-base-select-group-header`, i == null ? void 0 : i.class]
    }), l);
    return r.render ? r.render({
      node: a,
      option: r
    }) : t ? t({
      node: a,
      option: r,
      selected: !1
    }) : a;
  }
});
function pd(e, n) {
  return p(Tn, {
    name: "fade-in-scale-up-transition"
  }, {
    default: () => e ? p(Yn, {
      clsPrefix: n,
      class: `${n}-base-select-option__check`
    }, {
      default: () => p(Ns)
    }) : null
  });
}
const ar = re({
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
      multipleRef: o,
      valueSetRef: r,
      renderLabelRef: i,
      renderOptionRef: l,
      labelFieldRef: a,
      valueFieldRef: s,
      showCheckmarkRef: c,
      nodePropsRef: f,
      handleOptionClick: m,
      handleOptionMouseEnter: v
    } = ue(wo), g = Re(() => {
      const {
        value: h
      } = t;
      return h ? e.tmNode.key === h.key : !1;
    });
    function u(h) {
      const {
        tmNode: P
      } = e;
      P.disabled || m(h, P);
    }
    function w(h) {
      const {
        tmNode: P
      } = e;
      P.disabled || v(h, P);
    }
    function C(h) {
      const {
        tmNode: P
      } = e, {
        value: I
      } = g;
      P.disabled || I || v(h, P);
    }
    return {
      multiple: o,
      isGrouped: Re(() => {
        const {
          tmNode: h
        } = e, {
          parent: P
        } = h;
        return P && P.rawNode.type === "group";
      }),
      showCheckmark: c,
      nodeProps: f,
      isPending: g,
      isSelected: Re(() => {
        const {
          value: h
        } = n, {
          value: P
        } = o;
        if (h === null) return !1;
        const I = e.tmNode.rawNode[s.value];
        if (P) {
          const {
            value: x
          } = r;
          return x.has(I);
        } else
          return h === I;
      }),
      labelField: a,
      renderLabel: i,
      renderOption: l,
      handleMouseMove: C,
      handleMouseEnter: w,
      handleClick: u
    };
  },
  render() {
    const {
      clsPrefix: e,
      tmNode: {
        rawNode: n
      },
      isSelected: t,
      isPending: o,
      isGrouped: r,
      showCheckmark: i,
      nodeProps: l,
      renderOption: a,
      renderLabel: s,
      handleClick: c,
      handleMouseEnter: f,
      handleMouseMove: m
    } = this, v = pd(t, e), g = s ? [s(n, t), i && v] : [On(n[this.labelField], n, t), i && v], u = l == null ? void 0 : l(n), w = p("div", Object.assign({}, u, {
      class: [`${e}-base-select-option`, n.class, u == null ? void 0 : u.class, {
        [`${e}-base-select-option--disabled`]: n.disabled,
        [`${e}-base-select-option--selected`]: t,
        [`${e}-base-select-option--grouped`]: r,
        [`${e}-base-select-option--pending`]: o,
        [`${e}-base-select-option--show-checkmark`]: i
      }],
      style: [(u == null ? void 0 : u.style) || "", n.style || ""],
      onClick: Zt([c, u == null ? void 0 : u.onClick]),
      onMouseenter: Zt([f, u == null ? void 0 : u.onMouseenter]),
      onMousemove: Zt([m, u == null ? void 0 : u.onMousemove])
    }), p("div", {
      class: `${e}-base-select-option__content`
    }, g));
    return n.render ? n.render({
      node: w,
      option: n,
      selected: t
    }) : a ? a({
      node: w,
      option: n,
      selected: t
    }) : w;
  }
}), {
  cubicBezierEaseIn: sr,
  cubicBezierEaseOut: dr
} = Xn;
function si({
  transformOrigin: e = "inherit",
  duration: n = ".2s",
  enterScale: t = ".9",
  originalTransform: o = "",
  originalTransition: r = ""
} = {}) {
  return [H("&.fade-in-scale-up-transition-leave-active", {
    transformOrigin: e,
    transition: `opacity ${n} ${sr}, transform ${n} ${sr} ${r && `,${r}`}`
  }), H("&.fade-in-scale-up-transition-enter-active", {
    transformOrigin: e,
    transition: `opacity ${n} ${dr}, transform ${n} ${dr} ${r && `,${r}`}`
  }), H("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to", {
    opacity: 0,
    transform: `${o} scale(${t})`
  }), H("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to", {
    opacity: 1,
    transform: `${o} scale(1)`
  })];
}
const md = G("base-select-menu", `
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
 `, [ke("selected", `
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
 `, [si({
  enterScale: "0.5"
})])])]), gd = re({
  name: "InternalSelectMenu",
  props: Object.assign(Object.assign({}, ye.props), {
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
    } = bn(e), o = St("InternalSelectMenu", t, n), r = ye("InternalSelectMenu", "-internal-select-menu", md, ai, e, ae(e, "clsPrefix")), i = $(null), l = $(null), a = $(null), s = z(() => e.treeMate.getFlattenedNodes()), c = z(() => rl(s.value)), f = $(null);
    function m() {
      const {
        treeMate: F
      } = e;
      let D = null;
      const {
        value: oe
      } = e;
      oe === null ? D = F.getFirstAvailableNode() : (e.multiple ? D = F.getNode((oe || [])[(oe || []).length - 1]) : D = F.getNode(oe), (!D || D.disabled) && (D = F.getFirstAvailableNode())), k(D || null);
    }
    function v() {
      const {
        value: F
      } = f;
      F && !e.treeMate.getNode(F.key) && (f.value = null);
    }
    let g;
    we(() => e.show, (F) => {
      F ? g = we(() => e.treeMate, () => {
        e.resetMenuOnOptionsChange ? (e.autoPending ? m() : v(), mt(O)) : v();
      }, {
        immediate: !0
      }) : g == null || g();
    }, {
      immediate: !0
    }), $e(() => {
      g == null || g();
    });
    const u = z(() => Un(r.value.self[ce("optionHeight", e.size)])), w = z(() => Ae(r.value.self[ce("padding", e.size)])), C = z(() => e.multiple && Array.isArray(e.value) ? new Set(e.value) : /* @__PURE__ */ new Set()), h = z(() => {
      const F = s.value;
      return F && F.length === 0;
    });
    function P(F) {
      const {
        onToggle: D
      } = e;
      D && D(F);
    }
    function I(F) {
      const {
        onScroll: D
      } = e;
      D && D(F);
    }
    function x(F) {
      var D;
      (D = a.value) === null || D === void 0 || D.sync(), I(F);
    }
    function M() {
      var F;
      (F = a.value) === null || F === void 0 || F.sync();
    }
    function B() {
      const {
        value: F
      } = f;
      return F || null;
    }
    function b(F, D) {
      D.disabled || k(D, !1);
    }
    function y(F, D) {
      D.disabled || P(D);
    }
    function R(F) {
      var D;
      Bn(F, "action") || (D = e.onKeyup) === null || D === void 0 || D.call(e, F);
    }
    function E(F) {
      var D;
      Bn(F, "action") || (D = e.onKeydown) === null || D === void 0 || D.call(e, F);
    }
    function V(F) {
      var D;
      (D = e.onMousedown) === null || D === void 0 || D.call(e, F), !e.focusable && F.preventDefault();
    }
    function Q() {
      const {
        value: F
      } = f;
      F && k(F.getNext({
        loop: !0
      }), !0);
    }
    function _() {
      const {
        value: F
      } = f;
      F && k(F.getPrev({
        loop: !0
      }), !0);
    }
    function k(F, D = !1) {
      f.value = F, D && O();
    }
    function O() {
      var F, D;
      const oe = f.value;
      if (!oe) return;
      const me = c.value(oe.key);
      me !== null && (e.virtualScroll ? (F = l.value) === null || F === void 0 || F.scrollTo({
        index: me
      }) : (D = a.value) === null || D === void 0 || D.scrollTo({
        index: me,
        elSize: u.value
      }));
    }
    function N(F) {
      var D, oe;
      !((D = i.value) === null || D === void 0) && D.contains(F.target) && ((oe = e.onFocus) === null || oe === void 0 || oe.call(e, F));
    }
    function q(F) {
      var D, oe;
      !((D = i.value) === null || D === void 0) && D.contains(F.relatedTarget) || (oe = e.onBlur) === null || oe === void 0 || oe.call(e, F);
    }
    He(wo, {
      handleOptionMouseEnter: b,
      handleOptionClick: y,
      valueSetRef: C,
      pendingTmNodeRef: f,
      nodePropsRef: ae(e, "nodeProps"),
      showCheckmarkRef: ae(e, "showCheckmark"),
      multipleRef: ae(e, "multiple"),
      valueRef: ae(e, "value"),
      renderLabelRef: ae(e, "renderLabel"),
      renderOptionRef: ae(e, "renderOption"),
      labelFieldRef: ae(e, "labelField"),
      valueFieldRef: ae(e, "valueField")
    }), He(Vr, i), Te(() => {
      const {
        value: F
      } = a;
      F && F.sync();
    });
    const J = z(() => {
      const {
        size: F
      } = e, {
        common: {
          cubicBezierEaseInOut: D
        },
        self: {
          height: oe,
          borderRadius: me,
          color: ge,
          groupHeaderTextColor: ze,
          actionDividerColor: Pe,
          optionTextColorPressed: pe,
          optionTextColor: De,
          optionTextColorDisabled: xe,
          optionTextColorActive: Qe,
          optionOpacityDisabled: Oe,
          optionCheckColor: en,
          actionTextColor: nn,
          optionColorPending: Ie,
          optionColorActive: We,
          loadingColor: tn,
          loadingSize: on,
          optionColorActivePending: rn,
          [ce("optionFontSize", F)]: Xe,
          [ce("optionHeight", F)]: Be,
          [ce("optionPadding", F)]: ve
        }
      } = r.value;
      return {
        "--n-height": oe,
        "--n-action-divider-color": Pe,
        "--n-action-text-color": nn,
        "--n-bezier": D,
        "--n-border-radius": me,
        "--n-color": ge,
        "--n-option-font-size": Xe,
        "--n-group-header-text-color": ze,
        "--n-option-check-color": en,
        "--n-option-color-pending": Ie,
        "--n-option-color-active": We,
        "--n-option-color-active-pending": rn,
        "--n-option-height": Be,
        "--n-option-opacity-disabled": Oe,
        "--n-option-text-color": De,
        "--n-option-text-color-active": Qe,
        "--n-option-text-color-disabled": xe,
        "--n-option-text-color-pressed": pe,
        "--n-option-padding": ve,
        "--n-option-padding-left": Ae(ve, "left"),
        "--n-option-padding-right": Ae(ve, "right"),
        "--n-loading-color": tn,
        "--n-loading-size": on
      };
    }), {
      inlineThemeDisabled: ee
    } = e, X = ee ? Cn("internal-select-menu", z(() => e.size[0]), J, e) : void 0, ie = {
      selfRef: i,
      next: Q,
      prev: _,
      getPendingTmNode: B
    };
    return Xr(i, e.onResize), Object.assign({
      mergedTheme: r,
      mergedClsPrefix: n,
      rtlEnabled: o,
      virtualListRef: l,
      scrollbarRef: a,
      itemSize: u,
      padding: w,
      flattenedNodes: s,
      empty: h,
      virtualListContainer() {
        const {
          value: F
        } = l;
        return F == null ? void 0 : F.listElRef;
      },
      virtualListContent() {
        const {
          value: F
        } = l;
        return F == null ? void 0 : F.itemsElRef;
      },
      doScroll: I,
      handleFocusin: N,
      handleFocusout: q,
      handleKeyUp: R,
      handleKeyDown: E,
      handleMouseDown: V,
      handleVirtualListResize: M,
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
      mergedTheme: o,
      themeClass: r,
      onRender: i
    } = this;
    return i == null || i(), p("div", {
      ref: "selfRef",
      tabindex: this.focusable ? 0 : -1,
      class: [`${t}-base-select-menu`, this.rtlEnabled && `${t}-base-select-menu--rtl`, r, this.multiple && `${t}-base-select-menu--multiple`],
      style: this.cssVars,
      onFocusin: this.handleFocusin,
      onFocusout: this.handleFocusout,
      onKeyup: this.handleKeyUp,
      onKeydown: this.handleKeyDown,
      onMousedown: this.handleMouseDown,
      onMouseenter: this.onMouseenter,
      onMouseleave: this.onMouseleave
    }, hn(e.header, (l) => l && p("div", {
      class: `${t}-base-select-menu__header`,
      "data-header": !0,
      key: "header"
    }, l)), this.loading ? p("div", {
      class: `${t}-base-select-menu__loading`
    }, p(ti, {
      clsPrefix: t,
      strokeWidth: 20
    })) : this.empty ? p("div", {
      class: `${t}-base-select-menu__empty`,
      "data-empty": !0
    }, yo(e.empty, () => [p(ud, {
      theme: o.peers.Empty,
      themeOverrides: o.peerOverrides.Empty,
      size: this.size
    })])) : p(ii, {
      ref: "scrollbarRef",
      theme: o.peers.Scrollbar,
      themeOverrides: o.peerOverrides.Scrollbar,
      scrollable: this.scrollable,
      container: n ? this.virtualListContainer : void 0,
      content: n ? this.virtualListContent : void 0,
      onScroll: n ? void 0 : this.doScroll
    }, {
      default: () => n ? p($a, {
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
          item: l
        }) => l.isGroup ? p(lr, {
          key: l.key,
          clsPrefix: t,
          tmNode: l
        }) : l.ignored ? null : p(ar, {
          clsPrefix: t,
          key: l.key,
          tmNode: l
        })
      }) : p("div", {
        class: `${t}-base-select-menu-option-wrapper`,
        style: {
          paddingTop: this.padding.top,
          paddingBottom: this.padding.bottom
        }
      }, this.flattenedNodes.map((l) => l.isGroup ? p(lr, {
        key: l.key,
        clsPrefix: t,
        tmNode: l
      }) : p(ar, {
        clsPrefix: t,
        key: l.key,
        tmNode: l
      })))
    }), hn(e.action, (l) => l && [p("div", {
      class: `${t}-base-select-menu__action`,
      "data-action": !0,
      key: "action"
    }, l), p(qs, {
      onFocus: this.onTabOut,
      key: "focus-detector"
    })]));
  }
}), vd = {
  space: "6px",
  spaceArrow: "10px",
  arrowOffset: "10px",
  arrowOffsetVertical: "10px",
  arrowHeight: "6px",
  padding: "8px 14px"
};
function bd(e) {
  const {
    boxShadow2: n,
    popoverColor: t,
    textColor2: o,
    borderRadius: r,
    fontSize: i,
    dividerColor: l
  } = e;
  return Object.assign(Object.assign({}, vd), {
    fontSize: i,
    borderRadius: r,
    color: t,
    dividerColor: l,
    textColor: o,
    boxShadow: n
  });
}
const di = {
  name: "Popover",
  common: Sn,
  self: bd
}, eo = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, fe = "var(--n-arrow-height) * 1.414", Cd = H([G("popover", `
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
 `)]), ke("raw", `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [ke("scrollable", [ke("show-header-or-footer", "padding: var(--n-padding);")])]), Y("header", `
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
 width: calc(${fe});
 height: calc(${fe});
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
 top: calc(${fe} / -2);
 left: calc(${je("top-start")} - var(--v-offset-left));
 `), Me("top", `
 top: calc(${fe} / -2);
 transform: translateX(calc(${fe} / -2)) rotate(45deg);
 left: 50%;
 `), Me("top-end", `
 top: calc(${fe} / -2);
 right: calc(${je("top-end")} + var(--v-offset-left));
 `), Me("bottom-start", `
 bottom: calc(${fe} / -2);
 left: calc(${je("bottom-start")} - var(--v-offset-left));
 `), Me("bottom", `
 bottom: calc(${fe} / -2);
 transform: translateX(calc(${fe} / -2)) rotate(45deg);
 left: 50%;
 `), Me("bottom-end", `
 bottom: calc(${fe} / -2);
 right: calc(${je("bottom-end")} + var(--v-offset-left));
 `), Me("left-start", `
 left: calc(${fe} / -2);
 top: calc(${je("left-start")} - var(--v-offset-top));
 `), Me("left", `
 left: calc(${fe} / -2);
 transform: translateY(calc(${fe} / -2)) rotate(45deg);
 top: 50%;
 `), Me("left-end", `
 left: calc(${fe} / -2);
 bottom: calc(${je("left-end")} + var(--v-offset-top));
 `), Me("right-start", `
 right: calc(${fe} / -2);
 top: calc(${je("right-start")} - var(--v-offset-top));
 `), Me("right", `
 right: calc(${fe} / -2);
 transform: translateY(calc(${fe} / -2)) rotate(45deg);
 top: 50%;
 `), Me("right-end", `
 right: calc(${fe} / -2);
 bottom: calc(${je("right-end")} + var(--v-offset-top));
 `), ...ki({
  top: ["right-start", "left-start"],
  right: ["top-end", "bottom-end"],
  bottom: ["right-end", "left-end"],
  left: ["top-start", "bottom-start"]
}, (e, n) => {
  const t = ["right", "left"].includes(n), o = t ? "width" : "height";
  return e.map((r) => {
    const i = r.split("-")[1] === "end", a = `calc((${`var(--v-target-${o}, 0px)`} - ${fe}) / 2)`, s = je(r);
    return H(`[v-placement="${r}"] >`, [G("popover-shared", [te("center-arrow", [G("popover-arrow", `${n}: calc(max(${a}, ${s}) ${i ? "+" : "-"} var(--v-offset-${t ? "left" : "top"}));`)])])]);
  });
})]);
function je(e) {
  return ["top", "bottom"].includes(e.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)";
}
function Me(e, n) {
  const t = e.split("-")[0], o = ["top", "bottom"].includes(t) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
  return H(`[v-placement="${e}"] >`, [G("popover-shared", `
 margin-${eo[t]}: var(--n-space);
 `, [te("show-arrow", `
 margin-${eo[t]}: var(--n-space-arrow);
 `), te("overlap", `
 margin: 0;
 `), Ga("popover-arrow-wrapper", `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${t}: 100%;
 ${eo[t]}: auto;
 ${o}
 `, [G("popover-arrow", n)])])]);
}
const ci = Object.assign(Object.assign({}, ye.props), {
  to: Ke.propTo,
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
function Sd({
  arrowClass: e,
  arrowStyle: n,
  arrowWrapperClass: t,
  arrowWrapperStyle: o,
  clsPrefix: r
}) {
  return p("div", {
    key: "__popover-arrow__",
    style: o,
    class: [`${r}-popover-arrow-wrapper`, t]
  }, p("div", {
    class: [`${r}-popover-arrow`, e],
    style: n
  }));
}
const wd = re({
  name: "PopoverBody",
  inheritAttrs: !1,
  props: ci,
  setup(e, {
    slots: n,
    attrs: t
  }) {
    const {
      namespaceRef: o,
      mergedClsPrefixRef: r,
      inlineThemeDisabled: i
    } = bn(e), l = ye("Popover", "-popover", Cd, di, e, r), a = $(null), s = ue("NPopover"), c = $(null), f = $(e.show), m = $(!1);
    Ge(() => {
      const {
        show: b
      } = e;
      b && !Ka() && !e.internalDeactivateImmediately && (m.value = !0);
    });
    const v = z(() => {
      const {
        trigger: b,
        onClickoutside: y
      } = e, R = [], {
        positionManuallyRef: {
          value: E
        }
      } = s;
      return E || (b === "click" && !y && R.push([ft, x, void 0, {
        capture: !0
      }]), b === "hover" && R.push([_l, I])), y && R.push([ft, x, void 0, {
        capture: !0
      }]), (e.displayDirective === "show" || e.animated && m.value) && R.push([pr, e.show]), R;
    }), g = z(() => {
      const {
        common: {
          cubicBezierEaseInOut: b,
          cubicBezierEaseIn: y,
          cubicBezierEaseOut: R
        },
        self: {
          space: E,
          spaceArrow: V,
          padding: Q,
          fontSize: _,
          textColor: k,
          dividerColor: O,
          color: N,
          boxShadow: q,
          borderRadius: J,
          arrowHeight: ee,
          arrowOffset: X,
          arrowOffsetVertical: ie
        }
      } = l.value;
      return {
        "--n-box-shadow": q,
        "--n-bezier": b,
        "--n-bezier-ease-in": y,
        "--n-bezier-ease-out": R,
        "--n-font-size": _,
        "--n-text-color": k,
        "--n-color": N,
        "--n-divider-color": O,
        "--n-border-radius": J,
        "--n-arrow-height": ee,
        "--n-arrow-offset": X,
        "--n-arrow-offset-vertical": ie,
        "--n-padding": Q,
        "--n-space": E,
        "--n-space-arrow": V
      };
    }), u = z(() => {
      const b = e.width === "trigger" ? void 0 : Yt(e.width), y = [];
      b && y.push({
        width: b
      });
      const {
        maxWidth: R,
        minWidth: E
      } = e;
      return R && y.push({
        maxWidth: Yt(R)
      }), E && y.push({
        maxWidth: Yt(E)
      }), i || y.push(g.value), y;
    }), w = i ? Cn("popover", void 0, g, e) : void 0;
    s.setBodyInstance({
      syncPosition: C
    }), $e(() => {
      s.setBodyInstance(null);
    }), we(ae(e, "show"), (b) => {
      e.animated || (b ? f.value = !0 : f.value = !1);
    });
    function C() {
      var b;
      (b = a.value) === null || b === void 0 || b.syncPosition();
    }
    function h(b) {
      e.trigger === "hover" && e.keepAliveOnHover && e.show && s.handleMouseEnter(b);
    }
    function P(b) {
      e.trigger === "hover" && e.keepAliveOnHover && s.handleMouseLeave(b);
    }
    function I(b) {
      e.trigger === "hover" && !M().contains(Vn(b)) && s.handleMouseMoveOutside(b);
    }
    function x(b) {
      (e.trigger === "click" && !M().contains(Vn(b)) || e.onClickoutside) && s.handleClickOutside(b);
    }
    function M() {
      return s.getTriggerElement();
    }
    He(Gr, c), He(Ur, null), He(jr, null);
    function B() {
      if (w == null || w.onRender(), !(e.displayDirective === "show" || e.show || e.animated && m.value))
        return null;
      let y;
      const R = s.internalRenderBodyRef.value, {
        value: E
      } = r;
      if (R)
        y = R(
          // The popover class and overlap class must exists, they will be used
          // to place the body & transition animation.
          // Shadow class exists for reuse box-shadow.
          [`${E}-popover-shared`, w == null ? void 0 : w.themeClass.value, e.overlap && `${E}-popover-shared--overlap`, e.showArrow && `${E}-popover-shared--show-arrow`, e.arrowPointToCenter && `${E}-popover-shared--center-arrow`],
          c,
          u.value,
          h,
          P
        );
      else {
        const {
          value: V
        } = s.extraClassRef, {
          internalTrapFocus: Q
        } = e, _ = !tr(n.header) || !tr(n.footer), k = () => {
          var O, N;
          const q = _ ? p(mn, null, hn(n.header, (X) => X ? p("div", {
            class: [`${E}-popover__header`, e.headerClass],
            style: e.headerStyle
          }, X) : null), hn(n.default, (X) => X ? p("div", {
            class: [`${E}-popover__content`, e.contentClass],
            style: e.contentStyle
          }, n) : null), hn(n.footer, (X) => X ? p("div", {
            class: [`${E}-popover__footer`, e.footerClass],
            style: e.footerStyle
          }, X) : null)) : e.scrollable ? (O = n.default) === null || O === void 0 ? void 0 : O.call(n) : p("div", {
            class: [`${E}-popover__content`, e.contentClass],
            style: e.contentStyle
          }, n), J = e.scrollable ? p(ld, {
            contentClass: _ ? void 0 : `${E}-popover__content ${(N = e.contentClass) !== null && N !== void 0 ? N : ""}`,
            contentStyle: _ ? void 0 : e.contentStyle
          }, {
            default: () => q
          }) : q, ee = e.showArrow ? Sd({
            arrowClass: e.arrowClass,
            arrowStyle: e.arrowStyle,
            arrowWrapperClass: e.arrowWrapperClass,
            arrowWrapperStyle: e.arrowWrapperStyle,
            clsPrefix: E
          }) : null;
          return [J, ee];
        };
        y = p("div", gt({
          class: [`${E}-popover`, `${E}-popover-shared`, w == null ? void 0 : w.themeClass.value, V.map((O) => `${E}-${O}`), {
            [`${E}-popover--scrollable`]: e.scrollable,
            [`${E}-popover--show-header-or-footer`]: _,
            [`${E}-popover--raw`]: e.raw,
            [`${E}-popover-shared--overlap`]: e.overlap,
            [`${E}-popover-shared--show-arrow`]: e.showArrow,
            [`${E}-popover-shared--center-arrow`]: e.arrowPointToCenter
          }],
          ref: c,
          style: u.value,
          onKeydown: s.handleKeydown,
          onMouseenter: h,
          onMouseleave: P
        }, t), Q ? p(Ba, {
          active: e.show,
          autoFocus: !0
        }, {
          default: k
        }) : k());
      }
      return Kn(y, v.value);
    }
    return {
      displayed: m,
      namespace: o,
      isMounted: s.isMountedRef,
      zIndex: s.zIndexRef,
      followerRef: a,
      adjustedTo: Ke(e),
      followerEnabled: f,
      renderContentNode: B
    };
  },
  render() {
    return p(Ir, {
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
      teleportDisabled: this.adjustedTo === Ke.tdkey
    }, {
      default: () => this.animated ? p(Tn, {
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
var yd = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_26504_XKHRYLZIHXXZLNIG", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.97.2", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-5a8078c568-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
const xd = Object.keys(ci), _d = {
  focus: ["onFocus", "onBlur"],
  click: ["onClick"],
  hover: ["onMouseenter", "onMouseleave"],
  manual: [],
  nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"]
};
function Pd(e, n, t) {
  _d[n].forEach((o) => {
    e.props ? e.props = Object.assign({}, e.props) : e.props = {};
    const r = e.props[o], i = t[o];
    r ? e.props[o] = (...l) => {
      r(...l), i(...l);
    } : e.props[o] = i;
  });
}
const Ed = {
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
  to: Ke.propTo,
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
}, Od = Object.assign(Object.assign(Object.assign({}, ye.props), Ed), {
  internalOnAfterLeave: Function,
  internalRenderBody: Function
}), Md = re({
  name: "Popover",
  inheritAttrs: !1,
  props: Od,
  slots: Object,
  __popover__: !0,
  setup(e) {
    yd.NODE_ENV !== "production" && Ge(() => {
      e.maxWidth !== void 0 && Ze("popover", "`max-width` is deprecated, please use `style` instead."), e.minWidth !== void 0 && Ze("popover", "`min-width` is deprecated, please use `style` instead."), e.arrow !== void 0 && Ze("popover", "`arrow` is deprecated, please use `showArrow` instead."), e.onHide !== void 0 && Ze("popover", "`on-hide` is deprecated, please use `on-update:show` instead."), e.onShow !== void 0 && Ze("popover", "`on-show` is deprecated, please use `on-update:show` instead.");
    });
    const n = vt(), t = $(null), o = z(() => e.show), r = $(e.defaultShow), i = lo(o, r), l = Re(() => e.disabled ? !1 : i.value), a = () => {
      if (e.disabled) return !0;
      const {
        getDisabled: O
      } = e;
      return !!(O != null && O());
    }, s = () => a() ? !1 : i.value, c = wr(e, ["arrow", "showArrow"]), f = z(() => e.overlap ? !1 : c.value);
    let m = null;
    const v = $(null), g = $(null), u = Re(() => e.x !== void 0 && e.y !== void 0);
    function w(O) {
      const {
        "onUpdate:show": N,
        onUpdateShow: q,
        onShow: J,
        onHide: ee
      } = e;
      r.value = O, N && Ce(N, O), q && Ce(q, O), O && J && Ce(J, !0), O && ee && Ce(ee, !1);
    }
    function C() {
      m && m.syncPosition();
    }
    function h() {
      const {
        value: O
      } = v;
      O && (window.clearTimeout(O), v.value = null);
    }
    function P() {
      const {
        value: O
      } = g;
      O && (window.clearTimeout(O), g.value = null);
    }
    function I() {
      const O = a();
      if (e.trigger === "focus" && !O) {
        if (s()) return;
        w(!0);
      }
    }
    function x() {
      const O = a();
      if (e.trigger === "focus" && !O) {
        if (!s()) return;
        w(!1);
      }
    }
    function M() {
      const O = a();
      if (e.trigger === "hover" && !O) {
        if (P(), v.value !== null || s()) return;
        const N = () => {
          w(!0), v.value = null;
        }, {
          delay: q
        } = e;
        q === 0 ? N() : v.value = window.setTimeout(N, q);
      }
    }
    function B() {
      const O = a();
      if (e.trigger === "hover" && !O) {
        if (h(), g.value !== null || !s()) return;
        const N = () => {
          w(!1), g.value = null;
        }, {
          duration: q
        } = e;
        q === 0 ? N() : g.value = window.setTimeout(N, q);
      }
    }
    function b() {
      B();
    }
    function y(O) {
      var N;
      s() && (e.trigger === "click" && (h(), P(), w(!1)), (N = e.onClickoutside) === null || N === void 0 || N.call(e, O));
    }
    function R() {
      if (e.trigger === "click" && !a()) {
        h(), P();
        const O = !s();
        w(O);
      }
    }
    function E(O) {
      e.internalTrapFocus && O.key === "Escape" && (h(), P(), w(!1));
    }
    function V(O) {
      r.value = O;
    }
    function Q() {
      var O;
      return (O = t.value) === null || O === void 0 ? void 0 : O.targetRef;
    }
    function _(O) {
      m = O;
    }
    return He("NPopover", {
      getTriggerElement: Q,
      handleKeydown: E,
      handleMouseEnter: M,
      handleMouseLeave: B,
      handleClickOutside: y,
      handleMouseMoveOutside: b,
      setBodyInstance: _,
      positionManuallyRef: u,
      isMountedRef: n,
      zIndexRef: ae(e, "zIndex"),
      extraClassRef: ae(e, "internalExtraClass"),
      internalRenderBodyRef: ae(e, "internalRenderBody")
    }), Ge(() => {
      i.value && a() && w(!1);
    }), {
      binderInstRef: t,
      positionManually: u,
      mergedShowConsideringDisabledProp: l,
      // if to show popover body
      uncontrolledShow: r,
      mergedShowArrow: f,
      getMergedShow: s,
      setShow: V,
      handleClick: R,
      handleMouseEnter: M,
      handleMouseLeave: B,
      handleFocus: I,
      handleBlur: x,
      syncPosition: C
    };
  },
  render() {
    var e;
    const {
      positionManually: n,
      $slots: t
    } = this;
    let o, r = !1;
    if (!n && (o = qa(t, "trigger"), o)) {
      o = _i(o), o = o.type === Pi ? p("span", [o]) : o;
      const i = {
        onClick: this.handleClick,
        onMouseenter: this.handleMouseEnter,
        onMouseleave: this.handleMouseLeave,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur
      };
      if (!((e = o.type) === null || e === void 0) && e.__popover__)
        r = !0, o.props || (o.props = {
          internalSyncTargetWithParent: !0,
          internalInheritedEventHandlers: []
        }), o.props.internalSyncTargetWithParent = !0, o.props.internalInheritedEventHandlers ? o.props.internalInheritedEventHandlers = [i, ...o.props.internalInheritedEventHandlers] : o.props.internalInheritedEventHandlers = [i];
      else {
        const {
          internalInheritedEventHandlers: l
        } = this, a = [i, ...l], s = {
          onBlur: (c) => {
            a.forEach((f) => {
              f.onBlur(c);
            });
          },
          onFocus: (c) => {
            a.forEach((f) => {
              f.onFocus(c);
            });
          },
          onClick: (c) => {
            a.forEach((f) => {
              f.onClick(c);
            });
          },
          onMouseenter: (c) => {
            a.forEach((f) => {
              f.onMouseenter(c);
            });
          },
          onMouseleave: (c) => {
            a.forEach((f) => {
              f.onMouseleave(c);
            });
          }
        };
        Pd(o, l ? "nested" : n ? "manual" : this.trigger, s);
      }
    }
    return p(_r, {
      ref: "binderInstRef",
      syncTarget: !r,
      syncTargetWithParent: this.internalSyncTargetWithParent
    }, {
      default: () => {
        this.mergedShowConsideringDisabledProp;
        const i = this.getMergedShow();
        return [this.internalTrapFocus && i ? Kn(p("div", {
          style: {
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }), [[Sr, {
          enabled: i,
          zIndex: this.zIndex
        }]]) : null, n ? null : p(Pr, null, {
          default: () => o
        }), p(wd, Za(this.$props, xd, Object.assign(Object.assign({}, this.$attrs), {
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
}), Rd = {
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
function Td(e) {
  const {
    textColor2: n,
    primaryColorHover: t,
    primaryColorPressed: o,
    primaryColor: r,
    infoColor: i,
    successColor: l,
    warningColor: a,
    errorColor: s,
    baseColor: c,
    borderColor: f,
    opacityDisabled: m,
    tagColor: v,
    closeIconColor: g,
    closeIconColorHover: u,
    closeIconColorPressed: w,
    borderRadiusSmall: C,
    fontSizeMini: h,
    fontSizeTiny: P,
    fontSizeSmall: I,
    fontSizeMedium: x,
    heightMini: M,
    heightTiny: B,
    heightSmall: b,
    heightMedium: y,
    closeColorHover: R,
    closeColorPressed: E,
    buttonColor2Hover: V,
    buttonColor2Pressed: Q,
    fontWeightStrong: _
  } = e;
  return Object.assign(Object.assign({}, Rd), {
    closeBorderRadius: C,
    heightTiny: M,
    heightSmall: B,
    heightMedium: b,
    heightLarge: y,
    borderRadius: C,
    opacityDisabled: m,
    fontSizeTiny: h,
    fontSizeSmall: P,
    fontSizeMedium: I,
    fontSizeLarge: x,
    fontWeightStrong: _,
    // checked
    textColorCheckable: n,
    textColorHoverCheckable: n,
    textColorPressedCheckable: n,
    textColorChecked: c,
    colorCheckable: "#0000",
    colorHoverCheckable: V,
    colorPressedCheckable: Q,
    colorChecked: r,
    colorCheckedHover: t,
    colorCheckedPressed: o,
    // default
    border: `1px solid ${f}`,
    textColor: n,
    color: v,
    colorBordered: "rgb(250, 250, 252)",
    closeIconColor: g,
    closeIconColorHover: u,
    closeIconColorPressed: w,
    closeColorHover: R,
    closeColorPressed: E,
    borderPrimary: `1px solid ${le(r, {
      alpha: 0.3
    })}`,
    textColorPrimary: r,
    colorPrimary: le(r, {
      alpha: 0.12
    }),
    colorBorderedPrimary: le(r, {
      alpha: 0.1
    }),
    closeIconColorPrimary: r,
    closeIconColorHoverPrimary: r,
    closeIconColorPressedPrimary: r,
    closeColorHoverPrimary: le(r, {
      alpha: 0.12
    }),
    closeColorPressedPrimary: le(r, {
      alpha: 0.18
    }),
    borderInfo: `1px solid ${le(i, {
      alpha: 0.3
    })}`,
    textColorInfo: i,
    colorInfo: le(i, {
      alpha: 0.12
    }),
    colorBorderedInfo: le(i, {
      alpha: 0.1
    }),
    closeIconColorInfo: i,
    closeIconColorHoverInfo: i,
    closeIconColorPressedInfo: i,
    closeColorHoverInfo: le(i, {
      alpha: 0.12
    }),
    closeColorPressedInfo: le(i, {
      alpha: 0.18
    }),
    borderSuccess: `1px solid ${le(l, {
      alpha: 0.3
    })}`,
    textColorSuccess: l,
    colorSuccess: le(l, {
      alpha: 0.12
    }),
    colorBorderedSuccess: le(l, {
      alpha: 0.1
    }),
    closeIconColorSuccess: l,
    closeIconColorHoverSuccess: l,
    closeIconColorPressedSuccess: l,
    closeColorHoverSuccess: le(l, {
      alpha: 0.12
    }),
    closeColorPressedSuccess: le(l, {
      alpha: 0.18
    }),
    borderWarning: `1px solid ${le(a, {
      alpha: 0.35
    })}`,
    textColorWarning: a,
    colorWarning: le(a, {
      alpha: 0.15
    }),
    colorBorderedWarning: le(a, {
      alpha: 0.12
    }),
    closeIconColorWarning: a,
    closeIconColorHoverWarning: a,
    closeIconColorPressedWarning: a,
    closeColorHoverWarning: le(a, {
      alpha: 0.12
    }),
    closeColorPressedWarning: le(a, {
      alpha: 0.18
    }),
    borderError: `1px solid ${le(s, {
      alpha: 0.23
    })}`,
    textColorError: s,
    colorError: le(s, {
      alpha: 0.1
    }),
    colorBorderedError: le(s, {
      alpha: 0.08
    }),
    closeIconColorError: s,
    closeIconColorHoverError: s,
    closeIconColorPressedError: s,
    closeColorHoverError: le(s, {
      alpha: 0.12
    }),
    closeColorPressedError: le(s, {
      alpha: 0.18
    })
  });
}
const Id = {
  name: "Tag",
  common: Sn,
  self: Td
}, Fd = {
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
}, Ad = G("tag", `
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
 `, [ke("disabled", [H("&:hover", "background-color: var(--n-color-hover-checkable);", [ke("checked", "color: var(--n-text-color-hover-checkable);")]), H("&:active", "background-color: var(--n-color-pressed-checkable);", [ke("checked", "color: var(--n-text-color-pressed-checkable);")])]), te("checked", `
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `, [ke("disabled", [H("&:hover", "background-color: var(--n-color-checked-hover);"), H("&:active", "background-color: var(--n-color-checked-pressed);")])])])]);
var kd = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_26504_XKHRYLZIHXXZLNIG", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.97.2", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-5a8078c568-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
const $d = Object.assign(Object.assign(Object.assign({}, ye.props), Fd), {
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
}), zd = "n-tag", no = re({
  name: "Tag",
  props: $d,
  slots: Object,
  setup(e) {
    kd.NODE_ENV !== "production" && Ge(() => {
      e.onCheckedChange !== void 0 && Ze("tag", "`on-checked-change` is deprecated, please use `on-update:checked` instead");
    });
    const n = $(null), {
      mergedBorderedRef: t,
      mergedClsPrefixRef: o,
      inlineThemeDisabled: r,
      mergedRtlRef: i
    } = bn(e), l = ye("Tag", "-tag", Ad, Id, e, o);
    He(zd, {
      roundRef: ae(e, "round")
    });
    function a() {
      if (!e.disabled && e.checkable) {
        const {
          checked: g,
          onCheckedChange: u,
          onUpdateChecked: w,
          "onUpdate:checked": C
        } = e;
        w && w(!g), C && C(!g), u && u(!g);
      }
    }
    function s(g) {
      if (e.triggerClickOnClose || g.stopPropagation(), !e.disabled) {
        const {
          onClose: u
        } = e;
        u && Ce(u, g);
      }
    }
    const c = {
      setTextContent(g) {
        const {
          value: u
        } = n;
        u && (u.textContent = g);
      }
    }, f = St("Tag", i, o), m = z(() => {
      const {
        type: g,
        size: u,
        color: {
          color: w,
          textColor: C
        } = {}
      } = e, {
        common: {
          cubicBezierEaseInOut: h
        },
        self: {
          padding: P,
          closeMargin: I,
          borderRadius: x,
          opacityDisabled: M,
          textColorCheckable: B,
          textColorHoverCheckable: b,
          textColorPressedCheckable: y,
          textColorChecked: R,
          colorCheckable: E,
          colorHoverCheckable: V,
          colorPressedCheckable: Q,
          colorChecked: _,
          colorCheckedHover: k,
          colorCheckedPressed: O,
          closeBorderRadius: N,
          fontWeightStrong: q,
          [ce("colorBordered", g)]: J,
          [ce("closeSize", u)]: ee,
          [ce("closeIconSize", u)]: X,
          [ce("fontSize", u)]: ie,
          [ce("height", u)]: F,
          [ce("color", g)]: D,
          [ce("textColor", g)]: oe,
          [ce("border", g)]: me,
          [ce("closeIconColor", g)]: ge,
          [ce("closeIconColorHover", g)]: ze,
          [ce("closeIconColorPressed", g)]: Pe,
          [ce("closeColorHover", g)]: pe,
          [ce("closeColorPressed", g)]: De
        }
      } = l.value, xe = Ae(I);
      return {
        "--n-font-weight-strong": q,
        "--n-avatar-size-override": `calc(${F} - 8px)`,
        "--n-bezier": h,
        "--n-border-radius": x,
        "--n-border": me,
        "--n-close-icon-size": X,
        "--n-close-color-pressed": De,
        "--n-close-color-hover": pe,
        "--n-close-border-radius": N,
        "--n-close-icon-color": ge,
        "--n-close-icon-color-hover": ze,
        "--n-close-icon-color-pressed": Pe,
        "--n-close-icon-color-disabled": ge,
        "--n-close-margin-top": xe.top,
        "--n-close-margin-right": xe.right,
        "--n-close-margin-bottom": xe.bottom,
        "--n-close-margin-left": xe.left,
        "--n-close-size": ee,
        "--n-color": w || (t.value ? J : D),
        "--n-color-checkable": E,
        "--n-color-checked": _,
        "--n-color-checked-hover": k,
        "--n-color-checked-pressed": O,
        "--n-color-hover-checkable": V,
        "--n-color-pressed-checkable": Q,
        "--n-font-size": ie,
        "--n-height": F,
        "--n-opacity-disabled": M,
        "--n-padding": P,
        "--n-text-color": C || oe,
        "--n-text-color-checkable": B,
        "--n-text-color-checked": R,
        "--n-text-color-hover-checkable": b,
        "--n-text-color-pressed-checkable": y
      };
    }), v = r ? Cn("tag", z(() => {
      let g = "";
      const {
        type: u,
        size: w,
        color: {
          color: C,
          textColor: h
        } = {}
      } = e;
      return g += u[0], g += w[0], C && (g += `a${Yo(C)}`), h && (g += `b${Yo(h)}`), t.value && (g += "c"), g;
    }), m, e) : void 0;
    return Object.assign(Object.assign({}, c), {
      rtlEnabled: f,
      mergedClsPrefix: o,
      contentRef: n,
      mergedBordered: t,
      handleClick: a,
      handleCloseClick: s,
      cssVars: r ? void 0 : m,
      themeClass: v == null ? void 0 : v.themeClass,
      onRender: v == null ? void 0 : v.onRender
    });
  },
  render() {
    var e, n;
    const {
      mergedClsPrefix: t,
      rtlEnabled: o,
      closable: r,
      color: {
        borderColor: i
      } = {},
      round: l,
      onRender: a,
      $slots: s
    } = this;
    a == null || a();
    const c = hn(s.avatar, (m) => m && p("div", {
      class: `${t}-tag__avatar`
    }, m)), f = hn(s.icon, (m) => m && p("div", {
      class: `${t}-tag__icon`
    }, m));
    return p("div", {
      class: [`${t}-tag`, this.themeClass, {
        [`${t}-tag--rtl`]: o,
        [`${t}-tag--strong`]: this.strong,
        [`${t}-tag--disabled`]: this.disabled,
        [`${t}-tag--checkable`]: this.checkable,
        [`${t}-tag--checked`]: this.checkable && this.checked,
        [`${t}-tag--round`]: l,
        [`${t}-tag--avatar`]: c,
        [`${t}-tag--icon`]: f,
        [`${t}-tag--closable`]: r
      }],
      style: this.cssVars,
      onClick: this.handleClick,
      onMouseenter: this.onMouseenter,
      onMouseleave: this.onMouseleave
    }, f || c, p("span", {
      class: `${t}-tag__content`,
      ref: "contentRef"
    }, (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e)), !this.checkable && r ? p(Ys, {
      clsPrefix: t,
      class: `${t}-tag__close`,
      disabled: this.disabled,
      onClick: this.handleCloseClick,
      focusable: this.internalCloseFocusable,
      round: l,
      isButtonTag: this.internalCloseIsButtonTag,
      absolute: !0
    }) : null, !this.checkable && this.mergedBordered ? p("div", {
      class: `${t}-tag__border`,
      style: {
        borderColor: i
      }
    }) : null);
  }
}), Dd = re({
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
      return p(ti, {
        clsPrefix: t,
        class: `${t}-base-suffix`,
        strokeWidth: 24,
        scale: 0.85,
        show: e.loading
      }, {
        default: () => e.showArrow ? p(Ks, {
          clsPrefix: t,
          show: e.showClear,
          onClear: e.onClear
        }, {
          placeholder: () => p(Yn, {
            clsPrefix: t,
            class: `${t}-base-suffix__arrow`
          }, {
            default: () => yo(n.default, () => [p(Hs, null)])
          })
        }) : null
      });
    };
  }
}), Bd = {
  paddingSingle: "0 26px 0 12px",
  paddingMultiple: "3px 26px 0 12px",
  clearSize: "16px",
  arrowSize: "16px"
};
function Ld(e) {
  const {
    borderRadius: n,
    textColor2: t,
    textColorDisabled: o,
    inputColor: r,
    inputColorDisabled: i,
    primaryColor: l,
    primaryColorHover: a,
    warningColor: s,
    warningColorHover: c,
    errorColor: f,
    errorColorHover: m,
    borderColor: v,
    iconColor: g,
    iconColorDisabled: u,
    clearColor: w,
    clearColorHover: C,
    clearColorPressed: h,
    placeholderColor: P,
    placeholderColorDisabled: I,
    fontSizeTiny: x,
    fontSizeSmall: M,
    fontSizeMedium: B,
    fontSizeLarge: b,
    heightTiny: y,
    heightSmall: R,
    heightMedium: E,
    heightLarge: V,
    fontWeight: Q
  } = e;
  return Object.assign(Object.assign({}, Bd), {
    fontSizeTiny: x,
    fontSizeSmall: M,
    fontSizeMedium: B,
    fontSizeLarge: b,
    heightTiny: y,
    heightSmall: R,
    heightMedium: E,
    heightLarge: V,
    borderRadius: n,
    fontWeight: Q,
    // default
    textColor: t,
    textColorDisabled: o,
    placeholderColor: P,
    placeholderColorDisabled: I,
    color: r,
    colorDisabled: i,
    colorActive: r,
    border: `1px solid ${v}`,
    borderHover: `1px solid ${a}`,
    borderActive: `1px solid ${l}`,
    borderFocus: `1px solid ${a}`,
    boxShadowHover: "none",
    boxShadowActive: `0 0 0 2px ${le(l, {
      alpha: 0.2
    })}`,
    boxShadowFocus: `0 0 0 2px ${le(l, {
      alpha: 0.2
    })}`,
    caretColor: l,
    arrowColor: g,
    arrowColorDisabled: u,
    loadingColor: l,
    // warning
    borderWarning: `1px solid ${s}`,
    borderHoverWarning: `1px solid ${c}`,
    borderActiveWarning: `1px solid ${s}`,
    borderFocusWarning: `1px solid ${c}`,
    boxShadowHoverWarning: "none",
    boxShadowActiveWarning: `0 0 0 2px ${le(s, {
      alpha: 0.2
    })}`,
    boxShadowFocusWarning: `0 0 0 2px ${le(s, {
      alpha: 0.2
    })}`,
    colorActiveWarning: r,
    caretColorWarning: s,
    // error
    borderError: `1px solid ${f}`,
    borderHoverError: `1px solid ${m}`,
    borderActiveError: `1px solid ${f}`,
    borderFocusError: `1px solid ${m}`,
    boxShadowHoverError: "none",
    boxShadowActiveError: `0 0 0 2px ${le(f, {
      alpha: 0.2
    })}`,
    boxShadowFocusError: `0 0 0 2px ${le(f, {
      alpha: 0.2
    })}`,
    colorActiveError: r,
    caretColorError: f,
    clearColor: w,
    clearColorHover: C,
    clearColorPressed: h
  });
}
const ui = {
  name: "InternalSelection",
  common: Sn,
  peers: {
    Popover: di
  },
  self: Ld
}, Nd = H([G("base-selection", `
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
 `)]), ke("disabled", [H("&:hover", [Y("state-border", `
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
 `)]), ["warning", "error"].map((e) => te(`${e}-status`, [Y("state-border", `border: var(--n-border-${e});`), ke("disabled", [H("&:hover", [Y("state-border", `
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
 `)])])]), Hd = re({
  name: "InternalSelection",
  props: Object.assign(Object.assign({}, ye.props), {
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
    } = bn(e), o = St("InternalSelection", t, n), r = $(null), i = $(null), l = $(null), a = $(null), s = $(null), c = $(null), f = $(null), m = $(null), v = $(null), g = $(null), u = $(!1), w = $(!1), C = $(!1), h = ye("InternalSelection", "-internal-selection", Nd, ui, e, ae(e, "clsPrefix")), P = z(() => e.clearable && !e.disabled && (C.value || e.active)), I = z(() => e.selectedOption ? e.renderTag ? e.renderTag({
      option: e.selectedOption,
      handleClose: () => {
      }
    }) : e.renderLabel ? e.renderLabel(e.selectedOption, !0) : On(e.selectedOption[e.labelField], e.selectedOption, !0) : e.placeholder), x = z(() => {
      const A = e.selectedOption;
      if (A)
        return A[e.labelField];
    }), M = z(() => e.multiple ? !!(Array.isArray(e.selectedOptions) && e.selectedOptions.length) : e.selectedOption !== null);
    function B() {
      var A;
      const {
        value: L
      } = r;
      if (L) {
        const {
          value: se
        } = i;
        se && (se.style.width = `${L.offsetWidth}px`, e.maxTagCount !== "responsive" && ((A = v.value) === null || A === void 0 || A.sync({
          showAllItemsBeforeCalculate: !1
        })));
      }
    }
    function b() {
      const {
        value: A
      } = g;
      A && (A.style.display = "none");
    }
    function y() {
      const {
        value: A
      } = g;
      A && (A.style.display = "inline-block");
    }
    we(ae(e, "active"), (A) => {
      A || b();
    }), we(ae(e, "pattern"), () => {
      e.multiple && mt(B);
    });
    function R(A) {
      const {
        onFocus: L
      } = e;
      L && L(A);
    }
    function E(A) {
      const {
        onBlur: L
      } = e;
      L && L(A);
    }
    function V(A) {
      const {
        onDeleteOption: L
      } = e;
      L && L(A);
    }
    function Q(A) {
      const {
        onClear: L
      } = e;
      L && L(A);
    }
    function _(A) {
      const {
        onPatternInput: L
      } = e;
      L && L(A);
    }
    function k(A) {
      var L;
      (!A.relatedTarget || !(!((L = l.value) === null || L === void 0) && L.contains(A.relatedTarget))) && R(A);
    }
    function O(A) {
      var L;
      !((L = l.value) === null || L === void 0) && L.contains(A.relatedTarget) || E(A);
    }
    function N(A) {
      Q(A);
    }
    function q() {
      C.value = !0;
    }
    function J() {
      C.value = !1;
    }
    function ee(A) {
      !e.active || !e.filterable || A.target !== i.value && A.preventDefault();
    }
    function X(A) {
      V(A);
    }
    const ie = $(!1);
    function F(A) {
      if (A.key === "Backspace" && !ie.value && !e.pattern.length) {
        const {
          selectedOptions: L
        } = e;
        L != null && L.length && X(L[L.length - 1]);
      }
    }
    let D = null;
    function oe(A) {
      const {
        value: L
      } = r;
      if (L) {
        const se = A.target.value;
        L.textContent = se, B();
      }
      e.ignoreComposition && ie.value ? D = A : _(A);
    }
    function me() {
      ie.value = !0;
    }
    function ge() {
      ie.value = !1, e.ignoreComposition && _(D), D = null;
    }
    function ze(A) {
      var L;
      w.value = !0, (L = e.onPatternFocus) === null || L === void 0 || L.call(e, A);
    }
    function Pe(A) {
      var L;
      w.value = !1, (L = e.onPatternBlur) === null || L === void 0 || L.call(e, A);
    }
    function pe() {
      var A, L;
      if (e.filterable)
        w.value = !1, (A = c.value) === null || A === void 0 || A.blur(), (L = i.value) === null || L === void 0 || L.blur();
      else if (e.multiple) {
        const {
          value: se
        } = a;
        se == null || se.blur();
      } else {
        const {
          value: se
        } = s;
        se == null || se.blur();
      }
    }
    function De() {
      var A, L, se;
      e.filterable ? (w.value = !1, (A = c.value) === null || A === void 0 || A.focus()) : e.multiple ? (L = a.value) === null || L === void 0 || L.focus() : (se = s.value) === null || se === void 0 || se.focus();
    }
    function xe() {
      const {
        value: A
      } = i;
      A && (y(), A.focus());
    }
    function Qe() {
      const {
        value: A
      } = i;
      A && A.blur();
    }
    function Oe(A) {
      const {
        value: L
      } = f;
      L && L.setTextContent(`+${A}`);
    }
    function en() {
      const {
        value: A
      } = m;
      return A;
    }
    function nn() {
      return i.value;
    }
    let Ie = null;
    function We() {
      Ie !== null && window.clearTimeout(Ie);
    }
    function tn() {
      e.active || (We(), Ie = window.setTimeout(() => {
        M.value && (u.value = !0);
      }, 100));
    }
    function on() {
      We();
    }
    function rn(A) {
      A || (We(), u.value = !1);
    }
    we(M, (A) => {
      A || (u.value = !1);
    }), Te(() => {
      Ge(() => {
        const A = c.value;
        A && (e.disabled ? A.removeAttribute("tabindex") : A.tabIndex = w.value ? -1 : 0);
      });
    }), Xr(l, e.onResize);
    const {
      inlineThemeDisabled: Xe
    } = e, Be = z(() => {
      const {
        size: A
      } = e, {
        common: {
          cubicBezierEaseInOut: L
        },
        self: {
          fontWeight: se,
          borderRadius: An,
          color: wn,
          placeholderColor: ln,
          textColor: yn,
          paddingSingle: Ye,
          paddingMultiple: an,
          caretColor: xn,
          colorDisabled: Fe,
          textColorDisabled: Ve,
          placeholderColorDisabled: d,
          colorActive: S,
          boxShadowFocus: T,
          boxShadowActive: W,
          boxShadowHover: U,
          border: K,
          borderFocus: Z,
          borderHover: ne,
          borderActive: de,
          arrowColor: Le,
          arrowColorDisabled: yt,
          loadingColor: xt,
          // form warning
          colorActiveWarning: _t,
          boxShadowFocusWarning: Pt,
          boxShadowActiveWarning: Et,
          boxShadowHoverWarning: Ot,
          borderWarning: Mt,
          borderFocusWarning: Rt,
          borderHoverWarning: Tt,
          borderActiveWarning: It,
          // form error
          colorActiveError: Ft,
          boxShadowFocusError: At,
          boxShadowActiveError: kt,
          boxShadowHoverError: $t,
          borderError: zt,
          borderFocusError: Dt,
          borderHoverError: Bt,
          borderActiveError: hi,
          // clear
          clearColor: pi,
          clearColorHover: mi,
          clearColorPressed: gi,
          clearSize: vi,
          // arrow
          arrowSize: bi,
          [ce("height", A)]: Ci,
          [ce("fontSize", A)]: Si
        }
      } = h.value, qn = Ae(Ye), Zn = Ae(an);
      return {
        "--n-bezier": L,
        "--n-border": K,
        "--n-border-active": de,
        "--n-border-focus": Z,
        "--n-border-hover": ne,
        "--n-border-radius": An,
        "--n-box-shadow-active": W,
        "--n-box-shadow-focus": T,
        "--n-box-shadow-hover": U,
        "--n-caret-color": xn,
        "--n-color": wn,
        "--n-color-active": S,
        "--n-color-disabled": Fe,
        "--n-font-size": Si,
        "--n-height": Ci,
        "--n-padding-single-top": qn.top,
        "--n-padding-multiple-top": Zn.top,
        "--n-padding-single-right": qn.right,
        "--n-padding-multiple-right": Zn.right,
        "--n-padding-single-left": qn.left,
        "--n-padding-multiple-left": Zn.left,
        "--n-padding-single-bottom": qn.bottom,
        "--n-padding-multiple-bottom": Zn.bottom,
        "--n-placeholder-color": ln,
        "--n-placeholder-color-disabled": d,
        "--n-text-color": yn,
        "--n-text-color-disabled": Ve,
        "--n-arrow-color": Le,
        "--n-arrow-color-disabled": yt,
        "--n-loading-color": xt,
        // form warning
        "--n-color-active-warning": _t,
        "--n-box-shadow-focus-warning": Pt,
        "--n-box-shadow-active-warning": Et,
        "--n-box-shadow-hover-warning": Ot,
        "--n-border-warning": Mt,
        "--n-border-focus-warning": Rt,
        "--n-border-hover-warning": Tt,
        "--n-border-active-warning": It,
        // form error
        "--n-color-active-error": Ft,
        "--n-box-shadow-focus-error": At,
        "--n-box-shadow-active-error": kt,
        "--n-box-shadow-hover-error": $t,
        "--n-border-error": zt,
        "--n-border-focus-error": Dt,
        "--n-border-hover-error": Bt,
        "--n-border-active-error": hi,
        // clear
        "--n-clear-size": vi,
        "--n-clear-color": pi,
        "--n-clear-color-hover": mi,
        "--n-clear-color-pressed": gi,
        // arrow-size
        "--n-arrow-size": bi,
        // font-weight
        "--n-font-weight": se
      };
    }), ve = Xe ? Cn("internal-selection", z(() => e.size[0]), Be, e) : void 0;
    return {
      mergedTheme: h,
      mergedClearable: P,
      mergedClsPrefix: n,
      rtlEnabled: o,
      patternInputFocused: w,
      filterablePlaceholder: I,
      label: x,
      selected: M,
      showTagsPanel: u,
      isComposing: ie,
      // dom ref
      counterRef: f,
      counterWrapperRef: m,
      patternInputMirrorRef: r,
      patternInputRef: i,
      selfRef: l,
      multipleElRef: a,
      singleElRef: s,
      patternInputWrapperRef: c,
      overflowRef: v,
      inputTagElRef: g,
      handleMouseDown: ee,
      handleFocusin: k,
      handleClear: N,
      handleMouseEnter: q,
      handleMouseLeave: J,
      handleDeleteOption: X,
      handlePatternKeyDown: F,
      handlePatternInputInput: oe,
      handlePatternInputBlur: Pe,
      handlePatternInputFocus: ze,
      handleMouseEnterCounter: tn,
      handleMouseLeaveCounter: on,
      handleFocusout: O,
      handleCompositionEnd: ge,
      handleCompositionStart: me,
      onPopoverUpdateShow: rn,
      focus: De,
      focusInput: xe,
      blur: pe,
      blurInput: Qe,
      updateCounter: Oe,
      getCounter: en,
      getTail: nn,
      renderLabel: e.renderLabel,
      cssVars: Xe ? void 0 : Be,
      themeClass: ve == null ? void 0 : ve.themeClass,
      onRender: ve == null ? void 0 : ve.onRender
    };
  },
  render() {
    const {
      status: e,
      multiple: n,
      size: t,
      disabled: o,
      filterable: r,
      maxTagCount: i,
      bordered: l,
      clsPrefix: a,
      ellipsisTagPopoverProps: s,
      onRender: c,
      renderTag: f,
      renderLabel: m
    } = this;
    c == null || c();
    const v = i === "responsive", g = typeof i == "number", u = v || g, w = p(po, null, {
      default: () => p(Dd, {
        clsPrefix: a,
        loading: this.loading,
        showArrow: this.showArrow,
        showClear: this.mergedClearable && this.selected,
        onClear: this.handleClear
      }, {
        default: () => {
          var h, P;
          return (P = (h = this.$slots).arrow) === null || P === void 0 ? void 0 : P.call(h);
        }
      })
    });
    let C;
    if (n) {
      const {
        labelField: h
      } = this, P = (_) => p("div", {
        class: `${a}-base-selection-tag-wrapper`,
        key: _.value
      }, f ? f({
        option: _,
        handleClose: () => {
          this.handleDeleteOption(_);
        }
      }) : p(no, {
        size: t,
        closable: !_.disabled,
        disabled: o,
        onClose: () => {
          this.handleDeleteOption(_);
        },
        internalCloseIsButtonTag: !1,
        internalCloseFocusable: !1
      }, {
        default: () => m ? m(_, !0) : On(_[h], _, !0)
      })), I = () => (g ? this.selectedOptions.slice(0, i) : this.selectedOptions).map(P), x = r ? p("div", {
        class: `${a}-base-selection-input-tag`,
        ref: "inputTagElRef",
        key: "__input-tag__"
      }, p("input", Object.assign({}, this.inputProps, {
        ref: "patternInputRef",
        tabindex: -1,
        disabled: o,
        value: this.pattern,
        autofocus: this.autofocus,
        class: `${a}-base-selection-input-tag__input`,
        onBlur: this.handlePatternInputBlur,
        onFocus: this.handlePatternInputFocus,
        onKeydown: this.handlePatternKeyDown,
        onInput: this.handlePatternInputInput,
        onCompositionstart: this.handleCompositionStart,
        onCompositionend: this.handleCompositionEnd
      })), p("span", {
        ref: "patternInputMirrorRef",
        class: `${a}-base-selection-input-tag__mirror`
      }, this.pattern)) : null, M = v ? () => p("div", {
        class: `${a}-base-selection-tag-wrapper`,
        ref: "counterWrapperRef"
      }, p(no, {
        size: t,
        ref: "counterRef",
        onMouseenter: this.handleMouseEnterCounter,
        onMouseleave: this.handleMouseLeaveCounter,
        disabled: o
      })) : void 0;
      let B;
      if (g) {
        const _ = this.selectedOptions.length - i;
        _ > 0 && (B = p("div", {
          class: `${a}-base-selection-tag-wrapper`,
          key: "__counter__"
        }, p(no, {
          size: t,
          ref: "counterRef",
          onMouseenter: this.handleMouseEnterCounter,
          disabled: o
        }, {
          default: () => `+${_}`
        })));
      }
      const b = v ? r ? p(Xo, {
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
        default: I,
        counter: M,
        tail: () => x
      }) : p(Xo, {
        ref: "overflowRef",
        updateCounter: this.updateCounter,
        getCounter: this.getCounter,
        style: {
          width: "100%",
          display: "flex",
          overflow: "hidden"
        }
      }, {
        default: I,
        counter: M
      }) : g && B ? I().concat(B) : I(), y = u ? () => p("div", {
        class: `${a}-base-selection-popover`
      }, v ? I() : this.selectedOptions.map(P)) : void 0, R = u ? Object.assign({
        show: this.showTagsPanel,
        trigger: "hover",
        overlap: !0,
        placement: "top",
        width: "trigger",
        onUpdateShow: this.onPopoverUpdateShow,
        theme: this.mergedTheme.peers.Popover,
        themeOverrides: this.mergedTheme.peerOverrides.Popover
      }, s) : null, V = (this.selected ? !1 : this.active ? !this.pattern && !this.isComposing : !0) ? p("div", {
        class: `${a}-base-selection-placeholder ${a}-base-selection-overlay`
      }, p("div", {
        class: `${a}-base-selection-placeholder__inner`
      }, this.placeholder)) : null, Q = r ? p("div", {
        ref: "patternInputWrapperRef",
        class: `${a}-base-selection-tags`
      }, b, v ? null : x, w) : p("div", {
        ref: "multipleElRef",
        class: `${a}-base-selection-tags`,
        tabindex: o ? void 0 : 0
      }, b, w);
      C = p(mn, null, u ? p(Md, Object.assign({}, R, {
        scrollable: !0,
        style: "max-height: calc(var(--v-target-height) * 6.6);"
      }), {
        trigger: () => Q,
        default: y
      }) : Q, V);
    } else if (r) {
      const h = this.pattern || this.isComposing, P = this.active ? !h : !this.selected, I = this.active ? !1 : this.selected;
      C = p("div", {
        ref: "patternInputWrapperRef",
        class: `${a}-base-selection-label`,
        title: this.patternInputFocused ? void 0 : Qo(this.label)
      }, p("input", Object.assign({}, this.inputProps, {
        ref: "patternInputRef",
        class: `${a}-base-selection-input`,
        value: this.active ? this.pattern : "",
        placeholder: "",
        readonly: o,
        disabled: o,
        tabindex: -1,
        autofocus: this.autofocus,
        onFocus: this.handlePatternInputFocus,
        onBlur: this.handlePatternInputBlur,
        onInput: this.handlePatternInputInput,
        onCompositionstart: this.handleCompositionStart,
        onCompositionend: this.handleCompositionEnd
      })), I ? p("div", {
        class: `${a}-base-selection-label__render-label ${a}-base-selection-overlay`,
        key: "input"
      }, p("div", {
        class: `${a}-base-selection-overlay__wrapper`
      }, f ? f({
        option: this.selectedOption,
        handleClose: () => {
        }
      }) : m ? m(this.selectedOption, !0) : On(this.label, this.selectedOption, !0))) : null, P ? p("div", {
        class: `${a}-base-selection-placeholder ${a}-base-selection-overlay`,
        key: "placeholder"
      }, p("div", {
        class: `${a}-base-selection-overlay__wrapper`
      }, this.filterablePlaceholder)) : null, w);
    } else
      C = p("div", {
        ref: "singleElRef",
        class: `${a}-base-selection-label`,
        tabindex: this.disabled ? void 0 : 0
      }, this.label !== void 0 ? p("div", {
        class: `${a}-base-selection-input`,
        title: Qo(this.label),
        key: "input"
      }, p("div", {
        class: `${a}-base-selection-input__content`
      }, f ? f({
        option: this.selectedOption,
        handleClose: () => {
        }
      }) : m ? m(this.selectedOption, !0) : On(this.label, this.selectedOption, !0))) : p("div", {
        class: `${a}-base-selection-placeholder ${a}-base-selection-overlay`,
        key: "placeholder"
      }, p("div", {
        class: `${a}-base-selection-placeholder__inner`
      }, this.placeholder)), w);
    return p("div", {
      ref: "selfRef",
      class: [`${a}-base-selection`, this.rtlEnabled && `${a}-base-selection--rtl`, this.themeClass, e && `${a}-base-selection--${e}-status`, {
        [`${a}-base-selection--active`]: this.active,
        [`${a}-base-selection--selected`]: this.selected || this.active && this.pattern,
        [`${a}-base-selection--disabled`]: this.disabled,
        [`${a}-base-selection--multiple`]: this.multiple,
        // focus is not controlled by selection itself since it always need
        // to be managed together with menu. provide :focus style will cause
        // many redundant codes.
        [`${a}-base-selection--focus`]: this.focused
      }],
      style: this.cssVars,
      onClick: this.onClick,
      onMouseenter: this.handleMouseEnter,
      onMouseleave: this.handleMouseLeave,
      onKeydown: this.onKeydown,
      onFocusin: this.handleFocusin,
      onFocusout: this.handleFocusout,
      onMousedown: this.handleMouseDown
    }, C, l ? p("div", {
      class: `${a}-base-selection__border`
    }) : null, l ? p("div", {
      class: `${a}-base-selection__state-border`
    }) : null);
  }
});
function Wd(e) {
  const {
    boxShadow2: n
  } = e;
  return {
    menuBoxShadow: n
  };
}
const Vd = {
  name: "Select",
  common: Sn,
  peers: {
    InternalSelection: ui,
    InternalSelectMenu: ai
  },
  self: Wd
}, Ud = H([G("select", `
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `), G("select-menu", `
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `, [si({
  originalTransition: "background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"
})])]);
function pt(e) {
  return e.type === "group";
}
function fi(e) {
  return e.type === "ignored";
}
function to(e, n) {
  try {
    return !!(1 + n.toString().toLowerCase().indexOf(e.trim().toLowerCase()));
  } catch {
    return !1;
  }
}
function jd(e, n) {
  return {
    getIsGroup: pt,
    getIgnored: fi,
    getKey(o) {
      return pt(o) ? o.name || o.key || "key-required" : o[e];
    },
    getChildren(o) {
      return o[n];
    }
  };
}
function Gd(e, n, t, o) {
  if (!n) return e;
  function r(i) {
    if (!Array.isArray(i)) return [];
    const l = [];
    for (const a of i)
      if (pt(a)) {
        const s = r(a[o]);
        s.length && l.push(Object.assign({}, a, {
          [o]: s
        }));
      } else {
        if (fi(a))
          continue;
        n(t, a) && l.push(a);
      }
    return l;
  }
  return r(e);
}
function Kd(e, n, t) {
  const o = /* @__PURE__ */ new Map();
  return e.forEach((r) => {
    pt(r) ? r[t].forEach((i) => {
      o.set(i[n], i);
    }) : o.set(r[n], r);
  }), o;
}
var Xd = { ALLUSERSPROFILE: "C:\\ProgramData", APPDATA: "C:\\Users\\admin\\AppData\\Roaming", CHROME_CRASHPAD_PIPE_NAME: "\\\\.\\pipe\\crashpad_26504_XKHRYLZIHXXZLNIG", COLORTERM: "truecolor", CommonProgramFiles: "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", CommonProgramW6432: "C:\\Program Files\\Common Files", COMPUTERNAME: "DESKTOP-9LOQ0MO", ComSpec: "C:\\Windows\\system32\\cmd.exe", DM_HOME: "F:\\dm", DriverData: "C:\\Windows\\System32\\Drivers\\DriverData", EPS_INSTALL_ROOT: "c:\\program files\\sf\\edr\\agent\\", FPS_BROWSER_APP_PROFILE_STRING: "Internet Explorer", FPS_BROWSER_USER_PROFILE_STRING: "Default", GIT_ASKPASS: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", HOME: "C:\\Users\\admin", HOMEDRIVE: "C:", HOMEPATH: "\\Users\\admin", INIT_CWD: "F:\\work\\goview\\tosts\\lowcode-component", LANG: "en_US.UTF-8", LOCALAPPDATA: "C:\\Users\\admin\\AppData\\Local", LOGONSERVER: "\\\\DESKTOP-9LOQ0MO", NODE: "F:\\install\\nodejs\\node.exe", npm_command: "run-script", npm_config_frozen_lockfile: "", npm_config_node_gyp: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node_modules\\node-gyp\\bin\\node-gyp.js", npm_config_recursive: "true", npm_config_registry: "https://registry.npmmirror.com", npm_config_strict_ssl: "", npm_config_user_agent: "pnpm/9.7.0 npm/? node/v18.19.0 win32 x64", npm_execpath: "F:\\nvm\\v18.19.0\\node_modules\\pnpm\\bin\\pnpm.cjs", npm_lifecycle_event: "build", npm_lifecycle_script: "node ./vite.lib.js", npm_node_execpath: "F:\\install\\nodejs\\node.exe", npm_package_author: "", npm_package_description: "", npm_package_license: "ISC", npm_package_main: "index.js", npm_package_name: "scripts", npm_package_scripts_build: "node ./vite.lib.js", npm_package_type: "module", npm_package_version: "1.0.0", NUMBER_OF_PROCESSORS: "12", NVM_HOME: "F:\\nvm", NVM_SYMLINK: "F:\\install\\nodejs", OneDrive: "C:\\Users\\admin\\OneDrive", ORIGINAL_XDG_CURRENT_DESKTOP: "undefined", OS: "Windows_NT", Path: "F:\\work\\goview\\tosts\\lowcode-component\\scripts\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\work\\goview\\tosts\\lowcode-component\\node_modules\\.bin;F:\\nvm\\v18.19.0\\node_modules\\pnpm\\dist\\node-gyp-bin;F:\\install\\mysql-8.0.33-winx64\\bin;F:\\install\\Git\\cmd;C:\\Windows\\System32;C:\\Users\\admin\\AppData\\Local\\Microsoft\\WindowsApps;F:\\Microsoft VS Code\\bin;F:\\nvm;F:\\install\\nodejs;C:\\Users\\admin\\.dotnet\\tools;C:\\Windows\\System32;", PATHEXT: ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL", PNPM_SCRIPT_SRC_DIR: "F:\\work\\goview\\tosts\\lowcode-component\\scripts", PROCESSOR_ARCHITECTURE: "AMD64", PROCESSOR_IDENTIFIER: "Intel64 Family 6 Model 165 Stepping 3, GenuineIntel", PROCESSOR_LEVEL: "6", PROCESSOR_REVISION: "a503", ProgramData: "C:\\ProgramData", ProgramFiles: "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", ProgramW6432: "C:\\Program Files", PROMPT: "$P$G", PSModulePath: "C:\\Users\\admin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", PUBLIC: "C:\\Users\\Public", SESSIONNAME: "Console", SystemDrive: "C:", SystemRoot: "C:\\Windows", TEMP: "C:\\Users\\admin\\AppData\\Local\\Temp", TERM_PROGRAM: "vscode", TERM_PROGRAM_VERSION: "1.97.2", TMP: "C:\\Users\\admin\\AppData\\Local\\Temp", USERDOMAIN: "DESKTOP-9LOQ0MO", USERDOMAIN_ROAMINGPROFILE: "DESKTOP-9LOQ0MO", USERNAME: "admin", USERPROFILE: "C:\\Users\\admin", VBOX_MSI_INSTALL_PATH: "C:\\Program Files\\Oracle\\VirtualBox\\", VSCODE_GIT_ASKPASS_EXTRA_ARGS: "", VSCODE_GIT_ASKPASS_MAIN: "f:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", VSCODE_GIT_ASKPASS_NODE: "F:\\Microsoft VS Code\\Code.exe", VSCODE_GIT_IPC_HANDLE: "\\\\.\\pipe\\vscode-git-5a8078c568-sock", VSCODE_INJECTION: "1", windir: "C:\\Windows", ZES_ENABLE_SYSMAN: "1" };
const Yd = Object.assign(Object.assign({}, ye.props), {
  to: Ke.propTo,
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
}), qd = re({
  name: "Select",
  props: Yd,
  slots: Object,
  setup(e) {
    Xd.NODE_ENV !== "production" && Ge(() => {
      e.items !== void 0 && Ze("select", "`items` is deprecated, please use `options` instead."), e.onChange !== void 0 && Ze("select", "`on-change` is deprecated, please use `on-update:value` instead.");
    });
    const {
      mergedClsPrefixRef: n,
      mergedBorderedRef: t,
      namespaceRef: o,
      inlineThemeDisabled: r
    } = bn(e), i = ye("Select", "-select", Ud, Vd, e, n), l = $(e.defaultValue), a = ae(e, "value"), s = lo(a, l), c = $(!1), f = $(""), m = wr(e, ["items", "options"]), v = $([]), g = $([]), u = z(() => g.value.concat(v.value).concat(m.value)), w = z(() => {
      const {
        filter: d
      } = e;
      if (d) return d;
      const {
        labelField: S,
        valueField: T
      } = e;
      return (W, U) => {
        if (!U) return !1;
        const K = U[S];
        if (typeof K == "string")
          return to(W, K);
        const Z = U[T];
        return typeof Z == "string" ? to(W, Z) : typeof Z == "number" ? to(W, String(Z)) : !1;
      };
    }), C = z(() => {
      if (e.remote)
        return m.value;
      {
        const {
          value: d
        } = u, {
          value: S
        } = f;
        return !S.length || !e.filterable ? d : Gd(d, w.value, S, e.childrenField);
      }
    }), h = z(() => {
      const {
        valueField: d,
        childrenField: S
      } = e, T = jd(d, S);
      return bl(C.value, T);
    }), P = z(() => Kd(u.value, e.valueField, e.childrenField)), I = $(!1), x = lo(ae(e, "show"), I), M = $(null), B = $(null), b = $(null), {
      localeRef: y
    } = Jr("Select"), R = z(() => {
      var d;
      return (d = e.placeholder) !== null && d !== void 0 ? d : y.value.placeholder;
    }), E = [], V = $(/* @__PURE__ */ new Map()), Q = z(() => {
      const {
        fallbackOption: d
      } = e;
      if (d === void 0) {
        const {
          labelField: S,
          valueField: T
        } = e;
        return (W) => ({
          [S]: String(W),
          [T]: W
        });
      }
      return d === !1 ? !1 : (S) => Object.assign(d(S), {
        value: S
      });
    });
    function _(d) {
      const S = e.remote, {
        value: T
      } = V, {
        value: W
      } = P, {
        value: U
      } = Q, K = [];
      return d.forEach((Z) => {
        if (W.has(Z))
          K.push(W.get(Z));
        else if (S && T.has(Z))
          K.push(T.get(Z));
        else if (U) {
          const ne = U(Z);
          ne && K.push(ne);
        }
      }), K;
    }
    const k = z(() => {
      if (e.multiple) {
        const {
          value: d
        } = s;
        return Array.isArray(d) ? _(d) : [];
      }
      return null;
    }), O = z(() => {
      const {
        value: d
      } = s;
      return !e.multiple && !Array.isArray(d) ? d === null ? null : _([d])[0] || null : null;
    }), N = Qa(e), {
      mergedSizeRef: q,
      mergedDisabledRef: J,
      mergedStatusRef: ee
    } = N;
    function X(d, S) {
      const {
        onChange: T,
        "onUpdate:value": W,
        onUpdateValue: U
      } = e, {
        nTriggerFormChange: K,
        nTriggerFormInput: Z
      } = N;
      T && Ce(T, d, S), U && Ce(U, d, S), W && Ce(W, d, S), l.value = d, K(), Z();
    }
    function ie(d) {
      const {
        onBlur: S
      } = e, {
        nTriggerFormBlur: T
      } = N;
      S && Ce(S, d), T();
    }
    function F() {
      const {
        onClear: d
      } = e;
      d && Ce(d);
    }
    function D(d) {
      const {
        onFocus: S,
        showOnFocus: T
      } = e, {
        nTriggerFormFocus: W
      } = N;
      S && Ce(S, d), W(), T && Pe();
    }
    function oe(d) {
      const {
        onSearch: S
      } = e;
      S && Ce(S, d);
    }
    function me(d) {
      const {
        onScroll: S
      } = e;
      S && Ce(S, d);
    }
    function ge() {
      var d;
      const {
        remote: S,
        multiple: T
      } = e;
      if (S) {
        const {
          value: W
        } = V;
        if (T) {
          const {
            valueField: U
          } = e;
          (d = k.value) === null || d === void 0 || d.forEach((K) => {
            W.set(K[U], K);
          });
        } else {
          const U = O.value;
          U && W.set(U[e.valueField], U);
        }
      }
    }
    function ze(d) {
      const {
        onUpdateShow: S,
        "onUpdate:show": T
      } = e;
      S && Ce(S, d), T && Ce(T, d), I.value = d;
    }
    function Pe() {
      J.value || (ze(!0), I.value = !0, e.filterable && Ye());
    }
    function pe() {
      ze(!1);
    }
    function De() {
      f.value = "", g.value = E;
    }
    const xe = $(!1);
    function Qe() {
      e.filterable && (xe.value = !0);
    }
    function Oe() {
      e.filterable && (xe.value = !1, x.value || De());
    }
    function en() {
      J.value || (x.value ? e.filterable ? Ye() : pe() : Pe());
    }
    function nn(d) {
      var S, T;
      !((T = (S = b.value) === null || S === void 0 ? void 0 : S.selfRef) === null || T === void 0) && T.contains(d.relatedTarget) || (c.value = !1, ie(d), pe());
    }
    function Ie(d) {
      D(d), c.value = !0;
    }
    function We() {
      c.value = !0;
    }
    function tn(d) {
      var S;
      !((S = M.value) === null || S === void 0) && S.$el.contains(d.relatedTarget) || (c.value = !1, ie(d), pe());
    }
    function on() {
      var d;
      (d = M.value) === null || d === void 0 || d.focus(), pe();
    }
    function rn(d) {
      var S;
      x.value && (!((S = M.value) === null || S === void 0) && S.$el.contains(Vn(d)) || pe());
    }
    function Xe(d) {
      if (!Array.isArray(d)) return [];
      if (Q.value)
        return Array.from(d);
      {
        const {
          remote: S
        } = e, {
          value: T
        } = P;
        if (S) {
          const {
            value: W
          } = V;
          return d.filter((U) => T.has(U) || W.has(U));
        } else
          return d.filter((W) => T.has(W));
      }
    }
    function Be(d) {
      ve(d.rawNode);
    }
    function ve(d) {
      if (J.value) return;
      const {
        tag: S,
        remote: T,
        clearFilterAfterSelect: W,
        valueField: U
      } = e;
      if (S && !T) {
        const {
          value: K
        } = g, Z = K[0] || null;
        if (Z) {
          const ne = v.value;
          ne.length ? ne.push(Z) : v.value = [Z], g.value = E;
        }
      }
      if (T && V.value.set(d[U], d), e.multiple) {
        const K = Xe(s.value), Z = K.findIndex((ne) => ne === d[U]);
        if (~Z) {
          if (K.splice(Z, 1), S && !T) {
            const ne = A(d[U]);
            ~ne && (v.value.splice(ne, 1), W && (f.value = ""));
          }
        } else
          K.push(d[U]), W && (f.value = "");
        X(K, _(K));
      } else {
        if (S && !T) {
          const K = A(d[U]);
          ~K ? v.value = [v.value[K]] : v.value = E;
        }
        yn(), pe(), X(d[U], d);
      }
    }
    function A(d) {
      return v.value.findIndex((T) => T[e.valueField] === d);
    }
    function L(d) {
      x.value || Pe();
      const {
        value: S
      } = d.target;
      f.value = S;
      const {
        tag: T,
        remote: W
      } = e;
      if (oe(S), T && !W) {
        if (!S) {
          g.value = E;
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
        m.value.some((de) => de[Z] === K[Z] || de[ne] === K[ne]) || v.value.some((de) => de[Z] === K[Z] || de[ne] === K[ne]) ? g.value = E : g.value = [K];
      }
    }
    function se(d) {
      d.stopPropagation();
      const {
        multiple: S
      } = e;
      !S && e.filterable && pe(), F(), S ? X([], []) : X(null, null);
    }
    function An(d) {
      !Bn(d, "action") && !Bn(d, "empty") && !Bn(d, "header") && d.preventDefault();
    }
    function wn(d) {
      me(d);
    }
    function ln(d) {
      var S, T, W, U, K;
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
          if (!(!((S = M.value) === null || S === void 0) && S.isComposing)) {
            if (x.value) {
              const Z = (T = b.value) === null || T === void 0 ? void 0 : T.getPendingTmNode();
              Z ? Be(Z) : e.filterable || (pe(), yn());
            } else if (Pe(), e.tag && xe.value) {
              const Z = g.value[0];
              if (Z) {
                const ne = Z[e.valueField], {
                  value: de
                } = s;
                e.multiple && Array.isArray(de) && de.includes(ne) || ve(Z);
              }
            }
          }
          d.preventDefault();
          break;
        case "ArrowUp":
          if (d.preventDefault(), e.loading) return;
          x.value && ((W = b.value) === null || W === void 0 || W.prev());
          break;
        case "ArrowDown":
          if (d.preventDefault(), e.loading) return;
          x.value ? (U = b.value) === null || U === void 0 || U.next() : Pe();
          break;
        case "Escape":
          x.value && (Ya(d), pe()), (K = M.value) === null || K === void 0 || K.focus();
          break;
      }
    }
    function yn() {
      var d;
      (d = M.value) === null || d === void 0 || d.focus();
    }
    function Ye() {
      var d;
      (d = M.value) === null || d === void 0 || d.focusInput();
    }
    function an() {
      var d;
      x.value && ((d = B.value) === null || d === void 0 || d.syncPosition());
    }
    ge(), we(ae(e, "options"), ge);
    const xn = {
      focus: () => {
        var d;
        (d = M.value) === null || d === void 0 || d.focus();
      },
      focusInput: () => {
        var d;
        (d = M.value) === null || d === void 0 || d.focusInput();
      },
      blur: () => {
        var d;
        (d = M.value) === null || d === void 0 || d.blur();
      },
      blurInput: () => {
        var d;
        (d = M.value) === null || d === void 0 || d.blurInput();
      }
    }, Fe = z(() => {
      const {
        self: {
          menuBoxShadow: d
        }
      } = i.value;
      return {
        "--n-menu-box-shadow": d
      };
    }), Ve = r ? Cn("select", void 0, Fe, e) : void 0;
    return Object.assign(Object.assign({}, xn), {
      mergedStatus: ee,
      mergedClsPrefix: n,
      mergedBordered: t,
      namespace: o,
      treeMate: h,
      isMounted: vt(),
      triggerRef: M,
      menuRef: b,
      pattern: f,
      uncontrolledShow: I,
      mergedShow: x,
      adjustedTo: Ke(e),
      uncontrolledValue: l,
      mergedValue: s,
      followerRef: B,
      localizedPlaceholder: R,
      selectedOption: O,
      selectedOptions: k,
      mergedSize: q,
      mergedDisabled: J,
      focused: c,
      activeWithoutMenuOpen: xe,
      inlineThemeDisabled: r,
      onTriggerInputFocus: Qe,
      onTriggerInputBlur: Oe,
      handleTriggerOrMenuResize: an,
      handleMenuFocus: We,
      handleMenuBlur: tn,
      handleMenuTabOut: on,
      handleTriggerClick: en,
      handleToggle: Be,
      handleDeleteOption: ve,
      handlePatternInput: L,
      handleClear: se,
      handleTriggerBlur: nn,
      handleTriggerFocus: Ie,
      handleKeydown: ln,
      handleMenuAfterLeave: De,
      handleMenuClickOutside: rn,
      handleMenuScroll: wn,
      handleMenuKeydown: ln,
      handleMenuMousedown: An,
      mergedTheme: i,
      cssVars: r ? void 0 : Fe,
      themeClass: Ve == null ? void 0 : Ve.themeClass,
      onRender: Ve == null ? void 0 : Ve.onRender
    });
  },
  render() {
    return p("div", {
      class: `${this.mergedClsPrefix}-select`
    }, p(_r, null, {
      default: () => [p(Pr, null, {
        default: () => p(Hd, {
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
      }), p(Ir, {
        ref: "followerRef",
        show: this.mergedShow,
        to: this.adjustedTo,
        teleportDisabled: this.adjustedTo === Ke.tdkey,
        containerClass: this.namespace,
        width: this.consistentMenuWidth ? "target" : void 0,
        minWidth: "target",
        placement: this.placement
      }, {
        default: () => p(Tn, {
          name: "fade-in-scale-up-transition",
          appear: this.isMounted,
          onAfterLeave: this.handleMenuAfterLeave
        }, {
          default: () => {
            var e, n, t;
            return this.mergedShow || this.displayDirective === "show" ? ((e = this.onRender) === null || e === void 0 || e.call(this), Kn(p(gd, Object.assign({}, this.menuProps, {
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
                var o, r;
                return [(r = (o = this.$slots).empty) === null || r === void 0 ? void 0 : r.call(o)];
              },
              header: () => {
                var o, r;
                return [(r = (o = this.$slots).header) === null || r === void 0 ? void 0 : r.call(o)];
              },
              action: () => {
                var o, r;
                return [(r = (o = this.$slots).action) === null || r === void 0 ? void 0 : r.call(o)];
              }
            }), this.displayDirective === "show" ? [[pr, this.mergedShow], [ft, this.handleMenuClickOutside, void 0, {
              capture: !0
            }]] : [[ft, this.handleMenuClickOutside, void 0, {
              capture: !0
            }]])) : null;
          }
        })
      })]
    }));
  }
}), Zd = /* @__PURE__ */ re({
  __name: "select",
  props: /* @__PURE__ */ Ei({
    options: {
      type: Array
    },
    gradient: {
      type: Boolean
    }
  }, {
    options: () => [],
    gradient: !1
  }),
  setup(e) {
    return (n, t) => (Oi(), Mi(
      "div",
      {
        class: Ri(["lc-select", {
          "lc-select--gradient": e.gradient
        }])
      },
      [
        Ti(Ii(qd), gt({
          placeholder: "下拉选择",
          options: e.options,
          clearable: "",
          to: !1
        }, n.$attrs), {
          arrow: Fi(() => t[0] || (t[0] = [
            xo(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                viewBox: "0 0 512 512"
              },
              [
                xo("path", {
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
      ],
      2
      /* CLASS */
    ));
  }
}), Jd = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, r] of n)
    t[o] = r;
  return t;
}, tc = /* @__PURE__ */ Jd(Zd, [["__scopeId", "data-v-da7baa31"]]);
export {
  tc as LcSelect
};
