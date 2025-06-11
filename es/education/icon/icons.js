import { ref as d, watch as b } from "vue";
const w = /* @__PURE__ */ Object.assign({
  "./images/func/acreage.png": () => import("./images/func/acreage.png.js").then((e) => e.default),
  "./images/func/add.png": () => import("./images/func/add.png.js").then((e) => e.default),
  "./images/func/blue-l-arrow.png": () => import("./images/func/blue-l-arrow.png.js").then((e) => e.default),
  "./images/func/blue-r-arrow.png": () => import("./images/func/blue-r-arrow.png.js").then((e) => e.default),
  "./images/func/campus-school.png": () => import("./images/func/campus-school.png.js").then((e) => e.default),
  "./images/func/caret-down.png": () => import("./images/func/caret-down.png.js").then((e) => e.default),
  "./images/func/caret-sort.png": () => import("./images/func/caret-sort.png.js").then((e) => e.default),
  "./images/func/caret-up.png": () => import("./images/func/caret-up.png.js").then((e) => e.default),
  "./images/func/chevron-down.png": () => import("./images/func/chevron-down.png.js").then((e) => e.default),
  "./images/func/chevron-up.png": () => import("./images/func/chevron-up.png.js").then((e) => e.default),
  "./images/func/doctor.png": () => import("./images/func/doctor.png.js").then((e) => e.default),
  "./images/func/expand.png": () => import("./images/func/expand.png.js").then((e) => e.default),
  "./images/func/expenditure.png": () => import("./images/func/expenditure.png.js").then((e) => e.default),
  "./images/func/flipbook.png": () => import("./images/func/flipbook.png.js").then((e) => e.default),
  "./images/func/help-circle.png": () => import("./images/func/help-circle.png.js").then((e) => e.default),
  "./images/func/high-school.png": () => import("./images/func/high-school.png.js").then((e) => e.default),
  "./images/func/info-circle.png": () => import("./images/func/info-circle.png.js").then((e) => e.default),
  "./images/func/international.png": () => import("./images/func/international.png.js").then((e) => e.default),
  "./images/func/internet.png": () => import("./images/func/internet.png.js").then((e) => e.default),
  "./images/func/laptop.png": () => import("./images/func/laptop.png.js").then((e) => e.default),
  "./images/func/layers.png": () => import("./images/func/layers.png.js").then((e) => e.default),
  "./images/func/location.png": () => import("./images/func/location.png.js").then((e) => e.default),
  "./images/func/parallel.png": () => import("./images/func/parallel.png.js").then((e) => e.default),
  "./images/func/pause.png": () => import("./images/func/pause.png.js").then((e) => e.default),
  "./images/func/pie-chart.png": () => import("./images/func/pie-chart.png.js").then((e) => e.default),
  "./images/func/private-school.png": () => import("./images/func/private-school.png.js").then((e) => e.default),
  "./images/func/professional-high-school.png": () => import("./images/func/professional-high-school.png.js").then((e) => e.default),
  "./images/func/public-school.png": () => import("./images/func/public-school.png.js").then((e) => e.default),
  "./images/func/reat.png": () => import("./images/func/reat.png.js").then((e) => e.default),
  "./images/func/refresh.png": () => import("./images/func/refresh.png.js").then((e) => e.default),
  "./images/func/remove.png": () => import("./images/func/remove.png.js").then((e) => e.default),
  "./images/func/retract.png": () => import("./images/func/retract.png.js").then((e) => e.default),
  "./images/func/search.png": () => import("./images/func/search.png.js").then((e) => e.default),
  "./images/func/specialist-school.png": () => import("./images/func/specialist-school.png.js").then((e) => e.default),
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
  func: w,
  event: $
}, y = {
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
    doctor: "doctor",
    acreage: "acreage",
    flipbook: "flipbook",
    expenditure: "expenditure",
    pieChart: "pie-chart",
    reat: "reat",
    privateSchool: "private-school",
    publicSchool: "public-school",
    campusSchool: "campus-school",
    highSchool: "high-school",
    specialistSchool: "specialist-school",
    professionalHighSchool: "professional-high-school"
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
function x(e, p, i) {
  const c = d(""), l = d(""), s = (t) => {
    var n, g, m, a, f, h;
    let u = `${e.value}/${t}${i.value}`, o = "";
    e.value === "event" && (u = `${e.value}/${t}/icon${i.value}`, o = `${e.value}/${t}/selected-icon${i.value}`), (m = (g = (n = v[e.value]) == null ? void 0 : n[`./images/${u}`]) == null ? void 0 : g.call(n)) == null || m.then((r) => c.value = r), o && ((h = (f = (a = v[e.value]) == null ? void 0 : a[`./images/${o}`]) == null ? void 0 : f.call(a)) == null || h.then((r) => l.value = r));
  };
  return s(p.value), b(p, (t) => {
    s(t);
  }), {
    src: c,
    selectedSrc: l
  };
}
export {
  $ as eventdomainIcons,
  w as funcdomainIcons,
  y as innerImageDomain,
  x as useImage
};
