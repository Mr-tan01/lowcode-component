// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { openBlock as d, createElementBlock as h, createElementVNode as p, renderSlot as F, defineComponent as M, createVNode as L, unref as _, withCtx as U, Fragment as w, renderList as $, normalizeStyle as z, toDisplayString as N, withDirectives as V, vShow as B } from "vue";
var K = typeof global == "object" && global && global.Object === Object && global, q = typeof self == "object" && self && self.Object === Object && self, P = K || q || Function("return this")(), j = P.Symbol, H = Object.prototype, J = H.hasOwnProperty, X = H.toString, b = j ? j.toStringTag : void 0;
function k(t) {
  var e = J.call(t, b), r = t[b];
  try {
    t[b] = void 0;
    var n = !0;
  } catch {
  }
  var i = X.call(t);
  return n && (e ? t[b] = r : delete t[b]), i;
}
var Q = Object.prototype, W = Q.toString;
function Y(t) {
  return W.call(t);
}
var Z = "[object Null]", R = "[object Undefined]", E = j ? j.toStringTag : void 0;
function tt(t) {
  return t == null ? t === void 0 ? R : Z : E && E in Object(t) ? k(t) : Y(t);
}
function A(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var et = "[object AsyncFunction]", rt = "[object Function]", nt = "[object GeneratorFunction]", at = "[object Proxy]";
function ot(t) {
  if (!A(t))
    return !1;
  var e = tt(t);
  return e == rt || e == nt || e == et || e == at;
}
var x = P["__core-js_shared__"], D = function() {
  var t = /[^.]+$/.exec(x && x.keys && x.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function st(t) {
  return !!D && D in t;
}
var it = Function.prototype, ct = it.toString;
function lt(t) {
  if (t != null) {
    try {
      return ct.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var ut = /[\\^$.*+?()[\]{}|]/g, _t = /^\[object .+?Constructor\]$/, dt = Function.prototype, ht = Object.prototype, pt = dt.toString, ft = ht.hasOwnProperty, yt = RegExp(
  "^" + pt.call(ft).replace(ut, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function gt(t) {
  if (!A(t) || st(t))
    return !1;
  var e = ot(t) ? yt : _t;
  return e.test(lt(t));
}
function vt(t, e) {
  return t == null ? void 0 : t[e];
}
function G(t, e) {
  var r = vt(t, e);
  return gt(r) ? r : void 0;
}
var S = G(Object, "create");
function bt() {
  this.__data__ = S ? S(null) : {}, this.size = 0;
}
function mt(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var St = "__lodash_hash_undefined__", Tt = Object.prototype, jt = Tt.hasOwnProperty;
function Ct(t) {
  var e = this.__data__;
  if (S) {
    var r = e[t];
    return r === St ? void 0 : r;
  }
  return jt.call(e, t) ? e[t] : void 0;
}
var Ot = Object.prototype, wt = Ot.hasOwnProperty;
function $t(t) {
  var e = this.__data__;
  return S ? e[t] !== void 0 : wt.call(e, t);
}
var xt = "__lodash_hash_undefined__";
function Pt(t, e) {
  var r = this.__data__;
  return this.size += this.has(t) ? 0 : 1, r[t] = S && e === void 0 ? xt : e, this;
}
function f(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
f.prototype.clear = bt;
f.prototype.delete = mt;
f.prototype.get = Ct;
f.prototype.has = $t;
f.prototype.set = Pt;
function zt() {
  this.__data__ = [], this.size = 0;
}
function Nt(t, e) {
  return t === e || t !== t && e !== e;
}
function C(t, e) {
  for (var r = t.length; r--; )
    if (Nt(t[r][0], e))
      return r;
  return -1;
}
var Et = Array.prototype, Dt = Et.splice;
function Ft(t) {
  var e = this.__data__, r = C(e, t);
  if (r < 0)
    return !1;
  var n = e.length - 1;
  return r == n ? e.pop() : Dt.call(e, r, 1), --this.size, !0;
}
function Ht(t) {
  var e = this.__data__, r = C(e, t);
  return r < 0 ? void 0 : e[r][1];
}
function At(t) {
  return C(this.__data__, t) > -1;
}
function Gt(t, e) {
  var r = this.__data__, n = C(r, t);
  return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this;
}
function g(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
g.prototype.clear = zt;
g.prototype.delete = Ft;
g.prototype.get = Ht;
g.prototype.has = At;
g.prototype.set = Gt;
var It = G(P, "Map");
function Mt() {
  this.size = 0, this.__data__ = {
    hash: new f(),
    map: new (It || g)(),
    string: new f()
  };
}
function Lt(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function O(t, e) {
  var r = t.__data__;
  return Lt(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
}
function Ut(t) {
  var e = O(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function Vt(t) {
  return O(this, t).get(t);
}
function Bt(t) {
  return O(this, t).has(t);
}
function Kt(t, e) {
  var r = O(this, t), n = r.size;
  return r.set(t, e), this.size += r.size == n ? 0 : 1, this;
}
function y(t) {
  var e = -1, r = t == null ? 0 : t.length;
  for (this.clear(); ++e < r; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
y.prototype.clear = Mt;
y.prototype.delete = Ut;
y.prototype.get = Vt;
y.prototype.has = Bt;
y.prototype.set = Kt;
var qt = "Expected a function";
function m(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(qt);
  var r = function() {
    var n = arguments, i = e ? e.apply(this, n) : n[0], u = r.cache;
    if (u.has(i))
      return u.get(i);
    var T = t.apply(this, n);
    return r.cache = u.set(i, T) || u, T;
  };
  return r.cache = new (m.Cache || y)(), r;
}
m.Cache = y;
const I = (t, e) => {
  const r = t.__vccOpts || t;
  for (const [n, i] of e)
    r[n] = i;
  return r;
}, Jt = {}, Xt = { class: "lc-elastic-scrollbar" }, kt = { class: "lc-elastic-scrollbar__wrapper" };
function Qt(t, e) {
  return d(), h("div", Xt, [
    p("div", kt, [
      F(t.$slots, "default", {}, void 0, !0)
    ])
  ]);
}
const Wt = /* @__PURE__ */ I(Jt, [["render", Qt], ["__scopeId", "data-v-5a702158"]]), Yt = { class: "lc-desc-list" }, Zt = { class: "lc-desc-list__wrapper" }, Rt = { class: "lc-desc-list__head" }, te = ["title"], ee = { class: "lc-desc-list__tbody" }, re = ["title"], ne = { class: "lc-desc-table--empty" }, ae = /* @__PURE__ */ M({
  __name: "descTable",
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  setup(t) {
    const e = {
      index: (a, l, o, s) => o + 1,
      default: (a, l, o, s) => {
        const c = a[l.dataIndex];
        return typeof c == "number" ? c : c || "-";
      }
    }, r = m((a, l) => a.title);
    function n(a, l, o, s) {
      return (l.type ? e[l.type] : e.default)(a, l, o, s);
    }
    const i = m(n, n), u = m((a) => ({
      "--text-align": a.align ?? "left",
      "--cell-flex": a.flex ?? 1,
      "--cell-width": a.width ?? "auto"
    }));
    function T(a) {
      return a.dataIndex ?? "default";
    }
    return (a, l) => (d(), h("div", Yt, [
      p("div", Zt, [
        L(_(Wt), null, {
          default: U(() => [
            p("div", Rt, [
              (d(!0), h(
                w,
                null,
                $(t.columns, (o, s) => (d(), h(
                  "div",
                  {
                    key: s,
                    style: z(_(u)(o)),
                    class: "lc-desc-list__head--item"
                  },
                  [
                    p("div", {
                      class: "lc-desc-list__head--item__cell",
                      title: _(r)(o, s)
                    }, N(_(r)(o, s)), 9, te)
                  ],
                  4
                  /* STYLE */
                ))),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            p("div", ee, [
              (d(!0), h(
                w,
                null,
                $(t.data, (o, s) => (d(), h("div", {
                  class: "lc-desc-list__tbody__tr",
                  key: s
                }, [
                  (d(!0), h(
                    w,
                    null,
                    $(t.columns, (c, v) => (d(), h(
                      "div",
                      {
                        class: "lc-desc-list__tbody__tr__cell",
                        key: v,
                        style: z(_(u)(c))
                      },
                      [
                        F(a.$slots, T(c), {
                          record: o,
                          index: s,
                          column: c,
                          colIndex: v,
                          value: _(i)(o, c, s, v)
                        }, () => [
                          p("span", {
                            class: "lc-desc-list__tbody__tr__cell__span",
                            title: _(i)(o, c, s, v)
                          }, N(_(i)(o, c, s, v)), 9, re)
                        ], !0)
                      ],
                      4
                      /* STYLE */
                    ))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]))),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ]),
          _: 3
          /* FORWARDED */
        }),
        V(p(
          "div",
          ne,
          l[0] || (l[0] = [
            p(
              "span",
              null,
              "暂无数据...",
              -1
              /* HOISTED */
            )
          ]),
          512
          /* NEED_PATCH */
        ), [
          [B, !t.data.length]
        ])
      ])
    ]));
  }
}), se = /* @__PURE__ */ I(ae, [["__scopeId", "data-v-49411238"]]);
export {
  se as LcDescTable
};
