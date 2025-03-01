import { defineComponent as I, mergeDefaults as V, useCssVars as X, ref as x, onMounted as G, computed as d, openBlock as o, createElementBlock as s, createVNode as k, createElementVNode as p, Fragment as v, renderList as g, mergeProps as b, resolveDynamicComponent as P, createBlock as A, createCommentVNode as z, unref as D } from "vue";
import F from "./comp/sshzq.js";
import j from "./comp/baoan.js";
import E from "./comp/dapeng.js";
import R from "./comp/futian.js";
import Y from "./comp/guangming.js";
import q from "./comp/longgang.js";
import O from "./comp/luohu.js";
import S from "./comp/pingshan.js";
import T from "./comp/yantian.js";
import W from "./comp/nanshan.js";
import H from "./comp/longhua.js";
import J from "./comp/defines.js";
import K from "./comp/labels2.js";
import Q from "../mark/index2.js";
import { propsRaw as U } from "./props.js";
import { defFloatLevelConfig as Z, szBlockNames as a } from "./const.js";
import ee from "lodash-es/merge";
const re = { class: "lc-szmap-raw" }, le = {
  class: "lc-szmap-raw__svg",
  viewBox: "0 0 922 527",
  version: "1.1"
}, ae = ["id"], oe = {
  id: "页面-2",
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, te = {
  id: "编组-76",
  transform: "translate(4, 0)"
}, ne = {
  id: "编组",
  transform: "translate(0, 35)",
  "fill-rule": "nonzero"
}, se = {
  key: 0,
  class: "lc-szmap-raw__mark-group"
}, Be = /* @__PURE__ */ I({
  __name: "rawMap",
  props: /* @__PURE__ */ V(U, {
    showLabel: !0,
    levels: () => ({}),
    values: () => ({}),
    fillModel: "default",
    rotateX: 0
  }),
  setup(f) {
    X((t) => ({
      "3987c944": N.value,
      e5da9406: $.value
    }));
    const L = {
      [a.光明]: Y,
      [a.宝安]: j,
      [a.龙华]: H,
      [a.南山]: W,
      [a.福田]: R,
      [a.罗湖]: O,
      [a.盐田]: T,
      [a.坪山]: S,
      [a.龙岗]: q,
      [a.大鹏新区]: E,
      [a.深汕合作区]: F
    }, _ = x(0);
    function M(t) {
      const u = f.values[t] ?? { value: 0 }, c = m.value.findIndex(([i, r]) => {
        var h, n;
        return u.value >= ((h = r == null ? void 0 : r.range) == null ? void 0 : h[0]) && u.value <= ((n = r == null ? void 0 : r.range) == null ? void 0 : n[1]);
      }), [e, l] = m.value[c] ?? [];
      return {
        ...u,
        style: {
          "--level-scale": _.value ? (l == null ? void 0 : l.scale) ?? 1 : _.value
        }
      };
    }
    G(() => {
      setTimeout(() => {
        _.value = 1;
      }, 300);
    });
    const B = d(() => ["lc-szmap-raw__block", `visible--${f.fillModel}`]), m = d(() => Object.entries(ee({}, Z, f.levels)));
    function C(t) {
      const u = f.values[t];
      if (!u) return {};
      const c = m.value.findIndex(([h, n]) => {
        var w, y;
        return u.value >= ((w = n == null ? void 0 : n.range) == null ? void 0 : w[0]) && u.value <= ((y = n == null ? void 0 : n.range) == null ? void 0 : y[1]);
      }), [e, l] = m.value[c] ?? [];
      let i = [], r = {};
      return l && e && (i.push("float-active"), typeof l.stop == "string" ? r["--linear-gradient-fill"] = l.stop : r["--linear-gradient-fill"] = `url(#linearGradient-float-${e})`), {
        class: i,
        style: r
      };
    }
    const N = d(() => `rotateX(${f.rotateX}deg)`), $ = d(() => Math.abs(f.rotateX));
    return (t, u) => (o(), s("div", re, [
      (o(), s("svg", le, [
        k(J),
        p("defs", null, [
          (o(!0), s(
            v,
            null,
            g(m.value, ([c, e], l) => (o(), s("linearGradient", {
              key: l,
              id: `linearGradient-float-${c}`
            }, [
              (o(!0), s(
                v,
                null,
                g(e == null ? void 0 : e.stop, (i, r) => (o(), s(
                  "stop",
                  b({ ref_for: !0 }, typeof i == "object" && !Array.isArray(i) ? i : {}, { key: r }),
                  null,
                  16
                  /* FULL_PROPS */
                ))),
                128
                /* KEYED_FRAGMENT */
              ))
            ], 8, ae))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        p("g", oe, [
          p("g", te, [
            p("g", ne, [
              (o(), s(
                v,
                null,
                g(L, (c, e, l) => k(P(c), b({
                  class: B.value,
                  key: l,
                  ref_for: !0
                }, C(e)), null, 16, ["class"])),
                64
                /* STABLE_FRAGMENT */
              )),
              t.showLabel ? (o(), A(K, {
                key: 0,
                labels: t.labels,
                values: t.values
              }, null, 8, ["labels", "values"])) : z("v-if", !0)
            ])
          ])
        ])
      ])),
      t.showLabel ? (o(), s("div", se, [
        (o(), s(
          v,
          null,
          g(L, (c, e) => k(D(Q), b({
            key: e,
            class: ["lc-szmap-raw__mark-group--item", `mark-${e}`],
            ref_for: !0
          }, M(e), { size: "small" }), null, 16, ["class"])),
          64
          /* STABLE_FRAGMENT */
        ))
      ])) : z("v-if", !0)
    ]));
  }
});
export {
  Be as default
};
