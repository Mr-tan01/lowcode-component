// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { ref as h, defineComponent as b, mergeDefaults as w, useCssVars as y, computed as $, openBlock as _, createElementBlock as S, normalizeClass as z, normalizeStyle as I, unref as m, createElementVNode as p, renderSlot as D } from "vue";
const x = /* @__PURE__ */ Object.assign({
  "./images/func/add.png": () => import("./assets/add-ChlFVGqP.js").then((e) => e.default),
  "./images/func/blue-l-arrow.png": () => import("./assets/blue-l-arrow-BdO8_23_.js").then((e) => e.default),
  "./images/func/blue-r-arrow.png": () => import("./assets/blue-r-arrow-CHtaCVEv.js").then((e) => e.default),
  "./images/func/caret-down.png": () => import("./assets/caret-down-CmeLcQHZ.js").then((e) => e.default),
  "./images/func/caret-sort.png": () => import("./assets/caret-sort-COV1w0XK.js").then((e) => e.default),
  "./images/func/caret-up.png": () => import("./assets/caret-up-Dcnj0KoS.js").then((e) => e.default),
  "./images/func/chevron-down.png": () => import("./assets/chevron-down-Cyr78CbI.js").then((e) => e.default),
  "./images/func/chevron-up.png": () => import("./assets/chevron-up-CcJPfj33.js").then((e) => e.default),
  "./images/func/help-circle.png": () => import("./assets/help-circle-Bernx1Dp.js").then((e) => e.default),
  "./images/func/info-circle.png": () => import("./assets/info-circle-wCQu-_8n.js").then((e) => e.default),
  "./images/func/internet.png": () => import("./assets/internet-D-Mu9sBE.js").then((e) => e.default),
  "./images/func/laptop.png": () => import("./assets/laptop-CC03Lhg9.js").then((e) => e.default),
  "./images/func/layers.png": () => import("./assets/layers-C_7wJ803.js").then((e) => e.default),
  "./images/func/location.png": () => import("./assets/location-CAiqJkJi.js").then((e) => e.default),
  "./images/func/refresh.png": () => import("./assets/refresh-BwJoFD3c.js").then((e) => e.default),
  "./images/func/remove.png": () => import("./assets/remove-p9fjN5C_.js").then((e) => e.default),
  "./images/func/search.png": () => import("./assets/search-C_MUuboT.js").then((e) => e.default),
  "./images/func/time.png": () => import("./assets/time-BUWRfRmg.js").then((e) => e.default)
}), C = /* @__PURE__ */ Object.assign({
  "./images/event/building/icon.png": () => import("./assets/icon-CpqipgJB.js").then((e) => e.i).then((e) => e.default),
  "./images/event/building/selected-icon.png": () => import("./assets/selected-icon-MFwRU2PB.js").then((e) => e.s).then((e) => e.default),
  "./images/event/domain/icon.png": () => import("./assets/icon-CpqipgJB.js").then((e) => e.a).then((e) => e.default),
  "./images/event/domain/selected-icon.png": () => import("./assets/selected-icon-MFwRU2PB.js").then((e) => e.a).then((e) => e.default),
  "./images/event/gate/icon.png": () => import("./assets/icon-CpqipgJB.js").then((e) => e.b).then((e) => e.default),
  "./images/event/gate/selected-icon.png": () => import("./assets/selected-icon-MFwRU2PB.js").then((e) => e.b).then((e) => e.default),
  "./images/event/mentor/icon.png": () => import("./assets/icon-CpqipgJB.js").then((e) => e.c).then((e) => e.default),
  "./images/event/mentor/selected-icon.png": () => import("./assets/selected-icon-MFwRU2PB.js").then((e) => e.c).then((e) => e.default),
  "./images/event/person/icon.png": () => import("./assets/icon-CpqipgJB.js").then((e) => e.d).then((e) => e.default),
  "./images/event/person/selected-icon.png": () => import("./assets/selected-icon-MFwRU2PB.js").then((e) => e.d).then((e) => e.default),
  "./images/event/person2/icon.png": () => import("./assets/icon-CpqipgJB.js").then((e) => e.e).then((e) => e.default),
  "./images/event/person2/selected-icon.png": () => import("./assets/selected-icon-MFwRU2PB.js").then((e) => e.e).then((e) => e.default),
  "./images/event/reward/icon.png": () => import("./assets/icon-CpqipgJB.js").then((e) => e.f).then((e) => e.default),
  "./images/event/reward/selected-icon.png": () => import("./assets/selected-icon-MFwRU2PB.js").then((e) => e.f).then((e) => e.default),
  "./images/event/style/icon.png": () => import("./assets/icon-CpqipgJB.js").then((e) => e.g).then((e) => e.default),
  "./images/event/style/selected-icon.png": () => import("./assets/selected-icon-MFwRU2PB.js").then((e) => e.g).then((e) => e.default)
}), v = {
  func: x,
  event: C
}, L = {
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
    blueRArrow: "blue-r-arrow"
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
function k(e, t, n = ".png") {
  var o, g, d, c, u, f;
  const a = h(""), i = h("");
  let r = `${e}/${t}${n}`, s = "";
  return e === "event" && (r = `${e}/${t}/icon${n}`, s = `${e}/${t}/selected-icon${n}`), (d = (g = (o = v[e]) == null ? void 0 : o[`./images/${r}`]) == null ? void 0 : g.call(o)) == null || d.then((l) => a.value = l), s && ((f = (u = (c = v[e]) == null ? void 0 : c[`./images/${s}`]) == null ? void 0 : u.call(c)) == null || f.then((l) => i.value = l)), {
    src: a,
    selectedSrc: i
  };
}
const B = { class: "lc-icon__image" }, O = ["src"], P = { class: "lc-icon__span" }, j = /* @__PURE__ */ b({
  __name: "icon",
  props: /* @__PURE__ */ w({
    domain: {
      type: String
    },
    name: {
      type: String
    },
    size: {
      type: [Number, String]
    },
    ext: {
      type: String
    },
    selected: {
      type: Boolean
    }
  }, {
    domain: "func",
    name: "add",
    size: 16,
    ext: ".png",
    selected: () => {
    }
  }),
  setup(e) {
    y((i) => ({
      "74ae46c6": a.value
    }));
    const { src: t, selectedSrc: n } = k(e.domain, e.name, e.ext), a = $(() => typeof e.size == "number" ? `${e.size}px` : e.size);
    return (i, r) => (_(), S(
      "div",
      {
        class: z(["lc-icon", { "lc-icon--selected": e.selected }]),
        style: I({
          "--img-src": `url(${m(t)})`,
          "--img-selected-src": `url(${m(n)})`
        })
      },
      [
        p("div", B, [
          p("img", {
            class: "lc-icon__img",
            src: m(t),
            draggable: "false",
            alt: ""
          }, null, 8, O)
        ]),
        p("span", P, [
          D(i.$slots, "default", {}, void 0, !0)
        ])
      ],
      6
      /* CLASS, STYLE */
    ));
  }
}), A = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [a, i] of t)
    n[a] = i;
  return n;
}, N = /* @__PURE__ */ A(j, [["__scopeId", "data-v-5ad7eb20"]]);
export {
  N as LcIcon,
  C as eventDomainIcons,
  x as funcDomainIcons,
  L as innerImageDomain,
  k as useImage
};
