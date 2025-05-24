import { ref as h, watch as w } from "vue";
const b = /* @__PURE__ */ Object.assign({
  "./images/func/add.png": () => import("./images/func/add.png.js").then((e) => e.default),
  "./images/func/blue-l-arrow.png": () => import("./images/func/blue-l-arrow.png.js").then((e) => e.default),
  "./images/func/blue-r-arrow.png": () => import("./images/func/blue-r-arrow.png.js").then((e) => e.default),
  "./images/func/caret-down.png": () => import("./images/func/caret-down.png.js").then((e) => e.default),
  "./images/func/caret-sort.png": () => import("./images/func/caret-sort.png.js").then((e) => e.default),
  "./images/func/caret-up.png": () => import("./images/func/caret-up.png.js").then((e) => e.default),
  "./images/func/chevron-down.png": () => import("./images/func/chevron-down.png.js").then((e) => e.default),
  "./images/func/chevron-up.png": () => import("./images/func/chevron-up.png.js").then((e) => e.default),
  "./images/func/doctor.png": () => import("./images/func/doctor.png.js").then((e) => e.default),
  "./images/func/expand.png": () => import("./images/func/expand.png.js").then((e) => e.default),
  "./images/func/help-circle.png": () => import("./images/func/help-circle.png.js").then((e) => e.default),
  "./images/func/info-circle.png": () => import("./images/func/info-circle.png.js").then((e) => e.default),
  "./images/func/international.png": () => import("./images/func/international.png.js").then((e) => e.default),
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
  "./images/func/student.png": () => import("./images/func/student.png.js").then((e) => e.default),
  "./images/func/teacher.png": () => import("./images/func/teacher.png.js").then((e) => e.default),
  "./images/func/time.png": () => import("./images/func/time.png.js").then((e) => e.default)
}), $ = /* @__PURE__ */ Object.assign({
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
  func: b,
  event: $
}, I = {
  func: {
    add: "add",
    caretDown: "caret-down",
    caretSort: "caret-sort",
    caretUp: "caret-up",
    chevronDown: "chevron-down",
    chevronUp: "chevron-up",
    helpCircle: "help-circle",
    infoCircle: "info-circle",
    internet: "internet",
    laptop: "laptop",
    layers: "layers",
    location: "location",
    refresh: "refresh",
    remove: "remove",
    search: "search",
    time: "time",
    blueLArrow: "blue-l-arrow",
    blueRArrow: "blue-r-arrow",
    pause: "pause",
    expand: "expand",
    retract: "retract",
    parallel: "parallel",
    student: "student",
    teacher: "teacher",
    international: "international",
    doctor: "doctor"
  },
  event: {
    domain: "domain",
    style: "style",
    person: "person",
    gate: "gate",
    building: "building",
    mentor: "mentor",
    person2: "person2",
    reward: "reward"
  }
};
function P(e, p, i) {
  const c = h(""), l = h(""), u = (t) => {
    var n, s, g, a, d, f;
    let m = `${e.value}/${t}${i.value}`, r = "";
    e.value === "event" && (m = `${e.value}/${t}/icon${i.value}`, r = `${e.value}/${t}/selected-icon${i.value}`), (g = (s = (n = v[e.value]) == null ? void 0 : n[`./images/${m}`]) == null ? void 0 : s.call(n)) == null || g.then((o) => c.value = o), r && ((f = (d = (a = v[e.value]) == null ? void 0 : a[`./images/${r}`]) == null ? void 0 : d.call(a)) == null || f.then((o) => l.value = o));
  };
  return u(p.value), w(p, (t) => {
    u(t);
  }), {
    src: c,
    selectedSrc: l
  };
}
export {
  $ as eventdomainIcons,
  b as funcdomainIcons,
  I as innerImageDomain,
  P as useImage
};
