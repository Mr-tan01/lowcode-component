import { ref as p, watch as $ } from "vue";
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
  "./images/func/construction.png": () => import("./images/func/construction.png.js").then((e) => e.default),
  "./images/func/credit-recognition-rate.png": () => import("./images/func/credit-recognition-rate.png.js").then((e) => e.default),
  "./images/func/doctor.png": () => import("./images/func/doctor.png.js").then((e) => e.default),
  "./images/func/expand.png": () => import("./images/func/expand.png.js").then((e) => e.default),
  "./images/func/expenditure.png": () => import("./images/func/expenditure.png.js").then((e) => e.default),
  "./images/func/flipbook.png": () => import("./images/func/flipbook.png.js").then((e) => e.default),
  "./images/func/help-circle.png": () => import("./images/func/help-circle.png.js").then((e) => e.default),
  "./images/func/high-school.png": () => import("./images/func/high-school.png.js").then((e) => e.default),
  "./images/func/info-circle.png": () => import("./images/func/info-circle.png.js").then((e) => e.default),
  "./images/func/instrument.png": () => import("./images/func/instrument.png.js").then((e) => e.default),
  "./images/func/international.png": () => import("./images/func/international.png.js").then((e) => e.default),
  "./images/func/internet.png": () => import("./images/func/internet.png.js").then((e) => e.default),
  "./images/func/laptop.png": () => import("./images/func/laptop.png.js").then((e) => e.default),
  "./images/func/layers.png": () => import("./images/func/layers.png.js").then((e) => e.default),
  "./images/func/location.png": () => import("./images/func/location.png.js").then((e) => e.default),
  "./images/func/occupation.png": () => import("./images/func/occupation.png.js").then((e) => e.default),
  "./images/func/parallel.png": () => import("./images/func/parallel.png.js").then((e) => e.default),
  "./images/func/pause.png": () => import("./images/func/pause.png.js").then((e) => e.default),
  "./images/func/person.png": () => import("./images/func/person.png.js").then((e) => e.default),
  "./images/func/pie-chart.png": () => import("./images/func/pie-chart.png.js").then((e) => e.default),
  "./images/func/private-school.png": () => import("./images/func/private-school.png.js").then((e) => e.default),
  "./images/func/professional-high-school.png": () => import("./images/func/professional-high-school.png.js").then((e) => e.default),
  "./images/func/public-school.png": () => import("./images/func/public-school.png.js").then((e) => e.default),
  "./images/func/reat.png": () => import("./images/func/reat.png.js").then((e) => e.default),
  "./images/func/refresh.png": () => import("./images/func/refresh.png.js").then((e) => e.default),
  "./images/func/remove.png": () => import("./images/func/remove.png.js").then((e) => e.default),
  "./images/func/retract.png": () => import("./images/func/retract.png.js").then((e) => e.default),
  "./images/func/safety.png": () => import("./images/func/safety.png.js").then((e) => e.default),
  "./images/func/search.png": () => import("./images/func/search.png.js").then((e) => e.default),
  "./images/func/specialist-school.png": () => import("./images/func/specialist-school.png.js").then((e) => e.default),
  "./images/func/student.png": () => import("./images/func/student.png.js").then((e) => e.default),
  "./images/func/teacher.png": () => import("./images/func/teacher.png.js").then((e) => e.default),
  "./images/func/time.png": () => import("./images/func/time.png.js").then((e) => e.default)
}), y = /* @__PURE__ */ Object.assign({
  "./images/event/base/icon.png": () => import("./images/event/base/icon.png.js").then((e) => e.default),
  "./images/event/base/selected-icon.png": () => import("./images/event/base/selected-icon.png.js").then((e) => e.default),
  "./images/event/building/icon.png": () => import("./images/event/building/icon.png.js").then((e) => e.default),
  "./images/event/building/selected-icon.png": () => import("./images/event/building/selected-icon.png.js").then((e) => e.default),
  "./images/event/dataOverview/icon.png": () => import("./images/event/dataOverview/icon.png.js").then((e) => e.default),
  "./images/event/dataOverview/selected-icon.png": () => import("./images/event/dataOverview/selected-icon.png.js").then((e) => e.default),
  "./images/event/domain/icon.png": () => import("./images/event/domain/icon.png.js").then((e) => e.default),
  "./images/event/domain/selected-icon.png": () => import("./images/event/domain/selected-icon.png.js").then((e) => e.default),
  "./images/event/evaluation/icon.png": () => import("./images/event/evaluation/icon.png.js").then((e) => e.default),
  "./images/event/evaluation/selected-icon.png": () => import("./images/event/evaluation/selected-icon.png.js").then((e) => e.default),
  "./images/event/five/icon.png": () => import("./images/event/five/icon.png.js").then((e) => e.default),
  "./images/event/five/selected-icon.png": () => import("./images/event/five/selected-icon.png.js").then((e) => e.default),
  "./images/event/gate/icon.png": () => import("./images/event/gate/icon.png.js").then((e) => e.default),
  "./images/event/gate/selected-icon.png": () => import("./images/event/gate/selected-icon.png.js").then((e) => e.default),
  "./images/event/mentor/icon.png": () => import("./images/event/mentor/icon.png.js").then((e) => e.default),
  "./images/event/mentor/selected-icon.png": () => import("./images/event/mentor/selected-icon.png.js").then((e) => e.default),
  "./images/event/person/icon.png": () => import("./images/event/person/icon.png.js").then((e) => e.default),
  "./images/event/person/selected-icon.png": () => import("./images/event/person/selected-icon.png.js").then((e) => e.default),
  "./images/event/person2/icon.png": () => import("./images/event/person2/icon.png.js").then((e) => e.default),
  "./images/event/person2/selected-icon.png": () => import("./images/event/person2/selected-icon.png.js").then((e) => e.default),
  "./images/event/planningBlueprint/icon.png": () => import("./images/event/planningBlueprint/icon.png.js").then((e) => e.default),
  "./images/event/planningBlueprint/selected-icon.png": () => import("./images/event/planningBlueprint/selected-icon.png.js").then((e) => e.default),
  "./images/event/reward/icon.png": () => import("./images/event/reward/icon.png.js").then((e) => e.default),
  "./images/event/reward/selected-icon.png": () => import("./images/event/reward/selected-icon.png.js").then((e) => e.default),
  "./images/event/schoolSafety/icon.png": () => import("./images/event/schoolSafety/icon.png.js").then((e) => e.default),
  "./images/event/schoolSafety/selected-icon.png": () => import("./images/event/schoolSafety/selected-icon.png.js").then((e) => e.default),
  "./images/event/schoolsGuarantee/icon.png": () => import("./images/event/schoolsGuarantee/icon.png.js").then((e) => e.default),
  "./images/event/schoolsGuarantee/selected-icon.png": () => import("./images/event/schoolsGuarantee/selected-icon.png.js").then((e) => e.default),
  "./images/event/style/icon.png": () => import("./images/event/style/icon.png.js").then((e) => e.default),
  "./images/event/style/selected-icon.png": () => import("./images/event/style/selected-icon.png.js").then((e) => e.default),
  "./images/event/team/icon.png": () => import("./images/event/team/icon.png.js").then((e) => e.default),
  "./images/event/team/selected-icon.png": () => import("./images/event/team/selected-icon.png.js").then((e) => e.default)
}), I = /* @__PURE__ */ Object.assign({
  "./images/baseSupport/booth/icon.png": () => import("./images/baseSupport/booth/icon.png.js").then((e) => e.default),
  "./images/baseSupport/booth/selected-icon.png": () => import("./images/baseSupport/booth/selected-icon.png.js").then((e) => e.default),
  "./images/baseSupport/pedestal/icon.png": () => import("./images/baseSupport/pedestal/icon.png.js").then((e) => e.default),
  "./images/baseSupport/pedestal/selected-icon.png": () => import("./images/baseSupport/pedestal/selected-icon.png.js").then((e) => e.default)
}), O = /* @__PURE__ */ Object.assign({
  "./images/menus/basic-education.png": () => import("./images/menus/basic-education.png.js").then((e) => e.default),
  "./images/menus/blue-print.png": () => import("./images/menus/blue-print.png.js").then((e) => e.default),
  "./images/menus/campus-security.png": () => import("./images/menus/campus-security.png.js").then((e) => e.default),
  "./images/menus/career-development.png": () => import("./images/menus/career-development.png.js").then((e) => e.default),
  "./images/menus/conditions-guarantees.png": () => import("./images/menus/conditions-guarantees.png.js").then((e) => e.default),
  "./images/menus/data-overview.png": () => import("./images/menus/data-overview.png.js").then((e) => e.default),
  "./images/menus/degree-resources.png": () => import("./images/menus/degree-resources.png.js").then((e) => e.default),
  "./images/menus/develop-simultaneously.png": () => import("./images/menus/develop-simultaneously.png.js").then((e) => e.default),
  "./images/menus/digitization.png": () => import("./images/menus/digitization.png.js").then((e) => e.default),
  "./images/menus/educational-fund.png": () => import("./images/menus/educational-fund.png.js").then((e) => e.default),
  "./images/menus/exchange-cooperation.png": () => import("./images/menus/exchange-cooperation.png.js").then((e) => e.default),
  "./images/menus/higher-education.png": () => import("./images/menus/higher-education.png.js").then((e) => e.default),
  "./images/menus/supervisory-evaluation.png": () => import("./images/menus/supervisory-evaluation.png.js").then((e) => e.default),
  "./images/menus/team-construction.png": () => import("./images/menus/team-construction.png.js").then((e) => e.default)
}), v = {
  func: w,
  event: y,
  menus: O,
  baseSupport: I
};
function B(e, u, n, j) {
  const g = p(""), c = p(""), b = p(""), S = p(""), l = (t) => {
    var a, r, f, i, d, h;
    let o = `${e.value}/${t}${n.value}`, s = "";
    e.value === "event" || e.value === "baseSupport" ? (o = `${e.value}/${t}/icon${n.value}`, s = `${e.value}/${t}/selected-icon${n.value}`) : e.value === "menus" && (o = `${e.value}/${t}${n.value}`), (f = (r = (a = v[e.value]) == null ? void 0 : a[`./images/${o}`]) == null ? void 0 : r.call(a)) == null || f.then((m) => g.value = m), s && ((h = (d = (i = v[e.value]) == null ? void 0 : i[`./images/${s}`]) == null ? void 0 : d.call(i)) == null || h.then((m) => c.value = m));
  };
  return l(u.value), $(u, (t) => {
    l(t);
  }), {
    src: g,
    selectedSrc: c,
    baseSrc: b,
    baseSelectedSrc: S
  };
}
export {
  I as baseSupportdomainIcons,
  y as eventdomainIcons,
  w as funcdomainIcons,
  O as menustdomainIcons,
  B as useImage
};
