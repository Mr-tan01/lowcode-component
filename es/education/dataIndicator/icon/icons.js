import { ref as h, watch as $ } from "vue";
const w = /* @__PURE__ */ Object.assign({
  "./images/func/add.png": () => import("./images/func/add.png.js").then((e) => e.default),
  "./images/func/blue-l-arrow.png": () => import("./images/func/blue-l-arrow.png.js").then((e) => e.default),
  "./images/func/blue-r-arrow.png": () => import("./images/func/blue-r-arrow.png.js").then((e) => e.default),
  "./images/func/caret-down.png": () => import("./images/func/caret-down.png.js").then((e) => e.default),
  "./images/func/caret-sort.png": () => import("./images/func/caret-sort.png.js").then((e) => e.default),
  "./images/func/caret-up.png": () => import("./images/func/caret-up.png.js").then((e) => e.default),
  "./images/func/chevron-down.png": () => import("./images/func/chevron-down.png.js").then((e) => e.default),
  "./images/func/chevron-up.png": () => import("./images/func/chevron-up.png.js").then((e) => e.default),
  "./images/func/expand.png": () => import("./images/func/expand.png.js").then((e) => e.default),
  "./images/func/help-circle.png": () => import("./images/func/help-circle.png.js").then((e) => e.default),
  "./images/func/info-circle.png": () => import("./images/func/info-circle.png.js").then((e) => e.default),
  "./images/func/internet.png": () => import("./images/func/internet.png.js").then((e) => e.default),
  "./images/func/laptop.png": () => import("./images/func/laptop.png.js").then((e) => e.default),
  "./images/func/layers.png": () => import("./images/func/layers.png.js").then((e) => e.default),
  "./images/func/location.png": () => import("./images/func/location.png.js").then((e) => e.default),
  "./images/func/parallel.png": () => import("./images/func/parallel.png.js").then((e) => e.default),
  "./images/func/pause.png": () => import("./images/func/pause.png.js").then((e) => e.default),
  "./images/func/refresh.png": () => import("./images/func/refresh.png.js").then((e) => e.default),
  "./images/func/remove.png": () => import("./images/func/remove.png.js").then((e) => e.default),
  "./images/func/retract.png": () => import("./images/func/retract.png.js").then((e) => e.default),
  "./images/func/search.png": () => import("./images/func/search.png.js").then((e) => e.default),
  "./images/func/time.png": () => import("./images/func/time.png.js").then((e) => e.default)
}), b = /* @__PURE__ */ Object.assign({
  "./images/event/building/icon.png": () => import("./images/event/building/icon.png.js").then((e) => e.default),
  "./images/event/building/selected-icon.png": () => import("./images/event/building/selected-icon.png.js").then((e) => e.default),
  "./images/event/domain/icon.png": () => import("./images/event/domain/icon.png.js").then((e) => e.default),
  "./images/event/domain/selected-icon.png": () => import("./images/event/domain/selected-icon.png.js").then((e) => e.default),
  "./images/event/gate/icon.png": () => import("./images/event/gate/icon.png.js").then((e) => e.default),
  "./images/event/gate/selected-icon.png": () => import("./images/event/gate/selected-icon.png.js").then((e) => e.default),
  "./images/event/mentor/icon.png": () => import("./images/event/mentor/icon.png.js").then((e) => e.default),
  "./images/event/mentor/selected-icon.png": () => import("./images/event/mentor/selected-icon.png.js").then((e) => e.default),
  "./images/event/person/icon.png": () => import("./images/event/person/icon.png.js").then((e) => e.default),
  "./images/event/person/selected-icon.png": () => import("./images/event/person/selected-icon.png.js").then((e) => e.default),
  "./images/event/person2/icon.png": () => import("./images/event/person2/icon.png.js").then((e) => e.default),
  "./images/event/person2/selected-icon.png": () => import("./images/event/person2/selected-icon.png.js").then((e) => e.default),
  "./images/event/reward/icon.png": () => import("./images/event/reward/icon.png.js").then((e) => e.default),
  "./images/event/reward/selected-icon.png": () => import("./images/event/reward/selected-icon.png.js").then((e) => e.default),
  "./images/event/style/icon.png": () => import("./images/event/style/icon.png.js").then((e) => e.default),
  "./images/event/style/selected-icon.png": () => import("./images/event/style/selected-icon.png.js").then((e) => e.default)
}), v = {
  func: w,
  event: b
};
function P(e, g, i) {
  const u = h(""), m = h(""), c = (t) => {
    var n, r, s, a, f, d;
    let l = `${e.value}/${t}${i.value}`, p = "";
    e.value === "event" && (l = `${e.value}/${t}/icon${i.value}`, p = `${e.value}/${t}/selected-icon${i.value}`), (s = (r = (n = v[e.value]) == null ? void 0 : n[`./images/${l}`]) == null ? void 0 : r.call(n)) == null || s.then((o) => u.value = o), p && ((d = (f = (a = v[e.value]) == null ? void 0 : a[`./images/${p}`]) == null ? void 0 : f.call(a)) == null || d.then((o) => m.value = o));
  };
  return c(g.value), $(g, (t) => {
    c(t);
  }), {
    src: u,
    selectedSrc: m
  };
}
export {
  b as eventdomainIcons,
  w as funcdomainIcons,
  P as useImage
};
