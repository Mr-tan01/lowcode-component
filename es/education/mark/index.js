// css 
 import './css/index.css';
 // # end css mapping css/index.css 

import { _ } from "./assets/mark-rect-CXWu9vet.js";
import { _ as u } from "./assets/mark-D-ktqeQX.js";
import { _ as k } from "./assets/mark2-rect-CB64moIF.js";
import { _ as d } from "./assets/mark2-b__rySwN.js";
import { _ as g } from "./assets/normal-DJ6iZJWa.js";
import { defineComponent as p, computed as s, openBlock as f, createElementBlock as v, normalizeClass as b, normalizeStyle as $, createElementVNode as r, toDisplayString as l, renderSlot as h, createCommentVNode as w } from "vue";
const N = { class: "lc-mark__wrapper__image" }, y = ["src"], S = { class: "lc-mark__wrapper__image__label" }, z = { class: "lc-mark__wrapper__rect" }, C = { class: "lc-mark__wrapper__rect--value" }, B = { class: "lc-mark__wrapper__rect--unit" }, E = /* @__PURE__ */ p({
  __name: "mark",
  props: {
    value: { default: 0 },
    unit: {},
    model: { default: "default" },
    meta: { default: () => ({}) },
    size: { default: "medium" },
    iconName: { default: "mark" },
    iconSrc: { default: "" },
    label: { default: "" },
    show: { type: Boolean, default: !0 }
  },
  emits: ["mark:click"],
  setup(e, { emit: m }) {
    const t = /* @__PURE__ */ Object.assign({ "./images/mark-rect.png": _, "./images/mark.png": u, "./images/mark2-rect.png": k, "./images/mark2.png": d, "./images/normal.png": g }), c = m, o = s(() => e.iconSrc || t[`./images/${e.iconName}.png`]), i = s(() => ({
      "--mark-icon": `url(${t[`./images/${e.iconName}.png`]})`,
      "--mark-icon-rect": `url(${t[`./images/${e.iconName === "normal" ? "mark2" : e.iconName}-rect.png`]})`
    }));
    function n() {
      c("mark:click", {
        value: e.value,
        meta: e.meta
      });
    }
    return (a, M) => a.show ? (f(), v(
      "div",
      {
        key: 0,
        class: b(["lc-mark", [`lc-mark--${a.model}`, `lc-mark--${a.size}`, `lc-mark--icon-${a.iconName}`]]),
        tabindex: -1,
        style: $(i.value)
      },
      [
        r("div", {
          class: "lc-mark__wrapper",
          onClick: n
        }, [
          r("div", N, [
            r("img", {
              class: "lc-mark__wrapper__image__img",
              src: o.value,
              alt: " ",
              draggable: "false"
            }, null, 8, y),
            r(
              "span",
              S,
              l(a.label),
              1
              /* TEXT */
            )
          ]),
          r("div", z, [
            h(a.$slots, "default", {}, () => [
              r(
                "span",
                C,
                l(a.value),
                1
                /* TEXT */
              ),
              r(
                "span",
                B,
                l(a.unit),
                1
                /* TEXT */
              )
            ], !0)
          ])
        ])
      ],
      6
      /* CLASS, STYLE */
    )) : w("v-if", !0);
  }
}), I = (e, m) => {
  const t = e.__vccOpts || e;
  for (const [c, o] of m)
    t[c] = o;
  return t;
}, q = /* @__PURE__ */ I(E, [["__scopeId", "data-v-87c3cf8e"]]);
export {
  q as LcMark
};
