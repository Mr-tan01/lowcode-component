import { ref as u, reactive as y, computed as p } from "vue";
const i = "__localStorage:dragHistory__";
function x() {
  const r = u(!1), e = y({ x: 100, y: "80%" });
  try {
    const t = localStorage.getItem(i);
    if (t) {
      const o = JSON.parse(t);
      e.x = o.x, e.y = parseInt(o.y) > innerHeight ? "80%" : o.y;
    }
  } catch {
  }
  const a = p(() => e.x <= 0 ? "lt" : "rt");
  function s(t) {
    r.value = !0;
  }
  function c(t) {
    t.preventDefault();
  }
  function g(t) {
    var n;
    t.preventDefault(), r.value = !1, t.clientX < window.innerWidth / 2 ? e.x = 0 : e.x = 100;
    const { height: o = 200 } = (n = t.target) == null ? void 0 : n.getBoundingClientRect();
    e.y = (t.clientY <= o ? o : t.clientY) + "px", localStorage.setItem(i, JSON.stringify(e));
  }
  function l() {
    console.log("拖拽进入");
  }
  function f(t) {
    t.preventDefault();
  }
  return {
    isDraging: r,
    startDrag: s,
    stopDrag: g,
    draging: c,
    dragenter: l,
    robotOffset: e,
    xAdsorptionDir: a,
    dragover: f
  };
}
export {
  x as useDragRobotPosition
};
