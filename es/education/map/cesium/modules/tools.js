import q from "../image/primary.png.js";
import D from "../image/success.png.js";
import G from "../image/warning.png.js";
import J from "../image/danger.png.js";
import P from "../image/primary_label.png.js";
import N from "../image/warning_label.png.js";
import Q from "../image/danger_label.png.js";
import X from "../image/icon_primary.png.js";
import Y from "../image/icon_success.png.js";
const U = {
  primary: q,
  success: D,
  warning: G,
  danger: J,
  primary_label: P,
  success_label: P,
  warning_label: N,
  danger_label: Q,
  icon_primary: X,
  icon_success: Y
}, V = {
  icon_success: Y,
  icon_primary: X
}, e = {
  width: 50,
  height: 75,
  fontStyle: {
    size: "24px",
    family: "HarmonyOS Sans SC",
    color: "#fff",
    weight: "bold"
  },
  textStyle: {
    size: "16px",
    family: "HarmonyOS_Sans_SC_Medium",
    color: "#fff",
    weight: "normal"
  }
}, rt = (t, a, B) => new Promise((h, g) => {
  var _, b, p, u, n, T, z, $, C, O, E, F;
  const r = document.createElement("canvas"), l = r.getContext("2d");
  if (!l) {
    g(new Error("Could not get canvas context"));
    return;
  }
  r.width = (t == null ? void 0 : t.width) ?? e.width, r.height = (t == null ? void 0 : t.height) ?? e.height;
  const { iconType: d, textIconType: y, changeIconType: x } = t, m = {
    icon: d ? U[d] : void 0,
    textIcon: y ? U[y] : void 0,
    changeIcon: x ? V[x] : void 0
  }, w = B ? m.changeIcon : (m == null ? void 0 : m[a ? "icon" : "textIcon"]) ?? (a ? m.icon : m.textIcon), S = (t == null ? void 0 : t[a ?? "text"]) || "", I = () => {
    l.setTransform(1, 0, 0, 1, 0, 0), l.clearRect(0, 0, r.width, r.height);
  }, M = `
    ${((_ = t == null ? void 0 : t.fontStyle) == null ? void 0 : _.weight) ?? ((b = e == null ? void 0 : e.fontStyle) == null ? void 0 : b.weight)} 
    ${((p = t == null ? void 0 : t.fontStyle) == null ? void 0 : p.size) ?? ((u = e == null ? void 0 : e.fontStyle) == null ? void 0 : u.size)}
    ${((n = t == null ? void 0 : t.fontStyle) == null ? void 0 : n.family) ?? ((T = e == null ? void 0 : e.fontStyle) == null ? void 0 : T.family)}`, R = `
    ${((z = t == null ? void 0 : t.textStyle) == null ? void 0 : z.weight) ?? (($ = e == null ? void 0 : e.textStyle) == null ? void 0 : $.weight)} 
    ${((C = t == null ? void 0 : t.textStyle) == null ? void 0 : C.size) ?? ((O = e == null ? void 0 : e.textStyle) == null ? void 0 : O.size)}
    ${((E = t == null ? void 0 : t.textStyle) == null ? void 0 : E.family) ?? ((F = e == null ? void 0 : e.textStyle) == null ? void 0 : F.family)}`, s = (c) => {
    var L, A, H;
    c.font = a ? M : R, c.fillStyle = (a ? (L = t == null ? void 0 : t.fontStyle) == null ? void 0 : L.color : (A = t == null ? void 0 : t.textStyle) == null ? void 0 : A.color) ?? ((H = e.fontStyle) == null ? void 0 : H.color), c.textBaseline = "middle", c.textAlign = "left";
    const k = a ? (t == null ? void 0 : t.textOffsetX) ?? 13 : 40, o = (t == null ? void 0 : t.textOffsetY) ?? r.height / 2 - (a ? 10 : 6);
    l.fillText(S, k, o);
  };
  if (w) {
    const c = new Image();
    c.crossOrigin = "Anonymous", c.onload = () => {
      s(l), r.width = a ? (t == null ? void 0 : t.width) ?? c.width : l.measureText(S).width + 80, r.height = (t == null ? void 0 : t.height) ?? c.height, l.drawImage(c, 0, 0, r.width, r.height), s(l), h({ canvas: r, cleanup: I });
    }, c.onerror = () => {
      g(new Error("Failed to load image"));
    }, c.src = w;
  } else
    s(l), h({ canvas: r, cleanup: I });
});
export {
  V as changeIconOption,
  rt as createInfoCanvas
};
