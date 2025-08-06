import $ from "../image/primary.png.js";
import L from "../image/success.png.js";
import M from "../image/warning.png.js";
import z from "../image/danger.png.js";
import B from "../image/primary_label.png.js";
import D from "../image/success_label.png.js";
import F from "../image/warning_label.png.js";
import R from "../image/danger_label.png.js";
import V from "../image/icon_primary.png.js";
import k from "../image/icon_success.png.js";
import { JulianDate as N, CallbackProperty as H, Cartesian2 as p, VerticalOrigin as C, Cartesian3 as U } from "@cesium/engine";
const x = {
  primary: $,
  success: L,
  warning: M,
  danger: z,
  primary_label: B,
  success_label: D,
  warning_label: F,
  danger_label: R,
  icon_primary: V,
  icon_success: k
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
  var h, m, w, g, S, u, y, I, T, O, E, f, P, v, _;
  const { info: t, valueKey: l, canvas: c, ctx: r, text: a } = e, n = `
    ${((h = t == null ? void 0 : t.fontStyle) == null ? void 0 : h.weight) ?? ((m = s == null ? void 0 : s.fontStyle) == null ? void 0 : m.weight)} 
    ${((w = t == null ? void 0 : t.fontStyle) == null ? void 0 : w.size) ?? ((g = s == null ? void 0 : s.fontStyle) == null ? void 0 : g.size)}
    ${((S = t == null ? void 0 : t.fontStyle) == null ? void 0 : S.family) ?? ((u = s == null ? void 0 : s.fontStyle) == null ? void 0 : u.family)}`, d = `
    ${((y = t == null ? void 0 : t.textStyle) == null ? void 0 : y.weight) ?? ((I = s == null ? void 0 : s.textStyle) == null ? void 0 : I.weight)} 
    ${((T = t == null ? void 0 : t.textStyle) == null ? void 0 : T.size) ?? ((O = s == null ? void 0 : s.textStyle) == null ? void 0 : O.size)}
    ${((E = t == null ? void 0 : t.textStyle) == null ? void 0 : E.family) ?? ((f = s == null ? void 0 : s.textStyle) == null ? void 0 : f.family)}`;
  r.font = l ? n : d, r.fillStyle = (l ? (P = t == null ? void 0 : t.fontStyle) == null ? void 0 : P.color : (v = t == null ? void 0 : t.textStyle) == null ? void 0 : v.color) ?? ((_ = s.fontStyle) == null ? void 0 : _.color), r.textBaseline = "middle", r.textAlign = "left";
  const o = l ? (t == null ? void 0 : t.textOffsetX) ?? 13 : 46, i = (t == null ? void 0 : t.textOffsetY) ?? c.height / 2 - (l ? 10 : 0);
  r.fillText(a, o, i);
}, A = (e) => {
  e.save(), e.beginPath(), e.moveTo(0, 0), e.lineTo(22, 0), e.quadraticCurveTo(30, 15, 20, 26), e.lineTo(0, 45), e.closePath(), e.globalCompositeOperation = "destination-out", e.fillStyle = "rgba(0,0,0,1)", e.fill(), e.restore();
}, re = (e, t, l) => new Promise((c, r) => {
  const a = document.createElement("canvas"), n = a.getContext("2d");
  if (!n) {
    r(new Error("Could not get canvas context"));
    return;
  }
  a.width = (e == null ? void 0 : e.width) ?? s.width, a.height = (e == null ? void 0 : e.height) ?? s.height;
  const { iconType: d, textIconType: o } = e, i = {
    icon: d ? x[d] : x.primary,
    textIcon: o ? x[o] : x[(l ? "success" : "primary") + "_label"]
  }, h = i == null ? void 0 : i[t ? "icon" : "textIcon"], m = (e == null ? void 0 : e[t ?? "text"]) || "", w = () => {
    n.setTransform(1, 0, 0, 1, 0, 0), n.clearRect(0, 0, a.width, a.height);
  };
  if (b({
    info: e,
    valueKey: t,
    canvas: a,
    ctx: n,
    text: m
  }), h) {
    const g = new Image();
    g.crossOrigin = "Anonymous", g.src = h, g.onload = () => {
      b({
        info: e,
        valueKey: t,
        canvas: a,
        ctx: n,
        text: m
      }), a.width = t ? (e == null ? void 0 : e.width) ?? g.width : n.measureText(m).width + 80, a.height = (e == null ? void 0 : e.height) ?? g.height, n.drawImage(g, 0, 0, g.width, g.height, 0, 0, a.width, a.height), t || A(n), b({
        info: e,
        valueKey: t,
        canvas: a,
        ctx: n,
        text: m
      }), c({ canvas: a, cleanup: w });
    }, g.onerror = () => {
      r(new Error("Failed to load image"));
    };
  } else
    b({
      info: e,
      valueKey: t,
      canvas: a,
      ctx: n,
      text: m
    }), c({ canvas: a, cleanup: w });
}), Y = (e) => new Promise((t, l) => {
  const c = new Image();
  c.crossOrigin = "Anonymous", c.onload = () => t(c), c.onerror = l, c.src = e;
});
async function X(e) {
  return new Promise((t, l) => {
    const c = new Image();
    c.crossOrigin = "anonymous", c.src = e, c.onload = () => {
      try {
        const r = document.createElement("canvas"), a = r.getContext("2d");
        if (!a) return l(new Error("无法获取2D上下文"));
        r.width = c.naturalWidth, r.height = c.naturalHeight, a.drawImage(c, 0, 0, r.width, r.height), t(r);
      } catch (r) {
        l(new Error("画布创建失败", { cause: r }));
      }
    };
  });
}
function le(e, t, l = {}, c = {}) {
  const r = document.createElement("canvas"), a = r.getContext("2d");
  if (!a) return r;
  if (r.width = 50, r.height = 50, l && Object.keys(l).length > 1 && (a.fillStyle = "rgba(40, 40, 40, 0.7)", a.beginPath(), a.roundRect(0, 0, r.width, r.height, 15), a.fill()), l && Object.keys(l).length > 1) {
    const n = Object.keys(l), d = Math.PI * 2 / n.length;
    n.forEach((o, i) => {
      const h = i * d, m = 15, w = r.width / 2 + Math.cos(h) * m, g = r.height / 2 + Math.sin(h) * m;
      a.fillStyle = c[o] || "#1E9EFA", a.beginPath(), a.arc(w, g, 8, 0, Math.PI * 2), a.fill(), a.fillStyle = "white", a.font = "bold 10px Arial", a.textAlign = "center", a.textBaseline = "middle", a.fillText(l[o].toString(), w, g);
    }), a.fillStyle = "white", a.font = "bold 14px Arial", a.fillText(e.toString(), r.width / 2, r.height / 2);
  } else
    a.fillStyle = c[t] || "#1E9EFA", a.beginPath(), a.arc(r.width / 2, r.height / 2, 20, 0, Math.PI * 2), a.fill(), a.fillStyle = "white", a.font = "bold 16px Arial", a.textAlign = "center", a.textBaseline = "middle", a.fillText(e.toString(), r.width / 2, r.height / 2);
  return r;
}
async function ce(e, t, l) {
  var c, r;
  if (t != null && t.billboard && t.properties) {
    const a = N.now(), n = (c = t.properties) == null ? void 0 : c.getValue(a).changeState, d = n ? (e == null ? void 0 : e.iconType) ?? "primary" : (e == null ? void 0 : e.changeIconType) ?? "success", o = n ? (e == null ? void 0 : e.textIconType) ?? "primary_label" : (e == null ? void 0 : e.changeTextIconType) ?? "success_label";
    let i = (r = t.billboard.image) == null ? void 0 : r.getValue();
    i = typeof i == "string" ? await X(i) : i;
    const h = i.getContext("2d"), m = await Y(x[l ? d : o]);
    h == null || h.clearRect(0, 0, i.width, i.height), h.drawImage(m, 0, 0, i.width, i.height), l || A(h), b({
      info: e,
      valueKey: l,
      canvas: i,
      ctx: h,
      text: l ? e.value : e.text
    }), t.billboard.image = i.toDataURL("image/png"), t.properties.changeState = new H(() => !n, !1);
  }
}
const se = async (e, t, l) => {
  const c = {
    value: e == null ? void 0 : e.value,
    text: e == null ? void 0 : e.text,
    changeState: !1,
    type: (e == null ? void 0 : e.iconType) ?? "primary",
    position: [e.lng, e.lat],
    name: l ? e.name : `${e.name}Label`
  }, r = {
    image: t,
    pixelOffset: l ? new p(0, 0) : new p(t.width / 2, t.height / 2 - 3),
    disableDepthTestDistance: l ? void 0 : Number.POSITIVE_INFINITY,
    verticalOrigin: l ? C.CENTER : C.BOTTOM
  };
  return {
    position: U.fromDegrees(e.lng, e.lat, 50),
    name: l ? e.name : `${e.name}Label`,
    properties: c,
    billboard: r
  };
}, ne = {
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
  ne as heatmapGradient,
  ce as updateViewerEntityInfo
};
