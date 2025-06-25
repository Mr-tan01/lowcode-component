import k from "../image/primary.png.js";
import $ from "../image/success.png.js";
import L from "../image/warning.png.js";
import z from "../image/danger.png.js";
import D from "../image/primary_label.png.js";
import B from "../image/success_label.png.js";
import V from "../image/warning_label.png.js";
import N from "../image/danger_label.png.js";
import R from "../image/icon_primary.png.js";
import H from "../image/icon_success.png.js";
import { JulianDate as M, CallbackProperty as U, Cartesian2 as A, VerticalOrigin as P, Cartesian3 as Y } from "@cesium/engine";
const u = {
  primary: k,
  success: $,
  warning: L,
  danger: z,
  primary_label: D,
  success_label: B,
  warning_label: V,
  danger_label: N,
  icon_primary: R,
  icon_success: H
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
}, b = (e) => {
  var g, h, w, o, y, x, S, I, T, C, E, p, O, v, _;
  const { info: t, valueKey: r, canvas: a, ctx: l, text: c } = e, n = `
    ${((g = t == null ? void 0 : t.fontStyle) == null ? void 0 : g.weight) ?? ((h = s == null ? void 0 : s.fontStyle) == null ? void 0 : h.weight)} 
    ${((w = t == null ? void 0 : t.fontStyle) == null ? void 0 : w.size) ?? ((o = s == null ? void 0 : s.fontStyle) == null ? void 0 : o.size)}
    ${((y = t == null ? void 0 : t.fontStyle) == null ? void 0 : y.family) ?? ((x = s == null ? void 0 : s.fontStyle) == null ? void 0 : x.family)}`, i = `
    ${((S = t == null ? void 0 : t.textStyle) == null ? void 0 : S.weight) ?? ((I = s == null ? void 0 : s.textStyle) == null ? void 0 : I.weight)} 
    ${((T = t == null ? void 0 : t.textStyle) == null ? void 0 : T.size) ?? ((C = s == null ? void 0 : s.textStyle) == null ? void 0 : C.size)}
    ${((E = t == null ? void 0 : t.textStyle) == null ? void 0 : E.family) ?? ((p = s == null ? void 0 : s.textStyle) == null ? void 0 : p.family)}`;
  l.font = r ? n : i, l.fillStyle = (r ? (O = t == null ? void 0 : t.fontStyle) == null ? void 0 : O.color : (v = t == null ? void 0 : t.textStyle) == null ? void 0 : v.color) ?? ((_ = s.fontStyle) == null ? void 0 : _.color), l.textBaseline = "middle", l.textAlign = "left";
  const d = r ? (t == null ? void 0 : t.textOffsetX) ?? 13 : 46, m = (t == null ? void 0 : t.textOffsetY) ?? a.height / 2 - (r ? 10 : 6);
  l.fillText(c, d, m);
}, F = (e) => {
  e.save(), e.beginPath(), e.moveTo(0, 0), e.lineTo(28, 0), e.quadraticCurveTo(30, 20, 20, 26), e.lineTo(0, 56), e.closePath(), e.globalCompositeOperation = "destination-out", e.fillStyle = "rgba(0,0,0,1)", e.fill(), e.restore();
}, re = (e, t, r) => new Promise((a, l) => {
  const c = document.createElement("canvas"), n = c.getContext("2d");
  if (!n) {
    l(new Error("Could not get canvas context"));
    return;
  }
  c.width = (e == null ? void 0 : e.width) ?? s.width, c.height = (e == null ? void 0 : e.height) ?? s.height;
  const { iconType: i, textIconType: d } = e, m = {
    icon: i ? u[i] : u.primary,
    textIcon: d ? u[d] : u[(r ? "success" : "primary") + "_label"]
  }, g = m == null ? void 0 : m[t ? "icon" : "textIcon"], h = (e == null ? void 0 : e[t ?? "text"]) || "", w = () => {
    n.setTransform(1, 0, 0, 1, 0, 0), n.clearRect(0, 0, c.width, c.height);
  };
  if (b({ info: e, valueKey: t, canvas: c, ctx: n, text: h }), g) {
    const o = new Image();
    o.crossOrigin = "Anonymous", o.src = g, o.onload = () => {
      b({ info: e, valueKey: t, canvas: c, ctx: n, text: h }), c.width = t ? (e == null ? void 0 : e.width) ?? o.width : n.measureText(h).width + 80, c.height = (e == null ? void 0 : e.height) ?? o.height, n.drawImage(o, 0, 0, o.width, o.height, 0, 0, c.width, c.height), t || F(n), b({ info: e, valueKey: t, canvas: c, ctx: n, text: h }), a({ canvas: c, cleanup: w });
    }, o.onerror = () => {
      l(new Error("Failed to load image"));
    };
  } else
    b({ info: e, valueKey: t, canvas: c, ctx: n, text: h }), a({ canvas: c, cleanup: w });
}), f = (e) => new Promise((t, r) => {
  const a = new Image();
  a.crossOrigin = "Anonymous", a.onload = () => t(a), a.onerror = r, a.src = e;
});
async function W(e) {
  return new Promise((t, r) => {
    const a = new Image();
    a.crossOrigin = "anonymous", a.src = e, a.onload = () => {
      try {
        const l = document.createElement("canvas"), c = l.getContext("2d");
        if (!c) return r(new Error("无法获取2D上下文"));
        l.width = a.naturalWidth, l.height = a.naturalHeight, c.drawImage(a, 0, 0, l.width, l.height), t(l);
      } catch (l) {
        r(new Error("画布创建失败", { cause: l }));
      }
    };
  });
}
const le = (e, t) => {
  const r = document.createElement("canvas");
  r.width = 80, r.height = 80;
  const a = r.getContext("2d");
  if (!a) return r;
  let l = "#1E9EFA", c = "#167bca";
  switch (t) {
    case "primary":
      l = "#1E9EFA", c = "#167bca";
      break;
    case "success":
      l = "#67C23A", c = "#529a2e";
      break;
    case "warning":
      l = "#E6A23C", c = "#b87d2f";
      break;
    case "danger":
      l = "#E41F1F", c = "#C01A1A";
      break;
  }
  return a.beginPath(), a.arc(40, 40, 35, 0, Math.PI * 2, !0), a.fillStyle = l, a.fill(), a.lineWidth = 4, a.strokeStyle = c, a.stroke(), a.fillStyle = "white", a.font = "bold 32px Arial", a.textAlign = "center", a.textBaseline = "middle", a.fillText(e.toString(), 40, 40), r;
};
async function ce(e, t, r) {
  var a, l;
  if (t != null && t.billboard && t.properties) {
    const c = M.now(), n = (a = t.properties) == null ? void 0 : a.getValue(c).changeState, i = n ? (e == null ? void 0 : e.iconType) ?? "primary" : (e == null ? void 0 : e.changeIconType) ?? "success", d = n ? (e == null ? void 0 : e.textIconType) ?? "primary_label" : (e == null ? void 0 : e.changeTextIconType) ?? "success_label";
    let m = (l = t.billboard.image) == null ? void 0 : l.getValue();
    m = typeof m == "string" ? await W(m) : m;
    const g = m.getContext("2d"), h = await f(u[r ? i : d]);
    g == null || g.clearRect(0, 0, m.width, m.height), g.drawImage(h, 0, 0, m.width, m.height), r || F(g), b({ info: e, valueKey: r, canvas: m, ctx: g, text: r ? e.value : e.text }), t.billboard.image = m.toDataURL("image/png"), t.properties.changeState = new U(() => !n, !1);
  }
}
const se = async (e, t, r) => {
  const a = {
    value: e == null ? void 0 : e.value,
    text: e == null ? void 0 : e.text,
    changeState: !1,
    type: (e == null ? void 0 : e.iconType) ?? "primary",
    position: [e.lng, e.lat],
    name: r ? e.name : `${e.name}Label`
  }, l = {
    image: t,
    pixelOffset: r ? new A(0, 0) : new A(t.width / 2.1, t.height / 2),
    disableDepthTestDistance: r ? void 0 : Number.POSITIVE_INFINITY,
    verticalOrigin: r ? P.CENTER : P.BOTTOM
  };
  return {
    position: Y.fromDegrees(e.lng, e.lat, 50),
    name: r ? e.name : `${e.name}Label`,
    properties: a,
    billboard: l
  };
}, me = {
  "0.00": "#0c29ce",
  "0.25": "#09d3d0",
  "0.50": "#91fa68",
  "0.75": "#fca22c",
  "1.00": "#fb0f0f"
};
export {
  le as createClusterBillboard,
  se as createEntityConfig,
  re as createInfoCanvas,
  me as heatmapGradient,
  ce as updateViewerEntityInfo
};
