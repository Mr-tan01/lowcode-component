import { shallowRef as S, ref as l, onMounted as N, computed as X } from "vue";
import z from "lodash-es/debounce";
import C from "lodash-es/memoize";
const j = 300;
function J() {
  const d = S(), p = S(), O = l(90), Y = l(360), r = l(7), o = l({
    x: 0,
    y: 0
  }), g = l(0), E = l({ x: 0 }), y = l(0), f = l([]), D = z(() => {
    const e = d.value;
    if (!e || !p.value) return;
    const { width: t, height: s } = e.getBoundingClientRect();
    o.value.x = t / 2, o.value.y = s / 2;
    const { width: n } = p.value[0].getBoundingClientRect();
    E.value.x = n / 2;
  });
  function H() {
    if (!window.ResizeObserver || !d.value) return;
    new ResizeObserver(
      z(() => {
        D();
      }, j)
    ).observe(d.value);
  }
  N(() => {
    H(), setTimeout(() => D);
  });
  const m = X(() => {
    const e = g.value >= r.value ? r.value : g.value;
    return Y.value / e;
  }), x = C((e) => m.value * e + O.value), T = z((e) => {
    f.value.pop(), f.value.unshift(e);
  }, 300), R = C(
    (e, t, s, n) => {
      const u = e * (Math.PI / 180), a = t + t * Math.cos(u), i = s + s * Math.sin(u) + n;
      return {
        x: a,
        y: i
      };
    },
    (e, t, s, n) => `${e}-${t}-${s}-${n}`
  );
  function I(e, t, s, n) {
    return t / (s - n) - e;
  }
  function W(e) {
    const t = e >= r.value ? 0 : e, s = x(t) + y.value, n = o.value.y, u = o.value.x, a = o.value.y / 3.2, i = +n / 1.1, { x: h } = R(s, u, a, i), A = h > o.value.x;
    let v = "";
    return A && (v += " rotateY(180deg)"), {
      transform: v
    };
  }
  function k(e) {
    const t = e >= r.value ? 0 : e, s = x(t) + y.value, n = o.value.y, u = o.value.x, a = o.value.y / 3.2, i = +n / 1.1, h = x(m.value + 1), { y: A } = R(h, u, a, i), { x: v, y: c } = R(s, u, a, i);
    if (!v || !c || !o.value.y)
      return {
        left: "50%",
        top: "50%",
        opacity: 0,
        zIndex: 0
      };
    const b = c > 0 && c > o.value.y + a / 2;
    let M = b ? 1 : I(1, c, n, a), $ = b ? 1 : I(1, c, n, a);
    const P = b ? 10 : 0, L = v > o.value.x;
    let B = `translate(-50%, -50%) scale(${$})`;
    L && (B += " rotateY(180deg)");
    let w = f.value.includes(e);
    return g.value > r.value && !w && c <= A && t === 0 && (T(e), w = f.value.includes(e)), w && ($ = 0, M = 0), {
      left: v + "px",
      top: c + "px",
      transform: B,
      opacity: M,
      "--z-index-number": P
    };
  }
  return {
    getTextStyle: W,
    starLneght: g,
    starWrapperRef: d,
    angleOffset: y,
    customRotateStyle: k,
    starElRefs: p,
    averageAngle: m,
    startAngle: O,
    starMaxShowCount: r,
    displayAlternately: f,
    fullAngle: Y
  };
}
export {
  J as useStarRotate
};
