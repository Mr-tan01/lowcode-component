import { ref as u, reactive as y, computed as p } from "vue";
const i = "__localStorage:dragHistory__";
function x() {
  const r = u(!1), o = y({ x: 100, y: "80%" });
  try {
    const t = localStorage.getItem(i);
    if (t) {
      const e = JSON.parse(t);
      o.x = e.x, o.y = parseInt(e.y) > innerHeight ? "80%" : e.y;
    }
  } catch {
    console.warn("获取拖拽历史数据失败，使用默认值");
  }
  const a = p(() => o.x <= 0 ? "lt" : "rt");
  function s() {
    r.value = !0;
  }
  function c(t) {
    t.preventDefault();
  }
  function g(t) {
    var n;
    t.preventDefault(), r.value = !1, t.clientX < window.innerWidth / 2 ? o.x = 0 : o.x = 100;
    const { height: e = 200 } = ((n = t.target) == null ? void 0 : n.getBoundingClientRect()) ?? {};
    o.y = (t.clientY <= e ? e : t.clientY) + "px", localStorage.setItem(i, JSON.stringify(o));
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
    robotOffset: o,
    xAdsorptionDir: a,
    dragover: f
  };
}
export {
  x as useDragRobotPosition
};
