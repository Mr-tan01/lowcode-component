import z from "../image/primary.png.js";
import $ from "../image/success.png.js";
import L from "../image/warning.png.js";
import P from "../image/danger.png.js";
import A from "../image/primary_label.png.js";
import D from "../image/success_label.png.js";
import F from "../image/warning_label.png.js";
import H from "../image/danger_label.png.js";
import R from "../image/icon_primary.png.js";
import U from "../image/icon_success.png.js";
import { JulianDate as V, CallbackProperty as X } from "@cesium/engine";
const w = {
  primary: z,
  success: $,
  warning: L,
  danger: P,
  primary_label: A,
  success_label: D,
  warning_label: F,
  danger_label: H,
  icon_primary: R,
  icon_success: U
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
}, x = (e) => {
  var m, i, o, u, y, S, p, I, b, T, _, C, O, v, E;
  const { info: t, valueKey: s, canvas: c, ctx: a, text: l } = e, g = `
    ${((m = t == null ? void 0 : t.fontStyle) == null ? void 0 : m.weight) ?? ((i = r == null ? void 0 : r.fontStyle) == null ? void 0 : i.weight)} 
    ${((o = t == null ? void 0 : t.fontStyle) == null ? void 0 : o.size) ?? ((u = r == null ? void 0 : r.fontStyle) == null ? void 0 : u.size)}
    ${((y = t == null ? void 0 : t.fontStyle) == null ? void 0 : y.family) ?? ((S = r == null ? void 0 : r.fontStyle) == null ? void 0 : S.family)}`, d = `
    ${((p = t == null ? void 0 : t.textStyle) == null ? void 0 : p.weight) ?? ((I = r == null ? void 0 : r.textStyle) == null ? void 0 : I.weight)} 
    ${((b = t == null ? void 0 : t.textStyle) == null ? void 0 : b.size) ?? ((T = r == null ? void 0 : r.textStyle) == null ? void 0 : T.size)}
    ${((_ = t == null ? void 0 : t.textStyle) == null ? void 0 : _.family) ?? ((C = r == null ? void 0 : r.textStyle) == null ? void 0 : C.family)}`;
  a.font = s ? g : d, a.fillStyle = (s ? (O = t == null ? void 0 : t.fontStyle) == null ? void 0 : O.color : (v = t == null ? void 0 : t.textStyle) == null ? void 0 : v.color) ?? ((E = r.fontStyle) == null ? void 0 : E.color), a.textBaseline = "middle", a.textAlign = "left";
  const h = s ? (t == null ? void 0 : t.textOffsetX) ?? 13 : 40, n = (t == null ? void 0 : t.textOffsetY) ?? c.height / 2 - (s ? 10 : 6);
  a.fillText(l, h, n);
}, K = (e, t) => new Promise((s, c) => {
  const a = document.createElement("canvas"), l = a.getContext("2d");
  if (!l) {
    c(new Error("Could not get canvas context"));
    return;
  }
  a.width = (e == null ? void 0 : e.width) ?? r.width, a.height = (e == null ? void 0 : e.height) ?? r.height;
  const { iconType: g, textIconType: d } = e, h = {
    icon: g ? w[g] : w.primary,
    textIcon: d ? w[d] : w.success_label
  }, n = h == null ? void 0 : h[t ? "icon" : "textIcon"], m = (e == null ? void 0 : e[t ?? "text"]) || "", i = () => {
    l.setTransform(1, 0, 0, 1, 0, 0), l.clearRect(0, 0, a.width, a.height);
  };
  if (x({ info: e, valueKey: t, canvas: a, ctx: l, text: m }), n) {
    const o = new Image();
    o.crossOrigin = "Anonymous", o.onload = () => {
      x({ info: e, valueKey: t, canvas: a, ctx: l, text: m }), a.width = t ? (e == null ? void 0 : e.width) ?? o.width : l.measureText(m).width + 80, a.height = (e == null ? void 0 : e.height) ?? o.height, l.drawImage(o, 0, 0, a.width, a.height), x({ info: e, valueKey: t, canvas: a, ctx: l, text: m }), s({ canvas: a, cleanup: i });
    }, o.onerror = () => {
      c(new Error("Failed to load image"));
    }, o.src = n;
  } else
    x({ info: e, valueKey: t, canvas: a, ctx: l, text: m }), s({ canvas: a, cleanup: i });
}), Y = (e) => new Promise((t, s) => {
  const c = new Image();
  c.crossOrigin = "Anonymous", c.onload = () => t(c), c.onerror = s, c.src = e;
});
async function k(e) {
  return new Promise((t, s) => {
    const c = new Image();
    c.crossOrigin = "anonymous", c.src = e, c.onload = () => {
      try {
        const a = document.createElement("canvas"), l = a.getContext("2d");
        if (!l) return s(new Error("无法获取2D上下文"));
        a.width = c.naturalWidth, a.height = c.naturalHeight, l.drawImage(c, 0, 0, a.width, a.height), t(a);
      } catch (a) {
        s(new Error("画布创建失败", { cause: a }));
      }
    };
  });
}
async function tt(e, t, s) {
  var c, a;
  if (t != null && t.billboard && t.properties) {
    const l = V.now(), g = (c = t.properties) == null ? void 0 : c.getValue(l).changeState, d = g ? e.iconType : e.changeIconType ?? "success", h = g ? e.textIconType : e.changeTextIconType ?? "success_label";
    let n = (a = t.billboard.image) == null ? void 0 : a.getValue();
    n = typeof n == "string" ? await k(n) : n;
    const m = n.getContext("2d"), i = await Y(w[s ? d : h]);
    m == null || m.clearRect(0, 0, n.width, n.height), m.drawImage(i, 0, 0, n.width, n.height), x({ info: e, valueKey: s, canvas: n, ctx: m, text: s ? e.value : e.text }), t.billboard.image = n.toDataURL("image/png"), t.properties.changeState = new X(() => !g, !1);
  }
}
export {
  K as createInfoCanvas,
  tt as updateViewerEntityInfo
};
