import { shallowRef as D, ref as s, onMounted as Y, computed as H } from "vue";
import R from "lodash-es/debounce";
import I from "lodash-es/memoize";
const L = 300;
function F() {
  const v = D(), p = D(), h = s(90), x = s(360), r = s(7), a = s({
    x: 0,
    y: 0
  }), f = s(0), C = s({ x: 0 }), A = s(0), c = s([]), b = R(() => {
    const e = v.value;
    if (!e || !p.value) return;
    const { width: t, height: o } = e.getBoundingClientRect();
    a.value.x = t / 2, a.value.y = o / 2;
    const { width: n } = p.value[0].getBoundingClientRect();
    C.value.x = n / 2;
  });
  function E() {
    if (!window.ResizeObserver || !v.value) return;
    new ResizeObserver(R(() => {
      b();
    }, L)).observe(v.value);
  }
  Y(() => {
    E(), setTimeout(() => b);
  });
  const g = H(() => {
    let e = f.value >= r.value ? r.value : f.value;
    return x.value / e;
  }), w = I((e) => g.value * e + h.value), S = R((e) => {
    c.value.pop(), c.value.unshift(e);
  }, 300), z = I((e, t, o, n) => {
    const i = e * (Math.PI / 180), l = t + t * Math.cos(i), d = o + o * Math.sin(i) + n;
    return {
      x: l,
      y: d
    };
  }, (e, t, o, n) => `${e}-${t}-${o}-${n}`);
  function M(e, t, o, n) {
    return t / (o - n) - e;
  }
  function W(e) {
    let t = e >= r.value ? 0 : e;
    const o = w(t) + A.value, n = a.value.y, i = a.value.x, l = a.value.y / 3.2, d = +n / 1.1, k = w(g.value + 1), { y: P } = z(k, i, l, d), { x: O, y: u } = z(o, i, l, d);
    if (!O || !u || !a.value.y) return {
      left: "50%",
      top: "50%",
      opacity: 0,
      zIndex: 0
    };
    const y = u > 0 && u > a.value.y + l / 2;
    let $ = y ? 1 : M(1, u, n, l), B = y ? 1 : M(1, u, n, l), T = y ? 10 : 0, m = c.value.includes(e);
    return f.value > r.value && !m && u <= P && t === 0 && (S(e), m = c.value.includes(e)), m && (B = 0, $ = 0), {
      left: O + "px",
      top: u + "px",
      transform: `translate(-50%, -50%) scale(${B})`,
      opacity: $,
      "--z-index-number": T
    };
  }
  return {
    starLneght: f,
    starWrapperRef: v,
    angleOffset: A,
    customRotateStyle: W,
    starElRefs: p,
    averageAngle: g,
    startAngle: h,
    starMaxShowCount: r,
    displayAlternately: c,
    fullAngle: x
  };
}
export {
  F as useStarRotate
};
