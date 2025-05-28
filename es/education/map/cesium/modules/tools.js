import P from "../image/primary.png.js";
import k from "../image/success.png.js";
import F from "../image/warning.png.js";
import z from "../image/danger.png.js";
import $ from "../image/primary_label.png.js";
import L from "../image/success_label.png.js";
import B from "../image/warning_label.png.js";
import D from "../image/danger_label.png.js";
import H from "../image/icon_primary.png.js";
import R from "../image/icon_success.png.js";
import { JulianDate as U, CallbackProperty as V } from "@cesium/engine";
const u = {
  primary: P,
  success: k,
  warning: F,
  danger: z,
  primary_label: $,
  success_label: L,
  warning_label: B,
  danger_label: D,
  icon_primary: H,
  icon_success: R
}, s = {
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
  var m, h, w, g, x, S, b, p, I, T, C, E, v, _, A;
  const { info: t, valueKey: c, canvas: a, ctx: l, text: r } = e, n = `
    ${((m = t == null ? void 0 : t.fontStyle) == null ? void 0 : m.weight) ?? ((h = s == null ? void 0 : s.fontStyle) == null ? void 0 : h.weight)} 
    ${((w = t == null ? void 0 : t.fontStyle) == null ? void 0 : w.size) ?? ((g = s == null ? void 0 : s.fontStyle) == null ? void 0 : g.size)}
    ${((x = t == null ? void 0 : t.fontStyle) == null ? void 0 : x.family) ?? ((S = s == null ? void 0 : s.fontStyle) == null ? void 0 : S.family)}`, i = `
    ${((b = t == null ? void 0 : t.textStyle) == null ? void 0 : b.weight) ?? ((p = s == null ? void 0 : s.textStyle) == null ? void 0 : p.weight)} 
    ${((I = t == null ? void 0 : t.textStyle) == null ? void 0 : I.size) ?? ((T = s == null ? void 0 : s.textStyle) == null ? void 0 : T.size)}
    ${((C = t == null ? void 0 : t.textStyle) == null ? void 0 : C.family) ?? ((E = s == null ? void 0 : s.textStyle) == null ? void 0 : E.family)}`;
  l.font = c ? n : i, l.fillStyle = (c ? (v = t == null ? void 0 : t.fontStyle) == null ? void 0 : v.color : (_ = t == null ? void 0 : t.textStyle) == null ? void 0 : _.color) ?? ((A = s.fontStyle) == null ? void 0 : A.color), l.textBaseline = "middle", l.textAlign = "left";
  const d = c ? (t == null ? void 0 : t.textOffsetX) ?? 13 : 46, o = (t == null ? void 0 : t.textOffsetY) ?? a.height / 2 - (c ? 10 : 6);
  l.fillText(r, d, o);
}, O = (e) => {
  e.save(), e.beginPath(), e.moveTo(0, 0), e.lineTo(28, 0), e.quadraticCurveTo(30, 20, 20, 26), e.lineTo(0, 56), e.closePath(), e.globalCompositeOperation = "destination-out", e.fillStyle = "rgba(0,0,0,1)", e.fill(), e.restore();
}, ee = (e, t, c) => new Promise((a, l) => {
  const r = document.createElement("canvas"), n = r.getContext("2d");
  if (!n) {
    l(new Error("Could not get canvas context"));
    return;
  }
  r.width = (e == null ? void 0 : e.width) ?? s.width, r.height = (e == null ? void 0 : e.height) ?? s.height;
  const { iconType: i, textIconType: d } = e, o = {
    icon: i ? u[i] : u.primary,
    textIcon: d ? u[d] : u[(c ? "success" : "primary") + "_label"]
  }, m = o == null ? void 0 : o[t ? "icon" : "textIcon"], h = (e == null ? void 0 : e[t ?? "text"]) || "", w = () => {
    n.setTransform(1, 0, 0, 1, 0, 0), n.clearRect(0, 0, r.width, r.height);
  };
  if (y({ info: e, valueKey: t, canvas: r, ctx: n, text: h }), m) {
    const g = new Image();
    g.crossOrigin = "Anonymous", g.src = m, g.onload = () => {
      y({ info: e, valueKey: t, canvas: r, ctx: n, text: h }), r.width = t ? (e == null ? void 0 : e.width) ?? g.width : n.measureText(h).width + 80, r.height = (e == null ? void 0 : e.height) ?? g.height, n.drawImage(g, 0, 0, g.width, g.height, 0, 0, r.width, r.height), t || O(n), y({ info: e, valueKey: t, canvas: r, ctx: n, text: h }), a({ canvas: r, cleanup: w });
    }, g.onerror = () => {
      l(new Error("Failed to load image"));
    };
  } else
    y({ info: e, valueKey: t, canvas: r, ctx: n, text: h }), a({ canvas: r, cleanup: w });
}), M = (e) => new Promise((t, c) => {
  const a = new Image();
  a.crossOrigin = "Anonymous", a.onload = () => t(a), a.onerror = c, a.src = e;
});
async function W(e) {
  return new Promise((t, c) => {
    const a = new Image();
    a.crossOrigin = "anonymous", a.src = e, a.onload = () => {
      try {
        const l = document.createElement("canvas"), r = l.getContext("2d");
        if (!r) return c(new Error("无法获取2D上下文"));
        l.width = a.naturalWidth, l.height = a.naturalHeight, r.drawImage(a, 0, 0, l.width, l.height), t(l);
      } catch (l) {
        c(new Error("画布创建失败", { cause: l }));
      }
    };
  });
}
const te = (e, t) => {
  const c = document.createElement("canvas");
  c.width = 80, c.height = 80;
  const a = c.getContext("2d");
  if (!a) return c;
  let l = "#1E9EFA", r = "#167bca";
  switch (t) {
    case "primary":
      l = "#1E9EFA", r = "#167bca";
      break;
    case "success":
      l = "#67C23A", r = "#529a2e";
      break;
    case "warning":
      l = "#E6A23C", r = "#b87d2f";
      break;
    case "danger":
      l = "#E41F1F", r = "#C01A1A";
      break;
  }
  return a.beginPath(), a.arc(40, 40, 35, 0, Math.PI * 2, !0), a.fillStyle = l, a.fill(), a.lineWidth = 4, a.strokeStyle = r, a.stroke(), a.fillStyle = "white", a.font = "bold 32px Arial", a.textAlign = "center", a.textBaseline = "middle", a.fillText(e.toString(), 40, 40), c;
};
async function ae(e, t, c) {
  var a, l;
  if (t != null && t.billboard && t.properties) {
    const r = U.now(), n = (a = t.properties) == null ? void 0 : a.getValue(r).changeState, i = n ? (e == null ? void 0 : e.iconType) ?? "primary" : (e == null ? void 0 : e.changeIconType) ?? "success", d = n ? (e == null ? void 0 : e.textIconType) ?? "primary_label" : (e == null ? void 0 : e.changeTextIconType) ?? "success_label";
    let o = (l = t.billboard.image) == null ? void 0 : l.getValue();
    o = typeof o == "string" ? await W(o) : o;
    const m = o.getContext("2d"), h = await M(u[c ? i : d]);
    m == null || m.clearRect(0, 0, o.width, o.height), m.drawImage(h, 0, 0, o.width, o.height), c || O(m), y({ info: e, valueKey: c, canvas: o, ctx: m, text: c ? e.value : e.text }), t.billboard.image = o.toDataURL("image/png"), t.properties.changeState = new V(() => !n, !1);
  }
}
export {
  te as createClusterBillboard,
  ee as createInfoCanvas,
  ae as updateViewerEntityInfo
};
