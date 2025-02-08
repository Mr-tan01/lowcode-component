// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { openBlock as o, createElementBlock as i } from "vue";
const r = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [c, a] of n)
    t[c] = a;
  return t;
}, m = {}, p = { class: "lc-icon" };
function f(e, n) {
  return o(), i("div", p);
}
const u = /* @__PURE__ */ r(m, [["render", f]]), g = /* @__PURE__ */ Object.assign({
  "./images/func/add.png": () => import("./assets/add-ChlFVGqP.js").then((e) => e.default),
  "./images/func/caret-down-small.png": () => import("./assets/caret-down-small-CmeLcQHZ.js").then((e) => e.default),
  "./images/func/caret-sort-small.png": () => import("./assets/caret-sort-small-COV1w0XK.js").then((e) => e.default),
  "./images/func/caret-up-small.png": () => import("./assets/caret-up-small-Dcnj0KoS.js").then((e) => e.default),
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
});
export {
  u as LcIcon,
  g as funcDomainIcons
};
