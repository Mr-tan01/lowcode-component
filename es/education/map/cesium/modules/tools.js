import $ from "../image/primary.png.js";
import P from "../image/success.png.js";
import L from "../image/warning.png.js";
import A from "../image/danger.png.js";
import z from "../image/primary_label.png.js";
import D from "../image/warning_label.png.js";
import F from "../image/danger_label.png.js";
import H from "../image/icon_primary.png.js";
import R from "../image/icon_success.png.js";
import { JulianDate as U, CallbackProperty as V } from "@cesium/engine";
const w = {
  primary: $,
  success: P,
  warning: L,
  danger: A,
  primary_label: z,
  success_label: z,
  warning_label: D,
  danger_label: F,
  icon_primary: H,
  icon_success: R
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
  const { info: t, valueKey: l, canvas: c, ctx: a, text: s } = e, g = `
    ${((m = t == null ? void 0 : t.fontStyle) == null ? void 0 : m.weight) ?? ((i = r == null ? void 0 : r.fontStyle) == null ? void 0 : i.weight)} 
    ${((o = t == null ? void 0 : t.fontStyle) == null ? void 0 : o.size) ?? ((u = r == null ? void 0 : r.fontStyle) == null ? void 0 : u.size)}
    ${((y = t == null ? void 0 : t.fontStyle) == null ? void 0 : y.family) ?? ((S = r == null ? void 0 : r.fontStyle) == null ? void 0 : S.family)}`, d = `
    ${((p = t == null ? void 0 : t.textStyle) == null ? void 0 : p.weight) ?? ((I = r == null ? void 0 : r.textStyle) == null ? void 0 : I.weight)} 
    ${((b = t == null ? void 0 : t.textStyle) == null ? void 0 : b.size) ?? ((T = r == null ? void 0 : r.textStyle) == null ? void 0 : T.size)}
    ${((_ = t == null ? void 0 : t.textStyle) == null ? void 0 : _.family) ?? ((C = r == null ? void 0 : r.textStyle) == null ? void 0 : C.family)}`;
  a.font = l ? g : d, a.fillStyle = (l ? (O = t == null ? void 0 : t.fontStyle) == null ? void 0 : O.color : (v = t == null ? void 0 : t.textStyle) == null ? void 0 : v.color) ?? ((E = r.fontStyle) == null ? void 0 : E.color), a.textBaseline = "middle", a.textAlign = "left";
  const h = l ? (t == null ? void 0 : t.textOffsetX) ?? 13 : 40, n = (t == null ? void 0 : t.textOffsetY) ?? c.height / 2 - (l ? 10 : 6);
  a.fillText(s, h, n);
}, j = (e, t) => new Promise((l, c) => {
  const a = document.createElement("canvas"), s = a.getContext("2d");
  if (!s) {
    c(new Error("Could not get canvas context"));
    return;
  }
  a.width = (e == null ? void 0 : e.width) ?? r.width, a.height = (e == null ? void 0 : e.height) ?? r.height;
  const { iconType: g, textIconType: d } = e, h = {
    icon: g ? w[g] : w.primary,
    textIcon: d ? w[d] : w.success_label
  }, n = h == null ? void 0 : h[t ? "icon" : "textIcon"], m = (e == null ? void 0 : e[t ?? "text"]) || "", i = () => {
    s.setTransform(1, 0, 0, 1, 0, 0), s.clearRect(0, 0, a.width, a.height);
  };
  if (x({ info: e, valueKey: t, canvas: a, ctx: s, text: m }), n) {
    const o = new Image();
    o.crossOrigin = "Anonymous", o.onload = () => {
      x({ info: e, valueKey: t, canvas: a, ctx: s, text: m }), a.width = t ? (e == null ? void 0 : e.width) ?? o.width : s.measureText(m).width + 80, a.height = (e == null ? void 0 : e.height) ?? o.height, s.drawImage(o, 0, 0, a.width, a.height), x({ info: e, valueKey: t, canvas: a, ctx: s, text: m }), l({ canvas: a, cleanup: i });
    }, o.onerror = () => {
      c(new Error("Failed to load image"));
    }, o.src = n;
  } else
    x({ info: e, valueKey: t, canvas: a, ctx: s, text: m }), l({ canvas: a, cleanup: i });
}), X = (e) => new Promise((t, l) => {
  const c = new Image();
  c.crossOrigin = "Anonymous", c.onload = () => t(c), c.onerror = l, c.src = e;
});
async function Y(e) {
  return new Promise((t, l) => {
    const c = new Image();
    c.crossOrigin = "anonymous", c.src = e, c.onload = () => {
      try {
        const a = document.createElement("canvas"), s = a.getContext("2d");
        if (!s) return l(new Error("无法获取2D上下文"));
        a.width = c.naturalWidth, a.height = c.naturalHeight, s.drawImage(c, 0, 0, a.width, a.height), t(a);
      } catch (a) {
        l(new Error("画布创建失败", { cause: a }));
      }
    };
  });
}
async function f(e, t, l) {
  var c, a;
  if (t != null && t.billboard && t.properties) {
    const s = U.now(), g = (c = t.properties) == null ? void 0 : c.getValue(s).changeState, d = g ? e.iconType : e.changeIconType ?? "success", h = g ? e.textIconType : e.changeTextIconType ?? "success_label";
    let n = (a = t.billboard.image) == null ? void 0 : a.getValue();
    n = typeof n == "string" ? await Y(n) : n;
    const m = n.getContext("2d"), i = await X(w[l ? d : h]);
    m == null || m.clearRect(0, 0, n.width, n.height), m.drawImage(i, 0, 0, n.width, n.height), x({ info: e, valueKey: l, canvas: n, ctx: m, text: l ? e.value : e.text }), t.billboard.image = n.toDataURL("image/png"), t.properties.changeState = new V(() => !g, !1);
  }
}
export {
  j as createInfoCanvas,
  f as updateViewerEntityInfo
};
