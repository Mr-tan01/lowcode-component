import F from "../image/primary.png.js";
import k from "../image/success.png.js";
import $ from "../image/warning.png.js";
import L from "../image/danger.png.js";
import z from "../image/primary_label.png.js";
import D from "../image/success_label.png.js";
import B from "../image/warning_label.png.js";
import V from "../image/danger_label.png.js";
import H from "../image/icon_primary.png.js";
import N from "../image/icon_success.png.js";
import { JulianDate as R, CallbackProperty as U, Cartesian2 as A, Cartesian3 as Y } from "@cesium/engine";
const u = {
  primary: F,
  success: k,
  warning: $,
  danger: L,
  primary_label: z,
  success_label: D,
  warning_label: B,
  danger_label: V,
  icon_primary: H,
  icon_success: N
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
  var g, h, w, o, b, x, S, I, T, C, p, E, v, _, O;
  const { info: t, valueKey: c, canvas: a, ctx: r, text: l } = e, n = `
    ${((g = t == null ? void 0 : t.fontStyle) == null ? void 0 : g.weight) ?? ((h = s == null ? void 0 : s.fontStyle) == null ? void 0 : h.weight)} 
    ${((w = t == null ? void 0 : t.fontStyle) == null ? void 0 : w.size) ?? ((o = s == null ? void 0 : s.fontStyle) == null ? void 0 : o.size)}
    ${((b = t == null ? void 0 : t.fontStyle) == null ? void 0 : b.family) ?? ((x = s == null ? void 0 : s.fontStyle) == null ? void 0 : x.family)}`, i = `
    ${((S = t == null ? void 0 : t.textStyle) == null ? void 0 : S.weight) ?? ((I = s == null ? void 0 : s.textStyle) == null ? void 0 : I.weight)} 
    ${((T = t == null ? void 0 : t.textStyle) == null ? void 0 : T.size) ?? ((C = s == null ? void 0 : s.textStyle) == null ? void 0 : C.size)}
    ${((p = t == null ? void 0 : t.textStyle) == null ? void 0 : p.family) ?? ((E = s == null ? void 0 : s.textStyle) == null ? void 0 : E.family)}`;
  r.font = c ? n : i, r.fillStyle = (c ? (v = t == null ? void 0 : t.fontStyle) == null ? void 0 : v.color : (_ = t == null ? void 0 : t.textStyle) == null ? void 0 : _.color) ?? ((O = s.fontStyle) == null ? void 0 : O.color), r.textBaseline = "middle", r.textAlign = "left";
  const d = c ? (t == null ? void 0 : t.textOffsetX) ?? 13 : 46, m = (t == null ? void 0 : t.textOffsetY) ?? a.height / 2 - (c ? 10 : 6);
  r.fillText(l, d, m);
}, P = (e) => {
  e.save(), e.beginPath(), e.moveTo(0, 0), e.lineTo(28, 0), e.quadraticCurveTo(30, 20, 20, 26), e.lineTo(0, 56), e.closePath(), e.globalCompositeOperation = "destination-out", e.fillStyle = "rgba(0,0,0,1)", e.fill(), e.restore();
}, ae = (e, t, c) => new Promise((a, r) => {
  const l = document.createElement("canvas"), n = l.getContext("2d");
  if (!n) {
    r(new Error("Could not get canvas context"));
    return;
  }
  l.width = (e == null ? void 0 : e.width) ?? s.width, l.height = (e == null ? void 0 : e.height) ?? s.height;
  const { iconType: i, textIconType: d } = e, m = {
    icon: i ? u[i] : u.primary,
    textIcon: d ? u[d] : u[(c ? "success" : "primary") + "_label"]
  }, g = m == null ? void 0 : m[t ? "icon" : "textIcon"], h = (e == null ? void 0 : e[t ?? "text"]) || "", w = () => {
    n.setTransform(1, 0, 0, 1, 0, 0), n.clearRect(0, 0, l.width, l.height);
  };
  if (y({ info: e, valueKey: t, canvas: l, ctx: n, text: h }), g) {
    const o = new Image();
    o.crossOrigin = "Anonymous", o.src = g, o.onload = () => {
      y({ info: e, valueKey: t, canvas: l, ctx: n, text: h }), l.width = t ? (e == null ? void 0 : e.width) ?? o.width : n.measureText(h).width + 80, l.height = (e == null ? void 0 : e.height) ?? o.height, n.drawImage(o, 0, 0, o.width, o.height, 0, 0, l.width, l.height), t || P(n), y({ info: e, valueKey: t, canvas: l, ctx: n, text: h }), a({ canvas: l, cleanup: w });
    }, o.onerror = () => {
      r(new Error("Failed to load image"));
    };
  } else
    y({ info: e, valueKey: t, canvas: l, ctx: n, text: h }), a({ canvas: l, cleanup: w });
}), M = (e) => new Promise((t, c) => {
  const a = new Image();
  a.crossOrigin = "Anonymous", a.onload = () => t(a), a.onerror = c, a.src = e;
});
async function W(e) {
  return new Promise((t, c) => {
    const a = new Image();
    a.crossOrigin = "anonymous", a.src = e, a.onload = () => {
      try {
        const r = document.createElement("canvas"), l = r.getContext("2d");
        if (!l) return c(new Error("无法获取2D上下文"));
        r.width = a.naturalWidth, r.height = a.naturalHeight, l.drawImage(a, 0, 0, r.width, r.height), t(r);
      } catch (r) {
        c(new Error("画布创建失败", { cause: r }));
      }
    };
  });
}
const re = (e, t) => {
  const c = document.createElement("canvas");
  c.width = 80, c.height = 80;
  const a = c.getContext("2d");
  if (!a) return c;
  let r = "#1E9EFA", l = "#167bca";
  switch (t) {
    case "primary":
      r = "#1E9EFA", l = "#167bca";
      break;
    case "success":
      r = "#67C23A", l = "#529a2e";
      break;
    case "warning":
      r = "#E6A23C", l = "#b87d2f";
      break;
    case "danger":
      r = "#E41F1F", l = "#C01A1A";
      break;
  }
  return a.beginPath(), a.arc(40, 40, 35, 0, Math.PI * 2, !0), a.fillStyle = r, a.fill(), a.lineWidth = 4, a.strokeStyle = l, a.stroke(), a.fillStyle = "white", a.font = "bold 32px Arial", a.textAlign = "center", a.textBaseline = "middle", a.fillText(e.toString(), 40, 40), c;
};
async function le(e, t, c) {
  var a, r;
  if (t != null && t.billboard && t.properties) {
    const l = R.now(), n = (a = t.properties) == null ? void 0 : a.getValue(l).changeState, i = n ? (e == null ? void 0 : e.iconType) ?? "primary" : (e == null ? void 0 : e.changeIconType) ?? "success", d = n ? (e == null ? void 0 : e.textIconType) ?? "primary_label" : (e == null ? void 0 : e.changeTextIconType) ?? "success_label";
    let m = (r = t.billboard.image) == null ? void 0 : r.getValue();
    m = typeof m == "string" ? await W(m) : m;
    const g = m.getContext("2d"), h = await M(u[c ? i : d]);
    g == null || g.clearRect(0, 0, m.width, m.height), g.drawImage(h, 0, 0, m.width, m.height), c || P(g), y({ info: e, valueKey: c, canvas: m, ctx: g, text: c ? e.value : e.text }), t.billboard.image = m.toDataURL("image/png"), t.properties.changeState = new U(() => !n, !1);
  }
}
const ce = async (e, t, c) => {
  const a = {
    value: e == null ? void 0 : e.value,
    text: e == null ? void 0 : e.text,
    changeState: !1,
    type: (e == null ? void 0 : e.iconType) ?? "primary",
    position: [e.lng, e.lat],
    name: c ? e.name : `${e.name}Label`
  }, r = {
    image: t,
    disableDepthTestDistance: Number.POSITIVE_INFINITY,
    pixelOffset: c ? new A(0, 0) : new A(t.width / 2.1, 4)
  };
  return {
    position: Y.fromDegrees(e.lng, e.lat),
    name: c ? e.name : `${e.name}Label`,
    properties: a,
    billboard: r
  };
};
export {
  re as createClusterBillboard,
  ce as createEntityConfig,
  ae as createInfoCanvas,
  le as updateViewerEntityInfo
};
