import { shallowRef as D, ref as s, onMounted as Y, computed as H } from "vue";
import R from "lodash-es/debounce";
import I from "lodash-es/memoize";
const L = 300;
function F() {
  const i = D(), d = D(), h = s(90), x = s(360), v = s(7), a = s({
    x: 0,
    y: 0
  }), p = s(0), C = s({ x: 0 }), A = s(0), r = s([]), b = R(() => {
    const e = i.value;
    if (!e || !d.value) return;
    const { width: t, height: o } = e.getBoundingClientRect();
    a.value.x = t / 2, a.value.y = o / 2;
    const { width: n } = d.value[0].getBoundingClientRect();
    C.value.x = n / 2;
  });
  function E() {
    if (!window.ResizeObserver || !i.value) return;
    new ResizeObserver(R(() => {
      b();
    }, L)).observe(i.value);
  }
  Y(() => {
    E(), setTimeout(() => b);
  });
  const g = H(() => {
    let e = p.value >= v.value ? v.value : p.value;
    return x.value / e;
  }), w = I((e) => g.value * e + h.value), S = R((e) => {
    r.value.pop(), r.value.unshift(e);
  }, 300), z = I((e, t, o, n) => {
    const c = e * (Math.PI / 180), l = t + t * Math.cos(c), f = o + o * Math.sin(c) + n;
    return {
      x: l,
      y: f
    };
  }, (e, t, o, n) => `${e}-${t}-${o}-${n}`);
  function M(e, t, o, n) {
    return t / (o - n) - e;
  }
  function W(e) {
    let t = e >= v.value ? 0 : e;
    const o = w(t) + A.value, n = a.value.y, c = a.value.x, l = a.value.y / 3.2, f = +n / 1.1, k = w(g.value + 1), { y: P } = z(k, c, l, f), { x: O, y: u } = z(o, c, l, f);
    if (!O || !u || !a.value.y) return {
      left: "50%",
      top: "50%",
      opacity: 0,
      zIndex: 0
    };
    const y = u > 0 && u > a.value.y + l / 2;
    let $ = y ? 1 : M(1, u, n, l), B = y ? 1 : M(1, u, n, l), T = y ? 10 : 0, m = r.value.includes(e);
    return !m && u <= P && t === 0 && (S(e), m = r.value.includes(e)), m && (B = 0, $ = 0), {
      left: O + "px",
      top: u + "px",
      transform: `translate(-50%, -50%) scale(${B})`,
      opacity: $,
      "--z-index-number": T
    };
  }
  return {
    starLneght: p,
    starWrapperRef: i,
    angleOffset: A,
    customRotateStyle: W,
    starElRefs: d,
    averageAngle: g,
    startAngle: h,
    starMaxShowCount: v,
    displayAlternately: r,
    fullAngle: x
  };
}
export {
  F as useStarRotate
};
