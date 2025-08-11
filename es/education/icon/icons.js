import { ref, watch } from "vue";
const funcdomainIcons = /* @__PURE__ */ Object.assign({
  "./images/func/acreage.png": () => import("./images/func/acreage.png.js").then((m) => m["default"]),
  "./images/func/add.png": () => import("./images/func/add.png.js").then((m) => m["default"]),
  "./images/func/blue-l-arrow.png": () => import("./images/func/blue-l-arrow.png.js").then((m) => m["default"]),
  "./images/func/blue-r-arrow.png": () => import("./images/func/blue-r-arrow.png.js").then((m) => m["default"]),
  "./images/func/campus-school.png": () => import("./images/func/campus-school.png.js").then((m) => m["default"]),
  "./images/func/caret-down.png": () => import("./images/func/caret-down.png.js").then((m) => m["default"]),
  "./images/func/caret-sort.png": () => import("./images/func/caret-sort.png.js").then((m) => m["default"]),
  "./images/func/caret-up.png": () => import("./images/func/caret-up.png.js").then((m) => m["default"]),
  "./images/func/chevron-down.png": () => import("./images/func/chevron-down.png.js").then((m) => m["default"]),
  "./images/func/chevron-up.png": () => import("./images/func/chevron-up.png.js").then((m) => m["default"]),
  "./images/func/construction.png": () => import("./images/func/construction.png.js").then((m) => m["default"]),
  "./images/func/credit-recognition-rate.png": () => import("./images/func/credit-recognition-rate.png.js").then((m) => m["default"]),
  "./images/func/doctor.png": () => import("./images/func/doctor.png.js").then((m) => m["default"]),
  "./images/func/expand.png": () => import("./images/func/expand.png.js").then((m) => m["default"]),
  "./images/func/expenditure.png": () => import("./images/func/expenditure.png.js").then((m) => m["default"]),
  "./images/func/flipbook.png": () => import("./images/func/flipbook.png.js").then((m) => m["default"]),
  "./images/func/help-circle.png": () => import("./images/func/help-circle.png.js").then((m) => m["default"]),
  "./images/func/high-school.png": () => import("./images/func/high-school.png.js").then((m) => m["default"]),
  "./images/func/info-circle.png": () => import("./images/func/info-circle.png.js").then((m) => m["default"]),
  "./images/func/instrument.png": () => import("./images/func/instrument.png.js").then((m) => m["default"]),
  "./images/func/international.png": () => import("./images/func/international.png.js").then((m) => m["default"]),
  "./images/func/internet.png": () => import("./images/func/internet.png.js").then((m) => m["default"]),
  "./images/func/laptop.png": () => import("./images/func/laptop.png.js").then((m) => m["default"]),
  "./images/func/layers.png": () => import("./images/func/layers.png.js").then((m) => m["default"]),
  "./images/func/location.png": () => import("./images/func/location.png.js").then((m) => m["default"]),
  "./images/func/middle-school.png": () => import("./images/func/middle-school.png.js").then((m) => m["default"]),
  "./images/func/occupation.png": () => import("./images/func/occupation.png.js").then((m) => m["default"]),
  "./images/func/parallel.png": () => import("./images/func/parallel.png.js").then((m) => m["default"]),
  "./images/func/pause.png": () => import("./images/func/pause.png.js").then((m) => m["default"]),
  "./images/func/person.png": () => import("./images/func/person.png.js").then((m) => m["default"]),
  "./images/func/pie-chart.png": () => import("./images/func/pie-chart.png.js").then((m) => m["default"]),
  "./images/func/primary-school.png": () => import("./images/func/primary-school.png.js").then((m) => m["default"]),
  "./images/func/private-school.png": () => import("./images/func/private-school.png.js").then((m) => m["default"]),
  "./images/func/professional-high-school.png": () => import("./images/func/professional-high-school.png.js").then((m) => m["default"]),
  "./images/func/public-school.png": () => import("./images/func/public-school.png.js").then((m) => m["default"]),
  "./images/func/reat.png": () => import("./images/func/reat.png.js").then((m) => m["default"]),
  "./images/func/refresh.png": () => import("./images/func/refresh.png.js").then((m) => m["default"]),
  "./images/func/remove.png": () => import("./images/func/remove.png.js").then((m) => m["default"]),
  "./images/func/retract.png": () => import("./images/func/retract.png.js").then((m) => m["default"]),
  "./images/func/safety.png": () => import("./images/func/safety.png.js").then((m) => m["default"]),
  "./images/func/search.png": () => import("./images/func/search.png.js").then((m) => m["default"]),
  "./images/func/specialist-school.png": () => import("./images/func/specialist-school.png.js").then((m) => m["default"]),
  "./images/func/student.png": () => import("./images/func/student.png.js").then((m) => m["default"]),
  "./images/func/teacher.png": () => import("./images/func/teacher.png.js").then((m) => m["default"]),
  "./images/func/time.png": () => import("./images/func/time.png.js").then((m) => m["default"]),
  "./images/func/university.png": () => import("./images/func/university.png.js").then((m) => m["default"])
});
const eventdomainIcons = /* @__PURE__ */ Object.assign({
  "./images/event/base/icon.png": () => import("./images/event/base/icon.png.js").then((m) => m["default"]),
  "./images/event/base/selected-icon.png": () => import("./images/event/base/selected-icon.png.js").then((m) => m["default"]),
  "./images/event/building/icon.png": () => import("./images/event/building/icon.png.js").then((m) => m["default"]),
  "./images/event/building/selected-icon.png": () => import("./images/event/building/selected-icon.png.js").then((m) => m["default"]),
  "./images/event/dataOverview/icon.png": () => import("./images/event/dataOverview/icon.png.js").then((m) => m["default"]),
  "./images/event/dataOverview/selected-icon.png": () => import("./images/event/dataOverview/selected-icon.png.js").then((m) => m["default"]),
  "./images/event/domain/icon.png": () => import("./images/event/domain/icon.png.js").then((m) => m["default"]),
  "./images/event/domain/selected-icon.png": () => import("./images/event/domain/selected-icon.png.js").then((m) => m["default"]),
  "./images/event/evaluation/icon.png": () => import("./images/event/evaluation/icon.png.js").then((m) => m["default"]),
  "./images/event/evaluation/selected-icon.png": () => import("./images/event/evaluation/selected-icon.png.js").then((m) => m["default"]),
  "./images/event/five/icon.png": () => import("./images/event/five/icon.png.js").then((m) => m["default"]),
  "./images/event/five/selected-icon.png": () => import("./images/event/five/selected-icon.png.js").then((m) => m["default"]),
  "./images/event/gate/icon.png": () => import("./images/event/gate/icon.png.js").then((m) => m["default"]),
  "./images/event/gate/selected-icon.png": () => import("./images/event/gate/selected-icon.png.js").then((m) => m["default"]),
  "./images/event/mentor/icon.png": () => import("./images/event/mentor/icon.png.js").then((m) => m["default"]),
  "./images/event/mentor/selected-icon.png": () => import("./images/event/mentor/selected-icon.png.js").then((m) => m["default"]),
  "./images/event/person/icon.png": () => import("./images/event/person/icon.png.js").then((m) => m["default"]),
  "./images/event/person/selected-icon.png": () => import("./images/event/person/selected-icon.png.js").then((m) => m["default"]),
  "./images/event/person2/icon.png": () => import("./images/event/person2/icon.png.js").then((m) => m["default"]),
  "./images/event/person2/selected-icon.png": () => import("./images/event/person2/selected-icon.png.js").then((m) => m["default"]),
  "./images/event/planningBlueprint/icon.png": () => import("./images/event/planningBlueprint/icon.png.js").then((m) => m["default"]),
  "./images/event/planningBlueprint/selected-icon.png": () => import("./images/event/planningBlueprint/selected-icon.png.js").then((m) => m["default"]),
  "./images/event/reward/icon.png": () => import("./images/event/reward/icon.png.js").then((m) => m["default"]),
  "./images/event/reward/selected-icon.png": () => import("./images/event/reward/selected-icon.png.js").then((m) => m["default"]),
  "./images/event/schoolSafety/icon.png": () => import("./images/event/schoolSafety/icon.png.js").then((m) => m["default"]),
  "./images/event/schoolSafety/selected-icon.png": () => import("./images/event/schoolSafety/selected-icon.png.js").then((m) => m["default"]),
  "./images/event/schoolsGuarantee/icon.png": () => import("./images/event/schoolsGuarantee/icon.png.js").then((m) => m["default"]),
  "./images/event/schoolsGuarantee/selected-icon.png": () => import("./images/event/schoolsGuarantee/selected-icon.png.js").then((m) => m["default"]),
  "./images/event/style/icon.png": () => import("./images/event/style/icon.png.js").then((m) => m["default"]),
  "./images/event/style/selected-icon.png": () => import("./images/event/style/selected-icon.png.js").then((m) => m["default"]),
  "./images/event/team/icon.png": () => import("./images/event/team/icon.png.js").then((m) => m["default"]),
  "./images/event/team/selected-icon.png": () => import("./images/event/team/selected-icon.png.js").then((m) => m["default"])
});
const baseSupportdomainIcons = /* @__PURE__ */ Object.assign({
  "./images/baseSupport/booth/icon.png": () => import("./images/baseSupport/booth/icon.png.js").then((m) => m["default"]),
  "./images/baseSupport/booth/selected-icon.png": () => import("./images/baseSupport/booth/selected-icon.png.js").then((m) => m["default"]),
  "./images/baseSupport/pedestal/icon.png": () => import("./images/baseSupport/pedestal/icon.png.js").then((m) => m["default"]),
  "./images/baseSupport/pedestal/selected-icon.png": () => import("./images/baseSupport/pedestal/selected-icon.png.js").then((m) => m["default"])
});
const menustdomainIcons = /* @__PURE__ */ Object.assign({
  "./images/menus/basic-education.png": () => import("./images/menus/basic-education.png.js").then((m) => m["default"]),
  "./images/menus/blue-print.png": () => import("./images/menus/blue-print.png.js").then((m) => m["default"]),
  "./images/menus/campus-security.png": () => import("./images/menus/campus-security.png.js").then((m) => m["default"]),
  "./images/menus/career-development.png": () => import("./images/menus/career-development.png.js").then((m) => m["default"]),
  "./images/menus/conditions-guarantees.png": () => import("./images/menus/conditions-guarantees.png.js").then((m) => m["default"]),
  "./images/menus/data-overview.png": () => import("./images/menus/data-overview.png.js").then((m) => m["default"]),
  "./images/menus/degree-resources.png": () => import("./images/menus/degree-resources.png.js").then((m) => m["default"]),
  "./images/menus/develop-simultaneously.png": () => import("./images/menus/develop-simultaneously.png.js").then((m) => m["default"]),
  "./images/menus/digitization.png": () => import("./images/menus/digitization.png.js").then((m) => m["default"]),
  "./images/menus/educational-fund.png": () => import("./images/menus/educational-fund.png.js").then((m) => m["default"]),
  "./images/menus/exchange-cooperation.png": () => import("./images/menus/exchange-cooperation.png.js").then((m) => m["default"]),
  "./images/menus/higher-education.png": () => import("./images/menus/higher-education.png.js").then((m) => m["default"]),
  "./images/menus/supervisory-evaluation.png": () => import("./images/menus/supervisory-evaluation.png.js").then((m) => m["default"]),
  "./images/menus/team-construction.png": () => import("./images/menus/team-construction.png.js").then((m) => m["default"])
});
const imageIconPromise = {
  func: funcdomainIcons,
  event: eventdomainIcons,
  menus: menustdomainIcons,
  baseSupport: baseSupportdomainIcons
};
const innerImageDomain = {
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
    professionalHighSchool: "professional-high-school",
    instrument: "instrument",
    safety: "safety",
    occupation: "occupation",
    construction: "construction",
    person: "person",
    creditRecognitionRate: "credit-recognition-rate",
    primarySchool: "primary-school",
    middleSchool: "middle-school",
    university: "university"
  },
  event: {
    domain: "domain",
    style: "style",
    person: "person",
    gate: "gate",
    building: "building",
    mentor: "mentor",
    person2: "person2",
    reward: "reward",
    dataOverview: "dataOverview",
    base: "base",
    team: "team",
    five: "five",
    evaluation: "evaluation",
    planningBlueprint: "planningBlueprint",
    schoolSafety: "schoolSafety",
    schoolsGuarantee: "schoolsGuarantee"
  },
  baseSupport: {
    booth: "booth",
    pedestal: "pedestal"
  },
  menus: {
    basicEducation: "basic-education",
    bluePrint: "blue-print",
    campusSecurity: "campus-security",
    careerDevelopment: "career-development",
    conditionsGuarantees: "conditions-guarantees",
    dataOverview: "data-overview",
    degreeResources: "degree-resources",
    developSimultaneously: "develop-simultaneously",
    digitization: "digitization",
    educationalFund: "educational-fund",
    exchangeCooperation: "exchange-cooperation",
    highereducation: "higher-education",
    supervisoryEvaluation: "supervisory-evaluation",
    teamConstruction: "team-construction"
  }
};
function useImage(domain, name, ext, baseSrcName) {
  const src = ref("");
  const selectedSrc = ref("");
  const baseSrc = ref("");
  const baseSelectedSrc = ref("");
  const updatePaths = (name2) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    let iconPath = `${domain.value}/${name2}${ext.value}`;
    let baseIconPath = "";
    let baseSelectedPath = "";
    if (baseSrcName == null ? void 0 : baseSrcName.value) {
      baseIconPath = `${domain.value}/${baseSrcName.value}/icon${ext.value}`;
      baseSelectedPath = `${domain.value}/${baseSrcName.value}/selected-icon${ext.value}`;
      (_c = (_b = (_a = imageIconPromise[domain.value]) == null ? void 0 : _a[`./images/${baseIconPath}`]) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.then((val) => baseSrc.value = val);
      (_f = (_e = (_d = imageIconPromise[domain.value]) == null ? void 0 : _d[`./images/${baseSelectedPath}`]) == null ? void 0 : _e.call(_d)) == null ? void 0 : _f.then((val) => baseSelectedSrc.value = val);
      console.log(baseSrcName.value, baseSrc.value, "baseSrc");
    }
    let selectedPath = "";
    if (domain.value === "event" || domain.value === "baseSupport") {
      iconPath = `${domain.value}/${name2}/icon${ext.value}`;
      selectedPath = `${domain.value}/${name2}/selected-icon${ext.value}`;
    } else if (domain.value === "menus") {
      iconPath = `${domain.value}/${name2}${ext.value}`;
    }
    (_i = (_h = (_g = imageIconPromise[domain.value]) == null ? void 0 : _g[`./images/${iconPath}`]) == null ? void 0 : _h.call(_g)) == null ? void 0 : _i.then((val) => src.value = val);
    if (selectedPath) {
      (_l = (_k = (_j = imageIconPromise[domain.value]) == null ? void 0 : _j[`./images/${selectedPath}`]) == null ? void 0 : _k.call(_j)) == null ? void 0 : _l.then((val) => selectedSrc.value = val);
    }
  };
  updatePaths(name.value);
  watch(name, (newName) => {
    updatePaths(newName);
  });
  return {
    src,
    selectedSrc,
    baseSrc,
    baseSelectedSrc
  };
}
export {
  baseSupportdomainIcons,
  eventdomainIcons,
  funcdomainIcons,
  innerImageDomain,
  menustdomainIcons,
  useImage
};
