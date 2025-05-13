import z from "../image/primary.png.js";
import $ from "../image/success.png.js";
import L from "../image/warning.png.js";
import A from "../image/danger.png.js";
import D from "../image/primary_label.png.js";
import F from "../image/success_label.png.js";
import H from "../image/warning_label.png.js";
import R from "../image/danger_label.png.js";
import U from "../image/icon_primary.png.js";
import V from "../image/icon_success.png.js";
import { JulianDate as X, CallbackProperty as Y } from "@cesium/engine";
const u = {
  primary: z,
  success: $,
  warning: L,
  danger: A,
  primary_label: D,
  success_label: F,
  warning_label: H,
  danger_label: R,
  icon_primary: U,
  icon_success: V
}, r = {
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
}, y = (e) => {
  var g, n, w, h, p, S, x, b, I, T, _, C, v, O, E;
  const { info: t, valueKey: m, canvas: l, ctx: c, text: a } = e, o = `
    ${((g = t == null ? void 0 : t.fontStyle) == null ? void 0 : g.weight) ?? ((n = r == null ? void 0 : r.fontStyle) == null ? void 0 : n.weight)} 
    ${((w = t == null ? void 0 : t.fontStyle) == null ? void 0 : w.size) ?? ((h = r == null ? void 0 : r.fontStyle) == null ? void 0 : h.size)}
    ${((p = t == null ? void 0 : t.fontStyle) == null ? void 0 : p.family) ?? ((S = r == null ? void 0 : r.fontStyle) == null ? void 0 : S.family)}`, d = `
    ${((x = t == null ? void 0 : t.textStyle) == null ? void 0 : x.weight) ?? ((b = r == null ? void 0 : r.textStyle) == null ? void 0 : b.weight)} 
    ${((I = t == null ? void 0 : t.textStyle) == null ? void 0 : I.size) ?? ((T = r == null ? void 0 : r.textStyle) == null ? void 0 : T.size)}
    ${((_ = t == null ? void 0 : t.textStyle) == null ? void 0 : _.family) ?? ((C = r == null ? void 0 : r.textStyle) == null ? void 0 : C.family)}`;
  c.font = m ? o : d, c.fillStyle = (m ? (v = t == null ? void 0 : t.fontStyle) == null ? void 0 : v.color : (O = t == null ? void 0 : t.textStyle) == null ? void 0 : O.color) ?? ((E = r.fontStyle) == null ? void 0 : E.color), c.textBaseline = "middle", c.textAlign = "left";
  const i = m ? (t == null ? void 0 : t.textOffsetX) ?? 13 : 46, s = (t == null ? void 0 : t.textOffsetY) ?? l.height / 2 - (m ? 10 : 6);
  c.fillText(a, i, s);
}, P = (e) => {
  e.save(), e.beginPath(), e.moveTo(0, 0), e.lineTo(28, 0), e.quadraticCurveTo(30, 20, 20, 26), e.lineTo(0, 56), e.closePath(), e.globalCompositeOperation = "destination-out", e.fillStyle = "rgba(0,0,0,1)", e.fill(), e.restore();
}, ee = (e, t, m) => new Promise((l, c) => {
  const a = document.createElement("canvas"), o = a.getContext("2d");
  if (!o) {
    c(new Error("Could not get canvas context"));
    return;
  }
  a.width = (e == null ? void 0 : e.width) ?? r.width, a.height = (e == null ? void 0 : e.height) ?? r.height;
  const { iconType: d, textIconType: i } = e, s = {
    icon: d ? u[d] : u.primary,
    textIcon: i ? u[i] : u[(m ? "success" : "primary") + "_label"]
  }, g = s == null ? void 0 : s[t ? "icon" : "textIcon"], n = (e == null ? void 0 : e[t ?? "text"]) || "", w = () => {
    o.setTransform(1, 0, 0, 1, 0, 0), o.clearRect(0, 0, a.width, a.height);
  };
  if (y({ info: e, valueKey: t, canvas: a, ctx: o, text: n }), g) {
    const h = new Image();
    h.crossOrigin = "Anonymous", h.src = g, h.onload = () => {
      y({ info: e, valueKey: t, canvas: a, ctx: o, text: n }), a.width = t ? (e == null ? void 0 : e.width) ?? h.width : o.measureText(n).width + 80, a.height = (e == null ? void 0 : e.height) ?? h.height, o.drawImage(h, 0, 0, a.width, a.height), t || P(o), y({ info: e, valueKey: t, canvas: a, ctx: o, text: n }), l({ canvas: a, cleanup: w });
    }, h.onerror = () => {
      c(new Error("Failed to load image"));
    };
  } else
    y({ info: e, valueKey: t, canvas: a, ctx: o, text: n }), l({ canvas: a, cleanup: w });
}), k = (e) => new Promise((t, m) => {
  const l = new Image();
  l.crossOrigin = "Anonymous", l.onload = () => t(l), l.onerror = m, l.src = e;
});
async function q(e) {
  return new Promise((t, m) => {
    const l = new Image();
    l.crossOrigin = "anonymous", l.src = e, l.onload = () => {
      try {
        const c = document.createElement("canvas"), a = c.getContext("2d");
        if (!a) return m(new Error("无法获取2D上下文"));
        c.width = l.naturalWidth, c.height = l.naturalHeight, a.drawImage(l, 0, 0, c.width, c.height), t(c);
      } catch (c) {
        m(new Error("画布创建失败", { cause: c }));
      }
    };
  });
}
async function te(e, t, m) {
  var l, c;
  if (t != null && t.billboard && t.properties) {
    const a = X.now(), o = (l = t.properties) == null ? void 0 : l.getValue(a).changeState, d = o ? (e == null ? void 0 : e.iconType) ?? "primary" : (e == null ? void 0 : e.changeIconType) ?? "success", i = o ? (e == null ? void 0 : e.textIconType) ?? "primary_label" : (e == null ? void 0 : e.changeTextIconType) ?? "success_label";
    let s = (c = t.billboard.image) == null ? void 0 : c.getValue();
    s = typeof s == "string" ? await q(s) : s;
    const g = s.getContext("2d"), n = await k(u[m ? d : i]);
    g == null || g.clearRect(0, 0, s.width, s.height), g.drawImage(n, 0, 0, s.width, s.height), m || P(g), y({ info: e, valueKey: m, canvas: s, ctx: g, text: m ? e.value : e.text }), t.billboard.image = s.toDataURL("image/png"), t.properties.changeState = new Y(() => !o, !1);
  }
}
export {
  ee as createInfoCanvas,
  te as updateViewerEntityInfo
};
