// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { defineComponent as C, watch as pt, openBlock as w, createElementBlock as O, createElementVNode as h, createVNode as k, unref as Z, shallowRef as Ae, ref as Ne, onMounted as Ze, onBeforeUnmount as mn, computed as T, withDirectives as Pr, renderSlot as bn, toDisplayString as R, vShow as Cr, mergeProps as ze, mergeDefaults as de, Fragment as et, renderList as tt, normalizeStyle as Le, useCssVars as yn, useTemplateRef as ht, watchPostEffect as jr, normalizeClass as Nr, createCommentVNode as we, watchEffect as gt, createBlock as Zr, inject as zr, useId as Gr, createStaticVNode as Pt } from "vue";
import * as ie from "echarts";
import { graphic as P, init as vn } from "echarts";
import { debounce as Dr, round as Wr } from "lodash-es";
import { l as kr } from "./assets/symobl-BxxoCsjn.js";
import { l as Fr } from "./assets/symobl2-CZt6jmGx.js";
import { useResizeObserver as An } from "@vueuse/core";
const Hr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAVlJREFUOE+lkz9Lw0AYxu+9S3M1TcC2VLRVQXR00aIgrs6OfgTBTUGqi5OTLroJfgRHZ1cnaSdXF7UqlrZC0jSX5u7ktURCoYPmtve43/O8/w7IyNmstRyfWE5GUc4MYDLSckCVsIjv3p+X3ORziIPqrs6QfDBjKOCjgnEcUS1IN/tev4YB3v3ACNKcmKMGYRgLIYiW4a8wMFNzPtRUEZGqx19QYAgf9efRMYbCr8eCaVe2KLXKSvlvode8MyeXO7EIZlA/m3gGrDHSzjSKBL4LyntdyxYWL4CyUpyuVrIVdJ4OqD37kLUcjfcGuB+wUuuVTc1y6CrajaI9Vb1NgkkB77O+zYurbSwhBNmD9cP+AgAY6Eqi7g63K6fjGia85gkx8jforrWOYOM4WFKSAMJUif2Mld8bBw/87pWi/BJhyohO55yq5lTdTjXn1BsWC/xrt5Oj+cuv+gb+uBUuk3V96wAAAABJRU5ErkJggg==";
var Ln = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, n) {
    var r = -1;
    return t.some(function(o, i) {
      return o[0] === n ? (r = i, !0) : !1;
    }), r;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(n) {
        var r = e(this.__entries__, n), o = this.__entries__[r];
        return o && o[1];
      }, t.prototype.set = function(n, r) {
        var o = e(this.__entries__, n);
        ~o ? this.__entries__[o][1] = r : this.__entries__.push([n, r]);
      }, t.prototype.delete = function(n) {
        var r = this.__entries__, o = e(r, n);
        ~o && r.splice(o, 1);
      }, t.prototype.has = function(n) {
        return !!~e(this.__entries__, n);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(n, r) {
        r === void 0 && (r = null);
        for (var o = 0, i = this.__entries__; o < i.length; o++) {
          var s = i[o];
          n.call(r, s[1], s[0]);
        }
      }, t;
    }()
  );
}(), nt = typeof window < "u" && typeof document < "u" && window.document === document, Oe = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), Er = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(Oe) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), Ir = 2;
function qr(e, t) {
  var n = !1, r = !1, o = 0;
  function i() {
    n && (n = !1, e()), r && a();
  }
  function s() {
    Er(i);
  }
  function a() {
    var l = Date.now();
    if (n) {
      if (l - o < Ir)
        return;
      r = !0;
    } else
      n = !0, r = !1, setTimeout(s, t);
    o = l;
  }
  return a;
}
var Rr = 20, Vr = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], Xr = typeof MutationObserver < "u", Ur = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = qr(this.refresh.bind(this), Rr);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var n = this.observers_, r = n.indexOf(t);
      ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(n) {
        return n.gatherActive(), n.hasActive();
      });
      return t.forEach(function(n) {
        return n.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !nt || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), Xr ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !nt || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, r = n === void 0 ? "" : n, o = Vr.some(function(i) {
        return !!~r.indexOf(i);
      });
      o && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), wn = function(e, t) {
  for (var n = 0, r = Object.keys(t); n < r.length; n++) {
    var o = r[n];
    Object.defineProperty(e, o, {
      value: t[o],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, Q = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || Oe;
}, On = Ge(0, 0, 0, 0);
function Se(e) {
  return parseFloat(e) || 0;
}
function Ct(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(r, o) {
    var i = e["border-" + o + "-width"];
    return r + Se(i);
  }, 0);
}
function Yr(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, r = 0, o = t; r < o.length; r++) {
    var i = o[r], s = e["padding-" + i];
    n[i] = Se(s);
  }
  return n;
}
function Qr(e) {
  var t = e.getBBox();
  return Ge(0, 0, t.width, t.height);
}
function Kr(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return On;
  var r = Q(e).getComputedStyle(e), o = Yr(r), i = o.left + o.right, s = o.top + o.bottom, a = Se(r.width), l = Se(r.height);
  if (r.boxSizing === "border-box" && (Math.round(a + i) !== t && (a -= Ct(r, "left", "right") + i), Math.round(l + s) !== n && (l -= Ct(r, "top", "bottom") + s)), !_r(e)) {
    var c = Math.round(a + i) - t, u = Math.round(l + s) - n;
    Math.abs(c) !== 1 && (a -= c), Math.abs(u) !== 1 && (l -= u);
  }
  return Ge(o.left, o.top, a, l);
}
var Jr = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof Q(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof Q(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function _r(e) {
  return e === Q(e).document.documentElement;
}
function $r(e) {
  return nt ? Jr(e) ? Qr(e) : Kr(e) : On;
}
function eo(e) {
  var t = e.x, n = e.y, r = e.width, o = e.height, i = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, s = Object.create(i.prototype);
  return wn(s, {
    x: t,
    y: n,
    width: r,
    height: o,
    top: n,
    right: t + r,
    bottom: o + n,
    left: t
  }), s;
}
function Ge(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var to = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Ge(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = $r(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), no = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, n) {
      var r = eo(n);
      wn(this, { target: t, contentRect: r });
    }
    return e;
  }()
), ro = (
  /** @class */
  function() {
    function e(t, n, r) {
      if (this.activeObservations_ = [], this.observations_ = new Ln(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = r;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Q(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new to(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Q(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) && (n.delete(t), n.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(n) {
        n.isActive() && t.activeObservations_.push(n);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, n = this.activeObservations_.map(function(r) {
          return new no(r.target, r.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), Sn = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Ln(), Bn = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = Ur.getInstance(), r = new ro(t, n, this);
      Sn.set(this, r);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  Bn.prototype[e] = function() {
    var t;
    return (t = Sn.get(this))[e].apply(t, arguments);
  };
});
var oo = function() {
  return typeof Oe.ResizeObserver < "u" ? Oe.ResizeObserver : Bn;
}();
Promise.resolve({           });
function ao() {
  this.__data__ = [], this.size = 0;
}
function De(e, t) {
  return e === t || e !== e && t !== t;
}
function We(e, t) {
  for (var n = e.length; n--; )
    if (De(e[n][0], t))
      return n;
  return -1;
}
var io = Array.prototype, so = io.splice;
function lo(e) {
  var t = this.__data__, n = We(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : so.call(t, n, 1), --this.size, !0;
}
function co(e) {
  var t = this.__data__, n = We(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function uo(e) {
  return We(this.__data__, e) > -1;
}
function fo(e, t) {
  var n = this.__data__, r = We(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function F(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
F.prototype.clear = ao;
F.prototype.delete = lo;
F.prototype.get = co;
F.prototype.has = uo;
F.prototype.set = fo;
function po() {
  this.__data__ = new F(), this.size = 0;
}
function ho(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function go(e) {
  return this.__data__.get(e);
}
function mo(e) {
  return this.__data__.has(e);
}
var xn = typeof global == "object" && global && global.Object === Object && global, bo = typeof self == "object" && self && self.Object === Object && self, U = xn || bo || Function("return this")(), Be = U.Symbol, Tn = Object.prototype, yo = Tn.hasOwnProperty, vo = Tn.toString, ne = Be ? Be.toStringTag : void 0;
function Ao(e) {
  var t = yo.call(e, ne), n = e[ne];
  try {
    e[ne] = void 0;
    var r = !0;
  } catch {
  }
  var o = vo.call(e);
  return r && (t ? e[ne] = n : delete e[ne]), o;
}
var Lo = Object.prototype, wo = Lo.toString;
function Oo(e) {
  return wo.call(e);
}
var So = "[object Null]", Bo = "[object Undefined]", jt = Be ? Be.toStringTag : void 0;
function pe(e) {
  return e == null ? e === void 0 ? Bo : So : jt && jt in Object(e) ? Ao(e) : Oo(e);
}
function D(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var xo = "[object AsyncFunction]", To = "[object Function]", Mo = "[object GeneratorFunction]", Po = "[object Proxy]";
function mt(e) {
  if (!D(e))
    return !1;
  var t = pe(e);
  return t == To || t == Mo || t == xo || t == Po;
}
var Ve = U["__core-js_shared__"], Nt = function() {
  var e = /[^.]+$/.exec(Ve && Ve.keys && Ve.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Co(e) {
  return !!Nt && Nt in e;
}
var jo = Function.prototype, No = jo.toString;
function Zo(e) {
  if (e != null) {
    try {
      return No.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var zo = /[\\^$.*+?()[\]{}|]/g, Go = /^\[object .+?Constructor\]$/, Do = Function.prototype, Wo = Object.prototype, ko = Do.toString, Fo = Wo.hasOwnProperty, Ho = RegExp(
  "^" + ko.call(Fo).replace(zo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Eo(e) {
  if (!D(e) || Co(e))
    return !1;
  var t = mt(e) ? Ho : Go;
  return t.test(Zo(e));
}
function Io(e, t) {
  return e == null ? void 0 : e[t];
}
function bt(e, t) {
  var n = Io(e, t);
  return Eo(n) ? n : void 0;
}
var Mn = bt(U, "Map"), ce = bt(Object, "create");
function qo() {
  this.__data__ = ce ? ce(null) : {}, this.size = 0;
}
function Ro(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Vo = "__lodash_hash_undefined__", Xo = Object.prototype, Uo = Xo.hasOwnProperty;
function Yo(e) {
  var t = this.__data__;
  if (ce) {
    var n = t[e];
    return n === Vo ? void 0 : n;
  }
  return Uo.call(t, e) ? t[e] : void 0;
}
var Qo = Object.prototype, Ko = Qo.hasOwnProperty;
function Jo(e) {
  var t = this.__data__;
  return ce ? t[e] !== void 0 : Ko.call(t, e);
}
var _o = "__lodash_hash_undefined__";
function $o(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = ce && t === void 0 ? _o : t, this;
}
function V(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
V.prototype.clear = qo;
V.prototype.delete = Ro;
V.prototype.get = Yo;
V.prototype.has = Jo;
V.prototype.set = $o;
function ea() {
  this.size = 0, this.__data__ = {
    hash: new V(),
    map: new (Mn || F)(),
    string: new V()
  };
}
function ta(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ke(e, t) {
  var n = e.__data__;
  return ta(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function na(e) {
  var t = ke(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function ra(e) {
  return ke(this, e).get(e);
}
function oa(e) {
  return ke(this, e).has(e);
}
function aa(e, t) {
  var n = ke(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function K(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
K.prototype.clear = ea;
K.prototype.delete = na;
K.prototype.get = ra;
K.prototype.has = oa;
K.prototype.set = aa;
var ia = 200;
function sa(e, t) {
  var n = this.__data__;
  if (n instanceof F) {
    var r = n.__data__;
    if (!Mn || r.length < ia - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new K(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function J(e) {
  var t = this.__data__ = new F(e);
  this.size = t.size;
}
J.prototype.clear = po;
J.prototype.delete = ho;
J.prototype.get = go;
J.prototype.has = mo;
J.prototype.set = sa;
var xe = function() {
  try {
    var e = bt(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function yt(e, t, n) {
  t == "__proto__" && xe ? xe(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function rt(e, t, n) {
  (n !== void 0 && !De(e[t], n) || n === void 0 && !(t in e)) && yt(e, t, n);
}
function la(e) {
  return function(t, n, r) {
    for (var o = -1, i = Object(t), s = r(t), a = s.length; a--; ) {
      var l = s[++o];
      if (n(i[l], l, i) === !1)
        break;
    }
    return t;
  };
}
var ca = la(), Pn = typeof exports == "object" && exports && !exports.nodeType && exports, Zt = Pn && typeof module == "object" && module && !module.nodeType && module, ua = Zt && Zt.exports === Pn, zt = ua ? U.Buffer : void 0;
zt && zt.allocUnsafe;
function fa(e, t) {
  return e.slice();
}
var Gt = U.Uint8Array;
function da(e) {
  var t = new e.constructor(e.byteLength);
  return new Gt(t).set(new Gt(e)), t;
}
function pa(e, t) {
  var n = da(e.buffer);
  return new e.constructor(n, e.byteOffset, e.length);
}
function ha(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var Dt = Object.create, ga = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!D(t))
      return {};
    if (Dt)
      return Dt(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
function ma(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var Cn = ma(Object.getPrototypeOf, Object), ba = Object.prototype;
function jn(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || ba;
  return e === n;
}
function ya(e) {
  return typeof e.constructor == "function" && !jn(e) ? ga(Cn(e)) : {};
}
function _(e) {
  return e != null && typeof e == "object";
}
var va = "[object Arguments]";
function Wt(e) {
  return _(e) && pe(e) == va;
}
var Nn = Object.prototype, Aa = Nn.hasOwnProperty, La = Nn.propertyIsEnumerable, ot = Wt(/* @__PURE__ */ function() {
  return arguments;
}()) ? Wt : function(e) {
  return _(e) && Aa.call(e, "callee") && !La.call(e, "callee");
}, at = Array.isArray, wa = 9007199254740991;
function Zn(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= wa;
}
function vt(e) {
  return e != null && Zn(e.length) && !mt(e);
}
function Oa(e) {
  return _(e) && vt(e);
}
function Sa() {
  return !1;
}
var zn = typeof exports == "object" && exports && !exports.nodeType && exports, kt = zn && typeof module == "object" && module && !module.nodeType && module, Ba = kt && kt.exports === zn, Ft = Ba ? U.Buffer : void 0, xa = Ft ? Ft.isBuffer : void 0, Gn = xa || Sa, Ta = "[object Object]", Ma = Function.prototype, Pa = Object.prototype, Dn = Ma.toString, Ca = Pa.hasOwnProperty, ja = Dn.call(Object);
function Na(e) {
  if (!_(e) || pe(e) != Ta)
    return !1;
  var t = Cn(e);
  if (t === null)
    return !0;
  var n = Ca.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && Dn.call(n) == ja;
}
var Za = "[object Arguments]", za = "[object Array]", Ga = "[object Boolean]", Da = "[object Date]", Wa = "[object Error]", ka = "[object Function]", Fa = "[object Map]", Ha = "[object Number]", Ea = "[object Object]", Ia = "[object RegExp]", qa = "[object Set]", Ra = "[object String]", Va = "[object WeakMap]", Xa = "[object ArrayBuffer]", Ua = "[object DataView]", Ya = "[object Float32Array]", Qa = "[object Float64Array]", Ka = "[object Int8Array]", Ja = "[object Int16Array]", _a = "[object Int32Array]", $a = "[object Uint8Array]", ei = "[object Uint8ClampedArray]", ti = "[object Uint16Array]", ni = "[object Uint32Array]", A = {};
A[Ya] = A[Qa] = A[Ka] = A[Ja] = A[_a] = A[$a] = A[ei] = A[ti] = A[ni] = !0;
A[Za] = A[za] = A[Xa] = A[Ga] = A[Ua] = A[Da] = A[Wa] = A[ka] = A[Fa] = A[Ha] = A[Ea] = A[Ia] = A[qa] = A[Ra] = A[Va] = !1;
function ri(e) {
  return _(e) && Zn(e.length) && !!A[pe(e)];
}
function oi(e) {
  return function(t) {
    return e(t);
  };
}
var Wn = typeof exports == "object" && exports && !exports.nodeType && exports, se = Wn && typeof module == "object" && module && !module.nodeType && module, ai = se && se.exports === Wn, Xe = ai && xn.process, Ht = function() {
  try {
    var e = se && se.require && se.require("util").types;
    return e || Xe && Xe.binding && Xe.binding("util");
  } catch {
  }
}(), Et = Ht && Ht.isTypedArray, kn = Et ? oi(Et) : ri;
function it(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var ii = Object.prototype, si = ii.hasOwnProperty;
function li(e, t, n) {
  var r = e[t];
  (!(si.call(e, t) && De(r, n)) || n === void 0 && !(t in e)) && yt(e, t, n);
}
function ci(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var i = -1, s = t.length; ++i < s; ) {
    var a = t[i], l = void 0;
    l === void 0 && (l = e[a]), o ? yt(n, a, l) : li(n, a, l);
  }
  return n;
}
function ui(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var fi = 9007199254740991, di = /^(?:0|[1-9]\d*)$/;
function Fn(e, t) {
  var n = typeof e;
  return t = t ?? fi, !!t && (n == "number" || n != "symbol" && di.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function pi(e, t) {
  var n = at(e), r = !n && ot(e), o = !n && !r && Gn(e), i = !n && !r && !o && kn(e), s = n || r || o || i, a = s ? ui(e.length, String) : [], l = a.length;
  for (var c in e)
    s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    Fn(c, l)) || a.push(c);
  return a;
}
function hi(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var gi = Object.prototype, mi = gi.hasOwnProperty;
function bi(e) {
  if (!D(e))
    return hi(e);
  var t = jn(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !mi.call(e, r)) || n.push(r);
  return n;
}
function Hn(e) {
  return vt(e) ? pi(e) : bi(e);
}
function yi(e) {
  return ci(e, Hn(e));
}
function vi(e, t, n, r, o, i, s) {
  var a = it(e, n), l = it(t, n), c = s.get(l);
  if (c) {
    rt(e, n, c);
    return;
  }
  var u = i ? i(a, l, n + "", e, t, s) : void 0, f = u === void 0;
  if (f) {
    var d = at(l), g = !d && Gn(l), v = !d && !g && kn(l);
    u = l, d || g || v ? at(a) ? u = a : Oa(a) ? u = ha(a) : g ? (f = !1, u = fa(l)) : v ? (f = !1, u = pa(l)) : u = [] : Na(l) || ot(l) ? (u = a, ot(a) ? u = yi(a) : (!D(a) || mt(a)) && (u = ya(l))) : f = !1;
  }
  f && (s.set(l, u), o(u, l, r, i, s), s.delete(l)), rt(e, n, u);
}
function En(e, t, n, r, o) {
  e !== t && ca(t, function(i, s) {
    if (o || (o = new J()), D(i))
      vi(e, t, s, n, En, r, o);
    else {
      var a = r ? r(it(e, s), i, s + "", e, t, o) : void 0;
      a === void 0 && (a = i), rt(e, s, a);
    }
  }, Hn);
}
function In(e) {
  return e;
}
function Ai(e, t, n) {
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
var It = Math.max;
function Li(e, t, n) {
  return t = It(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, i = It(r.length - t, 0), s = Array(i); ++o < i; )
      s[o] = r[t + o];
    o = -1;
    for (var a = Array(t + 1); ++o < t; )
      a[o] = r[o];
    return a[t] = n(s), Ai(e, this, a);
  };
}
function wi(e) {
  return function() {
    return e;
  };
}
var Oi = xe ? function(e, t) {
  return xe(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: wi(t),
    writable: !0
  });
} : In, Si = 800, Bi = 16, xi = Date.now;
function Ti(e) {
  var t = 0, n = 0;
  return function() {
    var r = xi(), o = Bi - (r - n);
    if (n = r, o > 0) {
      if (++t >= Si)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var Mi = Ti(Oi);
function Pi(e, t) {
  return Mi(Li(e, t, In), e + "");
}
function Ci(e, t, n) {
  if (!D(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? vt(n) && Fn(t, n.length) : r == "string" && t in n) ? De(n[t], e) : !1;
}
function ji(e) {
  return Pi(function(t, n) {
    var r = -1, o = n.length, i = o > 1 ? n[o - 1] : void 0, s = o > 2 ? n[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (o--, i) : void 0, s && Ci(n[0], n[1], s) && (i = o < 3 ? void 0 : i, o = 1), t = Object(t); ++r < o; ) {
      var a = n[r];
      a && e(t, a, r, i);
    }
    return t;
  });
}
var N = ji(function(e, t, n) {
  En(e, t, n);
});
function qt() {
  return {
    tooltip: {
      show: !0,
      trigger: "axis"
    },
    animation: !0
  };
}
function qn(e, t) {
  return Array.isArray(e) ? e.map((n) => N({}, t, n)) : typeof e == "object" ? [N({}, t, e)] : e;
}
function q(e, t, n) {
  t.forEach((r, o) => {
    const i = e[r];
    Array.isArray(i) && (e[r] = i.map((s) => N({}, n[o], s)));
  });
}
const Ni = {
  type: "line",
  lineStyle: {
    width: 1.5,
    type: "dashed",
    dashOffset: 10,
    color: "#3673F5"
  },
  data: [],
  symbol: `image://${Hr}`,
  symbolSize: 15,
  areaStyle: {
    opacity: 0.32,
    color: new ie.graphic.LinearGradient(1, 1, 1, 0, [
      {
        offset: 0,
        color: "#D0DFFD"
      },
      {
        offset: 1,
        color: "#3673F5"
      }
    ])
  }
}, Zi = {
  grid: {
    containLabel: !0,
    left: "1%",
    right: "2%",
    bottom: "3%",
    top: "10%"
  },
  xAxis: {
    type: "category",
    boundaryGap: !1,
    splitLine: {
      show: !1
    },
    axisTick: {
      show: !1
    },
    axisLine: {
      lineStyle: {
        color: "#E3E3E3"
      }
    },
    axisLabel: {
      color: "#888888"
    }
  },
  yAxis: {
    type: "value",
    axisLabel: {
      color: "#888888",
      formatter: (e) => e + "%"
    },
    axisTick: {},
    splitLine: {
      lineStyle: {
        color: "#F5F5F5"
      }
    }
  }
};
function Rt(e) {
  const t = N({}, Zi, e);
  return t.series = qn(e == null ? void 0 : e.series, Ni) ?? [], t;
}
const zi = {
  color: [
    new ie.graphic.LinearGradient(0, 1, 0, 0, [
      { offset: 0, color: "rgba(87, 151, 238, 1)" },
      { offset: 1, color: "rgba(45, 109, 245, 1)" }
    ]),
    new ie.graphic.LinearGradient(1, 0, 0, 1, [
      { offset: 0, color: "rgba(27, 217, 78, 1)" },
      { offset: 1, color: "rgba(1, 158, 43, 1)" }
    ]),
    new ie.graphic.LinearGradient(1, 0, 0, 1, [
      { offset: 0, color: "rgba(250, 112, 22, 1)" },
      { offset: 1, color: "rgba(163, 73, 15, 1)" }
    ])
  ],
  symbols: []
}, Gi = ["rgba(54, 115, 245, 1)", "rgba(1, 158, 43, 1)", "rgba(222, 56, 4, 1)"], Di = {
  type: "bar",
  barWidth: "11px",
  data: [],
  itemStyle: {
    shadowColor: "rgba(1,11,43, 0.7)",
    shadowBlur: 4,
    shadowOffsetX: 0,
    shadowOffsetY: -3
  }
}, Rn = {
  type: "category",
  boundaryGap: !0,
  splitLine: {
    show: !1
  },
  axisTick: {
    show: !1
  },
  axisLine: {
    lineStyle: {
      color: "#E3E3E3"
    }
  },
  axisLabel: {
    color: "#888888"
  }
}, Vn = {
  name: "",
  nameLocation: "end",
  nameTextStyle: {
    padding: [0, 0, 0, 20]
  },
  type: "value",
  axisLabel: {
    color: "#888888"
  },
  axisTick: {},
  splitLine: {
    lineStyle: {
      type: "dotted",
      color: "#F5F5F5"
    }
  }
}, Xn = {
  show: !0,
  top: 10,
  left: "right",
  itemGap: 20,
  itemWidth: 9,
  itemHeight: 9,
  icon: "circle",
  selectedMode: !0,
  textStyle: {
    fontSize: 14,
    color: "#888888"
  }
}, Un = {
  containLabel: !0,
  left: "3%",
  right: "2%",
  bottom: "3%",
  top: "15%"
}, Wi = {
  legend: Xn,
  grid: Un,
  xAxis: Rn,
  yAxis: Vn,
  color: Gi
};
function ki(e, { stack: t } = {
  stack: !1
}) {
  q(e, [
    "xAxis",
    "yAxis",
    "legend",
    "grid"
  ], [
    Rn,
    Vn,
    Xn,
    Un
  ]);
  const n = N({}, Wi, e);
  let r = {
    ...Di,
    stack: t ? "Total" : void 0
  };
  return n.series = qn(e == null ? void 0 : e.series, r) ?? [], n;
}
var Ue = function() {
  return U.Date.now();
}, Fi = /\s/;
function Hi(e) {
  for (var t = e.length; t-- && Fi.test(e.charAt(t)); )
    ;
  return t;
}
var Ei = /^\s+/;
function Ii(e) {
  return e && e.slice(0, Hi(e) + 1).replace(Ei, "");
}
var qi = "[object Symbol]";
function Ri(e) {
  return typeof e == "symbol" || _(e) && pe(e) == qi;
}
var Vt = NaN, Vi = /^[-+]0x[0-9a-f]+$/i, Xi = /^0b[01]+$/i, Ui = /^0o[0-7]+$/i, Yi = parseInt;
function Xt(e) {
  if (typeof e == "number")
    return e;
  if (Ri(e))
    return Vt;
  if (D(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = D(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Ii(e);
  var n = Xi.test(e);
  return n || Ui.test(e) ? Yi(e.slice(2), n ? 2 : 8) : Vi.test(e) ? Vt : +e;
}
var Qi = "Expected a function", Ki = Math.max, Ji = Math.min;
function _i(e, t, n) {
  var r, o, i, s, a, l, c = 0, u = !1, f = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(Qi);
  t = Xt(t) || 0, D(n) && (u = !!n.leading, f = "maxWait" in n, i = f ? Ki(Xt(n.maxWait) || 0, t) : i, d = "trailing" in n ? !!n.trailing : d);
  function g(m) {
    var x = r, j = o;
    return r = o = void 0, c = m, s = e.apply(j, x), s;
  }
  function v(m) {
    return c = m, a = setTimeout(y, t), u ? g(m) : s;
  }
  function S(m) {
    var x = m - l, j = m - c, I = t - x;
    return f ? Ji(I, i - j) : I;
  }
  function p(m) {
    var x = m - l, j = m - c;
    return l === void 0 || x >= t || x < 0 || f && j >= i;
  }
  function y() {
    var m = Ue();
    if (p(m))
      return B(m);
    a = setTimeout(y, S(m));
  }
  function B(m) {
    return a = void 0, d && r ? g(m) : (r = o = void 0, s);
  }
  function M() {
    a !== void 0 && clearTimeout(a), c = 0, r = l = o = a = void 0;
  }
  function E() {
    return a === void 0 ? s : B(Ue());
  }
  function G() {
    var m = Ue(), x = p(m);
    if (r = arguments, o = this, l = m, x) {
      if (a === void 0)
        return v(l);
      if (f)
        return clearTimeout(a), a = setTimeout(y, t), g(l);
    }
    return a === void 0 && (a = setTimeout(y, t)), s;
  }
  return G.cancel = M, G.flush = E, G;
}
function $i(e, t) {
  const n = new oo(t);
  return n.observe(e), () => {
    n.unobserve(e);
  };
}
function Yn() {
  const e = Ae(), t = Ae(), n = Ne(qt()), r = [];
  function o(f) {
    r.push(f);
  }
  function i() {
    r.forEach((f) => f(t.value));
  }
  function s() {
    t.value = ie.init(e.value);
  }
  function a(...f) {
    n.value = N({}, qt(), ...f);
  }
  let l = () => {
  };
  Ze(() => {
    s(), u(), i(), l = $i(e.value, c);
  });
  const c = _i(() => {
    var f;
    (f = t.value) == null || f.resize({
      animation: {
        duration: 500,
        easing: "cubicOut"
      }
    });
  }, 100);
  function u(f = !0) {
    var d;
    (d = t.value) == null || d.setOption(n.value, f), c();
  }
  return window.addEventListener("resize", c), mn(() => {
    window.removeEventListener("resize", c), l();
  }), {
    chartInstance: t,
    chartDom: e,
    option: n,
    renderChart: u,
    updateOptions: a,
    onChartLoad: o,
    resizeChart: c
  };
}
const es = { class: "s_charts_empty absolute inset-0 z-5 flex flex-col justify-center items-center" }, ts = { class: "mt-10px" }, ns = /* @__PURE__ */ C({
  __name: "s-charts-empty",
  props: {
    data: { default: () => [] },
    tip: { default: "暂无数据" }
  },
  setup(e) {
    const t = e, n = T(() => {
      var r;
      return !((r = t.data) != null && r.length);
    });
    return (r, o) => Pr((w(), O(
      "div",
      es,
      [
        bn(r.$slots, "default", {}, () => [
          o[0] || (o[0] = h(
            "svg",
            {
              t: "1724983222826",
              class: "icon",
              viewBox: "0 0 1024 1024",
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              "p-id": "4249",
              width: "48",
              height: "48"
            },
            [
              h("path", {
                d: "M855.6 427.2H168.5c-12.7 0-24.4 6.9-30.6 18L4.4 684.7C1.5 689.9 0 695.8 0 701.8v287.1c0 19.4 15.7 35.1 35.1 35.1H989c19.4 0 35.1-15.7 35.1-35.1V701.8c0-6-1.5-11.8-4.4-17.1L886.2 445.2c-6.2-11.1-17.9-18-30.6-18zM673.4 695.6c-16.5 0-30.8 11.5-34.3 27.7-12.7 58.5-64.8 102.3-127.2 102.3s-114.5-43.8-127.2-102.3c-3.5-16.1-17.8-27.7-34.3-27.7H119c-26.4 0-43.3-28-31.1-51.4l81.7-155.8c6.1-11.6 18-18.8 31.1-18.8h622.4c13 0 25 7.2 31.1 18.8l81.7 155.8c12.2 23.4-4.7 51.4-31.1 51.4H673.4zM819.9 209.5c-1-1.8-2.1-3.7-3.2-5.5-9.8-16.6-31.1-22.2-47.8-12.6L648.5 261c-17 9.8-22.7 31.6-12.6 48.4 0.9 1.4 1.7 2.9 2.5 4.4 9.5 17 31.2 22.8 48 13L807 257.3c16.7-9.7 22.4-31 12.9-47.8zM375.4 261.1L255 191.6c-16.7-9.6-38-4-47.8 12.6-1.1 1.8-2.1 3.6-3.2 5.5-9.5 16.8-3.8 38.1 12.9 47.8L337.3 327c16.9 9.7 38.6 4 48-13.1 0.8-1.5 1.7-2.9 2.5-4.4 10.2-16.8 4.5-38.6-12.4-48.4zM512 239.3h2.5c19.5 0.3 35.5-15.5 35.5-35.1v-139c0-19.3-15.6-34.9-34.8-35.1h-6.4C489.6 30.3 474 46 474 65.2v139c0 19.5 15.9 35.4 35.5 35.1h2.5z",
                "p-id": "4250",
                fill: "#cdcdcd"
              })
            ],
            -1
            /* HOISTED */
          )),
          h(
            "span",
            ts,
            R(r.tip),
            1
            /* TEXT */
          )
        ], !0)
      ],
      512
      /* NEED_PATCH */
    )), [
      [Cr, n.value]
    ]);
  }
}), At = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, Qn = /* @__PURE__ */ At(ns, [["__scopeId", "data-v-828084f4"]]), rs = { class: "s_charts_line relative w-1/1 h-1/1 flex flex-col flex-1" }, os = /* @__PURE__ */ C({
  __name: "s-charts-line",
  props: {
    opts: { default: () => ({}) }
  },
  setup(e, { expose: t }) {
    const { chartDom: n, chartInstance: r, updateOptions: o, renderChart: i } = Yn(), s = e;
    return o(Rt(s.opts)), pt(() => s.opts, () => {
      o(Rt(s.opts)), i();
    }, {
      deep: !0
    }), t({
      chartInstance: r
    }), (a, l) => {
      var c;
      return w(), O("div", rs, [
        h(
          "div",
          {
            class: "s_charts__wrapper flex flex-1 flex-col",
            ref_key: "chartDom",
            ref: n
          },
          null,
          512
          /* NEED_PATCH */
        ),
        k(Z(Qn), {
          data: (c = a.opts) == null ? void 0 : c.series
        }, null, 8, ["data"])
      ]);
    };
  }
}), as = /* @__PURE__ */ At(os, [["__scopeId", "data-v-97768dff"]]);
function is(...e) {
  return (t, ...n) => e.length ? e.reduce((r, o) => o(r, ...n), t) : t;
}
const ss = { class: "s_charts_bar relative w-1/1 h-1/1 flex flex-col flex-1" }, ls = /* @__PURE__ */ C({
  __name: "s-charts-bar",
  props: {
    opts: { default: () => ({}) },
    type: { default: "bar" },
    fake3d: { type: Boolean, default: !0 },
    linearGradientColor: { default: () => zi.color },
    stack: { type: Boolean, default: !1 }
  },
  setup(e, { expose: t }) {
    const { chartDom: n, chartInstance: r, onChartLoad: o, updateOptions: i, renderChart: s } = Yn(), a = e;
    function l(g) {
      return Array.isArray(g) ? g : g ? [g] : [];
    }
    function c() {
      const g = is(ki, u, f, d)(a.opts, {
        stack: a.stack
      });
      i(g);
    }
    o(() => {
      c(), s(!1);
    });
    function u(g) {
      return N({}, g, {
        series: l(g.series).map((v, S) => {
          var p;
          return N({}, {
            itemStyle: {
              color: (p = a.linearGradientColor) == null ? void 0 : p[S]
            }
          }, v);
        })
      });
    }
    function f(g) {
      if (a.type === "bar-line") {
        const v = l(g.series), S = v == null ? void 0 : v.map((p) => N({}, {
          markLine: {
            silent: !1,
            symbol: "none",
            symbolSize: 0,
            lineStyle: {
              type: "dashed"
            },
            data: (() => {
              const y = (p == null ? void 0 : p.data) ?? [];
              return y.map((B, M) => {
                if (!(M >= y.length - 1))
                  return [
                    {
                      coord: [M, B ?? 0]
                    },
                    {
                      coord: [M + 1, y[M + 1] ?? 0]
                    }
                  ];
              }).filter(Boolean);
            })()
          }
        }, p));
        return N({}, g, {
          series: S
        });
      }
      return g;
    }
    function d(g) {
      if (a.fake3d) {
        const v = l(g.series);
        let S = /* @__PURE__ */ new Map();
        const p = v == null ? void 0 : v.map((y, B) => N({}, {
          markPoint: {
            symbol: "circle",
            symbolSize: [11, 8],
            z: 11,
            data: (() => {
              const M = (y == null ? void 0 : y.data) ?? [], E = B - 1, G = S.get(E), m = [], x = M.map((j, I) => {
                let Mt = j;
                return a.stack && G && (Mt += G[I], S.delete(S)), m.push(j), {
                  coord: [I, Mt ?? 0]
                };
              });
              return a.stack && S.set(B, m), x;
            })()
          }
        }, y));
        return S.clear(), N({}, g, {
          series: p
        });
      }
      return g;
    }
    return pt(() => a.opts, () => {
      c(), s();
    }, {
      deep: !0
    }), t({
      chartInstance: r
    }), (g, v) => {
      var S;
      return w(), O("div", ss, [
        h(
          "div",
          {
            class: "s_charts__wrapper flex flex-1 flex-col",
            ref_key: "chartDom",
            ref: n
          },
          null,
          512
          /* NEED_PATCH */
        ),
        k(Z(Qn), {
          data: (S = g.opts) == null ? void 0 : S.series
        }, null, 8, ["data"])
      ]);
    };
  }
}), cs = /* @__PURE__ */ At(ls, [["__scopeId", "data-v-fe947bf7"]]);
function us() {
  this.__data__ = [], this.size = 0;
}
function Fe(e, t) {
  return e === t || e !== e && t !== t;
}
function He(e, t) {
  for (var n = e.length; n--; )
    if (Fe(e[n][0], t))
      return n;
  return -1;
}
var fs = Array.prototype, ds = fs.splice;
function ps(e) {
  var t = this.__data__, n = He(t, e);
  if (n < 0)
    return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : ds.call(t, n, 1), --this.size, !0;
}
function hs(e) {
  var t = this.__data__, n = He(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function gs(e) {
  return He(this.__data__, e) > -1;
}
function ms(e, t) {
  var n = this.__data__, r = He(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
function H(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
H.prototype.clear = us;
H.prototype.delete = ps;
H.prototype.get = hs;
H.prototype.has = gs;
H.prototype.set = ms;
function bs() {
  this.__data__ = new H(), this.size = 0;
}
function ys(e) {
  var t = this.__data__, n = t.delete(e);
  return this.size = t.size, n;
}
function vs(e) {
  return this.__data__.get(e);
}
function As(e) {
  return this.__data__.has(e);
}
var Kn = typeof global == "object" && global && global.Object === Object && global, Ls = typeof self == "object" && self && self.Object === Object && self, Y = Kn || Ls || Function("return this")(), Te = Y.Symbol, Jn = Object.prototype, ws = Jn.hasOwnProperty, Os = Jn.toString, re = Te ? Te.toStringTag : void 0;
function Ss(e) {
  var t = ws.call(e, re), n = e[re];
  try {
    e[re] = void 0;
    var r = !0;
  } catch {
  }
  var o = Os.call(e);
  return r && (t ? e[re] = n : delete e[re]), o;
}
var Bs = Object.prototype, xs = Bs.toString;
function Ts(e) {
  return xs.call(e);
}
var Ms = "[object Null]", Ps = "[object Undefined]", Ut = Te ? Te.toStringTag : void 0;
function he(e) {
  return e == null ? e === void 0 ? Ps : Ms : Ut && Ut in Object(e) ? Ss(e) : Ts(e);
}
function W(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Cs = "[object AsyncFunction]", js = "[object Function]", Ns = "[object GeneratorFunction]", Zs = "[object Proxy]";
function Lt(e) {
  if (!W(e))
    return !1;
  var t = he(e);
  return t == js || t == Ns || t == Cs || t == Zs;
}
var Ye = Y["__core-js_shared__"], Yt = function() {
  var e = /[^.]+$/.exec(Ye && Ye.keys && Ye.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function zs(e) {
  return !!Yt && Yt in e;
}
var Gs = Function.prototype, Ds = Gs.toString;
function Ws(e) {
  if (e != null) {
    try {
      return Ds.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var ks = /[\\^$.*+?()[\]{}|]/g, Fs = /^\[object .+?Constructor\]$/, Hs = Function.prototype, Es = Object.prototype, Is = Hs.toString, qs = Es.hasOwnProperty, Rs = RegExp(
  "^" + Is.call(qs).replace(ks, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Vs(e) {
  if (!W(e) || zs(e))
    return !1;
  var t = Lt(e) ? Rs : Fs;
  return t.test(Ws(e));
}
function Xs(e, t) {
  return e == null ? void 0 : e[t];
}
function wt(e, t) {
  var n = Xs(e, t);
  return Vs(n) ? n : void 0;
}
var _n = wt(Y, "Map"), ue = wt(Object, "create");
function Us() {
  this.__data__ = ue ? ue(null) : {}, this.size = 0;
}
function Ys(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Qs = "__lodash_hash_undefined__", Ks = Object.prototype, Js = Ks.hasOwnProperty;
function _s(e) {
  var t = this.__data__;
  if (ue) {
    var n = t[e];
    return n === Qs ? void 0 : n;
  }
  return Js.call(t, e) ? t[e] : void 0;
}
var $s = Object.prototype, e1 = $s.hasOwnProperty;
function t1(e) {
  var t = this.__data__;
  return ue ? t[e] !== void 0 : e1.call(t, e);
}
var n1 = "__lodash_hash_undefined__";
function r1(e, t) {
  var n = this.__data__;
  return this.size += this.has(e) ? 0 : 1, n[e] = ue && t === void 0 ? n1 : t, this;
}
function X(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
X.prototype.clear = Us;
X.prototype.delete = Ys;
X.prototype.get = _s;
X.prototype.has = t1;
X.prototype.set = r1;
function o1() {
  this.size = 0, this.__data__ = {
    hash: new X(),
    map: new (_n || H)(),
    string: new X()
  };
}
function a1(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ee(e, t) {
  var n = e.__data__;
  return a1(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function i1(e) {
  var t = Ee(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function s1(e) {
  return Ee(this, e).get(e);
}
function l1(e) {
  return Ee(this, e).has(e);
}
function c1(e, t) {
  var n = Ee(this, e), r = n.size;
  return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
function $(e) {
  var t = -1, n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
$.prototype.clear = o1;
$.prototype.delete = i1;
$.prototype.get = s1;
$.prototype.has = l1;
$.prototype.set = c1;
var u1 = 200;
function f1(e, t) {
  var n = this.__data__;
  if (n instanceof H) {
    var r = n.__data__;
    if (!_n || r.length < u1 - 1)
      return r.push([e, t]), this.size = ++n.size, this;
    n = this.__data__ = new $(r);
  }
  return n.set(e, t), this.size = n.size, this;
}
function ee(e) {
  var t = this.__data__ = new H(e);
  this.size = t.size;
}
ee.prototype.clear = bs;
ee.prototype.delete = ys;
ee.prototype.get = vs;
ee.prototype.has = As;
ee.prototype.set = f1;
var Me = function() {
  try {
    var e = wt(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}();
function Ot(e, t, n) {
  t == "__proto__" && Me ? Me(e, t, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : e[t] = n;
}
function st(e, t, n) {
  (n !== void 0 && !Fe(e[t], n) || n === void 0 && !(t in e)) && Ot(e, t, n);
}
function d1(e) {
  return function(t, n, r) {
    for (var o = -1, i = Object(t), s = r(t), a = s.length; a--; ) {
      var l = s[++o];
      if (n(i[l], l, i) === !1)
        break;
    }
    return t;
  };
}
var p1 = d1(), $n = typeof exports == "object" && exports && !exports.nodeType && exports, Qt = $n && typeof module == "object" && module && !module.nodeType && module, h1 = Qt && Qt.exports === $n, Kt = h1 ? Y.Buffer : void 0;
Kt && Kt.allocUnsafe;
function g1(e, t) {
  return e.slice();
}
var Jt = Y.Uint8Array;
function m1(e) {
  var t = new e.constructor(e.byteLength);
  return new Jt(t).set(new Jt(e)), t;
}
function b1(e, t) {
  var n = m1(e.buffer);
  return new e.constructor(n, e.byteOffset, e.length);
}
function y1(e, t) {
  var n = -1, r = e.length;
  for (t || (t = Array(r)); ++n < r; )
    t[n] = e[n];
  return t;
}
var _t = Object.create, v1 = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!W(t))
      return {};
    if (_t)
      return _t(t);
    e.prototype = t;
    var n = new e();
    return e.prototype = void 0, n;
  };
}();
function A1(e, t) {
  return function(n) {
    return e(t(n));
  };
}
var er = A1(Object.getPrototypeOf, Object), L1 = Object.prototype;
function tr(e) {
  var t = e && e.constructor, n = typeof t == "function" && t.prototype || L1;
  return e === n;
}
function w1(e) {
  return typeof e.constructor == "function" && !tr(e) ? v1(er(e)) : {};
}
function te(e) {
  return e != null && typeof e == "object";
}
var O1 = "[object Arguments]";
function $t(e) {
  return te(e) && he(e) == O1;
}
var nr = Object.prototype, S1 = nr.hasOwnProperty, B1 = nr.propertyIsEnumerable, lt = $t(/* @__PURE__ */ function() {
  return arguments;
}()) ? $t : function(e) {
  return te(e) && S1.call(e, "callee") && !B1.call(e, "callee");
}, ct = Array.isArray, x1 = 9007199254740991;
function rr(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= x1;
}
function St(e) {
  return e != null && rr(e.length) && !Lt(e);
}
function T1(e) {
  return te(e) && St(e);
}
function M1() {
  return !1;
}
var or = typeof exports == "object" && exports && !exports.nodeType && exports, en = or && typeof module == "object" && module && !module.nodeType && module, P1 = en && en.exports === or, tn = P1 ? Y.Buffer : void 0, C1 = tn ? tn.isBuffer : void 0, ar = C1 || M1, j1 = "[object Object]", N1 = Function.prototype, Z1 = Object.prototype, ir = N1.toString, z1 = Z1.hasOwnProperty, G1 = ir.call(Object);
function D1(e) {
  if (!te(e) || he(e) != j1)
    return !1;
  var t = er(e);
  if (t === null)
    return !0;
  var n = z1.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && ir.call(n) == G1;
}
var W1 = "[object Arguments]", k1 = "[object Array]", F1 = "[object Boolean]", H1 = "[object Date]", E1 = "[object Error]", I1 = "[object Function]", q1 = "[object Map]", R1 = "[object Number]", V1 = "[object Object]", X1 = "[object RegExp]", U1 = "[object Set]", Y1 = "[object String]", Q1 = "[object WeakMap]", K1 = "[object ArrayBuffer]", J1 = "[object DataView]", _1 = "[object Float32Array]", $1 = "[object Float64Array]", el = "[object Int8Array]", tl = "[object Int16Array]", nl = "[object Int32Array]", rl = "[object Uint8Array]", ol = "[object Uint8ClampedArray]", al = "[object Uint16Array]", il = "[object Uint32Array]", L = {};
L[_1] = L[$1] = L[el] = L[tl] = L[nl] = L[rl] = L[ol] = L[al] = L[il] = !0;
L[W1] = L[k1] = L[K1] = L[F1] = L[J1] = L[H1] = L[E1] = L[I1] = L[q1] = L[R1] = L[V1] = L[X1] = L[U1] = L[Y1] = L[Q1] = !1;
function sl(e) {
  return te(e) && rr(e.length) && !!L[he(e)];
}
function ll(e) {
  return function(t) {
    return e(t);
  };
}
var sr = typeof exports == "object" && exports && !exports.nodeType && exports, le = sr && typeof module == "object" && module && !module.nodeType && module, cl = le && le.exports === sr, Qe = cl && Kn.process, nn = function() {
  try {
    var e = le && le.require && le.require("util").types;
    return e || Qe && Qe.binding && Qe.binding("util");
  } catch {
  }
}(), rn = nn && nn.isTypedArray, lr = rn ? ll(rn) : sl;
function ut(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var ul = Object.prototype, fl = ul.hasOwnProperty;
function dl(e, t, n) {
  var r = e[t];
  (!(fl.call(e, t) && Fe(r, n)) || n === void 0 && !(t in e)) && Ot(e, t, n);
}
function pl(e, t, n, r) {
  var o = !n;
  n || (n = {});
  for (var i = -1, s = t.length; ++i < s; ) {
    var a = t[i], l = void 0;
    l === void 0 && (l = e[a]), o ? Ot(n, a, l) : dl(n, a, l);
  }
  return n;
}
function hl(e, t) {
  for (var n = -1, r = Array(e); ++n < e; )
    r[n] = t(n);
  return r;
}
var gl = 9007199254740991, ml = /^(?:0|[1-9]\d*)$/;
function cr(e, t) {
  var n = typeof e;
  return t = t ?? gl, !!t && (n == "number" || n != "symbol" && ml.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function bl(e, t) {
  var n = ct(e), r = !n && lt(e), o = !n && !r && ar(e), i = !n && !r && !o && lr(e), s = n || r || o || i, a = s ? hl(e.length, String) : [], l = a.length;
  for (var c in e)
    s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (c == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (c == "offset" || c == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    i && (c == "buffer" || c == "byteLength" || c == "byteOffset") || // Skip index properties.
    cr(c, l)) || a.push(c);
  return a;
}
function yl(e) {
  var t = [];
  if (e != null)
    for (var n in Object(e))
      t.push(n);
  return t;
}
var vl = Object.prototype, Al = vl.hasOwnProperty;
function Ll(e) {
  if (!W(e))
    return yl(e);
  var t = tr(e), n = [];
  for (var r in e)
    r == "constructor" && (t || !Al.call(e, r)) || n.push(r);
  return n;
}
function ur(e) {
  return St(e) ? bl(e) : Ll(e);
}
function wl(e) {
  return pl(e, ur(e));
}
function Ol(e, t, n, r, o, i, s) {
  var a = ut(e, n), l = ut(t, n), c = s.get(l);
  if (c) {
    st(e, n, c);
    return;
  }
  var u = i ? i(a, l, n + "", e, t, s) : void 0, f = u === void 0;
  if (f) {
    var d = ct(l), g = !d && ar(l), v = !d && !g && lr(l);
    u = l, d || g || v ? ct(a) ? u = a : T1(a) ? u = y1(a) : g ? (f = !1, u = g1(l)) : v ? (f = !1, u = b1(l)) : u = [] : D1(l) || lt(l) ? (u = a, lt(a) ? u = wl(a) : (!W(a) || Lt(a)) && (u = w1(l))) : f = !1;
  }
  f && (s.set(l, u), o(u, l, r, i, s), s.delete(l)), st(e, n, u);
}
function fr(e, t, n, r, o) {
  e !== t && p1(t, function(i, s) {
    if (o || (o = new ee()), W(i))
      Ol(e, t, s, n, fr, r, o);
    else {
      var a = r ? r(ut(e, s), i, s + "", e, t, o) : void 0;
      a === void 0 && (a = i), st(e, s, a);
    }
  }, ur);
}
function dr(e) {
  return e;
}
function Sl(e, t, n) {
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
var on = Math.max;
function Bl(e, t, n) {
  return t = on(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var r = arguments, o = -1, i = on(r.length - t, 0), s = Array(i); ++o < i; )
      s[o] = r[t + o];
    o = -1;
    for (var a = Array(t + 1); ++o < t; )
      a[o] = r[o];
    return a[t] = n(s), Sl(e, this, a);
  };
}
function xl(e) {
  return function() {
    return e;
  };
}
var Tl = Me ? function(e, t) {
  return Me(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: xl(t),
    writable: !0
  });
} : dr, Ml = 800, Pl = 16, Cl = Date.now;
function jl(e) {
  var t = 0, n = 0;
  return function() {
    var r = Cl(), o = Pl - (r - n);
    if (n = r, o > 0) {
      if (++t >= Ml)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
var Nl = jl(Tl);
function Zl(e, t) {
  return Nl(Bl(e, t, dr), e + "");
}
function zl(e, t, n) {
  if (!W(n))
    return !1;
  var r = typeof t;
  return (r == "number" ? St(n) && cr(t, n.length) : r == "string" && t in n) ? Fe(n[t], e) : !1;
}
function Gl(e) {
  return Zl(function(t, n) {
    var r = -1, o = n.length, i = o > 1 ? n[o - 1] : void 0, s = o > 2 ? n[2] : void 0;
    for (i = e.length > 3 && typeof i == "function" ? (o--, i) : void 0, s && zl(n[0], n[1], s) && (i = o < 3 ? void 0 : i, o = 1), t = Object(t); ++r < o; ) {
      var a = n[r];
      a && e(t, a, r, i);
    }
    return t;
  });
}
var b = Gl(function(e, t, n) {
  fr(e, t, n);
});
const Pe = ["rgba(15, 250, 248, 1)", "rgba(225, 188, 75, 1)", "rgba(222, 56, 4, 1)"], Dl = {
  nameLocation: "end",
  nameTextStyle: {
    padding: [0, 20, 0, 0],
    color: "#fff",
    fontSize: 14,
    lineHeight: 20
  },
  splitLine: {
    lineStyle: {
      color: "rgba(255, 255, 255, 0.2)",
      type: "dotted"
    }
  },
  axisLabel: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 20,
    margin: 13,
    formatter: (e) => e
  },
  axisLine: {
    lineStyle: {
      color: "rgba(255, 255, 255, 0.2)"
    }
  }
}, Wl = {
  backgroundColor: "rgba(0, 32, 61, 1)",
  borderColor: "rgba(15, 251, 248, 1)",
  textStyle: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 20
  }
}, kl = {
  show: !0,
  top: "bottom",
  left: "center",
  textStyle: {
    fontSize: 14,
    color: "#fff",
    lineHeight: 24
  },
  itemWidth: 12,
  itemHeight: 12,
  itemGap: 20,
  type: "scroll",
  pageIconColor: "rgba(15, 251, 248, 1)",
  pageIconInactiveColor: "#e5e5e5",
  pageTextStyle: {
    fontSize: 12,
    color: "#fff"
  }
}, Fl = {
  top: 50,
  bottom: 40
}, Hl = {
  type: "category",
  boundaryGap: !0,
  splitLine: {
    show: !0,
    lineStyle: {
      color: "rgba(255, 255, 255, 0.2)",
      type: "dotted",
      width: 1
    }
  },
  axisTick: {
    show: !1
  },
  axisLine: {
    lineStyle: {
      color: "rgba(255, 255, 255, 0.2)"
    }
  },
  axisLabel: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 20
  }
}, fe = [
  new P.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0,
      color: "rgba(15, 251, 248, 1)"
    },
    {
      offset: 1,
      color: "rgba(15, 251, 248, 0.05)"
    }
  ]),
  new P.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0,
      color: "rgba(255, 175, 103, 1)"
    },
    {
      offset: 1,
      color: "rgba(225, 188, 75, 0)"
    }
  ])
], pr = [kr, Fr], ge = {
  tooltip: Wl,
  legend: kl,
  grid: Fl,
  xAxis: Hl,
  yAxis: Dl,
  color: Pe
}, Bt = {
  symbol: `image://${pr[0]}`,
  symbolSize: 23,
  type: "line",
  lineStyle: {
    width: 1,
    type: "solid",
    color: Pe[0]
  },
  markPoint: {
    symbolSize: [0, 0]
  },
  areaStyle: {
    opacity: 0.32,
    color: fe[0]
  }
};
function hr(e) {
  return q(e, Object.keys(ge), Object.values(ge)), b({}, ge, e);
}
function xt(e, t) {
  return b({}, b({}, Bt, {
    symbol: `image://${pr[e]}`,
    lineStyle: {
      color: Pe[e] ?? Pe[0]
    },
    areaStyle: {
      color: fe[e] ?? fe[0]
    }
  }), t);
}
function gr(e) {
  return Array.isArray(e) ? e.map((t, n) => t.type === "line" || !t.type ? xt(n, t) : t.type === "bar" ? Tt(b({
    itemStyle: {
      color: fe[n] ?? fe[0]
    },
    showBackground: !1
  }, t), { stack: !1 }) : t) : b({}, Bt, e);
}
const Nu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonLineOptions: ge,
  commonLineSeries: Bt,
  mergeLineRecord: xt,
  useCommonLineOptions: hr,
  useCommonLineSeries: gr
}, Symbol.toStringTag, { value: "Module" })), El = {
  color: [
    new P.LinearGradient(1, 0, 0, 1, [
      { offset: 0, color: "rgba(15, 249, 246, 1)" },
      { offset: 1, color: "rgba(4, 91, 111, 1)" }
    ]),
    new P.LinearGradient(1, 0, 0, 1, [
      { offset: 0, color: "rgba(225, 188, 75, 1)" },
      { offset: 1, color: "rgba(53, 69, 64, 1)" }
    ]),
    new P.LinearGradient(1, 0, 0, 1, [
      { offset: 0, color: "rgba(0, 146, 251, 1)" },
      { offset: 1, color: "rgba(0, 125, 216, 1)" }
    ]),
    new P.LinearGradient(1, 0, 0, 1, [
      { offset: 1, color: "rgba(166, 207, 255, 0)" },
      { offset: 0, color: "rgba(166, 207, 255, 1)" }
    ]),
    new P.LinearGradient(1, 0, 0, 1, [
      { offset: 1, color: "rgba(119, 73, 255, 0)" },
      { offset: 0, color: "rgba(119, 73, 255, 1)" }
    ])
  ],
  symbols: []
}, Il = ["rgba(54, 115, 245, 1)", "rgba(1, 158, 43, 1)", "rgba(222, 56, 4, 1)"], ql = {
  nameLocation: "end",
  nameTextStyle: {
    padding: [0, 20, 0, 0],
    color: "#fff",
    fontSize: 14,
    lineHeight: 20
  },
  splitLine: {
    lineStyle: {
      color: "rgba(255, 255, 255, 0.2)"
    }
  },
  axisLabel: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 20,
    margin: 13
  }
}, Rl = {
  backgroundColor: "rgba(0, 32, 61, 1)",
  borderColor: "rgba(15, 251, 248, 1)",
  textStyle: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 20
  }
}, Vl = {
  show: !0,
  top: "bottom",
  left: "center",
  icon: "roundRect",
  textStyle: {
    fontSize: 14,
    color: "#fff",
    lineHeight: 24
  },
  itemGap: 20,
  itemWidth: 12,
  itemHeight: 12,
  type: "scroll",
  pageIconColor: "rgba(15, 251, 248, 1)",
  pageIconInactiveColor: "#e5e5e5",
  pageTextStyle: {
    fontSize: 12,
    color: "#fff"
  }
}, Xl = {
  top: 50,
  bottom: 40
}, Ul = {
  type: "category",
  boundaryGap: !0,
  splitLine: {
    show: !1
  },
  axisTick: {
    show: !1
  },
  axisLine: {
    lineStyle: {
      color: "rgba(255, 255, 255, 0.2)"
    }
  },
  axisLabel: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 20
  }
}, Ie = {
  tooltip: Rl,
  legend: Vl,
  grid: Xl,
  xAxis: Ul,
  yAxis: ql,
  color: Il
}, Yl = {
  grid: {
    top: 40,
    right: 80,
    bottom: 40,
    left: 20
  },
  xAxis: {
    type: "value",
    boundaryGap: [0, 0],
    nameLocation: "end",
    nameTextStyle: {
      padding: [0, 0, 0, 5],
      color: "#fff",
      fontSize: 14,
      lineHeight: 20
    },
    splitLine: {
      show: !0,
      lineStyle: {
        color: "rgba(255, 255, 255, 0.2)",
        type: "dotted"
      }
    }
  },
  yAxis: {
    type: "category",
    boundaryGap: !0,
    splitLine: {
      show: !1
    },
    axisTick: {
      show: !1
    },
    axisLine: {
      lineStyle: {
        color: "rgba(255, 255, 255, 0.2)"
      }
    }
  }
}, mr = b({}, Ie, Yl), Ce = {
  barWidth: 20,
  showBackground: !0,
  backgroundStyle: {
    borderWidth: 20,
    borderColor: "rgba(0, 148, 255, 0.1)",
    borderRadius: 0,
    color: "transparent",
    opacity: 1
  },
  markPoint: {
    symbolSize: [20, 10]
  }
}, me = b({}, Ce, {
  barWidth: 12,
  backgroundStyle: {
    borderWidth: 12,
    opacity: 1
  },
  markPoint: {
    symbolSize: [12, 6]
  }
});
function br(e, t) {
  const n = t.isHorizontal ? mr : Ie;
  return q(e, Object.keys(n), Object.values(n)), b({}, n, e);
}
function an(e, t, n) {
  return t.type === "bar" || !t.type ? b({}, e, t) : t.type === "line" ? xt(n, t) : t;
}
function Tt(e, t) {
  return Array.isArray(e) ? e.length > 1 ? (t.stack ? me.backgroundStyle.opacity = 1 / e.length : me.backgroundStyle.opacity = 1, e.map((n, r) => an(me, n, r))) : e.map((n, r) => an(Ce, n, r)) : b({}, Ce, e);
}
const Zu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonBarOptions: Ie,
  commonBarSeries: Ce,
  horizontalBarOptions: mr,
  smallBarSeries: me,
  useCommonBarOptions: br,
  useCommonBarSeries: Tt
}, Symbol.toStringTag, { value: "Module" })), Ql = { class: "lc-bar-chart" }, Kl = /* @__PURE__ */ C({
  __name: "bar",
  props: {
    options: { default: () => ({}) },
    linearGradientColor: { default: () => El.color },
    isHorizontal: { type: Boolean, default: !1 },
    stack: { type: Boolean, default: !1 },
    fake3d: { type: Boolean, default: !0 }
  },
  setup(e) {
    const t = T(() => {
      const n = br(e.options, { isHorizontal: e.isHorizontal });
      return n.series = Tt(n.series, { stack: e.stack }), b({}, Ie, n);
    });
    return (n, r) => (w(), O("div", Ql, [
      k(Z(cs), ze({
        opts: t.value,
        linearGradientColor: n.linearGradientColor,
        stack: n.stack,
        fake3d: n.fake3d
      }, n.$attrs), null, 16, ["opts", "linearGradientColor", "stack", "fake3d"])
    ]));
  }
}), z = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
}, zu = /* @__PURE__ */ z(Kl, [["__scopeId", "data-v-d930e69f"]]), Jl = { class: "lc-line-chart" }, _l = /* @__PURE__ */ C({
  __name: "line",
  props: /* @__PURE__ */ de({
    options: Object
  }, {
    options: () => ({})
  }),
  setup(e) {
    const t = T(() => {
      const n = hr(e.options);
      return n.series = gr(n.series), b({}, n);
    });
    return (n, r) => (w(), O("div", Jl, [
      k(Z(as), ze({ opts: t.value }, n.$attrs), null, 16, ["opts"])
    ]));
  }
}), Gu = /* @__PURE__ */ z(_l, [["__scopeId", "data-v-c50cd5ee"]]), $l = ["#0FFBF8", "#E1BC4B", "#2276FC", "#A6CFFF", "#7749FF", "#64D677", "#EE6F7C"], ec = {
  text: "0",
  subtext: "总数",
  left: "center",
  top: "center",
  itemGap: 0,
  textVerticalAlign: "top",
  textStyle: {
    color: "#fff",
    fontSize: 30,
    width: 106,
    height: 42,
    lineHeight: 42,
    padding: 0,
    overflow: "truncate"
  },
  subtextStyle: {
    color: "#F2F3F4",
    fontSize: 16,
    padding: 0,
    lineHeight: 16,
    overflow: "truncate"
  }
}, tc = {
  trigger: "item",
  backgroundColor: "rgba(0, 32, 61, 1)",
  borderColor: "rgba(15, 251, 248, 1)",
  textStyle: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 20
  }
}, nc = {
  show: !1,
  orient: "vertical",
  left: "left",
  top: "center",
  textStyle: {
    color: "#fff"
  }
}, rc = [
  new P.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "rgba(15, 251, 248, 0.20)" },
    // 渐变色起始颜色
    { offset: 1, color: "#0FFBF8" }
    // 渐变色结束颜色
  ]),
  new P.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "rgba(225, 188, 75, 0.20)" },
    { offset: 1, color: "rgba(225, 188, 75, 1)" }
  ]),
  new P.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "rgba(0, 148, 255, 0.20)" },
    { offset: 1, color: "rgba(0, 148, 255, 1)" }
  ]),
  new P.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "rgba(166, 207, 255, 0.20)" },
    { offset: 1, color: "rgba(166, 207, 255, 1)" }
  ]),
  new P.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "rgba(119, 73, 255, 0.20)" },
    { offset: 1, color: "rgba(119, 73, 255, 1)" }
  ])
], yr = {
  name: "pie",
  type: "pie",
  radius: ["62%", "92%"],
  center: ["50%", "50%"],
  label: {
    show: !1
  },
  emphasis: {
    itemStyle: {}
  }
}, oc = {
  radius: ["42%", "62%"],
  label: {
    show: !0,
    alignTo: "edge",
    formatter: `{prop|{d}}{unit|%}
{name|{b}}`,
    minMargin: 5,
    edgeDistance: 10,
    rich: {
      prop: {
        fontSize: 20,
        lineHeight: 0,
        padding: [-20, 0, 0, 0]
      },
      unit: {
        fontSize: 14,
        lineHeight: 0,
        padding: [-17, 0, 0, 0]
      },
      name: {
        fontSize: 14,
        lineHeight: 20,
        color: "#ffffff"
      }
    }
  },
  labelLine: {
    length: 15,
    length2: 0,
    maxSurfaceAngle: 0
  }
}, ac = b({}, yr, oc), Ke = {
  title: ec,
  tooltip: tc,
  legend: nc,
  color: $l
};
function ic(e, t, n, r) {
  const o = r === "innerLabel" ? ac : yr, i = Array.isArray(n) ? n : n ? [n] : [];
  return Array.isArray(e) ? e.map((s) => (s.data = ln(s.data, i), b(sn(t), o, s))) : (e.data = ln(e.data, i), b(sn(t), o, e));
}
function sn(e) {
  return {
    itemStyle: {
      color: function(t) {
        return e[t.dataIndex % e.length];
      }
    }
  };
}
function ln(e, t) {
  return (e ?? []).map((n, r) => b({
    label: {
      rich: {
        prop: {
          color: t[r]
        },
        unit: {
          color: t[r]
        }
      }
    }
  }, n));
}
function sc(e) {
  return q(e, Object.keys(Ke), Object.values(Ke)), b({}, Ke, e);
}
const lc = { class: "lc-common-legend" }, cc = { class: "lc-common-legend__wrapper__legend" }, uc = ["title", "onClick", "onMouseenter", "onMouseleave"], fc = { class: "lc-common-legend__wrapper__legend__item__label" }, dc = /* @__PURE__ */ C({
  __name: "legend",
  props: {
    options: { default: () => ({}) },
    legendLabel: { type: Function, default: (e) => e },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["legend:click", "legend:toggleSelect"],
  setup(e, { emit: t }) {
    const n = Ne(/* @__PURE__ */ new Map());
    pt(() => e.options.series, () => {
      var c, u;
      n.value.clear(), Array.isArray(e.options.series) && ((u = (c = e.options.series[0]) == null ? void 0 : c.data) == null || u.forEach((f) => {
        if (!f.name)
          return window.console.warn("item.name is required");
        n.value.set(f.name, {
          selected: !0,
          ...f
        });
      }));
    }, {
      deep: 2,
      immediate: !0
    });
    const r = t;
    function o(c, u) {
      r("legend:toggleSelect", {
        type: c,
        name: u
      });
    }
    function i(c) {
      if (!n.value.has(c) || e.disabled) return;
      const u = n.value.get(c);
      o(u != null && u.selected ? "legendUnSelect" : "legendSelect", c), n.value.set(c, {
        ...u,
        selected: !(u != null && u.selected)
      });
    }
    function s(c) {
      i(c.name), r("legend:click", c);
    }
    function a(c, u) {
      var d;
      const { color: f = [] } = e.options ?? {};
      return {
        "--item-color": f[c],
        "--unselect-color": (d = n.value.get(u.name)) != null && d.selected ? 1 : 0.5
      };
    }
    const l = T(() => {
      var c, u, f, d;
      return ((u = (c = e.options) == null ? void 0 : c.series) == null ? void 0 : u[0].data) ?? ((d = (f = e.options) == null ? void 0 : f.series) == null ? void 0 : d.data) ?? [];
    });
    return (c, u) => (w(), O("div", lc, [
      h("div", cc, [
        (w(!0), O(
          et,
          null,
          tt(l.value, (f, d) => (w(), O("div", {
            class: "lc-common-legend__wrapper__legend__item",
            key: d,
            style: Le(a(d, f)),
            title: c.legendLabel(f.name, f.value),
            onClick: (g) => s(f),
            onMouseenter: (g) => o("highlight", f.name),
            onMouseleave: (g) => o("downplay", f.name)
          }, [
            bn(c.$slots, "legend", {}, () => [
              u[0] || (u[0] = h(
                "div",
                { class: "lc-common-legend__wrapper__legend__item__icon" },
                null,
                -1
                /* HOISTED */
              )),
              h(
                "div",
                fc,
                R(c.legendLabel(f.name, f.value)),
                1
                /* TEXT */
              )
            ], !0)
          ], 44, uc))),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ]));
  }
}), vr = /* @__PURE__ */ z(dc, [["__scopeId", "data-v-6baff949"]]), pc = { class: "lc-pie__wrapper" }, hc = {
  key: 0,
  class: "lc-pie__wrapper__legend"
}, gc = { class: "lc-pie__wrapper__chart" }, mc = {
  class: "lc-pie__wrapper__chart__inner",
  ref: "chartDom"
}, bc = /* @__PURE__ */ C({
  __name: "pie",
  props: {
    options: {},
    debounceTime: { default: 300 },
    legendLabel: { type: Function, default: (e) => e },
    graphicColors: { default: () => rc },
    flexDirection: { default: "row" },
    showCustomLegend: { type: Boolean, default: !0 },
    layout: { default: "default" },
    legendLeft: { default: "20%" },
    legendTop: { default: "50%" },
    legendPosition: { default: "relative" },
    legendWidth: { default: "128px" }
  },
  emits: ["legend:click", "legend:toggleSelect"],
  setup(e, { expose: t, emit: n }) {
    yn((p) => ({
      f1a872dc: p.flexDirection,
      "4e6fe7ee": S.value,
      "964e626c": p.legendPosition,
      "7c6ece28": p.legendLeft,
      df3269d8: p.legendTop,
      "720b1a42": d.value
    }));
    const r = ht("chartDom"), o = Ae(), i = T(() => {
      const p = sc(e.options);
      return p.series = ic(
        p.series,
        e.graphicColors,
        p.color,
        e.layout
      ), p.series && !Array.isArray(p.series) && (p.series = [p.series]), b({}, p);
    });
    function s(p, y) {
      var B;
      (B = o.value) == null || B.dispatchAction({
        type: p,
        name: y
      });
    }
    const a = n;
    function l(p) {
      a("legend:click", p);
    }
    function c(p) {
      s(p.type, p.name), a("legend:toggleSelect", p);
    }
    Ze(u), jr(() => {
      f(i.value, !0);
    });
    function u() {
      o.value = vn(r.value, i.value);
    }
    function f(p, y, B) {
      var M;
      (M = o.value) == null || M.setOption(p, y, B);
    }
    const d = Ne("100%");
    function g(p) {
      var E;
      const y = p[0], { width: B, height: M } = y.contentRect;
      d.value = Math.min(B, M) + "px", (E = o.value) == null || E.resize();
    }
    const { stop: v } = An(r, Dr(g, e.debounceTime)), S = T(() => e.legendPosition === "absolute" ? `0 ${e.legendWidth}` : "0");
    return mn(v), t({
      chartInstance: o,
      stop: v,
      setOptions: f,
      dispatchAction: s
    }), (p, y) => (w(), O(
      "div",
      {
        class: Nr(["lc-pie", [`lc-pie--${p.layout}`]]),
        style: Le({
          "--legendWidth": p.legendWidth
        })
      },
      [
        h("div", pc, [
          p.showCustomLegend ? (w(), O("div", hc, [
            k(Z(vr), {
              "legend-label": p.legendLabel,
              options: i.value,
              "onLegend:click": l,
              "onLegend:toggleSelect": c
            }, null, 8, ["legend-label", "options"])
          ])) : we("v-if", !0),
          h("div", gc, [
            h(
              "div",
              mc,
              null,
              512
              /* NEED_PATCH */
            )
          ])
        ])
      ],
      6
      /* CLASS, STYLE */
    ));
  }
}), Du = /* @__PURE__ */ z(bc, [["__scopeId", "data-v-4983f64b"]]);
var Je = function() {
  return Y.Date.now();
}, yc = /\s/;
function vc(e) {
  for (var t = e.length; t-- && yc.test(e.charAt(t)); )
    ;
  return t;
}
var Ac = /^\s+/;
function Lc(e) {
  return e && e.slice(0, vc(e) + 1).replace(Ac, "");
}
var wc = "[object Symbol]";
function Oc(e) {
  return typeof e == "symbol" || te(e) && he(e) == wc;
}
var cn = NaN, Sc = /^[-+]0x[0-9a-f]+$/i, Bc = /^0b[01]+$/i, xc = /^0o[0-7]+$/i, Tc = parseInt;
function un(e) {
  if (typeof e == "number")
    return e;
  if (Oc(e))
    return cn;
  if (W(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = W(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = Lc(e);
  var n = Bc.test(e);
  return n || xc.test(e) ? Tc(e.slice(2), n ? 2 : 8) : Sc.test(e) ? cn : +e;
}
var Mc = "Expected a function", Pc = Math.max, Cc = Math.min;
function jc(e, t, n) {
  var r, o, i, s, a, l, c = 0, u = !1, f = !1, d = !0;
  if (typeof e != "function")
    throw new TypeError(Mc);
  t = un(t) || 0, W(n) && (u = !!n.leading, f = "maxWait" in n, i = f ? Pc(un(n.maxWait) || 0, t) : i, d = "trailing" in n ? !!n.trailing : d);
  function g(m) {
    var x = r, j = o;
    return r = o = void 0, c = m, s = e.apply(j, x), s;
  }
  function v(m) {
    return c = m, a = setTimeout(y, t), u ? g(m) : s;
  }
  function S(m) {
    var x = m - l, j = m - c, I = t - x;
    return f ? Cc(I, i - j) : I;
  }
  function p(m) {
    var x = m - l, j = m - c;
    return l === void 0 || x >= t || x < 0 || f && j >= i;
  }
  function y() {
    var m = Je();
    if (p(m))
      return B(m);
    a = setTimeout(y, S(m));
  }
  function B(m) {
    return a = void 0, d && r ? g(m) : (r = o = void 0, s);
  }
  function M() {
    a !== void 0 && clearTimeout(a), c = 0, r = l = o = a = void 0;
  }
  function E() {
    return a === void 0 ? s : B(Je());
  }
  function G() {
    var m = Je(), x = p(m);
    if (r = arguments, o = this, l = m, x) {
      if (a === void 0)
        return v(l);
      if (f)
        return clearTimeout(a), a = setTimeout(y, t), g(l);
    }
    return a === void 0 && (a = setTimeout(y, t)), s;
  }
  return G.cancel = M, G.flush = E, G;
}
const Nc = { class: "lc-common-chart" }, Zc = {
  class: "lc-common-chart__wrapper",
  ref: "commonChart"
}, zc = /* @__PURE__ */ C({
  __name: "base",
  props: /* @__PURE__ */ de({
    debounceTime: Number,
    options: Object,
    notMerge: Boolean
  }, {
    debounceTime: 300,
    options: () => ({}),
    notMerge: !0
  }),
  setup(e, { expose: t }) {
    const n = ht("commonChart"), r = Ae();
    An(n, jc(() => {
      var s;
      (s = r.value) == null || s.resize();
    }, e.debounceTime));
    function o() {
      r.value = vn(n.value, e.options);
    }
    Ze(() => {
      o(), i(e.options, e.notMerge);
    });
    function i(s, a, l) {
      var c;
      (c = r.value) == null || c.setOption(s, a, l);
    }
    return gt(() => {
      i(e.options, e.notMerge);
    }, {
      flush: "post"
    }), t({
      get chartInstance() {
        return r.value;
      },
      setOptions: i
    }), (s, a) => (w(), O("div", Nc, [
      h(
        "div",
        Zc,
        null,
        512
        /* NEED_PATCH */
      )
    ]));
  }
}), qe = /* @__PURE__ */ z(zc, [["__scopeId", "data-v-48da8276"]]);
function Re(e) {
  const t = ht(e), n = {};
  return gt(() => {
    for (const o in n)
      Reflect.deleteProperty(n, o);
    const r = t.value ?? {};
    for (const o in r)
      n[o] = r[o];
  }), { exposes: n, baseChartRef: t };
}
const Gc = {
  show: !1
}, ft = ["rgba(15, 251, 248, 1)", "rgba(225, 188, 75, 1)", "rgba(0, 148, 255, 1)"], Dc = {
  backgroundColor: "rgba(0, 32, 61, 1)",
  borderColor: "rgba(15, 251, 248, 1)",
  textStyle: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 20
  },
  appendTo: "body"
}, Wc = {
  show: !0,
  top: "bottom",
  left: "center",
  icon: "roundRect",
  itemWidth: 12,
  itemHeight: 12,
  itemGap: 20,
  textStyle: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 20
  },
  type: "scroll"
}, kc = {
  containLabel: !0
}, Fc = {
  splitArea: {
    show: !1
  },
  center: ["50%", "50%"],
  radius: "50%",
  axisLine: {
    lineStyle: {
      color: "rgba(255, 255, 255, 0.4)"
    }
  },
  splitLine: {
    lineStyle: {
      color: "rgba(255, 255, 255, 0.5)"
    }
  },
  axisName: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 20,
    formatter(e, t) {
      return `{max|${t == null ? void 0 : t.max}}
{name|${e}}`;
    },
    rich: {
      max: {
        color: "#fff",
        fontSize: 18,
        padding: [2, 4],
        align: "center",
        borderRadius: 4
      }
    }
  },
  indicator: []
}, Hc = {
  type: "radar",
  itemStyle: {
    // @ts-ignore
    color(e) {
      return ft[e.dataIndex % ft.length];
    }
  },
  symbol: "none",
  areaStyle: {
    opacity: 0.2
  },
  lineStyle: {
    width: 1.5,
    opacity: 1
  }
}, be = {
  grid: kc,
  tooltip: Dc,
  title: Gc,
  legend: Wc,
  radar: Fc,
  series: Hc,
  color: ft
};
function fn(e, t) {
  return b({
    itemStyle: {}
  }, be.series, t);
}
function Ec(e) {
  return Array.isArray(e) ? e.map((t, n) => fn(n, t)) : fn(0, e);
}
const dn = `
    font-size: 16px;
    color: #fff;
    line-height: 30px;
`;
function Ic(e) {
  var n;
  q(e, Object.keys(be), Object.values(be));
  const t = ((n = e == null ? void 0 : e.radar) == null ? void 0 : n.indicator) ?? [];
  return b({
    tooltip: {
      formatter: (r) => `
                    <div class="tooltip-title" style="${dn}">${r.seriesName}：${r.name}</div>
                    <div class="tooltip-item" style="${dn}">${t.map((o, i) => `<div>${r.marker} ${o.name}：${r.value[i]}</div>`).join("")}</div>
                `
    }
  }, be, e);
}
const qc = { class: "lc-radar" }, Rc = /* @__PURE__ */ C({
  __name: "radar",
  props: /* @__PURE__ */ de({
    options: Object
  }, {
    options: () => ({})
  }),
  setup(e, { expose: t }) {
    const n = T(() => {
      const o = Ic(e.options);
      return o.series = Ec(o.series), b({}, o);
    }), {
      exposes: r
    } = Re("baseChart");
    return t(r), (o, i) => (w(), O("div", qc, [
      k(Z(qe), {
        options: n.value,
        ref: "baseChart"
      }, null, 8, ["options"])
    ]));
  }
}), Wu = /* @__PURE__ */ z(Rc, [["__scopeId", "data-v-857f5634"]]), Ar = [
  "rgba(15, 251, 248, 1)",
  "rgba(225, 188, 75, 1)",
  "rgba(34, 118, 252, 1)",
  "rgba(166, 207, 255, 1)",
  "rgba(119, 73, 255, 1)",
  "rgba(100, 214, 119, 1)"
], dt = [
  new P.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "rgba(15, 251, 248, 0.20)" },
    // 渐变色起始颜色
    { offset: 1, color: "#0FFBF8" }
    // 渐变色结束颜色
  ]),
  new P.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "rgba(225, 188, 75, 0.20)" },
    { offset: 1, color: "rgba(225, 188, 75, 1)" }
  ]),
  new P.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "rgba(0, 148, 255, 0.20)" },
    { offset: 1, color: "rgba(0, 148, 255, 1)" }
  ]),
  new P.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "rgba(166, 207, 255, 0.20)" },
    { offset: 1, color: "rgba(166, 207, 255, 1)" }
  ]),
  new P.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "rgba(119, 73, 255, 0.20)" },
    { offset: 1, color: "rgba(119, 73, 255, 1)" }
  ])
], Lr = {
  text: "0",
  subtext: "",
  left: "center",
  top: "center",
  itemGap: 0,
  textVerticalAlign: "top",
  textStyle: {
    color: "#fff",
    fontSize: 28,
    width: 106,
    height: 42,
    lineHeight: 42,
    padding: 0,
    overflow: "truncate"
  },
  subtextStyle: {
    color: "#F2F3F4",
    fontSize: 14,
    padding: 0,
    lineHeight: 16,
    overflow: "truncate"
  }
}, wr = {
  type: "gauge",
  startAngle: 90,
  endAngle: -270,
  pointer: {
    show: !1
  },
  progress: {
    show: !0,
    overlap: !1,
    roundCap: !1,
    clip: !1,
    itemStyle: {
      borderColor: "rgba(3, 29, 61, 1)",
      borderWidth: 5
    }
  },
  axisLine: {
    lineStyle: {
      width: 15,
      color: [[1, "rgba(3, 29, 61, 1)"]]
    }
  },
  splitLine: {
    show: !1,
    distance: 0,
    length: 10
  },
  axisTick: {
    show: !1
  },
  axisLabel: {
    show: !1,
    distance: 50
  },
  title: {
    fontSize: 14,
    show: !1
  },
  detail: {
    show: !1,
    height: 14,
    fontSize: 14,
    formatter: "{value}%"
  }
}, Vc = {}, ku = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  gaugeColors: Ar,
  gaugeInnerGraphicColors: dt,
  gaugeSeriesDataItemOptions: Vc,
  gaugeSeriesRecordOptions: wr,
  gaugeTitleOptions: Lr
}, Symbol.toStringTag, { value: "Module" })), Xc = {
  backgroundColor: "rgba(0, 32, 61, 1)",
  borderColor: "rgba(15, 251, 248, 1)",
  textStyle: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 20
  }
}, _e = {
  tooltip: Xc,
  title: Lr,
  series: wr,
  color: Ar
};
function Uc(e) {
  return {
    itemStyle: {
      color: dt[e % dt.length]
    }
  };
}
function pn(e) {
  const t = e == null ? void 0 : e.data;
  return b({
    data: (t == null ? void 0 : t.map((n, r) => b(Uc(r), n))) ?? []
  }, e);
}
function Yc(e) {
  return Array.isArray(e) ? e.map((t) => pn(t)) : pn(e);
}
function Qc(e) {
  return q(e, Object.keys(_e), Object.values(_e)), b({}, _e, e);
}
const Kc = { class: "lc-gauge" }, Jc = { class: "lc-gauge__wrapper" }, _c = /* @__PURE__ */ C({
  __name: "gauge",
  props: {
    legendLabel: { type: Function },
    options: { default: () => ({}) },
    showCustomLegend: { type: Boolean, default: !0 }
  },
  setup(e, { expose: t }) {
    const {
      exposes: n
    } = Re("baseChart"), r = T(() => {
      const o = Qc(e.options);
      return o.series = Yc(o.series), b({}, o);
    });
    return t(n), (o, i) => (w(), O("div", Kc, [
      h("div", Jc, [
        k(Z(qe), {
          options: r.value,
          ref: "baseChart"
        }, null, 8, ["options"]),
        o.showCustomLegend ? (w(), Zr(Z(vr), {
          key: 0,
          disabled: "",
          legendLabel: o.legendLabel,
          options: r.value
        }, null, 8, ["legendLabel", "options"])) : we("v-if", !0)
      ])
    ]));
  }
}), Fu = /* @__PURE__ */ z(_c, [["__scopeId", "data-v-f575868c"]]);
const $c = "n-config-provider", e3 = {
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
function $e(e) {
  return (t = {}) => {
    const n = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[n] || e.formats[e.defaultWidth];
  };
}
function oe(e) {
  return (t, n) => {
    const r = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (r === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth, a = n != null && n.width ? String(n.width) : s;
      o = e.formattingValues[a] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth, a = n != null && n.width ? String(n.width) : e.defaultWidth;
      o = e.values[a] || e.values[s];
    }
    const i = e.argumentCallback ? e.argumentCallback(t) : t;
    return o[i];
  };
}
function ae(e) {
  return (t, n = {}) => {
    const r = n.width, o = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], i = t.match(o);
    if (!i)
      return null;
    const s = i[0], a = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(a) ? n3(a, (f) => f.test(s)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      t3(a, (f) => f.test(s))
    );
    let c;
    c = e.valueCallback ? e.valueCallback(l) : l, c = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(c)
    ) : c;
    const u = t.slice(s.length);
    return { value: c, rest: u };
  };
}
function t3(e, t) {
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n]))
      return n;
}
function n3(e, t) {
  for (let n = 0; n < e.length; n++)
    if (t(e[n]))
      return n;
}
function r3(e) {
  return (t, n = {}) => {
    const r = t.match(e.matchPattern);
    if (!r) return null;
    const o = r[0], i = t.match(e.parsePattern);
    if (!i) return null;
    let s = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    const a = t.slice(o.length);
    return { value: s, rest: a };
  };
}
const o3 = {
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
}, a3 = (e, t, n) => {
  let r;
  const o = o3[e];
  return typeof o == "string" ? r = o : t === 1 ? r = o.one : r = o.other.replace("{{count}}", t.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
}, i3 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, s3 = (e, t, n, r) => i3[e], l3 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, c3 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, u3 = {
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
}, f3 = {
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
}, d3 = {
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
}, p3 = {
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
}, h3 = (e, t) => {
  const n = Number(e), r = n % 100;
  if (r > 20 || r < 10)
    switch (r % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, g3 = {
  ordinalNumber: h3,
  era: oe({
    values: l3,
    defaultWidth: "wide"
  }),
  quarter: oe({
    values: c3,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: oe({
    values: u3,
    defaultWidth: "wide"
  }),
  day: oe({
    values: f3,
    defaultWidth: "wide"
  }),
  dayPeriod: oe({
    values: d3,
    defaultWidth: "wide",
    formattingValues: p3,
    defaultFormattingWidth: "wide"
  })
}, m3 = /^(\d+)(th|st|nd|rd)?/i, b3 = /\d+/i, y3 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, v3 = {
  any: [/^b/i, /^(a|c)/i]
}, A3 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, L3 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, w3 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, O3 = {
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
}, S3 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, B3 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, x3 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, T3 = {
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
}, M3 = {
  ordinalNumber: r3({
    matchPattern: m3,
    parsePattern: b3,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: ae({
    matchPatterns: y3,
    defaultMatchWidth: "wide",
    parsePatterns: v3,
    defaultParseWidth: "any"
  }),
  quarter: ae({
    matchPatterns: A3,
    defaultMatchWidth: "wide",
    parsePatterns: L3,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: ae({
    matchPatterns: w3,
    defaultMatchWidth: "wide",
    parsePatterns: O3,
    defaultParseWidth: "any"
  }),
  day: ae({
    matchPatterns: S3,
    defaultMatchWidth: "wide",
    parsePatterns: B3,
    defaultParseWidth: "any"
  }),
  dayPeriod: ae({
    matchPatterns: x3,
    defaultMatchWidth: "any",
    parsePatterns: T3,
    defaultParseWidth: "any"
  })
}, P3 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, C3 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, j3 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, N3 = {
  date: $e({
    formats: P3,
    defaultWidth: "full"
  }),
  time: $e({
    formats: C3,
    defaultWidth: "full"
  }),
  dateTime: $e({
    formats: j3,
    defaultWidth: "full"
  })
}, Z3 = {
  code: "en-US",
  formatDistance: a3,
  formatLong: N3,
  formatRelative: s3,
  localize: g3,
  match: M3,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, z3 = {
  name: "en-US",
  locale: Z3
};
function G3(e) {
  const {
    mergedLocaleRef: t,
    mergedDateLocaleRef: n
  } = zr($c, null) || {}, r = T(() => {
    var i, s;
    return (s = (i = t == null ? void 0 : t.value) === null || i === void 0 ? void 0 : i[e]) !== null && s !== void 0 ? s : e3[e];
  });
  return {
    dateLocaleRef: T(() => {
      var i;
      return (i = n == null ? void 0 : n.value) !== null && i !== void 0 ? i : z3;
    }),
    localeRef: r
  };
}
const D3 = (e) => 1 - Math.pow(1 - e, 5);
function W3(e) {
  const {
    from: t,
    to: n,
    duration: r,
    onUpdate: o,
    onFinish: i
  } = e, s = performance.now(), a = () => {
    const l = performance.now(), c = Math.min(l - s, r), u = t + (n - t) * D3(c / r);
    if (c === r) {
      i();
      return;
    }
    o(u), requestAnimationFrame(a);
  };
  a();
}
const k3 = {
  to: {
    type: Number,
    default: 0
  },
  precision: {
    type: Number,
    default: 0
  },
  showSeparator: Boolean,
  locale: String,
  from: {
    type: Number,
    default: 0
  },
  active: {
    type: Boolean,
    default: !0
  },
  duration: {
    type: Number,
    default: 2e3
  },
  onFinish: Function
}, F3 = C({
  name: "NumberAnimation",
  props: k3,
  setup(e) {
    const {
      localeRef: t
    } = G3("name"), {
      duration: n
    } = e, r = Ne(e.from), o = T(() => {
      const {
        locale: d
      } = e;
      return d !== void 0 ? d : t.value;
    });
    let i = !1;
    const s = (d) => {
      r.value = d;
    }, a = () => {
      var d;
      r.value = e.to, i = !1, (d = e.onFinish) === null || d === void 0 || d.call(e);
    }, l = (d = e.from, g = e.to) => {
      i = !0, r.value = e.from, d !== g && W3({
        from: d,
        to: g,
        duration: n,
        onUpdate: s,
        onFinish: a
      });
    }, c = T(() => {
      var d;
      const v = Wr(r.value, e.precision).toFixed(e.precision).split("."), S = new Intl.NumberFormat(o.value), p = (d = S.formatToParts(0.5).find((M) => M.type === "decimal")) === null || d === void 0 ? void 0 : d.value, y = e.showSeparator ? S.format(Number(v[0])) : v[0], B = v[1];
      return {
        integer: y,
        decimal: B,
        decimalSeparator: p
      };
    });
    function u() {
      i || l();
    }
    return Ze(() => {
      gt(() => {
        e.active && l();
      });
    }), Object.assign({
      formattedValue: c
    }, {
      play: u
    });
  },
  render() {
    const {
      formattedValue: {
        integer: e,
        decimal: t,
        decimalSeparator: n
      }
    } = this;
    return [e, t ? n : null, t];
  }
}), H3 = { class: "lc-gauge-svg" }, E3 = {
  viewBox: "0 0 308 313",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
}, I3 = ["x2"], q3 = {
  id: "页面-2",
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, R3 = {
  id: "P9",
  transform: "translate(-1437, -9183)"
}, V3 = {
  id: "组合-37",
  transform: "translate(1437, 9183)"
}, X3 = {
  id: "编组-8",
  transform: "translate(21.7492, 23.5567)"
}, U3 = { id: "编组-3" }, Y3 = {
  d: "M182.49766,239.362241 C220.761924,220.190939 247.090116,180.122656 247.090116,133.798789 C247.090116,68.8489106 195.333561,16.1968843 131.48881,16.1968843 C67.6440591,16.1968843 15.8875039,68.8489106 15.8875039,133.798789 C15.8875039,180.830365 43.0262979,221.413703 82.2419595,240.226108",
  id: "process",
  fill: "url(#pattern-4)",
  stroke: "url(#processGradient)"
}, Q3 = ["from", "to", "dur"], K3 = {
  id: "编组-67",
  transform: "translate(119, 126)",
  "font-family": "HarmonyOS_Sans_SC, HarmonyOS Sans SC",
  "font-weight": "normal"
}, J3 = {
  id: "propertion",
  "font-size": "16",
  "line-spacing": "20",
  fill: "#F2F3F4",
  "text-anchor": "middle",
  x: "34"
}, _3 = { y: "57" }, $3 = {
  id: "value",
  "font-size": "30",
  "line-spacing": "42",
  fill: "#FFFFFF",
  x: "35",
  y: "28",
  "text-anchor": "middle"
}, eu = {
  "font-family": "HarmonyOS_Sans_SC_Bold, HarmonyOS Sans SC",
  "font-size": "16",
  "font-weight": "bold"
}, tu = /* @__PURE__ */ C({
  __name: "gaugeSvg",
  props: {
    value: { default: 0 },
    label: { default: "占比" },
    unit: { default: "%" },
    precision: { default: 1 },
    offset: { default: 629 },
    startDashOffset: { default: 971 },
    duration: { default: "1s" }
  },
  setup(e) {
    yn((s) => ({
      "071f14bc": o.value,
      c4a28296: i.value
    }));
    function t(s) {
      return String(s).indexOf(".") >= 0;
    }
    const n = T(() => t(e.value) ? e.precision : 0), r = `processGradient${Gr()}`, o = T(() => `url(#${r})`), i = T(() => e.startDashOffset + e.offset * (e.value / 100) + "px");
    return (s, a) => (w(), O("div", H3, [
      (w(), O("svg", E3, [
        h("defs", null, [
          h("linearGradient", {
            id: r,
            x1: "0%",
            y1: "0%",
            x2: s.value + "%",
            y2: "0%",
            gradientUnits: "userSpaceOnUse"
          }, [
            a[0] || (a[0] = h(
              "stop",
              {
                offset: "0%",
                "stop-color": "rgba(15, 251, 248, 0.2)"
              },
              null,
              -1
              /* HOISTED */
            )),
            we(" 起始颜色 "),
            a[1] || (a[1] = h(
              "stop",
              {
                offset: "100%",
                "stop-color": "rgba(15, 251, 248, 1)"
              },
              null,
              -1
              /* HOISTED */
            )),
            we(" 结束颜色 ")
          ], 8, I3),
          a[2] || (a[2] = Pt('<path d="M82.5048279,0 C128.070923,0 165.009656,37.5592438 165.009656,83.8907776 C165.009656,130.222311 128.070923,167.781555 82.5048279,167.781555 C36.9387329,167.781555 0,130.222311 0,83.8907776 C0,37.5592438 36.9387329,0 82.5048279,0 L82.5048279,0 Z" id="path-1" data-v-cd61d1b3></path><filter x="-4.5%" y="-4.5%" width="109.1%" height="108.9%" filterUnits="objectBoundingBox" id="filter-2" data-v-cd61d1b3><feGaussianBlur stdDeviation="7.5" in="SourceAlpha" result="shadowBlurInner1" data-v-cd61d1b3></feGaussianBlur><feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1" data-v-cd61d1b3></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1" data-v-cd61d1b3></feComposite><feColorMatrix values="0 0 0 0 0.0588235294   0 0 0 0 0.984313725   0 0 0 0 0.97254902  0 0 0 1 0" type="matrix" in="shadowInnerInner1" data-v-cd61d1b3></feColorMatrix></filter><mask id="mask-3" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="165.008" height="167.784" fill="white" data-v-cd61d1b3><use xlink:href="#path-1" data-v-cd61d1b3></use></mask><pattern id="pattern-4" width="100%" height="100%" patternUnits="objectBoundingBox" data-v-cd61d1b3><use xlink:href="#image-5" data-v-cd61d1b3></use></pattern><image id="image-5" width="218" height="212" xlink:href="data:image/png;base64,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" data-v-cd61d1b3></image><linearGradient x1="5.43900005%" y1="143.914751%" x2="93.2685017%" y2="143.914751%" id="linearGradient-6" data-v-cd61d1b3><stop stop-color="#1552CA" stop-opacity="0" offset="0%" data-v-cd61d1b3></stop><stop stop-color="#66FFFF" offset="51.7573655%" data-v-cd61d1b3></stop><stop stop-color="#1552CA" stop-opacity="0" offset="100%" data-v-cd61d1b3></stop></linearGradient><path d="M153.661835,2.58171973 C239.952649,2.58171973 309.90628,71.3787839 309.90628,156.244 C309.90628,241.109216 239.952649,309.90628 153.661835,309.90628 C67.3710208,309.90628 -2.58171973,241.109216 -2.58171973,156.244 C-2.58171973,71.3787839 67.3710208,2.58171973 153.661835,2.58171973 L153.661835,2.58171973 Z" id="path-7" data-v-cd61d1b3></path><mask id="mask-8" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="312.488" height="307.324561" fill="white" data-v-cd61d1b3><use xlink:href="#path-7" data-v-cd61d1b3></use></mask><linearGradient x1="80.2192804%" y1="50%" x2="1.38167727e-12%" y2="50%" id="linearGradient-9" data-v-cd61d1b3><stop stop-color="#0FFBF8" stop-opacity="0" offset="0%" data-v-cd61d1b3></stop><stop stop-color="#0FFBF8" offset="100%" data-v-cd61d1b3></stop></linearGradient><linearGradient x1="1.38167727e-12%" y1="50%" x2="71.506582%" y2="50%" id="linearGradient-10" data-v-cd61d1b3><stop stop-color="#22FDFC" offset="0%" data-v-cd61d1b3></stop><stop stop-color="#0FFBF8" stop-opacity="0" offset="100%" data-v-cd61d1b3></stop></linearGradient>', 10))
        ]),
        h("g", q3, [
          h("g", R3, [
            h("g", V3, [
              h("g", X3, [
                a[5] || (a[5] = h(
                  "g",
                  {
                    id: "group-2",
                    transform: "translate(49.4693, 49.1938)",
                    "stroke-dasharray": "0,0"
                  },
                  [
                    h("g", { id: "路径" }, [
                      h("use", {
                        fill: "black",
                        "fill-opacity": "1",
                        filter: "url(#filter-2)",
                        "xlink:href": "#path-1"
                      }),
                      h("use", {
                        stroke: "#0FFBF8",
                        mask: "url(#mask-3)",
                        "stroke-width": "1.53855267",
                        "xlink:href": "#path-1"
                      })
                    ])
                  ],
                  -1
                  /* HOISTED */
                )),
                h("g", U3, [
                  a[3] || (a[3] = h(
                    "path",
                    {
                      d: "M131.577372,23 C191.570179,23 240.154988,72.4048437 240.154988,133.289323 C240.154988,175.71466 216.352287,213.824447 179.533923,232.263651 L173.105806,219.428349 C205.090411,203.409966 225.8,170.252467 225.8,133.289323 C225.8,80.2796022 183.58786,37.3549881 131.577372,37.3549881 C79.5669364,37.3549881 37.3549881,80.2795496 37.3549881,133.289323 C37.3549881,170.834964 58.7249041,204.422978 91.483508,220.129458 L85.2773273,233.07353 C47.562413,214.990691 23,176.384893 23,133.289323 C23,72.4048016 71.5846065,23 131.577372,23 Z",
                      id: "路径",
                      fill: "#043042",
                      "fill-rule": "nonzero"
                    },
                    null,
                    -1
                    /* HOISTED */
                  )),
                  h("path", Y3, [
                    h("animate", {
                      attributeName: "stroke-dashoffset",
                      from: s.startDashOffset,
                      to: i.value,
                      dur: s.duration
                    }, null, 8, Q3)
                  ]),
                  a[4] || (a[4] = Pt('<g id="group-10" data-v-cd61d1b3><path d="M182.49766,239.362241 C220.761924,220.190939 247.090116,180.122656 247.090116,133.798789 C247.090116,68.8489106 195.333561,16.1968843 131.48881,16.1968843 C67.6440591,16.1968843 15.8875039,68.8489106 15.8875039,133.798789 C15.8875039,180.830365 43.0262979,221.413703 82.2419595,240.226108" id="路径" stroke="#0FFBF8" stroke-width="0.644569492" stroke-dasharray="0,0" data-v-cd61d1b3></path><g id="编组" data-v-cd61d1b3><path d="M136.909034,6.62813281 L136.544234,14.7926928 L136.992234,14.8148528 L137.405034,6.65265193 L136.909034,6.62813281 Z M123.740234,6.69301281 L123.250634,6.72233761 L123.745034,14.8797328 L124.199434,14.8527728 L123.740234,6.69301281 Z M143.730634,7.15317281 L142.917834,15.2840528 L143.370634,15.3321328 L144.218634,7.20461041 L143.730634,7.15317281 Z M116.929834,7.28357281 L116.441834,7.34030481 L117.372234,15.4582128 L117.823434,15.4058128 L116.929834,7.28357281 Z M150.509034,8.03749281 L149.260234,16.1111728 L149.709834,16.1842928 L150.993034,8.11634081 L150.509034,8.03749281 Z M110.158634,8.23909281 L109.675434,8.32274081 L111.041034,16.3767728 L111.489834,16.2993328 L110.158634,8.23909281 Z M157.231434,9.30941281 L155.546634,17.3004528 L155.991434,17.3990128 L157.709834,9.41517281 L157.231434,9.30941281 Z M103.424234,9.58517281 L102.945834,9.69574081 L104.747434,17.6607728 L105.190634,17.5583728 L103.424234,9.58517281 Z M163.852234,10.9625328 L161.734634,18.8468528 L162.178634,18.9703728 L164.321034,11.0937808 L163.852234,10.9625328 Z M96.8186341,11.2992528 L96.3506341,11.4353088 L98.5786341,19.2878928 L99.0194341,19.1594928 L96.8186341,11.2992528 Z M170.421034,12.9789328 L167.879434,20.7324528 L168.309834,20.8795728 L170.886634,13.1380608 L170.421034,12.9789328 Z M90.2986341,13.3812528 L89.8322341,13.5456688 L92.4834341,21.2612528 L92.9138341,21.1093328 L90.2986341,13.3812528 Z M176.843434,15.3546928 L173.888234,22.9553328 L174.308234,23.1254928 L177.301034,15.5402928 L176.843434,15.3546928 Z M83.8791941,15.8359728 L83.4281541,16.0239728 L86.4922341,23.5798928 L86.9186341,23.4019728 L83.8791941,15.8359728 Z M183.126634,18.0914128 L179.746634,25.5064528 L180.166634,25.7045328 L183.561034,18.2962128 L183.126634,18.0914128 Z M77.6128741,18.6366928 L77.1613541,18.8554128 L80.6473541,26.2200528 L81.0520741,26.0238928 L77.6128741,18.6366928 Z M189.253834,21.1773328 L185.481034,28.3934128 L185.887434,28.6140528 L189.678634,21.4075728 L189.253834,21.1773328 Z M71.5040741,21.8031728 L71.0808741,22.0373328 L74.9361541,29.2086128 L75.3455941,28.9822128 L71.5040741,21.8031728 Z M200.933034,28.3414128 L196.411434,35.0988528 L196.790634,35.3618128 L201.333034,28.6192528 L200.933034,28.3414128 Z M59.8593541,29.1023728 L59.4631141,29.3830928 L64.0668741,36.0828528 L64.4474341,35.8131728 L59.8593541,29.1023728 Z M206.472234,32.3968528 L201.598634,38.8966128 L201.961834,39.1787728 L206.859434,32.6982928 L206.472234,32.3968528 Z M54.3643141,33.2281328 L53.9761541,33.5372528 L58.9482341,39.9586128 L59.3047141,39.6750128 L54.3643141,33.2281328 Z M211.793834,36.7601328 L206.574634,42.9762128 L206.924234,43.2805328 L212.161034,37.0802928 L211.793834,36.7601328 Z M49.0735141,37.6468528 L48.7056741,37.9742128 L54.0119941,44.1129328 L54.3557541,43.8071728 L49.0735141,37.6468528 Z M216.868234,41.4046928 L211.327434,47.3250928 L211.657034,47.6458128 L217.221834,41.7479728 L216.868234,41.4046928 Z M44.0428741,42.3632528 L43.6986341,42.7046128 L49.3170341,48.5490928 L49.6493541,48.2192528 L44.0428741,42.3632528 Z M221.688234,46.3297328 L215.841834,51.9386128 L216.150634,52.2737328 L222.025834,46.6955728 L221.688234,46.3297328 Z M39.2754341,47.3406128 L38.9449541,47.7064528 L44.8758341,53.2226128 L45.1845541,52.8807728 L39.2754341,47.3406128 Z M226.238634,51.5218928 L220.104234,56.8019728 L220.392234,57.1510128 L226.559434,51.9089328 L226.238634,51.5218928 Z M34.7799941,52.5710928 L34.4750341,52.9484528 L40.6853541,58.1366928 L40.9803941,57.7722928 L34.7799941,52.5710928 Z M230.509834,56.9601328 L224.093834,61.8830128 L224.367434,62.2536528 L230.805034,57.3591728 L230.509834,56.9601328 Z M30.5655941,58.0484528 L30.2734341,58.4522928 L36.7627141,63.2756528 L37.0298341,62.9059728 L30.5655941,58.0484528 Z M234.481834,62.6289328 L227.806634,67.1821328 L228.062634,67.5714928 L234.752234,63.0404528 L234.481834,62.6289328 Z M26.6780741,63.7484528 L26.4085541,64.1681328 L33.1483941,68.6213328 L33.3947141,68.2376528 L26.6780741,63.7484528 Z M238.119434,68.5046928 L231.207434,72.6756528 L231.441834,73.0785328 L238.367434,68.9301328 L238.119434,68.5046928 Z M19.8139141,75.7515728 L19.5945541,76.1904528 L26.7675141,79.8792528 L26.9746341,79.4638928 L19.8139141,75.7515728 Z M244.481834,80.8382928 L237.168234,84.2285328 L237.355434,84.6486928 L244.685834,81.2974128 L244.481834,80.8382928 Z M16.8715141,82.0171728 L16.6734341,82.4748528 L24.0397541,85.7449328 L24.2208741,85.3266128 L16.8715141,82.0171728 Z M247.144234,87.2593328 L239.657034,90.2305328 L239.820234,90.6609328 L247.323434,87.7289328 L247.144234,87.2593328 Z M14.2958581,88.4393328 L14.1242341,88.9041328 L21.6541541,91.7633328 L21.8148741,91.3273328 L14.2958581,88.4393328 Z M249.467434,93.8241328 L241.828234,96.3657328 L241.968234,96.8057328 L249.620234,94.3033328 L249.467434,93.8241328 Z M12.0627061,95.0065328 L11.9151941,95.4849328 L19.5907141,97.9113328 L19.7259941,97.4721328 L12.0627061,95.0065328 Z M251.399434,100.492933 L243.633834,102.601733 L243.749834,103.046533 L251.525034,100.976933 L251.399434,100.492933 Z M10.1648981,101.695333 L10.0452741,102.174533 L17.8395141,104.172933 L17.9524741,103.720133 L10.1648981,101.695333 Z M252.978634,107.260133 L245.109034,108.924933 L245.201834,109.383333 L253.076234,107.744133 L252.978634,107.260133 Z M8.66464208,108.472933 L8.57007408,108.962533 L16.4611941,110.519333 L16.5482341,110.065733 L8.66464208,108.472933 Z M254.188234,114.103333 L246.240234,115.324133 L246.308234,115.787333 L254.259434,114.591333 L254.188234,114.103333 Z M7.50951408,115.332933 L7.44143408,115.825733 L15.4044741,116.940133 L15.4673541,116.481733 L7.50951408,115.332933 Z M255.024234,121.001733 L247.023434,121.780133 L247.065834,122.240133 L255.069834,121.498533 L255.024234,121.001733 Z M6.74945248,122.237733 L6.70879408,122.728933 L14.7199941,123.399333 L14.7583141,122.932133 L6.74945248,122.237733 Z M255.491434,127.934533 L247.460234,128.269733 L247.477834,128.732133 L255.510634,128.432133 L255.491434,127.934533 Z M6.33809056,129.176133 L6.32343408,129.666533 L14.3583141,129.895333 L14.3719941,129.427333 L6.33809056,129.176133 Z M247.550634,134.776133 L247.544234,135.243333 L255.581034,135.376133 L255.588234,134.883333 L247.550634,134.776133 Z M14.6711941,142.438533 L6.65663408,143.060133 L6.69493008,143.557733 L14.7071141,142.899333 L14.6711941,142.438533 Z M246.694634,147.752933 L246.637834,148.217733 L254.613034,149.236133 L254.673034,148.746533 L246.694634,147.752933 Z M15.3355941,148.908933 L7.36639408,149.973733 L7.43164208,150.468933 L15.3960741,149.366533 L15.3355941,148.908933 Z M245.745834,154.185733 L245.663434,154.645733 L253.572234,156.108133 L253.657834,155.622533 L245.745834,154.185733 Z M16.3473541,155.330533 L8.44767408,156.839333 L8.53939408,157.329733 L16.4324741,155.784133 L16.3473541,155.330533 Z M244.448234,160.552133 L244.341834,161.008933 L252.159434,162.912133 L252.270634,162.432933 L244.448234,160.552133 Z M17.7042341,161.683333 L9.89959408,163.637733 L10.0187461,164.124933 L17.8143941,162.132133 L17.7042341,161.683333 Z M242.810634,166.834533 L242.681834,167.275333 L250.381034,169.620133 L250.521034,169.142533 L242.810634,166.834533 Z M19.3967141,167.961733 L11.7093541,170.348933 L11.8540341,170.828133 L19.5310341,168.404933 L19.3967141,167.961733 Z M240.833834,173.009733 L240.681834,173.442533 L248.241834,176.216933 L248.406634,175.748133 L240.833834,173.009733 Z M13.9113541,176.948933 L21.4568741,174.132933 L21.6143141,174.564933 L14.0829861,177.420933 L13.9113541,176.948933 Z M238.350634,179.489733 L238.523434,179.072933 L245.941834,182.219333 L245.748234,182.685733 L238.350634,179.489733 Z M16.4507941,183.414533 L23.8308741,180.176933 L24.0099941,180.596133 L16.6488741,183.878533 L16.4507941,183.414533 Z M235.704234,185.388133 L235.905834,184.969733 L243.132234,188.548133 L242.919434,188.989733 L235.704234,185.388133 Z M19.3299141,189.724133 L26.5236741,186.079333 L26.7298341,186.497733 L19.5479141,190.167333 L19.3299141,189.724133 Z M232.729834,191.155333 L232.956234,190.744133 L239.976234,194.726533 L239.741834,195.152133 L232.729834,191.155333 Z M22.5402341,195.863333 L29.5259941,191.821733 L29.7547941,192.227333 L22.7818341,196.292933 L22.5402341,195.863333 Z M229.437834,196.735333 L229.685034,196.338533 L236.480234,200.704133 L236.221834,201.118533 L229.437834,196.735333 Z M225.861834,202.121733 L226.124234,201.748133 L232.682634,206.474533 L232.395434,206.882533 L225.861834,202.121733 Z M29.9623141,207.537733 L36.4733541,202.744933 L36.7423941,203.121733 L30.2502341,207.940133 L29.9623141,207.537733 Z M222.000234,207.306533 L222.285834,206.942533 L228.572234,212.036133 L228.268234,212.422533 L222.000234,207.306533 Z M34.1308741,213.070533 L40.3671941,207.913733 L40.6584741,208.277733 L34.4377541,213.452933 L34.1308741,213.070533 Z M217.876234,212.270533 L218.179434,211.924933 L224.189034,217.352133 L223.863434,217.723333 L217.876234,212.270533 Z M38.5839941,218.343333 L44.5375941,212.852133 L44.8529541,213.204933 L38.9050341,218.702533 L38.5839941,218.343333 Z M213.468234,216.996933 L213.793034,216.665733 L219.494634,222.427333 L219.152234,222.776133 L213.468234,216.996933 Z M43.3120741,223.362533 L48.9663941,217.552933 L49.2907141,217.878533 L43.6581541,223.708133 L43.3120741,223.362533 Z M208.799434,221.476133 L209.145034,221.160133 L214.525834,227.231333 L214.169034,227.557733 L208.799434,221.476133 Z M48.3203141,228.116133 L53.6459941,221.994533 L53.9972741,222.310533 L48.6777541,228.436933 L48.3203141,228.116133 Z M203.945034,225.690533 L204.293034,225.404933 L209.371434,231.739333 L208.983434,232.058533 L203.945034,225.690533 Z M53.5419941,232.577733 L58.5404741,226.176133 L58.8951141,226.461733 L53.9287141,232.888133 L53.5419941,232.577733 Z M198.850634,229.625733 L199.223434,229.352133 L203.929034,235.978533 L203.534634,236.267333 L198.850634,229.625733 Z M59.0117541,236.734533 L63.6589541,230.065733 L64.0315141,230.332933 L59.4107941,237.020133 L59.0117541,236.734533 Z M193.522634,233.275333 L193.909834,233.022533 L198.259434,239.896133 L197.849834,240.162533 L193.522634,233.275333 Z M64.6781541,240.605733 L68.9499941,233.682533 L69.3386341,233.930533 L65.0895141,240.867333 L64.6781541,240.605733 Z M188.458634,236.390533 L188.057034,236.621733 L192.005034,243.740133 L192.428234,243.496933 L188.458634,236.390533 Z M74.4553541,236.989733 L70.5617541,244.140133 L70.9953541,244.382533 L74.8472741,237.209733 L74.4553541,236.989733 Z M182.398634,239.653733 L182.809034,239.447333 L186.385034,246.766533 L185.946634,246.987333 L182.398634,239.653733 Z" id="Fill-1" fill="#00E0DB" data-v-cd61d1b3></path><path d="M130.5432,0.0004865296 L130.5816,21.15344 L131.0352,21.15296 L131.0352,0 L130.5432,0.0004865296 Z M72.64032,37.07808 L73.02232,36.84584 L62.38136,18.66872 L61.95016,18.9312 L72.64032,37.07808 Z M187.9856,37.54976 L198.6576,19.39184 L198.216,19.12504 L187.616,37.32624 L187.9856,37.54976 Z M33.86672,76.70576 L34.07192,76.32168 L15.81304,66.1836 L15.56816,66.64224 L33.86672,76.70576 Z M227.896,82.7432 L246.1696,72.6328 L245.9336,72.19144 L227.6792,82.3384 L227.896,82.7432 Z M0.02080544,136.9576 L20.80544,136.06 L20.7884,135.6256 L0,136.4312 L0.02080544,136.9576 Z M261.8768,142.2784 L261.896,141.7528 L241.1056,141.0072 L241.0896,141.4376 L261.8768,142.2784 Z M21.27824,206.1752 L38.69032,194.5992 L38.44776,194.2208 L21.00352,205.7472 L21.27824,206.1752 Z M239.792,206.7632 L239.5192,207.1904 L222.0976,195.6296 L222.3384,195.252 L239.792,206.7632 Z M189.2248,252.5792 L188.764,252.8112 L179.5816,233.8304 L179.9704,233.6344 L189.2248,252.5792 Z M77.17664,252.9488 L86.3216,233.948 L85.928,233.752 L76.72224,252.7208 L77.17664,252.9488 Z" id="Fill-2" fill="#19EBFF" data-v-cd61d1b3></path></g></g>', 1))
                ])
              ]),
              a[6] || (a[6] = h(
                "use",
                {
                  id: "路径",
                  stroke: "url(#linearGradient-6)",
                  mask: "url(#mask-8)",
                  "stroke-width": "17.9199997",
                  "stroke-dasharray": "2.466124534606934,1.47967472076416",
                  transform: "translate(153.6623, 156.244) rotate(-90) translate(-153.6623, -156.244)",
                  "xlink:href": "#path-7"
                },
                null,
                -1
                /* HOISTED */
              )),
              a[7] || (a[7] = h(
                "path",
                {
                  d: "M207.976763,143.789974 L207.976763,160.210026 L196.684223,152 L207.976763,143.789974 Z",
                  id: "路径-2备份-2",
                  stroke: "url(#linearGradient-10)",
                  "stroke-width": "0.804705882",
                  fill: "url(#linearGradient-9)"
                },
                null,
                -1
                /* HOISTED */
              )),
              a[8] || (a[8] = h(
                "path",
                {
                  d: "M108.976763,143.789974 L108.976763,160.210026 L97.6842228,152 L108.976763,143.789974 Z",
                  id: "路径-2备份-3",
                  stroke: "url(#linearGradient-10)",
                  "stroke-width": "0.804705882",
                  fill: "url(#linearGradient-9)",
                  transform: "translate(103.1896, 152) scale(-1, 1) translate(-103.1896, -152)"
                },
                null,
                -1
                /* HOISTED */
              )),
              h("g", K3, [
                h("text", J3, [
                  h(
                    "tspan",
                    _3,
                    R(s.label),
                    1
                    /* TEXT */
                  )
                ]),
                h("text", $3, [
                  h("tspan", null, [
                    k(Z(F3), {
                      from: 0,
                      to: s.value,
                      precision: n.value
                    }, null, 8, ["to", "precision"])
                  ]),
                  h(
                    "tspan",
                    eu,
                    R(s.unit),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ])
          ])
        ])
      ]))
    ]));
  }
}), Hu = /* @__PURE__ */ z(tu, [["__scopeId", "data-v-cd61d1b3"]]), nu = {
  startAngle: -180,
  endAngle: 0,
  min: 0,
  max: 240,
  splitNumber: 10,
  clockwise: !0,
  itemStyle: {},
  progress: {
    show: !0,
    roundCap: !1,
    width: 18,
    itemStyle: {
      borderWidth: 0
    }
  },
  pointer: {
    show: !0,
    length: "100%",
    width: 4,
    offsetCenter: [0, "0%"],
    itemStyle: {
      color: "rgba(255, 255, 255, 1)",
      borderColor: "#fff"
    }
  },
  axisLine: {
    show: !0,
    roundCap: !1,
    lineStyle: {
      width: 18
    }
  },
  axisTick: {
    show: !1
  },
  splitLine: {
    show: !1
  },
  anchor: {
    show: !0,
    showAbove: !0,
    size: 25,
    itemStyle: {
      color: "#fff",
      opacity: 0.4,
      borderWidth: 0
    }
  },
  axisLabel: {
    show: !0,
    distance: -40,
    color: "#fff",
    fontSize: 14,
    formatter: function(e) {
      return e.toFixed(0);
    }
  },
  title: {
    show: !1
  },
  detail: {
    show: !0,
    offsetCenter: [0, "30%"],
    valueAnimation: !0,
    formatter: function(e) {
      return "{value|" + e.toFixed(0) + "}";
    },
    rich: {
      value: {
        fontSize: 40,
        color: "#fff"
      }
    }
  }
}, Eu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  progressSeries: nu
}, Symbol.toStringTag, { value: "Module" })), je = ["rgba(15, 251, 248, 1)", "rgba(34, 118, 252, 1)", "rgba(225, 188, 75, 1)", "rgba(222, 56, 4, 1)"], ru = {
  nameLocation: "end",
  nameTextStyle: {
    padding: [0, 20, 0, 0],
    color: "#fff",
    fontSize: 14,
    lineHeight: 20
  },
  splitLine: {
    lineStyle: {
      color: "rgba(255, 255, 255, 0.2)",
      type: "dotted"
    }
  },
  axisLabel: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 20,
    margin: 13,
    formatter: (e) => e
  },
  axisLine: {
    lineStyle: {
      color: "rgba(255, 255, 255, 0.2)"
    }
  }
}, ou = {
  backgroundColor: "rgba(0, 32, 61, 1)",
  borderColor: "rgba(15, 251, 248, 1)",
  textStyle: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 20
  }
}, au = {
  show: !1,
  top: "bottom",
  left: "center",
  textStyle: {
    fontSize: 14,
    color: "#fff",
    lineHeight: 24
  },
  itemWidth: 12,
  itemHeight: 12,
  itemGap: 20,
  type: "scroll",
  pageIconColor: "rgba(15, 251, 248, 1)",
  pageIconInactiveColor: "#e5e5e5",
  pageTextStyle: {
    fontSize: 12,
    color: "#fff"
  }
}, iu = {
  top: 50,
  bottom: 40
}, su = {
  type: "category",
  boundaryGap: !0,
  splitLine: {
    show: !0,
    lineStyle: {
      color: "rgba(255, 255, 255, 0.2)",
      type: "dotted",
      width: 1
    }
  },
  axisTick: {
    show: !1
  },
  axisLine: {
    lineStyle: {
      color: "rgba(255, 255, 255, 0.2)"
    }
  },
  axisLabel: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 20
  }
}, Or = {
  type: "scatter",
  symbolSize: function(e) {
    return Math.max(Math.sqrt(e), 10);
  },
  itemStyle: {
    color: (e) => je[e.componentIndex],
    borderColor: "#fff",
    borderWidth: 1.2,
    opacity: 1
  }
};
function lu(e, t) {
  const n = e.match(/[\d.]+/g);
  if (!n || n.length < 4)
    throw new Error("Invalid rgba string");
  return n[3] = t, `rgba(${n[0]}, ${n[1]}, ${n[2]}, ${n[3]})`;
}
const ye = {
  tooltip: ou,
  legend: au,
  grid: iu,
  xAxis: su,
  yAxis: ru,
  color: je,
  series: Or
};
function Sr(e) {
  return q(e, Object.keys(ye), Object.values(ye)), b({}, ye, e);
}
function hn(e, t) {
  const n = je[t % je.length];
  return b(
    {},
    Or,
    {
      itemStyle: {
        color: () => lu(n, 0.2),
        borderColor: n
      }
    },
    e
  );
}
function Br(e) {
  return Array.isArray(e) ? e.map((t, n) => hn(t, n)) : hn(e ?? {}, 0);
}
const Iu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonScatterOptions: ye,
  useCommonScatterOptions: Sr,
  useCommonScatterSeries: Br
}, Symbol.toStringTag, { value: "Module" })), cu = { class: "lc-scatter-chart" }, uu = /* @__PURE__ */ C({
  __name: "scatter",
  props: /* @__PURE__ */ de({
    options: Object
  }, {
    options: () => ({})
  }),
  setup(e, { expose: t }) {
    const n = T(() => {
      e.options.series = Br(e.options.series || []);
      const o = Sr(e.options);
      return b({}, o);
    }), {
      exposes: r
    } = Re("baseChart");
    return t(r), (o, i) => (w(), O("div", cu, [
      k(Z(qe), ze({ options: n.value }, o.$attrs), null, 16, ["options"])
    ]));
  }
}), qu = /* @__PURE__ */ z(uu, [["__scopeId", "data-v-292540ce"]]), fu = [
  "rgba(15, 251, 248, 1)",
  "rgba(225, 188, 75, 1)",
  "rgba(34, 118, 252, 1)",
  "rgba(166, 207, 255, 1)",
  "rgba(119, 73, 255, 1)"
], du = {
  nameLocation: "end",
  show: !1,
  nameTextStyle: {
    padding: [0, 20, 0, 0],
    color: "#fff",
    fontSize: 14,
    lineHeight: 20
  },
  splitLine: {
    lineStyle: {
      color: "rgba(255, 255, 255, 0.2)",
      type: "dotted"
    }
  },
  axisLabel: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 20,
    margin: 13,
    formatter: (e) => e
  },
  axisLine: {
    lineStyle: {
      color: "rgba(255, 255, 255, 0.2)"
    }
  }
}, pu = {
  backgroundColor: "rgba(0, 32, 61, 1)",
  borderColor: "rgba(15, 251, 248, 1)",
  textStyle: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 20
  },
  trigger: "item",
  formatter: "{a} <br/>{b} : {c}%"
}, hu = [
  {
    show: !0,
    top: "bottom",
    left: "center",
    textStyle: {
      fontSize: 14,
      color: "#fff",
      lineHeight: 24
    },
    itemWidth: 12,
    itemHeight: 12,
    itemGap: 20,
    type: "scroll",
    pageIconColor: "rgba(15, 251, 248, 1)",
    pageIconInactiveColor: "#e5e5e5",
    pageTextStyle: {
      fontSize: 12,
      color: "#fff"
    },
    borderWidth: 0
  },
  {
    left: "67%",
    top: "center",
    orient: "vertical",
    icon: "none",
    type: "scroll",
    formatter(e) {
      return e;
    },
    padding: [0, 0, 0, 10],
    textStyle: {
      fontSize: 14,
      color: "#fff",
      lineHeight: 20,
      padding: [0, 0, 0, 0]
    }
  }
], gu = {
  top: 50,
  bottom: 40
}, mu = {
  type: "category",
  show: !1,
  boundaryGap: !0,
  splitLine: {
    show: !0,
    lineStyle: {
      color: "rgba(255, 255, 255, 0.2)",
      type: "dotted",
      width: 1
    }
  },
  axisTick: {
    show: !1
  },
  axisLine: {
    lineStyle: {
      color: "rgba(255, 255, 255, 0.2)"
    }
  },
  axisLabel: {
    color: "#fff",
    fontSize: 14,
    lineHeight: 20
  }
}, xr = {
  type: "funnel",
  name: "Funnel",
  left: "10%",
  top: 60,
  bottom: 60,
  width: "60%",
  min: 0,
  max: 100,
  minSize: "0%",
  maxSize: "100%",
  sort: "descending",
  gap: 2,
  label: {
    show: !0,
    position: "inside",
    color: "#fff",
    fontSize: 12,
    lineHeight: 16,
    formatter: "{c}%"
  },
  labelLine: {
    length: 10,
    lineStyle: {
      width: 1,
      type: "solid"
    }
  },
  itemStyle: {
    borderColor: "transparent",
    borderWidth: 1
  },
  emphasis: {
    label: {
      fontSize: 20
    }
  }
}, ve = {
  tooltip: pu,
  legend: hu,
  grid: gu,
  xAxis: mu,
  yAxis: du,
  color: fu,
  series: xr
};
function Tr(e) {
  var n;
  q(e, Object.keys(ve), Object.values(ve));
  const t = {};
  return (((n = e == null ? void 0 : e.series[0]) == null ? void 0 : n.data) ?? []).forEach((r) => {
    t[r.name] = r.value;
  }), b({}, ve, {
    legend: [{}, {
      formatter(r) {
        return r + "：" + t[r] + "%";
      }
    }]
  }, e);
}
function gn(e, t) {
  return b({}, xr, e);
}
function Mr(e) {
  return Array.isArray(e) ? e.map((t, n) => gn(t)) : gn(e ?? {});
}
const Ru = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  commonScatterOptions: ve,
  useCommonScatterOptions: Tr,
  useCommonScatterSeries: Mr
}, Symbol.toStringTag, { value: "Module" })), bu = { class: "lc-scatter-chart" }, yu = /* @__PURE__ */ C({
  __name: "funnel",
  props: /* @__PURE__ */ de({
    options: Object
  }, {
    options: () => ({})
  }),
  setup(e, { expose: t }) {
    const n = T(() => {
      e.options.series = Mr(e.options.series || []);
      const o = Tr(e.options);
      return b({}, o);
    }), {
      exposes: r
    } = Re("baseChart");
    return t(r), (o, i) => (w(), O("div", bu, [
      k(Z(qe), ze({ options: n.value }, o.$attrs), null, 16, ["options"])
    ]));
  }
}), Vu = /* @__PURE__ */ z(yu, [["__scopeId", "data-v-287e13a7"]]), vu = {
  color: [
    "rgba(119, 73, 255, 1)",
    "rgba(166, 207, 255, 1)",
    "rgba(0, 148, 255, 1)",
    "rgba(225, 188, 75, 1)",
    "rgba(15, 251, 248, 1)"
  ],
  series: []
}, Au = {
  max: 100,
  label: function(e, t) {
    return (e.value / t.max * 100).toFixed(1) + "%";
  },
  data: []
}, Lu = { class: "lc-funnel-tier" }, wu = { class: "lc-funnel-tier__serie__item__label" }, Ou = { class: "lc-funnel-tier__serie__item__bar__inner--text" }, Su = { class: "lc-funnel-tier__serie__item__value" }, Bu = /* @__PURE__ */ C({
  __name: "funnelTier",
  props: {
    options: Object
  },
  setup(e) {
    const t = T(() => {
      const n = b({}, vu, e.options);
      return n.series = n.series.map((r) => b({}, Au, r)), n;
    });
    return (n, r) => {
      var o;
      return w(), O("div", Lu, [
        (w(!0), O(
          et,
          null,
          tt((o = t.value) == null ? void 0 : o.series, (i, s) => (w(), O("div", {
            class: "lc-funnel-tier__serie",
            key: s
          }, [
            (w(!0), O(
              et,
              null,
              tt(i == null ? void 0 : i.data, (a, l) => {
                var c;
                return w(), O("div", {
                  key: l,
                  class: "lc-funnel-tier__serie__item"
                }, [
                  h(
                    "div",
                    wu,
                    R(a.name),
                    1
                    /* TEXT */
                  ),
                  h(
                    "div",
                    {
                      class: "lc-funnel-tier__serie__item__bar",
                      style: Le({
                        "--inner-color": t.value.color[l]
                      })
                    },
                    [
                      r[0] || (r[0] = h(
                        "div",
                        { class: "lc-funnel-tier__serie__item__bar__line" },
                        null,
                        -1
                        /* HOISTED */
                      )),
                      h(
                        "div",
                        {
                          class: "lc-funnel-tier__serie__item__bar__inner",
                          style: Le({
                            "--inner-width": `${a.value / i.max * 100}%`
                          })
                        },
                        [
                          h(
                            "div",
                            Ou,
                            R((c = i == null ? void 0 : i.label) == null ? void 0 : c.call(i, a, i)),
                            1
                            /* TEXT */
                          )
                        ],
                        4
                        /* STYLE */
                      ),
                      r[1] || (r[1] = h(
                        "div",
                        { class: "lc-funnel-tier__serie__item__bar__line" },
                        null,
                        -1
                        /* HOISTED */
                      ))
                    ],
                    4
                    /* STYLE */
                  ),
                  h(
                    "div",
                    Su,
                    R(a.value),
                    1
                    /* TEXT */
                  )
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]))),
          128
          /* KEYED_FRAGMENT */
        ))
      ]);
    };
  }
}), Xu = /* @__PURE__ */ z(Bu, [["__scopeId", "data-v-8159c06d"]]);
export {
  zu as LcBarChart,
  Zu as LcBarChartOptions,
  Vu as LcFunnelChart,
  Ru as LcFunnelChartOptions,
  Xu as LcFunnelTierChart,
  Fu as LcGaugeChart,
  Hu as LcGaugeSvgChart,
  Nu as LcLineOptions,
  Du as LcPieChart,
  Wu as LcRadarChart,
  qu as LcScatterChart,
  ku as gaugeConstants,
  Eu as gaugeThemeOptions,
  Gu as lcLineChart,
  Iu as lcScatterOptions
};
