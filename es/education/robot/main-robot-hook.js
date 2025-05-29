import { shallowRef as S, ref as u, onMounted as N, computed as X } from "vue";
import w from "lodash-es/debounce";
import C from "lodash-es/memoize";
const j = 300;
function J() {
  const d = S(), y = S(), z = u(90), O = u(360), c = u(7), a = u({
    x: 0,
    y: 0
  }), g = u(0), E = u({ x: 0 }), p = u(0), v = u([]), Y = w(() => {
    const e = d.value;
    if (!e || !y.value) return;
    const { width: t, height: o } = e.getBoundingClientRect();
    a.value.x = t / 2, a.value.y = o / 2;
    const { width: n } = y.value[0].getBoundingClientRect();
    E.value.x = n / 2;
  });
  function H() {
    if (!window.ResizeObserver || !d.value) return;
    new ResizeObserver(
      w(() => {
        Y();
      }, j)
    ).observe(d.value);
  }
  N(() => {
    H(), setTimeout(() => Y);
  });
  const m = X(() => {
    let e = g.value >= c.value ? c.value : g.value;
    return O.value / e;
  }), x = C((e) => m.value * e + z.value), T = w((e) => {
    v.value.pop(), v.value.unshift(e);
  }, 300), R = C(
    (e, t, o, n) => {
      const r = e * (Math.PI / 180), l = t + t * Math.cos(r), i = o + o * Math.sin(r) + n;
      return {
        x: l,
        y: i
      };
    },
    (e, t, o, n) => `${e}-${t}-${o}-${n}`
  );
  function D(e, t, o, n) {
    return t / (o - n) - e;
  }
  function W(e) {
    let t = e >= c.value ? 0 : e;
    const o = x(t) + p.value, n = a.value.y, r = a.value.x, l = a.value.y / 3.2, i = +n / 1.1, { x: h, y: I } = R(o, r, l, i), f = h > a.value.x;
    let s = "";
    return f && (s += " rotateY(180deg)"), {
      transform: s
    };
  }
  function k(e) {
    let t = e >= c.value ? 0 : e;
    const o = x(t) + p.value, n = a.value.y, r = a.value.x, l = a.value.y / 3.2, i = +n / 1.1, h = x(m.value + 1), { y: I } = R(h, r, l, i), { x: f, y: s } = R(o, r, l, i);
    if (!f || !s || !a.value.y)
      return {
        left: "50%",
        top: "50%",
        opacity: 0,
        zIndex: 0
      };
    const A = s > 0 && s > a.value.y + l / 2;
    let M = A ? 1 : D(1, s, n, l), $ = A ? 1 : D(1, s, n, l), P = A ? 10 : 0;
    const L = f > a.value.x;
    let B = `translate(-50%, -50%) scale(${$})`;
    L && (B += " rotateY(180deg)");
    let b = v.value.includes(e);
    return g.value > c.value && !b && s <= I && t === 0 && (T(e), b = v.value.includes(e)), b && ($ = 0, M = 0), {
      left: f + "px",
      top: s + "px",
      transform: B,
      opacity: M,
      "--z-index-number": P
    };
  }
  return {
    getTextStyle: W,
    starLneght: g,
    starWrapperRef: d,
    angleOffset: p,
    customRotateStyle: k,
    starElRefs: y,
    averageAngle: m,
    startAngle: z,
    starMaxShowCount: c,
    displayAlternately: v,
    fullAngle: O
  };
}
export {
  J as useStarRotate
};
