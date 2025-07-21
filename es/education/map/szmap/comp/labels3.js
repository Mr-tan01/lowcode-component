import { defineComponent as i, computed as o, openBlock as r, createElementBlock as _, createElementVNode as t, toDisplayString as s, unref as l } from "vue";
import d from "lodash-es/merge";
import { defBlockLableMap as c, szBlockNames as a } from "../const.js";
const x = {
  id: "编组-17",
  class: "lables-group",
  transform: "translate(100.4352, 99.2194)",
  "font-family": "HarmonyOS_Sans_SC, HarmonyOS Sans SC",
  "font-size": "16",
  "font-weight": "normal",
  "line-spacing": "28"
}, u = {
  id: "南山",
  class: "text",
  fill: "url(#linearGradient-46)"
}, f = {
  x: "95.7816",
  y: "230.4492"
}, h = {
  id: "福田",
  class: "text",
  fill: "url(#linearGradient-46)"
}, p = {
  x: "188.56944",
  y: "268.4872"
}, m = {
  id: "罗湖",
  class: "text",
  fill: "url(#linearGradient-46)"
}, y = {
  x: "318.6216",
  y: "220.43644"
}, v = {
  id: "盐田",
  class: "text",
  fill: "url(#linearGradient-46)"
}, G = {
  x: "418.52288",
  y: "196.19084"
}, g = {
  id: "宝安",
  class: "text",
  fill: "url(#linearGradient-46)"
}, S = {
  x: "0",
  y: "151.7938"
}, b = {
  id: "光明",
  class: "text",
  fill: "url(#linearGradient-46)"
}, k = {
  x: "62.1208",
  y: "15"
}, B = {
  id: "龙岗",
  class: "text",
  fill: "url(#linearGradient-46)"
}, C = {
  x: "418.27104",
  y: "66.9946"
}, z = {
  id: "坪山",
  class: "text",
  fill: "url(#linearGradient-46)"
}, E = {
  x: "521.8768",
  y: "116.5672"
}, H = {
  id: "大鹏新区",
  class: "text",
  fill: "url(#linearGradient-47)"
}, L = {
  x: "612.31892",
  y: "180.2158"
}, N = {
  id: "龙华",
  class: "text",
  fill: "url(#linearGradient-48)"
}, O = {
  x: "166",
  y: "105"
}, w = {
  id: "深汕合作区",
  class: "text",
  fill: "url(#linearGradient-48)"
}, D = {
  x: "690",
  y: "-48"
}, F = /* @__PURE__ */ i({
  __name: "labels",
  props: {
    labels: { default: () => ({}) }
  },
  setup(n) {
    const e = o(() => d({}, c, n.labels));
    return (M, V) => (r(), _("g", x, [
      t("text", u, [
        t(
          "tspan",
          f,
          s(e.value[l(a).南山]),
          1
          /* TEXT */
        )
      ]),
      t("text", h, [
        t(
          "tspan",
          p,
          s(e.value[l(a).福田]),
          1
          /* TEXT */
        )
      ]),
      t("text", m, [
        t(
          "tspan",
          y,
          s(e.value[l(a).罗湖]),
          1
          /* TEXT */
        )
      ]),
      t("text", v, [
        t(
          "tspan",
          G,
          s(e.value[l(a).盐田]),
          1
          /* TEXT */
        )
      ]),
      t("text", g, [
        t(
          "tspan",
          S,
          s(e.value[l(a).宝安]),
          1
          /* TEXT */
        )
      ]),
      t("text", b, [
        t(
          "tspan",
          k,
          s(e.value[l(a).光明]),
          1
          /* TEXT */
        )
      ]),
      t("text", B, [
        t(
          "tspan",
          C,
          s(e.value[l(a).龙岗]),
          1
          /* TEXT */
        )
      ]),
      t("text", z, [
        t(
          "tspan",
          E,
          s(e.value[l(a).坪山]),
          1
          /* TEXT */
        )
      ]),
      t("text", H, [
        t(
          "tspan",
          L,
          s(e.value[l(a).大鹏新区]),
          1
          /* TEXT */
        )
      ]),
      t("text", N, [
        t(
          "tspan",
          O,
          s(e.value[l(a).龙华]),
          1
          /* TEXT */
        )
      ]),
      t("text", w, [
        t(
          "tspan",
          D,
          s(e.value[l(a).深汕合作区]),
          1
          /* TEXT */
        )
      ])
    ]));
  }
});
export {
  F as default
};
